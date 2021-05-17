// Thi - uncharted territory, still havent fixed this up for level loading yet. - Agent X

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND_COLOR,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_RENDER_OBJ,
    GEO_ASM, GEO_END,
    LAYER_TRANSPARENT, LAYER_OPAQUE, LAYER_ALPHA
} from "../../../../engine/GeoLayout"

import { thi_seg7_dl_07009F58 } from "./4/model.inc"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E00079C
export const thi_geo_00079C = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND_COLOR(0x0001),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 100, 12800, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(16, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_DISPLAY_LIST(LAYER_TRANSPARENT, thi_seg7_dl_07007C20),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, thi_seg7_dl_07009670),
                    GEO_DISPLAY_LIST(LAYER_OPAQUE, thi_seg7_dl_07009D50),
                    GEO_DISPLAY_LIST(LAYER_ALPHA, thi_seg7_dl_07009F58),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1621007118 - 2021-05-15 11:25:19 -0400
