---
title: Geolocation.watchPosition()
slug: Web/API/Geolocation/watchPosition
tags:
  - API
  - Exemple
  - Géolocalisation
  - Géolocalisation API
  - Méthode
  - Reference
translation_of: Web/API/Geolocation/watchPosition
---
{{ APIref("Geolocation API") }}

La méthode **`Geolocation.watchPosition()`** permet de manipuler une fonction appelée automatiquement à chaque fois que la position de l'appareil change. Vous pouvez de même, en option, manipuler une autre fonction appelée automatiquement pour gérer les erreurs.

Cette méthode retourne une valeur ID de veille qui permet de libérer les fonctions déclarées automatiquement, évoquées précédemment, à l'aide de la méthode {{domxref("Geolocation.clearWatch()")}}.

## Syntaxe

    id = navigator.geolocation.watchPosition(success[, error[, options]])

### Paramètres

- _success_
  - : Nom d'une fonction appelée qui a pour paramètre l'objet {{domxref("Position")}}.
- _error_ {{optional_inline}}
  - : Nom d'une fonction optionnelle qui a pour paramètre l'objet {{domxref("PositionError")}}.
- _options_ {{optional_inline}}
  - : Un objet optionnel {{domxref("PositionOptions")}}.

## Exemple

```js
var id, target, options;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Bravo, vous avez atteint la cible');
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = {
  latitude : 0,
  longitude: 0
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
```

> **Note :** Si votre application fonctionne sous Firefox OS, veillez à la [geolocation wake lock](</en-US/docs/Web/API/Geolocation/navigator.requestWakeLock()>) pour que votre application continue à recevoir les changements de positions si votre application tourne en tâche de fond, ou si votre écran est éteint.

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaire             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------- |
| {{SpecName('Geolocation', '#watch-position', 'Geolocation.watchPosition()')}} | {{Spec2('Geolocation')}} | Specification initiale. |

## Compatibilité des navigateurs

{{Compat("api.Geolocation.watchPosition")}}

## Voir aussi

- [geolocation wake lock](</fr/docs/Web/API/Geolocation/navigator.requestWakeLock()>)
- [Utiliser geolocation](/fr/docs/WebAPI/Using_geolocation)
- L'interface qui lui est réservée, {{domxref("Geolocation")}}, et la façon d'y accéder {{domxref("NavigatorGeolocation.geolocation")}}.
- L'opération inverse : {{domxref("Geolocation.clearWatch()")}}
- Une méthode similaire : {{domxref("Geolocation.getCurrentPosition()")}}
