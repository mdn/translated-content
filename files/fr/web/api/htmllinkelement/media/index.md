---
title: "HTMLLinkElement : propriété media"
short-title: media
slug: Web/API/HTMLLinkElement/media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

La propriété **`media`** de l'interface {{domxref("HTMLLinkElement")}} est une chaîne de caractères représentant une liste d'un ou plusieurs formats média auxquels la ressource s'applique.

Elle reflète l'attribut `media` de l'élément HTML {{HTMLElement("link")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  media="screen and (width >= 600px)"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.media); // Résultat : "screen and (width >= 600px)"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
