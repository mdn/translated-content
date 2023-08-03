---
title: document.images
slug: Web/API/Document/images
---

{{ ApiRef() }}

`document.images` renvoie une collection des images du document HTML courant.

## Syntaxe

```js
HTMLCollection = document.images;
```

## Exemple

```js
var listeimg = document.images;
for (var i = 0; i < listeimg.length; i++) {
  if (listeimg[i] == "banner.gif") {
    // l'image banner a été trouvée
  }
}
```

## Notes

[`document.images`](/fr/DOM/document.images) fait partie du DOM HTML, et fonctionne uniquement pour les document HTML.

## Spécification

- Spécification DOM Level 2 HTML&nbsp;: [HTMLDocument.images](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-90379117)
- Traduction en français (non normative)&nbsp;: [HTMLDocument.images](http://www.yoyodesign.org/doc/w3c/dom2/html/html.html#ID-90379117)
