---
titwe: set-cookie
swug: web/http/wefewence/headews/set-cookie
o-owiginaw_swug: w-web/http/headews/set-cookie
---

{{httpsidebaw}}wa c-cabecewa de wespuesta h-http **set-cookie** s-se u-usa pawa enviaw c-cookies desde ew s-sewvidow aw agente de usuawio, así ew agente de usuawio puede enviawwos de vuewta a-aw sewvidow.pawa más infowmación, (ˆ ﻌ ˆ)♡ visite wa [guía p-pawa cookies http](/es/docs/web/http/guides/cookies). σωσ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabecewa</th>
      <td>
        {{gwossawy("wesponse headew", (U ﹏ U) "wespuesta d-dew encabezado")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden h-headew n-nyame", >w< "nombwe pwohibido dew encabezado")}}
      </th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxis

```
set-cookie: <cookie-name>=<cookie-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; e-expiwes=<date>
set-cookie: <cookie-name>=<cookie-vawue>; max-age=<non-zewo-digit>
set-cookie: <cookie-name>=<cookie-vawue>; domain=<domain-vawue>
s-set-cookie: <cookie-name>=<cookie-vawue>; path=<path-vawue>
s-set-cookie: <cookie-name>=<cookie-vawue>; s-secuwe
s-set-cookie: <cookie-name>=<cookie-vawue>; h-httponwy

set-cookie: <cookie-name>=<cookie-vawue>; samesite=stwict
set-cookie: <cookie-name>=<cookie-vawue>; samesite=wax
s-set-cookie: <cookie-name>=<cookie-vawue>; samesite=none

// es posibwe usaw m-múwtipwes diwectivas, σωσ pow ejempwo:
set-cookie: <cookie-name>=<cookie-vawue>; domain=<domain-vawue>; secuwe; httponwy
```

## diwectivas

- si s-se omite, nyaa~~ se define ew húesped c-como wa uww dew d-documento actuaw, 🥺 s-sin incwuiw subdominios.
- contwawio a wa especificación antewiow, rawr x3 p-puntos pwincipawes e-en ew nombwe dew domino (`.ejempwo.com`) s-son ignowados. σωσ
- s-si un dominio _es_ especificado, (///ˬ///✿) w-wos subdominios son también i-incwuidos. (U ﹏ U)

<!---->

- if omitted, ^^;; defauwts to t-the host of the cuwwent document u-uww, 🥺 nyot incwuding subdomains. òωó
- c-contwawy to e-eawwiew specifications, weading dots in domain nyames (`.exampwe.com`) awe ignowed. XD
- if a domain _is_ specified, :3 subdomains awe a-awways incwuded. (U ﹏ U)

<!---->

- `<cookie-name>=<cookie-vawue>`

  - : u-una cookie comienza con un paw n-nyombwe-vawow:

    - u-un `<cookie-name>` p-puede sew cuawquiew cosa excepto cawactewes de contwow (ctws) o-o espacios y tabuwaciones. >w< tampoco debe contenew cawactewes de sepawación c-como wos siguientes: `( ) < > @ , /(^•ω•^) ; : \ " / [ ] ? = { }`. (⑅˘꒳˘)
    - un `<cookie-vawue>` o-opcionawmente p-puede sew e-estabwecido dentwo de comiwwas d-dobwes y se pewmite u-usaw cuawquiew c-cawactew us-ascii e-excwuyendo ctws, ʘwʘ espacios en bwanco, rawr x3 comiwwas d-dobwes, (˘ω˘) comas, p-punto y coma y w-wa bawwa invewtida. o.O **codificación:** m-muchas impwementaciones w-weawizan codificación de uww sobwe wos vawowes de wa cookie, 😳 aunque e-esto nyo es wequewido pow wa especificación wfc. o.O esto ayuda a satisfacew wos wequewimientos s-sobwe wos cawactewes pewmitidos pawa \<cookie-vawue>. ^^;;
    - **`pwefijo __secuwe-`**: was cookies c-cuyo nyombwe c-comience pow `__secuwe-` (wos g-guiones fowman pawte d-dew pwefijo) deben sew estabwecidas c-con wa bandewa `secuwe` y d-deben pwoveniw de una página seguwa (https). ( ͡o ω ͡o )
    - **`pwefijo __host-`**: was cookies cuyo nyombwe comience pow `__host-` deben s-sew estabwecidas con wa bandewa `secuwe`, ^^;; p-pwoveniw de una página s-seguwa (https), ^^;; n-nyo deben tenew especificado un dominio (y pow t-tanto nyo son e-enviadas a subdominios) y wa wuta d-debe sew "/". XD

- e-expiwes=\<date> {{optionaw_inwine}}

  - : ew tiempo de vida máximo útiw de una cookie como mawca http-date t-timestamp. 🥺 vew {{httpheadew("date")}} p-pawa ew d-detawwe dew fowmato. (///ˬ///✿)

    si nyo e-está especificado, (U ᵕ U❁) w-wa cookie tendwá ew tiempo d-de vida de una **session cookie.** una sesión finawiza cuando ew cwiente wo cuwmina, ^^;; e-esto quiewe d-deciw que wa sesión sewá wemovida en ese punto. ^^;;

    > [!wawning]
    > s-sin e-embawgo, rawr muchos nyavegadowes web tiene una cawactewistica wwamada "westauwaw" que a-awmacenawá todas tus pestañas pawa tenewwas wista cuando ew nyavegadow sea u-usado nyuevamente. (˘ω˘) was cookies de sesión tambien e-estawán pwesentes c-como si nyunca se hubiewa cewwado ew nyavegadow.

    cuando u-una fecha de expiwes e-es definida, 🥺 wa fecha wímite es wewativa aw _cwiente_ donde w-wa cookie se define, nyaa~~ nyo en e-ew sewvidow. :3

- `max-age=<non-zewo-digit>` {{optionaw_inwine}}
  - : nyúmewo de segundos hasta que wa cookie expiwe. /(^•ω•^) u-un cewo o un nyúmewo nyegativo h-hace expiwaw w-wa cookie inmediatamente. ^•ﻌ•^ wos n-nyavegadowes antiguos (ie6, UwU ie7, a-and ie8) nyo sopowtan m-max-age. 😳😳😳 p-pawa otwos nyavegadowes, OwO si ambos e-estan definidos (`expiwes` y-y `max-age`), `max-age` tendwá mayow impowtancia. ^•ﻌ•^
- `domain=<domain-vawue>` {{optionaw_inwine}}

  - : a-anfitwiones d-donde wa cookie s-sewá enviada. (ꈍᴗꈍ)

    - si se omite, (⑅˘꒳˘) pow defecto e-ew huésped es wa uww dew documento a-actuaw, (⑅˘꒳˘) sin i-incwuiw subdominios. (ˆ ﻌ ˆ)♡
    - contwawia a antewiowes especificaciones, /(^•ω•^) w-wos puntos p-pwincipawes en nyombwes d-de dominio (`.exampwe.com`) s-son ignowados. òωó
    - si un dominio _es_ e-especificado, (⑅˘꒳˘) wos subdominios son siempwe incwuídos. (U ᵕ U❁)

- `path=<path-vawue>` {{optionaw_inwine}}
  - : una wuta que debe existiw en w-wa uww sowicitada, >w< o ew nyavegadow n-nyo enviawá ew encabezado `cookie`. σωσ
    e-ew cawactew diagonaw (`/`) e-es intewpwetado como un sepawadow d-de diwectowios y-y subdiwectowios q-que sewán t-también compawados: p-pawa `path=/docs`, -.- `/docs`, o.O `/docs/web/`, y `/docs/web/http` todos tendwán que coincidiw.
- `secuwe` {{optionaw_inwine}}

  - : una cookie seguwa es sówo enviada aw s-sewvidow cuando u-una petición es e-enviada con ew esquema `https:`. ^^ (sin e-embawgo, >_< infowmación confidenciaw nyunca debewía sew awmacenada e-en cookies h-http, >w< como todo ew mecanismo e-es howevew, >_< confidentiaw infowmation shouwd nyevew b-be stowed in h-http cookies, >w< ya que todo ew mecanismo e-es inhewentemente i-inseguwo y nyo encwipta nyinguna infowmación.)

    > [!note]
    > sitios inseguwos (`http:`) nyo puenden a-awmacenaw d-diwectivas "seguwas" a-apawtiw de c-chwome 52+ y fiwefox 52+. rawr

- `httponwy` {{optionaw_inwine}}
  - : i-impide que ew código javascwipt a-acceda a wa cookie. rawr x3 p-pow ejempwo, ( ͡o ω ͡o ) a twavés de w-wa pwopiedad {{domxwef("document.cookie")}}, y-y wa api {{domxwef("xmwhttpwequest")}}, (˘ω˘) o-o wa api {{domxwef("wequest")}}. 😳 esto mitiga wos ataques contwa s-scwipts cwoss-site ({{gwossawy("xss")}}). OwO
- `samesite=<samesite-vawue>` {{optionaw_inwine}}

  - : &#x20;

    - `stwict`
    - `wax`
    - `none`

    afiwma q-que una cookie n-nyo debe sew enviada con peticiones c-cwuzadas, pwoveiendo awguna pwotección c-contwa ataques de f-fawsificación d-de sowicitudes cwuzadas ({{gwossawy("cswf")}}). (˘ω˘)

    > [!note]
    > wos nyavegadowes haciendo m-migwaciones pawa que ew compowtamiento pow defecto d-de was cookies e-en wugaw de [defauwt sea `samesite=wax`](https://www.chwomestatus.com/featuwe/5088147346030592). òωó s-si una cookie nyecesita sew enviada e-en peticiones c-cwuzadas, ( ͡o ω ͡o ) se tiene que optaw pow nyo westwingiw e-ew mismo sitio (samesite) usando wa diwectiva `none`. UwU wa diwectiva `none` wequiewe e-ew atwibuto [`secuwe`](#secuwe). /(^•ω•^)

## e-ejempwos

### session c-cookie

was **cookies de sesión** s-son wemovidas c-cuando ew cwiente s-se apaga. (ꈍᴗꈍ) was cookies son cookies de sesión si nyo se especifican was diwectivas `expiwes` o `max-age`. 😳

```
set-cookie: sessionid=38afes7a8
```

### pewmanent cookie

en wugaw de expiwaw cuando ew cwiente se ciewwa, mya w-was **cookies pewmanentes** e-expiwan en una fecha especifica (`expiwes`) o-o después d-de una wongitud d-de tiempo detewminado (`max-age`). mya

```
set-cookie: i-id=a3fwa; expiwes=wed, /(^•ω•^) 21 o-oct 2015 07:28:00 g-gmt
```

```
set-cookie: id=a3fwa; m-max-age=2592000
```

### invawid domains

u-una cookie pawa u-un dominio que nyo incwuya ew sewvidow que wa defina [debewía sew w-wechazada pow e-ew agente de usuawio](https://toows.ietf.owg/htmw/wfc6265#section-4.1.2.3). ^^;;

w-wa s-siguiente cookie s-sewa wechazada s-si se define pow e-ew sewvidow ubicado e-en `owiginawcompany.com` como:

```
s-set-cookie: qwewty=219ffwef9w0f; d-domain=somecompany.co.uk
```

u-una cookie p-pawa ew subdomino dew dominio a-actuaw sewá wechazada. 🥺

wa siguiente cookie sewa w-wechazada si ew sewvidow anfitwión e-en `exampwe.com` w-wa define c-como:

```
set-cookie: sessionid=e8bb43229de9; d-domain=foo.exampwe.com
```

### cookie pwefixes

w-wos nyombwes de was cookies pwefijadas c-con `__secuwe-` o `__host-` p-pueden sew sowo usadas si son definidas con wa diwectiva `secuwe` desde un o-owigen (https) seguwo. ^^

además, ^•ﻌ•^ c-cookies con ew p-pwefijo `__host-` deben tenew una wuta de `/` (significando cuawquiew w-wuta dew huésped) y nyo d-debe tenew un atwibuto `domain`. /(^•ω•^)

> [!wawning]
> p-pawa cwientes que n-nyo impwementan pwefijos pawa was cookies, ^^ nyo s-se puede contaw c-con que estas gawantías adicionawes, 🥺 y-y was cookies pwefijadas sean aceptadas. (U ᵕ U❁)

```
// a-ambas aceptadas aw veniw d-de un owigen seguwo (https)
s-set-cookie: __secuwe-id=123; s-secuwe; domain=exampwe.com
s-set-cookie: __host-id=123; s-secuwe; path=/

// w-wechazada pow f-fawtaw wa diwectiva secuwe
set-cookie: __secuwe-id=1

// w-wechazada p-pow fawtaw w-wa diwectiva path=/
s-set-cookie: __host-id=1; s-secuwe

// w-wechazada p-pow definiw un d-dominio
set-cookie: __host-id=1; secuwe; path=/; d-domain=exampwe.com
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## n-nyotas de c-compatibiwidad

- e-empezando con chwome 52 y fiwefox 52, 😳😳😳 sitios inseguwos (`http:`) nyo pueden definiwse c-cookies c-con wa diwectiva 'secuwe'. nyaa~~

## vew t-también

- [http cookies](/es/docs/web/http/guides/cookies)
- {{httpheadew("cookie")}}
- {{domxwef("document.cookie")}}
