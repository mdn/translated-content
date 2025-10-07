---
title: "HTMLAnchorElement : propriété relList"
short-title: relList
slug: Web/API/HTMLAnchorElement/relList
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`relList`** de l'interface {{domxref("HTMLAnchorElement")}} reflète l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel). Il s'agit d'un {{domxref("DOMTokenList")}} dynamique contenant l'ensemble des types de liens indiquant la relation entre la ressource représentée par l'élément HTML {{HTMLElement("a")}} et le document courant.

La propriété elle-même est en lecture seule, ce qui signifie que vous ne pouvez pas remplacer le {{domxref("DOMTokenList")}} par un autre, mais son contenu peut être modifié.

## Valeur

Un {{domxref("DOMTokenList")}} dynamique de chaînes de caractères.

## Exemples

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  const list = anchor.relList;
  console.log(
    `Nouvel élément d'ancre trouvé avec ${list.length} types de liens dans relList.`,
  );
  list.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriété équivalente pour les éléments HTML {{HTMLElement("area")}} et {{HTMLElement("link")}}&nbsp;:
  {{domxref("HTMLAreaElement.relList")}} et {{domxref("HTMLLinkElement.relList")}}.
- La même liste mais sous forme de jetons séparés par des espaces dans une chaîne&nbsp;:
  {{domxref("HTMLAnchorElement.rel")}}
