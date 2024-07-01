---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
---

{{JSRef}}

**`sort()`** 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 [stable sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability)가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

정렬 속도와 복잡도는 각 구현방식에 따라 다를 수 있습니다.

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

## 구문

```js
arr.sort([compareFunction]);
```

### 매개변수

- `compareFunction` {{optional_inline}}
  - : 정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.

### 반환 값

정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.

## 설명

`compareFunction`이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다. 예를 들어 "바나나"는 "체리"앞에옵니다. 숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다.

`compareFunction`이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬됩니다. a와 b가 비교되는 두 요소라면,

- `compareFunction(a, b)`이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
- `compareFunction(a, b)`이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. 참고 : ECMAscript 표준은 이러한 동작을 보장하지 않으므로 모든 브라우저(예 : Mozilla 버전은 적어도 2003 년 이후 버전 임)가 이를 존중하지는 않습니다.
- `compareFunction(a, b)`이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.
- `compareFunction(a, b)`은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.

따라서 compare 함수의 형식은 다음과 같습니다.

```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

문자열 대신 숫자를 비교하기 위해 compare 함수는 a에서 b를 뺄 수 있습니다. 다음 함수는 배열을 오름차순으로 정렬합니다 (Infinity 및 NaN이 포함되어 있지 않은 경우).

```js
function compareNumbers(a, b) {
  return a - b;
}
```

sort 메소드는 {{jsxref ( "연산자 / 함수", "함수식", "", 1)}} (및 클로저)와 함께 편리하게 사용할 수 있습니다.

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

개체는 해당 속성 중 하나의 값을 기준으로 정렬 할 수 있습니다.

```js
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// value 기준으로 정렬
items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

// name 기준으로 정렬
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // 이름이 같을 경우
  return 0;
});
```

## 예제

### 배열 만들기, 표시 및 정렬

다음 예제에서는 네 개의 배열을 만들고 원래 배열을 표시 한 다음 정렬 된 배열을 표시합니다. 숫자 배열은 비교 함수없이 정렬 된 다음 비교 함수로 정렬됩니다.

```js
var stringArray = ["Blue", "Humpback", "Beluga"];
var numericStringArray = ["80", "9", "700"];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log("stringArray:", stringArray.join());
console.log("Sorted:", stringArray.sort());

console.log("numberArray:", numberArray.join());
console.log("Sorted without a compare function:", numberArray.sort());
console.log("Sorted with compareNumbers:", numberArray.sort(compareNumbers));

console.log("numericStringArray:", numericStringArray.join());
console.log("Sorted without a compare function:", numericStringArray.sort());
console.log(
  "Sorted with compareNumbers:",
  numericStringArray.sort(compareNumbers),
);

console.log("mixedNumericArray:", mixedNumericArray.join());
console.log("Sorted without a compare function:", mixedNumericArray.sort());
console.log(
  "Sorted with compareNumbers:",
  mixedNumericArray.sort(compareNumbers),
);
```

이 예제는 다음 출력을 생성합니다. 결과가 보여 주듯이 비교 함수가 사용되면 숫자는 숫자 또는 숫자 문자열인지 여부에 관계없이 올바르게 정렬됩니다.

```
    stringArray: Blue,Humpback,Beluga
    Sorted: Beluga,Blue,Humpback

    numberArray: 40,1,5,200
    Sorted without a compare function: 1,200,40,5
    Sorted with compareNumbers: 1,5,40,200

    numericStringArray: 80,9,700
    Sorted without a compare function: 700,80,9
    Sorted with compareNumbers: 9,80,700

    mixedNumericArray: 80,9,700,40,1,5,200
    Sorted without a compare function: 1,200,40,5,700,80,9
    Sorted with compareNumbers: 1,5,9,40,80,200,700
```

### 비 ASCII 문자 정렬

ASCII 이외의 문자, 즉 악센트 부호가있는 문자 (e, é, è, a, ä 등)가있는 문자열을 정렬하려면 영어가 아닌 다른 언어의 문자열에 {{jsxref ( "String.localeCompare")}}를 사용하십시오. 이 함수는 해당 문자를 비교하여 올바른 순서로 나타낼 수 있습니다.

```js
var items = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

### map을 사용한 정렬

`compareFunction`은 배열 내의 요소마다 여러 번 호출될 수 있습니다. 이러한 `compareFunction`의 성질에 따라, 높은 오버헤드가 발생할 수도 있습니다. `compareFunction`이 복잡해지고, 정렬할 요소가 많아질 경우, [map](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)을 사용한 정렬을 고려해보는 것이 좋습니다. 이 방법은 임시 배열을 하나 만들어서 여기에 실제 정렬에 사용할 값만을 뽑아서 넣어서 이를 정렬하고, 그 결과를 이용해서 실제 정렬을 하는 것입니다.

```js
// 소트 할 배열
var list = ["Delta", "alpha", "CHARLIE", "bravo"];

// 임시 배열은 위치 및 정렬 값이있는 객체를 보유합니다.
var mapped = list.map(function (el, i) {
  return { index: i, value: el.toLowerCase() };
});

// 축소 치를 포함한 매핑 된 배열의 소트
mapped.sort(function (a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// 결과 순서를 위한 컨테이너
var result = mapped.map(function (el) {
  return list[el.index];
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("String.prototype.localeCompare()")}}
