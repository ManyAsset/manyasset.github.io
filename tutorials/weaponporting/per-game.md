# Per-game

Here you will find porting tips for each game!

## COD1/UO (iw)

- Load all IWDs to extract assets
- Rig converter (iw rig)
- Sound Aliases | `pak1.pk3` (soundaliases/iw_sound.csv)

## COD2 (iw2)

- Load all IWDs to extract assets
- Rig converter (iw2 rig)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Convert Normal | **TS**: [CoD Greyscale XY Normal Map (A/G)](tools-programs#cod-greyscale-xy-normal-map-a-g)
- Sound Aliases | `iw_06.iwd` (soundaliases/iw_sound2.csv)

## COD4 (iw3)

- Rig converter (fix j_webbing)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Convert Normal | **TS**: [CoD Greyscale XY Normal Map (A/G)](tools-programs#cod-greyscale-xy-normal-map-a-g)
- Sound Aliases | `COD4 Mod Tools` (raw/soundaliases/common.csv)

## WAW (t4)

- Rig converter (fix j_webbing)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Convert Normal | **TS**: [CoD Greyscale XY Normal Map (A/G)](tools-programs#cod-greyscale-xy-normal-map-a-g)
- Sound Aliases | `WAW Mod Tools` (raw/soundaliases/weapons.csv)
- Custom Sprints | iw7 Default Sprints

## MW2 (iw4)
- Detail Map | **TS**: [Detail Map Merger](tools-programs#detail-map-merger)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Convert Normal | **TS**: [CoD Greyscale XY Normal Map (A/G)](tools-programs#cod-greyscale-xy-normal-map-a-g)
- Sound Aliases | **ZB**: Dump `localized_common_mp` (userraw/dump/localized_common_mp/sounds)

## BO1 (t5)

- Detail Map | **TS**: [Detail Map Merger](tools-programs#detail-map-merger)
- Rig converter (fix j_webbing)
- Yellow Specular | **TS**: [PBR to Colour/Spec/Gloss](tools-programs#pbr-to-colour-spec-gloss)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Convert Normal | **TS**: [CoD Greyscale XY Normal Map (A/G)](tools-programs#cod-greyscale-xy-normal-map-a-g)
- Invert roughness (gloss/cosine) | **TS**: [Invert RGB Values](tools-programs#invert-rgb-values)
- Sound Aliases | `BO1 Mod Tools` (raw/soundaliases/zones/mpl_common.all.csv)
- Sounds | **BassDrop**

## MW3 (iw5)

- Detail Map | **TS**: [Detail Map Merger](tools-programs#detail-map-merger)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Convert Normal | **TS**: [CoD Greyscale XY Normal Map (A/G)](tools-programs#cod-greyscale-xy-normal-map-a-g)
- Sound Aliases | **ZT**: Dump `localized_common_mp` (dump/localized_common_mp/sounds)

## FW (nx1)

- Detail Map | **TS**: [Detail Map Merger](tools-programs#detail-map-merger)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Converter Normal | **TS**: [BC5 XY Normal Map](tools-programs#bc5-xy-normal-map)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting

## BO2 (t6)

- Rig converter (fix j_webbing)
- Converter Normal | **TS**: [BC5 XY Normal Map](tools-programs#bc5-xy-normal-map)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Attachment locations | **OAT**: "attachviewModelOffsetXX" Convert value from Inches to CM
- Sound Aliases | **OAT**: Dump `common_mp` (zone_dump/zone_raw/common_mp/soundbank/mpl_common.all.aliases.csv)

## Ghosts (iw6)

- Blend Fire and Settle anims
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Converter Normal | **TS**: [BC5 XY Normal Map](tools-programs#bc5-xy-normal-map)
- Sub-D mesh (most to all weapons)
- Sound Aliases | **x64 ZT**: Dump `common_mp` (dump/common_mp/sounds)

## COD:Online (codo)

- Detail Map | **TS**: [Detail Map Merger](tools-programs#detail-map-merger)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Convert Normal | **TS**: [CoD Greyscale XY Normal Map (A/G)](tools-programs#cod-greyscale-xy-normal-map-a-g)

## AW (s1)

- Blend Fire and Settle anims
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Convert Normal | **TS**: [BC5 XY Normal Map](tools-programs#bc5-xy-normal-map)
- Sub-D mesh (some weapons)
- Sound Aliases | **x64 ZT**: Dump `common_mp` (dump/common_mp/sounds)

## BO3 (t7)

- Rig converter (t7 rig)
- Convert Normal | **TS**: [BC5 XY Normal Map](tools-programs#bc5-xy-normal-map)
- Attachment locations | **HydraX**: "attachviewModel1" (tag pos x 2.54 = tag pos)
- Sound Aliases | **HydraX**: Dump `mp_common` (exported_files/Black Ops III/sound/zone/zm_common.all.alias.csv)

## IW (iw7)

- Rig converter (iw7 rig)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Split N.O.G | **TS**: Normal/Gloss/Occlusion (IW/MW)
- Sound Aliases | **x64 ZT**: Dump `common_mp` (dump/common_mp/sound/common_mp.all.aliases.csv)

## MWR (h1)

- Blend Fire and Settle anims (Some DLC wpns)
- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Convert Normal | **TS**: [BC5 XY Normal Map](tools-programs#bc5-xy-normal-map)
- Sound Aliases | **x64 ZT**: Dump `common_mp` (dump/common_mp/sounds)

## WW2 (s2)

- Blend Fire and Settle anims
- Rig converter (iw7 rig)
- Split S.G.O | **TS**: CoD WW2 Green Image (S/O/G Split)
- Split S/A | **TS**: CoD WW2 Split Colour/Specular

## BO4 (t8)

- Rig converter (t8 rig)
- Convert Normal | **TS**: [BC5 XY Normal Map](tools-programs#bc5-xy-normal-map)
- Sabl/Sabs | **CascView**

## MW19 (iw8)

- Rig converter (iw7 rig)
- Split S/A | **TS**: CoD Specular/Albedo (IW/MW)
- Split N.O.G | **TS**: Normal/Gloss/Occlusion (IW/MW)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- WarZone | All WZ assets still exist (iw8, t9 and s4)
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## MW2:CR (h2)

- Split Specular | **TS**: [CoD Spec/Gloss (RGB/A Split)](tools-programs#cod-spec-gloss-rgb-a-split)
- Split S.G.O | **TS**: CoD S/G/O (Blue Image) (Modern Warfare 2 Remastered)
- Sound Aliases | **x64 ZT**: Dump `common` (dump/common/sounds)

## BO:CW (t9)

- Rig converter (t9 rig)
- Convert Normal | **TS**: [BC5 XY Normal Map](tools-programs#bc5-xy-normal-map)
- Invert roughness (gloss/cosine) | **TS**: [Invert RGB Values](tools-programs#invert-rgb-values)
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## Vanguard (s4)

- Rig converter (iw7 rig)
- Split S/A | **TS**: CoD Specular/Albedo (IW/MW)
- Split N.O.G | **TS**: Normal/Gloss/Occlusion (IW/MW)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## MW22 (iw9)

- Rig converter (iw7 rig)
- Split S/A | **TS**: CoD Specular/Albedo (IW/MW)
- Split N.O.G | **TS**: Normal/Gloss/Occlusion (IW/MW)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## MW23 (jup)

- Rig converter (iw7 rig)
- Split S/A | **TS**: CoD Specular/Albedo (IW/MW)
- Split N.O.G | **TS**: Normal/Gloss/Occlusion (IW/MW)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## BO6 (t10)

- Rig converter (iw7 rig)
- Split S/A | **TS**: CoD Specular/Albedo (IW/MW)
- Split N.O.G | **TS**: Normal/Gloss/Occlusion (IW/MW)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## BO7 (sat)

- Rig converter (iw7 rig)
- Split S/A | **TS**: CoD Specular/Albedo (IW/MW)
- Split N.O.G | **TS**: Normal/Gloss/Occlusion (IW/MW)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS