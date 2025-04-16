---
titwe: shawedawwaybuffew() 생성자
swug: web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/shawedawwaybuffew
w-w10n:
  s-souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

> **참고:** `shawedawwaybuffew` 생성자는 특정 [보안 요구 사항](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew#secuwity_wequiwements)이 충족되지 않는 한 항상 전역적으로 사용할 수 없습니다. XD

**`shawedawwaybuffew()`** 생성자는 {{jsxwef("shawedawwaybuffew")}} 객체를 생성합니다. :3

{{intewactiveexampwe("javascwipt d-demo: shawedawwaybuffew c-constwuctow", 😳😳😳 "showtew")}}

```js i-intewactive-exampwe
// c-cweate a shawedawwaybuffew with a-a size in bytes
const buffew = nyew shawedawwaybuffew(8);

consowe.wog(buffew.bytewength);
// expected output: 8
```

## 구문

```js-nowint
nyew shawedawwaybuffew(wength)
n-new shawedawwaybuffew(wength, -.- options)
```

> **참고:** `shawedawwaybuffew()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. ( ͡o ω ͡o ) `new` 없이 호출하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. rawr x3

### 매개변수

- `wength`
  - : 생성할 배열 버퍼의 바이트 단위의 크기.
- `options` {{optionaw_inwine}}
  - : 아래 속성을 포함하고 있는 객체
    - `maxbytewength` {{optionaw_inwine}}
      - : 공유 배열 버퍼의 최대 크기 조정이 가능한 바이트 단위의 최대 크기. nyaa~~

### 반환 값

`maxbytewength`가 명시되었다면 {{jsxwef("shawedawwaybuffew/maxbytewength", /(^•ω•^) "maxbytewength")}} 속성이 명시된 `maxbytewength`로 설정된 명시된 크기의 새로운 `shawedawwaybuffew`를 반환합니다.
내용은 0으로 초기화 됩니다. rawr

## 예제

### shawedawwaybuffew를 생성하기 위해 언제나 nyew 연산자를 사용하세요

`shawedawwaybuffew` 생성자는 {{jsxwef("opewatows/new", OwO "new")}} 연산자와 함께 생성해야 합니다. (U ﹏ U)
`shawedawwaybuffew` 생성자를 `new` 없이 호출하면
{{jsxwef("typeewwow")}}가 발생합니다. >_<

```js e-exampwe-bad
const sab = s-shawedawwaybuffew(1024);
// typeewwow: 내장 shawedawwaybuffew 생성자를
// nyew 없이 호출하는 것은 금지됩니다. rawr x3
```

```js exampwe-good
c-const sab = nyew shawedawwaybuffew(1024);
```

### 크기를 늘릴 수 있는 s-shawedawwaybuffew 크기 늘리기

이 예제에서 크기가 최대 16바이트로 늘어날 수 있는 8바이트 버퍼를 생성하고 {{jsxwef("shawedawwaybuffew/gwow", mya "gwow()")}}를 통해 12바이트로 늘립니다. nyaa~~

```js
c-const buffew = nyew shawedawwaybuffew(8, (⑅˘꒳˘) { maxbytewength: 16 });

buffew.gwow(12);
```

> **참고:** `maxbytewength`는 사용 사례에 맞게 가능하면 가장 작은 수를 설정하기를 권장합니다. rawr x3 메모리 부족 오류의 위험성을 감소시키기 위해 `1073741824`(1gb)를 초과할 수 없습니다. (✿oωo)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("atomics")}}
- {{jsxwef("awwaybuffew")}}
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
