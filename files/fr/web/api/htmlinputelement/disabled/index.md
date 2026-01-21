---
title: "HTMLInputElement : propriété disabled"
short-title: disabled
slug: Web/API/HTMLInputElement/disabled
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

La propriété **`disabled`** de l'interface {{DOMxRef("HTMLInputElement")}} est une valeur booléenne qui reflète l'attribut HTML [`disabled`](/fr/docs/Web/HTML/Reference/Elements/input#disabled), lequel indique si le contrôle est désactivé. Si le contrôle est désactivé, il n'accepte pas les clics. Un élément désactivé est inutilisable et ne peut pas être cliqué.

## Valeur

Une valeur booléenne.

## Exemples

### HTML

```html
<p>
  <label>
    <input id="check-box" name="b" value="1" type="checkbox" disabled />
    Cochez cette case&nbsp;!
  </label>
</p>
<p>
  <label>
    <input id="toggle-box" name="b" value="2" type="checkbox" /> Activez l'autre
    case à cocher.
  </label>
</p>
```

### JavaScript

```js
const checkBox = document.getElementById("check-box");
const toggleBox = document.getElementById("toggle-box");

toggleBox.addEventListener("change", (event) => {
  checkBox.disabled = !event.target.checked;
});
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
