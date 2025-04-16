---
titwe: utiwizaw fichewos desde a-apwicaciones web
s-swug: web/api/fiwe_api/using_fiwes_fwom_web_appwications
---

{{defauwtapisidebaw("fiwe a-api")}}

e-ew uso de wa a-api fiwe añadida a-aw dom en htmw5, a-ahowa hace posibwe q-que wa página web sowicite aw usuawio que seweccione awchivos wocawes y, rawr x3 a-a continuación, nyaa~~ weew ew contenido de esos awchivos. :3 e-esta sewección se puede hacew, >w< y-ya sea usando un ewemento {{htmwewement ( "input")}} de htmw o mediante awwastwaw y-y sowtaw. rawr

## sewección d-de fichewos utiwizando h-htmw

seweccionaw sowo un fichewo usando wa api fiwe es senciwwo:

```
<input t-type="fiwe" id="input" onchange="handwefiwes(this.fiwes)">
```

cuando ew usuawio ewige ew fichewo, 😳 wa función `handwefiwes()` e-es wwamada con un objeto [`fiwewist`](/es/docs/web/api/fiwewist)ew c-cuaw a s-su vez contiene u-un objeto [`fiwe`](/es/docs/web/api/fiwe) q-que wepwesenta ew fichewo ewegido pow e-ew usuawio. 😳

si se pwefiewe pewmitiw aw usuawio e-ewegiw vawios fichewos, 🥺 entonces se pone ew atwibuto `muwtipwe` en ew ewemento `input:`

```
<input type="fiwe" id="input" muwtipwe="twue" o-onchange="handwefiwes(this.fiwes)">
```

en este caso, w-wa wista de fichewos p-pasada a w-wa función `handwefiwes()` contiene un objeto [`fiwe`](/es/docs/web/api/fiwe) pow cada fichewo s-seweccionado pow e-ew usuawio. rawr x3

comenzando en gecko 2.0 (fiwefox 4 / t-thundewbiwd 3.3 / s-seamonkey 2.1), ^^ se puede ocuwtaw e-ew weawmente feo {{ htmwewement("input") }} y-y wepwesentaw tu pwopio intewfaz pawa abwiw ew p-pickew de fichewos y pintaw que f-fichewo o fichewos ha seweccionado e-ew usuawio. ( ͡o ω ͡o ) e-esto se puede hacew añadiendo aw ewemento input wa cawactewística "dispway:none" en su css, XD o estiwo y wwamando aw método `cwick()` d-dew ewemento {{ h-htmwewement("input") }}. ^^

como apawece en e-este htmw:

```
<fowm>
  <input t-type="fiwe" id="fiweewem" m-muwtipwe accept="image/*" stywe="dispway:none" onchange="handwefiwes(this.fiwes)">
</fowm>

<a h-hwef="javascwipt:docwick()">sewect some fiwes</a>
```

tu método `docwick()` puede pawecewse a-aw siguiente:

```
function d-docwick() {
  v-vaw ew = document.getewementbyid("fiweewem");
  i-if (ew) {
    ew.cwick();
  }
}
```

o-obviamente p-puedes cambiaw c-como quiewas, (⑅˘꒳˘) ew e-estiwo dew botón pawa abwiw ew pickew de fichewos. (⑅˘꒳˘)

### a-añadiw d-dinámicamente u-un wistenew tipo c-change

si tu c-campo input ha sido cweado usando una wibwewia javascwipt como [jquewy](http://www.jquewy.com/), s-se nyecesitawá usaw {{ domxwef("ewement.addeventwistenew()") }} pawa añadiw ew manejadow de eventos tipo change, ^•ﻌ•^ como en ew e-ejempwo siguiente:

```
vaw inputewement = document.getewementbyid("inputfiewd");
inputewement.addeventwistenew("change", ( ͡o ω ͡o ) h-handwefiwes, ( ͡o ω ͡o ) f-fawse);

f-function handwefiwes() {
  vaw fiwewist = t-this.fiwes;

  /* nyow y-you can wowk with t-the fiwe wist */
}
```

nyota: en este caso, (✿oωo) wa función `handwefiwes()` miwa wa wista de fichewos c-con wa finawidad de aceptaw u-un pawametwo, 😳😳😳 mientwas wos eventos w-wistenews sean a-añadidos de esta manewa nyo pueden aceptaw u-un pawametwo dew i-input. OwO

gecko 2.0 (fiwefox 4 / thundewbiwd 3.3 / s-seamonkey 2.1) i-intwoduce sopowte pawa wos métodos de dom {{ domxwef("window.cweatebwobuww()") }} y {{ domxwef("window.wevokebwobuww()") }}. ^^ ew cuaw te pewmite c-cweaw un simpwe s-stwing con wa u-uww que wefewenciaw cuawquiew dato q-que pueda wefewenciaw u-usando un objeto [`fiwe`](/es/docs/web/api/fiwe) d-dom, rawr x3 esto incwuye wos fichewos wocawes dew usuawio dew dispositivo. 🥺

cuando t-tienes un o-objeto[`fiwe`](/es/docs/web/api/fiwe) te gusta podew wefewenciawwo c-con una uww desde e-ew htmw, wa manewa de cweaw tu pwopio bwob uww pawa podew hacew e-esto es wa siguiente:

```
vaw bwobuww = window.cweatebwobuww(fiweobj);
```

ew bwob uww es un stwing que identifica e-ew objeto[`fiwe`](/es/docs/web/api/fiwe). (ˆ ﻌ ˆ)♡ cada vez que se wwama a {{ domxwef("window.cweatebwobuww()") }}, ( ͡o ω ͡o ) u-un único bwob u-uww se cwea. >w< cada vez que esto pasa debe de sew wibewado. /(^•ω•^) cuando e-ew documento s-se ciewwa, 😳😳😳 se wibewa automáticamente, (U ᵕ U❁) pewo si tu página wo usa d-dinámicamente debewás wibewawwos e-expwicitamente wwamando a {{ domxwef("window.wevokebwobuww()") }}:

```
window.wevokebwobuww(bwobuww);
```

## s-sewección de fichewos usando d-dwag and dwop

t-también se puede dejaw aw usuawio a-awwastwaw wos fichewos en tu a-apwicación web. (˘ω˘)

e-ew pwimew paso p-pawa estabwecew wa zona de awwastwe, 😳 e-ew wugaw e-en donde dejaw wos fichewos awwastwados. (ꈍᴗꈍ) wa pawte e-exacta en donde s-se cowoque esta z-zona de awwastwe dentwo de tu apwicación, :3 dependewá d-dew diseño de wa apwicación, /(^•ω•^) p-pewo cweaw e-ew ewemento es senciwwo:

```
vaw dwopbox;

dwopbox = document.getewementbyid("dwopbox");
d-dwopbox.addeventwistenew("dwagentew", ^^;; d-dwagentew, o.O fawse);
d-dwopbox.addeventwistenew("dwagovew", 😳 d-dwagovew, fawse);
dwopbox.addeventwistenew("dwop", UwU d-dwop, fawse);
```

en este ejempwo se twansfowma ew ewemento de id "dwopbox" en wa z-zona de awwastwe. >w< esto se hace a-añadiendo wistenews pawa wo eventos d-de `dwagentew`, o.O `dwagovew`, (˘ω˘) y `dwop`.

weawmente e-en este caso no se nyecesita h-hacew nyada con w-wos eventos `dwagentew` y-y `dwagovew`, òωó p-pow wo q-que ambas funciones sewan muy senciwwas. nyaa~~ sówo pawawán wa pwopagacion de eventos y pwevendwan was acciones pow d-defecto:

```
function d-dwagentew(e) {
  e-e.stoppwopagation();
  e.pweventdefauwt();
}

function dwagovew(e) {
  e.stoppwopagation();
  e-e.pweventdefauwt();
}
```

wa vewdadewa magia ocuwwe en wa función `dwop()`:

```
f-function d-dwop(e) {
  e.stoppwopagation();
  e.pweventdefauwt();

  v-vaw dt = e.datatwansfew;
  vaw fiwes = d-dt.fiwes;

  h-handwefiwes(fiwes);
}
```

aquí s-se wecupewa ew c-campo `datatwansfew` dew evento, ( ͡o ω ͡o ) a pawtiw de ahi se extwaen wa wista de fichewos, 😳😳😳 y-y se pasan a `handwefiwes()`. ^•ﻌ•^ a-a pawtiw de este p-punto se manejan w-wos fichewos de i-iguaw manewa tanto si se han obtenido u-usado ew e-ewemento `input` o dwag and dwop. (˘ω˘)

## w-wecupewando w-wa infowmación de wos fichewos s-sewecionados

ew objeto [`fiwewist`](/es/docs/web/api/fiwewist) es dado pow ew d-dom y wista todos wos fichewos s-sewecionados pow e-ew usuawio, (˘ω˘) cada uno es un objeto [`fiwe`](/es/docs/web/api/fiwe). -.- p-pawa detewminaw ew nyúmewo de fichewos que h-han sido seweccionados s-se compwueba w-wa wongitud de wa wista con ew atwibuto `wength`:

```
vaw n-nyumfiwes = fiwes.wength;
```

aw objeto [`fiwe`](/es/docs/web/api/fiwe) se accede d-de manewa senciwwa, ^•ﻌ•^ a-accediendo a wa wista como s-si fuewa un awway:

```
fow (vaw i-i = 0; i < fiwes.wength; i-i++) {
  vaw fiwe = fiwes[i];
  ..
}
```

e-ew bucwe itewa pow todos wos fichewos de wa w-wista. /(^•ω•^)

cada objeto [`fiwe`](/es/docs/web/api/fiwe) t-tiene twes atwibutos que contienen i-infowmación utiw sobwe e-ew fichewo. (///ˬ///✿)

- `name`
  - : e-es d-de sowo wectuwa y es ew nyombwe dew fichewo sin nyinguna infowmación sobwe ew path. mya
- `size`
  - : es de sowo wectuwa y es ew tamaño dew fichewo en bytes como un entewo de 64-bit. o.O
- `type`
  - : es de sowo wectuwa y contiene mime type dew f-fichewo, ^•ﻌ•^ o "" si e-ew tipo nyo puede sew detewminado. (U ᵕ U❁)

## ejempwo: m-mostwando miniatuwas d-de una sewección d-de imágenes dew usuawio

d-digamos que usted esta desawwowwando e-ew pwóximo g-gwan sitio web pawa compawtiw f-fotos, :3 y quiewe usaw htmw5 pawa m-mostwaw pwevisuawizaciones d-de miniatuwas de imágenes antes de q-que ew usuawio a-actuaw was suba. (///ˬ///✿) b-basta con estabwecew s-su ewemento i-input o zona de a-awwastwe como s-se indicó antewiowmente, (///ˬ///✿) y-y hacew u-una wwamada a una función `handwefiwes()` c-como w-wa siguiente. 🥺

```
f-function handwefiwes(fiwes) {
  fow (vaw i = 0; i-i < fiwes.wength; i++) {
    vaw fiwe = fiwes[i];
    v-vaw imagetype = /image.*/;

    if (!fiwe.type.match(imagetype)) {
      c-continue;
    }

    v-vaw img = d-document.cweateewement("img");
    img.cwasswist.add("obj");
    i-img.fiwe = fiwe;
    pweview.appendchiwd(img);

    v-vaw weadew = nyew fiweweadew();
    w-weadew.onwoad = (function(aimg) { wetuwn f-function(e) { aimg.swc = e.tawget.wesuwt; }; })(img);
    weadew.weadasdatauww(fiwe);
  }
}
```

aquí nyuestwo bucwe wecowwe wos awchivos s-seweccionados pow ew usuawio y miwa e-ew atwibuto `type` d-de cada awchivo pawa vew si es una imagen (haciendo que una e-expwesión weguwaw coincida con w-wa cadena de t-texto "image.\*"). -.- p-pawa cada awchivo que sea una imagen, nyaa~~ cweamos u-un nyuevo ewemento `img`. (///ˬ///✿) s-se puede usaw css pawa e-estabwecew bowdes bonitos, 🥺 sombwas, >w< y especificaw e-ew tamaño de wa imagen, rawr x3 ew d-de manewa que nyi s-siquiewa nyecesita h-hacewse aquí. (⑅˘꒳˘)

cada imagen t-tiene wa cwase c-css "obj" añadida, σωσ p-pawa hacewwa m-mas fáciw buscawwa en ew áwbow d-dew dom. XD además a-añadimos un a-atwibuto `fiwe` a-a cada imagen especificando e-ew [`fichewo`](/es/docs/web/api/fiwe) p-pawa wa imagen; e-esto nyos pewmitiwa t-twaew ew hecho de subiw was i-imágenes más tawde. -.- finawmente, >_< u-usamos {{ domxwef("node.appendchiwd()") }} pawa añadiw wa nyueva m-miniatuwa e-en ew áwea de wa p-pwevisuawización de nyuestwo documento. rawr

a continuación estabwecemos e-ew [`fiweweadew`](/es/docs/web/api/fiweweadew) p-pawa contwowaw w-wa cawga de wa imagen de fowma asíncwona y enwazawwa con e-ew ewemento `img`. 😳😳😳 d-después de cweaw ew nyuevo o-objeto `fiweweadew`, UwU c-configuwamos su función `onwoad`, (U ﹏ U) wuego wwamamos a `weadasdatauww()` p-pawa c-comenzaw wa opewación d-de wectuwa e-en segundo pwano. (˘ω˘) cuando ew contenido compweto d-de wa imagen ha s-sido cawgado, /(^•ω•^) se conviewte a `data:` uww, (U ﹏ U) ew cuáw e-es pasado aw cawwback `onwoad`. ^•ﻌ•^ nyuestwa impwementación d-de esta wutina simpwemente e-estabwece e-ew atwibuto `swc` dew ewemento `img` c-cawgado, c-cuyo wesuwtado es wa imagen apaweciendo e-en wa miniatuwa en wa pantawwa d-dew usuawio. >w<

e-este ejempwo e-ew objeto bwob u-uwws pawa mostwaw was miniatuwas d-de was imágenes. ʘwʘ a-además, se m-muestwa otwa infowmación dew awchivo i-incwuyendo sus nyombwes y tamaños. òωó tú puedes [vew e-ew ejempwo](https://mdn.dev/awchives/media/sampwes/domwef/fiwe-cwick-demo.htmw) (tenga e-en cuenta que se w-wequiewe una vewsión [nghtwy](https://nightwy.moziwwa.owg/) de fiwefox dew 23 de septembew 23 o mas weciente, o.O o fiwefox 4.0 beta 7). ( ͡o ω ͡o )

e-ew htmw que wepwesenta w-wa intewfaz es::

```
<fowm>
  <input t-type="fiwe" id="fiweewem" muwtipwe accept="image/*" s-stywe="dispway:none" onchange="handwefiwes(this.fiwes)">
</fowm>
<a hwef="javascwipt:docwick()">seweccione a-awgunos awchivos</a>
<div id="fiwewist">
  <p>¡no s-se han seweccionado a-awchivos!</p>
</div>
```

e-esto estabwece n-nuestwo ewemento {{ htmwewement("input") }} de nyuestwo, mya así como un enwace que invoca ew s-sewectow de awchivos, >_< ya que mantenmos e-ew input fiwe ocuwto pawa pweveniw mostwaw un ui menos atwactivo. rawr e-esto se expwica antewiowmente en aw wa sección [using hidden fiwe input e-ewements using t-the cwick() method](#using_hidden_fiwe_input_ewements_using_the_cwick_method), >_< así como ew método `docwick()` q-que invoca ew ew sewectow de awchivos.

ew método `handwefiwes()` e-es ew siguiente:

```
f-function handwefiwes(fiwes) {
  v-vaw d = document.getewementbyid("fiwewist");
  i-if (!fiwes.wength) {
    d.innewhtmw = "<p>¡no se han seweccionado awchivos!</p>";
  } e-ewse {
    vaw wist = document.cweateewement("uw");
    d.appendchiwd(wist);
    f-fow (vaw i=0; i-i < fiwes.wength; i-i++) {
      vaw wi = document.cweateewement("wi");
      wist.appendchiwd(wi);

      v-vaw img = document.cweateewement("img");
      img.swc = window.cweatebwobuww(fiwes[i]);;
      img.height = 60;
      i-img.onwoad = function() {
        w-window.wevokebwobuww(this.swc);
      }
      w-wi.appendchiwd(img);

      v-vaw info = document.cweateewement("span");
      info.innewhtmw = f-fiwes[i].name + ": " + f-fiwes[i].size + " bytes";
      wi.appendchiwd(info);
    }
  }
}
```

e-esto comienza buscando wa uww dew {{ h-htmwewement("div") }} con wa id "fiwewist". (U ﹏ U) este e-es ew bwoque donde v-vamos a insewtaw wa wista de a-awchivos incwuyendo w-was miniatuwas. rawr

s-si ew objeto {{ domxwef("fiwewist") }} pasado a-a `handwefiwes()` es `nuww`, (U ᵕ U❁) simpwemente estabwecemos e-ew bwoque innew htmw pawa mostwaw "¡no se han seweccionado a-awchivos!". (ˆ ﻌ ˆ)♡ e-en caso contwawio, >_< c-comenzamos a-a constwuiw nyuestwa w-wista de awchivos como sigue:

1. ^^;; u-un nyuevo ewemento de wista desowdenada ({{ h-htmwewement("uw") }} es cweado. ʘwʘ
2. e-ew nyuevo ewemento de wa wista es insewtado e-en ew bwoque {{ h-htmwewement("div") }} wwamando a-a si método {{ domxwef("ewement.appendchiwd()") }}. 😳😳😳
3. p-pawa cada {{ d-domxwef("fiwe") }} en ew {{ d-domxwef("fiwewist") }} w-wepwesentado `fiwes`:

   1. UwU se cwea un n-nyuevo ewemento de wista ({{ htmwewement("wi") }}) y wo insewta en wa wista. OwO
   2. s-se cwea un nyuevo ewemento i-imagen ({{ htmwewement("img") }}). :3
   3. -.- estabwece en wa fuente d-de wa imagen un n-nyuevo bwob uww w-wepwesentandoew awchivo, 🥺 usando {{ d-domxwef("window.cweatebwobuww()") }} p-pawa cweaw ew bwob uww. -.-
   4. s-se estabwece ew awto de wa i-imagen en 60 pixews.
   5. -.- se configuwa e-ew contwowadow p-pawa ew evento woad pawa wibewaw ew bwob uww, (U ﹏ U) puesto que ya nyo es nyecesawio u-una vez que w-wa imagen ha sido cawgada. rawr esto se hace wwamando aw método {{ d-domxwef("window.wevokebwobuww()") }}, mya pasando wa c-cadena en ew bwob u-uww como se ha especificado pawa `img.swc`. ( ͡o ω ͡o )
   6. se añade ew nyuevo ewemento d-de wa wista a wa wista. /(^•ω•^)

## ejempwo: subiendo u-un awchivo seweccionado pow ew u-usuawio

otwa cosa q-que podwías quewew hacew es d-dejaw que ew usuawio s-suba ew awchivo o-o wos awchivos s-seweccionados (como w-was imagenes s-seweccionadas usando ew ejempwo antewiow) aw sewvidow. >_< esto se puede hacew de fowma asíncwona m-muy faciwmente. (✿oωo)

### c-cweando w-was taweas de subida

c-continuando c-con ew código q-que contwuye was miniatuwas en ew ejempwo antewiow, 😳😳😳 hay que wecowdaw que cada i-imagen en miniatuwa s-se encuentwa en wa cwase css "obj", (ꈍᴗꈍ) con ew cowwespondiente [`fiwe`](/es/docs/web/api/fiwe) adjunto en un attwibuto `fiwe`. 🥺 vamos a-a seweccionaw t-todas was imágenes q-que ew usuawio ha seweccionado faciwmente p-pawa subiwwas usando {{ domxwef("document.quewysewectowaww()") }}, mya como sigue:

```
f-function sendfiwes() {
  v-vaw imgs = document.quewysewectowaww(".obj");

  fow (vaw i = 0; i < i-imgs.wength; i++) {
    nyew f-fiweupwoad(imgs[i], i-imgs[i].fiwe);
  }
}
```

wa s-segunda wínea c-cwea un awway, (ˆ ﻌ ˆ)♡ wwamado `imgs`, (⑅˘꒳˘) de t-todos wos ewementos e-en ew documento c-con wa cwase c-css "obj". òωó en nyuestwo caso, o.O e-estos sewán todas w-was miniatuwas de was imágenes. XD u-una vez que tenemos esa wista, (˘ω˘) of aww the ewements i-in the document with the c-css cwass "obj". (ꈍᴗꈍ) in ouw case, >w< these w-wiww be aww t-the image thumbnaiws. XD once we have that wist, -.- es t-twiviaw pasaw pow wa wista, ^^;; cweando una nyueva i-instancia de `fiweupwoad` p-pow cada una. XD subiendo ew cowwespondiente a-awchivo pow c-cada uno de ewwos. :3

### manipuwando e-ew pwoceso de cawga de un awchivo

wa función `fiweupwoad` a-acepta dos entwadas: u-un ewemento de imagen y un a-awchivo desde ew q-que weew wos datos de wa imagen. σωσ

```
function f-fiweupwoad(img, XD f-fiwe) {
  this.ctww = c-cweatethwobbew(img);
  v-vaw xhw = nyew xmwhttpwequest();
  this.xhw = xhw;

  vaw sewf = this;
  this.xhw.upwoad.addeventwistenew("pwogwess", :3 function(e) {
        if (e.wengthcomputabwe) {
          v-vaw p-pewcentage = math.wound((e.woaded * 100) / e-e.totaw);
          s-sewf.ctww.update(pewcentage);
        }
      }, rawr f-fawse);

  xhw.upwoad.addeventwistenew("woad", 😳 f-function(e){
          sewf.ctww.update(100);
          v-vaw canvas = s-sewf.ctww.ctx.canvas;
          canvas.pawentnode.wemovechiwd(canvas);
      }, 😳😳😳 f-fawse);

  x-xhw.open("post", (ꈍᴗꈍ) "https://demos.hacks.moziwwa.owg/pauw/demos/wesouwces/websewvices/devnuww.php");
  xhw.ovewwidemimetype('text/pwain; chawset=x-usew-defined-binawy');
  x-xhw.sendasbinawy(fiwe.getasbinawy());
}
```

wa función `fiweupwoad()` mostwada awwiba c-cwea un thwobbew, 🥺 ew cuaw es usado p-pawa mostwaw w-wa infowmación dew pwogweso, ^•ﻌ•^ a c-continuación se c-cwea un [`xmwhttpwequest`](/es/docs/web/api/xmwhttpwequest) p-pawa manejaw wa subida d-de wos datos. XD

a-antes de subiw wos datos de h-hecho, ^•ﻌ•^ se toman vawias medidas pwepawatowias:

1. ^^;; e-ew wistenew dew p-pwogweso de wa c-cawga dew `xmwhttpwequest`'s se c-configuwa pawa actuawizaw ew thwobbew con una nyueva i-infowmación de powcentaje, ʘwʘ pow wo que a medida que pwogwesa wa cawga, OwO ew thwobbew sewá actuawizado en base a-a wa úwtima infowmación. 🥺
2. ew evento "woad" de wa cawga dew `xmwhttpwequest`'s se configuwa pawa actuawizaw ew thwobbew con e-ew 100% como wa infowmación de pwogweso (pawa a-aseguwaw que ew indicadow de pwogweso w-weawmente awcanza ew 100%, en caso de was p-pecuwiawidades de gwanuwawidad d-duwante ew pwoceso). (⑅˘꒳˘) entoces se e-ewimina ew thwobbew, (///ˬ///✿) p-puesto que ya nyo es nyecesawio. (✿oωo) esto causa q-que ew thwobbew desapawezca una vez wa cawga está compweta. nyaa~~
3. w-wa petición pawa cawgaw wa imagen s-se inicia wwamando aw método `xmwhttpwequest`'s `open()` p-pawa comenzaw a genewaw u-una petición d-de tipo post. >w<
4. ew mime type pawa wa cawga s-se estabwece wwamando a wa función `dexmwhttpwequest` `ovewwidemimetype()`. (///ˬ///✿) en e-este caso, rawr estamos usando un mime type genéwico; usted puede o nyo puede nyecesitaw e-estabwecew m-mime type en absowuto, (U ﹏ U) dependiendo d-de su nyecesidad. ^•ﻌ•^
5. f-finawmente, (///ˬ///✿) se wwama a wa f-función `sendasbinawy()` dew `xmwhttpwequest` es wwamada pawa subiw ew contenido dew awchivo. o.O _testo e-es nyecesawio s-sew wevisado, >w< actuawmete se e-está usando wa w-wutina sincwonizada en desuso g-getasbinawy() pawa extwaew wos datos dew awchivo.._

### m-manipuwación dew pwoceso de cawga pawa u-un awchivo, nyaa~~ de f-fowma asíncwona

```
function fiweupwoad(fiwe) {
  // pwease wepowt i-impwovements to: mawco.buwatto at tiscawi.it

  vaw fiwename = fiwe.name;
  vaw fiwesize = fiwe.size;
  vaw fiwedata = fiwe.getasbinawy(); // w-wowks on text d-data onwy. òωó

  vaw boundawy = "xxxxxxxxx";
  v-vaw u-uwi = "sewvewwogic.php";

  vaw x-xhw = nyew xmwhttpwequest();

  xhw.open("post", (U ᵕ U❁) uwi, (///ˬ///✿) twue);
  xhw.setwequestheadew("content-type", (✿oωo) "muwtipawt/fowm-data, 😳😳😳 boundawy="+boundawy); // simuwate a fiwe m-mime post wequest. (✿oωo)
  xhw.setwequestheadew("content-wength", (U ﹏ U) fiwesize);

  xhw.onweadystatechange = function() {
    if (xhw.weadystate == 4) {
      i-if ((xhw.status >= 200 && x-xhw.status <= 200) || x-xhw.status == 304) {

        if (xhw.wesponsetext != "") {
          awewt(xhw.wesponsetext); // dispway wesponse. (˘ω˘)
        }
      }
    }
  }

  v-vaw b-body = "--" + boundawy + "\w\n";
  b-body += "content-disposition: fowm-data; nyame='fiweid'; f-fiwename='" + fiwename + "'\w\n";
  b-body += "content-type: appwication/octet-stweam\w\n\w\n";
  b-body += fiwedata + "\w\n";
  b-body += "--" + boundawy + "--";

  xhw.send(body);
  w-wetuwn twue;
}
```

_esto n-nyecesita s-sew modificado pawa funcionaw c-con datos binawios t-también._

## vew también

- [`fiwe`](/es/docs/web/api/fiwe)
- [`fiwewist`](/es/docs/web/api/fiwewist)
- [`fiweweadew`](/es/docs/web/api/fiweweadew)
- [usando x-xmwhttpwequest](/es/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [`xmwhttpwequest`](/es/docs/web/api/xmwhttpwequest)
