---
title: "HTMLLinkElement : propriété relList"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`relList`** de l'interface {{DOMxRef("HTMLLinkElement")}} retourne un objet {{DOMxRef("DOMTokenList")}} dynamique contenant l'ensemble des types de liens indiquant la relation entre la ressource représentée par l'élément HTML {{HTMLElement("link")}} et le document courant. Elle reflète l'attribut de contenu [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) de l'élément HTML {{HTMLElement("link")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}} dynamique.

Bien que la propriété `relList` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, vous pouvez toujours affecter directement à la propriété `relList`, ce qui équivaut à affecter à sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` en utilisant les méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

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
  - {{DOMxRef("HTMLAnchorElement.relList")}}
  - {{DOMxRef("HTMLAreaElement.relList")}}
- La même liste mais sous forme de jetons séparés par des espaces dans une chaîne&nbsp;: {{DOMxRef("HTMLLinkElement.rel")}}
