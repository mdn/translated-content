---
title: BatteryManager.level
slug: Web/API/BatteryManager/level
tags:
  - API
  - Battery API
  - NeedsMarkupWork
  - Property
  - Reference
translation_of: Web/API/BatteryManager/level
browser-compat: api.BatteryManager.level
---
{{deprecated_header}}{{APIRef("Battery API")}}

Indica el valor actual del nivel de carga, estos valores están entre `0.0` a `1.0`.

## Sintaxis

```js
var level = battery.level;
```

`Level` es un número que representa el nivel de carga de la batería del sistema en una escala entre `0.0` y `1.0`. Un valor de `0` significa que la `battery`, que es un objeto de tipo {{domxref("BatteryManager")}}, está vacía y el sistema esta apunto de entrar en suspensión. Un valor de `1.0` significa que `battery` está cargada al máximo. El valor `1.0` también nos indica que el sistema no puede determinar el nivel de carga de la batería o si no está alimentado por batería.

## Ejemplo

### Contenido HTML

```html
<div id="level">(nivel de batería desconocido)</div>
```

### Contenido JavaScript

```js
navigator.getBattery().then(function(battery) {
  var level = battery.level;

  document.querySelector("#level").textContent = level;
});
```

### Resuldado

{{EmbedLiveSample('', '100%', 30, '', 'Web/API/BatteryManager/level')}}

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ver también

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}

