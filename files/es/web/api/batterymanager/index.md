---
title: BatteryManager
slug: Web/API/BatteryManager
translation_of: Web/API/BatteryManager
tags:
  - API
  - Batería API
  - Dispositivo API
  - Interface
  - Obsoleto
  - Referencia
browser-compat: api.BatteryManager
---
{{APIRef}}{{deprecated_header}}

La interfaz `BatteryManager` de la [API del Estado de la Batería](/en-US/docs/Web/API/Battery_Status_API) proporciona la información del nivel de carga de la bateria del sistema. El método {{domxref("navigator.getBattery()")}} regresa una promesa que resuelve con la interfaz de `BatteryManager`.


## Propiedades

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : Valor booleano que indica si la bateria se está o no cargando.
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : Número que indica el tiempo que queda en segundos hasta que la batería esté completamente cargada, o 0 si la batería está completamente cargada.
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : Número que indica el tiempo restante en segundos hasta que la batería esté completamente descargada y el sistema entra en suspensión.
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : Número que indica el nivel de carga de la batería del sistema, los valores están escalados entre 0.0 y 1.0.


### Eventos del controlador

- {{domxref("BatteryManager.onchargingchange")}}
  - : Controlador para el evento {{event("chargingchange")}} ; Este evento se envía cuando se actualiza el estado de carga de la batería.
- {{domxref("BatteryManager.onchargingtimechange")}}
  - : Controlador para el evento {{event("chargingtimechange")}}; Este evento se envía cuando se actualiza el tiempo de carga de la batería.
- {{domxref("BatteryManager.ondischargingtimechange")}}
  - :  Controlador para el evento{{event("dischargingtimechange")}}; Este evento se envía cuando se actualiza el tiempo de descarga de la batería.
- {{domxref("BatteryManager.onlevelchange")}}
  - : Controlador para el evento {{event("levelchange")}}; Este evento se envía cuando se actualizael nivel de la batería.

## Métodos

_Hereda métodos de su interfaz padre:_ {{domxref("EventTarget")}}.

## Especificaciones

{{Specifications}}


## Compatibilidad del navegador

{{Compat}}

## Ver también

- La [API del Estado de la Batería](/en-US/docs/Web/API/Battery_Status_API)
- {{domxref("navigator.getBattery")}}
