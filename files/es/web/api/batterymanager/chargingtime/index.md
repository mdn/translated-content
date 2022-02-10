---
title: BatteryManager.chargingTime
slug: Web/API/BatteryManager/chargingTime
translation_of: Web/API/BatteryManager/chargingTime
browser-compat: api.BatteryManager.chargingTime
---
{{deprecated_header}}

{{APIRef("Battery API")}}

Indica la cantidad de tiempo, en segundos, que faltan para que la batería esté completamente cargada.

> **Nota:** Incluso si el tiempo devuelto es exacto al segundo, los navegadores los redondean a un intervalo más alto (típicamente a los 15 minutos más cercanos) por razones de privacidad.

## Sintaxis

```js
var time = battery.chargingTime;
```

La variable `time` recibe el tiempo restante en segundos para que la batería
esté completamente cargada o 0 (cero) si la `battery` ya está completamente cargada.
Si la batería está descargándose el valor es [`Infinity`](/es/docs/Web/JavaScript/Reference/Global_Objects/Infinity).

## Ejemplo

### Contenido HTML

```html
<div id="chargingTime">(tiempo de descarga desconocido)</div>
```

### Contenido JavaScript

```js
navigator.getBattery().then(function(battery) {
  var time = battery.chargingTime;

  document.querySelector("#chargingTime").textContent = battery.chargingTime;
});
```

### Resultado

{{EmbedLiveSample('', '100%', 30)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}

