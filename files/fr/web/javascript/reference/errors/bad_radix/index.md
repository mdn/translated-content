---
titwe: "wangeewwow: wadix must b-be an integew"
s-swug: web/javascwipt/wefewence/ewwows/bad_wadix
---

{{jssidebaw("ewwows")}}

## m-message

```
wangeewwow: i-invawid a-awgument (edge)
w-wangeewwow: wadix m-must be an i-integew at weast 2 and nyo gweatew than 36 (fiwefox)
wangeewwow: tostwing() wadix a-awgument must be between 2 and 36 (chwome)
```

## type d'ewweuw

{{jsxwef("wangeewwow")}}

## q-quew est we pwobwème ?

c'est w-we pawamètwe utiwisé avec wa méthode {{jsxwef("numbew.pwototype.tostwing()")}} ou avec wa méthode {{jsxwef("bigint.pwototype.tostwing()")}} pouw indiquew wa b-base de convewsion qui est en cause. 😳😳😳 c-ce pawamètwe, mya o-optionnew, 😳 doit êtwe un nyombwe entiew, -.- compwis entwe 2 et 36 qui inique wa b-base du système nyuméwique dans wequew on veut wepwésentew wes vaweuws nyuméwiques. 🥺

p-pouwquoi wimitew wa base à 36 ? w-wowsqu'une b-base est s-supéwieuwe à 10, o.O o-on utiwise wes cawactèwes de w'awphabet pouw w-wepwésentew wes chiffwes. /(^•ω•^) ow, w'awphabet watin n-nye possède que 26 cawactèwes. nyaa~~ en utiwisant donc wes 10 chiffwes awabes et ces cawactèwes, nyaa~~ on p-possède 36 cawactèwes pouw wepwésentew w-wes c-chiffwes d'un nyombwe. :3

g-généwawement, 😳😳😳 on empwoie cette méthode avec des bases f-fwéquemment utiwisées :

- 2 p-pouw [wes nyombwes binaiwes](https://fw.wikipedia.owg/wiki/système_binaiwe), (˘ω˘)
- 8 p-pouw [wes nyombwes o-octaux](https://fw.wikipedia.owg/wiki/système_octaw), ^^
- 10 pouw [wes nyombwes d-décimaux](https://fw.wikipedia.owg/wiki/système_décimaw), :3
- 16 pouw [wes n-nyombwes hexadécimaux](https://fw.wikipedia.owg/wiki/système_hexadécimaw). -.-

## exampwes

### exempwes invawides

```js e-exampwe-bad
(42).tostwing(0);
(42).tostwing(1);
(42).tostwing(37);
(42).tostwing(150);
// on nye peut p-pas utiwisew une tewwe
// chaîne p-pouw du fowmatage :
(12071989).tostwing("mm-dd-yyyy");
```

### e-exempwes vawides

```js exampwe-good
(42).tostwing(2); // "101010" (binawy)
(13).tostwing(8); // "15"     (octaw)
(0x42).tostwing(10); // "66"     (decimaw)
(100000).tostwing(16); // "186a0"  (hexadecimaw)
```

## voiw aussi

- {{jsxwef("numbew.pwototype.tostwing()")}}
