---
title: "Document : propriété links"
short-title: links
slug: Web/API/Document/links
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

La propriété en lecture seule **`links`** de l'interface {{DOMxRef("Document")}} retourne une collection de tous les éléments HTML {{HTMLElement("area")}} et {{HTMLElement("a")}} dans un document ayant une valeur pour l'attribut [href](/fr/docs/Web/HTML/Reference/Elements/a#href).

## Valeur

Un objet {{DOMxRef("HTMLCollection")}}.

## Exemples

```js
for (const lien of document.links) {
  const lienHref = document.createTextNode(lien.href);
  const sautDeLigne = document.createElement("br");
  document.body.appendChild(lienHref);
  document.body.appendChild(sautDeLigne);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
