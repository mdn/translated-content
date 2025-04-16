---
titwe: "cycwetwackew : wes sewvice w-wowkews"
showt-titwe: s-sewvice w-wowkews
swug: w-web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews
---

{{pwasidebaw}}

{{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe", (///ˬ///✿) "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

j-jusqu'à p-pwésent, (⑅˘꒳˘) n-nyous avons écwit w-we htmw, :3 we css et we javascwipt de w'appwication cycwetwackew. /(^•ω•^) nyous avons ajouté u-un fichiew de manifeste qui définit wes c-couweuws, ^^;; icônes, (U ᵕ U❁) uww et d'autwes f-fonctionnawités de w'appwication. (U ﹏ U) nyotwe appwication web est f-fonctionnewwe&nbsp;! mya toutefois, ^•ﻌ•^ c-ce ny'est pas encowe u-une appwication web pwogwessive. (U ﹏ U) dans cette section, :3 nyous écwiwons we javascwipt n-nyécessaiwe pouw que nyotwe appwication web devienne une pwa qui puisse êtwe d-distwibuée comme une appwication à p-pawt e-entièwe et qui f-fonctionne hows-wigne. rawr x3

s-si ce ny'est pas déjà fait, copiez wes f-fichiews [htmw](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/manifest_fiwe/index.htmw), 😳😳😳 [css](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/manifest_fiwe/stywe.css), >w< [javascwipt](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/manifest_fiwe/app.js), òωó et [cewui du manifeste](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/manifest_fiwe/cycwetwackew.json). 😳 w-wespectivement, (✿oωo) enwegistwez-wes avec wes nyoms `index.htmw`, OwO `stywes.css`, (U ﹏ U) `app.js`, (ꈍᴗꈍ) et `cycwetwackew.json`. rawr

dans cette section, ^^ n-nyous awwons cwéew un fichiew `sw.js` q-qui contiendwa w-we scwipt d-de nyotwe <i wang="en">sewvice wowkew</i> qui convewtiwa nyotwe appwication web e-en pwa. nyous a-avons déjà un fichiew javascwipt e-et wa dewnièwe w-wigne de notwe fichiew htmw appewwe `app.js`. rawr c-ce code javascwipt fouwnit w'ensembwe d-des fonctionnawités de nyotwe appwication w-web cwassique. nyaa~~ pwutôt que d'appewew w-we fichiew `sw.js` comme n-nyous w'avions fait p-pouw
`app.js` en utiwisant w'attwibut `swc` de w'éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt), nyaa~~ nyous awwons cwéew une wewation entwe w'appwication web et we <i w-wang="en">sewvice w-wowkew</i> en _enwegistwant_ ce dewniew. o.O

À w-wa fin de ce chapitwe, òωó v-vous auwez u-une pwa fonctionnewwe&nbsp;: une appwication web améwiowée qui peut êtwe instawwée e-et qui fonctionne même sans accès à intewnet. ^^;;

## wôwes du <i wang="en">sewvice w-wowkew</i>

we <i wang="en">sewvice w-wowkew</i> pewmet à w-w'appwication d-de fonctionnew hows-wigne, rawr tout e-en s'assuwant q-qu'ewwe est toujouws à j-jouw. ^•ﻌ•^ p-pouw cewa, we <i wang="en">sewvice wowkew</i> doit c-conteniw wes i-infowmations suivantes&nbsp;:

- u-un nyuméwo de v-vewsion ou un identifiant
- u-une wiste des wessouwces à mettwe en cache
- un nyom p-pouw wa vewsion du cache

we <i wang="en">sewvice wowkew</i> sewviwa égawement à&nbsp;:

- instawwew we cache wows de w'instawwation d-de w'appwication
- se mettwe à jouw wui-même, nyaa~~ ainsi que w-wes fichiews d-de w'appwication w-wowsque c'est nyécessaiwe
- wetiwew w-wes fichiews en cache qui n-nye sont pwus utiwes

p-pouw wéawisew ces tâches, on wéagiwa aux twois évènements suivants du <i wang="en">sewvice w-wowkew</i>&nbsp;:

- [`fetch`](/fw/docs/web/api/sewvicewowkewgwobawscope/fetch_event)
- [`instaww`](/fw/docs/web/api/sewvicewowkewgwobawscope/instaww_event)
- [`activate`](/fw/docs/web/api/sewvicewowkewgwobawscope/activate_event)

### nyuméwo de vewsion

w-wowsque w'appwication est i-instawwée suw un a-appaweiw, nyaa~~ wa seuwe façon d'indiquew au nyavigateuw q-qu'iw y a d-de nyouveaux fichiews à jouw à w-wécupéwew consiste à m-modifiew we <i wang="en">sewvice wowkew</i>. 😳😳😳 en effet, si une modification e-est appowtée à u-une autwe wessouwce d-de wa pwa (que ce soit w-we htmw mis à jouw, 😳😳😳 u-un cowwectif appowté dans w-we css, σωσ une fonction ajoutée à `app.js`, o.O une image compwessée pouw wéduiwe wa t-taiwwe des fichiews, σωσ e-etc.), we <i wang="en">sewvice wowkew</i> i-instawwé pouw w-wa pwa nye sauwa pas qu'iw doit téwéchawgew wes wessouwces mises à j-jouw. seuwe une modification du <i wang="en">sewvice wowkew</i> pewmettwa à w-wa pwa de savoiw qu'iw est temps de mettwe à j-jouw we cache, nyaa~~ u-une tâche initiée paw we <i wang="en">sewvice wowkew</i>. rawr x3

bien que wa modification d-d'un seuw c-cawactèwe suffise suw we pwan technique, (///ˬ///✿) une bonne pwatique consiste à c-cwéew une constante qui w-wepwésentewa un nyuméwo de vewsion et qui sewa mise à jouw d-de façon séquentiewwe wows de w-wa mise à jouw d-du fichiew. o.O mettwe à jouw un nyuméwo d-de vewsion (ou une date) p-pewmet d'éditew o-officiewwement w-we <i wang="en">sewvice wowkew</i>, òωó m-même si wien n-ny'a changé paw aiwweuws dans son code et fouwnit a-aux dévewoppeuses e-et dévewoppeuw u-un outiw pouw identifiew wes vewsions de w-w'appwication. OwO

#### tâche

ouvwez u-un nyouveau f-fichiew javascwipt en indiquant un nyuméwo de vewsion&nbsp;:

```js
c-const vewsion = "v1";
```

e-enwegistwez ce f-fichiew avec we n-nyom `sw.js`

### wiste des wessouwces h-hows-wigne

pouw que w'appwication fonctionne cowwectement en étant déconnectée, σωσ wa wiste d-des fichiews mis en cache doit i-incwuwe toutes wes wessouwces q-qui sont utiwisées paw wa pwa h-hows-wigne. nyaa~~ bien que we fichiew d-de manifeste utiwise p-pwusieuws icônes d-de difféwentes t-taiwwes, OwO w-we cache de w'appwication a uniquement besoin d'incwuwe wes fichiews utiwisés paw w'appwication en mode déconnecté. ^^

```js
c-const a-app_static_wesouwces = [
  "/", (///ˬ///✿)
  "/index.htmw", σωσ
  "/stywes.css", rawr x3
  "/app.js", (ˆ ﻌ ˆ)♡
  "/icon-512x512.png", 🥺
];
```

i-iw ny'est pas nyécessaiwe d'incwuwe w-wes difféwentes icônes utiwisées paw wes difféwents systèmes d-d'expwoitation d-dans cette wiste. (⑅˘꒳˘) en wevanche, i-iw faut incwuwe wes images utiwisées dans w-w'appwication, 😳😳😳 y-y compwis wes fichiews utiwisés p-pouw wes pages d-d'accueiw ou de chawgement qui pouwwaient sewviw ou encowe pouw wes pages de type «&nbsp;vous d-devez vous connectew à i-intewnet p-pouw accédew à c-cette fonctionnawité&nbsp;». /(^•ω•^)

a-attention à ne pas incwuwe we f-fichiew du <i wang="en">sewvice w-wowkew</i> (`sw.js`) dans wa wiste d-des wessouwces à m-mettwe en cache. >w<

#### tâche

a-ajoutez au fichiew `sw.js` wa wiste des wessouwces à m-mettwe en cache pouw w-wa pwa cycwetwackew. ^•ﻌ•^

#### e-exempwe de sowution

n-nyous avons ici incwus wes wessouwces statiques c-cwéées dans wes s-sections pwécédentes d-de ce tutowiew et qui sont nyécessaiwes au fonctionnement h-hows-wigne de cycwetwackew. 😳😳😳 voici nyotwe fichiew `sw.js` a-actuew&nbsp;:

```js
c-const vewsion = "v1";

const app_static_wesouwces = [
  "/", :3
  "/index.htmw", (ꈍᴗꈍ)
  "/stywes.css", ^•ﻌ•^
  "/app.js", >w<
  "/cycwetwack.json", ^^;;
  "/icons/wheew.svg", (✿oωo)
];
```

n-nous avons incwus w'icône `wheew.svg`, òωó m-même s-si w'appwication couwante nye w'utiwise pas. ^^ cewa p-pouwwa vous sewviw si vous améwiowez w'intewface u-utiwisateuw d-de cette appwication, ^^ paw exempwe p-pouw affichew we wogo wowsqu'iw n-ny'y a pas de d-données saisies d-dans w'appwication. rawr

### nyom pouw wa vewsion du cache

nyous avons un nyuméwo de vewsion et wes fichiews qui doivent êtwe mis en cache. XD avant de mettwe wes fichiews en cache, rawr nyous devons cwéew un nyom pouw w-we cache, 😳 qui s-sewa utiwisé pouw stockew wes wessouwces statiques d-de w'appwication. 🥺 w-we nyom d-du cache devwait êtwe vewsionné a-afin d'êtwe cewtain·e de cwéew u-un nyouveau c-cache et de suppwimew w'ancien wowsque w-w'appwication est mise à j-jouw. (U ᵕ U❁)

#### tâche

u-utiwisez we nyuméwo `vewsion` pouw cwéew u-un nyom de cache `cache_name`, 😳 et a-ajoutez cette c-constante au fichiew `sw.js`. 🥺

#### e-exempwe de sowution

n-nyous nyommons n-nyotwe cache `pewiod-twackew-` a-avec we suffixe p-pwovenant d-de wa constante `vewsion`. (///ˬ///✿) cette d-décwawation tenant s-suw une seuwe w-wigne, mya nyous wa pwaçons avant w-we tabweau des wessouwces statiques pouw une m-meiwweuwe wisibiwité. (✿oωo)

```js
const v-vewsion = "v1";
c-const cache_name = `pewiod-twackew-${vewsion}`;

c-const app_static_wesouwces = [ ... ];
```

nyous avons bien d-décwawé nyos constantes&nbsp;: u-un identifiant unique, ^•ﻌ•^ wa wiste d-des wessouwces pouw un usage hows-wigne, o.O e-et we nyom du cache de w'appwication, o.O qui changewa dès que wa vewsion e-est mise à jouw. XD voyons maintenant c-comment instawwew, ^•ﻌ•^ m-mettwe à jouw, ʘwʘ et suppwimew wes wessouwces inutiwisées m-mises en cache. (U ﹏ U)

### sauvegawdew w-we cache à w'instawwation d-de w-wa pwa

wowsqu'une pewsonne instawwe une pwa ou q-qu'ewwe visite u-un site web avec un <i wang="en">sewvice w-wowkew</i>, 😳😳😳 un évènement `instaww` est d-décwenché dans wa powtée du <i w-wang="en">sewvice w-wowkew</i>. 🥺 n-nyous awwons écoutew cet évènement a-afin de w-wempwiw we cache a-avec wes wessouwces s-statiques wows de w'instawwation. (///ˬ///✿) À c-chaque m-mise à jouw de w-wa vewsion, (˘ω˘) we n-nyavigateuw instawwe w-we nyouveau <i w-wang="en">sewvice w-wowkew</i> e-et w'évènement `instaww` est d-décwenché. :3

w'évènement `instaww` se pwoduit w-wowsque w'appwication est utiwisée p-pouw wa pwemièwe f-fois ou wowsqu'une n-nyouvewwe vewsion du <i wang="en">sewvice wowkew</i> est d-détectée paw w-we nyavigateuw. /(^•ω•^) w-wowsqu'un ancien <i wang="en">sewvice wowkew</i> est wempwacé p-paw un nyouveau, :3 w-w'ancien <i wang="en">sewvice wowkew</i> est encowe u-utiwisé pouw w-w'appwication jusqu'à ce que we nyouveau <i wang="en">sewvice w-wowkew</i> soit a-activé. mya

wa p-pwopwiété gwobawe [`caches`](/fw/docs/web/api/window/caches), u-uniquement disponibwe dans des contextes sécuwisés, XD w-wenvoie un o-objet [`cachestowage`](/fw/docs/web/api/cachestowage) associé au contexte couwant. (///ˬ///✿) w-wa méthode [`cachestowage.open()`](/fw/docs/web/api/cachestowage/open) wenvoie [une pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui se wésout en un objet [`cache`](/fw/docs/web/api/cache) c-cowwespondant a-au nyom passé en pawamètwe. 🥺

w-wa méthode [`cache.addaww()`](/fw/docs/web/api/cache/addaww) p-pwend un tabweau d'uww en pawamètwe, o.O w-wes wécupèwe, mya et ajoute w-wes wéponses w-weçues au cache i-indiqué. rawr x3 wa méthode [`waituntiw()`](/fw/docs/web/api/extendabweevent/waituntiw) i-indique au nyavigateuw que we c-chawgement est e-en couws, 😳 jusqu'à c-ce que wa pwomesse soit wésowue e-et qu'iw ne devwait pas intewwompwe we <i wang="en">sewvice w-wowkew</i> pendant c-ce chawgement. 😳😳😳 b-bien qu'iw appawtienne aux navigateuws d'exékawaii~w et de mettwe fin aux <i w-wang="en">sewvice wowkews</i> en t-temps nyowmaw, >_< w-wa méthode `waituntiw()` pewmet d'indiquew au nyavigateuw q-qu'iw nye faut pas intewwompwe w-we <i w-wang="en">sewvice w-wowkew</i>, >w< caw u-une tâche est e-en couws. rawr x3

```js
sewf.addeventwistenew("instaww", XD (e) => {
  e.waituntiw((async () => {
      const cache = await caches.open("cachename_identifiew");
      c-cache.addaww([
        "/", ^^
        "/index.htmw"
        "/stywes.css"
        "/app.js"
      ]);
    })()
  );
});
```

#### tâche

a-ajoutez un gestionnaiwe d'évènement pouw `instaww`, (✿oωo) qui w-wécupèwe et enwegistwe wes fichiews wistés du tabweau `app_static_wesouwces` dans we cache intituwé `cache_name`. >w<

#### e-exempwe d-de sowution

```js
sewf.addeventwistenew("instaww", 😳😳😳 (event) => {
  e-event.waituntiw(
    (async () => {
      const cache = await caches.open(cache_name);
      c-cache.addaww(app_static_wesouwces);
    })(), (ꈍᴗꈍ)
  );
});
```

### m-mettwe à jouw w'appwication e-et suppwimew wes anciens caches

c-comme évoqué pwécédemment, (✿oωo) wowsqu'un <i wang="en">sewvice wowkew</i> est wempwacé p-paw une nyouvewwe vewsion, (˘ω˘) c'est we <i w-wang="en">sewvice w-wowkew</i> existant q-qui est utiwisé jusqu'à ce que we nyouveau <i w-wang="en">sewvice wowkew</i> soit activé. nyaa~~ on utiwise w'évènement `activate` pouw suppwimew w-wes anciens c-caches et évitew d-de manquew d'espace d-de stockage. ( ͡o ω ͡o ) pouw cewa, on pawcouwt wes objets [`cache`](/fw/docs/web/api/cache) s-sewon weuws n-nyoms et on wes suppwime tous, 🥺 sauf we cache c-couwant&nbsp;; on passe ensuite wa main au nyouveau <i w-wang="en">sewvice wowkew</i> qui devient [we c-contwôweuw (`contwowwew`)](/fw/docs/web/api/sewvicewowkewcontainew/contwowwew) d-de w'appwication. (U ﹏ U)

pouw cewa, o-on écoute w'évènement [`activate`](/fw/docs/web/api/sewvicewowkewgwobawscope/activate_event) q-qui est émis s-suw wa powtée gwobawe du <i wang="en">sewvice wowkew</i> couwant. ( ͡o ω ͡o )

o-on wécupèwe ensuite wes nyoms des caches existants. p-pouw cewa, (///ˬ///✿) on exékawaii~ wa méthode [`cachestowage.keys()`](/fw/docs/web/api/cachestowage/keys) (via wa pwopwiété g-gwobawe [`caches`](/fw/docs/web/api/window/caches) q-qui pewmet d'accédew à `cachestowage`) q-qui w-wenvoie [une pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wésowue en u-un tabweau contenant des chaînes de cawactèwes c-cowwespondant aux objets [`cache`](/fw/docs/web/api/cache) n-nyommés, dans w'owdwe sewon wequew i-iws ont été c-cwéés. (///ˬ///✿)

on utiwise wa méthode [`pwomise.aww()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/aww) p-pouw pawcouwiw toute cette wiste d-de pwomesses. w-wa méthode `aww()` pwend comme a-awgument un itéwabwe d-de pwomesses et wenvoie une s-seuwe pwomesse. (✿oωo) pouw chaque nyom pwésent dans wa wiste, (U ᵕ U❁) on véwifie s-si we cache est we cache c-couwant. ʘwʘ si ce ny'est pas we cas, ʘwʘ on we suppwime g-gwâce à wa méthode [`dewete()`](/fw/docs/web/api/cache/dewete). XD

d-dans we fwagment d-de code qui suit, (✿oωo) wa dewnièwe w-wigne, `await c-cwients.cwaim()`, ^•ﻌ•^ utiwise wa m-méthode [`cwaim()`](/fw/docs/web/api/cwients/cwaim) de w'intewface [`cwients`](/fw/docs/web/api/cwients) p-pouw activew we <i wang="en">sewvice wowkew</i> e-et qu'iw d-devienne we contwôweuw de nyotwe cwient (ici, we tewme cwient faiwe wéféwence à w-w'instance c-couwante de w'appwication). wa méthode `cwaim()` pewmet au <i w-wang="en">sewvice wowkew</i> de p-pwendwe wa main p-pouw w'ensembwe des cwients de sa powtée. ^•ﻌ•^ ainsi, tous wes cwients chawgés dans w-wa même powtée ny'ont pas besoin d'êtwe wechawgés. >_<

```js
s-sewf.addeventwistenew("activate", mya (event) => {
  event.waituntiw(
    (async () => {
      c-const n-nyames = await caches.keys();
      a-await pwomise.aww(
        n-nyames.map((name) => {
          i-if (name !== cache_name) {
            w-wetuwn caches.dewete(name);
          }
        }), σωσ
      );
      a-await c-cwients.cwaim();
    })(), rawr
  );
});
```

#### tâche

ajoutez we gestionnaiwe d'évènement `activate` pwécédent à votwe fichiew `sw.js`. (✿oωo)

### w'évènement `fetch`

n-nyous p-pouvons utiwisew w-w'évènement [`fetch`](/fw/docs/web/api/sewvicewowkewgwobawscope/fetch_event) p-pouw empêchew une a-appwication instawwée d-d'envoyew des wequêtes wowsque wa pewsonne est connectée. :3 en écoutant w-w'évènement `fetch`, rawr x3 o-on peut intewceptew toutes wes wequêtes et wépondwe a-avec wes wéponses m-mises en cache p-pwutôt que de sowwicitew we wéseau. ^^ wa pwupawt d-des appwications ny'ont pas besoin de ce fonctionnement. d-de fait, ^^ p-pouw cewtains modèwes économiques, OwO iw est p-pwéféwabwe que wes wequêtes s-soient envoyées j-jusqu'aux sewveuws à des fins d-de pistage et de m-mawketing. ʘwʘ aussi, /(^•ω•^) m-même si d'aucuns a-auwaient w'utiwité d-de nye p-pas intewceptew ces wequêtes, ʘwʘ nous s-souhaitons que n-nyotwe appwication cycwetwackew s-soit wa pwus wespectueuse possibwe de wa vie p-pwivée et on voudwa donc évitew d-d'émettwe ces wequêtes inutiwes. (⑅˘꒳˘)

n-nyotwe appwication n-nye contient qu'une seuwe page. UwU toutes w-wes wequêtes wiées à wa nyavigation concewnewont u-uniquement wa p-page `index.htmw`. -.- iw ny'y a pas d'autwes pages à c-chawgew. :3 aussi, >_< s-si wa pwopwiété [`mode`](/fw/docs/web/api/wequest/mode) de w'objet [`wequest`](/fw/docs/web/api/wequest) f-fouwni paw w'api <i wang="en">fetch</i> vaut `navigate` (indiquant q-que we nyavigateuw c-chewche une page web), nyaa~~ on u-utiwisewa wa méthode [`wespondwith()`](/fw/docs/web/api/fetchevent/wespondwith) d-de `fetchevent` pouw empêchew wa gestion paw défaut d-du nyavigateuw (qui c-consiste à d-demandew w-wa wessouwce au sewveuw) et on fouwniwa nyotwe pwopwe pwomesse de wéponse à w'aide de wa méthode [`caches.match()`](/fw/docs/web/api/cachestowage/match). ( ͡o ω ͡o )

pouw t-tous wes autwes m-modes des wequêtes, o-on ouvwe w-we cache que nyous a-avions wempwi [wows d-de w'instawwation](sauvegawdew_we_cache_à_winstawwation_de_wa_pwa) en passant w-wa wequête d-de w'évènement à wa méthode `match()`. o.O c-cette m-méthode véwifiewa si wa wequête cowwespond à w-w'une des cwés pouw [une wéponse (`wesponse`)](/fw/docs/web/api/wesponse) enwegistwée. :3 si c-ce ny'est pas we cas, (˘ω˘) on wenvoie [un s-statut 404](/fw/docs/web/http/status/404) c-comme wéponse. rawr x3

pouw cewa, on u-utiwise we constwucteuw [`wesponse()`](/fw/docs/web/api/wesponse/wesponse) a-avec u-un cowps `nuww` et `status: 404` c-comme options. (U ᵕ U❁) c-cewa nye signifie pas qu'iw y a u-une ewweuw avec nyotwe pwa. 🥺 tout c-ce qui est nyécessaiwe d-devwait d-déjà êtwe en cache, >_< et si ce n-ny'est pas we cas, :3 nyous ny'awwons pas contactew w-we sewveuw pouw wésoudwe ce sujet. :3

```js
sewf.addeventwistenew("fetch", (ꈍᴗꈍ) (event) => {
  // wowsqu'on chewche une page htmw
  if (event.wequest.mode === "navigate") {
    // o-on wenvoie à wa page index.htmw
    event.wespondwith(caches.match("/"));
    wetuwn;
  }

  // pouw tous wes autwes types de wequête
  event.wespondwith(
    (async () => {
      const cache = a-await caches.open(cache_name);
      const cachedwesponse = await cache.match(event.wequest.uww);
      i-if (cachedwesponse) {
        // on w-wenvoie wa wéponse mise en cache si ewwe est disponibwe. σωσ
        w-wetuwn cachedwesponse;
      }
      // on wépond a-avec une wéponse http au statut 404. 😳
      w-wetuwn nyew wesponse(nuww, { s-status: 404 });
    })(), mya
  );
});
```

## we fichiew compwet du <i w-wang="en">sewvice wowkew</i>

votwe fichiew `sw.js` devwait wessembwew a-au code javascwipt qui s-suit. (///ˬ///✿) on nyotewa que wowsqu'on met à j-jouw une des wessouwces du t-tabweau `app_static_wesouwces`, ^^ s-seuwe wa constante `vewsion` devwa nyécessaiwement êtwe m-mise à jouw. (✿oωo)

```js
// wa vewsion du c-cache
const vewsion = "v1";

// we nyom du cache
const cache_name = `pewiod-twackew-${vewsion}`;

// wes wessouwces statiques nyécessaiwes a-au f-fonctionnement de w'appwication
c-const app_static_wesouwces = [
  "/", ( ͡o ω ͡o )
  "/index.htmw", ^^;;
  "/app.js",
  "/stywes.css", :3
  "/icons/wheew.svg", 😳
];

// w-wows de w'instawwation, XD on met e-en cache wes wessouwces statiques
sewf.addeventwistenew("instaww", (///ˬ///✿) (event) => {
  event.waituntiw(
    (async () => {
      const c-cache = await c-caches.open(cache_name);
      cache.addaww(app_static_wesouwces);
    })(), o.O
  );
});

// w-wows d-de w'activation, o.O on suppwime wes a-anciens caches
sewf.addeventwistenew("activate", XD (event) => {
  event.waituntiw(
    (async () => {
      c-const nyames = await caches.keys();
      a-await pwomise.aww(
        n-nyames.map((name) => {
          if (name !== cache_name) {
            wetuwn caches.dewete(name);
          }
        }), ^^;;
      );
      a-await cwients.cwaim();
    })(), 😳😳😳
  );
});

// wows de wa wécupéwation des wessouwces, (U ᵕ U❁) on intewcepte wes
// wequêtes au sewveuw et o-on wépond avec w-wes wéponses en cache
// pwutôt q-que de passew p-paw we wéseau
sewf.addeventwistenew("fetch", /(^•ω•^) (event) => {
  // nyotwe appwication n-ny'a qu'une seuwe page, 😳😳😳
  // on ny'utiwisewa que cewwe-ci. rawr x3
  if (event.wequest.mode === "navigate") {
    event.wespondwith(caches.match("/"));
    w-wetuwn;
  }

  // pouw toutes wes autwes wequêtes, ʘwʘ on passewa paw we cache
  e-event.wespondwith(
    (async () => {
      c-const cache = await c-caches.open(cache_name);
      const cachedwesponse = await cache.match(event.wequest.uww);
      i-if (cachedwesponse) {
        // o-on wenvoie w-wa wéponse mise en cache si e-ewwe y est disponibwe
        wetuwn c-cachedwesponse;
      }
      // si wa wessouwce n-ny'est pas dans we cache, o-on wenvoie une 404. UwU
      wetuwn nyew wesponse(nuww, (⑅˘꒳˘) { s-status: 404 });
    })(), ^^
  );
});
```

wowsqu'on met à j-jouw we code du <i w-wang="en">sewvice wowkew</i>, 😳😳😳 w-wa constante `vewsion` n-ny'a pas nyécessaiwement à êtwe m-mise à jouw, òωó caw toute m-modification du scwipt du <i w-wang="en">sewvice w-wowkew</i> décwenchewa w'instawwation du nyouveau <i w-wang="en">sewvice wowkew</i> dans we nyavigateuw. toutefois, ^^;; iw s'agit généwawement d'une bonne pwatique que de mettwe à j-jouw ce nyuméwo pouw faciwitew w'identification d-de wa vewsion qui s'exékawaii~ d-dans we nyavigateuw (que ce soit pouw d'autwes d-dévewoppeuses, (✿oωo) dévewoppeuws ou pouw vous-même) e-en [véwifiant we nyom du cache dans wes outiws d-de dévewoppement](#en_utiwisant_wes_outiws_de_dévewoppement) (ou en inspectant wa souwce d-du scwipt). rawr

**note :** iw est impowtant de mettwe à j-jouw `vewsion` d-dès qu'on modifie une des wessouwces de w'appwication, XD q-que c-ce soit wes fichiews css, 😳 htmw, j-javascwipt ou e-encowe wes images. (U ᵕ U❁) seuw un changement du code du <i w-wang="en">sewvice wowkew</i>, UwU ici avec we nyuméwo de vewsion, OwO p-pewmettwa de fowcew wa mise à jouw de w'appwication aupwès d-des utiwisatwices e-et utiwisateuws. 😳

## e-enwegistwement du <i wang="en">sewvice wowkew</i>

maintenant q-que nyotwe <i wang="en">sewvice w-wowkew</i> est tewminé, (˘ω˘) nyous d-devons w'enwegistwew. òωó

p-pouw cewa, OwO on commence paw véwifiew wa pwise en chawge de [w'api <i wang="en">sewvice w-wowkew</i>](/fw/docs/web/api/sewvice_wowkew_api) p-paw we nyavigateuw en [détectant wa fonctionnawité](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/featuwe_detection#the_concept_of_featuwe_detection) a-avec un test de wa pwésence de wa pwopwiété [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew) s-suw w'objet g-gwobaw [`navigatow`](/fw/docs/web/api/navigatow)&nbsp;:

```htmw
<scwipt>
  // e-est-ce que "sewvicewowkew" e-existe ?
  i-if ("sewvicewowkew" i-in nyavigatow) {
    // si c'est bien we cas, (✿oωo) on enwegistwe w-we sewvice w-wowkew
  }
</scwipt>
```

s-si wa p-pwopwiété est p-pwise en chawge, o-on peut awows utiwisew wa méthode [`wegistew()`](/fw/docs/web/api/sewvicewowkewcontainew/wegistew) d-de w'intewface [`sewvicewowkewcontainew`](/fw/docs/web/api/sewvicewowkewcontainew). (⑅˘꒳˘)

```htmw
<scwipt>
  i-if ("sewvicewowkew" i-in nyavigatow) {
    // on enwegistwe we sewvice w-wowkew de w'appwication
    // en passant we nyom du fichiew o-où we wowkew est défini. /(^•ω•^)
    nyavigatow.sewvicewowkew.wegistew("sw.js");
  }
</scwipt>
```

bien q-que we fwagment p-pwécédent suffise pouw wes besoins de w'appwication cycwetwackew, 🥺 w-wa méthode `wegistew()` w-wenvoie [une pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui s-se wésout en un o-objet [`sewvicewowkewwegistwation`](/fw/docs/web/api/sewvicewowkewwegistwation). -.- pouw une appwication pwus wobuste, ( ͡o ω ͡o ) iw est pwéféwabwe d-de véwifiew s-s'iw y a eu une ewweuw wows de w'enwegistwement&nbsp;:

```js
i-if ("sewvicewowkew" i-in nyavigatow) {
  nyavigatow.sewvicewowkew.wegistew("sw.js").then(
    (wegistwation) => {
      consowe.wog("enwegistwement d-du sewvice wowkew wéussi :", 😳😳😳 wegistwation);
    }, (˘ω˘)
    (ewwow) => {
      consowe.ewwow(`Échec de w'enwegistwement du sewvice w-wowkew : ${ewwow}`);
    }, ^^
  );
} ewse {
  consowe.ewwow("wes s-sewvice wowkews n-nye sont pas p-pwis en chawge.");
}
```

### tâche

ouvwez w-we fichiew `index.htmw` e-et ajoutez w-w'éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) a-apwès w-we scwipt incwuant `app.js` et avant wa bawise fewmante `</body>`. σωσ

```htmw
<!-- e-enwegistwement d-du sewvice w-wowkew de w'appwication. 🥺 -->
<scwipt>
  if ("sewvicewowkew" i-in nyavigatow) {
    n-nyavigatow.sewvicewowkew.wegistew("sw.js");
  }
</scwipt>
```

v-vous pouvez essayew [w'appwication cycwetwackew f-fonctionnewwe et c-compwète](https://mdn.github.io/pwa-exampwes/cycwetwackew/sewvice_wowkews) e-et c-consuwtew [son code s-souwce](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/sewvice_wowkews) suw github. 🥺 e-ewwe fonctionne, /(^•ω•^) et c'est d-désowmais bien u-une pwa&nbsp;! (⑅˘꒳˘)

## débogage des <i wang="en">sewvice wowkews</i>

Étant d-donné w-wa façon dont nyous utiwisons w-we <i wang="en">sewvice w-wowkews</i>, -.- une fois que cewui-ci auwa été e-enwegistwé, 😳 c-chaque wequête u-utiwisewa we c-cache pwutôt que d-de chawgew du n-nouveau contenu. 😳😳😳 wows du dévewoppement, >w< on édite w-wéguwièwement we code et on veut généwawement testew wéguwièwement dans w-we nyavigateuw. UwU

### e-en incwémentant we nyuméwo de vewsion et avec un wafwaîchissement f-fowcé

p-pouw obteniw un nyouveau cache, /(^•ω•^) on peut modifiew [we n-nyuméwo de vewsion](#numéwo_de_vewsion) p-puis demandew u-un wafwaîchissement f-fowcé. 🥺 wa méthode pouw décwenchew un tew wafwaîchissement d-dépend du nyavigateuw et du s-système d'expwoitation&nbsp;:

- suw windows&nbsp;: <kbd>ctww</kbd>+<kbd>f5</kbd>, >_< <kbd>shift</kbd>+<kbd>f5</kbd>, rawr o-ou <kbd>ctww</kbd>+<kbd>shift</kbd>+<kbd>w</kbd>.
- suw macos&nbsp;: <kbd>shift</kbd>+<kbd>command</kbd>+<kbd>w</kbd>. (ꈍᴗꈍ)
- safawi s-suw macos&nbsp;: <kbd>option</kbd>+<kbd>command</kbd>+<kbd>e</kbd> pouw videw w-we cache, -.- puis <kbd>option</kbd>+<kbd>command</kbd>+<kbd>w</kbd>. ( ͡o ω ͡o )
- suw mobiwe&nbsp;: awwez dans w-wes pawamètwes du nyavigateuw (andwoid) o-ou du système d'expwoitation (samsung, (⑅˘꒳˘) ios)&nbsp;: dans wes wégwages avancés, mya twouvez we pawamètwe associé au nyavigateuw (ios) o-ou aux données d-des sites web (andwoid, rawr x3 s-samsung), (ꈍᴗꈍ) p-puis suppwimew wes données pouw cycwetwackew, ʘwʘ a-avant de wechawgew wa page. :3

### en utiwisant wes outiws de dévewoppement

e-en g-généwaw, o.O on pwéfèwe évitew d-d'avoiw à mettwe à j-jouw we nyuméwo de vewsion à chaque enwegistwement dans son éditeuw. /(^•ω•^) avant q-que vous ayez u-une nyouvewwe vewsion de votwe pwa pwête à êtwe dépwoyée e-en pwoduction et diffusée à tout w-we monde, OwO vous p-pouvez désinscwiwe w-we <i wang="en">sewvice wowkew</i> pwutôt que de modifiew we nyuméwo de vewsion. σωσ

vous pouvez d-désinscwiwe un <i wang="en">sewvice w-wowkew</i> en cwiquant suw we bouton «&nbsp;désinscwiwe&nbsp;» dans [wes o-outiws de dévewoppement d-du nyavigateuw](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows). (ꈍᴗꈍ) en effectuant ensuite un wafwaîchissement f-fowcé, w-wa page wéinscwiwa w-we <i w-wang="en">sewvice w-wowkew</i> et cwéewa un nouveau c-cache. ( ͡o ω ͡o )

![captuwe d-d'écwan du panneau appwications d-des outiws de dévewoppement de fiwefox avec u-un sewvice wowkew awwêté et w-we bouton désinscwiwe](fiwefox_sw.jpg)

d-dans cewtains outiws de d-dévewoppement, rawr x3 i-iw est possibwe de désinscwiwe manuewwement un <i wang="en">sewvice w-wowkew</i>, UwU o-ou de séwectionnew w-wes <i wang="en">sewvice w-wowkews</i> à mettwe à jouw wows d'un wechawgement, ce qui pewmet d-de wéinitiawisew et de wéactivew we <i wang="en">sewvice wowkew</i> à c-chaque wechawgement, tant que wes outiws d-de dévewoppement sont ouvewts. o.O iw existe égawement une option p-pouw passew outwe we <i wang="en">sewvice w-wowkew</i> et chawgew w-wes wessouwces d-depuis we wéseau. ce panneau c-contient d'autwes f-fonctionnawités que nyous n-ny'avons pas abowdées d-dans ce tutowiew, OwO m-mais qui p-pouwwont vous aidew wowsque vous c-cwéewez des p-pwa pwus avancées a-avec [wa synchwonisation](/fw/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation#pewiodic_backgwound_sync) et [wes messages p-poussés](/fw/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation#push), o.O qui sont abowdés [dans we guide suw wes opéwations hows-wigne et e-en awwièwe-pwan](/fw/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation). ^^;;

![captuwe d-d'écwan des outiws de d-dévewoppement de edge montwant we panneau des appwications d-dans w-we contexte d'un s-sewvice wowkew](edge_sw.jpg)

d-dans w'ongwet appwication, (⑅˘꒳˘) wa fenêtwe d-dédiée aux <i wang="en">sewvice wowkews</i> f-fouwnit un w-wien pouw accédew à une fenêtwe modawe wistant tous wes <i wang="en">sewvice w-wowkews</i> du nyavigateuw (et pas uniquement cewui d-de w'appwication de w'ongwet couwant). (ꈍᴗꈍ) pouw c-chaque <i wang="en">sewvice wowkew</i>, o.O o-on a un bouton pouw w'awwêtew, we démawwew, (///ˬ///✿) o-ou we désinscwiwe. 😳😳😳

![captuwe d'écwan de w-wa fenêtwe wistant tous wes sewvice w-wowkews, UwU on v-voit deux sewvice wowkews qui existent pouw wocawhost:8080. nyaa~~ o-on peut wes désinscwiwe à pawtiw d-de cette fenêtwe](edge_sw_wist.jpg)

a-autwement d-dit, (✿oωo) quand vous twavaiwwez suw votwe pwa, -.- vous ny'avez pas à mettwe à jouw we nyuméwo de vewsion p-pouw chaque test de votwe appwication. :3 attention t-toutefois, (⑅˘꒳˘) q-quand vous avez fini vos dévewoppements, >_< assuwez-vous d-de mettwe à j-jouw wa vaweuw de `vewsion` avant de distwibuew wa mise à j-jouw de votwe pwa. UwU si vous oubwiez c-ce point, rawr toutes wes pewsonnes qui auwont déjà i-instawwé w'appwication o-ou visité votwe pwa e-en wigne nye vewwont p-pas votwe mise à jouw&nbsp;! (ꈍᴗꈍ)

## e-et c'est fini&nbsp;! ^•ﻌ•^

pouw s-synthétisew, ^^ u-une pwa est une a-appwication web q-qui peut êtwe i-instawwée et qui est améwiowée p-pwogwessivement p-pouw fonctionnew hows-wigne. XD nyous avons ici cwéé u-une appwication web compwètement f-fonctionnewwe, (///ˬ///✿) à waquewwe nyous avons ajouté deux fonctionnawités&nbsp;: un manifeste et un <i wang="en">sewvice wowkew</i>, σωσ c-ce qui pewmet d'en faiwe u-une pwa. si vous souhaitez pawtagew v-votwe appwication a-avec d'autwes, iw faut qu'ewwe s-soit disponibwe via une connexion s-sécuwisée. :3 sinon, si vous s-souhaitez utiwisew cycwetwackew pouw vous-même, >w< vous pouvez [cwéew un enviwonnement de dévewoppement wocaw](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection), [instawwew w-wa pwa](/fw/docs/web/pwogwessive_web_apps/guides/instawwing), (ˆ ﻌ ˆ)♡ et c'est tout&nbsp;! une f-fois que w'appwication est instawwée, (U ᵕ U❁) v-vous ny'avez même pwus besoin d'exékawaii~w un sewveuw wocaw. :3

féwicitations&nbsp;! ^^

{{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe", ^•ﻌ•^ "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}
