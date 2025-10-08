---
title: "HTMLLinkElement : propriété relList"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`relList`** de l'interface {{domxref("HTMLLinkElement")}} reflète l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel). C'est un {{domxref("DOMTokenList")}} vivant contenant l'ensemble des types de liens indiquant la relation entre la ressource représentée par l'élément HTML {{HTMLElement("link")}} et le document courant.

La propriété elle-même est en lecture seule, ce qui signifie que vous ne pouvez pas remplacer le {{domxref("DOMTokenList")}} par un autre, mais le contenu de la liste retournée peut être modifié.

## Valeur

Un {{domxref("DOMTokenList")}} dynamique de chaînes de caractères.

## Exemples

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log("New link found.");
  link.relList.forEach((relEntry) => {
    console.log(relEntry);
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété équivalente sur les éléments HTML {{HTMLElement("a")}} et {{HTMLElement("area")}}&nbsp;:
  - {{domxref("HTMLAnchorElement.relList")}}
  - {{domxref("HTMLAreaElement.relList")}}
- La même liste mais sous forme de jetons séparés par des espaces dans une chaîne&nbsp;: {{domxref("HTMLLinkElement.rel")}}
