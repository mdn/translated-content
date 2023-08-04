---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

La méthode **`Geolocation.getCurrentPosition()`** fournit la position actuelle de l'appareil.

## Syntaxe

```js
navigator.geolocation.getCurrentPosition(success[, error[, [options]])
```

### Paramètres

- `success`
  - : Une fonction de rappel qui prend un objet {{domxref("Position")}} comme argument.
- `error` {{optional_inline}}
  - : Une fonction de rappel qui prend un objet {{domxref("PositionError")}} comme argument.
- `options` {{optional_inline}}

  - : Un objet {{domxref("PositionOptions")}} optionnel. Les options décrites par cet objet sont :

    - `maximumAge` : un entier qui exprime une durée en millisecondes ou l'infini pour indiquer la durée maximale pendant laquelle mettre en cache la position.
    - `timeout` : un entier qui exprime la durée, en millisecondes, avant que la fonction de rappel `error` soit appelé. Si cette propriété vaut `0`, la fonction d'erreur ne sera jamais appelée.
    - `enableHighAccuracy` : un booléen qui indique si une précision élevée est requise.

## Exemples

```js
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la géolocalisation](/fr/docs/WebAPI/Using_geolocation)
- {{domxref("Navigator.geolocation")}}
