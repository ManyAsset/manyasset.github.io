# Tools/porgrams

A list of tools and programs you will need to port weapons from all COD games!

Click on the tool/porgram in the list below to downlow them.

- AutoDesk Maya (2023+)
- [Saluki](https://github.com/echo000/saluki-releases/releases)
- [Cordycep](https://github.com/Scobalula/Cordycep/releases)
- [CODMayaTools](https://github.com/ManyAsset/CODMayaTools/releases)
- [Cast](https://github.com/dtzxporter/cast/releases)
- [ManyAnims](https://github.com/ManyAsset/ManyAnims/releases)
- [GameImageUtil (GIU)](https://github.com/Scobalula/GameImageUtil/releases)
- [COD4:MW ModTools](https://github.com/ManyAsset/cod4mw-modtools/releases) 
- [ManyWeapons](https://github.com/ManyAsset/ManyWeapons/releases)
- [HydraX](https://github.com/Scobalula/HydraX/releases)

## Setting Up Maya!
How to set up Maya ready to port weapons.

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

- At the bottom of the window you should see "Namespace options", select "Merge into selected namespace and rename imcoming objects that match".

![namespace_opstions_merge_into_selected_namespace_rename_incoming_objects_that_match](images/tools-programs/setting-up-maya/import-settings/namespace_opstions_merge_into_selected_namespace_rename_incoming_objects_that_match.jpg)

##

### Timeline speed

How to set timeline speed

- Right click your timeline at the bottom of your screen, head to "Playback Speed" > "Real-time".

![timeline_right_click_playback_speed_real_time](images/tools-programs/setting-up-maya/timeline/timeline_right_click_playback_speed_real_time.jpg)


##

### Legacy Default Viewport

How to enable Legacy Default Viewport

- Head to your maya folder located in your douments folder e.g `Documents/maya/2026`, there you should see a file called
"Maya.env" open it with any text editor *(notepad, np++, VS code)*.

![Maya_env](images/tools-programs/setting-up-maya/viewport-2-0/Maya_env.jpg)

- Once there copy this into to the file and save `MAYA_ENABLE_DEPRECATED_VIEWPORT=1`.

![maya_env_open](images/tools-programs/setting-up-maya/viewport-2-0/maya_env_open.jpg)

- Restart Maya if you have it open, after restarting you should see a setting called "Legacy Default Viewport" in Renderer.

![viewport_2_0](images/tools-programs/setting-up-maya/viewport-2-0/viewport_2_0.jpg)


### CODMayaTools (FINISH)

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


## Using Cordycep

How to use Cordycep!


## Using GameImageUtil (GIU)

How to use GameImageUtil (GIU)!


## Installing COD4:MW ModTools

How to install COD4:MW ModTools!


## Using ManyWeapons

How to use ManyWeapons!


## Using HydraX

How to use HydraX!

