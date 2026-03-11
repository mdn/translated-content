---
title: "Document : propriété linkColor"
short-title: linkColor
slug: Web/API/Document/linkColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété **`linkColor`** de l'interface {{DOMxRef("Document")}} permet d'obtenir ou de définir la couleur des liens dans le document.

Cette propriété est obsolète. En alternative, vous pouvez définir la propriété CSS {{CSSxRef("color")}} sur les liens HTML ({{HTMLElement("a")}}) ou sur les pseudo-classes CSS {{CSSxRef(":link")}}.

## Valeur

Une chaîne de caractères représentant la couleur sous forme de mot (par exemple, `red`) ou de valeur hexadécimale (par exemple, `#ff0000`).

Lorsque la valeur est définie sur `null`, cette valeur `null` est convertie en chaîne de caractères vide (`""`), donc `document.linkColor = null` équivaut à `document.linkColor = ""`.

## Exemples

```js
document.linkColor = "blue";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

La valeur par défaut de cette propriété dans Mozilla Firefox est bleue (`#0000ee` en hexadécimal).

## Voir aussi

- La propriété {{DOMxRef("document.vlinkColor")}}
- La propriété {{DOMxRef("document.alinkColor")}}
