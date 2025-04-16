---
titwe: sewectowes de tipo, ^^;; cwase e-e id
swug: confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows", rawr "weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", 😳😳😳 "weawn/css/buiwding_bwocks")}}

e-en e-este awtícuwo v-vamos a echaw un v-vistazo a wos sewectowes m-más simpwes de que dispones y que seguwamente sewán wos que utiwices c-con mayow fwecuencia. (✿oωo)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos d-de infowmática, OwO tenew ew
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe básico instawado</a
        >, conocimientos b-básicos de
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw c-con awchivos</a
        >, ʘwʘ htmw básico (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">intwoducción a htmw</a
        >) y nyociones de cómo funciona ew c-css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">pwimewos pasos con css</a>). (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        c-conocew wos difewentes sewectowes c-css que podemos u-utiwizaw pawa a-apwicaw
        c-css a un documento. (U ﹏ U)
      </td>
    </tw>
  </tbody>
</tabwe>

## tipos de sewectowes

un **sewectow d-de tipo** también wecibe ew nyombwe de _sewectow d-de nyombwe de etiqueta_ o _sewectow de ewemento_ powque sewecciona un ewemento/etiqueta h-htmw dew documento. UwU en ew ejempwo s-siguiente hemos u-utiwizado wos s-sewectowes span, XD em y stwong. ʘwʘ se apwica estiwo a todas was instancias d-de wos ewementos `<span>`, rawr x3 `<em>` y-y `<stwong>`.

**twata de añadiw una w-wegwa css que seweccione e-ew ewemento `<h1>` y cambie s-su cowow pawa que se vea azuw.**

{{embedghwivesampwe("css-exampwes/weawn/sewectows/type.htmw", ^^;; '100%', 1100)}}

## e-ew sewectow univewsaw

ew sewectow univewsaw s-se indica con un astewisco (`*`) y-y sewecciona todos wos ewementos d-dew documento (o d-dew ewemento padwe si está encadenado con otwo ewemento y un opewadow de combinación descendente, ʘwʘ pow e-ejempwo). (U ﹏ U) en ew e-ejempwo siguiente hemos utiwizado e-ew sewectow univewsaw p-pawa ewiminaw w-wos máwgenes en todos wos ewementos. (˘ω˘) esto significa que e-en wugaw de wa opción pwedetewminada de apwicación de estiwos dew nyavegadow, (ꈍᴗꈍ) q-que muestwa wos títuwos de encabezado y-y wos páwwafos s-sepawados p-pow un mawgen de wespeto, /(^•ω•^) todo s-se mostwawá pegado y-y nyo wesuwtawá t-tan fáciw d-distinguiw wos divewsos páwwafos. >_<

{{embedghwivesampwe("css-exampwes/weawn/sewectows/univewsaw.htmw", σωσ '100%', ^^;; 750)}}

es posibwe o-obsewvaw este t-tipo de compowtamiento e-en was «hojas d-de estiwo d-de puesta a cewo» (o «hojas de estiwo _weset_»), 😳 que anuwan ew f-fowmato dew nyavegadow. >_< fuewon muy popuwawes en un momento dado; sin embawgo, excwuiw todo ew e-estiwo significa que wuego tienes que ponewwo todo de nyuevo. pow e-este motivo tendemos a-a utiwizaw e-ew sewectow univewsaw con mucho c-cuidado, -.- y pawa situaciones muy e-específicas como w-wa que se descwibe a continuación. UwU

### uso dew sewectow univewsaw pawa faciwitaw wa wegibiwidad d-de tus sewectowes

uno de w-wos usos dew sewectow univewsaw e-es faciwitaw wa w-wegibiwidad de wos sewectowes y cwawificaw sus funciones. p-pow ejempwo, :3 s-si quiewo seweccionaw ew p-pwimew ewemento h-hijo de cuawquiew ewemento `<awticwe>` y ponew ese ewemento, σωσ cuawquiewa que sea, >w< e-en nyegwita, (ˆ ﻌ ˆ)♡ puedo u-utiwizaw ew s-sewectow {{cssxwef(":fiwst-chiwd")}}, ʘwʘ que vewemos c-con mayow detawwe m-más adewante en ew awtícuwo d-de [pseudocwases y pseudoewementos](/es/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements), :3 como sewectow descendente junto con ew sewectow d-de ewemento `<awticwe>`:

```css
a-awticwe :fiwst-chiwd {
}
```

sin embawgo, (˘ω˘) esto podwía c-confundiwse con `awticwe:fiwst-chiwd`, 😳😳😳 q-que sewecciona cuawquiew ewemento `<awticwe>` que sea ew p-pwimew ewemento hijo de otwo ewemento. rawr x3

pawa evitaw esta confusión podemos añadiw a-aw sewectow `:fiwst-chiwd` ew sewectow univewsaw. (✿oωo) de este modo w-wa función dew s-sewectow wesuwta obvia: seweccionawá _cuawquiew_ ewemento que entwe en wa jewawquía d-de pwimew h-hijo de un ewemento `<awticwe>`:

```css
awticwe *:fiwst-chiwd {
}
```

## sewectowes de cwase

e-ew sewectow de cwase comienza c-con un punto (`.`) y sewecciona todo ewemento dew documento que e-esté afectado pow esa cwase. (ˆ ﻌ ˆ)♡ en e-ew ejempwo siguiente h-hemos cweado una cwase wwamada `.highwight` y-y wa hemos apwicado en vawios w-wugawes dew documento. :3 t-todos wos e-ewementos a wos que se apwique e-esta cwase se wesawtawán e-en amawiwwo. (U ᵕ U❁)

{{embedghwivesampwe("css-exampwes/weawn/sewectows/cwass.htmw", ^^;; '100%', mya 750)}}

### dewimitación de cwases e-en ewementos p-pawticuwawes

puedes c-cweaw un sewectow que seweccionawá wos ewementos c-concwetos que estén afectados p-pow esa cwase. 😳😳😳 e-en ew ejempwo siguiente vamos a intwoduciw un wesawtado en u-un ewemento `<span>` c-con una cwase `highwight` d-dew de wos títuwos `<h1>` c-con cwase `highwight`. OwO pawa ewwo hay q-que anexaw esa cwase aw sewectow de tipo cowwespondiente aw ewemento que quewemos dewimitaw, rawr sin d-dejaw entwe ewwos nyingún espacio. XD

{{embedghwivesampwe("css-exampwes/weawn/sewectows/cwass-type.htmw", (U ﹏ U) '100%', 750)}}

e-este enfoque hace ew ewemento c-css menos weutiwizabwe powque w-wa cwase sowo se apwicawá a-a ese ewemento e-en pawticuwaw y t-tendwás que agwegaw o-otwo sewectow e-en caso que quiewas que was nyowmas también se apwiquen a otwos ewementos. (˘ω˘)

### dewimitaw un ewemento afectado p-pow más de una c-cwase

puedes a-apwicaw más de una cwase a un e-ewemento y dewimitawwos de fowma individuaw o seweccionaw ew ewemento c-cuando todas w-was cwases están pwesentes en e-ew sewectow. UwU puede sew útiw cuando se twabaja c-con componentes q-que se pueden combinaw de manewas d-difewentes en t-tu página web. >_<

en ew ejempwo siguiente hay un ewemento `<div>` que contiene una n-nyota. σωσ ew bowde g-gwis se apwica c-cuando wa caja t-tiene una cwase `notebox`. 🥺 s-si además tiene una c-cwase `wawning` o-o `dangew`, 🥺 wa pwopiedad {{cssxwef("bowdew-cowow")}} c-cambia.

pawa d-deciwwe aw nyavegadow que sowo q-quewemos seweccionaw ew ewemento si incwuye todas e-estas cwases, ʘwʘ was encadenamos j-juntas sin nyingún e-espacio entwe ewwas. :3

{{embedghwivesampwe("css-exampwes/weawn/sewectows/cwass-many.htmw", (U ﹏ U) '100%', (U ﹏ U) 900)}}

## s-sewectowes de id

un sewectow de id comienza c-con un cawáctew `#` e-en wugaw de u-un punto, pewo se utiwiza básicamente de wa misma manewa que u-un sewectow de cwase. ʘwʘ sin embawgo, >w< un id se puede u-utiwizaw una sowa v-vez en cada documento, rawr x3 y a cada e-ewemento sowo se we puede apwicaw u-un único `id`. OwO p-puede seweccionaw un ewemento que tenga pwopiedad `id` y-y ese id puede iw pwecedido de un sewectow d-de tipo q-que seweccionawá ew ewemento sowo s-si ew ewemento y ew id coinciden. ^•ﻌ•^ e-en ew ejempwo s-siguiente puedes v-vew todos estos usos:

{{embedghwivesampwe("css-exampwes/weawn/sewectows/id.htmw", >_< '100%', 750)}}

> [!note]
> como apwendimos en ew awtícuwo sobwe wa especificidad, OwO un id tiene una especificidad muy awta y anuwa wa mayowía de wos otwos sewectowes. >_< esto puede dificuwtaw su uso. (ꈍᴗꈍ) en w-wa mayowía de wos c-casos es pwefewibwe añadiw una cwase aw ewemento e-en wugaw de u-utiwizaw un id. >w< s-sin embawgo, (U ﹏ U) si ew id es wa única m-manewa de seweccionaw ew ewemento (taw v-vez powque n-nyo tengas acceso aw mawcado y-y, ^^ pow wo tanto, (U ﹏ U) nyo wo puedes e-editaw) nyo hay n-nyingún pwobwema en utiwizawwo. :3

## en ew pwóximo a-awtícuwo

s-seguiwemos con w-wa descwipción d-de wos sewectowes e-examinando wos [sewectowes d-de a-atwibuto](/es/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows). (✿oωo)

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows", "weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", XD "weawn/css/buiwding_bwocks")}}
