---
title: BaseAudioContext.createBuffer()
slug: Web/API/BaseAudioContext/createBuffer
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createBuffer
translation_of: Web/API/BaseAudioContext/createBuffer
---
<p>{{APIRef("API Web Audio")}}</p>

<p>La méthode <code>createBuffer()</code> de l'interface {{domxref("BaseAudioContext")}} est utilisée pour créer un nouvel objet {{domxref("AudioBuffer")}} vide, qui peut ensuite être rempli.</p>

<p>Pour plus de détails sur les tampons audio, consultez la page de référence {{domxref ("AudioBuffer")}}.</p>

<div class="note">
<p><strong>Note :</strong> <code>createBuffer()</code> permettait de prendre des données compressées et de restituer des échantillons décodés, mais cette possibilité a été supprimée de la spécification, du fait que tout le décodage était effectué dans le thread principal, donc <code>createBuffer()</code> bloquait l'exécution du reste du code. La méthode asynchrone <code>decodeAudioData()</code> fait la même chose - prend l'audio compressé, par exemple, un fichier MP3, et vous renvoie directement un {{domxref("AudioBuffer")}} que vous pouvez ensuite faire jouer via {{domxref("AudioBufferSourceNode")}}. Pour des utilisations simples comme la lecture d'un fichier MP3, <code>decodeAudioData()</code> est ce que vous devriez utiliser.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var tampon = baseAudioContext.createBuffer(<em>nbDeCanaux</em>, <em>longueur</em>, <em>frequenceDEchantillonnage</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<div class="note">
<p><strong>Note :</strong> pour une explication en profondeur de la façon dont les tampons audio fonctionnent, ainsi que de leur signification, lire <a href="/fr/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API">Les concepts de base de la Web Audio API</a> de notre guide des concepts de base.</p>
</div>

<dl>
 <dt>nbDeCanaux</dt>
 <dd>Un nombre entier représentant le nombre de canaux que ce tampon doit avoir. Les implémentations doivent prendre en charge un minimum de 1 canal et un maximum de 32 canaux.</dd>
 <dt>longueur</dt>
 <dd>Un entier représentant la taille du tampon dans les trames d'échantillons.</dd>
 <dt>frequenceDEchantillonnage</dt>
 <dd>La fréquence d'échantillonnage des données audio linéaires en trames d'échantillons par seconde. Une implémentation doit supporter des fréquences d'échantillonnage comprises au minimum dans la plage 22050 et 96000.</dd>
</dl>

<h3 id="Retourne">Retourne</h3>

<p>Un {{domxref("AudioBuffer")}}.</p>

<h2 id="Exemples">Exemples</h2>

<p>Tout d'abord, deux exemples triviaux simples pour aider à expliquer comment les paramètres sont utilisés :</p>

<pre class="brush: js">var ctxAudio = new AudioContext();
var tampon = ctxAudio.createBuffer(2, 22050, 44100);</pre>

<p>Si vous utilisez cet appel, vous obtiendrez un tampon stéréo (deux canaux), qui, lorsque relu avec un <code>AudioContext</code> fonctionnant à 44100Hz (très courant, la plupart des cartes son normales fonctionnent à cette fréquence), durera 0,5 seconde : 22050 trames / 44100 Hz = 0,5 seconde.</p>

<pre class="brush: js">var ctxAudio = new AudioContext();
var tampon = ctxAudio.createBuffer(1, 22050, 22050);</pre>

<p>Si vous utilisez cet appel, vous obtiendrez un tampon mono (un canal), qui, lorsqu'il sera relu avec un <code>AudioContext</code> fonctionnant à 44100Hz, sera automatiquement *rééchantillonné* à 44100Hz (et produira donc 44100 trames), et durera 1,0 seconde : 44100 images / 44100Hz = 1 seconde.</p>

<div class="note">
<p><strong>Note :</strong> le rééchantillonnage audio est très similaire au redimensionnement d'une image : supposons que vous ayez une image 16 x 16, mais que vous vouliez qu'elle remplisse une zone 32x32: vous la redimensionnez (rééchantillonnez). Le résultat aura une qualité moindre (il pourra être flou ou bizarre, selon l'algorithme de redimensionnement), mais cela fonctionnera, et l'image redimensionnée prendra moins de place. L'audio rééchantillonné est exactement la même chose - vous économisez de l'espace, mais en pratique, vous ne pourrez pas reproduire correctement le contenu haute fréquence (les sons aigus).</p>
</div>

<p>Examinons maintenant un exemple de <code>createBuffer()</code> plus complexe, dans lequel nous créons un tampon de deux secondes, le remplissons de bruit blanc, puis le reproduisons via {{domxref("AudioBufferSourceNode")}}. Le commentaire devrait clairement faire comprendre ce qui se passe. Vous pouvez également exécuter le code en direct ou regarder le source.</p>

<pre class="brush: js">var ctxAudio = new (window.AudioContext || window.webkitAudioContext)();

// Création d'un tampon stéréo vide de trois secondes à la fréquence d'échantillonnage de l'AudioContext
var monArrayBuffer = ctxAudio.createBuffer(2, ctxAudio.sampleRate * 3, ctxAudio.sampleRate);

// Remplissage du tampon avec du bruit blanc ;
// simplement des valeurs aléatoires entre -1,0 et 1,0
for (var canal = 0; canal &lt; monArrayBuffer.numberOfChannels; canal++) {
  // Cela nous donne le ArrayBuffer qui contient effectivement les données
  var donneesCourantes = monArrayBuffer.getChannelData(canal);
  for (var i = 0; i &lt; monArrayBuffer.length; i++) {
    // Math.random() est dans [0; 1,0]
    // l'audio doit se trouver dans [-1,0; 1,0]
    donneesCourantes[i] = Math.random() * 2 - 1;
  }
}

// Récupération d'un AudioBufferSourceNode.
// C'est l'AudioNode à utiliser quand nous voulons lire un AudioBuffer
var source = ctxAudio.createBufferSource();
// Définir le tampon dans l'AudioBufferSourceNode
source.buffer = monArrayBuffer;
// Connecter l'AudioBufferSourceNode à la destination,
// de sorte que nous puissions entendre le son
source.connect(ctxAudio.destination);
// Démarrer la lecture de la source
source.start();</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#dom-baseaudiocontext-createbuffer', 'createBuffer()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.BaseAudioContext.createBuffer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utilisation de l'API Web Audio</a></li>
</ul>
