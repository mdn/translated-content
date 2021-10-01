---
title: AudioBufferSourceNode.loop
slug: Web/API/AudioBufferSourceNode/loop
tags:
  - API
  - AudioBufferSourceNode
  - Loop
  - Reference
  - Web Audio API
translation_of: Web/API/AudioBufferSourceNode/loop
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>La propriété <code>loop</code> de l'interface {{domxref("AudioBufferSourceNode") }} est un booléen indiquant si la ressource audio doit être rejouée quand à la fin de l'{{domxref("AudioBuffer")}}.</p>
</div>

<p>La valeur par défaut de la propriété <code>loop </code>est <code>false</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var source = audioCtx.createBufferSource();
source.loop = true;
</pre>

<h3 id="Value">Value</h3>

<p>Un booléen.</p>

<p>Lorsque la lecture en boucle est activée, le son commence à jouer au point spécifié lorsque {{domxref("AudioBufferSourceNode.start", "start()")}} est appelée. Quand il atteint le point spécifié par la propriété {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}}, il recommence au point spécifié par la propriété {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}}</p>

<h2 id="Exemple">Exemple</h2>

<p>Dans cet exemple, la fonction {{domxref("AudioContext.decodeAudioData")}} est utilisée pour décoder une piste audio et la placer dans un {{domxref("AudioBufferSourceNode")}}. Les boutons mis à disposition permettent de lire et d'arrêter la lecture audio, et un slider est utilisé pour changer la valeur de <code>playbackRate</code> en temps réel. Quand la lecture est terminée, elle boucle.</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez <a href="http://mdn.github.io/decode-audio-data/">essayer un exemple live</a> (or <a href="https://github.com/mdn/decode-audio-data">voir la source</a>.)</p>
</div>

<pre class="brush: js">function getData() {
  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;
      },

      function(e){"Error with decoding audio data" + e.err});

  }

  request.send();
}

// lie les boutons pour lire et arrêter l'audio, et le slider

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
  playbackControl.removeAttribute('disabled');
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
   <td>{{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-loop', 'loop')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AudioBufferSourceNode.loop")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
