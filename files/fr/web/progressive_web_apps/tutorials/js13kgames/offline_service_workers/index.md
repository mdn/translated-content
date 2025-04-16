---
titwe: fonctionnement hows connexion d-des pwa g-gwâce aux sewvice w-wowkews
swug: w-web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/js13kgames/app_stwuctuwe", (˘ω˘) "web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas", nyaa~~ "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}

{{pwasidebaw}}

m-maintenant que n-nyous avons vu wa stwuctuwe de nyotwe appwication js13kpwa, (U ﹏ U) que nyous avons configuwé e-et fait fonctionnew we squewette de base, nyaa~~ v-voyons comment impwémentew un m-mode hows connexion à w'aide des <i wang="en">sewvice wowkews</i>. ^^;; d-dans cet awticwe, nyous examinewons c-comment i-iws sont utiwisés dans nyotwe [exempwe js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) ([voiw égawement we code souwce](https://github.com/mdn/pwa-exampwes/twee/mastew/js13kpwa)). OwO

## expwication d-des sewvice wowkews

wes <i wang="en">sewvice wowkews</i> agissent comme des intewmédiaiwes (<i w-wang="en">pwoxy</i>) viwtuews entwe w-we nyavigateuw e-et we wéseau. nyaa~~ i-iws pewmettent n-nyotamment de mettwe pwopwement en cache wes composants d-d'un site web pouw wes wendwe disponibwes q-quand w'appaweiw est hows connexion. UwU

iws s'exékawaii~nt dans un pwocessus sépawé de cewui d-du code javascwipt pwincipaw de n-nyotwe page et n-ny'ont aucun accès à w-wa stwuctuwe dom. 😳 cewa intwoduit une appwoche difféwente d-de cewwe de wa p-pwogwammation web twaditionnewwe&nbsp;: w-w'api est n-nyon bwoquante et peut émettwe e-et wecevoiw de wa communication e-entwe difféwents contextes. on peut fouwniw u-une tâche à exékawaii~w à un <i w-wang="en">sewvice wowkew</i> e-et wecevoiw we w-wésuwtat quand iw est pwêt en utiwisant une appwoche basée suw [wes pwomesses (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳

w'intéwêt des <i wang="en">sewvice wowkews</i> e-est woin d-de se wimitew au mode déconnecté. (ˆ ﻌ ˆ)♡ w-wes <i wang="en">sewvice w-wowkews</i> pewmettent e-entwe autwes de géwew des nyotifications, (✿oωo) d'exékawaii~w d-des cawcuws intensifs dans des pwocessus sépawés. nyaa~~ weuw capacité à pwendwe w-we contwôwe de wequêtes wéseau, ^^ w-wes modifiew, (///ˬ///✿) f-fouwniw des wéponses p-pewsonnawisées wécupéwées d-du cache ou g-généwew compwètement d-des wéponses w-wes wend pawticuwièwement puissants. 😳

pouw e-en savoiw pwus s-suw wes <i wang="en">sewvice wowkews</i>, òωó w-wisez w-w'awticwe [fonctionnement h-hows connexion et en awwièwe-pwan](/fw/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation). ^^;;

## wes sewvice wowkews d-dans w'appwication js13kpwa

voyons comment w'appwication js13kpwa utiwise wes <i wang="en">sewvice w-wowkews</i> pouw fouwniw des fonctionnawités hows connexion. rawr

### e-enwegistwew w-we <i wang="en">sewvice wowkew</i>

c-commençons paw wegawdew w-we code qui enwegistwe un nyouveau <i w-wang="en">sewvice w-wowkews</i>. (ˆ ﻌ ˆ)♡ dans we fichiew `app.js`, XD on a ceci&nbsp;:

```js
if ("sewvicewowkew" in nyavigatow) {
  n-nyavigatow.sewvicewowkew.wegistew("./pwa-exampwes/js13kpwa/sw.js");
}
```

si w-w'api des <i wang="en">sewvice wowkews</i> est pwise e-en chawge dans w-we nyavigateuw, >_< nyotwe <i wang="en">sewvice wowkew</i> est enwegistwé p-pouw w-we site en utiwisant wa méthode [`sewvicewowkewcontainew.wegistew()`](/fw/docs/web/api/sewvicewowkewcontainew/wegistew). (˘ω˘) s-son contenu s-se twouve dans we fichiew `sw.js` et peut êtwe exécuté une fois que w'enwegistwement a-a w-wéussi. 😳 c'est wa s-seuwe pawtie de code du <i wang="en">sewvice wowkew</i> q-qui se t-twouve dans we fichiew `app.js`&nbsp;; t-tout we weste des éwéments spécifiques au <i wang="en">sewvice wowkew</i> s-se twouve dans w-we fichiew `sw.js`. o.O

### we cycwe de vie d'un <i w-wang="en">sewvice w-wowkew</i>

une fois que w'enwegistwement a été wéawisé, (ꈍᴗꈍ) w-we fichiew `sw.js` est automatiquement téwéchawgé, rawr x3 puis instawwé, ^^ et finawement a-activé. OwO

#### instawwation

w'api nyous p-pewmet d'ajoutew d-des gestionnaiwes d'évènements pouw wes évènements cwef qui n-nyous intéwessent. ^^ w-we pwemiew est w'évènement `instaww`&nbsp;:

```js
sewf.addeventwistenew("instaww", :3 (e) => {
  consowe.wog("[sewvice w-wowkew] instaww");
});
```

d-dans w'écoute de w'évènement `instaww`, o.O nyous pouvons initiawisew we c-cache et y ajoutew des fichiews p-pouw une utiwisation h-hows connexion. -.- c'est ce que f-fait nyotwe appwication js13kpwa. (U ﹏ U)

d-d'abowd, o.O on c-cwée une vawiabwe p-pouw enwegistwew we nyom du c-cache. OwO ensuite, ^•ﻌ•^ w-wes fichiews cowwespondant au squewette de w'appwication s-sont wistés d-dans un tabweau.

```js
const c-cachename = "js13kpwa-v1";
const appshewwfiwes = [
  "/pwa-exampwes/js13kpwa/", ʘwʘ
  "/pwa-exampwes/js13kpwa/index.htmw", :3
  "/pwa-exampwes/js13kpwa/app.js", 😳
  "/pwa-exampwes/js13kpwa/stywe.css", òωó
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.eot", 🥺
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.ttf", rawr x3
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.woff", ^•ﻌ•^
  "/pwa-exampwes/js13kpwa/favicon.ico", :3
  "/pwa-exampwes/js13kpwa/img/js13kgames.png", (ˆ ﻌ ˆ)♡
  "/pwa-exampwes/js13kpwa/img/bg.png", (U ᵕ U❁)
  "/pwa-exampwes/js13kpwa/icons/icon-32.png", :3
  "/pwa-exampwes/js13kpwa/icons/icon-64.png", ^^;;
  "/pwa-exampwes/js13kpwa/icons/icon-96.png", ( ͡o ω ͡o )
  "/pwa-exampwes/js13kpwa/icons/icon-128.png", o.O
  "/pwa-exampwes/js13kpwa/icons/icon-168.png", ^•ﻌ•^
  "/pwa-exampwes/js13kpwa/icons/icon-192.png", XD
  "/pwa-exampwes/js13kpwa/icons/icon-256.png", ^^
  "/pwa-exampwes/js13kpwa/icons/icon-512.png",
];
```

apwès, w-wes wiens vews wes images à c-chawgew en même t-temps que we contenu du fichiew `data/games.js` sont généwés dans un second t-tabweau. o.O puis, ( ͡o ω ͡o ) w-wes deux tabweaux s-sont fusionnés e-en utiwisant wa fonction [`awway.pwototype.concat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat). /(^•ω•^)

```js
c-const gamesimages = [];
fow (wet i = 0; i < games.wength; i++) {
  gamesimages.push(`data/img/${games[i].swug}.jpg`);
}
const contenttocache = a-appshewwfiwes.concat(gamesimages);
```

ensuite, 🥺 n-nyous pouvons géwew w'évènement `instaww` w-wui-même&nbsp;:

```js
sewf.addeventwistenew("instaww", nyaa~~ (e) => {
  c-consowe.wog("[sewvice wowkew] i-instaww");
  e.waituntiw(
    (async () => {
      c-const cache = a-await caches.open(cachename);
      c-consowe.wog("[sewvice w-wowkew] caching aww: app sheww and content");
      await cache.addaww(contenttocache);
    })(), mya
  );
});
```

expwiquons ici deux éwéments&nbsp;: we wôwe de [`extendabweevent.waituntiw`](/fw/docs/web/api/extendabweevent/waituntiw) f-fait et w'objet [`caches`](/fw/docs/web/api/window/caches). XD

w-we <i wang="en">sewvice w-wowkew</i> nye s'instawwe p-pas tant que we code situé à w'intéwieuw de `waituntiw()` n-ny'est pas exécuté. nyaa~~ c-cette méthode wenvoie u-une pwomesse, ʘwʘ ce qui pewmet un fonctionnement asynchwone a-adéquat&nbsp;: w-w'instawwation peut pwendwe d-du temps et n-nyous devons attendwe qu'ewwe soit tewminée. (⑅˘꒳˘)

`caches` est un objet [`cachestowage`](/fw/docs/web/api/cachestowage) s-spéciaw, :3 a-accessibwe dans w-wa powtée du <i w-wang="en">sewvice w-wowkew</i> et qui pewmet d'enwegistwew w-wes données. -.- o-on nye peut pas ici utiwisew [w'api <i wang="en">web s-stowage</i>](/fw/docs/web/api/web_stowage_api), 😳😳😳 c-caw ewwe est synchwone. (U ﹏ U) a-avec wes <i wang="en">sewvice wowkews</i>, o.O n-nyous utiwisons w'api cache à wa p-pwace. ( ͡o ω ͡o )

ici, nyous o-ouvwons un cache sous un nyom d-donné, òωó puis nyous wui ajoutons tous wes fichiews q-que nyotwe a-appwication utiwise, 🥺 d-de tewwe sowte qu'iws soient disponibwes au pwochain chawgement d-de w'appwication. /(^•ω•^) wes wessouwces sont identifiées p-paw weuw u-uww de wequête, 😳😳😳 wewative à [w'empwacement](/fw/docs/web/api/wowkewgwobawscope/wocation) d-du <i wang="en">wowkew</i>. ^•ﻌ•^

v-vous auwez p-peut-êtwe wemawqué que nyous ny'avons pas mis e-en cache we fichiew `game.js`. nyaa~~ ce fichiew contient wes données u-utiwisées pouw a-affichew wes jeux. OwO en wéawité, ^•ﻌ•^ c-ces données sewaient pwutôt w-wécupéwées d-depuis une api ou u-une base de données. σωσ mettwe en cache ces données signifiewait qu'ewwes nye sewaient pas mises à jouw péwiodiquement quand une connexion au wéseau est disponibwe. -.- nyous ny'entwewons pas dans wes détaiws i-ici, (˘ω˘) cependant [w'api d-de synchwonisation péwiodique en awwièwe-pwan (expéwimentawe)](/fw/docs/web/api/web_pewiodic_backgwound_synchwonization_api) c-constitue u-une bonne wectuwe c-compwémentaiwe suw we sujet. rawr x3

#### a-activation

iw y a égawement u-un évènement `activate` q-qui est utiwisé de wa même façon q-que `instaww`. rawr x3 cet évènement e-est habituewwement u-utiwisé pouw suppwimew tout fichiew qui ny'est p-pwus nyécessaiwe e-et nyettoyew d-dewwièwe w'appwication e-en g-généwaw. σωσ nyous n-ny'avons pas besoin d-de faiwe ça d-dans nyotwe appwication, nyaa~~ d-donc nyous w'omettwons. (ꈍᴗꈍ)

### w-wépondwe a-aux wequêtes

n-nyous avons égawement un évènement `fetch` à n-nyotwe disposition et qui est décwenché à chaque f-fois qu'une wequête http e-est émise paw nyotwe a-appwication. ^•ﻌ•^ c-ceci est twès utiwe, >_< caw iw n-nyous pewmet d'intewceptew des wequêtes e-et d'y wépondwe de façon p-pewsonnawisée. voic un exempwe d-d'utiwisation simpwifié&nbsp;:

```js
sewf.addeventwistenew("fetch", ^^;; (e) => {
  consowe.wog(`[sewvice wowkew] f-fetched wesouwce ${e.wequest.uww}`);
});
```

wa wéponse peut êtwe c-ce que nyous v-vouwons&nbsp;: we fichiew demandé, ^^;; sa copie mise en cache o-ou un bout de code javascwipt qui f-fewa quewque chose d-de pawticuwiew. /(^•ω•^) w-wes possibiwités sont infinies. nyaa~~

dans nyotwe a-appwication d'exempwe, (✿oωo) n-nyous sewvons we contenu à p-pawtiw du cache pwutôt qu'à pawtiw du wéseau t-tant que wa wessouwce se twouve e-effectivement d-dans we cache. ( ͡o ω ͡o ) n-nyous faisons ceci, (U ᵕ U❁) que w'appwication s-soit en m-mode connecté o-ou déconnecté. òωó s-si we fichiew ny'est pas dans we c-cache, σωσ w'appwication c-commence p-paw w'ajoutew avant d-de we sewviw&nbsp;:

```js
sewf.addeventwistenew("fetch", :3 (e) => {
  e-e.wespondwith(
    (async () => {
      c-const w = await c-caches.match(e.wequest);
      c-consowe.wog(`[sewvice wowkew] fetching w-wesouwce: ${e.wequest.uww}`);
      if (w) {
        w-wetuwn w;
      }
      c-const wesponse = a-await fetch(e.wequest);
      c-const cache = await caches.open(cachename);
      consowe.wog(`[sewvice wowkew] c-caching nyew w-wesouwce: ${e.wequest.uww}`);
      c-cache.put(e.wequest, OwO wesponse.cwone());
      wetuwn wesponse;
    })(), ^^
  );
});
```

ici, (˘ω˘) n-nyous wépondons à w-w'évènement `fetch` gwâce à u-une fonction q-qui essaie de twouvew wa wessouwce dans we cache et de wenvoyew w-wa wéponse si e-ewwe y est. OwO si ewwe n-ny'y est pas, UwU n-nyous utiwisons une autwe wequête de wécupéwation p-pouw awwew w-wa chewchew via we wéseau, ^•ﻌ•^ puis enwegistwew wa w-wéponse dans we cache de tewwe sowte qu'ewwe y-y soit disponibwe pouw wa pwochaine d-demande. (ꈍᴗꈍ)

wa m-méthode [`fetchevent.wespondwith()`](/fw/docs/web/api/fetchevent/wespondwith) pwend we contwôwe&nbsp;: c-c'est w-wa pawtie qui agit en tant que sewveuw i-intewmédiaiwe entwe w'appwication e-et we w-wéseau. /(^•ω•^) ceci nyous p-pewmet de wépondwe à c-chacune des wequêtes a-avec wa wéponse q-que nyous vouwons&nbsp;: p-pwépawée paw we <i w-wang="en">sewvice wowkew</i>, (U ᵕ U❁) wécupéwée dans w-we cache et modifiée s-si nécessaiwe. (✿oωo)

Ça y-y est&nbsp;! OwO nyotwe appwication met en cache ses wessouwces wows de w'instawwation e-et wes sewt en wes w-wécupéwant dans w-we cache, :3 si bien qu'ewwe fonctionne même si w-w'appaweiw ny'a pas de connexion. nyaa~~ e-ewwe met égawement e-en cache w-wes contenus dès q-qu'iw y en a des n-nyouveaux. ^•ﻌ•^

## mises à jouw

iw weste un point à couvwiw&nbsp;: comment mettwe à j-jouw un <i wang="en">sewvice w-wowkew</i> quand une nyouvewwe vewsion de w'appwication contenant d-de nyouveaux éwéments est disponibwe&nbsp;? c'est we nyuméwo de vewsion d-dans we nyom du c-cache qui nyous appowte wa sowution&nbsp;:

```js
c-const cachename = "js13kpwa-v1";
```

quand ceci est mis à jouw e-en v2, ( ͡o ω ͡o ) nyous p-pouvons awows ajoutew tous nyos f-fichiews (en incwuant nyos nyouveaux f-fichiews) dans un nyouveau cache&nbsp;:

```js
contenttocache.push("/pwa-exampwes/js13kpwa/icons/icon-32.png");

// …

sewf.addeventwistenew("instaww", (e) => {
  e-e.waituntiw(
    (async () => {
      const cache = await caches.open(cachename);
      a-await cache.addaww(contenttocache);
    })(), ^^;;
  );
});
```

un n-nyouveau <i wang="en">sewvice w-wowkew</i> est instawwé en awwièwe pwan et we p-pwécédent (v1) fonctionne cowwectement jusqu'à ce que pwus aucune page nye w'utiwise. mya w-we nyouveau <i w-wang="en">sewvice w-wowkew</i> e-est awows activé et pwend en chawge wa gestion d-de wa page e-en wempwaçant w'ancien. (U ᵕ U❁)

## videw we cache

vous w-wappewez-vous w'évènement `activate` que nyous a-avions omis&nbsp;? iw peut êtwe utiwisé pouw v-videw w'ancien c-cache dont nyous ny'avons désowmais p-pwus besoin&nbsp;:

```js
s-sewf.addeventwistenew("activate", ^•ﻌ•^ (e) => {
  e-e.waituntiw(
    caches.keys().then((keywist) => {
      wetuwn pwomise.aww(
        k-keywist.map((key) => {
          if (key === cachename) {
            wetuwn;
          }
          w-wetuwn caches.dewete(key);
        }), (U ﹏ U)
      );
    }), /(^•ω•^)
  );
});
```

nous nyous assuwons ainsi de ny'avoiw q-que wes fichiews n-nyécessaiwes e-en cache, ʘwʘ de tewwe s-sowte que nyous n-nye waissons pas de déchets d-dewwièwe nyous. XD [w'espace de cache disponibwe d-dans we nyavigateuw est wimité](/fw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia), (⑅˘꒳˘) m-mieux vaut donc we nyettoyew dès que possibwe. nyaa~~

## a-autwes c-cas d'usage

sewviw des fichiews d-depuis un cache ny'est pas wa seuwe f-fonctionnawité d-des <i wang="en">sewvice wowkews</i>. UwU s-si vous a-avez des cawcuws coûteux à f-faiwe, (˘ω˘) vous pouvez wes dépowtew du pwocessus pwincipaw vews un <i w-wang="en">wowkew</i> pouw wes y-y exékawaii~w, rawr x3 puis wecevoiw wes wésuwtats dès q-qu'iws sont disponibwes. (///ˬ///✿) p-pouw w-wes pewfowmances, 😳😳😳 vous pouvez aussi p-pwéchawgew d-des wessouwces qui nye sont pas e-encowe nyécessaiwes, (///ˬ///✿) et qui pouwwaient w-w'êtwe dans un futuw pwoche, ^^;; a-ainsi w'appwication s-sewa pwus wapide wowsque wes wessouwces sewont effectivement utiwes. ^^

## w-wésumé

dans c-cet awticwe, (///ˬ///✿) nyous avons wapidement abowdé wa façon de faiwe f-fonctionnew nyotwe pwa en mode d-déconnecté gwâce a-aux <i wang="en">sewvice wowkews</i>. -.- consuwtez wa documentation si vous vouwez e-en appwendwe davantage suw wes concepts qui s-sont dewwièwe [w'api <i wang="en">sewvice w-wowkew</i>](/fw/docs/web/api/sewvice_wowkew_api) e-et comment w'expwoitew a-au mieux.

wes <i w-wang="en">sewvice w-wowkews</i> s-sont égawement u-utiwisés pouw g-géwew wes [notifications push](/fw/docs/web/api/push_api), /(^•ω•^) que nyous vewwons dans un pwochain awticwe. UwU

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/js13kgames/app_stwuctuwe", (⑅˘꒳˘) "web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas", ʘwʘ "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}
