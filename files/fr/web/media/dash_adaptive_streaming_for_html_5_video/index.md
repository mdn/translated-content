---
title: Utiliser DASH avec les vidéos en HTML
slug: Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video
tags:
  - Avancé
  - DASH
  - Guide
  - HTML
translation_of: Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video
original_slug: Web/HTML/Utiliser_DASH_avec_les_vidéos_en_HTML
---
{{HTMLSidebar}}

**_Dynamic Adaptive Streaming over HTTP_ (DASH)** est un protocole de _streaming_ adaptatif : il permet de changer le débit de la vidéo en fonction des performances réseau afin que la vidéo ne soit pas interrompue lors de la lecture.

## Compatibilité des navigateurs

Firefox 21 inclut une implémentation de DASH pour le format vidéo WebM mais celle-ci est désactivée par défaut et peut être activée via la préférence `media.dash.enabled` sous `about:config`.

Firefox 23 a retiré la prise en charge de DASH pour le format WebM. Cette fonctionnalité sera remplacée par l'implémentation de l'[API Media Source Extensions](http://www.w3.org/TR/media-source/) qui permettra la prise en charge de DASH via des bibliothèques JavaScript tierces (telles que dash.js). Pour plus de détails, voir le bug [778617](https://bugzilla.mozilla.org/show_bug.cgi?id=778617).

## Utiliser DASH, côté serveur

Pour commencer, il faut convertir la vidéo WebM en manifeste DASH avec les vidéos associées aux différents débits. Pour cela, on aura besoin de :

- ffpmeg - avec la prise en charge de l'audio et vidéo WebM fourni via libvpx and libvoribis en version 2.5 minimum ([ffmpeg.org](http://www.ffmpeg.org/)).

### 1. Utiliser un fichier WebM afin de créer une piste audio et plusieurs fichiers vidéo

Dans les lignes d'exemple qui suivent, on utilise le fichier de départ **_in.video_**. Ce fichier peut être n'importe quel conteneur avec au moins un flux audio et un flux vidéo qui peut être décodé par ffmpeg.

On créera la piste audio avec :

    ffmpeg -i in.video -vn -acodec libvorbis -ab 128k -dash 1 my_audio.webm

On créera les pistes vidéos avec :

    ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
    -an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm

    ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
    -an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm

    ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
    -an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm

    ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
    -an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm

    ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
    -an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm

Autrement, on peut utiliser cette commande :

    ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 \
    -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
    -an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm \
    -an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm \
    -an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm \
    -an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm \
    -an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm

### 2. Créer le manifeste

    ffmpeg \
      -f webm_dash_manifest -i video_160x90_250k.webm \
      -f webm_dash_manifest -i video_320x180_500k.webm \
      -f webm_dash_manifest -i video_640x360_750k.webm \
      -f webm_dash_manifest -i video_1280x720_1500k.webm \
      -f webm_dash_manifest -i my_audio.webm \
      -c copy \
      -map 0 -map 1 -map 2 -map 3 -map 4 \
      -f webm_dash_manifest \
      -adaptation_sets "id=0,streams=0,1,2,3 id=1,streams=4" \
      my_video_manifest.mpd

Les arguments `-map` correspondent aux fichiers d'entrée dans l'ordre dans lequel ils sont fournis. Il doit y en avoir un pour chaque fichier. L'argument `-adaptation_sets` permet de les affecter à différents ensembles d'adaptation. Par exemple, cela crée un ensemble (0) qui contient les flux 0, 1, 2 et 3 (les vidéos) et un autre ensemble (1) qui contient uniquement le flux 4 (l'audio).

On pourra alors placer le fichier de manifeste créé à côté des fichiers vidéo sur le serveur web ou sur le CDN. DASH fonctionne via HTTP donc il suffit simplement que votre serveur prenne en charge les requêtes d'intervalles d'octets (byte range requests) et qu'il puisse servir les fichiers `.mpd` avec `mimetype="application/dash+xml"`.

## Utiliser DASH, côté client

Il faut modifier la page web pour que celle-ci pointe d'abord vers le manifeste, avant le fichier vidéo en tant que tel :

```html
<video>
  <source src="movie.mpd">
  <source src="movie.webm">
  Votre navigateur ne prend pas en charge les vidéos HTML.
</video>
```

C'est tout !
Si le navigateur utilisé prend en charge DASH/MSE, la diffusion de la vidéo sera maintenant adaptative.

## Voir aussi

- [La spécification WebM DASH du projet WebM](http://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)
- [Le forum DASH Industry](http://dashif.org/)
- [Descriptions du projet WebM pour la création de fichiers DASH avec FFMPEG](http://wiki.webmproject.org/adaptive-streaming/instructions-to-playback-adaptive-webm-using-dash)
