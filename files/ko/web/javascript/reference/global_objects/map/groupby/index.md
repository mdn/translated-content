---
title: Map.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

> [!NOTE]
> 일부 브라우저의 일부 버전에서는 이 메서드는 `Array.prototype.groupToMap()`으로 구현되었습니다. 웹 호환성 문제때문에 현재는 정적 메서드로 구현되었습니다. 상세 내역은 [브라우저 호환성 표](#브라우저_호환성)를 확인하시기 바랍니다.

**`Map.groupBy()`** 정적 메서드는 제공된 콜백 함수가 반환한 값을 사용하여 주어진 순회 가능한 요소를 그룹화합니다. 최종적으로 반환되는 {{jsxref("Map")}}는 테스트 함수의 고유 값을 키로 사용하여 각 그룹의 요소 배열을 가져오는 데 사용할 수 있습니다.

이 메서드는 주로 객체와 연관된 요소를 그룹화할 때, 특히 객체가 시간이 지남에 따라 변경될 수 있는 경우에 유용합니다. 객체가 불변인 경우 대신 문자열을 사용하여 객체를 표현하고 {{jsxref("Object.groupBy()")}}로 요소를 그룹화할 수 있습니다.

{{InteractiveExample("JavaScript Demo: Map.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

## 구문

```js-nolint
Map.groupBy(items, callbackFn)
```

### 매개변수

- `items`
  - : {{jsxref("Array")}}같은 그룹화될 [순회 가능한 요소](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)입니다.
- `callbackFn`
  - : 순회 가능한 각 요소에 대해 실행할 함수입니다. 이 함수는 현재 엘리먼트의 그룹을 나타내는 값({{Glossary("object")}} 또는 {{Glossary("primitive", "원시 값")}})을 반환해야 합니다. 이 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 처리할 현재 요소
    - `index`
      - : 처리할 현재 요소의 인덱스

### 반환 값

각 그룹에 대한 키가 있는 {{jsxref("Map")}} 객체로서 각각 연결된 그룹의 요소가 포함된 배열에 할당됩니다.

## 설명

`Map.groupBy()`는 순회 가능한 각 요소에 대해 제공된 `callbackFn` 함수를 한 번씩 호출합니다. 콜백 함수는 연관된 요소의 그룹을 나타내는 값을 반환해야 합니다. `callbackFn`이 반환한 값은 `Map.groupBy()`가 반환한 {{jsxref("Map")}}의 키로 사용됩니다. 각 키에는 콜백이 동일한 값을 반환한 모든 요소가 포함된 연관 배열이 있습니다.

반환된 {{jsxref("Map")}}과 원본 순회 가능한 요소는 동일합니다. {{Glossary("deep copy", "깊은 복사")}}가 아닙니다. 요소의 내부 구조를 변경하면 원본 순회 가능한 요소와 반환된 {{jsxref("Map")}}에 모두 반영됩니다.

이 방법은 시간이 지남에 따라 변경될 수 있는 특정 객체와 관련된 정보를 그룹화해야 할 때 유용합니다. 객체가 수정되더라도 반환된 `Map`의 키로 계속 작동하기 때문입니다. 대신 객체에 대한 문자열 표현을 생성하고 이를 {{jsxref("Object.groupBy()")}}의 그룹화 키로 사용하는 경우 객체가 변경되어도 원본 객체와 해당 표현 간의 매핑을 유지해야 합니다.

> [!NOTE]
> 반환된 `Map`의 그룹에 접근하려면 원래 `Map`에서 키로 사용되었던 것과 동일한 개체를 사용해야 합니다(속성을 수정할 수는 있지만 말이죠). 이름과 속성이 같은 다른 객체를 사용할 수 없습니다.

`Map.groupBy`는 `this`의 값을 읽지 않습니다. 이 함수는 모든 객체에서 호출할 수 있으며 새로운 {{jsxref("Map")}} 인스턴스가 반환됩니다.

## 예제

### Map.groupBy() 사용하기

먼저 다양한 식료품의 재고를 나타내는 객체가 포함된 배열을 정의합니다. 각 식품에는 `type`과 `quantity`이 있습니다.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

아래 코드는 요소의 `quantity < 6` 여부에 따라 `restock` 또는 `sufficient`라는 객체 키를 반환하는 화살표 함수와 함께 `Map.groupBy()`를 사용합니다. 반환된 `result` 객체는 `Map`이기 때문에 배열을 얻으려면 키와 함께 `get()`을 호출해야 합니다.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

함수의 인수 `{ quantity }`는 [함수 인수의 객체 구조 분해 구문](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter)의 기본 예시입니다. 이렇게 하면 매개변수로 전달된 객체의 `quantity` 속성을 풀고 함수 본문에 있는 `quantity`이라는 변수에 할당합니다. 이는 함수 내에서 요소의 관련 값에 접근하는 매우 간단명료한 방법입니다.

`Map`의 키는 수정한 후에도 계속 사용할 수 있습니다. 그러나 키를 다시 생성하여 계속 사용할 수는 없습니다. 따라서 맵을 사용해야 하는 모든 것이 해당 키에 대한 참조를 유지하는 것이 중요합니다.

```js
// 키는 수정 가능하고 여전히 사용 중입니다.
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// 같은 구조를 가지고 있더라도 새로운 키는 사용할 수 없습니다!
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Map.groupBy` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 가이드
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
