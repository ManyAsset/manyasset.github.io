# Moving Camo

In this tutorial, you will learn how to create a moving camo. You will need the following tools and files:

- Mod Tools
- A text editor (such as Notepad++)
- A weapon file (such as `weapons/mp/deserteagle_mp`)
- An xmodel file for the weapon's viewmodel and worldmodel (such as `viewmodel_desert_eagle` and `weapon_desert_eagle_silver`)
- A material file for the camo texture (such as `mtl_sera_deagle`)
- A .gdt file for the material properties (such as `z_eagle_shader.gdt`)
- A mod.csv file for compiling the mod

You can download the example files from the attachments below.

## Modify stock xmodels

The first step is to copy and rename the xmodel files for the weapon's viewmodel and worldmodel. The viewmodel is the weapon model that you see in first-person view, and the worldmodel is the weapon model that you see in third-person view or on the ground.

- Open the weapon file in a text editor. You can find the existing weapon file in `weapons/mp/<weapon_mp>`. For example, the weapon file for the Desert Eagle is `weapons/mp/deserteagle_mp`.
- Search for `gunmodel` and you will find the name of the xmodel file for the viewmodel. For example, the viewmodel for the Desert Eagle is `viewmodel_desert_eagle`.
- Open your Mod Tools and search for that xmodel file in `raw/xmodel`. Copy this xmodel file and create a new folder in your mod with the same name `xmodel`.
- Rename the xmodel file to something like `vm_deagle`. This will be your new viewmodel file.
- Search for `worldmodel` in the weapon file and you will find the name of the xmodel file for the worldmodel. For example, the worldmodel for the Desert Eagle is `weapon_desert_eagle_silver`.
- Copy this xmodel file from `raw/xmodel` in your mod `xmodel` folder you created above.
- Rename this xmodel file to anything. But I am here renaming it to `wm_deagle`. This will be your new worldmodel file.
- Open your weapon file and replace the `gunmodel` with the name of your new viewmodel file. In my case, I named it as `vm_deagle`.
- Replace the `viewmodel` with the name of your new worldmodel file. In my case, I named it as `wm_deagle`.

## Creating the material file

The second step is to create and apply the material file for the camo texture. The material file defines the properties of the texture, such as the color, the blend mode, and the animation.

- Open your Asset Manager and create a new file and save it. Then create a new material.
- Name it something whatever you want. I am naming it as `mtl_sera_deagle`.
- Apply these properties:

```
materialType: model phong
surfaceType: none
blendFunc: Replace/Blend
```

- Choose your texture in `colorMap`. And scroll down then you will find `Texture Scroll`.
- This `Texture Scroll` makes your texture animate on your gun. If you don't check it then it will simply create a plain texture.
- Save your material file and close the Asset Manager.

## Replace the material

The third and final step is to target the material file to the xmodel files you created in the first step. This will make the camo texture appear on the weapon model.

- Edit your viewmodel xmodel file in a text editor. And replace the string `mtl_weapon_desert_eagle_silver` to your material name which is in my case is `mtl_sera_deagle`.
- Edit your worldmodel xmodel file in a text editor. And replace the string `mtl_weapon_desert_eagle_silver` to your material name which is in my case is `mtl_sera_deagle`.
- Save your xmodel files and close the text editor.

## Compiling the mod

The last step is to compile and run the mod. This will make the weapon with the moving camo available in the game.

- Open your mod.csv file and add your xmodel and material files to the list. For example:

```
xmodel,vm_deagle
xmodel,wm_deagle
material,mtl_sera_deagle
```

- Save your mod.csv file and close it.
- Open your Launcher and compile your mod. Then launch the game and select your mod.
- Boom! You have finally created an animated texture without changing the stock weapon.

## How to repeat the process for other weapons

You can repeat the same steps as above for other weapons. Just change the name of your viewmodel, worldmodel, and material files to something else to avoid conflict. You can also use different textures and properties for the material file.

You can use the .gdt file for reference. It contains the material properties for 16 different camo textures. You can check the texture names in the .gdt file I put here above.

<profile username="Seraphina" handle="__seraphina__" profileImage="./profile/seraphina.png"/>