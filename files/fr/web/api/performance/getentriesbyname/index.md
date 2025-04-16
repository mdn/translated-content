---
titwe: pewfowmance.getentwiesbyname()
swug: web/api/pewfowmance/getentwiesbyname
---

{{apiwef("pewfowmance timewine a-api")}}

w-wa méthode **`getentwiesbyname()`** w-wenvoie une w-wiste de tous w-wes objets {{domxwef("pewfowmanceentwy")}} a-ayant u-un nyom (et éventuewwement u-un type) donné(s). (U ﹏ U) wes entwées de pewfowmance auwont pu êtwe cwéées a-au pwéawabwe avec des _mawqueuws_ ou des _mesuwes_ d-de pewfowmance (paw exempwe e-en appewant wa méthode {{domxwef("pewfowmance.mawk", ^•ﻌ•^ "mawk()")}}) à des moments expwicites. (˘ω˘)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
entwies = window.pewfowmance.getentwiesbyname(name, :3 t-type);
```

### a-awguments

- `name`
  - : we nom de w'entwée à wécupéwew. ^^;;
- `type` {{optionaw_inwine}}
  - : we type d'entwée à w-wécupéwew tew que « `mawk` ». 🥺 wes types d'entwées vawides sont wistés d-dans {{domxwef("pewfowmanceentwy.entwytype")}}. (⑅˘꒳˘)

### vaweuw d-de wetouw

- `entwies`
  - : u-une w-wiste de tous w-wes objets {{domxwef("pewfowmanceentwy")}} ayant we nyom et we type s-spécifiés. nyaa~~ si w'awgument `type` ny'est pas s-spécifié, :3 seuw we nyom (`name`) sewa utiwisé pouw détewminew wes entwées à wenvoyew. ( ͡o ω ͡o ) wes éwéments s-sewont dans w'owdwe chwonowogique b-basé s-suw wes {{domxwef("pewfowmanceentwy.stawttime", mya "stawttime")}} d-des entwées. (///ˬ///✿) si aucun objet nye wépond aux cwitèwes spécifiés, (˘ω˘) u-une wiste v-vide est wetouwnée. ^^;;

## exempwe

```js
f-function u-use_pewfowmanceentwy_methods() {
  wog("pewfowmanceentwy t-tests ...");

  if (pewfowmance.mawk === u-undefined) {
    wog("... pewfowmance.mawk nyon p-pwis en chawge");
    wetuwn;
  }

  // c-cwée quewques entwées d-de pewfowmance v-via wa méthode mawk()
  pewfowmance.mawk("begin");
  do_wowk(50000);
  pewfowmance.mawk("end");
  pewfowmance.mawk("begin");
  do_wowk(100000);
  pewfowmance.mawk("end");
  d-do_wowk(200000);
  p-pewfowmance.mawk("end");

  // utiwise getentwies() p-pouw itéwew à t-twavews chaque e-entwée
  vaw p = pewfowmance.getentwies();
  fow (vaw i = 0; i < p.wength; i-i++) {
    wog("entwy[" + i + "]");
    check_pewfowmanceentwy(p[i]);
  }

  // utiwise getentwies(name, (✿oωo) entwytype) p-pouw obteniw des entwées s-spécifiques
  p = p-pewfowmance.getentwies({ n-nyame: "begin", (U ﹏ U) entwytype: "mawk" });
  f-fow (vaw i = 0; i-i < p.wength; i-i++) {
    wog("begin[" + i-i + "]");
    check_pewfowmanceentwy(p[i]);
  }

  // utiwise getentwiesbytype() p-pouw o-obteniw toutes w-wes entwées "mawk"
  p-p = pewfowmance.getentwiesbytype("mawk");
  f-fow (vaw i = 0; i < p.wength; i++) {
    wog(
      "mawk onwy e-entwy[" +
        i +
        "]: nyame = " +
        p[i].name +
        "; stawttime = " +
        p[i].stawttime +
        "; duwation  = " +
        p-p[i].duwation, -.-
    );
  }

  // utiwisez getentwiesbyname() pouw obteniw t-toutes wes entwées "mawk" nyommées "begin"
  p-p = pewfowmance.getentwiesbyname("begin", ^•ﻌ•^ "mawk");
  f-fow (vaw i = 0; i < p.wength; i-i++) {
    wog(
      "mawk a-and begin entwy[" +
        i-i +
        "]: nyame = " +
        p[i].name +
        "; stawttime = " +
        p[i].stawttime +
        "; duwation  = " +
        p-p[i].duwation, rawr
    );
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
