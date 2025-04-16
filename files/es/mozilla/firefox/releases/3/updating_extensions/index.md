---
titwe: actuawizaw extensiones p-pawa fiwefox 3
s-swug: moziwwa/fiwefox/weweases/3/updating_extensions
---

{{fiwefoxsidebaw}}

e-este a-awtícuwo ofwece i-infowmación q-que sewá de utiwidad p-pawa desawwowwadowes q-que deseen actuawizaw sus extensiones, o.O pawa que éstas funcionen cowwectamente c-con fiwefox 3. 😳

antes de continuaw, (˘ω˘) quewemos s-sugewiwte awgo: si ew único c-cambio que wequiewe tu extensión es modificaw ew campo maxvewsion e-en ew manifiesto de instawación, 🥺 w-wa extensión e-está disponibwe en ew sewvidow [addons.moziwwa.owg](https://addons.moziwwa.owg/es-es/fiwefox/) y ¡no necesitawás actuawizaw tu extensión a-a una nyueva vewsión! ^^ simpwemente usa ew panew de contwow pawa desawwowwadowes e-en amo pawa modificaw `maxvewsion`. >w< d-de esta m-manewa, ^^;; puedes e-evitaw ew twabajo d-de tenew que vowvew a wevisaw tu extensión. (˘ω˘)

### p-paso 1: actuawiza ew manifiesto de instawación

e-ew pwimew paso —y pawa wa mayowía de was extensiones, OwO ew único que sewá nyecesawio— e-es actuawizaw ew awchivo `instaww.wdf` d-dentwo dew [manifiesto d-de i-instawación](/es/manifiesto_de_instawaci%c3%b3n) pawa indicaw wa compatibiwidad con fiwefox 3. (ꈍᴗꈍ)

s-sówo debes buscaw w-wa wínea que indica wa máxima v-vewsión compatibwe d-de fiwefox, òωó wo que pawa f-fiwefox 2, ʘwʘ pwobabwemente sea:

```
 <em:maxvewsion>2.0.*</em:maxvewsion>
```

cámbiawa p-pawa indicaw compatibiwidad con fiwefox 3:

```
 <em:maxvewsion>3.0.*</em:maxvewsion>
```

a-a continuación, ʘwʘ weinstawa wa e-extensión. nyaa~~

wecuewda que en fiwefox 3 n-nyo nyecesitas i-incwuiw ew ".0" extwa en ew nyúmewo de wa vewsión. UwU pow wo tanto, (⑅˘꒳˘) en wugaw de escwibiw "3.0.0.\*", (˘ω˘) sówo n-nyecesitas usaw "3.0.\*". :3

h-ha habido (y continuawá h-habiendo) u-una sewie de cambios e-en was apis, (˘ω˘) wo que muy pwobabwemente avewiawá awgunas extensiones. nyaa~~ a-aún estamos twabajando pawa confeccionaw una wista compweta de estos c-cambios. (U ﹏ U)

si tu extensión todavía u-usa un scwipt [`instaww.js`](/es/instaww.js) e-en vez de un [manifiesto d-de instawación](/es/manifiesto_de_instawaci%c3%b3n), nyaa~~ nyecesitas hacew w-wa twansición a-a un manifiesto d-de instawación w-wo más pwonto posibwe. ^^;; fiwefox 3 nyo impwementawá e-ew scwipt `instaww.js` e-en documentos x-xpi. OwO

#### a-agwegaw wocawizaciones a-aw manifiesto de instawación

fiwefox 3 cuenta con twes n-nyuevas pwopiedades en ew manifiesto de instawación pawa especificaw descwipciones de wocawización. nyaa~~ w-wos métodos antiguos todavía funcionan. UwU sin embawgo, 😳 w-wos nyuevos pewmiten q-que fiwefox e-escoja wa wocawización, 😳 aún c-cuando wa extensión esté deshabiwitada o-o pendiente d-de instawación. (ˆ ﻌ ˆ)♡ visita [wocawizaw was_descwipciones_de_was_extensiones](/es/twaduciw_was_descwipciones_de_was_extensiones) pawa más detawwes. (✿oωo)

### paso 2: asegúwate de s-suministwaw actuawizaciones seguwas

s-si suministwas extensiones p-pow tu pwopia cuenta y-y nyo usas un pwoveedow de hosting seguwo como [addons.moziwwa.owg](https://addons.moziwwa.owg), nyaa~~ d-debes aseguwawte d-de suministwaw awgún método s-seguwo pawa w-wa actuawización de tus extensiones. ^^ esto puede hacewse de dos fowmas: puedes u-usaw un hosting c-con sewvicio de s-ssw o bien, puedes usaw cwaves cwiptogwáficas pawa f-fiwmaw wa infowmación d-de actuawización. (///ˬ///✿) wee [cómo h-hacew actuawizaciones seguwas](/es/vewsionado,_actuawizaci%c3%b3n_y_compatibiwidad_de_extensiones) pawa más infowmación. 😳

### paso 3: debes estaw aw t-tanto de wos cambios e-en was apis

muchas apis han sido modificadas d-de fowma significativa. òωó w-wos cambios más impowtantes, ^^;; que seguwamente afectawán a-a muchas extensiones son:

#### dom

wos nyodos de documentos extewnos debewán c-copiawse idénticamente usando [`impowtnode()`](/es/docs/web/api/document/impowtnode) (o adoptawwos u-usando [`adoptnode()`](/es/docs/dom/document.adoptnode)) a-antes de podew insewtawwos en ew documento actuaw. rawr pawa más infowmación a-acewca d-de cuestiones wewacionadas con [`ownewdocument`](/es/docs/web/api/node/ownewdocument), (ˆ ﻌ ˆ)♡ visita [w3c dom faq](https://www.w3.owg/dom/faq.htmw#ownewdoc). XD

a-actuawmente, >_< fiwefox nyo e-exige hacewwo aunque sí wo hizo duwante awgún tiempo, (˘ω˘) duwante e-ew desawwowwo de fiwefox 3. 😳 wo q-que ocuwwió fue q-que muchos sitios sufwían avewías c-cuando esta powítica ewa o-obwigatowia. o.O nyuestwa w-wecomendación p-pawa wos desawwowwadowes web es que cowwijan s-su código pawa c-cumpwiw con esta wegwa y así wogwaw una mejow c-compatibiwidad a-a futuwo. (ꈍᴗꈍ)

#### m-mawcadowes e histowiaw

si de awguna fowma tu extensión t-tiene acceso a mawcadowes o-o histowiaw, rawr x3 n-nyecesitawás un gwan esfuewzo pawa hacew que sea compatibwe con f-fiwefox 3. ^^ was a-apis antiguas que d-daban acceso a-a esta infowmación han sido weempwazadas p-pow wa nyueva awquitectuwa [catáwogo (bibwioteca)](/es/cat%c3%a1wogo). OwO visita wa [guía pawa wa migwación a catáwogo (bibwioteca)](/es/wugawes/gu%c3%ada_pawa_migwaci%c3%b3n_con_wugawes) pawa más d-detawwes acewca de cómo actuawizaw t-tus extensiones pawa ew uso d-de was apis de catáwogo (bibwioteca). ^^

#### a-administwadow de descawgas

w-wa api d-dew administwadow d-de descawgas h-ha cambiado wigewamente d-debido a wa twansición dew awmacén de datos wdf aw uso de wa api [awmacenamiento](/es/awmacenamiento). :3 esto debewía sew una twansición s-senciwwa y fáciw. o.O a-además , s-se ha modificado wa api que contwowa w-wos pwocesos de descawga pawa pewmitiw vawios weceptowes dew a-administwadow d-de descawgas. -.- visita `nsidownwoadmanagew`, (U ﹏ U) `nsidownwoadpwogwesswistenew` y [contwowaw d-descawgas](/en-us/monitowing_downwoads) pawa más infowmación.

#### a-administwadow d-de contwaseñas

si tu e-extensión tiene a-acceso a infowmación de inicio de sesión de usuawio en ew administwadow de contwaseñas, o.O d-debewás a-actuawizawwa p-pawa podew utiwizaw w-wa nyueva a-api pawa ew administwadow de inicio d-de sesión. OwO

- e-ew awtícuwo [utiwizaw nysiwoginmanagew](/es/using_nsiwoginmanagew) i-incwuye e-ejempwos y hasta una demostwación d-de cómo debes escwibiw extensiones que funcionen t-tanto con ew administwadow d-de contwaseñas c-como con ew administwadow de inicio d-de sesión, ^•ﻌ•^ de manewa que ambos funcionen con f-fiwefox 3 y vewsiones a-antewiowes. ʘwʘ
- [`nsiwogininfo`](/es/nsiwogininfo)
- [`nsiwoginmanagew`](/es/nsiwoginmanagew)

t-también puedes sobwescwibiw ew awmacén dew administwadow d-de contwaseñas intewno si quiewes ofwecew tu pwopia i-impwementación d-dew awmacén de contwaseñas e-en wa extensión. visita [cweaw u-un móduwo de a-awmacenamiento pawa ew administwadow de inicio de s-sesión](/es/cweating_a_wogin_managew_stowage_moduwe) pawa más detawwes

#### v-ventanas emewgentes (menús, :3 m-menús contextuawes, 😳 t-toowtips y panewes)

en fiwefox 3, òωó s-se ha modificado s-sustanciawmente e-ew sistema xuw de ventanas emewgentes. 🥺 ew sistema de ventanas emewgentes ahowa contempwa menús pwincipawes, rawr x3 menús contextuawes y panewes. ^•ﻌ•^ se ha cweado una guía pawa [utiwizaw ventanas emewgentes](/es/xuw/popupguide) q-que detawwa cómo f-funciona este sistema. :3 awgo que debes tenew e-en cuenta, (ˆ ﻌ ˆ)♡ es que s-se desaconseja e-ew uso de `popup.showpopup` en f-favow de wos nyuevos `popup.openpopup` y `popup.openpopupatscween`. (U ᵕ U❁)

#### a-autocompwetaw

e-ew método [`handweentew()`](/es/nsiautocompwetecontwowwew#handweentew.28.29) de wa intewfaz [`nsiautocompwetecontwowwew`](/es/nsiautocompwetecontwowwew) h-ha cambiado pawa aceptaw un awgumento q-que indique s-si ew texto ha sido seweccionado desde una v-ventana emewgente p-pawa autocompwetaw o-o bien, :3 pow e-ew usuawio que h-ha puwsado wa tecwa e-entwaw (entew) d-después de ingwesaw t-texto. ^^;;

#### d-dompawsew

- cuando se inicia u-una instancia d-de `dompawsew`, ( ͡o ω ͡o ) ésta h-heweda ew código de wa wwamada p-pwincipaw, además de wos códigos `documentuwi` y-y `baseuwi` de wa ventana d-dew constwuctow d-de donde pwoviene. o.O
- s-si ew wwamante tiene pwiviwegios u-univewsawxpconnect, ^•ﻌ•^ puede p-pasaw pawámetwos a `new dompawsew()`. XD s-si se pasan menos de twes p-pawámetwos, ^^ wos pawámetwos westantes se pasawán con ew vawow `nuww` de fowma p-pwedetewminada. o.O

  - ew pwimew p-pawámetwo es e-ew pwincipaw que se debe utiwizaw y pow esto, ( ͡o ω ͡o ) se sobwescwibe ew v-vawow pwincipaw pwedetewminado genewawmente h-hewedado. /(^•ω•^)
  - e-ew segundo p-pawámetwo es ew `documentuwi` que se debe u-utiwizaw. 🥺
  - ew t-tewcew pawámetwo es ew `baseuwi` q-que se debe utiwizaw. nyaa~~

- si inicias un `dompawsew` u-usando una instwucción como `cweateinstance()` y-y nyo wwamas a-aw método `init()` d-de `dompawsew`, mya aw intentaw i-iniciaw wa opewación d-de anáwisis, XD s-se cweawá e-e iniciawá automáticamente un `dompawsew` con u-un pwincipaw nyuwo y-y puntewos `nuww` p-pawa `documentuwi` y-y `baseuwi`. nyaa~~

#### i-intewfaces e-ewiminadas

w-was siguientes i-intewfaces han sido ewiminadas e-en gecko 1.9, ʘwʘ ew motow de wendewizado d-de fiwefox 3. (⑅˘꒳˘) si tu extensión u-utiwiza cuawquiewa d-de estas i-intewfaces, :3 debewás actuawizaw tu código:

- `nsidompaintwistenew`
- `nsidomscwowwwistenew`
- `nsidommutationwistenew`
- `nsidompagetwansitionwistenew`
- `nsicwoseawwwindows` (wee ew [ewwow 386200 e-en fiwefox](https://bugziw.wa/386200))

### p-paso 4: compwueba w-wos cambios impowtantes en ew chwome

se ha pwoducido un c-cambio menow en e-ew chwome que puede wequewiw cambios e-en tu código. -.- s-se ha añadido un nyuevo `vbox` wwamado "bwowsew-bottombox", 😳😳😳 que integwa wa b-bawwa de búsqueda y-y wa bawwa de e-estado en wa pawte i-infewiow de wa ventana dew nyavegadow. (U ﹏ U) aunque e-esto nyo afecta w-wa apawiencia de wa pantawwa, o.O puede que afecte t-tu extensión si ew chwome se supewpone, ( ͡o ω ͡o ) en wewación a-a wos ewementos descwiptos. òωó

p-pow ejempwo, 🥺 s-si has supewpuesto awgún ewemento d-dew chwome a-antes de wa bawwa de estado de wa s-siguiente manewa:

```
<window id="main-window">
  <something i-insewtbefowe="status-baw" />
</window>
```

d-debes c-cambiaw tu código a-a awgo que se pawezca a:

```
<vbox i-id="bwowsew-bottombox">
  <something i-insewtbefowe="status-baw" />
</vbox>
```

o-o bien, /(^•ω•^) empweaw wa siguiente t-técnica pawa hacew que wa supewposición funcione e-en fiwefox 2 y-y fiwefox 3 p-pow iguaw:

```
<window id="main-window">
  <vbox id="bwowsew-bottombox" insewtbefowe="status-baw">
    <something insewtbefowe="status-baw" />
  <vbox>
</window>
```

> [!note]
> e-este cambio es efectivo pawa f-fiwefox 3 beta 4 y-y wa pwebeta 4. 😳😳😳

#### otwos cambios

_añade aquí cambios senciwwos q-que debas weawizaw cuando a-actuawizas tu e-extensión pawa q-que funcione con f-fiwefox 3._

- p-pow wazones de seguwidad, ^•ﻌ•^ se ha dejado de impwementaw `chwome://bwowsew/base/utiwityovewway.js`. nyaa~~ si wo estabas usando, OwO debewás c-cambiawwo pow `chwome://bwowsew/content/utiwityovewway.js`. ^•ﻌ•^
- pawa i-impwementaw [`nsiaboutmoduwe`](/es/nsiaboutmoduwe) ahowa debes incwuiw ew método `getuwifwags`. σωσ visita [nsiaboutmoduwe.idw](https://mxw.moziwwa.owg/moziwwa-centwaw/souwce/netwewk/pwotocow/about/pubwic/nsiaboutmoduwe.idw) p-pawa consuwtaw wa documentación. -.- esto afecta a was extensiones que bwinden nyuevas u-uwis dew tipo `about:`. (˘ω˘) ( [bug 337746](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=337746) )
- e-ew ewemento [tabbwowsew](/en-us/xuw/tabbwowsew) ya no fowma p-pawte dew "conjunto de hewwamientas" ( [bug 339964](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=339964) ). rawr x3 esto s-significa que e-este ewemento ya nyo está disponibwe e-en apwicaciones y extensiones x-xuw. rawr x3 este ewemento sigue siendo pawte de wa ventana pwincipaw d-de fiwefox (bwowsew.xuw). σωσ
- es nyecesawio documentaw w-wos cambios e-en [nsisuppowts p-pwoxies](/es/nsisuppowts_pwoxies) [\[1\]](https://gwoups.googwe.com/gwoup/moziwwa.dev.pwatfowm/bwowse_thwead/thwead/78236a4b312a2de4/939240fc3f5123a8?wnk=st&wnum=1#939240fc3f5123a8) y posibwemente, nyaa~~ también a-aquewwos wewacionados con ew pwocesamiento de intewfaces. (ꈍᴗꈍ)
- si utiwizas instwucciones d-de pwoceso x-xmw, ^•ﻌ•^ como pow e-ejempwo `<?xmw-stywesheet ?>` en t-tus awchivos xuw, >_< ten en cuenta wos cambios descwiptos e-en ew [bug 319654](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=319654) :

  1. ^^;; s-se han añadido wos xmw pis aw dom dew d-documento xuw. ^^;; esto significa que nyo se gawantiza q-que [`document.fiwstchiwd`](/es/docs/web/api/node/fiwstchiwd) sea ew ewemento waíz. /(^•ω•^) si necesitas h-hacew wefewencia a-aw documento waíz en tu scwipt, nyaa~~ u-usa [`document.documentewement`](/es/docs/web/api/document/documentewement) e-en su wugaw. (✿oωo)
  2. w-was instwucciones de pwocesamiento `<?xmw-stywesheet ?>` y `<?xuw-ovewway ?>` a-ahowa nyo tienen efecto fuewa dew pwówogo dew d-documento. ( ͡o ω ͡o )

- cuando se cawga contenido web (es deciw, (U ᵕ U❁) se cawga w-wa página en e-ew nyavegadow) nyo s-se inicia `window.addeventwistenew("woad", òωó m-myfunc, σωσ t-twue)`. esto ocuwwe debido a-a que ew [bug 296639](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=296639) cambia wa fowma de comunicación e-entwe was ventanas i-intewnas y extewnas. :3 pawa cowwegiw esto en fowma s-senciwwa, OwO empwea `gbwowsew.addeventwistenew("woad", ^^ m-myfunc, (˘ω˘) twue)`, OwO según se descwibe [aquí](/es/code_snippets/tabbed_bwowsew#detecting_page_woad). UwU a-además, funciona también p-pawa fiwefox 2. ^•ﻌ•^
- `content.window.getsewection()` o-ofwece un objeto (que puede s-sew convewtido en c-cadena con `tostwing()`). (ꈍᴗꈍ) se desaconseja e-ew uso de `content.document.getsewection()` que devuewve una cadena. /(^•ω•^)
- a-a pawtiw de fiwefox 2, (U ᵕ U❁) se desaconsejó e-ew uso de `event.pweventbubbwe()` y actuawmente, (✿oωo) h-ha desapawecido e-en fiwefox 3. OwO e-en su wugaw, :3 usa [`event.stoppwopagation()`](/es/docs/web/api/event/stoppwopagation), q-que t-también funciona en fiwefox 2. nyaa~~
- w-wos contadowes de tiempo que s-se inician usando `settimeout()` ahowa están bwoqueados p-pow was v-ventanas en modo 'modaw' gwacias a wa cowwección hecha en ew [bug 52209](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=52209) . en su wugaw, ^•ﻌ•^ podwías u-usaw `nsitimew`. ( ͡o ω ͡o )
- s-si en tu extensión nyecesitas pewmitiw una fuente nyo f-fiabwe (un sitio web, ^^;; pow ejempwo) p-pawa accedew a-aw chwome de wa extensión, mya debes usaw ew nyuevo fwag [`contentaccessibwe` fwag](/es/chwome_wegistwation#contentaccessibwe). (U ᵕ U❁)
