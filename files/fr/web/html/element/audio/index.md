---
title: '<audio> : l''élément audio embarqué'
slug: Web/HTML/Element/audio
tags:
  - Audio
  - Element
  - HTML
  - HTML embedded content
  - HTML5
  - HTML:Embedded content
  - HTML:Flow content
  - HTML:Phrasing content
  - Media
  - Multimedia
  - Reference
  - Web
  - sound
translation_of: Web/HTML/Element/audio
browser-compat: html.elements.audio
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;audio&gt;</code></strong> est utilisé afin d'intégrer un contenu sonore dans un document. Il peut contenir une ou plusieurs sources audio représentées avec l'attribut <code>src</code> ou l'élément <a href="/fr/docs/Web/HTML/Element/Source"><code>&lt;source&gt;</code></a> : le navigateur choisira celle qui convient le mieux. Il peut également être la destination de médias diffusés en continu, en utilisant un <a href="/fr/docs/Web/API/MediaStream"><code>MediaStream</code></a>.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}</div>

<p>L'exemple qui précède illustre le fonctionnement simple d'un élément <code>&lt;audio&gt;</code>, à la façon de ce qui peut être fait pour une image avec l'élément <a href="/fr/docs/Web/HTML/Element/Img"><code>&lt;img&gt;</code></a> : on inclut un chemin vers la ressource grâce à l'attribut <code>src</code> et on peut ajouter d'autres attributs afin de fournir d'autres informations : lecture automatique, lecture en boucle, utilisation des contrôles par défaut du navigateur, etc.</p>

<p>Le contenu présent à l'intérieur des balises <code>&lt;audio&gt;&lt;/audio&gt;</code> est affiché comme contenu alternatif lorsque le navigateur ne prend pas en charge l'élément.</p>

<h2 id="attributes">Attributs</h2>

<p>Cet élément inclut les <a href="/fr/docs/Web/HTML/Global_attributes">attributs universels</a>.</p>

<dl>
  <dt><strong><code>autoplay</code></strong></dt>
  <dd>Un attribut booléen : s'il est spécifié, l'audio commencera automatiquement la lecture dès qu'il pourra le faire, sans attendre la fin du téléchargement de l'ensemble du fichier audio.

    <div class="note">
      <p><strong>Note :</strong>Les sites qui diffusent automatiquement de l'audio (ou des vidéos avec une piste audio) peuvent s'avérer désagréables pour les utilisateurs et doivent donc être évités dans la mesure du possible. Si vous devez offrir une fonctionnalité de lecture automatique, vous devez la soumettre au choix de l'utilisateur. Cependant, cela peut être utile lors de la création d'éléments médias dont la source sera définie ultérieurement, sous le contrôle de l'utilisateur. Consultez notre <a href="/fr/docs/Web/Media/Autoplay_guide">guide sur la lecture automatique</a> pour obtenir des informations supplémentaires sur la manière d'utiliser correctement la fonction <i>autoplay</i>.</p>
    </div>
  </dd>
  <dt><strong><code>controls</code></strong></dt>
  <dd>Si l'attribut est présent, le navigateur affichera des contrôles pour que l'utilisateur puisse gérer la lecture, le volume, et le déplacement du curseur de lecture.</dd>
  <dt><strong><code>crossorigin</code></strong></dt>
  <dd>Cet attribut à valeur contrainte indique comment le CORS doit être utilisé afin de récupérer la ressource. <a href="/fr/docs/Web/HTML/CORS_enabled_image">Les ressources utilisant le CORS</a> peuvent être réutilisées dans un élément <a href="/fr/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a> sans corrompre celui-ci. Les valeurs autorisées pour cet attribut sont :
  <dl>
    <dt><code>anonymous</code></dt>
    <dd>Une requête multi-origine est envoyée sans information d'authentification. Autrement dit, l'en-tête HTTP <a href="/fr/docs/Web/HTTP/Headers/Origin"><code>Origin</code></a> est envoyé sans cookie, certificat X.509 ou sans authentification HTTP. Si le serveur ne fournit pas d'information d'authentification au site d'origine (sans indiquer l'en-tête <a href="/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"><code>Access-Control-Allow-Origin</code></a>), la ressource sera corrompue (<em>tainted</em>) et son utilisation sera restreinte.</dd>
    <dt><code>use-credentials</code></dt>
    <dd>Une requête multi-origine est envoyée avec une information d'authentification (c'est-à-dire avec un en-tête HTTP <code>Origin:</code> qui contient un cookie, un certificat ou effectuant une authentification HTTP).</dd>
  </dl>
  Lorsque cet attribut n'est pas présent, la ressource est récupérée sans requête CORS et empêche ainsi d'utiliser la ressource dans un <a href="/fr/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a>. Si la valeur fournie est invalide, elle sera considérée comme <code>anonymous</code>. Voir <a href="/fr/docs/Web/HTML/Attributes/crossorigin">Paramétrage des attributs relatifs au CORS</a> pour plus d'informations.</dd>
  <dt><strong><code>disableRemotePlayback</code></strong> {{experimental_inline}}</dt>
  <dd>Un attribut booléen utilisé pour désactiver la capacité de lecture à distance dans les appareils qui sont connectés à l'aide de câbles (HDMI, DVI, etc.) et sans fil (Miracast, Chromecast, DLNA, AirPlay, etc.). Voir <a href="https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute">cette proposition de spécification</a> pour plus d'informations.
    <div class="note">
      <p><strong>Note :</strong>Dans Safari, vous pouvez utiliser <a href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html"><code>x-webkit-airplay="deny"</code></a> comme solution de repli.</p>
    </div>
  </dd>
  <dt><strong><code>loop</code></strong></dt>
  <dd>Un attribut booléen. S'il est renseigné, la lecture du fichier se fera en boucle.</dd>
  <dt><strong><code>muted</code></strong></dt>
  <dd>Un attribut booléen, indiquant si le son de l'élément audio est initialement coupé. Sa valeur par défaut est <code>false</code>.</dd>
  <dt><strong><code>preload</code></strong></dt>
  <dd>Cet attribut indique au navigateur ce que l'auteur du code html pense de l'utilisation optimale de cet élément. Il accepte uniquement les valeurs suivantes :<br>

    <ul>
      <li><code>none</code> : Indique que l'élément audio ne devrait pas être mis en cache</li>
      <li><code>metadata</code> : Indique que seules les méta-données (comme la durée) sont préchargées</li>
      <li><code>auto</code> : Indique que tout le fichier peut être téléchargé, même s'il n'est pas certain que l'utilisateur le lira</li>
      <li><code>""</code> (chaîne de caractères vide) : Un synonyme de <code>auto</code></li>
    </ul>

    <p>La valeur par défaut peut varier d'un navigateur à l'autre. Les spécifications recommandent la valeur <code>metadata</code>.</p>

    <div class="note">
      <p><strong>Note :</strong></p>
      <ul>
        <li>L'attribut <code>autoplay</code> a la priorité sur <code>preload</code>. Si <code>autoplay</code> est spécifié, le navigateur devrait évidemment commencer à télécharger l'audio pour le lire.</li>
        <li>La spécification n'oblige pas le navigateur à suivre la valeur de cet attribut ; il s'agit d'une simple indication.</li>
       </ul>
    </div>
  </dd>
  <dt><strong><code>src</code></strong></dt>
  <dd>L'URL du fichier audio à intégrer. Cet élément est soumis aux <a href="/fr/docs/Web/HTTP/CORS">contrôles d'accès HTTP</a>. Cet attribut est facultatif ; vous pouvez utiliser l'élément <a href="/fr/docs/Web/HTML/Element/Source"><code>&lt;source&gt;</code></a> dans le bloc audio pour spécifier l'audio à intégrer.</dd>
</dl>

<h2 id="events">Évènements</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Nom de l'évènement</th>
      <th scope="col">Condition du déclenchement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/fr/docs/Web/Reference/Events/audioprocess">audioprocess</a></td>
      <td>La mémoire tampon en entrée d'un <a href="/fr/docs/Web/API/ScriptProcessorNode"><code>ScriptProcessorNode</code></a> peut désormais être traité.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/canplay_event"><code>canplay</code></a></td>
      <td>Le navigateur peut lire le média mais estime que trop peu de données ont été chargées pour lire le média jusqu'à sa fin (il faudra vraisemblablement un arrêt pour un chargement en mémoire tampon).</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/canplaythrough_event"><code>canplaythrough</code></a></td>
      <td>Le navigateur estime qu'il peut lire le média jusqu'à sa fin, sans avoir à interrompre la lecture par du chargement en mémoire tampon.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/Reference/Events/complete">complete</a></td>
      <td>Le rendu d'un <a href="/fr/docs/Web/API/OfflineAudioContext"><code>OfflineAudioContext</code></a> est terminé.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/durationchange_event"><code>durationchange</code></a></td>
      <td>L'attribut <code>duration</code> a été mis à jour.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/emptied_event"><code>emptied</code></a></td>
      <td>Le média est devenu vide. Cela peut par exemple se produire lorsque le média a déjà été (partiellement ou complètement) chargé et que la méthode <a href="/fr/docs/Web/API/HTMLMediaElement/load" rel="internal"><code>load()</code></a> est invoquée pour le recharger.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/ended_event"><code>ended</code></a></td>
      <td>La lecture a été interrompue car la fin du média est atteinte.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/loadeddata_event"><code>loadeddata</code></a></td>
      <td>La première <em>frame</em> du média a été chargée.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/loadedmetadata_event"><code>loadedmetadata</code></a></td>
      <td>Les métadonnées ont été chargées.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/pause_event"><code>pause</code></a></td>
      <td>La lecture a été mise en pause.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/play_event"><code>play</code></a></td>
      <td>La lecture a démarré.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/playing_event"><code>playing </code></a></td>
      <td>La lecture est prête à être lancée après avoir été mise en pause ou interrompue pour un chargement en mémoire de données.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/ratechange_event"><code>ratechange</code></a></td>
      <td>La vitesse de lecture a changé.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/seeked_event"><code>seeked</code></a></td>
      <td>Une opération de déplacement du curseur de lecture (<em>seek</em>) est terminée.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/seeking_event"><code>seeking</code></a></td>
      <td>Une opération de déplacement du curseur de lecture (<em>seek</em>) a été initiée.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/stalled_event"><code>stalled</code></a></td>
      <td>L'agent utilisateur tente de récupérer les données associées au média mais les données ne parviennent pas.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/suspend_event"><code>suspend</code></a></td>
      <td>Le chargement des données du média ont été suspendues.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/timeupdate_event"><code>timeupdate</code></a></td>
      <td>Le temps décrit par l'attribut <code>currentTime</code> a été mis à jour.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/volumechange_event"><code>volumechange</code></a></td>
      <td>Le volume a été modifié.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/HTMLMediaElement/waiting_event"><code>waiting</code></a></td>
      <td>La lecture a été interrompue en raison d'un manque temporaire de données.</td>
    </tr>
  </tbody>
</table>

<h2 id="usage_notes">Notes d'utilisation</h2>

<p>Les navigateurs ne prennent pas tous en charge les mêmes <a href="/fr/docs/Web/Media/Formats/Containers">types de fichiers</a> et <a href="/fr/docs/Web/Media/Formats/Audio_codecs">codecs audio</a> ; vous pouvez fournir plusieurs sources à l'intérieur d'éléments <a href="/fr/docs/Web/HTML/Element/Source"><code>&lt;source&gt;</code></a> imbriqués, et le navigateur utilisera alors le premier qu'il comprend :</p>

<pre class="brush: html">&lt;audio controls&gt;
  &lt;source src="myAudio.mp3" type="audio/mpeg"&gt;
  &lt;source src="myAudio.ogg" type="audio/ogg"&gt;
  &lt;p&gt;Votre navigateur ne prend pas en charge l'audio HTML5.
  Voici un &lt;a href="myAudio.mp3"&gt;lien vers le fichier audio&lt;/a&gt;
  à la place.&lt;/p&gt;
&lt;/audio&gt;</pre>

<p>Nous proposons un <a href="/fr/docs/Web/Media/Formats">guide substantiel et complet des types de fichiers médias</a> et des <a href="/fr/docs/Web/Media/Formats/Audio_codecs">codecs audio qui peuvent être utilisés en leur sein</a>. Est également disponible <a href="/fr/docs/Web/Media/Formats/Video_codecs">un guide des codecs supportés pour la vidéo</a>.</p>

<p>Autres notes d'utilisation :</p>

<ul>
  <li>Si vous ne spécifiez pas l'attribut <code>controls</code>, le lecteur audio n'inclura pas les contrôles par défaut du navigateur. Vous pouvez toutefois créer vos propres contrôles personnalisés en utilisant JavaScript et l'API <a href="/fr/docs/Web/API/HTMLMediaElement"><code>HTMLMediaElement</code></a>.</li>
  <li>Pour permettre un contrôle précis de votre contenu audio, les <code>HTMLMediaElement</code> retournent de nombreux <a href="/fr/docs/Web/API/HTMLMediaElement#events">événements</a> différents. Cela fournit également un moyen de surveiller le processus de récupération de l'audio afin que vous puissiez surveiller les erreurs ou détecter quand suffisamment de ressources sont disponibles pour commencer à les lire ou à les manipuler.</li>
  <li>Vous pouvez également utiliser l'API <a href="/fr/docs/Web/API/Web_Audio_API">Web Audio</a> pour générer et manipuler directement des flux audio à partir du code JavaScript plutôt que de diffuser des fichiers audio préexistants.</li>
  <li>Les éléments <code>&lt;audio&gt;</code> ne peuvent pas avoir de sous-titres ou de légendes associés de la même manière que les éléments <code>&lt;video&gt;</code>. Voir <a href="https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio">WebVTT and Audio</a> <small>(en)</small> par Ian Devlin pour des informations utiles et des solutions de contournement.</li>
</ul>

<p>Une bonne source générale d'informations sur l'utilisation de <code>&lt;audio&gt;</code> est le tutoriel sur le <a href="/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">contenu vidéo et audio</a>.</p>

<h3 id="styling_with_css">Mise en forme avec CSS</h3>

<p>L'élément <code>&lt;audio&gt;</code> n'a aucun affichage intrinsèque en dehors des contrôles par défaut du navigateur qui sont affichés lorsque l'attribut booléen <code>controls</code> est présent.</p>

<p>Les contrôles par défaut sont affichés avec <a href="/fr/docs/Web/CSS/display"><code>display</code></a> qui vaut <code>inline</code> par défaut et il est possible de changer cette valeur en <code>block</code> dans une feuille de style afin de pouvoir placer le contrôle au sein de la disposition, à moins de vouloir le placer en incise.</p>

<p>Les contrôles par défaut peuvent être mis en forme grâce à des propriétés qui influent sur l'ensemble du bloc. On peut ainsi utiliser <a href="/fr/docs/Web/CSS/border"><code>border</code></a>, <a href="/fr/docs/Web/CSS/border-radius"><code>border-radius</code></a>, <a href="/fr/docs/Web/CSS/padding"><code>padding</code></a>, <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a>, etc. Toutefois, il n'est pas possible de mettre en forme chacun des composants individuel du contrôle (on ne peut pas, par exemple, modifier la taille d'un des boutons ou leurs icones). Chaque navigateur peut avoir des contrôles par défaut qui soient différents.</p>

<p>Pour obtenir un aspect identique dans les différents navigateurs, il vous faudra créer vos propres contrôles afin de les baliser et de les mettre en forme à votre convenance puis d'utiliser JavaScript et l'API <a href="/fr/docs/Web/API/HTMLMediaElement"><code>HTMLMediaElement</code></a> pour manipuler les différentes fonctionnalités.</p>

<p><a href="/fr/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Video_player_styling_basics">Le guide sur la mise en forme des lecteurs vidéo</a> fournit quelques techniques utiles, bien qu'écrit à propos de l'élément <code>&lt;video&gt;</code>, certains concepts peuvent tout à fait s'appliquer aux éléments <code>&lt;audio&gt;</code>.</p>

<h3 id="detecting_addition_and_removal_of_tracks">Détecter l'ajout et la suppression de pistes</h3>

<p>Il est aussi possible de détecter lorsque des pistes sont ajoutées et supprimées sur un élément <code>&lt;audio&gt;</code> en écoutant les évènements <a href="/fr/docs/Web/API/AudioTrackList/addtrack_event"><code>addtrack</code></a> et <a href="/fr/docs/Web/API/AudioTrackList/removetrack_event"><code>removetrack</code></a>. Toutefois, ces évènements ne sont pas directement envoyés sur l'élément <code>&lt;audio&gt;</code> mais sur l'objet représentant la liste de pistes de l'élément <code>&lt;audio&gt;</code> et rattaché à l'élément <a href="/fr/docs/Web/API/HTMLMediaElement"><code>HTMLMediaElement</code></a>.</p>

<dl>
  <dt><a href="/fr/docs/Web/API/HTMLMediaElement/audioTracks"><code>HTMLMediaElement.audioTracks</code></a></dt>
  <dd>Un objet <a href="/fr/docs/Web/API/AudioTrackList"><code>AudioTrackList</code></a> contenant l'ensemble des pistes audio associées à l'élément. Un écouteur <code>addtrack</code> peut être associé à l'objet afin d'alerter lorsque de nouvelles pistes audio sont ajoutées à l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/HTMLMediaElement/videoTracks"><code>HTMLMediaElement.videoTracks</code></a></dt>
  <dd>Un écouteur <code>addtrack</code> peut être ajouté à cet objet <a href="/fr/docs/Web/API/VideoTrackList"><code>VideoTrackList</code></a> afin d'alerter lorsque de nouvelles pistes vidéo sont ajoutées à l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/HTMLMediaElement/textTracks"><code>HTMLMediaElement.textTracks</code></a></dt>
  <dd>Un écouteur <code>addtrack</code> peut être ajouté à cet objet <a href="/fr/docs/Web/API/TextTrackList"><code>TextTrackList</code></a> afin d'alerter lorsque de nouvelles pistes de texte sont ajoutées à l'élément.</dd>
</dl>

<div class="note">
  <p><strong>Note :</strong>Bien qu'on parle ici d'un élément <code>&lt;audio&gt;</code>, il est possible qu'un tel élément possède des pistes vidéo et des pistes texte bien que la cohérence des interfaces puisse être mise à mal.</p>
</div>

<p>Ainsi, on pourra utiliser un fragment de code analogue à celui qui suit pour détecter si de nouvelles pistes sont ajoutées ou supprimées d'un élément <code>&lt;audio&gt;</code> :</p>

<pre class="brush: js">let elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = function(event) {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = function(event) {
  trackEditor.removeTrack(event.track);
};</pre>

<p>Ce code permet de surveiller lorsque de nouvelles pistes audio sont ajoutées et supprimées. Lorsque c'est le cas, une fonction (non décrite ici) est invoquée afin de mettre à jour l'éditeur présenté à l'utilisateur avec la liste des pistes disponibles.</p>

<p>Il est aussi possible d'utiliser <a href="/fr/docs/Web/API/EventTarget/addEventListener"><code>addEventListener()</code></a> afin d'écouter les évènements <a href="/fr/docs/Web/API/AudioTrackList/addtrack_event"><code>addtrack</code></a> et <a href="/fr/docs/Web/API/AudioTrackList/removetrack_event"><code>removetrack</code></a>.</p>

<h2 id="examples">Exemples</h2>

<h3 id="basic_usage">Utilisation simple</h3>

<pre class="brush: html">&lt;!-- Simple lecture audio --&gt;
&lt;audio src="AudioTest.ogg" autoplay&gt;
  Votre navigateur ne supporte pas l'élément &lt;code&gt;audio&lt;/code&gt;.
&lt;/audio&gt;
</pre>

<p>Pour savoir quand l'autoplay fonctionne, comment obtenir la permission d'utiliser l'autoplay, et comment et quand il est approprié d'utiliser l'autoplay, consultez notre <a href="/fr/docs/Web/Media/Autoplay_guide">guide sur l'autoplay</a>.</p>

<h3 id="audio_element_with_source_element">Utilisation de l'élément <code>&lt;source&gt;</code></h3>

<p>Cet exemple précise quelle piste audio intégrer en utilisant l'attribut <code>src</code> sur un élément <code>&lt;source&gt;</code> imbriqué plutôt que directement sur l'élément <code>&lt;audio&gt;</code>. Il est toujours utile d'inclure le type MIME du fichier à l'intérieur de l'attribut <code>type</code>, car le navigateur est capable de dire instantanément s'il peut lire ce fichier, et de ne pas perdre de temps dessus dans le cas contraire.</p>

<pre class="brush: html">&lt;audio controls="controls"&gt;
  &lt;source src="toto.wav" type="audio/wav"&gt;
  Votre navigateur ne prend pas en charge l'élément &lt;code&gt;audio&lt;/code&gt;.
&lt;/audio&gt;
</pre>

<h3 id="audio_with_multiple_source_elements">Utilisation de plusieurs éléments <code>&lt;source&gt;</code></h3>

<p>Dans l'exemple qui suit, le navigateur essaiera de jouer le premier fichier correspondant au premier élément (celui avec le codec Opus) : s'il peut le lire, il n'interprète pas les suivants ; s'il ne peut pas le lire, il tente de lire le deuxième puis, si ce n'est toujours pas possible, le troisième (au format MP3) :</p>

<pre class="brush: html">&lt;audio controls=""&gt;
  &lt;source src="toto.opus" type="audio/ogg; codecs=opus"/&gt;
  &lt;source src="toto.ogg" type="audio/ogg; codecs=vorbis"/&gt;
 &lt;source src="toto.mp3" type="audio/mpeg"/&gt;
&lt;/audio&gt;</pre>

<h2 id="accessibility_concerns">Accessibilité</h2>

<p>Les éléments audio contenant des dialogues parlés doivent fournir des sous-titres et des transcriptions qui décrivent précisément le contenu. Les sous-titres, qui sont spécifiés à l'aide de <a href="/fr/docs/Web/API/WebVTT_API">WebVTT</a>, ils permettent aux personnes souffrant de troubles auditifs ou ne pouvant pas utiliser le son de l'appareil de lire le fichier. Les transcriptions permettent aux personnes ayant besoin de plus de temps pour lire le contenu d'utiliser un format plus adéquat.</p>

<p>Si un service de sous-titre automatique est utilisé, il est nécessaire de vérifier le contenu généré afin de s'assurer qu'il correspond correctement à la source audio.</p>

<p>L'élément <code>&lt;audio&gt;</code> ne prend pas directement en charge le WebVTT. Vous devrez trouver une bibliothèque ou un framework qui vous offre cette capacité, ou écrire le code pour afficher les sous-titres vous-même. Une option consiste à lire votre audio à l'aide d'un élément <a href="/fr/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>, qui prend en charge WebVTT.</p>

<p>En plus des dialogues parlés, les sous-titres et les transcriptions doivent également identifier la musique et les effets sonores qui communiquent des informations importantes. Cela inclut l'émotion et le ton. Par exemple, dans le WebVTT ci-dessous, notez l'utilisation de crochets pour donner un ton et un aperçu émotionnel au spectateur ; cela peut aider à établir l'ambiance autrement fournie par la musique, les sons non verbaux et les effets sonores cruciaux, et ainsi de suite.</p>

<pre>1
00:00:00 --&gt; 00:00:45
[Musique avec des trompettes sonnantes]

2
00:00:46 --&gt; 00:00:51
Elle est où la poulette ?

16
00:00:52 --&gt; 00:01:02
[sur un ton énervé] Vous rendez la poulette ou c'est plus vous qui donnez à manger aux lapins ?</pre>

<p>Une autre bonne pratique consiste à fournir du contenu comme un lien de téléchargement comme méthode alternative pour les personnes qui utilisent un navigateur qui ne prend pas en charge <code>&lt;audio&gt;</code>&nbsp;:</p>

<pre class="brush: html">&lt;audio controls&gt;
  &lt;source src="monAudio.mp3" type="audio/mpeg"&gt;
  &lt;source src="monAudio.ogg" type="audio/ogg"&gt;
  &lt;p&gt;
    Votre navigateur ne prend pas charge l'audio HTML.
    Voici &lt;a href="monAudio.mp3"&gt;un lien de téléchargement&lt;/a&gt; à la place.
  &lt;/p&gt;
&lt;/audio&gt;

</pre>

<ul>
  <li><a href="/fr/docs/Plugins/Flash_to_HTML5/Video/Subtitles_captions">Sous-titrage sur le web</a></li>
  <li><a href="/fr/docs/Web/API/WebVTT_API">Web Video Text Tracks Format (WebVTT)</a></li>
  <li><a href="https://webaim.org/techniques/captions/">WebAIM: Captions, Transcripts, and Audio Descriptions</a> (en anglais)</li>
  <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media">Comprendre les règles WCAG 1.2</a></li>
  <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html">Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0</a> (en anglais)</li>
  <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html">Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0</a> (en anglais)</li>
</ul>

<h2 id="technical_summary">Résumé technique</h2>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><dfn><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></dfn></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu phrasé</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#embedded_content">contenu intégré</a>. Si l'attribut <a href="#attr-controls"><code>controls</code></a> est utilisé : <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content">contenu interactif</a> et <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Si l'élément possède un attribut <a href="#attr-src"><code>src</code></a> : zéro ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/track"><code>&lt;track&gt;</code></a>, suivis par du contenu transparent ne contenant pas d'éléments média, c'est-à-dire des éléments qui ne soient pas <a href="/fr/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>. Sinon : zéro ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/Source"><code>&lt;source&gt;</code></a> suivis par un élément <a href="/fr/docs/Web/HTML/Element/track"><code>&lt;track&gt;</code></a>, suivi par du contenu transparent ne contenant pas d'éléments média (ni <a href="/fr/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a> ni <a href="/fr/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>).</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du contenu intégré.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="https://w3c.github.io/aria/#application"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLAudioElement"><code>HTMLAudioElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/Media">Technologies media Web</a>
    <ul>
      <li><a href="/fr/docs/Web/Media/Formats/Containers">Formats des conteneurs medias (types de fichiers)</a></li>
      <li><a href="/fr/docs/Web/Media/Formats/Audio_codecs">Guide des codecs audio utilisés sur le web</a></li>
    </ul>
  </li>
  <li>L'API <a href="/fr/docs/Web/API/Web_Audio_API">Web Audio</a></li>
  <li><a href="/fr/docs/Web/API/HTMLAudioElement"><code>HTMLAudioElement</code></a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/Source"><code>&lt;source&gt;</code></a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a></li>
  <li><a href="/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">Apprentissage : Contenu vidéo et audio</a></li>
  <li><a href="/fr/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics">Les bases de l'audio multi-navigateur</a></li>
</ul>
