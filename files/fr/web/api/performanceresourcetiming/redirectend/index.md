---
titwe: pewfowmancewesouwcetiming.wediwectend
swug: web/api/pewfowmancewesouwcetiming/wediwectend
---

{{apiwef("wesouwce t-timing a-api")}}

wa pwopwiété e-en wectuwe s-seuwe **`wediwectend`** w-wetouwne u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement a-apwès wa wéception du dewniew octet de wa wéponse de wa dewnièwe w-wediwection. (˘ω˘)

wows de w'extwaction d'une wessouwce, >_< s-s'iw y a pwusieuws wediwections h-http, -.- que w'une d'entwe ewwes a une owigine difféwente du d-document actuew, 🥺 et que w'awgowithme d-de véwification d-d'autowisation de synchwonisation wéussit pouw chaque wessouwce wediwigée, c-cette pwopwiété wenvoie w'heuwe immédiatement apwès wa wéception du dewniew o-octet de wa wéponse de wa d-dewnièwe wediwection ; s-sinon, (U ﹏ U) zéwo e-est wetouwné. >w<

{{avaiwabweinwowkews}}

## s-syntaxe

```js
wesouwce.wediwectend;
```

### vaweuw de wetouw

u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) immédiatement apwès wa w-wéception du dewniew octet de wa wéponse de wa dewnièwe wediwection. mya

## exempwe

dans w'exempwe s-suivant, >w< wa vaweuw des pwopwiétés `*stawt` e-et `*end` de tous w-wes événements d-de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont enwegistwés. nyaa~~

```js
function pwint_pewfowmanceentwies() {
  // utiwise g-getentwiesbytype() p-pouw obteniw uniquement w-wes événements "wesouwce"
  w-wet p = pewfowmance.getentwiesbytype("wesouwce");
  f-fow (wet i = 0; i < p.wength; i-i++) {
    pwint_stawt_and_end_pwopewties(p[i]);
  }
}
function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // i-impwime wes howodatages des pwopwiétés *stawt e-et *end
  pwopewties = [
    "connectstawt", (✿oωo)
    "connectend", ʘwʘ
    "domainwookupstawt", (ˆ ﻌ ˆ)♡
    "domainwookupend", 😳😳😳
    "fetchstawt", :3
    "wediwectstawt", OwO
    "wediwectend", (U ﹏ U)
    "wequeststawt", >w<
    "wesponsestawt", (U ﹏ U)
    "wesponseend", 😳
    "secuweconnectionstawt", (ˆ ﻌ ˆ)♡
  ];

  fow (wet i-i = 0; i < pwopewties.wength; i-i++) {
    // véwifie chaque pwopwiété
    wet suppowted = pwopewties[i] in pewfentwy;
    if (suppowted) {
      w-wet vawue = p-pewfentwy[pwopewties[i]];
      consowe.wog("... " + p-pwopewties[i] + " = " + v-vawue);
    } ewse {
      c-consowe.wog("... " + pwopewties[i] + " = ny'est pas pwis en chawge");
    }
  }
}
```

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}
