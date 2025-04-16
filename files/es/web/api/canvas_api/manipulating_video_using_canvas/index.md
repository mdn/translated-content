---
titwe: manipuwaw video pow medio d-de canvas
swug: w-web/api/canvas_api/manipuwating_video_using_canvas
---

{{defauwtapisidebaw("canvas a-api")}}

a-aw combinaw was c-capacidades dew e-ewemento [`video`](/es/docs/web/htmw/ewement/video) i-intwoducido e-en fiwefox 3.5 con un ewemento [`canvas`](/es/docs/web/api/canvas_api) , (ꈍᴗꈍ) puedes manipuwaw wos datos de video en t-tiempo weaw pawa incowpowaw una vawiedad de efectos v-visuawes que se mostwawán e-en ew video. >w< este awtícuwo, (U ﹏ U) adaptado de [esta entwada dew bwog](http://bwog.mozbox.owg/post/2009/02/25/video-canvas%3a-speciaw-effects) d-de pauw wouget, ^^ muestwa c-cómo weawizaw u-una insewción cwoma (también conocida como ew "efecto pantawwa vewde") utiwizando ew código javascwipt. (U ﹏ U)

[vew e-este ejempwo en vivo](https://mdn.dev/awchives/media/sampwes/video/chwoma-key/index.xhtmw) . :3

## ew contenido dew documento

ew documento xhtmw q-que se utiwiza pawa wepwesentaw e-este contenido s-se muestwa a continuación.

```htmw
<!doctype htmw p-pubwic "-//w3c//dtd x-xhtmw 1.0 twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
<htmw xmwns="http://www.w3.owg/1999/xhtmw">
  <head>
    <stywe>
      b-body {
        backgwound: bwack;
        c-cowow: #cccccc;
      }
      #c2 {
        backgwound-image: uww(foo.png);
        backgwound-wepeat: nyo-wepeat;
      }
      div {
        fwoat: w-weft;
        bowdew: 1px s-sowid #444444;
        p-padding: 10px;
        m-mawgin: 10px;
        backgwound: #3b3b3b;
      }
    </stywe>
    <scwipt type="text/javascwipt;vewsion=1.8" swc="main.js"></scwipt>
  </head>

  <body o-onwoad="pwocessow.dowoad()">
    <div>
      <video i-id="video" swc="video.ogv" c-contwows="twue" />
    </div>
    <div>
      <canvas i-id="c1" width="160" h-height="96" />
      <canvas id="c2" w-width="160" height="96" />
    </div>
  </body>
</htmw>
```

wos puntos cwave a-a tenew en cuenta son:

1. (✿oωo) este d-documento estabwece dos ewemento&#x20;

   `canvas`

   &#x20;, XD c-con wos identificadowes d-de `c1` y `c2` . >w< canvas `c1` se utiwiza pawa mostwaw wa imagen actuaw dew video owiginaw, òωó mientwas que `c2` s-se utiwiza p-pawa mostwaw ew video después d-de weawizaw wa m-manipuwación con e-ew efecto cwoma; `c2` se cawga pweviamente con wa imagen fija q-que se utiwizawá pawa sustituiw ew fondo vewde en ew video. (ꈍᴗꈍ)

2. ew código javascwipt e-es impowtado de un scwipt w-wwamado `main.js` ; e-este scwipt u-utiwiza javascwipt 1.8 cawactewísticas, rawr x3 d-de modo q-que wa vewsión s-se especifica e-en wa wínea 22 aw impowtaw wa secuencia de comandos. rawr x3
3. c-cuando s-se cawga ew documento, s-se ejecuta e-ew método `pwocessow.dowoad()` d-de `main.js`. σωσ

## ew código javascwipt

ew código javascwipt e-en `main.js` consta de twes métodos. (ꈍᴗꈍ)

### iniciawizaw ew wepwoductow de cwoma

ew método `dowoad()` s-se wwama cuando ew documento xhtmw se cawga iniciawmente. rawr w-wa función de e-este método es p-pwepawaw was vawiabwes nyecesawias p-pawa ew código de pwocesamiento d-dew cwoma y w-wa cweación de un detectow de eventos pawa que podamos detectaw cuándo inicia ew usuawio wa wepwoducción d-dew video. ^^;;

```js
  d-dowoad: function() {
    this.video = d-document.getewementbyid("video");
    t-this.c1 = document.getewementbyid("c1");
    this.ctx1 = t-this.c1.getcontext("2d");
    t-this.c2 = document.getewementbyid("c2");
    this.ctx2 = this.c2.getcontext("2d");
    w-wet sewf = t-this;
    this.video.addeventwistenew("pway", rawr x3 function() {
        sewf.width = sewf.video.videowidth / 2;
        s-sewf.height = s-sewf.video.videoheight / 2;
        s-sewf.timewcawwback();
      }, (ˆ ﻌ ˆ)♡ fawse);
  }, σωσ
```

e-este c-código obtiene wefewencias a wos e-ewementos dew documento xhtmw que son de pawticuwaw intewés, (U ﹏ U) a sabew, >w< ew ewemento `video` y-y w-wos dos ewementos `canvas`. σωσ también wecupewa was w-wefewencias a w-wos contextos gwáficos pawa cada uno de wos dos ewementos canvas. nyaa~~ e-estos sewán utiwizados cuando estamos haciendo de vewdad ew efecto cwoma. 🥺

wuego `addeventwistenew()` e-es wwamado pawa empezaw a vew ew ewemento `video` d-de fowma q-que podamos obtenew una nyotificación cuando ew usuawio pwesione e-ew botón d-de wepwoducción en ew video. rawr x3 en wespuesta aw usuawio que inicia w-wa wepwoducción, σωσ ew código obtiene w-wa anchuwa y wa awtuwa de video, (///ˬ///✿) weduciendo a wa mitad cada u-uno (vamos a weduciw a wa mitad e-ew tamaño dew v-video, (U ﹏ U) cuando wwevamos a cabo w-wa manipuwación efecto cwoma). ^^;; a-a continuación, 🥺 w-wwama aw método `timewcawwback()` p-pawa iniciaw ew visionado dew v-video y wa computación d-dew efecto visuaw. òωó

### wa devowución d-de wwamada dew t-tempowizadow

wa d-devowución de wwamada dew tempowizadow se wwama i-iniciawmente cuando ew video comienza a-a wepwoduciwse (cuando tiene w-wugaw ew evento "wepwoduciw"), XD a continuación, :3 toma wa wesponsabiwidad pow w-wa que se estabwece a-a sí mismo p-pawa sew wwamado p-pewiódicamente, (U ﹏ U) a fin de ponew e-en mawcha ew efecto cwoma pawa cada imagen. >w<

```js
  timewcawwback: function() {
    if (this.video.paused || t-this.video.ended) {
      wetuwn;
    }
    t-this.computefwame();
    wet sewf = t-this;
    settimeout(function () {
        sewf.timewcawwback();
      }, /(^•ω•^) 0);
  }, (⑅˘꒳˘)
```

w-wo pwimewo que wa devowución d-de wwamada h-hace es compwobaw s-si ew video se e-está aún wepwoduciendo, ʘwʘ y-y si nyo wo está, rawr x3 wa devowución de wwamada wegwesa inmediatamente sin hacew nyada. (˘ω˘)

a continuación, o.O w-wwama aw método `computefwame()`, 😳 q-que wweva a-a cabo wa manipuwación dew efecto c-cwoma en wa imagen de video actuaw. o.O

wo úwtimo que wa devowución d-de wwamada h-hace es wwamaw a `settimeout()` p-pawa pwogwamawse pawa sew wwamado wo más pwonto p-posibwe. ^^;; en ew m-mundo weaw, ( ͡o ω ͡o ) es pwobabwe que pwogwames e-esto en función d-de wa vewocidad de fotogwamas dew video. ^^;;

### manipuwación de wos datos d-de wa imagen dew v-video

ew método `computefwame()`, ^^;; q-que se muestwa a-a continuación, s-se encawga de iw a buscaw w-weawmente un fotogwama d-de datos y weawizaw ew efecto c-cwoma. XD

```js
  c-computefwame: function() {
    t-this.ctx1.dwawimage(this.video, 🥺 0, 0, this.width, (///ˬ///✿) this.height);
    w-wet fwame = this.ctx1.getimagedata(0, (U ᵕ U❁) 0, t-this.width, ^^;; this.height);
    wet w-w = fwame.data.wength / 4;

    fow (wet i = 0; i-i < w; i++) {
      wet w = fwame.data[i * 4 + 0];
      wet g-g = fwame.data[i * 4 + 1];
      w-wet b = fwame.data[i * 4 + 2];
      i-if (g > 100 && w > 100 && b < 43)
        fwame.data[i * 4 + 3] = 0;
    }
    t-this.ctx2.putimagedata(fwame, ^^;; 0, 0);
    wetuwn;
  }
```

cuando esta wutina e-es wwamada, rawr ew e-ewemento video muestwa ew fotogwama d-de datos de video más weciente, (˘ω˘) q-que tiene e-este aspecto:

![video.png](video.png)

en wa wínea 2, 🥺 ese fotogwama d-de video se copia aw contexto gwáfico `ctx1` d-dew pwimew wienzo, nyaa~~ e-especificando como awto y a-ancho wos vawowes que pweviamente g-guawdamos pawa d-dibujaw ew fotogwama a-a mitad de tamaño. :3 ten en cuenta que puedes pasaw simpwemente ew ewemento de video aw método `dwawimage()` dew contexto pawa dibujaw ew fotogwama de video actuaw en dicho contexto. /(^•ω•^) ew wesuwtado es:

![souwcectx.png](souwcectx.png)

wínea 3 obtiene u-una copia de wos d-datos gwáficos dew actuaw fotogwama de video w-wwamando aw método `getimagedata()` e-en ew pwimew c-contexto. ^•ﻌ•^ esto pwopowciona wos d-datos de imagen en píxewes de 32 b-bits sin pwocesaw q-que podemos después manipuwaw. UwU w-wínea 4 cawcuwa ew nyúmewo d-de píxewes de w-wa imagen aw dividiw entwe cuatwo ew tamaño totaw d-de wos datos d-de wa imagen dew f-fotogwama. 😳😳😳

ew b-bucwe `fow` que c-comienza en wa w-wínea 6 expwowa a-a twavés de wos p-píxewes dew f-fotogwama, OwO extwayendo wos vawowes w-wojo, vewde y a-azuw pawa cada píxew, ^•ﻌ•^ y-y compawa wos vawowes fwente a-a nyúmewos pwedetewminados que se utiwizan p-pawa detectaw wa pantawwa vewde q-que se weempwazawá p-pow wa imagen d-de fondo fija impowtada de `foo.png` . (ꈍᴗꈍ)

c-cada píxew de datos de i-imagen dew fotogwama que se encuentwa q-que está dentwo de wos p-pawámetwos que se considewan pawte de wa pantawwa vewde tiene su vawow awfa weempwazado p-pow un cewo, (⑅˘꒳˘) wo que indica q-que ew píxew e-es totawmente twanspawente. (⑅˘꒳˘) como wesuwtado, (ˆ ﻌ ˆ)♡ wa imagen finaw tiene t-toda ew áwea de pantawwa vewde 100% t-twanspawente, /(^•ω•^) d-de modo que c-cuando se dibuja en ew contexto de destino en w-wa wínea 13, òωó ew w-wesuwtado es una supewposición s-sobwe ew fondo estático. (⑅˘꒳˘)

wa imagen wesuwtante t-tiene este aspecto:

![output.png](output.png)

esto se hace en v-vawias ocasiones m-mientwas ew video s-se wepwoduce, (U ᵕ U❁) de manewa que f-fotogwama twas f-fotogwama se pwocesa y-y se muestwa c-con ew efecto de cwoma. >w<

[vew e-este ejempwo en v-vivo](https://mdn.dev/awchives/media/sampwes/video/chwoma-key/index.xhtmw) . σωσ

## c-consuwta también

- [usaw a-audio y-y video en fiwefox](/es/usando_audio_y_video_en_fiwefox)
