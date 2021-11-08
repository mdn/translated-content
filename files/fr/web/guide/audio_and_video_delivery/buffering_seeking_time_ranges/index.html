---
title: 'Mémoire tampon, position, et plages de temps'
slug: Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges
tags:
  - Apps
  - Buffer
  - HTML5
  - TimeRanges
  - Video
  - buffering
  - seeking
translation_of: Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges
---

<p>Il est parfois utile de savoir combien d'{{htmlelement("audio") }} ou {{htmlelement("video") }} a été téléchargé ou peut être joué sans délai — par exemple pour afficher la barre de progression du tampon dans un lecteur audio ou vidéo. Cet article explique comment construire une barre de progrès de mise en mémoire tampon en utilisant <a href="/fr/docs/Web/API/TimeRanges">TimeRanges</a>, et d'autres fonctionnalités de l'API Media.</p>


<h2 id="Buffered">Buffered</h2>

<p>L'attribut <code>buffered</code> indique quelles parties du média ont été téléchargées. Il retourne un objet {{ domxref("TimeRanges") }}, qui indique tous les morceaux téléchargés. C'est généralement contigu, mais si l'utilisateur saute à une autre position pendant que le média est en cours de chargement, il peut alors y avoir des trous.</p>

<p>Cela fonctionne avec {{htmlelement("audio") }} et {{htmlelement("video") }}; pour l'instant, considérons un simple exemple audio:</p>

<pre class="brush: html">&lt;audio id="my-audio" controls src="music.mp3"&gt;
&lt;/audio&gt;</pre>

<p>On accède à cet attribut ainsi:</p>

<pre class="brush: js">var myAudio = document.getElementById('my-audio');

var bufferedTimeRanges = myAudio.buffered;</pre>

<h2 id="Objet_TimeRanges">Objet TimeRanges</h2>

<p>TimeRanges est une série de plages de temps ne se chevauchant pas, avec un temps de début et de fin. (<a href="/fr/docs/Web/API/TimeRanges">en savoir plus sur TimeRanges</a>).</p>

<p>Un objet {{ domxref("TimeRanges") }} contient les propriétés/méthodes suivantes:</p>

<ul>
 <li><code>length</code>: Le nombre de plages de temps contenus dans l'objet.</li>
 <li><code>start(index)</code>: Permet de récupérer le temps du début, en seconde, d'une plage de temps.</li>
 <li><code>end(index)</code>: Permet de récupérer le temps de la fin, en seconde, d'une plage de temps.</li>
</ul>

<p>Sans interraction utilisateur il y a généralement une seule plage de temps, mais si vous sautez dans le média alors plus d'une plage de temps peut apparaître, comme illustré dans la visualisation ci-dessous. Elle représente deux plages de temps en mémoire tampon — une qui s'étend de 0 à 5 secondes et la seconde qui s'étend de 15 à 19 secondes.</p>

<pre>------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21</pre>

<p>Pour cette instance audio, l'objet {{ domxref("TimeRanges") }} associé aurait les propriétés suivantes:</p>

<pre class="brush: js">myAudio.buffered.length;   // returns 2
myAudio.buffered.start(0); // returns 0
myAudio.buffered.end(0);   // returns 5
myAudio.buffered.start(1); // returns 15
myAudio.buffered.end(1);   // returns 19</pre>

<p>Pour essayer et visualiser les plages de temps en mémoire tampon, on peut écrire un peu d'HTML:</p>

<pre class="brush: html">&lt;p&gt;
  &lt;audio id="my-audio" controls&gt;
    &lt;source src="music.mp3" type="audio/mpeg"&gt;
  &lt;/audio&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;canvas id="my-canvas" width="300" height="20"&gt;
  &lt;/canvas&gt;
&lt;/p&gt;</pre>

<p>Et un peu de JavaScript:</p>

<pre class="brush: js">  window.onload = function(){

    var myAudio = document.getElementById('my-audio');
    var myCanvas = document.getElementById('my-canvas');
    var context = myCanvas.getContext('2d');

    context.fillStyle = 'lightgray';
    context.fillRect(0, 0, myCanvas.width, myCanvas.height);
    context.fillStyle = 'red';
    context.strokeStyle = 'white';

    var inc = myCanvas.width / myAudio.duration;

    // afficher TimeRanges

    myAudio.addEventListener('seeked', function() {
      for (i = 0; i &lt; myAudio.buffered.length; i++) {

        var startX = myAudio.buffered.start(i) * inc;
        var endX = myAudio.buffered.end(i) * inc;
        var width = endX - startX;

        context.fillRect(startX, 0, width, myCanvas.height);
        context.rect(startX, 0, width, myCanvas.height);
        context.stroke();
      }
    });
  }</pre>

<p>Cela fonctionne mieux avec les morceaux audio ou vidéo un peu plus longs, mais appuyez sur play et cliquez sur la barre de progression du lecteur et vous devriez obtenir quelque chose comme ci-dessous. Chaque rectangle rouge remplissant le rectangle blanc représente une plage de temps.</p>

<p><img src="bufferedtimeranges.png"></p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez voir <a href="http://jsbin.com/memazaro/1/edit">cet exemple en direct sur JS Bin</a>.</p>
</div>

<h2 id="Seekable">Seekable</h2>

<p>L'attribut <code>seekable</code> retourne un objet {{ domxref("TimeRanges") }} qui indique quelles parties du média peuvent être jouées sans chargement préalable. C'est indépendant du fait que la partie ait été téléchargée ou non: certaines parties peuvent être <em>seekable</em> mais non <em>buffered</em> si les requêtes de plage d'octets (byte-range requests) sont activées sur le serveur. Les requêtes de plage d'octets permettent aux parties du fichier média d'être délivrées du serveur et jouées presque immédiatement — et sont donc <em>seekable</em>.</p>

<pre class="brush: js">var seekableTimeRanges = myAudio.seekable;</pre>

<h2 id="Créer_notre_propre_barre_de_progrès">Créer notre propre barre de progrès</h2>

<p>Si on voulait créer notre propre lecteur média, on pourrait vouloir afficher les parties du média prêtes à être jouées. Un bon moyen d'y arriver est d'utiliser l'attribut <code>seekable</code>.</p>

<p>Bien qu'on ait vu que les parties ne sont pas nécessairement contigues, elles le sont généralement, et on peut utiliser une approximation de cette information pour donner à l'utilisateur une indication de la quantité de média qui peut être jouée directement. On peut trouver ce point en utilisant la ligne de code suivante:</p>

<pre class="brush: js">var seekableEnd = myAudio.seekable.end(myAudio.seekable.length - 1);</pre>

<div class="note">
<p><strong>Note :</strong> <code>myAudio.seekable.end(myAudio.seekable.length - 1)</code> nous indique en fait le temps de fin de la dernière plage de temps disponible (et non toutes). En pratique, c'est suffisant, car le navigateur peut permettre ou non de requêter des plages d'octets. S'il ne le permet pas — <code>audio.seekable</code> sera l'équivalent de <code>audio.buffered</code> — on a une indication valide de la fin du média chargée. Sinon, alors cette valeur vaudra la durée du média presque instantannément.</p>
</div>

<p>Il est peut-être préférable de donner une indication de la quantité de média effectivement téléchargée — c'est ce que les lecteurs natifs du navigateur semblent indiquer.</p>

<p>Alors, construisons cela. Le HTML de notre lecteur ressemble à ça:</p>

<pre class="brush: css">&lt;audio id="my-audio" preload controls&gt;
  &lt;source src="music.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;
&lt;div class="buffered"&gt;
  &lt;span id="buffered-amount"&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;span id="progress-amount"&gt;&lt;/span&gt;
&lt;/div&gt;
</pre>

<p>Nous utiliserons le CSS suivant pour styliser l'affichage de la mémoire tampon:</p>

<pre class="brush: css">.buffered {
  height: 20px;
  position: relative;
  background: #555;
  width: 300px;
}

#buffered-amount {
  display: block;
  height: 100%;
  background-color: #777;
  width: 0;
}

.progress {
  margin-top: -20px;
  height: 20px;
  position: relative;
  width: 300px;
}

#progress-amount {
  display: block;
  height: 100%;
  background-color: #595;
  width: 0;
}</pre>

<p>Et le JavaScript suivant se charge notre fonctionnalité:</p>

<pre class="brush: js">window.onload = function(){

  var myAudio = document.getElementById('my-audio');

  myAudio.addEventListener('progress', function() {
    var duration =  myAudio.duration;
    if (duration &gt; 0) {
      for (var i = 0; i &lt; myAudio.buffered.length; i++) {
            if (myAudio.buffered.start(myAudio.buffered.length - 1 - i) &lt; myAudio.currentTime) {
                document.getElementById("buffered-amount").style.width = (myAudio.buffered.end(myAudio.buffered.length - 1 - i) / duration) * 100 + "%";
                break;
            }
        }
    }
  });

  myAudio.addEventListener('timeupdate', function() {
    var duration =  myAudio.duration;
    if (duration &gt; 0) {
      document.getElementById('progress-amount').style.width = ((myAudio.currentTime / duration)*100) + "%";
    }
  });
}</pre>

<p>L'événement <code>progress</code> est déclenché au fur et à mesure que les données sont téléchargées, cela nous permet de réagir pour afficher la progression du téléchargement ou de la mise en mémoire tampon.</p>

<p>L'événement <code>timeupdate</code> est declénché 4 fois par seconde au fur et à mesure que le média est joué et c'est là qu'on incrémente notre barre de progrès.</p>

<p>Cela devrait vous donner des résultats similaires à ce qui suit, où la barre gris clair représente la progression de la mise en mémoire tampon et la barre verte montre la progression de la lecture:</p>

<p><img src="bufferedprogress.png"></p>

<div class="note">
<p><strong>Note :</strong> Voir pouvez <a href="http://jsbin.com/badimipi/1/edit">voir l'exemple en direct sur JS Bin</a>.</p>
</div>

<h2 id="Un_petit_mot_sur_Played">Un petit mot sur Played</h2>

<p>Il vaut la peine de mentionner la propriété <code>played</code> — elle nous indique quelles plages de temps ont été jouées dans le média. Par exemple:</p>

<pre class="brush: js">var played = audio.played; // returns a TimeRanges object</pre>

<p>Ce peut être utile pour récupérer les parties du média qui sont les plus écoutées ou regardées.</p>
