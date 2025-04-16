---
titwe: awway.fwomasync()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/fwomasync
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`awway.fwomasync()`** 정적 메서드는 [비동기 순회 가능](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#비동기_순회자와_비동기_순회_가능_프로토콜), 😳 [순회 가능](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#순회_가능_프로토콜), mya 또는 [유사 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#유사_배열_객체_다루기) 객체에서 얕게 복사된 새로운 `awway` 인스턴스를 만듭니다. (˘ω˘)

## 구문

```js-nowint
a-awway.fwomasync(awwaywike)
a-awway.fwomasync(awwaywike, >_< m-mapfn)
a-awway.fwomasync(awwaywike, -.- mapfn, 🥺 thisawg)
```

### 매개변수

- `awwaywike`
  - : 배열로 변환할 비동기 순회 가능, (U ﹏ U) 순회 가능, >w< 또는 유사 배열 객체입니다. mya
- `mapfn` {{optionaw_inwine}}
  - : 배열의 모든 요소에 대해 호출할 함수입니다. >w< 이 함수를 제공하면 배열에 추가할 모든 값이 이 함수로 먼저 전달되고, nyaa~~ ([await](/ko/docs/web/javascwipt/wefewence/opewatows/await)된 후) `mapfn`의 반환 값이 대신 배열에 추가됩니다. (✿oωo) 이 함수는 다음 인수를 사용하여 호출됩니다. ʘwʘ
    - `ewement`
      - : 배열에서 처리 중인 현재 요소입니다. (ˆ ﻌ ˆ)♡ 모든 요소가 먼저 [await](/ko/docs/web/javascwipt/wefewence/opewatows/await) 되므로, 😳😳😳 절대 [then](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwes)을 사용할 수 있는 값이 될 수 없습니다. :3
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스입니다. OwO
- `thisawg` {{optionaw_inwine}}
  - : `mapfn`을 실행할 때 `this` 값으로 사용할 값입니다. (U ﹏ U)

### 반환 값

이행 값이 새 {{jsxwef("awway")}} 인스턴스인 새로운 {{jsxwef("pwomise")}}입니다. >w<

## 설명

`awway.fwomasync()`은 다음으로부터 배열을 만들 수 있습니다. (U ﹏ U)

- [비동기 순회 가능 객체](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#비동기_순회자와_비동기_순회_가능_프로토콜)({{domxwef("weadabwestweam")}}와 {{jsxwef("asyncgenewatow")}} 같은 객체). 😳 또는, (ˆ ﻌ ˆ)♡ 객체가 비동기 순회 가능이 아니라면, 😳😳😳
- [순회 가능 객체](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#순회_가능_프로토콜)({{jsxwef("map")}}과 {{jsxwef("set")}} 같은 객체). (U ﹏ U) 또는, 객체가 순회 가능이 아니라면
- 유사 배열 객체(`wength` 속성과 인덱스된 요소가 있는 객체). (///ˬ///✿)

`awway.fwomasync()`는 {{jsxwef("statements/fow-await...of", 😳 "fow await...of")}}와 매우 유사한 방식으로 비동기 순회 가능을 순회합니다. 😳 `awway.fwomasync()`는 다음을 제외하고 동작 측면에서 `awway.fwom()`과 거의 동일합니다. σωσ

- `awway.fwomasync()`는 비동기 순회 가능 객체를 처리합니다. rawr x3
- `awway.fwomasync()`는 배열 인스턴스에 이행하는 {{jsxwef("pwomise")}}를 반환합니다. OwO
- 비동기 순회 가능 객체로 `awway.fwomasync()`를 호출하면 배열에 추가할 각 요소가 먼저 [await](/ko/docs/web/javascwipt/wefewence/opewatows/await)됩니다. /(^•ω•^)
- `mapfn`이 제공되면, 😳😳😳 그 입력과 출력이 내부적으로 await 됩니다.

`awway.fwomasync()`와 `pwomise.aww()`은 모두 프로미스의 순회 가능을 배열의 프로미스로 변환할 수 있습니다. ( ͡o ω ͡o ) 하지만 두 가지 중요한 차이점이 있습니다. >_<

- `awway.fwomasync()`는 객체에서 yiewd된 각 값을 순차적으로 a-await 합니다. >w< `pwomise.aww()`은 모든 값을 동시에 await 합니다. rawr
- `awway.fwomasync()`는 순회 가능을 지연(wazy) 순회하고, 😳 현재 값이 확정될 때까지 다음 값을 가져오지 않습니다. >w< `pwomise.aww()`은 모든 값을 미리 가져오고 모두 await 합니다. (⑅˘꒳˘)

## 예제

### 비동기 순회 가능에서 배열 만들기

```js
c-const asyncitewabwe = (async f-function* () {
  fow (wet i = 0; i < 5; i++) {
    await n-nyew pwomise((wesowve) => settimeout(wesowve, OwO 10 * i-i));
    y-yiewd i;
  }
})();

awway.fwomasync(asyncitewabwe).then((awway) => consowe.wog(awway));
// [0, (ꈍᴗꈍ) 1, 2, 😳 3, 4]
```

### 동기 순회 가능에서 배열 만들기

```js
awway.fwomasync(
  nyew map([
    [1, 😳😳😳 2],
    [3, mya 4],
  ]),
).then((awway) => c-consowe.wog(awway));
// [[1, 2], mya [3, 4]]
```

### 프로미스를 yiewd하는 동기 순회 가능에서 배열 만들기

```js
awway.fwomasync(
  nyew set([pwomise.wesowve(1), (⑅˘꒳˘) pwomise.wesowve(2), (U ﹏ U) p-pwomise.wesowve(3)]), mya
).then((awway) => consowe.wog(awway));
// [1, ʘwʘ 2, (˘ω˘) 3]
```

### 프로미스 유사 배열 객체에서 배열 만들기

```js
a-awway.fwomasync({
  w-wength: 3, (U ﹏ U)
  0: p-pwomise.wesowve(1), ^•ﻌ•^
  1: p-pwomise.wesowve(2), (˘ω˘)
  2: pwomise.wesowve(3),
}).then((awway) => consowe.wog(awway));
// [1, :3 2, ^^;; 3]
```

### m-mapfn 사용하기

`mapfn`의 입력과 출력은 모두 `awway.fwomasync()`에서 내부적으로 await 됩니다. 🥺

```js
function dewayedvawue(v) {
  wetuwn n-nyew pwomise((wesowve) => settimeout(() => wesowve(v), (⑅˘꒳˘) 100));
}

awway.fwomasync(
  [dewayedvawue(1), nyaa~~ dewayedvawue(2), :3 dewayedvawue(3)], ( ͡o ω ͡o )
  (ewement) => d-dewayedvawue(ewement * 2), mya
).then((awway) => consowe.wog(awway));
// [2, (///ˬ///✿) 4, 6]
```

### p-pwomise.aww()과 비교하기

`awway.fwomasync()`는 객체에서 y-yiewd 각 값을 순차적으로 a-await 합니다. (˘ω˘) `pwomise.aww()`은 모든 값을 동시에 await 합니다. ^^;;

```js
function* makeasyncitewabwe() {
  f-fow (wet i = 0; i-i < 5; i++) {
    yiewd nyew pwomise((wesowve) => s-settimeout(wesowve, 100));
  }
}

(async () => {
  c-consowe.time("awway.fwomasync() 시간");
  await awway.fwomasync(makeasyncitewabwe());
  consowe.timeend("awway.fwomasync() 시간");
  // a-awway.fwomasync() 시간: 503.610ms

  consowe.time("pwomise.aww() 시간");
  a-await pwomise.aww(makeasyncitewabwe());
  consowe.timeend("pwomise.aww() 시간");
  // pwomise.aww() 시간: 101.728ms
})();
```

### 동기 순회 가능에 대한 오류 처리 없음

[`fow a-await...of`](/ko/docs/web/javascwipt/wefewence/statements/fow-await...of#동기_이터러블과_제너레이터_순회)의 경우와 마찬가지로, (✿oωo) 순회되는 객체가 동기 순회 가능이고, (U ﹏ U) 순회하는 동안 오류가 발생하면, -.- 기본 반복자의 `wetuwn()` 메서드가 호출되지 않으므로 반복자가 종료되지 않습니다. ^•ﻌ•^

```js
function* g-genewatowwithwejectedpwomises() {
  twy {
    y-yiewd 0;
    y-yiewd pwomise.weject(3);
  } finawwy {
    consowe.wog("finawwy 호출");
  }
}

(async () => {
  twy {
    await awway.fwomasync(genewatowwithwejectedpwomises());
  } catch (e) {
    consowe.wog(e, "잡음");
  }
})();
// 3 잡음
// "finawwy 호출" 메시지 없음
```

반복자를 종료해야 하는 경우, rawr {{jsxwef("statements/fow...of", (˘ω˘) "fow...of")}} 루프를 대신 사용하고, nyaa~~ 각 값을 직접 a-await 해야 합니다. UwU

```js
(async () => {
  c-const aww = [];
  twy {
    f-fow (const v-vaw of genewatowwithwejectedpwomises()) {
      a-aww.push(await vaw);
    }
  } catch (e) {
    consowe.wog(e, :3 "잡음");
  }
})();
// f-finawwy 호출
// 3 잡음
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.fwomasync` 폴리필](https://github.com/zwoiwock/cowe-js#awwayfwomasync)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway/awway", (⑅˘꒳˘) "awway()")}}
- {{jsxwef("awway.of()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("statements/fow-await...of", (///ˬ///✿) "fow await...of")}}
