---
title: "HTMLOptionElement : propriété disabled"
short-title: disabled
slug: Web/API/HTMLOptionElement/disabled
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{APIRef("HTML DOM")}}

La propriété **`disabled`** de l'interface {{DOMxRef("HTMLOptionElement")}} est une valeur booléenne qui indique si l'élément HTML {{HTMLElement("option")}} n'est pas disponible à la sélection. Cette propriété reflète la valeur de l'attribut HTML [`disabled`](/fr/docs/Web/HTML/Reference/Elements/option#disabled).

La propriété reflète la valeur de l'attribut `disabled` sur l'élément `<option>` lui-même. Si une option est désactivée parce qu'elle est enfant d'un élément {{HTMLElement("optgroup")}} désactivé, la valeur `true` de la propriété {{DOMxRef("HTMLOptGroupElement.disabled")}} n'est pas hérité par l'option elle-même.

## Valeur

Une valeur booléenne.

## Exemples

### HTML

```html
<label for="drink-options">Sélection de boisson&nbsp;:</label>
<select id="drink-options">
  <option value="water">Eau</option>
  <option value="lemonade">Limonade</option>
  <option value="beer">Bière</option>
  <option value="whisky" disabled>Whisky</option>
</select>
```

### JavaScript

```js
const drinks = document.querySelectorAll("#drink-options option");
console.log(drinks[0].disabled); // false
console.log(drinks[3].disabled); // true
drinks[1].disabled = true; // désactive l'option limonade
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("option")}}
- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("optgroup")}}
- La propriété {{DOMxRef("HTMLSelectElement.disabled")}}
- La propriété {{DOMxRef("HTMLOptGroupElement.disabled")}}
- La propriété {{DOMxRef("HTMLOptionElement.selected")}}
- La propriété {{DOMxRef("HTMLOptionElement.index")}}
- L'interface {{DOMxRef("HTMLOptionsCollection")}}
- La pseudo-classe CSS {{CSSxRef(":disabled")}}
