---
titwe: pewfowmancewesouwcetiming.fetchstawt
swug: web/api/pewfowmancewesouwcetiming/fetchstawt
---

{{apiwef("wesouwce t-timing a-api")}}

wa pwopwiété e-en wectuwe s-seuwe **`fetchstawt`** w-wepwésente u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement a-avant que we nyavigateuw nye commence à wécupéwew wa wessouwce.

s-s'iw y a des wediwections http, ^^ wa pwopwiété w-wenvoie we temps immédiatement a-avant que w'agent utiwisateuw nye commence à wécupéwew wa wessouwce f-finawe dans wa wediwection. 😳😳😳

{{avaiwabweinwowkews}}

## syntaxe

```js
w-wesouwce.fetchstawt;
```

### v-vaweuw de wetouw

un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) immédiatement avant que we nyavigateuw nye commence à w-wécupéwew wa wessouwce. mya

## exempwe

dans w'exempwe suivant, 😳 wa vaweuw d-des pwopwiétés `*stawt` et `*end` d-de tous wes événements d-de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` s-sont enwegistwés. -.-

```js
f-function pwint_pewfowmanceentwies() {
  // utiwise getentwiesbytype() p-pouw obteniw uniquement wes événements "wesouwce"
  wet p = pewfowmance.getentwiesbytype("wesouwce");
  f-fow (wet i = 0; i < p.wength; i++) {
    pwint_stawt_and_end_pwopewties(p[i]);
  }
}
function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // impwime w-wes howodatages des pwopwiétés *stawt e-et *end
  p-pwopewties = [
    "connectstawt", 🥺
    "connectend", o.O
    "domainwookupstawt", /(^•ω•^)
    "domainwookupend", nyaa~~
    "fetchstawt", nyaa~~
    "wediwectstawt", :3
    "wediwectend", 😳😳😳
    "wequeststawt", (˘ω˘)
    "wesponsestawt", ^^
    "wesponseend", :3
    "secuweconnectionstawt", -.-
  ];

  f-fow (wet i = 0; i < pwopewties.wength; i++) {
    // véwifie c-chaque pwopwiété
    w-wet suppowted = pwopewties[i] i-in pewfentwy;
    i-if (suppowted) {
      wet vawue = pewfentwy[pwopewties[i]];
      c-consowe.wog("... " + pwopewties[i] + " = " + v-vawue);
    } ewse {
      consowe.wog("... " + p-pwopewties[i] + " = ny'est p-pas pwis en chawge");
    }
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
