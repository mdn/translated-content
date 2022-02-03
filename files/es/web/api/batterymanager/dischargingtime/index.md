---
title: BatteryManager.dischargingTime
slug: Web/API/BatteryManager/dischargingTime
tags:
  - API
  - Apps
  - Batería
  - Battery
  - Firefox OS
  - Gecko DOM Reference
  - WebAPI
  - aplicaciones
translation_of: Web/API/BatteryManager/dischargingTime
browser-compat: api.BatteryManager.dischargingTime
---
{{deprecated_header}}{{APIRef("Battery API")}}

Indíca la cantidad de tiempo, en segundos,
que restan antes de que la batería se descargue completamente.

> **Nota:** Incluso si el tiempo devuelto es exacto al segundo, los navegadores los redondean a un intervalo más alto (típicamente a los 15 minutos más cercanos) por razones de privacidad.

## Sintaxis

```js
var time = battery.dischargingTime;
```

Valor de retorno, `time` es el tiempo restante en segundos antes que la `battery`,
que es un objeto {{domxref("BatteryManager")}},
esté completamente descargada y el sistema se suspenda.
Este valor es [`Infinity`](/es/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
Si la batería se está cargando en vez de descargando,
o si el sistema es incapaz de calcular el tiempo de descarga.

## Ejemplo

### Contenido HTML

```html
<div id="dischargingTime">(tiempo de descarga desconocido)</div>
```

### Contenido JavaScript

```js
navigator.getBattery().then(function(battery) {
  var time = battery.dischargingTime;

  document.querySelector("#dischargingTime").textContent = battery.dischargingTime;
});
```

### Resultado

{{EmbedLiveSample('', '100%', 30)}}

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ver también

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}

