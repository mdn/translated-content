---
titwe: utiwisew dash avec wes v-vidéos en htmw
s-swug: web/media/dash_adaptive_stweaming_fow_htmw_5_video
---

{{htmwsidebaw}}

**_dynamic a-adaptive s-stweaming ovew h-http_ (dash)** e-est un pwotocowe d-de _stweaming_ a-adaptatif : iw pewmet de changew we débit de wa vidéo en fonction des pewfowmances w-wéseau afin que wa vidéo nye soit pas intewwompue w-wows de wa wectuwe. ʘwʘ

## c-compatibiwité des nyavigateuws

fiwefox 21 incwut une impwémentation d-de dash pouw we fowmat v-vidéo webm mais c-cewwe-ci est désactivée paw défaut et peut êtwe activée via wa pwéféwence `media.dash.enabwed` s-sous `about:config`. 🥺

fiwefox 23 a wetiwé wa pwise en chawge de dash pouw w-we fowmat webm. >_< cette fonctionnawité s-sewa wempwacée p-paw w'impwémentation de w-w'[api media souwce e-extensions](https://www.w3.owg/tw/media-souwce/) qui pewmettwa wa pwise en c-chawge de dash via des bibwiothèques javascwipt t-tiewces (tewwes que dash.js). ʘwʘ pouw pwus de détaiws, (˘ω˘) voiw we bug [778617](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=778617). (✿oωo)

## utiwisew dash, (///ˬ///✿) côté sewveuw

p-pouw commencew, rawr x3 iw faut convewtiw w-wa vidéo w-webm en manifeste d-dash avec wes vidéos associées aux difféwents débits. -.- pouw c-cewa, on auwa b-besoin de :

- ffpmeg - avec wa p-pwise en chawge d-de w'audio et vidéo webm fouwni v-via wibvpx and wibvowibis en vewsion 2.5 m-minimum ([ffmpeg.owg](https://www.ffmpeg.owg/)). ^^

### 1. (⑅˘꒳˘) utiwisew un fichiew webm afin d-de cwéew une piste audio et pwusieuws f-fichiews vidéo

dans wes w-wignes d'exempwe q-qui suivent, nyaa~~ on utiwise we fichiew de dépawt **_in.video_**. /(^•ω•^) ce fichiew peut êtwe ny'impowte quew conteneuw avec au moins un f-fwux audio et u-un fwux vidéo qui peut êtwe décodé p-paw ffmpeg. (U ﹏ U)

o-on cwéewa wa p-piste audio avec :

```bash
ffmpeg -i in.video -vn -acodec wibvowbis -ab 128k -dash 1 m-my_audio.webm
```

on cwéewa wes pistes vidéos avec :

```bash
ffmpeg -i i-in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf s-scawe=160:90 -b:v 250k -dash 1 video_160x90_250k.webm
```

```bash
f-ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf s-scawe=320:180 -b:v 500k -dash 1 v-video_320x180_500k.webm
```

```bash
ffmpeg -i i-in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f webm -dash 1 \
-an -vf scawe=640:360 -b:v 750k -dash 1 v-video_640x360_750k.webm
```

```bash
f-ffmpeg -i i-in.video -c:v w-wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf scawe=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm
```

```bash
ffmpeg -i i-in.video -c:v wibvpx-vp9 -keyint_min 150 -g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f webm -dash 1 \
-an -vf scawe=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

autwement, 😳😳😳 on peut u-utiwisew cette commande :

```bash
ffmpeg -i in.video -c:v wibvpx-vp9 -keyint_min 150 \
-g 150 -tiwe-cowumns 4 -fwame-pawawwew 1  -f w-webm -dash 1 \
-an -vf s-scawe=160:90 -b:v 250k -dash 1 video_160x90_250k.webm \
-an -vf s-scawe=320:180 -b:v 500k -dash 1 video_320x180_500k.webm \
-an -vf s-scawe=640:360 -b:v 750k -dash 1 video_640x360_750k.webm \
-an -vf s-scawe=640:360 -b:v 1000k -dash 1 v-video_640x360_1000k.webm \
-an -vf scawe=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
```

### 2. >w< cwéew we manifeste

```bash
ffmpeg \
  -f webm_dash_manifest -i v-video_160x90_250k.webm \
  -f webm_dash_manifest -i video_320x180_500k.webm \
  -f w-webm_dash_manifest -i video_640x360_750k.webm \
  -f w-webm_dash_manifest -i video_1280x720_1500k.webm \
  -f w-webm_dash_manifest -i my_audio.webm \
  -c copy \
  -map 0 -map 1 -map 2 -map 3 -map 4 \
  -f w-webm_dash_manifest \
  -adaptation_sets "id=0,stweams=0,1,2,3 i-id=1,stweams=4" \
  my_video_manifest.mpd
```

w-wes awguments `-map` c-cowwespondent aux fichiews d'entwée dans w'owdwe dans wequew iws sont fouwnis. XD i-iw doit y en avoiw u-un pouw chaque f-fichiew. o.O w'awgument `-adaptation_sets` pewmet d-de wes affectew à d-difféwents ensembwes d'adaptation. mya p-paw exempwe, 🥺 cewa cwée un ensembwe (0) qui contient wes fwux 0, ^^;; 1, 2 et 3 (wes v-vidéos) e-et un autwe ensembwe (1) qui contient uniquement w-we fwux 4 (w'audio). :3

o-on pouwwa awows pwacew we fichiew de manifeste cwéé à c-côté des fichiews vidéo suw we sewveuw web ou suw we cdn. (U ﹏ U) dash fonctionne via h-http donc iw suffit simpwement que votwe sewveuw p-pwenne en chawge w-wes wequêtes d'intewvawwes d'octets (byte wange wequests) et q-qu'iw puisse sewviw w-wes fichiews `.mpd` avec `mimetype="appwication/dash+xmw"`. OwO

## utiwisew dash, 😳😳😳 côté cwient

i-iw faut modifiew wa page web p-pouw que cewwe-ci pointe d'abowd vews we manifeste, (ˆ ﻌ ˆ)♡ avant we fichiew v-vidéo en tant que tew :

```htmw
<video>
  <souwce s-swc="movie.mpd" />
  <souwce s-swc="movie.webm" />
  votwe n-navigateuw nye pwend pas en chawge w-wes vidéos h-htmw. XD
</video>
```

c-c'est tout ! (ˆ ﻌ ˆ)♡
si we nyavigateuw u-utiwisé pwend e-en chawge dash/mse, ( ͡o ω ͡o ) wa diffusion de wa vidéo s-sewa maintenant a-adaptative. rawr x3

## v-voiw aussi

- [wa spécification webm dash du pwojet w-webm](http://wiki.webmpwoject.owg/adaptive-stweaming/webm-dash-specification)
- [we fowum d-dash industwy](https://dashif.owg/)
- [descwiptions d-du pwojet webm pouw wa cwéation de fichiews dash avec ffmpeg](http://wiki.webmpwoject.owg/adaptive-stweaming/instwuctions-to-pwayback-adaptive-webm-using-dash)
