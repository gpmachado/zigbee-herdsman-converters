import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["5991711", "5991713"],
        model: "C5850000",
        vendor: "Villeroy & Boch",
        description: "Subway 3.0 Zigbee home automation kit",
        extend: [m.light({colorTemp: {range: [160, 450]}})],
    },
    {
        zigbeeModel: ["EC1300"],
        model: "C0040000",
        vendor: "Villeroy & Boch",
        description: "Zigbee home automation kit for mirror",
        extend: [m.light({colorTemp: {range: [160, 450]}})],
    },
];
