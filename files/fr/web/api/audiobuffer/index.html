---
title: AudioBuffer
slug: Web/API/AudioBuffer
tags:
  - API
  - Experimental
  - Reference
  - Web Audio API
translation_of: Web/API/AudioBuffer
---
<p>{{APIRef("Web Audio API")}}</p>

<p>L'interface AudioBuffer représente une ressource audio stockée en mémoire, créée à partir d'un fichier audio avec la méthode {{ domxref("AudioContext.decodeAudioData()") }}, ou à partir de données brutes avec {{ domxref("AudioContext.createBuffer()") }}. Une fois mises en mémoire dans un AudioBuffer, les données audio sont transférées dans un {{ domxref("AudioBufferSourceNode") }} afin d'être lues.<br>
 <br>
 Ce type d'objet est conçu pour contenir de petit extraits audio, durant généralement moins de 45s. Pour les sons plus longs, les objets implémentant {{domxref ("MediaAudioElementSourceNode")}} sont plus adaptés. La mémoire tampon contient des données au format non entrelacé IEEE 32-bit PCM linéaire, avec une portée nominale comprise entre -1 et +1. S'il y a plusieurs canaux, ils sont stockés dans des mémoires-tampon distinctes.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("AudioBuffer.AudioBuffer", "AudioBuffer()")}}</dt>
 <dd>Crée et retourne un nouvel objet <code>AudioBuffer</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("AudioBuffer.sampleRate")}} {{readonlyInline}}</dt>
 <dd>Retourne un nombre flottant qui représente la fréquence d'échantillonnage, en échantillons par seconde, des données PCM stockées dans la mémoire tampon.</dd>
 <dt>{{domxref("AudioBuffer.length")}} {{readonlyInline}}</dt>
 <dd>Retourne un nombre entier qui représente la longueur, en trames d'échantillonnage , des données PCM stockées dans la mémoire tampon.</dd>
 <dt>{{domxref("AudioBuffer.duration")}} {{readonlyInline}}</dt>
 <dd>Retourne un nombre à virgule flottante de double précision qui représente la durée, exprimée en secondes, des données PCM stockées dans la mémoire tampon.</dd>
 <dt>{{domxref("AudioBuffer.numberOfChannels")}} {{readonlyInline}}</dt>
 <dd>Retourne un nombre entier qui représente le nombre de canaux audio discrets décrits par les données PCM stockées dans la mémoire tampon.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("AudioBuffer.getChannelData()")}}</dt>
 <dd>Retourne un {{domxref ("Float32Array")}} contenant les données PCM associés au canal, défini par l'index du canal (0 représentant le premier canal).</dd>
 <dt>{{domxref("AudioBuffer.copyFromChannel()")}}</dt>
 <dd>Copie les échantillons du canal associé à <code>AudioBuffer</code> dans un tableau de destination.</dd>
 <dt>{{domxref("AudioBuffer.copyToChannel()")}}</dt>
 <dd>Copie les échantillons dans le canal associé à <code>AudioBuffer</code>, depuis le tableau <code>source</code>.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant montre comment créer un  <code>AudioBuffer</code> et le remplir avec du bruit blanc. Le code source est disponible sur notre repo <a href="https://github.com/mdn/audio-buffer">audio-buffer demo</a>; une <a href="http://mdn.github.io/audio-buffer/">version live</a> est également consultable.</p>

<pre class="brush: js">// Stéréo
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

  // Récupère un AudioBufferSourceNode.
  // C'est un AudioNode à utiliser quand on veut jouer AudioBuffer
  var source = contexteAudio.createBufferSource();

  // assigne le buffer au AudioBufferSourceNode
  source.buffer = tableauDonnees;

  // connecte le AudioBufferSourceNode avec
  // la destination pour qu'on puisse entendre le son
  source.connect(contexteAudio.destination);

  // lance la lecture du so
  source.start();

}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#AudioBuffer-section', 'AudioBuffer')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AudioBuffer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
