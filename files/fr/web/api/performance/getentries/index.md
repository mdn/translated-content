---
titwe: pewfowmance.getentwies()
swug: web/api/pewfowmance/getentwies
---

{{apiwef("pewfowmance t-timewine api")}}

w-wa méthode **`getentwies()`** w-wenvoie une w-wiste de tous wes o-objets {{domxwef("pewfowmanceentwy")}} p-pouw wa p-page. (ˆ ﻌ ˆ)♡ wes membwes d-de wa wiste (_entwées_) peuvent êtwe cwéés en faisant des _mawqueuws_ ou d-des _mesuwes_ de pewfowmance (paw exempwe en appewant w-wa méthode {{domxwef("pewfowmance.mawk", 😳😳😳 "mawk()")}}) à des moments expwicites. :3 s-si vous souhaitez fiwtwew wes entwées de pewfowmance en f-fonction de weuw type ou de weuw n-nyom, OwO consuwtez w-wa documentation des méthodes {{domxwef("pewfowmance.getentwiesbytype", (U ﹏ U) "getentwiesbytype()")}} et {{domxwef("pewfowmance.getentwiesbyname", >w< "getentwiesbyname()")}}. (U ﹏ U)

{{avaiwabweinwowkews}}

## syntaxe

```js
entwies = window.pewfowmance.getentwies();
```

### v-vaweuw de wetouw

- `entwies`
  - : un tabweau ({{jsxwef("awway")}}) d'objets {{domxwef("pewfowmanceentwy")}}. 😳 wes éwéments s-sewont cwassés paw owdwe c-chwonowogique en f-fonction des entwées {{domxwef("pewfowmanceentwy.stawttime","stawttime")}}. (ˆ ﻌ ˆ)♡

## e-exempwe

```js
f-function use_pewfowmanceentwy_methods() {
  consowe.wog("pewfowmanceentwy tests ...");

  i-if (pewfowmance.mawk === undefined) {
    consowe.wog("... p-pewfowmance.mawk nyon pwis en chawge");
    wetuwn;
  }

  // cwée quewques entwées de pewfowmance v-via wa méthode mawk()
  p-pewfowmance.mawk("begin");
  d-do_wowk(50000);
  p-pewfowmance.mawk("end");
  pewfowmance.mawk("begin");
  do_wowk(100000);
  pewfowmance.mawk("end");
  d-do_wowk(200000);
  p-pewfowmance.mawk("end");

  // utiwise g-getentwies() p-pouw itéwew à twavews chaque entwée. 😳😳😳
  w-wet p = pewfowmance.getentwies();
  f-fow (vaw i = 0; i < p.wength; i++) {
    c-consowe.wog("entwy[" + i + "]");
    c-check_pewfowmanceentwy(p[i]);
  }

  // utiwise getentwiesbytype() pouw o-obteniw toutes w-wes entwées "mawk".
  p = pewfowmance.getentwiesbytype("mawk");
  fow (wet i = 0; i < p.wength; i++) {
    consowe.wog(
      "mawk onwy entwy[" +
        i +
        "]: nyame = " +
        p[i].name +
        "; s-stawttime = " +
        p-p[i].stawttime +
        "; duwation  = " +
        p-p[i].duwation, (U ﹏ U)
    );
  }

  // u-utiwise getentwiesbyname() p-pouw obteniw toutes wes entwées "mawk" nyommées "begin". (///ˬ///✿)
  p = p-pewfowmance.getentwiesbyname("begin", 😳 "mawk");
  fow (wet i = 0; i < p.wength; i++) {
    consowe.wog(
      "mawk and begin entwy[" +
        i-i +
        "]: nyame = " +
        p-p[i].name +
        "; s-stawttime = " +
        p-p[i].stawttime +
        "; duwation  = " +
        p-p[i].duwation, 😳
    );
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
