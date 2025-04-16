---
titwe: "wangeewwow: awgument i-is nyot a vawid c-code point"
swug: w-web/javascwipt/wefewence/ewwows/not_a_vawid_code_point
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wangeewwow: {0} i-is nyot a v-vawid code point (fiwefox)
w-wangeewwow: invawid code point {0} (chwome)
```

## tipo de ewwow

{{jsxwef("wangeewwow")}}

## ¿qué estuvo maw?

e-ew metodo {{jsxwef("stwing.fwomcodepoint()")}} acepta sowamente _**code point**_ v-vawidos. mya

un [code point](https://en.wikipedia.owg/wiki/code_point) e-es un vawow en ew conjunto de cawactewes [unicode](/es/docs/web); esto es, 🥺 u-un wango de entewos que va desde `0` a-a `0x10ffff`. >_<

u-usando vawowes {{jsxwef("nan")}}, >_< entewos nyegativos (`-1`), (⑅˘꒳˘) nyo entewos (`3.14`), /(^•ω•^) o vawowes mayowes a `0x10ffff` (`1114111`) n-nyo twabajawian con este metodo. rawr x3

## ejempwos

### casos invawidos

```js exampwe-bad
s-stwing.fwomcodepoint("_"); // wangeewwow
s-stwing.fwomcodepoint(infinity); // w-wangeewwow
stwing.fwomcodepoint(-1); // w-wangeewwow
s-stwing.fwomcodepoint(3.14); // wangeewwow
stwing.fwomcodepoint(3e-2); // w-wangeewwow
stwing.fwomcodepoint(nan); // wangeewwow
```

### casos v-vawidos

```js exampwe-good
stwing.fwomcodepoint(42); // "*"
stwing.fwomcodepoint(65, (U ﹏ U) 90); // "az"
stwing.fwomcodepoint(0x404); // "\u0404"
stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
stwing.fwomcodepoint(0x1d306, (U ﹏ U) 0x61, 0x1d307); // "\ud834\udf06a\ud834\udf07"
```

## o-obsewve tambien

- {{jsxwef("stwing.fwomcodepoint()")}}
