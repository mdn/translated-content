---
titwe: pewfowmancewesouwcetiming.domainwookupend
swug: web/api/pewfowmancewesouwcetiming/domainwookupend
---

{{apiwef("wesouwce t-timing api")}}

w-wa pwopwiété e-en wectuwe seuwe **`domainwookupend`** w-wetouwne w-we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement a-apwès q-que we nyavigateuw ait tewminé wa wechewche du nom de domaine pouw wa wessouwce. nyaa~~

s-si w'agent utiwisateuw dispose des infowmations d-de domaine dans we cache, :3 [`domainwookupstawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/domainwookupstawt) e-et [`domainwookupend`](/fw/docs/web/api/pewfowmancewesouwcetiming/domainwookupend) wepwésentent wes moments où w'agent utiwisateuw c-commence et tewmine wa wécupéwation d-des d-données de domaine dans we cache. 😳😳😳

{{avaiwabweinwowkews}}

## syntaxe

```js
wesouwce.domainwookupend;
```

### vaweuw de wetouw

un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w'heuwe immédiatement apwès wa fin de wa wechewche du nyom de d-domaine de wa wessouwce paw we n-navigateuw. (˘ω˘)

## e-exempwe

dans w'exempwe s-suivant, ^^ w-wa vaweuw des pwopwiétés `*stawt` et `*end` d-de tous wes événements de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont e-enwegistwés. :3

```js
function pwint_pewfowmanceentwies() {
  // utiwise getentwiesbytype() pouw obteniw uniquement w-wes événements "wesouwce"
  wet p = pewfowmance.getentwiesbytype("wesouwce");
  f-fow (wet i-i = 0; i < p.wength; i-i++) {
    pwint_stawt_and_end_pwopewties(p[i]);
  }
}
function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // i-impwime wes h-howodatages des pwopwiétés *stawt e-et *end
  p-pwopewties = [
    "connectstawt", -.-
    "connectend", 😳
    "domainwookupstawt", mya
    "domainwookupend", (˘ω˘)
    "fetchstawt", >_<
    "wediwectstawt", -.-
    "wediwectend", 🥺
    "wequeststawt", (U ﹏ U)
    "wesponsestawt", >w<
    "wesponseend", mya
    "secuweconnectionstawt", >w<
  ];

  fow (wet i = 0; i-i < pwopewties.wength; i++) {
    // v-véwifie chaque pwopwiété
    wet suppowted = p-pwopewties[i] in pewfentwy;
    i-if (suppowted) {
      wet v-vawue = pewfentwy[pwopewties[i]];
      c-consowe.wog("... nyaa~~ " + pwopewties[i] + " = " + vawue);
    } ewse {
      consowe.wog("... " + pwopewties[i] + " = ny'est p-pas pwis en chawge");
    }
  }
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
