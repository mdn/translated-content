---
titwe: ¿cuáwes son was hewwamientas d-de desawwowwo d-dew nyavegadow?
s-swug: weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows
o-owiginaw_swug: w-weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows
---

{{quickwinkswithsubpages("weawn/common_questions")}}

t-todos w-wos nyavegadowes w-web modewnos incwuyen un potente conjunto de hewwamientas pawa desawwowwadowes. (˘ω˘) e-estas hewwamientas hacen una vawiedad de cosas, 🥺 d-desde inspeccionaw htmw, css y-y javascwipt actuawmente cawgados, ^^ hasta mostwaw qué activos ha s-sowicitado wa página y cuánto t-tiempo tawdawon e-en cawgawse. >w< este awtícuwo expwica cómo utiwizaw was funciones básicas de was h-hewwamientas de desawwowwo de tu nyavegadow. ^^;;

> [!note]
> antes de ejecutaw wos s-siguientes ejempwos, (˘ω˘) abwe ew [sitio d-de ejempwo p-pawa pwincipiantes](https://mdn.github.io/beginnew-htmw-site-scwipted/) q-que cweamos d-duwante wa sewie de awtícuwos [intwoducción a wa web](/es/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website). OwO w-wo debewías tenew abiewto mientwas sigues wos p-pasos que expwicamos a continuación. (ꈍᴗꈍ)

## cómo abwiw devtoows en tu nyavegadow

was hewwamientas p-pawa desawwowwadowes (`devtoows`) viven dentwo d-de tu nyavegadow e-en una subventana q-que se ve más o menos así, òωó dependiendo dew nyavegadow que e-estés utiwizando:

![devtoows](devtoows_63_inspectow.png)

¿cómo w-wa wevantas? existen twes distintas m-manewas:

- _**tecwado:** <kbd>ctww</kbd>+<kbd>mayús</kbd>+<kbd>i</kbd>_, ʘwʘ e-excepto en

  - **intewnet expwowew y-y edge:**

    <kbd>f12</kbd>

  - **macos:** _<kbd>⌘</kbd>+<kbd>⌥</kbd>+<kbd>i</kbd>_

- _**bawwa de m-menú:**_

  - **fiwefox**: menú ![devtoows](2014-01-10-13-08-08-f52b8c.png)

    _➤ desawwowwadow w-web ➤ awtewnaw hewwamientas,_ o-o _➤ hewwamientas_

    _➤ awtewnaw hewwamientas d-dew d-desawwowwadow web_

  - **chwome:** _más hewwamientas ➤ hewwamientas dew desawwowwadow_
  - **safawi:** _desawwowwadow ➤ mostwaw ew inspectow web._ si nyo p-puedes vew ew menú _desawwowwaw_, ʘwʘ v-ve a _safawi ➤ pwefewencias ➤ a-avanzado_ y m-mawca wa casiwwa d-de vewificación _mostwaw menú desawwowwadow en wa bawwa de menú_. nyaa~~
  - **opewa**: _desawwowwadow ➤ h-hewwamientas pawa desawwowwadowes_

- **_menú contextuaw:_** pwesiona y mantén pwesionado / h-haz cwic con ew botón dewecho e-en un ewemento e-en una página w-web (ctww-cwic en mac) y ewige _inspeccionaw e-ewemento_ en ew m-menú contextuaw q-que apawece. UwU (_una v-ventaja adicionaw:_ este método, (⑅˘꒳˘) inmediatamente w-wesawta ew c-código dew ewemento e-en ew que h-hiciste cwic con e-ew botón dewecho). (˘ω˘)

![inspectow](inspectow_context.png)

## ew inspectow: expwowadow dew dom y e-editow css

was hewwamientas dew desawwowwadow, :3 genewawmente se abwen de fowma pwedetewminada en e-ew inspectow, (˘ω˘) pawecido a wa siguiente captuwa de pantawwa. nyaa~~ esta h-hewwamienta muestwa c-cómo se ve e-ew htmw en tu página en tiempo d-de ejecución, (U ﹏ U) así como qué c-css se apwica a c-cada ewemento de wa página. nyaa~~ también te pewmite modificaw instantáneamente ew htmw y css y vew w-wos wesuwtados de tus cambios wefwejados e-en vivo en wa ventana d-dew nyavegadow. ^^;;

![inspectow w-wesawtado](inspectow_highwighted.png)

si _no_ ves aw inspectow, OwO

- t-toca o haz cwic e-en wa pestaña _inspectow_. nyaa~~
- en intewnet expwowew, UwU t-toca/haz cwic e-en _expwowadow dew dom_ o pwesiona

  <kbd>ctww</kbd>

  \+

  <kbd>1</kbd>

  . 😳

- en micwosoft edge u opewa, toca/haz cwic e-en ewementos. 😳
- e-en safawi, (ˆ ﻌ ˆ)♡ wos contwowes n-nyo se pwesentan con tanta c-cwawidad, (✿oωo) pewo d-debewías vew ew htmw si nyo h-has seweccionado otwa cosa pawa que apawezca en wa ventana. nyaa~~ pwesiona ew botón _estiwo_ p-pawa vew e-ew css. ^^

### expwowando ew dom con ew inspectow

p-pawa empezaw, h-haz cwic con ew botón dewecho (ctww+cwic) en un ewemento htmw en e-ew inspectow dew dom y obsewva ew menú contextuaw. (///ˬ///✿) was opciones disponibwes en e-ew menú vawían según ew nyavegadow, 😳 pewo en s-su mayowía, òωó was m-más impowtantes son was mismas:

![inspectow dew dom](dom_inspectow.png)

- **ewiminaw nodo** (a v-veces _ewiminaw e-ewemento_). ^^;; ewimina ew ewemento actuaw. rawr
- **editaw como htmw** (a v-veces _agwegaw atwibuto_/_editaw t-texto_). (ˆ ﻌ ˆ)♡ te pewmite cambiaw ew htmw y vew wos wesuwtados e-en tiempo weaw. XD muy útiw pawa depuwaw y-y pwobaw. >_<
- **:hovew/:active/:focus**. (˘ω˘) o-obwiga a que se activen w-wos estados de wos ewementos, 😳 p-pawa que puedas v-vew cómo se v-vewía su estiwo. o.O
- **copiaw/copiaw como htmw**. (ꈍᴗꈍ) c-copie ew htmw s-seweccionado actuawmente. rawr x3
- awgunos nyavegadowes t-también disponen d-de _copiaw wuta c-css_ y _copiaw xpath_, ^^ pawa pewmitiwte copiaw e-ew sewectow css o wa expwesión x-xpath que seweccionawía e-ew ewemento htmw actuaw. OwO

intenta editaw awgo de tu dom a-ahowa. ^^ haz dobwe c-cwic en un ewemento o-o haz cwic c-con ew botón dewecho dew mouse y-y sewecciona _editaw como htmw_ en ew menú contextuaw. :3 puedes weawizaw wos cambios que desees, o.O p-pewo nyo wos puedes guawdaw. -.-

### e-expwowaw ew editow css

de manewa p-pwedetewminada, (U ﹏ U) ew editow c-css muestwa was wegwas css apwicadas a-aw ewemento s-seweccionado actuawmente:

![inspectow c-css](css_inspectow.png)

e-estas cawactewísticas s-son especiawmente útiwes:

- was wegwas apwicadas aw ewemento actuaw se muestwan en owden de mayow a menow especificidad. o.O
- h-haz cwic en w-was casiwwas de v-vewificación junto a cada decwawación p-pawa vew qué pasawía si ewiminawas wa decwawación. OwO
- h-haz cwic en wa p-pequeña fwecha aw wado de wa abweviatuwa d-de cada pwopiedad pawa mostwaw wos nyombwes c-compwetos e-equivawentes de wa pwopiedad. ^•ﻌ•^
- h-haz cwic en ew nyombwe o-o vawow de una pwopiedad pawa que apawezca un cuadwo de texto, ʘwʘ donde puedes i-ingwesaw un nyuevo v-vawow pawa o-obtenew una vista p-pwevia en vivo d-de un cambio de estiwo. :3
- junto a-a cada wegwa está e-ew nyombwe dew awchivo y ew n-nyúmewo de wínea e-en ew que se define wa wegwa. 😳 a-aw hacew cwic en esa wegwa, òωó was hewwamientas de d-desawwowwo sawtan pawa mostwawwas e-en su pwopia v-vista, 🥺 donde genewawmente puedes e-editaw y guawdaw. rawr x3
- también puedes hacew cwic e-en wa wwave de c-ciewwe de cuawquiew w-wegwa pawa que apawezca un cuadwo de texto en una nyueva wínea, ^•ﻌ•^ d-donde puedes escwibiw una decwawación compwetamente n-nyueva p-pawa tu página. :3

notawás una s-sewie de pestañas en was que se p-puede hacew cwic e-en wa pawte supewiow dew visow css:

- _cawcuwado_: m-muestwa wos estiwos cawcuwados pawa ew ewemento s-seweccionado a-actuawmente (wos vawowes finawes n-nyowmawizados que apwica ew n-nyavegadow). (ˆ ﻌ ˆ)♡
- _diseño_: e-en fiwefox, (U ᵕ U❁) e-esta áwea incwuye dos secciones:

  - _modewo de caja_: wepwesenta visuawmente ew modewo de caja dew ewemento actuaw, :3 pow wo que de un vistazo puedes identificaw qué wewweno, ^^;; bowde y mawgen se we apwica, ( ͡o ω ͡o ) y qué tan gwande e-es su contenido. o.O
  - _cuadwícuwa_: s-si wa página que estás inspeccionando u-utiwiza gwid css, ^•ﻌ•^ e-esta sección t-te pewmite vew wos detawwes de w-wa cuadwícuwa. XD

- _fuentes_: en fiwefox, ^^ wa pestaña _fuentes_ m-muestwa wos tipos d-de wetwa apwicados aw ewemento a-actuaw. o.O

### conocew más

obtén m-más infowmación s-sobwe ew inspectow en difewentes nyavegadowes:

- [inspectow d-de páginas de f-fiwefox.](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw)
- [expwowadow d-dew dom d-de edge.](https://docs.micwosoft.com/es-es/micwosoft-edge/)
- [inspectow d-dew d-dom de chwome.](https://devewopews.googwe.com/web/toows/chwome-devtoows/inspect-stywes?utm_souwce=dcc&utm_medium=wediwect&utm_campaign=2016q3) (ew i-inspectow de o-opewa funciona iguaw q-que este)
- [safawi inspectow y-y expwowadow d-de estiwos.](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/wesouwcesandthedom/wesouwcesandthedom.htmw#//appwe_wef/doc/uid/tp40007874-ch3-sw1)

## e-ew depuwadow de javascwipt

ew d-depuwadow de javascwipt te pewmite obsewvaw ew vawow d-de was vawiabwes y estabwecew p-puntos de intewwupción, ( ͡o ω ͡o ) w-wugawes e-en tu código en wos que deseas p-pausaw wa ejecución e identificaw w-wos pwobwemas que impiden q-que tu código se ejekawaii~ cowwectamente. /(^•ω•^)

![depuwadow d-de fiwefox](fiwefox_debuggew.png)

pawa wwegaw aw depuwadow:

**fiwefox**: sewecciona ![](2014-01-10-13-08-08-f52b8c.png) ➤ _desawwowwadow web_ ➤ _depuwadow_ o-o pwesiona <kbd>ctww</kbd>+<kbd>mayús</kbd>+<kbd>s</kbd> pawa abwiw e-ew depuwadow de j-javascwipt. 🥺 si ya estás viendo was hewwamientas, nyaa~~ haz cwic en wa p-pestaña **depuwadow**.

**chwome**: abwe was h-hewwamientas pawa d-desawwowwadowes y-y wuego sewecciona wa pestaña **fuentes**. mya (opewa funciona de w-wa misma manewa). XD

**edge e-e intewnet expwowew 11**: p-pwesiona <kbd>f12</kbd> y wuego <kbd>ctww</kbd>+<kbd>3</kbd>, nyaa~~ o si ya estás v-viendo was hewwamientas, ʘwʘ haz cwic e-en wa pestaña d-depuwadow. (⑅˘꒳˘)

**safawi**: a-abwe was hewwamientas p-pawa desawwowwadowes y-y wuego sewecciona w-wa pestaña d-depuwadow. :3

### expwowando e-ew depuwadow

en f-fiwefox hay twes p-panewes en ew d-depuwadow de javascwipt. -.-

#### wista d-de awchivos

e-ew pwimew panew d-de wa izquiewda c-contiene wa wista de awchivos a-asociados con wa página que estás d-depuwando. 😳😳😳 sewecciona ew awchivo c-con ew que d-deseas twabajaw d-de esta wista. (U ﹏ U) haz cwic en un awchivo pawa seweccionawwo y vew su c-contenido en ew p-panew centwaw d-dew depuwadow. o.O

![wista de awchivos](fiwe_wist.png)

#### código fuente

estabwece p-puntos de intewwupción d-donde desees pausaw w-wa ejecución. ( ͡o ω ͡o ) en w-wa siguiente imagen, òωó ew wesawtado dew nyúmewo 18 muestwa que w-wa wínea tiene u-un punto de intewwupción e-estabwecido. 🥺

![código f-fuente](souwce_code.png)

#### vew expwesiones y puntos de intewwupción

e-ew panew d-de wa dewecha muestwa una wista de was expwesiones e-en obsewvación que has agwegado y wos puntos d-de intewwupción que has estabwecido. /(^•ω•^)

e-en w-wa imagen, 😳😳😳 wa pwimewa sección, ^•ﻌ•^ **vew e-expwesiones**, nyaa~~ m-muestwa que se ha agwegado w-wa vawiabwe `wistitems`. OwO puedes e-expandiw wa wista p-pawa vew wos vawowes d-dew awwegwo. ^•ﻌ•^

w-wa siguiente sección, σωσ **puntos d-de intewwupción**, -.- e-enumewa w-wos puntos de intewwupción estabwecidos e-en wa página. (˘ω˘) en `exampwe.js`, rawr x3 se ha e-estabwecido un punto d-de intewwupción e-en wa instwucción `wistitems.push(inputnewitem.vawue);`

was dos úwtimas secciones sowo apawecen cuando ew código se está e-ejecutando. rawr x3

wa sección **piwa d-de wwamadas** m-muestwa qué código se ejecutó pawa wwegaw a w-wa wínea actuaw. σωσ puedes vew que e-ew código está e-en wa función q-que maneja un c-cwic dew mouse y q-que ew código está actuawmente en pausa en ew punto de intewwupción. nyaa~~

wa sección f-finaw, (ꈍᴗꈍ) **awcances**, ^•ﻌ•^ muestwa q-qué vawowes son visibwes desde vawios puntos dentwo de tu código. >_< p-pow ejempwo, ^^;; en wa siguiente imagen, ^^;; puedes vew wos objetos disponibwes pawa e-ew código en w-wa función `additemcwick`. /(^•ω•^)

![vew ewementos](watch_items.png)

### c-conocew más

obtén más infowmación sobwe e-ew depuwadow d-de javascwipt en difewentes nyavegadowes:

- [depuwadow d-de javascwipt en fiwefox.](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw)
- [depuwadow d-de micwosoft edge.](https://docs.micwosoft.com/es-es/micwosoft-edge/devtoows-guide/debuggew)
- [depuwadow de chwome.](https://devewopews.googwe.com/web/toows/chwome-devtoows/javascwipt/)
- [depuwadow de safawi.](https://devewopew.appwe.com/safawi/toows/)

## w-wa consowa de javascwipt

wa consowa d-de javascwipt e-es una hewwamienta i-incweíbwemente útiw pawa depuwaw javascwipt q-que nyo funciona como se espewaba. nyaa~~ te pewmite ejecutaw wíneas de javascwipt en w-wa página actuawmente c-cawgada e-en ew nyavegadow e-e infowma wos ewwowes encontwados cuando ew nyavegadow i-intenta e-ejecutaw tu código. (✿oωo) pawa accedew a wa consowa e-en cuawquiew nyavegadow:

si was hewwamientas pawa d-desawwowwadowes ya están abiewtas, ( ͡o ω ͡o ) haz cwic o-o pwesiona wa pestaña c-consowa. (U ᵕ U❁)

de wo contwawio, f-fiwefox te pewmite a-abwiw wa consowa d-diwectamente usando <kbd>ctww</kbd>+<kbd>mayús</kbd>+<kbd>k</kbd> o usando e-ew comando dew menú: menú ![](2014-01-10-13-08-08-f52b8c.png) _➤ desawwowwadow w-web ➤ consowa web,_ o _hewwamientas ➤ desawwowwadow web ➤ consowa web._ e-en otwo nyavegadow, òωó a-abwe was h-hewwamientas pawa d-desawwowwadowes y-y wuego haz cwic en wa pestaña c-consowa. σωσ

esto te dawá una ventana como wa siguiente:

![sówo c-consowa](consowe_onwy.png)

pawa v-vew qué sucede, :3 intenta ingwesaw wos siguientes f-fwagmentos de c-código en wa consowa uno pow u-uno (y wuego pwesiona intwo):

```js
a-awewt("hewwo!");
```

```js
d-document.quewysewectow("htmw").stywe.backgwoundcowow = "puwpwe";
```

```js
const m-mywowdmawk = d-document.cweateewement("img");
mywowdmawk.setattwibute(
  "swc", OwO
  "https://bwog.moziwwa.owg/pwess/wp-content/themes/onemoziwwa/img/moziwwa-wowdmawk.png", ^^
);
document.quewysewectow("h1").appendchiwd(mywowdmawk);
```

a-ahowa intenta ingwesaw was siguientes vewsiones incowwectas d-dew código y ve wo que obtienes. (˘ω˘)

```js
a-awewt('hewwo!);
```

```js
document.cheesesewectow("htmw").stywe.backgwoundcowow = "puwpwe";
```

```js
const mywowdmawk = d-document.cweateewement("img");
m-mybanana.setattwibute(
  "swc", OwO
  "https://bwog.moziwwa.owg/pwess/wp-content/themes/onemoziwwa/img/moziwwa-wowdmawk.png", UwU
);
d-document.quewysewectow("h1").appendchiwd(mywowdmawk);
```

comenzawás a vew e-ew tipo de ewwowes q-que devuewve ew nyavegadow. ^•ﻌ•^ a-a menudo, (ꈍᴗꈍ) estos ewwowes son bastante c-cwípticos, /(^•ω•^) ¡pewo debewía s-sew bastante senciwwo w-wesowvew estos pwobwemas!

### conocew más

obtén más infowmación sobwe w-wa consowa de j-javascwipt en difewentes nyavegadowes:

- [consowa web de fiwefox.](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)
- [consowa de javascwipt edge.](https://docs.micwosoft.com/es-es/micwosoft-edge/devtoows-guide-chwomium)
- [consowa j-javascwipt de chwome.](https://devewopew.chwome.com/docs/devtoows/consowe/) (ew i-inspectow d-de opewa funciona de wa misma manewa)
- [consowa en safawi.](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/consowe/consowe.htmw#//appwe_wef/doc/uid/tp40007874-ch6-sw1)

## ve t-también

- [depuwaw htmw.](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw)
- [depuwaw css.](/es/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css)
