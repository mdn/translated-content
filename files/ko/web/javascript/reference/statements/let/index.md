---
title: let
slug: Web/JavaScript/Reference/Statements/let
---

{{jsSidebar("Statements")}}

**`let`** 명령문은 블록 스코프의 범위를 가지는 지역 변수를 선언하며, 선언과 동시에 임의의 값으로 초기화할 수도 있습니다.

{{EmbedInteractiveExample("pages/js/statement-let.html")}}

## 구문

```js
let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];
```

### 매개변수

- `nameN`
  - : 변수 이름. 모두 유효한 JavaScript 식별자여야 합니다.
- `valueN` {{optional_inline}}
  - : 각각의 변수 선언에 대해, 유효한 JavaScript 표현식을 지정해 변수의 초기 값을 지정할 수 있습니다.

이 구문 대신 [구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 사용해서 변수를 선언할 수도 있습니다.

```js
let { bar } = foo; // foo = { bar: 10, baz: 12 };
/* 10의 값을 가진 'bar' 변수를 생성 */
```

## 설명

`let`을 사용하면 {{jsxref("statements/block", "블록 명령문", "", 1)}}이나 `let`을 사용한 표현식 내로 범위가 제한되는 변수를 선언할 수 있습니다. 이는 `let`이 {{jsxref("statements/var", "var")}} 키워드와 다른 점으로, `var`는 변수를 블록을 고려하지 않고 현재 함수 (또는 전역 스코프) 어디에서나 접근할 수 있는 변수를 선언합니다. 또한 `let`은 [파서가 구문을 평가해야만 변수를 값으로 초기화](#시간상_사각지대)(아래 참고)한다는 점도 `var`와 다릅니다.

{{jsxref("statements/const", "const")}}와 마찬가지로 `let` 역시 전역 범위 선언에 사용(최상위 스코프 선언)해도 {{domxref("window")}} 객체에 새로운 속성을 추가하지 않습니다.

왜 키워드의 이름이 "**let**"이 됐는지에 대한 설명은 [여기](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri)서 읽을 수 있습니다.

> **참고:** `let` 변수가 가진 다양한 문제는, `let` 변수 선언을 현재 스코프의 맨 위에서 수행해서 피할 수 있습니다.
> (가독성에 영향을 줄 수 있습니다)

## 예제

### 스코프 규칙

`let`으로 선언한 변수는 자신을 선언한 블록과 모든 하위 블록을 스스로의 스코프로 가집니다. 이런 점에서는 `let`이 `var`와 유사합니다. 그러나 둘의 중요한 차이는, `var`의 경우 스코프가 '자신을 선언한 블록'이 아니라, 자신의 선언을 포함하는 함수라는 점입니다.

```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // 같은 변수!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2; // 다른 변수
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

프로그램 최상위에서 사용할 경우 `var`는 전역 객체에 속성을 추가하지만 `let`은 추가하지 않습니다.

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### 비공개 멤버 모사

[생성자](/ko/docs/Glossary/Constructor)와 `let`을 함께 사용하면 [클로저](/ko/docs/Web/JavaScript/Closures)를 사용하지 않아도 비공개 멤버를 나타낼 수 있습니다.

```js
var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function () {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

클로저를 사용하면 `var`를 써도 위와 동일한 은닉 패턴을 구현할 수 있습니다. 그러나 이 경우, 위 코드와 같은 단순 블록 스코프를 사용할 수 없으며 함수 스코프(보통 모듈 패턴의 {{glossary("IIFE")}})가 필요합니다.

### 재선언

같은 변수를 같은 함수나 블록 스코프 안에서 다시 선언하려고 시도하면 {{jsxref("SyntaxError")}}가 발생합니다.

```js example-bad
if (x) {
  let foo;
  let foo; // SyntaxError
}
```

{{jsxref("Statements/switch", "switch")}} 명령문에는 블록이 하나밖에 없으므로 이 오류를 자주 마주칠 수 있습니다.

```js example-bad
let x = 1;
switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // 재선언으로 인한 SyntaxError
    break;
}
```

그러나 분기에 블록을 배치하면 블록 스코프도 생성하므로 재선언으로 인한 오류가 발생하지 않습니다.

```js
let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

### 시간상 사각지대

`let` 변수는 초기화하기 전에는 읽거나 쓸 수 없습니다(선언 구문에 초기 값을 지정하지 않은 경우 `undefined`로 초기화함). 초기화 전에 접근을 시도하면 {{jsxref("ReferenceError")}}가 발생합니다.

> **참고:** {{jsxref("Statements/var", "var")}} 변수와 다른 점으로, `var`의 경우 선언 전에 접근할 시 `undefined`입니다.

변수 스코프의 맨 위에서 변수의 초기화 완료 시점까지의 변수는 "시간상 사각지대"(Temporal Dead Zone, TDZ)에 들어간 변수라고 표현합니다.

```js example-bad
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```

"시간상" 사각지대인 이유는, 사각지대가 코드의 작성 순서(위치)가 아니라 코드의 실행 순서(시간)에 의해 형성되기 때문입니다. 예컨대 아래 코드의 경우 `let` 변수 선언 코드가 그 변수에 접근하는 함수보다 아래에 위치하지만, 함수의 호출 시점이 사각지대 밖이므로 정상 동작합니다.

```js
{
  // TDZ가 스코프 맨 위에서부터 시작
  const func = () => console.log(letVar); // OK

  // TDZ 안에서 letVar에 접근하면 ReferenceError

  let letVar = 3; // letVar의 TDZ 종료
  func(); // TDZ 밖에서 호출함
}
```

#### TDZ와 `typeof`

`typeof` 연산자를 TDZ 내의 `let` 변수에 사용해도 {{jsxref("ReferenceError")}}가 발생합니다.

```js example-bad
console.log(typeof i); // ReferenceError
let i = 10;
```

선언조차 하지 않은 변수, 또는 `undefined`를 값으로 가진 변수와 다른 점입니다.

```js
console.log(typeof undeclaredVariable); // undefined 출력
```

#### 어휘적 스코프와 결합한 TDZ

아래 코드는 주석으로 표기한 지점에서 `ReferenceError`가 발생합니다.

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

바깥 스코프의 `var foo`가 값을 가지므로 `if` 블록 또한 평가됩니다. 그러나 어휘적 스코프로 인해, `var foo`의 값은 블록 내에서 사용할 수 없습니다. 이곳의 `foo` 식별자는 `let foo`를 가리키기 때문입니다. 따라서 `(foo + 55)` 표현식은 `let foo`의 초기화가 끝나지 않은, 즉 TDZ의 내부이며 `ReferenceError`가 발생하게 되는 것입니다.

아래와 같은 코드에서는 이 현상으로 인해 상당한 혼란을 겪을 수 있습니다. 반복문의 `let n of n.a`는 `for` 블록의 스코프에 속하므로, 식별자 `n.a`는 반복문 스스로가 선언(`let n`)하는 `n` 객체의 `a` 속성을 가리킵니다. 그리고 `n`의 선언 후 초기화가 아직 끝나지 않았으므로 `n.a`는 `let n`의 TDZ에 속합니다.

```js example-bad
function go(n) {
  // 이 n은 매개변수 n
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) {
    // ReferenceError
    console.log(n);
  }
}

go({ a: [1, 2, 3] });
```

### 기타 예제

블록 내에서 사용한 경우 `let`은 변수의 스코프를 해당 블록으로 제한합니다. `var`는 스코프를 함수로 제한한다는 차이에 주의하세요.

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // 전역 변수
  let b = 22; // if 블록 변수

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

그러나 `var`와 `let`을 아래와 같이 사용하면 {{jsxref("SyntaxError")}}입니다. 호이스팅으로 인해 `var`가 블록 최상단으로 끌어올려져, 변수 재선언을 하는 것과 같아지기 때문입니다.

```js example-bad
let x = 1;

{
  var x = 2; // 재선언으로 인한 SyntaxError
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [ES6 In
  Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
- [You
  Don't Know JS: Scope & Closures: Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md)
- [StackOverflow: What is the
  Temporal Dead Zone](https://stackoverflow.com/a/33198850/1125029)?
- [StackOverflow:
  What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable)
