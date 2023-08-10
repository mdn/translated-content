---
title: Live streaming web Audio et Vidéo
slug: Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video
---

La technologie de _live streaming_ (diffusion en direct) est souvent utilisée pour relayer des événements en direct, tels que le sport, les concerts, ou de manière plus générale les programmes TV et radio en direct. Souvent raccourci au simple terme de _streaming_, le live streaming est le processus de transmissions d'un média _live_ (c'est à dire dynamique et non statique) aux ordinateurs et aux périphériques. C'est un sujet assez complexe et nouveau avec beaucoup de variables à prendre en considération, dans cet article nous allons vous introduire le sujet et vous donner des clés pour démarrer.

La première chose à avoir en tête quand on diffuse un live stream à un navigateur est le fait que, plutôt que de jouer un fichier fini, on relaie un fichier qui est créé à la volée et qui n'a pas de début ou de fin prédéterminé.

## Principales différences entre media en stream et statique

Un média statique est un média stocké dans un fichier, comme un fichier mp3 ou webm. Ce fichier se trouve sur un serveur et peut être délivré — comme la plupart des types de fichier — au navigateur. Le navigateur peut commencer à jouer le média avant de l'avoir reçu en intégralité, c'est ce qu'on appelle un _téléchargement progressif_.

Un média en _live stream_ n'a pas de temps de début et de fin finis comme un fichier statique, c'est un flux de données que le serveur transmet au navigateur et qui est souvent adaptatif (explication ci-dessous). Habituellement, il est nécessaire d'utiliser des formats différents et des logiciles spéciaux côté serveur pour y parvenir.

## Streaming adaptatif

Une des principale priorité du live streaming est de garder le lecteur du client synchronisé avec le flux envoyé par le serveur: le streaming adaptatif est une technique qui le permet, qui s'adapte en cas de bande passante faible. Le taux de transfert des données est contrôlé, et, s'il semble être en retard, utilise un flux qui demande moins de bande passante (et donc de qualité inférieure).

Pour que ce soit possible, on doit utiliser des formats qui facilitent cette opération. Les formats de live streaming autorisent généralement une diffusion adaptative en divisant le flux en série de petits segments, et en rendant ces segments disponibles à différents qualités et débits binaires.

## Streaming Audio et Vidéo à la demande

La technologie de streaming n'est pas utilisée exclusivement pour les live streams. Elle peut également être utilisée à la place de la méthode traditionnelle de téléchargement progressif, pour diffuser des fichiers audio et vidéo à la demande. Il y a plusieurs avantages à ça:

- La latence est généralement plus faible, les médias peuvent démarrer plus rapidement
- Le streaming adaptatif donne une meilleure expérience utilisateur sur une variété d'appareils, y compris à faible débit
- Le média est téléchargé juste à temps, ce qui utilise la bande passante plus efficacement

## Protocoles de Streaming

Tandis que les médias statiques sont généralement servis avec HTTP, il existe plusieurs protocoles pour servir un stream adaptatif; voyons les différentes options.

### HTTP

Pour l'instant, HTTP est de loin le protocole le plus couramment utilisé pour transférer des médias à la demande ou en stream.

### RTMP

Real Time Messaging Protocol (RTMP) est un protocole propriétaire développée par Macromedia (maintenant Adobe) et supporté par le plugin Adobe Flash. RTMP est disponible en plusieurs variantes, notamment RTMPE (Encrypté), RTMPS (Securisé sur SSL/TLS) et RTMPT (encapsulé dans des requêtes HTTP).

### RTSP

Real Time Streaming Protocol (RTSP) contrôle les sessions média entre les entités et il est souvent utilisé en combinaison avec Real-time Transport Protocol (RTP) et Real-time Control Protocol (RTCP) pour délivrer des flux média. Utiliser RTP avec RTCP permet un streaming adaptatif. Il n'est pas encore suporté nativement par la plupart des navigateurs, mais [Firefox OS 1.3 supporte RTSP](http://www.mozilla.org/en-US/firefox/os/notes/1.3/).

> **Note :** Certains fournisseurs implémentent des protocoles de transfert propriétaires, tel que RealNetworks et leur Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 est actuellement en cours de développement, il n'est pas rétro-compatible avec RTSP 1.0.

> **Attention :** Bien que les balises {{ htmlelement("audio") }} et {{ htmlelement("video") }} soient agnostiques de tout protocole, aucun navigateur ne supporte actuellement autre chose que HTTP sans nécessiter de plugin, bien que cela semble être parti pour changer. De plus, les protocoles autres que HTTP peuvent être bloqués par des pare-feu et des serveurs proxy.

## Utiliser des protocoles de streaming

Le procédé pour utiliser différents protocoles vous sera familier si vous avez l'habitude de travailler avec les média sur HTTP — il suffit de spécifier le protocole.

Par exemple:

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## Extensions de Sources Média (MSE)

[Media Source Extensions](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html) est un brouillon de travail de W3C qui prévoit d'étendre {{ domxref("HTMLMediaElement") }} pour permettre à JavaScript de générer des flux média pour la lecture. Permettre à JavaScript de générer des streams facilite toute une variété de cas d'utilisations comme le streaming adaptatif et le décalage temporel des live streams.

Par exemple, [vous pourriez implémenter MPEG-DASH en utilisant JavaScript tout en laissant le décodage à la charge de MSE](http://msopentech.com/blog/2014/01/03/streaming_video_player/).

> **Note :** Le décalage temporel est le processus de lire un live stream quelque temps après qu'il ait été diffusé.

## Formats de fichiers Vidéo en Streaming

Quelques formats de vidéo en live streaming HTTP commençent à être pris en charge parmi les navigateurs.

> **Note :** Vous pouvez trouver un guide pour encoder HLS et MPEG-DASH pour une utilisation sur le web sur [Configuration de sources multimédia en streaming adaptatif](/fr/Apps/Build/Manipulating_media/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH est l'acronyme de Dynamic Adaptive Streaming over HTTP, c'est un nouveau format dont le support a récemment été ajouté à Chrome, et Internet Explorer 11 sous Windows 8.1. Il est supporté via les Extensions de Sources Media, qui sont utilisées par les bibliothèques JavaScript comme [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/).

Cette approche permet de télécharger des segments de flux vidéo en utilisant XHR et en "ajoutant" le segment au flux en cours de lecture par l'élément {{ htmlelement("video") }}. Ainsi, par exemple, si l'on détecte que le réseau est lent, on peut demander des segments de moins bonne qualité (plus petits) en cours de route. Cette technologie permet également d'ajouter/insérer un segment publicitaire dans le flux.

> **Note :** Vous pouvez également [utiliser WebM avec le système de streaming adaptatif MPEG DASH](http://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS (HTTP Live Streaming) est un protocole inventé par Apple Inc et il est pris en charge par iOS, Safari et les dernières versions du navigateur Android / Chrome. HLS est également adaptatif.

HLS peut également être décodé en utilisant JavaScript, ce qui signifie que l'on peut supporter les dernières versions de Firefox, Chrome et Internet Explorer 10+. Voir ce [lecteur JavaScript HTTP Live Streaming](https://github.com/dailymotion/hls.js).

Au début de la session de streaming, une [playlist M3U étendue (m3u8)](http://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) est téléchargée. Elle contient les metadonnées des différents sous-fux fournis.

### Suport de formats de fichiers en Streaming

| Navigateur               | DASH  | HLS   | Opus (Audio) |
| ------------------------ | ----- | ----- | ------------ |
| Firefox 32               | ✓ [1] | ✓ [2] | ✓ 14+        |
| Safari 6+                |       | ✓     |              |
| Chrome 24+               | ✓ [1] | ✓     |              |
| Opera 20+                | ✓ [1] |       |              |
| Internet Explorer 10+    | ✓ 11  | ✓ [2] |              |
| Firefox Mobile           | ✓     | ✓     | ✓            |
| Safari iOS6+             |       | ✓     |              |
| Chrome Mobile            | ✓     | ✓ [2] |              |
| Opera Mobile             | ✓ [1] | ✓     |              |
| Internet Explorer Mobile | ✓ 11  | ✓ [2] |              |
| Android                  | ✓     |       |              |

\[1] Via JavaScript et MSE

\[2] Via JavaScript et un Proxy CORS

### Video de secours

Entre DASH et HLS, on peut couvrir une partie importante des navigateurs modernes mais il faut encore une solution de secours si on veut supporter le reste.

Une approche populaire est d'utiliser Flash en solution de secours, qui prend en charge RTMP. Bien sûr, le problème est qu'il nous faut alors encoder dans trois formats de données différents.

## Formats de fichiers Audio en Streaming

Il y a également quelques formats audio qui commençent à pris en charge par les navigateurs.

### Opus

Opus est un format libre de droit et open source qui permet d'optimiser la qualité de différents débits binaires pour différents types audio. La musique et la parole peuvent être optimisées de différentes manières et Opus utilise les codecs SILK et CELT pour y parvenir.

Actuellement, Opus est supporté par Firefox (bureau et mobile) ainsi que les dernières versions de Chrome bureau et Opera.

> **Note :** [Opus est un format obligatoire](http://tools.ietf.org/html/draft-ietf-rtcweb-audio-05) pour les implémentations navigateur de WebRTC.

### MP3, AAC, Ogg Vorbis

Les formats audio les plus courants peuvent être diffusés en stream en utilisant des technologies spécifiques côté serveur.

> **Note :** Il est plus facile de diffuser de l'audio en stream en utilisant des formats qui n'ont pas été conçu pour car, contrairement aux vidéos, il n'y a pas de keyframes.

## Technologies de Streaming côté serveur

Pour diffuser de l'audio ou vidéo en live stream, vous devez exécuter un logiciel de streaming sur votre serveur ou utiliser un service tiers.

### GStreamer

[GStreamer](http://gstreamer.freedesktop.org/) est un framework multimédia open source et multi-platforme qui permet de créer une variété de composants pour gérer les médias, y compris des composants de streaming. À travers son système de plugin, GStreamer fournit un support pour plus d'une centaine de codecs (dont MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV, et FLV.)

Des plugins GStreamer existent, tels que [souphttpclientsink](http://gstreamer.freedesktop.org/data/doc/gstreamer/head/gst-plugins-good-plugins/html/gst-plugins-good-plugins-plugin-soup.html) et [shout2send](https://gstreamer.freedesktop.org/data/doc/gstreamer/head/gst-plugins-good/html/gst-plugins-good-plugins-shout2send.html), pour diffuser en stream des médias sur HTTP. Vous pouvez également intégrer le framework Python Twisted ou utiliser quelque chose comme [Flumotion](http://www.flumotion.net/features/) (logiciel de streaming open source).

Pour le transfert RTMP, vous pouvez utiliser le [module Nginx RTMP](https://github.com/arut/nginx-rtmp-module).

### SHOUTcast

[SHOUTcast](http://en.wikipedia.org/wiki/SHOUTcast) est une technologie propriétaire multi-plateforme pour diffuser des médias en streaming. Développé par Nullsoft, elle permet de diffuser du contenu audio au format MP3 ou AAC en broadcast. Pour utilisation sur le web, les streams SHOUTcast sont transmis sur HTTP.

> **Note :** [Les urls SHOUTcast peuvent nécessiter l'ajout d'un point-virgule à la fin](http://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

Le serveur [Icecast](http://www.icecast.org/) est une technologie open source pour diffuser des média en streaming. Maintenu par [Xiph.org Foundation](http://www.xiph.org/), il diffuse les formats Ogg Vorbis/Theora ainsi que MP3 et AAC via le protocole SHOUTcast.

> **Note :** SHOUTcast et Icecast font partie des technologies les plus répandues et les plus populaires, mais il existe de nombreux [autres systèmes de diffusion en streaming disponibles](http://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### Services de Streaming

Bien que vous ayez la possibilité d'installer des logiciels tels que GStreamer, SHOUTcast et Icecast, vous pouvez également trouver de nombreux [services de streaming tiers](http://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems) qui feront le travail pour vous.

## Voir aussi

- [HTTP Live Streaming](http://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS Browser Support](http://www.jwplayer.com/html5/hls/)
- [HTTP Live Streaming JavaScript player](https://github.com/RReverser/mpegts)
- [The Basics of HTTP Live Streaming](http://www.larryjordan.biz/app_bin/wordpress/archives/2369)
- [DASH Adaptive Streaming for HTML 5 Video](/fr/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamic Adaptive Streaming over HTTP (MPEG-DASH)](http://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH Media Source Demo](http://dash-mse-test.appspot.com/media.html)
- [DASH Reference Client](http://dashif.org/reference/players/javascript/1.0.0/index.html)
- [Dynamic Streaming over HTTP](http://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [The State of MPEG-DASH Deployment](http://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Look, no plugins: Live streaming to the browser using Media Source Extensions and MPEG-DASH](http://www.bbc.co.uk/rd/blog/2014/03/media-source-extensions)
- [Media Source Extensions (W3C)](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html)
- [Icecast](http://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](http://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](http://en.wikipedia.org/wiki/GStreamer)
- [Streaming GStreamer Pipelines Via HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [Streaming media using gstreamer on the web](http://www.svesoftware.com/passkeeper/cms/article/streaming-media-using-gstreamer-web/)
- [GStreamer and Raspberry Pi](http://nginx-rtmp.blogspot.it/2013/07/gstreamer-and-raspberry-pi.html)
- [Acceptance of Media Source Extensions as W3C Candidate Recommendation will accelerate adoption of dash.js](http://msopentech.com/blog/2014/01/09/acceptance-media-source-extensions-w3c-candidate-recommendation-will-accelerate-adoption-dash-js/)
- [Comparison of Streaming Media Systems](http://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
