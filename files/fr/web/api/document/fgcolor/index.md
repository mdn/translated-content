---
title: "Document : propriété fgColor"
short-title: fgColor
slug: Web/API/Document/fgColor
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété **`fgColor`** de l'interface {{DOMxRef("Document")}} permet d'obtenir ou de définir la couleur de premier plan, ou couleur du texte, du document actuel.

## Valeur

Une chaîne de caractères représentant la couleur sous forme de mot (par exemple, `"red"`) ou de valeur hexadécimale (par exemple, `"#ff0000"`).

## Exemples

```js
document.fgColor = "white";
document.bgColor = "darkblue";
```

## Notes

La valeur par défaut de cette propriété dans Mozilla Firefox est le noir (`#000000` en hexadécimal).

`document.fgColor` est obsolète dans [la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-fgcolor). L'alternative recommandée est la propriété CSS {{CSSxRef("color")}} (par exemple, `document.body.style.color = "red"`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
