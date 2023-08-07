---
title: 얕은 복사
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

객체의 **얕은 복사**는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 [참조](/ko/docs/Glossary/Object_reference) (같은 기본 값을 가리킴)를 공유하는 복사입니다. 따라서 원본이나 복사본을 변경하면 다른 객체 또한 변경될 수 있으므로 의도치 않게 원본이나 복사본이 변경될 수 있습니다. 이러한 동작은 원본과 복사본이 완전히 독립적인 [깊은 복사](/ko/docs/Glossary/Deep_copy)의 동작과 대조적입니다.

얕은 복사의 경우, 객체 기존 요소의 속성 값을 선택적으로 변경하는 것은 기존 요소에 완전히 새로운 값을 할당하는 것과 다르다는 것을 이해하는 것이 중요합니다. 

예를 들어, `copy` 라는 배열 객체의 얕은 복사본에서 `copy[0]` 요소의 값이 `{"list":["butter","flour"]}` 일 때, `copy[0].list = ["oil","flour"]`를 실행하면 원본 객체의 해당 요소 또한 변경될 것입니다. 원본 객체와 얕은 복사본이 공유하고 있는 객체의 속성을 선택적으로 변경했기 때문입니다.

그러나 대신 `copy[0] = {"list":["oil","flour"]}`를 실행하면, 원본 객체의 해당 요소는 **변경되지 않을 것입니다**. 이 경우에는 얕은 복사본이 원본 객체와 공유하고 있는 기존 배열 요소의 속성을 선택적으로 변경하지 않고, 얕은 복사본에서 `copy[0]` 배열 요소에 완전히 새로운 값을 할당하고 있기 때문입니다.

JavaScript에서, 모든 표준 내장 객체의 복사 작업([전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Object.create()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create))은 깊은 복사가 아닌 얕은 복사본을 생성합니다.

## 예제

`ingredients_list` 배열 객체가 생성된 다음, `ingredients_list`를 복사하여 생성된 `ingredients_list_copy` 객체가 있는 다음 예제를 살펴보세요.

```js
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]
```

`ingredients_list_copy`의 `list` 속성 값을 변경하면 원본 객체 `ingredients_list`의 `list` 속성 또한 변경됩니다.

```js
ingredients_list_copy[1].list = ["rice flour", "water"];
console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

`ingredients_list_copy`의 첫 번째 요소에 완전히 새로운 값을 할당해도 원본 객체 `ingredients_list`의 첫 번째 요소에는 어떠한 변경도 일어나지 않습니다.

```js
ingredients_list_copy[0] = "rice noodles";
console.log(ingredients_list[0]);
// noodles
console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

## 같이 보기

- [깊은 복사](/ko/docs/Glossary/Deep_copy)
