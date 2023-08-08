---
title: Transmisión Adaptativa DASH para Video en HTML 5
slug: Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video
---

La Transmisión Adaptable y Dinámica sobre HTTP (DASH - _Dynamic Adaptive Streaming over HTTP_) es un protocolo de transmisión adaptable. Esto signfica que le permite a un flujo de vídeo cambiar entre diversas tazas de bits con base en el desempeño de la red, para mantener la reproducción de un vídeo.

## Soporte de Navegadores

Firefox 21 incluye una implementación de DASH para video WebM con HTML5 que está desactivada por defecto. Se puede activar a través de "about:config" activando la opción "media.dash.enabled".

Firefox 23 eliminó el soporte para DASH para WebM con HTML 5. Ésta será reemplazada por una implementación de la [Media Source Extensions API](http://www.w3.org/TR/media-source/)que de soporte a DASH a través de javascript usando librerías como dash.js. Ver el bug [778617](https://bugzilla.mozilla.org/show_bug.cgi?id=778617) para más detalles.

## Usando DASH del lado del servidor

Lo primero que necesitas es convertir tu video WebM en un manifiesto DASH con todos los archivos en los diferentes bitrates. Para comenzar necesitas:

- ffpmeg - con libvpx y libvorbis activado para dar soporte al audio y video de WebM ([ffmpeg.org](http://www.ffmpeg.org/)).
- libwebm - concretamente para la herramienta samplemuxer (git clone <https://gerrit.chromium.org/gerrit/p/webm/libwebm.git>).
- webm-tools - concretamente para la herramienta de creación de manifiestos, webm_dash_manifest (git clone <https://gerrit.chromium.org/gerrit/p/webm/webm-tools.git>).

### 1. Use your existing WebM file to create one audio file and multiple video files

Por ejemplo:

Creamos el archivo de audio usando:

```
ffmpeg -i my_master_file.webm -vn -acodec libvorbis -ab 128k my_audio.webm
```

Creamos los archivos de vídeo usando:

```
ffmpeg -i my_master_file.webm -vcodec libvpx -vb 250k -keyint_min 150 -g 150 -an my_video-250kbps.webm
ffmpeg -i my_master_file.webm -vcodec libvpx -vb 100k -keyint_min 150 -g 150 -an my_video-100kbps.webm
ffmpeg -i my_master_file.webm -vcodec libvpx -vb 50k -keyint_min 150 -g 150 -an my_video-50kbps.webm
```

### 2. Align the clusters to enable switching at cluster boundaries

For video:

```
samplemuxer -i my_video-250kbps.webm -o my_video-250kbps-final.webm
etc.
```

Although we don't switch audio streams, it's still necessary to run it through samplemuxer to ensure a cues element is added. Note: to be compatible with playing on Chrome, it is suggested to change the track number to something other than the one in the video files, most likely 0.

```
samplemuxer -i my_audio.webm -o my_audio-final.webm -output_cues 1 -cues_on_audio_track 1 -max_cluster_duration 2 -audio_track_number
```

### 3. Create the manifest file

```
webm_dash_manifest -o my_video_manifest.mpd \
  -as id=0,lang=eng \
  -r id=0,file=my_video-250kbps-final.webm \
  -r id=1,file=my_video-100kbps-final.webm \
  -r id=2,file=my_video-50kbps-final.webm \
  -as id=1,lang=eng \
  -r id=4,file=my_audio-final.webm
```

Put the manifest and the associated video files on your web server or CDN. DASH works via HTTP, so as long as your HTTP server supports byte range requests, and it's set up to serve .mpd files with mimetype="application/dash+xml", then you're all set.

## Using DASH - Client Side

You'll want to modify your web page to point to the DASH manifest first, instead of directly to a particular video file:

```html
<video>
  <source src="movie.mpd" />
  <source src="movie.webm" />
  Your browser does not support the video tag.
</video>
```

That's it! If DASH is supported by the browser, your video will now stream adaptively.

## Links

[WebM DASH Specification at The WebM Project](http://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)

[DASH Industry Forum](http://dashif.org/)
