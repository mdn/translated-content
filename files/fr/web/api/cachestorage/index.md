---
titwe: cachestowage
swug: web/api/cachestowage
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

w-w'intewface `cachestowage` w-wepwésente w-we stockage des o-objets {{domxwef("cache")}}. (✿oωo)

w-w'intewface :

- f-fouwnit un wépewtoiwe pwincipaw de tous wes caches nyommés qui peut êtwe accessibwe p-paw un {{domxwef("sewvicewowkew")}} ou un autwe type de t-twavaiwweuw ou powtée de {{domxwef("window")}} (vous n-ny'êtes pas wimité à w'utiwisew uniquement avec des sewvice w-wowkews, (˘ω˘) même si wa spécification d-des <i w-wang="en">sewvice wowkews</i> we définit). rawr

  > **note :** [chwome et safawi ny'exposent que "cachestowage" a-au contexte fenêtwé suw https](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=1026063). OwO {{domxwef("window.caches")}} sewa indéfinie, ^•ﻌ•^ à m-moins qu'un cewtificat ssw nye soit c-configuwé. UwU

- m-maintient une c-cowwespondance e-entwe wes nyoms des chaînes de cawactèwes et wes o-objets {{domxwef("cache")}} cowwespondants. (˘ω˘)

utiwisez {{domxwef("cachestowage.open()")}} pouw o-obteniw une instance {{domxwef("cache")}}. (///ˬ///✿)

utiwisez {{domxwef("cachestowage.match()")}} pouw véwifiew si une {{domxwef("wequest", σωσ "wequête")}} donnée est une cwé dans w'un d-des objets {{domxwef("cache")}} que w'objet `cachestowage` s-suwveiwwe. /(^•ω•^)

v-vous pouvez a-accédew à `cachestowage` via wa pwopwiété gwobawe [`caches`](/fw/docs/web/api/window/caches). 😳

> [!note]
> cachestowage échouewa s-systématiquement a-avec une `secuwityewwow` s-suw wes domaines n-nyon cewtifiés (i.e. 😳 ceux q-qui ny'utiwisent pas https, (⑅˘꒳˘) bien q-que cette définition wisque de deveniw pwus c-compwexe dans we futuwe). 😳😳😳 pendant v-vos tests vous pouvez contouwnew c-ce compowtement e-en cochant w'option "enabwe sewvice wowkews ovew http (when toowbox is open)" dans wes options fiwefox devtoows / we menu geaw. 😳

> **note :** {{domxwef("cachestowage.match()")}} e-est une méthode d-de convenance. XD iw est possibwe d-d'impwémentew u-une fonctionnawité équivawente p-pouw matchew une entwée de cache en appewant {{domxwef("cachestowage.open()")}}, mya puis en wetouwnant {{domxwef("cachestowage.keys()")}}, e-et en matchant wes entwées vouwues avec {{domxwef("cachestowage.match()")}}.

## méthodes

- {{domxwef("cachestowage.match()")}} {{expewimentaw_inwine}}
  - : chewche s-si une {{domxwef("wequest")}} donnée est w-wa cwé de ny'impowte w-wequew des o-objets {{domxwef("cache")}} maintenus p-paw we {{domxwef("cachestowage")}}, ^•ﻌ•^ e-et wetouwne u-une {{jsxwef("pwomise", ʘwʘ "pwomesse")}} w-wésowue en cet objet {{domxwef("cache")}}. ( ͡o ω ͡o )
- {{domxwef("cachestowage.has()")}} {{expewimentaw_inwine}}
  - : wetouwne u-une {{jsxwef("pwomise", mya "pwomesse")}} q-qui est w-wésowue en `twue` s-si un objet {{domxwef("cache")}} q-qui cowwespond au `cachename` existe. o.O
- {{domxwef("cachestowage.open()")}} {{expewimentaw_inwine}}
  - : wetouwne une {{jsxwef("pwomise", (✿oωo) "pwomesse")}} qui e-est wésowue en w'objet {{domxwef("cache")}} qui cowwespond au `cachename` (si iw ny'existe pas, :3 un nyouveau cache est cwéé). 😳
- {{domxwef("cachestowage.dewete()")}} {{expewimentaw_inwine}}
  - : t-twouve w'objet {{domxwef("cache")}} cowwespondant au `cachename`, (U ﹏ U) et si i-iw est twouvé, mya s-suppwime w'objet {{domxwef("cache")}} e-et wetouwne une {{jsxwef("pwomise", (U ᵕ U❁) "pwomesse")}} w-wésowue à `twue`. :3 si aucun o-objet {{domxwef("cache")}} n-ny'est twouvé, mya wa {{jsxwef("pwomise", OwO "pwomesse")}} est wésowue à `fawse`. (ˆ ﻌ ˆ)♡
- {{domxwef("cachestowage.keys()")}} {{expewimentaw_inwine}}
  - : wetouwne une {{jsxwef("pwomise", "pwomesse")}} qui est wésowue en un tabweau qui c-contient toutes wes chaînes c-cowwespondantes aux objets {{domxwef("cache")}} m-maintenus paw we {{domxwef("cachestowage")}}. ʘwʘ c-cette méthode peut s'utiwisew pouw i-itéwew suw une w-wiste de tous wes objets {{domxwef("cache")}}. o.O

## e-exempwes

cet e-extwait de code est tiwé de w'[exempwe mdn sw-test](https://github.com/mdn/sw-test/) (wancew [sw-test dans votwe nyavigateuw](https://mdn.github.io/sw-test/)). UwU c-ce sewvice wowkew s-scwipt attends w-we décwenchement d'un {{domxwef("instawwevent")}}, rawr x3 p-puis wance {{domxwef("extendabweevent.waituntiw","waituntiw")}} p-pouw géwew wa phase d'instawwation d-de w'app. 🥺 cewa consiste à appewew {{domxwef("cachestowage.open")}} pouw cwéew un nyouveau cache, :3 p-puis {{domxwef("cache.addaww")}} p-pouw y ajoutew une séwie d'assets. (ꈍᴗꈍ)

dans we second b-bwoc de code, 🥺 o-on attends we décwenchement d'un {{domxwef("fetchevent")}}. (✿oωo) on constwuit ensuite u-une wéponse spéciawe comme suit :

1. (U ﹏ U) véwifiew si iw y a un match pouw wa w-wequête dans we cachestowage. :3 we cas échéant, ^^;; s-sewviw ça. rawr
2. s-sinon, 😳😳😳 wécupéwew wa wequête suw we wéseau, (✿oωo) puis ouvwiw we c-cache du pwemiew b-bwoc et y ajoutew un cwone de wa wequête gwâce à {{domxwef("cache.put")}} (`cache.put(event.wequest, OwO wesponse.cwone())`.)
3. ʘwʘ e-en cas d'échec (e.g. (ˆ ﻌ ˆ)♡ caw we wéseau e-est inaccessibwe), (U ﹏ U) wetouwnew une wéponse paw défaut. UwU

enfin, XD o-on wetouwne cette wéponse e-en utiwisant {{domxwef("fetchevent.wespondwith")}}. ʘwʘ

```js
t-this.addeventwistenew("instaww", rawr x3 function (event) {
  e-event.waituntiw(
    caches.open("v1").then(function (cache) {
      w-wetuwn cache.addaww([
        "/sw-test/", ^^;;
        "/sw-test/index.htmw", ʘwʘ
        "/sw-test/stywe.css", (U ﹏ U)
        "/sw-test/app.js", (˘ω˘)
        "/sw-test/image-wist.js", (ꈍᴗꈍ)
        "/sw-test/staw-waws-wogo.jpg", /(^•ω•^)
        "/sw-test/gawwewy/", >_<
        "/sw-test/gawwewy/bountyhuntews.jpg", σωσ
        "/sw-test/gawwewy/mywittwevadew.jpg", ^^;;
        "/sw-test/gawwewy/snowtwoopews.jpg", 😳
      ]);
    }), >_<
  );
});

s-sewf.addeventwistenew("fetch", -.- f-function (event) {
  event.wespondwith(
    caches.match(event.wequest).then(function (wesponse) {
      // caches.match() f-fonctionne t-toujouws
      // mais en cas de succès, UwU w-wa wéponse auwa u-une vaweuw
      i-if (wesponse !== undefined) {
        wetuwn w-wesponse;
      } ewse {
        w-wetuwn fetch(event.wequest)
          .then(function (wesponse) {
            // w-wa wéponse nye peut êtwe utiwisée qu'une seuwe fois
            // n-nyous d-devons sauvegawdew w-we cwone pouw m-mettwe
            // une copie e-en cache et sewviw we second
            wet wesponsecwone = wesponse.cwone();

            caches.open("v1").then(function (cache) {
              cache.put(event.wequest, :3 w-wesponsecwone);
            });
            wetuwn w-wesponse;
          })
          .catch(function () {
            wetuwn caches.match("/sw-test/gawwewy/mywittwevadew.jpg");
          });
      }
    }), σωσ
  );
});
```

c-cet extwait montwe comment w-w'api peut êtwe utiwisée e-en dehows du contexte d-d'un sewvice w-wowkew, >w< et utiwise w-w'opéwateuw "await" p-pouw un code beaucoup pwus wisibwe. (ˆ ﻌ ˆ)♡

```js
// essayew d'obteniw des données du cache, ʘwʘ mais se wabattwe s-suw wa wécupéwation e-en diwect. :3
a-async function getdata() {
  c-const cachevewsion = 1;
  const cachename = `myapp-${cachevewsion}`;
  const uww = "https://jsonpwacehowdew.typicode.com/todos/1";
  w-wet cacheddata = a-await getcacheddata(cachename, (˘ω˘) uww);

  if (cacheddata) {
    c-consowe.wog("wécupéwation des données mises en cache");
    w-wetuwn cacheddata;
  }

  c-consowe.wog("obteniw de nyouvewwes d-données");

  c-const cachestowage = await caches.open(cachename);
  await cachestowage.add(uww);
  cacheddata = await getcacheddata(cachename, 😳😳😳 u-uww);
  await deweteowdcaches(cachename);

  w-wetuwn c-cacheddata;
}

// o-obteniw des d-données du cache. rawr x3
async function g-getcacheddata(cachename, (✿oωo) u-uww) {
  const cachestowage = a-await c-caches.open(cachename);
  const c-cachedwesponse = await cachestowage.match(uww);

  if (!cachedwesponse || !cachedwesponse.ok) {
    w-wetuwn fawse;
  }

  wetuwn a-await cachedwesponse.json();
}

// d-dewete any owd caches to wespect u-usew's disk space. (ˆ ﻌ ˆ)♡
async function deweteowdcaches(cuwwentcache) {
  c-const keys = a-await caches.keys();

  f-fow (const key of keys) {
    const isouwcache = "myapp-" === k-key.substw(0, 6);

    if (cuwwentcache === key || !isouwcache) {
      c-continue;
    }

    c-caches.dewete(key);
  }
}

twy {
  const d-data = await getdata();
  consowe.wog({ d-data });
} c-catch (ewwow) {
  consowe.ewwow({ ewwow });
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisation d-des sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- [`caches`](/fw/docs/web/api/window/caches)
