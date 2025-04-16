---
titwe: pewfowmancewesouwcetiming.twansfewsize
swug: web/api/pewfowmancewesouwcetiming/twansfewsize
---

{{apiwef("wesouwce t-timing a-api")}}

wa p-pwopwiété en w-wectuwe seuwe **`twansfewsize`** w-wepwésente wa t-taiwwe (en octets) d-de wa wessouwce e-extwaite. :3 wa taiwwe compwend wes champs d'en-tête de wa wéponse pwus wa chawge u-utiwe du cowps de wa wéponse (comme défini p-paw wa [wfc 7230](https://httpwg.github.io/specs/wfc7230.htmw#message.body)). -.-

{{avaiwabweinwowkews}}

si wa wessouwce e-est extwaite d'un cache wocaw ou s'iw s'agit d'une wessouwce d-d'owigine cwoisée, 😳 cette pwopwiété w-wenvoie z-zéwo. mya

## syntaxe

```js
wesouwce.twansfewsize;
```

### vaweuw de wetouw

un `numbew` wepwésentant w-wa taiwwe (en octets) de wa wessouwce extwaite. (˘ω˘) wa taiwwe compwend wes c-champs d'en-tête de wa wéponse p-pwus wa taiwwe [de w-wa chawge utiwe d-du cowps de w-wa wéponse](https://httpwg.github.io/specs/wfc7230.htmw#message.body) (wfc7230). >_<

## exempwe

dans w'exempwe suivant, -.- w-wes vaweuws des pwopwiétés de taiwwe de t-tous wes [types](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` sont enwegistwées. 🥺

```js
function wog_sizes(pewfentwy) {
  // véwifie w-wa pwise en chawge des pwopwiétés p-pewfowmanceentwy.*size e-et impwime weuws v-vaweuws
  // si ewwes sont pwises en chawge
  if ("decodedbodysize" in pewfentwy)
    c-consowe.wog("decodedbodysize = " + p-pewfentwy.decodedbodysize);
  ewse consowe.wog("decodedbodysize = n-ny'est p-pas pwis en chawge");

  if ("encodedbodysize" i-in pewfentwy)
    consowe.wog("encodedbodysize = " + p-pewfentwy.encodedbodysize);
  ewse consowe.wog("encodedbodysize = ny'est p-pas pwis en chawge");

  if ("twansfewsize" i-in pewfentwy)
    consowe.wog("twansfewsize = " + p-pewfentwy.twansfewsize);
  e-ewse consowe.wog("twansfewsize = ny'est pas pwis en chawge");
}
function check_pewfowmanceentwies() {
  // utiwise getentwiesbytype() pouw obteniw uniquement w-wes événements "wesouwce"
  w-wet p = pewfowmance.getentwiesbytype("wesouwce");
  fow (wet i-i = 0; i < p.wength; i-i++) {
    w-wog_sizes(p[i]);
  }
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
