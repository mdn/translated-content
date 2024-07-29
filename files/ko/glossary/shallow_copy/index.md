---
title: 얕은 복사
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: 1c285cab12ee953a74d38a0800951126b48e1a81
---

{{GlossarySidebar}}

객체의 **얕은 복사**는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 [참조](/ko/docs/Glossary/Object_reference) (메모리 내의 같은 값을 가리킴)를 공유하는 복사입니다. 따라서 원본이나 복사본을 변경하면, 다른 객체 또한 변경될 수 있습니다. 이러한 동작은 원본과 복사본이 완전히 독립적인 [깊은 복사](/ko/docs/Glossary/Deep_copy)의 동작과 대조적입니다.

더 공식적으로, 다음과 같은 경우 두 객체 `o1`과 `o2`는 얕은 복사입니다.

1. 두 객체는 같은 객체가 아닙니다 (`o1 !== o2`).
2. `o1`과 `o2`의 속성은 같은 이름과 순서입니다.
3. 두 객체의 속성 값은 동일합니다.
4. 두 객체의 프로토타입 체인은 동일합니다.

[구조상 동일한 정의](/ko/docs/Glossary/Deep_copy) 또한 참고하세요.

속성이 모두 원시 값인 객체의 복사는 [깊은 복사](/ko/docs/Glossary/Deep_copy)와 얕은 복사의 정의에 모두 부합합니다. 그렇지만 중첩된 속성이 없기 때문에 이런 복사의 깊이에 대해 이야기하는 것은 다소 쓸모가 없습니다. 보통 중첩된 속성을 변경하는 맥락에서 깊은 복사하는 것에 대해 이야기합니다.

얕은 복사의 경우, 중첩된 객체의 값이 아닌 최상위 속성만 복사합니다. 그러므로,

- 복사본의 최상위 속성을 재할당해도 원본 객체에는 영향을 끼치지 않습니다.
- 복사본의 중첩 객체 속성을 재할당하면 원본 객체에 영향을 끼칩니다.

JavaScript에서, 모든 표준 내장 객체의 복사 작업([전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Object.assign()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), [`Object.create()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create))은 깊은 복사가 아닌 얕은 복사본을 생성합니다.

`ingredientsList` 배열 객체가 생성된 다음, `ingredientsList`를 복사하여 생성된 `ingredientsListCopy` 객체가 있는 다음 예제를 살펴보세요.

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]
```

중첩된 속성 값을 재할당하면 두 객체 모두에서 볼 수 있습니다.

```js
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]
```

최상위 속성 값(인덱스가 `0`인 경우)을 재할당하면 변경된 객체에서만 볼 수 있습니다.

```js
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]
```

## 같이 보기

- [깊은 복사](/ko/docs/Glossary/Deep_copy)
