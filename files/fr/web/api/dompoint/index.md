---
title: DOMPoint
slug: Web/API/DOMPoint
---

{{APIRef("Geometry Interfaces")}}{{ SeeCompatTable() }}

Un **`DOMPoint`** représente un point 2D ou 3D dans le système de coordonnées.

En général, un x positif représente une position à droite de l'origine ; un y positif est une position au-dessus de l'origine ; et un z positif est une position vers l'extérieur de l'écran (autrement dit, opposée à la direction de l'utilisateur).

Il hérite de son parent {{domxref("DOMPointReadOnly")}}.

## Constructeur

- {{domxref("DOMPoint.DOMPoint","DOMPoint()")}}
  - : Crée un nouvel objet `DOMPoint`.

## Méthodes

_`DOMPoint` hérite des méthodes de son parent {{domxref("DOMPointReadOnly")}}._

- {{domxref("DOMPointReadOnly.fromPoint")}}
  - : Traduit la position/perspective d'un `DOMPoint` à une nouvelle position (ne semble pas encore être pris en charge).

## Propriétés

_`DOMPoint` hérite des propriétés de son parent {{domxref("DOMPointReadOnly")}}._

- {{domxref("DOMPointReadOnly.x")}}
  - : La coordonnée x du `DOMPoint`.
- {{domxref("DOMPointReadOnly.y")}}
  - : La coordonnée y du `DOMPoint`.
- {{domxref("DOMPointReadOnly.z")}}
  - : La coordonnée z du `DOMPoint`.
- {{domxref("DOMPointReadOnly.w")}}
  - : La valeur de perspective du `DOMPoint`.

## Exemples

Dans l' [API WebVR](/fr/docs/Web/API/WebVR_API) (_VR = réalité virtuelle_), les valeurs `DOMPoint` sont utilisées pour représenter les points dans l'espace de coordonnées dans lequel l'affichage monté sur la tête de l'utilisateur existe. Dans l'extrait suivant, la position du VR HMD peut être récupérée en saisissant d'abord une référence à l'état actuel du capteur de position avec {{domxref("PositionSensorVRDevice.getState")}}, puis en accédant au résultat de la {{domxref("VRPositionState.position","position")}} de la propriété {{domxref("VRPositionState")}}, qui renvoie un `DOMPoint`. Notez ci-dessous l'utilisation de `position.x`, `position.y` et `position.z`.

```js
function setView() {
      var posState = gPositionSensor.getState();
      if(posState.hasPosition) {
        posPara.textContent = 'Position: x' + roundToTwo(posState.position.x) + " y"
                                    + roundToTwo(posState.position.y) + " z"
                                    + roundToTwo(posState.position.z);
        xPos = -posState.position.x * WIDTH * 2;
        yPos = posState.position.y * HEIGHT * 2;
        if(-posState.position.z > 0.01) {
          zPos = -posState.position.z;
        } else {
          zPos = 0.01;
        }
      }

  ...

}
```

> **Note :** Voir notre [positionsensorvrdevice demo](https://github.com/mdn/webvr-tests/blob/gh-pages/positionsensorvrdevice/index.html) pour le code complet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("DOMRect")}}
