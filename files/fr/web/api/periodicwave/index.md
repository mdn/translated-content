---
title: PeriodicWave
slug: Web/API/PeriodicWave
tags:
  - API
  - Interface
  - Media
  - PeriodicWave
  - Reference
  - Web Audio
  - Web Audio API
  - sinusoïdal
  - sinusoïde
translation_of: Web/API/PeriodicWave
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>L'objet <strong><code>PeriodicWave</code></strong> permet de définir une forme d'onde personnalisée, pouvant être utilisée comme sortie d'un {{domxref("OscillatorNode")}}.</p>
</div>

<p><code>PeriodicWave</code> n'a ni entrée ni sortie ; elle doit être créée avec {{domxref("AudioContext.createPeriodicWave()")}} et être assignée à un OscillatorNode avec {{domxref("OscillatorNode.setPeriodicWave()")}}.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("PeriodicWave.PeriodicWave()")}}</dt>
 <dd>Crée une <code>PeriodicWave</code> (onde périodique) avec toutes les valeurs optionelles mises par défaut. Pour établir des valeurs personnalisées, il faut utiliser le constructeur {{domxref("AudioContext.createPeriodicWave()")}}.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Aucune; par ailleurs, <code>PeriodicWave</code> n'hérite d'aucune propriété.</em></p>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Aucune; par ailleurs, <code>PeriodicWave</code> n'hérite d'aucune méthode.</em></p>

<h2 id="Exemple">Exemple</h2>

<p>{{page("/fr/docs/Web/API/BaseAudioContext/createPeriodicWave","Exemple")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#periodicwave', 'PeriodicWave')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.PeriodicWave")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web_Audio_API/Using_Web_Audio_API">Utiliser l'API Web Audio</a></li>
</ul>
