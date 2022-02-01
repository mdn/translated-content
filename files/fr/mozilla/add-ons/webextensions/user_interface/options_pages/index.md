---
title: Options page
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
---
{{AddonSidebar}}

Une page Option vous permet de définir des préférences pour votre WebExtension que vos utilisateurs peuvent modifier. Les utilisateurs peuvent accéder à la page d'options de l'extension à partir du gestionnaire des add-ons du navigateur:

{{EmbedYouTube("eODy24csH5M")}}

La façon dont les utilisateurs accèdent à la page et la manière dont elle est intégrée à l'interface utilisateur du navigateur varient d'un navigateur à l'autre.

Vous pouvez ouvrir la page en programmant en appelant  [`runtime.openOptionsPage()`](/fr/Add-ons/WebExtensions/API/Runtime/openOptionsPage).

Les pages d'options ont une politique de sécurité de contenu qui restreint les sources à partir de laquelle elles peuvent charger des ressources et interdit certaines pratiques dangereuses telles que l'utilisation [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval). Voir la [politique de sécurité de contenu](/fr/Add-ons/WebExtensions/Content_Security_Policy) pour plus de détails.

## Spécification de la page d'options

Pour créer une page d'options, écrivez un fichier HTML définissant la page. Cette page peut inclure des fichiers CSS et JavaScript, comme une page Web normale. Cette page, contine un exemple dans [favourite-colour](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour), comprend un fichier :

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
  </head>

<body>
  <form>
      <label>Favourite colour</label>
      <input type="text" id="colour" >
      <button type="submit">Save</button>
  </form>
  <script src="options.js"></script>
</body>

</html>
```

JavaScript en cours d'exécution dans la page peut utiliser toutes les [APIs des WebExtension](/fr/Add-ons/WebExtensions/API) auxquelles l'extension a des [permissions](/fr/Add-ons/WebExtensions/manifest.json/permissions). En particulier, vous pouvez utiliser l'API [`storage`](/fr/Add-ons/WebExtensions/API/Storage) pour conserver les préférences.

Insérez les fichiers de la page dans votre extension.

Vous devez également inclure une clé [`options_ui`](/fr/Add-ons/WebExtensions/manifest.json/options_ui) dans votre fichier manifest.json, en lui donnant l'URL de la page.

```json
"options_ui": {
  "page": "options.html",
  "browser_style": true
},
```

> **Note :** **Google Chrome** et **Opera** utilisent `chrome_style` au lieu de `browser_style`, donc si vous souhaitez les prendre en charge, vous devez ajouter les deux clés.

Voir la page [`options_ui`](/fr/Add-ons/WebExtensions/manifest.json/options_ui) pour les **options de partage** entre votre page d'options et les scripts d'arrière-plan ou de contenu.

## Options de conception de contenu

Pour plus de détails sur la façon de concevoir le contenu de vos options en fonction du style de Firefox, voir le [system de conception Photon](https://design.firefox.com/photon/index.html) et les [styles de navigateur](/fr/Add-ons/WebExtensions/user_interface/Browser_styles) documentation.

## Exemples

Le depot [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples de WebExtensions qui utilisent les options de page :

- [favourite-colour](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour) utilise les options de page
