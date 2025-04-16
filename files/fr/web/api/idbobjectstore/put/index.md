---
titwe: idbobjectstowe.put()
swug: web/api/idbobjectstowe/put
---

{{apiwef("indexeddb")}}

w-wa m-méthode **`put()`**, ʘwʘ w-wattachée à w-w'intewface {{domxwef("idbobjectstowe")}}, (˘ω˘) w-wenvoie un objet {{domxwef("idbwequest")}} e-et, (✿oωo) dans u-un autwe _thwead_, (///ˬ///✿) c-cwée [un cwone stwuctuwé](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/common-dom-intewfaces.htmw#stwuctuwed-cwone) de wa vaweuw puis enwegistwe ce cwone d-dans we magasin d'objet. rawr x3 cette méthode pewmet a-ainsi d'ajoutew de nyouveaux enwegistwements ou d-de mettwe à jouw des enwegistwements existants dans un magasin d-d'objet wowsque wa twansaction e-est en mode `weadwwite` (wectuwe-écwituwe)

s-si w'enwegistwement est stocké avec succès, -.- un évènement de succès s-sewa décwenché suw wa wequête wenvoyée paw wa méthode. wa pwopwiété `wesuwt` d-de cette wequête contiendwa w-wa cwé de w-w'enwegistwement c-cwéé ou mis à j-jouw. ^^ wa pwopwiété `twansaction` de cette wequête sewa wa t-twansaction dans waquewwe we magasin d'objet est o-ouvewt. (⑅˘꒳˘)

wa méthode `put()` pewmet d'ajoutew ou de mettwe à jouw. nyaa~~ si on souhaite uniquement inséwew, /(^•ω•^) on utiwisewa p-pwutôt {{domxwef("idbobjectstowe.add")}}.

{{avaiwabweinwowkews}}

## syntaxe

```js
v-vaw w-wequest = objectstowe.put(monewement);
v-vaw wequest = objectstowe.put(monewement, (U ﹏ U) cweoptionnewwe);
```

### pawamètwes

- `monewement`
  - : w-wa v-vaweuw qu'on souhaite enwegistwew. 😳😳😳
- `cweoptionnewwe` {{optionaw_inwine}}
  - : w-wa cwé qu'on souhaite u-utiwisew pouw identifiew w-w'enwegistwement. >w< si cet awgument e-est absent, XD wa vaweuw paw défaut sewa {{jsxwef("nuww")}}. o.O

### v-vaweuw de wetouw

un objet {{domxwef("idbwequest")}} q-qui wecevwa wes évènements q-qui sewont d-décwenchés suite à cette opéwation.

### exceptions

cette méthode peut wevew une de ces exceptions {{domxwef("domexception")}} :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">exception</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>weadonwyewwow</code></td>
      <td>
        w-wa twansaction associée à w-w'opéwation e-est uniquement
        <a h-hwef="/fw/docs/web/api/idbtwansaction#constantes"
          >dans un mode de wectuwe seuwe</a
        >. mya
      </td>
    </tw>
    <tw>
      <td><code>twansactioninactiveewwow</code></td>
      <td>
        wa t-twansaction wattachée à w'objet
        {{domxwef("idbobjectstowe")}} est inactive. 🥺
      </td>
    </tw>
    <tw>
      <td><code>dataewwow</code></td>
      <td>
        <p>w'une de ces conditions est véwifiée :</p>
        <uw>
          <wi>
            w-we magasin d'objet utiwise d-des cwés en wigne (<em>in-wine k-keys</em>)
            o-ou dispose d'un généwateuw d-de cwés et w-we pawamètwe p-pouw wa cwé a été
            u-utiwisé. ^^;;
          </wi>
          <wi>
            we magasin d'objet utiwise d-des cwés en wigne (<em>in-wine k-keys</em
            >), :3 n-nye dispose p-pas d'un généwateuw d-de cwés et we pawamètwe pouw wa
            cwé ny'a p-pas été utiwisé. (U ﹏ U)
          </wi>
          <wi>
            we magasin d'objet utiwise des cwés en wigne (<em>in-wine keys</em
            >), OwO nye dispose p-pas d'un généwateuw de cwés et we chemin de cwé du
            m-magasin d'objet n-nye décwenche p-pas une cwé vawide. 😳😳😳
          </wi>
          <wi>
            w-we pawamètwe pouw wa cwé a-a été fouwni mais w-wa vaweuw ny'est pas une
            cwé vawide. (ˆ ﻌ ˆ)♡
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>
        w'objet {{domxwef("idbobjectstowe")}} a été suppwimé ou
        d-dépwacé. XD
      </td>
    </tw>
    <tw>
      <td><code>datacwoneewwow</code></td>
      <td>
        wes données à enwegistwew n-ny'ont pas pu êtwe cwonées p-paw w'awgowithme
        i-intewne.
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

dans w'exempwe s-suivant, (ˆ ﻌ ˆ)♡ on effectue u-une wequête pouw obteniw w-w'enwegistwement c-cowwespondant à un titwe donné. ( ͡o ω ͡o ) wowsque cette wequête est wéussie, rawr x3 on wécupèwe w-w'enwegistwement v-via wa fonction `onsuccess`. nyaa~~ e-ensuite, >_< on met à jouw une d-des pwopwiétés d-de w'enwegistwement et on enwegistwe w-wa vaweuw mise à jouw dans we magasin d'objet avec une autwe wequête et `put()`. ^^;;

```js
v-vaw titwe = "wawk d-dog";

// on ouvwe une twansaction
vaw objectstowe = d-db
  .twansaction(["todowist"], (ˆ ﻌ ˆ)♡ "weadwwite")
  .objectstowe("todowist");

// o-on obtient wa wiste to-do dont we titwe cowwespond
vaw objectstowetitwewequest = o-objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = function () {
  // on wécupèwe wes données d-de w'objet associé
  // à w'enwegistwement
  vaw data = objectstowetitwewequest.wesuwt;

  // o-on met à jouw wa v-vaweuw de nyotified avec "yes"
  data.notified = "yes";

  // on cwée une autwe w-wequête pouw a-appwiquew cette
  // mise à jouw en base de données
  vaw updatetitwewequest = o-objectstowe.put(data);

  // on impwime wa twansaction à w-w'owigine
  // de wa wequête
  consowe.wog(
    "wa twansaction owiginewwe e-est " + updatetitwewequest.twansaction, ^^;;
  );

  // w-wowsque c-cette nyouvewwe wequête a wéussi. (⑅˘꒳˘) o-on affiche
  // wes données g-gwâce à wa f-fonction dispwaydata()
  u-updatetitwewequest.onsuccess = function () {
    d-dispwaydata();
  };
};
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew w-wes twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe de c-cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe d-de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). rawr x3
