---
title: "HTMLIFrameElement : propriété sandbox"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`sandbox`** de l'interface {{DOMxRef("HTMLIFrameElement")}} retourne un objet {{DOMxRef("DOMTokenList")}} dynamique indiquant des restrictions supplémentaires sur le comportement du contenu imbriqué. Elle reflète l'attribut de contenu [`sandbox`](/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox) de l'élément HTML {{HTMLElement("iframe")}}.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}} dynamique.

Bien que la propriété `sandbox` elle-même soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `DOMTokenList`, il est possible d'affecter directement à la propriété `sandbox`, ce qui équivaut à affecter sa propriété {{DOMxRef("DOMTokenList/value", "value")}}. Vous pouvez également modifier l'objet `DOMTokenList` à l'aide des méthodes {{DOMxRef("DOMTokenList/add", "add()")}}, {{DOMxRef("DOMTokenList/remove", "remove()")}}, {{DOMxRef("DOMTokenList/replace", "replace()")}} et {{DOMxRef("DOMTokenList/toggle", "toggle()")}}.

## Exemples

```html
<iframe
  id="el"
  title="exemple"
  src="https://exemple.com"
  sandbox="allow-same-origin allow-scripts"></iframe>
```

```js
const el = document.getElementById("el");
console.log(Array.from(el.sandbox)); // Affiche : ["allow-same-origin", "allow-scripts"]

el.sandbox = "";
console.log(Array.from(el.sandbox)); // Affiche : []
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
