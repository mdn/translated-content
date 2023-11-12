---
title: BatteryManager.charging
slug: Web/API/BatteryManager/charging
---

{{deprecated_header}}{{APIRef("Battery API")}}

Un valor boleano indicando si está cargando o no la batería del dispositivo (está conectado el cargador).

## Sintaxis

```js
var cargando = battery.charging;
```

El valor de retorno, `cargando` indica si la `battery` se está cargando o no, el cual es un objeto {{domxref("BatteryManager")}}, está actualmente cargandose, si la batería se está cargando, este valor es `true`. De lo contrario el valor es `false`.

## Ejemplo

### Contenido HTML

```html
<div id="cargando">(estado de carga desconocido)</div>
```

### Contenido JavaScript

```js
navigator.getBattery().then(function (battery) {
  var cargando = battery.charging;

  document.querySelector("#cargando").textContent = cargando;
});
```

### Resultado

{{EmbedLiveSample('', '100%', 30)}}

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
