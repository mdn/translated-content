---
title: DeviceMotionEvent.interval
slug: Web/API/DeviceMotionEvent/interval
tags:
  - API
  - Propriété
  - Reference
translation_of: Web/API/DeviceMotionEvent/interval
---
<p>{{apiref("Device Orientation Events")}}</p>

<p>La propriété <strong><code>interval</code></strong> renvoie la granularité temporelle, exprimée en millisecondes, avec laquelle les données relatives aux mouvements sont obtenues du matériel.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var interval = <em>instanceOfDeviceMotionEvent</em>.interval;
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Device Orientation')}}</td>
   <td>{{Spec2('Device Orientation')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DeviceMotionEvent.interval")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{ domxref("DeviceMotionEvent") }}</li>
 <li>{{ event("devicemotion") }}</li>
 <li>{{ domxref("window.ondevicemotion") }}</li>
 <li>{{ event("deviceorientation") }}</li>
 <li>{{ domxref("DeviceOrientationEvent") }}</li>
 <li><a href="/fr/docs/WebAPI/Detecting_device_orientation">Detecting device orientation</a></li>
</ul>
