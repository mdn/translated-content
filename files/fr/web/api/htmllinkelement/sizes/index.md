---
title: "HTMLLinkElement : propriété sizes"
short-title: sizes
slug: Web/API/HTMLLinkElement/sizes
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`sizes`** de l'interface {{domxref("HTMLLinkElement")}} définit les tailles des icônes pour les médias visuels contenus dans la ressource. Elle reflète l'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/link#sizes) de l'élément {{HTMLElement("link")}}, qui prend une liste de tailles séparées par des espaces, chacune au format `<largeur en pixels>x<hauteur en pixels>`, ou le mot-clé `any`.

Cela n'est pertinent que si {{domxref("HTMLLinkElement.rel", "rel")}} vaut `icon` ou un type non standard comme `apple-touch-icon`.

## Valeur

Un objet {{domxref("DOMTokenList")}}

## Exemples

```html
<link rel="icon" sizes="72x72 114x114" href="smallish.png" />
```

```js
const link = document.querySelector("[rel=icon],[rel=apple-touch-icon]");
console.dir(link.sizes); /* affiche :
  DOMTokenList [ "72x72", "114x114" ]
    0: "72x72"
    1: "114x114"
    length: 2
    value: "72x72 114x114"
  */
console.log(link.sizes.value); // affiche : '72x72 114x114'
console.log(link.sizes.length); // affiche : '2'
console.log(link.sizes[0]); // affiche : '72x72'
console.log(link.sizes[1]); // affiche : '114x114'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLLinkElement.rel")}}
- La propriété {{domxref("HTMLLinkElement.relList")}}
- La propriété {{domxref("HTMLLinkElement.type")}}
- La propriété {{domxref("HTMLLinkElement.href")}}
- L'élément HTML {{HTMLElement("link")}}
- L'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel)
