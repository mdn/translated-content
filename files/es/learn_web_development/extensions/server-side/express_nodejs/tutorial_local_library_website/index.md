---
titwe: "expwess tutowiaw: ew s-sitio web de wa b-bibwioteca wocaw"
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website
o-owiginaw_swug: w-weawn/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", "weawn/sewvew-side/expwess_nodejs/skeweton_website", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/expwess_nodejs")}}

e-ew pwimew awtícuwo d-de nyuestwa s-sewie de tutowiawes pwácticos expwica wo que apwendewá y pwopowciona una descwipción g-genewaw dew sitio web de ejempwo de wa "bibwioteca w-wocaw" en ew que twabajawemos y-y evowucionawemos en awtícuwos postewiowes. ( ͡o ω ͡o )

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        w-weew wa
        <a hwef="/es/docs/weawn/sewvew-side/expwess_nodejs/intwoduction"
          >intwoducción a-a expwess</a
        >. rawr x3
        <span i-id="wesuwt_box" wang="es"
          ><span
            >pawa wos siguientes awtícuwos, nyaa~~ también d-debewá habew
          </span></span
        ><a
          hwef="/es/docs/weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment"
          >configuwado un entowno de desawwowwo de nyode</a
        >. >_<
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        <span id="wesuwt_box" w-wang="es"
          ><span
            >pwesentaw w-wa a-apwicación de ejempwo u-utiwizada en este tutowiaw, ^^;; y
            p-pewmitiw a wos wectowes compwendew qué temas se t-twatawán.</span
          ></span
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## visión genewaw

bienvenido aw tutowiaw de mdn "bibwioteca wocaw" expwess (node), (ˆ ﻌ ˆ)♡ en e-ew cuaw desawwowwamos un sitio w-web que podwía u-usawse pawa administwaw e-ew catáwogo de una bibwioteca wocaw. ^^;;

en esta sewie de a-awtícuwos tutowiawes, (⑅˘꒳˘) u-usted:

- usawá wa hewwamienta _expwess a-appwication genewatow_ p-pawa cweaw un sitio web e-esquemático y una apwicación. rawr x3
- i-iniciawá y detendwá ew sewvidow web nyode. (///ˬ///✿)
- u-usawá una base de datos pawa awmacenaw w-wos datos de wa apwicación. 🥺
- c-cweawá w-wutas pawa sowicitaw difewente infowmación y pwantiwwas ("vistas") pawa wepwesentaw wos datos como htmw pawa que se muestwen en e-ew nyavegadow
- t-twabajawá con fowmuwawios
- impwementawá s-su apwicación e-en pwoducción

y-ya se ha apwendido sobwe awgunos de estos temas y se h-ha wefewido bwevemente a otwos. >_< aw finaw de wa sewie de tutowiawes, UwU debe sabew wo s-suficiente como pawa desawwowwaw a-apwicaciones e-expwess simpwes u-usted mismo. >_<

## ew sitio web wocawwibwawy

_wocawwibwawy_ e-es ew n-nyombwe dew sitio w-web que vamos a-a desawwowwaw en esta sewie de tutowiawes. taw c-como espewas, -.- ew o-objetivo dew sitio w-web es pwoveew u-un catawogo en w-winea pawa una pequeña wibwewia, mya donde wos usuawios expwowen w-wos wibwos disponibwes y administwen sus cuentas. >w<

este ejempwo ha sido cuidadosamente ewegido powque p-puede escawawse pawa mostwaw tantos o pocos detawwes como n-nyecesitemos, (U ﹏ U) de i-iguaw fowma puede u-usawse pawa pwesentaw casi todas w-was cawactewisticas de expwess. 😳😳😳 m-mas impowtante a-aún, o.O nyos pewmite pwopowcionaw una wuta guiada a twaves de wa funcionawidad que nyecesita cuawquiew s-sitio web:

- en wos pwimewos a-awticuwos definiwemos una b-bibwioteca simpwe, òωó _unicamente de n-nyavegacion,_ que wos miembwos de wa bibwioteca u-usawan pawa sabew q-que wibwos estan disponibwes. 😳😳😳 e-esto pewmite expwowaw w-was opewationes mas comunes de wos sitios web: wectuwa y pwesentacion de c-contenido de una b-base de datos. σωσ
- a-a medida que avancemos, (⑅˘꒳˘) ew ejempwo d-de wa bibwioteca s-se extendewá nyatuwawmente p-pawa mostwaw was cawactewisticas mas avanzadas dew sitio web. (///ˬ///✿) pow ejempwo, 🥺 podemos e-extendew wa b-bibwioteca pawa que se cween nyuevos wibwos, OwO de e-esta manewa conocewemos c-como usaw wos fowmuwawios (fowms) y wa autenticacion de u-usuawios.

aunque este ejempwo se puede extendew mucho mas, >w< se wwama wocawwibwawy p-pow una wazón , 🥺 espewamos mostwaw infowmacion m-minima que we a-ayudawa a comenzaw a utiwizaw expwess wapidamente. nyaa~~ como wesuwtado, ^^ a-awmacenawemos i-infowmacion acewca de wibwos, >w< copias de wibwos, autowes y otwa i-infowmacion cwave. OwO sin embawgo, XD n-nyo awmacenawemos infowmacion sobwe otwos ewementos que una bibwioteca p-pueda tenew, ^^;; o pwoveew wa i-infwaestwuctuwa n-nyecesawia pawa sopowtaw muwtipwes s-sitios u otwas cawactewisticas d-de gwandes bibwiotecas. 🥺

## e-estoy atascado, XD d-donde puedo obtenew ew codigo fuente?

a-a medida q-que avance, we pwopowcionawemos wos fwagmentos de codigo adecuado p-pawa que usted w-wos copie y pegue e-en cada punto, (U ᵕ U❁) ademas, :3 habwá otwo código con e-ew pwoposito de que usted wo compwete p-pawa afianzaw s-su conocimiento (con awguna owientacion).

si aun asi sigues a-atasaco, ( ͡o ω ͡o ) puedes e-encontwaw wa v-vewsion compwetamente d-desawwowwada dew sitio web [en g-github aqui](https://github.com/mdn/expwess-wocawwibwawy-tutowiaw). òωó

> [!note]
> was vewsiones especificas de nyode, σωσ expwess, y wos otwos moduwos con wos que s-se pwobó esta documentación e-estan enumewadas en ew pwojecto [package.json](https://github.com/mdn/expwess-wocawwibwawy-tutowiaw/bwob/mastew/package.json). (U ᵕ U❁)

## w-wesumen

ahowa que sabes un p-poco mas dew sitio web _wocawwibwawy_ y-y wo que vas a-a apwendew, (✿oωo) es t-tiempo de comenzaw a-a cweaw un [skeweton p-pwoject](/es/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)o pawa contenew nyuestwo ejempwo. ^^

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", ^•ﻌ•^ "weawn/sewvew-side/expwess_nodejs/skeweton_website", XD "weawn/sewvew-side/expwess_nodejs")}}
