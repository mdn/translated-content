---
title: "HTMLAnchorElement : propriété rel"
short-title: rel
slug: Web/API/HTMLAnchorElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`rel`** de l'interface {{domxref("HTMLAnchorElement")}} reflète l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel). Il s'agit d'une chaîne de caractères contenant une liste d'espaces de types de liens indiquant la relation entre la ressource représentée par l'élément HTML {{HTMLElement("a")}} et le document courant.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  alert(`Rel : ${anchor.rel}`);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriété équivalente pour les éléments HTML {{HTMLElement("area")}} et {{HTMLElement("link")}}&nbsp;:
  {{domxref("HTMLAreaElement.rel")}} et {{domxref("HTMLLinkElement.rel")}}.
- La même liste mais sous forme de jetons&nbsp;: {{domxref("HTMLAnchorElement.relList")}}
