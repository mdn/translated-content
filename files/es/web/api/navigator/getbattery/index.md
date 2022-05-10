---
title: Navigator.getBattery()
slug: Web/API/Navigator/getBattery
translation_of: Web/API/Navigator/getBattery
browser-compat: api.Navigator.getBattery
---
{{ ApiRef("Battery API") }}

El método **`getBattery()`** provee información acerca de la
batería del sistema. Retorna una promesa de batería, que es resuelta en un objeto
{{domxref("BatteryManager")}} proveyendo también algunos eventos nuevos que se pueden manejar
para monitorear el estado de la batería. Esto implementa la [API de Estado de Batería](/es/docs/Web/API/Battery_Status_API); ver esa
documentación para detalles adicionales, una guía para usar la API, y código de ejemplo.

> **Nota:** En algunos navegadores el acceso a esta característica está controlado por la directiva {{HTTPHeader("Feature-Policy")}}: {{HTTPHeader("Feature-Policy/battery","battery")}}.

## Sintaxis

```js
getBattery()
```

### Parámetros

Ninguno.

### Valor de retorno

Una {{JSxRef("Promise")}} que, cuando finaliza, llama a su manejador de cumplimiento con un
solo parámetro: un objeto {{DOMxRef("BatteryManager")}} que puede ser usado para obtener
información acerca del estado de la batería.

### Excepciones

Este método no arroja excepciones reales; en su lugar, rechaza la promesa retornada, pasando dentro de ella una {{domxref("DOMException")}} cuyo `name` (nombre) es uno de los siguientes:

- `SecurityError`

  - : El Agente de Usuario no expone información de batería a contextos inseguros y este método fue llamado de un contexto inseguro.

    > **Nota:** Versiones antiguas de algunos Agentes de Usuario pueden permitir el uso de esta característica en contextos inseguros.

- `NotAllowedError`

  - : Ningún Agente de Usuario arroja actualmente esta excepción, pero la especificación describe el siguiente comportamiento:
    > Este documento no tiene permitido el uso de esta característica.
    > Por ejemplo, puede no estar permitido o restringido explícitamente por medio de la característica {{HTTPHeader("Feature-Policy")}} {{HTTPHeader("Feature-Policy/battery", "battery")}}.

## Ejemplos

Este ejemplo obtiene el estado actual de carga de la batería y establece un
manejador para el evento {{Event("chargingchange")}}, de manera tal que el estado de carga
es grabado cuando cambia.

```js
let batteryIsCharging = false;

navigator.getBattery().then(function(battery) {
  batteryIsCharging = battery.charging;

  battery.addEventListener('chargingchange', function() {
    batteryIsCharging = battery.charging;
  });
});
```

Para más ejemplos y detalles, ver [API de Estado de Batería](/es/docs/Web/API/Battery_Status_API).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [API de Estado de Batería](/es/docs/Web/API/Battery_Status_API)
- Característica `Feature-Policy` {{HTTPHeader("Feature-Policy/battery", "battery")}}
