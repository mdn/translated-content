---
title: 깊은 복사
slug: Glossary/Deep_copy
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

객체의 **깊은 복사**는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조(같은 기본 값을 가리킴)를 공유하지 않는 복사입니다. 따라서 원본이나 복사본을 변경할 때, 다른 객체가 변경되지 않는 것을 보장할 수 있습니다. 즉, 의도치 않게 원본이나 복사본을 변경하지 않을 것입니다. 이러한 동작은 원본이나 복사본이 변경되면 다른 객체도 변경될 수 있는 [얕은 복사](/ko/docs/Glossary/Shallow_copy)의 동작과 대조적입니다 (두 객체는 같은 참조를 공유하고 있기 때문).

JavaScript에서 표준 내장 객체의 복사 작업([전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Object.create()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create))은 깊은 복사본을 생성하지 않습니다 (대신 얕은 복사본을 생성합니다).

[직렬화](/ko/docs/Glossary/Serialization)가 가능하다면 JavaScript 객체의 깊은 복사를 만드는 한 가지 방법은, {{jsxref("JSON.stringify()")}}를 사용하여 객체를 JSON 문자열로 변환한 다음, {{jsxref("JSON.parse()")}}로 문자열을 다시 (완전히 새로운) JavaScript 객체로 변환하는 것입니다.

```js
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Cingredients_list_deepcopy의 'list' 속성 값을 변경합니다.
ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// ingredients_list의 'list' 속성은 변경되지 않습니다.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

위의 코드에서 볼 수 있듯이, 깊은 복사는 원본 객체와 참조를 공유하지 않기 때문에 깊은 복사본에 어떠한 변경이 있어도 원본 객체에 영향을 주지 않습니다.

그러나 위 코드의 객체는 [직렬화](/ko/docs/Glossary/Serialization)할 수 있을 만큼 단순하지만, 많은 JavaScript 객체는 전혀 직렬화할 수 없습니다. 예를 들어, [함수](/ko/docs/Web/JavaScript/Guide/Functions) (클로저 포함), [심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol), [HTML DOM API](/ko/docs/Web/API/HTML_DOM_API)에서 HTML 요소를 나타내는 객체, 재귀 데이터, 그리고 많은 다른 경우가 있습니다. 이 경우 객체를 직렬화하기 위해 `JSON.stringify()`를 호출하면 실패할 것입니다. 그래서 이러한 객체의 깊은 복사본을 만드는 방법은 없습니다.

대신 직렬화 가능한 객체의 경우, 깊은 복사본을 생성하기 위해 [`structuredClone()`](/ko/docs/Web/API/structuredClone) 메서드를 사용할 수 있습니다. `structuredClone()`은 원본의 [전송가능한 객체](/ko/docs/Web/API/Web_Workers_API/Transferable_objects)를 단순히 복제하는 대신 새 복사본으로 전송할 수 있는 장점이 있습니다. 그러나 `structuredClone()`은 JavaScript 언어 자체의 기능이 아니라 [`window`](/ko/docs/Web/API/Window) 같은 전역 객체를 실행하는 브라우저 및 다른 JavaScript 런타임 기능입니다. 그리고 직렬화할 수 없는 객체를 복제하기 위해 `structuredClone()`를 호출하면, `JSON.stringify()` 를 호출해 직렬화 하는 것과 같은 방식으로 실패할 것입니다.

## 같이 보기

- [얕은 복사](/ko/docs/Glossary/Shallow_copy)
- [`window.structuredClone()`](/ko/docs/Web/API/structuredClone)
