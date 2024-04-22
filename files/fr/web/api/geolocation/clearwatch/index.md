---
title: Geolocation.clearWatch()
slug: Web/API/Geolocation/clearWatch
---

{{ APIref("Geolocation API") }}

La méthode **`Geolocation.clearWatch()`** est utilisée pour libérer les ressources de localisation/erreur créées antérieurement en utilisant {{domxref("Geolocation.watchPosition()")}}.

## Syntaxe

```js
navigator.geolocation.clearWatch(id);
```

### Paramètres

- _id_
  - : Le nombre ID est donné par la méthode qui permet la localisation : {{domxref("Geolocation.watchPosition()")}} ; ressource que vous désirez supprimer.

## Exemple

```js
var id, target, option;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulation, you reach the target");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser geolocation](/fr/docs/Web/API/Using_geolocation)
- {{domxref("Geolocation")}}
- {{domxref("Geolocation.watchPosition()")}}
- {{domxref("Geolocation.getCurrentPosition()")}}
