---
title: "HTMLAreaElement : propriété relList"
short-title: relList
slug: Web/API/HTMLAreaElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`relList`** de l'interface {{DOMxRef("HTMLAreaElement")}} retourne un objet {{DOMxRef("DOMTokenList")}} dynamique contenant l'ensemble des types de liens indiquant la relation entre la ressource représentée par l'élément {{HTMLElement("area")}} et le document courant. Elle reflète l'attribut de contenu [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) de l'élément HTML {{HTMLElement("area")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}} dynamique.

Bien que la propriété `relList` soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, il est possible d'affecter directement la propriété `relList`, ce qui équivaut à affecter sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` à l'aide des méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```js
const areas = document.getElementsByTagName("area");

for (const area of areas) {
  console.log("Nouvelle zone trouvée.");
  area.relList.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété équivalente sur {{HTMLElement("a")}} et {{HTMLElement("link")}},
  {{DOMxRef("HTMLAnchorElement.relList")}} et {{DOMxRef("HTMLLinkElement.relList")}}.
- La même liste mais sous forme de jetons séparés par des espaces dans une chaîne de caractères&nbsp;:
  {{DOMxRef("HTMLAreaElement.rel")}}
