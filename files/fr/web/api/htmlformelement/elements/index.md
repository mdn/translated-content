---
title: HTMLFormElement.elements
slug: Web/API/HTMLFormElement/elements
translation_of: Web/API/HTMLFormElement/elements
---
{{APIRef("HTML DOM")}}

La propriété **`HTMLFormElement.elements`** retourne une {{domxref("HTMLFormControlsCollection")}} ({{ HTMLVersionInline(4) }} [`HTMLCollection`](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506)) de tous les contrôles de formulaire contenu dans l'élément FORM, à l'exception des éléments de type [input](/fr-FR/docs/HTML/Element/Input) dont l'attribut `type` est égal à `image`.

Vous pouvez accéder à un élément particulier en utilisant soit un index soit le `name` ou l'`id` de l'élément.

## Syntaxe

    nodeList = HTMLFormElement.elements

## Exemple

```js
var inputs = document.getElementById("form1").elements;
var inputByIndex = inputs[2];
var inputByName = inputs["login"];
```

## Spécification

- [HTML5, Section 4.10.3, The form Element](http://www.w3.org/TR/html5/forms.html#dom-form-elements)
- [DOM Level 2 HTML: elements](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76728479)
