---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

> [!NOTE]
> 일부 브라우저의 특정 버전에서는 이 메서드가 `Array.prototype.group()` 메서드로 구현되었습니다. 웹 호환성 문제로 인해 현재는 정적 메서드로 구현되었습니다. 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 확인하세요.

**`Object.groupBy()`** 정적 메서드는 제공된 콜백 함수가 반환하는 문자열 값에 따라 주어진 순회 가능한 여러 요소를 그룹화합니다. 반환된 객체는 각 그룹에 대해 별도의 속성을 가지며, 이 속성들은 해당 그룹의 요소들을 포함하는 배열을 담고 있습니다.

이 메서드는 그룹 이름을 문자열로 표현할 수 있을 때 사용해야 합니다. 만약 임의의 값을 키로 사용하여 요소들을 그룹화해야 한다면, 대신 {{jsxref("Map.groupBy()")}}를 사용하세요.

<!-- {{EmbedInteractiveExample("pages/js/object-groupby.html")}} -->

## 구문

```js-nolint
Object.groupBy(items, callbackFn)
```

### 매개변수

- `items`
  - : 요소가 그룹화 될 [순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)({{jsxref("Array")}} 같은).
- `callbackFn`
  - : 각 순회 가능 요소에 대해 실행할 함수. 현재 요소의 그룹을 가리키는 속성 키(문자열 혹은 [심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol))를 반드시 반환해야 합니다. 이 함수는 다음의 요소와 함께 호출됩니다.
    - `element`
      - : 현재 처리 중인 요소.
    - `index`
      - : 현재 처리 중인 요소의 인덱스.

### 반환 값

연관된 그룹의 요소를 가지는 배열이 각각의 요소에 저장되어 있는 [`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)

## 설명

`Object.groupBy()`는 순회 가능한 각 요소에 대해 제공된 `callbackFn` 함수를 한 번씩 호출합니다. 이 콜백 함수는 관련 요소의 그룹을 나타내는 문자열 또는 심볼을 반환해야 합니다 (문자열이나 심볼이 아닌 값들은 문자열로 [강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)됩니다). `callbackFn`이 반환한 값들은 `Map.groupBy()`가 반환하는 객체의 키로 사용됩니다. 각 키는 콜백이 동일한 값을 반환한 모든 요소들을 포함하는 배열과 연관됩니다.

반환된 객체와 원본 순회 가능한 여러 요소는 동일합니다 ({{Glossary("deep copy", "깊은 복사")}}가 아닙니다). 요소들의 내부 구조를 변경하면 원본 순회 가능 요소와 반환된 객체 모두에 그 변경이 반영됩니다.

## 예제

### Object.groupBy() 사용하기

첫 번째로 다양한 음식의 인벤토리를 표현하는 객체를 가지는 배열을 정의하겠습니다. 각 음식은 `type`과 `quantity`가 있습니다.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

요소의 `type` 속성의 값에 따라 요소를 그룹화합니다.

```js
const result = Object.groupBy(inventory, ({ type }) => type);

/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

화살표 함수는 호출될 때마다 각 배열 요소의 `type`을 반환합니다. 함수 인자 `{ type }`은 [함수 인자를 위한 객체 구조 분해 문법](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter)의 기본적인 예시라는 점 명심하시기 바랍니다. 이는 매개변수로 전달된 객체에서 `type` 속성을 꺼내어 함수 본문 내에서 `type`이라는 이름의 변수에 할당합니다.

이는 함수 내에서 요소들의 관련 값에 접근하는 매우 간결한 방법입니다.

또한 요소들의 하나 이상의 속성 값으로부터 추론된 그룹을 만들 수 있습니다. 아래는 매우 유사한 예시로, `quantity` 필드의 값을 기반으로 항목들을 `ok` 또는 `restock` 그룹으로 나누는 방법을 보여줍니다.

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);

/* Result is:
{
  restock: [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  ok: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Object.groupBy` 폴리필](https://github.com/zloirock/core-js#array-grouping)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
