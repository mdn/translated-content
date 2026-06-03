---
title: "HTMLAnchorElement : propriété relList"
short-title: relList
slug: Web/API/HTMLAnchorElement/relList
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`relList`** de l'interface {{DOMxRef("HTMLAnchorElement")}} retourne un objet {{DOMxRef("DOMTokenList")}} dynamique contenant l'ensemble des types de liens indiquant la relation entre la ressource représentée par l'élément HTML {{HTMLElement("a")}} et le document courant. Elle reflète l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) de l'élément HTML {{HTMLElement("a")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}} dynamique.

Bien que la propriété `relList` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, vous pouvez toujours affecter directement à la propriété `relList`, ce qui équivaut à affecter à sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` en utilisant les méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```js
const ancres = document.getElementsByTagName("a");
for (const ancre of ancres) {
  const list = ancre.relList;
  console.log(
    `Nouvel élément d'ancre trouvé avec ${list.length} types de liens dans relList.`,
  );
  list.forEach((valeurRel) => {
    console.log(valeurRel);
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriété équivalente pour les éléments HTML {{HTMLElement("area")}} et {{HTMLElement("link")}}&nbsp;:
  {{DOMxRef("HTMLAreaElement.relList")}} et {{DOMxRef("HTMLLinkElement.relList")}}.
- La même liste mais sous forme de jetons séparés par des espaces dans une chaîne&nbsp;:
  {{DOMxRef("HTMLAnchorElement.rel")}}
