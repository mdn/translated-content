---
title: BatteryManager.onchargingchange
slug: Web/API/BatteryManager/chargingchange_event
tags:
  - API
  - Battery API
  - Event Handler
  - NeedsMarkupWork
  - Property
  - Reference
translation_of: Web/API/BatteryManager/onchargingchange
original_slug: Web/API/BatteryManager/onchargingchange
browser-compat: api.BatteryManager.onchargingchange
---
{{deprecated_header}}

{{APIRef("Battery API")}}

Especifica un evento que escucha para recibir eventos {{event("chargingchange")}}. Estos eventos se producen cuando se actualiza el estado de la batería {{domxref("BatteryManager.charging", "charging")}}.

## Sintaxis

```js
battery.onchargingchange = funcRef
```

Donde `battery` es un objeto {{domxref("BatteryManager")}}, y `funcRef` es una función para llamar cuando se produce el evento {{event("chargingchange")}}.

## Ejemplo

### Contenido HTML

```html
<div id="level">(nivel de batería desconocido)</div>
<div id="chargingTime">(tiempo de carga desconocido)</div>
```

### Contenido JavaScript

```js
navigator.getBattery().then(function(battery) {

   battery.onchargingchange = chargingChange();

   function chargingChange() {
      document.querySelector('#level').textContent = battery.level;
      document.querySelector('#chargingTime').textContent = battery.chargingTime;
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
