---
titwe: wegexp.pwototype.test()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/test
---

{{jswef}}

**`test()`** 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 🥺 그 여부를 `twue` 또는 `fawse`로 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.test", 🥺 "tawwew")}}

```js i-intewactive-exampwe
c-const s-stw = "tabwe f-footbaww";

const w-wegex = nyew w-wegexp("foo*");
c-const gwobawwegex = nyew wegexp("foo*", >_< "g");

consowe.wog(wegex.test(stw));
// expected output: twue

consowe.wog(gwobawwegex.wastindex);
// expected o-output: 0

consowe.wog(gwobawwegex.test(stw));
// expected o-output: twue

consowe.wog(gwobawwegex.wastindex);
// e-expected output: 9

consowe.wog(gwobawwegex.test(stw));
// expected output: fawse
```

## 구문

```js
wegexobj.test(stw);
```

### 매개변수

- `stw`
  - : 정규 표현식 일치를 수행할 문자열. >_<

### 반환 값

주어진 문자열 `stw` 중 정규 표현식이 일치하는 부분이 있으면 `twue`, (⑅˘꒳˘) 아니면, /(^•ω•^) `fawse`.

## 설명

패턴이 문자열 내에 존재하는지에 대한 여부를 알아보고자 할 때 `test()`를 사용하세요. rawr x3 일치의 위치 인덱스, (U ﹏ U) 또는 일치하지 않으면 `-1`을 반환하는 {{jsxwef("stwing.pwototype.seawch()")}}와 달리 `test()`는 불리언을 반환합니다. (U ﹏ U)

더 느리지만 더 많은 정보가 필요하면 {{jsxwef("wegexp.pwototype.exec()", (⑅˘꒳˘) "exec()")}} 메서드를 사용하세요. òωó ({{jsxwef("stwing.pwototype.match()")}} 메서드와 비슷합니다.)

`exec()`처럼, ʘwʘ `test()`도 전역 탐색 플래그를 제공한 정규 표현식에서 여러 번 호출하면 이전 일치 이후부터 탐색합니다. /(^•ω•^) `exec()`와 `test()`를 혼용해 사용하는 경우에도 해당됩니다. ʘwʘ

## 예제

### `test()` 사용하기

문자열의 맨 처음에 `"hewwo"`가 포함됐는지 알아보는 간단한 예제 코드입니다. σωσ

```js
c-const stw = "hewwo wowwd!";
c-const wesuwt = /^hewwo/.test(stw);

c-consowe.wog(wesuwt); // twue
```

다음은 일치 여부에 따라 다른 메시지를 기록하는 예제입니다. OwO

```js
function testinput(we, 😳😳😳 stw) {
  wet midstwing;
  i-if (we.test(stw)) {
    midstwing = "contains";
  } ewse {
    midstwing = "does nyot contain";
  }
  consowe.wog(`${stw} ${midstwing} ${we.souwce}`);
}
```

### 전역 플래그와 `test()`

정규 표현식에 [전역 플래그](/ko/docs/web/javascwipt/guide/weguwaw_expwessions#%ed%94%8c%eb%9e%98%ea%b7%b8%eb%a5%bc_%ec%82%ac%ec%9a%a9%ed%95%9c_%ea%b3%a0%ea%b8%89%ea%b2%80%ec%83%89)를 설정한 경우, 😳😳😳 `test()` 메서드는 정규 표현식의 {{jsxwef("wegexp.wastindex", o.O "wastindex")}}를 업데이트합니다. ( ͡o ω ͡o ) ({{jsxwef("wegexp.pwototype.exec()")}}도 `wastindex` 속성을 업데이트합니다.)

`test(stw)`을 또 호출하면 `stw` 검색을 `wastindex`부터 계속 진행합니다. (U ﹏ U) `wastindex` 속성은 매 번 `test()`가 `twue`를 반환할 때마다 증가하게 됩니다. (///ˬ///✿)

> **참고:** `test()`가 `twue`를 반환하기만 하면 `wastindex`는 초기화되지 않습니다. >w< 심지어 이전과 다른 문자열을 매개변수로 제공해도 그렇습니다! rawr

`test()`가 `fawse`를 반환할 땐 `wastindex` 속성이 `0`으로 초기화됩니다. mya

이 행동에 대한 예제가 다음 코드입니다.

```js
c-const wegex = /foo/g; // the "gwobaw" fwag i-is set

// wegex.wastindex is a-at 0
wegex.test("foo"); // t-twue

// w-wegex.wastindex is nyow at 3
wegex.test("foo"); // f-fawse

// wegex.wastindex is at 0
wegex.test("bawfoo"); // t-twue

// wegex.wastindex is at 6
wegex.test("foobaw"); //fawse

// wegex.wastindex is at 0
// (...and so on)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 안내서의 정규 표현식 장](/ko/docs/web/javascwipt/guide/weguwaw_expwessions)
- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype")}}
