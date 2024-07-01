---
title: BatteryManager.onchargingchange
slug: Web/API/BatteryManager/chargingchange_event
---

{{deprecated_header}}

{{APIRef("Battery API")}}

Especifica un evento que escucha para recibir eventos [`chargingchange`](/es/docs/Web/Reference/Events/chargingchange). Estos eventos se producen cuando se actualiza el estado de la batería {{domxref("BatteryManager.charging", "charging")}}.

## Sintaxis

```js
battery.onchargingchange = funcRef;
```

Donde `battery` es un objeto {{domxref("BatteryManager")}}, y `funcRef` es una función para llamar cuando se produce el evento [`chargingchange`](/es/docs/Web/Reference/Events/chargingchange).

## Ejemplo

### Contenido HTML

```html
<div id="level">(nivel de batería desconocido)</div>
<div id="chargingTime">(tiempo de carga desconocido)</div>
```

### Contenido JavaScript

```js
navigator.getBattery().then(function (battery) {
  battery.onchargingchange = chargingChange();

  function chargingChange() {
    document.querySelector("#level").textContent = battery.level;
    document.querySelector("#chargingTime").textContent = battery.chargingTime;
  }
});
```

### Resultado

{{EmbedLiveSample('', '100%', 40)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
