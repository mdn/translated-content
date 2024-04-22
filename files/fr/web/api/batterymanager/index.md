---
title: BatteryManager
slug: Web/API/BatteryManager
---

{{APIRef()}}

L'interface `BatteryManager` fournit des moyens pour obtenir des informations sur le niveau de charge de la batterie du système. La méthode [`navigator.getBattery()`](/fr/docs/Web/API/Navigator/getBattery) renvoie un objet `Promise` dont la valeur de résolution est une interface `BatteryManager`.

{{InheritanceDiagram}}

## Propriétés

- [`BatteryManager.charging`](/fr/docs/Web/API/BatteryManager/charging) {{ReadOnlyInline}}
  - : Une valeur booléenne indiquant si la batterie est actuellement en cours de charge.
- [`BatteryManager.chargingTime`](/fr/docs/Web/API/BatteryManager/chargingTime) {{ReadOnlyInline}}
  - : Un nombre qui représente le temps restant en secondes jusqu'à ce que la batterie soit complètement chargée, ou `0` si la batterie est complètement chargée.
- [`BatteryManager.dischargingTime`](/fr/docs/Web/API/BatteryManager/dischargingTime) {{ReadOnlyInline}}
  - : Un nombre qui représente le temps restant en secondes jusqu'à ce que la batterie soit complètement déchargée et le système suspendu.
- [`BatteryManager.level`](/fr/docs/Web/API/BatteryManager/level) {{ReadOnlyInline}}
  - : Un nombre qui représente le niveau de charge de la batterie du système adapté à une valeur comprise entre `0.0` et `1.0`.

## Méthodes

_`BatteryManager` hérite des méthodes de son interface parente&nbsp;:_ [`EventTarget`](/fr/docs/Web/API/EventTarget).

## Évènements

- [`chargingchange`](/fr/docs/Web/API/BatteryManager/chargingchange_event)
  - : Se déclenche lorsque l'état de charge de la batterie (la propriété [`charging`](/fr/docs/Web/API/BatteryManager/charging)) est mis à jour.
- [`chargingtimechange`](/fr/docs/Web/API/BatteryManager/chargingtimechange_event)
  - : Se déclenche lorsque le temps de recharge de la batterie (la propriété [`chargingTime`](/fr/docs/Web/API/BatteryManager/chargingTime)) est mis à jour.
- [`dischargingtimechange`](/fr/docs/Web/API/BatteryManager/dischargingtimechange_event)
  - : Se déclenche lorsque le temps de décharge de la batterie (la propriété [`dischargingTime`](/fr/docs/Web/API/BatteryManager/dischargingTime)) est mis à jour.
- [`levelchange`](/fr/docs/Web/API/BatteryManager/levelchange_event)
  - : Se déclenche lorsque le niveau de charge de la batterie (la propriété [`level`](/fr/docs/Web/API/BatteryManager/level)) est mis à jour.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API <i lang="en">Battery Status</i>](/fr/docs/Web/API/Battery_Status_API)
- [`navigator.getBattery()`](/fr/docs/Web/API/Navigator/getBattery)
