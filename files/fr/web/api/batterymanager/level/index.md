---
title: BatteryManager.level
slug: Web/API/BatteryManager/level
---

{{APIRef("Battery API")}}

La propriété **`BatteryManager.level`** indique le niveau de charge de la batterie en tant que valeur comprise entre `0.0` et `1.0`. Une valeur de `0.0` signifie que la batterie est vide et que le système est sur le point d'être désactivé. Une valeur de `1.0` signifie que la batterie est pleine. La valeur `1.0` est aussi retournée si le système n'est pas capable de déterminer son niveau de charge ou si le système n'est pas alimenté par une batterie. Lorsque sa valeur change, l'évènement [`levelchange`](/fr/docs/Web/API/BatteryManager/levelchange_event) est déclenché.

## Exemple

### HTML

```html
<button id="get-level">Obtenir le niveau de la batterie</button>
<div id="output"></div>
```

### JavaScript

```js
const getLevel = document.querySelector("#get-level");
const output = document.querySelector("#output");

getLevel.addEventListener("click", async () => {
  if (!navigator.getBattery) {
    output.textContent = "Le gestionnaire de batterie n'est pas pris en charge";
  } else {
    const manager = await navigator.getBattery();
    const level = manager.level;
    output.textContent = `Niveau de batterie : ${level}`;
  }
});
```

### Résultat

{{EmbedLiveSample('')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`BatteryManager`](/fr/docs/Web/API/BatteryManager)
- [`navigator.getBattery()`](/fr/docs/Web/API/Navigator/getBattery)
