# Per-game

Here you will find porting tips for each game!

## COD1/UO (iw)

- Load all IWDs to extract assets
- Rig converter (iw rig)
- Sound Aliases | `pak1.pk3` (soundaliases/iw_sound.csv)

## COD2 (iw2)

- Load all IWDs to extract assets
- Rig converter (iw2 rig)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- ConvertNormal | **GIU**: CoD Greyscale XY Normal Map w/ Alpha (MW/WaW/MW2/MW3/BO1)
- Sound Aliases | `iw_06.iwd` (soundaliases/iw_sound2.csv)

## COD4 (iw3)

- Rig converter (fix j_webbing)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- ConvertNormal | **GIU**: CoD Greyscale XY Normal Map w/ Alpha (MW/WaW/MW2/MW3/BO1)
- Sound Aliases | COD4 Mod Tools (raw/soundaliases/common.csv)

## WAW (t4)

- Rig converter (fix j_webbing)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- ConvertNormal | **GIU**: CoD Greyscale XY Normal Map w/ Alpha (MW/WaW/MW2/MW3/BO1)
- Sound Aliases | WAW Mod Tools (raw/soundaliases/weapons.csv) 

## MW2 (iw4)
- photoshop (detail map)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- ConvertNormal | **GIU**: CoD Greyscale XY Normal Map w/ Alpha (MW/WaW/MW2/MW3/BO1)
- Sound Aliases | **ZB**: Dump `localized_common_mp` (userraw/dump/localized_common_mp/sounds)

## BO1 (t5)

- photoshop (detail map)
- Rig converter (fix j_webbing)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- ConvertNormal | **GIU**: CoD Greyscale XY Normal Map w/ Alpha (MW/WaW/MW2/MW3/BO1)
- Invert roughness (gloss/cosine)
- Sound Aliases | BO1 Mod Tools (raw/soundaliases/zones/mpl_common.all.csv)

## MW3 (iw5)

- photoshop (detail map)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- ConvertNormal | **GIU**: CoD Greyscale XY Normal Map w/ Alpha (MW/WaW/MW2/MW3/BO1)
- Sound Aliases | **ZT**: Dump `localized_common_mp` (dump/localized_common_mp/sounds)

## FW (nx1)

- photoshop (detail map)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- Converter Normal | **GIU**: XY Normal Map (BC5 Grey/Yellow w/ No Alpha) (Modern Games/Global)

## BO2 (t6)

- Rig converter (fix j_webbing)
- Converter Normal | **GIU**: XY Normal Map (BC5 Grey/Yellow w/ No Alpha) (Modern Games/Global)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- Attachment locations | **OAT**: "attachviewModelOffsetXX" Convert value from Inches to CM
- Sound Aliases | **OAT**: Dump `common_mp` (zone_dump/zone_raw/common_mp/soundbank/mpl_common.all.aliases.csv)

## Ghosts (iw6)

- Blend Fire and Settle anims
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- Converter Normal | **GIU**: XY Normal Map (BC5 Grey/Yellow w/ No Alpha) (Modern Games/Global)
- Sub-D mesh (most to all weapons)
- Sound Aliases | **x64 ZT**: Dump `common_mp` (dump/common_mp/sounds)

## COD:Online (codo)

- photoshop (detail map)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- ConvertNormal | **GIU**: CoD Greyscale XY Normal Map w/ Alpha (MW/WaW/MW2/MW3/BO1)

## AW (s1)

- Blend Fire and Settle anims
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- Sub-D mesh (some weapons)
- Sound Aliases | **x64 ZT**: Dump `common_mp` (dump/common_mp/sounds)

## BO3 (t7)

- Rig converter (t7 rig)
- Attachment locations | **HydraX**: "attachviewModel1" (tag pos x 2.54 = tag pos)
- Sound Aliases | **HydraX**: Dump `mp_common` (exported_files/Black Ops III/sound/zone/zm_common.all.alias.csv)

## IW (iw7)

- Rig converter (iw7 rig)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- Split N.O.G | **GIU**: Normal/Gloss/Occlusion (Infinite Warfare/Modern Warfare)
- Sound Aliases | **x64 ZT**: Dump `common_mp` (dump/common_mp/sound/common_mp.all.aliases.csv)

## MWR (h1)

- Blend Fire and Settle anims (Some DLC wpns)
- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- Sound Aliases | **x64 ZT**: Dump `common_mp` (dump/common_mp/sounds)

## WW2 (s2)

- Blend Fire and Settle anims
- Rig converter (iw7 rig)
- Split S.G.O | **GIU**: CoD S/G/O (Green Image) (World War II)
- Split S/A | **GIU**: CoD Specular/Albedo (World War II)

## BO4 (t8)

- Rig converter (t8 rig)

## MW19 (iw8)

- Rig converter (iw7 rig)
- Split S/A | **GIU**: CoD Specular/Albedo (Infinite Warfare/Modern Warfare)
- Split N.O.G | **GIU**: Normal/Gloss/Occlusion (Infinite Warfare/Modern Warfare)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- WarZone | All WZ assets still exist (iw8, t9 and s4)
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## MW2:CR (h2)

- Split Specular | **GIU**: CoD Spec/Gloss (RGB/A)(Multiple CoDs)
- Split S.G.O | **GIU**: CoD S/G/O (Blue Image) (Modern Warfare 2 Remastered)
- Sound Aliases | **x64 ZT**: Dump `common` (dump/common/sounds)

## BO:CW (t9)

- Rig converter (t9 rig)
- Invert roughness (gloss/cosine)
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## Vanguard (s4)

- Rig converter (iw7 rig)
- Split S/A | **GIU**: CoD Specular/Albedo (Infinite Warfare/Modern Warfare)
- Split N.O.G | **GIU**: Normal/Gloss/Occlusion (Infinite Warfare/Modern Warfare)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## MW22 (iw9)

- Rig converter (iw7 rig)
- Split S/A | **GIU**: CoD Specular/Albedo (Infinite Warfare/Modern Warfare)
- Split N.O.G | **GIU**: Normal/Gloss/Occlusion (Infinite Warfare/Modern Warfare)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## MW23 (jup)

- Rig converter (iw7 rig)
- Split S/A | **GIU**: CoD Specular/Albedo (Infinite Warfare/Modern Warfare)
- Split N.O.G | **GIU**: Normal/Gloss/Occlusion (Infinite Warfare/Modern Warfare)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## BO6 (t10)

- Rig converter (iw7 rig)
- Split S/A | **GIU**: CoD Specular/Albedo (Infinite Warfare/Modern Warfare)
- Split N.O.G | **GIU**: Normal/Gloss/Occlusion (Infinite Warfare/Modern Warfare)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS

## BO7 (sat)

- Rig converter (iw7 rig)
- Split S/A | **GIU**: CoD Specular/Albedo (Infinite Warfare/Modern Warfare)
- Split N.O.G | **GIU**: Normal/Gloss/Occlusion (Infinite Warfare/Modern Warfare)
- Sound Banks | **Saluki**: "Load Sound Banks" Setting
- 60 FPS Animations | Check if the anim is 30 or 60 FPS