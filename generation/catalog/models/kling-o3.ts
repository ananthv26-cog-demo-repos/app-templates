import { videoModel } from "../defaults"
import type { ModelEntry } from "../types"

const klingO3: ModelEntry = {
  ...videoModel(
    "kling-o3",
    "Kling O3",
    { start: 1, end: 1 },
    { firstLast: "kling-video/o3/first-last-frame" },
    { icon: "kling", order: 61 }
  ),
  requiredRoles: ["start"],
}

export default klingO3
