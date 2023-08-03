---
title: BatteryManager.onlevelchange
slug: Web/API/BatteryManager/levelchange_event
---

{{deprecated_header}} {{APIRef("Battery API")}}

La propiedad **`BatteryManager.onlevelchange`** especifica un detector
de eventos para recibir eventos de [`levelchange`](/es/docs/Web/Reference/Events/levelchange). Estos eventos ocurren
cuando el {{domxref("BatteryManager.level", "level")}} de batería se actualiza.

## Sintaxis

```js
navigator.battery.onlevelchange = funcRef;
```

Donde `battery` es un objecto {{domxref("BatteryManager")}},
y `funcRef` es una función que se convoca cuando el evento de [`levelchange`](/es/docs/Web/Reference/Events/levelchange) sucede.

## Ejemplo

### Contenido HTML

```html
<div id="level">(nivel de batería desconocido)</div>
<div id="stateBattery">(estado de carga desconocido)</div>
```

### Contenido JavaScript

```js
navigator.getBattery().then(function (battery) {
  battery.onlevelchange = function () {
    document.querySelector("#level").textContent = battery.level;

    if (battery.charging) {
      document.querySelector("#stateBattery").textContent =
        "Charging time: " + battery.chargingTime / 60;
    } else {
      document.querySelector("#stateBattery").textContent =
        "Discharging time: " + battery.dischargingTime / 60;
    }
  };
});
```

### Resultado

{{EmbedLiveSample('Example', '100%', 40)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
