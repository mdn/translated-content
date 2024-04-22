---
title: API Battery Status
slug: Web/API/Battery_Status_API
---

{{DefaultAPISidebar("Battery API")}}

L'**API <i lang="en">Battery Status</i>**, souvent mentionnée sous le nom **<i lang="en">Battery API</i>** (l'API <i lang="en">Battery</i>), fournit des informations sur le niveau de charge du système et permet d'envoyer des événements pour prévenir d'un changement du niveau de charge de la batterie. Cela peut être utilisé pour ajuster la consommation d'une application et la réduire pour réduire l'utilisation de la batterie lorsque son niveau de charge est bas ou encore de sauvegarder les données quand la batterie est bientôt vide.

> **Note :** Cette API _n'est pas disponible_ dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API) (elle n'est pas exposée via [`WorkerNavigator`](/fr/docs/Web/API/WorkerNavigator)).

## Interfaces

- [`BatteryManager`](/fr/docs/Web/API/BatteryManager)
  - : Fournit des informations sur le niveau de charge du système.
- [`navigator.getBattery()`](/fr/docs/Web/API/Navigator/getBattery) {{ReadOnlyInline}}
  - : Renvoie un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) dont la valeur de résolution est un objet `BatteryManager`.

## Exemple

Dans cet exemple, on cherche à surveiller les changements, à la fois du statut de la charge (est-ce que l'équipement est branché et se recharge ou est ce que l'équipement est alimenté par sa batterie) et des changements du niveau de charge dans le temps. Cela se fait en surveillant les événements [`chargingchange`](/fr/docs/Web/API/BatteryManager/chargingchange_event), [`levelchange`](/fr/docs/Web/API/BatteryManager/levelchange_event), [`chargingtimechange`](/fr/docs/Web/API/BatteryManager/chargingtimechange_event) et [`dischargingtimechange`](/fr/docs/Web/API/BatteryManager/dischargingtimechange_event).

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
    console.log("Battery en charge ? " + (battery.charging ? "Oui" : "Non"));
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log("Niveau de batterie : " + battery.level * 100 + "%");
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(
      "Temps avant charge de la batterie : " +
        battery.chargingTime +
        " secondes",
    );
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(
      "Autonomie sur batterie : " + battery.dischargingTime + " secondes",
    );
  }
});
```

Voir aussi [l'exemple de la spécification](https://www.w3.org/TR/battery-status/#examples).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Billet de blog sur Hacks — Utiliser l'API <i lang="en">Battery</i> (en anglais)](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
