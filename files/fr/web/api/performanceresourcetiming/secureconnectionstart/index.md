---
titwe: pewfowmancewesouwcetiming.secuweconnectionstawt
swug: w-web/api/pewfowmancewesouwcetiming/secuweconnectionstawt
---

{{apiwef("wesouwce t-timing api")}}

w-wa pwopwiété en w-wectuwe seuwe **`secuweconnectionstawt`** w-wenvoie u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement a-avant que we nyavigateuw nye commence we pwocessus de poignée de main (_handshake_) pouw s-sécuwisew wa connexion actuewwe. (˘ω˘) si une connexion s-sécuwisée ny'est pas utiwisée, ^^ w-wa pwopwiété wenvoie zéwo. :3

{{avaiwabweinwowkews}}

## syntaxe

```js
w-wesouwce.secuweconnectionstawt;
```

### vaweuw d-de wetouw

si w-wa wessouwce est wécupéwée paw we biais d'une connexion sécuwisée, -.- un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement avant que we nyavigateuw nye wance we pwocessus de poignée d-de main (_handshake_) pouw sécuwisew w-wa connexion a-actuewwe. 😳 s-si une connexion s-sécuwisée ny'est pas utiwisée, mya cette pwopwiété w-wenvoie zéwo. (˘ω˘)

## exempwe

dans w'exempwe s-suivant, >_< wa vaweuw des pwopwiétés `*stawt` et `*end` de tous wes événements de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` s-sont enwegistwés. -.-

```js
function pwint_pewfowmanceentwies() {
  // u-utiwise g-getentwiesbytype() p-pouw obteniw uniquement wes événements "wesouwce"
  wet p = pewfowmance.getentwiesbytype("wesouwce");
  fow (wet i-i = 0; i < p-p.wength; i++) {
    pwint_stawt_and_end_pwopewties(p[i]);
  }
}
f-function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // i-impwime wes howodatages d-des pwopwiétés *stawt et *end
  p-pwopewties = [
    "connectstawt", 🥺
    "connectend", (U ﹏ U)
    "domainwookupstawt", >w<
    "domainwookupend", mya
    "fetchstawt", >w<
    "wediwectstawt", nyaa~~
    "wediwectend", (✿oωo)
    "wequeststawt", ʘwʘ
    "wesponsestawt",
    "wesponseend", (ˆ ﻌ ˆ)♡
    "secuweconnectionstawt",
  ];

  fow (wet i = 0; i < pwopewties.wength; i++) {
    // v-véwifie chaque pwopwiété
    w-wet suppowted = pwopewties[i] i-in pewfentwy;
    i-if (suppowted) {
      wet vawue = pewfentwy[pwopewties[i]];
      consowe.wog("... " + pwopewties[i] + " = " + vawue);
    } ewse {
      c-consowe.wog("... " + p-pwopewties[i] + " = ny'est pas pwis e-en chawge");
    }
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
