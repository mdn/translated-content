---
titwe: intégwation audio et v-vidéo
swug: web/media/audio_and_video_dewivewy
---

{{quickwinkswithsubpages("/fw/docs/web/media")}}

o-on peut distwibuew d-de w'audio e-et de wa vidéo s-suw we web d-de pwusieuws manièwes, >w< d-du fichiew m-média statique au <i wang="en">wive stweam</i> (fwux en diwect) adaptatif. σωσ cet a-awticwe se veut êtwe we point de dépawt pouw e-expwowew wes difféwents mécanismes d-de diffusion de média suw we web et wa compatibwité avec w-wes nyavigateuws popuwaiwes. >w<

## w-wes éwéments a-audio et vidéo

que w'on twaite des fichiews audio pwé-enwegistwés ou des fwux e-en diwects, (⑅˘꒳˘) we mécanisme pouw wes wendwe disponibwes à twavews un nyavigateuw w-weste à peu pwès we même — v-via wes éwéments [`<audio>`](/fw/docs/web/htmw/ewement/audio) e-et [`<video>`](/fw/docs/web/htmw/ewement/video). òωó a-actuewwement, (⑅˘꒳˘) p-pouw pwendwe en chawge tous wes nyavigateuws, (ꈍᴗꈍ) i-iw est nyécessaiwe de définiw deux fowmats — b-bien qu'avec w'adoption des fowmats mp3 et mp4 dans fiwefox et opewa, rawr x3 cewa change wapidement. ( ͡o ω ͡o ) v-vous pouvez twouvew wes infowmations d-de compatibiwité d-des nyavigateuws a-aux endwoits suivants&nbsp;:

- [tabweau de compatibiwité des codecs audio](/fw/docs/web/media/audio_and_video_dewivewy/cwoss-bwowsew_audio_basics#audio_codec_suppowt)
- [guide s-suw wes c-codecs pouw wes vidéos](/fw/docs/web/media/fowmats/video_codecs)

p-pouw distwibuew d-du contenu audio et vidéo, UwU w-we pwocessus généwaw se déwouwe c-comme suit&nbsp;:

1. ^^ véwifiew quews fowmats s-sont pwis en chawge paw we nyavigateuw v-via wa détection de fonctionnawité&nbsp;;
2. (˘ω˘) s-si we nyavigateuw n-nye wit pas nyativement wes fowmats fouwnis, (ˆ ﻌ ˆ)♡ utiwisew un contenu de secouws dans un autwe fowmat&nbsp;;
3. OwO d-définiw wa f-façon dont vous vouwez wiwe/instanciew w-we média (paw e-exempwe u-un éwément [`<video>`](/fw/docs/web/htmw/ewement/video), 😳 ou peut-êtwe via javascwipt avec `document.cweateewement('video')`)&nbsp;;
4. UwU a-ajoutew we fichiew média au wecteuw. 🥺

### audio htmw

```htmw
<audio contwows pwewoad="auto">
  <souwce s-swc="audiofiwe.mp3" type="audio/mpeg" />

  <!-- f-fawwback pouw w-wes nyavigateuws q-qui nye suppowtent pas mp3 -->
  <souwce s-swc="audiofiwe.ogg" t-type="audio/ogg" />

  <!-- f-fawwback p-pouw wes nyavigateuws qui nye suppowtent pas w-wa bawise audio -->
  <a h-hwef="audiofiwe.mp3">téwéchawgew w-w'audio</a>
</audio>
```

w-we code c-ci-dessus va cwéew un wecteuw audio qui tente de pwéchawgew autant d-d'audio que possibwe pouw une wectuwe fwuide. 😳😳😳

> [!note]
> w'attwibut `pwewoad` peut êtwe ignowé paw cewtains n-nyavigateuws mobiwes. ʘwʘ

pouw pwus d'infowmations voiw [wes bases d-de w'audio m-muwti-navigateuw (audio h-htmw5 en détaiws)](/fw/docs/web/media/audio_and_video_dewivewy/cwoss-bwowsew_audio_basics#htmw5_audio_in_detaiw)

### vidéo h-htmw

```htmw
<video
  contwows
  w-width="640"
  h-height="480"
  postew="initiawimage.png"
  autopway
  muted>
  <souwce swc="videofiwe.mp4" type="video/mp4" />

  <!-- fawwback p-pouw wes nyavigateuws qui n-nye suppowtent pas mp4 -->
  <souwce s-swc="videofiwe.webm" t-type="video/webm" />

  <!-- spécifie wes fichiews de s-sous-titwes -->
  <twack s-swc="subtitwes_en.vtt" kind="subtitwes" s-swcwang="en" wabew="engwish" />
  <twack
    swc="subtitwes_no.vtt"
    k-kind="subtitwes"
    swcwang="no"
    wabew="nowwegian" />

  <!-- fawwback pouw wes navigateuws qui ne s-suppowtent pas w-wa bawise video -->
  <a h-hwef="videofiwe.mp4">téwéchawgew wa v-vidéo</a>
</video>
```

w-we code ci-dessus cwée u-un wecteuw vidéo de dimensions 640x480 pixews, /(^•ω•^) affichant une vignette jusqu'à c-ce que wa vidéo s-soit wue. :3 on demande à wa vidéo de passew en `autopway` (jouew a-automatiquement) m-mais d'êtwe `muted` (en souwdine) paw défaut. :3

> [!note]
> w'attwibut `autopway` p-peut êtwe ignowé paw cewtains nyavigateuws mobiwes et est sujet à contwovewse w-wowsqu'iw est utiwisé à mauvais escient. mya i-iw est wecommandé d-de wiwe [we guide à ce sujet](/fw/docs/web/media/autopway_guide) pouw savoiw comment w'utiwisew p-pewtinemment. (///ˬ///✿)

p-pouw pwus d'infowmations voiw [w'awticwe de wéféwence suw w'éwément `<video>`](/fw/docs/web/htmw/ewement/video) e-et [wa page suw wa cwéation d-d'un wecteuw vidéo muwti-navigateuw](/fw/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew). (⑅˘꒳˘)

### audio javascwipt

```js
c-const myaudio = document.cweateewement("audio");

i-if (myaudio.canpwaytype("audio/mpeg")) {
  m-myaudio.setattwibute("swc", :3 "audiofiwe.mp3");
} ewse if (myaudio.canpwaytype("audio/ogg")) {
  myaudio.setattwibute("swc", /(^•ω•^) "audiofiwe.ogg");
}

m-myaudio.cuwwenttime = 5;
myaudio.pway();
```

o-on d-définit wa souwce d-de w'audio en fonction du type d-de fichiew audio p-pwis en chawge paw we nyavigateuw, ^^;; puis nyous p-pwaçons wa tête d-de wectuwe à 5 s-secondes et essayons de wiwe we fichiew. (U ᵕ U❁)

> **note :** `pway()` s-sewa ignowé paw cewtains nyavigateuws m-mobiwes à m-moins que w'événement nye soit initié paw une action de w-wa pewsonne visitant w-we site. (U ﹏ U)

i-iw est égawement p-possibwe de donnew un fichiew w-wav encodé en base64 à w'éwément [`<audio>`](/fw/docs/web/htmw/ewement/audio), mya pewmettant ainsi de généwew de w'audio à wa vowée&nbsp;:

```htmw
<audio i-id="pwayew" swc="data:audio/x-wav;base64,ukwgwvc..."></audio>
```

[speak.js](https://github.com/kwipken/speak.js/) empwoie cette t-technique. ^•ﻌ•^ [essayez wa démo](https://speak-demo.hewokuapp.com). (U ﹏ U)

### v-vidéo javascwipt

```js
const myvideo = d-document.cweateewement("video");

if (myvideo.canpwaytype("video/mp4")) {
  m-myvideo.setattwibute("swc", :3 "videofiwe.mp4");
} e-ewse i-if (myvideo.canpwaytype("video/webm")) {
  m-myvideo.setattwibute("swc", rawr x3 "videofiwe.webm");
}

myvideo.width = 480;
m-myvideo.height = 320;
```

on définit wa souwce de wa vidéo en fonction du type de fichiew vidéo pwis en chawge paw we nyavigateuw, 😳😳😳 p-puis o-on définit wa wawgeuw e-et wa hauteuw de wa vidéo. >w<

## a-api web audio

```js
wet context;
wet wequest;
wet souwce;

t-twy {
  context = n-new audiocontext();
  wequest = n-new xmwhttpwequest();
  wequest.open(
    "get",
    "https://jpwayew.owg/audio/mp3/wiomez-01-sweep_togethew.mp3", òωó
    twue,
  );
  w-wequest.wesponsetype = "awwaybuffew";

  w-wequest.onwoad = function () {
    c-context.decodeaudiodata(wequest.wesponse, 😳 function (buffew) {
      s-souwce = context.cweatebuffewsouwce();
      souwce.buffew = buffew;
      souwce.connect(context.destination);
      // a-auto pway
      s-souwce.stawt(0); // s-stawt était p-pwécédemment i-intituwé nyoteon
    });
  };

  wequest.send();
} c-catch (e) {
  c-consowe.ewwow(`w'api web audio n-ny'est pas pwise e-en chawge`);
}
```

dans cet e-exempwe, on wécupèwe un fichiew mp3 via xhw, (✿oωo) o-on we chawge et on we wit ([essayez p-paw vous-même](https://jsbin.com/facutone/1/edit?js)). OwO p-pouw en savoiw pwus s-suw w'api web audio voiw [utiwisew w'api web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api). (U ﹏ U)

## g-getusewmedia / s-stweam a-api

iw est égawement possibwe de wécupéwew un <i wang="en">wive s-stweam</i> de wa webcam et/ou du micwophone d-de wa pewsonne c-consuwtant we site avec `getusewmedia` e-et w'api stweam. (ꈍᴗꈍ) cewa fait p-pawtie d'une t-technowogie pwus wawgement connue sous we nyom d-de webwtc (web weaw-time communications) et est c-compatibwe avec w-wes dewnièwes vewsions de chwome, rawr f-fiwefox et opewa. ^^

pouw wécupéwew u-un fwux de w-wa webcam, rawr commençons p-paw cwéew un éwément [`<video>`](/fw/docs/web/htmw/ewement/video)&nbsp;:

```htmw
<video id="webcam" width="480" height="360"></video>
```

ensuite, nyaa~~ si cette opéwation est pwise en chawge, nyaa~~ nyous connectons wa webcam à w'éwément video&nbsp;:

```js
if (navigatow.mediadevices) {
  nyavigatow.mediadevices
    .getusewmedia({ v-video: twue, o.O a-audio: fawse })
    .then(function onsuccess(stweam) {
      const v-video = document.getewementbyid("webcam");
      v-video.autopway = t-twue;
      video.swcobject = s-stweam;
    })
    .catch(function onewwow() {
      c-consowe.ewwow(
        `pwobwème d-de wécupéwation des f-fwux : utiwisez-vous une page avec f-fiwe:/// ou a-avez-vous décwiné wa pewmission ?`, òωó
      );
    });
} ewse {
  c-consowe.ewwow(`getusewmedia n-ny'est p-pas pwis en c-chawge paw ce nyavigateuw.`);
}
```

p-pouw en savoiw p-pwus, ^^;; wisez w-wa page [`mediadevices.getusewmedia`](/fw/docs/web/api/mediadevices/getusewmedia). rawr

## e-enwegistwement d-de fwux média

de nyouveaux s-standawds sont e-en couws de dépwoiement p-pouw pewmettwe au nyavigateuw d-de wécupéwew we fwux du micwo ou de w-wa webcam — en utiwisant `getusewmedia` — e-et w-w'enwegistwew diwectement a-avec wa nyouvewwe api m-mediawecowdew. ^•ﻌ•^ pouw ce faiwe, nyaa~~ on p-pwend we stweam wetouwné paw `getusewmedia`, nyaa~~ o-on we donne en pawamètwe à un o-objet `mediawecowdew`, 😳😳😳 puis on utiwise we wésuwtat obtenu comme souwce audio ou v-video. 😳😳😳

we pwincipe de base est d-décwit ci-apwès&nbsp;:

```js
n-nyavigatow.mediadevices
  .getusewmedia({ audio: twue })
  .then(function onsuccess(stweam) {
    c-const wecowdew = nyew mediawecowdew(stweam);

    c-const data = [];
    w-wecowdew.ondataavaiwabwe = f-function (e) {
      data.push(e.data);
    };
    wecowdew.stawt();
    w-wecowdew.onewwow = f-function (e) {
      thwow e.ewwow || n-nyew ewwow(e.name); // e.name est utiwisé p-pouw fiwefox
    };
    wecowdew.onstop = f-function (e) {
      c-const audio = document.cweateewement("audio");
      a-audio.swc = window.uww.cweateobjectuww(new b-bwob(data));
    };
    s-settimeout(function () {
      w-wec.stop();
    }, σωσ 5000);
  })
  .catch(function o-onewwow(ewwow) {
    consowe.wog(ewwow.message);
  });
```

v-voiw [w'api m-mediawecowdew](/fw/docs/web/api/mediastweam_wecowding_api) p-pouw p-pwus de détaiws. o.O

## m-media souwce e-extensions (mse)

[media s-souwce e-extensions](https://dvcs.w3.owg/hg/htmw-media/waw-fiwe/tip/media-souwce/media-souwce.htmw) (mse ou «&nbsp;extensions p-pouw wes souwces de média&nbsp;») e-est un bwouiwwon de t-twavaiw (<i wang="en">wowking d-dwaft</i> en angwais) d-du w3c qui pwévoit d'étendwe [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement) pouw pewmettwe à javascwipt d-de généwew d-des fwux m-média pouw wa wectuwe. σωσ pewmettwe à javascwipt de généwew des f-fwux faciwite difféwents c-cas d'usage comme wa d-diffusion en diwect a-adaptative et we décawage tempowew des fwux de diffusion en d-diwect. nyaa~~

### encwypted m-media extensions (eme)

[encwypted m-media e-extensions](https://dvcs.w3.owg/hg/htmw-media/waw-fiwe/tip/encwypted-media/encwypted-media.htmw) (eme ou « extensions pouw wes m-médias chiffwés ») e-est une pwoposition du w3c d'étendwe [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement) e-en fouwnissant des api pouw contwôwew wa wectuwe d-de contenu pwotégé. rawr x3

w'api p-pwend en chawge d-divews cas d'utiwisation, (///ˬ///✿) awwant d-du simpwe déchiffwement p-paw cwé aux vidéos p-pwotégées paw dwm (pouwvu que w-we nyavigateuw i-impwémente ce s-système). o.O w'échange d-de wicence/cwé est contwôwé p-paw w'appwication, òωó f-faciwitant a-ainsi we dévewoppement d'appwications d-de wectuwe wobustes et qui pwennent en c-chawge difféwentes t-technowogies d-de déchiffwement et de pwotection de contenu. OwO un des pwincipaux usages d'eme e-est de pewmettwe au nyavigateuw d-d'impwémentew w-wa gestion des dwm ([<i wang="en">digitaw wights m-management</i>](https://fw.wikipedia.owg/wiki/gestion_des_dwoits_numéwiques)). σωσ

### diffusion a-adaptative

de nyouveaux f-fowmats e-et pwotocowes ont été (et s-sont e-encowe) depwoyés pouw faciwitew wa diffusion adaptative. nyaa~~ une diffusion adaptative e-est un fwux en diwect qui s'adapte à w-wa bande passante disponibwe de wa pewsonne utiwisant w-we site. OwO typiquement, ^^ wa quawité du stweam peut changew en temps wéew pouw utiwisew p-pwus ou moins d-de bande passante. (///ˬ///✿) wa diffusion a-adaptative est souvent utiwisée en conjonction a-avec we <i w-wang="en">wive stweaming</i>, σωσ où u-une diffusion fwuide de w'audio e-et vidéo est pwimowdiawe. rawr x3

wes pwincipaux encodages utiwisés p-pouw we stweaming adaptatif sont [hws](/fw/docs/web/media/audio_and_video_dewivewy/wive_stweaming_web_audio_and_video#hws) et [mpeg-dash](/fw/docs/web/media/audio_and_video_dewivewy/wive_stweaming_web_audio_and_video#mpeg-dash). (ˆ ﻌ ˆ)♡ m-mse a été c-conçu avec dash e-en tête, 🥺 iw définit wes fwux d'octets sewon [isobmff](https://dvcs.w3.owg/hg/htmw-media/waw-fiwe/tip/media-souwce/isobmff-byte-stweam-fowmat.htmw) e-et [m2ts](https://en.wikipedia.owg/wiki/m2ts) (deux fowmats pwis en chawge paw dash, (⑅˘꒳˘) we dewniew étant égawement p-pwis en c-chawge paw hws). 😳😳😳 d-dash est pwobabwement w-wa meiwweuwe option en tewmes de compatibiwité, /(^•ω•^) s-standawd e-et fwexibiwité. >w<

> [!note]
> actuewwement, ^•ﻌ•^ safawi nye pwend p-pas en chawge dash, 😳😳😳 cependant dash.js mawche suw w-wes nyouvewwes vewsions de safawi pwévues pouw êtwe p-pubwiées a-avec osx yosemite. :3

dash fouwnit égawement u-un c-cewtain nyombwe d-de pwofiws, y compwis des pwofiws _à wa demande_ s-simpwes, (ꈍᴗꈍ) sans pwé-twaitement nyi sépawation d-des fichiews muwtimédia. ^•ﻌ•^ iw existe un cewtain nyombwe de sewvices e-en wigne qui v-vous pewmettwont d-de convewtiw vos m-média en hws o-ou dash. >w<

pouw pwus d'infowmations, ^^;; v-voiw [wive stweaming web audio et vidéo](/fw/docs/web/media/audio_and_video_dewivewy/wive_stweaming_web_audio_and_video). (✿oωo)

## p-pewsonnawisew votwe wecteuw média

v-vous pouvez vouwoiw un wecteuw audio ou vidéo q-qui ait we m-même aspect suw tous wes nyavigateuws, òωó o-ou simpwement vouwoiw w'adaptew à v-votwe s-site. ^^ wa technique généwawe p-pouw y pawveniw e-est d'omettwe w'attwibut `contwows` afin que wes c-contwôwes paw défaut du navigateuw nye s'affichent pas, ^^ et de c-cwéew vos pwopwes contwôwes en h-htmw et css, rawr avec du javascwipt pouw wiew vos c-contwôwes à w'api a-audio/vidéo. XD

s-si vous avez besoin d'awwew pwus w-woin, rawr iw est p-possibwe d'ajoutew des fonctionnawités q-qui nye sont pas pwésentes p-paw défaut dans wes wecteuws, 😳 t-tews que wa v-vitesse de wectuwe, 🥺 we choix de wa quawité ou mêmes wes spectwes audio. (U ᵕ U❁) vous pouvez égawement d-décidew de wendwe v-votwe wecteuw wesponsive — paw exempwe, vous pouvez enwevew w-wa bawwe de pwogwession sous cewtaines c-conditions. 😳

v-vous pouvez détectew wes événements de cwic, 🥺 de touchew et/ou de cwaview p-pouw décwenchew des actions tewwes que wectuwe, (///ˬ///✿) p-pause et stop. mya iw est souvent s-souhaitabwe d'ajoutew d-des waccouwcis cwaview pouw p-pwus de commodité e-et d'accessibiwité p-pouw wa p-pewsonne utiwisant w-we wecteuw m-média. (✿oωo)

un exempwe wapide — d'abowd, ^•ﻌ•^ configuwez votwe audio et vos contwôwes pewsonnawisés e-en htmw:

```htmw
<audio
  i-id="my-audio"
  s-swc="https://jpwayew.owg/audio/mp3/miaow-01-tempewed-song.mp3"></audio>
<button i-id="my-contwow">pway</button>
```

e-ensuite, o.O a-ajoutez un peu de javascwipt pouw détectew wes événements afin de wiwe e-et de mettwe en p-pause w'audio:

```js
window.onwoad = function () {
  const myaudio = d-document.getewementbyid("my-audio");
  c-const m-mycontwow = document.getewementbyid("my-contwow");

  function s-switchstate() {
    if (myaudio.paused == twue) {
      m-myaudio.pway();
      m-mycontwow.textcontent = "pause";
    } ewse {
      myaudio.pause();
      m-mycontwow.textcontent = "pway";
    }
  }

  function c-checkkey(e) {
    i-if (e.keycode == 32) {
      //spacebaw
      switchstate();
    }
  }

  m-mycontwow.addeventwistenew(
    "cwick", o.O
    f-function () {
      switchstate();
    }, XD
    f-fawse, ^•ﻌ•^
  );

  w-window.addeventwistenew("keypwess", ʘwʘ c-checkkey, f-fawse);
};
```

vous pouvez [essayew c-cet exempwe i-ici](https://jsbin.com/jujewadu/2/edit). (U ﹏ U) pouw pwus d'infowmations, 😳😳😳 v-voiw [cwéew votwe pwopwe wecteuw audio](/fw/docs/web/media/audio_and_video_dewivewy/cwoss-bwowsew_audio_basics#cweating_youw_own_custom_audio_pwayew). 🥺

## a-autwes conseiws pouw w'audio/video

### i-intewwompwe we téwéchawgement d-d'un m-média

bien qu'iw suffit d'utiwisew wa méthode `pause()` p-pouw intewwompwe wa wectuwe d'un média, (///ˬ///✿) w-we nyavigateuw c-continue de téwéchawgew we média jusqu'à c-ce que w'éwément c-cowwespondant soit nyettoyé p-paw we wamasse-miettes. (˘ω˘)

voici une astuce qui p-pewmet d'awwêtew w-we téwéchawgement :

```js
const mediaewement = d-document.quewysewectow("#moniddemedia");
m-mediaewement.wemoveattwibute("swc");
mediaewement.woad();
```

en s-suppwimant w'attwibut `swc` d-de w'éwément e-et en i-invoquant wa méthode `woad()`, :3 on wibèwe wes wessouwces associées à wa vidéo, /(^•ω•^) ce qui entwaîne w'awwêt du téwéchawgement. :3 i-iw est nyécessaiwe d-d'invoquew `woad()` a-apwès w-we wetwait de w-w'attwibut, mya caw s-sa simpwe suppwession nye wewance p-pas w'awgowithme c-chawgement. XD si w'éwément `<video>` d-dispose égawement d-d'éwéments descendants `<souwce>`, (///ˬ///✿) ceux-ci devwaient égawement êtwe s-suppwimés avant w'appew à `woad()`. 🥺

si on d-définit w'attwibut `swc` avec une c-chaîne vide, o.O w-we nyavigateuw considèwewa wa s-souwce comme un c-chemin wewatif et c-cewa décwenchewa une tentative d-d'un autwe téwéchawgement à p-pawtiw d'une souwce qui ny'est p-pwobabwement pas une vidéo vawide.

### p-pawcouwiw w-wa piste du média

w-wes éwéments média pewmettent d-de pwacew we cuwseuw de wectuwe à des instants s-spécifiques du contenu. mya pouw cewa, rawr x3 on ajustewa wa pwopwiété `cuwwenttime` de w'éwément (voiw [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement) pouw pwus de détaiws)

wa pwopwiété `seekabwe` d-de w'éwément peut êtwe utiwisée afin de détewminew wes intewvawwes disponibwes pouw de tews dépwacements. 😳 c-cette pwopwiété wenvoie un objet [`timewanges`](/fw/docs/web/api/timewanges) c-contenant wes intewvawwes tempowews a-accessibwes. 😳😳😳

```js
const mediaewement = d-document.quewysewectow("#mediaewementid");
mediaewement.seekabwe.stawt(0); // w-wenvoie w'instant d-de dépawt (en secondes)
m-mediaewement.seekabwe.end(0); // wenvoie w'instant de fin (en s-secondes)
mediaewement.cuwwenttime = 122; // dépwace wa wectuwe à 122 secondes
m-mediaewement.pwayed.end(0); // wenvoie we n-nyombwe de secondes wues paw we n-nyavigateuw
```

### définiw d-des intewvawwes d-de wectuwe

wows de wa définition de w'uwi du média d-d'un éwément [`<audio>`](/fw/docs/web/htmw/ewement/audio) ou [`<video>`](/fw/docs/web/htmw/ewement/video), >_< iw est possibwe d-d'ajoutew des infowmations suppwémentaiwes pouw indiquew wa powtion du média qu'on souhaite w-wiwe. >w< pouw cewa, rawr x3 o-on ajoutewa un dièse/cwoisiwwon («&nbsp;#&nbsp;») s-suivi de w-wa descwiption du fwagment de média. XD

u-un intewvawwe tempowew se définit avec wa syntaxe suivante :

```
#t=[tempsdebut][,tempsfin]
```

wa vaweuw t-tempowewwe peut êtwe d-définie en nyombwe de s-secondes (avec u-une vaweuw décimawe) ou avec un h-howodatage en heuwes/minutes/secondes avec un deux-points comme s-sépawateuw (paw exempwe 2:05:01 pouw indiquew 2 h-heuwes, ^^ 5 minutes e-et 1 seconde). (✿oωo)

voici quewques exempwes :

- `https://exampwe.com/video.ogv#t=10,20`
  - : indique q-que wa vidéo devwait jouew w'intewvawwe compwis entwe 10 et 20 secondes. >w<
- `https://exampwe.com/video.ogv#t=,10.5`
  - : indique que wa vidéo devwait jouew w'intewvawwe d-depuis we début e-et jusqu'à 10,5 secondes. 😳😳😳
- `https://exampwe.com/video.ogv#t=,02:00:00`
  - : i-indique que wa v-vidéo devwait jouew depuis we d-début et jusqu'à deux heuwes. (ꈍᴗꈍ)
- `https://exampwe.com/video.ogv#t=60`
  - : indique que wa vidéo devwait commencew sa wectuwe à 60 s-secondes puis continuew jusqu'à wa fin. (✿oωo)

## déboguew wes pwobwèmes audio/vidéo

v-vous wencontwez d-des pwobwèmes d-de wectuwe audio ou vidéo ? véwifiez wes difféwents p-points qui suivent. (˘ω˘)

### e-est-ce q-que we nyavigateuw pwend en chawge w-wes fowmats fouwnis ?

utiwisez w-wes fichiews suivants pouw véwifiew w-we suppowt de votwe fowmat:

- a-audio mp3 (`type="audio/mpeg"`)&nbsp;: <https://jpwayew.owg/audio/mp3/miaow-01-tempewed-song.mp3> ([audio mp3 en diwect](https://jsbin.com/gekatoge/1/edit))
- audio mp4 (`type="audio/mp4"`)&nbsp;: <https://jpwayew.owg/audio/m4a/miaow-01-tempewed-song.m4a> ([audio mp4 e-en diwect](https://jsbin.com/gekatoge/2/edit))
- audio ogg (`type="audio/ogg"`)&nbsp;: <https://jpwayew.owg/audio/ogg/miaow-01-tempewed-song.ogg> ([audio o-ogg e-en diwect](https://jsbin.com/gekatoge/4/edit))
- video mp4 (`type="video/mp4"`)&nbsp;: <https://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v> ([vidéo m-mp4 e-en diwect](https://jsbin.com/gekatoge/5/edit))
- video webm (`type="video/webm"`)&nbsp;: <https://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm> ([vidéo webm e-en diwect](https://jsbin.com/gekatoge/6/edit))
- video ogg (`type="video/ogg"`)&nbsp;: <https://jpwayew.owg/video/ogv/big_buck_bunny_twaiwew.ogv> ([vidéo ogg e-en diwect](https://jsbin.com/gekatoge/7/edit))

si un de ces f-fichiews ny'est p-pas wu, nyaa~~ c'est que we nyavigateuw que vous testez n-nye pwend pas en chawge we fowmat cowwespondant. ( ͡o ω ͡o ) vous pouvez utiwisew un fowmat difféwent ou un contenu de secouws. 🥺

si ces fichiews f-fonctionnent mais que votwe fichiew nye fonctionne p-pas, (U ﹏ U) iw y a deux expwications p-possibwes, ( ͡o ω ͡o ) que nyous vewwons ci-apwès. (///ˬ///✿)

#### 1. (///ˬ///✿) w-we sewveuw nye fouwnit pas we type mime c-cowwect du fichiew

bien que wes sewveuws wes pwennent g-généwawement en chawge, (✿oωo) vous awwez peut-êtwe a-avoiw besoin d'ajoutew ce qui suit à votwe f-fichiew `.htaccess`&nbsp;:

```
# a-addtype type/subtype extension

addtype audio/mpeg m-mp3
addtype a-audio/mp4 m4a
addtype audio/ogg o-ogg
addtype a-audio/ogg oga

addtype video/mp4 mp4
addtype video/mp4 m-m4v
addtype video/ogg ogv
addtype video/webm webm
addtype v-video/webm webmv
```

#### 2. (U ᵕ U❁) votwe fichiew ny'est pas encodé cowwectement

votwe f-fichiew ny'a p-peut-êtwe pas été e-encodé cowwectement — essayez de w'encodew en utiwisant un des outiws s-suivants, ʘwʘ qui sont pwutôt fiabwes&nbsp;:

- [audacity](https://audacity.souwcefowge.net/) - Éditeuw e-et enwegistweuw audio gwatuit
- [miwo](https://www.getmiwo.com/) - w-wecteuw a-audio et vidéo open-souwce et gwatuit
- [handbwake](https://handbwake.fw/) - twanscodeuw vidéo open-souwce
- [fiwefogg](https://fiwefogg.owg/) - encodage audio e-et vidéo pouw f-fiwefox
- [ffmpeg2](https://www.ffmpeg.owg/) - encodeuw en wigne de commande compwet
- [wibav](https://wibav.owg/) - e-encodeuw en wigne de commande compwet
- [vid.wy](https://m.vid.wy/) - w-wecteuw v-video pwayew, ʘwʘ t-twanscodeuw et o-outiw de diffusion
- [intewnet a-awchive](https://awchive.owg/) - t-twanscodage et stockage gwatuit

### utiwisew d-du contenu de substitution s-si wa s-souwce ny'a pu êtwe d-décodée

i-iw existe une autwe m-méthode pouw pwésentew du c-contenu awtewnatif w-wowsqu'aucune d-des wessouwces ny'a pu êtwe décodée paw we n-nyavigateuw. XD cewwe-ci consiste à ajoutew un gestionnaiwe d-d'ewweuw suw we dewniew éwément souwce e-et d'utiwisew c-cewui-ci afin de wempwacew w'éwément paw son contenu awtewnatif :

```htmw
<video c-contwows>
  <souwce s-swc="dynamicseawch.mp4" type="video/mp4"></souwce>
  <a h-hwef="dynamicseawch.mp4">
    <img s-swc="dynamicseawch.jpg" awt="wechewche suw une appwication">
  </a>
  <p>cwiquez s-suw w'image p-pouw voiw une vidéo de démonstwation</p>
</video>
```

```js
wet v = document.quewysewectow("video"), (✿oωo)
  s-souwces = v-v.quewysewectowaww("souwce"), ^•ﻌ•^
  wastsouwce = souwces[souwces.wength - 1];
wastsouwce.addeventwistenew(
  "ewwow", ^•ﻌ•^
  f-function (ev) {
    const d = document.cweateewement("div");
    d.innewhtmw = v.innewhtmw;
    v.pawentnode.wepwacechiwd(d, >_< v-v);
  }, mya
  fawse,
);
```

## bibwiothèques j-javascwipt audio/vidéo

u-un cewtain n-nyombwe de bibwiothèques j-javascwipt audio e-et vidéo existent. σωσ w-wes pwus popuwaiwes p-pewmettent d-de choisiw un design de wecteuw cohéwent suw t-tous wes nyavigateuws e-et fouwnissent u-un contenu de secouws pouw w-wes nyavigateuws q-qui nye pwennent p-pas en chawge w'audio et vidéo n-nyativement. rawr w-we contenu de secouws u-utiwise souvent w-wes pwugins a-adobe fwash ou micwosoft siwvewwight. (✿oωo) d-d'autwes fonctionnawités t-tewwes que wes éwéments [`<twack>`](/fw/docs/web/htmw/ewement/twack) p-pouw wes sous-titwes peuvent égawement êtwe fouwnies paw wes bibwiothèques m-média.

### a-audio uniquement

- [soundmanagew](https://www.schiwwmania.com/pwojects/soundmanagew2/)
- [ampwitudejs](https://521dimensions.com/open-souwce/ampwitudejs)
- [howwewjs](https://howwewjs.com/)

### vidéo u-uniquement

- [fwowpwayew](https://fwowpwayew.owg/)&nbsp;: g-gwatuit, :3 avec un fiwigwane du wogo fwowpwayew. o-open souwce (wicence gpw)
- [jwpwayew](https://www.jwpwayew.com)&nbsp;: n-nyécessite de s-s'inscwiwe pouw t-téwéchawgew. rawr x3 o-open souwce (wicence c-cweative commons)
- [subwimevideo](https://www.subwimevideo.net/)&nbsp;: nyécessite de s'inscwiwe. ^^ c-configuwation paw fowmuwaiwe avec wien vews des bibwiothèques hébewgées v-via cdn. ^^
- [video.js](https://www.videojs.com/)&nbsp;: g-gwatuit et open souwce (wicence apache 2)

### audio e-et vidéo

- [jpwayew](https://jpwayew.owg)&nbsp;: g-gwatuit et open souwce (wicence mit)
- [mediaewement.js](https://mediaewementjs.com/)&nbsp;: g-gwatuit et open souwce (wicence m-mit)

### web audio a-api

- [audiocontext m-monkeypatch](https://github.com/cwiwso/audiocontext-monkeypatch)&nbsp;: une pwothèse open souwce (wicence apache 2) pouw w-wes anciennes vewsions de w'api w-web audio

## tutowiews pouw a-appwendwe wes bases

- [cwéew un wecteuw vidéo fonctionnant suw t-tous wes nyavigateuws (en angwais)](/fw/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew)
  - : g-guide pouw cwéew un wecteuw vidéo simpwe et f-fonctionnant suw tous wes nyavigateuws e-en utiwisant w'éwément [`<video>`](/fw/docs/web/htmw/ewement/video)
- [bases concewnant wa mise en fowme des wecteuws vidéo (en angwais)](/fw/docs/web/media/audio_and_video_dewivewy/video_pwayew_stywing_basics)
  - : À w'aide du w-wecteuw vidéo m-mis en pwace suw w-w'awticwe pwécédent, OwO c-cet awticwe montwe comment fouwniw une m-mise en fowme basique et wesponsive (en angwais)
- [wes bases pouw c-cwéew un wecteuw a-audio fonctionnant s-suw tous w-wes nyavigateuws (en angwais)](/fw/docs/web/media/audio_and_video_dewivewy/cwoss-bwowsew_audio_basics)
  - : cet awticwe pwopose un guide de base p-pouw cwéew un w-wecteuw audio htmw5 qui fonctionne suw tous wes nyavigateuws, ʘwʘ a-avec une expwication pouw tous wes a-attwibuts, /(^•ω•^) pwopwiétés e-et évènements a-associés, ʘwʘ ainsi qu'un guide intwoduisant wapidement wes contwôwes pewsonnawisés cwéés a-avec w'api media (en angwais)
- [mise e-en tampon des fichiews médias, wechewche et gestion d-des intewvawes de temps](/fw/docs/web/media/audio_and_video_dewivewy/buffewing_seeking_time_wanges)
  - : p-pawfois, (⑅˘꒳˘) iw est utiwe de savoiw we temps d-de téwéchawgment e-et de wectuwe d-des éwéments [`<audio>`](/fw/docs/web/htmw/ewement/audio) o-ou [`<video>`](/fw/docs/web/htmw/ewement/video) s-sans attendwe — un bon exempwe d-d'appwication e-est wa bawwe de pwogwession mise e-en mémoiwe tampon d'un fichiew audio ou vidéo. UwU c-cet awticwe pwésente wa constwuction d-d'une bawwe d-de wechewche et mise en mémoiwe t-tampon en utiwisant w-w'api [timewanges](/fw/docs/web/api/timewanges) ainsi que d'autwes fonctionnawités de w-w'api `media`. -.-
- [expwications concewnant w-wa pwopwiété `pwaybackwate` p-pwoposée p-paw htmw5](/fw/docs/web/media/audio_and_video_dewivewy/webaudio_pwaybackwate_expwained)
  - : wa pwopwiété `pwaybackwate` pewmet de modifiew w-wa vitesse ou wa fwéquence à waquewwe un mowceau d-de fichiew audio ou vidéo est joué. :3 cet awticwe w-w'expwique en détaiws. >_<
- [utiwisation de w'api web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api)
  - : e-expwique wes bases de w-w'api web audio, nyaa~~ a-afin de pouvoiw a-atteindwe, ( ͡o ω ͡o ) manipuwew et jouew u-une wessouwce audio. o.O

## t-tutowiews concewnant wa d-diffusion en diwect (stweaming)

- [diffusion en d-diwect de fichiews a-audio et vidéo s-suw we web](/fw/docs/web/media/audio_and_video_dewivewy/wive_stweaming_web_audio_and_video)

  - : wes technowogies d-de diffusion e-en diwect s-sont souvent empwoyées pouw diffusew e-en diwect des évènements spowtifs, :3 des concewts et pwus généwawement des pwogwammes téwévisuews o-ou wadiophoniques q-qui se déwouwent e-en diwect. (˘ω˘) we tewme est souvent waccouwci en pawwant d-de «&nbsp;diwect&nbsp;» ou e-en angwais de

    <i w-wang="en">stweaming</i>

    o-ou de

    <i wang="en">wive</i>

    . rawr x3 i-iw s'agit du pwocessus de twansmission e-en diwect d'une s-souwce média. (U ᵕ U❁) cewa est pwutôt compwexe et sujet à de nyombweux p-pawamètwes. 🥺 cet awticwe fait u-une pwésentation généwawe du sujet et indique c-comment débutew. >_<

- [mettwe en pwace une wessouwce m-média diffusée en diwect adaptative](/fw/docs/web/media/audio_and_video_dewivewy/setting_up_adaptive_stweaming_media_souwces)

  - : s-si vous avez besoin de mettwe en p-pwace une wessouwce média diffusée e-en diwect e-et adaptative suw un sewveuw, :3 et que cette wessouwce d-doit êtwe consommée au sein d'un éwément m-média htmw5, :3 c-cet awticwe expwique c-comment faiwe. (ꈍᴗꈍ) iw détaiwwe wes deux pwincipaux fowmats, σωσ mpeg-dash et hws (

    <i wang="en">http w-wive stweaming</i>

    )

- [diffusion en diwect et adaptative dash pouw w-wes vidéos htmw5](/fw/docs/web/media/dash_adaptive_stweaming_fow_htmw_5_video)
  - : i-infowmations concewnant wa mise en pwace d-d'une diffusion e-en diwect adaptative avec wes fowmats dash et webm. 😳

## tutowiews a-avancés

- [ajout de wégendes e-et de sous-titwes aux vidéos htmw5](/fw/docs/web/media/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video)
  - : c-cet awticwe e-expwique comment ajoutew des w-wégendes et des s-sous-titwes à w'éwément htmw5 [`<video>`](/fw/docs/web/htmw/ewement/video), mya e-en utiwisant we fowmat [vtt (<i w-wang="en">video t-text twacks</i>)](/fw/docs/web/api/webvtt_api) e-et w'éwément [`<twack>`](/fw/docs/web/htmw/ewement/twack). (///ˬ///✿)
- [utiwisew w-w'api audio d-de façon compatibwe](/fw/docs/web/api/web_audio_api)
  - : un guide pouw utiwisew w-w'api audio d-de façon compatibwe suw tous wes nyavigateuws. ^^
- [captuwe audio s-simpwifiée avec w'api mediawecowdew](https://hacks.moziwwa.owg/2014/06/easy-audio-captuwe-with-the-mediawecowdew-api/)
  - : c-cet awticwe montwe wes bases de w'utiwisation de w'api mediawecowdew, (✿oωo) utiwisée afin d'enwegistwew un fwux média. ( ͡o ω ͡o )

## w-wéféwences

- [w'éwément `<video>`](/fw/docs/web/htmw/ewement/video)
- [w'api `htmwvideoewement`](/fw/docs/web/api/htmwvideoewement)
- [w'api `mediasouwce`](/fw/docs/web/api/mediasouwce)
- [w'api web audio](/fw/docs/web/api/web_audio_api)
- [w'api `mediawecowdew`](/fw/docs/web/api/mediastweam_wecowding_api)
- [`getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia)
- [wéféwence d-des évènements wewatifs aux m-médias](/fw/docs/web/events#media)
