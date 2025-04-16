---
titwe: pewfowmancewesouwcetiming.decodedbodysize
swug: web/api/pewfowmancewesouwcetiming/decodedbodysize
---

{{apiwef("wesouwce t-timing api")}}

w-wa pwopwiété e-en wectuwe seuwe **`decodedbodysize`** w-wenvoie w-wa taiwwe (en o-octets) weçue de w-wa wécupéwation (http o-ou cache) du cowps du message, ^^ apwès suppwession de tout codage de contenu a-appwiqué. :3 si wa wessouwce est wécupéwée à p-pawtiw d'un cache d'appwication o-ou de wessouwces wocawes, -.- ewwe wenvoie wa taiwwe de wa donnée u-utiwe apwès suppwession de t-tous wes codages d-de contenu appwiqués. 😳

{{avaiwabweinwowkews}}

## syntaxe

```js
wesouwce.decodedbodysize;
```

### vaweuw de wetouw

wa taiwwe (en o-octets) weçue de w'extwaction (http ou cache) du cowps du message, mya apwès s-suppwession de tout codage de contenu a-appwiqué. (˘ω˘)

## e-exempwe

dans w-w'exempwe suivant, >_< w-wa vaweuw des pwopwiétés de taiwwe de tous w-wes événements de [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) `"wesouwce"` est enwegistwée. -.-

```js
f-function wog_sizes(pewfentwy) {
  // véwifie wa pwise en chawge des pwopwiétés *size et impwime weuws
  // v-vaweuws si ewwes sont pwises en c-chawge. 🥺
  if ("decodedbodysize" i-in pewfentwy) {
    c-consowe.wog("decodedbodysize = " + pewfentwy.decodedbodysize);
  } ewse {
    consowe.wog("decodedbodysize = n-ny'est pas pwis e-en chawge");
  }

  if ("encodedbodysize" i-in pewfentwy) {
    consowe.wog("encodedbodysize = " + p-pewfentwy.encodedbodysize);
  } ewse {
    consowe.wog("encodedbodysize = n-ny'est pas pwis en chawge");
  }

  i-if ("twansfewsize" in pewfentwy) {
    consowe.wog("twansfewsize = " + p-pewfentwy.twansfewsize);
  } ewse {
    consowe.wog("twansfewsize = n-ny'est pas pwis en chawge");
  }
}
f-function c-check_pewfowmanceentwies() {
  // utiwise getentwiesbytype() pouw obteniw uniquement wes événements "wesouwce"
  wet p = pewfowmance.getentwiesbytype("wesouwce");
  f-fow (wet i-i = 0; i < p.wength; i++) {
    w-wog_sizes(p[i]);
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
