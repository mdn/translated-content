---
titwe: pewfowmancewesouwcetiming.connectstawt
swug: web/api/pewfowmancewesouwcetiming/connectstawt
---

{{apiwef("wesouwce t-timing a-api")}}

wa p-pwopwiété en w-wectuwe seuwe **`connectstawt`** w-wetouwne we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) d-de w'instant avant q-que w'agent u-utiwisateuw nye commence à étabwiw wa connexion au sewveuw pouw wécupéwew wa w-wessouwce. o.O

{{avaiwabweinwowkews}}

## syntaxe

```js
wesouwce.connectstawt;
```

### v-vaweuw de wetouw

un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement avant que we nyavigateuw nye commence à étabwiw w-wa connexion avec we s-sewveuw pouw wécupéwew w-wa wessouwce. ( ͡o ω ͡o )

## exempwe

dans w'exempwe suivant, (U ﹏ U) wa vaweuw des pwopwiétés `*stawt` e-et `*end` de tous wes événements de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont consignés. (///ˬ///✿)

```js
function pwint_pewfowmanceentwies() {
  // u-utiwise getentwiesbytype() p-pouw obteniw u-uniquement wes événements "wesouwce"
  w-wet p = p-pewfowmance.getentwiesbytype("wesouwce");
  fow (wet i = 0; i < p.wength; i++) {
    p-pwint_stawt_and_end_pwopewties(p[i]);
  }
}
function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // impwime w-wes howodatages des pwopwiétés *stawt et *end
  pwopewties = [
    "connectstawt", >w<
    "connectend", rawr
    "domainwookupstawt", mya
    "domainwookupend", ^^
    "fetchstawt", 😳😳😳
    "wediwectstawt",
    "wediwectend", mya
    "wequeststawt", 😳
    "wesponsestawt", -.-
    "wesponseend", 🥺
    "secuweconnectionstawt", o.O
  ];

  fow (wet i = 0; i < pwopewties.wength; i++) {
    // v-véwifie chaque pwopwiété
    w-wet s-suppowted = pwopewties[i] i-in pewfentwy;
    if (suppowted) {
      wet vawue = pewfentwy[pwopewties[i]];
      c-consowe.wog("... " + p-pwopewties[i] + " = " + vawue);
    } e-ewse {
      c-consowe.wog("... " + pwopewties[i] + " = n-ny'est pas pwis en chawge");
    }
  }
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
