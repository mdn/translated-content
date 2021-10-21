---
title: DeviceMotionEvent.accelerationIncludingGravity
slug: Web/API/DeviceMotionEvent/accelerationIncludingGravity
tags:
  - API
  - Appareil
  - Mobile
  - Mouvement
  - Orientation
  - Propriétés
  - axes
translation_of: Web/API/DeviceMotionEvent/accelerationIncludingGravity
---
{{ ApiRef("Device Orientation Events") }}

La propriété **`accelerationIncludingGravity`** renvoie la valeur d'accélération enregistrée par l'appareil, en [mètres par seconde au carré (m/s<sup>2</sup>)](https://fr.wikipedia.org/wiki/M%C3%A8tre_par_seconde_carr%C3%A9e). Contrairement à  {{domxref("DeviceMotionEvent.acceleration")}} qui compense pour tenir compte de l'influence de la gravité, sa valeur est la somme de l'accélération de l'appareil induite par l'utilisateur et de celle provoquée par la gravité.

Cette valeur n'est pas  aussi utile que {{domxref("DeviceMotionEvent.acceleration")}}, mais elle peut être la seule disponible, par exemple pour un appareil qui ne peut supprimer la gravité des données d'accélération puisqu'il ne l'utilise pas, comme les périphériques sans gyroscope.

## Syntaxe

    var acceleration = instanceOfDeviceMotionEvent.accelerationIncludingGravity;

## Valeur

La propriété `accelerationIncludingGravity` est un objet fournissant une information sur l'accélération des 3 axes. Pour chacun d'eux, elle est représentée par leur propre propriété :

- `x`
  - : Représente l'accélération sur l'axe x qui est l'axe est-ouest.
- `y`
  - : Représente l'accélération sur l'axe y qui est l'axe nord-sud
- `z`
  - : Représente l'accélération sur l'axe z qui est l'axe haut-bas

## Spécifications

| Spécification                                | Statut                                   | Commentaire          |
| -------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DeviceMotionEvent.accelerationIncludingGravity")}}

## Voir aussi

- {{ domxref("DeviceMotionEvent.acceleration") }}
- {{ event("devicemotion") }}
- {{ domxref("window.ondevicemotion") }}
- {{ event("deviceorientation") }}
- {{ domxref("DeviceOrientationEvent") }}
- [Détecter l'orientation de l'appareil](/fr/docs/WebAPI/Detecting_device_orientation#Accelerometer_values_explained)
- [Les données d'orientation et de mouvement expliquées](/fr/docs/Web/Guide/DOM/Events/Les_donn%C3%A9es_d_orientation_et_de_mouvement_expliqu%C3%A9es)
