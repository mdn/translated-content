---
title: AudioContext.createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
translation_of: Web/API/AudioContext/createMediaElementSource
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>La méthode <code>createMediaElementSource()</code> de l’interface {{ domxref("AudioContext") }} est utilisée pour créer un nouvel objet {{ domxref("MediaElementAudioSourceNode") }} d’après un élément HTML {{ htmlelement("audio") }} ou {{ htmlelement("video") }} existant, permettant ainsi de jouer et de manipuler l’audio de cet élément.</p>
</div>

<p>Pour plus de détails à propos des nœuds source audio des éléments média, constultez la page de référence de {{ domxref("MediaElementAudioSourceNode") }}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>myMediaElement</code></dt>
 <dd>Un objet {{domxref("HTMLMediaElement")}} que vous voulez injecter dans un graphe de traitement audio pour le manipuler.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un {{domxref("MediaElementAudioSourceNode")}}.</p>

<h2 id="Exemple">Exemple</h2>

<p>Cet exemple simple crée une source depuis un élément {{ htmlelement("audio") }} grâce à <code>createMediaElementSource()</code>, puis passe le signal audio à travers un {{ domxref("GainNode") }} avant de l’injecter dans le {{ domxref("AudioDestinationNode") }} pour la lecture. Quand le pointeur de la souris est déplacé, la fonction <code>updatePage()</code> est invoquée, et calcule le gain actuel comme rapport de la position Y de la souris divisée par la hauteur totale de la fenêtre. Vous pouvez ainsi augmenter ou diminuer le volume de la musique jouée, en déplaçant le pointeur de la souris vers le haut ou vers le bas.</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez également <a href="http://mdn.github.io/webaudio-examples/media-source-buffer/">voir cet exemple en temps réel</a>, ou <a href="https://github.com/mdn/webaudio-examples/tree/master/media-source-buffer">examiner le code source</a>.</p>
</div>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// Crée un MediaElementAudioSourceNode
// et y injecte le HTMLMediaElement
var source = audioCtx.createMediaElementSource(myAudio);

// Crée un nœud gain
var gainNode = audioCtx.createGain();

// Crée les variables pour stocker la position Y du pointeur
// et la HAUTEUR de l’écran
var CurY;
var HEIGHT = window.innerHeight;

// Récupère les nouvelles coordonnées du pointeur quand la souris est déplacée
// et définit la nouvelle valeur de gain

document.onmousemove = updatePage;

function updatePage(e) {
    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    gainNode.gain.value = CurY/HEIGHT;
}


// connecte le AudioBufferSourceNode au nœud gain
// et le nœud gain à la destination, de sorte qu’on puisse jouer la
// musique et ajuster le volume avec le curseur de la souris
source.connect(gainNode);
gainNode.connect(audioCtx.destination);</pre>

<div class="note">
<p><strong>Note :</strong> Du fait de l’appel à <code>createMediaElementSource()</code>, la lecture de l’audio du {{ domxref("HTMLMediaElement") }} est redirigée dans le graphe de traitement de l’AudioContext. Ainsi, jouer / mettre en pause le média est toujours possible via l’API des éléments média ou via les contrôles du lecteur.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createMediaElementSource-MediaElementAudioSourceNode-HTMLMediaElement-mediaElement', 'createMediaElementSource()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.AudioContext.createMediaElementSource")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
