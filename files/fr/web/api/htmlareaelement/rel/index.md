---
title: "HTMLAreaElement : propriété rel"
short-title: rel
slug: Web/API/HTMLAreaElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`rel`** reflète l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel). Il s'agit d'une chaîne de caractères contenant une liste de types de liens séparés par des espaces, indiquant la relation entre la ressource représentée par l'élément {{HTMLElement("area")}} et le document courant.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const areas = document.getElementsByTagName("area");
for (const area of areas) {
  console.log(`Rel : ${area.rel}`);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété équivalente sur {{HTMLElement("a")}} et {{HTMLElement("link")}},
  {{DOMxRef("HTMLAnchorElement.rel")}} et {{DOMxRef("HTMLLinkElement.rel")}}.
- La même liste mais sous forme de jetons&nbsp;: {{DOMxRef("HTMLAreaElement.relList")}}
