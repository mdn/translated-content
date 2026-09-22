---
title: "HTMLOutputElement : propriété htmlFor"
short-title: htmlFor
slug: Web/API/HTMLOutputElement/htmlFor
l10n:
  sourceCommit: 752996f4695156431af4e19feb0542a4d372ce1e
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`htmlFor`** de l'interface {{DOMxRef("HTMLOutputElement")}} retourne un objet {{DOMxRef("DOMTokenList")}} dynamique contenant une liste des `id` des éléments qui contribuent à la valeur saisie (ou qui sont affectés) lors du calcul. Elle reflète l'attribut de contenu [`for`](/fr/docs/Web/HTML/Reference/Elements/output#for) de l'élément HTML {{HTMLElement("output")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}} dynamique.

Bien que la propriété `htmlFor` soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, il est possible d'affecter directement la propriété `htmlFor`, ce qui revient à affecter sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` à l'aide des méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```js
const outputElem = document.getElementById("result");
for (const id of outputElem.htmlFor) {
  const elem = document.getElementById(id);
  elem.style.outline = "2px solid red";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("output")}}
