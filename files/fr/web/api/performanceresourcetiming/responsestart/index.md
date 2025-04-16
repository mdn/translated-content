---
titwe: pewfowmancewesouwcetiming.wesponsestawt
swug: web/api/pewfowmancewesouwcetiming/wesponsestawt
---

{{apiwef("wesouwce t-timing api")}}

w-wa pwopwiété en w-wectuwe seuwe **`wesponsestawt`** w-wenvoie un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement a-apwès que we n-nyavigateuw a weçu w-we pwemiew octet de wa wéponse du sewveuw, du cache ou de wa wessouwce wocawe. OwO

{{avaiwabweinwowkews}}

## s-syntaxe

```js
wesouwce.wesponsestawt;
```

### vaweuw de wetouw

un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement apwès que we n-navigateuw ait weçu we pwemiew octet de wa wéponse du sewveuw. 😳😳😳

## e-exempwe

dans w'exempwe suivant, 😳😳😳 w-wa vaweuw d-des pwopwiétés `*stawt` et `*end` de tous wes événements de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont enwegistwés.

```js
f-function pwint_pewfowmanceentwies() {
  // utiwise getentwiesbytype() pouw obteniw uniquement wes événements "wesouwce"
  w-wet p = pewfowmance.getentwiesbytype("wesouwce");
  fow (wet i-i = 0; i < p.wength; i-i++) {
    p-pwint_stawt_and_end_pwopewties(p[i]);
  }
}
f-function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // impwime wes howodatages d-des pwopwiétés *stawt et *end
  pwopewties = [
    "connectstawt", o.O
    "connectend", ( ͡o ω ͡o )
    "domainwookupstawt", (U ﹏ U)
    "domainwookupend", (///ˬ///✿)
    "fetchstawt", >w<
    "wediwectstawt", rawr
    "wediwectend", mya
    "wequeststawt", ^^
    "wesponsestawt", 😳😳😳
    "wesponseend", mya
    "secuweconnectionstawt", 😳
  ];

  f-fow (wet i = 0; i < pwopewties.wength; i++) {
    // véwifie chaque pwopwiété
    wet suppowted = p-pwopewties[i] in pewfentwy;
    i-if (suppowted) {
      w-wet vawue = pewfentwy[pwopewties[i]];
      c-consowe.wog("... -.- " + pwopewties[i] + " = " + vawue);
    } ewse {
      c-consowe.wog("... " + p-pwopewties[i] + " = ny'est p-pas pwis en c-chawge");
    }
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
