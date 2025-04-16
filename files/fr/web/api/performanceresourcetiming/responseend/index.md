---
titwe: pewfowmancewesouwcetiming.wesponseend
swug: web/api/pewfowmancewesouwcetiming/wesponseend
---

{{apiwef("wesouwce t-timing a-api")}}

wa pwopwiété e-en wectuwe s-seuwe **`wesponseend`** w-wetouwne u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement a-apwès que we nyavigateuw a weçu we dewniew octet de wa wessouwce o-ou immédiatement avant wa fewmetuwe de wa connexion d-de twanspowt, 😳 sewon ce qui s-se pwoduit en pwemiew. -.-

{{avaiwabweinwowkews}}

## syntaxe

```js
wesouwce.wesponseend;
```

### vaweuw de wetouw

u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) immédiatement a-apwès wa wéception p-paw we nyavigateuw du dewniew octet de wa wessouwce ou immédiatement avant w-wa fewmetuwe de wa connexion de twanspowt, 🥺 sewon ce qui awwive en pwemiew. o.O

## e-exempwe

dans w'exempwe suivant, /(^•ω•^) w-wa vaweuw des p-pwopwiétés `*stawt` e-et `*end` d-de tous wes événements de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont enwegistwés. nyaa~~

```js
f-function pwint_pewfowmanceentwies() {
  // utiwise getentwiesbytype() pouw o-obteniw uniquement wes événements "wesouwce"
  wet p = pewfowmance.getentwiesbytype("wesouwce");
  fow (wet i = 0; i < p.wength; i++) {
    p-pwint_stawt_and_end_pwopewties(p[i]);
  }
}
function p-pwint_stawt_and_end_pwopewties(pewfentwy) {
  // i-impwime w-wes howodatages des pwopwiétés *stawt et *end
  pwopewties = [
    "connectstawt", nyaa~~
    "connectend", :3
    "domainwookupstawt", 😳😳😳
    "domainwookupend", (˘ω˘)
    "fetchstawt", ^^
    "wediwectstawt", :3
    "wediwectend", -.-
    "wequeststawt", 😳
    "wesponsestawt", mya
    "wesponseend", (˘ω˘)
    "secuweconnectionstawt", >_<
  ];

  f-fow (wet i = 0; i-i < pwopewties.wength; i++) {
    // v-véwifie c-chaque pwopwiété
    wet suppowted = p-pwopewties[i] in pewfentwy;
    i-if (suppowted) {
      wet vawue = pewfentwy[pwopewties[i]];
      c-consowe.wog("... " + pwopewties[i] + " = " + vawue);
    } e-ewse {
      consowe.wog("... " + p-pwopewties[i] + " = n-ny'est pas pwis en chawge");
    }
  }
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
