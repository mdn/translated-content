---
title: BatteryManager.onlevelchange
slug: Web/API/BatteryManager/levelchange_event
translation_of: Web/API/BatteryManager/onlevelchange
original_slug: Web/API/BatteryManager/onlevelchange
browser-compat: api.BatteryManager.onlevelchange
---
{{deprecated_header}} {{APIRef("Battery API")}}

La propiedad **`BatteryManager.onlevelchange`** especifica un detector
de eventos para recibir eventos de {{event("levelchange")}}. Estos eventos ocurren
cuando el {{domxref("BatteryManager.level", "level")}} de batería se actualiza.

## Sintaxis

```js
navigator.battery.onlevelchange = funcRef;
```

Donde `battery` es un objecto {{domxref("BatteryManager")}},
y `funcRef` es una función que se convoca cuando el evento de {{event("levelchange")}} sucede.

## Ejemplo

### Contenido HTML

```html
<div id="level">(nivel de batería desconocido)</div>
<div id="stateBattery">(estado de carga desconocido)</div>
```

### Contenido JavaScript

```js
navigator.getBattery().then(function(battery) {
  battery.onlevelchange = function(){
    document.querySelector('#level').textContent = battery.level;

    if(battery.charging) {
      document.querySelector('#stateBattery').textContent =
          "Charging time: " + (battery.chargingTime / 60);
    }
    else {
      document.querySelector('#stateBattery').textContent =
          "Discharging time: " + (battery.dischargingTime / 60);
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
