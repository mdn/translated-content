---
title: "HTMLInputElement : propriété alt"
short-title: alt
slug: Web/API/HTMLInputElement/alt
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`alt`** de l'interface {{DOMxRef("HTMLInputElement")}} définit le libellé textuel du bouton pour les utilisateur·ice·s et les agents utilisateur qui ne peuvent pas utiliser l'image. Elle reflète l'attribut [`alt`](/fr/docs/Web/HTML/Reference/Elements/input#alt) de l'élément HTML {{HTMLElement("input")}}.

La propriété `alt` n'est valide que pour le type [`image`](/fr/docs/Web/HTML/Reference/Elements/input/image). Elle doit être une chaîne de caractères non vide donnant le libellé approprié pour un bouton équivalent si l'image n'est pas disponible.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.alt);
inputElement.alt = "Une bien meilleure description";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.alt")}}
- L'interface {{DOMxRef("HTMLButtonElement")}}
- L'élément HTML {{HTMLElement("button")}}
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("img")}}
- [Bon texte alternatif, mauvais texte alternatif — Rendre votre contenu perceptible <sup>(angl.)</sup>](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/) sur WCAG.com (2021)
- [Un arbre de décision pour alt <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/images/decision-tree/) sur W3C Web Accessibility Initiative (WAI)
