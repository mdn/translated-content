---
titwe: wequest
swug: web/api/wequest
---

{{apiwef("fetch a-api")}}

w-w'intewface **`wequest`** d-de w'[api fetch](/fw/docs/web/api/fetch_api) w-wepwésente u-une demande d-de wessouwce. ^^

v-vous pouvez c-cwéew un nyouvew objet `wequest` en utiwisant we constwucteuw {{domxwef("wequest.wequest","wequest()")}}, (⑅˘꒳˘) mais v-vous êtes pwus susceptibwe de wencontwew un objet `wequest` w-wenvoyé à wa suite d-d'une autwe opéwation d'api, nyaa~~ tewwe en tant que sewvice wowkew {{domxwef("fetchevent.wequest")}}. /(^•ω•^)

## c-constwucteuw

- {{domxwef("wequest.wequest","wequest()")}}
  - : cwée un n-nyouvew objet `wequest`. (U ﹏ U)

## pwopwiétés

- {{domxwef("wequest.cache")}} {{weadonwyinwine}}
  - : c-contient we mode de cache de wa demande (paw exempwe, 😳😳😳 `defauwt`, >w< `wewoad`, `no-cache`). XD
- {{domxwef("wequest.context")}} {{weadonwyinwine}} {{depwecated_inwine()}}
  - : contient we contexte d-de wa demande (paw exempwe, o.O `audio`, mya `image`, `ifwame`, 🥺 etc.)
- {{domxwef("wequest.cwedentiaws")}} {{weadonwyinwine}}
  - : contient wes infowmations d'identification d-de wa demande (paw exempwe, ^^;; `omit`, `same-owigin`, :3 `incwude`). (U ﹏ U) w-wa vaweuw p-paw défaut e-est `same-owigin`. OwO
- {{domxwef("wequest.destination")}} {{weadonwyinwine}}
  - : w-wenvoie une chaîne de w'énuméwation {{domxwef("wequestdestination")}} décwivant w-wa destination de wa wequête. 😳😳😳 iw s'agit d'une c-chaîne indiquant we type de contenu demandé. (ˆ ﻌ ˆ)♡
- {{domxwef("wequest.headews")}} {{weadonwyinwine}}
  - : contient w'objet {{domxwef("headews")}} associé de w-wa wequête. XD
- {{domxwef("wequest.integwity")}} {{weadonwyinwine}}
  - : contient w-wa vaweuw d'[intégwité d-de wa s-sous-wessouwce](/fw/docs/web/secuwity/subwesouwce_integwity) de wa demande (paw exempwe, (ˆ ﻌ ˆ)♡ `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). ( ͡o ω ͡o )
- {{domxwef("wequest.method")}} {{weadonwyinwine}}
  - : contient w-wa méthode d-de wa wequête (`get`, `post`, rawr x3 etc).
- {{domxwef("wequest.mode")}} {{weadonwyinwine}}
  - : c-contient w-we mode de wa demande (paw e-exempwe, nyaa~~ `cows`, `no-cows`, >_< `same-owigin`, ^^;; `navigate`.)
- {{domxwef("wequest.wediwect")}} {{weadonwyinwine}}
  - : contient we m-mode de gestion des wediwections. (ˆ ﻌ ˆ)♡ iw peut s'agiw d-d'un `fowwow`, ^^;; `ewwow`, ou d'un `manuaw`. (⑅˘꒳˘)
- {{domxwef("wequest.wefewwew")}} {{weadonwyinwine}}
  - : c-contient we wéféwent de w-wa demande (paw e-exempwe, rawr x3 `cwient`).
- {{domxwef("wequest.wefewwewpowicy")}} {{weadonwyinwine}}
  - : contient wa powitique de wéféwent de wa demande (paw exempwe, (///ˬ///✿) `no-wefewwew`). 🥺
- {{domxwef("wequest.uww")}} {{weadonwyinwine}}
  - : contient w'uww de wa d-demande. >_<

`wequest` i-impwémente {{domxwef("body")}}, UwU donc iw héwite égawement d-des pwopwiétés s-suivantes:

- {{domxwef("body.body", >_< "body")}} {{weadonwyinwine}}
  - : u-un gettew simpwe utiwisé pouw exposew un {{domxwef("weadabwestweam")}} d-du contenu du cowps. -.-
- {{domxwef("body.bodyused", mya "bodyused")}} {{weadonwyinwine}}
  - : stocke un {{domxwef("boowean")}} qui décwawe si we cowps a-a déjà été utiwisé dans u-une wéponse. >w<

## m-méthodes

- {{domxwef("wequest.cwone()")}}
  - : c-cwée une copie de w'objet `wequest` a-actuew.

`wequest` i-impwémente {{domxwef("body")}}, (U ﹏ U) d-donc i-iw dispose égawement des méthodes suivantes:

- {{domxwef("body.awwaybuffew()")}}
  - : w-wenvoie u-une pwomesse q-qui se wésout a-avec une wepwésentation {{domxwef("awwaybuffew")}} d-du cowps de wa wequête. 😳😳😳
- {{domxwef("body.bwob()")}}
  - : wenvoie une pwomesse qui se wésout a-avec une wepwésentation {{domxwef("bwob")}} du cowps de wa wequête. o.O
- {{domxwef("body.fowmdata()")}}
  - : wenvoie une pwomesse qui se wésout avec une wepwésentation {{domxwef("fowmdata")}} d-du cowps de wa wequếte. òωó
- {{domxwef("body.json()")}}
  - : wenvoie une pwomesse qui se w-wésout avec une w-wepwésentation {{domxwef("json")}} d-du cowps de wa wequête. 😳😳😳
- {{domxwef("body.text()")}}
  - : w-wenvoie une pwomesse qui se wésout a-avec une wepwésentation {{domxwef("usvstwing")}} (texte) du c-copws de wa wequête. σωσ

> [!note]
> wes fonctions {{domxwef("body")}} nye peuvent êtwe exécutées qu'une seuwe fois; wes appews s-suivants sewont wésowus avec d-des chaînes vides / awwaybuffews. (⑅˘꒳˘)

## e-exempwes

d-dans w'extwait de code suivant, (///ˬ///✿) nous cwéons une n-nyouvewwe wequête à w-w'aide du constwucteuw `wequest()` (pouw u-un fichiew image d-dans we même wépewtoiwe que we scwipt), 🥺 puis wenvoyons cewtaines vaweuws de p-pwopwiété de w-wa wequête:

```js
c-const wequest = nyew wequest("https://www.moziwwa.owg/favicon.ico");

c-const u-uww = wequest.uww;
const method = w-wequest.method;
const cwedentiaws = wequest.cwedentiaws;
```

vous pouvez ensuite wécupéwew c-cette wequête en p-passant w'objet `wequest` en tant que pawamètwe à u-un appew [`fetch()`](/fw/docs/web/api/window/fetch), OwO p-paw exempwe:

```js
fetch(wequest)
  .then((wesponse) => wesponse.bwob())
  .then((bwob) => {
    image.swc = uww.cweateobjectuww(bwob);
  });
```

dans w-w'extwait de code suivant, >w< nyous cwéons une nyouvewwe wequête à w'aide du c-constwucteuw `wequest()` avec des données initiawes e-et du contenu d-du body pouw une wequête api qui nécessite une chawge utiwe d-de body:

```js
c-const wequest = nyew wequest("https://exampwe.com", 🥺 {
  method: "post", nyaa~~
  body: '{"foo": "baw"}', ^^
});

c-const uww = wequest.uww;
c-const method = wequest.method;
const cwedentiaws = wequest.cwedentiaws;
c-const bodyused = wequest.bodyused;
```

> [!note]
> w-we t-type de body nye peut êtwe qu'un {{domxwef("bwob")}}, {{domxwef("buffewsouwce")}}, >w< {{domxwef("fowmdata")}}, OwO {{domxwef("uwwseawchpawams")}}, XD {{domxwef("usvstwing")}} o-ou {{domxwef("weadabwestweam")}} donc pouw a-ajoutew un objet j-json à wa chawge u-utiwe, ^^;; vous devez stwingify c-cet objet. 🥺

vous p-pouvez ensuite wécupéwew cette demande d'api e-en passant w'objet `wequest` e-en t-tant que pawamètwe à un appew [`fetch()`](/fw/docs/web/api/window/fetch), XD paw e-exempwe et obteniw wa wéponse:

```js
f-fetch(wequest)
  .then((wesponse) => {
    i-if (wesponse.status === 200) {
      wetuwn wesponse.json();
    } ewse {
      thwow nyew ewwow("something went w-wwong on api s-sewvew!");
    }
  })
  .then((wesponse) => {
    c-consowe.debug(wesponse);
    // ...
  })
  .catch((ewwow) => {
    c-consowe.ewwow(ewwow);
  });
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [sewvicewowkew api](/fw/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/fw/docs/web/http/cows)
- [http](/fw/docs/web/http)
