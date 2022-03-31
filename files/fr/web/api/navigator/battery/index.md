---
title: window.navigator.battery
slug: Web/API/Navigator/battery
translation_of: Web/API/Navigator/battery
---
{{ Apiref() }}

{{ SeeCompatTable() }}

L'API Battery Status fournit des informations sur le niveau de charge du système et vous permet d'être notifiée via certains évènements si le niveau de batterie varie. Elle peut être utilisée pour privilégier les tâches moins gourmantes en traitement processeur sur votre site si le niveau de batterie est faible ou permettre une sauvegarde de vos travaux pour prévir d'une perte de données si la batterie est presque vide.

## Attributs

- `charging`
  - : **Lecture seule**. Un booléen représentant le statut de charge de la batterie du système. Il retourne `vrai` si la batterie est en charge, si l'état de charge n'est pas déterminable, ou si aucune batterie n'est branchée au système. Retourne `faux` si la batterie est en cours de décharge.
- `chargingTime`
  - : **Lecture seule**. Un double représentant le temps restant en secondes avant que la batterie ne soit complètement chargée. Retourne 0 si la batterie est complètement chargée.
    Retourne un infini positif si la batterie se décharge ou si l'implémentation est incapable de déterminer le temps de charge restant.
- `dischargingTime`
  - : **Lecture seule**. Un double représentant le temps restant en secondes avant que la batterie ne soit complètement déchargée et que le système ne soit suspendu. Retourne un infini positif si la batterie est en charge, si l'implémentation n'est pas capable de déterminer le temps de décharge restant, ou s'il n'y a pas de batterie branchée au système.
- `level`
  - : **Lecture seule**. Un double représentant le niveau de charge de la batterie du système, échelonné de 0 à 1.0. Retourne 0 si la batterie est vide et que le système est sur le point d'être suspendu. Retourne 1.0 si la batterie est pleine, si l'implémentation n'est pas capable de déterminer le niveau de charge de la batterie, ou s'il n'y a pas de batterie branchée au système.

## Evènements

- `chargingchange`
  - : Déclenché lorsque l'état de charge de la batterie est mis à jour.
- `chargingtimechange`
  - : Déclenché lorsque le temps de charge de la batterie est mis à jour.
- `dischargingtimechange`
  - : Déclenché lorsque le temps de decharge de la batterie est mis à jour.
- `levelchange`
  - : Déclenché lorsque le niveau de charge de la batterie est mis à jour.

## Exemple

Voir aussi [l'exemple dans la specification](http://dev.w3.org/2009/dap/system-info/battery-status.html#introduction).

```js
var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

function updateBatteryStatus() {
  alert("Battery status: " + battery.level * 100 + " %");

  if (battery.charging) {
    alert("Battery is charging");
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();
```

## Compatibilité des navigateurs

{{Compat("api.Navigator.battery")}}

## Voir aussi

- [Blog post - Using the Battery API](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
- [David Walsh on the Javascript Battery Api](http://davidwalsh.name/battery-api)
