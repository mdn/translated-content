---
title: AnalyserNode.getFloatFrequencyData()
slug: Web/API/AnalyserNode/getFloatFrequencyData
translation_of: Web/API/AnalyserNode/getFloatFrequencyData
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>La méthode <strong><code>getFloatFrequencyData()</code></strong> de l'interface {{ domxref("AnalyserNode") }} copie les données de fréquence dans un tableau {{domxref("Float32Array")}} passé en paramètre.</p>

<p>Si le tableau a moins d'éléments que la propriété {{domxref("AnalyserNode.frequencyBinCount")}}, les données en excès sont supprimées. S'il a davantage d'éléments, les éléments non utilisés sont ignorés.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();

// La taille du tableau Float32Array doit correspondre à la valeur de la propriété frequencyBinCount
var tableauDonnees = new Float32Array(analyseur.frequencyBinCount);

// remplit le tableau Uint8Array avec les données renvoyées par la méthode getByteTimeDomainData()
analyseur.getByteTimeDomainData(tableauDonnees);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>array</code></dt>
 <dd>{{domxref("Float32Array")}} dans lequel seront copiées les données de fréquence. Pour tout échantillon silencieux, la valeur est <code>-<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>undefined</code>.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant montre comment créer simplement un  <code>AnalyserNode</code> avec {{domxref("AudioContext")}}, puis utiliser {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo <a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a>  (et en particulier <a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205">app.js lignes 128–205</a>).</p>

<pre class="brush: js">var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

  ...

analyseur.fftSize = 256;
var tailleMemoireTampon = analyseur.frequencyBinCount;
console.log(tailleMemoireTampon);
var tableauDonnees = new Float32Array(tailleMemoireTampon);

contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);

function dessiner() {
  dessin = requestAnimationFrame(dessiner);
  analyseur.getFloatFrequencyData(dataArray);
  contexteCanvas.fillStyle = 'rgb(0, 0, 0)';
  contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);

  var largeurBarre = (LARGEUR / tailleMemoireTampon) * 2.5;
  var hauteurBarre;
  var x = 0;

  for(var i = 0; i &lt; tailleMemoireTampon; i++) {
    hauteurBarre = (tableauDonnees[i] + 140)*2;
    contexteCanvas.fillStyle = 'rgb(' + Math.floor(hauteurBarre+100) + ',50,50)';
    contexteCanvas.fillRect(x, HEIGHT-hauteurBarre/2, largeurBarre, hauteurBarre/2);
    x += largeurBarre + 1;
  }
};

dessiner();</pre>

<h2 id="Paramètres_2">Paramètres</h2>

<dl>
 <dt>array</dt>
 <dd>Le tableau {{domxref("Float32Array")}} dans lequel seront copiées les données du domaine fréquentiel.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AnalyserNode-getFloatFrequencyData-void-Float32Array-array', 'getFloatFrequencyData()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AnalyserNode.getFloatFrequencyData")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/fr/docs/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
