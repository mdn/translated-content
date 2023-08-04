---
title: BatteryManager.level
slug: Web/API/BatteryManager/level
---

{{APIRef("Battery API")}}

La propiedad **`BatteryManager.level`** indica el nivel de carga actual de la batería como un valor entre `0.0` y `1.0`.
Un valor de `0.0` significa que la batería está vacía y el sistema está a punto de suspenderse.
Un valor de `1.0` significa que la batería está llena.
También se devuelve un valor de `1.0` si la implementación no puede determinar el nivel de carga de la batería o si el sistema no funciona con batería.
Cuando cambia su valor, se ejecuta el evento [`levelchange`](/es/docs/Web/API/BatteryManager/levelchange_event).

## Valor

Un número.

## Ejemplo

### Obtener el nivel de la batería

#### HTML

```html
<button id="get-level">Obtener nivel de batería</button>
<div id="output"></div>
```

#### JavaScript

```js
const getLevel = document.querySelector("#get-level");
const output = document.querySelector("#output");

getLevel.addEventListener("click", async () => {
  if (!navigator.getBattery) {
    output.textContent = "El administrador de batería no es compatible";
  } else {
    const manager = await navigator.getBattery();
    const level = manager.level;
    output.textContent = `Battery level: ${level}`;
  }
});
```

#### Resultado

{{ EmbedLiveSample('Obtener el nivel de la batería') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
