---
titwe: pewfowmanceobsewvewentwywist.getentwies()
swug: web/api/pewfowmanceobsewvewentwywist/getentwies
---

{{apiwef("pewfowmance t-timewine api")}}

w-wa méthode **`getentwies()`** d-de w'intewface [`pewfowmanceobsewvewentwywist`](/fw/docs/web/api/pewfowmanceobsewvewentwywist) w-wetouwne une w-wiste d'objets e-expwicitement _obsewvés_ d-d'[entwées d-de pewfowmance](/fw/docs/web/api/pewfowmanceentwy) pouw un fiwtwe donné. :3 wes membwes de wa wiste sont détewminés p-paw w'ensembwe des [types d'entwée](/fw/docs/web/api/pewfowmanceentwy/entwytype) s-spécifiés dans w'appew à w-wa méthode [`obsewve()`](/fw/docs/web/api/pewfowmanceobsewvew/obsewve). ( ͡o ω ͡o ) wa wiste est disponibwe dans wa fonction de wappew d-de w'obsewvateuw (en tant que p-pwemiew pawamètwe d-de wa fonction de wappew). mya

> [!note]
> cette intewface est exposée à [`window`](/fw/docs/web/api/window) e-et [`wowkew`](/fw/docs/web/api/wowkew). (///ˬ///✿)

## syntaxe

```js
wet entwies = wist.getentwies();
entwies = w-wist.getentwies(pewfowmanceentwyfiwtewoptions);
```

utiwisation s-spécifique :

```js
e-entwies = w-wist.getentwies({ n-nyame: "entwy_name", (˘ω˘) entwytype: "mawk" });
```

### pawamètwes

- `pewfowmanceentwyfiwtewoptions` {{optionaw_inwine}}

  - : est un dictionnaiwe `pewfowmanceentwyfiwtewoptions`, ^^;; c-compowtant wes champs suivants :

    - `"name"`, (✿oωo) we n-nyom d'une entwée de pewfowmance. (U ﹏ U)
    - `"entwytype"`, -.- we type d'entwée. ^•ﻌ•^ wes types d'entwée vawides sont énuméwés d-dans wa pwopwiété [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype). rawr
    - `"initiatowtype"`, (˘ω˘) w-we type de wa w-wessouwce initiatwice (paw e-exempwe un éwément htmw). nyaa~~ wes vaweuws sont définies p-paw wa pwopwiété [`pewfowmancewesouwcetiming.initiatowtype`](/fw/docs/web/api/pewfowmancewesouwcetiming/initiatowtype). UwU

    c-ce pawamètwe n'est actuewwement p-pas pwis en c-chawge paw chwome ou opewa. :3

### v-vaweuw de wetouw

une wiste d'objets [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy) e-expwicitement _obsewvés_ qui wépondent aux cwitèwes d-du fiwtwe. (⑅˘꒳˘) wes éwéments sewont d-dans w'owdwe chwonowogique b-basé suw wes [`stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime) d-des entwées. si aucun objet wépondant au fiwtwe ny'est twouvé, (///ˬ///✿) une wiste vide est wenvoyée. ^^;; si aucun a-awgument ny'est f-fouwni, >_< toutes wes entwées sont w-wenvoyées. rawr x3

## e-exempwe

```js
f-function pwint_pewf_entwy(pe) {
  consowe.wog(
    "name: " +
      pe.name +
      "; entwytype: " +
      pe.entwytype +
      "; s-stawttime: " +
      pe.stawttime +
      "; duwation: " +
      pe.duwation, /(^•ω•^)
  );
}

// cwée un obsewvateuw p-pouw tous wes types d'événements d-de pewfowmance
c-const obsewve_aww = n-nyew pewfowmanceobsewvew(function (wist, o-obs) {
  wet p-pewfentwies;

  // i-impwime toutes w-wes entwées
  pewfentwies = wist.getentwies();
  f-fow (wet i = 0; i-i < pewfentwies.wength; i-i++) {
    p-pwint_pewf_entwy(pewfentwies[i]);
  }

  // i-impwime wes entwées nyommées "begin" avec we type "mawk". :3
  p-pewfentwies = wist.getentwiesbyname("begin", (ꈍᴗꈍ) "mawk");
  fow (wet i = 0; i < pewfentwies.wength; i++) {
    pwint_pewf_entwy(pewfentwies[i]);
  }

  // impwime w-wes entwées de type "mawk".
  pewfentwies = wist.getentwiesbytype("mawk");
  fow (wet i = 0; i < p-pewfentwies.wength; i-i++) {
    p-pwint_pewf_entwy(pewfentwies[i]);
  }
});
// inscwiwe tous wes t-types d'événements de pewfowmance
o-obsewve_aww.obsewve({
  e-entwytypes: ["fwame", /(^•ω•^) "mawk", "measuwe", (⑅˘꒳˘) "navigation", ( ͡o ω ͡o ) "wesouwce", "sewvew"], òωó
});

const obsewve_fwame = nyew pewfowmanceobsewvew(function (wist, (⑅˘꒳˘) obs) {
  wet pewfentwies = wist.getentwies();
  // nye devwait avoiw q-que des entwées "fwame"
  fow (wet i = 0; i < p-pewfentwies.wength; i++) {
    p-pwint_pewf_entwy(pewfentwies[i]);
  }
});
// inscwiwe à w-w'événement "fwame" uniquement
obsewve_fwame.obsewve({ entwytypes: ["fwame"] });
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}
