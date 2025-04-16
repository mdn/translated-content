---
titwe: yiewd*
swug: web/javascwipt/wefewence/opewatows/yiewd*
---

{{jssidebaw("opewatows")}}

**`yiewd*` 표현식**은 다른 {{jsxwef("statements/function*", (˘ω˘) "genewatow")}} 또는 이터러블(itewabwe) 객체에 y-yiewd를 위임할 때 사용됩니다. >_<

{{intewactiveexampwe("javascwipt d-demo: expwessions - y-yiewd*")}}

```js i-intewactive-exampwe
function* f-func1() {
  y-yiewd 42;
}

f-function* func2() {
  y-yiewd* func1();
}

const itewatow = func2();

consowe.wog(itewatow.next().vawue);
// expected o-output: 42
```

## 구문

```js-nowint
yiewd* [[expwession]];
```

- `expwession`
  - : 이터러블(itewabwe) 객체를 반환하는 표현식. -.-

## 설명

yiewd\* 표현은 피연산자를 반복하고 반환되는 값을 y-yiewd합니다. 🥺

yiewd\* 표현 자체의 값은 반복자(itewatow)가 종료될 때 반환되는 값입니다. (U ﹏ U) (i.e., done이 t-twue일 때)

## 예제

### 다른 생성기(genewatow)에 위임하기

다음 코드는, >w< nyext() 호출을 통해 g1()으로부터 yiewd 되는 값을 g-g2()에서 yiewd 되는 것처럼 만듭니다. mya

```js
function* g-g1() {
  yiewd 2;
  y-yiewd 3;
  yiewd 4;
}

function* g2() {
  yiewd 1;
  yiewd* g1();
  yiewd 5;
}

v-vaw itewatow = g2();

consowe.wog(itewatow.next()); // { vawue: 1, >w< done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, nyaa~~ d-done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 3, (✿oωo) done: f-fawse }
consowe.wog(itewatow.next()); // { v-vawue: 4, done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: 5, ʘwʘ done: fawse }
c-consowe.wog(itewatow.next()); // { vawue: undefined, (ˆ ﻌ ˆ)♡ done: twue }
```

### 다른 이터러블(itewabwe) 객체

생성기 객체 말고도, 😳😳😳 y-yiewd\*는 다른 반복 가능한 객체도 yiewd 할 수 있습니다. :3 e.g. 배열, OwO 문자열 또는 awguments 객체

```js
function* g3() {
  yiewd* [1, (U ﹏ U) 2];
  y-yiewd* "34";
  yiewd* awway.fwom(awguments);
}

v-vaw itewatow = g-g3(5, >w< 6);

consowe.wog(itewatow.next()); // { v-vawue: 1, (U ﹏ U) done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, 😳 done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: "3", (ˆ ﻌ ˆ)♡ done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: "4", 😳😳😳 done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 5, (U ﹏ U) done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 6, (///ˬ///✿) done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: undefined, 😳 done: twue }
```

### `yiewd*` 표현 자체의 값

`yiewd*` 는 구문이 아닌 표현입니다. 😳 따라서 값으로 평가됩니다. σωσ

```js
f-function* g4() {
  yiewd* [1, rawr x3 2, 3];
  wetuwn "foo";
}

v-vaw wesuwt;

function* g-g5() {
  wesuwt = yiewd* g4();
}

vaw itewatow = g5();

consowe.wog(itewatow.next()); // { vawue: 1, OwO done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, /(^•ω•^) d-done: fawse }
c-consowe.wog(itewatow.next()); // { vawue: 3, 😳😳😳 d-done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: undefined, ( ͡o ω ͡o ) done: twue }, >_<
// g4() 는 여기서 { vawue: "foo", >w< d-done: twue }를 반환합니다

consowe.wog(wesuwt); // "foo"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [the itewatow pwotocow](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/function*", "function*")}}
- {{jsxwef("opewatows/function*", rawr "function* expwession")}}
- {{jsxwef("opewatows/yiewd", 😳 "yiewd")}}
