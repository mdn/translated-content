---
title: AudioContext.createGain()
slug: Web/API/BaseAudioContext/createGain
tags:
  - API
  - Audio
  - AudioContext
  - Contrôle du volume
  - Méthode
  - Son
  - Volume
  - Web Audio
  - createGain
translation_of: Web/API/BaseAudioContext/createGain
original_slug: Web/API/AudioContext/createGain
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>La méthode createGain de l'interface {{ domxref("AudioContext") }} crée un {{ domxref("GainNode") }} qui peut être utilisé pour contrôler le volume global du graphe audio.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var contexteAudio = new AudioContext();
var gainNode = contexteAudio.createGain();</pre>

<h3 id="Description">Retourne</h3>

<p>Un {{domxref("GainNode")}} qui prend en entrée une ou plusieurs sources audio et en sortie un son dont le volume a été ajusté à un niveau indiqué par le paramètre de type <a href="/en-US/docs/Web/API/AudioParam#a-rate">a-rate</a> {{domxref("GainNode.gain")}}.</p>

<h2 id="Example">Exemple</h2>

<p>L'exemple suivant montre l'utilisation d'un {{domxref("AudioContext")}} pour créer un {{ domxref("GainNode") }}, qui sert à activer et désactiver le son au clic d'un bouton, en changeant la valeur de la propriété gain.<br>
 <br>
 L'extrait de code ci-dessous ne fonctionne pas tel quel - pour un exemple complet qui fonctionne, consulter la démo <a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a> (<a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js">et son code source</a>.)</p>

<pre class="brush: html">&lt;div&gt;
  &lt;button class="boutonson"&gt;Mute button&lt;/button&gt;
&lt;/div&gt;</pre>

<pre class="brush: js">var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = contexteAudio.createGain();
var boutonSon = document.querySelector('.boutonson'),
    source;

if (navigator.getUserMedia) {
  navigator.getUserMedia (
    // contraintes - cette app nécessite seulement l'audio
    {
       audio: true
    },
    // fonction de rappel en cas de succès
    function (flux) {
        source = contexteAudio.createMediaStreamSource(flux);
    },
    // fonction de rappel en cas d'erreur
    function (erreur) {
        console.log("L'erreur à la noix suivante vient de se produire : " + erreur);
    });
}
else {
    console.log("getUserMedia n'est pas supporté par votre navigateur !");
}

source.connect(gainNode);
gainNode.connect(contexteAudio.destination);

  ...

boutonSon.onclick = couperSon;

function couperSon () {
    if (boutonSon.id == "") {
        gainNode.gain.value = 0;
        boutonSon.id = "activated";
        boutonSon.innerHTML = "Activer le son";
    }
    else {
        gainNode.gain.value = 1;
        boutonSon.id = "";
        boutonSon.innerHTML = "Couper le son";
    }
}</pre>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-createGain-GainNode', 'createGain()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateur">Compatibilité navigateur</h2>

<p>{{Compat("api.BaseAudioContext.createGain")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
