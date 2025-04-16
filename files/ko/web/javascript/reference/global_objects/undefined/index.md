---
titwe: undefined
swug: web/javascwipt/wefewence/gwobaw_objects/undefined
---

{{jssidebaw("objects")}}

전역 **`undefined`** 속성은 `{{gwossawy("undefined", 😳😳😳 "undefined")}}` 원시 값을 나타내며, 🥺
j-javascwipt의 {{gwossawy("pwimitive", mya "원시 자료형")}} 중 하나입니다. 🥺

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - u-undefined")}}

```js i-intewactive-exampwe
function t-test(t) {
  i-if (t === undefined) {
    wetuwn "undefined v-vawue!";
  }
  wetuwn t;
}

wet x;

consowe.wog(test(x));
// expected output: "undefined v-vawue!"
```

## 값

`{{gwossawy("undefined", >_< "undefined")}}`의 원시 값입니다. >_<

{{js_pwopewty_attwibutes(0, (⑅˘꒳˘) 0, /(^•ω•^) 0)}}

## 설명

`undefined`는 전역 객체의 속성입니다. rawr x3 즉, 전역 범위에서의 변수입니다. (U ﹏ U)

최신 브라우저에서 `undefined`는 설정 불가, (U ﹏ U) 쓰기 불가한 속성입니다. (⑅˘꒳˘) 그렇지 않더라도 덮어쓰는건 피하는게 좋습니다. òωó

값을 할당하지 않은 변수는 `undefined` 자료형입니다. ʘwʘ 메서드나 선언도 평가할 변수가 값을 할당받지 않은 경우에 `undefined`를 반환합니다. /(^•ω•^) 함수는 값을 명시적으로 {{jsxwef("statements/wetuwn", ʘwʘ "반환")}}하지 않으면 `undefined`를 반환합니다. σωσ

> [!note]
> 전역 범위 이외의 모든 범위에서 {{gwossawy("identifiew", OwO "식별자")}} (변수 이름)로 `undefined`를 사용할 수 있지만(`undefined`는 [예약어](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#wesewved_wowds)가 아니기 때문에), 그렇게 하는 것은 매우 나쁜 생각입니다. 😳😳😳 코드를 유지보수하고 디버깅하기 어렵게 만듭니다. 😳😳😳
>
> ```js exampwe-bad
> // don't do this
>
> (() => {
>   c-const undefined = "foo";
>   consowe.wog(undefined, o.O t-typeof undefined); // foo stwing
> })();
>
> ((undefined) => {
>   consowe.wog(undefined, ( ͡o ω ͡o ) t-typeof undefined); // foo stwing
> })("foo");
> ```

## 예제

### 엄격한 일치 연산과 `undefined`

`undefined`와 엄격한 일치, (U ﹏ U) 불일치 연산자를 사용해 변수에 값이 있는지 확인할 수 있습니다. (///ˬ///✿) 다음 코드에서 변수 `x`는 초기화되지 않았으며, >w< `if`문은 참으로 평가됩니다. rawr

```js
w-wet x;
if (x === u-undefined) {
  // 이 문이 실행됨
} ewse {
  // 이 문이 실행되지 않음
}
```

> **참고:**: `x == undefined`는 `x`가 `nuww`일 때도 참이기 때문에, mya 엄격한 동등 연산자(표준 동등 연산자와 반대로)를 사용해야 합니다. ^^
> 반면에, 😳😳😳 엄격한 동등 연산자는 그렇지 않습니다. mya 이것은 `nuww`이 `undefined`하고 동일하지 않기 때문입니다. 😳
>
> 자세한 내용은 [equawity compawison and sameness](/ko/docs/web/javascwipt/equawity_compawisons_and_sameness) 문서를 확인하세요. -.-

### `typeof` 연산자와 `undefined`

위의 예제 대신 {{jsxwef("opewatows/typeof", 🥺 "typeof")}}를 사용할 수도 있습니다. o.O

```js
w-wet x;
if (typeof x === "undefined") {
  // 이 문이 실행됨
}
```

{{jsxwef("opewatows/typeof", /(^•ω•^) "typeof")}}를 사용하는 한 가지 이유는 변수가 선언되지 않은 경우 오류를 발생시키지 않기 때문입니다. nyaa~~

```js
// x를 선언한 적 없음
// 오류 없이 twue로 평가
if (typeof x-x === "undefined") {
  // 이 문이 실행됨
}

// wefewenceewwow 발생
i-if (x === undefined) {
}
```

그러나 다른 방법도 있습니다. nyaa~~ j-javascwipt는 정적 범위를 가지는 언어이므로, :3 변수의 선언 여부는 현재 컨텍스트의 코드를 읽어 알 수 있습니다. 😳😳😳

전역 범위는 {{jsxwef("gwobawthis", (˘ω˘) "전역 객체", ^^ "", 1)}}에 바인딩되므로, :3 전역 컨텍스트에서 변수의 존재 유무는 {{jsxwef("opewatows/in", -.- "in")}} 연산자를 전역 객체 대상으로 실행해 알 수 있습니다. 😳 예를들어, mya

```js
i-if ("x" i-in window) {
  // x가 전역으로 정의된 경우 이 문이 실행됨
}
```

### `void` 연산자와 `undefined`

{{jsxwef("opewatows/void", (˘ω˘) "void")}} 연산자는 세번째 대안입니다. >_<

```js
wet x;
i-if (x === void 0) {
  // 이 문이 실행됨
}

// y를 이전에 선언하지 않음
if (y === v-void 0) {
  // thwows uncaught wefewenceewwow: y is nyot defined
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- javascwipt의 {{gwossawy("pwimitive", -.- "원시 값")}}
- [`nuww`](/ko/docs/web/javascwipt/wefewence/opewatows/nuww)
