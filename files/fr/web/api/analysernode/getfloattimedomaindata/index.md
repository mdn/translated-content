---
title: AnalyserNode.getFloatTimeDomainData()
slug: Web/API/AnalyserNode/getFloatTimeDomainData
translation_of: Web/API/AnalyserNode/getFloatTimeDomainData
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>La méthode <strong><code>getFloatTimeDomainData()</code></strong> de l'interface {{ domxref("AnalyserNode") }} copie les données de forme d'onde ou du domaine temporel, dans un tableau {{domxref("Float32Array")}} passé en paramètre.</p>

<p>Si le tableau a moins d'éléments que la propriété {{domxref("AnalyserNode.fftSize")}}, les données en excès sont supprimées. S'il a davantage d'éléments, les éléments non utilisés sont ignorés.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();

// La taille du tableau Float32Array doit correspondre à la valeur de la propriété fftSize
var tableauDonnees = new Float32Array(analyseur.fftSize);

// remplit le tableau Float32Array avec les données renvoyées par la méthode getFloatTimeDomainData()
analyseur.getFloatTimeDomainData(tableauDonnees);
</pre>

<h3 id="Renvoie">Renvoie</h3>

<p>Un tableau {{domxref("Float32Array")}}.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant montre comment créer simplement un  <code>AnalyserNode</code> avec {{domxref("AudioContext")}}, puis utiliser {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo <a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a>  (et en particulier <a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205">app.js lignes 128–205</a>).</p>

<pre class="brush: js">var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

  ...

analyseur.fftSize = 1024;
var tailleMemoireTampon = analyseur.fftSize;
console.log(tailleMemoireTampon);
var tableauDonnees = new Float32Array(tailleMemoireTampon);

contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);

function dessiner() {
  dessin = requestAnimationFrame(dessiner);
  analyseur.getFloatTimeDomainData(tableauDonnees);

  contexteCanvas.fillStyle = 'rgb(200, 200, 200)';
  contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);
  contexteCanvas.lineWidth = 2;
  contexteCanvas.strokeStyle = 'rgb(0, 0, 0)';
  contexteCanvas.beginPath();

  var largeurTranche = LARGEUR * 1.0 / tailleMemoireTampon;
  var x = 0;

  for(var i = 0; i &lt; tailleMemoireTampon; i++) {
    var v = tableauDonnees[i] * 200.0;
    var y = HAUTEUR/2 + v;

    if(i === 0) {
      contexteCanvas.moveTo(x, y);
    } else {
      contexteCanvas.lineTo(x, y);
    }
    x += largeurTranche;
  }

  contexteCanvas.lineTo(canvas.width, canvas.height/2);
  contexteCanvas.stroke();
};

dessiner();</pre>

<p> </p>

<h2 id="Paramètres">Paramètres</h2>

<dl>
 <dt>array</dt>
 <dd>Un tableau {{domxref("Float32Array")}} dans lequel seront copiées les données du domaine temporel.</dd>
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
   <td>{{SpecName('Web Audio API', '#widl-AnalyserNode-getFloatTimeDomainData-void-Float32Array-array', 'getFloatTimeDomainData()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AnalyserNode.getFloatTimeDomainData")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
