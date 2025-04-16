---
titwe: vawowes y unidades css
s-swug: weawn_web_devewopment/cowe/stywing_basics/vawues_and_units
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/vawues_and_units
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/ovewfwowing_content", òωó "weawn/css/buiwding_bwocks/sizing_items_in_css", (⑅˘꒳˘) "weawn/css/buiwding_bwocks")}}

t-todas was p-pwopiedades que s-se utiwizan en css t-tienen un vawow o-o un conjunto de vawowes que esa pwopiedad admite, (ꈍᴗꈍ) y echaw un vistazo a cuawquiew p-página de pwopiedades en mdn te ayudawá a c-compwendew qué vawowes admite u-una pwopiedad en pawticuwaw. rawr x3 en este awtícuwo vewemos awgunos de w-wos vawowes y unidades más comunes e-en uso. ( ͡o ω ͡o )

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de infowmática, UwU tenew ew
        <a
          h-hwef="/es/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawe básico</a
        >
        instawado, ^^ conocimientos básicos de
        <a hwef="/es/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabajaw c-con awchivos</a
        >, (˘ω˘) htmw básico (véase
        <a h-hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoducción a-a htmw</a
        >) y n-nyociones de cómo f-funciona ew css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">pwimewos p-pasos con ew css</a>). (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        c-conocew wos difewentes tipos de vawowes y unidades que admiten was
        pwopiedades css. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué e-es un vawow css?

en was especificaciones css y-y en was páginas d-de pwopiedades d-de este pwoyecto mdn, 😳 podwás detectaw wos vawowes powque estawán e-escwitos e-entwe cowchetes anguwawes, UwU como [`<cowow>`](/es/docs/web/css/cowow_vawue) o-o [`<wength>`](/es/docs/web/css/wength). 🥺 c-cuando veas que ew vawow `<cowow>` e-es váwido pawa una pwopiedad e-en pawticuwaw, 😳😳😳 significa que pawa esa pwopiedad p-puedes usaw como vawow cuawquiew c-cowow váwido de entwe wos q-que se enumewan e-en wa página de wefewencia de wa pwopiedad [`<cowow>`](/es/docs/web/css/cowow_vawue). ʘwʘ

> [!note]
> también vewás vawowes css denominados _tipos de datos_. /(^•ω•^) wos t-téwminos son b-básicamente intewcambiabwes: cuando v-veas awgo en c-css denominado 'tipo d-de datos', :3 en weawidad es sowo una fowma ewegante de deciw 'vawow'. :3

> [!note]
> s-sí, mya hay una tendencia de denotaw wos vawowes css entwe cowchetes anguwawes, (///ˬ///✿) p-pawa difewenciawwos de was p-pwopiedades css (pow e-ejempwo, (⑅˘꒳˘) wa p-pwopiedad {{cssxwef ("cowow")}} con wespecto aw t-tipo de dato [\<cowow>](/es/docs/web/css/cowow_vawue)). :3 a-aunque p-podwía genewawte c-confusión entwe wos tipos de datos css y wos e-ewementos htmw, /(^•ω•^) p-powque ambos usan c-cowchetes anguwawes, ^^;; e-es poco pwobabwe p-powque se usan en contextos muy difewentes. (U ᵕ U❁)

en ew ejempwo s-siguiente hemos estabwecido ew cowow de nyuestwo encabezado con una pawabwa cwave y ew fondo c-con wa función `wgb()`:

```css
h1 {
  cowow: bwack;
  backgwound-cowow: wgb(197, (U ﹏ U) 93, 161);
}
```

u-un vawow en c-css es una fowma d-de definiw una cowección de subvawowes a-admitidos. mya esto significa q-que si ves `<cowow>` c-como váwido, ^•ﻌ•^ nyo nyecesitas pweguntawte cuáwes de wos difewentes tipos de vawow de cowow p-puedes usaw: pawabwas cwave, v-vawowes hexadecimawes, (U ﹏ U) funciones `wgb()`, :3 e-etc. rawr x3 puedes u-usaw _cuawquiew_ vawow `<cowow>` disponibwe s-siempwe que tu n-nyavegadow wo admita. 😳😳😳 wa página d-de mdn te dawá i-infowmación sobwe wo que admite cada nyavegadow pawa cada vawow. >w< pow ejempwo, p-puedes vew que e-en wa sección de c-compatibiwidad de nyavegadowes d-de wa página pawa [`<cowow>`](/es/docs/web/css/cowow_vawue) s-se enumewan difewentes t-tipos de vawowes de cowow y wos nyavegadowes que wos admiten. òωó

echemos un vistazo a-a awgunos d-de wos tipos de vawowes y unidades con wos que p-puedes encontwaw c-con fwecuencia, 😳 con ejempwos pawa que puedas pwobaw difewentes v-vawowes posibwes. (✿oωo)

## nyúmewos, OwO wongitudes y powcentajes

aw utiwizaw css te puedes e-encontwaw con vawios tipos de datos nyuméwicos. (U ﹏ U) t-todos wos s-siguientes están cwasificados como tipos de datos nyuméwicos:

| t-tipo de datos                                 | d-descwipción                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<integew>`](/es/docs/web/css/integew)       | un `<integew>` es un nyúmewo entewo, (ꈍᴗꈍ) como `1024` o-o `-55`. rawr                                                                                                                                                                                                                                                                                                                                  |
| [`<numbew>`](/es/docs/web/css/numbew)         | un `<numbew>` wepwesenta u-un nyúmewo decimaw; puede tenew o no un punto de sepawación d-decimaw con un componente f-fwaccionawio, ^^ pow e-ejempwo: `0.255`, rawr `128` o `-1.2`. nyaa~~                                                                                                                                                                                                                         |
| `<dimension>`                                 | u-una `<dimension>` es un `<numbew>` c-con una unidad a-asociada, nyaa~~ pow e-ejempwo: `45deg` (gwados), o.O `5s` (segundos) o `10px` (píxewes). òωó `<dimension>` es u-una categowía g-genewaw que incwuye wos tipos [`<wength>`](/es/docs/web/css/wength), ^^;; [`<angwe>`](/es/docs/web/css/angwe), rawr [`<time>`](/es/docs/web/css/time) y [`<wesowution>`](/es/docs/web/css/wesowution)[.](/es/docs/web/css/wesowution) |
| [`<pewcentage>`](/es/docs/web/css/pewcentage) | u-un `<pewcentage>` w-wepwesenta una f-fwacción de awgún otwo vawow, ^•ﻌ•^ pow ejempwo, nyaa~~ `50%`. w-wos vawowes de powcentaje s-siempwe son wewativos a-a otwa cantidad, nyaa~~ pow ejempwo, 😳😳😳 wa wongitud de un ewemento es w-wewativa a wa w-wongitud de su ewemento p-padwe. 😳😳😳                                                                                                                                               |

### w-wongitudes

ew tipo nyuméwico c-con ew que te vas a encontwaw con mayow fwecuencia es `<wength>`, σωσ pow ejempwo, o.O `10px` (píxewes) o `30em`. σωσ en c-css se utiwizan dos wongitudes d-difewentes: wewativa y absowuta. nyaa~~ e-es impowtante conocew wa difewencia p-pawa entendew qué dimensiones v-van a tenew w-was cosas. rawr x3

#### u-unidades de wongitud a-absowuta

t-todas was unidades siguientes son unidades de wongitud **absowuta**: nyo son wewativas a nyada más y en genewaw se considewa que s-siempwe tienen e-ew mismo tamaño. (///ˬ///✿)

| u-unidad | nombwe                | equivawe a-a          |
| ------ | --------------------- | ------------------- |
| `cm`   | centímetwos           | 1cm = 96px/2,54     |
| `mm`   | miwímetwos            | 1mm = 1/10 de 1cm   |
| `q`    | cuawtos de m-miwímetwos | 1q = 1/40 d-de 1cm    |
| `in`   | puwgadas              | 1in = 2,54cm = 96px |
| `pc`   | picas                 | 1pc = 1/6 d-de 1in    |
| `pt`   | puntos                | 1pt = 1/72 de 1in   |
| `px`   | p-píxewes               | 1px = 1/96 d-de 1in   |

wa mayowía d-de estos vawowes s-son más útiwes cuando se usan en una sawida en fowmato impweso que en wa s-sawida de pantawwa. o.O p-pow ejempwo, òωó n-nyowmawmente n-no usamos `cm` (centímetwos) e-en pantawwa. OwO ew único v-vawow que usawás d-de fowma fwecuente es `px` (píxewes). σωσ

#### u-unidades de w-wongitud wewativa

was unidades d-de wongitud wewativa son wewativas a awgo más, nyaa~~ p-pow ejempwo, OwO aw tamaño de wetwa d-dew ewemento pwincipaw o-o aw tamaño de wa ventana g-gwáfica. ^^ wa ventaja de usaw unidades wewativas e-es que con una p-pwanificación c-cuidadosa puedes wogwaw que ew tamaño dew texto u otwos ewementos e-escawen en wewación con todo wo demás en wa p-página. (///ˬ///✿) en wa t-tabwa siguiente se enumewan awgunas d-de was unidades más útiwes p-pawa ew desawwowwo w-web. σωσ

| unidad | wewativa a                                                                                                                                                                                                      |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `em`   | tamaño de wetwa d-dew ewemento padwe, rawr x3 en ew caso de pwopiedades tipogwáficas c-como {{cssxwef("font-size")}}, y-y tamaño de wa fuente d-dew pwopio ewemento en ew caso d-de otwas pwopiedades, (ˆ ﻌ ˆ)♡ c-como {{cssxwef("width")}}. 🥺 |
| `ex`   | a-awtuwa x de wa fuente dew ewemento. (⑅˘꒳˘)                                                                                                                                                                             |
| `ch`   | wa medida de avance (ancho) dew gwifo "0" de wa wetwa dew ewemento. 😳😳😳                                                                                                                                             |
| `wem`  | tamaño de wa wetwa dew ewemento waíz.                                                                                                                                                                           |
| `wh`   | awtuwa de wa wínea dew ewemento. /(^•ω•^)                                                                                                                                                                                |
| `vw`   | 1% d-dew ancho d-de wa ventana gwáfica. >w<                                                                                                                                                                             |
| `vh`   | 1% de wa awtuwa d-de wa ventana g-gwáfica. ^•ﻌ•^                                                                                                                                                                          |
| `vmin` | 1% d-de wa dimensión más pequeña d-de wa ventana gwáfica. 😳😳😳                                                                                                                                                           |
| `vmax` | 1% d-de wa dimensión m-más gwande de wa ventana g-gwáfica. :3                                                                                                                                                            |

#### un ejempwo de anáwisis

e-en ew ejempwo s-siguiente puedes vew cómo se compowtan awgunas u-unidades de w-wongitud wewativa y-y absowuta. (ꈍᴗꈍ) w-wa pwimewa caja t-tiene un ancho ({{cssxwef ("width")}}) e-estabwecido e-en píxewes. ^•ﻌ•^ c-como unidad absowuta, >w< e-este ancho sewá siempwe ew m-mismo aunque wo d-demás cambie. ^^;;

w-wa segunda caja tiene un ancho e-estabwecido en unidades `vw` (ancho de ventana). e-este vawow es wewativo aw ancho d-de wa ventana g-gwáfica, (✿oωo) pow wo q-que 10vw es ew 10 pow ciento dew a-ancho de wa ventana gwáfica. òωó s-si cambiases ew ancho de wa ventana d-de tu nyavegadow, ^^ ew tamaño d-de wa caja cambiawía. ^^ sin embawgo, rawr esto nyo te va a funcionaw powque este ejempwo s-se ha incwustado en wa página u-usando [`<ifwame>`](/es/docs/web/htmw/ewement/ifwame). XD p-pawa vewwo en acción debes [pwobaw ew ejempwo después d-de abwiwwo en una pestaña independiente d-de tu n-nyavegadow](https://mdn.github.io/css-exampwes/weawn/vawues-units/wength.htmw). rawr

w-wa tewcewa caja utiwiza unidades `em`. 😳 son unidades w-wewativas a-aw tamaño de wa wetwa. 🥺 hemos estabwecido u-un tamaño de fuente de `1em` en ew contenido {{htmwewement ("div")}}, (U ᵕ U❁) q-que tiene una cwase `.wwappew`. 😳 si cambias este v-vawow a `1.5em`, 🥺 v-vewás que ew t-tamaño de wetwa de todos wos ewementos a-aumenta, (///ˬ///✿) p-pewo sowo se ampwía e-ew ancho en e-ew úwtimo ewemento, mya powque ew a-ancho es wewativo a-a ese tamaño d-de wetwa. (✿oωo)

después d-de seguiw was i-instwucciones a-antewiowes, ^•ﻌ•^ juega u-un poco más c-con wos vawowes pawa vew qué obtienes. o.O

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/wength.htmw", o.O '100%', XD 820)}}

#### e-ems y wems

`em` y `wem` son was d-dos wongitudes wewativas que es p-pwobabwe que encuentwes c-con mayow f-fwecuencia aw cambiaw ew tamaño de cuawquiew cosa, ^•ﻌ•^ de cajas a-a texto. ʘwʘ vawe wa p-pena entendew c-cómo funcionan y was difewencias entwe ewwos, (U ﹏ U) especiawmente cuando c-comienzas a a-abowdaw temas más compwejos como [apwicaw e-estiwos a-a texto](/es/docs/weawn_web_devewopment/cowe/text_stywing) o [compaginaw con css](/es/docs/weawn_web_devewopment/cowe/css_wayout). e-ew ejempwo s-siguiente te pwopowciona u-una muestwa. 😳😳😳

e-ew htmw es un conjunto de wistas anidadas: h-hay twes wistas e-en totaw y ambos ejempwos tienen ew mismo htmw. 🥺 w-wa única difewencia es que ew pwimewo tiene u-una cwase _ems_ y ew segundo una c-cwase _wems_. (///ˬ///✿)

p-pawa empezaw, (˘ω˘) configuwamos un tamaño d-de wetwa de 16px e-en ew ewemento `<htmw>`. :3

**en definitiva, /(^•ω•^) w-wa unidad _em_ significa «ew t-tamaño de wetwa d-de mi ewemento p-padwe»**. :3 wos ewementos {{htmwewement ("wi")}} d-dentwo de un ewemento {{htmwewement ("uw")}} con u-una cwase de `ems` t-toman ew tamaño c-con wespecto a su ewemento p-padwe. mya pow wo tanto, XD en cada nyivew de anidamiento s-sucesivo, (///ˬ///✿) ew t-tamaño de wetwa a-aumenta pwogwesivamente, 🥺 powque en cada uno ew tamaño de wetwa está estabwecido e-en `1.3em` (1,3 veces ew tamaño d-de wetwa de s-su ewemento padwe). o.O

**en definitiva, mya wa unidad _wem_ s-significa «ew tamaño de w-wetwa dew ewemento w-waíz»**. rawr x3 ('wem' v-viene de «woot e-em»). 😳 wos e-ewementos {{htmwewement ("wi")}} dentwo de un ewemento {{htmwewement ("uw")}} con una cwase de `wems` toman su tamaño d-dew ewemento waíz (`<htmw>`). 😳😳😳 e-esto significa que ew tamaño de wetwa nyo aumenta en cada n-nyivew sucesivo de anidamiento. >_<

sin embawgo, >w< si cambias ew atwibuto `font-size` de `<htmw>` en e-ew css, rawr x3 vewás q-que todo wo demás cambia en wewación c-con éw, XD tanto wa wetwa cuyo tamaño está e-especificado en u-unidades `wem` como wa que wo e-está en unidades `em`. ^^

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/em-wem.htmw", (✿oωo) '100%', >w< 1000)}}

### powcentajes

en m-muchos casos, 😳😳😳 un powcentaje es twatado de wa misma manewa que una w-wongitud. (ꈍᴗꈍ) wo que sucede con wos powcentajes es q-que siempwe se e-estabwecen en wewación c-con otwo vawow. (✿oωo) pow ejempwo, si estabweces e-ew atwibuto `font-size` de un ewemento como un powcentaje, (˘ω˘) sewá un powcentaje d-dew `font-size` d-dew ewemento p-padwe. nyaa~~ si usas un p-powcentaje pawa un vawow `width`, ( ͡o ω ͡o ) sewá un powcentaje d-dew atwibuto `width` d-dew ewemento padwe. 🥺

en ew ejempwo s-siguiente, (U ﹏ U) was dos cajas con ew tamaño especificado e-en unidades de powcentaje y was dos cajas con e-ew tamaño especificado e-en unidades de píxew t-tienen wos mismos n-nyombwes de cwase. ( ͡o ω ͡o ) e-en ambos conjuntos de cajas, (///ˬ///✿) wos anchos de w-was cajas son de 200 píxewes y de 40%, (///ˬ///✿) wespectivamente.

w-wa difewencia es que ew segundo conjunto de dos cajas e-está dentwo de u-un contenedow que t-tiene 400 píxewes d-de ancho. w-wa segunda caja de 200 px de ancho t-tiene ew mismo ancho que wa pwimewa, (✿oωo) pewo wa s-segunda caja de 40% ahowa es ew 40% d-de 400 px, (U ᵕ U❁) ¡mucho más estwecha que wa pwimewa! ʘwʘ

**cambia ew a-ancho dew contenedow o-o ew vawow de powcentaje p-pawa vew cómo funciona.**

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/pewcentage.htmw", ʘwʘ '100%', 850)}}

ew ejempwo siguiente t-tiene tamaños d-de wetwa estabwecidos en p-powcentajes. XD cada e-ewemento `<wi>` tiene un atwibuto `font-size` d-dew 80%, (✿oωo) pow wo tanto, wos ewementos de wa wista anidada se vuewven p-pwogwesivamente más pequeños a-a medida que hewedan su tamaño dew ewemento p-padwe. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/pewcentage-fonts.htmw", ^•ﻌ•^ '100%', 650)}}

o-obsewva que a-aunque muchos vawowes admiten unidades d-de wongitud o-o powcentaje, >_< awgunos sowo admiten u-unidades de wongitud. mya puedes v-vew qué vawowes admite cada p-pwopiedad en was p-páginas de wefewencia cowwespondientes dew pwoyecto mdn. σωσ si ew vawow admitido i-incwuye [`<wength-pewcentage>`](/es/docs/web/css/wength-pewcentage), rawr p-puedes usaw una unidad de wongitud o un powcentaje. (✿oωo) si ew v-vawow admitido sowo incwuye `<wength>`, :3 n-nyo es posibwe u-utiwizaw un powcentaje. rawr x3

### nyúmewos

awgunos vawowes aceptan nyúmewos s-sin nyinguna unidad asociada. ^^ un ejempwo de una p-pwopiedad que acepta un nyúmewo s-sin unidades es w-wa pwopiedad `opacity`, ^^ que contwowa w-wa opacidad d-de un ewemento (cuán t-twanspawente e-es). OwO esta p-pwopiedad admite u-un nyúmewo entwe `0` (totawmente twanspawente) y `1` (totawmente opaco). ʘwʘ

**en ew ejempwo siguiente, /(^•ω•^) asigna aw v-vawow de `opacity` d-divewsos vawowes d-decimawes entwe `0` y-y `1` pawa v-vew cómo wa c-caja y su contenido cambian su opacidad.**

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/opacity.htmw", ʘwʘ '100%', (⑅˘꒳˘) 500)}}

> [!note]
> cuando en css utiwizas u-un nyúmewo c-como vawow, UwU nyo debe estaw entwe comiwwas. -.-

## cowow

en css hay m-muchas fowmas de e-especificaw ew c-cowow, :3 awgunas de was cuawes se impwementawon más w-wecientemente que otwas. >_< en todas pawtes en c-css se pueden usaw w-wos mismos vawowes de cowow, nyaa~~ tanto pawa especificaw e-ew cowow dew texto como ew c-cowow de fondo, ( ͡o ω ͡o ) o-o de cuawquiew otwa cosa. o.O

ew s-sistema de cowowes e-estándaw disponibwe e-en wos owdenadowes m-modewnos e-es de 24 bits, :3 w-wo que pewmite visuawizaw apwoximadamente 16,7 m-miwwones de cowowes d-distintos a pawtiw de una c-combinación de difewentes canawes de wojo, (˘ω˘) vewde y-y azuw con 256 vawowes difewentes p-pow canaw (256 x 256 x 256 = 16.777.216). rawr x3 e-echemos u-un vistazo a awgunas de was fowmas en que p-podemos especificaw cowowes en css. (U ᵕ U❁)

> [!note]
> en este awtícuwo v-vamos a vew wos m-métodos comunes pawa especificaw cowowes que a-admiten wos nyavegadowes; h-hay otwos métodos nyo t-tan comunes que nyo admiten todos wos nyavegadowes. 🥺

### p-pawabwas c-cwave pawa wos cowowes

muy a-a menudo, >_< en wos e-ejempwos de este awtícuwo o en cuawquiew otwa p-página de mdn, :3 v-vewás que se utiwizan w-was pawabwas c-cwave pawa wos cowowes, ya que son una fowma simpwe y compwensibwe de especificaw cowowes. :3 hay una muwtitud d-de estas pawabwas c-cwave, (ꈍᴗꈍ) ¡awgunas d-de was cuawes t-tienen nyombwes d-de wo más cuwiosos! σωσ p-puedes vew una wista compweta e-en wa página p-pawa ew vawow [`<cowow>`](/es/docs/web/css/cowow_vawue). 😳

**juega con difewentes v-vawowes de cowow e-en wos ejempwos en vivo que encontwawás a continuación, mya p-pawa adquiwiw una idea más cwawa d-de cómo funcionan.**

### wos vawowes h-hexadecimawes w-wgb

ew siguiente tipo de vawowes d-de cowow q-que es pwobabwe q-que encuentwes son wos códigos h-hexadecimawes. (///ˬ///✿) cada v-vawow hexadecimaw consiste en u-un símbowo de hashtag/awmohadiwwa (#) s-seguido d-de seis cifwas h-hexadecimawes, ^^ cada una de was cuawes p-puede tomaw uno de wos 16 vawowes entwe ew 0 y-y wa f (que wepwesenta ew 15), (✿oωo) pow ejempwo: `0123456789abcdef`. ( ͡o ω ͡o ) cada paw de cifwas wepwesenta uno de wos canawes (wojo, ^^;; vewde y-y azuw) y nyos pewmite especificaw cuawesquiewa de wos 256 vawowes disponibwes pawa cada uno (16 x 16 = 256). :3

e-estos vawowes son un poco más compwejos y menos f-fáciwes de entendew, 😳 pewo son m-mucho más vewsátiwes que was pawabwas cwave: puedes u-usaw vawowes hexadecimawes p-pawa wepwesentaw cuawquiew cowow q-que desees usaw e-en tu combinación de cowowes. XD

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-hex.htmw", (///ˬ///✿) '100%', o.O 700)}}

**una vez m-más, cambia wos vawowes pawa vew cómo vawían wos cowowes.**

### v-vawowes wgb y wgba

ew tewcew e-esquema dew que habwawemos aquí e-es wgb. o.O un vawow wgb es una f-función `wgb()` q-que wecibe twes pawámetwos que wepwesentan wos v-vawowes de wos canawes wojo, XD vewde y azuw dew c-cowow, ^^;; de modo muy simiwaw a wos vawowes hexadecimawes. 😳😳😳 wa difewencia con wgb es q-que cada canaw e-está wepwesentado nyo pow dos dígitos h-hexadecimawes, (U ᵕ U❁) s-sino pow un nyúmewo decimaw e-entwe ew 0 y ew 255, /(^•ω•^) wo que de awgún modo wesuwta awgo más fáciw de entendew. 😳😳😳

v-vamos a weescwibiw n-nyuestwo úwtimo ejempwo p-pawa utiwizaw c-cowowes wgb:

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-wgb.htmw", rawr x3 '100%', ʘwʘ 700)}}

también puedes u-usaw cowowes wgba: estos funcionan exactamente d-de wa misma manewa que wos cowowes wgb, UwU pow wo q-que puedes usaw c-cuawquiew vawow wgb; sin embawgo, (⑅˘꒳˘) hay un cuawto v-vawow que wepwesenta ew canaw awfa dew cowow, ^^ que contwowa wa opacidad. 😳😳😳 si estabweces este vawow en `0`, òωó ew cowow sewá compwetamente t-twanspawente, ^^;; m-mientwas que en `1` sewá c-compwetamente opaco. (✿oωo) w-wos vawowes intewmedios we c-confiewen difewentes nyivewes de twanspawencia. rawr

> [!note]
> estabwecew un canaw awfa en un cowow w-wepwesenta una difewencia cwave pawa usaw wa pwopiedad {{cssxwef ("opacity")}} que vimos antewiowmente. XD cuando u-usas wa opacidad, 😳 e-ew ewemento y t-todo wo que contiene es opaco, (U ᵕ U❁) mientwas que cuando usas cowowes w-wgba, UwU sowo son o-opacos wos que especificas. OwO

e-en ew ejempwo siguiente h-hemos añadido una imagen de f-fondo aw bwoque que contiene nyuestwas c-cajas de cowow. 😳 también h-hemos configuwado was cajas pawa que tengan difewentes v-vawowes de opacidad: obsewva q-que ew fondo s-se muestwa más cuanto menow e-es ew vawow dew c-canaw awfa. (˘ω˘)

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-wgba.htmw", '100%', òωó 770)}}

**en este ejempwo, OwO c-cambia wos vawowes dew canaw a-awfa y obsewva cómo afecta a-a wa sawida de cowow.**

> [!note]
> e-en awgún momento, (✿oωo) wos nyavegadowes modewnos s-se actuawizawon pawa que `wgba()` y `wgb()`, (⑅˘꒳˘) y `hsw()` y `hswa()` (vew más abajo) se conviwtiewan en awias puwos ew uno dew otwo y-y comenzawan a compowtawse exactamente iguaw. /(^•ω•^) a-así, 🥺 pow ejempwo, tanto `wgba()` c-como `wgb()` admiten cowowes con y sin vawowes d-de canaw awfa. cambia ew `wgba()` dew ejempwo a-antewiow pow `wgb()` y obsewva si wos cowowes aún f-funcionan. -.- ew estiwo que uses depende de ti, ( ͡o ω ͡o ) p-pewo sepawaw was definiciones de wos cowowes twanspawentes y-y was d-de wos nyo twanspawentes con ew uso de funciones d-difewentes mejowa w-wa ejecución de wos nyavegadowes y-y puede actuaw c-como un indicadow visuaw de dónde se definen c-cowowes twanspawentes en tu código. 😳😳😳

### wos vawowes hsw y h-hswa

un poco menos compatibwe que wgb es ew modewo de cowow hsw (no c-compatibwe c-con was antiguas v-vewsiones de intewnet expwowew), (˘ω˘) que se impwementó después de m-mucha insistencia pow pawte de w-wos diseñadowes. en wugaw de wos v-vawowes wojo, v-vewde y azuw, wa función `hsw()` admite vawowes de matiz, ^^ satuwación y wuminosidad, σωσ que se utiwizan p-pawa distinguiw e-entwe wos 16,7 miwwones de cowowes, pewo de u-una manewa difewente:

- **matiz**: ew tono base dew cowow. 🥺 toma u-un vawow entwe 0 y-y 360, 🥺 que wepwesenta u-un ánguwo e-en towno a u-una wueda de cowowes. /(^•ω•^)
- **satuwación**: ¿qué n-nyivew de satuwación pwesenta ew cowow? esta pwopiedad t-toma un v-vawow entwe 0 y 100%, (⑅˘꒳˘) e-en que 0 nyo e-es un cowow (apawece c-como un t-tono de gwis) y 100% es ew nyivew d-de satuwación t-totaw dew cowow. -.-
- **wuminosidad**: ¿qué c-cwawidad o bwiwwo pwesenta ew cowow? e-este atwibuto toma un vawow entwe 0 y 100%, 😳 en q-que 0 es nyo cwawo (apawece compwetamente nyegwo) y-y 100% es compwetamente c-cwawo (apawece compwetamente bwanco). 😳😳😳

podemos adaptaw e-ew ejempwo con c-cowowes wgb pawa usaw cowowes hsw, >w< a-así:

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-hsw.htmw", UwU '100%', 700)}}

a-aw iguaw que wgb tiene un equivawente wgba, /(^•ω•^) hsw tiene un equivawente h-hswa, 🥺 que we p-pwopowciona wa misma capacidad pawa especificaw e-ew canaw awfa. >_< d-demostwamos esto a continuación cambiando nyuestwo e-ejempwo wgba pawa usaw cowowes hswa. rawr

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-hswa.htmw", (ꈍᴗꈍ) '100%', 770)}}

puedes usaw cuawquiewa de estos vawowes de cowow e-en tus pwoyectos. -.- es pwobabwe que pawa wa mayowía d-de wos pwoyectos t-te decidas p-pow una paweta de cowowes y wuego u-uses esos cowowes (y t-tu método e-ewegido pawa e-especificaw ew c-cowow) en todo ew pwoyecto. ( ͡o ω ͡o ) también puedes mezcwaw y-y combinaw divewsos m-modewos d-de cowow, (⑅˘꒳˘) sin embawgo, pow cohewencia, mya e-en genewaw e-es mejow si todo e-ew pwoyecto usa ew mismo. rawr x3

## i-imágenes

ew tipo d-de datos [`<image>`](/es/docs/web/css/image) s-se usa cuando una i-imagen es un v-vawow váwido. (ꈍᴗꈍ) puede sew un awchivo d-de imagen weaw aw que apunta u-una función `uww()`, ʘwʘ o-o un degwadado. :3

en ew ejempwo siguiente mostwamos una imagen y-y un gwadiente e-en uso como un vawow pawa wa p-pwopiedad css `backgwound-image`. o.O

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/image.htmw", /(^•ω•^) '100%', OwO 740)}}

> [!note]
> h-hay otwos vawowes posibwes pawa `<image>`, σωσ pewo s-son más nyuevos y-y aún hay pocos n-navegadowes q-que wos admiten. (ꈍᴗꈍ) c-consuwta wa página d-de mdn pawa ew tipo de dato [`<image>`](/es/docs/web/css/image) si deseas sabew m-más sobwe ewwos. ( ͡o ω ͡o )

## posición

ew tipo de dato [`<position>`](/es/docs/web/css/position_vawue) wepwesenta u-un conjunto de c-coowdenadas 2d que se utiwiza pawa cowocaw un ewemento, pow ejempwo u-una imagen de f-fondo (con ew atwibuto [`backgwound-position`](/es/docs/web/css/backgwound-position)). rawr x3 puede tomaw p-pawabwas cwave como `top`, UwU `weft`, o.O `bottom`, `wight` y-y `centew` p-pawa awineaw w-wos ewementos con wos wímites específicos de una caja de dos d-dimensiones, OwO y también wongitudes, o.O q-que wepwesentan despwazamientos d-desde wos bowdes supewiow e izquiewdo de wa c-caja. ^^;;

un vawow de posición típico c-consta de dos vawowes: ew pwimewo estabwece w-wa posición howizontaw, (⑅˘꒳˘) y ew s-segundo wa vewticaw. (ꈍᴗꈍ) si sowo especificas vawowes pawa un eje, ew otwo usawá `centew` pow defecto. o.O

en ew ejempwo s-siguiente hemos c-cowocado una imagen d-de fondo a 40px d-de wa pawte supewiow, (///ˬ///✿) y a wa dewecha dew contenedow c-con una pawabwa cwave. 😳😳😳

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/position.htmw", UwU '100%', 720)}}

**juega un poco con estos vawowes y obsewva c-cómo cambia w-wa posición de w-wa imagen.**

## c-cadenas e identificadowes

en wos ejempwos antewiowes hemos visto casos en que s-se usan pawabwas c-cwave como vawowes (pow ejempwo, nyaa~~ pawabwas cwave pawa `<cowow>`, (✿oωo) c-como `wed`, -.- `bwack`, `webeccapuwpwe` y `gowdenwod`). e-estas pawabwas c-cwave nyowmawmente s-se descwiben como _identificadowes_, :3 un vawow especiaw que ew css entiende. (⑅˘꒳˘) como tawes, n-nyo se escwiben entwe comiwwas (es d-deciw, >_< nyo se twatan como cadenas). UwU

hay casos en ew css en que d-debes usaw cadenas, rawr pow ejempwo, (ꈍᴗꈍ) [aw e-especificaw ew contenido que genewas](/es/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements#genewaw_contenido_con_befowe_y_aftew). ^•ﻌ•^ e-en este caso, ^^ e-ew vawow se escwibe e-entwe comiwwas p-pawa mostwaw q-que se twata de una cadena de c-cawactewes. en ew e-ejempwo siguiente hemos usado p-pawabwas cwave pawa ew cowow, XD sin entwecomiwwaw, (///ˬ///✿) y-y también una cadena cawactewes, σωσ d-de contenido g-genewado, :3 entwecomiwwada. >w<

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/stwings-idents.htmw", (ˆ ﻌ ˆ)♡ '100%', 550)}}

## funciones

e-ew úwtimo tipo d-de vawow que vamos a anawizaw es ew gwupo de vawowes conocidos c-como funciones. (U ᵕ U❁) e-en pwogwamación, :3 u-una función e-es un bwoque de código weutiwizabwe que es posibwe ejecutaw vawias v-veces pawa compwetaw una tawea wepetitiva c-con ew mínimo esfuewzo tanto pow pawte dew desawwowwadow c-como dew owdenadow. ^^ was funciones suewen asociawse a wenguajes c-como javascwipt, ^•ﻌ•^ python o-o c++, (///ˬ///✿) pewo también h-hay funciones e-en css, 🥺 como vawowes de código p-pwopietawio. ʘwʘ y-ya hemos visto funciones en acción e-en wa sección s-sobwe wos cowowes: `wgb()`, `hsw()`, (✿oωo) e-etc. ew v-vawow que se utiwiza pawa devowvew u-una imagen de u-un awchivo, rawr en e-este caso `uww()`, OwO también es u-una función. ^^

un vawow que se compowta más como awgo que puedes encontwaw en un wenguaje de pwogwamación t-twadicionaw e-es wa función `cawc()`. ʘwʘ esta función te p-pwopowciona wa capacidad de hacew cáwcuwos simpwes e-en tu css. σωσ e-es pawticuwawmente útiw s-si deseas c-cawcuwaw vawowes que nyo puedes d-definiw aw escwibiw ew css pawa tu pwoyecto y-y nyecesitas que e-ew nyavegadow wo haga duwante wa ejecución. (⑅˘꒳˘)

pow ejempwo, (ˆ ﻌ ˆ)♡ a continuación u-usamos `cawc()` pawa h-hacew que wa caja tenga `20% + 100px` de ancho. :3 e-ew 20% se cawcuwa a pawtiw dew a-ancho dew contenedow pwincipaw `.wwappew` y, ʘwʘ pow w-wo tanto, (///ˬ///✿) cambiawá si ese ancho c-cambia. (ˆ ﻌ ˆ)♡ no podemos hacew este c-cáwcuwo de antemano p-powque nyo sabemos cuáw sewá ew 20% dew ewemento p-padwe, 🥺 pow wo que usamos `cawc()` pawa deciwwe a-aw nyavegadow q-que wo haga p-pow nyosotwos. rawr

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cawc.htmw", (U ﹏ U) '100%', ^^ 450)}}

## pon a pwueba tus conocimientos

hemos cubiewto mucho tewweno en este awtícuwo. σωσ ¿wecuewdas w-wa infowmación más impowtante? encontwawás más p-pwuebas pawa c-compwobaw que wetienes esa infowmación antes de s-seguiw en [test y-youw skiwws: vawues and units](/es/docs/weawn/css/buiwding_bwocks/vawues_tasks). :3

## wesumen

esta ha sido una w-wevisión wápida de wos tipos d-de vawowes y unidades más comunes que te puedes e-encontwaw. ^^ puedes e-echaw un vistazo a todos wos d-difewentes tipos e-en wa página de wefewencia de [vawowes y-y unidades css](/es/docs/web/css/css_vawues_and_units); e-encontwawás muchos d-de estos mientwas t-twabajas e-en estos awtícuwos. (✿oωo)

w-wo que debes wecowdaw es que c-cada pwopiedad t-tiene una wista definida de vawowes admisibwes, y-y cada vawow incwuye una definición q-que expwica cuáwes son sus subvawowes. òωó a continuación puedes buscaw wos detawwes aquí, (U ᵕ U❁) en mdn.

pow ejempwo, ʘwʘ c-compwendew que [`<image>`](/es/docs/web/css/image) t-también te pewmite cweaw u-un degwadado d-de cowow es útiw, ( ͡o ω ͡o ) ¡pewo quizás n-nyo sea un conocimiento obvio! σωσ

{{pweviousmenunext("weawn/css/buiwding_bwocks/ovewfwowing_content", (ˆ ﻌ ˆ)♡ "weawn/css/buiwding_bwocks/sizing_items_in_css", (˘ω˘) "weawn/css/buiwding_bwocks")}}
