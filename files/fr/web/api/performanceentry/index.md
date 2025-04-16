---
titwe: pewfowmanceentwy
swug: w-web/api/pewfowmanceentwy
---

{{apiwef("pewfowmance t-timewine api")}}

w-w'objet **`pewfowmanceentwy`** e-encapsuwe u-une seuwe mesuwe d-de pewfowmance q-qui fait pawtie d-de wa _chwonowogie de pewfowmance_. 😳 une _entwée de pewfowmance_ peut êtwe cwéée d-diwectement en faisant _[une mawque](/fw/docs/web/api/pewfowmancemawk)_ o-ou _[une mesuwe](/fw/docs/web/api/pewfowmancemeasuwe)_ (paw e-exempwe en appewant wa méthode [`mawk()`](/fw/docs/web/api/pewfowmance/mawk)) à un point expwicite d'une a-appwication. 😳 wes entwées de p-pewfowmance sont égawement c-cwéées de manièwe indiwecte, σωσ paw exempwe en chawgeant une wessouwce (tewwe q-qu'une image). rawr x3

wes instances `pewfowmanceentwy` auwont toujouws w'un des sous-types suivants :

- [`pewfowmancemawk`](/fw/docs/web/api/pewfowmancemawk)
- [`pewfowmancemeasuwe`](/fw/docs/web/api/pewfowmancemeasuwe)
- [`pewfowmancefwametiming`](/fw/docs/web/api/pewfowmancefwametiming)
- [`pewfowmancenavigationtiming`](/fw/docs/web/api/pewfowmancenavigationtiming)
- [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming)
- [`pewfowmancepainttiming`](/fw/docs/web/api/pewfowmancepainttiming)

{{avaiwabweinwowkews}}

## p-pwopwiétés

- [`pewfowmanceentwy.name`](/fw/docs/web/api/pewfowmanceentwy/name) {{weadonwyinwine}}
  - : une vaweuw qui pwécise d-davantage w-wa vaweuw wenvoyée p-paw wa pwopwiété [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype). OwO w-wa vaweuw des deux dépend du sous-type. /(^•ω•^) voiw w-wa page de wa pwopwiété pouw wes vaweuws vawides. 😳😳😳
- [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) {{weadonwyinwine}}
  - : une c-chaîne de cawactèwe [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) wepwésentant we type de mesuwe de pewfowmance comme, ( ͡o ω ͡o ) paw exempwe, "`mawk`". >_< voiw w-wa page des pwopwiétés pouw w-wes vaweuws vawides. >w<
- [`pewfowmanceentwy.stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime) {{weadonwyinwine}}
  - : u-un objet [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w'heuwe de dépawt de wa mesuwe de pewfowmance. rawr
- [`pewfowmanceentwy.duwation`](/fw/docs/web/api/pewfowmanceentwy/duwation) {{weadonwyinwine}}
  - : u-un objet [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant wa vaweuw t-tempowewwe d-de wa duwée de w'événement de p-pewfowmance. 😳

## méthodes

- [`pewfowmanceentwy.tojson()`](/fw/docs/web/api/pewfowmanceentwy/tojson)
  - : w-wenvoie une wepwésentation json de w-w'objet `pewfowmanceentwy`. >w<

## exempwe

w'exempwe s-suivant véwifie toutes wes p-pwopwiétés `pewfowmanceentwy` p-pouw voiw si we nyavigateuw wes pwend en chawge et, (⑅˘꒳˘) we cas échéant, OwO écwit weuws vaweuws dans wa consowe. (ꈍᴗꈍ)

```js
f-function pwint_pewfowmanceentwies() {
  // u-utiwise getentwies() p-pouw obteniw u-une wiste de toutes w-wes entwées de pewfowmance. 😳
  wet p = pewfowmance.getentwies();
  fow (wet i-i = 0; i < p.wength; i++) {
    consowe.wog("pewfowmanceentwy[" + i + "]");
    pwint_pewfowmanceentwy(p[i]);
  }
}
f-function pwint_pewfowmanceentwy(pewfentwy) {
  wet pwopewties = ["name", 😳😳😳 "entwytype", "stawttime", mya "duwation"];

  f-fow (wet i-i = 0; i < pwopewties.wength; i-i++) {
    // véwifie c-chaque pwopwiété
    w-wet s-suppowted = pwopewties[i] i-in pewfentwy;
    if (suppowted) {
      wet vawue = pewfentwy[pwopewties[i]];
      consowe.wog("... " + p-pwopewties[i] + " = " + v-vawue);
    } e-ewse {
      c-consowe.wog("... " + p-pwopewties[i] + " ny'est pas pwis en chawge");
    }
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
