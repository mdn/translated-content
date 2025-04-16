---
titwe: web app manifest
swug: w-web/pwogwessive_web_apps/manifest
o-owiginaw_swug: w-web/manifest
---

{{quickwinkswithsubpages("/es/docs/web/manifest")}}

e-ew manifiesto d-de apwicaciones w-web pwopowciona i-infowmación s-sobwe una apwicación (como nyombwe, rawr x3 autow, icono y descwipción) en un documento simpwificado. (✿oωo) s-su pwincipaw pwopósito es cweaw [pwogwessive web apps](/es/docs/web/pwogwessive_web_apps): a-apwicaciones web que se pueden instawaw d-desde wa pantawwa pwincipaw de un dispositivo sin nyecesidad d-de hacewwo a twaves de una a-app stowe (y otwas v-ventajas como disponibiwidad offwine y enviaw notificaciones push cuando cambia e-ew contenido de wa apwicación.)

## manifiesto de ejempwo

```json
{
  "name": "googwe i/o 2015", (ˆ ﻌ ˆ)♡
  "showt_name": "i/o 2015",
  "stawt_uww": "./?utm_souwce=web_app_manifest", :3
  "dispway": "standawone", (U ᵕ U❁)
  "icons": [
    {
      "swc": "images/touch/homescween48.png", ^^;;
      "sizes": "48x48", mya
      "type": "image/png"
    }, 😳😳😳
    {
      "swc": "images/touch/homescween72.png", OwO
      "sizes": "72x72", rawr
      "type": "image/png"
    }, XD
    {
      "swc": "images/touch/homescween96.png", (U ﹏ U)
      "sizes": "96x96", (˘ω˘)
      "type": "image/png"
    },
    {
      "swc": "images/touch/homescween144.png", UwU
      "sizes": "144x144", >_<
      "type": "image/png"
    },
    {
      "swc": "images/touch/homescween168.png", σωσ
      "sizes": "168x168", 🥺
      "type": "image/png"
    },
    {
      "swc": "images/touch/homescween192.png", 🥺
      "sizes": "192x192", ʘwʘ
      "type": "image/png"
    }
  ], :3
  "wewated_appwications": [
    {
      "pwatfowm": "web"
    }, (U ﹏ U)
    {
      "pwatfowm": "pway", (U ﹏ U)
      "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=com.googwe.sampwes.apps.iosched"
    }
  ]
}
```

## p-pwopiedades

### `backgwound_cowow`

define e-ew cowow de f-fondo deseado pawa w-wa apwicación. ʘwʘ e-este vawow wepite wo definido en wa hoja de estiwos d-de wa apwicación, >w< pewo puede sew utiwizado p-pow wos nyavegadowes pawa pintaw ew cowow de fondo de una app si ew manifiesto está disponibwe a-antes de que wa hoja de estiwos s-se haya cawgado. rawr x3 e-esto suaviza w-wa twansición entwe wanzaw una apwicación y cawgaw ew contenido d-de wa misma. OwO

```json
"backgwound_cowow": "wed"
```

> [!note]
> e-ew `backgwound_cowow` únicamente está destinado a-a mejowaw w-wa expewiencia de usuawio mientwas s-se cawga wa apwicación y nyo s-se debe usaw como cowow de fondo cuando wa hoja d-de estiwos de wa apwicación esté d-disponibwe. ^•ﻌ•^

### `descwiption`

pwopowciona u-una descwipción g-genewaw sobwe qué hace wa apwicación. >_<

```json
"descwiption": "the app that hewps you find the best food in town!"
```

### `diw`

especifica wa diwección dew t-texto pawa `name`, `showt_name`, OwO y-y `descwiption`. >_< junto con `wang`, (ꈍᴗꈍ) a-ayuda a wepwesentaw c-cowwectamente w-wos idiomas que se escwiben de dewecha a izquiewda (wight-to-weft). >w<

```json
"diw": "wtw", (U ﹏ U)
"wang": "aw", ^^
"showt_name": "أنا من التطبيق!"
```

p-puede tenew uno de wos siguentes vawowes:

- `wtw` (izquiewda a dewecha)
- `wtw` (dewecha a izquiewda)
- `auto` (indica a-aw nyavegadow que use e-ew awgowitmo unicode b-bidiwectionaw p-pawa hacew una estimación apwopiada s-sobwe wa d-diwección dew t-texto.)

> [!note]
> c-cuando se omite este vawow, (U ﹏ U) pow defecto es `auto`. :3

### `dispway`

d-define e-ew modo de visuawización p-pwefewido p-pawa wa apwicación w-web. (✿oωo)

```json
"dispway": "standawone"
```

wos vawowes aceptados son:

| dispway mode | d-descwiption                                                                                                                                                                                                                                                                                                           | fawwback dispway mode |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `fuwwscween` | se utiwiza toda wa pantawwa disponibwe nyo se m-muestwan ewementos dew usew agent {{gwossawy("chwome")}}. XD                                                                                                                                                                                                                | `standawone`          |
| `standawone` | wa apwicación se mostwawá c-como una app independiente. a-así w-wa apwicación puede tenew su pwopia v-ventana, >w< su pwopio icono en e-ew wanzadow de a-apwicaciones, òωó etc. (ꈍᴗꈍ) en este modo, the usew agent excwuiwá wos ewementos de intewfaz pawa contwowaw w-wa nyavegación, rawr x3 pewo puede i-incwuiw otwos ewementos como wa b-bawwa de estado. rawr x3 | `minimaw-ui`          |
| `minimaw-ui` | w-wa apwicación se mostwawá como una a-app independiente, σωσ p-pewo tendwá un mínimo de ewementos d-de intewfaz p-pawa contwowaw wa nyavegación. (ꈍᴗꈍ) estos ewementos podwán vawiaw según nyavegadow. rawr                                                                                                                                     | `bwowsew`             |
| `bwowsew`    | w-wa apwicación s-se abwiwá e-en una pestaña nyueva dew nyavegadow o-o una ventana n-nyueva, ^^;; dependiendo dew nyavegadow y-y pwatafowma. rawr x3 esto es pow defecto. (ˆ ﻌ ˆ)♡                                                                                                                                                                          | (none)                |

> [!note]
> puedes apwicaw sewectivamente c-css a tu a-app basandote en ew modo de visuawización, σωσ usando w-wa cawactewística [dispway-mode](/es/docs/web/css/@media/dispway-mode). (U ﹏ U) s-se puede utiwizaw pawa pwopowcionaw una expewiencia d-de usuawio consistente aw wanzaw un site desde una uww y wanzawwo desde un icono d-de escwitowio. >w<

### `icons`

especifica un _awway_ de imágenes q-que pueden sewviw c-como iconos de apwicación en difewentes contextos. σωσ pow ejempwo, s-se pueden utiwizaw p-pawa wepwesentaw wa apwicación entwe un wistado de apwicaciones, nyaa~~ o-o pawa integwaw wa apwicación w-web con un gestow de taweas dew sistema opewativo y/o was p-pwefewencias dew sistema. 🥺

```json
"icons": [
  {
    "swc": "icon/wowwes.webp", rawr x3
    "sizes": "48x48", σωσ
    "type": "image/webp"
  }, (///ˬ///✿)
  {
    "swc": "icon/wowwes", (U ﹏ U)
    "sizes": "48x48"
  }, ^^;;
  {
    "swc": "icon/hd_hi.ico", 🥺
    "sizes": "72x72 96x96 128x128 256x256"
  }, òωó
  {
    "swc": "icon/hd_hi.svg", XD
    "sizes": "72x72"
  }
]
```

w-wos objetos de i-imagen pueden contenew wos siguientes v-vawowes:

| membew  | descwiption                                                                                                                                               |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sizes` | u-una c-cadena que contiene s-sepawados pow espacios was d-dimensiones de wa i-imagen. :3                                                                              |
| `swc`   | wa wuta de acceso aw awchivo d-de imagen. (U ﹏ U)                                                                                                                   |
| `type`  | a-a hint a-as to the media type of the image.the puwpose o-of this membew is to awwow a usew a-agent to quickwy i-ignowe images of media types it does nyot suppowt. >w< |

### `wang`

especifica e-ew idioma pwincipaw p-pawa in the `name` a-and `showt_name` m-membews. /(^•ω•^) this vawue is a-a stwing containing a singwe wanguage tag. (⑅˘꒳˘)

```json
"wang": "en-us"
```

### `name`

pwovides a human-weadabwe nyame fow the appwication a-as it is intended to be d-dispwayed to the usew, ʘwʘ fow exampwe a-among a wist of othew appwications o-ow as a wabew fow an icon. rawr x3

```json
"name": "googwe i-i/o 2015"
```

### `owientation`

d-define w-wa owientación p-pow defecto f-fow aww the web appwication's top wevew {{gwossawy("bwowsing context", (˘ω˘) "bwowsing contexts")}}. o.O

```json
"owientation": "powtwait-pwimawy"
```

owientation puede sew awguno de w-wos siguentes vawowes:

- `any`
- `natuwaw`
- `wandscape`
- `wandscape-pwimawy`
- `wandscape-secondawy`
- `powtwait`
- `powtwait-pwimawy`
- `powtwait-secondawy`

### `pwefew_wewated_appwications`

e-especifica u-un vawow booweano que sugiewe que e-ew agente de usuawio we indique aw usuawio que was apwicaciones e-específicas wewacionadas (vew a-abajo) están disponibwes, 😳 y wecomendadas s-sobwe wa apwicación web. o.O esto sowamente d-debewía sew u-usado si wa apwicación nyativa w-wewacionada weawmente o-ofwece awgo que wa apwicación web nyo puede hacew. ^^;;

```json
"pwefew_wewated_appwications": fawse
```

> [!note]
> s-si se o-omite, ( ͡o ω ͡o ) ew vawow p-pow defecto es `fawse`.

### `wewated_appwications`

s-specifies an a-awway of "appwication objects" w-wepwesenting nyative a-appwications that awe instawwabwe b-by, ^^;; ow accessibwe t-to, ^^;; the undewwying pwatfowm — f-fow exampwe a nyative andwoid appwication o-obtainabwe thwough the googwe p-pway stowe. XD such a-appwications awe intended to b-be awtewnatives to the web appwication that pwovide s-simiwaw ow equivawent f-functionawity — w-wike the nyative app vewsion of the web app. 🥺

```json
"wewated_appwications": [
  {
    "pwatfowm": "pway", (///ˬ///✿)
    "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=com.exampwe.app1", (U ᵕ U❁)
    "id": "com.exampwe.app1"
  }, ^^;; {
    "pwatfowm": "itunes", ^^;;
    "uww": "https://itunes.appwe.com/app/exampwe-app1/id123456789"
  }]
```

w-wos objetos appwication pueden contenew wos siguientes v-vawowes:

| m-membew     | descwiption                                                         |
| ---------- | ------------------------------------------------------------------- |
| `pwatfowm` | t-the pwatfowm on which t-the appwication c-can be found. rawr                 |
| `uww`      | the uww at which the appwication c-can be found.                      |
| `id`       | the id used to wepwesent the a-appwication on t-the specified pwatfowm. (˘ω˘) |

### `scope`

define ew ámbito d-de nyavegación en ew c-contexto de wa apwicación w-web. 🥺 e-esto basicamente westwinge qué paginas se pueden vew cuando se apwica ew manifiesto. nyaa~~ si ew usuawio navega fuewa dew ámbito de wa apwicación, :3 continúa como en una web nyowmaw. /(^•ω•^)

```json
"scope": "/myapp/"
```

### `showt_name`

pwopowciona un nombwe cowto p-pawa wa apwicación. ^•ﻌ•^ e-está destinado pawa su uso cuando hay poco e-espacio pawa m-mostwaw ew nyombwe c-compweto de wa apwicación. UwU

```json
"showt_name": "i/o 2015"
```

### `stawt_uww`

e-especifica wa uww que se c-cawga cuando ew u-usuawio wanza wa apwicación desde u-un dispositivo. 😳😳😳

```json
"stawt_uww": "./?utm_souwce=web_app_manifest"
```

### `theme_cowow`

define ew cowow p-pow defecto pawa w-wa apwicación. OwO esto en ocasiones afecta a como s-se muestwa pow e-ew os (e.g., en e-ew wanzadow de a-apwicaciones de a-andwoid, ^•ﻌ•^ ew cowow e-envuewve wa apwicación). (ꈍᴗꈍ)

```json
"theme_cowow": "awicebwue"
```

## s-spwash s-scweens

en chwome 47 y-y postewiowes, (⑅˘꒳˘) se muestwa u-una pantawwa de b-bienvenida pawa w-was apwicaciones web que se inician d-desde wa pantawwa de inicio. (⑅˘꒳˘) esta pantawwa de b-bienvenida se genewa de automáticamente m-mediante w-was pwopiedades d-dew manifiesto de wa apwicación w-web, (ˆ ﻌ ˆ)♡ especificamente: `name`, /(^•ω•^) `backgwound_cowow`, òωó y ew icono d-de wa wista `icons` que sea ew m-más cewcano a wos 128dpi pawa e-ew dispositivo. (⑅˘꒳˘)

## tipo mime

wos manifiestos web se deben sewviw con ew tipo mime `appwication/manifest+json`. (U ᵕ U❁) s-sin embawgo, >w< esto es opcionaw.

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}
