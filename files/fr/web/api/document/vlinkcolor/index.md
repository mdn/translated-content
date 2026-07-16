---
title: "Document : propriété vlinkColor"
short-title: vlinkColor
slug: Web/API/Document/vlinkColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété **`vlinkColor`** de l'interface {{DOMxRef("Document")}} permet d'obtenir ou de définir la couleur des liens que l'utilisateur a visités dans le document.

## Valeur

Une chaîne de caractères représentant la couleur sous forme de mot (par exemple, `"red"`) ou de valeur hexadécimale (par exemple, `"#ff0000"`).

Lorsque la valeur est définie sur `null`, cette valeur `null` est convertie en chaîne de caractères vide (`""`), donc `document.vlinkColor = null` équivaut à `document.vlinkColor = ""`.

## Notes

- La valeur par défaut de cette propriété dans Mozilla Firefox est le violet (`#551a8b` en hexadécimal).
- `Document.vlinkColor` est obsolète dans [la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-vlinkcolor).
- L'alternative recommandée est d'obtenir/définir la couleur de la pseudo-classe CSS {{CSSxRef(":visited")}} sur les éléments HTML {{HTMLElement("a")}} (par exemple, `a:visited {color:red;}`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
