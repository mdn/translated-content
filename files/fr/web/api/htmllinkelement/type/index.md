---
title: "HTMLLinkElement : propriété type"
short-title: type
slug: Web/API/HTMLLinkElement/type
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

La propriété **`type`** de l'interface {{domxref("HTMLLinkElement")}} est une chaîne de caractères qui reflète le {{glossary("MIME type", "type MIME")}} de la ressource liée.

Elle reflète l'attribut `type` de l'élément HTML {{HTMLElement("link")}}.

## Valeur

Une chaîne de caractères, qui doit être une chaîne de type MIME valide.

## Exemples

```html
<link
  id="el"
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

```js
const el = document.getElementById("el");
console.log(el.type); // Affiche : "image/png"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
