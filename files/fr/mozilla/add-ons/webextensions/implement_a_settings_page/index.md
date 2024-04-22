---
title: Ajouter une page de paramètres
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
---

{{AddonSidebar}}

Une page de paramètres donne aux utilisateurs la possiblité de voir et de changer les paramètres (parfois aussi appelée "préférences" ou "options") de l'extension.

Avec les WebExtensions, les paramètres sont généralement stockés en utilisant l'API [`storage`](/fr/Add-ons/WebExtensions/API/storage). L'ajout d'une page de paramètres se fait en trois étapes :

- Écrire un fichier HTML qui affiche les paramètres et permet à l'utilisateur de les changer.
- Écrire un script, inclus depuis le fichier HTML, qui alimente les paramètres depuis le stockage et met à jour les paramètres stockés quand l'utilisateur les change.
- Renseigner le chemin du fichier HTML come clé de [`options_ui`](/fr/Add-ons/WebExtensions/manifest.json/options_ui) dans manifest.json. Ainsi, le document HTML sera affiché dans le gestionnaire d'extension, aux cotés des nom et description de l'extension.

> **Note :** Vous pouvez aussi ouvrir cette page automatiquement en utilisant la fonction [`runtime.openOptionsPage()`](/fr/Add-ons/WebExtensions/API/runtime/openOptionsPage).

## Une WebExtension simple

Tout d'abord, nous allons écrire une extension qui ajoute une bordure bleue à chaque page visitée par l'utilisateur.

Créez un nouveau dossier nommé "settings", dans lequel vous créez un fichier appelé "manifest.json" ayant pour contenu :

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ]
}
```

Les instructions de l'extension charge au navigateur un script de contenu nommé "borderify.js" dans chaque page que l'utilisateur visite.

Ensuite, créez un fichier nomé "borderify.js" dans le dossier "paramètres", et remplissez le comme suit :

```js
document.body.style.border = "10px solid blue";
```

Ça ajoute une bordure bleue à la page.

Maintenant, [installez la WebExtension](/fr-FR/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) et testez la — ouvrez la page que vous voulez :

{{EmbedYouTube("E-WUhihF8fw")}}

## Ajouter des paramètres

Maintenant, créez une page de paramètres pour autoriser l'utilisateur à définire la couleur de la bordure.

D'abord, mettez à jour le contenu de "manifest.json" avec ceci :

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ],

  "options_ui": {
    "page": "options.html"
  },

  "permissions": ["storage"],

  "applications": {
    "gecko": {
      "id": "addon@example.com"
    }
  }
}
```

Vous avez ajoutez trois nouvelles clés :

- [`options_ui`](/fr/Add-ons/WebExtensions/manifest.json/options_ui): Cela définit un document HTML comme étant la page de paramètres (aussi appelée page d'options) pour cette extension.
- [`permissions`](/fr/Add-ons/WebExtensions/manifest.json/permissions): Vous allez utilisez l'API [`storage`](/fr/Add-ons/WebExtensions/API/storage) pour stocker les paramètres, vous devez donc demander la permission d'utiliser cette API.
- `applications`: Vous devez inclure un identifiant d'extension afin d'enregistrer et de récupérer les paramètres du stockage synchronisé.

Ensuite, puisque vous avez promis de fournir "options.html", créons-le. Créez un fichier avec ce nom dans le répertoire "settings", et donnez-lui le contenu suivant :

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <form>
      <label>Border color<input type="text" id="color" /></label>
      <button type="submit">Save</button>
    </form>

    <script src="options.js"></script>
  </body>
</html>
```

Cela définit un {{htmlelement("form")}} avec un label de texte {{htmlelement("input")}} et un {{htmlelement("button")}} de type "submit". Ça inclus également un script appelé "options.js".

Créez "options.js", lui-aussi dans le dossier "settings", et remplissez le comme ceci :

```js
function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    color: document.querySelector("#color").value,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
```

Cela fait deux choses :

- Quand le document a été chargé, le script attribue une valeur à "color" depuis le stockage grâce à [`storage.sync.get()`](/fr/Add-ons/WebExtensions/API/storage/StorageArea/get). Si la valeur n'est pas renseignée, il utilise par défaut "blue". Ceci récupère les valeurs de la zone de stockage de `synchronisation`.
- Quand l'utilisateur valide le formulaire en cliquant sur "Save", le script stocke la valeur de textbox en utilisant [`storage.sync.set()`](/fr/Add-ons/WebExtensions/API/storage/StorageArea/set). Ceci permet d'enregistrer la valeur dans la zone de stockage de `synchronisation`.

Vous pouvez stocker les valeurs des paramètres dans le stockage local à la place si vous pensez que le stockage local est préférable pour votre extension.

> **Note :** L'implémentation de `storage.sync` dans Firefox repose sur l'ID du module complémentaire. Si vous utilisez `storage.sync`, vous devez définir un ID pour votre extension à l'aide de la clé manifest.json des [`applications`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) comme indiqué dans l'exemple de manifeste ci-dessus.

Finalement, mettez à jour "borderify.js" pour lire la couleur de la bordure depuis le stockage :

> **Attention :** A cause d'un bug dans [browser.storage.local.get()](/fr/Add-ons/WebExtensions/API/storage/StorageArea/get) dans Firefox pour les versions précédant la 52, le code qui suit ne fonctionnera pas. Pour le faire fonctionner pour les versions de Firefox avant la 52, les deux occurrences d'`item.color` dans `onGot()` doivent être changer pour `item[0].color`.

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  var color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.border = "10px solid " + color;
}

var getting = browser.storage.sync.get("color");
getting.then(onGot, onError);
```

A ce moment, l'extension complète devrait ressembler à ceci :

```
settings/
    borderify.js
    manifest.json
    options.html
    options.js
```

Maintenant :

- [Rechargez la WebExtension](/fr-FR/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on)
- Chargez un page web
- Ouvrez la page de paramètres et changez la couleur de la bordure
- Rechargez la page pour voir la différence

Dans Firefox vous pouvez accéder à la page des paramètres en visitant about:addons et en cliquant le bouton "Preferences" situé à coté de l'extension.

{{EmbedYouTube("ECt9cbWh1qs")}}

## Pour aller plus loin

- [`options_ui`](/fr/Add-ons/WebExtensions/manifest.json/options_ui) documentation de référence sur les clés de manifest
- [`storage`](/fr/Add-ons/WebExtensions/API/storage) documentation de référence sur l'API
- Ouvrez la page de paramètres directement depuis votre extension en utilisant l'API [`runtime.openOptionsPage()`](/fr/Add-ons/WebExtensions/API/runtime/openOptionsPage)
- Exemple de page de paramètres :

  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour)
