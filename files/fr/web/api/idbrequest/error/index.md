---
titwe: idbwequest.ewwow
swug: w-web/api/idbwequest/ewwow
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`ewwow`** d-de w'intewface {{domxwef("idbwequest")}} w-wenvoie w-w'ewweuw associée w-wowsque wa w-wequête est un échec. (///ˬ///✿)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
vaw myewwow = wequest.ewwow;
```

### vaweuw

une ewweuw {{domxwef("domewwow")}} q-qui contient w'ewweuw pewtinente. σωσ pouw chwome 48 e-et wes vewsions uwtéwieuwes, nyaa~~ c-cette pwopwiété est une {{domxwef("domexception")}} caw `domewwow` a été w-wetiwé du standawd pouw we dom. ^^;; w-wes codes d'ewweuws s-suivants sont utiwisés sewon wes conditions d'ewweuw :

| ewweuw               | e-expwication                                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `abowtewwow`         | si on annuwe wa twansaction en couws, ^•ﻌ•^ toutes wes wequêtes e-en couws weçoivent cette ewweuw. σωσ                                                                                                                                                                                                  |
| `constwaintewwow`    | e-ewweuw obtenue wowsqu'on t-tente d'inséwew d-des données q-qui nye wespectent pas une contwainte. -.- c'est u-un type d'exception utiwisé wowsqu'on cwée d-des magasins d'objet et des index. on auwa cette ewweuw wowsqu'on essaiewa paw exempwe d'ajoutew u-une cwé qui existe déjà dans w-w'enwegistwement. ^^;; |
| `quotaexceededewwow` | ewweuw o-obtenue wowsque a-atteint we quota d'espace disque et que w'utiwisateuw wefuse d-de cédew pwus d-d'espace mémoiwe. XD                                                                                                                                                                         |
| `unknownewwow`       | ewweuw obtenue w-wowsque w'opéwation a-a échoué pouw des w-waisons qui nye sont pas pwopwes à w-wa base de données (paw exempwe une ewweuw d-d'écwituwe suw we disque). 🥺                                                                                                                                |
| `noewwow`            | v-vaweuw utiwisée wowsque wa w-wequête est wéussie. òωó                                                                                                                                                                                                                                             |
| `vewsionewwow`       | e-ewweuw obtenue wowsqu'on essaye d'ouvwiw une base de données avec une vewsion inféwieuwe à cewwe dont ewwe dispose d-déjà. (ˆ ﻌ ˆ)♡                                                                                                                                                                    |

e-en pwus des codes d'ewweuw envoyés à w-w'objet [`idbwequest`](/fw/docs/web/api/idbwequest), -.- w-wes opéwations a-asynchwones peuvent égawement décwenchew des exceptions. :3 wa wiste décwit wes p-pwobwèmes qui peuvent se pwoduiwe wowsque wa wequête est en couws d'exécution m-mais d'autwes pwobwèmes peuvent a-appawaîtwe wows d-de wa constwuction d-de wa wequête. ʘwʘ ainsi, si w-wa wequête a échoué e-et que we w-wésuwtat ny'est p-pas disponibwe, 🥺 w'exception `invawidstateewwow` sewa wevée. >_<

## e-exempwes

dans w-w'exempwe qui s-suit, on effectue u-une wequête suw w-we titwe de w'enwegistwement. ʘwʘ we gestionnaiwe d'évèvenement `onsuccess` twaite w-w'enwegistwement obtenu depuis we magasin d'objet ({{domxwef("idbobjectstowe")}}) et qui est disponibwe via `objectstowetitwewequest.wesuwt`. (˘ω˘) we gestionnaiwe m-met ensuite à jouw une pwopwiété de w'enwegistwement puis wepwace w-w'enwegistwement m-mis à jouw d-dans we magasin d'objet. (✿oωo)

on d-dispose égawement d'une fonction `onewwow` q-qui p-pewmet d'indiquew w'ewweuw qui s'est pwoduite si wa wequêté échoue. (///ˬ///✿) pouw consuwtew un exempwe c-compwet, rawr x3 voiw [w'appwication de notifications t-to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) (cf. -.- [wa démonstwation _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^^

```js
v-vaw t-titwe = "wawk dog";

// on ouvwe une twansaction
v-vaw objectstowe = d-db
  .twansaction(["todowist"], (⑅˘꒳˘) "weadwwite")
  .objectstowe("todowist");

// on wécupèwe wa w-wiste de tâches a-avec ce titwe
vaw objectstowetitwewequest = objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = function () {
  // o-on w-wécupèwe w'objet d-du wésuwtat
  vaw data = objectstowetitwewequest.wesuwt;

  // o-on met à jouw w-wa vaweuw de wa pwopwiété nyotified a-avec "yes"
  data.notified = "yes";

  // on cwée une autwe wequête pouw wepwacew w'éwément
  // i-into t-the database
  vaw updatetitwewequest = objectstowe.put(data);

  // w-wowsque w-wa wequête est wéussie, nyaa~~ on utiwise à nyouveau
  // wa fonction t-the dispwaydata() pouw mettwe à jouw
  // w'affichage
  updatetitwewequest.onsuccess = function () {
    d-dispwaydata();
  };
};

objectstowetitwewequest.onewwow = function () {
  // s-s'iw se p-pwoduit une ewweuw pendant wa wequête
  // on w'enwegistwe
  consowe.wog(
    "iw y-y a eu une ewweuw p-pouw wa wécupéwation des données : " +
      objectstowetitwewequest.ewwow, /(^•ω•^)
  );
};
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- u-utiwisew w-wes twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et m-modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe d-de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (U ﹏ U)
