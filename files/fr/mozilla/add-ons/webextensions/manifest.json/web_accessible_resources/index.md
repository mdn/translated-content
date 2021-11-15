---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Tableau</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"web_accessible_resources": [
  "images/my-image.png"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## Description

Parfois, vous souhaitez associer certaines ressources - par exemple, images, HTML, CSS ou JavaScript - avec votre extension pour les mettre à la disposition des pages Web.

Par exemple, l'[extensions d'exemple "beastify"](https://github.com/mdn/webextensions-examples/tree/master/beastify) remplace une page web par une image d'une bête sélectionnée par l'utilisateur. Les images de la bête sont emballées avec l'extension. Pour rendre visible l'image sélectionnée, l'extension ajoute  [`<img>`](/fr/docs/Web/HTML/Element/img) des éléments dont l'attribut `src` pointe sur l'image de la bête. Pour que la page Web puisse charger les images, elles doivent être rendues accessibles sur le Web.

Avec la clé `web_accessible_resources` liste toutes les ressources packagées que vous souhaitez mettre à la disposition des pages Web. Vous les spécifiez comme chemins relatifs dans le fichier manifest.json.

Notez que les scripts de contenu n'ont pas besoin d'être listés comme ressources accessibles sur le Web.

Si une extension veut utiliser {{WebExtAPIRef("webRequest")}}} pour rediriger une URL publique (par exemple, HTTPS) vers une page qui est packagée dans l'extension, alors l'extension doit lister la page dans la clé `web_accessible_resources`.

### Utiliser web_accessible_resources

Par exemple, supposons que votre extension inclut un fichier image sur images images/my-image.png, comme ceci :

    my-extension-files/
        manifest.json
        my-background-script.js
        images/
            my-image.png

Pour permettre à une page Web d'utiliser un élément [`<img>`](/fr/docs/Web/HTML/Element/img) dont l'attribut `src` pointe sur cette image, vous pouvez spécifier "web_accessible_resources" comme suit :

```json
"web_accessible_resources": ["images/my-image.png"]
```

Le fichier sera alors disponible en utilisant une URL comme :

    moz-extension://<extension-UUID>/images/my-image.png"

`<extension-UUID>` n'est **pas** l'identifiant de votre extension. Il est généré de manière aléatoire pour chaque instance de navigateur. Ceci empêche les sites Web de prendre les empreintes digitales d'un navigateur en examinant les extensions qu'il a installées.

> **Note :** Dans Chrome, l'ID d'une extension est fixe. Quand une ressource est listée dans  `web_accessible_resources`, elle est accessible comme `chrome-extension://<your-extension-id>/<path/to/resource>`.

L'approche recommandée pour obtenir l'URL de la ressource est d'utiliser [`runtime.getURL`](/fr/Add-ons/WebExtensions/API/runtime/getURL) en passant le chemin relatif à manifest.json, par exemple :

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

Cette approche vous donne l'URL correcte quel que soit le navigateur sur lequel votre extension est lancée.

### Caractères génériques

`web_accessible_resources` peuvent contenir des caractères génériques. Par exemple, l'entrée suivante fonctionnera également pour inclure la ressource à  "images/my-image.png":

```json
  "web_accessible_resources": ["images/*.png"]
```

### Sécurité

Notez que si vous créez une page accessible sur le Web, n'importe quel site Web peut alors lier ou rediriger vers cette page. La page doit ensuite traiter toute entrée (données POST, par exemple) comme si elle provenait d'une source non fiable, tout comme une page Web normale.

## Exemple

```json
"web_accessible_resources": ["images/my-image.png"]
```

Crée un fichier dans "images/my-image.png" accessible sur le web.

## Compatibilité du navigateur

{{Compat("webextensions.manifest.web_accessible_resources")}}
