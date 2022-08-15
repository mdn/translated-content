---
title: 'TypeError: Reduce of empty array with no initial value'
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
translation_of: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
---
{{jsSidebar("Errors")}}

## Message

```
    TypeError: 초기값이 없는 빈 배열에 대한 recude는 에러
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

자바스크립크에서 몇 몇의 reduce 함수들:

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}} and
- {{jsxref("TypedArray.prototype.reduce()")}}, {{jsxref("TypedArray.prototype.reduceRight()")}}).

이러한 함수들은 선택적으로 초기값(`initialValue`)을 사용합니다.(콜백(`callback)`의 첫번째 호출에 대한 첫번째 인수로 사용됩니다.) 그러나, 만약에 초기값을 설정하지 않는다면, {{jsxref("Array")}} or {{jsxref("TypedArray")}}에 대한 첫번째 엘리먼트를 초기값으로 사용 합니다. 이런 경우에 초기값이 없기 때문에 빈 배열이 제공될 경우 오류가 발생 합니다.

## Examples

### Invalid cases

This problem appears frequently when combined with a filter ({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}}) which will remove all elements of the list. Thus leaving none to be used as the initial value.

```js example-bad
var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x => x > 0)         // removes all elements
    .reduce((x, y) => x + y)    // no more elements to use for the initial value.
```

Similarly, the same issue can happen if there is a typo in a selector, or an unexpected number of elements in a list:

```js example-bad
var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(names, (acc, name) => acc + ", " + name);
```

### Valid cases

These problems can be solved in two different ways.

One way is to actually provide an `initialValue` as the neutral element of the operator, such as 0 for the addition, 1 for a multiplication, or an empty string for a concatenation.

```js example-good
var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x => x > 0)         // removes all elements
    .reduce((x, y) => x + y, 0) // the initial value is the neutral element of the addition
```

Another way would be two to handle the empty case, either before calling `reduce`, or in the callback after adding an unexpected dummy initial value.

```js example-good
var names = document.getElementsByClassName("names");

var name_list1 = "";
if (names1.length >= 1)
  name_list1 = Array.prototype.reduce.call(names, (acc, name) => acc + ", " + name);
// name_list1 == "" when names is empty.

var name_list2 = Array.prototype.reduce.call(names, (acc, name) => {
  if (acc == "") // initial value
    return name;
  return acc + ", " + name;
}, "");
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
