---
title: 깊은 복사
slug: Glossary/Deep_copy
l10n:
  sourceCommit: 1c285cab12ee953a74d38a0800951126b48e1a81
---

{{GlossarySidebar}}

객체의 **깊은 복사**는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조(메모리 내의 같은 값을 가리킴)를 공유하지 않는 복사입니다. 따라서 원본이나 복사본을 변경할 때, 다른 객체가 변경되지 않는 것을 보장할 수 있습니다. 이러한 동작은 원본이나 복사본의 중첩된 속성을 변경하면 다른 객체도 변경될 수 있는 [얕은 복사](/ko/docs/Glossary/Shallow_copy)의 동작과 대조적입니다.

두 객체 `o1`과 `o2`는 관찰된 동작이 같다면 구조적으로 동일합니다. 이러한 동작에는 다음이 포함됩니다.

1. `o1`과 `o2`의 속성은 같은 이름과 순서입니다.
2. 두 객체의 속성 값은 구조적으로 동일합니다.
3. 두 객체의 프로토타입 체인은 구조적으로 동일합니다 (구조적으로 동일하다는 것은 이러한 객체는 보통 일반 객체이므로 둘 다 `Object.prototype`에서 상속된다는 것을 의미합니다).

구조적으로 동일한 객체는 같은 객체 (`o1 === o2`) 또는 복사본 (`o1 !== o2`)일 수 있습니다. 동일한 원시 값은 항상 동일하게 비교하기 때문에 복사본을 만들 수 없습니다.

이제 깊은 복사를 다음과 같이 보다 공식적으로 정의할 수 있습니다.

1. 두 객체는 같은 객체가 아닙니다 (`o1 !== o2`).
2. `o1`과 `o2`의 속성은 같은 이름과 순서입니다.
3. 두 객체의 속성 값은 서로의 깊은 복사 값입니다.
4. 두 객체의 프로토타입 체인은 구조적으로 동일합니다.

깊은 복사는 프로토타입 체인을 복사할 수도 있고 복사하지 않을 수도 있습니다 (그리고 자주 복사하지 않습니다). 그러나 구조적으로 동일하지 않은 프로토타입 체인을 가진 두 객체(예로, 하나는 배열이고 다른 하나는 일반 객체)는 서로의 복사본이 아닙니다.

속성이 모두 원시 값인 객체의 복사는 깊은 복사와 [얕은 복사](/ko/docs/Glossary/Shallow_copy)의 정의에 모두 부합합니다. 그렇지만 중첩된 속성이 없기 때문에 이런 복사의 깊이에 대해 이야기하는 것은 다소 쓸모가 없습니다. 보통 중첩된 속성을 변경하는 맥락에서 깊은 복사하는 것에 대해 이야기합니다.

JavaScript에서, 모든 표준 내장 객체의 복사 작업([전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Object.create()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create))은 깊은 복사본을 생성하지 않습니다 (대신, 얕은 복사본을 생성합니다).

[직렬화](/ko/docs/Glossary/Serialization)가 가능하다면 JavaScript 객체의 깊은 복사를 만드는 한 가지 방법은, {{jsxref("JSON.stringify()")}}를 사용하여 객체를 JSON 문자열로 변환한 다음, {{jsxref("JSON.parse()")}}로 문자열을 다시 (완전히 새로운) JavaScript 객체로 변환하는 것입니다.

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
```

깊은 복사는 원본 객체와 참조를 공유하지 않기 때문에 깊은 복사본에 어떠한 변경이 있어도 원본 객체에 영향을 주지 않습니다.

```js
// ingredientsListDeepCopy의 'list' 속성 값을 변경합니다.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// ingredientsList의 'list' 속성은 변경되지 않습니다.
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

그러나 위 코드의 객체는 [직렬화](/ko/docs/Glossary/Serialization)할 수 있을 만큼 단순하지만, 많은 JavaScript 객체는 전혀 직렬화할 수 없습니다. 예를 들어, [함수](/ko/docs/Web/JavaScript/Guide/Functions) (클로저 포함), [심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol), [HTML DOM API](/ko/docs/Web/API/HTML_DOM_API)에서 HTML 요소를 나타내는 객체, 재귀 데이터, 그리고 많은 다른 경우가 있습니다. 이 경우 객체를 직렬화하기 위해 `JSON.stringify()`를 호출하면 실패할 것입니다. 그래서 이러한 객체의 깊은 복사본을 만드는 방법은 없습니다.

Web API [`structuredClone()`](/ko/docs/Web/API/Window/structuredClone)은 또한 깊은 복사본을 만들고 원본에서 [전송가능한 객체](/ko/docs/Web/API/Web_Workers_API/Transferable_objects)를 복사하는 대신 새로운 복사본으로 전송할 수 있는 장점이 있습니다. 또한 `Error`와 같은 더 많은 데이터 타입을 처리합니다. 그러나 `structuredClone()`은 JavaScript 언어 자체의 기능이 아니라 web API를 실행하는 브라우저 및 다른 JavaScript 호스트의 기능입니다. 그리고 직렬화할 수 없는 객체를 복제하기 위해 `structuredClone()`을 호출하면, `JSON.stringify()`를 호출해 직렬화하는 것과 같은 방식으로 실패할 것입니다.

## 같이 보기

- [얕은 복사](/ko/docs/Glossary/Shallow_copy)
- [`window.structuredClone()`](/ko/docs/Web/API/Window/structuredClone)
