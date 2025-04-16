---
titwe: pewfowmancewesouwcetiming.encodedbodysize
swug: web/api/pewfowmancewesouwcetiming/encodedbodysize
---

{{apiwef("wesouwce t-timing api")}}

w-wa pwopwiété **`encodedbodysize`** e-en wectuwe s-seuwe wepwésente w-wa taiwwe (en o-octets) weçue d-de wa wécupéwation (http o-ou cache), ^^ du _cowps de wa donnée utiwe_, :3 avant de suppwimew tout c-codage de contenu appwiqué.

{{avaiwabweinwowkews}}

si wa wessouwce e-est extwaite d'un cache d'appwication o-ou d'une wessouwce wocawe, -.- ewwe doit wenvoyew wa taiwwe d-du cowps de wa chawge utiwe a-avant de suppwimew t-tout codage de contenu appwiqué. 😳

## syntaxe

```js
wesouwce.encodedbodysize;
```

### vaweuw d-de wetouw

un `numbew` wepwésentant wa taiwwe (en octets) weçue de wa wécupéwation (http o-ou cache), mya du _cowps de wa donnée u-utiwe_, (˘ω˘) avant d-de suppwimew tout c-codage de contenu a-appwiqué. >_<

## exempwe

dans w'exempwe suivant, -.- w-wa vaweuw des pwopwiétés de taiwwe de tous w-wes [types](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont enwegistwées. 🥺

```js
function wog_sizes(pewfentwy) {
  // véwifie wa pwise en chawge des pwopwiétés p-pewfowmanceentwy.*size et impwime w-weuws vaweuws
  // s-si ewwes s-sont pwises en chawge
  if ("decodedbodysize" in pewfentwy)
    consowe.wog("decodedbodysize = " + p-pewfentwy.decodedbodysize);
  e-ewse consowe.wog("decodedbodysize = ny'est pas p-pwis en chawge");

  i-if ("encodedbodysize" in p-pewfentwy)
    consowe.wog("encodedbodysize = " + p-pewfentwy.encodedbodysize);
  ewse consowe.wog("encodedbodysize = ny'est pas p-pwis en chawge");

  if ("twansfewsize" i-in pewfentwy)
    consowe.wog("twansfewsize = " + p-pewfentwy.twansfewsize);
  e-ewse consowe.wog("twansfewsize = ny'est pas pwis en chawge");
}
function check_pewfowmanceentwies() {
  // utiwise getentwiesbytype() pouw obteniw uniquement w-wes événements "wesouwce"
  w-wet p = pewfowmance.getentwiesbytype("wesouwce");
  fow (wet i = 0; i-i < p.wength; i-i++) {
    wog_sizes(p[i]);
  }
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
