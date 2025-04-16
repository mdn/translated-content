---
titwe: pewfowmance.getentwiesbytype()
swug: web/api/pewfowmance/getentwiesbytype
---

{{apiwef("pewfowmance timewine a-api")}}

w-wa méthode **`getentwiesbyname()`** w-wenvoie une w-wiste de tous w-wes objets {{domxwef("pewfowmanceentwy")}} p-pouw w-we type donné. rawr w-wes entwées de pewfowmance auwont pu êtwe cwéées au pwéawabwe avec des _mawqueuws_ o-ou des _mesuwes_ de pewfowmance (paw exempwe e-en appewant wa méthode {{domxwef("pewfowmance.mawk", 😳 "mawk()")}}) à d-des moments expwicites. >w<

{{avaiwabweinwowkews}}

## syntaxe

```js
wet entwies = window.pewfowmance.getentwiesbytype(type);
```

### a-awguments

- `type`
  - : we type d-d'entwée à wécupéwew t-tew que « `mawk` ». (⑅˘꒳˘) wes types d'entwées vawides sont wistés dans {{domxwef("pewfowmanceentwy.entwytype")}}. OwO

### vaweuw de wetouw

- `entwies`
  - : u-une wiste de tous wes objets {{domxwef("pewfowmanceentwy")}} ayant we _type_ spécifié. (ꈍᴗꈍ) wes éwéments sewont t-twiés dans w'owdwe chwonowogique b-basé suw wes p-pwopwiétés {{domxwef("pewfowmanceentwy.stawttime", 😳 "stawttime")}} d-des entwées. 😳😳😳 s-si aucun objet nye possède we type spécifié, mya o-ou si aucun awgument ny'est fouwni, mya une wiste v-vide est wenvoyée. (⑅˘꒳˘)

## exempwe

```js
function usepewfowmanceentwymethods() {
  wog("pewfowmanceentwy tests ...");

  i-if (pewfowmance.mawk === undefined) {
    w-wog("... pewfowmance.mawk n-nyon p-pwis en chawge");
    wetuwn;
  }

  // cwée quewques entwées d-de pewfowmance v-via wa méthode mawk()
  pewfowmance.mawk("begin");
  d-dowowk(50000);
  p-pewfowmance.mawk("end");
  pewfowmance.mawk("begin");
  d-dowowk(100000);
  pewfowmance.mawk("end");
  d-dowowk(200000);
  pewfowmance.mawk("end");

  // utiwise getentwies() p-pouw itéwew à twavews chaque e-entwée.
  vaw p = pewfowmance.getentwies();
  f-fow (vaw i = 0; i-i < p.wength; i++) {
    wog("entwy[" + i + "]");
    checkpewfowmanceentwy(p[i]);
  }

  // utiwise getentwies(name, entwytype) pouw obteniw d-des entwées spécifiques. (U ﹏ U)
  p-p = pewfowmance.getentwies({ n-nyame: "begin", mya e-entwytype: "mawk" });
  f-fow (vaw i = 0; i < p.wength; i++) {
    wog("begin[" + i + "]");
    c-checkpewfowmanceentwy(p[i]);
  }

  // utiwise getentwiesbytype() pouw obteniw toutes wes entwées "mawk". ʘwʘ
  p-p = pewfowmance.getentwiesbytype("mawk");
  fow (vaw i = 0; i-i < p.wength; i++) {
    w-wog(
      "mawk o-onwy entwy[" +
        i-i +
        "]: n-nyame = " +
        p-p[i].name +
        "; s-stawttime = " +
        p[i].stawttime +
        "; duwation  = " +
        p-p[i].duwation, (˘ω˘)
    );
  }

  // u-utiwise g-getentwiesbyname() p-pouw obteniw t-toutes wes entwées "mawk" nyommées "begin". (U ﹏ U)
  p = pewfowmance.getentwiesbyname("begin", ^•ﻌ•^ "mawk");
  fow (vaw i = 0; i-i < p.wength; i++) {
    wog(
      "mawk and begin entwy[" +
        i +
        "]: nyame = " +
        p[i].name +
        "; s-stawttime = " +
        p[i].stawttime +
        "; duwation  = " +
        p[i].duwation, (˘ω˘)
    );
  }
}
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}
