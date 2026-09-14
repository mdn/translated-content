---
title: AbsoluteOrientationSensor
slug: Web/API/AbsoluteOrientationSensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SecureContext_Header}}{{APIRef("Sensor API")}}

L'interface **`AbsoluteOrientationSensor`** des [APIs Sensor](/fr/docs/Web/API/Sensor_APIs) décrit l'orientation physique de l'appareil par rapport au système de coordonnées de référence de la Terre.

Pour utiliser ce capteur, l'utilisateur·ice doit accorder l'autorisation aux capteurs de l'appareil `'accelerometer'`, `'gyroscope'` et `'magnetometer'` avec [l'API Permissions](/fr/docs/Web/API/Permissions_API).

Cette fonctionnalité peut être bloquée par une [Politique de Permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy) définie sur votre serveur.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("AbsoluteOrientationSensor.AbsoluteOrientationSensor", "AbsoluteOrientationSensor()")}}
  - : Crée un nouvel objet `AbsoluteOrientationSensor`.

## Propriétés d'instance

_Aucune propriété spécifique&nbsp;; hérite des propriétés de ses ancêtres {{DOMxRef("OrientationSensor")}} et {{DOMxRef("Sensor")}}._

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de ses ancêtres {{DOMxRef("OrientationSensor")}} et {{DOMxRef("Sensor")}}._

## Évènements

_Aucun évènement spécifique&nbsp;; hérite des méthodes de son ancêtre, {{DOMxRef("Sensor")}}._

## Exemples

### Exemple simple

L'exemple suivant, qui est vaguement basé sur [la démonstration de <i lang="en">Orientation Phone</i> d'Intel <sup>(angl.)</sup>](https://intel.github.io/generic-sensor-demos/orientation-phone/), instancie un `AbsoluteOrientationSensor` avec une fréquence de 60 fois par seconde. À chaque lecture, il utilise {{DOMxRef("OrientationSensor.quaternion")}} pour faire pivoter un modèle visuel d'un téléphone.

```js
const options = { frequency: 60, referenceFrame: "device" };
const capteur = new AbsoluteOrientationSensor(options);

capteur.addEventListener("reading", () => {
  // le modèle est un objet Three.js instancié ailleurs.
  modele.quaternion.fromArray(capteur.quaternion).inverse();
});
capteur.addEventListener("error", (event) => {
  if (event.error.name === "NotReadableError") {
    console.log("Le capteur n'est pas disponible.");
  }
});
capteur.start();
```

### Exemple de permissions

L'utilisation des capteurs d'orientation nécessite de demander des autorisations pour plusieurs capteurs de l'appareil. Comme l'interface {{DOMxRef("Permissions")}} utilise des promesses, une bonne façon de demander des autorisations est d'utiliser {{JSxRef("Promise.all")}}.

```js
const capteur = new AbsoluteOrientationSensor();
Promise.all([
  navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "magnetometer" }),
  navigator.permissions.query({ name: "gyroscope" }),
]).then((resultats) => {
  if (resultats.every((resultat) => resultat.state === "granted")) {
    capteur.start();
    // …
  } else {
    console.log("Pas d'autorisations pour utiliser AbsoluteOrientationSensor.");
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
