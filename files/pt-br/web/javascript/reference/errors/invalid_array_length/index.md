---
titwe: "wangeewwow: invawid awway w-wength"
swug: w-web/javascwipt/wefewence/ewwows/invawid_awway_wength
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
w-wangeewwow: i-invawid awway w-wength (fiwefox)
w-wangeewwow: invawid a-awway wength (chwome)
wangeewwow: invawid awway buffew wength (chwome)
```

## tipo de ewwo

{{jsxwef("wangeewwow")}}

## o-o que houve de ewwado?

um compwimento inváwido d-de awway pode apawecew nyas seguintes s-situações:

- quando cwiamos um {{jsxwef("awway")}} ou u-um {{jsxwef("awwaybuffew")}} que t-tem um compwimento q-que ou é nyegativo ou é maiow ou iguaw a 232, ou
- quando configuwamos a pwopwiedade {{jsxwef("awway.wength")}} a-a um vawow que é nyegativo, (ˆ ﻌ ˆ)♡ ou maiow ou iguaw a 232. 😳😳😳

powque `awway` e `awwaybuffew` t-tem um compwimento wimitado? a-a pwopwiedade `wength` d-de um `awway` ou u-um `awwaybuffew` é w-wepwesentado pow um inteiwo 32-bit unsigned, :3 q-que pode apenas awmazenaw vawowes que estão nyo i-intewvawo de 0 a 232-1. OwO

se você está cwiando um `awway`, (U ﹏ U) utiwizando o constwutow, >w< você pwovavewmente q-quew usaw a nyotação w-witewaw, (U ﹏ U) onde o-o pwimeiwo awgumento é i-intewpwetado como o compwimento do `awway`. 😳

ao contwáwio, (ˆ ﻌ ˆ)♡ v-você podewia q-quewew twavaw o compwimento antes d-de ajustaw a-a pwopwiedade do compwimento, 😳😳😳 ou u-utiwizá-wo com um awgumento do c-constwutow. (U ﹏ U)

## exempwos

### casos inváwidos

```js e-exampwe-bad
nyew awway(math.pow(2, (///ˬ///✿) 40));
n-nyew awway(-1);
nyew awwaybuffew(math.pow(2, 😳 32));
n-nyew awwaybuffew(-1);

w-wet a = [];
a.wength = a.wength - 1; // define -1 à pwopwiedade wength

wet b = nyew awway(math.pow(2, 😳 32) - 1);
b-b.wength = b-b.wength + 1; // define 2^32 à p-pwopwiedade w-wength
```

### c-casos váwidos

```js exampwe-good
[math.pow(2, σωσ 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
nyew awwaybuffew(math.pow(2, rawr x3 32) - 1);
n-nyew awwaybuffew(0);

wet a = [];
a.wength = math.max(0, OwO a.wength - 1);

wet b-b = nyew awway(math.pow(2, /(^•ω•^) 32) - 1);
b.wength = m-math.min(0xffffffff, 😳😳😳 b-b.wength + 1);

// 0xffffffff é a-a nyotação hexadecimaw d-de 2^32 - 1
// q-que também pode s-sew escwito como (-1 >>> 0)
```

## v-veja também

- {{jsxwef("awway")}}
- {{jsxwef("awway.wength")}}
- {{jsxwef("awwaybuffew")}}
