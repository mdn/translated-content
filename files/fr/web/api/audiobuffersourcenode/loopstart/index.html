---
title: AudioBufferSourceNode.loopStart
slug: Web/API/AudioBufferSourceNode/loopStart
translation_of: Web/API/AudioBufferSourceNode/loopStart
---
<p>{{ APIRef("Web Audio API") }}<br>
 La propriété <code>loopStart</code> de l'interface {{ domxref("AudioBufferSourceNode") }} est un nombre flottant à double précision qui indique, en secondes, à quel moment de l'{{domxref("AudioBuffer")}} la lecture doit reprendre lors d'une boucle. Elle n'est prise en compte que lorque la propriété {{domxref("AudioBufferSourceNode.loop", "loop")}} est <code>true</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var source = contexteAudio.createBufferSource();
source.loopStart = 3;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un nombre flottant à double précision. La valeur par défaut est <code>0</code>.</p>

<h2 id="Exemple">Exemple</h2>

<p>Dans cet exemple, la fonction {{domxref("AudioContext.decodeAudioData")}} est utilisée pour décoder une piste audio et la mettre dans un {{domxref("AudioBufferSourceNode")}}. L'interface fournit deux boutons pour démarrer et arrêter la lecture, et des sliders pour modifier les propriétés <code>playbackRate</code>, <code>loopStart</code> et <code>loopEnd</code> à la volée.</p>

<p>Lorsque la lecture de la source audio est terminée, elle boucle. Il est possible de contrôler la durée de la boucle en modifiant <code>loopStart</code> et <code>loopEnd</code>. Par exemple, si leurs valeurs sont fixées à 20 et 25, respectivement, le son bouclera entre la 20ème et la 25ème secondes du morceau.</p>

<div class="note">
<p><strong>Note :</strong> Voir <a href="http://mdn.github.io/decode-audio-data/"> l'exemple complet</a> et <a href="https://github.com/mdn/decode-audio-data">son code source</a>.</p>
</div>

<pre class="brush: js">function getData() {
  source = contexteAudio.createBufferSource();
  requete = new XMLHttpRequest();

  requete.open('GET', 'viper.ogg', true);

  requete.responseType = 'arraybuffer';


  requete.onload = function() {
    var donneesAudio = requete.response;

    contexteAudio.decodeAudioData(donneesAudio, function(buffer) {
        maMemoireTampon = buffer;
        dureeMorceau = buffer.duration;
        source.buffer = maMemoireTampon;
        source.playbackRate.value = playbackControl.value;
        source.connect(contexteAudio.destination);
        source.loop = true;

        loopstartControl.setAttribute('max', Math.floor(dureeMorceau));
        loopendControl.setAttribute('max', Math.floor(dureeMorceau));
      },

      function(e){"Erreur lors du décodage des données audio " + e.err});

  }

  requete.send();
}

  ...

loopstartControl.oninput = function() {
  source.loopStart = loopstartControl.value;
  loopstartValue.innerHTML = loopstartControl.value;
}

loopendControl.oninput = function() {
  source.loopEnd = loopendControl.value;
  loopendValue.innerHTML = loopendControl.value;
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
   <td>{{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-loopStart', 'loopStart')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.AudioBufferSourceNode.loopStart")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser la Web Audio API</a></li>
</ul>
