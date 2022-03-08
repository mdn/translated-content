---
title: HTMLElement.isContentEditable
slug: Web/API/HTMLElement/isContentEditable
translation_of: Web/API/HTMLElement/isContentEditable
---
{{ APIRef("HTML DOM") }}

La propriété en lecture seule **`HTMLElement.isContentEditable`** renvoie un booléen qui est `true` _(vrai)_ si le contenu de l'élément est éditable&nbsp;; sinon elle renvoie `false` _(faux)_.

## Syntaxe

    editable = element.isContentEditable

## Exemple

### JavaScript

```js
document.getElementById("infoText1").innerHTML += document.getElementById("myText1").isContentEditable;
document.getElementById("infoText2").innerHTML += document.getElementById("myText2").isContentEditable;
```

### HTML

```html
<p id="myText1">Uneditable Paragraph</p>
<p id="myText2" contentEditable="true">Editable Paragraph</p>

<p id="infoText1">Can edit the first paragraph? </p>
<p id="infoText2">Can edit the second paragraph? </p>
```

### Résultat

{{ EmbedLiveSample('Exemple') }}

## Spécifications

| Specification                                                                                                                    | Status                           | Comment                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "editing.html#dom-iscontenteditable", "HTMLElement.contenteditable")}} | {{Spec2('HTML WHATWG')}} | Pas de changement de la dernière image, {{SpecName('HTML5.1')}}                                |
| {{SpecName('HTML5.1', "editing.html#dom-iscontenteditable", "HTMLElement.contenteditable")}}     | {{Spec2('HTML5.1')}}     | L'image de {{SpecName('HTML WHATWG')}}, n'est pas changée par {{SpecName('HTML5 W3C')}} |
| {{SpecName('HTML5 W3C', "editing.html#dom-iscontenteditable", "HTMLElement.contenteditable")}}     | {{Spec2('HTML5 W3C')}}     | Image de  {{SpecName('HTML WHATWG')}},  definition initiale.                                   |

## Compatibilité des navigateurs

{{Compat("api.HTMLElement.isContentEditable")}}

## Voir aussi

- {{domxref("element.contentEditable")}}
- L'attribut global [contenteditable](/en-US/docs/Web/HTML/Global_attributes/contenteditable).
