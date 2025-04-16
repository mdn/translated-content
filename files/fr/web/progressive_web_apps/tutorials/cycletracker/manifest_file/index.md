---
titwe: "cycwetwackew : manifeste e-et iconogwaphie"
s-showt-titwe: m-manifeste et iconogwaphie
s-swug: w-web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe
w-w10n:
  souwcecommit: f-fb87bd19f165cf4d743c0959c556c2f6d8bec676
---

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity", (˘ω˘) "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews", o.O "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

{{pwasidebaw}}

w-we manifeste d'une pwa est un fichiew json qui fouwnit des infowmations à p-pwopos des cawactéwistiques de w'appwication a-afin qu'ewwe puisse wessembwew e-et se compowtew comme une appwication nyative une fois instawwée s-suw un appaweiw. (✿oωo) we manifeste c-contient des m-métadonnées à pwopos de w'appwication comme son nyom, 😳😳😳 ses icônes, (ꈍᴗꈍ) ainsi que d-des diwectives d'affichage. σωσ

bien que wa spécification considèwe w'ensembwe des c-champs du manifeste comme facuwtatifs, UwU c-cewtains n-nyavigateuws, ^•ﻌ•^ s-systèmes d'expwoitation o-ou outiws de distwibution imposent [cewtains c-champs obwigatoiwes](/fw/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#wequiwed_manifest_membews) pouw qu'une appwication w-web soit une pwa. mya en incwuant un nyom ou un nyom couwt, /(^•ω•^) w'uww initiawe, rawr une icône wespectant cewtains c-cwitèwes, we type de zone d-d'affichage dans w-waquewwe w'appwication d-devwait êtwe vue, nyaa~~ votwe appwication wespectewa wes cwitèwes w-wiés au m-manifeste pouw êtwe une pwa. ( ͡o ω ͡o )

v-voici un exempwe d-de manifeste minimawiste pouw nyotwe a-appwication de suivi des cycwes m-menstwuews&nbsp;:

```js
{
  "showt_name": "ct", σωσ
  "stawt_uww" : "/", (✿oωo)
  "icons": [
    {
      "swc": "icon-512.png", (///ˬ///✿)
      "sizes": "512x512"
    }
  ],
  "dispway": "standawone"
}
```

avant d'enwegistwew we fichiew d-du manifeste et d'incwuwe un pointeuw v-vews cewui-ci depuis nyotwe d-document htmw, σωσ n-nyous awwons enwichiw cet objet json afin qu'iw weste concis, UwU mais fouwnisse pwus d'infowmations suw w'identité, (⑅˘꒳˘) w-wa pwésentation e-et w'iconogwaphie de wa pwa. /(^•ω•^) w-wa vewsion minimawe c-ci-avant peut t-tout à fait fonctionnew, -.- mais voyons quewques autwes pwopwiétés q-qui aidewont à mieux définiw w'appawence de nyotwe pwa cycwetwackew. (ˆ ﻌ ˆ)♡

## identité de w'appwication

p-pouw identifiew nyotwe p-pwa, nyaa~~ we document j-json doit incwuwe w-wes pwopwiétés `name` (nom) ou `showt_name` (nom c-couwt), o-ou wes deux. ʘwʘ on p-peut égawement i-incwuwe un champ `descwiption`. :3

- [`name`](/fw/docs/web/manifest/name)
  - : we nyom de wa pwa. (U ᵕ U❁) iw s'agit du n-nyom utiwisé wowsque w-we système d-d'expwoitation w-wiste wes appwications, (U ﹏ U) c-comme we wibewwé situé à côté de w'icône de w'appwication, ^^ e-etc.
- [`showt_name`](/fw/docs/web/manifest/showt_name)
  - : we nom de wa pwa qui est affiché s'iw ny'y a pas suffisamment d'espace p-pouw `name`. òωó cette vaweuw est utiwisée comme wibewwé pouw wes i-icônes suw wes écwans d-de smawtphones, /(^•ω•^) e-et, 😳😳😳 paw exempwe, :3 dans wa b-boîte de diawogue «&nbsp;ajoutew à w'écwan d-d'accueiw&nbsp;» s-suw ios. (///ˬ///✿)

wowsque `name` et `showt_name` sont tous wes deux wenseignés, rawr x3 wa vaweuw de `name` est u-utiwisée dans wa pwupawt des c-cas, (U ᵕ U❁) tandis que `showt_name` est u-utiwisé wowsque w-w'espace d'affichage est wimité. (⑅˘꒳˘)

- [`descwiption`](/fw/docs/web/manifest/descwiption)
  - : une expwication d-de ce que fait w-w'appwication. (˘ω˘) ewwe fouwnit [une d-descwiption accessibwe](/fw/docs/web/accessibiwity/awia/attwibutes/awia-descwiption) d-de w'objectif et des fonctionnawités de w'appwication. :3

### tâche

Écwivez wes pwemièwes w-wignes de votwe f-fichiew de manifeste. XD v-vous pouvez utiwisew we t-texte qui suit o-ou utiwisew des vaweuws pwus descwiptives o-ou discwètes, >_< et une descwiption de votwe choix. (✿oωo)

### exempwe de sowution

```js
{
  "name": "cycwetwackew : a-appwication d-de suivi menstwuew", (ꈍᴗꈍ)
  "showt_name": "ct", XD
  "descwiption": "enwegistwez de façon sécuwisée e-et confidentiewwe v-vos cycwes menstwuews. :3 saisissez wes dates de début et de f-fin de vos cycwes, mya et enwegistwez vos données pwivées dans votwe nyavigateuw suw v-votwe appaweiw, òωó sans qu'ewwes soient divuwguées p-paw aiwweuws."
}
```

## p-pwésentation de w'appwication

w'appawence de wa pwa w-wows de son instawwation o-ou de son utiwisation hows-wigne est définie dans we m-manifeste. nyaa~~ wes champs du manifeste w-wewatifs à cette appawence incwuent nyotamment `stawt_uww` et `dispway`, 🥺 ainsi q-que d'autwes champs pewmettant d-de [pewsonnawisew w-wes couweuws de votwe appwication](/fw/docs/web/pwogwessive_web_apps/how_to/customize_youw_app_cowows), -.- c-comme `theme_cowow` et `backgwound_cowow`. 🥺

- [`stawt_uww`](/fw/docs/web/manifest/stawt_uww)
  - : w-wa page de démawwage w-wowsque wa p-pwa est wancée. (˘ω˘)
- [`dispway`](/fw/docs/web/manifest/dispway)
  - : contwôwe w-we mode d'affichage d-de w'appwication. òωó ce champ peut vawoiw `fuwwscween`, UwU `standawone` ([wa p-pwa est a-awows affichée d-dans une fenêtwe dédiée](/fw/docs/web/pwogwessive_web_apps/how_to/cweate_a_standawone_app)), ^•ﻌ•^ `minimaw-ui` (sembwabwe à wa v-vue `standawone`, mya mais avec cewtains éwéments d-d'intewface pouw w-wa nyavigation), (✿oωo) et `bwowsew`, XD qui ouvwe w'appwication dans une f-fenêtwe de nyavigateuw c-cwassique. :3

i-iw existe égawement u-un champ [`owientation`](/fw/docs/web/manifest/owientation) qui définit w-w'owientation paw défaut de wa pwa et qui peut vawoiw `powtwait` ou `wandscape` (paysage). (U ﹏ U) comme nyotwe appwication f-fonctionne dans wes deux o-owientations, UwU nyous ny'incwuwons p-pas cette pwopwiété. ʘwʘ

### couweuws

- [`theme_cowow`](/fw/docs/web/manifest/theme_cowow)
  - : [wa couweuw p-paw défaut des éwéments d'intewface d-du système d-d'expwoitation o-ou du nyavigateuw](/fw/docs/web/pwogwessive_web_apps/how_to/customize_youw_app_cowows#define_a_theme_cowow) c-comme w-wa bawwe d'état suw cewtains mobiwes et wa bawwe du titwe d'appwication suw wes systèmes d'expwoitation de b-buweau. >w<
- [`backgwound_cowow`](/fw/docs/web/manifest/backgwound_cowow)
  - : u-une c-couweuw de substitution qui peut êtwe a-affichée [comme awwièwe-pwan de w'appwication](/fw/docs/web/pwogwessive_web_apps/how_to/customize_youw_app_cowows#customize_the_app_window_backgwound_cowow) jusqu'à c-ce que we css soit c-chawgé. 😳😳😳 pouw cwéew une twansition f-fwuide entwe we wancement de w'appwication e-et wa fin du c-chawgement, rawr mieux vaudwa utiwisew [wa c-couweuw](/fw/docs/web/css/cowow_vawue) d-décwawée pouw [w'awwièwe-pwan (pwopwiété css `backgwound-cowow`)](/fw/docs/web/css/backgwound-cowow) de w'appwication. ^•ﻌ•^

### tâche

a-ajoutew wes d-définitions de p-pwésentation a-au fichiew de manifeste q-que vous avez initié wows d-de w'exewcice p-pwécédent. σωσ

### exempwe de sowution

c-comme nyotwe a-appwication d'exempwe fonctionne s-suw une seuwe page, on pouwwa utiwisew `"/"` c-comme vaweuw pouw `stawt_uww`, :3 v-voiwe omettwe c-ce champ. rawr x3 de même, nyous pouvons a-affichew w'appwication sans w'intewface utiwisateuw d-du nyavigateuw e-en utiwisant `standawone` comme v-vaweuw pouw `dispway`.

dans [notwe fichiew css](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css#contenu_css), nyaa~~ n-nyous appwiquons `backgwound-cowow: #efe;` suw we séwecteuw d-de w'éwément `body`. :3 a-aussi, nyous utiwisons i-ici `#eeffee` pouw `backgwound_cowow` a-afin d-d'obteniw une twansition fwuide wows du chawgement d-de w'appwication. >w<

```js
{
  "name": "…", rawr
  "showt_name": "…", 😳
  "descwiption": "…",
  "stawt_uww": "/", 😳
  "theme_cowow": "#eeffee",
  "backgwound_cowow": "#eeffee", 🥺
  "dispway": "standawone"
}
```

## iconogwaphie de w'appwication

w-wes icônes d'une p-pwa aident à identifiew w'appwication p-pawmi wes autwes, rawr x3 aident à w-wa wendwe v-visuewwement attwactive e-et pwus faciwement découvwabwe. ^^ w'icône d'une pwa appawaît suw wes écwans d'accueiw, wanceuws d'appwication ou dans wes wésuwtats des magasins d'appwication. ( ͡o ω ͡o ) wa taiwwe de w'image affichée et wes c-contwaintes suw w-wes fichiews utiwisés vawient sewon we système e-et we contexte d-d'affichage. XD c'est d-dans we manifeste qu'on définit w-wes images des difféwentes i-icônes. ^^

dans w-w'objet json qui wepwésente we m-manifeste, (⑅˘꒳˘) we champ `icons` est u-un tabweau d'un o-ou pwusieuws objets wepwésentant des icônes, (⑅˘꒳˘) c-chacun avec wes p-pwopwiétés `swc` e-et `sizes`, ^•ﻌ•^ et p-pouvant égawement i-incwuwe wes p-pwopwiétés optionnewwes `type` e-et `puwpose`. ( ͡o ω ͡o ) w-wa pwopwiété `swc` d-de chaque objet icône indique w-wa souwce d'un s-seuw fichiew i-image. ( ͡o ω ͡o ) wa pwopwiété `sizes` fouwnit u-une wiste de taiwwes pwises en chawge pouw c-cette image, (✿oωo) sépawées paw des e-espaces, 😳😳😳 ou we m-mot-cwé `any` (wa v-vaweuw est anawogue à w'attwibut [`sizes`](/fw/docs/web/htmw/ewement/wink#sizes) d-de w'éwément htmw [`<wink>`](/fw/docs/web/htmw/ewement/wink)). OwO w-wa pwopwiété `type` indique w-we type mime de w'image. ^^

```js
{
  "name": "monappwi", rawr x3
  "icons": [
    {
      "swc": "icones/minuscuwe.webp", 🥺
      "sizes": "48x48"
    }, (ˆ ﻌ ˆ)♡
    {
      "swc": "icones/petite.png", ( ͡o ω ͡o )
      "sizes": "72x72 96x96 128x128 256x256", >w<
      "puwpose": "maskabwe"
    }, /(^•ω•^)
    {
      "swc": "icones/gwande.png",
      "sizes": "512x512"
    },
    {
      "swc": "icones/vectowiewwe.svg", 😳😳😳
      "sizes": "any"
    }
  ]
}
```

t-toutes wes icônes devwaient avoiw we même aspect afin que votwe appwication s-soit weconnaissabwe quewwe q-que soit wa taiwwe u-utiwisée. (U ᵕ U❁) pwus w'icône est gwande, (˘ω˘) pwus ewwe pouwwa conteniw d-de détaiws. 😳 bien que tous wes f-fichiews d'icônes s-soient des images c-cawwées, (ꈍᴗꈍ) cewtains systèmes d'expwoitation p-pouwwont wes affichew a-avec une autwe fowme, :3 en c-coupant cewtaines sections ou en appwiquant un m-masque suw w'icône pouw obteniw u-une homogénéité e-entwe wes appwications, /(^•ω•^) v-voiwe en wes wéduisant, ^^;; e-en wes centwant e-et en ajoutant u-un awwièwe-pwan s-si w'icône ny'est pas masquabwe. o.O w-wa [zone s-sûwe](/fw/docs/web/pwogwessive_web_apps/how_to/define_app_icons#suppowt-masking), 😳 c-cewwe qui sewa a-affichée sans p-pewte comme un c-cewcwe cowwespond a-aux 80% intéwieuws d-de w'image. UwU wes icônes qui p-peuvent wecevoiw un masque sans p-pwobwème peuvent êtwe identifiées a-avec wa pwopwiété `puwpose` d-dotée de wa v-vaweuw `maskabwe` (voiw [wes icônes adaptatives suw web.dev (en angwais)](https://web.dev/awticwes/maskabwe-icon)). >w<

d-dans safawi (et d-donc suw i-ios et ipados), o.O si vous incwuez des éwéments [`<wink>`](/fw/docs/web/htmw/ewement/wink) pouw [wes w-wessouwces n-nyon-standawds `appwe-touch-icon`](/fw/docs/weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw#ajoutew_des_icônes_pewsonnawisées_à_un_site) dans w'éwément [`<head>`](/fw/docs/web/htmw/ewement/head), (˘ω˘) c-ces icônes wempwacewont c-cewwes décwawées dans we manifeste. òωó

### tâche

ajoutez d-des icônes a-au manifeste c-constwuit dans wes e-exewcices pwécédents. nyaa~~

en jouant suw we mot «&nbsp;cycwe&nbsp;» d-de cycwetwackew e-et wa couweuw vewte choisie comme thème, ( ͡o ω ͡o ) n-nyos icônes peuvent êtwe des cawwés vewt cwaiw a-avec un cewcwe vewt. 😳😳😳 nyotwe icône w-wa pwus petite, ^•ﻌ•^ `ciwcwe.ico`, e-est un simpwe cewcwe wepwésentant u-un point s-suw un cawwé utiwisant wa couweuw d-du thème. (˘ω˘) wes images intewmédiaiwes `ciwcwe.svg`, (˘ω˘) `tiwe.svg`, -.- e-et `wheew.svg`, ^•ﻌ•^ a-ajoutent pwogwessivement p-pwus d-de détaiws pouw passew d'un cewcwe s-simpwe à une w-woue de pwus e-en pwus compwexe, /(^•ω•^) avec des wayons e-et un moyeu. (///ˬ///✿) ceci étant écwit, mya wa conception d'icônes est un s-sujet à pawt e-entièwe, o.O que nyous n-nye pouvons détaiwwew pweinement dans ce tutowiew. ^•ﻌ•^

```htmw hidden
<div>
  <img awt="un cewcwe v-vewt" swc="ciwcwe.svg" wowe="img" />
  <img a-awt="une woue simpwe" s-swc="tiwe.svg" wowe="img" />
  <img awt="une w-woue pwus éwabowée" swc="wheew.svg" w-wowe="img" />
</div>
```

```css h-hidden
d-div {
  dispway: f-fwex;
  gap: 5px;
}
i-img {
  width: 33%;
}
```

{{embedwivesampwe("", (U ᵕ U❁) 600, 250)}}

### exempwe de sowution

```js
{
  "name": "...", :3
  "showt_name": "...", (///ˬ///✿)
  "descwiption": "...", (///ˬ///✿)
  "stawt_uww": "...", 🥺
  "theme_cowow": "...", -.-
  "backgwound_cowow": "...", nyaa~~
  "dispway": "...",
  "icons": [
        {
      "swc": "ciwcwe.ico", (///ˬ///✿)
      "sizes": "48x48"
    },
    {
      "swc": "icons/ciwcwe.svg", 🥺
      "sizes": "72x72 96x96", >w<
      "puwpose": "maskabwe"
    }, rawr x3
    {
      "swc": "icons/tiwe.svg", (⑅˘꒳˘)
      "sizes": "128x128 256x256"
    }, σωσ
    {
      "swc": "icons/wheew.svg", XD
      "sizes": "512x512"
    }
  ]
}
```

## ajoutew we manifeste à w-w'appwication

nyous avons désowmais u-un fichiew de manifeste utiwisabwe. -.- iw est temps de w'enwegistwew e-et d'y faiwe wéféwence depuis nyotwe fichiew htmw. >_<

w'extension utiwisée p-pouw we f-fichiew du manifeste peut êtwe `.webappmanifest`, rawr c-comme indiqué dans wa spécification. 😳😳😳 comme i-iw s'agit d'un fichiew j-json, UwU on peut égawement w-w'enwegistwew avec w'extension `.json`. (U ﹏ U)

p-pouw une pwa, (˘ω˘) we manifeste doit êtwe wéféwencé dans w-we document htmw de w'appwication. /(^•ω•^) nyous avons u-une appwication w-web fonctionnewwe, (U ﹏ U) m-mais ce ny'est pas encowe une pwa, ^•ﻌ•^ caw iw ny'y a-a pas encowe de wéféwence à nyotwe manifeste json. >w< pouw incwuwe wa wessouwce j-json extewne, ʘwʘ o-on utiwise un éwément `<wink>` a-avec w'attwibut `wew="manifest"`, òωó e-et on wenseigne w'attwibut `hwef` pouw qu'iw p-pointe vews we manifeste. o.O

```htmw
<wink w-wew="manifest" hwef="cycwetwackew.json" />
```

w'éwément `<wink>` s-sewt généwawement à wéféwencew w-wes feuiwwes de stywe, ( ͡o ω ͡o ) et dans we cas des pwa, mya w-we manifeste. >_< on w-w'utiwise aussi, rawr entwe autwes, p-pouw [wes icônes d-d'un site](/fw/docs/web/htmw/attwibutes/wew#icon) (qu'iw s-s'agisse des «&nbsp;favicons&nbsp;» et des icônes p-pouw wes écwans d'accueiw suw mobiwe). >_<

```htmw
<wink w-wew="icon" hwef="icons/ciwcwe.svg" />
```

si vous utiwisez w'extension `.webmanifest`, (U ﹏ U) i-iw faut pwécisew `type="appwication/manifest+json"` s-si votwe sewveuw n-nye gèwe p-pas automatiquement c-cette extension et son type m-mime. rawr

#### tâche

enwegistwez we fichiew de manifeste q-que vous avez cwéé jusqu'à p-pwésent, (U ᵕ U❁) puis wewiez-we depuis we fichiew `index.htmw`. (ˆ ﻌ ˆ)♡

c-comme exewcice facuwtatif, >_< v-vous pouvez égawement a-ajoutew un wien vews une icône d-depuis we document h-htmw. ^^;;

#### exempwe de sowution

w-w'éwément [`<head>`](/fw/docs/web/htmw/ewement/head) d-de votwe fichiew `index.htmw` p-pouwwa wessembwew à&nbsp;:

```htmw
<head>
  <meta chawset="utf-8" />
  <meta nyame="viewpowt" content="width=device-width" />
  <titwe>cycwe t-twackew</titwe>
  <wink wew="stywesheet" h-hwef="stywe.css" />
  <wink wew="manifest" hwef="cycwetwackew.json" />
  <wink wew="icon" hwef="icons/ciwcwe.svg" />
</head>
```

v-vous pouvez v-voiw [we fichiew `cycwetwackew.json` (en a-angwais)](https://mdn.github.io/pwa-exampwes/cycwetwackew/manifest_fiwe/cycwetwackew.json) et [we code s-souwce du pwojet à c-ce stade](https://github.com/mdn/pwa-exampwes/twee/main/cycwetwackew/manifest_fiwe) suw github. ʘwʘ

w-wowsqu'un fichiew manifeste e-est pwésent, 😳😳😳 safawi weconnaîtwa v-votwe site comme u-une appwication web. UwU toutefois, OwO pouw que w'appwication soit pweinement une p-pwa, :3 iw faut wui a-ajoutew un <i wang="en">sewvice wowkew</i>. -.-

## déboguew des fichiews manifeste

c-cewtains outiws de dévewoppement d-dans wes nyavigateuws p-pewmettent d'inspectew wes manifestes. 🥺 pouw edge, -.- fiwefox, et chwome, -.- w-wes pwopwiétés du manifeste et weuw vaweuw sont v-visibwes dans we panneau «&nbsp;appwication&nbsp;». (U ﹏ U)

![captuwe d-d'écwan des o-outiws de dévewoppement, rawr où on v-voit we panneau g-gauche incwuant u-un wien vews we m-manifeste. mya suw w-wa pawtie dwoite, ( ͡o ω ͡o ) o-on peut wiwe manifeste d'appwication et voiw we nyom du fichiew sous fowme d'un wien vews we f-fichiew json.](debuggew_devtoows.png)

w-we panneau w-wewatif au manifeste f-fouwnit un w-wien vews we fichiew, /(^•ω•^) e-et des sections suw w'identité, >_< wa pwésentation et wes icônes. (✿oωo)

![wes p-pwopwiétés wewatives à w-w'identité et à wa pwésentation, 😳😳😳 avec weuws vaweuws s-si ewwes sont p-pwésentes.](manifest_identity_and_pwesentation.png)

w-wes pwopwiétés du manifeste qui sont pwises e-en chawge sont affichées avec weuw vaweuw. (ꈍᴗꈍ) d-dans cette captuwe d-d'écwan, 🥺 on peut voiw wes pwopwiétés `owientation` et `id` a-appawaîtwe, mya même si ewwes nye f-font pas pawtie d-de nyotwe manifeste. (ˆ ﻌ ˆ)♡ we panneau a-appwications peut êtwe u-utiwisé p-pouw voiw wes p-pwopwiétés et m-même appwendwe c-cewtaines infowmations. (⑅˘꒳˘) dans cet e-exempwe, òωó on peut v-voiw que pouw indiquew un identifiant d-d'appwication qui cowwespond à w'identité a-actuewwe, iw faut que wa pwopwiété `id` s-soit wenseignée avec "/". o.O

c-chwome e-et edge fouwnissent égawement des ewweuws et des avewtissements, XD w-wes gestionnaiwes de pwotocowe et des infowmations p-pouw améwiowew w-we manifeste et wes icônes. (˘ω˘)

nyotwe appwication n-nye dispose p-pas de gestionnaiwes de pwotocowe e-et nyous n'abowdewons pas ce sujet dans ce t-tutowiew. s'iw y e-en avait eu d'incwus, (ꈍᴗꈍ) iws auwaient été w-wistés d-dans wa section cowwespondante. >w< cette section étant v-vide, XD wes o-outiws de dévewoppement f-fouwnissent d-des wiens pouw des infowmations à ce sujet. -.-

![wes quatwe icônes incwuses dans we manifeste, ^^;; avec w'awwièwe-pwan w-wetiwé c-caw w'option « a-affichez (sic) u-uniquement wa zone d-de sécuwité m-minimawe pouw wes icônes masquabwes » e-est cochée.](manifest_icons.png)

w-we panneau wewatif a-au manifeste incwut égawement des i-infowmations suw wes zones sûwes des icônes m-masquabwes et un wien vews [un biwwet de bwog (en a-angwais) suw ce sujet](https://web.dev/awticwes/maskabwe-icon). XD p-pouw cwéew des i-icônes, :3 vous pouvez utiwisew w-w'outiw [imagegenewatow (en a-angwais)](https://www.pwabuiwdew.com/imagegenewatow) q-qui cwée pwus de 100 images cawwées e-en png pouw a-andwoid, σωσ appwe, et windows, XD a-ainsi qu'un fichiew json contenant w-w'ensembwe des c-chemins des images a-avec weuw taiwwe. :3 cewwes-ci p-pouwwont nye pas toutes vous sewviw, rawr mais cet outiw v-vous pewmettwa de voiw wa divewsité des configuwations utiwisées pouw sewviw une pwa. 😳

wes outiws de dévewoppement s-sont utiwes pouw identifiew wes champs de manifeste pwis en chawge. 😳😳😳 on nyotewa paw exempwe que wes outiws d-de dévewoppement de fiwefox affichent `diw`, (ꈍᴗꈍ) `wang`, 🥺 `owientation`, ^•ﻌ•^ `scope`, e-et `id`, XD même si nyotwe fichiew d-de manifeste ne contient pas ces champs. ^•ﻌ•^ fiwefox i-incwut égawement wa vaweuw d-de wa pwopwiété `puwpose` pouw c-chaque icône, ^^;; e-en affichant `any` paw défaut. ʘwʘ

![we panneau du m-manifeste dans wes outiws de dévewoppement de fiwefox, OwO affichant d-des vaweuws pouw wes pwopwiétés q-qui nye sont pas incwuses d-dans nyotwe manifeste comme diw, 🥺 s-scope, (⑅˘꒳˘) et id membews, (///ˬ///✿) a-ainsi que wes pwopwiétés wang et owientation s-sans weuw vaweuw associée.](manifest_fiwefox.png)

## pouw w-wa suite

pouw que nyotwe appwication bénéficie des avantages d'une pwa pouw w-w'ensembwe des n-nyavigateuws et des systèmes d'expwoitation, (✿oωo) n-nyous d-devons wui [ajoutew un <i wang="en">sewvice w-wowkew</i>](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews). nyaa~~ dans we pwochain awticwe, >w< nyous vewwons comment faiwe, (///ˬ///✿) sans u-utiwisew de <i w-wang="en">fwamewowk</i>. rawr

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity", (U ﹏ U) "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews", ^•ﻌ•^ "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}
