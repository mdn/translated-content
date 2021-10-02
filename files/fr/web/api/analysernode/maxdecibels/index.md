---
title: AnalyserNode.maxDecibels
slug: Web/API/AnalyserNode/maxDecibels
translation_of: Web/API/AnalyserNode/maxDecibels
---
<p>{{ APIRef("Web Audio API") }}</p>

<p>La propriété <strong><code>maxDecibels</code></strong> de l'objet {{ domxref("AnalyserNode") }} est un nombre  flottant à double précision représentant la puissance maximum de l'intervalle pour l'analyse des données FFT, pour une conversion vers des valeurs non signées ou des nombres flottants — en d'autres termes, elle spécifie la valeur maximum pour l'intervalle de résultats des méthodes <code>getFloatFrequencyData()</code> et <code>getByteFrequencyData()</code>.</p>

<p>Sa valeur par défaut est <code>-30</code>.</p>

<div class="note">
<p><strong>Note :</strong> Si une valeur supérieure à <code>AnalyserNode.maxDecibels</code> est indiquée, une erreur <code>INDEX_SIZE_ERR</code> est levée.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();
analyseur.maxDecibels = -10;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un nombre flottant à double précision.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant montre comment créer simplement un  <code>AnalyserNode</code> avec {{domxref("AudioContext")}}, puis utiliser  {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo <a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a>  (et en particulier <a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205">app.js lignes 128–205</a>).</p>

<pre class="brush: js">var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();
analyseur.minDecibels = -90;
analyseur.maxDecibels = -10;

  ...

analyseur.fftSize = 256;
var tailleMemoireTampon = analyseur.frequencyBinCount;
console.log(bufferLength);
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
    contexteCanvas.fillRect(x,HEIGHT-hauteurBarre/2,largeurBarre,hauteurBarre/2);

    x += largeurBarre + 1;
  }
};

dessiner();</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AnalyserNode-maxDecibels', 'maxDecibels')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AnalyserNode.maxDecibels")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
