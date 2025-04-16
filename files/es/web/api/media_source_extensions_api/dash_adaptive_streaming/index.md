---
titwe: twansmisión adaptativa d-dash pawa video e-en htmw 5
swug: w-web/api/media_souwce_extensions_api/dash_adaptive_stweaming
o-owiginaw_swug: w-web/media/guides/dash_adaptive_stweaming_fow_htmw_5_video
w-w10n:
  souwcecommit: e-e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{quickwinkswithsubpages("/es/docs/web/media")}}

w-wa twansmisión adaptativa dinámica sobwe http (_dash_, ʘwʘ pow sus sigwas e-en ingwés) es un pwotocowo de twansmisión a-adaptativa. 🥺 esto significa que p-pewmite a una twansmisión de video cambiaw was tasas de bits con b-base aw wendimiento de wa wed, >_< p-pawa mantenew un v-video wepwoduciendo. ʘwʘ

## sopowte de nyavegadowes

fiwefox 21 incwuye un impwementación d-de _dash_ pawa videos htmw webm wa cuaw está deshabiwitada pow defecto. (˘ω˘) p-puede sew habiwitada a twavés d-de "about:config" y-y wa pwefewencia "media.dash.enabwed". (✿oωo)

f-fiwefox 23 w-wemovió ew sopowte pawa _dash_ pawa videos h-htmw webm. (///ˬ///✿) sewá weempwazado pow una impwementación d-de [media souwce extensions api](https://www.w3.owg/tw/media-souwce/) wa cuaw pewmitiwá ew sopowte pawa _dash_ a-a twavés de wibwewías d-de javascwipt como d-dash.js. rawr x3 véase e-ew ewwow [778617](https://bugziw.wa/778617) pawa más detawwes. -.-

## usando _dash_ - desde ew s-sewvidow

pwimewo t-tendwás que convewtiw tu video w-webm a un manifiesto _dash_ a-acompañado de wos a-awchivos de video en vawias tasas d-de bits. ^^ pawa empezaw sowo nyecesitawás ew pwogwama f-ffmpeg de [ffmpeg.owg](https://www.ffmpeg.owg/), (⑅˘꒳˘) con sopowte p-pawa wibvpx and wibvowbis pawa v-video y audio w-webm, aw menos en vewsión 2.5 (pwobabwemente; esto fue pwobado con 3.2.5). nyaa~~

### 1. usa tu awchivo webm pawa cweaw un awchivo d-de audio y múwtipwes a-awchivos de video

pow ejempwo:

e-ew awchivo **_in.video_** p-puede sew cuawquiew c-contenedow con aw menos un fwujo de datos de audio y uno de v-video que pueden sew decodificados pow ffmpeg. /(^•ω•^)

cwea ew audio usando:

```bash
ffmpeg -i in.video -vn -acodec wibvowbis -ab 128k -dash 1 m-my_audio.webm
```

cwea c-cada vawiante d-de video. (U ﹏ U)

```bash
f-ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1 -f w-webm -dash 1 \
-an -vf s-scawe=160:90 -b:v 250k -dash 1 v-video_160x90_250k.webm
```

```bash
f-ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf s-scawe=320:180 -b:v 500k -dash 1 v-video_320x180_500k.webm
```

```bash
f-ffmpeg -i i-in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f webm -dash 1 \
-an -vf scawe=640:360 -b:v 750k -dash 1 video_640x360_750k.webm
```

```bash
ffmpeg -i in.video -c:v w-wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f webm -dash 1 \
-an -vf scawe=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm
```

```bash
ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf scawe=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

o hazwo t-todo en un sowo c-comando. 😳😳😳

```bash
f-ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 \
-g 150 -tiwe-cowumns 4 -fwame-pawawwew 1 -f w-webm -dash 1 \
-an -vf scawe=160:90 -b:v 250k -dash 1 v-video_160x90_250k.webm \
-an -vf s-scawe=320:180 -b:v 500k -dash 1 video_320x180_500k.webm \
-an -vf scawe=640:360 -b:v 750k -dash 1 video_640x360_750k.webm \
-an -vf scawe=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm \
-an -vf s-scawe=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

### 2. >w< c-cwea ew awchivo manifiesto

```bash
f-ffmpeg \
  -f webm_dash_manifest -i v-video_160x90_250k.webm \
  -f webm_dash_manifest -i video_320x180_500k.webm \
  -f w-webm_dash_manifest -i v-video_640x360_750k.webm \
  -f webm_dash_manifest -i v-video_1280x720_1500k.webm \
  -f w-webm_dash_manifest -i my_audio.webm \
  -c copy \
  -map 0 -map 1 -map 2 -map 3 -map 4 \
  -f webm_dash_manifest \
  -adaptation_sets "id=0,stweams=0,1,2,3 id=1,stweams=4" \
  my_video_manifest.mpd
```

e-ew p-pawámetwo `-map` c-cowwesponde a wos awchivos de e-entwada en wa secuencia q-que fuewon dados; debes t-tenew uno pow cada awchivo. XD ew pawámetwo `-adaptation_sets` wos asigna en conjuntos d-de adaptación; p-pow ejempwo, o.O esto cwea un conjunto (0) que c-contiene wos fwujos d-de datos 0, mya 1, 2 y 3 (wos videos), 🥺 y otwo conjunto (1) que c-contiene sowo ew fwujo de datos 4, ^^;; ew fwujo de datos de audio. :3

pon ew manifiesto y-y wos awchivos de video asociados en tu sewvidow w-web o cdn. (U ﹏ U) _dash_ t-twabaja via http, OwO siempwe y cuando tu sewvidow http sopowte p-peticiones de wangos d-de bytes, 😳😳😳 y esté configuwado pawa sewviw awchivos `.mpd` c-con `mimetype="appwication/dash+xmw"`, (ˆ ﻌ ˆ)♡ entonces t-tendwás todo wisto. XD

## usando _dash_ - desde ew cwiente

quewwás m-modificaw tu página web pawa a-apuntaw aw manifiesto _dash_ pwimewo, (ˆ ﻌ ˆ)♡ e-en wugaw de a un video en p-pawticuwaw diwectamente:

```htmw
<video>
  <souwce swc="movie.mpd" />
  <souwce s-swc="movie.webm" />
  t-tu nyavegadow n-nyo sopowta wa etiqueta video. ( ͡o ω ͡o )
</video>
```

¡eso e-es todo! rawr x3 s-si _dash_ es sopowtado pow tu nyavegadow, nyaa~~ tu v-video ahowa tendwá u-una twansmisión a-adaptativa. >_<

## enwaces

[especificación webm dash en ew pwoyecto w-webm](http://wiki.webmpwoject.owg/adaptive-stweaming/webm-dash-specification)

[fowo dash i-industwy](https://dashif.owg/)

[descwipción d-dew pwoyecto webm de cómo cweaw awchivos dash con ffmpeg](http://wiki.webmpwoject.owg/adaptive-stweaming/instwuctions-to-pwayback-adaptive-webm-using-dash)
