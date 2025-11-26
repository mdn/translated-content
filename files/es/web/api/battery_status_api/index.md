---
title: API de Battery Status
slug: Web/API/Battery_Status_API
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Battery API")}}{{securecontext_header}}

La **API de Battery Status**, más comúnmente referida como la **API de la batería**, proporciona información sobre el estado de carga de la batería del sistema y te permite ser notificado por eventos que se envían cuando el nivel de la batería o su estado de carga cambia. Esto se puede usar para ajustar el uso de recursos de tu aplicación para reducir el drenaje de batería cuando es baja, o para guardar los cambios antes de que se acabe la batería para prevenir pérdida de datos.

> [!NOTE]
> Esta API _no está disponible_ en los [Web Workers](/es/docs/Web/API/Web_Workers_API) (no se expone a través de {{domxref("WorkerNavigator")}}).

## Interfaces

- {{domxref("BatteryManager")}}
  - : Proporciona información sobre el nivel de carga de la batería del sistema.

### Extensiones a otras interfaces

- {{domxref("Navigator.getBattery()")}}
  - : Devuelve una {{JSxRef("Promise")}} que se resuelve con un objeto {{DOMxRef("BatteryManager")}}.

## Ejemplo

En este ejemplo, observamos los cambios en el estado de carga (esté o no enchufado y cargando) y en el nivel y la sincronización de la batería. Esto se hace escuchando por los eventos {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}, {{domxref("BatteryManager.levelchange_event", "levelchange")}}, {{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}} y {{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}}.

```js
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(`¿Cargándose la batería? ${battery.charging ? "Sí" : "No"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`Nivel de la batería: ${battery.level * 100} %`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(
      `Tiempo de carga de la batería: ${battery.chargingTime} segundos`,
    );
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(
      `Tiempo de descarga de la batería: ${battery.dischargingTime} segundos`,
    );
  }
});
```

Consulta también [el ejemplo en la especificación](https://w3c.github.io/battery/#examples).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Hacks blog post - Using the Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
