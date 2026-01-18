---
title: "HTMLScriptElement : propriété blocking"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

La propriété **`blocking`** de l'interface {{DOMxRef("HTMLScriptElement")}} est un objet dynamique {{DOMxRef("DOMTokenList")}} indiquant que certaines opérations doivent être bloquées lors de la récupération du script. Elle reflète l'attribut [`blocking`](/fr/docs/Web/HTML/Reference/Elements/script#blocking) de l'élément HTML {{HTMLElement("script")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}} dynamique.

Bien que la propriété `blocking` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, vous pouvez toujours affecter directement la propriété `blocking`, ce qui équivaut à affecter sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` en utilisant les méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```html
<script id="el" type="text/javascript" async blocking="render"></script>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Affiche : "render"
```

## Specifications

{{Specifications}}

## Compatibilite des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLLinkElement.blocking")}}
- La propriété {{DOMxRef("HTMLStyleElement.blocking")}}
