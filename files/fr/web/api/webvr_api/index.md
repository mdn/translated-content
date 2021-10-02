---
title: WebVR API
slug: Web/API/WebVR_API
translation_of: Web/API/WebVR_API
---
<div>{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}</div>

<p>WebVR fournit un support pour les dispositifs de réalité virtuelle - par exemple pour les casques de réalité virtuelle comme l'Oculus Rift - aux applications Web, permettant aux développeurs de traduire les informations de position et de mouvement de l'appareil en mouvements autour d'une scène 3D. Cela a de nombreuses applications très intéressantes, des visites de produits virtuels aux applications de formation interactive en passant par des jeux en première personne dans un environnement immersif.</p>

<h2 id="Concepts_and_usage">Concepts et usage</h2>

<p><img alt="Croquis d'une personne assise sur une chaise et portant des lunettes portant la mention « Head mounted display (HMD) » faisant face à un moniteur avec une webcam portant la mention « Position sensor »." src="hw-setup.png"></p>

<p>Tous les périphériques de réalité virtuelle connectés à votre ordinateur seront donné grâce à la méthode {{domxref("Navigator.getVRDisplays()")}}. Cela retournera un tableau d'objets représentant les périphériques, qui auront l'héritage de l'objet {{domxref("VRDevice")}} — généralement un casque de réalité virtuelle renverra deux périphériques — le casque lui-même, représenté par {{domxref("HMDVRDevice")}}, et la caméra capteur de position qui suit la position de votre tête, représenté par {{domxref("PositionSensorVRDevice")}}.</p>

<p>L'objet {{domxref("PositionSensorVRDevice")}} contient la méthode {{domxref("PositionSensorVRDevice.getState","getState()")}}, qui retourne un objet {{domxref("VRPositionState")}} — cela représente l'état du capteur à un timecode donné, et inclus les propriétés avec des données utiles tel que la vélocité, l'accélération et l'orientation, utiles pour mettre à jour le rendu de la scène pour chaque image en accord avec le mouvement du casque de réalité virtuelle.</p>

<p>La méthode {{domxref("HMDVRDevice.getEyeParameters()")}} retourne un objet {{domxref("VREyeParameters")}}, qui peut être utilisé pour obtenir l'information du champ de vision — combien le casque de réalité virtuel peut afficher de la scène. Le {{domxref("VREyeParameters.currentFieldOfView")}} retourne un objet {{domxref("VRFieldOfView")}} qui contient quatre angles décrivant le champ de vision actuel depuis le point central. Vous pouvez aussi changer le champ de vision en utilisant {{domxref("HMDVRDevice.setFieldOfView()")}}.</p>

<h2 id="Interfaces_WebVR">Interfaces WebVR</h2>

<dl>
 <dt>{{domxref("VRDisplay")}}</dt>
 <dd>Représente un périphérique de réalité virtuelle supporté par cette API. Il inclut des informations générales comme les IDs et des descriptions de l'appareil, ainsi que des méthodes pour commencer à présenter une scène RV, récupérer les paramètres visuels, les capacités d'affichage et d'autres fonctionnalités importantes.</dd>
 <dt>{{domxref("VRDisplayCapabilities")}}</dt>
 <dd>Décrit les capacités d'un appareil {{domxref("VRDisplay")}} — ses fonctionalités peuvent être utilisée pour tester les capacités du périphérique, par exemple peut-il retourner l'information de position.</dd>
 <dt>{{domxref("VRPose")}}</dt>
 <dd>Représente l'état de la position à un timecode donné (qui inclut l'orientation, la position, la vélocité et l'accélération).</dd>
 <dt>{{domxref("VREyeParameters")}}</dt>
 <dd>Donne accès à l'ensemble des informations requises pour faire le rendu d'une scène pour l'oeil indiqué, dont les informations de champ de vision.</dd>
 <dt>{{domxref("VRFieldOfView")}}</dt>
 <dd>Représente le champ de vision actuel définit par quatre angles décrivant la vue depuis le point central.</dd>
 <dt>{{domxref("VRLayer")}}</dt>
 <dd>Représente un calque d'un objet {{domxref("VRDisplay")}}.</dd>
 <dt>{{domxref("VRStageParameters")}}</dt>
 <dd>Représente les données décrivant l'espace physique disponible pour les périphériques de réalité virtuelle pouvant offrir une expérience dans une pièce réelle.</dd>
</dl>

<h3 id="Extensions_à_d'autres_interfaces">Extensions à d'autres interfaces</h3>

<dl>
 <dt>{{domxref("Gamepad.displayId")}} {{readonlyInline}}</dt>
 <dd><dfn>Retourne l'ID {{domxref("VRDisplay.displayId")}} du périphérique {{domxref("VRDisplay")}} associé — l'appareil RV où la manette de jeu contrôle la scene affichée.</dfn></dd>
 <dt>{{domxref("Navigator.activeVRDisplays")}} {{readonlyInline}}</dt>
 <dd>Retourne un tableau contenant tous les périphériques (objet {{domxref("VRDisplay")}}) qui sont actifs (quand {{domxref("VRDisplay.ispresenting")}} est à <code>true</code>).</dd>
 <dt>{{domxref("Navigator.getVRDisplays()")}}</dt>
 <dd>Retourne un tableau contenant tous les périphériques (objet {{domxref("VRDisplay")}}) disponibles qui sont connectés à l'ordinateur.</dd>
 <dt>{{domxref("Window.onvrdisplayconnected")}}</dt>
 <dd>Représente un gestionaire d'événements qui s'exécute lorsqu'un appareil RV compatible a été connecté à l'ordinateur (quand l'événement {{event("vrdisplayconnected")}} est déclenché).</dd>
 <dt>{{domxref("Window.onvrdisplaydisconnected")}}</dt>
 <dd>Représente un gestionaire d'événements qui s'exécute lorsqu'un appareil RV compatible a été déconnecté de l'ordinateur  (quand l'événement {{event("vrdisplaydisconnected")}} est déclenché).</dd>
 <dt>{{domxref("Window.onvrdisplaypresentchange")}}</dt>
 <dd>Représente un gestionaire d'événements qui s'exécute lorsque l'état de présentation d'un appareil change — i.e. un changement de l'état "présente" à "ne présente pas", ou vice versa (quand l'événement {{event("onvrdisplaypresentchange")}} est déclenché).</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>Vous pouvez retrouver plusieurs exemples dans ces repos Github:</p>

<ul>
 <li><a href="https://github.com/aframevr/aframe">A-Frame</a>: un framework web Open source pour construire des expériences RV. Plusieurs exemples.</li>
 <li><a href="https://github.com/mdn/webvr-tests">mdn/webvr-tests</a>: Démos simples conçus pour illustrer des fonctionalités d'usage de base.</li>
 <li><a href="https://github.com/MozVR/">MozVR team</a>: Plus de démos avancés, la source de la spec WebVR, et plus!</li>
</ul>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR')}}</td>
   <td>{{Spec2('WebVR')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<h3 id="Navigator.getVRDisplays"><code>Navigator.getVRDisplays</code></h3>

<p>{{Compat("api.Navigator.getVRDisplays")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="https://webvr.info">webvr.info</a> - Up-to-date information about WebVR, browser setup, and community.</li>
 <li><a href="https://iswebvrready.com">Is WebVR Ready?</a> - Up-to-date information about WebVR browser support (including experimental builds).</li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — demos, downloads, and other resources from the Mozilla VR team.</li>
 <li><a href="https://aframe.io">A-Frame</a> — a web framework for building VR experiences (with HTML), from the Mozilla VR team.</li>
 <li><a href="http://dsmu.me/ConsoleGameOnWeb/">Console Game on Web</a> — a collection of interesting game concept demos, some of which include WebVR.</li>
 <li><a href="https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate">threejs-vr-boilerplate</a> — a very useful starter template for writing WebVR apps into.</li>
 <li><a href="https://developer.oculus.com/">Oculus Rift homepage</a></li>
</ul>
