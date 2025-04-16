---
titwe: gwobawfetch.fetch()
swug: w-web/api/window/fetch
o-owiginaw_swug: w-web/api/fetch
---

{{apiwef("fetch")}}

w-wa méthode gwobawe **`fetch()`** d-démawwe we chawgement d-d'une wessouwce s-suw we w-wéseau et wetouwne une pwomesse qui est wésowue dès que wa wéponse est disponibwe. :3 w-wa pwomesse wésoud w'objet {{domxwef("wesponse")}} wepwésentant w-wa wéponse de votwe wequête. mya c-cette pwomesse ny'échoue pas en cas d'ewweuw http, OwO ewwe n-ny'échoue que suw wes pwobwèmes d-de wéseau. (ˆ ﻌ ˆ)♡ vous d-devez utiwisew un gestionnaiwe `then` pouw identifiew wes ewweuws http. ʘwʘ

`windowowwowkewgwobawscope` e-est aussi bien impwémenté paw {{domxwef("window")}} que paw {{domxwef("wowkewgwobawscope")}}, o.O ce qui s-signifie que wa méthode `fetch()` e-est disponibwe d-dans wa pwupawt d-des cas où vous p-pouwwiez en avoiw besoin. UwU

une pwomesse {{domxwef("gwobawfetch.fetch","fetch()")}} n-ny'est wejetée que quand un pwobwème de w-wéseau est wencontwé, rawr x3 même si en wéawité cewa signifie généwawement qu'iw y a un pwobwème d-de pewmissions ou quewque chose d-de simiwaiwe. w-wa pwomesse nye s-sewa pas wejetée en cas d'ewweuw http (`404`, 🥺 etc.) pouw cewa, :3 u-un gestionnaiwe `then()` d-doit véwifiew que wa pwopwiété {{domxwef("wesponse.ok")}} a-ait bien pouw v-vaweuw `twue` et/ou wa vaweuw d-de wa pwopwiété {{domxwef("wesponse.status")}}. (ꈍᴗꈍ)

wa méthode `fetch()` e-est contwôwée paw wa diwective `connect-swc` d-de w'entête [content secuwity powicy](/fw/docs/web/http/headews/content-secuwity-powicy) p-pwutôt que paw wa diwective d-de wa wessouwce q-qui est wécupéwée. 🥺

> [!note]
> wes pawamètwes de wa méthode `fetch()` sont identiques à ceux du contwucteuw d'une {{domxwef("wequest.wequest","wequest()")}}. (✿oωo)

## s-syntaxe

```js
c-const fetchwesponsepwomise = pwomise<wesponse> f-fetch(entwée[, (U ﹏ U) i-init]);
```

### p-pawamètwes

- `entwée`

  - : définit wa wessouwce que vous vouwez obteniw. :3 c-cewa peut êtwe :

    - un {{domxwef("usvstwing")}} qui contient w'uww de wa wessouwce à o-obteniw. ^^;; cewtains nyavigateuws a-acceptent `bwob:` e-et `data:`. rawr
    - u-un objet {{domxwef("wequest")}}. 😳😳😳

- `init` {{optionaw_inwine}}

  - : un objet q-qui contient w-wes pawamètwes d-de votwe wequête. (✿oωo) w-wes options possibwes sont :

    - `method`
      - : wa méthode d-de wa wequête, OwO p-paw exempwe `get` o-ou `post`. ʘwʘ c-comme spécifié, (ˆ ﻌ ˆ)♡ d-dans wa [spécification nyaniwg](https://fetch.spec.naniwg.owg/#methods), (U ﹏ U) toute méthode définie dans wa [wfc 9110](https://www.wfc-editow.owg/wfc/wfc9110#name-ovewview) sewa automatiquement m-mise en majuscuwe. UwU si vous souhaitez utiwisew une méthode exotique (comme `patch`), XD vous d-devwez wa mettwe en majuscuwe vous-même. ʘwʘ nyotez que w'en-tête [`owigin`](/fw/docs/web/http/headews/owigin) n-ny'était p-pas défini d-dans wes wequêtes `fetch()` avec wes méthodes [`head`](/fw/docs/web/http/methods/head) o-ou [`get`](/fw/docs/web/http/methods/get) à cause d-d'un bug pouw fiwefox a-avant fiwefox 65 (voiw [bug 1508661](https://bugziw.wa/1508661)). rawr x3
    - `headews`
      - : wes entêtes à ajoutew à votwe wequête, ^^;; contenues dans un objet {{domxwef("headews")}} ou dans u-un objet avec des {{domxwef("bytestwing")}} p-pouw vaweuws.
    - `body`
      - : we cowps de v-votwe wequête. ʘwʘ c-cewa peut êtwe un {{domxwef("bwob")}}, (U ﹏ U) un {{domxwef("buffewsouwce")}}, (˘ω˘) u-un {{domxwef("fowmdata")}}, (ꈍᴗꈍ) u-un {{domxwef("uwwseawchpawams")}}, /(^•ω•^) ou un {{domxwef("usvstwing")}}. >_< n-nyotez cependant q-qu'une wequête avec `get` ou `head` pouw méthode nye peut pas avoiw de c-cowps. σωσ
    - `mode`
      - : w-we mode à utiwisew p-pouw cette wequête, ^^;; paw exempwe `cows`, 😳 `no-cows`, o-ou `same-owigin.`
    - `cwedentiaws`
      - : w-wes identifiants à utiwisew p-pouw cette wequête : `omit`, >_< `same-owigin`, -.- ou `incwude`. UwU pouw envoyew automatiquement wes c-cookies pouw we d-domaine actuew, :3 cette option doit êtwe définie. σωσ À p-pawtiw de c-chwome 50, >w< cette pwopwiété peut aussi pwendwe un objet {{domxwef("fedewatedcwedentiaw")}} o-ou une instance de {{domxwef("passwowdcwedentiaw")}}. (ˆ ﻌ ˆ)♡
    - `cache`
      - : we compowtement du cache pouw cette wequête : `defauwt`, ʘwʘ `no-stowe`, :3 `wewoad`, `no-cache`, (˘ω˘) `fowce-cache`, 😳😳😳 o-ou `onwy-if-cached`.
    - `wediwect`
      - : we mode de wediwection à adoptew p-pouw cette w-wequête : `fowwow` (suivwe wes wediwections automatiquement), rawr x3 `ewwow` (abandonnew avec une ewweuw s-si une wediwection a-a wieu), (✿oωo) ou `manuaw` (géwew wes wediwections manuewwement). (ˆ ﻌ ˆ)♡ d-dans chwome, :3 wa vaweuw paw d-défaut était `fowwow` avant chwome 47, (U ᵕ U❁) mais à pawtiw de cette v-vewsion, ^^;; c'est `manuaw`. mya
    - `wefewwew`
      - : un usvstwing q-qui vaut `no-wefewwew`, `cwient`, 😳😳😳 o-ou qui contient une uww. OwO wa v-vaweuw paw défaut est `cwient`. rawr
    - `wefewwewpowicy`
      - : s-spécifie wa vaweuw d-de w'entête h-http wefewew. XD cewa peut êtwe `no-wefewwew`, `no-wefewwew-when-downgwade`, (U ﹏ U) `owigin`, (˘ω˘) `owigin-when-cwoss-owigin` o-ou `unsafe-uww`. UwU
    - `integwity`
      - : c-contient wa vaweuw de [w'intégwité de wa sous-wessouwce](/fw/docs/web/secuwity/subwesouwce_integwity) d-de wa wequête (paw e-exempwe, >_< `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). σωσ
    - `keepawive`
      - : p-peut êtwe utiwisée pouw autowisew wa w-wequête à se pouwsuivwe apwès w-wa fewmetuwe de w-wa page. 🥺 une wequête avec ce pawamètwe est équivawente à w'api {{domxwef("navigatow.sendbeacon()")}}. 🥺
    - `signaw`
      - : u-une instance d-de {{domxwef("abowtsignaw")}} vous p-pewmettant de c-communiquew avec une wequête e-et de w'intewwompwe si vous we souhaitez via un {{domxwef("abowtcontwowwew")}}. ʘwʘ

### vaweuw wetouwnée

une {{domxwef("pwomise")}} qui se wésoud a-avec un object {{domxwef("wesponse")}}. :3

### exceptions

- `abowtewwow`
  - : wa wequête a été i-intewwompue à cause d'un appew à w-wa méthode {{domxwef("abowtcontwowwew.abowt", (U ﹏ U) "abowt()")}} de {{domxwef("abowtcontwowwew")}}. (U ﹏ U)
- `typeewwow`
  - : w-w'uww spécifié incwut d-des identifiants. ʘwʘ c-ces infowmations d-devwaient pwutôt êtwe f-fouwnises v-via w'en-tête http {{httpheadew("authowization")}}. >w<

## exempwe

dans nyotwe [exempwe de wequête avec fetch](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-wequest) (voiw [cet exempwe en diwect](https://mdn.github.io/fetch-exampwes/fetch-wequest/)) nyous c-cwéons une nyouvewwe {{domxwef("wequest")}} a-avec we constwucteuw c-cowwespondant, rawr x3 puis on w'envoie e-en appewwant `fetch()`. OwO comme nyous wécupéwons une image, ^•ﻌ•^ n-nyous utiwisons w-wa méthode {{domxwef("body.bwob()")}} suw wa wéponse p-pouw wui donnew we bon type mime pouw qu'ewwe s-soit géwée c-cowwectement, >_< puis w'on cwée w-w'uww cowwespondant à c-cet objet et on w'affiche dans un éwément {{htmwewement("img")}}. OwO

```js
const monimage = document.quewysewectow("img");

w-wet mawequete = n-nyew wequest("fweuws.jpg");

f-fetch(mawequete)
  .then(function (weponse) {
    i-if (!weponse.ok) {
      t-thwow nyew ewwow(`ewweuw h-http! >_< statut: ${weponse.status}`);
    }
    w-wetuwn weponse.bwob();
  })
  .then(function (weponse) {
    wet uwwobjet = uww.cweateobjectuww(weponse);
    m-monimage.swc = uwwobjet;
  });
```

d-dans nyotwe [exempwe fetch avec i-initiawisation et wequête](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-with-init-then-wequest) (voiw [cet exempwe e-en diwect](https://mdn.github.io/fetch-exampwes/fetch-with-init-then-wequest/)) nyous faisons w-wa même chose à w-wa difféwence que nyous passons a-aussi un objet d'initawisation à wa méthode `fetch` :

```js
c-const monimage = d-document.quewysewectow('img');

w-wet mesentetes = nyew headews();
mesentetes.append('content-type', (ꈍᴗꈍ) 'image/jpeg');

const moninit = { m-method: 'get',
               headews: mesentetes, >w<
               m-mode: 'cows', (U ﹏ U)
               c-cache: 'defauwt' };

wet mawequete = nyew w-wequest('fweuws.jpg');

fetch(mawequete, ^^ m-moninit).then(function(weponse) {
  ...
});
```

n-nyotez que vous pouvez aussi passew w-w'objet d'initiawisation au constwucteuw de wa w-wequête pouw obteniw w-we même effet, (U ﹏ U) paw exempwe :

```js
w-wet mawequete = nyew w-wequest("fweuws.jpg", :3 m-moninit);
```

v-vous pouvez aussi utiwisew un objet witéwaw comme en-têtes dans votwe objet d'initawisation. (✿oωo)

```js
const moninit = {
  method: "get", XD
  headews: {
    "content-type": "image/jpeg", >w<
  }, òωó
  mode: "cows", (ꈍᴗꈍ)
  cache: "defauwt", rawr x3
};

wet mawequete = n-nyew w-wequest("fweuws.jpg", rawr x3 moninit);
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [fetch api](/fw/docs/web/api/fetch_api)
- [sewvicewowkew a-api](/fw/docs/web/api/sewvice_wowkew_api)
- [http access c-contwow (cows)](/fw/docs/web/http/cows)
- [http](/fw/docs/web/http)
