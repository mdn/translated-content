---
title: "TypeError: Reduce of empty array with no initial value"
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
---

{{jsSidebar("Errors")}}

## Message

```
    TypeError: 초기값이 없는 빈 배열에 대해 reduce를 실행
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

자바스크립트에는 reduce 함수가 여럿 있습니다.

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}} and
- {{jsxref("TypedArray.prototype.reduce()")}}, {{jsxref("TypedArray.prototype.reduceRight()")}}).

위의 함수들을 사용할 때 `initialValue`를 지정할 수 있습니다(`callback`을 처음 호출할 때 첫 번째 인자로 사용됨). 초기값을 제공하지 않으면 {{jsxref("Array")}} 또는 {{jsxref("TypedArray")}}의 첫 번째 원소를 초기값으로 사용합니다. 빈 배열을 제공해서 초기값을 반환할 수 없는 경우에 이 에러가 발생합니다.

## Examples

### Invalid cases

reduce 함수를 filter ({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}})와 조합해서 사용할 때 이 에러가 자주 발생합니다. filter가 리스트의 모든 원소를 삭제하면 초기값으로 사용할 값이 없어집니다.

```js example-bad
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // 모든 원소를 삭제
  .reduce((x, y) => x + y); // 초기값으로 사용할 원소가 없음
```

비슷한 경우로, selector 안에 오타가 있거나 list의 원소 수가 비정상일 때에도 같은 에러가 발생할 수 있습니다.

```js example-bad
var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(
  names,
  (acc, name) => acc + ", " + name,
);
```

### Valid cases

이 문제를 해결할 수 있는 방법은 두 가지입니다.

첫 번째는 `initialValue`로 operator의 중립 원소를 제공하는 방법입니다. 예를 들어 덧셈에는 0을, 곱셈에는 1을, 문자열 결합에는 빈 문자열을 지정할 수 있습니다.

```js example-good
var ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // 모든 원소 삭제함
  .reduce((x, y) => x + y, 0); // 덧셈에 대한 중립 원소를 초기값으로 지정
```

두 번째는 `reduce`를 호출하기 전이나 callback 내부에서 잘못된 초기값을 더하기 전에 빈 인자 문제를 처리하는 방법입니다.

```js example-good
var names = document.getElementsByClassName("names");

var name_list1 = "";
if (names1.length >= 1)
  name_list1 = Array.prototype.reduce.call(
    names,
    (acc, name) => acc + ", " + name,
  );
// name_list1 == "" when names is empty.

var name_list2 = Array.prototype.reduce.call(
  names,
  (acc, name) => {
    if (acc == "")
      // initial value
      return name;
    return acc + ", " + name;
  },
  "",
);
// name_list2 == "" when names is empty.
```

## See also

- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
