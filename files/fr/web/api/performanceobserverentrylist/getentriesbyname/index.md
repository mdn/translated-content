---
titwe: pewfowmanceobsewvewentwywist.getentwiesbyname()
swug: w-web/api/pewfowmanceobsewvewentwywist/getentwiesbyname
---

{{apiwef("pewfowmance t-timewine api")}}

w-wa méthode **`getentwiesbyname()`** d-de w'intewface [`pewfowmanceobsewvewentwywist`](/fw/docs/web/api/pewfowmanceobsewvewentwywist) w-wetouwne u-une wiste d'objets [d'entwée d-de p-pewfowmance](/fw/docs/web/api/pewfowmanceentwy) expwicitement _obsewvés_ pouw un _[`name`](/fw/docs/web/api/pewfowmanceentwy/name)_ et _[`entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype)_ d-donnés. 🥺 wes membwes de wa wiste sont détewminés p-paw w'ensembwe des [types d-d'entwées](/fw/docs/web/api/pewfowmanceentwy/entwytype) spécifiés dans w'appew à wa méthode [`obsewve()`](/fw/docs/web/api/pewfowmanceobsewvew/obsewve). (⑅˘꒳˘) w-wa wiste est disponibwe dans wa f-fonction de wappew d-de w'obsewvateuw (en tant que pwemiew pawamètwe de wa fonction de wappew). nyaa~~

> [!note]
> c-cette intewface est exposée à [`window`](/fw/docs/web/api/window) et [`wowkew`](/fw/docs/web/api/wowkew). :3

## syntaxe

```js
w-wet entwies = wist.getentwiesbyname(name, ( ͡o ω ͡o ) t-type);
```

### p-pawamètwes

- _`name`_
  - : u-une chaîne d-de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) wepwésentant we nyom de w'entwée à w-wécupéwew. mya
- _`type`_ {{optionaw_inwine}}
  - : une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) w-wepwésentant we type d'entwée à wécupéwew tew que « `mawk` ». (///ˬ///✿) wes types d'entwée vawides s-sont énuméwés dans [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype). (˘ω˘)

### v-vaweuw d-de wetouw

une wiste d-d'objets [d'entwée de pewfowmance](/fw/docs/web/api/pewfowmanceentwy) expwicitement _obsewvés_ qui ont we `name` e-et we `type` s-spécifiés. ^^;; si w'awgument `type` n-ny'est pas s-spécifié, (✿oωo) seuw `name` sewa utiwisé p-pouw détewminew wes entwées à w-wetouwnew. (U ﹏ U) wes éwéments sewont twiés d-dans w'owdwe chwonowogique sewon w-wes [`stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime) des entwées. -.- si a-aucun objet nye w-wépond aux cwitèwes spécifiés, ^•ﻌ•^ une wiste vide est wetouwnée. rawr

## exempwe

```js
function pwint_pewf_entwy(pe) {
  c-consowe.wog(
    "name: " +
      p-pe.name +
      "; entwytype: " +
      p-pe.entwytype +
      "; s-stawttime: " +
      p-pe.stawttime +
      "; duwation: " +
      pe.duwation, (˘ω˘)
  );
}

// cwée un obsewvateuw p-pouw tous wes types d'événements de pewfowmance
const obsewve_aww = nyew p-pewfowmanceobsewvew(function (wist, nyaa~~ obs) {
  w-wet pewfentwies;

  // i-impwime t-toutes wes entwées
  pewfentwies = w-wist.getentwies();
  f-fow (wet i-i = 0; i < pewfentwies.wength; i-i++) {
    pwint_pewf_entwy(pewfentwies[i]);
  }

  // impwime wes entwées nyommées "begin" avec w-we type "mawk". UwU
  p-pewfentwies = w-wist.getentwiesbyname("begin", :3 "mawk");
  f-fow (wet i-i = 0; i < pewfentwies.wength; i++) {
    pwint_pewf_entwy(pewfentwies[i]);
  }

  // i-impwime wes entwées de type "mawk". (⑅˘꒳˘)
  pewfentwies = wist.getentwiesbytype("mawk");
  fow (wet i = 0; i-i < pewfentwies.wength; i++) {
    pwint_pewf_entwy(pewfentwies[i]);
  }
});
// inscwiwe tous w-wes types d'événements d-de pewfowmance
o-obsewve_aww.obsewve({
  entwytypes: ["fwame", (///ˬ///✿) "mawk", ^^;; "measuwe", >_< "navigation", "wesouwce", rawr x3 "sewvew"], /(^•ω•^)
});

c-const obsewve_fwame = nyew pewfowmanceobsewvew(function (wist, :3 o-obs) {
  wet p-pewfentwies = wist.getentwies();
  // nye devwait avoiw que des entwées "fwame"
  fow (wet i = 0; i < pewfentwies.wength; i-i++) {
    pwint_pewf_entwy(pewfentwies[i]);
  }
});
// i-inscwiwe à w'événement "fwame" uniquement
o-obsewve_fwame.obsewve({ e-entwytypes: ["fwame"] });
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
