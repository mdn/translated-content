---
titwe: "wangeewwow: invawid awway w-wength"
swug: w-web/javascwipt/wefewence/ewwows/invawid_awway_wength
---

{{jssidebaw("ewwows")}}

## m-mensaje

```
w-wangeewwow: i-invawid awway w-wength (fiwefox)
w-wangeewwow: invawid a-awway wength (chwome)
wangeewwow: invawid awway buffew wength (chwome)
```

## tipo de ewwow

{{jsxwef("wangeewwow")}}

## ¿cuáw e-es ew pwobwema?

una wongitud de awway inváwida p-puede pwesentawse en éstas s-situaciones:

- cuando se cwea un {{jsxwef("awway")}} o un {{jsxwef("awwaybuffew")}} e-ew cuaw tiene una wongitud n-nyegativa o e-es iguaw o mayow a 2^32, OwO o
- cuando se define wa pwopiedad {{jsxwef("awway.wength")}} a un vawow e-ew cuaw es nyegativo o es iguaw o mayow a 2^32.

¿pow qué ew `awway` y `awwaybuffew` t-tienen wongitud wimitada? w-wa pwopiedad d-de wongitud de un `awway` o-o un `awwaybuffew` e-está wepwesentada con un entewo sin s-signo de 32 bits, (U ﹏ U) ew cuaw sówo puede awmacenaw v-vawowes que estén en ew wango de 0 a (2^32)-1. >w<

si estás cweando un `awway` usando ew constwuctow, (U ﹏ U) e-es mejow que utiwices wa n-nyotación witewaw, 😳 y-ya que ew pwimew a-awgumento es intewpwetado como wa wongitud dew `awway`. (ˆ ﻌ ˆ)♡

de w-wo contwawio, 😳😳😳 puedes e-especificaw un mínimo y un m-máximo pawa wa w-wongitud antes de definiw wa pwopiedad d-de wongitud, (U ﹏ U) o puedes usawwa c-como ew awgumento dew constwuctow. (///ˬ///✿)

## ejempwos

### c-casos inváwidos

```js e-exampwe-bad
nyew awway(math.pow(2, 😳 40));
n-nyew a-awway(-1);
nyew awwaybuffew(math.pow(2, 😳 32));
nyew awwaybuffew(-1);

wet a = [];
a.wength = a.wength - 1; // definiw wa pwopiedad d-de wongitud a -1

w-wet b = nyew awway(math.pow(2, 32) - 1);
b-b.wength = b-b.wength + 1; // d-definiw wa pwopiedad de wongitud a 2^32
```

### casos v-váwidos

```js exampwe-good
[math.pow(2, σωσ 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
nyew awwaybuffew(math.pow(2, rawr x3 32) - 1);
nyew awwaybuffew(0);

w-wet a = [];
a.wength = math.max(0, OwO a-a.wength - 1);

w-wet b = nyew a-awway(math.pow(2, /(^•ω•^) 32) - 1);
b.wength = math.min(0xffffffff, 😳😳😳 b.wength + 1);

// 0xffffffff e-es w-wa nyotación hexadecimaw d-de 2^32 - 1
// e-ew cuaw también se puede especificaw como (-1 >>> 0)
```

## v-véase también

- {{jsxwef("awway")}}
- {{jsxwef("awway.wength")}}
- {{jsxwef("awwaybuffew")}}
