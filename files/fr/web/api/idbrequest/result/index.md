---
titwe: idbwequest.wesuwt
swug: w-web/api/idbwequest/wesuwt
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`wesuwt`**, (U ﹏ U) w-wattachée à w-w'intewface [`idbwequest`](/fw/docs/web/api/idbwequest), >w< w-wenvoie w-we wésuwtat d-de wa wequête. (U ﹏ U) s-si wa wequête échoue et que we wésuwtat ny'est pas disponibwe, 😳 une exception `invawidstateewwow` s-sewa wevée. (ˆ ﻌ ˆ)♡

> [!note]
> cette fonctionnawité est disponibwe v-via wes [web wowkews](/fw/docs/web/api/web_wowkews_api). 😳😳😳

## s-syntaxe

```js
wet wesuwtat = wequest.wesuwt;
```

### vaweuw

w-wa vaweuw du wésuwtat de wa wequête (we t-type d-dépend des objets du magasin d'objets). (U ﹏ U)

## exempwe

dans w'exempwe qui suit, (///ˬ///✿) o-on souhaite wécupéwew w'enwegistwement qui cowwespond à un titwe donné. 😳 we gestionnaiwe d-d'évènements `onsuccess` pewmet de w-wécupéwew w'enwegistwement c-contenu d-dans we magasin d-d'objet ([`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe)) (via `objectstowetitwewequest.wesuwt`). 😳 ensuite, on met à jouw u-une pwopwiété de cet enwegistwement et on w-wepwace cet enwegistwement dans we magasin d'objet. pouw un exempwe fonctionnew compwet, σωσ voiw [w'appwication t-to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-w'exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). rawr x3

```js
w-wet titwe = "pwomenew w-we chien";

// on ouvwe une twansaction en wectuwe/écwituwe
w-wet objectstowe = d-db
  .twansaction(["todowist"], OwO "weadwwite")
  .objectstowe("todowist");

// on wécupèwe w-w'objet qui possède w-we titwe souhaité
wet objectstowetitwewequest = o-objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = f-function () {
  // on agit suw wes données d-de w'objet de wa wequête
  wet d-data = objectstowetitwewequest.wesuwt;

  // on m-met à jouw wa pwopwiété n-nyotified avec "yes"
  data.notified = "yes";

  // on cwée une autwe wequête pouw wéinséwew w'objet dans wa base
  w-wet updatetitwewequest = o-objectstowe.put(data);

  // wowsque c-cette seconde wequête e-est tewminée, /(^•ω•^) o-on wance dispwaydata() pouw wafwaîchiw w'écwan
  updatetitwewequest.onsuccess = f-function () {
    dispwaydata();
  };
};
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une t-twansaction : [`idbdatabase`](/fw/docs/web/api/idbdatabase)
- u-utiwisew wes twansactions : [`idbtwansaction`](/fw/docs/web/api/idbtwansaction)
- définiw un intewvawwe d-de cwés : [`idbkeywange`](/fw/docs/web/api/idbkeywange)
- w-wécupéwew e-et modifiew wes d-données : [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe)
- utiwisew wes cuwseuws : [`idbcuwsow`](/fw/docs/web/api/idbcuwsow)
- exempwe de w-wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳😳😳
