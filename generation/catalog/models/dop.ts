import { videoModel } from "../defaults"
import type { ModelEntry } from "../types"

const dop: ModelEntry = {
  ...videoModel(
    "dop",
    "DoP",
    { start: 1 },
    { image: "higgsfield-ai/dop/lite" },
    {
      icon: "higgsfield",
      order: 67,
    }
  ),
  requiredRoles: ["start"],
}

export default dop
