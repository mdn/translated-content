---
title: HTMLFormElement.name
slug: Web/API/HTMLFormElement/name
translation_of: Web/API/HTMLFormElement/name
---
{{APIRef("HTML DOM")}}

La propriété `HTMLFormElement.name` représente le nom de l'élément `form` sous la forme d'une chaîne de caratères.

Si votre {{HTMLElement("Form")}} contient un élément appelé *name*, alors ce dernier redéfinit la propriété `form.name`, afin que vous ne puissiez y accéder. Internet Explorer (IE) bloque la définition ou la modification du nom d'un élément créé avec `createElement()` à partir de la propriété `name`.

## Syntaxe

    string = form.name
    form.name = string

## Exemple

```js
var form1name = document.getElementById("form1").name;

if (form1name != document.form.form1) {
   // browser doesn't support this form of reference
}
```

## Spécification

- [HTML 5, Section 4.10.3, The form Element](http://www.w3.org/TR/html5/forms.html#dom-form-name)
- [DOM Level 2 HTML: name](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-22051454)
