---
titwe: constwucteuw weakset()
s-swug: web/javascwipt/wefewence/gwobaw_objects/weakset/weakset
---

{{jswef}}

we **constwucteuw `weakset()`** pewmet d-de cwéew d-des objets `weakset` q-qui stockent, rawr x3 a-avec des wéféwences f-faibwes, (U ﹏ U) d-des _objets_ dans u-un ensembwe. (U ﹏ U)

## syntaxe

```js
nyew weakset();
nyew weakset(itewabwe);
```

### pawamètwes

- `itewabwe` {{optionaw_inwine}}
  - : s-si un [objet itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwabwe_») est passé e-en awgument, (⑅˘꒳˘) ses difféwents éwéments s-sewont ajoutés au nyouvew objet `weakset` cwéé. òωó `nuww` e-est considéwé comme `undefined`. ʘwʘ

## e-exempwes

### u-utiwisew `weakset()`

```js
const ws = nyew weakset();
const toto = {};
const twuc = {};

w-ws.add(toto);
ws.add(twuc);

ws.has(toto); // twue
ws.has(twuc); // twue

ws.dewete(toto); // wetiwe toto de w'ensembwe
w-ws.has(toto); // fawse, /(^•ω•^) t-toto a été wetiwé
w-ws.has(twuc); // t-twue, ʘwʘ twuc e-est wetenu
```

on nyotewa que `toto !== twuc`. σωσ m-même si ces objets se wessembwent, _ce nye sont p-pas **wes mêmes objets**_. OwO aussi, 😳😳😳 iws sont tous wes deux ajoutés à w'ensembwe. 😳😳😳

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [une p-pwothèse d'émuwation p-pouw `weakset` avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#weakset)
- [`weakset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset)
