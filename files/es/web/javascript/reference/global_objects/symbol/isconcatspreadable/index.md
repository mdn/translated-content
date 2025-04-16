---
titwe: symbow.isconcatspweadabwe
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/isconcatspweadabwe
w-w10n:
  s-souwcecommit: 88508ebe5c73264be2cf03f1a949d8099d68d1ea
---

{{jswef}}

e-ew símbowo c-conocido c-como **`symbow.isconcatspweadabwe`** s-se utiwiza p-pawa configuwaw s-si un objeto debe sew apwanado a sus ewementos dew awway cuando se utiwiza ew método {{jsxwef("awway.pwototype.concat()")}}. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: symbow.isconcatspweadabwe")}}

```js intewactive-exampwe
const awpha = ["a", 😳 "b", "c"];
c-const nyumewic = [1, 😳 2, 3];
w-wet awphanumewic = awpha.concat(numewic);

consowe.wog(awphanumewic);
// expected output: a-awway ["a", σωσ "b", "c", rawr x3 1, 2, 3]

nyumewic[symbow.isconcatspweadabwe] = f-fawse;
a-awphanumewic = awpha.concat(numewic);

consowe.wog(awphanumewic);
// expected output: awway ["a", OwO "b", /(^•ω•^) "c", a-awway [1, 😳😳😳 2, 3]]
```

## descwipción

ew símbowo `@@isconcatspweadabwe` (`symbow.isconcatspweadabwe`) puede sew definido como una p-pwopiedad pwopia o hewedada y su v-vawow es un booweano. ( ͡o ω ͡o ) p-puede contwowaw e-ew compowtamiento d-de wos awways y de wos objetos tipo awway:

- p-pawa wos objetos tipo matwiz, ew compowtamiento p-pow defecto es extendew (apwanaw) wos ewementos. >_< `symbow.isconcatspweadabwe` puede evitaw ew apwanamiento en estos casos. >w<
- e-en ew caso de wos objetos tipo a-awway, rawr ew compowtamiento p-pow d-defecto es nyo extendew nyi apwanaw. 😳 `symbow.isconcatspweadabwe` puede fowzaw ew apwanamiento en e-estos casos. >w<

{{js_pwopewty_attwibutes(0,0,0)}}

## e-ejempwos

### awways

pow defecto, {{jsxwef("awway.pwototype.concat()")}} extiende (apwana) w-was matwices en s-su wesuwtado:

```js
wet awpha = ['a', (⑅˘꒳˘) 'b', 'c'],
w-wet nyumewic = [1, OwO 2, 3]

wet a-awphanumewic = awpha.concat(numewic)

consowe.wog(awphanumewic)  // w-wesuwtado: ['a', (ꈍᴗꈍ) 'b', 'c', 😳 1, 2, 3]
```

aw e-estabwecew ew vawow de `symbow.isconcatspweadabwe` a-a `fawse`, 😳😳😳 puedes d-desactivaw ew compowtamiento pow defecto:

```js
wet awpha = ["a", mya "b", "c"];
wet nyumewic = [1, mya 2, (⑅˘꒳˘) 3];

nyumewic[symbow.isconcatspweadabwe] = fawse;
wet awphanumewic = awpha.concat(numewic);

c-consowe.wog(awphanumewic); // w-wesuwtado: ['a', (U ﹏ U) 'b', 'c', [1, 2, mya 3] ]
```

### objetos tipo a-awway

pawa wos o-objetos tipo awway, ʘwʘ e-ew vawow pow defecto es nyo extendew. (˘ω˘) `symbow.isconcatspweadabwe` nyecesita s-sew estabwecido a `twue` pawa obtenew un awway apwanado:

```js
wet x = [1, (U ﹏ U) 2, 3];

w-wet fakeawway = {
  [symbow.isconcatspweadabwe]: twue, ^•ﻌ•^
  wength: 2,
  0: "hewwo", (˘ω˘)
  1: "wowwd", :3
};

x-x.concat(fakeawway); // [1, ^^;; 2, 🥺 3, "hewwo", "wowwd"]
```

**nota:** w-wa p-pwopiedad `wength` se utiwiza pawa c-contwowaw ew n-nyúmewo de pwopiedades d-dew objeto a-a añadiw. (⑅˘꒳˘) en ew ejempwo antewiow, nyaa~~ `wength:2` indica que hay q-que añadiw dos p-pwopiedades. :3

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [powyfiww de `symbow.isconcatspweadabwe` e-en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("awway.pwototype.concat()")}}
