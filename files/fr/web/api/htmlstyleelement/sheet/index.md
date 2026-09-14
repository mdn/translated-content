---
title: "HTMLStyleElement : propriété sheet"
short-title: sheet
slug: Web/API/HTMLStyleElement/sheet
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`sheet`** de l'interface {{DOMxRef("HTMLStyleElement")}} contient la feuille de style associée à cet élément.

Un objet {{DOMxRef("StyleSheet")}} est toujours associé à un {{DOMxRef("HTMLStyleElement")}}, sauf si son attribut `type` n'est pas `text/css`.

## Valeur

Un objet {{DOMxRef("StyleSheet")}}, ou `null` s'il n'y en a pas d'associé à l'élément.

## Exemples

Supposons que l'en-tête `<head>` contienne ce qui suit&nbsp;:

```html
<style id="inline-style">
  p {
    color: blue;
  }
</style>
```

La propriété `sheet` de l'objet `HTMLStyleElement` associé retournera l'objet {{DOMxRef("StyleSheet")}} qui le décrit.

```js
const style = document.getElementById("inline-style");
console.log(style.sheet.cssRules[0].cssText); // 'p { color: blue; }'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
