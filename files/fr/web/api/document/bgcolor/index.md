---
title: "Document : propriété bgColor"
short-title: bgColor
slug: Web/API/Document/bgColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété obsolète **`bgColor`** de l'interface {{DOMxRef("Document")}} retourne ou définit la couleur de fond du document courant.

## Valeur

Une chaîne de caractères représentant la couleur comme un mot (par exemple, `"red"`) ou une valeur hexadécimale (par exemple, `"#ff0000"`).

Lorsque la valeur est définie sur `null`, cette valeur `null` est convertie en chaîne de caractères vide (`""`), donc `document.bgColor = null` est équivalent à `document.bgColor = ""`.

## Exemples

```js
document.bgColor = "darkblue";
```

## Notes

La valeur par défaut pour cette propriété sur Firefox est le blanc (`#ffffff` en hexadécimal).

`document.bgColor` est obsolète dans la [spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-bgcolor). L'alternative recommandée est l'utilisation du style CSS {{CSSxRef("background-color")}} qui peut être accessible via le DOM avec `document.body.style.backgroundColor`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
