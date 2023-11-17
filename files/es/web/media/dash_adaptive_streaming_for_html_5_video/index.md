---
title: Transmisión Adaptativa DASH para Video en HTML 5
slug: Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/es/docs/Web/Media")}}

La Transmisión Adaptativa Dinámica sobre HTTP (_DASH_, por sus siglas en Inglés) es un protocolo de transmisión adaptativa. Esto significa que permite a una transmisión de video cambiar las tasas de bits con base al rendimiento de la red, para mantener un video reproduciendo.

## Soporte de navegadores

Firefox 21 incluye un implementación de _DASH_ para videos HTML WebM la cual está deshabilitada por defecto. Puede ser habilitada a través de "about:config" y la preferencia "media.dash.enabled".

Firefox 23 removió el soporte para _DASH_ para videos HTML WebM. Será reemplazado por una implementación de [Media Source Extensions API](https://www.w3.org/TR/media-source/) la cual permitirá el soporte para _DASH_ a través de librerías de Javascript como dash.js. Véase el error [778617](https://bugzil.la/778617) para más detalles.

## Usando _DASH_ - Desde el servidor

Primero tendrás que convertir tu video WebM a un manifiesto _DASH_ acompañado de los archivos de video en varias tasas de bits. Para empezar solo necesitarás el programa ffmpeg de [ffmpeg.org](https://www.ffmpeg.org/), con soporte para libvpx and libvorbis para video y audio WebM, al menos en versión 2.5 (probablemente; esto fue probado con 3.2.5).

### 1. Usa tu archivo WebM para crear un archivo de audio y múltiples archivos de video

Por ejemplo:

El archivo **_in.video_** puede ser cualquier contenedor con al menos un flujo de datos de audio y uno de video que pueden ser decodificados por ffmpeg.

Crea el audio usando:

```bash
ffmpeg -i in.video -vn -acodec libvorbis -ab 128k -dash 1 my_audio.webm
```

Crea cada variante de video.

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1 -f webm -dash 1 \
-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm
```

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm
```

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm
```

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm
```

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

O hazlo todo en un solo comando.

```bash
ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 \
-g 150 -tile-columns 4 -frame-parallel 1 -f webm -dash 1 \
-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm \
-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm \
-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm \
-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm \
-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

### 2. Crea el archivo manifiesto

```bash
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
```

El parámetro `-map` corresponde a los archivos de entrada en la secuencia que fueron dados; debes tener uno por cada archivo. El parámetro `-adaptation_sets` los asigna en conjuntos de adaptación; por ejemplo, esto crea un conjunto (0) que contiene los flujos de datos 0, 1, 2 y 3 (los videos), y otro conjunto (1) que contiene solo el flujo de datos 4, el flujo de datos de audio.

Pon el manifiesto y los archivos de video asociados en tu servidor web o CDN. _DASH_ trabaja via HTTP, siempre y cuando tu servidor HTTP soporte peticiones de rangos de bytes, y esté configurado para servir archivos `.mpd` con `mimetype="application/dash+xml"`, entonces tendrás todo listo.

## Usando _DASH_ - Desde el cliente

Querrás modificar tu página web para apuntar al manifiesto _DASH_ primero, en lugar de a un video en particular directamente:

```html
<video>
  <source src="movie.mpd" />
  <source src="movie.webm" />
  Tu navegador no soporta la etiqueta video.
</video>
```

¡Eso es todo! Si _DASH_ es soportado por tu navegador, tu video ahora tendrá una transmisión adaptativa.

## Enlaces

[Especificación WebM DASH en El Proyecto WebM](http://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)

[Foro DASH Industry](https://dashif.org/)

[Descripción del proyecto WebM de cómo crear archivos DASH con FFMPEG](http://wiki.webmproject.org/adaptive-streaming/instructions-to-playback-adaptive-webm-using-dash)
