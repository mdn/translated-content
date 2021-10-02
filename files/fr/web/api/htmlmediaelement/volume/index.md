---
title: HTMLMediaElement.volume
slug: Web/API/HTMLMediaElement/volume
tags:
  - API
  - Audio
  - HTML DOM
  - Property
  - Propriété
  - Reference
  - Volume
  - sound
translation_of: Web/API/HTMLMediaElement/volume
---
<p>{{APIRef("HTML DOM")}}</p>

<p>La propriété <strong><code>HTMLMediaElement.volume</code></strong> définit le volume auquel le média doit être lu. </p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox">var <em>volume</em> ​= <em>video</em>.volume; //1</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une valeur de type double (nombre à virgule) inclut entre 0 et 1, si elle vaut 0 le son est coupé et elle vaut 1 le son est le plus élevé possible.</p>

<h2 id="Exemple">Exemple</h2>

<pre>var obj = document.createElement('audio');
console.log(obj.volume); // 1
obj.volume = 0.75;</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#dom-media-volume", "HTMLMediaElement.volume")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement.volume")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateur">Compatibilité navigateur</h2>



<p>{{Compat("api.HTMLMediaElement.volume")}}</p>

<h2 id="See_Also">Voir aussi</h2>

<ul>
 <li>The interface defining it, {{domxref("HTMLMediaElement")}}.</li>
 <li>{{domxref("HTMLMediaElement.muted")}}</li>
</ul>
