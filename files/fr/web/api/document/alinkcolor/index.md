---
title: "Document : propriété alinkColor"
short-title: alinkColor
slug: Web/API/Document/alinkColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété **`alinkColor`** de l'interface {{DOMxRef("Document")}} retourne ou définit la couleur d'un lien actif dans le corps du document. Un lien hypertexte est actif durant le temps entre les événements `mousedown` et `mouseup`.

## Valeur

Une chaîne de caractères contenant le nom de la couleur (par exemple, `blue`, `darkblue`, etc.) ou la valeur hexadécimale de la couleur (par exemple, `#0000FF`).

Lorsque la valeur est définie sur `null`, cette valeur `null` est convertie en chaîne de caractères vide (`""`), donc `document.alinkColor = null` est équivalent à `document.alinkColor = ""`.

## Notes

La valeur par défaut pour cette propriété dans Mozilla Firefox est rouge (`#ee0000` en hexadécimal).

`document.alinkColor` est obsolète dans [la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-alinkcolor). Une alternative est le sélecteur CSS {{CSSxRef(":active")}}.

Firefox supporte à la fois `alinkColor`/`:active` et {{CSSxRef(":focus")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
