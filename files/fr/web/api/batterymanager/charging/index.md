---
title: BatteryManager.charging
slug: Web/API/BatteryManager/charging
---

{{APIRef("Battery API")}}

La propriété **`BatteryManager.charging`** est une valeur booléenne indiquant si la batterie de l'équipement est en train d'être chargée. Lorsque sa valeur change, l'évènement [`chargingchange`](/fr/docs/Web/API/BatteryManager/chargingchange_event) est déclenché.

Si la batterie est en charge, la variable a la valeur `true`. Sinon, dans le cas de la décharge, la variable vaut `false`.

## Exemple

### HTML

```html
<div id="charging">(état de charge inconnu)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const charging = battery.charging;

  document.querySelector("#charging").textContent = charging;
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
