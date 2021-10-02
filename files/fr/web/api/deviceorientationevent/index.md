---
title: DeviceOrientationEvent
slug: Web/API/DeviceOrientationEvent
tags:
  - B2G
  - Device Orientation
  - Experimental
  - Firefox OS
  - Mobile
  - Orientation
  - WebAPI
  - events
  - évènements
translation_of: Web/API/DeviceOrientationEvent
---
<p>{{ApiRef}}{{SeeCompatTable}}</p>
<h2 id="Sommaire">Sommaire</h2>
<p>L'évènement <code>DeviceOrientationEvent</code> met à la disposition du développeur des informations sur l'orientation de l'appareil visitant une page Web</p>
<div class="warning">
 <p><strong>Attention :</strong> à l'heure actuelle, Firefox et Chrome ne gèrent pas les cordonnées de la même façon. Tenez-en compte lors de l'utilisation de cette API.</p>
</div>
<h2 id="Propriétés">Propriétés</h2>
<dl>
 <dt>
  {{domxref("DeviceOrientationEvent.absolute")}} {{readonlyinline}}</dt>
 <dd>
  Un booléen, indiquant si l'appareil partage les informations sur son orientation absolue.</dd>
 <dt>
  {{domxref("DeviceOrientationEvent.alpha")}} {{readonlyinline}}</dt>
 <dd>
  Un nombre, représentant le mouvement de l'appareil sur l'axe « z » exprimé en degrés sur une échelle de 0° à 360°.</dd>
 <dt>
  {{domxref("DeviceOrientationEvent.beta")}} {{readonlyinline}}</dt>
 <dd>
  Un Nombre représentant le déplacement de l'appareil sur l'axe « x », exprimé en degrés sur une échelle de -180° à 180°.</dd>
 <dt>
  {{domxref("DeviceOrientationEvent.gamma")}} {{readonlyinline}}</dt>
 <dd>
  Un nombre représentant le déplacement de l'appareil sur l'axe « y », exprimé en degrés sur une échelle de -90° à 90°.</dd>
</dl>
<h2 id="Exemple">Exemple</h2>
<pre class="brush: js">window.addEventListener('deviceorientation', function(event) {
  console.log("z : " + event.alpha + "\n x : " + event.beta + "\n y : " + event.gamma);
});</pre>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Device Orientation')}}</td>
   <td>{{Spec2('Device Orientation')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DeviceMotionEvent")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{ event("deviceorientation") }}</li>
 <li>{{ domxref("DeviceMotionEvent") }}</li>
 <li>{{ event("devicemotion") }}</li>
 <li><a href="/en-US/docs/WebAPI/Detecting_device_orientation">Detecting device orientation</a></li>
 <li><a href="/en/DOM/Orientation_and_motion_data_explained">Orientation and motion data explained</a></li>
</ul>
