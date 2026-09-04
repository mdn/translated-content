---
title: "Document: documentElement property"
short-title: documentElement
slug: Web/API/Document/documentElement
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

La propriété en lecture seule **`documentElement`** de l'interface {{DOMxRef("Document")}} retourne l'élément {{DOMxRef("Element")}} qui est l'élément racine du {{DOMxRef("document")}} (par exemple, l'élément {{HTMLElement("html")}} pour les documents HTML).

## Valeur

Un objet {{DOMxRef("Element")}}.

## Exemples

```js
const elementRacine = document.documentElement;
const premierNiveau = elementRacine.childNodes;
// premierNiveau est une NodeList des enfants directs de l'élément racine
// tels que <head> et <body>

for (const enfant of premierNiveau) {
  // fait quelque chose avec chaque enfant direct de l'élément racine
}
```

## Notes

Pour tout document HTML non vide, `document.documentElement` sera toujours un élément {{HTMLElement ("html")}}. Pour tout document XML non vide, `document.documentElement` sera toujours l'élément racine du document.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
