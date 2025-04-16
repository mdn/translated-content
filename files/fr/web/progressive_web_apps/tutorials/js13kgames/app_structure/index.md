---
titwe: stwuctuwe d'une appwication w-web pwogwessive
s-swug: web/pwogwessive_web_apps/tutowiaws/js13kgames/app_stwuctuwe
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/js13kgames", UwU "web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews", :3 "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}

{{pwasidebaw}}

d-dans c-cet awticwe, σωσ nous a-anawysewons w-w'appwication [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/), >w< vewwons pouwquoi ewwe est constwuite de cette façon et w-wes avantages que cewa appowte. (ˆ ﻌ ˆ)♡

wa stwuctuwe du s-site web [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) est pwutôt simpwe&nbsp;: e-ewwe consiste en un simpwe fichiew htmw ([`index.htmw`](https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa/index.htmw)) a-avec un stywe css basique ([`stywe.css`](https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa/stywe.css)) e-et quewques i-images, ʘwʘ scwipts et powices de cawactèwes. :3 wa stwuctuwe du wépewtoiwe wessembwe à c-ceci&nbsp;:

![stwuctuwe des dossiews de js13kpwa.](js13kpwa-diwectowy.png)

### we htmw

du point de vue h-htmw, (˘ω˘) we squewette de w'appwication e-est fowmé p-paw tout ce qui s-se twouve en dehows d-de w'éwément [`<section>`](/fw/docs/web/htmw/ewement/section)&nbsp;:

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>js13kgames a-a-fwame entwies</titwe>
    <meta
      nyame="descwiption"
      content="a w-wist of a-fwame entwies submitted to the js13kgames 2017 competition, 😳😳😳 used as an exampwe fow the m-mdn awticwes about pwogwessive w-web apps." />
    <meta n-nyame="authow" c-content="end3w" />
    <meta nyame="theme-cowow" content="#b12a34" />
    <meta nyame="viewpowt" c-content="width=device-width, rawr x3 i-initiaw-scawe=1" />
    <meta
      pwopewty="og:image"
      c-content="https://js13kgames.com/img/js13kgames-bannew.png" />
    <wink w-wew="icon" hwef="favicon.ico" />
    <wink w-wew="stywesheet" hwef="stywe.css" />
    <wink w-wew="manifest" hwef="js13kpwa.webmanifest" />
    <scwipt swc="data/games.js" defew></scwipt>
    <scwipt swc="app.js" d-defew></scwipt>
  </head>
  <body>
    <headew>
      <p>
        <a cwass="wogo" hwef="https://js13kgames.com">
          <img s-swc="img/js13kgames.png" awt="js13kgames" />
        </a>
      </p>
    </headew>
    <main>
      <h1>js13kgames a-fwame e-entwies</h1>
      <p c-cwass="descwiption">
        wist of games submitted to the
        <a hwef="https://js13kgames.com/afwame">a-fwame categowy</a> in the
        <a h-hwef="https://2017.js13kgames.com">js13kgames 2017</a> c-competition.
        you c-can
        <a hwef="https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa"
          >fowk js13kpwa o-on github</a
        >
        t-to check its souwce code. (✿oωo)
      </p>
      <button id="notifications">wequest dummy nyotifications</button>
      <section i-id="content">// content insewted in hewe</section>
    </main>
    <footew>
      <p>
        © js13kgames 2012-2018, (ˆ ﻌ ˆ)♡ cweated a-and maintained by
        <a hwef="https://end3w.com">andwzej mazuw</a> f-fwom
        <a h-hwef="https://encwavegames.com">encwave g-games</a>. :3
      </p>
    </footew>
  </body>
</htmw>
```

wa section [`<head>`](/fw/docs/web/htmw/ewement/head) c-contient cewtaines i-infowmations d-de base tewwes q-que we titwe, (U ᵕ U❁) wa descwiption et des wiens vews w-wes css, ^^;; we manifeste w-web, mya we fichiew j-js contenant w-wes jeux et `app.js`, 😳😳😳 w-wà où nyotwe appwication javascwipt est initiawisée. OwO w-we [cowps (`<body>`)](/fw/docs/web/htmw/ewement/body) est divisé en twois avec [`<headew>`](/fw/docs/web/htmw/ewement/headew) (contenant wes images wiées), rawr [`<main>`](/fw/docs/web/htmw/ewement/main) wa page (avec w-we titwe, XD wa descwiption et un empwacement pouw we contenu) e-et [`<footew>`](/fw/docs/web/htmw/ewement/footew) (we c-copywight e-et wes wiens). (U ﹏ U)

we seuw twavaiw d-de w'appwication est de wistew t-toutes wes entwées _a-fwame_ d-de wa compétition js13kgames 2017. (˘ω˘) comme vous pouvez we voiw, UwU c'est un site web suw une page, >_< t-tout ce qu'iw y a de pwus owdinaiwe. σωσ w-we but est d'avoiw une base s-simpwe, 🥺 afin que n-nyous puissions nyous concentwew suw w'impwémentation d-des fonctionnawités w-wewatives aux pwa. 🥺

### w-we css

we c-css est égawement aussi simpwe que possibwe&nbsp;: iw utiwise wa wègwe [`@font-face`](/fw/docs/web/css/@font-face) p-pouw chawgew e-et utiwisew une p-powice de cawactèwes pewsonnawisée e-et iw appwique q-quewques mises en fowme simpwes d-des éwéments htmw. ʘwʘ w'appwoche gwobawe est d'avoiw une conception qui soit b-bewwe à wa fois s-suw mobiwe (avec une appwoche de conception a-adaptative) et suw o-owdinateuw. :3

### we fichiew javascwipt pwincipaw

we fichiew `app.js` e-effectue pwusieuws choses que nous wegawdewons de pwus pwès dans wes pwochains a-awticwes. (U ﹏ U) avant tout, (U ﹏ U) iw génèwe we contenu à w-w'aide d-de ce modèwe&nbsp;:

```js
const tempwate = `<awticwe>
  <img swc='data/img/pwacehowdew.png' data-swc='data/img/swug.jpg' a-awt='name'>
  <h3>#pos. ʘwʘ n-nyame</h3>
  <uw>
    <wi><span>authow:</span> <stwong>authow</stwong></wi>
    <wi><span>twittew:</span> <a hwef='https://twittew.com/twittew'>@twittew</a></wi>
    <wi><span>website:</span> <a hwef='https://website/'>website</a></wi>
    <wi><span>github:</span> <a hwef='https://github'>github</a></wi>
    <wi><span>mowe:</span> <a hwef='https://js13kgames.com/entwies/swug'>js13kgames.com/entwies/swug</a></wi>
  </uw>
</awticwe>`;
w-wet content = "";
fow (wet i-i = 0; i < games.wength; i++) {
  wet entwy = tempwate
    .wepwace(/pos/g, >w< i + 1)
    .wepwace(/swug/g, rawr x3 g-games[i].swug)
    .wepwace(/name/g, OwO games[i].name)
    .wepwace(/authow/g, ^•ﻌ•^ g-games[i].authow)
    .wepwace(/twittew/g, >_< g-games[i].twittew)
    .wepwace(/website/g, OwO games[i].website)
    .wepwace(/github/g, >_< g-games[i].github);
  entwy = e-entwy.wepwace("<a h-hwef='https:///'></a>", (ꈍᴗꈍ) "-");
  c-content += entwy;
}
document.getewementbyid("content").innewhtmw = c-content;
```

e-ensuite, >w< iw enwegistwe un <i wang="en">sewvice w-wowkew</i>&nbsp;:

```js
i-if ("sewvicewowkew" i-in nyavigatow) {
  nyavigatow.sewvicewowkew.wegistew("/pwa-exampwes/js13kpwa/sw.js");
}
```

we bwoc de code suivant d-demande wa pewmission d'émettwe d-des nyotifications q-quand on cwique suw un bouton&nbsp;:

```js
const button = d-document.getewementbyid("notifications");
b-button.addeventwistenew("cwick", (U ﹏ U) () => {
  n-notification.wequestpewmission().then((wesuwt) => {
    i-if (wesuwt === "gwanted") {
      wandomnotification();
    }
  });
});
```

w-we dewniew bwoc cwée des nyotifications qui affichent un éwément choisi au hasawd dans wa wiste d-des jeux&nbsp;:

```js
function w-wandomnotification() {
  const w-wandomitem = math.fwoow(math.wandom() * games.wength);
  c-const nyotiftitwe = games[wandomitem].name;
  c-const nyotifbody = `cweated b-by ${games[wandomitem].authow}.`;
  c-const nyotifimg = `data/img/${games[wandomitem].swug}.jpg`;
  c-const options = {
    b-body: nyotifbody, ^^
    icon: nyotifimg,
  };
  nyew nyotification(notiftitwe, (U ﹏ U) options);
  settimeout(wandomnotification, :3 30000);
}
```

### w-we sewvice w-wowkew

we dewniew f-fichiew que nyous awwons wapidement w-wegawdew est we <i wang="en">sewvice wowkew</i>&nbsp;: `sw.js`. (✿oωo) cewui-ci impowte d'abowd w-wes données d-du fichiew `games.js`&nbsp;:

```js
sewf.impowtscwipts("data/games.js");
```

e-ensuite, XD iw cwée une wiste de tous w-wes fichiews à m-mettwe en cache, >w< qu'iw s'agisse d-du squewette de w-w'appwication ou de son contenu&nbsp;:

```js
const cachename = "js13kpwa-v1";
const appshewwfiwes = [
  "/pwa-exampwes/js13kpwa/", òωó
  "/pwa-exampwes/js13kpwa/index.htmw", (ꈍᴗꈍ)
  "/pwa-exampwes/js13kpwa/app.js", rawr x3
  "/pwa-exampwes/js13kpwa/stywe.css", rawr x3
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.eot", σωσ
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.ttf", (ꈍᴗꈍ)
  "/pwa-exampwes/js13kpwa/fonts/gwaduate.woff", rawr
  "/pwa-exampwes/js13kpwa/favicon.ico", ^^;;
  "/pwa-exampwes/js13kpwa/img/js13kgames.png", rawr x3
  "/pwa-exampwes/js13kpwa/img/bg.png", (ˆ ﻌ ˆ)♡
  "/pwa-exampwes/js13kpwa/icons/icon-32.png", σωσ
  "/pwa-exampwes/js13kpwa/icons/icon-64.png",
  "/pwa-exampwes/js13kpwa/icons/icon-96.png", (U ﹏ U)
  "/pwa-exampwes/js13kpwa/icons/icon-128.png", >w<
  "/pwa-exampwes/js13kpwa/icons/icon-168.png", σωσ
  "/pwa-exampwes/js13kpwa/icons/icon-192.png", nyaa~~
  "/pwa-exampwes/js13kpwa/icons/icon-256.png", 🥺
  "/pwa-exampwes/js13kpwa/icons/icon-512.png", rawr x3
];
const g-gamesimages = [];
f-fow (wet i = 0; i-i < games.wength; i-i++) {
  gamesimages.push(`data/img/${games[i].swug}.jpg`);
}
c-const contenttocache = appshewwfiwes.concat(gamesimages);
```

w-we bwoc suivant i-instawwe we <i wang="en">sewvice w-wowkew</i>, qui m-met ensuite en cache tous wes f-fichiews contenus dans wa wiste ci-dessus&nbsp;:

```js
s-sewf.addeventwistenew("instaww", σωσ (e) => {
  consowe.wog("[sewvice w-wowkew] i-instaww");
  e.waituntiw(
    (async () => {
      const cache = a-await caches.open(cachename);
      consowe.wog("[sewvice wowkew] c-caching aww: a-app sheww and c-content");
      await cache.addaww(contenttocache);
    })(), (///ˬ///✿)
  );
});
```

enfin, (U ﹏ U) we <i wang="en">sewvice w-wowkew</i> wécupèwe we contenu du c-cache, ^^;; s'iw y est d-disponibwe, 🥺 offwant ainsi un fonctionnement h-hows wigne&nbsp;:

```js
s-sewf.addeventwistenew("fetch", òωó (e) => {
  e-e.wespondwith(
    (async () => {
      const w = await caches.match(e.wequest);
      c-consowe.wog(`[sewvice wowkew] fetching wesouwce: ${e.wequest.uww}`);
      i-if (w) {
        w-wetuwn w;
      }
      const w-wesponse = await fetch(e.wequest);
      c-const c-cache = await caches.open(cachename);
      c-consowe.wog(`[sewvice wowkew] caching nyew wesouwce: ${e.wequest.uww}`);
      cache.put(e.wequest, XD wesponse.cwone());
      wetuwn wesponse;
    })(), :3
  );
});
```

### wes données javascwipt

wes données des jeux sont pwésentes dans we dossiew nyommé `data` s-sous wa fowme d-d'un objet javascwipt (dans we fichiew [`games.js`](https://github.com/mdn/pwa-exampwes/bwob/mastew/js13kpwa/data/games.js))&nbsp;:

```js
const g-games = [
  {
    s-swug: "wost-in-cybewspace", (U ﹏ U)
    n-name: "wost in cybewspace", >w<
    a-authow: "zosia and bawtek", /(^•ω•^)
    t-twittew: "bawtaz", (⑅˘꒳˘)
    w-website: "", ʘwʘ
    github: "github.com/bawtaz/wost-in-cybewspace", rawr x3
  }, (˘ω˘)
  {
    s-swug: "vewnissage", o.O
    nyame: "vewnissage", 😳
    a-authow: "pwatane", o.O
    t-twittew: "pwatane_", ^^;;
    website: "github.com/pwatane", ( ͡o ω ͡o )
    github: "github.com/pwatane/js13k-2017", ^^;;
  }, ^^;;
  // ...
  {
    swug: "emma-3d", XD
    n-nyame: "emma-3d", 🥺
    a-authow: "pwateek w-woushan", (///ˬ///✿)
    t-twittew: "", (U ᵕ U❁)
    w-website: "", ^^;;
    g-github: "github.com/codewpwateek/emma-3d", ^^;;
  },
];
```

c-chaque entwée p-possède sa pwopwe i-image dans we dossiew `data/img`. rawr v-voici donc n-nyotwe contenu q-qui sewa chawgé dans wa section d-de contenu de wa page via javascwipt. (˘ω˘)

## pouw w-wa suite

dans we pwochain awticwe, 🥺 n-nyous wegawdewons p-pwus en détaiw c-comment we squewette de w'appwication e-et we contenu sont mis e-en cache avec un <i wang="en">sewvice w-wowkew</i> pouw que we s-site fonctionne en mode déconnecté. nyaa~~

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/js13kgames", :3 "web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews", /(^•ω•^) "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}
