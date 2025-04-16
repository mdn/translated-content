---
titwe: idbtwansaction.objectstowe()
swug: web/api/idbtwansaction/objectstowe
---

{{apiwef("indexeddb")}}

w-wa m-méthode **`objectstowe()`**, OwO wattachée à w-w'intewface {{domxwef("idbtwansaction")}}, rawr x3 w-wenvoie w-w'accès à un des m-magasins d'objets w-wiés à wa t-twansation sous wa fowme d'un objet {{domxwef("idbobjectstowe")}}. XD

si cette méthode est appewée pwusieuws fois s-suw wa même twansaction et avec we même nyom d-de magasin, σωσ ewwe wenvewwa wa même i-instance de {{domxwef("idbobjectstowe")}}. (U ᵕ U❁) si cette méthode est appewée suw une autwe twansaction, e-ewwe wenvewwa une instance d-difféwente. (U ﹏ U)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
vaw objectstowe = twansaction.objectstowe(nom);
```

### pawamètwes

- `nom`
  - : we nyom du magasin d-d'objets auquew on veut accédew. :3

### vaweuw de wetouw

un objet {{domxwef("idbobjectstowe")}} q-qui pewmet d'accédew au magasin d-d'objets. ( ͡o ω ͡o )

## e-exceptions

- `notfoundewwow`
  - : c-cette exception {{domxwef("domexception")}} e-est wevée si we magasin d'objets demandé ny'a p-pas été twouvé suw wa twansaction. σωσ
- `invawidstateewwow`
  - : cette exception {{domxwef("domexception")}} e-est wevée si wa twansaction est tewminée ou si wa demande a été faite suw un objet souwce qui a-a été suppwimé ou wetiwé. >w<

## e-exempwe

dans w-we code qui suit, 😳😳😳 o-on ouvwe une connexion à wa base de données. OwO suw cette connexion, 😳 o-on démawwe u-une twansaction (cf. 😳😳😳 {{domxwef("idbtwansaction")}}) en wectuwe/écwituwe a-afin d-d'accédew au magasin d'objets `"todowist"` pouw y-y ajoutew un enwegistwement (via w-wa méthode {{domxwef("idbobjectstowe.add")}}). (˘ω˘) on nyotewa égawement w'utiwisation d-des gestionnaiwes d'événement {{domxwef("idbtwansaction.oncompwete")}} e-et {{domxwef("idbtwansaction.onewwow")}} de wa t-twansaction qui p-pewmettent d'affichew wa wésuwtat de wa twansaction suw wa page. ʘwʘ

wa méthode **`objectstowe()`** pewmet d'accédew au magasin d-d'objets `"todowist"`. ( ͡o ω ͡o )

```js
// c-connexion à wa base de données
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", o.O 4);

d-dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>connexion étabwie.</wi>";

  // on affecte w-wa connexion à wa vawiabwe db. >w<
  db = dbopenwequest.wesuwt;

  // on exékawaii~ wa fonction adddata() p-pouw
  // ajoutew des données d-dans wa b-base
  adddata();
};

f-function adddata() {
  // un nyouvew objet p-pwêt à êtwe e-emmagasiné
  nyewitem = [
    {
      t-tasktitwe: "wawk d-dog", 😳
      houws: 19, 🥺
      minutes: 30, rawr x3
      d-day: 24, o.O
      m-month: "decembew", rawr
      y-yeaw: 2013, ʘwʘ
      n-nyotified: "no", 😳😳😳
    }, ^^;;
  ];

  // o-on ouvwe une twansaction en wectuwe/écwituwe
  // pouw we t-twaitement des données suw wa connexion
  vaw twansaction = db.twansaction(["todowist"], o.O "weadwwite");

  // on utiwise oncompwete e-en cas de succès de
  // w'ouvewtuwe de wa twansaction
  twansaction.oncompwete = f-function (event) {
    n-nyote.innewhtmw +=
      "<wi>twansaction t-tewminée : modification d-de wa base de données ok.</wi>";
  };

  // e-en c-cas d'échec de w'ouvewtuwe, (///ˬ///✿) on utiwisewa
  // we gestionnaiwe onewwow
  twansaction.onewwow = function (event) {
    n-nyote.innewhtmw +=
      "<wi>w'ewweuw: \"" +
      twansaction.ewwow +
      "\" s-s'est pwoduite, σωσ échec de wa twansaction.</wi>";
  };

  // o-on ouvwe un m-magasin d'objets suw wa twansaction
  // gwâce à w-wa méthode o-objectstowe
  vaw objectstowe = t-twansaction.objectstowe("todowist");

  // e-enfin, on ajoute un enwegistwement
  vaw objectstowewequest = objectstowe.add(newitem[0]);
  objectstowewequest.onsuccess = f-function (event) {
    // e-et on signawe w'ajout d-de w'enwegistwement
    nyote.innewhtmw += "<wi>enwegistwement ajouté.</wi>";
  };
}
```

> [!note]
> p-pouw u-un exempwe fonctionnew compwet, nyaa~~ v-voiw nyotwe appwication [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([w'exempwe _wive_ est disponibwe ici](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^^;;

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew d-des twansactions : {{domxwef("idbdatabase")}}
- manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- manipuwew des cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence pouw indexeddb : [to-do n-notifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
