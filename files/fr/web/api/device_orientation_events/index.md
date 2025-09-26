---
title: Évènements relatifs à l'orientation de l'appareil
slug: Web/API/Device_orientation_events
l10n:
  sourceCommit: c382856e4c804eafa789f8046b01b92fef5c0df2
---

{{DefaultAPISidebar("Device Orientation Events")}}

Les évènements relatifs à l'orientation de l'appareil permettent de [détecter l'orientation physique d'un appareil](/fr/docs/Web/API/Device_orientation_events/Detecting_device_orientation#traiter_les_évènements_dorientation), et [le mouvement de l'appareil](/fr/docs/Web/API/Device_orientation_events/Detecting_device_orientation#traiter_les_évènements_de_mouvement).

## Concepts et utilisation

Les appareils mobiles disposent généralement de capteurs comme des gyroscopes, des boussoles, et des accéléromètres qui permettent aux applications qui s'y exécutent de détecter l'orientation et le mouvement de l'appareil.

L'API web sur les évènements relatifs à l'orientation de l'appareil permettent d'écrire des applications web dont le comportement peut être adapté à l'orientation de l'appareil et qui peuvent réagir au déplacement de l'appareil.

Par exemple, on pourra gérer les évènements liés à l'orientation de l'appareil dans les scénarios suivants&nbsp;:

- Pour les jeux, permettre de contrôler le déplacement de personnages ou d'objets en jeu en inclinant ou en déplaçant l'appareil.

- Pour les applications cartographiques, permettre de réorienter la carte selon la position de l'appareil et fournir des indications de navigation mises à jour en fonction des déplacements.

- Pour la reconnaissance de certains gestes. Par exemple, on pourra identifier que l'appareil est secoué et déclencher une action en conséquence, comme la réinitialisation d'un champ.

> [!NOTE]
> Cette API est bien prise en charge par les navigateurs mobiles. Pour les navigateurs de bureaux, il pourra y avoir des limitations liées aux capacités matérielles de ces appareils. Toutefois, ces contraintes sont rarement un problème, car l'API repose principalement sur une utilisation avec des appareils dotés de capteurs adéquats.

## Interfaces

- [`DeviceOrientationEvent`](/fr/docs/Web/API/DeviceOrientationEvent)
  - : Représente les changements d'orientation physique de l'appareil.
- [`DeviceMotionEvent`](/fr/docs/Web/API/DeviceMotionEvent)
  - : Représente les changements d'accélération de l'appareil, ainsi que la vitesse de rotation.
- [`DeviceMotionEventAcceleration`](/fr/docs/Web/API/DeviceMotionEventAcceleration)
  - : Représente l'accélération de l'appareil sur les trois axes.
- [`DeviceMotionEventRotationRate`](/fr/docs/Web/API/DeviceMotionEventRotationRate)
  - : Représente la vitesse de rotation de l'appareil sur les trois axes.

## Évènements

- [`deviceorientation`](/fr/docs/Web/API/Window/deviceorientation_event)
  - : Déclenché lorsque de nouvelles données captées par l'appareil sont disponibles à propos de l'orientation de l'appareil dans le système de coordonnées terrestre.
- [`devicemotion`](/fr/docs/Web/API/Window/devicemotion_event)
  - : Déclenché à intervalle régulier pour indiquer l'accélération reçue par l'appareil à cet instant, ainsi que sa vitesse de rotation.
- [`deviceorientationabsolute`](/fr/docs/Web/API/Window/deviceorientationabsolute_event)
  - : Déclenché lorsque les informations relatives à l'orientation absolue changent.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Orientation et déplacement de l'appareil sur le site web.dev (en anglais)](https://web.dev/articles/device-orientation)
