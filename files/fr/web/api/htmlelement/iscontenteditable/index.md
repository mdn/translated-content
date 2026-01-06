---
title: "HTMLElement : propriété isContentEditable"
short-title: isContentEditable
slug: Web/API/HTMLElement/isContentEditable
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`isContentEditable`** de l'interface {{DOMxRef("HTMLElement")}} retourne un booléen qui est `true` _(vrai)_ si le contenu de l'élément est éditable&nbsp;; sinon elle retourne `false` _(faux)_.

## Valeur

Une valeur booléenne.

## Exemples

### HTML

```html
<p id="firstParagraph">Paragraphe non éditable</p>
<p id="secondParagraph" contenteditable="true">Paragraphe éditable</p>

<p id="infoText1">Le premier paragraphe est-il éditable&nbsp;?</p>
<p id="infoText2">Le second paragraphe est-il éditable&nbsp;?</p>
```

### JavaScript

```js
const firstParagraph = document.getElementById("firstParagraph");
const secondParagraph = document.getElementById("secondParagraph");

const infoText1 = document.getElementById("infoText1");
const infoText2 = document.getElementById("infoText2");

infoText1.textContent += ` ${firstParagraph.isContentEditable}`;
infoText2.textContent += ` ${secondParagraph.isContentEditable}`;
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.contentEditable")}}
- L'attribut HTML universel [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).
