---
title: "HTMLFormElement : propriété name"
short-title: name
slug: Web/API/HTMLFormElement/name
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

La propriété `name` de l'interface {{DOMxRef("HTMLFormElement")}} représente le nom de l'élément HTML {{HTMLElement("form")}} sous la forme d'une chaîne de caractères.

Si votre {{HTMLElement("form")}} contient un élément appelé _name_, alors ce dernier redéfinit la propriété `form.name`, afin que vous ne puissiez y accéder.

## Valeur

Une chaîne de caractères.

## Exemple

```js
const form1name = document.getElementById("form1").name;

if (form1name !== document.form.form1) {
  // le navigateur ne prend pas en charge cette forme de référence
}
```

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
