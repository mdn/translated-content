---
title: Live streaming web Audio et Vidéo
slug: Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video
tags:
  - Guide
  - Streaming adaptatif
translation_of: Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video
---

<p>La technologie de <em>live streaming</em> (diffusion en direct) est souvent utilisée pour relayer des événements en direct, tels que le sport, les concerts, ou de manière plus générale les programmes TV et radio en direct. Souvent raccourci au simple terme de <em>streaming</em>, le live streaming est le processus de transmissions d'un média <em>live</em> (c'est à dire dynamique et non statique) aux ordinateurs et aux périphériques. C'est un sujet assez complexe et nouveau avec beaucoup de variables à prendre en considération, dans cet article nous allons vous introduire le sujet et vous donner des clés pour démarrer.</p>

<p>La première chose à avoir en tête quand on diffuse un live stream à un navigateur est le fait que, plutôt que de jouer un fichier fini, on relaie un fichier qui est créé à la volée et qui n'a pas de début ou de fin prédéterminé.</p>

<h2 id="Principales_différences_entre_media_en_stream_et_statique">Principales différences entre media en stream et statique</h2>

<p>Un média statique est un média stocké dans un fichier, comme un fichier mp3 ou webm. Ce fichier se trouve sur un serveur et peut être délivré — comme la plupart des types de fichier — au navigateur. Le navigateur peut commencer à jouer le média avant de l'avoir reçu en intégralité, c'est ce qu'on appelle un <em>téléchargement progressif</em>.</p>

<p>Un média en <em>live stream</em> n'a pas de temps de début et de fin finis comme un fichier statique, c'est un flux de données que le serveur transmet au navigateur et qui est souvent adaptatif (explication ci-dessous). Habituellement, il est nécessaire d'utiliser des formats différents et des logiciles spéciaux côté serveur pour y parvenir.</p>

<h2 id="Streaming_adaptatif">Streaming adaptatif</h2>

<p>Une des principale priorité du live streaming est de garder le lecteur du client synchronisé avec le flux envoyé par le serveur: le streaming adaptatif est une technique qui le permet, qui s'adapte en cas de bande passante faible. Le taux de transfert des données est contrôlé, et, s'il semble être en retard, utilise un flux qui demande moins de bande passante (et donc de qualité inférieure).</p>

<p>Pour que ce soit possible, on doit utiliser des formats qui facilitent cette opération. Les formats de live streaming autorisent généralement une diffusion adaptative en divisant le flux en série de petits segments, et en rendant ces segments disponibles à différents qualités et débits binaires.</p>

<h2 id="Streaming_Audio_et_Vidéo_à_la_demande">Streaming Audio et Vidéo à la demande</h2>

<p>La technologie de streaming n'est pas utilisée exclusivement pour les live streams. Elle peut également être utilisée à la place de la méthode traditionnelle de téléchargement progressif, pour diffuser des fichiers audio et vidéo à la demande. Il y a plusieurs avantages à ça:</p>

<ul>
 <li>La latence est généralement plus faible, les médias peuvent démarrer plus rapidement</li>
 <li>Le streaming adaptatif donne une meilleure expérience utilisateur sur une variété d'appareils, y compris à faible débit</li>
 <li>Le média est téléchargé juste à temps, ce qui utilise la bande passante plus efficacement</li>
</ul>

<h2 id="Protocoles_de_Streaming">Protocoles de Streaming</h2>

<p>Tandis que les médias statiques sont généralement servis avec HTTP, il existe plusieurs protocoles pour servir un stream adaptatif; voyons les différentes options.</p>

<h3 id="HTTP">HTTP</h3>

<p>Pour l'instant, HTTP est de loin le protocole le plus couramment utilisé pour transférer des médias à la demande ou en stream.</p>

<h3 id="RTMP">RTMP</h3>

<p>Real Time Messaging Protocol (RTMP) est un protocole propriétaire développée par Macromedia (maintenant Adobe) et supporté par le plugin Adobe Flash. RTMP est disponible en plusieurs variantes, notamment RTMPE (Encrypté), RTMPS (Securisé sur SSL/TLS) et RTMPT (encapsulé dans des requêtes HTTP).</p>

<h3 id="RTSP">RTSP</h3>

<p>Real Time Streaming Protocol (RTSP) contrôle les sessions média entre les entités et il est souvent utilisé en combinaison avec Real-time Transport Protocol (RTP) et Real-time Control Protocol (RTCP) pour délivrer des flux média. Utiliser RTP avec RTCP permet un streaming adaptatif. Il n'est pas encore suporté nativement par la plupart des navigateurs, mais <a href="http://www.mozilla.org/en-US/firefox/os/notes/1.3/">Firefox OS 1.3 supporte RTSP</a>.</p>

<div class="note">
  <p><strong>Note :</strong> Certains fournisseurs implémentent des protocoles de transfert propriétaires, tel que RealNetworks et leur Real Data Transport (RDT).</p>
</div>

<h3 id="RTSP_2.0">RTSP 2.0</h3>

<p>RTSP 2.0 est actuellement en cours de développement, il n'est pas rétro-compatible avec RTSP 1.0.</p>

<div class="warning">
<p><strong>Attention :</strong> Bien que les balises {{ htmlelement("audio") }} et {{ htmlelement("video") }} soient agnostiques de tout protocole, aucun navigateur ne supporte actuellement autre chose que HTTP sans nécessiter de plugin, bien que cela semble être parti pour changer. De plus, les protocoles autres que HTTP peuvent être bloqués par des pare-feu et des serveurs proxy.</p>
</div>

<h2 id="Utiliser_des_protocoles_de_streaming">Utiliser des protocoles de streaming</h2>

<p>Le procédé pour utiliser différents protocoles vous sera familier si vous avez l'habitude de travailler avec les média sur HTTP — il suffit de spécifier le protocole.</p>

<p>Par exemple:</p>

<pre class="brush: html">&lt;video src="rtsp://myhost.com/mymedia.format"&gt;
 &lt;!-- Fallback here --&gt;
&lt;/video&gt;</pre>

<h2 id="Extensions_de_Sources_Média_(MSE)">Extensions de Sources Média  (MSE)</h2>

<p><a href="https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html">Media Source Extensions</a> est un brouillon de travail de W3C qui prévoit d'étendre {{ domxref("HTMLMediaElement") }} pour permettre à JavaScript de générer des flux média pour la lecture. Permettre à JavaScript de générer des streams facilite toute une variété de cas d'utilisations comme le streaming adaptatif et le décalage temporel des live streams.<br>
 <br>
 Par exemple, <a href="http://msopentech.com/blog/2014/01/03/streaming_video_player/">vous pourriez implémenter MPEG-DASH en utilisant JavaScript tout en laissant le décodage à la charge de MSE</a>.</p>

<div class="note">
<p><strong>Note :</strong> Le décalage temporel est le processus de lire un live stream quelque temps après qu'il ait été diffusé.</p>
</div>

<h2 id="Formats_de_fichiers_Vidéo_en_Streaming">Formats de fichiers Vidéo en Streaming</h2>

<p>Quelques formats de vidéo en live streaming HTTP commençent à être pris en charge parmi les navigateurs.</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez trouver un guide pour encoder HLS et MPEG-DASH pour une utilisation sur le web sur <a href="/fr/Apps/Build/Manipulating_media/Setting_up_adaptive_streaming_media_sources">Configuration de sources multimédia en streaming adaptatif</a>.</p>
</div>

<h3 id="MPEG-DASH">MPEG-DASH</h3>

<p>DASH est l'acronyme de Dynamic Adaptive Streaming over HTTP, c'est un nouveau format dont le support a récemment été ajouté à Chrome, et Internet Explorer 11 sous Windows 8.1. Il est supporté via les Extensions de Sources Media, qui sont utilisées par les bibliothèques JavaScript comme <a href="https://github.com/Dash-Industry-Forum/dash.js/">DASH.js</a>.</p>

<p>Cette approche permet de télécharger des segments de flux vidéo en utilisant XHR et en "ajoutant" le segment au flux en cours de lecture par l'élément {{ htmlelement("video") }}. Ainsi, par exemple, si l'on détecte que le réseau est lent, on peut demander des segments de moins bonne qualité (plus petits) en cours de route. Cette technologie permet également d'ajouter/insérer un segment publicitaire dans le flux.</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez également <a href="http://wiki.webmproject.org/adaptive-streaming/webm-dash-specification">utiliser WebM avec le système de streaming adaptatif MPEG DASH</a>.</p>
</div>

<h3 id="HLS">HLS</h3>

<p>HLS (HTTP Live Streaming) est un protocole inventé par Apple Inc et il est pris en charge par iOS, Safari et les dernières versions du navigateur Android / Chrome. HLS est également adaptatif.<br>
 <br>
 HLS peut également être décodé en utilisant JavaScript, ce qui signifie que l'on peut supporter les dernières versions de Firefox, Chrome et Internet Explorer 10+. Voir ce <a href="https://github.com/dailymotion/hls.js">lecteur JavaScript HTTP Live Streaming</a>.<br>
 <br>
 Au début de la session de streaming, une <a href="http://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives">playlist M3U étendue (m3u8)</a> est téléchargée. Elle contient les metadonnées des différents sous-fux fournis.</p>

<h3 id="Suport_de_formats_de_fichiers_en_Streaming">Suport de formats de fichiers en Streaming</h3>

<table>
 <thead>
  <tr>
   <th>Navigateur</th>
   <th>DASH</th>
   <th>HLS</th>
   <th>Opus (Audio)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Firefox 32</td>
   <td>✓ [1]</td>
   <td>✓ [2]</td>
   <td>✓ 14+</td>
  </tr>
  <tr>
   <td>Safari 6+</td>
   <td> </td>
   <td>✓</td>
   <td> </td>
  </tr>
  <tr>
   <td>Chrome 24+</td>
   <td>✓ [1]</td>
   <td>✓</td>
   <td> </td>
  </tr>
  <tr>
   <td>Opera 20+</td>
   <td>✓ [1]</td>
   <td> </td>
   <td> </td>
  </tr>
  <tr>
   <td>Internet Explorer 10+</td>
   <td>✓ 11</td>
   <td>✓ [2]</td>
   <td> </td>
  </tr>
  <tr>
   <td>Firefox Mobile</td>
   <td>✓</td>
   <td>✓</td>
   <td>✓</td>
  </tr>
  <tr>
   <td>Safari iOS6+</td>
   <td> </td>
   <td>✓</td>
   <td> </td>
  </tr>
  <tr>
   <td>Chrome Mobile</td>
   <td>✓</td>
   <td>✓ [2]</td>
   <td> </td>
  </tr>
  <tr>
   <td>Opera Mobile</td>
   <td>✓ [1]</td>
   <td>✓</td>
   <td> </td>
  </tr>
  <tr>
   <td>Internet Explorer Mobile</td>
   <td>✓ 11</td>
   <td>✓ [2]</td>
   <td> </td>
  </tr>
  <tr>
   <td>Android</td>
   <td>✓</td>
   <td> </td>
   <td> </td>
  </tr>
 </tbody>
</table>

<p>[1] Via JavaScript et MSE</p>

<p>[2] Via JavaScript et un Proxy CORS</p>

<h3 id="Video_de_secours">Video de secours</h3>

<p>Entre DASH et HLS, on peut couvrir une partie importante des navigateurs modernes mais il faut encore une solution de secours si on veut supporter le reste.<br>
 <br>
 Une approche populaire est d'utiliser Flash en solution de secours, qui prend en charge RTMP. Bien sûr, le problème est qu'il nous faut alors encoder dans trois formats de données différents.</p>

<h2 id="Formats_de_fichiers_Audio_en_Streaming">Formats de fichiers Audio en Streaming</h2>

<p>Il y a également quelques formats audio qui commençent à pris en charge par les navigateurs.</p>

<h3 id="Opus">Opus</h3>

<p>Opus est un format libre de droit et open source qui permet d'optimiser la qualité de différents débits binaires pour différents types audio. La musique et la parole peuvent être optimisées de différentes manières et Opus utilise les codecs SILK et CELT pour y parvenir.<br>
 <br>
 Actuellement, Opus est supporté par Firefox (bureau et mobile) ainsi que les dernières versions de Chrome bureau et Opera.</p>

<div class="note">
<p><strong>Note :</strong> <a href="http://tools.ietf.org/html/draft-ietf-rtcweb-audio-05">Opus est un format obligatoire</a> pour les implémentations navigateur de WebRTC.</p>
</div>

<h3 id="MP3_AAC_Ogg_Vorbis">MP3, AAC, Ogg Vorbis</h3>

<p>Les formats audio les plus courants peuvent être diffusés en stream en utilisant des technologies spécifiques côté serveur.</p>

<div class="note">
<p><strong>Note :</strong> Il est plus facile de diffuser de l'audio en stream en utilisant des formats qui n'ont pas été conçu pour car, contrairement aux vidéos, il n'y a pas de keyframes.</p>
</div>

<h2 id="Technologies_de_Streaming_côté_serveur">Technologies de Streaming côté serveur</h2>

<p>Pour diffuser de l'audio ou vidéo en live stream, vous devez exécuter un logiciel de streaming sur votre serveur ou utiliser un service tiers.</p>

<h3 id="GStreamer">GStreamer</h3>

<p><a href="http://gstreamer.freedesktop.org/">GStreamer</a> est un framework multimédia open source et multi-platforme qui permet de créer une variété de composants pour gérer les médias, y compris des composants de streaming. À travers son système de plugin, GStreamer fournit un support pour plus d'une centaine de codecs (dont MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV, et FLV.)</p>

<p>Des plugins GStreamer existent, tels que <a href="http://gstreamer.freedesktop.org/data/doc/gstreamer/head/gst-plugins-good-plugins/html/gst-plugins-good-plugins-plugin-soup.html">souphttpclientsink</a> et <a href="https://gstreamer.freedesktop.org/data/doc/gstreamer/head/gst-plugins-good/html/gst-plugins-good-plugins-shout2send.html">shout2send</a>, pour diffuser en stream des médias sur HTTP. Vous pouvez également intégrer le framework Python Twisted ou utiliser quelque chose comme <a href="http://www.flumotion.net/features/">Flumotion</a> (logiciel de streaming open source).</p>

<p>Pour le transfert RTMP, vous pouvez utiliser le <a href="https://github.com/arut/nginx-rtmp-module">module Nginx RTMP</a>.</p>

<h3 id="SHOUTcast">SHOUTcast</h3>

<p><a href="http://en.wikipedia.org/wiki/SHOUTcast">SHOUTcast</a> est une technologie propriétaire multi-plateforme pour diffuser des médias en streaming. Développé par Nullsoft, elle permet de diffuser du contenu audio au format MP3 ou AAC en broadcast. Pour utilisation sur le web, les streams SHOUTcast sont transmis sur HTTP.</p>

<div class="note">
<p><strong>Note :</strong> <a href="http://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5">Les urls SHOUTcast peuvent nécessiter l'ajout d'un point-virgule à la fin</a>.</p>
</div>

<h3 id="Icecast">Icecast</h3>

<p>Le serveur <a href="http://www.icecast.org/">Icecast</a> est une technologie open source pour diffuser des média en streaming. Maintenu par <a href="http://www.xiph.org/">Xiph.org Foundation</a>, il diffuse les formats Ogg Vorbis/Theora ainsi que MP3 et AAC  via le protocole SHOUTcast.</p>

<div class="note">
<p><strong>Note :</strong> SHOUTcast et Icecast font partie des technologies les plus répandues et les plus populaires, mais il existe de nombreux <a href="http://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers">autres systèmes de diffusion en streaming disponibles</a>.</p>
</div>

<h3 id="Services_de_Streaming">Services de Streaming</h3>

<p>Bien que vous ayez la possibilité d'installer des logiciels tels que GStreamer, SHOUTcast et Icecast, vous pouvez également trouver de nombreux <a href="http://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems">services de streaming tiers</a> qui feront le travail pour vous.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="http://en.wikipedia.org/wiki/HTTP_Live_Streaming">HTTP Live Streaming</a></li>
 <li><a href="http://www.jwplayer.com/html5/hls/">HLS Browser Support</a></li>
 <li><a href="https://github.com/RReverser/mpegts">HTTP Live Streaming JavaScript player</a></li>
 <li><a href="http://www.larryjordan.biz/app_bin/wordpress/archives/2369">The Basics of HTTP Live Streaming</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/DASH_Adaptive_Streaming_for_HTML_5_Video">DASH Adaptive Streaming for HTML 5 Video</a></li>
 <li><a href="http://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP">Dynamic Adaptive Streaming over HTTP (MPEG-DASH)</a></li>
 <li><a href="http://dash-mse-test.appspot.com/media.html">MPEG-DASH Media Source Demo</a></li>
 <li><a href="http://dashif.org/reference/players/javascript/1.0.0/index.html">DASH Reference Client</a></li>
 <li><a href="http://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP">Dynamic Streaming over HTTP</a></li>
 <li><a href="http://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx">The State of MPEG-DASH Deployment</a></li>
 <li><a href="http://www.bbc.co.uk/rd/blog/2014/03/media-source-extensions">Look, no plugins: Live streaming to the browser using Media Source Extensions and MPEG-DASH</a></li>
 <li><a href="https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html">Media Source Extensions (W3C)</a></li>
 <li><a href="http://en.wikipedia.org/wiki/Icecast">Icecast</a></li>
 <li><a href="http://en.wikipedia.org/wiki/Shoutcast">SHOUTcast</a></li>
 <li><a href="http://en.wikipedia.org/wiki/GStreamer">GStreamer</a></li>
 <li><a href="https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/">Streaming GStreamer Pipelines Via HTTP</a></li>
 <li><a href="http://www.svesoftware.com/passkeeper/cms/article/streaming-media-using-gstreamer-web/">Streaming media using gstreamer on the web</a></li>
 <li><a href="http://nginx-rtmp.blogspot.it/2013/07/gstreamer-and-raspberry-pi.html">GStreamer and Raspberry Pi</a></li>
 <li><a href="http://msopentech.com/blog/2014/01/09/acceptance-media-source-extensions-w3c-candidate-recommendation-will-accelerate-adoption-dash-js/">Acceptance of Media Source Extensions as W3C Candidate Recommendation will accelerate adoption of dash.js</a></li>
 <li><a href="http://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems">Comparison of Streaming Media Systems</a></li>
</ul>

<p><br>
  </p>

<p> </p>

<p> </p>

<p> </p>

<p> </p>
