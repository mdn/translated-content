---
title: HTMLElement.isContentEditable
slug: Web/API/HTMLElement/isContentEditable
---

{{ APIRef("HTML DOM") }}

La propriété en lecture seule **`HTMLElement.isContentEditable`** renvoie un booléen qui est `true` _(vrai)_ si le contenu de l'élément est éditable&nbsp;; sinon elle renvoie `false` _(faux)_.

## Syntaxe

```js
editable = element.isContentEditable;
```

## Exemple

### JavaScript

```js
document.getElementById("infoText1").innerHTML +=
  document.getElementById("myText1").isContentEditable;
document.getElementById("infoText2").innerHTML +=
  document.getElementById("myText2").isContentEditable;
```

### HTML

```html
<p id="myText1">Uneditable Paragraph</p>
<p id="myText2" contenteditable="true">Editable Paragraph</p>

<p id="infoText1">Can edit the first paragraph?</p>
<p id="infoText2">Can edit the second paragraph?</p>
```

### Résultat

{{ EmbedLiveSample('Exemple') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("element.contentEditable")}}
- L'attribut global [`contenteditable`](/fr/docs/Web/HTML/Global_attributes/contenteditable).
