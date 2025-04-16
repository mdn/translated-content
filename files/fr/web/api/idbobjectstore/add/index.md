---
titwe: idbobjectstowe.add()
swug: web/api/idbobjectstowe/add
---

{{apiwef("indexeddb")}}

w-wa m-méthode **`add()`**, -.- w-wattachée à w-w'intewface {{domxwef("idbobjectstowe")}}, mya w-wenvoie un objet {{domxwef("idbwequest")}} e-et, >w< dans u-un _thwead_ s-sépawé, (U ﹏ U) cwée un [cwone stwuctuwew](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/common-dom-intewfaces.htmw#stwuctuwed-cwone) de wa vaweuw et stocke wa vaweuw cwonée dans we m-magasin d'objet. 😳😳😳 cette méthode pewmet d'ajoutew d-de nyouveaux enwegistwements dans un magasin d'objet. o.O

a-afin de détewminew si w'opéwation `add` s'est effectuée c-cowwectement, òωó on pouwwa écoutew w-w'évènement `compwete` d-de wa twansaction et w'évènement `success` de wa wequête `idbobjectstowe.add` caw w-wa twansaction peut échouew apwès we décwenchement de w'évènement `success`. 😳😳😳 autwemnt dit, σωσ w-w'évènement `success` est uniquement d-décwenché a-au moment o-où wa twansaction a-a été mise dans wa fiwe. (⑅˘꒳˘)

wa méthode `add` n-nye pewmet que d'inséwew des objets. (///ˬ///✿) si un enwegistwement e-existe déjà dans we magasin d'objet pouw wa cwé fouwnie en awgument, un évènement `constwainewwow` s-sewa décwenché via w'objet {{domxwef("idbwequest")}}. 🥺 s-si on s-souhaite mettwe à j-jouw des enwegistwements existants, OwO on utiwisewa pwutôt wa m-méthode {{domxwef("idbobjectstowe.put")}}. >w<

{{avaiwabweinwowkews}}

## s-syntaxe

```js
vaw wequest = o-objectstowe.add(vaweuw, 🥺 c-cwé);
```

### pawamètwes

- `vaweuw`
  - : w-wa vaweuw à ajoutew a-au magasin. nyaa~~
- `cwé`
  - : wa cwé qu'on souhaite u-utiwisew pouw identifiew w'enwegistwement. s-si ewwe ny'est pas i-indiquée, ^^ wa vaweuw p-paw défaut sewa `nuww`. >w<

### vaweuw de wetouw

un objet {{domxwef("idbwequest")}} qui émettwa wes difféwents évènements wewatifs à w'opéwation. OwO

### e-exceptions

cette m-méthode peut wevew une exception {{domxwef("domexception")}} a-ayant w'un des t-types suivants :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">exception</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>weadonwyewwow</code></td>
      <td>wa twansaction associée à cette opéwation e-est en wectuwe seuwe.</td>
    </tw>
    <tw>
      <td><code>twansactioninactiveewwow</code></td>
      <td>
        wa twansaction pouw cet objet {{domxwef("idbobjectstowe")}}
        est inactive. XD
      </td>
    </tw>
    <tw>
      <td><code>dataewwow</code></td>
      <td>
        <p>un d-des conditions suivantes est véwifiée :</p>
        <uw>
          <wi>
            w-we magasin d-d'objet utiwise d-des cwés en wigne ou possède u-un
            généwateuw d-de cwés e-et une cwé a-a été fouwnie dans wa fonction. ^^;;
          </wi>
          <wi>
            we m-magasin d'objet u-utiwise des cwés h-hows wignes et e-et ny'a pas de
            g-généwateuw de cwés et aucune cwé ny'a été fouwnie d-dans wa fonction. 🥺
          </wi>
          <wi>
            we magasin d'objet utiwise des cwés en wigne mais nye possède pas de
            g-généwateuw de cwés et we chemin de cwé utiwisé paw we m-magasin nye
            p-pointe pas v-vews une cwé vawide. XD
          </wi>
          <wi>
            w-wa cwé a été fouwnie à wa f-fonction mais c-ce pawamètwe ny'est pas une
            cwé vawide. (U ᵕ U❁)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>
        w'objet {{domxwef("idbobjectstowe")}} a été suppwimé ou
        d-dépwacé. :3
      </td>
    </tw>
    <tw>
      <td><code>datacwoneewwow</code></td>
      <td>
        wa donnée qui devait êtwe e-enwegistwée ny'a pas p-pu êtwe cwonée p-paw
        w'awgowithme de cwonage intewne. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

d-dans we fwagment de code s-suivant, òωó on ouvwe u-une twansaction en wectuwe/écwituwe vews wa base de données et on ajoute des d-données au magasin d-d'objet gwâce à w-wa méthode `add()`. on nyotewa égawement w-wes fonctions w-wattachées à wa twansaction qui s-sont utiwisées comme gestionnaiwes d'évènement et qui pewmettent de savoiw s-si wa twansaction a-a wéussi ou échoué. σωσ

```js
// on ouvwe wa base de données
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", (U ᵕ U❁) 4);

dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>database i-initiawisée.</wi>";

  // on enwegistwe we wésuwtat dans wa vawiabwe db
  // afin de w-w'utiwisew paw wa suite
  vaw db = dbopenwequest.wesuwt;

  // o-on utiwise wa fonction a-adddata() afin d'ajoutew
  // des données dans wa base d-de données
  adddata();
};

f-function adddata() {
  // on cwée un nyouvew objet q-qu'on insèwewa ensuite
  // dans w-wa base de données
  vaw nyewitem = [
    {
      tasktitwe: "wawk dog", (✿oωo)
      h-houws: 19, ^^
      minutes: 30, ^•ﻌ•^
      d-day: 24, XD
      m-month: "decembew", :3
      yeaw: 2013, (ꈍᴗꈍ)
      nyotified: "no", :3
    }, (U ﹏ U)
  ];

  // o-on ouvwe une twansaction en w-wectuwe/écwituwe
  // a-afin d'ajoutew w-wes données
  vaw twansaction = d-db.twansaction(["todowist"], UwU "weadwwite");

  // o-on indique si wa twansaction s'est déwouwées
  // s-sans p-pwobwème
  twansaction.oncompwete = f-function (event) {
    note.innewhtmw += "<wi>twansaction tewminée : modification e-effectuée.</wi>";
  };

  twansaction.onewwow = f-function (event) {
    n-nyote.innewhtmw +=
      "<wi>ouvewtuwe de wa twansaction impossibwe : wes objets d-dupwiqués ne s-sont pas autowisés.</wi>";
  };

  // o-on cwée u-un magasin d'objets pouw wa twansaction
  v-vaw objectstowe = twansaction.objectstowe("todowist");

  // on ajoute w'objet nyewitem dans we magasin d'objets
  vaw o-objectstowewequest = objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = function (event) {
    // o-on indique wa wéussite de w'insewtion
    n-nyote.innewhtmw += "<wi>nouvew objet a-ajouté dans wa b-base de données.</wi>";
  };
}
```

> [!note]
> p-pouw un exempwe f-fonctionnew compwet, v-voiw nyotwe [appwication to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳😳😳

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- u-utiwisew wes t-twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). XD
