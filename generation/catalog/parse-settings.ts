import type { ModelEntry, SettingField } from "./types"

type RangeField = Extract<SettingField, { type: "range" }>

export function parseSettings(
  model: ModelEntry,
  raw: Record<string, unknown>
): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const [key, field] of Object.entries(model.settings)) {
    const value = raw[key]
    if (field.type === "enum") {
      const picked = typeof value === "string" ? value : field.default
      if (!field.values.includes(picked)) throw new Error(`Invalid ${key}`)
      out[key] = picked
      continue
    }
    if (field.type === "range") {
      const picked = typeof value === "number" ? value : field.default
      if (picked < field.min || picked > field.max || !onStep(field, picked))
        throw new Error(`Invalid ${key}`)
      out[key] = picked
      continue
    }
    out[key] = typeof value === "boolean" ? value : field.default
  }
  return out
}

function onStep(field: RangeField, value: number): boolean {
  const step = field.step ?? 1
  return (
    Math.abs(
      (value - field.min) / step - Math.round((value - field.min) / step)
    ) < 1e-9
  )
}

// Settings persisted by an older catalog may fall outside the current field;
// snap them to the nearest valid value so the UI and the request agree.
export function coerceSettings(
  model: ModelEntry,
  raw: Record<string, unknown>
): Record<string, unknown> {
  const out: Record<string, unknown> = { ...raw }
  for (const [key, field] of Object.entries(model.settings)) {
    const value = raw[key]
    if (field.type === "enum") {
      if (typeof value === "string" && !field.values.includes(value))
        out[key] = field.default
    } else if (field.type === "range" && typeof value === "number") {
      const step = field.step ?? 1
      const clamped = Math.min(field.max, Math.max(field.min, value))
      out[key] = field.min + Math.round((clamped - field.min) / step) * step
    }
  }
  return out
}
