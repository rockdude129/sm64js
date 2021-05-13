// Yoshi

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_SWITCH_CASE, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    yoshi_seg5_dl_05022608, yoshi_seg5_dl_05022408, yoshi_seg5_dl_0501D970,
    yoshi_seg5_dl_0501D998, yoshi_seg5_dl_050212B0, yoshi_seg5_dl_05021678,
    yoshi_seg5_dl_050215D8, yoshi_seg5_dl_05021490, yoshi_seg5_dl_05021900,
    yoshi_seg5_dl_05021860, yoshi_seg5_dl_05021718, yoshi_seg5_dl_05021CD8,
    yoshi_seg5_dl_05021B90, yoshi_seg5_dl_050219A0, yoshi_seg5_dl_05021E38,
    yoshi_seg5_dl_050222A8, yoshi_seg5_dl_05022160, yoshi_seg5_dl_05021F70
} from "./model.inc"

import { geo_switch_anim_state } from "../../game/ObjectHelpers"


// 0x0C000468
export const yoshi_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, yoshi_seg5_dl_05022608),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 100, 0, 0, yoshi_seg5_dl_05022408),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 222, 0, 0, null),
                        GEO_OPEN_NODE(),
                            GEO_SWITCH_CASE(2, geo_switch_anim_state),
                            GEO_OPEN_NODE(),
                                GEO_DISPLAY_LIST(LAYER_OPAQUE, yoshi_seg5_dl_0501D970),
                                GEO_DISPLAY_LIST(LAYER_OPAQUE, yoshi_seg5_dl_0501D998),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 76, 49, 0, null),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, yoshi_seg5_dl_050212B0),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 51, 55, 97, null),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, yoshi_seg5_dl_05021678),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 74, 0, 0, yoshi_seg5_dl_050215D8),
                                GEO_OPEN_NODE(),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 69, 0, 0, yoshi_seg5_dl_05021490),
                                GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 51, 55, -97, null),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, yoshi_seg5_dl_05021900),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 74, 0, 0, yoshi_seg5_dl_05021860),
                                GEO_OPEN_NODE(),
                                    GEO_ANIMATED_PART(LAYER_OPAQUE, 69, 0, 0, yoshi_seg5_dl_05021718),
                                GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -1, 27, 95, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, yoshi_seg5_dl_05021CD8),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 100, 0, 0, yoshi_seg5_dl_05021B90),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 95, 0, 0, yoshi_seg5_dl_050219A0),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -89, -62, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, yoshi_seg5_dl_05021E38),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -1, 27, -95, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, yoshi_seg5_dl_050222A8),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 100, 0, 0, yoshi_seg5_dl_05022160),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 95, 0, 0, yoshi_seg5_dl_05021F70),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619756659 - 2021-04-29 18:44:51 -1000
