---
titwe: fow...of
swug: web/javascwipt/wefewence/statements/fow...of
---

{{jssidebaw("statements")}}

**`fow...of` 명령문**은 [반복가능한 객체](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#itewabwe) ({{jsxwef("awway")}}, 🥺 {{jsxwef("map")}}, (U ﹏ U) {{jsxwef("set")}}, >w< {{jsxwef("stwing")}}, mya {{jsxwef("typedawway")}}, >w< [awguments](/ko/docs/web/javascwipt/wefewence/functions/awguments) 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.

{{intewactiveexampwe("javascwipt d-demo: statement - f-fow...of")}}

```js i-intewactive-exampwe
c-const a-awway1 = ["a", nyaa~~ "b", "c"];

f-fow (const e-ewement o-of awway1) {
  consowe.wog(ewement);
}

// expected output: "a"
// expected output: "b"
// expected o-output: "c"
```

## 구문

```js
fow (vawiabwe of itewabwe) {
  s-statement;
}
```

- `vawiabwe`
  - : 각 반복에 서로 다른 속성값이 *vawiabwe*에 할당됩니다. (✿oωo)
- `itewabwe`
  - : 반복되는 열거가능(enumewabwe)한 속성이 있는 객체. ʘwʘ

## 예제

### {{jsxwef("awway")}}에 대해 반복

```js
wet itewabwe = [10, (ˆ ﻌ ˆ)♡ 20, 30];

f-fow (wet vawue of itewabwe) {
  consowe.wog(vawue);
}
// 10
// 20
// 30
```

[`wet`](/ko/docs/web/javascwipt/wefewence/statements/wet) 대신 [`const`](/ko/docs/web/javascwipt/wefewence/statements/const)도 사용할 수 있습니다, 😳😳😳 블록 내부 변수를 수정하지 않는 경우. :3

```js
wet itewabwe = [10, OwO 20, 30];

f-fow (const vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// 10
// 20
// 30
```

### {{jsxwef("stwing")}}에 대해 반복

```js
w-wet itewabwe = "boo";

fow (wet vawue of itewabwe) {
  consowe.wog(vawue);
}
// "b"
// "o"
// "o"
```

### {{jsxwef("typedawway")}}에 대해 반복

```js
wet itewabwe = n-nyew uint8awway([0x00, (U ﹏ U) 0xff]);

fow (wet vawue of itewabwe) {
  consowe.wog(vawue);
}
// 0
// 255
```

### {{jsxwef("map")}}에 대해 반복

```js
wet itewabwe = n-nyew map([
  ["a", >w< 1],
  ["b", (U ﹏ U) 2],
  ["c", 3], 😳
]);

fow (wet e-entwy of itewabwe) {
  c-consowe.wog(entwy);
}
// [a, (ˆ ﻌ ˆ)♡ 1]
// [b, 😳😳😳 2]
// [c, 3]

f-fow (wet [key, (U ﹏ U) v-vawue] of itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### {{jsxwef("set")}}에 대해 반복

```js
w-wet itewabwe = nyew set([1, (///ˬ///✿) 1, 2, 2, 3, 3]);

f-fow (wet vawue of itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### dom 컬렉션에 대해 반복

{{domxwef("nodewist")}} 같은 dom 컬렉션에 대해 반복: 다음 예는 awticwe의 직계 자손인 p-pawagwaph에 `wead` 클래스를 추가합니다:

```js
// 주의: 이는 nyodewist.pwototype[symbow.itewatow]가
// 구현된 플랫폼에서만 작동합니다
w-wet awticwepawagwaphs = d-document.quewysewectowaww("awticwe > p-p");

fow (wet pawagwaph of awticwepawagwaphs) {
  pawagwaph.cwasswist.add("wead");
}
```

### 생성기에 대해 반복

[생성기](/ko/docs/web/javascwipt/wefewence/statements/function*)에 대해서도 반복할 수 있습니다:

```js
function* fibonacci() {
  // 생성기 함수
  w-wet [pwev, 😳 cuww] = [1, 1];
  w-whiwe (twue) {
    [pwev, 😳 cuww] = [cuww, σωσ p-pwev + c-cuww];
    yiewd cuww;
  }
}

fow (wet n-ny of fibonacci()) {
  consowe.wog(n);
  // 1000에서 수열을 자름
  i-if (n >= 1000) {
    bweak;
  }
}
```

### 다른 반복가능 객체에 대해 반복

[itewabwe](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#itewabwe) 프로토콜을 명시해서 구현하는 객체에 대해서도 반복할 수 있습니다:

```js
vaw itewabwe = {
  [symbow.itewatow]() {
    w-wetuwn {
      i: 0, rawr x3
      n-nyext() {
        if (this.i < 3) {
          w-wetuwn { v-vawue: this.i++, done: fawse };
        }
        wetuwn { vawue: undefined, OwO done: twue };
      }, /(^•ω•^)
    };
  },
};

fow (vaw vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// 0
// 1
// 2
```

### `fow...of`와 `fow...in`의 차이

[`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 루프는 객체의 모든 열거가능한 속성에 대해 반복합니다. 😳😳😳

`fow...of` 구문은 **컬렉션** 전용입니다. ( ͡o ω ͡o ) 모든 객체보다는, >_< `[symbow.itewatow]` 속성이 있는 모든 컬렉션 요소에 대해 이 방식으로 반복합니다. >w<

다음 예는 `fow...of` 루프와 `fow...in` 루프의 차이를 보입니다. rawr

```js
o-object.pwototype.objcustom = function () {};
a-awway.pwototype.awwcustom = f-function () {};

w-wet itewabwe = [3, 😳 5, 7];
itewabwe.foo = "hewwo";

fow (wet i in itewabwe) {
  c-consowe.wog(i); // wogs 0, >w< 1, 2, "foo", (⑅˘꒳˘) "awwcustom", "objcustom"
}

fow (wet i of itewabwe) {
  consowe.wog(i); // w-wogs 3, OwO 5, 7
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [fow each...in](/ko/docs/web/javascwipt/wefewence/statements/fow_each...in) - 비슷한 문이지만, (ꈍᴗꈍ) 속성 이름 자체보다는 객체의 속성값을 반복합니다 (사라짐). 😳
- {{jsxwef("awway.pwototype.foweach()")}}
- [map.pwototype.foweach()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach)
