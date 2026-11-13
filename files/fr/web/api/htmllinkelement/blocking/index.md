---
title: "HTMLLinkElement : propriété blocking"
short-title: blocking
slug: Web/API/HTMLLinkElement/blocking
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

La propriété **`blocking`** de l'interface {{DOMxRef("HTMLLinkElement")}} retourne un objet {{DOMxRef("DOMTokenList")}} dynamique contenant les opérations qui doivent être bloquées lors de la récupération d'une ressource externe. Elle reflète l'attribut [`blocking`](/fr/docs/Web/HTML/Reference/Elements/link#blocking) de l'élément HTML {{HTMLElement("link")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}} dynamique.

Bien que la propriété `blocking` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, vous pouvez toujours affecter directement à la propriété `blocking`, ce qui équivaut à affecter à sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` en utilisant les méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```html
<link
  id="el"
  rel="stylesheet"
  href="/example.css"
  blocking="render"
  crossorigin />
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Affiche : DOMTokenList ["render"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLScriptElement.blocking")}}
- La propriété {{DOMxRef("HTMLStyleElement.blocking")}}
