import { t2v, videoModel } from "../defaults"
import type { ModelEntry } from "../types"

const base = videoModel(
  "minimax-hailuo-2.3",
  "MiniMax Hailuo 2.3",
  { start: 1 },
  t2v("minimax/hailuo-2.3/standard/text-to-video"),
  { icon: "minimax", order: 56 }
)

const minimaxHailuo23: ModelEntry = {
  ...base,
  settings: {
    ...base.settings,
    duration: { type: "range", min: 6, max: 10, step: 4, default: 6 },
  },
}

export default minimaxHailuo23
