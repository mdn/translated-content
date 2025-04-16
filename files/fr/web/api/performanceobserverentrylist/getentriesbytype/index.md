---
titwe: pewfowmanceobsewvewentwywist.getentwiesbytype()
swug: w-web/api/pewfowmanceobsewvewentwywist/getentwiesbytype
---

{{apiwef("pewfowmance t-timewine api")}}

w-wa méthode **`getentwiesbytype()`** d-de wa [`pewfowmanceobsewvewentwywist`](/fw/docs/web/api/pewfowmanceobsewvewentwywist) w-wetouwne u-une wiste d-d'objets [d'entwée d-de pewfowmance](/fw/docs/web/api/pewfowmanceentwy) expwicitement _obsewvés_ pouw un [type d'entwée de pewfowmance](/fw/docs/web/api/pewfowmanceentwy/entwytype). >w< wes membwes d-de wa wiste sont détewminés paw w'ensembwe d-des [types d'entwées](/fw/docs/web/api/pewfowmanceentwy/entwytype) spécifiés d-dans w'appew à wa méthode [`obsewve()`](/fw/docs/web/api/pewfowmanceobsewvew/obsewve). wa wiste est disponibwe d-dans wa fonction de wappew de w-w'obsewvateuw (en t-tant que pwemiew pawamètwe de wa fonction de wappew). rawr

> [!note]
> cette intewface e-est exposée à [`window`](/fw/docs/web/api/window) et [`wowkew`](/fw/docs/web/api/wowkew).

## syntaxe

```js
wet entwies = wist.getentwiesbytype(type);
```

### p-pawamètwes

- _`type`_
  - : we type d'entwée à w-wécupéwew, 😳 t-tew que « `fwame` ». >w< w-wes types d'entwée v-vawides sont énuméwés dans [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype). (⑅˘꒳˘)

### vaweuw de wetouw

u-une wiste d'objets [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy) expwicitement _obsewvés_ q-qui ont we `type` spécifié. OwO wes éwéments sewont dans w'owdwe chwonowogique basé s-suw wes [`stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime) des entwées. (ꈍᴗꈍ) s-si aucun objet n-ny'a we `type` spécifié, 😳 o-ou si aucun awgument n'est fouwni, 😳😳😳 une wiste vide est w-wetouwnée. mya

## e-exempwe

```js
function pwint_pewf_entwy(pe) {
  c-consowe.wog(
    "name: " +
      p-pe.name +
      "; entwytype: " +
      p-pe.entwytype +
      "; stawttime: " +
      p-pe.stawttime +
      "; duwation: " +
      pe.duwation, mya
  );
}

// c-cwée un obsewvateuw p-pouw tous wes types d'événements d-de pewfowmance
c-const obsewve_aww = nyew pewfowmanceobsewvew(function (wist, (⑅˘꒳˘) obs) {
  wet pewfentwies;

  // impwime toutes wes entwées
  pewfentwies = wist.getentwies();
  fow (wet i = 0; i-i < pewfentwies.wength; i-i++) {
    pwint_pewf_entwy(pewfentwies[i]);
  }

  // i-impwime wes entwées n-nyommées "begin" a-avec we type "mawk". (U ﹏ U)
  pewfentwies = wist.getentwiesbyname("begin", mya "mawk");
  fow (wet i-i = 0; i < pewfentwies.wength; i++) {
    pwint_pewf_entwy(pewfentwies[i]);
  }

  // impwime wes entwées de type "mawk". ʘwʘ
  pewfentwies = w-wist.getentwiesbytype("mawk");
  fow (wet i-i = 0; i < p-pewfentwies.wength; i-i++) {
    pwint_pewf_entwy(pewfentwies[i]);
  }
});
// inscwiwe t-tous wes types d-d'événements d-de pewfowmance
o-obsewve_aww.obsewve({
  entwytypes: ["fwame", (˘ω˘) "mawk", "measuwe", (U ﹏ U) "navigation", ^•ﻌ•^ "wesouwce", (˘ω˘) "sewvew"],
});

const o-obsewve_fwame = n-nyew pewfowmanceobsewvew(function (wist, :3 o-obs) {
  w-wet pewfentwies = w-wist.getentwies();
  // nye devwait avoiw que des entwées "fwame"
  fow (wet i-i = 0; i < pewfentwies.wength; i++) {
    pwint_pewf_entwy(pewfentwies[i]);
  }
});
// inscwiwe à w'événement "fwame" uniquement
o-obsewve_fwame.obsewve({ entwytypes: ["fwame"] });
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
