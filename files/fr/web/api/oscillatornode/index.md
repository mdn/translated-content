---
title: OscillatorNode
slug: Web/API/OscillatorNode
translation_of: Web/API/OscillatorNode
---
<div>{{APIRef("Web Audio API")}}</div>

<p>L'interface <code>OscillatorNode</code> représente un signal périodique, une sinusoïde par exemple. C'est un module de traitement audio {{domxref("AudioNode")}} qui crée un signal sinusoïdal à une fréquence donnée — c'est-à-dire génère une tonalité constante.</p>

<p>On crée un <code>OscillatorNode</code> en utilisant la méthode {{domxref("AudioContext.createOscillator")}}. Il a toujours exactement une sortie, et aucune entrée. Ses propriétés par défaut (voir {{domxref("AudioNode")}} pour la définition) sont :</p>

<ul>
 <li>Nombre d'entrées : <code>0</code></li>
 <li>Nombre de sorties : <code>1</code></li>
 <li>Mode de calcul des canaux : <code>max</code></li>
 <li>Nombre de canaux : <code>2</code> (propriété ignorée dans le mode de calcul par défaut)</li>
 <li>Interprétation des canaux : <code>speakers</code></li>
</ul>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite des propriétés de ses parents, </em><em>{{domxref("AudioNode")}}</em>.</p>

<dl>
 <dt>{{domxref("OscillatorNode.frequency")}}</dt>
 <dd>{{domxref("AudioParam")}} de type <a href="/fr/docs/Web/API/AudioParam#a-rate">a-rate</a> représentant la fréquence d'oscillation en Hertz (la propriété frequency est en lecture seule, mais sa sous-propriété value ne l'est pas).</dd>
 <dt>{{domxref("OscillatorNode.detune")}}</dt>
 <dd>{{domxref("AudioParam")}} de type <a href="/fr/docs/Web/API/AudioParam#a-rate">a-rate</a> représentant le désaccordage de l' oscillation exprimé en cents  (la propriété detune est en lecture seule, mais sa sous-propriété value ne l'est pas).</dd>
 <dt>{{domxref("OscillatorNode.type")}}</dt>
 <dd>Chaîne de caractères indiquant la forme de l'onde générée. Différentes ondes produisent différentes tonalités.  Les valeurs standard sont <code>"sine"</code>, <code>"square"</code>, <code>"sawtooth"</code>, <code>"triangle"</code> et <code>"custom"</code>. La valeur par défault is <code>"sine"</code>. <code>custom</code> permet d'utiliser une {{domxref("PeriodicWave")}} pour décrire une forme d'onde personnalisée.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<p><em>Hérite des méthodes de ses parents, {{domxref("AudioNode")}}</em>.</p>

<dl>
 <dt>{{domxref("OscillatorNode.start()")}}</dt>
 <dd>Cette méthode déclenche la lecture du son.</dd>
 <dt>{{domxref("OscillatorNode.stop()")}}</dt>
 <dd>Cette méthode interrompt la lecture du son.</dd>
 <dt>{{domxref("OscillatorNode.setPeriodicWave()")}}</dt>
 <dd>Cette méthode définit une {{domxref("PeriodicWave")}} qui peut être utilisée pour donner sa forme à la sortie de l'oscillateur, quand on utilise l'attribut <code>type = "custom"</code>. Elle remplace la méthode devenue obsolète {{domxref("OscillatorNode.setWaveTable")}}.</dd>
</dl>

<h2 id="Event_handlers">Event handlers</h2>

<dl>
 <dt>{{domxref("OscillatorNode.onended")}}</dt>
 <dd>Propriété utilisée pour assigner un gestionnaire d'évènement à l'évènement <code>ended</code>, qui est émis une fois que la lecture du son est terminée.</dd>
</dl>

<h2 id="Examples">Exemples</h2>

<p>L'exemple suivant montre une utilisation basique d'un {{ domxref("AudioContext") }} pour créer un <code>OscillatorNode</code>. Pour un exemple appliqué, jetez un oeil à notre <a href="http://mdn.github.io/violent-theremin/">Violent Theremin demo</a> (voir<a href="https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js"> app.js</a> pour l'intégralité du code).</p>

<pre class="brush: js">// crée un contexteaudio
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = contexteAudio.createOscillator();
oscillator.connect(contexteAudio.destination);
oscillator.type = 'square';
oscillator.frequency.value = 440; // valeur en hertz

oscillator.start();</pre>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#the-oscillatornode-interface', 'OscillatorNode')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.OscillatorNode")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
