---
title: "HTMLLinkElement : propriété sizes"
short-title: sizes
slug: Web/API/HTMLLinkElement/sizes
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`sizes`** de l'interface {{DOMxRef("HTMLLinkElement")}} définit les tailles des icônes pour les médias visuels contenus dans la ressource. Elle reflète l'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/link#sizes) de l'élément {{HTMLElement("link")}}, qui prend une liste de tailles séparées par des espaces, chacune au format `<largeur en pixels>x<hauteur en pixels>`, ou le mot-clé `any`.

Cela n'est pertinent que si {{DOMxRef("HTMLLinkElement.rel", "rel")}} vaut `icon` ou un type non standard comme `apple-touch-icon`.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}}.

Bien que la propriété `sizes` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, vous pouvez toujours affecter directement à la propriété `sizes`, ce qui équivaut à affecter à sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` en utilisant les méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```html
<link rel="icon" sizes="72x72 114x114" href="smallish.ico" />
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

- La propriété {{DOMxRef("HTMLLinkElement.rel")}}
- La propriété {{DOMxRef("HTMLLinkElement.relList")}}
- La propriété {{DOMxRef("HTMLLinkElement.type")}}
- La propriété {{DOMxRef("HTMLLinkElement.href")}}
- L'élément HTML {{HTMLElement("link")}}
- L'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel)
