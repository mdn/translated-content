---
title: API de Estado de Bateria
slug: Web/API/Battery_Status_API
tags:
  - API
  - Apps
  - Firefox OS
  - Mobile
translation_of: Web/API/Battery_Status_API
original_slug: Web/API/Estado_de_Bateria
browser-compat: api.BatteryManager
---
{{DefaultAPISidebar("Battery API")}}{{deprecated_header}}

La **API de Estado de Batería**, también conocida como "**Battery API**", provee información acerca del sistema de carga de la batería y permite notificar mediante eventos que son enviados cuando el nivel de la batería cambia. Este puede ser usado para ajustar el uso de recursos por parte de una aplicación y evitar un gasto innecesario de energía cuando la batería esta baja o para guardar cambios en un archivo antes de que la batería se agote y así prevenir perdida de información.

> **Nota:** Esta API _no está disponible_ en los [Web Workers](/es/docs/Web/API/Web_Workers_API) (no está expuesta en {{domxref("WorkerNavigator")}}).

## Interfaces

- {{domxref("BatteryManager")}}
  - : Provee información acerca del nivel de carga de batería del sistema.
- {{domxref("navigator.getBattery()")}}{{readonlyInline}}
  - : Retorna una {{JSxRef("Promise")}} que se resuelve con un objeto {{DOMxRef("BatteryManager")}}.

## Ejemplo

En este ejemplo, observamos los cambios en el estado de la carga (este o no conectado y cargando) y en el nivel de la batería. Esto se hace escuchando los eventos {{event("chargingchange")}}, {{event("levelchange")}}, {{event("chargingtimechange")}} y {{event("dischargingtimechange")}}.

```js
navigator.getBattery().then(function(battery) {
  function updateAllBatteryInfo(){
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function(){
    updateChargeInfo();
  });
  function updateChargeInfo(){
    console.log("La batería esta cargando? "
                + (battery.charging ? "Si" : "No"));
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
    console.log("Nivel de la batería: "
                + battery.level * 100 + "%");
  }

  battery.addEventListener('chargingtimechange', function(){
    updateChargingInfo();
  });
  function updateChargingInfo(){
    console.log("Tiempo de carga de la batería: "
                 + battery.chargingTime + " segundos");
  }

  battery.addEventListener('dischargingtimechange', function(){
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    console.log("Tiempo de descarga de la batería: "
                 + battery.dischargingTime + " segundos");
  }

});
```

Vea también: [El ejemplo en las especificaciones](https://www.w3.org/TR/battery-status/#examples).

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Vea también

- [Hacks blog post - Usando la API de Batería](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
