---
title: "HTMLSelectElement : propriété disabled"
short-title: disabled
slug: Web/API/HTMLSelectElement/disabled
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

La propriété **`disabled`** de l'interface {{DOMxRef("HTMLSelectElement")}} est un booléen qui reflète l'attribut HTML [`disabled`](/fr/docs/Web/HTML/Reference/Elements/select#disabled), lequel indique si le contrôle est désactivé. Si le contrôle est désactivé, il n'accepte pas les clics. Un élément désactivé est inutilisable et ne peut pas être sélectionné.

## Valeur

Une valeur booléenne.

## Exemples

### HTML

```html
<label>
  Autoriser les boissons&nbsp;?
  <input id="allow-drinks" type="checkbox" />
</label>

<label for="drink-select">Sélection de la boisson&nbsp;:</label>
<select id="drink-select" disabled>
  <option value="1">Eau</option>
  <option value="2">Bière</option>
  <option value="3">Pepsi</option>
  <option value="4">Whisky</option>
</select>
```

### JavaScript

```js
const allowDrinksCheckbox = document.getElementById("allow-drinks");
const drinkSelect = document.getElementById("drink-select");

allowDrinksCheckbox.addEventListener("change", (event) => {
  drinkSelect.disabled = !event.target.checked;
});
```

### Résultat

{{EmbedLiveSample('Examples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
