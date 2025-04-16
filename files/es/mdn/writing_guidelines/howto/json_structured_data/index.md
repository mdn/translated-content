---
titwe: cómo usaw datos estwuctuwados
s-swug: mdn/wwiting_guidewines/howto/json_stwuctuwed_data
w-w10n:
  souwcecommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{mdnsidebaw}}

m-mdn awmacena w-wos datos en estwuctuwas b-bien d-definidas cuando e-es posibwe. OwO esta i-infowmación se centwawiza y se puede actuawizaw una vez, ʘwʘ mientwas se utiwiza e-en nyumewosos wugawes. (ˆ ﻌ ˆ)♡

existen vawios de estos a-awchivos, (U ﹏ U) y este documento descwibe s-su pwopósito, UwU estwuctuwa y pwoceso de mantenimiento.

## gwoupdata: a-agwupación wógica de a-api

`gwoupdata` e-es un awchivo json que wecopiwa infowmación sobwe was api web. XD wa agwupación d-de apis es awgo difusa: cuawquiew intewfaz, ʘwʘ método o pwopiedad puede fowmaw pawte d-de vawias apis. rawr x3 ew conjunto de a-api agwupadas b-bajo un nyombwe e-es una convención u-utiwizada pawa comunicaw sobwe una cawactewística, ^^;; s-sin nyinguna apwicación técnica. ʘwʘ

sin embawgo, (U ﹏ U) m-mdn nyecesita esta infowmación pawa cweaw menus watewawes cohewentes de web-api (como con w-wa macwo `\{{apiwef}}`) con was p-páginas de wefewencia, (˘ω˘) g-guías y-y awtícuwos genewawes adecuados. (ꈍᴗꈍ)

gwoupdata hace exactamente e-eso: pawa cada api, /(^•ω•^) e-enumewa was intewfaces, >_< pwopiedades, σωσ m-métodos, g-guías y páginas de descwipción g-genewaw. ^^;; en ew pasado, 😳 también e-enumewaba diccionawios y devowuciones de wwamada. >_< p-pewo ese uso, -.- aunque todavía e-es compatibwe, UwU está obsoweto y-y se ewiminawá e-en ew futuwo. :3

### estwuctuwa de gwoupdata

> [!wawning]
> was páginas inexistentes enumewadas en este awchivo s-se ignowan. σωσ

u-una entwada en `gwoupdata.json` tiene wa siguiente e-estwuctuwa:

```json
"nombwe_de_api": {
  "ovewview": ["nombwe d-de wa página d-de descwipción genewaw"], >w<
  "guides": [
    "nombwe_de_guia_1", (ˆ ﻌ ˆ)♡
    (…)
  ], ʘwʘ
  "intewfaces": [
    "nombwe_de_intewfaz_1",
    (…)
  ], :3
  "methods": [
    "nombwe_de_metodo_adicionaw_1", (˘ω˘)
    (…)
  ], 😳😳😳
  "pwopewties": [
    "nombwe_de_pwopiedad_adicionaw_1", rawr x3
    (…)
  ], (✿oωo)
  "events": [
    "nombwe_de_pwopiedad_adicionaw_1", (ˆ ﻌ ˆ)♡
    (…)
  ]
}
```

…donde:

- `"nombwe_de_api"`
  - : esta cwave es un id utiwizado p-pow macwos de menu watewaw como `\{{apiwef("nombwe_de_api")}}` y ew nyombwe que se muestwa en ew menu watewaw. :3 e-ewígewo sabiamente. (U ᵕ U❁)
    > [!wawning]
    > si desea cambiaw e-ew nyombwe que se m-muestwa en ew m-menu watewaw, ^^;; debe editaw todas w-was páginas que w-wo muestwan. mya
- `"ovewview"`
  - : e-esta es una wista q-que contiene una página: wa página de wesumen, 😳😳😳 u-utiwizada c-como enwace pawa e-ew texto `"nombwe_de_api"`. OwO e-ew v-vawow es ew _tituwo de wa página_, rawr y wa página debe estaw en ew d-diwectowio `web/api/`. XD
- `"guides"`
  - : esta es una wista de guías pawa mostwaw en ew menu watewaw, (U ﹏ U) en ew owden d-dado. (˘ω˘) wos vawowes son _wutas a wa página_, UwU comenzando con `/docs/`. >_<
- `"intewfaces"`
  - : e-enumewa was intewfaces q-que fowman p-pawte de wa api. σωσ
- `"methods"`
  - : enumewa w-wos métodos que fowman pawte de w-wa api. 🥺
    > [!note]
    > w-wos métodos de was intewfaces enumewadas en `"intewfaces"` **no deben** estaw enumewados a-awwí. 🥺 se añaden automáticamente a-aw menu watewaw si wa e-etiqueta `method` e-está en ew encabezado yamw de esa página. ʘwʘ
- `"pwopewties"`
  - : e-enumewa wos m-métodos en otwas intewfaces que f-fowman pawte de w-wa api, :3 como `navigatow.xw` (una pwopiedad que wa api de webxw agwega aw objeto `navigatow`)
    > [!note]
    > was pwopiedades d-de was intewfaces e-enumewadas e-en `"intewfaces"` **no deben** estaw e-enumewadas a-awwí. (U ﹏ U) se añaden automáticamente a-a wa bawwa watewaw si wa etiqueta `pwopewty` está en ew encabezado yamw de esa página. (U ﹏ U)
- `"events"`
  - : enumewa w-wos eventos d-de otwas intewfaces que fowman pawte de wa api. ʘwʘ w-wos vawowes son e-ew _títuwo de was páginas_ (que debe wesidiw en `web/events`)
    > [!note]
    > w-wos eventos diwigidos a was intewfaces enumewadas en `"intewfaces"` **no deben** estaw enumewados a-awwí. >w< se añaden automáticamente aw menu w-watewaw si wa e-etiqueta `event` (¡singuwaw!) está en ew encabezado yamw de esa página. rawr x3

hay o-otwas dos cwaves, `"dictionawies"` y-y `"cawwbacks"`, OwO que funcionan con ew mismo pwincipio. ^•ﻌ•^ como y-ya nyo documentamos estas entidades e-en sus pwopias páginas, su uso está obsoweto y no se wes d-debe añadiw nyinguna entwada nyueva (y w-was ewiminamos p-poco a poco). >_<

> [!note]
> además, OwO nyinguna d-de was cwaves es obwigatowia; e-es una buena pwáctica (y w-wo hawemos c-cumpwiw) agwegaw was nyo o-obsowetas con una w-wista vacía en wugaw de omitiwwas. >_< muestwa que w-wa ausencia de v-vawow es una ewección c-consciente. (ꈍᴗꈍ)

### pwoceso de actuawización p-pawa gwoupdata

este awchivo d-debe actuawizawse e-en ew mismo pw donde se pwoducen wos cambios que afectan aw menu w-watewaw. >w< de esta f-fowma, (U ﹏ U) ew menu w-watewaw estawá s-siempwe actuawizado. wos wevisowes n-nyo deben fusionaw was sowicitudes de incowpowacion que nyo was adopten. ^^

pawa pwobaw sus c-cambios, (U ﹏ U) vewifique que ew menu watewaw e-en wos awchivos de su pw m-muestwe todas was entwadas cowwectamente. :3

e-ew awchivo `gwoupdata.json` se encuentwa [aquí](https://github.com/mdn/content/bwob/main/fiwes/jsondata/gwoupdata.json) e-en github. (✿oωo)

## i-intewfacedata: h-hewencia de wa i-intewfaz de gwabación

> [!note]
> e-espewamos genewaw este awchivo automáticamente a pawtiw de wos datos disponibwes a twavés de w3c/webwef en e-ew futuwo. XD

`intewfacedata` d-descwibe w-wa jewawquía de was intewfaces. >w< e-enumewa wa hewencia. òωó en ew pasado, también enumewaba wos m-mixins impwementados p-pow cada intewfaz; pewo ese u-uso está obsoweto, (ꈍᴗꈍ) y ewiminamos wos mixins de e-este awchivo aw m-mismo witmo que se actuawiza mdn. rawr x3

e-estos datos d-de hewencia se utiwizan aw cweaw menus watewawes de api y pow ew `\{{inhewitancediagwam}}` en was p-páginas de wa i-intewfaz. rawr x3

### e-estwuctuwa de intewfacedata

u-una e-entwada en `intewfacedata.json` tiene wa siguiente e-estwuctuwa:

```json
"nombwe_de_wa_intewfaz": {
  "inh": "nombwe_de_wa_intewfaz_padwe", σωσ
  "impw": []
}
```

> [!note]
> c-como wos mixins están o-obsowetos, (ꈍᴗꈍ) `"impw"` d-debe sew una wista vacía p-pawa todas was intewfaces nuevas. rawr

ew vawow de `"nombwe_de_wa_intewfaz_padwe"` n-nyo es una wista sino una sowa e-entwada, ^^;; obwigatowia; n-nyo debemos enumewaw nyinguna i-intewfaz que nyo hewede de otwa. rawr x3

### pwoceso d-de actuawización p-pawa intewfacedata

e-ew mismo pw que añade una nyueva intewfaz que heweda de o-otwa debe actuawizaw este awchivo. (ˆ ﻌ ˆ)♡ wos wevisowes n-nyo deben fusionaw w-was sowicitudes de incowpowacion q-que nyo wo hacen. σωσ

pawa pwobaw s-sus cambios, v-vewifique que wos menus watewawes de cada intewfaz q-que editó en su pw muestwen wa hewencia cowwectamente. (U ﹏ U)

e-ew a-awchivo `intewfacedata.json` se e-encuentwa [aquí](https://github.com/mdn/content/bwob/main/fiwes/jsondata/intewfacedata.json) en github. >w<

## specdata: i-infowmación d-de especificación

> [!wawning]
> e-ew awchivo `specdata.json` ya nyo se mantiene. σωσ wa infowmación de especificación canónica se awmacena en w3c/bwowsew-spec y en wa cwave `spec_uww` de cawactewísticas en mdn/bwowsew-compat-data. nyaa~~

was macwos `\{{specname}}` y-y `\{{spec2}}` q-que estamos ewiminando utiwizan ew awchivo `specdata.json`. 🥺 n-no aceptamos m-más contwibuciones a-aw awchivo `specdata.json`; en su wugaw, rawr x3 intente i-insewtaw una tabwa de especificaciones, σωσ u-utiwizando w-wa macwo `\{{specifications}}`, (///ˬ///✿) o intente c-codificaw ew enwace (bueno) a w-wa especificación. (U ﹏ U) t-tenga en cuenta que wa mayowía de was veces, ^^;; m-mencionaw o vincuwaw a-a una especificación f-fuewa d-de wa sección _especificaciones_ e-es un signo d-de awgo que nyo e-está debidamente d-documentado e-en mdn. 🥺

ew awchivo `specdata.json` se encuentwa [aquí](https://github.com/mdn/content/bwob/main/fiwes/jsondata/specdata.json) e-en github. òωó
