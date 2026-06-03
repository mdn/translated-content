---
title: "HTMLFormElement : propriété relList"
short-title: relList
slug: Web/API/HTMLFormElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`relList`** de {{DOMxRef("HTMLFormElement")}} retourne un objet dynamique {{DOMxRef("DOMTokenList")}} contenant l'ensemble des types de lien indiquant la relation entre la ressource représentée par l'élément HTML {{HTMLElement("form")}} et le document courant. Elle reflète l'attribut de contenu [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) de l'élément {{HTMLElement("form")}}.

## Valeur

Un objet dynamique {{DOMxRef("DOMTokenList")}}.

Bien que la propriété `relList` soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, vous pouvez néanmoins assigner directement à la propriété `relList`, ce qui équivaut à assigner à sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez aussi modifier l'objet `DOMTokenList` en utilisant les méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```js
const form = document.querySelector("form");
form.relList.forEach((relEntry) => {
  console.log(relEntry);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLAnchorElement.relList")}}
- La propriété {{DOMxRef("HTMLLinkElement.relList")}}
- La propriété {{DOMxRef("HTMLFormElement.rel")}}
