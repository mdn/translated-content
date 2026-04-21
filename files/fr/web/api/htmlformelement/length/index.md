---
title: "HTMLFormElement : propriété length"
short-title: length
slug: Web/API/HTMLFormElement/length
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`length`** de l'interface {{DOMxRef("HTMLFormElement")}} retourne le nombre de contrôles contenus dans l'élément HTML {{HTMLElement("form")}}.

Vous pouvez accéder à la liste des contrôles du formulaire à l'aide de la propriété {{DOMxRef("HTMLFormElement.elements", "elements")}}.

Cela inclut à la fois les éléments descendants de l'élément `<form>` et les éléments qui sont associés au formulaire via leur attribut `form`.

Les éléments pris en compte pour cette propriété sont&nbsp;: {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} (à l'exception de ceux dont le type est `"image"`, omis pour des raisons historiques), {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.

## Valeur

Un nombre.

## Exemple

```js
if (document.getElementById("form1").length > 1) {
  // plus d'un contrôle de formulaire ici
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
