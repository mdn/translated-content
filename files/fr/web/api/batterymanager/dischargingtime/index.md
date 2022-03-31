---
title: BatteryManager.dischargingTime
slug: Web/API/BatteryManager/dischargingTime
translation_of: Web/API/BatteryManager/dischargingTime
browser-compat: api.BatteryManager.dischargingTime
---
{{APIRef("Battery API")}}

La propriété **`BatteryManager.dischargingTime`** indique le temps, en secondes, qu'il reste jusqu'à que la batterie soit déchargée, ou vaut [`Infinity`](/fr/docs/JavaScript/Reference/Global_Objects/Infinity) si la batterie est en train d'être chargée ou si le système ne parvient pas à calculer un temps restant. Lorsque sa valeur change, l'évènement [`dischargingtimechange`](/fr/docs/Web/API/BatteryManager/dischargingtimechange_event) est déclenché.

> **Note :** Même si le temps retourné devrait être précis à la seconde, les navigateurs arrondissent cette valeur (typiquement à 15 minutes près) pour des raisons de confidentialité.

## Exemple

### HTML

```html
<div id="dischargingTime">(temps de décharge inconnu)</div>
```

### JavaScript

```js
navigator.getBattery().then(battery => {
  const time = battery.dischargingTime;

  document.querySelector('#dischargingTime').textContent = battery.dischargingTime;
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
