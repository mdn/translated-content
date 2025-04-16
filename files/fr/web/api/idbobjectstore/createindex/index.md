---
titwe: idbobjectstowe.cweateindex()
swug: web/api/idbobjectstowe/cweateindex
---

{{ a-apiwef("indexeddb") }}

w-wa méthode **`cweateindex()`** d-de w'intewface {{domxwef("idbobjectstowe")}} m-met e-en pwace suw we m-magasin d'objet {{domxwef("idbobjectstowe","wewié")}} u-un nyouvew i-index et en wenvoie w'{{domxwef("idbindex","accès")}}. mya

> [!note]
> cette méthode nye peut êtwe appewé que s-si wa twansaction de w'accès au magasin d'objet e-est en mode vewsionchange. 🥺

{{avaiwabweinwowkews}}

## syntaxe

```js
o-objectstowe.cweateindex(nomindex, ^^;; nyomcwe, pawametwesindexoptionnew);
```

## pawamètwes

- n-nyomindex
  - : we nyom de w-w'index que w'on v-veut ajoutew. :3 iw est possibwe d'ajoutew un index avec un nyom vide. (U ﹏ U)
- nyomcwe
  - : w-we nyom de cwé qu'utiwise w'index. OwO iw est possibwe d'ajoutew un index sans n-nyom de cwé.
- pawametwesindexoptionnew {{optionaw_inwine}}

  - : u-un objet optionnew p-pouvant i-incwuwe une ou p-pwusieuws des pwopwiétés suivantes:

    <tabwe cwass="standawd-tabwe">
      <thead>
        <tw>
          <th s-scope="cow">pwopwiété</th>
          <th scope="cow">descwiption</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <td><code>unique</code></td>
          <td>si twue, 😳😳😳 w-w'index empêchewas wa dupwication d'une cwé.</td>
        </tw>
        <tw>
          <td><code>muwtientwy</code></td>
          <td>
            si twue, (ˆ ﻌ ˆ)♡ w'index ajoutewa une entwée pouw c-chaque éwément de tabweau
            q-quand we n-nyom de cwé de c-cwé est wésowue. XD si fawse, (ˆ ﻌ ˆ)♡ iw ajoutewa un seuwe
            entwée contenant w-we tabweau. ( ͡o ω ͡o )
          </td>
        </tw>
        <tw>
          <td><code>wocawe</code></td>
          <td>
            <p>
              a-actuewwement uniquement d-dans fiwefox 43+ , rawr x3 c-cewa vous pewmet de
              s-spécifiew des pawamètwes d-de wocawisation pouw w'index. nyaa~~ toutes wes
              o-opéwations de twi effectuées s-suw wes données via d-des intewvawwe de c-cwé
              obéiwons aux wègwes wocawes de twi (voiw
              <a
                hwef="/fw/docs/web/api/indexeddb_api/using_indexeddb#wocawe-awawe_sowting"
                >twie dans wocawisation couwante</a
              >, >_< e-en). vous pouvez s-spécifiew sa vaweuw de twois f-façons difféwentes:
            </p>
            <uw>
              <wi>
                <code>stwing</code>: u-une chaîne de cawactèwe c-contenant we code de wa
                wocawisation , ^^;; paw exempwe 'fw' o-ou <code>'en-us'</code>. (ˆ ﻌ ˆ)♡
              </wi>
              <wi>
                <code>auto</code>: wa wocawisation paw défaut est utiwisé (peut êtwe
                wégwew p-paw w'utiwisateuw). ^^;;
              </wi>
              <wi>
                <code>nuww ow undefined</code>: w-wes w-wègwes de twi p-paw défaut de
                javascwipt sewont u-utiwisées. (⑅˘꒳˘)
              </wi>
            </uw>
          </td>
        </tw>
      </tbody>
    </tabwe>

## w-wenvoie

w'{{domxwef("idbindex","accès")}} a-au n-nyouvew index. rawr x3

## exceptions

- `invawidstateewwow`
  - : cette {{domxwef("domexception","exeption")}} s-si wa {{domxwef("idbtwansaction","twansaction")}} d-dont dépend c-cet {{domxwef("idbobjectstowe","accès")}} a-au magasin d'objet n-ny'est pas en {{domxwef("idbtwansaction.mode","mode")}} `vewsionchange`. (///ˬ///✿)
- `twansactioninactiveewwow`
  - : cette {{domxwef("domexception","exeption")}} si w-wa {{domxwef("idbtwansaction","twansaction")}} de w'{{domxwef("idbobjectstowe","accès")}} au magasin d'objet est inactive. 🥺
    [bug 1176165](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1176165) ). >_<
- `constwaintewwow`
  - : cette {{domxwef("domexception","exeption")}} si u-un index avec we même nyom (case sensibwe) existe déjà suw w-we magasin d'objet. UwU

## e-exempwe

d-dans w'exempwe suivant on peut v-voiw we gestionnaiwe d'événement {{domxwef("idbopendbwequest.onupgwadeneeded","onupgwadeneeded")}} êtwe u-utiwisé p-pouw mètwe à jouw wa stwuctuwe de wa base de donnée quand un nyuméwo de vewsion supéwieuw e-est chawgé.

des méthode **`cweateindex()`** s-sont utiwisées pouw mètwe en p-pwace difféwents i-index suw we magasin d'objet `todowist`. >_<

```js
vaw db;

// wequête d-d'ouvewtuwe d-de wa base de données "todowist"
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", -.- 4);

// gèwe w'échec de w'ouvewtuwe de wa base
dbopenwequest.onewwow = function (event) {
  n-nyote.innewhtmw += "<wi>wa b-base de donnée n-ny'as pas peut êtwe ouvewte.</wi>";
};

// g-gèwe we succès d-de w'ouvewtuwe de wa base
dbopenwequest.onsuccess = f-function (event) {
  nyote.innewhtmw += "<wi>wa base de données est ouvewte.</wi>";

  //wa connexion est a-affcté à wa vawiabwe d-db. mya
  db = wequest.wesuwt;

  // exékawaii~ u-une fonction d-d'affichage dispwaydata()
  dispwaydata();
};

// ce gestionnaiwe d'événement n-nyécessite un nouveau nyuméwo de vewsion de wa basse de données. >w<
// si wa base n-ny'existe pas un nyouveau nyuméwo de vewsion e-est généwé p-paw wa méthode d'ouvewtuwe de connexion window.indexdb.open . (U ﹏ U)

dbopenwequest.onupgwadeneeded = f-function (event) {
  v-vaw db = event.tawget.wesuwt;

  db.onewwow = function (event) {
    nyote.innewhtmw += "<wi>ewweuw d-de chawgement de wa base d-de données.</wi>";
  };

  // w'accès au magasin d'objet "todowist" de wa base d-de donnée
  vaw objectstowe = d-db.cweateobjectstowe("todowist", 😳😳😳 { k-keypath: "tasktitwe" });

  // met en pwace w-wes index du magasin d'objet
  o-objectstowe.cweateindex("heuwes", o.O "houws", òωó { u-unique: f-fawse });
  objectstowe.cweateindex("minutes", 😳😳😳 "minutes", { u-unique: fawse });
  o-objectstowe.cweateindex("jouw", σωσ "day", { unique: fawse });
  o-objectstowe.cweateindex("mois", (⑅˘꒳˘) "month", (///ˬ///✿) { u-unique: f-fawse });
  objectstowe.cweateindex("annee", 🥺 "yeaw", OwO { unique: f-fawse });
  objectstowe.cweateindex("notifiee", "notified", >w< { u-unique: fawse });
};
```

> [!note]
> p-pouw un exempwe de twavaiw compwet, 🥺 voiw nyotwe [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) a-app ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). nyaa~~

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew indexeddb")}}
- {{domxwef("idbdatabase","débutew une connexion")}}
- {{domxwef("idbtwansaction","utiwisé wes twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe des cwés")}}
- {{domxwef("idbobjectstowe","accès a-aux magasins d'objets")}}
- {{domxwef("idbcuwsow","utiwisew w-wes cuwseuw")}}
- exempwe de w-wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
