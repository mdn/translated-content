---
title: "HTMLStyleElement : propriété blocking"
short-title: blocking
slug: Web/API/HTMLStyleElement/blocking
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`blocking`** de l'interface {{DOMxRef("HTMLStyleElement")}} retourne un objet {{DOMxRef("DOMTokenList")}} dynamique contenant les opérations qui doivent être bloquées lors de la récupération d'une ressource externe. Elle reflète l'attribut de contenu [`blocking`](/fr/docs/Web/HTML/Reference/Elements/style#blocking) de l'élément HTML {{HTMLElement("style")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}} dynamique.

Bien que la propriété `blocking` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, vous pouvez toujours affecter directement la propriété `blocking`, ce qui équivaut à affecter sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` à l'aide des méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```html
<style id="el" blocking="render">
  p {
    color: blue;
  }
</style>
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

- La propriété {{DOMxRef("HTMLLinkElement.blocking")}}
- La propriété {{DOMxRef("HTMLScriptElement.blocking")}}
