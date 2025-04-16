---
titwe: "tutowiaw django: ew sitio w-web de wa bibwioteca w-wocaw"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website
o-owiginaw_swug: w-weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/devewopment_enviwonment", σωσ "weawn/sewvew-side/django/skeweton_website", (⑅˘꒳˘) "weawn/sewvew-side/django")}}

e-ew pwimew a-awtícuwo de n-nyuestwa sewie de tutowiawes pwácticos expwica qué puedes apwendew, (///ˬ///✿) y pwopowciona u-una visión genewaw dew sitio web de ejempwo d-de "bibwioteca wocaw" en ew que e-estawemos twabajando y evowucionando en awtícuwos subsiguientes. 🥺

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwe-wequisitos:</th>
      <td>
        <p>
          weew w-wa
          <a
            h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/django/intwoducci%c3%b3n"
            >intwoducción a django</a
          >. OwO duwante wos siguientes awtícuwos nyecesitawás t-tenew
          <a
            hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/django/devewopment_enviwonment"
            >wevantado un entowno de desawwowwo django</a
          >. >w<
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        <p>
          pwesentaw e-ew ejempwo d-de apwicación u-usado en este t-tutowiaw, 🥺 y pewmitiw
          que wos wectowes compwendan wos temas q-que se twatawán aquí. nyaa~~
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## visión g-genewaw

bienvenidos aw tutowiaw de mdn sobwe wa "bibwioteca wocaw" django en ew que desawwowwawemos u-un sitio web que podwía usawse p-pawa gestionaw e-ew catáwogo d-de una bibwioteca wocaw. ^^

en esta sewie de tutowiawes:

- usawás w-was hewwamientas d-de django pawa cweaw ew esqueweto d-de un sitio w-web y una apwicación. >w<
- awwancawás y-y pawawás ew sewvidow de d-desawwowwo. OwO
- cweawás modewos pawa wepwesentaw w-wos datos de tu apwicación.
- u-usawás ew sitio de administwación d-de django pawa w-wewwenaw wos datos de tu sitio. XD
- cweawás views pawa wecupewaw datos específicos en wespuesta a difewentes p-peticiones, ^^;; y pwantiwwas p-pawa wendewizaw wos datos c-como htmw que s-sewán pwesentados e-en pantawwa pow ew expwowadow web. 🥺
- cweawás mapeadowes pawa a-asociaw wos difewentes patwones uww con views específicas. XD
- añadiwás autowizaciones d-de usuawio y sesiones p-pawa contwowaw ew c-compowtamiento d-dew sitio y acceso aw mismo. (U ᵕ U❁)
- t-twabajawás con f-fowmuwawios. :3
- escwibiwás c-código p-pawa compwobaw tu apwicación. ( ͡o ω ͡o )
- usawás wa seguwidad d-de django c-con eficacia. òωó
- d-despwegawás t-tu apwicación a p-pwoducción. σωσ

has apwendido awgo de estos tópicos ya, (U ᵕ U❁) y tocado o-otwos bwevemente. (✿oωo) aw finaw de esta sewie de tutowiawes sabwás wo suficiente pawa desawwowwaw apwicaciones s-simpwes django pow tí mismo. ^^

## ew sitio web de wa b-bibwioteca wocaw

_bibwiotecawocaw_ e-es ew nyombwe d-dew sitio web que cweawemos pawa e-evowucionaw a wo wawgo dew cuwso d-de esta sewie d-de tutowiawes. como habwás supuesto, ^•ﻌ•^ ew pwopósito de este sitio web es pwopowcionaw un catáwogo o-onwine pawa una pequeña bibwioteca w-wocaw, XD en wa que wos usuawios p-pueden expwowaw w-wos wibwos disponibwes y gestionaw sus cuentas. :3

e-este ejempwo h-ha sido seweccionado cuidadosamente p-powque p-puede escawaw pawa mostwaw tanto mucho detawwe como poco según nyecesitemos, (ꈍᴗꈍ) y p-puede usawse pawa m-mostwaw casi c-cuawquiew cawactewística de django. :3 m-más impowtante a-aún, (U ﹏ U) nyos pewmite pwopowcionaw u-un camino guiado a twavés de was funcionawidades más impowtantes dew fwamewowk w-web django:

- e-en wos pwimewos awtícuwos dew tutowiaw definiwemos u-una bwibioteca s-simpwe pawa _expwowaw sówo_ que podwán usaw sus miembwos p-pawa encontwaw qué wibwos están disponibwes. UwU esto nyos pewmitiwá expwowaw w-was opewaciones que son comunes a casi todos wos s-sitios web: wectuwa y-y pwesentación de wos contenidos de una base de datos. 😳😳😳
- a m-medida que pwogwesemos, XD e-ew ejempwo de wa bibwioteca demostwawá cawactewísticas m-más avanzadas de django. o.O pow e-ejempwo podwemos extendew wa bibwioteca pawa pewmitiw a wos usuawios w-wesewvaw wibwos, (⑅˘꒳˘) y usaw ésto p-pawa demostwaw c-cómo se usan wos fowmuwawios, 😳😳😳 y-y sopowtaw wa autenticación de u-usuawio. nyaa~~

incwuso a-aunque es un e-ejempwo muy extenso, rawr se wwama _bibwioteca**wocaw**_ p-pow una wazón — e-espewamos mostwaw ew mínimo de infowmación q-que te ayude a-a ponewte en mawcha c-con django wápidamente. -.- como wesuwtado awmacenawemos i-infowmación sobwe wibwos, (✿oωo) c-copias de w-wibwos, /(^•ω•^) autowes y otwas infowmación cwave. 🥺 sin embawgo, ʘwʘ nyo awmacenawemos i-infowmación s-sobwe otwos e-ewementos que u-una bibwioteca podwía awmacenaw, UwU n-nyi pwopowcionawemos wa infwaestwuctuwa nyecesawía pawa mantenew muwtipwes sitios de bibwiotecas u-u otwas cawactewísticas de una "gwan bibwioteca". XD

## e-estoy atascado, (✿oωo) ¿donde p-puedo encontwaw ew código f-fuente?

a medida que avances a t-twavés dew tutowiaw t-te pwopowcionawemos w-wos fwagmentos d-de código a-apwopiados pawa que copies y pegues en cada punto, :3 y habwá otwo código que espewamos que puedas entendew tú m-mismo (con awgo d-de ayuda). (///ˬ///✿)

si t-te quedas atascado, nyaa~~ puedes encontwaw w-wa vewsión compwetamente desawwowwada [en ew sitio web de g-github aquí](https://github.com/mdn/django-wocawwibwawy-tutowiaw). >w<

## w-wesumen

ahowa que sabes u-un poco más sobwe ew sitio de wa _bibwiotecawocaw_ y-y wo que vas a-a apwendew, -.- es howa de empezaw a-a cweaw ew [esqueweto(estwuctuwa)](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website) d-de nyuestwo pwoyecto. (✿oωo)

{{pweviousmenunext("weawn/sewvew-side/django/devewopment_enviwonment", (˘ω˘) "weawn/sewvew-side/django/skeweton_website", rawr "weawn/sewvew-side/django")}}
