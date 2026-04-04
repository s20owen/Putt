(() => {
  const pt = (x, y) => ({ x, y });
  const holeAt = (x, y, radius = 12) => ({ x, y, radius });
  const wall = (x, y, width, height, rotation = 0) => ({ x, y, width, height, rotation });
  const arcWall = (cx, cy, radius, thickness = 14, startAngle = 0, endAngle = Math.PI) => ({ type: "arc", cx, cy, radius, thickness, startAngle, endAngle });
  const spin = (x, y, radius = 24) => ({ x, y, radius });
  const bump = (x, y, radius = 24) => ({ x, y, radius });
  const sand = (x, y, radius = 36) => ({ x, y, radius });
  const sandBox = (x, y, width, height) => ({ x, y, width, height });
  const sandRing = (x, y, radius, innerRadius) => ({ x, y, radius, innerRadius });
  const pad = (x, y, width, height, rotation = 0, boost = 1.18) => ({ x, y, width, height, rotation, boost });
  const fan = (x, y, width, height, rotation = 0, streamLength = 260, power = 0.11) => ({ x, y, width, height, rotation, streamLength, power });
  const magnet = (x, y, radius = 32, pulseRadius = 42, strength = 0.18, mode = "pull") => ({ x, y, radius, pulseRadius, strength, mode });
  const teleport = (ax, ay, bx, by, radius = 24, color = "#0ea5e9") => ({ a: { x: ax, y: ay }, b: { x: bx, y: by }, radius, color });
  const shutter = (x, y, width, height, rotation = 0, period = 96, closedFrames = 52, phase = 0) => ({ x, y, width, height, rotation, period, closedFrames, phase });
  const staticShutter = (x, y, width, height, rotation = 0) => ({ x, y, width, height, rotation });
  const rail = (x, y, width, height, rotation = 0) => ({ x, y, width, height, rotation });
  const falseHole = (x, y, radius = 12) => ({ x, y, radius });

  window.CUSTOM_MAPS = [
    {
      id: "Static Luck",
      name: "Static Luck",
      enabled: true,
      difficulties: ["hardcore"],
      modes: ["standard"],
      weight: 1,
      data: {
        name: "Static Luck",
        width: 1600,
        height: 1200,
        par: 10,
        wallThickness: 14,
        ballStart: pt(140, 1060),
        hole: holeAt(1500, 140, 12),
        holeApproach: pt(0, -1),
        walls: [
          wall(-61, 1013, 262, 14, -90),
          wall(159, 1013, 262, 14, -90),
          wall(59, 1133, 242, 14, 0),
          wall(139, 753, 302, 14, 90),
          wall(-81, 753, 302, 14, 90),
          wall(-86, 468, 312, 14, -90),
          wall(244, 578, 92, 14, -90),
          wall(59, 323, 312, 14, 0),
          wall(279, 543, 92, 14, 0),
          wall(334, 543, 212, 14, 180),
          wall(334, 323, 212, 14, 180),
          wall(519, 323, 112, 14, 0),
          wall(519, 543, 112, 14, 0),
          wall(569, 363, 102, 14, 90),
          wall(569, 503, 102, 14, -90),
          wall(609, 403, 232, 14, 0),
          wall(609, 463, 232, 14, 0),
          wall(849, 543, 62, 14, 180),
          wall(849, 323, 62, 14, 180),
          wall(809, 503, 102, 14, -90),
          wall(809, 363, 102, 14, 90),
          wall(809, 463, 62, 14, 180),
          wall(809, 403, 62, 14, 180),
          wall(889, 323, 312, 14, 0),
          wall(889, 543, 92, 14, 0),
          wall(1034, 468, 312, 14, 90),
          wall(924, 578, 92, 14, 90),
          wall(814, 758, 312, 14, 90),
          wall(1144, 648, 92, 14, 90),
          wall(959, 903, 312, 14, 0),
          wall(1179, 683, 92, 14, 0),
          wall(1249, 903, 312, 14, 0),
          wall(1249, 683, 92, 14, 0),
          wall(1394, 758, 312, 14, -90),
          wall(1284, 648, 92, 14, -90),
          wall(1329, 413, 442, 14, 90),
          wall(1109, 413, 442, 14, 90),
          wall(1474, 153, 152, 14, 90),
          wall(1254, 153, 152, 14, 90),
          wall(1319, 88, 242, 14, 180)
        ],
        bumpers: [
          bump(320, 500, 28),
          bump(320, 380, 28)
        ],
        sandTraps: [
          sandBox(913, 355, 95, 171)
        ],
        shutterDoors: [
          shutter(86, 931, 108, 18, 0, 96, 52, 0),
          shutter(166, 831, 108, 18, 0, 96, 52, 0),
          shutter(86, 711, 108, 18, 0, 96, 52, 0),
          shutter(166, 591, 108, 18, 0, 96, 52, 0),
          shutter(86, 451, 108, 18, 0, 96, 52, 0),
          shutter(526, 431, 108, 18, 90, 96, 52, 0),
          shutter(426, 431, 108, 18, 90, 96, 52, 0),
          shutter(1026, 571, 108, 18, 180, 96, 52, 0),
          shutter(1006, 711, 108, 18, 180, 96, 52, 0),
          shutter(1166, 791, 108, 18, 90, 96, 52, 0),
          shutter(1346, 651, 108, 18, 0, 96, 52, 0),
          shutter(1426, 531, 108, 18, 0, 96, 52, 0),
          shutter(1346, 431, 108, 18, 0, 96, 52, 0),
          shutter(1426, 331, 108, 18, 0, 96, 52, 0),
          shutter(1386, 231, 108, 18, 0, 96, 52, 0)
        ],
        falseHoles: [
          falseHole(1380, 140, 12)
        ]
      }
    },

    {
  id: "fafo",
  name: "fafo",
  enabled: true,
  difficulties: ["average","hardcore"],
  modes: ["standard", "daily"],
  weight: 1,
  data: {
    name: "fafo",
    width: 1600,
    height: 1600,
    par: 7,
    wallThickness: 14,
    ballStart: pt(180, 580),
    hole: holeAt(640, 1100, 12),
    holeApproach: pt(0, -1),
    walls: [
      wall(-26, 553, 192, 14, -90),
      wall(194, 553, 192, 14, -90),
      wall(59, 638, 242, 14, 0),
      arcWall(520, 480, 230, 14, 3.142, 7.874),
      arcWall(520, 480, 450, 14, 3.142, 7.874),
      wall(219, 703, 312, 14, 180),
      wall(439, 923, 92, 14, 180),
      wall(74, 848, 312, 14, 90),
      wall(404, 958, 92, 14, 90),
      wall(299, 1133, 302, 14, 90),
      wall(79, 1133, 302, 14, 90),
      arcWall(520, 1280, 70, 14, 1.571, 3.142),
      arcWall(520, 1280, 290, 14, 1.571, 3.142),
      wall(509, 1563, 312, 14, 0),
      wall(509, 1343, 92, 14, 0),
      wall(654, 1418, 312, 14, -90),
      wall(544, 1308, 92, 14, -90),
      wall(679, 1153, 262, 14, 90),
      wall(459, 1153, 262, 14, 90),
      wall(579, 1033, 242, 14, 180),
    ],
    bumpers: [
      bump(280, 180, 28),
      bump(500, 160, 28),
      bump(780, 220, 28),
      bump(820, 480, 28),
      bump(800, 740, 28),
      bump(560, 780, 28),
    ],
    sandTraps: [
      sandBox(328, 739, 104, 203),
    ],
    pads: [
      pad(286, 1042, 108, 156, -90, 3),
      pad(286, 1202, 108, 156, 70, 3),
    ],
    fanZones: [
      fan(144, 348, 112, 64, -70, 260, 0.11),
    ],
    ricochetRails: [
      rail(628, 833, 64, 14, 45),
    ],
  }
},
  
  ];
})();
