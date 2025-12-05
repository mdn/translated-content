---
title: "HTMLAreaElement : propriété alt"
short-title: alt
slug: Web/API/HTMLAreaElement/alt
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`alt`** de l'interface {{DOMxRef("HTMLAreaElement")}} définit le texte du lien hypertexte, c'est-à-dire le libellé textuel du lien d'une image réactive. Elle reflète l'attribut [`alt`](/fr/docs/Web/HTML/Reference/Elements/area#alt) de l'élément HTML {{HTMLElement("area")}}.

La valeur de `alt` doit être un texte qui, présenté avec le texte `alt` des autres liens `<area>` du même élément {{HTMLElement("map")}}, ainsi qu'avec le texte `alt` de l'élément {{HTMLElement("img")}} lui-même, offre à l'utilisateur·ice le même type de choix que le lien hypertexte utilisé sans son texte mais avec sa forme appliquée à l'image.

Si l'élément {{HTMLElement("area")}} est un lien (contient une propriété {{DOMxRef("HTMLAreaElement.href", "href")}}), la valeur de la propriété `alt` doit être une chaîne de caractères non vide donnant le libellé du lien qui serait approprié si l'image était indisponible. L'attribut `alt` d'un lien `<area>` ne peut être vide que s'il existe un autre élément `<area>` dans le même `<map>` qui pointe vers la même ressource et possède un attribut `alt` non vide.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const areaElement = document.getElementById("imageArea");
console.log(areaElement.alt);
areaElement.alt = "Une description de lien bien meilleure";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.alt")}}
- La propriété {{DOMxRef("HTMLInputElement.alt")}}
- L'interface {{DOMxRef("HTMLMapElement")}}
- L'élément HTML {{HTMLElement("area")}}
- L'élément HTML {{HTMLElement("map")}}
- L'élément HTML {{HTMLElement("a")}}
- [Bon texte alternatif, mauvais texte alternatif — Rendre votre contenu perceptible <sup>(angl.)</sup>](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/) sur WCAG.com (2021)
- [Un arbre de décision pour alt <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/images/decision-tree/) sur W3C Web Accessibility Initiative (WAI)
