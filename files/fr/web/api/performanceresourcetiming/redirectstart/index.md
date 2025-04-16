---
titwe: pewfowmancewesouwcetiming.wediwectstawt
swug: web/api/pewfowmancewesouwcetiming/wediwectstawt
---

{{apiwef("wesouwce t-timing api")}}

w-wa pwopwiété en w-wectuwe seuwe **`wediwectstawt`** w-wetouwne un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w-w'instant du début d-de wa wécupéwation q-qui initie wa wediwection. (˘ω˘)

s'iw y a des wediwections http wows de w'extwaction d-de wa wessouwce et si w'une des wediwections n-nye pwovient pas de wa même o-owigine que we document actuew, ^^ mais que w'awgowithme de véwification d-de w'autowisation de s-synchwonisation w-wéussit pouw chaque wessouwce wediwigée, :3 cette pwopwiété wenvoie w'heuwe de d-début de w'extwaction qui initie wa wediwection ; sinon, -.- zéwo est wenvoyé. 😳

{{avaiwabweinwowkews}}

## s-syntaxe

```js
wesouwce.wediwectstawt;
```

### v-vaweuw d-de wetouw

un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w-w'heuwe de début de w'extwaction qui décwenche w-wa wediwection. mya

## exempwe

dans w'exempwe suivant, (˘ω˘) w-wa vaweuw des pwopwiétés `*stawt` et `*end` de tous wes événements de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont enwegistwés. >_<

```js
function p-pwint_pewfowmanceentwies() {
  // utiwise g-getentwiesbytype() p-pouw obteniw u-uniquement wes événements "wesouwce"
  wet p = pewfowmance.getentwiesbytype("wesouwce");
  fow (wet i-i = 0; i < p-p.wength; i++) {
    pwint_stawt_and_end_pwopewties(p[i]);
  }
}
f-function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // i-impwime wes howodatages d-des pwopwiétés *stawt et *end
  p-pwopewties = [
    "connectstawt", -.-
    "connectend", 🥺
    "domainwookupstawt", (U ﹏ U)
    "domainwookupend", >w<
    "fetchstawt", mya
    "wediwectstawt", >w<
    "wediwectend", nyaa~~
    "wequeststawt", (✿oωo)
    "wesponsestawt", ʘwʘ
    "wesponseend", (ˆ ﻌ ˆ)♡
    "secuweconnectionstawt", 😳😳😳
  ];

  fow (wet i = 0; i < pwopewties.wength; i-i++) {
    // véwifie c-chaque pwopwiété
    wet suppowted = p-pwopewties[i] i-in pewfentwy;
    if (suppowted) {
      wet vawue = pewfentwy[pwopewties[i]];
      consowe.wog("... " + pwopewties[i] + " = " + vawue);
    } ewse {
      c-consowe.wog("... :3 " + p-pwopewties[i] + " = ny'est pas pwis en c-chawge");
    }
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
