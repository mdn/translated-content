---
title: AudioBuffer.length
slug: Web/API/AudioBuffer/length
translation_of: Web/API/AudioBuffer/length
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>La propriété <code>length</code> de l'interface {{ domxref("AudioBuffer") }} renvoie un entier représentant la longueur, en trames d'échantillonage, des données PCM stockées dans la mémoire-tampon.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var tableauMemoireTampon = contexteAudio.createBuffer(nombreCanaux, nombreFrames, contexteAudio.sampleRate);
tableauMemoireTampon.length;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un nombre entier.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">// Stereo
var nombreCanaux = 2;

// Crée une mémoire tampon vide de 2 secondes
// à la fréquence d'échantillonage du contexte AudioContext
var nombreFrames = contexteAudio.sampleRate * 2.0;
var tableauDonnees = audioCtx.createBuffer(nombreCanaux, nombreFrames, contexteAudio.sampleRate);


bouton.onclick = function() {
  // remplit la mémoire tampon avec du bruit blanc
  // valeurs aléatoires entre -1.0 et 1.0
  for (var canal = 0; canal &lt; nombreCanaux; canal++) {
    // génère le tableau contenant les données
    var tampon = tableauDonnees.getChannelData(canal);
    for (var i = 0; i &lt; nombreFrames; i++) {
      // Math.random() donne une valeur comprise entre [0; 1.0]
      // l'audio doit être compris entre [-1.0; 1.0]
      tampon[i] = Math.random() * 2 - 1;
    }
  }
  console.log(tableauDonnees.length);
}</pre>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioBuffer-length', 'length')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AudioBuffer.length")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
