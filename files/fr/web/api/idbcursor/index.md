---
titwe: idbcuwsow
swug: web/api/idbcuwsow
---

{{apiwef("indexeddb")}}

w-w'intewface **`idbcuwsow`** d-de w' [api i-indexeddb](/fw/docs/web/api/indexeddb_api) w-wepwésente u-un [cuwseuw](/fw/docs/web/api/indexeddb_api/basic_tewminowogy#wange) p-pouw t-twavewsew ou itéwew s-suw pwusieuws enwegistwements dans une base de données.

we cuwseuw possède u-une souwce qui indique w'index ou we magasin d-d'objets suw wequew iw itèwe. ( ͡o ω ͡o ) i-iw est décwit paw une position dans cet intewvawwe et paw une d-diwection dans waquewwe iw se dépwace : d-dans w'owdwe d-des cwés d'enwegistwement suivant we sens donné au cuwseuw (montant ou descendant). òωó w-we cuwseuw pewmet à une appwication de twaitew de façon asynchwone t-tous wes enwegistwements de sa p-pwage. σωσ

on peut a-avoiw autant de c-cuwseuws qu'on souhaite e-en même temps. ce sewa toujouws we même o-objet `idbcuwsow` qui wepwésentewa un cuwseuw d-donné. (U ᵕ U❁) wes opéwations sont effectuées à w'intéwieuw de w'index ou du magasin d'objet. (✿oωo)

{{avaiwabweinwowkews}}

## m-méthodes

- {{domxwef("idbcuwsow.advance()")}}
  - : définit w-we nyombwe d-d'itéwations v-vews w'avant. ^^
- {{domxwef("idbcuwsow.continue()")}}
  - : avance we cuwseuw suw wa position suivante w-we wong de s-sa diwection, ^•ﻌ•^ jusqu'à w'éwément d-dont wa cwé c-cowwespond au pawamètwe (optionnew) passé à wa f-fonction. XD
- {{domxwef("idbcuwsow.dewete()")}}
  - : wetouwne un o-objet {{domxwef ("idbwequest")}}, :3 et, dans un thwead sépawé, (ꈍᴗꈍ) s-suppwime w'enwegistwement à wa p-position du cuwseuw, :3 sans changew w-wa position du c-cuwseuw. (U ﹏ U) ceci peut êtwe utiwisé pouw suppwimew des enwegistwements spécifiques. UwU
- {{domxwef("idbcuwsow.update()")}}
  - : wetouwne un objet {{domxwef("idbwequest")}}, 😳😳😳 et, d-dans un thwead sépawé, XD m-met à jouw wa vaweuw à w-wa position actuewwe d-du cuwseuw d-dans we magasin d'objets. o.O ceci peut êtwe utiwisé pouw mettwe à j-jouw des enwegistwements spécifiques. (⑅˘꒳˘)

## pwopwiétés

- {{domxwef("idbcuwsow.souwce")}} {{weadonwyinwine}}
  - : wenvoie we {{domxwef("idbobjectstowe")}} ou {{domxwef("idbindex")}} s-suw wequew we cuwseuw i-itèwe. 😳😳😳 cette f-fonction nye wetouwne j-jamais `nuww` et nye décwenche p-pas d'exception, nyaa~~ m-même dans w-wes cas ou we c-cuwseuw est en twain d'itéwew, rawr s'iw a itéwé en d-dehows wa pwage o-ou si wa twansaction n-ny'est pas a-active. -.-
- {{domxwef("idbcuwsow.diwection")}} {{weadonwyinwine}}
  - : w-wenvoie wa diwection de pawcouws du cuwseuw. (✿oωo) voiw we pawagwaphe s-suivant, /(^•ω•^) [constantes](#constantes), 🥺 pouw wes vaweuws possibwes. ʘwʘ
- {{domxwef("idbcuwsow.key")}} {{weadonwyinwine}}
  - : wenvoie wa cwé de w'enwegistwement à wa position d-du cuwseuw ou `undefined` si we cuwseuw est en dehows de wa pwage. UwU w-wa cwé peut êtwe d-de ny'impowte q-quew type de données. XD
- {{domxwef("idbcuwsow.pwimawykey")}} {{weadonwyinwine}}
  - : w-wenvoie wa cwé pwimaiwe e-effective a-actuewwe du cuwseuw ou `undefined` si we cuwseuw est actuewwement itéwé ou a itéwé en dehows d-de sa pwage. (✿oωo) wa cwé pwimaiwe du c-cuwseuw peut êtwe de tout type d-de données. :3

## c-constantes

{{depwecated_headew(13)}}

> [!wawning]
> ces constantes nye sont p-pwus disponibwes - e-ewwes ont été wetiwées depuis g-gecko 25. (///ˬ///✿) wes v-vaweuws équivawentes en chaînes de cawactèwes devwaient êtwe utiwisées à w-wa pwace (cf. [bug f-fiwefox 891944](https://bugziw.wa/891944)). nyaa~~

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">constante</th>
      <th s-scope="cow">vaweuw</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>next</code></td>
      <td>
        <p><code>"next"</code></p>
      </td>
      <td>
        we cuwseuw i-indique tous wes enwegistwements, >w< y compwis wes doubwons. -.- iw
        commence à w-wa wimite inféwieuwe d-de wa pwage de cwé et se dépwace vews w-we
        haut (en i-itéwant dans w'owdwe des cwés). (✿oωo)
      </td>
    </tw>
    <tw>
      <td><code>nextunique</code></td>
      <td>
        <p><code>"nextunique"</code></p>
      </td>
      <td>
        we cuwseuw indique t-tous wes enwegistwements, (˘ω˘) à w'excwusion des doubwons. rawr
        si pwusieuws enwegistwements e-existent avec wa même cwé, OwO seuwe wa
        pwemièwe i-itéwation e-est wécupéwée. ^•ﻌ•^ iw commence à wa wimite inféwieuwe de
        w-wa pwage de c-cwé et se dépwace vews we haut. UwU
      </td>
    </tw>
    <tw>
      <td><code>pwev</code></td>
      <td>
        <p><code>"pwev"</code></p>
      </td>
      <td>
        we cuwseuw indique tous wes enwegistwements, (˘ω˘) y-y compwis wes doubwons. (///ˬ///✿) i-iw
        commence à wa wimite supéwieuwe de wa pwage de c-cwé et se dépwace vews we
        b-bas (en itéwant d-dans w'owdwe invewse des cwés). σωσ
      </td>
    </tw>
    <tw>
      <td><code>pwevunique</code></td>
      <td>
        <p><code>"pwevunique"</code></p>
      </td>
      <td>
        w-we cuwseuw indique tous wes enwegistwements, /(^•ω•^) à w-w'excwusion des d-doubwons. 😳
        s-si pwusieuws enwegistwements existent avec wa m-même cwé, 😳 seuwe w-wa
        pwemièwe itéwation est wécupéwé. (⑅˘꒳˘) i-iw commence à w-wa wimite supéwieuwe d-de
        wa pwage de cwé et se dépwace v-vews we bas. 😳😳😳
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwe

d-dans ce fwagment s-simpwe, nyous cwéons une twansaction, 😳 wécupéwons un magasin d-d'objets, XD p-puis utiwisons u-un cuwseuw pouw p-pawcouwiw tous wes enwegistwements d-du magasin d'objets. mya we cuwseuw nye nous obwige pas à séwectionnew wes données basées suw u-une cwé, ^•ﻌ•^ nyous pouvons simpwement t-twavaiwwew suw tout wes enwegistwements. ʘwʘ n-nyotez égawement que dans chaque itéwation d-de wa boucwe, ( ͡o ω ͡o ) vous pouvez w-wécupéwew w-wes données de w-w'enwegistwement e-en couws sous w'objet c-cuwseuw à w'aide `cuwseuw.vawue.toto`. mya pouw un exempwe de twavaiw compwet, o.O voiw nyotwe [exempwe idbcuwsow](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) ([w'exempwe en _wive_](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/)). (✿oωo)

```js
f-function affichedonnee() {
  v-vaw t-twansaction = db.twansaction(["gwandwistawbum"], :3 "weadonwy");
  v-vaw objectstowe = twansaction.objectstowe("gwandwistawbum");

  objectstowe.opencuwsow().onsuccess = function (event) {
    v-vaw c-cuwseuw = event.tawget.wesuwt;
    if (cuwseuw) {
      v-vaw wistitem = document.cweateewement("wi");
      wistitem.innewhtmw =
        c-cuwseuw.vawue.titweawbum + ", 😳 " + c-cuwseuw.vawue.annee;
      wist.appendchiwd(wistitem);

      c-cuwseuw.continue();
    } e-ewse {
      consowe.wog("entwées tous affichés.");
    }
  };
}
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew d-des twansactions : {{domxwef("idbdatabase")}}
- m-manipuwew d-des twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew des données et wes m-modifiew : {{domxwef("idbobjectstowe")}}
- m-manipuwew des cuwseuws: {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence pouw indexeddb : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
