var FSM, Uint8ClampedArray;

describe("constructor", function () {
    it("runs with a small screen size", function () {
        FSM = new FullScreenMario.FullScreenMario({
            "width": 512,
            "height": 464
        });

        Uint8ClampedArray = FSM.PixelRender.Uint8ClampedArray;
    });

    it("runs with a large screen size", function () {
        FSM = new FullScreenMario.FullScreenMario({
            "width": 2048,
            "height": 1152
        });

        if (typeof Uint8ClampedArray === "undefined") {
            Uint8ClampedArray = FSM.PixelRender.Uint8ClampedArray;
        }
    });
});

describe("maps", function () {
    var maps = FullScreenMario.FullScreenMario.settings.maps.library,
        map, i, j;

    for (i in maps) {
        map = maps[i];

        describe(map.name, function (map) {
            for (j in map.locations) {
                it("location " + j, function (j) {
                    FSM.setMap(map.name, j);
                }.bind(this, j));
            }
        }.bind(this, map));
    }
});

describe("mods", function () {
    var mods = FullScreenMario.FullScreenMario.settings.mods.mods,
        mod, i;

    describe("enable", function () {
        for (i = 0; i < mods.length; i += 1) {
            mod = mods[i];

            it(mod.name, function (name) {
                FSM.ModAttacher.enableMod(name);
            }.bind(this, mod.name));
        }
    });

    describe("disable", function () {
        for (i = 0; i < mods.length; i += 1) {
            mod = mods[i];

            it(mod.name, function (name) {
                FSM.ModAttacher.disableMod(name);
            }.bind(this, mod.name));
        }
    });
});
