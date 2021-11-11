---
title: Manipulation Audio et Vidéo
slug: Web/Guide/Audio_and_video_manipulation
tags:
  - Audio
  - Canvas
  - HTML5
  - Video
  - Web Audio API
  - WebGL
translation_of: Web/Guide/Audio_and_video_manipulation
---
<p>La beauté du web est qu'on peut combiner différentes technologies pour en créer de nouvelles. Avoir de l'audio et vidéo nativement dans le navigateur nous donne la possibilité d'utiliser ces flux de données avec d'autres technologies comme {{htmlelement("canvas")}}, <a href="/fr/docs/Web/API/WebGL_API">WebGL</a> ou <a href="/fr/docs/Web/API/Web_Audio_API">Web Audio API</a> pour modifier le média — par exemple ajouter des effets de réverbération ou de compression à l'audio, ou encore des filtres noir &amp; blanc/sépia aux vidéos. Cet article fournit une référence pour expliquer ce que vous pouvez faire.</p>

<h2 id="Manipulation_Vidéo">Manipulation Vidéo</h2>

<p>La possibilité de lire les valeurs de pixels de chaque image d'une vidéo peut être très utile, cela nous permet de placer ces images dans d'autres contextes.</p>

<h3 id="Vidéo_et_Canvas">Vidéo et Canvas</h3>

<p>{{htmlelement("canvas")}} est un moyen de dessiner de manière scripté sur des pages web; c'est un outil très puissant et qui peut être couplé avec du contenu vidéo.</p>

<p>La technique générale est comme suit:</p>

<ol>
 <li>Dessiner une image de l'élément {{htmlelement("video")}} sur un élément {{htmlelement("canvas")}} intermédiaire.</li>
 <li>Lire les données de l'élément <code>&lt;canvas&gt;</code> et les manipuler.</li>
 <li>Écrire les données manipulées dans le <code>&lt;canvas&gt;</code> que l'on veut afficher.</li>
 <li>Marquer une pause et répéter.</li>
</ol>

<p>On peut configurer notre lecteur vidéo et l'élément <code>&lt;canvas&gt;</code> comme ceci:</p>

<pre class="brush: html">&lt;video id="my-video" controls="true" width="480" height="270" crossorigin="anonymous"&gt;
  &lt;source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm"&gt;
  &lt;source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4"&gt;
&lt;/video&gt;

&lt;canvas id="my-canvas" width="480" height="270"&gt;&lt;/canvas&gt;</pre>

<p>Et les manipuler comme ceci: (en l'occurence, on affiche une version en noir et blanc de la vidéo)</p>

<pre class="brush: js">var processor = {
  timerCallback: function() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    var self = this;
    setTimeout(function () {
      self.timerCallback();
    }, 16); // roughly 60 frames per second
  },

  doLoad: function() {
    this.video = document.getElementById("my-video");
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");
    var self = this;

    this.video.addEventListener("play", function() {
      self.width = self.video.width;
      self.height = self.video.height;
      self.timerCallback();
    }, false);
  },

  computeFrame: function() {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    var frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    var l = frame.data.length / 4;

    for (var i = 0; i &lt; l; i++) {
      var grey = (frame.data[i * 4 + 0] + frame.data[i * 4 + 1] + frame.data[i * 4 + 2]) / 3;

      frame.data[i * 4 + 0] = grey;
      frame.data[i * 4 + 1] = grey;
      frame.data[i * 4 + 2] = grey;
    }
    this.ctx1.putImageData(frame, 0, 0);

    return;
  }
};  </pre>

<p>Une fois que la page est chargée, on peut appeler</p>

<pre class="brush: js">processor.doLoad()</pre>

<p>{{EmbedLiveSample("Vidéo_et_Canvas", '100%', 550)}}</p>

<div class="note">
<p><strong>Note :</strong> En raison de problèmes de sécurité potentiels, si votre vidéo se trouve sur un domaine différent de votre page, vous devez activer <a href="/fr/docs/Web/HTTP/CORS">CORS (Cross Origin Resource Sharing)</a> sur le serveur qui héberge la vidéo et utiliser l'attribut <code>crossorigin</code> sur la balise vidéo.</p>
</div>

<div class="note">
<p><strong>Note :</strong> L'exemple présenté est un exemple minimal de manipulation vidéo avec canvas; pour plus d'efficacité, vous pouvez envisager d'utiliser requestAnimationFrame à la place de setTimeout pour les navigateurs qui le prennent en charge.</p>
</div>

<h3 id="Vidéo_e_WebGL">Vidéo e WebGL</h3>

<p><a href="/en-US/docs/Web/WebGL">WebGL</a> est une API puissante qui utilise canvas pour (typiquement) afficher des scènes en trois dimensions. On peut combiner WebGL et l'élément {{htmlelement("video")}} pour créer des textures vidéo, ce qui veut dire que vous pouvez placer une vidéo dans des scènes 3D.</p>

<p>Exemple:</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample8/index.html', 670, 510) }}</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez trouver le <a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8">code source de cette démo sur GitHub</a> (<a href="https://mdn.github.io/webgl-examples/tutorial/sample8/">la voir en direct</a> aussi).</p>
</div>

<h3 id="Vitesse_de_lecture">Vitesse de lecture</h3>

<p>On peut ajuster la vitesse de lecture de l'audio et vidéo en utilisant l'attribut <code>playbackRate</code> (voir {{domxref("HTMLMediaElement")}}). Il prend pour valeur un nombre qui est le coefficient à appliquer à la vitesse de lecture: par exemple, 0.5 représente la moitié de la vitesse tandis que 2 représente le double.<br>
 <br>
 HTML:</p>

<pre class="brush: html">&lt;video id="my-video" controls src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"&gt;&lt;/video&gt;</pre>

<p>JavaScript:</p>

<pre class="brush: js">var myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;</pre>

<h4>Code jouable</h4>

<pre class="brush: html hidden">&lt;video id="my-video" controls="true" width="480" height="270"&gt;
  &lt;source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm"&gt;
  &lt;source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4"&gt;
&lt;/video&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="Edit" /&gt;
  &lt;input id="reset" type="button" value="Reset" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code"&gt;
var myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;&lt;/textarea&gt;
</pre>

<pre class="brush: js hidden">var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function setPlaybackRate() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  setPlaybackRate();
});

edit.addEventListener('click', function() {
  textarea.focus();
})

textarea.addEventListener('input', setPlaybackRate);
window.addEventListener('load', setPlaybackRate);
</pre>

<p>{{ EmbedLiveSample('Code jouable', 700, 425) }}</p>

<div class="note">
<p><strong>Note :</strong> Essayez l' <a href="http://jsbin.com/qomuvefu/2/edit">exemple playbackRate</a> en direct.</p>
</div>

<div class="note">
<p><strong>Note :</strong> <code>playbackRate</code> marche avec les éléments <code>&lt;audio&gt;</code> et <code><code>&lt;video&gt;</code></code>; cependant, dans les deux cas, la vitesse change mais pas la hauteur du son. Pour manipuler la hauteur du son, vous devez utliliser l'API Web Audio — voir la propriété {{domxref("AudioBufferSourceNode.playbackRate")}}.</p>
</div>

<h2 id="Manipulation_Audio">Manipulation Audio</h2>

<p>Laissons <code>playbackRate</code> de côté. Pour manipuler l'audio, on utilise typiquement l'<a href="/en-US/docs/Web/API/Web_Audio_API">API Web Audio</a>.</p>

<h3 id="Sélectionner_une_source_audio">Sélectionner une source audio</h3>

<p>On peut utiliser la piste audio d'un élément {{htmlelement("audio")}} ou {{htmlelement("video")}} comme source pour alimenter l'API Web Audio, ou un simple buffer audio, une onde sinusoïdale/oscillateur, un flux (comme <a href="/fr/docs/NavigatorUserMedia.getUserMedia">getUserMedia</a> de <a href="/fr/docs/Web/API/WebRTC_API">WebRTC</a>)... Découvrez exactement comment les utiliser en lisant les pages suivantes:</p>

<ul>
 <li>{{domxref("MediaElementAudioSourceNode")}}</li>
 <li>{{domxref("AudioBufferSourceNode")}}</li>
 <li>{{domxref("OscillatorNode")}}</li>
 <li>{{domxref("MediaStreamAudioSourceNode")}}</li>
</ul>

<h3 id="Filtres_Audio">Filtres Audio</h3>

<p>L'API Web Audio a beaucoup de différents filtres/effets qui peuvent être appliqués à l'audio en utilisant {{domxref("BiquadFilterNode")}}, par exemple:</p>

<p>HTML:</p>

<pre class="brush: html">&lt;video id="my-video" controls src="myvideo.mp4" type="video/mp4"&gt;&lt;/video&gt;</pre>

<p>JavaScript:</p>

<pre class="brush: js">var context     = new AudioContext(),
    audioSource = context.createMediaElementSource(document.getElementById("my-video")),
    filter      = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

// Configure filter
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;</pre>

<h4>Code jouable 2</h4>

<pre class="brush: html hidden">&lt;video id="my-video" controls="true" width="480" height="270" crossorigin="anonymous"&gt;
  &lt;source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm"&gt;
  &lt;source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4"&gt;
&lt;/video&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="Edit" /&gt;
  &lt;input id="reset" type="button" value="Reset" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code"&gt;
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;&lt;/textarea&gt;</pre>

<pre class="brush: js hidden">var context     = new AudioContext(),
    audioSource = context.createMediaElementSource(document.getElementById("my-video")),
    filter      = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function setFilter() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  setFilter();
});

edit.addEventListener('click', function() {
  textarea.focus();
})

textarea.addEventListener('input', setFilter);
window.addEventListener('load', setFilter);
</pre>


<p>{{ EmbedLiveSample('Code_jouable_2', 700, 425) }}</p>

<div class="note">
<p><strong>Note :</strong> À moins que <a href="/en-US/docs/Web/HTTP/Access_control_CORS">CORS</a> ne soit activé, vous devrez pour éviter les problèmes de sécurité placer la vidéo sur le même domaine que votre code.</p>
</div>

<p>Les filtres pouvant être appliqués sont:</p>

<ul>
 <li>Low Pass: Les fréquences en dessous de la fréquence de coupure sont inchangées et celles au-dessus sont atténuées.</li>
 <li>High Pass: Les fréquences au-dessus de la fréquence de coupure sont inchangées et celles en dessous sont atténuées.</li>
 <li>Band Pass: Les fréquence comprises entre deux bornes sont inchangées et celles en dehors sont atténuées.</li>
 <li>Low Shelf: Les fréquences basses obtiennent un boost (ou une atténuation).</li>
 <li>High Shelf: Les fréquences hautes obtiennent un boost (ou une atténuation).</li>
 <li>Peaking: Les fréquences à l'intérieur d'une gamme donnée obtiennent un boost (ou une atténuation).</li>
 <li>Notch: Les fréquences à l'intérieur d'une gamme donnée sont atténuées.</li>
 <li>Allpass: Laisse touts les fréquences inchangées mais modifie le rapport de phrase entre les différentes fréquences.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Voir {{domxref("BiquadFilterNode")}} pour plus d'informations.</p>
</div>

<h3 id="Convolutions_et_Impulsions">Convolutions et Impulsions</h3>

<p>Il est également possible d'appliquer des réponses impulsionnelles à l'audio en utilisant {{domxref("ConvolverNode")}}. Une <em>réponse impulsionnelle</em> (<em>impulse response</em> en anglais) est un son crée après une brève impulsion sonore (comme un applaudissement) et qui s'applique sur l'environnement qui l'a créée. Exemple: un écho crée en frappant des mains dans un tunnel.</p>

<p>Exemple:</p>

<pre class="brush: js">var convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);</pre>

<div class="note">
<p><strong>Note :</strong> Voir ce <a href="https://codepen.io/DonKarlssonSan/pen/doVKRE">Codepen</a> pour un exemple appliqué.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Voir {{domxref("ConvolverNode")}} pour plus d'informations.</p>
</div>

<h3 id="Audio_dans_l'espace">Audio dans l'espace</h3>

<p>On peut également positionner l'audio dans l'espace en utilisant un noeud panoramique (un <em>panner</em>). Ce noeud permet de définir un cône source ainsi que des éléments positionnels et directionnels — le tout dans un espace 3D définit par des coordonnées cartésiennes 3D.  <br>
 <br>
 Exemple:</p>

<pre class="brush: js">var panner = context.createPanner();
panner.coneOuterGain = 0.2;
panner.coneOuterAngle = 120;
panner.coneInnerAngle = 0;

panner.connect(context.destination);
source.connect(panner);
source.start(0);

// Position the listener at the origin.
context.listener.setPosition(0, 0, 0);</pre>

<div class="note">
<p><strong>Note :</strong> Vous pouvez trouver un <a href="https://github.com/mdn/webaudio-examples/tree/master/panner-node">exemple sur notre repo GitHub</a> (le <a href="https://mdn.github.io/webaudio-examples/panner-node/">voir en direct</a> aussi).</p>
</div>

<div class="note">
<p><strong>Note :</strong> Voir {{domxref("PannerNode")}} pour plus d'informations.</p>
</div>

<h2 id="Codecs_JavaScript">Codecs JavaScript</h2>

<p>Il est possible de manipuler l'audio au bas niveau en utilisant JavaScript. Cela peut être utile si vous voulez créer des codecs audio.<br>
 <br>
 Des bibliothèques existent actuellement pour les formats suivants:</p>

<ul>
 <li>AAC: <a href="https://github.com/audiocogs/aac.js">AAC.js</a></li>
 <li>ALAC: <a href="https://github.com/audiocogs/alac.js">alac.js</a></li>
 <li>FLAC: <a href="https://github.com/audiocogs/flac.js">flac.js</a></li>
 <li>MP3: <a href="https://github.com/audiocogs/mp3.js">mp3.js</a></li>
 <li>Opus: <a href="https://github.com/audiocogs/opus.js">Opus.js</a></li>
 <li>Vorbis: <a href="https://github.com/audiocogs/vorbis.js">vorbis.js</a></li>
</ul>

<div class="note">
<p><strong>Note :</strong> Sur AudioCogs, vous pouvez <a href="http://audiocogs.org/codecs/">essayer quelques démos</a>; Audiocogs fournit également un Framework, <a href="http://audiocogs.org/codecs/">Aurora.js</a>, qui est destiné à vous aider à créer vos propres codecs en JavaScript.</p>
</div>

<h2 id="Tutoriels">Tutoriels</h2>

<ul>
 <li><a href="/fr/docs/HTML/Manipulating_video_using_canvas">Manipulation vidéo avec la balise Canvas</a></li>
 <li><a href="/fr/Apps/Build/Manipulating_media/HTML5_playbackRate_explained">HTML5 playbackRate expliqué</a></li>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Utiliser l'API Web Audio</a></li>
 <li><a href="/fr/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics">Les bases de la spatialisation audio Web</a></li>
 <li><a href="/fr/docs/Web/API/WebGL_API/Tutorial/Animation_de_textures_en_WebGL#Utilisation_des_images_vid%C3%A9o_comme_texture">Utilisation des images vidéo comme texture WebGL</a> (Vous pouvez également utiliser la bilbiothèque WebGL <a href="http://threejs.org">THREE.js</a> (ou autres) pour <a href="http://stemkoski.github.io/Three.js/Video.html">obtenir cet effet</a>)</li>
 <li><a href="/fr/docs/Web/API/WebGL_API/Tutorial/Animation_de_textures_en_WebGL">Animation de Textures en WebGL</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/webaudio/games/#toc-room">Developing Game Audio with the Web Audio API (Room effects and filters)</a></li>
</ul>

<h2 id="Référence">Référence</h2>

<ul>
 <li>Les éléments {{htmlelement("audio")}} et {{htmlelement("video")}}</li>
 <li>L'API {{domxref("HTMLMediaElement")}}</li>
 <li>L'élément {{htmlelement("canvas")}}</li>
 <li><a href="/fr/docs/Web/API/Web_Audio_API">Web Audio API</a></li>
 <li><a href="/fr/docs/Web/API/AudioContext">AudioContext</a></li>
 <li>Plus d'infos sur <a href="/fr/docs/Web/API/AudioContext.createPanner">PannerNode</a></li>
</ul>
