---
title: "HTMLIFrameElement : propriété name"
short-title: name
slug: Web/API/HTMLIFrameElement/name
l10n:
  sourceCommit: e2b1940639d7b81e1205884532acbd0ee5e7ec34
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLIFrameElement")}} est une chaîne de caractères qui reflète l'attribut `name` de l'élément HTML {{HTMLElement("iframe")}}, indiquant le nom spécifique de l'élément `<iframe>`.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<iframe id="el" name="exemple"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.name); // Affiche : "exemple"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
