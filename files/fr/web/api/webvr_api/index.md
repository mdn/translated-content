---
title: WebVR API
slug: Web/API/WebVR_API
translation_of: Web/API/WebVR_API
---
{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

WebVR fournit un support pour les dispositifs de réalité virtuelle - par exemple pour les casques de réalité virtuelle comme l'Oculus Rift - aux applications Web, permettant aux développeurs de traduire les informations de position et de mouvement de l'appareil en mouvements autour d'une scène 3D. Cela a de nombreuses applications très intéressantes, des visites de produits virtuels aux applications de formation interactive en passant par des jeux en première personne dans un environnement immersif.

## Concepts et usage

![Croquis d'une personne assise sur une chaise et portant des lunettes portant la mention « Head mounted display (HMD) » faisant face à un moniteur avec une webcam portant la mention « Position sensor ».](hw-setup.png)

Tous les périphériques de réalité virtuelle connectés à votre ordinateur seront donné grâce à la méthode {{domxref("Navigator.getVRDisplays()")}}. Cela retournera un tableau d'objets représentant les périphériques, qui auront l'héritage de l'objet {{domxref("VRDevice")}} — généralement un casque de réalité virtuelle renverra deux périphériques — le casque lui-même, représenté par {{domxref("HMDVRDevice")}}, et la caméra capteur de position qui suit la position de votre tête, représenté par {{domxref("PositionSensorVRDevice")}}.

L'objet {{domxref("PositionSensorVRDevice")}} contient la méthode {{domxref("PositionSensorVRDevice.getState","getState()")}}, qui retourne un objet {{domxref("VRPositionState")}} — cela représente l'état du capteur à un timecode donné, et inclus les propriétés avec des données utiles tel que la vélocité, l'accélération et l'orientation, utiles pour mettre à jour le rendu de la scène pour chaque image en accord avec le mouvement du casque de réalité virtuelle.

La méthode {{domxref("HMDVRDevice.getEyeParameters()")}} retourne un objet {{domxref("VREyeParameters")}}, qui peut être utilisé pour obtenir l'information du champ de vision — combien le casque de réalité virtuel peut afficher de la scène. Le {{domxref("VREyeParameters.currentFieldOfView")}} retourne un objet {{domxref("VRFieldOfView")}} qui contient quatre angles décrivant le champ de vision actuel depuis le point central. Vous pouvez aussi changer le champ de vision en utilisant {{domxref("HMDVRDevice.setFieldOfView()")}}.

## Interfaces WebVR

- {{domxref("VRDisplay")}}
  - : Représente un périphérique de réalité virtuelle supporté par cette API. Il inclut des informations générales comme les IDs et des descriptions de l'appareil, ainsi que des méthodes pour commencer à présenter une scène RV, récupérer les paramètres visuels, les capacités d'affichage et d'autres fonctionnalités importantes.
- {{domxref("VRDisplayCapabilities")}}
  - : Décrit les capacités d'un appareil {{domxref("VRDisplay")}} — ses fonctionalités peuvent être utilisée pour tester les capacités du périphérique, par exemple peut-il retourner l'information de position.
- {{domxref("VRPose")}}
  - : Représente l'état de la position à un timecode donné (qui inclut l'orientation, la position, la vélocité et l'accélération).
- {{domxref("VREyeParameters")}}
  - : Donne accès à l'ensemble des informations requises pour faire le rendu d'une scène pour l'oeil indiqué, dont les informations de champ de vision.
- {{domxref("VRFieldOfView")}}
  - : Représente le champ de vision actuel définit par quatre angles décrivant la vue depuis le point central.
- {{domxref("VRLayer")}}
  - : Représente un calque d'un objet {{domxref("VRDisplay")}}.
- {{domxref("VRStageParameters")}}
  - : Représente les données décrivant l'espace physique disponible pour les périphériques de réalité virtuelle pouvant offrir une expérience dans une pièce réelle.

### Extensions à d'autres interfaces

- {{domxref("Gamepad.displayId")}} {{readonlyInline}}
  - : _Retourne l'ID {{domxref("VRDisplay.displayId")}} du périphérique {{domxref("VRDisplay")}} associé — l'appareil RV où la manette de jeu contrôle la scene affichée._
- {{domxref("Navigator.activeVRDisplays")}} {{readonlyInline}}
  - : Retourne un tableau contenant tous les périphériques (objet {{domxref("VRDisplay")}}) qui sont actifs (quand {{domxref("VRDisplay.ispresenting")}} est à `true`).
- {{domxref("Navigator.getVRDisplays()")}}
  - : Retourne un tableau contenant tous les périphériques (objet {{domxref("VRDisplay")}}) disponibles qui sont connectés à l'ordinateur.
- {{domxref("Window.onvrdisplayconnected")}}
  - : Représente un gestionaire d'événements qui s'exécute lorsqu'un appareil RV compatible a été connecté à l'ordinateur (quand l'événement {{event("vrdisplayconnected")}} est déclenché).
- {{domxref("Window.onvrdisplaydisconnected")}}
  - : Représente un gestionaire d'événements qui s'exécute lorsqu'un appareil RV compatible a été déconnecté de l'ordinateur (quand l'événement {{event("vrdisplaydisconnected")}} est déclenché).
- {{domxref("Window.onvrdisplaypresentchange")}}
  - : Représente un gestionaire d'événements qui s'exécute lorsque l'état de présentation d'un appareil change — i.e. un changement de l'état "présente" à "ne présente pas", ou vice versa (quand l'événement {{event("onvrdisplaypresentchange")}} est déclenché).

## Examples

Vous pouvez retrouver plusieurs exemples dans ces repos Github:

- [A-Frame](https://github.com/aframevr/aframe): un framework web Open source pour construire des expériences RV. Plusieurs exemples.
- [mdn/webvr-tests](https://github.com/mdn/webvr-tests): Démos simples conçus pour illustrer des fonctionalités d'usage de base.
- [MozVR team](https://github.com/MozVR/): Plus de démos avancés, la source de la spec WebVR, et plus!

## Specifications

| Specification                | Status                   | Comment            |
| ---------------------------- | ------------------------ | ------------------ |
| {{SpecName('WebVR')}} | {{Spec2('WebVR')}} | Initial definition |

## Compatibilité des navigateurs

### `Navigator.getVRDisplays`

{{Compat("api.Navigator.getVRDisplays")}}

## Voir aussi

- [webvr.info](https://webvr.info) - Up-to-date information about WebVR, browser setup, and community.
- [Is WebVR Ready?](https://iswebvrready.com) - Up-to-date information about WebVR browser support (including experimental builds).
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
- [A-Frame](https://aframe.io) — a web framework for building VR experiences (with HTML), from the Mozilla VR team.
- [Console Game on Web](http://dsmu.me/ConsoleGameOnWeb/) — a collection of interesting game concept demos, some of which include WebVR.
- [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate) — a very useful starter template for writing WebVR apps into.
- [Oculus Rift homepage](https://developer.oculus.com/)
