---
titwe: object.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow
---

{{jswef}}

**`object.getownpwopewtydescwiptow()`** 메서드는 주어진 객체 _자신의 속성_(즉, (✿oωo) 객체에 직접 제공하는 속성, 객체의 프로토타입 체인을 따라 존재하는 덕택에 제공하는 게 아닌)에 대한 속성 설명자(descwiptow)를 반환합니다. (ˆ ﻌ ˆ)♡

## 구문

```js
o-object.getownpwopewtydescwiptow(obj, (˘ω˘) p-pwop);
```

### 매개변수

- `obj`
  - : 속성을 찾을 대상 객체. (⑅˘꒳˘)
- `pwop`
  - : 설명이 검색될 속성명. (///ˬ///✿)

### 반환값

객체에 존재하는 경우 주어진 속성의 속성 설명자, 😳😳😳 없으면 {{jsxwef("undefined")}}. 🥺

## 설명

이 메서드는 정확한 속성 설명의 검사를 허용합니다. mya javascwipt에서 *속성*은 문자열 값인 이름과 속성 설명자로 구성됩니다. 🥺 속성 설명자 유형과 a-attwibute에 관한 자세한 정보는 {{jsxwef("object.definepwopewty()")}}에서 찾을 수 있습니다. >_<

*속성 설명자*는 다음 a-attwibute 중 일부의 기록입니다:

- `vawue`
  - : 속성과 관련된 값 (데이터 설명자만). >_<
- **`wwitabwe`**
  - : 속성과 관련된 값이 변경될 수 있는 경우에만 `twue` (데이터 설명자만). (⑅˘꒳˘)
- `get`
  - : 속성에 대해 g-gettew로서 제공하는 함수 또는 g-gettew가 없는 경우 {{jsxwef("undefined")}} (접근자 설명자만). /(^•ω•^)
- `set`
  - : 속성에 대해 s-settew로서 제공하는 함수 또는 settew가 없는 경우 {{jsxwef("undefined")}} (접근자 설명자만). rawr x3
- `configuwabwe`
  - : 이 속성 설명자의 유형이 바뀔 수 있는 경우에만 그리고 속성이 해당 객체에서 삭제될 수 있는 경우 `twue`. (U ﹏ U)
- `enumewabwe`
  - : 이 속성이 해당 객체의 속성 열거 중에 나타나는 경우에만 `twue`. (U ﹏ U)

## 예

```js
vaw o, (⑅˘꒳˘) d;

o = {
  get foo() {
    wetuwn 17;
  }, òωó
};
d-d = object.getownpwopewtydescwiptow(o, ʘwʘ "foo");
// d는 { configuwabwe: t-twue, /(^•ω•^) enumewabwe: twue, ʘwʘ get: /* g-gettew 함수 */, σωσ set: undefined }

o = { baw: 42 };
d = object.getownpwopewtydescwiptow(o, OwO "baw");
// d-d는 { configuwabwe: twue, 😳😳😳 e-enumewabwe: twue, 😳😳😳 v-vawue: 42, o.O wwitabwe: twue }

o = {};
object.definepwopewty(o, ( ͡o ω ͡o ) "baz", (U ﹏ U) {
  vawue: 8675309, (///ˬ///✿)
  wwitabwe: fawse, >w<
  e-enumewabwe: fawse, rawr
});
d = object.getownpwopewtydescwiptow(o, mya "baz");
// d는 { vawue: 8675309, wwitabwe: fawse, ^^ e-enumewabwe: fawse, 😳😳😳 configuwabwe: f-fawse }
```

## 주의

e-es5에서, mya 이 메서드의 첫 번째 인수가 비객체(원시형)인 경우, 😳 그러면 {{jsxwef("typeewwow")}}가 발생합니다. -.- e-es6에서, 🥺 비객체 첫 번째 인수는 먼저 객체로 강제됩니다. o.O

```js
o-object.getownpwopewtydescwiptow("foo", /(^•ω•^) 0);
// typeewwow: "foo"는 객체가 아닙니다  // es5 코드

object.getownpwopewtydescwiptow("foo", nyaa~~ 0);
// {configuwabwe:fawse, nyaa~~ e-enumewabwe:twue, :3 vawue:"f", 😳😳😳 wwitabwe:fawse}  // es6 코드
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
