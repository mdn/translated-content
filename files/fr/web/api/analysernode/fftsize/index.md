---
title: AnalyserNode.fftSize
slug: Web/API/AnalyserNode/fftSize
translation_of: Web/API/AnalyserNode/fftSize
---
<p>{{ APIRef("Web Audio API") }}</p>

<p>La propriété <code>fftSize</code> de l'objet {{ domxref("AnalyserNode") }} est un nombre entier non signé qui représente la taille de la FFT (<a href="/en-US/docs/">transfomation de Fourier rapide</a>) à utiliser pour déterminer le domaine fréquentiel.<br>
 <br>
 La valeur de la propriété <code>fftSize</code> property's doit être une puissance de 2 non nulle située dans l'intervalle compris entre <code>32</code> et 32768 ; sa valeur par défaut est <code>2048</code>.</p>

<div class="note">
<p><strong>Note :</strong> Si la valeur n'est pas une puissance de 2, ou si elle ne se trouve pas dans l'intervalle spécifiée, l'exception <code>INDEX_SIZE_ERR</code> est levée.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();
analyseur.fftSize = 2048;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un nombre entier non signé.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant montre comment créer simplement un  <code>AnalyserNode</code> avec {{domxref("AudioContext")}}, puis utiliser  {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo <a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a>  (et en particulier <a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205">app.js lines 128–205</a>).</p>

<pre class="brush: js">var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

  ...

analyseur.fftSize = 2048;
var tailleMemoireTampon = analyseur.fftSize;
var tableauDonnees = new Uint8Array(tailleMemoireTampon);
analyseur.getByteTimeDomainData(tableauDonnees);

// dessine un oscilloscope de la source audio

function dessiner() {

      dessin = requestAnimationFrame(dessiner);

      analyseur.getByteTimeDomainData(tableauDonnees);

      contexteCanvas.fillStyle = 'rgb(200, 200, 200)';
      contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);

      contexteCanvas.lineWidth = 2;
      contexteCanvas.strokeStyle = 'rgb(0, 0, 0)';

      contexteCanvas.beginPath();

      var largeurTranche = LARGEUR * 1.0 / tailleMemoireTampon;
      var x = 0;

      for(var i = 0; i &lt; tailleMemoireTampon; i++) {

        var v = tableauDonnees[i] / 128.0;
        var y = v * HAUTEUR/2;

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

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AnalyserNode-fftSize', 'fftSize')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AnalyserNode.fftSize")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
