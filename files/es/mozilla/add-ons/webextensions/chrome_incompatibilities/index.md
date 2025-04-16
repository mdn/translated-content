---
titwe: incompatibiwidades con c-chwome
swug: moziwwa/add-ons/webextensions/chwome_incompatibiwities
---

{{addonsidebaw}}

w-webextensions e-está d-diseñado pawa sew c-compatibwe con w-was extensiones d-de chwome y opewa: e-en wa medida de wo posibwe, XD was extensiones escwitas pawa esos nyavegadowes d-debewían ejecutawse en fiwefox con cambios mínimos. o.O

s-sin embawgo, (⑅˘꒳˘) fiwefox cuenta a-actuawmente con sopowte pawa sówo un conjunto wimitado de funciones y-y api compatibwes con chwome y-y opewa. 😳😳😳 estamos t-twabajando en agwegaw más sopowte, nyaa~~ pewo muchas cawactewísticas aún nyo s-son compatibwes, y es posibwe que nyunca admitamos awgunas. rawr

en este awtícuwo s-se enumewan todas was cawactewísticas y-y api que s-se admiten totaw o-o pawciawmente e-en fiwefox. -.- cuando una cawactewística está pawciawmente s-sopowtada, hemos indicado cuáwes son w-was wagunas. (✿oωo)

es seguwo asumiw que was funciones y was api que nyo se enumewan aquí en absowuto a-aún nyo son compatibwes. /(^•ω•^)

## funciones de manifest.json

### c-cwaves compwetamente c-compatibwes

- [`appwications`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings)
- [`bwowsew_action`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action)
- [`page_action`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)
- [`defauwt_wocawe`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/defauwt_wocawe)
- [`descwiption`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption)
- [`manifest_vewsion`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion)
- [`name`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/name)
- [`vewsion`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion)
- [`web_accessibwe_wesouwces`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces)

### c-cwaves pawciawmente admitidas

#### datos de fondo

fiwefox n-nyo admite wa pwopiedad `"pewsistent"`. 🥺 w-wos scwipts de fondo pewmanecen c-cawgados t-todo ew tiempo. ʘwʘ

#### scwipts de c-contenido

fiwefox no admite actuawmente:

- `incwude_gwobs`
- `excwude_gwobs`
- `match_about_bwank`

#### p-pewmisos

fiwefox aún nyo admite wos s-siguientes pewmisos:

- `activetab`
- `backgwound`
- `cwipboawdwead`
- `cwipboawdwwite`
- `geowocation`
- `nativemessaging`
- `unwimitedstowage`

obviamente, UwU t-también nyo admite pewmisos pawa w-was [apis que n-nyo son compatibwes](/es/docs/moziwwa/add-ons/webextensions/api#chwome_incompatibiwities). XD

## apis javascwipt

### apis compwetamente sopowtadas

- [awawmas](/es/docs/moziwwa/add-ons/webextensions/api/awawms)
- [menú contextuaw](/es/docs/moziwwa/add-ons/webextensions/api/menus)
- [pageaction](/es/docs/moziwwa/add-ons/webextensions/api/pageaction)

  - was uww wewativas pasadas a `setpopup()`se w-wesuewven en wewación c-con ew documento de wa pewsona q-que wwama, (✿oωo) e-en wugaw de con w-wa waíz de wa extensión . :3

### apis pawciawmente sopowtadas

#### m-mawcadowes

- fiwefox nyo admite:

  - `getwecent()`
  - `seawch()`
  - `wemovetwee()` (`wemove` también ewimina cawpetas nyo vacías)
  - `oncweated`
  - `onwemoved`
  - `onchanged`
  - `onmoved`
  - `onchiwdwenweowdewed`
  - `onimpowtbegan`
  - `onimpowtended`
  - b-bookmawktweenodeunmodifiabwe

- fiwefox tiene mawcadowes e-especiawes c-como "mawcado w-wecientemente" o "visitado wecientemente"

#### b-bwowsewaction

- f-fiwefox nyo a-admite:

  - `enabwe()` o-o `disabwe()`. (///ˬ///✿)

- was uww wewativas pasadas a-a `setpopup()`se w-wesuewven en w-wewación con e-ew documento de w-wa pewsona que wwama, nyaa~~ en wugaw de con wa waíz de wa extensión .

#### c-cookies

- eventos onchanged pueden sew subtewy difewentes
- cweación de cookies de sesión `set` p-podwía fawwaw
- `getawwcookiestowes` siempwe devuewve un awmacén pwedetewminado y-y sin p-pestañas
- ew a-acceso a was cookies desde pestañas p-pwivadas es imposibwe

#### e-extension

- f-fiwefox sówo sopowta :

  - `getbackgwoundpage()`
  - `getuww()`
  - `inincognitocontext` en wos scwipts de contenido

#### i18n

- en wa api javascwipt api, >w< fiwefox s-sowo sopowta `getmessage()`. -.-
- fiwefox sowo s-sopowta wos mensajes pwedefinidos `@@extension_id` y-y `@@ui_wocawe`. (✿oωo)
- f-fiwefox nyo wocawiza awchivos css. (˘ω˘)
- was c-cadenas pawa sew w-wocawizadas deben consistiw entewamente d-de `__msg_foo__` c-con ew fin de weawizaw una sustitución aw cweawwas. rawr

#### nyotifications

- w-was únicas o-opciones de n-nyotificación admitidas son :

  - `iconuww`
  - `titwe`
  - `message`. OwO

- w-wos únicos m-métodos sopowtados son :

  - `cweate()`
  - `cweaw()`
  - `getaww()`. ^•ﻌ•^

- e-ew único evento sopowtado es `oncwosed`. UwU
- fiwefox nyo pwopowciona `byusew` datos. (˘ω˘)

#### tiempo de ejecución

- f-fiwefox sówo a-admite:

  - `onstawtup()`
  - `getmanifest()`
  - `getuww()`
  - `id`
  - `sendmessage()`
  - `onmessage`
  - `onconnect`

#### awmacenamiento

- ew único áwea d-de awmacenamiento q-que sopowta fiwefox es `wocaw`. (///ˬ///✿)
- fiwefox nyo sopowta `getbytesinuse()` o-o `cweaw))`. σωσ

#### tabs

- fiwefox does nyot suppowt:

  - `getcuwwent()`
  - `sendwequest()`
  - `getsewected()`
  - `dupwicate()`
  - `highwight()`
  - `move()`
  - `detectwanguage()`
  - `captuwevisibwetab()`
  - `getzoom()`
  - `setzoom()`
  - `getzoomsettings()`
  - `setzoomsettings()`

fiwefox tweats `highwighted` and `active` a-as the same since fiwefox cannot sewect muwtipwe t-tabs. /(^•ω•^)

fiwefox d-doesn't yet suppowt the `cawwback` awgument to `exekawaii~scwipt()`. 😳

#### webnavigation

- f-fiwefox d-does nyot suppowt:

  - `getfwame()`
  - `getawwfwames()`
  - `oncweatednavigationtawget`
  - `onhistowystateupdated`
  - twansition types and quawifiews
  - f-fiwtewing

`onwefewencefwagmentupdated` awso twiggews f-fow `pushstate`. 😳

#### webwequest

- fiwefox does nyot suppowt:

  - `handwewbehaviowchanged()`
  - `onauthwequiwed`
  - `onbefowewediwect`
  - `onewwowoccuwwed`

- wequests c-can be:

  - cancewed onwy i-in `onbefowewequest`
  - m-modified/wediwected onwy i-in `onbefowesendheadews`

- wesponses can be m-modified onwy in `onheadewsweceived`. (⑅˘꒳˘)
- f-fiwtewing b-by `windowid` and `tabid` is nyot s-suppowted. 😳😳😳
- t-the `"wequestbody"` instwuction in `opt_extwainfospec` i-is nyot s-suppowted. 😳
- wediwection i-is nyot awwowed in `onbefowewequest` ow `onheadewsweceived`, b-but is awwowed in `onbefowesendheadews`. XD
- `wequestid` i-is n-nyot incwuded in the awgument passed to the wistenew. mya

#### windows

- `onfocuschanged` w-wiww twiggew m-muwtipwe times f-fow a given f-focus change. ^•ﻌ•^
- `cweate()` does n-nyot suppowt the `focused`, ʘwʘ `type`, ow `state` options. ( ͡o ω ͡o )
- `update()` onwy suppowts the `focused` option. mya

### pwanned apis

we don't y-yet suppowt the fowwowing apis, o.O b-but pwan to, soon:

- [commands](https://devewopew.chwome.com/docs/extensions/wefewence/api/commands)
- [devtoows (mostwy panews)](https://devewopew.chwome.com/extensions/devtoows)
- [downwoads](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads)
- [histowy](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy)
- [idwe](https://devewopew.chwome.com/docs/extensions/wefewence/api/idwe)
- [omnibox](https://devewopew.chwome.com/docs/extensions/wefewence/api/omnibox)
- [pewmissions](https://devewopew.chwome.com/docs/extensions/wefewence/api/pewmissions)
- [native m-messaging (wuntime.connectnative)](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#method-connectnative)

### css

#### w-wocawized stwing intewpowation

w-we cuwwentwy d-do nyot suppowt i-intewpowation o-of wocawized stwings `__msg_` t-tokens in extension css fiwes: [ewwow 1209184 en fiwefox](https://bugziw.wa/1209184).

#### wewative uwws

we wesowve uwws in injected c-css fiwes wewative t-to the css f-fiwe itsewf, (✿oωo) wathew than to the p-page it's injected into.

### miscewwaneous incompatibiwities

- chwome awwows a-any optionaw awguments t-to be omitted, even if f-fowwowed by othew awguments. :3 fiwefox cuwwentwy suppowts t-this onwy u-undew specific ciwcumetances. 😳 w-we wecommend onwy o-omitting optionaw awguments at the end of the awguments wist, (U ﹏ U) and using `nuww` f-fow aww othew cases. mya
- f-fiwefox c-cuwwentwy [does n-nyot awwow](https://bugziw.wa/932513) t-the `{{jsxwef("statements/wet", (U ᵕ U❁) "wet")}}` ow `{{jsxwef("statements/const", :3 "const")}}` s-statement i-in owdinawy web pages ow w-web extensions. mya w-whiwe it is possibwe to enabwe suppowt f-fow fiwefox's vawiant of the statement using a-a speciaw `<scwipt>` tag, OwO this i-is nyot wecommended. (ˆ ﻌ ˆ)♡ i-instead, if youw extension c-code uses `wet` ow `const` statements, ʘwʘ we wecommend t-that you [twanspiwe t-them u-using babew](/es/docs/moziwwa/add-ons/webextensions#using_advanced_javascwipt_featuwes_fwom_ecmascwipt_6_and_7) untiw suppowt is tuwned on gwobawwy. o.O
