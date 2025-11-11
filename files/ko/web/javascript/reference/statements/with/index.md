---
title: with
slug: Web/JavaScript/Reference/Statements/with
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Statements")}}{{Deprecated_Header}}

> [!NOTE]
> `with`문의 사용은 권장되지 않습니다. 혼란스러운 버그와 호환성 문제의 원인이 될 수 있고 최적화를 불가능하게 만들며 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서 금지되어 있기 때문입니다. 속성에 접근하고자 하는 객체를 임시 변수에 할당하는 것이 대안으로 권장됩니다.

`with`문은 문의 스코프 체인을 확장합니다.

## 구문

```js-nolint
with (expression)
  statement
```

- `expression`
  - : 문을 평가할 때 사용되는 스코프 체인에 주어진 표현식을 추가합니다. 표현식 주위의 괄호는 필수입니다.
- `statement`
  - : 임의의 문. 여러 개의 문을 실행하려면 [블록](/ko/docs/Web/JavaScript/Reference/Statements/block) 문(`{ ... }`)을 사용하여 문들을 묶습니다.

## 설명

식별자에는 두 가지 유형이 있습니다. '제한된' 식별자와 '제한되지 않은' 식별자입니다. 제한되지 않은 식별자는 해당 식별자가 어디서 왔는지 나타내지 않는 식별자입니다.

```js
foo; // 제한되지 않은 식별자
foo.bar; // bar는 제한된 식별자
```

일반적으로 제한되지 않은 식별자는 그 이름을 가진 변수를 찾기 위해 스코프 체인을 검색함으로써 이행됩니다. 반면에 제한된 식별자는 그 이름을 가진 속성을 찾기 위해 객체의 프로토타입 체인을 검색하여 이행됩니다.

```js
const foo = { bar: 1 };
console.log(foo.bar);
// foo는 스코프 체인에서 변수로 발견된다.
// bar는 foo에서 속성으로 발견된다.
```

이 규칙의 예외는 [전역 객체](/ko/docs/Glossary/Global_object)로, 이는 스코프 체인의 최상위에 위치하여 전역 객체의 속성들은 자동적으로 제한자 없이 참조할 수 있는 전역 변수가 됩니다.

```js
console.log(globalThis.Math === Math); // true
```

`with` 문은 문의 본문이 평가되는 동안 주어진 객체를 스코프 체인의 맨 앞에 추가합니다. 모든 제한되지 않은 이름은 상위 스코프 체인을 검색하기 전에 먼저 주어진 객체 내에서 ([in](/ko/docs/Web/JavaScript/Reference/Operators/in)으로 확인하여) 검색됩니다.

참고로 제한되지 않은 참조가 객체의 메서드를 조회하는 경우 그 메서드는 `with`문에 주어진 객체를 `this` 값으로 하여 호출됩니다.

```js
with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}
```

객체는 [`@@unscopables`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables) 속성을 가질 수 있으며, 이 속성은 (하위 호환성을 위해) 스코프 체인에 추가되지 않아야 하는 속성의 목록을 정의합니다. 자세한 내용은 [Symbol.unscopables](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables) 문서를 참고하십시오.

`with` 문을 사용하는 이유는 임시 변수를 하나 줄이는 것과 긴 객체 참조를 반복하는 걸 피함으로써 파일 크기를 줄이는 것입니다. 그러나 `with`문이 바람직하지 않은 이유들은 훨씬 더 많고 다음과 같습니다.

- 성능: `with` 문은 모든 이름 조회시에 지정된 객체를 첫번째로 검색하게 합니다. 따라서 지정된 객체의 속성이 아닌 모든 식별자는 `with` 블록 내에서 더 느리게 검색됩니다. 게다가 최적화 도구가 제한되지 않은 식별자 각각이 무엇을 참조하는지에 대해 어떤 가정도 할 수 없으므로, 식별자가 사용될 때마다 동일한 속성 조회를 반복해야 합니다.
- 가독성: `with` 문은 인간 독자나 JavaScript 컴파일러가 제한되지 않은 이름이 스코프 체인에서 발견될지, 만약 그렇다면 어떤 객체에서 발견될지를 판단하기 어렵게 만듭니다. 다음은 그 예시입니다.

  ```js
  function f(x, o) {
    with (o) {
      console.log(x);
    }
  }
  ```

  `f`의 정의만 보면 `with` 본문 내의 `x`가 무엇을 참조하는지 알 수 없습니다. `x`가 `o.x`인지 `f`의 첫 번째 형식 매개변수인지는 `f`가 호출될 때만 알 수 있습니다. 두 번째 매개변수로 전달하는 객체에 `x`를 정의하는 것을 잊어도 오류가 발생하지 않습니다. 대신 예상치 못한 결과가 나올 뿐입니다. 또한 이러한 코드는 실제 의도가 무엇인지도 불분명합니다.

- 향후 호환성: `with`를 사용하는 코드는 특히 단순한 객체가 아닌 대상과 함께 사용될 때 향후 호환되지 않는 코드가 될 수 있습니다. 이는 해당 대상이 미래에 더 많은 속성을 갖게 될 수 있기 때문입니다. 다음 예시를 살펴보겠습니다.

  ```js
  function f(foo, values) {
    with (foo) {
      console.log(values);
    }
  }
  ```

  ECMAScript 5 환경에서 `f([1, 2, 3], obj)`를 호출하면, `with` 문 내의 `values` 참조는 `obj`로 이행됩니다. 그러나 ECMAScript 2015는 `Array.prototype`에 [`values`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/values) 속성을 도입합니다(따라서 모든 배열에서 `values` 속성을 사용할 수 있게 됩니다). 따라서 환경을 업그레이드하면 `with` 문 내의 `values` 참조는 `[1, 2, 3].values`로 이행되며, 이는 버그를 일으킬 가능성이 큽니다.

  이 특정 예제에서는 `values`가 [`Array.prototype[@@unscopables]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)에 의해 스코프 지정 불가능하게 정의되어 있어 해당 코드의 `values`는 여전히 `values` 매개변수로 올바르게 이행됩니다. 만약 `values`가 스코프 지정 불가능으로 정의되지 않았다면, 이는 디버깅하기 어려운 문제가 될 수 있습니다.

## 예제

### with문 사용하기

다음 `with` 문은 {{jsxref("Math")}} 객체를 기본 객체로 지정합니다. `with` 문 다음의 문장들은 객체를 명시하지 않고 {{jsxref("Math/PI", "PI")}} 속성과 {{jsxref("Math/cos", "cos")}} 및 {{jsxref("Math/sin", "sin")}} 메서드를 참조합니다. JavaScript는 이러한 참조에 대해 Math 객체를 가정합니다.

```js
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### 현재 스코프에서 속성 구조 분해 할당을 사용하여 with문 피하기

대부분의 경우 [속성 구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring)을 통해서 `with` 사용을 피할 수 있습니다. 여기서는 `with`가 추가 스코프를 생성하는 동작을 모방하기 위해 추가 블록을 만들었지만 실제 사용에서는 이 블록을 보통 생략할 수 있습니다.

```js
let a, x, y;
const r = 10;

{
  const { PI, cos, sin } = Math;
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### IIFE를 사용하여 with문 피하기

만약 긴 이름의 참조를 여러 번 재사용해야 하는 표현식을 만들고 있으며 그 긴 이름을 표현식 내에서 제거하려고 한다면 [IIFE](/ko/docs/Glossary/IIFE)로 표현식을 감싸고 긴 이름을 인수로 제공할 수 있습니다.

```js
const objectHavingAnEspeciallyLengthyName = { foo: true, bar: false };

if (((o) => o.foo && !o.bar)(objectHavingAnEspeciallyLengthyName)) {
  // 이 분기가 실행됩니다.
}
```

### with문과 프록시를 사용해서 동적 네임스페이스 생성하기

`with`는 모든 변수 조회를 속성 조회로 변환하는 반면 [프록시](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)는 모든 속성 조회 호출을 가로챌 수 있게 합니다. 이를 결합하여 동적 네임스페이스를 생성할 수 있습니다.

```js
const namespace = new Proxy(
  {},
  {
    has(target, key) {
      // `console`과 같은 전역 속성을 가로채는 걸 피하십시오.
      if (key in globalThis) {
        return false;
      }
      // 모든 속성 조회를 가로챕니다.
      return true;
    },
    get(target, key) {
      return key;
    },
  },
);

with (namespace) {
  console.log(a, b, c); // "a" "b" "c"
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/block", "block", "", 1)}}
- [Strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Symbol.unscopables")}}
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
