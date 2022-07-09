---
title: BatteryManager.chargingTime
slug: Web/API/BatteryManager/chargingTime
translation_of: Web/API/BatteryManager/chargingTime
browser-compat: api.BatteryManager.chargingTime
---
{{APIRef("Battery API")}}

La propriété **`BatteryManager.chargingTime`** indique le temps, en secondes, qu'il reste jusqu'à que la batterie soit rechargée, ou vaut `0` si la batterie est déjà rechargée. Si la batterie est en décharge, la variable vaut [`Infinity`](/fr/docs/JavaScript/Reference/Global_Objects/Infinity). Lorsque sa valeur change, l'évènement [`chargingtimechange`](/fr/docs/Web/API/BatteryManager/chargingtimechange_event) est déclenché.

> **Note :** Même si le temps retourné devrait être précis à la seconde, les navigateurs arrondissent cette valeur (typiquement à 15 minutes près) pour des raisons de confidentialité.

## Exemple

### HTML

```html
<div id="chargingTime">(temps de charge inconnu)</div>
```

### JavaScript

```js
navigator.getBattery().then(battery => {
  const time = battery.chargingTime;

  document.querySelector('#chargingTime').textContent = battery.chargingTime;
});
```

### Résultat

{{EmbedLiveSample('', '100%', 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`BatteryManager`](/fr/docs/Web/API/BatteryManager)
- [`navigator.getBattery()`](/fr/docs/Web/API/Navigator/getBattery)
