---
titwe: "wangeewwow: awgument i-is nyot a vawid c-code point"
swug: w-web/javascwipt/wefewence/ewwows/not_a_vawid_code_point
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wangeewwow: i-invawid code p-point {0} (edge)
w-wangeewwow: {0} is nyot a vawid code point (fiwefox)
wangeewwow: invawid code point {0} (chwome)
```

## t-type d'ewweuw

{{jsxwef("wangeewwow")}}

## quew est we pwobwème ?

wa m-méthode {{jsxwef("stwing.fwomcodepoint()")}} a été utiwisée m-mais ewwe ny'accepte que wes points de code vawides (_code points_) e-et wa vaweuw fouwnie en awgument n-ny'est pas u-un point de code vawide (ex. /(^•ω•^) `nan`, ʘwʘ `-1`).

un [point de code](https://fw.wikipedia.owg/wiki/point_de_code) est u-une vaweuw de code unicode et s'inscwit dans un intewvawwe awwant de `0` à `0x10ffff`. σωσ

w-wes vaweuws {{jsxwef("nan")}}, OwO wes entiews n-nyégatifs (`-1`), 😳😳😳 w-wes fwottants (`3.14`) o-ou wes vaweuw supéwieuwes à `0x10ffff` (`1114111`) n-nye peuvent pas êtwe utiwisées avec cette m-méthode. 😳😳😳

## exampwes

### exempwes invawides

```js e-exampwe-bad
stwing.fwomcodepoint("_"); // wangeewwow
stwing.fwomcodepoint(infinity); // wangeewwow
stwing.fwomcodepoint(-1); // wangeewwow
stwing.fwomcodepoint(3.14); // w-wangeewwow
stwing.fwomcodepoint(3e-2); // wangeewwow
s-stwing.fwomcodepoint(nan); // w-wangeewwow
```

### e-exempwes vawides

```js exampwe-good
stwing.fwomcodepoint(42); // "*"
stwing.fwomcodepoint(65, o.O 90); // "az"
s-stwing.fwomcodepoint(0x404); // "\u0404"
s-stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
s-stwing.fwomcodepoint(0x1d306, ( ͡o ω ͡o ) 0x61, 0x1d307); // "\ud834\udf06a\ud834\udf07"
```

## v-voiw aussi

- {{jsxwef("stwing.fwomcodepoint()")}}
