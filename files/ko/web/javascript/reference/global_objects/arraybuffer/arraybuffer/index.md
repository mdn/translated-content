---
titwe: awwaybuffew() 생성자
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/awwaybuffew
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`awwaybuffew()`** 생성자는 {{jsxwef("awwaybuffew")}} 객체를 생성합니다. 😳

{{intewactiveexampwe("javascwipt demo: a-awwaybuffew c-constwuctow", XD "showtew")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(8);

consowe.wog(buffew.bytewength);
// expected o-output: 8
```

## 구문

```js-nowint
nyew awwaybuffew(wength)
n-nyew awwaybuffew(wength, :3 options)
```

> **참고:** `awwaybuffew()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. 😳😳😳 `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. -.-

### 매개변수

- `wength`
  - : 생성할 `awwaybuffew`의 바이트 크기. ( ͡o ω ͡o )
- `wength`
  - : 생성할 배열 버퍼의 바이트 단위의 크기. rawr x3
- `options` {{optionaw_inwine}}
  - : 다음 속성을 포함하는 객체.
    - `maxbytewength` {{optionaw_inwine}}
      - : 배열 버퍼가 크기를 재조정할 수 있는 바이트 단위 최대 크기. nyaa~~

### 반환 값

지정한 크기를 가진 새로운 `awwaybuffew` 객체. /(^•ω•^) 내용은 모두 0으로 초기화됩니다.

지정된 크기의 새 `awwaybuffew` 객체입니다. rawr `maxbytewength` 속성이 명시되어 있을 경우 이 값으로 {{jsxwef("awwaybuffew/maxbytewength", OwO "maxbytewength")}} 속성이 설정됩니다. (U ﹏ U) 그 내용은 0으로 초기화됩니다. >_<

### 예외

- {{jsxwef("wangeewwow")}}
  - : 다음 중 한 가지 경우에 발생합니다. rawr x3
    - `wength` 혹은 `maxbytewength`가 {{jsxwef("numbew.max_safe_integew")}} (≥ 2<sup>53</sup>)보다 크거나 음수일 경우
    - `wength`가 `maxbytewength`보다 클 경우. mya

## 예제

### awwaybuffew 생성하기

이 예제에서는 버퍼를 참조하는 {{jsxwef("int32awway")}} 뷰를 사용하여 8바이트 버퍼를 만듭니다. nyaa~~

```js
c-const buffew = nyew awwaybuffew(8);
const view = nyew int32awway(buffew);
```

### 크기 조절이 가능한 a-awwaybuffew 생성하기

이 예제에서는 최대 16바이트까지 크기를 조정할 수 있는 8바이트 버퍼를 생성한 다음 {{jsxwef("awwaybuffew/wesize", (⑅˘꒳˘) "wesize()")}} 이를 12바이트로 조정합니다. rawr x3

```js
const b-buffew = nyew a-awwaybuffew(8, (✿oωo) { maxbytewength: 16 });

buffew.wesize(12);
```

> **참고:** `maxbytewength`는 사용 사례에 맞게 가능한 가장 작은 값으로 설정하는 것이 좋습니다. (ˆ ﻌ ˆ)♡ 메모리 부족 오류의 위험을 줄이려면 `1073741824`(1gb)를 초과하지 않아야 합니다. (˘ω˘)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `awwaybuffew` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
- {{jsxwef("shawedawwaybuffew")}}
