---
title: Indexed collections
slug: Web/JavaScript/Guide/Indexed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}

이번 장에서는 인덱스값에 의해 정렬이 되는 데이터 자료구조에 대해 소개합니다. 배열과 유사 배열 생성자인 {{jsxref("Array")}} 객체와 {{jsxref("TypedArray")}} 객체 같은 생성자들을 포함합니다.

## 배열 객체

배열은 이름과 인덱스로 참조되는 정렬된 값들의 집합입니다. 예를 들면, 숫자로 된 사원번호를 index로하여 사원명을 가지고 있는 emp라는 배열을 가질 수 있습니다. 그래서 emp\[1]은 사원번호 1번, emp\[2]는 사원번호 2번, 이런 식으로 사원번호를 인덱스 값으로 가질 수 있는 것입니다.

자바스크립트는 명시적인 배열 데이터 형식을 가지고 있지 않습니다. 그러나 미리 정의된 배열 객체를 사용할 수 있고 배열 객체의 메서드를 개발하는 어플리케이션에서 사용되는 배열에 사용할 수 있습니다. 배열 객체는 합치기(joining), 순서 뒤집기(reversing) 그리고 정렬(sorting)과 같은 다양한 방법으로 배열을 조작하는 메서드들을 제공합니다. 정규 표현식과 함께 사용할 배열 길이와 기타 속성을 결정하는 속성이 있습니다.

### 배열 생성

아래의 구문들은 동일한 요소를 가지는 배열을 생성하는 방법들입니다.

```js
var arr = new Array(element0, element1, ..., elementN);
var arr = Array(element0, element1, ..., elementN);
var arr = [element0, element1, ..., elementN];
```

요소0, 요소1, ..., 요소N은 배열내에 포함된 요소의 값 목록입니다. 해당 값들이 명시되어 있을 경우, 해당 배열은 주어진 요소들을 포함하도록 초기화 됩니다. 해당 배열의 길이는 주어진 요소들의 갯수가 됩니다.

대괄호 문법은 일명 "배열 문자" 혹은 "배열 초기화"라고 합니다. 대괄호 문법은 다른 배열 생성 표기법 보다 짧고 일반적으로 선호하는 문법입니다. 보다 상세한 내용은 [Array literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals)를 참조하세요.

길이가 0보다 크지만 아무런 요소를 가지고 있지 않은 배열을 생성하기 위한 방법은 아래와 같습니다.

```js
var arr = new Array(arrayLength);
var arr = Array(arrayLength);

// This has exactly the same effect
var arr = [];
arr.length = arrayLength;
```

<div class="note"><p>Note : 위의 예제 코드에서, <code>arrayLength</code>는 반드시 <code>숫자</code>여야 합니다. 그렇지 않으면 하나의 요소(주어진 값)을 가지는 배열이 생성 됩니다. <code>arr.length</code>를 호출하면 <code>arrayLength</code>가 반환이 되지만 해당 배열은 실제로 아무런 요소를 가지고 있지 않습니다. {{jsxref("Statements/for...in","for...in")}} 반복문을 실행하면 해당 배열은 아무런 요소를 반환하지 않습니다.</p></div>

추가로 아래의 예제에서 볼 수 있듯이, 새로이 정의된 혹은 이미 존재하는 객체 변수의 속성으로 배열을 할당할 수 있습니다.

```js
var obj = {};
// ...
obj.prop = [element0, element1, ..., elementN];

// OR
var obj = {prop: [element0, element1, ...., elementN]}
```

값이 `숫자`인 하나의 요소만을 가지는 배열을 생성하고자 할 경우, 반드시 대괄호 문법을 사용해야 합니다. 하나의 `숫자` 값을 Array() 생성자에게 전달할 경우, 그 숫자 값은 해당 배열의 요소가 아니라 `arrayLength`(배열의 길이)로 해석됩니다.

```js
var arr = [42];
var arr = Array(42); // Creates an array with no element,
                     // but with arr.length set to 42

// The above code is equivalent to
var arr = [];
arr.length = 42;
```

만약 숫자이지만 0이 아닌 소수점을 가지는 숫자를 `Array()생성자에게 인자로 줄 경우, 범위 에러(RangeError)가 발생하게 됩니다. 아래의 예제는 범위 에러가 발생하는 상황을 보여 줍니다.`

```js
var arr = Array(9.3);  // RangeError: Invalid array length
```

만약 임의의 데이터 형식인 하나의 요소를 가지는 배열을 생성하고자 할 경우, 배열 표기법을 사용하는 것이 안전합니다. 혹은 빈 배열을 먼저 선언한 후 임의의 데이터 값을 해당 배열에 추가하는 것도 방법이 됩니다.

ES2015에서 요소가 하나인 배열을 만들기 위해 Array.of 정적 메소드를 사용할 수 있습니다.

```js
let wisenArray = Array.of(9.3) // wisenArray contains only one element 9.3
```

### 배열에 값 저장

배열의 요소에 값을 할당하여 배열에 값을 저장할 수 있습니다. 예를 들면,

```js
var emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';
```

> **Note:** 위의 코드 예제처럼 배열 연산자에 양의 정수가 아닌 값을 줄 경우, 배열의 요소가 대신 배열로 대변되는 객체의 속성이 생성됩니다.

```js
var arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
```

배열을 생성함과 동시에 배열에 값을 저장할 수 있습니다.

```js
var myArray = new Array('Hello', myVar, 3.14159);
var myArray = ['Mango', 'Apple', 'Orange'];
```

### 배열 요소의 참조

배열의 요소를 참조하기 위해서 해당 요소의 인덱스(요소의 순서를 나타내는)를 사용할 수 있습니다. 예를 들어, 아래와 같이 배열을 선언하였다면

```js
var myArray = ['Wind', 'Rain', 'Fire'];
```

배열의 첫번째 요소는 `myArray[0]로 참조할 수 있고 두번째 요소는 myArray[1]로 참조할 수 있습니다. 배열의 인덱스 값은 0부터 시작합니다.`

> **Note:** 배열 연산자(대괄호)는 배열의 속성에 접근하기 위해서도 사용될 수 있습니다 (배열 또한 객체이기 때문입니다). 예를 들면 아래와 같습니다.

```js
var arr = ['one', 'two', 'three'];
arr[2];  // three
arr["length"];  // 3
```

### 배열 길이에 대한 이해

실제 구현에서, 자바스크립트의 배열은 배열에 포함된 요소들을 배열의 인덱스 값을 속성 이름으로 사용하여 표준 객체의 속성처럼 저장합니다. 길이 속성은 좀 특별합니다. 배열의 길이는 항상 마지막 요소의 인덱스에 1을 더한 값을 반환합니다 (다음 예제에서 Dusty는 인덱스 30번째에 위치하기때문에 cats 배열의 길이는 31이 됩니다). 기억하실 것은 자바스크립트 배열의 인덱스는 항상 1부터가 아닌 0부터 시작합니다. 이것이 의미하는 바는 배열의 길이 속성은 배열에 저장되어 있는 가장 큰 인덱스보다 1만큼 큰 값이 된다는 것입니다.

```js
var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31
```

배열의 길이(`length`) 속성을 지정하는 것 또한 가능합니다. 만약 배열에 저장되어 있는 요소의 갯수보다 작은 값을 배열 길이로 지정하게 되면, 지정된 배열 길이보다 큰 인덱스 값을 가지는 요소는 배열에서 삭제됩니다. 0을 배열 길이로 지정하게 되면 해당 배열은 요소를 가지지 않는 빈 배열이 되는 것입니다.

```js
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty,Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs []; the cats array is empty

cats.length = 3;
console.log(cats); // logs [ <3 empty items ]
```

### 배열의 요소를 반복처리하기

배열을 가지고 처리하는 주된 작업은 배열의 요소를 반복적으로 접근해서 읽어오는 작업입니다. 가장 간단한 방법은 아래와 같습니다.

```js
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

배열이 아무런 요소를 포함하고 있지 않다면 반복문 조건에서 false로 평가됩니다. 배열의 요소가 [DOM](/en-US/docs/DOM) node들을 포함한다면 보다 효율적인 코드 관용구를 사용할 수 있습니다.

```js
var divs = document.getElementsByTagName('div');
for (var i = 0, div; div = divs[i]; i++) {
  /* Process div in some way */
}
```

위의 예제 코드의 for반복문 조건은 배열의 길이를 확인하는 작업을 피할 수 있고, div 변수가 매 반복마다 현재의 요소를 가지게 됩니다.

{{jsxref("Array.forEach", "forEach()")}} 메서드는 배열의 요소를 반복 처리할 수 있는 또 다른 방법입니다:

```js
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});
// red
// green
// blue
```

ES2015 Arrow Function으로 다음과 같이 더 짧게 코드를 짤 수 있습니다.

```js
var colors = ['red', 'green', 'blue'];
color.forEach(color => console.log(color));
// red
// green
// blue
```

`forEach`에 인자로 주어진 함수는 배열의 각 요소에 대해 한번씩 실행이 되고 배열의 각 요소는 인자로 주어진 함수의 인자로 주어지게 됩니다. 할당되지 않은 요소 값은 `forEach` 반복문에서 처리되지 않습니다.

`forEach` 반복문으로 배열의 요소를 반복 처리할 때, 배열을 정의할 때 생략된 요소는 처리 대상이 되지 않는 것에 유의하세요. 하지만 `undefined`를 생략된 요소에 할당하게 되면 undefined로 처리됩니다.

```js
var array = ['first', 'second', , 'fourth'];

array.forEach(function(element) {
  console.log(element);
})
// first
// second
// fourth

if(array[2] === undefined) {
   console.log('array[2] is undefined'); // true
}

var array = ['first', 'second', undefined, 'fourth'];

array.forEach(function(element) {
  console.log(element);
});
// first
// second
// undefined
// fourth
```

JavaScript 요소는 표준 객체 속성으로 저장되므로 {{jsxref ( "Statements / for ... in", "for ... in")}} 루프를 사용하여 JavaScript 배열을 반복하는 것은 바람직하지 않습니다. 왜냐면 일반 요소들과 그리고 모든 열거할 수 있는 속성들이 나열되기 때문입니다.

### 배열 객체의 메서드

{{jsxref("Array")}} 객체는 다음과 같은 메서드들을 가지고 있습니다:

{{jsxref("Array.concat", "concat()")}} 메서드는 두개의 배열을 합쳐 새로운 배열을 반환합니다.

```js
var myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c');
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

{{jsxref("Array.join", "join(delimiter = ',')")}} 메서드는 배열의 모든 요소를 주어진 구분자로 연결된 하나의 문자열을 반환합니다.

```js
var myArray = new Array('Wind', 'Rain', 'Fire');
var list = myArray.join(' - '); // list is "Wind - Rain - Fire"
```

{{jsxref("Array.push", "push()")}}메서드는 하나 혹은 그 이상의 요소를 배열의 마지막에 추가하고 추가된 요소를 포함한 길이를 반환합니다.

```js
var myArray = new Array('1', '2');
myArray.push('3'); // myArray is now ["1", "2", "3"]
```

{{jsxref("Array.pop", "pop()")}} 메서드는 배열의 마지막 요소를 제거하고 그 제거된 요소를 반환합니다.

```js
var myArray = new Array('1', '2', '3');
var last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
```

{{jsxref("Array.shift", "shift()")}}메서드는 배열의 첫번째 요소를 제거하고 그 제거된 요소를 반환합니다.

```js
var myArray = new Array('1', '2', '3');
var first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
```

{{jsxref("Array.shift", "unshift()")}}메서드는 하나 혹은 그 이상의 요소를 배열의 앞쪽에 추가하고 추가한 요소를 포함한 길이를 반환합니다.

```js
var myArray = new Array('1', '2', '3');
myArray.unshift('4', '5');
// myArray becomes ["4", "5", "1", "2", "3"]
```

{{jsxref("Array.slice", "slice(start_index, upto_index)")}}메서드는 배열의 특정 부분을 추출하여 그 추출된 부분을 포함하는 새로운 배열을 반환합니다. upto_index에 해당하는 요소는 포함되지 않습니다.

```js
var myArray = new Array('a', 'b', 'c', 'd', 'e');
myArray = myArray.slice(1, 4); // starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]
```

{{jsxref("Array.splice", "splice(index, count_to_remove, addElement1, addElement2, ...)")}} 메세드는 주어진 인덱스 요소를 포함하여 count_to_remove 갯수만큼 삭제하고 주어진 요소로 바꿔 줍니다.

```js
var myArray = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

{{jsxref ( "Array.reverse", "reverse ()")}} 배열의 요소를 제자리에 배치합니다. 첫 번째 배열 요소가 마지막 요소가 되고 마지막 요소가 첫 번째 요소가 됩니다. 배열에 대한 참조를 반환합니다.

```js
var myArray = new Array('1', '2', '3');
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
```

{{jsxref ( "Array.sort", "sort ()")}} 배열의 요소를 제자리에 정렬하고 배열에 대한 참조를 반환합니다.

```js
var myArray = new Array('Wind', 'Rain', 'Fire');
myArray.sort();
// sorts the array so that myArray = [ "Fire", "Rain", "Wind" ]
```

`sort()` 메서드에 어떻게 해당 배열의 요소를 정렬할지 결정하는 콜백 함수를 인자로 줄 수 있습니다.

콜백을 사용하는 sort 메소드 및 다른 메소드는 반복 메소드로 알려져 있습니다. 일부 메소드에서는 전체 배열을 반복하기 때문입니다. 각각은 `thisObject`라는 선택적인 두 번째 인수를 취합니다. 제공되면 `thisObject`는 콜백 함수의 본문에 있는 `this` 키워드의 값이 됩니다.

제공되지 않으면 함수가 명시적 객체 컨텍스트 외부에서 호출되는 다른 경우와 마찬가지로 이 함수는 콜백으로 화살표 함수를 사용할 때 전역 객체 ({{domxref ( "window")}})를 참조합니다. 정상적인 기능은 콜백입니다.

콜백 함수는 배열의 요소인 두 개의 인수로 호출됩니다.

아래 함수는 두 값을 비교하여 세 값 중 하나를 반환합니다.

예를 들어, 다음은 문자열의 마지막 문자로 정렬합니다.

```js
var sortFn = function(a, b){
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn);
// sorts the array so that myArray = ["Wind","Fire","Rain"]
```

- a의 순서가 b보다 앞에 오면 -1(혹은 음수)을 반환합니다.
- a의 순서가 b보다 뒤에 오면 1(혹은 양수)을 반환합니다.
- a와 b가 같으면 0을 반환합니다.

{{jsxref ( "Array.indexOf", "indexOf (searchElement [, fromIndex])")}}는 배열에서 `searchElement`를 검색하고 첫 번째 일치 항목의 인덱스를 반환합니다.

```js
var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found
```

{{jsxref("Array.lastIndexOf", "lastIndexOf(searchElement[, fromIndex])")}}메서드는 `indexOf`메서드와 유사하게 작동하지만 배열의 뒤쪽에서부터 요소를 찾습니다.

```js
var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // logs 5
// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); // logs 1
console.log(a.lastIndexOf('z')); // logs -1
```

{{jsxref("Array.forEach", "forEach(callback[, thisObject])")}}메서드는 배열의 모든 요소에 대해 반복적으로 주어진 `callback` 함수를 실행합니다.

```js
var a = ['a', 'b', 'c'];
a.forEach(function(element) { console.log(element);} );
// logs each item in turn
```

{{jsxref("Array.map", "map(callback[, thisObject])")}}메서드는 배열의 모든 요소에 대해 콜백함수를 실행하고 콜백함수의 실행 결과를 새로운 배열에 담아 반환합니다.

```js
var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
console.log(a2); // logs ['A', 'B', 'C']
```

{{jsxref("Array.filter", "filter(callback[, thisObject])")}}메서드는 배열의 모든 요소에 대해 콜백 함수가 true를 반환하는 요소를 새로운 배열에 담아 반환합니다.

```js
var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item == 'number'; });
console.log(a2); // logs ['10', '20', '30']
```

{{jsxref ( "Array.every", "every (callback [, thisObject])")}}는 콜백이 배열의 모든 항목에 대해 true를 반환하면 true를 반환합니다.

```js
function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false
```

{{jsxref("Array.some", "some(callback[, thisObject])")}}메서드는 배열의 모든 요소에 대해 콜백 함수를 실행하고 하나의 요소라도 콜백 함수의 결과가 true이면 some() 메서드의 결과는 true가 됩니다.

```js
function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // logs true
var a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // logs false
```

{{jsxref("Array.reduce", "reduce(callback[, initialValue])")}}메서드는 배열내의 요소를 하나의 요소로 줄이기 위해 `firstValue, secondValue`를 인자로 받는 콜백 함수를 실행합니다.

```js
var a = [10, 20, 30];
var total = a.reduce(function(first, second) { return first + second; }, 0);
console.log(total) // Prints 60
```

{{jsxref("Array.reduceRight", "reduceRight(callback[, initalvalue])")}}메서드는 reduce()와 유사하게 작동하지만 배열의 마지막 요소부터 시작합니다.

`reduce`와 `reduceRight` 메서드는 반복적인 배열 메서드 중 가장 명백합니다. 두 메서드는 재귀적으로 하나의 시퀀스를 하나의 값으로 줄이기 위해 두개의 값을 합치는 알고리즘을 위해 사용되어야 합니다.

### 다차원 배열

배열은 중첩될 수 있습니다. 즉, 하나의 배열은 또 다른 배열을 요소로 포함할 수 있습니다. 자바스크립트 배열의 이런 특성을 사용하여, 다차원 배열을 생성할 수 있습니다.

아래의 예제는 2차원 배열을 생성하는 예제입니다.

```js
var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']';
  }
}
```

이 예제는 다음과 같은 열을 포함하는 배열을 생성합니다.

```
Row 0: [0,0] [0,1] [0,2] [0,3]
Row 1: [1,0] [1,1] [1,2] [1,3]
Row 2: [2,0] [2,1] [2,2] [2,3]
Row 3: [3,0] [3,1] [3,2] [3,3]
```

### 배열과 정규표현식

문자열 내에 정규 표현식에 일치하는 결과가 배열일 경우, 해당 배열은 정규 표현식에 일치하는 문자열들의 정보를 제공해 주는 속성들과 요소들을 반환합니다. {{jsxref ( "Global_Objects / RegExp / exec", "RegExp.exec ()")}}, {{jsxref("Global_Objects/String/match","String.match()")}}, 와 {{jsxref("Global_Objects/String/split","String.split()")}}메서드는 결과를 배열로 반환합니다. 정규식과 함께 배열을 어떻게 사용하는지에 대한 정보는 [정규표현식](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)을 참조하시면 됩니다.

### 배열과 유사한 객체 사용

{{domxref ( "document.getElementsByTagName ()")}} 또는 {{jsxref ( "Functions / arguments", "arguments")}}에서 반환하는 {{domxref("NodeList")}} 객체는 함수 본문 내에서 사용할 수 있게 만들어졌으며 겉으로는 배열처럼 보이고 작동하지만 모든 메서드를 공유하지는 않습니다. arguments 객체는 {{jsxref ( "Global_Objects / Function / length", "length")}} 속성을 제공하지만 {{jsxref ( "Array.forEach", "forEach ()")}} 메소드는 구현하지 않습니다.

배열 프로토타입 메소드는 다른 배열과 유사한 객체에 대해 호출될 수 있습니다.

```js
function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}
```

배열 프로토타입 메서드는 배열과 비슷한 방식으로 문자에 순차적으로 액세스 할 수 있으므로 문자열에서도 사용할 수 있습니다.

```js
Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr);
});
```

## 타입 배열

자바스크립트 타입 배열은 배열과 유사한 객체이며 원시 이진 데이터 접근에 대한 메카니즘을 제공합니다. 이미 알고 있듯이, {{jsxref("Array")}} 객체는 동적으로 크기가 커지고 작아질 수 있으며 어떤 자바스크립트 값이라도 가질 수 있습니다. 자바스크립트 엔진은 그런 배열을 빠르게 만들기 위해 최적화를 수행합니다. 그러나 웹 어플케이션이 보다 강력해지고, 음성, 영상 조작, [웹소켓](/en-US/docs/WebSockets)을 사용하여 원시 데이터에 접근하는 등의 기능들이 추가되면서 자바스크립트 코드가 타입배열을 가지고 빠르고 쉽게 원시 이진 데이터를 조작할 수 있는 것이 가능한 시점이 되었다는 것은 보다 명백해졌습니다.

### 버퍼와 뷰: 타입 배열 구조

유연성과 효율성을 극대화하기 위해, 자바스크립트 타입 배열은 **버퍼**와 **뷰**라는 구조로 구현되어 있습니다. 하나의 버퍼({{jsxref("ArrayBuffer")}}객체로 구현되어 있습니다)는 하나의 데이터 덩어리를 의미하는 객체입니다. 버퍼는 구체적으로 언급할 형식이 없고, 버퍼가 담고 있는 내용에 접근할 메카니즘을 제공하지 않습니다. 버퍼에 담겨 있는 메모리에 접근하기 위해선, 뷰를 사용해야 합니다. 하나의 뷰는 컨덱스트를 제공하는데, 컨텍스트는 데이터 형, 시작 오프셋 그리고 실제 타입배열로 변경되는 요소의 갯수를 제공합니다.

![Typed arrays in an ArrayBuffer](typed_arrays.png)

### 배열버퍼

{{jsxref("ArrayBuffer")}}는 일반적이고, 고정길이의 이진 데이터 버퍼를 표현하기 위해 사용되는 데이터 타입입니다. `ArrayBuffer의 내용을 직접 수정할 수는 없는 대신 타입 배열 뷰 혹은 특정 형식 그리고 해당 버퍼의 내용을 읽고 쓸 수 있게 해주는`{{jsxref("DataView")}}`를 생성할 수 있습니다.`

### 타입 배열 뷰

타입 배열 뷰들은 스스로를 나타낼 수 있는 이름과 `Int8`, `Uint32`, `Float64`등의 일반적인 숫자 형들을 위한 뷰를 제공합니다.Uint8ClampedArray라는 특별한 타입 배열 뷰가 있습니다. `0`부터 `255`까지의 값을 가질수 있습니다. 예를 들며, `Uint8ClampedArray`는 [Canvas data processing](/en-US/docs/Web/API/ImageData)에 유용합니다.

| Type                                     | Value Range                   | Size in bytes | Description                                                                  | Web IDL type          | Equivalent C type               |
| ---------------------------------------- | ----------------------------- | ------------- | ---------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` to `127`               | 1             | 8-bit two's complement signed integer                                        | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}         | `0` to `255`                  | 1             | 8-bit unsigned integer                                                       | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | `0` to `255`                  | 1             | 8-bit unsigned integer (clamped)                                             | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}         | `-32768` to `32767`           | 2             | 16-bit two's complement signed integer                                       | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}         | `0` to `65535`                | 2             | 16-bit unsigned integer                                                      | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}         | `-2147483648` to `2147483647` | 4             | 32-bit two's complement signed integer                                       | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}         | `0` to `4294967295`           | 4             | 32-bit unsigned integer                                                      | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}     | `1.2E-38` to `3.4E38`         | 4             | 32-bit IEEE floating point number (7 significant digits e.g., `1.1234567`)   | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}     | `5E-324` to `1.8E308`         | 8             | 64-bit IEEE floating point number (16 significant digits e.g., `1.123...15`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | `-2^63` to `2^63 - 1`         | 8             | 64-bit two's complement signed integer                                       | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}     | `0` to `2^64 - 1`             | 8             | 64-bit unsigned integer                                                      | `bigint`              | `uint64_t (unsigned long long)` |

[JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)를 참조하시면 보다 많은 정보를 보실 수 있습니다.

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}
