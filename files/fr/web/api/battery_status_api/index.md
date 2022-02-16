---
title: API Battery Status
slug: Web/API/Battery_status_API
tags:
  - API
  - Aperçu
  - Guide
  - Obsolete
translation_of: Web/API/Battery_Status_API
---
{{DefaultAPISidebar("Battery API")}}{{Obsolete_Header}}

L'**API _Battery Status_**, souvent mentionnée sous le nom **Battery API**, fournit des informations sur le niveau de charge du système et permet d'envoyer des événements pour prévenir d'un changement du niveau de charge de la batterie. Cela peut être utilisé pour ajuster la consommation d'une application et la réduire pour réduire l'utilisation de la batterie lorsque son niveau de charge est bas ou encore de sauvegarder les données quand la batterie est bientôt vide.

L'API Battery Status API étend l'interface {{domxref("window.navigator")}} avec la propriété {{domxref("window.navigator.battery")}}, méthode qui renvoie une promesse, résolue par l'objet {{domxref("BatteryManager")}}. Cet objet permet d'ajouter des nouveaux événements pour superviser l'état de la batterie.

## Exemples

Dans cet exemple, on cherche à surveiller les changements, à la fois du statut de la charge (est-ce que l'équipement est branché et se recharge ou est ce que l'équipement est alimenté par sa batterie) et des changements du niveau de charge dans le temps.

Cela se fait en surveillant les événements :

- {{event("chargingchange")}}: changement de l'êtat de charge
- {{event("levelchange")}}: changement du niveau de batterie
- {{event("chargingtimechange")}}: évolution de l'estimation du temps de recharge
- {{event("dischargingtimechange")}}: évolution de l'estimation d'autonomie sur batterie

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
    console.log("Battery en charge ? "
                + (battery.charging ? "Oui" : "Non"));
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
    console.log("Niveau de batterie: "
                + battery.level * 100 + "%");
  }

  battery.addEventListener('chargingtimechange', function(){
    updateChargingInfo();
  });
  function updateChargingInfo(){
    console.log("Temps avant charge de la batterie: "
                 + battery.chargingTime + " secondes");
  }

  battery.addEventListener('dischargingtimechange', function(){
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    console.log("Autonomie sur batterie: "
                 + battery.dischargingTime + " secondes");
  }

});
```

Voir aussi [l'exemple de la spécification](http://www.w3.org/TR/battery-status/#examples).

## Spécifications

| Spécification                        | État                             | Commentaires         |
| ------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("Battery API")}} | {{Spec2("Battery API")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.BatteryManager")}}

## Voir aussi

- [Récupérer les informations relatives à la batterie - article et démonstration](/en-US/Apps/Build/gather_and_modify_data/retrieving_battery_status_information)
- [Billet de blog sur Hacks - Utiliser l'API Battery (en anglais)](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
