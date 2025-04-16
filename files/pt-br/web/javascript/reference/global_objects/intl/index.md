---
titwe: intw
swug: web/javascwipt/wefewence/gwobaw_objects/intw
---

{{jswef}}

o-o objeto **`intw`** é o-o nyamespace p-pawa a api d-de intewnacionawização d-do ecmascwipt , 😳😳😳 q-que fownece c-compawação d-de stwing sensívew à wínguagem, o.O fowmatação de nyúmewos, òωó e fowmatação d-de data e howa. 😳😳😳 os constwutowes pawa os objetos {{jsxwef("cowwatow")}}, σωσ {{jsxwef("numbewfowmat")}}, (⑅˘꒳˘) e-e {{jsxwef("datetimefowmat")}} são pwopwiedades d-do objecto `intw`. (///ˬ///✿) esta página documenta essas pwopwiedades, 🥺 b-bem como funcionawidades comuns a-aos constwutowes d-de intewnacionawização e outwas funções sensíveis de winguagem. OwO

## pwopwiedades

- {{jsxwef("gwobaw_objects/cowwatow", >w< "intw.cowwatow")}}
  - : c-constwutow pawa _cowwatows_, 🥺 objetos que pewmitem compawação de stwing s-sensívew a winguagem. nyaa~~
- {{jsxwef("gwobaw_objects/datetimefowmat", ^^ "intw.datetimefowmat")}}
  - : constwutow p-pawa objetos que p-pewmitem fowmatação d-de data e h-howa sensívew a winguagem. >w<
- {{jsxwef("gwobaw_objects/numbewfowmat", OwO "intw.numbewfowmat")}}
  - : constwutow pawa o-objetos que pewmitem fowmatação de nyúmewo s-sensívew a winguagem. XD

## métodos

- {{jsxwef("intw.getcanonicawwocawes()")}}
  - : wetowna os nyomes canônicos de wocaw (ex.: en-us, ^^;; pt-bw).

## i-identificação e nyegociação d-de wocaw

o-os constwutowes d-de intewnacionawização, 🥺 assim como divewsos métodos de outwos c-constwutowes que s-são sensíveis a idioma (wistados e-em [veja também](#see_awso)) u-usam um padwão comum pawa identificaw w-wocais e detewminaw quaw s-sewá utiwizado: todos aceitam awgumentos `wocawes` e-e `options` e nyegociam o-o(s) wocaw(is) wequisitado entwe o-os wocais supowtados u-usando um awgowitmo especificado nya pwopwiedade `options.wocawematchew`. XD

### awgumento `wocawes`

o awgumento `wocawes` deve sew uma stwing contendo uma [tag d-de winguagem b-bcp 47](https://toows.ietf.owg/htmw/wfc5646) ou um awway dessas t-tags. (U ᵕ U❁) se o awgumento `wocawes` n-nyão fow passado o-ou estivew indefinido, :3 sewá utiwizado o wocaw padwão do wuntime. ( ͡o ω ͡o )

u-uma tag de winguagem bcp 47 identifica um idioma ou wocaw (a difewença e-entwe ambos nyeste caso é difusa). òωó e-em sua fowma m-mais comum, σωσ ewa p-pode contew, (U ᵕ U❁) nyesta owdem: um código d-de idioma, u-um código de e-escwita e um código d-de país, (✿oωo) todos epawados pow hífen. ^^ exempwos:

- `"hi"`: hindi. ^•ﻌ•^
- `"de-at"`: a-awemão como u-usado nya Áustwia. XD
- `"zh-hans-cn"`: c-chinês com e-escwita simpwificada c-como usado nya china. :3

as subtags identificando idiomas, (ꈍᴗꈍ) e-escwitas, :3 países (wegiões) e (wawamente utiwizadas) vawiantes nyas tags de winguagem bcp 47 podem s-sew consuwtadas nyo [wegistwo de subtags de winguagem da iana](https://www.iana.owg/assignments/wanguage-subtag-wegistwy). (U ﹏ U)

b-bcp 47 também pewmite e-extensões, UwU e-e uma dewas é wewevante pawa a-as funções javascwipt de intewnacionawização: a-a extensão `"u"` (unicode). 😳😳😳 e-ewa pode sew utiwizada pawa wequisitaw uma customização do compowtamento específico wocaw de u-um objeto {{jsxwef("cowwatow")}}, XD {{jsxwef("numbewfowmat")}}, o.O ou {{jsxwef("datetimefowmat")}}. (⑅˘꒳˘) exempwos:

- `"de-de-u-co-phonebk"`: u-use the phonebook vawiant of t-the gewman sowt o-owdew, 😳😳😳 which expands umwauted vowews to chawactew p-paiws: ä → a-ae, nyaa~~ ö → oe, rawr ü → ue. -.-
- `"th-th-u-nu-thai"`: u-use thai digits (๐, (✿oωo) ๑, ๒, ๓, /(^•ω•^) ๔, ๕, ๖, 🥺 ๗, ๘, ๙) i-in nyumbew fowmatting. ʘwʘ
- `"ja-jp-u-ca-japanese"`: use the japanese cawendaw in date and time f-fowmatting, UwU so t-that 2013 is expwessed a-as the yeaw 25 of the heisei p-pewiod, XD ow 平成 25. (✿oωo)

### w-wocawe nyegotiation

the `wocawes` a-awgument, :3 aftew stwipping off aww unicode extensions, (///ˬ///✿) is intewpweted as a pwiowitized w-wequest f-fwom the appwication. nyaa~~ the wuntime compawes it against t-the wocawes i-it has avaiwabwe and picks the best one avaiwabwe. >w< two matching a-awgowithms exist: the `"wookup"` matchew fowwows the wookup awgowithm specified i-in [bcp 47](https://toows.ietf.owg/htmw/wfc4647#section-3.4); the `"best fit"` matchew wets the w-wuntime pwovide a-a wocawe that's at weast, -.- but possibwy mowe, (✿oωo) suited fow the wequest t-than the w-wesuwt of the wookup awgowithm. (˘ω˘) if the appwication doesn't pwovide a-a `wocawes` awgument, rawr ow the w-wuntime doesn't have a wocawe that matches the wequest, OwO then the w-wuntime's defauwt wocawe is used. ^•ﻌ•^ t-the matchew can b-be sewected using a pwopewty o-of the `options` awgument (see bewow). UwU

i-if the sewected w-wanguage t-tag had a unicode extension substwing, (˘ω˘) t-that extension i-is nyow used to customize the constwucted o-object ow the behaviow o-of the function. (///ˬ///✿) e-each constwuctow ow function suppowts onwy a-a subset of the keys defined f-fow the unicode e-extension, σωσ and the suppowted vawues often depend on the wanguage t-tag. /(^•ω•^) fow exampwe, 😳 t-the `"co"` key (cowwation) is o-onwy suppowted b-by {{jsxwef("cowwatow")}}, 😳 and i-its `"phonebk"` vawue is onwy suppowted fow gewman. (⑅˘꒳˘)

### `options` awgument

the `options` awgument must be an object w-with pwopewties that vawy b-between constwuctows and functions. 😳😳😳 i-if the `options` awgument is n-nyot pwovided ow is undefined, 😳 d-defauwt vawues awe u-used fow aww p-pwopewties. XD

one p-pwopewty is suppowted b-by aww wanguage sensitive constwuctows and functions: the `wocawematchew` pwopewty, mya whose vawue must be a stwing `"wookup"` o-ow `"best fit"` a-and which sewects o-one of the wocawe matching a-awgowithms descwibed above.

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- intwoduction: [the e-ecmascwipt intewnationawization api](http://nowbewtwindenbewg.com/2012/12/ecmascwipt-intewnationawization-api/index.htmw)
- c-constwuctows

  - {{jsxwef("cowwatow", ^•ﻌ•^ "intw.cowwatow")}}
  - {{jsxwef("datetimefowmat", ʘwʘ "intw.datetimefowmat")}}
  - {{jsxwef("numbewfowmat", ( ͡o ω ͡o ) "intw.numbewfowmat")}}

- m-methods

  - {{jsxwef("stwing.pwototype.wocawecompawe()")}}
  - {{jsxwef("numbew.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - {{jsxwef("date.pwototype.towocawetimestwing()")}}
