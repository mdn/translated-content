---
title: AudioParam
slug: Web/API/AudioParam
tags:
  - API
  - Experimental
  - Reference
  - Web Audio API
translation_of: Web/API/AudioParam
---
<p>{{APIRef("Web Audio API")}}</p>

<p>L'interface <strong><code>AudioParam</code></strong> représente un paramètre audio, en général un paramètre d'un {{domxref ("AudioNode")}} tel qu'un {{ domxref("GainNode.gain") }}. On peut lui donner une valeur spécifique ou définir une variation de valeur qui intervient à un certain moment et selon un certain fonctionnement.</p>

<p>Il y a deux sortes de <code>AudioParam</code>, <em>a-rate</em> et <em>k-rate</em> :</p>

<ul>
 <li>Un <code>AudioParam</code> <em>a-rate</em> réévalue la valeur du paramètre audio pour chaque trame d'échantillons du signal audio.</li>
 <li>Un <code>AudioParam</code> <em>k-rate </em>utilise la même valeur de paramètre audio initial pour l'ensemble du bloc traité, c'est-à-dire 128 échantillons.</li>
</ul>

<p>Chaque {{domxref ("AudioNode")}} définit lequel de ses paramètres sont <em>a-rate</em> ou <em>k-rate</em>.</p>

<p>Chaque <code>AudioParam</code> a une liste d'événements, initialement vide, qui définit quand et comment les valeurs changent. Si cette liste n'est pas vide, les modifications faites directement avec <code>AudioParam.value</code> sont ignorées. Cette liste d'événements permet de planifier les changements qui doivent se produire à des moments très précis à l'aide de courbes d'automatisation chronologiques arbitraires. Les informations de temps utilisées sont celles définies par {{domxref ("AudioContext.currentTime")}}.</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite des propriétés de son parent, <code>AudioNode</code>.</em></p>

<dl>
 <dt>{{domxref("AudioParam.defaultValue")}} {{readonlyInline}}</dt>
 <dd>Volume initial tel que défini par l'{{domxref ("AudioNode")}} qui crée l'<code>AudioParam</code>.</dd>
 <dt>{{domxref("AudioParam.maxValue")}} {{readonlyInline}}</dt>
 <dd>Valeur maximum de la plage nominale (effective). </dd>
 <dt>{{domxref("AudioParam.minValue")}} {{readonlyinline}}</dt>
 <dd>Valeur minimum de la plage nominale (effective). </dd>
</dl>

<dl>
 <dt>{{domxref("AudioParam.value")}}</dt>
 <dd>Volume, exprimé sous forme de nombre flottant, initialement défini par la valeur de <code>AudioParam.defaultValue</code>. Même s'il peut être modifié, toute modification qui a lieu alors que des événements d'automatisation sont prévus - événements programmés en utilisant les méthodes de la <code>AudioParam</code> - est ignorée, sans lever aucune exception</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Hérite des propriétés de son parent, AudioNode.</em></p>

<dl>
 <dt>{{domxref("AudioParam.setValueAtTime()")}}</dt>
 <dd>Planifie un changement de la valeur d' <code>AudioParam</code> à un moment précis, <code>startTime</code>, tel que mesuré par rapport à {{domxref ("AudioContext.currentTime")}}. La nouvelle valeur est passée en argument.</dd>
 <dt>{{domxref("AudioParam.linearRampToValueAtTime()")}}</dt>
 <dd>Planifie un changement de la valeur d'<code>AudioParam</code>. Le changement commence à l'heure prévue pour l'événement précédent, évolue selon une rampe linéaire jusqu'à la nouvelle valeur passée dans l'argument <code>value</code>, et atteint la nouvelle valeur à l'heure indiquée par le paramètre <code>endTime</code>.</dd>
 <dt>{{domxref("AudioParam.exponentialRampToValueAtTime()")}}</dt>
 <dd>Planifie un changement de la valeur d'<code>AudioParam</code>. Le changement commence à l'heure prévue pour l'événement précédent, suit une rampe exponentielle jusqu'à la nouvelle valeur passée dans l'argument <code>value</code>, et atteint la nouvelle valeur à l'heure indiquée par le paramètre <code>endTime</code>.<br>
 Les rampes exponentielles sont utiles lors du changement de fréquence ou de taux de lecture en raison de la façon dont l'oreille humaine fonctionne.</dd>
 <dt>{{domxref("AudioParam.setTargetAtTime()")}}</dt>
 <dd>Planifie le début d'un changement de la valeur d'<code>AudioParam</code>. Le changement commence à l'heure spécifiée par l'argument <code>startTime</code> et de façon exponentielle tend vers la valeur donnée par le paramètre <code>target</code>. Le taux de décroissance exponentielle est définie par le paramètre <code>timeConstant</code>. C'est le temps nécessaire à un système continu linéaire du premier ordre invariant dans le temps pour atteindre la valeur de 1 - 1 / e (environ 63,2%) donné une réponse d'entrée de l'étape (passage de 0 à 1 en valeur), Plus il est grand, plus la transition sera facile. Ceci est utile pour la décroissance ou la libération de portions d'enveloppes.</dd>
 <dt>{{domxref("AudioParam.setValueCurveAtTime()")}}</dt>
 <dd>Planifie des valeurs de <code>AudioParam</code> selon un jeu de valeurs, défini par le paramètre  <code>values </code>({{domxref ("Float32Array")}}), mis à l'échelle pour s'adapter à l'intervalle de temps donné, en commençant à <code>startTime</code>.</dd>
 <dt>{{domxref("AudioParam.cancelScheduledValues()")}}</dt>
 <dd>Annule toutes les modifications futures prévues du <code>AudioParam</code>.</dd>
 <dt>{{domxref("AudioParam.cancelAndHoldAtTime()")}}</dt>
 <dd>Annule toutes les modifications futures prévues du <code>AudioParam</code> mais maintient sa valeur à un certain moment, en attendant que d'autres changements soient effectués. La nouvelle valeur est passée en argument.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Ce premier exemple simple montre la définition de la valeur de  <code>gain </code>d'un<code> </code>{{domxref("GainNode")}}. <code>gain</code> est un exemple de paramètre audio de type a-rate, car sa valeur peut potentiellement être différente pour chaque trame d'échantillon.</p>

<pre class="brush: js">var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var gainNode = audioCtx.createGain();
gainNode.gain.value = 0;</pre>

<p>Ce deuxième exemple montre la définition de plusieurs paramètres d'un {{ domxref("BiquadFilterNode") }}. Ce sont des exemples de paramètre audio de type k-rate AudioParam's, comme les valeurs sont définies une fois pour l'ensemble des échantillons.</p>

<pre class="brush: js">var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var biquadFilter = audioCtx.createBiquadFilter();

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#AudioParam-section', 'AudioParam')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AudioParam")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
