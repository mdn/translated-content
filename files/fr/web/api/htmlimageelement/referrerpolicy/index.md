---
title: "HTMLImageElement : propriété referrerPolicy"
short-title: referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
l10n:
  sourceCommit: 7b9f3c730d1909846f80c70d84ac265d93d82af2
---

{{APIRef("HTML DOM")}}

La propriété **`referrerPolicy`** de l'interface {{DOMxRef("HTMLImageElement")}} reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/img#referrerpolicy) de l'élément {{HTMLElement("img")}}, qui définit quel référent est envoyé lors de la récupération de la ressource.

## Valeur

Une chaîne de caractères dont la valeur est soit `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `same-origin`, `strict-origin`, `strict-origin-when-cross-origin` ou `unsafe-url`. Pour leurs significations, voir la référence HTML [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#referrerpolicy).

## Exemples

```js
const img = new Image();
img.src = "img/logo.png";
img.referrerPolicy = "origin";

const div = document.getElementById("divAround");
div.appendChild(img); // Récupère l'image en utilisant l'origine comme référent
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLAnchorElement.referrerPolicy")}}
- La propriété {{DOMxRef("HTMLAreaElement.referrerPolicy")}}
- La propriété {{DOMxRef("HTMLIFrameElement.referrerPolicy")}}
