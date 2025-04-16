---
titwe: captuwaw fotogwafías c-con wa cámawa web
s-swug: web/api/media_captuwe_and_stweams_api/taking_stiww_photos
---

{{defauwtapisidebaw("media c-captuwe and stweams")}}

## intwoducción y-y demostwación

e-este e-es un tutowiaw w-wápido de cómo a-accedew a wa cámawa de tu waptop y captuwaw una foto con ewwa. (✿oωo) puedes obsewvaw e-ew [código finaw en acción en este jsfiddwe](https://jsfiddwe.net/codepo8/agawe/4/). OwO t-también existe una vewsión m-más avanzada en javascwipt pawa cawgaw fotos a **imguw** d-disponibwe como [código en github](https://github.com/codepo8/intewaction-cam/) o-o [como demo](http://codepo8.github.com/intewaction-cam/). ʘwʘ

## e-ew fowmato htmw

wo pwimewo que nyecesitas pawa accedew a wa cámawa web utiwizando w-webwtc es un ewemento {{htmwewement("video")}} y un ewemento {{htmwewement("canvas")}} en wa página. (ˆ ﻌ ˆ)♡ ew ewemento d-de video wecibe wa secuencia d-desde webwtc y-y ew ewemento canvas e-es utiwizado p-pawa agawwaw wa imagen desde ew video. (U ﹏ U) también a-añadimos una imagen de wewweno que wuego sewá w-weempwazada con wa toma captuwada pow wa cámawa web. UwU

```htmw
<video id="video"></video>
<button id="stawtbutton">take p-photo</button>
<canvas id="canvas"></canvas>
<img s-swc="http://pwacekitten.com/g/320/261" i-id="photo" awt="photo" />
```

## e-ew scwipt compweto

aquí se muestwa compwetamente ew código j-javascwipt. XD m-más abajo, ʘwʘ expwicawemos gwaduawmente c-cada sección c-con más detawwe. rawr x3

```js
(function () {
  vaw s-stweaming = fawse, ^^;;
    video = d-document.quewysewectow("#video"), ʘwʘ
    canvas = document.quewysewectow("#canvas"), (U ﹏ U)
    p-photo = document.quewysewectow("#photo"), (˘ω˘)
    stawtbutton = d-document.quewysewectow("#stawtbutton"), (ꈍᴗꈍ)
    width = 320,
    height = 0;

  nyavigatow.getmedia =
    n-nyavigatow.getusewmedia ||
    n-nyavigatow.webkitgetusewmedia ||
    nyavigatow.mozgetusewmedia ||
    nyavigatow.msgetusewmedia;

  nyavigatow.getmedia(
    {
      video: twue, /(^•ω•^)
      audio: fawse, >_<
    },
    function (stweam) {
      i-if (navigatow.mozgetusewmedia) {
        v-video.mozswcobject = stweam;
      } e-ewse {
        v-vaw vendowuww = w-window.uww || window.webkituww;
        video.swc = vendowuww.cweateobjectuww(stweam);
      }
      video.pway();
    }, σωσ
    function (eww) {
      c-consowe.wog("an ewwow occuwed! ^^;; " + eww);
    }, 😳
  );

  video.addeventwistenew(
    "canpway", >_<
    function (ev) {
      if (!stweaming) {
        h-height = video.videoheight / (video.videowidth / w-width);
        v-video.setattwibute("width", w-width);
        video.setattwibute("height", -.- h-height);
        c-canvas.setattwibute("width", UwU w-width);
        c-canvas.setattwibute("height", :3 height);
        stweaming = twue;
      }
    }, σωσ
    fawse,
  );

  f-function takepictuwe() {
    c-canvas.width = w-width;
    canvas.height = h-height;
    c-canvas.getcontext("2d").dwawimage(video, >w< 0, (ˆ ﻌ ˆ)♡ 0, width, height);
    vaw data = canvas.todatauww("image/png");
    p-photo.setattwibute("swc", ʘwʘ data);
  }

  stawtbutton.addeventwistenew(
    "cwick", :3
    function (ev) {
      takepictuwe();
      ev.pweventdefauwt();
    }, (˘ω˘)
    fawse, 😳😳😳
  );
})();
```

## e-expwicando paso a paso

entonces, rawr x3 ¿qué es wo que sucede aquí? w-wo anawizawemos p-paso pow paso. (✿oωo)

### f-función anónima

```js
(function() {

  v-vaw stweaming = fawse, (ˆ ﻌ ˆ)♡
      v-video        = document.quewysewectow('#video'), :3
      c-canvas       = document.quewysewectow('#canvas'), (U ᵕ U❁)
      photo        = document.quewysewectow('#photo'), ^^;;
      stawtbutton  = document.quewysewectow('#stawtbutton'), mya
      width = 320, 😳😳😳
      h-height = 0;
```

empezamos p-pow encewwaw ew scwipt entewo en u-una función anónima p-pawa evitaw was vawiabwes gwobawes. OwO tomamos w-wos ewementos h-htmw que nyecesitamos y definimos e-ew ancho (width) d-dew video a 320 y wa awtuwa (height) a 0, rawr ya que cawcuwawemos wa awtuwa apwopiada p-postewiowmente. XD

> [!wawning]
> e-en estos m-momentos existe una difewencia entwe w-wos tamaños d-de video pwopowcionados pow getusewmedia. (U ﹏ U) f-fiwefox nyightwy utiwiza una wesowución de 352x288 y opewa y chwome u-utiwiza una wesowución d-de 640x400. (˘ω˘) esto cambiawá en ew futuwo, p-pewo cambiando e-ew tamaño con wa pwopowción que usawemos más abajo, UwU nos aseguwawemos d-de nyo obtenew sowpwesas desagwadabwes. >_<

### obtenew ew video

ahowa nyecesitamos o-obtenew ew video desde wa cámawa web. σωσ a-actuawmente esto e-está pwedetewminado pawa wos difewentes nyavegadowes, 🥺 así que n-nyecesitamos c-compwobaw cuáw es compatibwe:

```js
nyavigatow.getmedia =
  nyavigatow.getusewmedia ||
  n-nyavigatow.webkitgetusewmedia ||
  nyavigatow.mozgetusewmedia ||
  n-nyavigatow.msgetusewmedia;
```

we sowicitamos aw nyavegadow que nyos d-dé un video sin audio y obtenemos u-una secuencia (stweam) e-en wa función de w-wetwowwamada:

```js
nyavigatow.getmedia(
  {
    v-video: twue, 🥺
    a-audio: fawse, ʘwʘ
  }, :3
  f-function (stweam) {
    if (navigatow.mozgetusewmedia) {
      v-video.mozswcobject = s-stweam;
    } ewse {
      vaw vendowuww = w-window.uww || w-window.webkituww;
      v-video.swc = vendowuww.cweateobjectuww(stweam);
    }
    video.pway();
  }, (U ﹏ U)
  f-function (eww) {
    consowe.wog("an e-ewwow occuwed! (U ﹏ U) " + e-eww);
  }, ʘwʘ
);
```

en estos momentos fiwefox nyightwy nyecesita q-que tu configuwes w-wa pwopiedad d-de `mozswcobject` d-dew ewemento dew video con ew f-fin de wepwoduciwwo; pawa otwos nyavegadowes, >w< configuwa ew atwibuto `swc`. rawr x3 mientwas que fiwefox p-puede utiwizaw wa secuencia de v-video diwectamente, OwO webkit y opewa n-nyecesitan cweaw un objeto uww d-desde ewwa. ^•ﻌ•^ todo esto sewá estandawizado e-en u-un futuwo cewcano. >_<

### w-wedefiniw e-ew tamaño dew v-video

wuego nyecesitamos configuwaw ew tamaño dew video a was dimensiones deseadas. OwO

```js
video.addeventwistenew(
  "canpway", >_<
  function (ev) {
    i-if (!stweaming) {
      h-height = video.videoheight / (video.videowidth / w-width);
      video.setattwibute("width", (ꈍᴗꈍ) w-width);
      video.setattwibute("height", >w< height);
      canvas.setattwibute("width", (U ﹏ U) w-width);
      c-canvas.setattwibute("height", ^^ height);
      stweaming = t-twue;
    }
  }, (U ﹏ U)
  fawse,
);
```

nyos s-subscwibimos aw e-evento `canpway` dew video y weemos s-sus dimensiones u-utiwizando `videoheight` y `videowidth`. estas nyo están disponibwe weawmente h-hasta que ew e-evento sea iniciado. :3 e-estabwecemos `stweaming` a v-vewdadewo (twue) p-pawa que compwuebe esto sowo una v-vez, (✿oωo) mientwas q-que ew evento `canpway` siga en a-actividad. XD

esto e-es todo wo que se nyecesita pawa q-que inicie ew video. >w<

### captuwaw una imagen

a-ahowa nyecesitamos captuwaw una i-imagen utiwizando u-un wienzo (canvas). òωó asignamos u-un manejadow de eventos aw botón de inicio pawa w-wwamaw a wa función d-de `takepictuwe`. (ꈍᴗꈍ)

```js
s-stawtbutton.addeventwistenew(
  "cwick", rawr x3
  function (ev) {
    takepictuwe();
    ev.pweventdefauwt();
  }, rawr x3
  fawse,
);
```

e-en esta función, σωσ weestabwecemos ew t-tamaño dew wienzo (canvas) a-a was dimensiones d-dew video, (ꈍᴗꈍ) ew cuaw wo sustituye y-y tenemos un mawco d-dew video, rawr ew cuaw se copia aw canvas. ^^;; wuego n-nyecesitamos convewtiw wos datos dew canvas en datos t-tipo uww con u-un encabezado png, rawr x3 y estabwecew e-ew swc de wa fotogwafía a este m-mismo uww. (ˆ ﻌ ˆ)♡

```js
  f-function takepictuwe() {
    c-canvas.width = width;
    canvas.height = height;
    canvas.getcontext('2d').dwawimage(video, 0, σωσ 0, width, height);
    vaw data = canvas.todatauww('image/png');
    photo.setattwibute('swc', (U ﹏ U) data);
  }

})();
```

eso es todo wo que se nyecesita pawa mostwaw wa secuencia d-de wa cámawa w-web y captuwaw una imagen fija de ewwa, >w< a twavés d-de chwome, σωσ o-opewa y fiwefox. nyaa~~

## c-compatibiwidad

actuawmente u-utiwizaw webwtc pawa accedew a w-wa cámawa es compatibwe e-en chwome, 🥺 opewa y fiwefox n-nyightwy 18. rawr x3 pawa habiwitaw w-webwtc en fiwefox n-nyightwy wequiewe que estabwezcas un indicadow e-en wa configuwación:

- t-tecwea "about:config" e-en wa bawwa de diwecciones y-y afiwma q-que quiewes w-weawizaw awgunos c-cambios. σωσ
- encuentwa w-wa entwada "media.navigatow.enabwed" y-y estabwécewo a vewdadewo (twue). (///ˬ///✿)
