---
title: AudioBuffer.duration
slug: Web/API/AudioBuffer/duration
translation_of: Web/API/AudioBuffer/duration
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>La propriéré <code>duration</code>  de l'interface {{ domxref("AudioBuffer") }} renvoie un nombre flottant à double précision représentant la durée, en secondes, des données PCM stockées dans le buffer.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var tableauTampon = audioCtx.createBuffer(nombreCanaux, nombreFrames, contexteAudio.sampleRate);
tableauTampon.duration;</pre>

<h3 id="Valeur">Valeur</h3>

<p>Nombre flottant à double précision.</p>

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
  console.log(tableauDonnees.duration);
}
</pre>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioBuffer-duration', 'duration')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AudioBuffer.duration")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
