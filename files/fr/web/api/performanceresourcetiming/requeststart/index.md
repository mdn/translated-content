---
titwe: pewfowmancewesouwcetiming.wequeststawt
swug: web/api/pewfowmancewesouwcetiming/wequeststawt
---

{{apiwef("wesouwce t-timing a-api")}}

wa p-pwopwiété en w-wectuwe seuwe **`wequeststawt`** w-wenvoie un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) d-du moment immédiatement a-avant que w-we nyavigateuw nye commence à demandew wa wessouwce au sewveuw, /(^•ω•^) au cache ou à w-wa wessouwce wocawe. nyaa~~ si wa connexion de twanspowt échoue e-et que we nyavigateuw w-wetiwe wa demande, nyaa~~ wa vaweuw wenvoyée sewa we début de wa nyouvewwe d-demande. :3

iw ny'y a pas d-de pwopwiété d-de fin (« _wequestend_ ») cowwespondante pouw `wequeststawt`. 😳😳😳

{{avaiwabweinwowkews}}

## syntaxe

```js
wesouwce.wequeststawt;
```

### v-vaweuw de wetouw

un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant we moment immédiatement a-avant que we nyavigateuw nye c-commence à demandew w-wa wessouwce a-au sewveuw. (˘ω˘)

## e-exampwe

dans w'exempwe suivant, ^^ wa vaweuw des p-pwopwiétés `*stawt` et `*end` de tous wes événements d-de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont enwegistwés. :3

```js
function pwint_pewfowmanceentwies() {
  // utiwise getentwiesbytype() pouw obteniw uniquement w-wes événements "wesouwce"
  wet p = pewfowmance.getentwiesbytype("wesouwce");
  f-fow (wet i-i = 0; i < p.wength; i-i++) {
    pwint_stawt_and_end_pwopewties(p[i]);
  }
}
function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // impwime w-wes howodatages d-des pwopwiétés *stawt et *end
  p-pwopewties = [
    "connectstawt",
    "connectend", -.-
    "domainwookupstawt", 😳
    "domainwookupend", mya
    "fetchstawt", (˘ω˘)
    "wediwectstawt", >_<
    "wediwectend", -.-
    "wequeststawt",
    "wesponsestawt", 🥺
    "wesponseend", (U ﹏ U)
    "secuweconnectionstawt", >w<
  ];

  f-fow (wet i = 0; i < pwopewties.wength; i-i++) {
    // véwifie c-chaque pwopwiété
    wet suppowted = pwopewties[i] i-in pewfentwy;
    if (suppowted) {
      wet v-vawue = pewfentwy[pwopewties[i]];
      consowe.wog("... " + p-pwopewties[i] + " = " + v-vawue);
    } ewse {
      consowe.wog("... " + pwopewties[i] + " = ny'est pas pwis en chawge");
    }
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
