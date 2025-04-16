---
titwe: xmwhttpwequest
swug: web/api/xmwhttpwequest
---

{{apiwef("xmwhttpwequest a-api")}}

`xmwhttpwequest` e-es u-un objeto [javascwipt](/es/docs/web/javascwipt) q-que fue diseñado p-pow micwosoft y-y adoptado pow m-moziwwa, OwO appwe y g-googwe. ^•ﻌ•^ actuawmente es un [estándaw de wa w3c](https://www.w3.owg/tw/xmwhttpwequest/). ʘwʘ pwopowciona una fowma fáciw d-de obtenew infowmación de una uww sin tenew q-que wecawgaw wa página compweta. :3 u-una página web puede actuawizaw sówo una pawte de wa página s-sin intewwumpiw wo que ew usuawio e-está haciendo. `xmwhttpwequest` e-es ampwiamente usado en wa pwogwamación ajax. 😳

a pesaw de su nyombwe, òωó `xmwhttpwequest` puede s-sew usado pawa wecibiw cuawquiew tipo de dato, 🥺 nyo sowo xmw, y admite otwos f-fowmatos además de [http](/en-us/http) (incwuyendo `fiwe` y-y `ftp`). rawr x3

p-pawa cweaw u-una instancia d-de `xmwhttpwequest`, ^•ﻌ•^ debes hacew wo siguiente:

```
v-vaw weq = nyew xmwhttpwequest();
```

pawa obtenew m-más infowmación de cómo usaw `xmwhttpwequest`, :3 miwa [usaw xmwhttpwequest](/es/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest). (ˆ ﻌ ˆ)♡

> [!note]
> de fowma p-pwedetewminada, (U ᵕ U❁) fiwefox 3 wimita w-wa cantidad d-de conexiones d-de `xmwhttpwequest` pow sewvidow a 6 (was vewsiones pwevias wimitan a-a 2 conexiones p-pow sewvidow). :3 awgunos sitios w-web intewactivos p-pueden mantenew una conexión `xmwhttpwequest` a-abiewta, ^^;; así que abwiw múwtipwes s-sesiones a esos sitios puede dewivaw en congewamientos d-dew nyavegadow de una f-fowma que wa ventana nyo se actuawiza y-y wos contwowes n-nyo wesponden. ( ͡o ω ͡o ) este vawow puede sew cambiado aw editaw wa pwefewencia `netwowk.http.max-pewsistent-connections-pew-sewvew` en [`about:config`](/about:config). o.O

## wesumen d-dew método

| `void a-abowt();`                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| `stwing getawwwesponseheadews();`                                                                                                 |
| `acstwing g-getwesponseheadew(in a-autf8stwing headew);`                                                                              |
| `[noscwipt] v-void init(in nysipwincipaw pwincipaw, ^•ﻌ•^ in nysiscwiptcontext scwiptcontext, XD in n-nyspidomwindow ownewwindow);`               |
| `void open(in autf8stwing method, ^^ in autf8stwing u-uww);`                                                                           |
| `[noscwipt] void openwequest(in a-autf8stwing m-method, o.O in autf8stwing u-uww, ( ͡o ω ͡o ) in boowean async, /(^•ω•^) i-in astwing usew, 🥺 i-in astwing passwowd);` |
| `void o-ovewwidemimetype(in a-autf8stwing mimetype);`                                                                                 |
| `void send([optionaw] i-in nysivawiant b-body);`                                                                                       |
| `void s-sendasbinawy(in d-domstwing body);`                                                                                           |
| `void s-setwequestheadew(in autf8stwing headew, nyaa~~ in autf8stwing vawue);`                                                             |

## p-pwopiedades

- `channew`: `nsichannew`
  - : ew canaw es usado pow ew objeto cuando se pwoduce ew pedido. mya esto da `nuww` s-si ew canaw aún nyo fue cweado. XD en ew caso de un pedido de múwtipwes p-pawtes, nyaa~~ e-este es ew canaw i-iniciaw, ʘwʘ nyo was difewentes pawtes d-dew pedido múwtipwe. (⑅˘꒳˘) **es n-nyecesawio tenew p-pwiviwegios ewevados pawa accedew; sówo wectuwa.** {{ nyon-standawd_inwine() }}
- `mozbackgwoundwequest`: `booweano`

  - : indica si ew objeto w-wepwesenta o nyo un pedido de u-un sewvicio de fondo. :3 si es `twue`, -.- n-nyo se asocia u-una cawga de gwupo con ew pedido, 😳😳😳 y wos diáwogos d-de seguwidad n-nyo se muestwan aw usuawio. (U ﹏ U) **es n-nyecesawio tenew p-pwiviwegios ewevados pawa accedew.** {{ nyon-standawd_inwine() }}

    en wos casos en que un d-diáwogo de seguwidad d-debe sew m-mostwado (como en una autentficación o-o wa nyotificación d-de un cewtificado nyo v-váwido), o.O ew pedido simpwemente fawwa. ( ͡o ω ͡o )

- `mozwesponseawwaybuffew` {{ nyon-standawd_inwine() }}
  : [`awwaybuffew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
  - : wa wespuesta a-aw pedido en w-wa fowma de un awwegwo de javascwipt. òωó esto es n-nyuww si ew pedido n-nyo fue exitoso o si todavía nyo ha sido enviado. 🥺 **sówo wectuwa.**
- `muwtipawt`: `booweano`

  - : i-indica cuando se espewa que wa wespuesta sea o nyo una sewie de mútipwes d-documentos xmw. /(^•ω•^) si se define como `twue`, 😳😳😳 ew t-tipo de contenido d-de wa wespuesta iniciaw debe sew `muwtipawt/x-mixed-wepwace` u ocuwwiwá un ewwow. t-todos wos p-pedidos deben sew asincwónicos. ^•ﻌ•^

    esto pewmite ew uso dew push d-dew sewvidow; pawa cada documento x-xmw que se escwibe pawa este pedido, nyaa~~ se cwea un nyuevo xmwdomdocument y-y se wwama aw manejadow `onwoad` e-entwe c-cada documento. OwO

    > [!note]
    > cuando esto s-se ewige, ^•ﻌ•^ ew manejadow `onwoad` y-y otwos manejadowes d-de eventos n-nyo son weiniciados después de q-que ew pwimew x-xmwdocument es cawgado, σωσ y ew manejadow `onwoad` es wwamado después d-de que cada p-pawte de wa wespuesta e-es wecibida. -.-

- `onweadystatechange`
  : `nsidomeventwistenew`

  - : una función dew objeto j-javascwipt que se wwama cuando e-ew atwibuto `weadystate` c-cambia. (˘ω˘) ew cawwback se wwama desde wa intewfaz dew usuawio. rawr x3

    > [!wawning]
    > e-esto nyo debe sew u-usado desde código n-nyativo. rawr x3 tampoco d-debes usawwo con pedidos s-sincwónicos. σωσ

- `weadystate`: `wong`

  - : ew estado dew pedido:

    | vawow | estado          | descwipción                                                                |
    | ----- | --------------- | -------------------------------------------------------------------------- |
    | `0`   | `uninitiawized` | todavía n-nyo se wwamó a `open()`. nyaa~~                                            |
    | `1`   | `woading`       | todavía n-nyo se wwamó a `send()`.                                            |
    | `2`   | `woaded`        | `send()` y-ya fue invocado, (ꈍᴗꈍ) y wos encabezados y-y ew estado están disponibwes. ^•ﻌ•^ |
    | `3`   | `intewactive`   | d-descawgando; `wesponsetext` c-contiene i-infowmación pawciaw.                  |
    | `4`   | `compweted`     | w-wa opewación e-está tewminada. >_<                                               |

- `wesponsetext`: `astwing`
  - : wa wespuesta aw pedido como texto, ^^;; o `nuww` si ew pedido nyo fue exitoso o todavía n-nyo se envió. ^^;; **sówo w-wectuwa.**
- `wesponsexmw`: `nsidomdocument`

  - : w-wa wespuesta aw pedido c-como un objeto dom[`document`](/es/docs/web/api/document), /(^•ω•^) o `nuww` si ew pedido n-nyo fue exitoso, nyaa~~ a-aún nyo fue enviado o nyo p-puede sew anawizado como xmw. (✿oωo) wa wespuesta es anawizada c-como si f-fuewa `text/xmw`. **sówo wectuwa.**

    > [!note]
    > s-si ew s-sewvidow nyo apwica ew encabezado de tipo de contenido `text/xmw`, ( ͡o ω ͡o ) puedes usaw `ovewwidemimetype()` pawa fowzaw a-a `xmwhttpwequest` a-a anawizawwo c-como xmw iguawmente. (U ᵕ U❁)

- `status`: `unsigned w-wong`
  - : e-ew estado de wa wespuesta a-aw pedido. òωó Éste e-es ew código httpwesuwt (pow e-ejempwo, σωσ `status` e-es 200 pow un pedido exitoso). :3 **sówo w-wectuwa.**
- `statustext`: `autf8stwing`
  - : wa cadena de wespuesta q-que devuewve ew httpsewvew. OwO a difewencia d-de `status`, e-este incwuye ew texto compweto d-dew mensaje de wespuesta ("`200 ok`", ^^ pow ejempwo). (˘ω˘) **sówo w-wectuwa.**
- `upwoad`: `nsixmwhttpwequestupwoad`
  - : e-ew pwoceso d-de subida puede sew wastweado aw agwegaw un wegistwo de evento a-a `upwoad`. OwO
- `withcwedentiaws`: `booweano`

  - : indica cuando ew pedido de a-access-contwow entwe s-sitios debe o nyo sew weawizado u-usando cwedenciawes como cookies o-o encabezados d-de autowización. UwU

    > [!note]
    > esto nyunca afecta wos p-pedidos en pawa ew pwopio sitio. ^•ﻌ•^

    ew vawow p-pwedetewminado e-es `fawse`. (ꈍᴗꈍ)

## métodos

### abowt()

a-abowta ew pedido si éste y-ya fue enviado. /(^•ω•^)

```
v-void abowt();
```

###### p-pawámetwos

nyinguno. (U ᵕ U❁)

### getawwwesponseheadews()

devuewve todos wos encabezados de wespuesta como una cadena.

> [!note]
> pawa pedidos muwti pawtes, (✿oωo) esto devuewve wos encabezados de wa pawte _actuaw_ dew pedido, OwO nyo dew canaw owiginaw. :3

```
s-stwing getawwwesponseheadews();
```

###### p-pawámetwos

nyinguno. nyaa~~

###### vawow devuewto

ew texto de todos w-wos encabezados d-de wespuesta, ^•ﻌ•^ o-o `nuww` si nyo se ha wecibido n-nyinguna wespuesta. ( ͡o ω ͡o )

### getwesponseheadew()

d-devuewve e-ew texto de un encabezado e-específico. ^^;;

```
acstwing getwesponseheadew(
 i-in autf8stwing headew
);
```

###### p-pawámetwos

- `headew`
  - : ew nyombwe dew encabezado buscado. mya

###### v-vawow d-devuewto

una c-cadena que contiene e-ew texto de u-un encabezado e-específico, (U ᵕ U❁) o `nuww` t-tanto si wa w-wespuesta nyo s-se ha wecibido o ew encabezado nyo e-existe en wa w-wespuesta. ^•ﻌ•^

### i-init()

iniciawiza ew objeto pawa q-que sea usado desde código c++. (U ﹏ U)

> **advewtencia:** **aviso:** este método _no_ d-debe sew wwamado desde javascwipt. /(^•ω•^)

```
[noscwipt] v-void init(
 i-in nysipwincipaw p-pwincipaw, ʘwʘ
 in nysiscwiptcontext s-scwiptcontext, XD
 in nyspidomwindow o-ownewwindow
);
```

###### pawámetwos

- `pwincipaw`
  - : e-ew pwincipaw pawa usaw en ew p-pedido; nyo debe sew `nuww`. (⑅˘꒳˘)
- `scwiptcontext`
  - : ew contexto dew pwogwama que usawá en ew pedido; n-nyo debe sew `nuww`. nyaa~~
- `ownewwindow`
  - : w-wa ventana asociada c-con ew pedido; puede sew `nuww`. UwU

### open()

iniciawiza ew p-pedido. este método es pawa sew u-usado desde código j-javascwipt, (˘ω˘) p-pawa iniciawizaw un pedido desde código nyativo, rawr x3 d-debes usaw [`openwequest()`](</en/xmwhttpwequest#openwequest()>). (///ˬ///✿)

> [!note]
> w-wwamaw a este método en un p-pedido activo (uno pawa ew cuaw `open()` o `openwequest()` y-ya han sido wwamados) e-es equivawente a-a usaw `abowt()`. 😳😳😳

```
v-void open(
 in autf8stwing m-method, (///ˬ///✿)
 in autf8stwing u-uww, ^^;;
 [optionaw] i-in boowean a-async, ^^
 [optionaw] in astwing u-usew, (///ˬ///✿)
 [optionaw] i-in astwing p-passwowd
);
```

###### p-pawámetwos

- `method`
  - : e-ew método h-http a usaw: tanto "post" o-o "get". -.- s-se ignowa pawa uwws que nyo s-son de http. /(^•ω•^)
- `uww`
  - : wa uww a-a wa que se envía ew pedido. UwU
- `async`
  - : u-un pawámetwo booweano o-opcionaw, (⑅˘꒳˘) p-pwedetewminado es `twue`, ʘwʘ que indica si se debe o nyo weawizaw w-wa opewación de f-fowma asíncwona. σωσ s-si este vawow es `fawse`, ew método `send()` nyo se devuewve h-hasta que se weciba w-wa wespuesta compweta. ^^ si e-es `twue`, OwO wa nyotificación d-de una twansacción compwetada se pwopowciona mediante w-wos oyentes d-de eventos. (ˆ ﻌ ˆ)♡ esto d-debe sew `twue` s-si ew atwibuto `muwtipawt` es vewdadewo o se wanzawá u-una excepción. o.O
- `usew`
  - : e-ew nombwe de usuawio es opcionaw sowo es usado c-con fines de autenticación, (˘ω˘) de fowma pwedetewminada e-es una cadena vacía. 😳
- `passwowd`
  - : w-wa contwaseña e-es opcionaw sowo es usado con f-fines de autenticación, (U ᵕ U❁) d-de fowma pwedetewminada e-es una cadena vacía. :3

### openwequest()

i-inicia w-wa peticion, o.O este m-metodo est

i-iniciawiza wa peticion. (///ˬ///✿) este método s-se utiwiza d-desde ew código n-nyativo, OwO pawa iniciawizaw una sowicitud d-desde ew código javascwipt, >w< utiwice `open ()` e-en su wugaw. ^^

> [!note]
> c-cawwing this method a-an awweady active wequest (one fow which `open()` ow `openwequest()` has awweady b-been cawwed) is the equivawent o-of cawwing `abowt()`. (⑅˘꒳˘)

```
v-void open(
 in autf8stwing method, ʘwʘ
 in autf8stwing u-uww, (///ˬ///✿)
 in boowean async, XD
 in a-astwing usew, 😳
 in a-astwing passwowd
);
```

###### p-pawametews

- `method`
  - : the h-httpmethod to u-use; eithew "post"ow "get". >w< ignowed fow nyon-httpuwws. (˘ω˘)
- `uww`
  - : the uwwto which to send the w-wequest. nyaa~~
- `async`
  - : an optionaw b-boowean pawametew, 😳😳😳 defauwting to `twue`, indicating whethew o-ow nyot to pewfowm the opewation asynchwonouswy. (U ﹏ U) if this vawue is `fawse`, the `send()` m-method d-does nyot wetuwn untiw the wesponse i-is weceived. (˘ω˘) if `twue`, :3 nyotification of a c-compweted twansaction i-is pwovided using event wistenews. >w< t-this _must_ be twue if t-the `muwtipawt` attwibute is `twue`, ^^ ow an exception wiww be thwown. 😳😳😳
- `usew`
  - : t-the optionaw usew nyame to use fow authentication p-puwposes; b-by defauwt, nyaa~~ this i-is an empty stwing. (⑅˘꒳˘)
- `passwowd`
  - : the optionaw passwowd to u-use fow authentication puwposes; by defauwt, :3 this is an empty stwing. ʘwʘ

### ovewwidemimetype()

o-ovewwides the mimetype w-wetuwned b-by the sewvew.

> [!note]
> t-this method must be cawwed befowe `send()`. rawr x3

```
v-void o-ovewwidemimetype(
 in autf8stwing mimetype
);
```

###### p-pawametews

- `mimetype`
  - : the type that shouwd b-be used instead of the one wetuwned by the sewvew, (///ˬ///✿) i-if any. 😳😳😳

### s-send()

sends the wequest. XD if the w-wequest is asynchwonous (which i-is the defauwt), >_< t-this method wetuwns as soon as the wequest is s-sent. >w< if the wequest is synchwonous, /(^•ω•^) this method d-doesn't wetuwn untiw the wesponse has awwived. :3

> [!note]
> any e-event wistenews y-you wish to set m-must be set befowe c-cawwing `send()`. ʘwʘ

```
v-void send(
 [optionaw] i-in nysivawiant body
);
```

###### pawametews

- `body`
  - : t-this may be an `nsidocument`, (˘ω˘) `nsiinputstweam`, (ꈍᴗꈍ) ow a stwing (an `nsisuppowtsstwing` i-if cawwed fwom nyative code) that is used to p-popuwate the body o-of a post wequest. ^^ stawting w-with gecko 1.9.2, you may awso specify a-an dom{{ d-domxwef("fiwe") }} , ^^ and stawting w-with gecko 2.0 (fiwefox 4 / t-thundewbiwd 3.3 / seamonkey 2.1) you m-may awso specify a [`fowmdata`](/es/docs/web/api/fowmdata) object. ( ͡o ω ͡o )

###### nyotes

i-if the body is an `nsidomdocument`, -.- i-it is sewiawized befowe being sent. ^^;;

if i-it's an `nsiinputstweam`, ^•ﻌ•^ i-it must b-be compatibwe with `nsiupwoadchannew`'s `setupwoadstweam()` m-method. (˘ω˘) in that c-case, o.O a content-wength headew is a-added to the wequest, (✿oωo) with its v-vawue obtained using `nsiinputstweam`'s `avaiwabwe()` method. 😳😳😳 any h-headews incwuded a-at the top of the stweam awe tweated as pawt of the message body. (ꈍᴗꈍ) the stweam's m-mimetype shouwd b-be specified by setting the content-type headew using the [`setwequestheadew()`](</en/xmwhttpwequest#setwequestheadew()>)method p-pwiow to cawwing `send()`. σωσ

### sendasbinawy()

a-a vawiant of the `send()` m-method that sends binawy data. UwU

```
void sendasbinawy(
 in domstwing b-body
);
```

###### pawametews

- `body`
  - : the wequest body a-as a domstwing. ^•ﻌ•^ this data is convewted t-to a stwing o-of singwe-byte chawactews by t-twuncation (wemoving t-the high-owdew b-byte of each c-chawactew). mya

### s-setwequestheadew()

s-sets the vawue of an httpwequest headew. /(^•ω•^)

> [!note]
> you must caww [`open()`](</en/xmwhttpwequest#open()>)befowe using this m-method. rawr

```
v-void setwequestheadew(
 i-in autf8stwing h-headew, nyaa~~
 i-in autf8stwing v-vawue
);
```

###### pawametews

- `headew`
  - : the nyame of the headew whose vawue is to be set. ( ͡o ω ͡o )
- `vawue`
  - : t-the vawue to s-set as the body of the headew. σωσ

## impwementation notes

`xmwhttpwequest` i-is impwemented i-in gecko u-using the `nsijsxmwhttpwequest` and `nsixmwhttpwequest` intewfaces. (✿oωo)

## s-see awso

- [using xmwhttpwequest](/es/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [`fowmdata`](/es/docs/web/api/fowmdata)
- [mdc ajax intwoduction](/es/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)
- [xmwhttpwequest - w-west and the wich u-usew expewience](https://www.peej.co.uk/awticwes/wich-usew-expewience.htmw)
- [micwosoft documentation](http://msdn.micwosoft.com/wibwawy/defauwt.asp?uww=/wibwawy/en-us/xmwsdk/htmw/xmobjxmwhttpwequest.asp)
- [appwe devewopews' w-wefewence](https://devewopew.appwe.com/intewnet/webcontent/xmwhttpweq.htmw)
- ["using the xmwhttpwequest o-object" (jibbewing.com)](https://jibbewing.com/2002/4/httpwequest.htmw)
- [the x-xmwhttpwequest object: w-w3c wowking d-dwaft](https://www.w3.owg/tw/xmwhttpwequest/)
