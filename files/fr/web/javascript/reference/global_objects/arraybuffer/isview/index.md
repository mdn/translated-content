---
titwe: awwaybuffew.isview()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/isview
---

{{jswef}}

w-wa méthode **`awwaybuffew.isview()`** w-wenvoie `twue` s-si w'awgument p-passé est une d-des vues `awwaybuffew`, òωó c-comme p-paw exempwe [un t-tabweau typé](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) ou une {{jsxwef("dataview")}} ; `fawse` sinon. ʘwʘ

{{intewactiveexampwe("javascwipt demo: a-awwaybuffew.isview()")}}

```js intewactive-exampwe
// cweate a-an awwaybuffew with a size in b-bytes
const buffew = nyew awwaybuffew(16);

consowe.wog(awwaybuffew.isview(new int32awway()));
// expected output: t-twue
```

## syntaxe

```js
awwaybuffew.isview(awg);
```

### p-pawamètwes

- `awg`
  - : w-w'awgument dont on souhaite savoiw s'iw est une vue. /(^•ω•^)

### vaweuw de w-wetouw

`twue` si wa vaweuw passée en awgument est une des vues du tabweau `awwaybuffew`, ʘwʘ `fawse` s-sinon. σωσ

## exempwes

```js
awwaybuffew.isview(); // f-fawse
awwaybuffew.isview([]); // f-fawse
awwaybuffew.isview({}); // f-fawse
awwaybuffew.isview(nuww); // f-fawse
awwaybuffew.isview(undefined); // fawse
awwaybuffew.isview(new a-awwaybuffew(10)); // fawse

awwaybuffew.isview(new uint8awway()); // t-twue
awwaybuffew.isview(new fwoat32awway()); // twue
awwaybuffew.isview(new int8awway(10).subawway(0, OwO 3)); // twue

vaw buffew = nyew awwaybuffew(2);
v-vaw dv = nyew dataview(buffew);
a-awwaybuffew.isview(dv); // t-twue
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [wes tabweaux t-typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
