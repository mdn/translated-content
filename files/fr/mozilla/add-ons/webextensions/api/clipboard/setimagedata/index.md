---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
---

{{AddonSidebar()}}

Copie une image dans le presse-papiers. L'image est recodée avant d'être écrite dans le presse-papiers. Si l'image n'est pas valide, le presse-papiers n'est pas modifié.

L'image est fournie en tant que [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer) contenant l'image codée. Les formats JPEG et PNG sont pris en charge.

Bien que cette API soit basée sur l'API [`clipboard.setImageData()`](https://developer.chrome.com/apps/clipboard) de Chrome, il existe certaines différentes :

- L'API Chrome est réservée aux applications et non aux extensions.
- Cette API nécessite uniquement la permission `"clipboardWrite"`, tandis que la version Chrome nécessite également la permission `"clipboard"`.
- L'API de Chrome utilise des rappels et cette API ne prend en charge que les promises.
- Cette API ne prend pas en charge le paramètre `additionalItems`.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
browser.clipboard.setImageData(imageData, imageType);
```

### Paramètres

- `imageData`
  - : [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer). Les données de l'image codées.
- `imageType`
  - : Un {{domxref("DOMString")}} indiquant le type d'image contenue dans le fichier `imageData`: `"png"` ou `"jpeg"`.

### Valeur de retour

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments si l'opération a réussi, ou rejetée, s'il y a une erreur (par exemple parce que les données ne représentaient pas une image valide).

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Copiez une image distante :

```js
// requires:
// * the host permission for "https://cdn.mdn.mozilla.net/*"
// * the API permission "clipboardWrite"

fetch("https://cdn.mdn.mozilla.net/static/img/favicon144.png")
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

Copiez une image fournie avec l'extension :

```js
// requires the API permission "clipboardWrite"

fetch(browser.runtime.getURL("image.png"))
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.clipboard`](https://developer.chrome.com/apps/clipboard).
