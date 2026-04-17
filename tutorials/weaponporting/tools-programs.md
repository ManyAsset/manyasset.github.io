# Tools/program

A list of tools and programs you will need to port weapons from all COD games!

Click on the tool/program in the list below to download them.

- AutoDesk Maya (2022+)
- [Saluki](https://github.com/echo000/saluki-releases/releases)
- [Cordycep](https://github.com/Scobalula/Cordycep/releases)
- [CODMayaTools](https://github.com/ManyAsset/CODMayaTools/releases)
- [Cast](https://github.com/dtzxporter/cast/releases)
- [ManyAnims](https://github.com/ManyAsset/ManyAnims/releases)
- [Texture Smith(TS)](https://github.com/echo000/texture_smith)
- [COD4:MW ModTools](https://github.com/ManyAsset/cod4mw-modtools/releases) 
- [ManyWeapons](https://github.com/ManyAsset/ManyWeapons/releases)
- [HydraX](https://github.com/Scobalula/HydraX/releases)
- [ZoneBuilder](https://github.com/iw4x/zonebuilder-wrapper)
- [ZoneTool](https://github.com/Joelrau/zonetool/tree/quak)
- [OpenAssetTools](https://github.com/Laupetin/OpenAssetTools)
- [x64 ZoneTool](https://github.com/Joelrau/x64-zt)
- [BassDrop](https://github.com/ManyAsset/manyasset.github.io/raw/refs/heads/main/tutorials/weaponporting/tools/BassDrop.zip)
- [CascView](https://github.com/ManyAsset/manyasset.github.io/raw/refs/heads/main/tutorials/weaponporting/tools/CascView.zip)

## Setting Up Maya

How to set up Maya ready to port weapons!

### Up axis

How to set-up up axis

- First head to the windows tab at the top, then "Settings/Preferences" > "Preferences".

![windows_settings_preference](images/tools-programs/setting-up-maya/up-axis/windows_settings_preference.jpg)

- Click on "Settings".

![preferences_settigs](images/tools-programs/setting-up-maya/up-axis/preferences_settigs.jpg)

- Select up axis: Z.

![world_coordinate_system_up_axis_z](images/tools-programs/setting-up-maya/up-axis/world_coordinate_system_up_axis_z.jpg)

##

### Import settings

How to set up import settings

- Go to the file tab top left, then click on the box next to "Import...".

![file_import_box_settings](images/tools-programs/setting-up-maya/import-settings/file_import_box_settings.jpg)

- Look for playback options and select "Override to Match Source" for both "Framerate Import" and "Animation Range".

![playback_options_framerate_import_animation_range](images/tools-programs/setting-up-maya/import-settings/playback_options_framerate_import_animation_range.jpg)

- At the bottom of the window you should see "Namespace options", select "Merge into selected namespace and rename incoming objects that match".

![namespace_opstions_merge_into_selected_namespace_rename_incoming_objects_that_match](images/tools-programs/setting-up-maya/import-settings/namespace_opstions_merge_into_selected_namespace_rename_incoming_objects_that_match.jpg)

##

### Timeline speed

How to set timeline speed

- Right click your timeline at the bottom of your screen, head to "Playback Speed" > "Real-time".

![timeline_right_click_playback_speed_real_time](images/tools-programs/setting-up-maya/timeline/timeline_right_click_playback_speed_real_time.jpg)


##

### Legacy Default Viewport

How to enable Legacy Default Viewport

- Head to your maya folder located in your documents folder e.g `Documents/maya/2026`, there you should see a file called
"Maya.env" open it with any text editor *(notepad, np++, VS code)*.

![Maya_env](images/tools-programs/setting-up-maya/viewport-2-0/Maya_env.jpg)

- Once there copy this into to the file and save `MAYA_ENABLE_DEPRECATED_VIEWPORT=1`.

![maya_env_open](images/tools-programs/setting-up-maya/viewport-2-0/maya_env_open.jpg)

- Restart Maya if you have it open, after restarting you should see a setting called "Legacy Default Viewport" in Renderer.

![viewport_2_0](images/tools-programs/setting-up-maya/viewport-2-0/viewport_2_0.jpg)


## Setting Up CODMayaTools (FINISH)

How to install CODMayaTools!

- Download [CODMayaTools](https://github.com/ManyAsset/CODMayaTools/releases) from our github

- Head to your scripts folder located in documents e.g `Documents/maya/2026/scripts`, open the zip and move all files into the scripts folder. If 
you already have a `userSetup.mel` file open it and add `python("import CoDMayaTools");` then save and close.

![codmayatools_move_to_scripts](images/tools-programs/setting-up-maya/codmayatools/codmayatools_move_to_scripts.jpg)

- Restart your Maya if you have it open.

## Setting Up Cast

How to install Cast!

- Download [Cast](https://github.com/dtzxporter/cast/releases) from dtzxporter's github.

- Go to your plug-ins folder e.g `Program Files/Autodesk/Maya2026/bin/plug-ins`, open the zip and move all files into the plug-ins folder.

![cast_move_to_plugins](images/tools-programs/setting-up-maya/cast/cast_move_to_plugins.jpg)

- In Maya go to windows tab at the top, then "Settings/Preferences" > "Plug-in Manager".

![windows_settings_preferences_plugin_manager](images/tools-programs/setting-up-maya/cast/windows_settings_preferences_plugin_manager.jpg)

- Search "cast" and tick "castplugin.py".

![search_cast_tick_castplugin](images/tools-programs/setting-up-maya/cast/search_cast_tick_castplugin.py.jpg)

## Setting Up ManyAnims (FINISH)

How to install ManyAnims!

- Download [ManyAnims](https://github.com/ManyAsset/ManyAnims/releases) from ManyAsset github

- Head to your scripts folder located in documents e.g `Documents/maya/2026/scripts`, open the zip go to the 2023+ folder and move the file into the scripts folder. 

![manyanims_move_to_scripts](images/tools-programs/setting-up-maya/manyanims/manyanims_move_to_scripts.jpg)

- Open your `userSetup.mel` file and add `python("import ManyAnims");` then save and close.

![usersetup_mel_manyanims_import](images/tools-programs/setting-up-maya/manyanims/usersetup_mel_manyanims_import.jpg)

- Restart Maya if you have it open, once maya is open you should see a tab at the top of your screen called "ManyAnims", By default `xanim_export` and `cast` will be enabled.

![manyanims_settings](images/tools-programs/setting-up-maya/manyanims/manyanims_settings.jpg)

## Using Saluki

How to use Saluki!

- Download [Saluki](https://github.com/echo000/saluki-releases/releases) from saluki-releases github

- Move the exe into its own folder.

![unzip_saluki_move_to_folder](images/tools-programs/using-saluki/unzip_saluki_move_to_folder.jpg)

- Run Saluki and head to settings.

![open_saluki_settings](images/tools-programs/using-saluki/open_saluki_settings.jpg)

- There you can select what type of assets you want to export.

![assets_type_export](images/tools-programs/using-saluki/assets_type_export.jpg)


- Settings that I use are exporting all avaliable LODs, image type .TGA and Strip directory from material path. You can check other settings if you wish.

![exporting_all_avaliable_LODs](images/tools-programs/using-saluki/exporting_all_avaliable_LODs.jpg)

![export_image_type_tga](images/tools-programs/using-saluki/export_image_type_tga.jpg)

![strip_directory_from_material_path](images/tools-programs/using-saluki/strip_directory_from_material_path.jpg)

- After you're done with your settings, simply run the game you want to export from and click "Load Game" in Saluki. 

***REMEMBER** if you're porting from a game with ricochet anti-cheat you HAVE to use Cordycep or you will get **banned**!*

![load_game_show](images/tools-programs/using-saluki/load_game_show.jpg)

- You can also preview most to all assets with Saluki by pressing the letter "P" on your keyboard.

![saluki_preview_model](images/tools-programs/using-saluki/saluki_preview_model.jpg)

![saluki_preview_image](images/tools-programs/using-saluki/saluki_preview_image.jpg)

![saluki_preview_sound](images/tools-programs/using-saluki/saluki_preview_sound.jpg)

- *Note: for older COD games, if all their assets don't get loaded you will need to load their IWDs with "Load File" and selecting the IWDs.*

- Once you've exported the assets you wanted, head to the `exported_files` folder in root folder of where Saluki is, there you should see the name of the game you exported from and the assets inside.

![saluki_export_folder_show](images/tools-programs/using-saluki/saluki_export_folder_show.jpg)

## Using Cordycep

How to use Cordycep!

- Download [Cordycep](https://discord.com/invite/eY2Y5p2PEp) from Dest1yo's discord server under the tools channel.

- Move the files into their own folder.

![unzip_cordycep_move_to_folder](images/tools-programs/using-cordycep/unzip_cordycep_move_to_folder.jpg)


### Cordycep (COD: Online)

- Download [Cordycep (COD: Online)](https://github.com/dest1yo/Cordycep-rs-releases/releasess) from Cordycep-rs-releases github


## Using Texture Smith (TS)

How to use Texture Smith (TS)!

- When you run Texture Smith for the first time it will look like this.

![ts_first_open](images/tools-programs/texture-smith/ts_first_open.png)

- You can change the theme of TS by clicking `Dracula` at the bottom right corner, I like Moonfly so I will be show it with that theme from now on, pick whatever you like.

![ts_pick_theme](images/tools-programs/texture-smith/ts_pick_theme.png)

##

### CoD Spec/Gloss (RGB/A Split)

- How to split Specular!

- In TS Select `Spec/Gloss (RGB/A Split)` in the drop down top left.

![ts_spec_gloss_split_setting](images/tools-programs/texture-smith/spec-gloss-split/ts_spec_gloss_split_setting.png)

- Once selected, drag and drop the specular into TS.

![ts_spec_gloss_split_drag_drop](images/tools-programs/texture-smith/spec-gloss-split/ts_spec_gloss_split_drag_drop.png)

- You should see a preview of the converted textures, you can click on the left and right buttons to see both images.

![ts_spec_gloss_split_preview](images/tools-programs/texture-smith/spec-gloss-split/ts_spec_gloss_split_preview.png)

- When you're ready to export your textures pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted textures should export where you imported them from with _s and _g.

![ts_spec_gloss_split_output](images/tools-programs/texture-smith/spec-gloss-split/ts_spec_gloss_split_output.png)

- You can now delete the original packed specular and use the split spec and gloss!

##

### CoD Greyscale XY Normal Map (A/G)

- How to convert Greyscale XY Normal Map!

- In TS Select `CoD Greyscale XY Normal Map (A/G)` in the drop down top left.

![ts_greyscale_yx_normal_map_setting](images/tools-programs/texture-smith/greyscale-xy-normal-map/ts_greyscale_yx_normal_map_setting.png)

- Once selected, drag and drop the specular into TS.

![ts_greyscale_yx_normal_map_drag_drop](images/tools-programs/texture-smith/greyscale-xy-normal-map/ts_greyscale_yx_normal_map_drag_drop.png)

- You should see a preview of the converted texture.

![ts_greyscale_yx_normal_map_preview](images/tools-programs/texture-smith/greyscale-xy-normal-map/ts_greyscale_yx_normal_map_preview.png)

When you're ready to export your texture pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted texture should export where you imported it from with _normal.

![ts_greyscale_yx_normal_map_output](images/tools-programs/texture-smith/greyscale-xy-normal-map/ts_greyscale_yx_normal_map_output.png)

- You can now delete the original normal map and use the converted one!

##

### Detail Map Merger

- How to merger detail map into colour

- In TS Select `Detail Map Merger` in the drop down top left.

![ts_detail_map_merger_setting](images/tools-programs/texture-smith/detail-map-merger/ts_detail_map_merger_setting.png)

- Once selected, drag and drop the colour first then the detail map into TS, next set the Detail Intensity to 0.50.

![ts_detail_map_merger_drag_drop](images/tools-programs/texture-smith/detail-map-merger/ts_detail_map_merger_drag_drop.png)

- You should see a preview of the merged texture.

![ts_detail_map_merger_preview](images/tools-programs/texture-smith/detail-map-merger/ts_detail_map_merger_preview.png)

- When you're ready to export your texture pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted texture should export where you imported it from with _detailed.

![ts_detail_map_merger_output](images/tools-programs/texture-smith/detail-map-merger/ts_detail_map_merger_output.png)

You can now delete the original colour and detail map and use the merged one!

##

### BC5 XY Normal Map

- How to convert yellow XY Normal Map!

- In TS Select `CoD BC5 XY Normal Map` in the drop down top left.

![ts_bct_xy_normal_map_setting](images/tools-programs/texture-smith/bc5-xy-normal-map/ts_bct_xy_normal_map_setting.png)

- Once selected, drag and drop the normal into TS.

![ts_bct_xy_normal_map_drag_drop](images/tools-programs/texture-smith/bc5-xy-normal-map/ts_bct_xy_normal_map_drag_drop.png)

- You should see a preview of the converted texture.

![ts_bct_xy_normal_map_preview](images/tools-programs/texture-smith/bc5-xy-normal-map/ts_bct_xy_normal_map_preview.png)

When you're ready to export your texture pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted texture should export where you imported it from with _normal.

![ts_bct_xy_normal_map_output](images/tools-programs/texture-smith/bc5-xy-normal-map/ts_bct_xy_normal_map_output.png)

- You can now delete the original normal map and use the converted one!

##

### Invert RGB Values

- How to `Invert roughness (gloss/cosine)`

- In TS Select Invert RGB Values in the drop down top left.

![ts_invert_rgb_values_setting](images/tools-programs/texture-smith/invert-rgb-values/ts_invert_rgb_values_setting.png)

- Once selected, drag and drop the gloss into TS.

![ts_invert_rgb_values_drag_drop](images/tools-programs/texture-smith/invert-rgb-values/ts_invert_rgb_values_drag_drop.png)

You should see a preview of the converted texture.

![ts_invert_rgb_values_preview](images/tools-programs/texture-smith/invert-rgb-values/ts_invert_rgb_values_preview.png)

- When you're ready to export your textures pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted textures should export where you imported them from with _inverted.

![ts_invert_rgb_values_output](images/tools-programs/texture-smith/invert-rgb-values/ts_invert_rgb_values_output.png)

- You can now delete the original gloss and use the inverted one!

##

### PBR to Colour/Spec/Gloss

- How to convert Yellow Specular

- In TS Select `Split All Channels (Global)` in the drop down top left.

![ts_split_all_channels_setting](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_split_all_channels_setting.png)

- Once selected, drag and drop the packed specular into TS.

![ts_split_all_channels_yellow_spec](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_split_all_channels_yellow_spec.png)


- You should see a preview of the converted textures, you can click on the left and right buttons to see all images.

![ts_split_all_channels_yellow_spec_preview](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_split_all_channels_yellow_spec_preview.png)


- When you're ready to export your textures pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted textures should export where you imported them from with _r, _g, _b and _a.

![ts_split_all_channels_yellow_spec_output](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_split_all_channels_yellow_spec_output.png)


- Each texture corresponds to a channel _r is red, _g is green, _b is blue and _a is alpha. Red is specular correction (inverted metallic), green is occlusion, blue is nothing and alpha is roughness

- Start by deleting _b as it's nothing, next _g (occlusion) keep this as you can merge it into the colour, if its full white the material doesn't use it, you can delete it. _r (specular correction (inverted metallic)) is your specular and _a (roughness) is your gloss, you will need to invert both of these.

![ts_invert_split_r](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_invert_split_r.png)


![ts_invert_split_a](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_invert_split_a.png)


- Once both are inverted you can delete the original _r and _a.

![ts_pbr_invterd_r_a](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_pbr_invterd_r_a.png)


- In TS Select `PBR to Colour/Spec/Gloss` in the drop down top left.

![ts_pbr_to_col_spec_gloss_setting](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_pbr_to_col_spec_gloss_setting.png)


- Set colour mask to `0.50` and specular mask to `1.00`

![ts_prb_col_spec_mask_options](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_prb_col_spec_mask_options.png)


- Once selected, drag and drop the colour, specular and gloss into TS.

![ts_pbr_to_col_spec_gloss_drag_drop](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_pbr_to_col_spec_gloss_drag_drop.png)


- You should see a preview of the converted textures, you can click on the left and right buttons to see all images.

![ts_pbr_to_col_spec_gloss_preview](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_pbr_to_col_spec_gloss_preview.png)


- When you're ready to export your textures pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- You can now delete the inverted _r and _a and use the converted ones.

![ts_pbr_to_col_spec_gloss_output](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_pbr_to_col_spec_gloss_output.png)


- Unless you're porting this to a game with PBR you can delete the _colour from TS and use the original colour.

- You can now delete the original yellow specular and use the converted ones!

![ts_pbr_to_col_spec_gloss_delete_unused](images/tools-programs/texture-smith/pbr-to-col-spec-gloss/ts_pbr_to_col_spec_gloss_delete_unused.png)

##

### CoD Specular/Albedo (IW/MW)

- How to split Specular and Albedo!

- In TS Select `CoD Specular/Albedo (IW/MW)` in the drop down top left.

![ts_nml_gloss_occ_iw_mw_settings](images/tools-programs/texture-smith/spec-albedo-iw-mw/ts_nml_gloss_occ_iw_mw_settings.png)

- Once selected, drag and drop the packed specular/albedo into TS.

![ts_nml_gloss_occ_iw_mw_drag_drop](images/tools-programs/texture-smith/spec-albedo-iw-mw/ts_nml_gloss_occ_iw_mw_drag_drop.png)

- You should see a preview of the converted textures, you can click on the left and right buttons to see both images.

![ts_nml_gloss_occ_iw_mw_preview](images/tools-programs/texture-smith/spec-albedo-iw-mw/ts_nml_gloss_occ_iw_mw_preview.png)

- When you're ready to export your textures pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted textures should export where you imported them from with _c and _s.

![ts_nml_gloss_occ_iw_mw_output](images/tools-programs/texture-smith/spec-albedo-iw-mw/ts_nml_gloss_occ_iw_mw_output.png)

- You can now delete the original packed specular/albedo and use the split specular and colour!

##

### CoD Normal/Gloss/Occlusion (IW/MW)

- How to split N.G.O (Normal/Gloss/Occlusion)!

- In TS Select `CoD Normal/Gloss/Occlusion (IW/MW)` in the drop down top left.

![ts_nml_gloss_occ_iw_mw_setting](images/tools-programs/texture-smith/nml-gloss-occ-iw-mw/ts_nml_gloss_occ_iw_mw_setting.png)

- Once selected, drag and drop the packed Normal/Gloss/Occlusion into TS.

![ts_nml_gloss_occ_iw_mw_drag_drop](images/tools-programs/texture-smith/nml-gloss-occ-iw-mw/ts_nml_gloss_occ_iw_mw_drag_drop.png)

- You should see a preview of the converted textures, you can click on the left and right buttons to see all images.

![ts_nml_gloss_occ_iw_mw_preview](images/tools-programs/texture-smith/nml-gloss-occ-iw-mw/ts_nml_gloss_occ_iw_mw_preview.png)

- When you're ready to export your textures pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted textures should export where you imported them from with _n, _g and _o.

![ts_nml_gloss_occ_iw_mw_output](images/tools-programs/texture-smith/nml-gloss-occ-iw-mw/ts_nml_gloss_occ_iw_mw_output.png)

- You can now delete the original packed Normal/Gloss/Occlusion and use the split normal, gloss and occlusion!

##

### CoD MW2R Blue Image (S/G/O)

- How to split blue S/G/O (Specular/Gloss/Occlusion)!

- In TS Select `CoD MW2R Blue Image (S/G/O)` in the drop down top left.

![ts_mw2r_blue_image_setting](images/tools-programs/texture-smith/mw2r-blue-image/ts_mw2r_blue_image_setting.png)

- Once selected, drag and drop the packed Specular/Gloss/Occlusion into TS.

![ts_mw2r_blue_image_drag_drop](images/tools-programs/texture-smith/mw2r-blue-image/ts_mw2r_blue_image_drag_drop.png)

- You should see a preview of the converted textures, you can click on the left and right buttons to see all images.

![ts_mw2r_blue_image_preview](images/tools-programs/texture-smith/mw2r-blue-image/ts_mw2r_blue_image_preview.png)

- When you're ready to export your textures pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted textures should export where you imported them from with _s, _g and _o.

![ts_mw2r_blue_image_output](images/tools-programs/texture-smith/mw2r-blue-image/ts_mw2r_blue_image_output.png)

- You can now delete the original packed Specular/Gloss/Occlusion and use the split specular, gloss and occlusion!

##

### CoD WW2 Green Image (S/O/G)

- How to split S/O/G (Specular/Occlusion/Gloss)!

- In TS Select `CoD WW2 Green Image (S/O/G)` in the drop down top left.

![ts_ww2_green_image_setting](images/tools-programs/texture-smith/ww2-green-image/ts_ww2_green_image_setting.png)

- Once selected, drag and drop the packed Specular/Gloss/Occlusion into TS.

![ts_ww2_green_image_drag_drop](images/tools-programs/texture-smith/ww2-green-image/ts_ww2_green_image_drag_drop.png)

- You should see a preview of the converted textures, you can click on the left and right buttons to see all images.

![ts_ww2_green_image_preview](images/tools-programs/texture-smith/ww2-green-image/ts_ww2_green_image_preview.png)

- When you're ready to export your textures pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted textures should export where you imported them from with _s, _o and _g.

![ts_ww2_green_image_output](images/tools-programs/texture-smith/ww2-green-image/ts_ww2_green_image_output.png)

- You can now delete the original packed Specular/Occlusion/Gloss and use the split specular, occlusion and gloss!

##

### CoD WW2 Split Colour/Specular

- How to split Colour/Specular!

- In TS Select `CoD WW2 Split Colour/Specular` in the drop down top left.

![ts_split_col_spec_setting](images/tools-programs/texture-smith/ww2-split-col-spec/ts_split_col_spec_setting.png)

- Once selected, drag and drop the colour and unpacked specular into TS.

![ts_split_col_spec_drag_drop](images/tools-programs/texture-smith/ww2-split-col-spec/ts_split_col_spec_drag_drop.png)

- You should see a preview of the converted textures, you can click on the left and right buttons to see all images.

![ts_split_col_spec_preview](images/tools-programs/texture-smith/ww2-split-col-spec/ts_split_col_spec_preview.png)

- When you're ready to export your textures pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted textures should export where you imported them from with _c and _s.

![ts_split_col_spec_output](images/tools-programs/texture-smith/ww2-split-col-spec/ts_split_col_spec_output.png)

- You can now delete the original colour and unpacked specular and use the new _c and _s

##

### C/S/O Merger

- How to merge Colour, Specular and Occlusion!

- In TS Select `C/S/O Merger` in the drop down top left.

![ts_c_s_o_merger_setting](images/tools-programs/texture-smith/c-s-o-merger/ts_c_s_o_merger_setting.png)

- Once selected, drag and drop the colour, specular and occlusion into TS.

![ts_c_s_o_merger_drag_drop](images/tools-programs/texture-smith/c-s-o-merger/ts_c_s_o_merger_drag_drop.png)

- Set AO Contrast to 1.00 and specular Intensity to 0.50

![ts_c_s_o_merger_options](images/tools-programs/texture-smith/c-s-o-merger/ts_c_s_o_merger_options.png)

- You should see a preview of the converted texture.

![ts_c_s_o_merger_preview](images/tools-programs/texture-smith/c-s-o-merger/ts_c_s_o_merger_preview.png)

- When you're ready to export your texture pick the format you want and click "Save outputs".

![ts_output_format](images/tools-programs/texture-smith/ts_output_format.png)

- Your converted textures should export where you imported them from with _baked.

![ts_c_s_o_merger_output](images/tools-programs/texture-smith/c-s-o-merger/ts_c_s_o_merger_output.png)

- You can now delete the original colour and use the _baked one!

## Installing COD4:MW ModTools

How to install COD4:MW ModTools!


## Using ManyWeapons

How to use ManyWeapons!


## Using HydraX

How to use HydraX!

## Using ZoneBuilder

How to use ZoneBuilder (ZB)!

## Using ZoneTool

How to use ZoneTool (ZT)!

## Using OpenAssetTools

How to use OpenAssetTools (OAT)!

## Using x64 ZoneTool

How to use ZoneTool (x64 ZT)!

## Using BassDrop

How to use BassDrop!

## Using CascView

How to use CascView!