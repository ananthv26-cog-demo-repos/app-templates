import { urls } from "../mappers"
import type { GenerationPlane, ModelEntry, PlatformRequest } from "../types"

function mapKlingO3Reference(plane: GenerationPlane): PlatformRequest {
  const refs = urls(plane, "reference")
  return {
    path: "kling-video/o3/image-reference",
    body: {
      prompt: plane.prompt.text,
      aspect_ratio: plane.settings.aspectRatio,
      duration: plane.settings.duration,
      mode: plane.settings.quality,
      sound: plane.settings.sound ? "on" : "off",
      ...(refs.length ? { image_urls: refs } : {}),
    },
  }
}

const klingO3Reference: ModelEntry = {
  id: "kling-o3-reference",
  surface: "video",
  label: "Kling 3.0 Omni",
  roles: { reference: 7 },
  settings: {
    aspectRatio: {
      type: "enum",
      values: ["16:9", "9:16", "1:1"],
      default: "16:9",
    },
    duration: { type: "range", min: 3, max: 15, default: 5 },
    quality: { type: "enum", values: ["std", "pro", "4k"], default: "std" },
    sound: { type: "boolean", default: true },
  },
  icon: "kling",
  order: 36,
  toPlatform: mapKlingO3Reference,
}

export default klingO3Reference
