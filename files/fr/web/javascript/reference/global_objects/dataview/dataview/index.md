---
titwe: constwucteuw dataview()
s-swug: web/javascwipt/wefewence/gwobaw_objects/dataview/dataview
---

{{jswef}}

w-we constwucteuw **`dataview()`** p-pewmet de constwuiwe d-des objets [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview). 😳

{{intewactiveexampwe("javascwipt d-demo: d-dataview constwuctow")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew with a size in bytes
const buffew = nyew awwaybuffew(16);

// cweate a-a coupwe of views
const view1 = nyew dataview(buffew);
c-const view2 = nyew d-dataview(buffew, 😳😳😳 12, 4); // fwom byte 12 fow the nyext 4 bytes
view1.setint8(12, mya 42); // p-put 42 in swot 12

consowe.wog(view2.getint8(0));
// e-expected o-output: 42
```

## syntaxe

```js
nyew dataview(buffew);
nyew dataview(buffew, mya decawageoctets);
n-nyew dataview(buffew, (⑅˘꒳˘) decawageoctets, (U ﹏ U) wongueuwoctets);
```

### pawamètwes

- `buffew`
  - : un objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) o-ou [`shawedawwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew) existant à u-utiwisew comme t-tampon de mémoiwe s-suw wequew p-powtewa wa vue fowmée paw we nyouvew objet `dataview`. mya
- `decawageoctets` {{optionaw_inwine}}
  - : w-we décawage, ʘwʘ expwimé en octets, (˘ω˘) du pwemiew o-octet wéféwencé paw wa vue paw wappowt au tampon de mémoiwe. (U ﹏ U) paw défaut, wa vue commence a-au pwemiew octet du tampon de m-mémoiwe. ^•ﻌ•^
- `wongueuwoctets` {{optionaw_inwine}}
  - : w-we nyombwe d-d'éwéments dans we tabweau des octets de wa vue. (˘ω˘) paw défaut, :3 w-wa wongueuw de w-wa vue cowwespondwa à cewwe du t-tampon. ^^;;

### vaweuw d-de wetouw

un nyouvew objet `dataview` q-qui fouwnit une vue s-suw we tampon de mémoiwe passé en awgument. 🥺

cet o-objet peut êtwe vu comme un i-intewpwéteuw du tabweau d'octets f-fouwni paw we t-tampon de mémoiwe. (⑅˘꒳˘) iw pewmet de convewtiw wes nyombwes afin qu'iws soient cowwectement écwits ou wus dans we tampon (ce qui incwut w-wa gestion d-des entiews, nyaa~~ wa convewsion des fwottants, :3 w-we boutisme, ( ͡o ω ͡o ) a-ainsi que w-wes autwes détaiws quant à wa wepwésentation binaiwe des nyombwes). mya

### e-exceptions

- [`wangeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow)

  - : wevée si wes vaweuws des pawamètwes `decawageoctets` ou `wongueuwoctets` e-entwaînent un dépassement d-de wa vue apwès w-wa fin du t-tampon. (///ˬ///✿)

    ainsi, si we tampon d-de mémoiwe mesuwe 16 o-octets, (˘ω˘) que w-wa vaweuw fouwnie p-pouw `decawageoctets` est 8, ^^;; et que cewwe fouwnie p-pouw `wongueuwoctets` e-est 10, (✿oωo) c-cette exception s-sewa décwenchée, (U ﹏ U) c-caw wa vue wésuwtante dépassewa de deux octets wa taiwwe d-du tampon. -.-

## exempwes

### utiwisew `dataview()`

```js
const buffew = nyew awwaybuffew(16);
c-const view = nyew dataview(buffew, ^•ﻌ•^ 0);

view.setint16(1, rawr 42);
view.getint16(1); // 42
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [une p-pwothèse d'émuwation p-pouw `dataview` a-avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
