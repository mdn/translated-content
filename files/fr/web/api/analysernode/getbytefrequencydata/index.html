---
title: AnalyserNode.getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
translation_of: Web/API/AnalyserNode/getByteFrequencyData
---
<p>{{ APIRef("Web Audio API") }}<br>
 <br>
 La méthode <strong><code>getByteFrequencyData()</code></strong> de l'objet <a href="/fr/docs/Web/API/AnalyserNode"><code>AnalyserNode</code></a> copie les données de fréquence dans le {{domxref("Uint8Array")}} passé en argument.</p>

<div>
<p>Si le tableau a moins d'éléments que {{domxref("AnalyserNode.frequencyBinCount")}}, les excédants sont supprimés; s'il en a davantage, les excédants sont ignorés.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();

// Uint8Array devrait avoir la même taille que frequencyBinCount
var tableauDonnees = new Uint8Array(analyseur.frequencyBinCount);

// remplit le Uint8Array avec les données retournées par la méthode getByteFrequencyData()
analyseur.getByteFrequencyData(tableauDonnees);
</pre>

<h3 id="Retourne">Retourne</h3>

<p>Un {{domxref("Uint8Array")}}.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant montre comment créer simplement un  <code>AnalyserNode</code> avec <a href="/fr/docs/Web/API/AudioContext"><code>AudioContext</code></a>, puis utiliser  <a href="/fr/docs/Web/API/Window/requestAnimationFrame"><code>requestAnimationFrame</code></a> et <a href="/fr/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a> pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo <a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a>  (et en particulier <a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205">app.js lines 128–205</a>).</p>

<pre class="brush: js">var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

  ...

analyseur.fftSize = 256;
var tailleMemoireTampon = analyseur.frequencyBinCount;
console.log(tailleMemoireTampon);
var tableauDonnees = new Uint8Array(tailleMemoireTampon);

contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);

function dessiner() {
  dessin = requestAnimationFrame(dessiner);

  analyseur.getByteFrequencyData(tableauDonnees);

  contexteCanvas.fillStyle = 'rgb(0, 0, 0)';
  contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);

  var largeurBarre = (LARGEUR / tailleMemoireTampon) * 2.5;
  var hauteurBarre;
  var x = 0;

  for(var i = 0; i &lt; tailleMemoireTampon; i++) {
    hauteurBarre = tableauDonnees[i];

    contexteCanvas.fillStyle = 'rgb(' + (hauteurBarre+100) + ',50,50)';
    contexteCanvas.fillRect(x,HAUTEUR-hauteurBarre/2,largeurBarre,hauteurBarre/2);

    x += largeurBarre + 1;
  }
};

dessiner();</pre>

<h2 id="Paramètres">Paramètres</h2>

<dl>
 <dt>array</dt>
 <dd>Le {{domxref("Uint8Array")}} dans lequel seront copiées les données relatives à la fréquence.</dd>
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
   <td>{{SpecName('Web Audio API', '#widl-AnalyserNode-getByteFrequencyData-void-Uint8Array-array', 'getByteFrequencyData()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AnalyserNode.getByteFrequencyData")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<p><a href="/fr/docs/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></p>

<ul>
</ul>
