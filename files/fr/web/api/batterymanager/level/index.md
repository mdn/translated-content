---
title: BatteryManager.level
slug: Web/API/BatteryManager/level
translation_of: Web/API/BatteryManager/level
browser-compat: api.BatteryManager.level
---
{{APIRef("Battery API")}}

La propriété **`BatteryManager.level`** indique le niveau de charge de la batterie en tant que valeur comprise entre `0.0` et `1.0`. Une valeur de `0.0` signifie que la batterie est vide et que le système est sur le point d'être désactivé. Une valeur de `1.0` signifie que la batterie est pleine. La valeur `1.0` est aussi retournée si le système n'est pas capable de déterminer son niveau de charge ou si le système n'est pas alimenté par une batterie. Lorsque sa valeur change, l'évènement [`levelchange`](/fr/docs/Web/API/BatteryManager/levelchange_event) est déclenché.

## Exemple

### HTML

```html
<div id="level">(niveau de batterie inconnu)</div>
```

### JavaScript

```js
navigator.getBattery().then(battery => {
  const level = battery.level;

  document.querySelector('#level').textContent = level;
});
```

### Résultat

{{EmbedLiveSample('', '100%', 30, '', 'Web/API/BatteryManager/level')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`BatteryManager`](/fr/docs/Web/API/BatteryManager)
- [`navigator.getBattery()`](/fr/docs/Web/API/Navigator/getBattery)
