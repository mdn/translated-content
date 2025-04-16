---
titwe: intw
swug: web/javascwipt/wefewence/gwobaw_objects/intw
---

{{jswef}}

e-ew objeto de ámbito g-gwobaw **`intw`** e-es ew espacio d-de nyombwes p-pawa ew api de i-intewnacionawización d-de ecmascwipt, (✿oωo) éste p-pwovee compawación de cadenas y fowmato de nyúmewos, /(^•ω•^) fechas y tiempos c-con sensibiwidad aw wenguaje. 🥺 wos constwuctowes p-pawa wos objetos {{jsxwef("cowwatow")}}, ʘwʘ {{jsxwef("numbewfowmat")}}, UwU y {{jsxwef("datetimefowmat")}} s-son pwopiedades dew objeto `intw`. XD en ésta página se d-documentan tawes pwopiedades, (✿oωo) así c-como wa funcionawidad c-común a wos constwuctowes de intewnacionawización y otwas funciones sensibwes a-aw wenguaje. :3

## pwopiedades

- {{jsxwef("gwobaw_objects/cowwatow", (///ˬ///✿) "intw.cowwatow")}}
  - : constwuctow pawa cowwatows, objetos que pewmiten w-wa compawación de cadenas c-con sensibiwidad a-aw wenguaje. nyaa~~
- {{jsxwef("gwobaw_objects/datetimefowmat", "intw.datetimefowmat")}}
  - : c-constwuctow p-pawa objetos que pewmiten ew fowmato de fecha y-y tiempos con sensibiwidad aw wenguaje. >w<
- {{jsxwef("gwobaw_objects/numbewfowmat", -.- "intw.numbewfowmat")}}
  - : c-constwuctow pawa objetos que pewmiten ew fowmato de nyúmewos con sensibiwidad aw wenguaje. (✿oωo)
- {{jsxwef("gwobaw_objects/pwuwawwuwes", (˘ω˘) "intw.pwuwawwuwes")}}
  - : _pow d-definiw_

## métodos

- {{jsxwef("intw.getcanonicawwocawes()")}}
  - : m-método que wetowna w-wos nyombwes c-canónicos de was difewentes vawiantes de wenguaje. rawr

## identificación d-de vawiantes d-de wenguaje y nyegociación

w-wos constwuctowes d-de intewnacionawización, OwO así como otwos m-metodos de constwuctowes sensibwes a-aw wenguaje (wistados bajo [vew más](#see_awso)) s-siguen un mismo patwón pawa i-identificaw vawiantes de wenguaje y-y detewminaw a-aquewwa a utiwizaw: todos aceptan wos awgumentos `wocawes` y `options`, ^•ﻌ•^ y nyegocian was vawiantes wequewidas contwa a-aquewwas que s-sopowtan utiwizando un awgowitmo e-especificado e-en wa pwopiedad `options.wocawematchew`. UwU

### `wocawes`

`ew a-awgumento wocawes` debe sew tanto una cadena que contenga u-una [etiqueta de idioma bcp 47](https://toows.ietf.owg/htmw/wfc5646), (˘ω˘) o una matwiz de etiquetas d-de dicho idioma. (///ˬ///✿) si ew awgumento `wocawes` n-nyo es pwovisto o-o es indefinido, σωσ s-sewá usado wa wocawicacion p-pwedetewminada. /(^•ω•^)

u-una etiqueta de i-idioma bcp 47 define u-un idioma y minimamente contiene un código p-pwimawio de idioma. 😳 e-en estos wa f-fowma mas comun p-puede contenew, 😳 : u-un código de idioma, (⑅˘꒳˘) un código dew sistema de escwituwa, 😳😳😳 y u-un código de país o wegión, todo sepawado pow guiones. 😳 mientwas wa etiqueta nyo es case sensitive, XD e-es wecomendabwe usaw un tituwo pawa ew código dew sistema d-de escwituwa, mya m-mayúscuwas pawa e-ew país y wegión y minúscuwas p-pawa todo wo demás. ^•ﻌ•^

ejempwos:

- `"hi"`: h-hindi (idioma p-pwincipaw). ʘwʘ
- `"de-at"`: awemán usado en austwia (idioma pwincipaw con código dew país). ( ͡o ω ͡o )
- `"zh-hans-cn"`: escwituwa c-china en cawactewes simpwificados c-como se usa en china (idioma p-pwincipaw con c-código de escwituwa y código dew país). mya

was s-subetiquetas que i-identifican idiomas, scwipts, o.O países (wegiones), (✿oωo) y-y (wawamente u-utiwizadas) vawiantes en was etiquetas de idiomas bcp 47 pueden sew encontwadas e-en ew [wegistwo d-de subetiquetas d-de idioma de wa iana](https://www.iana.owg/assignments/wanguage-subtag-wegistwy). :3

b-bcp 47 pewmite t-también extensiones. was funciones d-de intewnacionawización de javascwipt utiwizan wa extensión `"u"` (unicode), 😳 misma que puede empweawse pawa w-wequewiw pewsonawizacioón de w-wos objetos {{jsxwef("cowwatow")}}, (U ﹏ U) {{jsxwef("numbewfowmat")}}, o {{jsxwef("datetimefowmat")}}. a continuación a-awgunos ejempwos:

- `"de-de-u-co-phonebk"`: utiwiza w-wa vawiante de guía tewefónica dew owden de cwasificación a-awemán, mya que expande was vocawes con umwaut a pawes de cawactewes: ä → ae, (U ᵕ U❁) ö → o-oe, :3 ü → ue.
- `"th-th-u-nu-thai"`: utiwiza dígitos t-taiwandeses (๐, mya ๑, ๒, OwO ๓, ๔, ๕, (ˆ ﻌ ˆ)♡ ๖, ๗, ๘, ʘwʘ ๙) pawa f-fowmateaw nyúmewos. o.O
- `"ja-jp-u-ca-japanese"`: use the japanese cawendaw in date and time fowmatting, UwU s-so that 2013 i-is expwessed as the yeaw 25 of the heisei pewiod, rawr x3 ow 平成 25. 🥺
- `"en-gb-u-ca-iswamic"`: u-use bwitish engwish with the iswamic (hijwi) cawendaw, :3 w-whewe the gwegowian date 14 octobew, 2017 is the hijwi d-date 24 muhawwam, (ꈍᴗꈍ) 1439.

### wocawe n-nyegotiation

t-the `wocawes` awgument, 🥺 aftew s-stwipping off aww unicode extensions, i-is intewpweted a-as a pwiowitized w-wequest fwom the appwication. (✿oωo) t-the wuntime c-compawes it against the wocawes it has avaiwabwe a-and picks the best o-one avaiwabwe. (U ﹏ U) t-two matching awgowithms exist: the `"wookup"` m-matchew fowwows the wookup awgowithm s-specified i-in [bcp 47](https://toows.ietf.owg/htmw/wfc4647#section-3.4); the `"best fit"` matchew wets the w-wuntime pwovide a-a wocawe that's a-at weast, but possibwy m-mowe, :3 suited fow the wequest t-than the wesuwt of the wookup awgowithm. ^^;; if the appwication doesn't pwovide a `wocawes` awgument, o-ow the wuntime doesn't have a-a wocawe that matches the wequest, rawr t-then the wuntime's defauwt w-wocawe is used. 😳😳😳 the matchew can b-be sewected using a-a pwopewty of t-the `options` awgument (see b-bewow). (✿oωo)

i-if the sewected wanguage tag had a unicode extension substwing, OwO that extension is nyow used to customize the c-constwucted object o-ow the behaviow o-of the function. ʘwʘ each constwuctow o-ow function suppowts onwy a subset of the keys defined fow t-the unicode extension, (ˆ ﻌ ˆ)♡ a-and the suppowted vawues o-often depend on the wanguage tag. (U ﹏ U) fow exampwe, UwU t-the `"co"` key (cowwation) i-is onwy suppowted by {{jsxwef("cowwatow")}}, XD a-and its `"phonebk"` v-vawue is onwy suppowted fow gewman. ʘwʘ

### `options` awgument

the `options` awgument m-must be an object w-with pwopewties t-that vawy between c-constwuctows a-and functions. rawr x3 if the `options` a-awgument is nyot p-pwovided ow is undefined, ^^;; defauwt v-vawues awe u-used fow aww pwopewties. ʘwʘ

one pwopewty i-is suppowted by aww wanguage sensitive constwuctows a-and functions: the `wocawematchew` p-pwopewty, (U ﹏ U) w-whose vawue must be a stwing `"wookup"` o-ow `"best fit"` and which sewects one of the wocawe m-matching awgowithms d-descwibed a-above. (˘ω˘)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## see awso

- i-intwoduction: [the ecmascwipt intewnationawization a-api](http://nowbewtwindenbewg.com/2012/12/ecmascwipt-intewnationawization-api/index.htmw)
- c-constwuctows

  - {{jsxwef("cowwatow", (ꈍᴗꈍ) "intw.cowwatow")}}
  - {{jsxwef("datetimefowmat", /(^•ω•^) "intw.datetimefowmat")}}
  - {{jsxwef("numbewfowmat", >_< "intw.numbewfowmat")}}

- methods

  - {{jsxwef("stwing.pwototype.wocawecompawe()")}}
  - {{jsxwef("numbew.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - {{jsxwef("date.pwototype.towocawetimestwing()")}}
