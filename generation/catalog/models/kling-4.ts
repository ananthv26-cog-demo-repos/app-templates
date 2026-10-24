import { urls } from "../mappers"
import type { GenerationPlane, ModelEntry, PlatformRequest } from "../types"

function mapKling4(plane: GenerationPlane): PlatformRequest {
  const start = urls(plane, "start")[0]
  const end = urls(plane, "end")[0]
  if (end && !start)
    throw new Error("Add a start frame before using an end frame.")
  const body: Record<string, unknown> = {
    prompt: plane.prompt.text,
    resolution: plane.settings.resolution,
    duration: plane.settings.duration,
  }
  if (start) {
    body.image_url = start
    if (end) body.end_image_url = end
    return { path: "kling-video/v4.0/image-to-video", body }
  }
  body.aspect_ratio = plane.settings.aspectRatio
  return { path: "kling-video/v4.0/text-to-video", body }
}

const kling4: ModelEntry = {
  id: "kling-4",
  surface: "video",
  label: "Kling 4.0",
  roles: { start: 1, end: 1 },
  settings: {
    aspectRatio: {
      type: "enum",
      values: ["16:9", "9:16", "1:1", "21:9", "auto"],
      default: "16:9",
    },
    resolution: { type: "enum", values: ["720p", "1080p"], default: "1080p" },
    duration: { type: "range", min: 3, max: 30, default: 10 },
  },
  icon: "kling",
  order: 29,
  toPlatform: mapKling4,
}

export default kling4
