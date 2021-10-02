---
title: DeviceRotationRate
slug: Web/API/DeviceMotionEventRotationRate
tags:
  - API
  - Coordonnées
  - DOM
  - Mobile
  - Vitesse
  - rotation
translation_of: Web/API/DeviceMotionEventRotationRate
translation_of_original: Web/API/DeviceRotationRate
original_slug: Web/API/DeviceRotationRate
---
<p>{{ ApiRef("Device Orientation Events") }} {{SeeCompatTable}}</p>

<p>Un objet <code>DeviceRotationRate</code> fournit une information sur la vitesse avec laquelle un appareil est en rotation autour des 3 axes.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{ domxref("DeviceRotationRate.alpha") }} {{readonlyInline}}</dt>
 <dd>La vitesse de rotation autour de l'axe Z, en degrés par seconde.</dd>
 <dt>{{ domxref("DeviceRotationRate.beta") }} {{readonlyInline}}</dt>
 <dd>La vitesse de rotation autour de l'axe X, en degrés par seconde.</dd>
 <dt>{{ domxref("DeviceRotationRate.gamma") }} {{readonlyInline}}</dt>
 <dd>La vitesse de rotation autour de l'axe Y, en degrés par seconde.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
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

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DeviceMotionEventRotationRate")}}</p>
