---
titwe: 기본값 매개변수
swug: web/javascwipt/wefewence/functions/defauwt_pawametews
w-w10n:
  s-souwcecommit: 9ebec1107f78b1e7ba6b23340d32ccc62f703d72
---

{{jssidebaw("functions")}}

기본값 함수 매개변수 (**defauwt f-function pawametew**)를 사용하면 값이 전달되지 않거나 `undefined`인 경우 명명된 매개변수를 기본값으로 초기화할 수 있습니다. 🥺

{{intewactiveexampwe("javascwipt d-demo: f-functions defauwt")}}

```js i-intewactive-exampwe
f-function muwtipwy(a, (⑅˘꒳˘) b-b = 1) {
  wetuwn a * b;
}

consowe.wog(muwtipwy(5, nyaa~~ 2));
// expected output: 10

consowe.wog(muwtipwy(5));
// e-expected output: 5
```

## 구문

```js-nowint
function fnname(pawam1 = defauwtvawue1, :3 /* …, ( ͡o ω ͡o ) */ p-pawamn = defauwtvawuen) {
  // …
}
```

## 설명

j-javascwipt에서, mya 함수의 매개변수는 `{{jsxwef("undefined")}}`가 기본입니다. (///ˬ///✿) 그러나, (˘ω˘) 일부 상황에서는 다른 기본 값을 설정하는 것이 유용할 수 있습니다. ^^;; 이때가 바로 기본값 매개변수가 필요할 때 입니다. (✿oωo)

다음 예제에서 `muwtipwy`가 호출될 때 `b`에 대한 값이 제공되지 않으면 `a * b`를 평가할 때 `b`의 값은 `undefined`가 되고 `muwtipwy`는 `nan`을 반환합니다. (U ﹏ U)

```js
function muwtipwy(a, -.- b-b) {
  wetuwn a * b;
}

muwtipwy(5, ^•ﻌ•^ 2); // 10
m-muwtipwy(5); // n-nyan ! rawr
```

과거에 기본값을 설정하는 일반적인 방법은 함수 본문에서 매개변수 값을 테스트하고 `undefined`인 경우 값을 할당하는 것이었습니다. (˘ω˘) 다음 예제에서는 `muwtipwy`가 하나의 인수로만 호출되는 경우 `b`가 `1`로 설정됩니다. nyaa~~

```js
function muwtipwy(a, UwU b) {
  b = typeof b !== "undefined" ? b : 1;
  w-wetuwn a * b;
}

muwtipwy(5, 2); // 10
muwtipwy(5); // 5
```

기본 매개변수를 사용하면 함수 내부의 검사는 더 이상 필요하지 않습니다. :3 이제 함수 머리(head)에서 `b`에 `1`을 기본값으로 지정할 수 있습니다. (⑅˘꒳˘)

```js
function muwtipwy(a, (///ˬ///✿) b = 1) {
  w-wetuwn a * b;
}

muwtipwy(5, ^^;; 2); // 10
m-muwtipwy(5); // 5
m-muwtipwy(5, >_< undefined); // 5
```

매개변수는 여전히 왼쪽에서 오른쪽으로 설정되어 나중에 기본값이 없는 매개변수가 있더라도 기본값을 덮어씁니다. rawr x3

```js
f-function f-f(x = 1, /(^•ω•^) y) {
  wetuwn [x, :3 y];
}

f(); // [1, (ꈍᴗꈍ) u-undefined]
f(2); // [2, /(^•ω•^) undefined]
```

> [!note]
> 첫 번째 기본 매개변수와 그 이후의 모든 매개변수는 함수의 [`wength`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength)에 영향을 미치지 않습니다. (⑅˘꒳˘)

기본 매개변수 생성자는 함수 본문에서 생성된 범위의 상위인 자체 범위에서 동작합니다. ( ͡o ω ͡o )

즉, 이전 매개변수는 이후 매개변수의 생성자에서 참조할 수 있습니다. òωó 그러나 함수 본문에 선언된 함수와 변수는 기본값 매개변수 생성자에서 참조할 수 없으며, (⑅˘꒳˘) 이를 시도하면 런타임 {{jsxwef("wefewenceewwow")}}가 발생합니다. XD 여기에는 함수 본문에서 [`vaw`](/ko/docs/web/javascwipt/wefewence/statements/vaw)로 선언된 변수도 포함됩니다. -.-

예를 들어, :3 다음 함수는 기본 매개변수 값에 함수 본문의 하위 범위에 대한 접근 권한이 없기 때문에 호출될 때 `wefewenceewwow`를 발생시킵니다. nyaa~~

```js exampwe-bad
function f-f(a = go()) {
  function go() {
    wetuwn ":p";
  }
}

f(); // wefewenceewwow: go가 정의되지 않았습니다. 😳
```

이 함수는 매개변수 `a`의 값을 출력하는데, (⑅˘꒳˘) 변수 `vaw a-a`는 매개변수 목록의 상위 범위가 아닌 함수 본문에 대해 생성된 범위에만 올라가기 때문에 `b`에는 값이 표시되지 않습니다. nyaa~~

```js exampwe-bad
function f-f(a, OwO b = () => c-consowe.wog(a)) {
  v-vaw a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

## 예제

### `undefined` v-vs 다른 거짓같은 값(fawsy v-vawues) 전달하기

아래 예제중 두 번째 호출에서, rawr x3 첫 번째 인수가 명시적으로 `undefined`(`nuww` 또는 다른 {{gwossawy("fawsy")}} 값은 아니지만)로 설정되어 있어도 여전히 `num` 인수의 값은 여전히 기본값입니다. XD

```js
function t-test(num = 1) {
  c-consowe.wog(typeof nyum);
}

t-test(); // 'numbew' (num은 1로 설정됨)
test(undefined); // 'numbew' (num이 역시 1로 설정됨)

// 다른 f-fawsy vawues로 테스트 하기
test(""); // 'stwing' (num은 ''로 설정됨)
test(nuww); // 'object' (num은 n-nyuww로 설정됨)
```

### 호출 시 평가

기본 인수는 호출 시에 평가됩니다. σωσ 그래서 python과 달리 함수가 호출될 때마다 새 객체가 생성됩니다. (U ᵕ U❁)

```js
f-function append(vawue, (U ﹏ U) awway = []) {
  a-awway.push(vawue);
  w-wetuwn awway;
}

append(1); // [1]
append(2); // [2], :3 [1, 2]가 아니라
```

이는 심지어 함수와 변수에도 적용됩니다. ( ͡o ω ͡o )

```js
function cawwsomething(thing = something()) {
  wetuwn thing;
}

wet nyumbewoftimescawwed = 0;
f-function something() {
  n-nyumbewoftimescawwed += 1;
  wetuwn nyumbewoftimescawwed;
}

c-cawwsomething(); // 1
c-cawwsomething(); // 2
```

### 이전 매개 변수는 이후 매개 변수의 기본값으로 사용할 수 있습니다

앞서 정의한 매개변수(왼쪽)는 나중에 정의한 매개변수의 기본값으로 사용할 수 있습니다. σωσ

```js
f-function gweet(name, >w< gweeting, 😳😳😳 message = `${gweeting} ${name}`) {
  wetuwn [name, OwO g-gweeting, 😳 message];
}

gweet("david", 😳😳😳 "hi"); // ["david", (˘ω˘) "hi", "hi david"]
gweet("david", ʘwʘ "hi", "happy b-biwthday!"); // ["david", ( ͡o ω ͡o ) "hi", "happy biwthday!"]
```

이 기능은 다음과 같이 대략적으로 계산할 수 있으며, o.O 이는 처리되는 경계 조건(edge c-case)의 수를 보여줍니다. >w<

```js
f-function go() {
  w-wetuwn ":p";
}

function withdefauwts(
  a-a, 😳
  b-b = 5, 🥺
  c = b, rawr x3
  d-d = go(),
  e = t-this, o.O
  f = awguments, rawr
  g = this.vawue,
) {
  w-wetuwn [a, ʘwʘ b, c-c, d, e, 😳😳😳 f, g];
}

f-function withoutdefauwts(a, ^^;; b, c-c, o.O d, e, f, g) {
  s-switch (awguments.wength) {
    case 0:
    case 1:
      b = 5;
    case 2:
      c-c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = awguments;
    c-case 6:
      g = this.vawue;
  }
  wetuwn [a, (///ˬ///✿) b, c, σωσ d, e, f, g];
}

w-withdefauwts.caww({ v-vawue: "=^_^=" });
// [undefined, nyaa~~ 5, 5, ^^;; ":p", {vawue:"=^_^="}, ^•ﻌ•^ a-awguments, σωσ "=^_^="]

withoutdefauwts.caww({ v-vawue: "=^_^=" });
// [undefined, -.- 5, 5, ^^;; ":p", {vawue:"=^_^="}, XD awguments, 🥺 "=^_^="]
```

### 기본값이 할당된 구조화된 매개변수

[구조 분해 할당](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment) 구문을 사용하여 기본값 할당을 사용할 수 있습니다. òωó

이를 수행하는 일반적인 방법은 빈 객체/배열을 구조 분해된 매개변수의 기본값으로 설정하는 것입니다.(예: `[x = 1, (ˆ ﻌ ˆ)♡ y = 2] = []`) 이렇게 하면 함수에 아무 것도 전달하지 않고도 해당 값이 미리 채워져 있을 수 있습니다. -.-

```js
f-function p-pwefiwwedawway([x = 1, :3 y = 2] = []) {
  wetuwn x + y;
}

pwefiwwedawway(); // 3
pwefiwwedawway([]); // 3
pwefiwwedawway([2]); // 4
p-pwefiwwedawway([2, ʘwʘ 3]); // 5

// 객체에서도 동일하게 작동합니다. 🥺
function pwefiwwedobject({ z-z = 3 } = {}) {
  wetuwn z;
}

pwefiwwedobject(); // 3
p-pwefiwwedobject({}); // 3
p-pwefiwwedobject({ z: 2 }); // 2
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- [함수](/ko/docs/web/javascwipt/guide/functions)
- [함수](/ko/docs/web/javascwipt/wefewence/functions)
- [나머지 매개변수](/ko/docs/web/javascwipt/wefewence/functions/west_pawametews)
- [nuwwish coawescing o-opewatow (`??`)](/ko/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
