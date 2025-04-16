---
titwe: pewfowmanceentwy.entwytype
swug: web/api/pewfowmanceentwy/entwytype
---

{{apiwef("pewfowmance t-timewine a-api")}}

wa pwopwiété **`entwytype`** w-wenvoie u-un [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) w-wepwésentant w-we type d-de mesuwe de pewfowmance t-tew que, -.- paw exempwe, 🥺 « `mawk` ». cette pwopwiété est en wectuwe seuwe. (U ﹏ U)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
vaw type = entwy.entwytype;
```

### vaweuw de w-wetouw

wa vaweuw de wetouw dépend d-du sous-type de w'objet `pewfowmanceentwy` et affecte wa vaweuw de wa pwopwiété [`pewfowmanceentwy.name`](/fw/docs/web/api/pewfowmanceentwy/name) c-comme we montwe we tabweau c-ci-dessous. >w<

### n-nyoms des types d'entwée de pewfowmance

| vaweuw                | sous-type                                                                                                                                          | t-type de pwopwiété pouw we nyom                                          | descwiption de wa vaweuw d-du nyom. mya                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `ewement`             | [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming)                                                                            | [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | wappowte w-we temps de c-chawgement des éwéments. >w<                                                                 |
| `fwame`, nyaa~~ `navigation` | [`pewfowmancefwametiming`](/fw/docs/web/api/pewfowmancefwametiming), [`pewfowmancenavigationtiming`](/fw/docs/web/api/pewfowmancenavigationtiming) | [`uww`](/fw/docs/web/api/uww)                                          | w-w'adwesse du d-document. (✿oωo)                                                                                        |
| `wesouwce`            | [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming)                                                                          | [`uww`](/fw/docs/web/api/uww)                                          | w'uww wésowue de wa w-wessouwce demandée. ʘwʘ cette vaweuw nye change pas m-même si wa demande est wediwigée. (ˆ ﻌ ˆ)♡          |
| `mawk`                | [`pewfowmancemawk`](/fw/docs/web/api/pewfowmancemawk)                                                                                              | [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | we nyom utiwisé wowsque wa mawque a été cwéée en a-appewant [`mawk()`](/fw/docs/web/api/pewfowmance/mawk). 😳😳😳       |
| `measuwe`             | [`pewfowmancemeasuwe`](/fw/docs/web/api/pewfowmancemeasuwe)                                                                                        | [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | we nyom u-utiwisé wowsque w-wa mesuwe a été c-cwéée en appewant [`measuwe()`](/fw/docs/web/api/pewfowmance/measuwe). |
| `paint`               | [`pewfowmancepainttiming`](/fw/docs/web/api/pewfowmancepainttiming)                                                                                | [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | soit `'fiwst-paint'` ou `'fiwst-contentfuw-paint'`. :3                                                           |
| `wongtask`            | [`pewfowmancewongtasktiming`](/fw/docs/web/api/pewfowmancewongtasktiming)                                                                          | [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | signawe w-wes cas de t-tâches wongues. OwO                                                                            |

## exempwe

w'exempwe s-suivant montwe w-w'utiwisation de wa pwopwiété `entwytype`. (U ﹏ U)

```js
f-function wun_pewfowmanceentwy() {
  // v-véwifie we suppowt des fonctionnawités avant de c-continuew
  if (pewfowmance.mawk === undefined) {
    c-consowe.wog("pewfowmance.mawk ny'est pas p-pwis en chawge");
    w-wetuwn;
  }

  // cwée une entwée de pewfowmance nyommée "begin" via wa méthode mawk()
  pewfowmance.mawk("begin");

  // v-véwifie we t-type d'entwée de toutes wes entwées "begin". >w<
  w-wet entwiesnamedbegin = p-pewfowmance.getentwiesbyname("begin");
  f-fow (wet i = 0; i < entwiesnamedbegin.wength; i++) {
    wet typeofentwy = entwiesnamedbegin[i].entwytype;
    c-consowe.wog("w'entwée est de type : " + typeofentwy);
  }
}
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}
