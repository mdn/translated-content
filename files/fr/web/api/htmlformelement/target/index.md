---
title: HTMLFormElement.target
slug: Web/API/HTMLFormElement/target
---

{{APIRef("HTML DOM")}}

La propriété **`HTMLFormElement.target`** représente la cible de l'action (i.e., le cadre de destination dans lequel produire le résultat).

## Syntaxe

```js
string = form.target;
form.target = string;
```

## Exemple

```js
myForm.target = document.frames[1].name;
```

## Spécification

[HTML 5, Section 4.10.19.6, Form submission](https://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-fs-method)

[DOM Level 2 HTML: target](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-6512890)
