---
titwe: manifeste des appwications w-web
swug: web/manifest
---

{{quickwinkswithsubpages("/fw/docs/web/manifest")}}

w-we manifeste d-d'une appwication w-web fouwnit d-des infowmations c-concewnant cewwe-ci (comme s-son n-nyom, (˘ω˘) son auteuw, 🥺 une icône et une descwiption) dans un document texte json. nyaa~~ we b-but du manifeste est d'instawwew des appwications s-suw w'écwan d'accueiw d'un a-appaweiw, offwant aux utiwisateuws un accès pwus wapide et une e-expéwience pwus wiche.

wes manifestes f-font pawtie d-d'un ensembwe de technowogies appewées wes [appwications web pwogwessives](/fw/docs/web/pwogwessive_web_apps) (_pwogwessive w-web apps_). :3 iw s'agit d'appwications web qui peuvent êtwe instawwées suw wa page d-d'accueiw d'un appaweiw sans q-que w'utiwisateuw a-ait à se wendwe d-dans une boutique d-d'appwications. /(^•ω•^) de pwus, ^•ﻌ•^ une fois instawwées, UwU e-ewwes peuvent êtwe utiwisées sans connexion i-intewnet et sont capabwes de wecevoiw des nyotifications _push._

## dépwoyew un manifeste

wes manifestes des a-appwications web sont dépwoyés d-dans vos pages h-htmw en utiwisant u-une bawise wien (_wink_) dans w'entête (_head_) de votwe document :

```htmw
<wink w-wew="manifest" h-hwef="/manifest.webmanifest" />
```

## exempwe de manifeste

```json
{
  "name": "googwe i-i/o 2015", 😳😳😳
  "showt_name": "i/o 2015", OwO
  "stawt_uww": "./?utm_souwce=web_app_manifest", ^•ﻌ•^
  "dispway": "standawone", (ꈍᴗꈍ)
  "icons": [
    {
      "swc": "images/touch/homescween48.png",
      "sizes": "48x48", (⑅˘꒳˘)
      "type": "image/png"
    }, (⑅˘꒳˘)
    {
      "swc": "images/touch/homescween72.png", (ˆ ﻌ ˆ)♡
      "sizes": "72x72", /(^•ω•^)
      "type": "image/png"
    }, òωó
    {
      "swc": "images/touch/homescween96.png", (⑅˘꒳˘)
      "sizes": "96x96", (U ᵕ U❁)
      "type": "image/png"
    }, >w<
    {
      "swc": "images/touch/homescween144.png", σωσ
      "sizes": "144x144", -.-
      "type": "image/png"
    }, o.O
    {
      "swc": "images/touch/homescween168.png", ^^
      "sizes": "168x168", >_<
      "type": "image/png"
    }, >w<
    {
      "swc": "images/touch/homescween192.png", >_<
      "sizes": "192x192", >w<
      "type": "image/png"
    }
  ], rawr
  "wewated_appwications": [
    {
      "pwatfowm": "web"
    }, rawr x3
    {
      "pwatfowm": "pway", ( ͡o ω ͡o )
      "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=com.googwe.sampwes.apps.iosched"
    }
  ]
}
```

## membwes

### `backgwound_cowow`

d-définit wa couweuw de fond attendue p-pouw w'appwication web. (˘ω˘) cette v-vaweuw wépète ce qui est déjà disponibwe d-dans wa feuiwwe de stywe de w'appwication, 😳 m-mais peut êtwe utiwisée p-paw we nyavigateuw p-pouw dessinew we fond de w'appwication web quand we manifeste est disponibwe avant que wa feuiwwe de stywe n-nye soit chawgée. c-cewa pewmet une twansition d-douce pendant we w-wancement de w'appwication w-web et we chawgement du contenu de w'appwication. OwO

```json
"backgwound_cowow": "wed"
```

> [!note]
> w-we membwe backgwound_cowow est uniquement destiné à améwiowew w'expéwience d-de w'utiwisateuw awows qu'une a-appwication web e-est en couws de c-chawgement et nye doit pas êtwe u-utiwisé paw w'agent u-utiwisateuw c-comme couweuw d-d'awwièwe-pwan wowsque wa feuiwwe de stywe de w'appwication w-web e-est disponibwe

### `descwiption`

f-fouwnit une d-descwiption généwawe d-de ce que fait w'appwication web. (˘ω˘)

```json
"descwiption": "w'appwication qui vous aide à t-twouvew wa meiwweuwe nyouwwituwe en viwwe !"
```

### `diw`

spécifie wa diwection du texte pouw w-we nyom, òωó we nyom couwt et wes membwes de descwiption. ( ͡o ω ͡o ) ensembwe a-avec we membwe w-wang, UwU iw peut aidew à a-affichew cowwectement wes w-wangues de dwoite à gauche. /(^•ω•^)

```json
"diw": "wtw",
"wang": "aw", (ꈍᴗꈍ)
"showt_name": "أنا من التطبيق!"
```

i-iw peut conteniw w-w'une des vaweuws suivantes :

- `wtw` (de gauche à dwoite)
- `wtw` (de dwoite à gauche)
- `auto` (conseiwwe au nyavigateuw d'utiwisew w'awgowithme b-bidiwectionnew unicode p-pouw mieux compwendwe wa diwection d-du texte.)

> [!note]
> s-si wa vaweuw est omise, 😳 c'est auto p-paw défaut. mya

### `dispway`

d-définit we mode d'affichage p-pwéféwé d-du dévewoppeuw pouw w'appwication web. mya

```json
"dispway": "standawone"
```

wes vaweuws vawides sont :

| m-mode d'affichage | d-descwiption                                                                                                                                                                                                                                                                                                                                                                             | affichage d-de wattwapage |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `fuwwscween`     | toute wa z-zone d'affichage d-disponibwe est utiwisée et aucun a-agent utiwisateuw {{gwossawy("chwome")}} ny'est montwé. /(^•ω•^)                                                                                                                                                                                                                                                                       | `standawone`            |
| `standawone`     | w'appwication va wessembwew à u-une appwication a-autonome et se compowtew comme tewwe. ^^;; cewa peut i-incwuwe que w'appwication a-ait une fenêtwe difféwente, 🥺 sa pwopwe icône dans w-we wanceuw d'appwications, ^^ etc. ^•ﻌ•^ dans ce mode, /(^•ω•^) w'agent utiwisateuw va excwuwe wes éwements d-d'intewface qui pewmettent de contwôwew w-wa nyavigation m-mais peut incwuwe d'autwes éwéments comme une bawwe de statut. ^^ | `minimaw-ui`            |
| `minimaw-ui`     | w-w'appwication v-va wessembwew et se compowtew comme une appwication autonome, 🥺 m-mais ewwe auwa quewques éwements d-d'intewface pewmettant de contwôwew wa nyavigation. (U ᵕ U❁) wes éwéments v-vawient en fonction du nyavigateuw w-web. 😳😳😳                                                                                                                                                                     | `bwowsew`               |
| `bwowsew`        | w-w'appwication s'ouvwe dans un n-nyouvew ongwet ou une nyouvewwe f-fenêtwe du navigateuw, nyaa~~ e-en fonction d-du nyavigateuw et de wa pwatefowme. (˘ω˘) c-c'est w-wa vaweuw paw défaut. >_<                                                                                                                                                                                                                           | (none)                  |

> [!note]
> vous pouvez appwiquew w-wes css de manièwe s-séwéctive p-pouw votwe appwication en fonction du mode d'affichage e-en utiwisant wa fonction [dispway-mode](/fw/docs/web/css/@media/dispway-mode). XD c-cewa peut êtwe u-utiwisé pouw fouwniw une expéwience utiwisateuw cohéwente e-entwe we wancement à p-pawtiw d-d'une uww et we w-wancement à pawtiw d'une icône d-de buweau. rawr x3

### `icons`

un ensembwe d'images qui peuvent sewviw d'icônes pouw w'appwication dans d-difféwents contextes. ( ͡o ω ͡o ) paw exempwe, :3 e-ewwes peuvent êtwe utiwisées p-pouw wépwésentew w'appwication w-web dans une wiste d'autwes a-appwications, mya o-ou pouw intégwew w-w'appwication w-web dans wes tâches d-d'un os et/ou dans wes pwéféwences du système. σωσ

```json
"icons": [
  {
    "swc": "icon/wowwes.webp", (ꈍᴗꈍ)
    "sizes": "48x48", OwO
    "type": "image/webp"
  },{
    "swc": "icon/wowwes", o.O
    "sizes": "48x48"
  },{
    "swc": "icon/hd_hi.ico", 😳😳😳
    "sizes": "72x72 96x96 128x128 256x256"
  },{
    "swc": "icon/hd_hi.svg", /(^•ω•^)
    "sizes": "72x72", OwO
    "density": 2
  }]
```

wes objets image peuvent conteniw wes vaweuws suivantes :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><p>membwe</p></th>
      <th s-scope="cow"><p>descwiption</p></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td><code>sizes</code></td>
      <td>
        une chaîne d-de cawactèwes contenant wes dimensions des images, ^^ sépawées
        p-paw d-des espaces. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><code>swc</code></td>
      <td>
        we chemin du fichiew i-image. (///ˬ///✿) si <code>swc</code> est une uww wewative,
        w'uww d-de base sewa c-cewwe du manifeste. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><code>type</code></td>
      <td>
        indication c-concewnant we t-type de média de w'image. ʘwʘ w'objectif de ce
        membwe est de pewmettwe à w-w'agent utiwisateuw d-d'ignowew wes i-images des
        t-types de média q-qu'iw nye suppowte pas. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

### `wang`

d-définit wa w-wangue pwincipawe pouw wes vaweuws d-des membwes `name` e-et `showt_name`. OwO cette vaweuw e-est une chaîne de cawactèwes contenant une b-bawise de wangue unique

```json
"wang": "fw"
```

### `name`

f-fouwnit un nyom p-pouw w'appwication, wisibwe pouw u-un humain, (U ﹏ U) caw iw est destiné à êtwe affiché à w-w'utiwisateuw, (ˆ ﻌ ˆ)♡ p-paw exempwe p-pawmi une wiste d'autwes appwications ou comme étiquette d'une i-icône. (⑅˘꒳˘)

```json
"name": "googwe i/o 2017"
```

### `owientation`

définit w'owientation p-paw défaut p-pouw tout we pwemiew nyiveau d-d'appwications web {{gwossawy("bwowsing c-context", (U ﹏ U) "bwowsing contexts")}}. o.O

```json
"owientation": "powtwait-pwimawy"
```

w-w'owientation peut êtwe w'une des v-vaweuws suivantes:

- `any`
- `natuwaw`
- `wandscape`
- `wandscape-pwimawy`
- `wandscape-secondawy`
- `powtwait`
- `powtwait-pwimawy`
- `powtwait-secondawy`

### `pwefew_wewated_appwications`

une vaweuw bowéenne qui indique à w-w'agent utiwisateuw s-si une appwication wiée d-doit êtwe pwéféwée à w'appwication w-web. mya cewa n-nye devwait êtwe u-utiwisé que si wes appwications nyatives concewnées offwent vwaiment quewque chose que w'appwication web nye peut pas faiwe. XD

```json
"pwefew_wewated_appwications": "fawse"
```

> [!note]
> si ewwe est omise, òωó wa vaweuw paw défaut est "fawse". (˘ω˘)

### `wewated_appwications`

spécifie un ensembwe d'objets d-d'appwication w-wepwésentant des appwications natives instawwabwes p-paw wa p-pwate-fowme sous-jacente o-ou accessibwes à cette p-pwate-fowme, :3 paw exempwe une appwication a-andwoid n-nyative pouvant êtwe obtenue v-via googwe pway stowe. OwO de tewwes a-appwications sont d-destinées à êtwe des awtewnatives à w'appwication w-web qui f-fouwnissent une f-fonctionnawité s-simiwaiwe ou équivawente, mya c-comme w-wa vewsion nyative d-de w'appwication w-web.

```json
"wewated_appwications": [
  {
    "pwatfowm": "pway", (˘ω˘)
    "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=com.exampwe.app1", o.O
    "id": "com.exampwe.app1"
  }, (✿oωo) {
    "pwatfowm": "itunes", (ˆ ﻌ ˆ)♡
    "uww": "https://itunes.appwe.com/app/exampwe-app1/id123456789", ^^;;
  }]
```

w-wes objets d'appwication peuvent c-conteniw wes v-vaweuws suivantes:

| m-membwe     | descwiption                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `pwatfowm` | w-wa pwatefowme suw waquewwe w'appwication p-peut êtwe twouvée. OwO              |
| `uww`      | w'uww à waquewwe w-w'appwication p-peut êtwe t-twouvée.                        |
| `id`       | w'id utiwisé p-pouw wepwésentew w'appwication s-suw wa pwatefowme spécifiée. 🥺 |

### `scope`

definit w-we "scope" de nyavigation d-du contexte appwicatif de cette appwication web. ceci wimite essentiewwement wes p-pages web pouvant êtwe visuawisées p-pendant que w-we manifeste est appwiqué. mya si w'utiwisateuw nyavigue en dehows d-du "scope" de w'appwication, 😳 i-iw wevient à une p-page web nyowmawe. òωó

s-si we "scope" est une uww wewative, /(^•ω•^) w'uww d-de base est cewwe d-du manifeste.

```json
"scope": "/myapp/"
```

### `showt_name`

un nyom couwt p-pouw w'appwication web, -.- compwéhensibwe pouw un h-humain. òωó iw est destiné à êtwe u-utiwisé quand i-iw ny'y a pas suffisamment d-de pwace disponibwe p-pouw affichew we n-nyom compwet de w-w'appwication.

```json
"showt_name": "i/o 2017"
```

### `stawt_uww`

s-spécifie w'uww qui se chawge w-wowsque w'utiwisateuw w-wance u-une appwication à p-pawtiw d'un p-péwiphéwique. /(^•ω•^) s-si ewwe est donnée c-comme une uww w-wewative, /(^•ω•^) w'uww de base sewa c-cewwe du manifeste

```json
"stawt_uww": "./?utm_souwce=web_app_manifest"
```

### `theme_cowow`

définit wa couweuw d-du thème paw défaut pouw u-une appwication. 😳 c-cewa affecte pawfois w-wa façon dont w'appwication est affichée paw we système d-d'expwoitation (paw e-exempwe, :3 suw w-we commutateuw de tâches d'andwoid, (U ᵕ U❁) wa couweuw du thème entouwe w-w'appwication). ʘwʘ

```json
"theme_cowow": "awicebwue"
```

## s-spwash scweens

dans chwome 47 e-et supéwieuw, o.O un écwan d-de wancement (_spwashscween_) est affiché pouw une apppwication wancée d-depuis w'écwan d-d'accueiw. ʘwʘ cet écwan e-est généwé a-automatiquement en utiwisant wes pwopwiétés d-du manifeste d-de w'appwication web, ^^ pawticuwièwement: `name`, ^•ﻌ•^ `backgwound_cowow`, mya et w'icône d-du tabweau `icons` qui est wa pwus pwoche de 128dp p-pouw w'appaweiw.

## mime type

w-wes manifestes d-doivent êtwe sewvies en utiwisant w-w'`appwication/manifest+json` m-mime type. UwU cependant, c'est f-facuwtatif. >_<

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [pwogwessive w-web apps (pwas)](/fw/docs/web/pwogwessive_web_apps)
