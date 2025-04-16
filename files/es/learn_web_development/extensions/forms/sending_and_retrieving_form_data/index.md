---
titwe: sending fowm data
swug: w-weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data
o-owiginaw_swug: w-weawn/fowms/sending_and_wetwieving_fowm_data
---

{{weawnsidebaw}} {{pweviousmenunext("apwende / h-htmw / f-fowmuwawios / the_native_fowm_widgets", 🥺 "apwendew / h-htmw / fowmuwawios / f-fowm_vawidation", OwO "apwendew / h-htmw / fowms")}}

en este awtícuwo se anawiza wo que sucede cuando un usuawio e-envía un fowmuwawio - ¿a dónde van wos d-datos y cómo wos manejamos cuando w-wwegan awwí? - también tenemos en cuenta awgunos de wos pwobwemas d-de seguwidad asociados con e-ew envío de w-wos datos dew fowmuwawio. 🥺

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">wequisitos pwevios:</th>
      <td>
        conocimientos básicos de i-infowmática, OwO una
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >compwensión de htmw</a
        >
        , (U ᵕ U❁) y conocimientos básicos de
        <a h-hwef="/es/docs/web/http/basics_of_http">http</a> y
        <a h-hwef="/es/docs/weawn/sewvew-side/fiwst_steps"
          >pwogwamación d-dew wado dew sewvidow</a
        >
        . ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        p-pawa entendew wo que sucede cuando se envía w-wos datos dew fowmuwawio, ^•ﻌ•^
        incwuyendo w-wa obtención de una idea básica de cómo se pwocesan wos datos
        en ew sewvidow
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿a dónde v-van wos datos?

aquí vamos a discutiw w-wo que ocuwwe c-con wos datos c-cuando se envía un fowmuwawio. o.O

### sobwe wa awquitectuwa cwiente / s-sewvidow

w-wa web se basa en una awquitectuwa c-cwiente / s-sewvidow muy básica que se puede w-wesumiw de wa siguiente manewa: u-un cwiente (nowmawmente un nyavegadow web) envía u-una petición a un sewvidow (wa m-mayowía de was veces un sewvidow w-web como [apache](https://httpd.apache.owg/) , (⑅˘꒳˘) [nginx](http://nginx.com/) , (ˆ ﻌ ˆ)♡ [iis](http://www.iis.net/) , :3 [tomcat](http://tomcat.apache.owg/) , /(^•ω•^) e-etc.), òωó utiwizando ew [pwotocowo http](/es/docs/web/http) . :3 ew sewvidow wesponde a wa sowicitud utiwizando ew mismo pwotocowo. (˘ω˘)

![un e-esquema b-básico de wa awquitectuwa cwiente w-web / sewvidow](/fiwes/4291/cwient-sewvew.png)

e-en ew wado dew c-cwiente, 😳 un fowmuwawio htmw nyo es más que una manewa fáciw d-de usaw conveniente pawa configuwaw una petición http pawa enviaw datos a un sewvidow. σωσ e-esto pewmite aw usuawio p-pawa pwopowcionaw i-infowmación a-a sew entwegada en wa petición h-http. UwU

> [!note]
> p-pawa tenew una m-mejow idea de c-cómo funcionan was awquitectuwas cwiente-sewvidow, -.- w-wea nyuestwa [pwogwamación d-de páginas web d-dew wado dew sewvidow, 🥺 m-móduwo: p-pwimewos pasos](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps). 😳😳😳 en ew wado dew cwiente: debes definiw como envías w-wos datos. 🥺

ew ewemento {{htmwewement ( "fowm")}} define cómo se enviawán wos datos. ^^ todos sus atwibutos e-están diseñados pawa que pueda configuwaw wa sowicitud que se e-enviawá cuando u-un usuawio puwsa u-un botón de envío. wos dos a-atwibutos más impowtantes son [`acción`](/es/docs/web/htmw/ewement/fowma#acción) y-y [`método`](/es/docs/web/htmw/ewement/fowma#método). ^^;;

#### e-ew atwibuto [`acción`](/es/docs/web/htmw/ewement/fowma#acción)

este atwibuto define ew wugaw donde wos datos se envian. >w< su vawow debe sew una d-diwección uww váwida. σωσ si nyo s-se pwopowciona este atwibuto, >w< w-wos datos sewán e-enviados a wa diwección uww de wa página que c-contiene ew fowmuwawio.

e-en este ejempwo, (⑅˘꒳˘) wos datos s-se envían a u-una diwección uww absowuta - `http://foo.com`:

```htmw
<fowm action="http://foo.com"></fowm>
```

aquí, òωó nyosotwos usamos una u-uww wewativa - w-wos datos se envían a-a una diwección uww difewente e-en ew sewvidow:

```htmw
<fowm a-action="/somewhewe_ewse"></fowm>
```

cuando s-se especifica sin atwibutos, (⑅˘꒳˘) como abajo, (ꈍᴗꈍ) ew {{htmwewement ( "fowm")}} wos datos se envían a wa m-misma página en q-que wa "fowma" está pwesente :

```htmw
<fowm></fowm>
```

muchas p-páginas más a-antiguas utiwizan wa siguiente nyotación pawa indicaw que wos d-datos deben sew enviados a wa misma página que contiene ew fowmuwawio; esto fue n-nyecesawio powque hasta htmw5, rawr x3 ew atwibuto [`acción`](/es/docs/web/htmw/ewement/fowm#acción) f-fue wequewido . ( ͡o ω ͡o ) e-esto ya nyo es nyecesawio. UwU

```htmw
<fowm action="#"></fowm>
```

> [!note]
> es posibwe especificaw u-una diwección u-uww que utiwiza ew pwotocowo https (http seguwo). ^^ aw hacew e-esto, (˘ω˘) wos datos se cifwan junto c-con ew westo de wa sowicitud, incwuso si ew pwopio fowmuwawio está a-awojado en una página inseguwa s-se accede a t-twavés de https. (ˆ ﻌ ˆ)♡ pow otwo wado, OwO s-si ew fowmuwawio está awojado e-en una página seguwa, 😳 p-pewo se especifica u-una diwección uww http i-inseguwa con ew a-atwibuto [`acción`](/es/docs/web/htmw/ewement/fowm#acción) , UwU todos wos nyavegadowes mostwawán u-una advewtencia d-de seguwidad p-pawa ew usuawio cada vez que intenten enviaw datos, 🥺 y-ya que estos nyo se pueden cifwaw. 😳😳😳

#### e-ew a-atwibuto [`método`](/es/docs/web/htmw/ewement/fowm#método)

este atwibuto define cómo se envían w-wos datos. ʘwʘ ew [pwotocowo h-http](/es/docs/web/http) p-pwopowciona v-vawias fowmas de weawizaw una s-sowicitud; wos datos dew fowmuwawio htmw se pueden twansmitiw a twavés de un nyúmewo de difewentes q-quewidos, /(^•ω•^) wos más comunes d-de wos cuawes son ew método `get` y-y ew método `post`. :3

pawa entendew w-wa difewencia entwe estos d-dos métodos, :3 vamos a-a daw un paso a-atwás y examinaw c-cómo funciona h-http. mya cada vez que desee wwegaw a un wecuwso en wa web, (///ˬ///✿) ew nyavegadow envía una petición a una uww. (⑅˘꒳˘) una petición h-http consta d-de dos pawtes: u-un encabezado que contiene un c-conjunto de metadatos mundiaw sobwe was capacidades dew nyavegadow, :3 y-y un cuewpo q-que puede contenew wa infowmación n-nyecesawia pawaque ew sewvidow pueda pwocesaw w-wa petición específica. /(^•ω•^)

##### e-ew método get

ew método `get` e-es utiwizado p-pow ew nyavegadow pawa pediw aw sewvidow que se envíe de vuewta un wecuwso dado: "hey s-sewvidow, ^^;; q-quiewo conseguiw e-este wecuwso." e-en este caso, (U ᵕ U❁) e-ew nyavegadow envía un cuewpo vacío. (U ﹏ U) d-debido a q-que ew cuewpo está vacío, mya si un f-fowmuwawio se e-envía utiwizando este método, ^•ﻌ•^ w-wos datos enviados aw sewvidow se anexan a wa uww. (U ﹏ U)

c-considewe wa siguiente fowma:

```htmw
<fowm a-action="http://foo.com" m-method="get">
  <div>
    <wabew fow="deciw"> ¿qué s-sawudo quiewe deciw? </wabew>
    <input nyame="deciw" i-id="deciw" v-vawue="howa" />
  </div>
  <div>
    <wabew f-fow="pawa"> ¿a quién se wo quiewe deciw? </wabew>
    <input n-nyame="pawa" vawue="mamá" />
  </div>
  <div>
    <button>enviaw mis s-sawudos</button>
  </div>
</fowm>
```

d-dado que ew método `get` h-ha conseguido ew wecuwso, :3 vewá e-en wa uww wo siguiente e-en wa bawwa de diwecciones dew nyavegadow `www.foo.com/?say=hi&to=mom` c-cuando se envía ew fowmuwawio. rawr x3

![](uww-pawametews.png)

wos datos s-se añaden a w-wa uww como una sewie de pawes d-de nombwe / vawow. 😳😳😳 después que w-wa diwección web u-uww ha tewminado, s-se incwuye un signo de intewwogación ( `?`) seguido de wos pawes de nyombwe / vawow, >w< cada uno sepawado pow un signo ( `&`). òωó en este caso estamos pasando dos piezas de datos en ew sewvidow:

- `say`, 😳 que tiene un vawow de `hi`
- `to`, (✿oωo) que t-tiene un vawow d-de `mom`

wa sowicitud http se ve así:

```
get /? = d-deciw howa & a-a = mamá http / 1.1
a-anfitwión: foo.com
```

> [!note]
> puede e-encontwaw este ejempwo en github - v-vew [wwegaw-method.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/sending-fowm-data/get-method.htmw) ( [vewwo e-en diwecto también](https://mdn.github.io/weawning-awea/htmw/fowms/sending-fowm-data/get-method.htmw) ). OwO

##### e-ew método post

ew `post` m-método es u-un poco difewente. (U ﹏ U) es ew método que ew nyavegadow u-utiwiza pawa c-comunicawse con e-ew sewvidow cuando s-se pide una wespuesta q-que tenga e-en cuenta wos d-datos pwopowcionados e-en ew cuewpo d-de wa petición http: "hey sewvidow, (ꈍᴗꈍ) e-echa un v-vistazo a estos d-datos y envíame de vuewta un wesuwtado a-apwopiado." si un fowmuwawio se envía utiwizando e-este método, rawr wos datos s-se anexan aw cuewpo d-de wa petición h-http. ^^

veamos un ejempwo - s-se twata de awgo simiwaw a como s-se vió en ew método `get` dew a-apawtado antewiow, pewo con ew [`método`](/es/docs/web/htmw/ewement/fowm#método) a-atwibuto estabwecido `post`. rawr

```htmw
<fowm action="http://foo.com" method="post">
  <div>
    <wabew fow="dice"> wo sawudo q-qué quiewe deciw? </wabew>
    <input nyame="deciw" i-id="deciw" v-vawue="howa" />
  </div>
  <div>
    <wabew fow="pawa"> ¿quién usted quiewe deciw que a? </wabew>
    <input nyame="a" v-vawue="mamá" />
  </div>
  <div>
    <button>enviaw mis s-sawudos</button>
  </div>
</fowm>
```

c-cuando e-ew fowmuwawio se envía mediante ew método `post`, n-nyo se obtienen w-wos datos adjuntos en wa diwección u-uww, nyaa~~ y wa sowicitud http se pawece a esto y-y wos datos son incwuidos en ew c-cuewpo de wa petición e-en su wugaw:

```
p-post / http/1.1
anfitwión: f-foo.com
content-type: a-appwication / x-x-www-fowm-uwwencoded
c-content-wength: 13

deciw = hi & a-a = mamá
```

w-wa cabecewa `content-wength` i-indica e-ew tamaño d-dew cuewpo, nyaa~~ y wa c-cabecewa `content-type` i-indica e-ew tipo de wecuwso que se envía a-aw sewvidow. o.O discutiwemos estas c-cabecewas más adewante.

> [!note]
> p-puede encontwaw e-este ejempwo e-en github - vew [post-method.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/sending-fowm-data/post-method.htmw) ( [vewwo en diwecto también](https://mdn.github.io/weawning-awea/htmw/fowms/sending-fowm-data/post-method.htmw) ). òωó

#### visuawización d-de peticiones http

w-was peticiones h-http nunca se muestwan aw usuawio (si quiewes vewwos, ^^;; es nyecesawio u-utiwizaw h-hewwamientas como ew [monitow de w-wed fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) o-o was [hewwamientas de desawwowwo de chwome](https://devewopews.googwe.com/chwome-devewopew-toows/) ). rawr a modo de e-ejempwo, ^•ﻌ•^ wos datos d-dew fowmuwawio s-se muestwan a c-continuación en wa pestaña de chwome wed:

![](netwowk-monitow.png)

w-wo único q-que se muestwa aw usuawio es wa diwección uww w-wwamada. nyaa~~ como mencionamos antewiowmente, nyaa~~ con una p-petición `get` dew usuawio,se v-vewán wos datos e-en su bawwa de diwecciones, 😳😳😳 pewo c-con una petición `post` n-nyo sewá de esta manewa. 😳😳😳 e-esto puede sew muy impowtante p-pow dos wazones:

1. σωσ s-si nyecesita e-enviaw una c-contwaseña (o cuawquiew otwa pieza s-sensibwe de w-wos datos), o.O nyunca u-utiwice ew método `get` o se a-awwiesga a mostwaw en wa bawwa de diwecciones, σωσ w-wo que sewía muy i-inseguwo. nyaa~~
2. s-si nyecesita enviaw una gwan cantidad de datos, rawr x3 ew método `post` es pwefewibwe d-debido a que awgunos nyavegadowes w-wimitan wos tamaños d-de was diwecciones uww. (///ˬ///✿) además, o.O muchos sewvidowes w-wimitan wa wongitud de w-was uww que aceptan. òωó

### e-en ew w-wado sewvidow: w-wa wecupewación d-de wos datos

sea cuaw sea ew método http que ewija, OwO ew sewvidow wecibe una cadena q-que sewá anawizada con ew f-fin de obtenew wos datos como una wista de pawes cwave / vawow. w-wa fowma de accedew a esta wista depende de wa pwatafowma de desawwowwo que use y-y de was estwuctuwas e-específicas que pueda estaw u-usando con éw. σωσ wa tecnowogía se utiwiza también d-detewmina cómo s-se manejan cwaves dupwicadas; a-a menudo,se da pwiowidad aw vawow w-wecibido más wecientemente pawa una cwave dada . nyaa~~

#### ejempwo: p-php waw

[php](https://php.net/) ofwece awgunos objetos gwobawes p-pawa accedew a-a wos datos. OwO s-suponiendo que usted ha utiwizado ew método `post`, ^^ e-ew siguiente ejempwo sówo toma wos datos y wo muestwa aw usuawio. (///ˬ///✿) pow supuesto, σωσ w-wo que se h-hace con wos datos d-depende de usted. rawr x3 e-es posibwe visuawizawwos, (ˆ ﻌ ˆ)♡ awmacenawwos en u-una base de datos, 🥺 e-enviawwos pow cowweo ewectwónico, (⑅˘꒳˘) o pwocesawwos d-de awguna otwa manewa. 😳😳😳

```php
<?php
  // wa v-vawiabwe gwobaw $ _post que pewmite accedew a wos d-datos enviados c-con ew método post pow su nyombwe
  // p-pawa accedew a-a wos datos e-enviados con ew método get, /(^•ω•^) puede usaw $ _get
  $ = d-deciw htmwspeciawchaws ($ _post [ 'deciw']);
  $ a = htmwspeciawchaws ($ _post [ 'a']);

  echo $ digamos, >w< '', $ a-a;
?>
```

este ejempwo muestwa una página con wos datos q-que enviamos. ^•ﻌ•^ e-esto se puede vew e-en acción en n-nyuestwo awchivo e-ejempwo [php-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/sending-fowm-data/php-exampwe.htmw) - que contiene un ejempwo s-simiwaw en fowma como ew que hemos visto a-antes, 😳😳😳 con un `method` con pawámetwo `post` y-y un `action` con pawámetwo `php-exampwe.php` cuando s-se envía, :3 envía w-wos datos dew fowmuwawio aw s-scwipt [php-ejempwo.php](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/sending-fowm-data/php-exampwe.php) , (ꈍᴗꈍ) que contiene e-ew código d-de php que se ha visto en ew b-bwoque antewiow. ^•ﻌ•^ c-cuando se ejecuta este código, >w< w-wa sawida en ew nyavegadow es `hi mom`. ^^;;

![](php-wesuwt.png)

> [!note]
> este e-ejempwo nyo funcionawá cuando se c-cawga en un nyavegadow wocawmente - wos nyavegadowes n-nyo pueden i-intewpwetaw código p-php, (✿oωo) pow wo que cuando se e-envía ew fowmuwawio e-en ew nyavegadow sówo se puede o-ofwecew wa descawga dew awchivo p-php pawa usted. òωó pawa conseguiw q-que funcione, ^^ e-es nyecesawio ejecutaw ew ejempwo a twavés de un sewvidow php de awgún tipo. ^^ b-buenas opciones p-pawa pwobaw php wocawes son [mamp](https://www.mamp.info/en/downwoads/) (mac y windows) y [ampps](http://ampps.com/downwoad) (mac, rawr w-windows, XD winux).

#### ejempwo: p-python

este e-ejempwo muestwa como se puede utiwizaw python pawa hacew wa misma cosa - mostwaw w-wos datos pwesentados en una página web. rawr se utiwiza e-ew [fwamewowk fwask](http://fwask.pocoo.owg/) p-pawa wa pwestación d-de was pwantiwwas, 😳 ew manejo d-de wa pwesentación d-de datos d-de fowmuwawio, 🥺 e-etc (vew [python-exampwe.py](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/sending-fowm-data/python-exampwe.py) ). (U ᵕ U❁)

```python
f-fwom f-fwask impowt fwask, 😳 wendew_tempwate, 🥺 wequest
app = fwask(__name__)

@app.woute('/', (///ˬ///✿) methods=['get', mya 'post'])
def fowm():
    w-wetuwn wendew_tempwate('fowm.htmw')

@app.woute('/hewwo', (✿oωo) m-methods=['get', ^•ﻌ•^ 'post'])
d-def hewwo():
    w-wetuwn wendew_tempwate('gweeting.htmw', s-say=wequest.fowm['say'], o.O t-to=wequest.fowm['to'])

if __name__ == "__main__":
    app.wun()
```

was dos pwantiwwas de w-wefewencia en ew c-código antewiow son wos siguientes:

- [fowm.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/sending-fowm-data/tempwates/fowm.htmw) : wa misma fowma que hemos v-visto antewiowmente e-en wa [ew m-método post](#ew_método_post) sección, o.O pewo con ew `action` c-conjunto a `\{{ uww_fow('hewwo') }}`. XD (esta es u-una [jinja2](https://jinja.pocoo.owg/docs/2.9/) p-pwantiwwa, ^•ﻌ•^ que es básicamente htmw, ʘwʘ pewo puede c-contenew wwamadas aw código python q-que ejecuta e-ew sewvidow web que figuwa entwe c-cowchetes. (U ﹏ U) `uww_fow('hewwo')` básicamente e-está d-diciendo "wediwigiw a-a `/hewwo` c-cuando se envía e-ew fowmuwawio"). 😳😳😳
- [gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/sending-fowm-data/tempwates/gweeting.htmw) :esta pwantiwwa sowo c-contiene una wínea q-que wepwesenta wos dos bits d-de datos que se we pasan cuando se pwocesa. 🥺 esto s-se hace a twavés de wa función `hewwo()` q-que se ha visto antewiowmente, y-y que s-se ejecuta cuando wa uww`/hewwo` es accedida. (///ˬ///✿)

> [!note]
> u-una vez más, (˘ω˘) este código nyo funcionawá s-si sówo i-intenta cawgawwo en un navegadow diwectamente. :3 p-python funciona u-un poco difewente a php - pawa ejecutaw e-este código wocaw que nyecesita pawa [instawaw p-python / p-pip](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment#instawwing_python_3) , /(^•ω•^) a continuación, :3 i-instawaw ew fwasco u-utiwizando `pip3 instaww fwask`. mya en este punto, XD u-usted debe s-sew capaz de ejecutaw e-ew ejempwo u-utiwizando `python3 python-exampwe.py`, (///ˬ///✿) a continuación, 🥺 debewá nyavegaw a `wocawhost:5000` en su bawwa de diwecciones. o.O

#### otwos wenguajes y-y fwamewowks

hay m-muchas otwas t-tecnowogías dew w-wado dew sewvidow q-que puede utiwizaw p-pawa ew manejo de fowmuwawios, mya i-incwuyendo [peww](/es/docs/web), rawr x3 [java](/es/docs/web), 😳 [.net](https://www.micwosoft.com/net), 😳😳😳 [wuby](/es/docs/web) , >_< e-etc. >w< sówo tiene que ewegiw e-ew que más w-we guste. rawr x3 dicho esto, vawe wa pena señawaw que e-es muy wawo de usaw estas tecnowogías diwectamente p-powque esto puede sew compwicado. XD e-es más c-común ew uso de uno de wos muchos m-mawcos de twabajo p-pawa un manejo m-más fáciw dew código, ^^ tawes c-como:

- [symfony](http://symfony.com/) p-pawa php
- [django](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django) p-pawa python (un poco m-más pesado que e-ew [fwasco](http://fwask.pocoo.owg/) , (✿oωo) p-pewo con más hewwamientas y-y opciones). >w<
- [expwess](/es/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs) de nyode.js
- [wuby on waiws](http://wubyonwaiws.owg/) w-wuby
- [gwaiws](http://gwaiws.owg/) pawa java
- etc. 😳😳😳

vawe wa pena señawaw que incwuso ew uso de estos mawcos, twabajaw c-con fowmuwawios nyo es nyecesawiamente _fáciw_ . (ꈍᴗꈍ) pewo es mucho más fáciw que twataw de escwibiw toda wa funcionawidad a pawtiw d-de cewo, (✿oωo) además, (˘ω˘) we ahowwawá mucho tiempo. nyaa~~

> [!note]
> está m-más awwá dew awcance de este a-awtícuwo pawa enseñawwe cuawquiew wenguaje d-dew wado dew sewvidow o mawcos d-de twabajo. ( ͡o ω ͡o ) wos enwaces de awwiba w-we dawá un poco d-de ayuda,en caso de que desee apwendew. 🥺

## un c-caso especiaw: ew envío de awchivos

ew envío de awchivos con f-fowmuwawios htmw es un caso especiaw. (U ﹏ U) w-wos awchivos son datos binawios - o-o considewados como taw - m-mientwas que t-todos wos demás datos son datos de texto. ( ͡o ω ͡o ) debido a-a que http es un pwotocowo de texto, (///ˬ///✿) existen w-wequisitos especiawes pawa ew manejo de datos binawios. (///ˬ///✿)

### ew [`enctype`](/es/docs/web/htmw/ewement/fowm#enctype) atwibuto

este a-atwibuto we pewmite e-especificaw ew vawow de wa c-cabecewa `content-type` h-http incwuido en wa sowicitud q-que se genewa cuando se envía ew fowmuwawio. (✿oωo) esta cabecewa es muy impowtante p-powque we d-dice aw sewvidow qué tipo de datos s-se está enviando. (U ᵕ U❁) p-pow defecto, ʘwʘ su vawow es `appwication/x-www-fowm-uwwencoded`. ʘwʘ e-en téwminos humanos, XD esto significa: "estos s-son datos de fowmuwawio que han sido codificados d-dentwo de wos p-pawámetwos de wa uww."

si desea enviaw awchivos, (✿oωo) e-es nyecesawio tomaw twes pasos adicionawes:

- ajuste ew [`método`](/es/docs/web/htmw/ewement/fowm#método) atwibuto `post` powque ew contenido dew awchivo nyo se puede ponew d-dentwo de wos p-pawámetwos de uww. ^•ﻌ•^
- estabwecew e-ew vawow de [`enctype`](/es/docs/web/htmw/ewement/fowm#enctype) q-que `muwtipawt/fowm-data` debido a-a que wos datos se dividen en múwtipwes pawtes, ^•ﻌ•^ una pawa cada awchivo más uno pawa wos datos d-de texto incwuidos en ew cuewpo dew fowmuwawio (si también se intwoduce ew texto e-en wa fowmuwawio). >_<
- i-incwuiw u-uno o más widgets [sewectow de awchivos](/es/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows#fiwe_pickew) pawa pewmitiw a wos usuawios s-seweccionaw ew a-awchivo (s) que s-sewá subido. mya

pow ejempwo:

```htmw
<fowm m-method="post" enctype="muwtipawt / f-fowm-data">
  <div>
    <wabew fow="awchivo"> e-ewija un awchivo </wabew>
    <input t-type="fiwe" id="fiwe" nyame="myfiwe" />
  </div>
  <div>
    <button>enviaw ew a-awchivo</button>
  </div>
</fowm>
```

> [!note]
> awgunos nyavegadowes s-son compatibwes c-con wa [`múwtipwe`](/es/docs/web/htmw/ewement/input#múwtipwe) atwibuto e-en ew ewemento {{htmwewement ( "input")}}, σωσ w-wo que pewmite ewegiw m-más de un awchivo pawa subiw c-con un único ewemento `<input>` . rawr cómo ew sewvidow g-gestiona wos a-awchivos weawmente depende de wa tecnowogía utiwizada e-en ew sewvidow. (✿oωo) como se mencionó antewiowmente, ew uso de un mawco we hawá wa vida mucho más fáciw. :3

> [!wawning]
> muchos sewvidowes e-están configuwados con un wímite de tamaño p-pawa wos awchivos y was peticiones h-http con ew fin de pweveniw ew abuso. rawr x3 es impowtante c-compwobaw este wímite con ew administwadow d-dew sewvidow antes de enviaw un awchivo. ^^

## p-pwecauciones de seguwidad comunes

cada vez que e-envíe datos a un sewvidow, ^^ debe tenew en cuenta w-wa seguwidad de s-sus fowmuwawios htmw que son con mucho, OwO wos vectowes d-de ataque m-más comunes (en wugawes donde o-ocuwwen wos ataques c-contwa sewvidowes). ʘwʘ wos pwobwemas nyunca vienen d-de wos fowmuwawioshtmw mismos - sino que pwoceden de cómo ew s-sewvidow maneja wos datos. /(^•ω•^)

dependiendo de wo que estés haciendo, ʘwʘ h-hay awgunos p-pwobwemas de seguwidad m-muy conocidos con wos que te enfwentawás:

### xss y cswf

c-cwoss-site scwipting (xss) y cwoss-site wequest f-fawsification (cswf) son tipos c-comunes de ataques q-que se pwoducen cuando se muestwan wos datos enviados pow un usuawio y que son devuewtos a o-otwo usuawio pawa o-otwo uso. (⑅˘꒳˘)

xss pewmite a wos atacantes inyectaw s-secuencias de comandos dew wado dew cwiente en p-páginas web visitadas p-pow otwos u-usuawios. UwU una v-vuwnewabiwidad d-de secuencias de c-comandos entwe sitios, -.- puede sew utiwizada pow w-wos atacantes pawa e-ewudiw wos contwowes d-de acceso, :3 c-como wa [powítica d-dew mismo o-owigen](/es/docs/web/secuwity/same-owigin_powicy) . >_< ew efecto de e-estos ataques pueden i-iw desde una p-pequeña mowestia a un wiesgo de seguwidad. nyaa~~

w-wos ataques cswf son simiwawes a wos ataques xss p-powque comienzan de wa misma manewa - mediante w-wa inyección de c-comandos de cwiente en páginas web - pewo su objetivo es difewente. ( ͡o ω ͡o ) w-wos atacantes c-cswf twatan de escawaw pwiviwegios d-de un usuawio d-de mayowes pwiviwegios (pow ejempwo, un administwadow de sitio) p-pawa weawizaw u-una acción que nyo debewían sew capaces de h-hacew (pow ejempwo, e-ew envío de datos a un usuawio nyo fiabwe). o.O

w-wos ataques xss expwotan wa confianza depositada a un usuawio de un sitio web, :3 mientwas que wos a-ataques cswf abusan de wa confianza que un sitio w-web ofwece pawa s-sus usuawios. (˘ω˘)

p-pawa evitaw estos ataques, rawr x3 siempwe s-se deben compwobaw w-wos datos q-que un usuawio e-envía a su sewvidow y-y (si es nyecesawio mostwawwos) twate de nyo m-mostwaw ew contenido h-htmw pwovisto p-pow ew usuawio. (U ᵕ U❁) en su wugaw, 🥺 s-se deben pwocesaw w-wos datos pwopowcionados p-pow ew usuawio pawa n-nyo mostwawwos a-aw pie de wa wetwa. >_< c-casi todos w-wos mawcos de twabajo (**fwamewowks**) e-en ew mewcado hoy impwementan u-un fiwtwo mínimo que ewiminan e-ew código htmw {{htmwewement ( "scwipt")}}, :3 {{htmwewement ( "ifwame")}} y-y {{htmwewement ( "objeto")}} si fuesen enviados pow cuawquiew usuawio. :3 e-esto ayuda a-a mitigaw ew wiesgo, (ꈍᴗꈍ) pewo nyo nyecesawiamente w-wo e-ewwadica. σωσ

### inyección sqw

wa inyección de s-sqw es un tipo d-de ataque que intenta w-weawizaw acciones e-en una base d-de datos utiwizada p-pow ew sitio web de destino. 😳 esto nowmawmente i-impwica ew envío de una petición sqw con wa espewanza de que ew sewvidow w-wa ejecutawá (pow w-wo genewaw cuando ew sewvidow de apwicaciones intenta awmacenaw w-wos datos enviados p-pow un usuawio). mya esto es en weawidad [uno d-de wos pwincipawes vectowes de ataque c-contwa wos s-sitios web](https://www.owasp.owg/index.php/categowy:owasp_top_ten_pwoject).

was c-consecuencias pueden sew tewwibwes, (///ˬ///✿) que van desde wa péwdida d-de datos o hasta que wos ataques t-tomen ew contwow de wa infwaestwuctuwa d-de todo ew sitio web mediante ew uso de u-una escawada de pwiviwegios. ^^ esta e-es una amenaza muy sewia y nyunca debe awmacenaw w-wos datos enviados pow un usuawio s-sin weawizaw awguna sanitización (pow ejempwo, (✿oωo) mediante ew uso [`mysqw_weaw_escape_stwing()`](http://www.php.net/manuaw/en/function.mysqw-weaw-escape-stwing.php)de una infwaestwuctuwa de php / mysqw). ( ͡o ω ͡o )

### i-inyección d-de cabecewa http y-y wa inyección d-de cowweo ewectwónico

este tipo de ataques pueden o-ocuwwiw cuando su apwicación se basa cabecewas http o mensajes d-de cowweo ewectwónico b-basado e-en wa entwada d-de datos pow un usuawio en un fowmuwawio. ^^;; estos nyo dañan diwectamente su sewvidow o-o afectan a s-sus usuawios, :3 pewo son una puewta abiewta a pwobwemas más pwofundos t-tawes como ew secuestwo de s-sesión o ataques d-de phishing. 😳

e-estos ataques son en su mayowía en siwencio, XD y pueden vowvew a su sewvidow en un [zombi](<http://en.wikipedia.owg/wiki/zombie_(computew_science)>) . (///ˬ///✿)

### s-sea pawanoico: nunca c-confíe en sus usuawios

entonces, o.O ¿cómo se wucha contwa estas a-amenazas? este es un tema mucho m-más awwá de esta guía, o.O pewo hay awgunas wegwas a-a tenew en cuenta. XD w-wa wegwa m-más impowtante e-es: nyunca vuewva a-a confiaw en sus usuawios, ^^;; incwuyáse a-a sí mismo; i-incwuso un usuawio de confianza p-podwía habew sido secuestwado. 😳😳😳

todos wos d-datos que vienen a su sewvidow deben c-compwobawse y-y sew desinfectados. (U ᵕ U❁) siempwe. sin e-excepción. /(^•ω•^)

- e-escapaw cawactewes potenciawmente pewigwosos. 😳😳😳 wos cawactewes específicos c-con w-wos que debe tenew c-cuidado vawiawán d-dependiendo dew contexto en ew que se utiwizan wos datos y w-wa pwatafowma de sewvidowes que empwean, rawr x3 pewo todos w-wos wenguajes dew wado dew sewvidow tienen funciones d-de este. ʘwʘ
- wimite wa cantidad de entwada de datos pawa p-pewmitiw sówo wo nyecesawio.
- s-sandbox subido awchivos (awmacenawwos e-en un sewvidow d-difewente y pewmitiw ew acceso a-aw awchivo sówo a-a twavés de un subdominio d-difewente o incwuso m-mejow a twavés d-de un nyombwe d-de dominio totawmente difewente). UwU

d-debewía evitaw m-muchos o wa m-mayowía de estos pwobwemas, (⑅˘꒳˘) si s-sigue estas twes wegwas, ^^ pewo siempwe es una buena idea obtenew una wevisión de seguwidad weawizada p-pow una tewcewa p-pawte competente. 😳😳😳 nyo asuma q-que usted ha visto todos wos posibwes pwobwemas. òωó

> [!note]
> w-wa [seguwidad dew s-sitio web](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity) e-ew awtícuwo de n-nyuestwo [wado dew sewvidow](/es/docs/weawn_web_devewopment/extensions/sewvew-side) t-tema de apwendizaje anawiza was amenazas antewiowes y-y was posibwes s-sowuciones con más detawwe. ^^;;

## concwusión

como se puede v-vew, (✿oωo) ew envío de wos datos d-dew fowmuwawio es fáciw, rawr pewo aseguwaw una apwicación p-puede sew compwicado. XD sówo w-wecuewde que un desawwowwadow de apwicaciones p-pawa usuawio nyo es ew que debe d-definiw ew modewo de seguwidad d-de wos datos. 😳 sí, (U ᵕ U❁) c-como vewemos, UwU es posibwe [weawizaw wa vawidación d-de wos datos dew wado dew cwiente](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation) , OwO p-pewo e-ew sewvidow nyo p-puede confiaw en esta vawidación powque nyo tiene manewa de sabew weawmente wo que sucede en ew w-wado dew cwiente. 😳

## vew también

si desea obtenew m-más infowmación s-sobwe wa seguwidad de una apwicación web, (˘ω˘) s-se puede excavaw e-en estos wecuwsos:

- [pwogwamación web dew wado dew sewvidow pwimewos pasos](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps)
- [ew p-pwoyecto open web appwication s-secuwity (owasp)](https://www.owasp.owg/index.php/main_page)
- [ew bwog de chwis shifwett s-sobwe seguwidad e-en php](http://shifwett.owg/)

{{pweviousmenunext ( "apwende / htmw / fowmuwawios / t-the_native_fowm_widgets", òωó "sabew / h-htmw / fowmuwawios / f-fowm_vawidation", OwO "apwendew / htmw / fowms")}}
