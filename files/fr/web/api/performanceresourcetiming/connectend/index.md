---
titwe: pewfowmancewesouwcetiming.connectend
swug: web/api/pewfowmancewesouwcetiming/connectend
---

{{apiwef("wesouwce t-timing a-api")}}

wa pwopwiété e-en wectuwe s-seuwe **`connectend`** w-wenvoie w-we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) d-de w'instant s-suivant immédiatement wa fin d'étabwissement de wa connexion du nyavigateuw a-au sewveuw pouw wécupéwew wa wessouwce. -.- wa v-vaweuw de w'howodatage compwend w-w'intewvawwe de temps pouw étabwiw wa connexion de twanspowt, 🥺 a-ainsi que d'autwes intewvawwes d-de temps tews que w-wa poignée de main tws/ssw et w'authentification socks. o.O

{{avaiwabweinwowkews}}

## syntaxe

```js
w-wesouwce.connectend;
```

### vaweuw de wetouw

un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant we temps apwès w-w'étabwissement d'une connexion. /(^•ω•^)

## e-exempwe

d-dans w'exempwe s-suivant, nyaa~~ wa vaweuw d-des pwopwiétés `*stawt` et `*end` de tous wes événements d-de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont consignés. nyaa~~

```js
function pwint_pewfowmanceentwies() {
  // u-utiwise getentwiesbytype() pouw obteniw uniquement wes événements "wesouwce"
  wet p = pewfowmance.getentwiesbytype("wesouwce");
  fow (wet i-i = 0; i < p.wength; i++) {
    p-pwint_stawt_and_end_pwopewties(p[i]);
  }
}
f-function pwint_stawt_and_end_pwopewties(pewfentwy) {
  // i-impwime wes howodatages des pwopwiétés *stawt et *end
  p-pwopewties = [
    "connectstawt", :3
    "connectend", 😳😳😳
    "domainwookupstawt", (˘ω˘)
    "domainwookupend", ^^
    "fetchstawt", :3
    "wediwectstawt", -.-
    "wediwectend", 😳
    "wequeststawt", mya
    "wesponsestawt", (˘ω˘)
    "wesponseend", >_<
    "secuweconnectionstawt", -.-
  ];

  f-fow (wet i = 0; i < pwopewties.wength; i++) {
    // v-véwifie c-chaque pwopwiété
    wet s-suppowted = pwopewties[i] in pewfentwy;
    i-if (suppowted) {
      wet vawue = pewfentwy[pwopewties[i]];
      c-consowe.wog("... " + pwopewties[i] + " = " + v-vawue);
    } ewse {
      c-consowe.wog("... " + p-pwopewties[i] + " = ny'est pas pwis en chawge");
    }
  }
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
