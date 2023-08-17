---
title: 인덱스 기반 컬렉션
slug: Web/JavaScript/Guide/Indexed_collections
l10n:
  sourceCommit: 7b35a48ac0a10b67f9bd5270b082d40deff9c953
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

이번 장에서는 인덱스 값에 의해 정렬이 되는 데이터 컬렉션에 대해 소개합니다. 배열과 유사 배열 구조인
{{jsxref("Array")}} 객체와 {{jsxref("TypedArray")}} 객체를 포함합니다.

배열은 이름과 인덱스를 사용하여 참조하는 값들의 순서가 있는 목록입니다.

예를 들면, 숫자로 된 사원번호로 인덱스되고 사원명을 가지고 있는 `emp`라는 배열을 고려해보겠습니다.
그래서 `emp[0]`은 사원번호 0번, `emp[1]`는 사원번호 1번, 이런 식이 되겠죠.

JavaScript는 명시적인 배열 데이터 형식을 가지고 있지 않습니다. 그러나 미리 정의된 `Array` 객체와 배열과 메서드를 사용하여
어플리케이션에서 배열로 작업할 수 있습니다. `Array` 객체에는 합치기(joining), 순서 뒤집기(reversing)
그리고 정렬(sorting)과 같은 다양한 방법으로 배열을 조작하는 메서드가 있습니다. 또한 배열의 길이를 결정하는 속성과
정규 표현식과 함께 사용할 수 있는 다양한 속성이 있습니다.

이 글에서는 배열에 초점을 맞추겠지만, 배열과 형식화 배열(typed array)은 유사한 메서드를 많이 공유하기 때문에
형식화 배열에도 동일한 개념이 많이 적용됩니다. 형식화 배열에 대한 자세한 내용은
[형식화 배열 가이드](/ko/docs/Web/JavaScript/Guide/Typed_arrays)를 참조하세요.

## 배열 생성

아래의 구문들은 동일한 배열을 생성합니다.

```js
const arr1 = new Array(element0, element1, /* … ,*/ elementN);
const arr2 = Array(element0, element1, /* … ,*/ elementN);
const arr3 = [element0, element1, /* … ,*/ elementN];
```

`element0, element1, …, elementN`은 배열의 요소에 대한 값의 목록입니다. 이러한 값이 명시되어 있을 경우 배열은
해당 값을 배열의 요소로 초기화됩니다. 배열의 `length` 속성은 인수의 수로 설정됩니다.

대괄호 구문을 "배열 리터럴" 또는 "배열 초기자(array initializer)"라고 합니다.
배열 성성을 위한 다른 형태보다 짧아서 일반적으로 선호하는 방법입니다. 자세한 내용은 [배열 리터럴](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)을 참조하세요.

길이가 0이 아니지만 요소가 없는 배열을 만들려면 다음 중 하나를 사용할 수 있습니다.

```js
// 이...
const arr1 = new Array(arrayLength);

// ...결과도 위와 같습니다
const arr2 = Array(arrayLength);

// 이것 역시 동일합니다
const arr3 = [];
arr3.length = arrayLength;
```

> **참고:** 위의 예제 코드에서, `arrayLength`는 반드시 `Number`여야 합니다.
> 그렇지 않으면, 하나의 요소(주어진 값)을 가지는 배열이 생성됩니다.
> `arr.length`를 호출하면 `arrayLength`가 반환이 되지만 해당 배열은 실제로 아무런 요소를 가지고 있지 않습니다.
> {{jsxref("Statements/for...in","for...in")}} 반복문을 실행하면 해당 배열은 아무런 요소를 반환하지 않습니다.

추가로 아래의 예제에서 볼 수 있듯이, 새로이 정의된 혹은 이미 존재하는 객체 변수의 속성으로 배열을 할당할 수 있습니다.

```js
const obj = {};
// …
obj.prop = [element0, element1, /* … ,*/ elementN];

// OR
const obj = { prop: [element0, element1, /* … ,*/ elementN] };
```

값이 `숫자`인 하나의 요소만을 가지는 배열을 생성하고자 할 경우, 반드시 대괄호 문법을 사용해야 합니다.
하나의 `숫자` 값을 `Array()` 생성자에게 전달할 경우, 그 숫자 값은 해당 배열의 요소가 아니라 `arrayLength`로 해석됩니다.

```js
// 아래 코드는 숫자 42라는 하나의 요소를 가진 배열을 생성합니다.
const arr = [42];

// 아래 코드는 arr.length가 42이면서 요소가 없는 배열을 생성합니다.
const arr = Array(42);

// 아래도 동일합니다.
const arr = [];
arr.length = 42;
```

`N`의 분수 부분이 0이 아닌 정수가 아닌 경우 `Array(N)`을 호출하면 `RangeError`가 발생합니다. 다음 예제는 이 동작을 설명합니다.

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

만약 임의의 데이터 유형의 단일 요소를 가지는 배열을 생성하고자 할 경우, 배열 표기법을 사용하는 것이 안전합니다.
혹은 빈 배열을 먼저 선언한 후 임의의 데이터 값을 해당 배열에 추가하는 것도 방법이 됩니다.

요소가 하나인 배열을 만들기 위해 {{jsxref("Array.of")}} 정적 메서드를 사용할 수 있습니다.

```js
const wisenArray = Array.of(9.3); // wisenArray는 오직 하나의 요소 9.3만을 가지고 있습니다.
```

## 배열 요소의 참조

요소도 속성이므로 [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors)를 사용하여 요소에 접근할 수 있습니다. 다음과 같은 배열을 정의한다고 가정해 보겠습니다.

```js
const myArray = ["Wind", "Rain", "Fire"];
```

배열의 첫번째 요소는 `myArray[0]`로 참조할 수 있고 두번째 요소는 `myArray[1]`로 참조할 수 있습니다.
배열의 인덱스 값은 0부터 시작합니다.

> **참고:** [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors)를 객체처럼 배열의 다른 속성에 접근하기 위해 사용할 수도 있습니다.
>
> ```js
> const arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

## 배열 채우기

요소에 값을 할당함으로서 배열을 채울 수 있습니다. 아래는 그 예입니다.

```js
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> **참고:** 위 코드에서 배열 연산자에 정수가 아닌 값을 제공하면 배열 요소 대신 배열을 나타내는 객체에 속성이 생성됩니다.
>
> ```js
> const arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

배열 생성 시 배열을 채울 수도 있습니다.

```js
const myArray = new Array("Hello", myVar, 3.14159);
// OR
const myArray = ["Mango", "Apple", "Orange"];
```

### 길이(length)에 대한 이해

실제 구현에서 JavaScript의 배열은 배열에 포함된 요소들을 배열의 인덱스 값을 속성 이름으로 사용하여 표준 객체의 속성처럼 저장합니다.

`length` 속성은 좀 특별합니다. 배열의 길이는 항상 마지막 요소의 인덱스에 1을 더한 값을 반환합니다.
다음 예제에서 `'Dusty'`는 인덱스 `30`번 째에 위치하기 때문에 `cats.length`는 `30 + 1`을 반환합니다.

기억하실 것은 JavaScript 배열의 인덱스는 항상 `1`부터가 아닌 `0`부터 시작한다는 점입니다.
이는 아래 예제처럼 배열의 `length` 속성은 배열에 저장된 가장 큰 인덱스보다 1만큼 큰 값이 된다는 뜻입니다.

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

`length` 속성에 값을 할당할 수 있습니다.

저장된 항목 수보다 작은 값을 쓰면 배열이 잘립니다. `0`을 쓰면 배열이 완전히 비워집니다.

```js
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy 값이 제거되었습니다

cats.length = 0;
console.log(cats); // []; cats 배열은 비었습니다

cats.length = 3;
console.log(cats); // [ <3 empty items> ]
```

### 배열의 요소를 반복처리하기

배열을 사용한 일반적인 연산은 배열의 값을 반복하여 각 값을 어떤 방식으로 처리하는 것입니다. 가장 간단한 방법은 아래와 같습니다.

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

배열의 어떤 요소도 불리언 컨텍스트에서 `false`로 평가되지 않는다는 것을 알고 있다면
(예를 들어 배열의 요소가 [DOM](/ko/docs/Web/API/Document_Object_Model)노드로만 구성된 경우) 보다 효율적인 코드 관용구를 사용할 수 있습니다.

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Process div in some way */
}
```

이렇게 하면 배열의 길이를 확인하는 오버헤드를 피할 수 있으며, 루프가 반복될 때마다 `div` 변수가
현재 항목에 재할당되어 편의성을 높일 수 있습니다.

[`forEach()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 메서드는
배열을 반복하는 또 다른 방법을 제공합니다.

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

`forEach`에 전달된 함수는 배열의 모든 항목에 대해 한 번씩 실행되며, 배열 항목이 함수의 인수로 전달됩니다.
할당되지 않은 값은 `forEach` 반복문에서 반복되지 않습니다.

배열을 정의할 때 생략된 요소는 `forEach` 반복문으로 배열의 요소를 순회할 때 처리 대상이 되지 않는 것에 유의하시기 바랍니다.
하지만 `undefined`이 요소에 수동으로 할당된 경우 목록에 나열됩니다.

```js
const sparseArray = ["first", "second", , "fourth"];

sparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log("sparseArray[2] is undefined"); // true
}

const nonsparseArray = ["first", "second", undefined, "fourth"];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// undefined
// fourth
```

JavaScript 객체의 요소는 표준 객체 속성으로 저장되기 때문에 {{jsxref("Statements/for...in","for...in")}} 반복문을 사용하여 JavaScript 배열을 반복하는 것은 바람직하지 않습니다.
왜냐면 일반 요소들과 그리고 모든 열거할 수 있는 속성들이 나열되기 때문입니다.

### 배열의 메서드

{{jsxref("Array")}} 객체는 다음과 같은 메서드들을 가지고 있습니다.

[`concat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 메서드는
두 개의 배열을 합쳐 새로운 배열을 반환합니다.

```js
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

[`join()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 메서드는
배열의 모든 요소를 하나의 문자열로 연결하여 반환합니다.

```js
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list is "Wind - Rain - Fire"
```

[`push()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 메서드는
하나 혹은 그 이상의 요소를 배열의 마지막에 추가하고 추가된 요소를 포함한 `length`를 반환합니다.

```js
const myArray = ["1", "2"];
myArray.push("3"); // myArray is now ["1", "2", "3"]
```

[`pop()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 메서드는
배열의 마지막 요소를 제거하고 그 제거된 요소를 반환합니다.

```js
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
```

[`shift()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) 메서드는
배열의 첫번째 요소를 제거하고 그 제거된 요소를 반환합니다.

```js
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
```

[`unshift()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) 메서드는
하나 혹은 그 이상의 요소를 배열의 앞쪽에 추가하고 추가한 요소를 포함한 길이를 반환합니다.

```js
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray becomes ["4", "5", "1", "2", "3"]
```

[`slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 메서드는
배열의 특정 부분을 추출하여 그 추출된 부분을 포함하는 새로운 배열을 반환합니다.

```js
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// 인덱스 1에서 시작하여 인덱스 3까지의 모든 요소
```

[`at()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/at) 메서드는
배열의 지정된 인덱스에 있는 요소를 반환하거나 인덱스가 범위를 벗어난 경우 `undefined`을 반환합니다.
특히 배열의 끝에서 요소에 접근하는 음수 인덱스에 사용됩니다.

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", the second-last element of myArray
```

The [`splice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 메서드는
배열에서 요소를 제거한 후 (선택적으로) 대체합니다. 이 메서드는 배열에서 제거된 항목을 반환합니다.

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray 는 이제 ["1", "a", "b", "c", "d", "5"] 가 됩니다.
// 이 코드는 첫 번째 인덱스("2"값이 있는 곳)에서 시작하여
// 3개의 요소를 삭제한 후 그 자리에 연속된 모든 요소를 모두 삽입합니다.
```

[`reverse()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 메서드는
배열의 요소를 첫 번째 배열 요소가 마지막이 되고 마지막 요소가 첫 번째가 되는 식으로 배열의 요소를 바꿉니다.
배열에 대한 참조를 반환합니다.

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
```

[`flat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 메서드는
지정된 깊이까지 재귀적으로 연결된 모든 하위 배열 요소가 포함된 새 배열을 반환합니다.

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
```

[`sort()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 메서드는
배열의 요소를 새로운 배열이 아닌 주어진 배열 내에서 정렬하고 배열에 대한 참조를 반환합니다.

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// 배열을 정렬하게 되어서 이제 myArray = ["Fire", "Rain", "Wind"]
```

`sort()` 메서드는 어떻게 해당 배열의 요소를 정렬할지 결정하는 콜백 함수를 인자로 받을 수 있습니다.
콜백 함수는 배열에서 온 두 값을 두 개의 인수로 사용하여 호출됩니다. 이 함수는 이 두 값을 비교하여 두 값의 순서를 나타내는
양수, 음수 또는 0을 반환합니다. 예를 들어 다음은 문자열의 마지막 문자를 기준으로 배열을 정렬합니다.

```js
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // 음수 => a < b, a 는 b 앞으로 옵니다.
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // 양수 => a > b, a 는 b 뒤에 옵니다.
  }
  return 0; // 0 => a = b, a 와 b 는 원래 순서를 유지합니다.
};
myArray.sort(sortFn);
// sorts the array so that myArray = ["Wind","Fire","Rain"]
```

- 정렬 시스템에 의해 `a`가 `b`보다 작으면, `-1`(또는 임의의 음수)을 반환합니다.
- 정렬 시스템에 의해 `a`가 `b`보다 크면, `1`(또는 임의의 양수)을 반환합니다.
- `a`와 `b`가 동등하다 간주되면 `0`을 반환합니다.

[`indexOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 메서드는
배열에서 `searchElement`를 찾아서 첫 번째 일치하는 요소의 인덱스를 반환합니다.

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// 이제 다시 시도합니다. 마지막 일치한 요소부터 다시 시작합니다.
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, 왜냐하면 'z'를 찾지 못했습니다.
```

[`lastIndexOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) 메서드는
`indexOf`메서드와 유사하게 작동하지만 배열의 뒤쪽에서부터 요소를 찾습니다.

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// 이제 다시 시도합니다. 마지막 일치한 요소부터 다시 시작합니다.
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

[`forEach()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 메서드는
배열의 모든 요소에 대해 반복적으로 주어진 `callback` 함수를 실행하며 `undefined`를 반환합니다.

```js
const a = ["a", "b", "c"];
a.forEach((element) => {
  console.log(element);
});
// Logs:
// a
// b
// c
```

콜백을 받는 `forEach` 메서드(그리고 아래의 다른 메서드)는 어떤 방식으로든 전체 배열을 반복하기 때문에
반복적인(iterative) 메서드로 알려져 있습니다. 각 메서드는 `thisArg`라는 선택적 두 번째 인수를 받습니다.
이 인수가 제공되면 `thisArg`는 콜백 함수 안에 있는 `this` 키워드의 값이 됩니다.
제공되지 않으면, 함수가 명시적 객체 컨텍스트 외부에서 호출되는 다른 경우와 마찬가지로, `this`는 함수가 [엄격한 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)가 아닐 경우 전역 객체([`window`](/ko/docs/Web/API/Window), [`globalThis`](/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 등)을 참조하게 됩니다. 엄격할 모드일 경우 `undefined`을 참조합니다.

> **참고:** 위에서 소개한 `sort()` 메서드는 콜백 함수가 오직 비교에만 사용되며 요소 순서에 따라 특정 순서로 호출하지 않을 수 있기 때문에 반복 메서드가 아닙니다. `sort()`는 `thisArg` 매개변수도 받지 않습니다.

[`map()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드는
배열의 모든 요소에 대해 `callback` 함수를 실행하고 이 결과를 새로운 배열에 담아 반환합니다.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

[`flatMap()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) 메서드는
`map()`에 이어 깊이 1의 `flat()`을 실행합니다.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

[`filter()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 메서드는
`callback` 함수가 `true`를 반환하는 요소를 새로운 배열에 담아 반환합니다.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

[`find()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 메서드는 `callback`이 `true`를 반환하는 첫 번째 항목을 반환합니다.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
```

[`findLast()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) 메서드는 `callback`이 `true`를 반환하는 마지막 항목을 반환합니다.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
```

[`findIndex()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 메서드는 `callback`이 `true`를 반환하는 첫 번째 항목의 인덱스를 반환합니다.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
```

[`findLastIndex()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) 메서드는 `callback`이 `true`를 반환하는 마지막 항목의 인덱스를 반환합니다.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
```

[`every()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 메서드는
`callback`이 배열의 모든 항목에 대해 `true`를 반환하면 `true`를 반환합니다.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

[`some()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 메서드는
배열에서 적어도 `callback`이 `true`를 적어도 한번이라도 반환하면 `true`를 반환합니다.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // true
const a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // false
```

[`reduce()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 메서드는 배열 내의 요소를 하나의 요소로 줄이기 위해 `callback(accumulator, currentValue, currentIndex, array)`을 배열의 각 값마다 적용합니다.
`reduce` 함수는 `callback`함수가 반환하는 마지막 값을 반환합니다.

`initialValue`이 명시되면 `callback`은 첫 번째 매개변수 값으로 `initialValue`을,
두 번째 매개변수 값으로 배열의 첫 번째 항목의 값을 사용하여 호출됩니다.

`initialValue`이 명시되지 않은 경우, `callback`의 처음 두 매개변수 값은 배열의 첫 번째와 두 번째 요소가 됩니다.
이후 호출할 때마다 첫 번째 매개변수 값은 이전 호출에서 `callback`이 반환된 값이 되며,
두 번째 매개변수 값은 배열의 다음 값이 됩니다.

`callback`이 처리 중인 항목의 인덱스에 접근하거나 전체 배열에 접근해야 하는 경우 선택적인 매개변수를 사용할 수 있습니다.

```js
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```

[`reduceRight()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) 메서드는 `reduce()`처럼 동작하지만 마지막 요소부터 시작합니다.

`reduce`와 `reduceRight`는 반복 배열 메서드 중 가장 명확하지 않은 메서드입니다.
시퀀스를 단일 값으로 줄이기 위해 두 값을 재귀적으로 결합하는 알고리즘에 사용해야 합니다.

## 희소 배열

배열에는 `undefined`이라는 값으로 채워진 슬롯과는 다른 "빈 슬롯"이 포함될 수 있습니다.
빈 슬롯은 다음 중 한 가지 방법으로 만들 수 있습니다:

```js
// 배열 생성자
const a = Array(5); // [ <5 empty items> ]

// 배열 리터럴의 연속된 쉼표
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// array.length보다 큰 인덱스의 슬록에 직접적으로 값 설정하기
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// .length를 직접 설정하여 배열 늘리기
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// 요소 삭제
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]
```

일부 작업에서는 빈 슬롯이 'undefined'으로 채워진 것처럼 동작합니다.

```js
const arr = [1, 2, , , 5]; // 희소 배열 생성

// 인덱스를 사용한 접근
console.log(arr[2]); // undefined

// For...of
for (const i of arr) {
  console.log(i);
}
// Logs: 1 2 undefined undefined 5

// 전개연산
const another = [...arr]; // "another" is [ 1, 2, undefined, undefined, 5 ]
```

그러나 다른 경우(특히 대다수 배열 반복 메서드)에서는 빈 슬롯을 건너뜁니다.

```js
const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]
arr.forEach((i) => console.log(i)); // 1 2 5
const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
const hasFalsy = arr.some((k) => !k); // false

// 속성 열거
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) {
  console.log(key);
}
// Logs: '0' '1' '4'
// 전개 연산의 결과 값이 객체일 경우 배열의 반복자가 아닌 속성 열거를 사용합니다
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }
```

배열 메서드가 희소 배열에서 작동하는 방식에 대한 전체 목록은 [`Array` 참조 페이지](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots)를 참조하세요.

## 다차원 배열

배열은 중첩될 수 있습니다. 즉, 하나의 배열은 또 다른 배열을 요소로 포함할 수 있습니다.
JavaScript 배열의 이런 특성을 사용하여, 다차원 배열을 생성할 수 있습니다.

아래의 예제는 2차원 배열을 생성하는 예제입니다.

```js
const a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = `[${i}, ${j}]`;
  }
}
```

이 예제는 다음과 같은 열을 포함하는 배열을 생성합니다.

```
Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
```

## 다른 속성을 담기 위한 배열 사용

관련 정보를 저장하기 위해 배열을 객체처럼 사용할 수도 있습니다.

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // "value"
```

예를 들어, 정규식과 문자열이 일치하는 결과로 배열이 생성되면 배열은 일치에 대한 정보를 제공하는 속성 및 요소를 반환합니다. 배열의 반환 값은 [`RegExp.prototype.exec()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype.match()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match) 및 [`String.prototype.split()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)입니다.
정규 표현식과 함께 배열을 사용하는 방법에 대한 자세한 내용은 [정규 표현식](/ko/docs/Web/JavaScript/Guide/Regular_expressions)을 참조하십시오.

## 유사 배열 객체 다루기

[`document.getElementsByTagName()`](/ko/docs/Web/API/Document/getElementsByTagName)에서 반환되는 [`NodeList`](/ko/docs/Web/API/NodeList) 또는 함수 본문 내에서 사용할 수 있는 {{jsxref("Functions/arguments","arguments")}} 객체와 같은 일부 JavaScript 객체는 표면적으로는 배열처럼 보이고 동작하지만 모든 메서드를 공유하지는 않습니다. `arguments` 객체는 {{jsxref("Global_Objects/Function/length","length")}} 속성을 제공하지만 [`forEach()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)와 같은 배열 메서드는 구현하지 않습니다.

배열 메서드는 유사 배열 객체에서 직접적으로 호출할 수 없습니다.

```js example-bad
function printArguments() {
  arguments.forEach((item) => {
    console.log(item);
  }); // TypeError: arguments.forEach is not a function
}
```

하지만 {{jsxref("Global_Objects/Function/call","Function.prototype.call()")}}을 사용하여 간접적으로 호출할 수 있습니다.

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
```

배열 프로토타입 메서드는 배열과 유사한 방식으로 문자에 대한 순차적 접근을 제공하므로 문자열에도 사용할 수 있습니다.

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
