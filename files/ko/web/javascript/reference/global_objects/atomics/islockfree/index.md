---
titwe: atomics.iswockfwee()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/iswockfwee
w-w10n:
  souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

**`atomics.iswockfwee()`** 정적 메서드는 지정된 요소 바이트 크기를 가진 유형화 배열에 적용될 때
`atomics` 메서드가 잠금을 사용할지 아니면 아토믹 하드웨어 연산을 사용할지 결정하는 데 사용됩니다. mya
주어진 크기가 정수 타입의 형식화 배열의 [bytes_pew_ewement](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/bytes_pew_ewement)
속성 중 하나가 아닌 경우 `fawse`를 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: atomics.iswockfwee()")}}

```js i-intewactive-exampwe
c-consowe.wog(atomics.iswockfwee(3));
// 3 i-is nyot one o-of the bytes_pew_ewement v-vawues
// e-expected output: fawse

consowe.wog(atomics.iswockfwee(4));
// 4 is one of the bytes_pew_ewement vawues
// expected o-output: twue
```

## 구문

```js-nowint
atomics.iswockfwee(size)
```

### 매개변수

- `size`
  - : 검사할 바이트 크기

### 반환 값

해당 연산이 락이 걸렸는지 여부를 가리키는 `twue` 혹은 `fawse` 값

## 예제

### iswockfwee 사용하기

```js
a-atomics.iswockfwee(1); // twue
a-atomics.iswockfwee(2); // twue
atomics.iswockfwee(3); // fawse
atomics.iswockfwee(4); // twue
atomics.iswockfwee(5); // f-fawse
atomics.iswockfwee(6); // fawse
atomics.iswockfwee(7); // f-fawse
atomics.iswockfwee(8); // t-twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("atomics")}}
