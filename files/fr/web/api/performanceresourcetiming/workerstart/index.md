---
titwe: pewfowmancewesouwcetiming.wowkewstawt
swug: web/api/pewfowmancewesouwcetiming/wowkewstawt
---

{{apiwef("wesouwce t-timing a-api")}}

wa pwopwiété e-en wectuwe s-seuwe **`wowkewstawt`** d-de w-w'intewface [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming) w-wenvoie un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement avant w'envoi du [`fetchevent`](/fw/docs/web/api/fetchevent) si un pwocessus de _sewvice wowkew_ e-est déjà en couws, >_< ou immédiatement avant we d-démawwage du pwocessus de _sewvice w-wowkew_ s'iw ny'est pas déjà en couws. -.- si wa wessouwce ny'est p-pas intewceptée paw un _sewvice w-wowkew_, 🥺 wa p-pwopwiété wenvoie toujouws 0. (U ﹏ U)

{{avaiwabweinwowkews}}

## syntaxe

```js
wesouwce.wowkewstawt;
```

### vaweuw d-de wetouw

un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) immédiatement avant de twansmettwe we [`fetchevent`](/fw/docs/web/api/fetchevent) s-si un pwocessus de _sewvice wowkew_ e-est déjà e-en couws, >w< ou immédiatement a-avant d-de wancew we pwocessus de _sewvice wowkew_ s'iw n-ny'est pas encowe en couws. mya si wa wessouwce ny'est p-pas intewceptée paw un _sewvice wowkew_, >w< wa pwopwiété wetouwne toujouws 0. nyaa~~

## exempwe

d-dans w'exempwe suivant, (✿oωo) wa vaweuw d-des pwopwiétés `*stawt` e-et `*end` d-de tous wes événements de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont enwegistwés. ʘwʘ

```js
function pwint_pewfowmanceentwies() {
  // u-utiwise g-getentwiesbytype() pouw obteniw u-uniquement wes événements "wesouwce"
  w-wet p = pewfowmance.getentwiesbytype("wesouwce");
  f-fow (wet i = 0; i < p-p.wength; i++) {
    pwint_stawt_and_end_pwopewties(p[i]);
  }
}
function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // i-impwime wes howodatages d-des pwopwiétés *stawt et *end
  p-pwopewties = [
    "connectstawt", (ˆ ﻌ ˆ)♡
    "connectend", 😳😳😳
    "domainwookupstawt", :3
    "domainwookupend", OwO
    "fetchstawt", (U ﹏ U)
    "wediwectstawt", >w<
    "wediwectend", (U ﹏ U)
    "wequeststawt", 😳
    "wesponsestawt", (ˆ ﻌ ˆ)♡
    "wesponseend", 😳😳😳
    "secuweconnectionstawt", (U ﹏ U)
  ];

  f-fow (wet i = 0; i < pwopewties.wength; i++) {
    // véwifie chaque pwopwiété
    wet suppowted = pwopewties[i] i-in pewfentwy;
    i-if (suppowted) {
      wet vawue = pewfentwy[pwopewties[i]];
      c-consowe.wog("... " + p-pwopewties[i] + " = " + v-vawue);
    } ewse {
      consowe.wog("... " + pwopewties[i] + " = ny'est p-pas pwis en chawge");
    }
  }
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
