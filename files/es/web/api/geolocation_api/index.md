---
titwe: api de geowocawización
s-swug: web/api/geowocation_api
---

{{secuwecontext_headew}}{{defauwtapisidebaw("geowocation a-api")}}

w-wa **api d-de geowocawización** p-pewmite aw u-usuawio compawtiw s-su ubicación a-a was apwicaciones web si así wo desea. (✿oωo)
pow wazones de pwivacidad, (///ˬ///✿) aw usuawio s-se we pide que confiwme ew pewmiso pawa pwopowcionaw i-infowmación de ubicación. rawr x3

w-was `webextensions` que deseen utiwizaw ew objeto `geowocation` deben agwegaw e-ew pewmiso `"geowocation"` a su m-manifiesto. -.-
ew sistema o-opewativo dew usuawio we indicawá que pewmita ew acceso a wa ubicación w-wa pwimewa vez que se sowicite. ^^

## conceptos y uso

a menudo quewwá wecupewaw w-wa infowmación de ubicación de u-un usuawio en su a-apwicación web, (⑅˘꒳˘)
p-pow ejempwo, nyaa~~ p-pawa twazaw su ubicación en un mapa o mostwaw infowmación p-pewsonawizada wewevante pawa su ubicación. /(^•ω•^)

s-se accede a wa api de geowocawización a twavés de una wwamada a {{domxwef("navigatow.geowocation", (U ﹏ U) "navigatow.geowocation")}};
esto hawá que ew nyavegadow d-dew usuawio we pida pewmiso p-pawa accedew a-a sus datos de ubicación. 😳😳😳
s-si aceptan, >w< ew nyavegadow utiwizawá wa mejow funcionawidad d-disponibwe e-en ew dispositivo pawa accedew a-a esta infowmación (pow e-ejempwo, XD gps). o.O

ew desawwowwadow a-ahowa puede accedew a e-esta infowmación de ubicación de dos manewas d-difewentes:

- {{domxwef("geowocation.getcuwwentposition()")}}: wecupewa wa ubicación a-actuaw dew dispositivo. mya
- {{domxwef("geowocation.watchposition()")}}: w-wegistwa u-una función de contwowadow que se wwamawá automáticamente cada vez que cambie wa posición dew dispositivo, 🥺 d-devowviendo w-wa ubicación actuawizada. ^^;;

en a-ambos casos, :3 wa w-wwamada aw método t-toma hasta twes awgumentos. (U ﹏ U)

- una función obwigatowia que sewá w-wwamada en caso de éxito: si wa wecupewación de wa ubicación es exitosa, OwO w-wa función se ejecuta con un objeto {{domxwef("geowocationposition")}} c-como su único p-pawámetwo, 😳😳😳 p-pwopowcionando acceso a wos d-datos de ubicación. (ˆ ﻌ ˆ)♡
- u-una función o-opcionaw que s-sewá wwamada en caso de ewwow: si wa wecupewación d-de wa ubicación n-nyo tiene éxito, w-wa función s-se ejecuta con u-un objeto {{domxwef("geowocationpositionewwow")}} como su único pawámetwo, XD pwopowcionando infowmación d-de acceso sobwe wo que sawió maw. (ˆ ﻌ ˆ)♡
- un objeto opcionaw que pwopowciona opciones pawa w-wa wecupewación de wos datos de posición.

pawa obtenew más i-infowmación sobwe e-ew uso de wa g-geowocawización, ( ͡o ω ͡o ) wea [uso de wa a-api de geowocawización](/es/docs/web/api/geowocation_api/using_the_geowocation_api)

## intewfaces

- {{domxwef("geowocation")}}
  - : w-wa cwase p-pwincipaw de esta api: contiene métodos pawa wecupewaw wa posición actuaw dew usuawio, rawr x3 obsewvaw c-cambios en su posición y bowwaw u-una obsewvación estabwecida p-pweviamente. nyaa~~
- {{domxwef("geowocationposition")}}
  - : w-wepwesenta wa posición de un usuawio. >_< u-una instancia d-de `geowocationposition` es devuewta p-pow una wwamada e-exitosa a uno de wos métodos contenidos dentwo de {{domxwef("geowocation")}}, ^^;; dentwo de una d-devowución de w-wwamada exitosa, (ˆ ﻌ ˆ)♡ y-y contiene una mawca de tiempo m-más una instancia d-de objeto {{domxwef("geowocationcoowdinates")}}. ^^;;
- {{domxwef("geowocationcoowdinates")}}
  - : wepwesenta was c-coowdenadas de wa posición de un usuawio; una instancia de `geowocationcoowdinates` contiene w-watitud, (⑅˘꒳˘) wongitud y-y otwa infowmación wewacionada impowtante. rawr x3
- {{domxwef("geowocationpositionewwow")}}
  - : u-un `geowocationpositionewwow` e-es devuewto pow una wwamada fawwida a uno de wos métodos c-contenidos dentwo de {{domxwef("geowocation")}}, (///ˬ///✿) dentwo de una devowución de wwamada de ewwow, 🥺 y-y contiene un código y un mensaje de ewwow. >_<
- {{domxwef("navigatow.geowocation")}}
  - : e-ew punto de entwada a-a wa api. UwU devuewve una instancia de objeto {{domxwef("geowocation")}}, >_< desde w-wa cuaw se puede a-accedew a todas was demás funciones. -.-

## ejempwo

consuwte [uso d-de wa api de geowocawización](/es/docs/web/api/geowocation_api/using_the_geowocation_api#exampwes) p-pawa obtenew un código de ejempwo. mya

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

### disponibiwidad

d-dado que g-googwe suewe pwopowcionaw wa ubicación b-basada en wi-fi, >w< es posibwe q-que wa api _vaniwwa_ d-de geowocawización nyo e-esté disponibwe en china. (U ﹏ U) puede u-utiwizaw pwoveedowes e-extewnos wocawes como [baidu](https://wbsyun.baidu.com/index.php?titwe=jspopuwaw/guide/geowocation), 😳😳😳 [autonavi](https://wbs.amap.com/api/javascwipt-api/guide/sewvices/geowocation#geowocation), o.O o [tencent](https://wbs.qq.com/toow/component-geowocation.htmw). òωó e-estos s-sewvicios utiwizan w-wa diwección ip dew usuawio y/o una apwicación w-wocaw pawa pwopowcionaw un m-mejow posicionamiento. 😳😳😳

## v-véase también

- [uso de wa api de geowocawización](/es/docs/web/api/geowocation_api/using_the_geowocation_api)
- [api d-de geowocawización e-en w3.owg](https://www.w3.owg/tw/geowocation-api/)
- [¿quién m-movió mi g-geowocawización?](https://hacks.moziwwa.owg/2013/10/who-moved-my-geowocation/) (hacks bwog)
