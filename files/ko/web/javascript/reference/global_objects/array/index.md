---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
tags:
  - Array
  - Class
  - Example
  - Global Objects
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Array
translation_of: Web/JavaScript/Reference/Global_Objects/Array
---
{{JSRef}}

JavaScript **`Array`** 클래스는 리스트 형태의 고수준 객체인 배열을 생성할 때 사용하는 전역 객체입니다.

## 설명

배열은 리스트와 비슷한 객체로서 순회와 변형 작업을 수행하는 메서드를 갖습니다. JavaScript 배열은 길이도, 각 요소의 자료형도 고정되어 있지 않습니다. 배열의 길이가 언제든지 늘어나거나 줄어들 수 있고 데이터를 연속적이지 않은 곳에 저장할 수 있으므로, JavaScript 배열은 밀집성을 보장하지 않습니다. 보통 이런 성질들은 편리하지만, 사용하려는 목적에 맞지 않으면 형식화 배열(typed array)을 사용하는 것을 고려해보세요.

배열은 ([연관 배열](https://ko.wikipedia.org/wiki/연관_배열)과 달리) 요소 인덱스로 문자열을 사용할 수 없으며 무조건 정수만 허용합니다. [대괄호 구문](/ko/docs/Web/JavaScript/Guide/Working_with_Objects#객체와_속성) 또는 [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)를 사용해 정수가 아닌 키에 접근할 경우 배열의 요소가 아니라 배열의 [객체 속성 컬렉션](/ko/docs/Web/JavaScript/Data_structures#속성)에 연결된 변수를 바라보게 됩니다. [순회 및 변형 작업](/ko/docs/Web/JavaScript/Guide/Indexed_collections#배열_객체의_메서드) 또한 이런 속성에 적용할 수 없습니다.

### 자주 사용하는 연산

**배열 만들기**

```js
let fruits = ['사과', '바나나']

console.log(fruits.length)
// 2
```

**인덱스로 배열의 항목에 접근하기**

```js
let first = fruits[0]
// 사과

let last = fruits[fruits.length - 1]
// 바나나
```

**배열의 항목들을 순환하며 처리하기**

```js
fruits.forEach(function (item, index, array) {
  console.log(item, index)
})
// 사과 0
// 바나나 1
```

**배열 끝에 항목 추가하기**

```js
let newLength = fruits.push('오렌지')
// ["사과", "바나나", "오렌지"]
```

**배열 끝에서부터 항목 제거하기**

```js
let last = fruits.pop() // 끝에있던 '오렌지'를 제거
// ["사과", "바나나"]
```

**배열 앞에서부터 항목 제거하기**

```js
let first = fruits.shift() // 제일 앞의 '사과'를 제거
// ["바나나"]
```

**배열 앞에 항목 추가하기**

```js
let newLength = fruits.unshift('딸기') // 앞에 추가
// ["딸기", "바나나"]
```

**배열 안 항목의 인덱스 찾기**

```js
fruits.push('망고')
// ["딸기", "바나나", "망고"]

let pos = fruits.indexOf("바나나")
// 1
```

**인덱스 위치에 있는 항목 제거하기**

```js
let removedItem = fruits.splice(pos, 1) // 항목을 제거하는 방법

// ["딸기", "망고"]
```

**인덱스 위치에서부터 여러개의 항목 제거하기**

```js
let vegetables = ['양배추', '순무', '무', '당근']
console.log(vegetables)
// ["양배추", "순무", "무", "당근"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// 배열에서 항목을 제거하는 방법
// pos 인덱스부터 n개의 항목을 제거함

console.log(vegetables)
// ["양배추", "당근"] (원 배열 vegetables의 값이 변함)

console.log(removedItems)
// ["순무", "무"]
```

**배열 복사하기**

```js
let shallowCopySpread = [...fruits]
// ["딸기", "망고"]
```

위 코드는 [전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 사용해 배열의 얕은 복사를 만드는 방법입니다. 배열을 복사하는 다른 방법은 아래의 [배열 복사하기](#배열_복사하기)에서 논의합니다.

### 배열 요소에 접근하기

JavaScript 배열의 인덱스는 0부터 시작합니다. 즉, 배열 첫 번째 요소의 인덱스는 0이고, 마지막 요소의 인덱스는 배열의 {{jsxref("Array.length", "length")}} 속성에서 1을 뺀 것과 같습니다.

잘못된 인덱스를 사용하면 `undefined`를 반환합니다.

```js
let arr = ['첫 번재 요소입니다', '두 번째 요소입니다', '마지막 요소입니다']
console.log(arr[0])              // '첫 번재 요소입니다'를 기록
console.log(arr[1])              // '두 번재 요소입니다'를 기록
console.log(arr[arr.length - 1]) // '마지막 요소입니다'를 기록
```

`toString`이 속성인 것과 마찬가지로 (정확히 하자면, `toString()`은 메서드입니다) 배열의 요소도 속성입니다. 하지만 배열 요소에 아래 코드처럼 접근하려고 하면, 속성 이름이 유효하지 않기 때문에 구문 오류가 발생합니다.

```js
console.log(arr.0) // 구문 오류
```

이 현상은 JavaScript 배열과 그 속성에 어떤 특별한 점이 있어서 그런 것이 아닙니다. 모든 JavaScript 속성은 이름이 숫자로 시작할 경우 마침표 표기법으로 접근할 수 없고, 대괄호 표기법을 사용해야 합니다.

예를 들면, 어떤 객체에 `'3d'`라는 이름의 속성이 있다면, 이 속성에 접근할 땐 대괄호 표기법을 사용해야만 합니다.

```js
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(years.0)   // 구문 오류
console.log(years[0])  // 정상 작동
```

```js
renderer.3d.setTexture(model, 'character.png')     // 구문 오류
renderer['3d'].setTexture(model, 'character.png')  // 정상 작동
```

`3d` 예시에서 `'3d'`를 따옴표로 감싸야 함에 유의하세요. JavaScript 배열 인덱스도 `years[2]` 대신에 `years['2']`를 사용하듯 따옴표로 둘러쌀 수 있습니다. 그러나 굳이 그럴 필요는 없습니다.

`years[2]`의 `2`는 JavaScript 엔진이 암시적인 `toString` 변환을 사용해 문자열로 변환합니다. 그 결과로서 `'2'`와 `'02'`는 `years` 객체에서 서로 다른 칸을 가리키며, 다음 코드는 `true`가 될 수 있습니다.

```js
console.log(years['2'] != years['02']);
```

### 배열 길이와 숫자형 속성의 관계

JavaScript 배열의 {{jsxref("Array.length", "length")}} 속성과 숫자형 속성은 연결되어 있습니다.

몇몇 배열 내장 메서드({{jsxref("Array.join", "join")}}, {{jsxref("Array.slice", "slice")}}, {{jsxref("Array.indexOf", "indexOf")}} 등)은 호출했을 때 배열의 {{jsxref("Array.length", "length")}} 속성의 값을 참고합니다.

다른 메서드({{jsxref("Array.push", "push")}}, {{jsxref("Array.splice", "splice")}} 등) 또한 배열의 {{jsxref("Array.length", "length")}} 속성을 바꾸는 결과를 낳습니다.

```js
const fruits = []
fruits.push('바나나', '사과', '복숭아')

console.log(fruits.length) // 3
```

배열 인덱스로 유효한 속성을 JavaScript 배열에 설정할 때, 그 인덱스가 현재 배열의 경계 바깥에 있는 경우, JavaScript 엔진은 배열의 {{jsxref("Array.length", "length")}} 속성을 그에 맞춰 업데이트 합니다.

```js
fruits[5] = 'mango'
console.log(fruits[5])           // '망고'
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 6
```

{{jsxref("Array.length", "length")}}를 직접 늘려도 요소에 변화는 없습니다.

```js
fruits.length = 10
console.log(fruits)              // ['바나나', '사과', '복숭아', 비어 있음 x 2, '망고', 비어 있음 x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined
```

하지만, {{jsxref("Array.length", "length")}} 속성을 감소시키면 요소가 지워집니다.

```js
fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2
```

{{jsxref("Array.length")}} 문서에 더 자세한 설명이 있습니다.

### 정규표현식 일치 결과를 이용한 배열 생성

{{jsxref("RegExp")}}와 문자열 사이의 일치 결과는 JavaScript 배열을 반환합니다. 이 배열은 일치 결과에 대한 정보를 포함하는 속성과 요소가 담겨있습니다. {{jsxref("RegExp.exec()")}}, {{jsxref("String.match()")}}의 반환 값에서 이런 배열을 볼 수 있습니다.

다음 예제와 표에서 배열의 속성과 요소에 대한 설명을 확인하세요.

```js
// 하나의 d와 하나 이상의 b에 하나의 d가 뒤따라 일치해야 함
// 일치한 b와 다음 d를 기억할 것
// 대소문자 구분 없음

const myRe = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsbz')
```

반환된 `myArray` 배열의 속성과 요소는 다음과 같습니다.

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th class="header" scope="col">속성/요소</th>
      <th class="header" scope="col">설명</th>
      <th class="header" scope="col">예시</th>
    </tr>
    <tr>
      <td><code>input</code><br />{{ReadOnlyInline}}</td>
      <td>정규표현식 일치 대상이 된 원본 문자열입니다.</td>
      <td><code>"cdbBdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>index</code><br />{{ReadOnlyInline}}</td>
      <td>일치가 위치한 원본 문자열에서의 인덱스입니다.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>[0]</code><br />{{ReadOnlyInline}}</td>
      <td>마지막으로 일치한 텍스트입니다.</td>
      <td><code>"dbBd"</code></td>
    </tr>
    <tr>
      <td><code>[1], ...[n]</code><br />{{ReadOnlyInline}}</td>
      <td>
        존재할 경우, 정규표현식에서 괄호로 지정한 부분문자열 일치에 대응하는 요소입니다. 가능한 수의 제한은 없습니다.
      </td>
      <td>
        <code>[1]: "bB"<br />[2]: "d"</code>
      </td>
    </tr>
  </tbody>
</table>

### 배열 복사하기

배열을 새로운 변수에 할당해도 배열이 복사되지는 않습니다. 새로운 변수에는 원본 배열을 가리키는 참조만 할당되며, 원본 배열의 값을 바꾸면 새 변수에서도 그 변경점이 반영됩니다.

```js
let array1 = [1,2,3]
let array1Reference = array1;
array1[1] = 9;
console.log(array1Reference);
// Array [1,9,3] - array1의 변화가 array1Reference에도 나타남 - 복사본이 아님
```

배열의 복사본을 만들기 위해서는 새 배열을 위한 변수를 생성하고, 원본 배열 각각의 원시 요소에 대해서도 새로운 변수를 생성해야 합니다. (변수를 원시 값으로 초기화하면 참조를 할당하지 않고 값을 복사합니다.) JavaScript에서는 이를 위해 다음과 같은 방법을 사용할 수 있습니다.

[전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

```js
let shallowCopySpread = [...fruits]
// ["Strawberry", "Mango"]
```

{{jsxref("Array.slice()")}}:

```js
let shallowCopySlice = fruits.slice()
// ["Strawberry", "Mango"]
```

{{jsxref("Array.from()")}}:

```js
let shallowCopyFrom = Array.from(fruits)
// ["Strawberry", "Mango"]
```

위의 세 코드는 모두 '얕은 복사'를 생성합니다. 얕은 복사란 배열의 최상위 요소가 원시 값일 경우 복사하지만, 중첩 배열이나 객체 요소일 경우에는 원본 배열의 요소를 참조하게 됩니다.

모든 요소의 '깊은 복사', 즉 중첩 배열과 객체 요소 또한 동일한 형태로 복사하는 방법 중 하나는 {{jsxref("JSON.stringify()")}}를 사용해 배열을 JSON 문자열로 변환한 후, {{jsxref("JSON.parse()")}}로 다시 배열을 구성하는 것입니다.

```js
let deepCopy = JSON.parse(JSON.stringify(fruits));
// ["Strawberry", "Mango"]
```

## 생성자

- {{jsxref("Array.Array", "Array()")}}
  - : `Array` 객체를 생성합니다.

## 정적 속성

- {{jsxref("Array.@@species", "get Array[@@species]")}}
  - : 파생 객체를 생성하는데 사용하는 생성자 함수입니다.

## 정적 메서드

- {{jsxref("Array.from()")}}
  - : 유사 배열 또는 반복 가능한 객체로부터 새로운 `Array` 인스턴스를 생성합니다.
- {{jsxref("Array.isArray()")}}
  - : 만약 매개변수가 배열이면 참을, 아니면 거짓을 반환합니다.
- {{jsxref("Array.of()")}}
  - : 매개변수의 수와 자료형에 제한 없이, 지정한 값을 사용해 새 `Array` 인스턴스를 생성합니다.

## 인스턴스 속성

- {{jsxref("Array.prototype.length")}}
  - : 배열의 원소 수를 나타냅니다.
- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
  - : {{jsxref("Statements/with", "with")}} 결속 범위로부터 제외하려는 속성 이름이 들어있는 기호입니다.

## 인스턴스 메서드

- {{jsxref("Array.prototype.at()")}} {{Experimental_Inline}}
  - : 주어진 인덱스의 요소를 반환합니다. 음수 값을 지정할 경우 인덱스를 배열의 끝부터 셉니다.
- {{jsxref("Array.prototype.concat()")}}
  - : 배열과 배열/값 매개변수를 이어붙인 새로운 배열을 반환합니다.
- {{jsxref("Array.prototype.copyWithin()")}}
  - : 배열 내의 지정된 요소들을 동일한 배열 내에서 복사합니다.
- {{jsxref("Array.prototype.entries()")}}
  - : 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 배열 반복자 객체를 반환합니다.
- {{jsxref("Array.prototype.every()")}}
  - : 배열의 모든 요소가 주어진 판별 함수를 만족할 경우 `true`를 반환합니다.
- {{jsxref("Array.prototype.fill()")}}
  - : 배열을 시작 인덱스부터 끝 인덱스까지의 지정한 값으로 채웁니다.
- {{jsxref("Array.prototype.filter()")}}
  - : 지정한 필터 함수의 반환 결과가 `true`인 요소만 모아서 새로운 배열을 반환합니다.
- {{jsxref("Array.prototype.find()")}}
  - : 주어진 판별 함수를 만족하는 첫 번째 요소를 반환합니다. 만족하는 요소가 없으면 `undefined`를 반환합니다.
- {{jsxref("Array.prototype.findIndex()")}}
  - : 주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스를 반환합니다. 만족하는 요소가 없으면 `-1`를 반환합니다.
- {{jsxref("Array.prototype.flat()")}}
  - : 배열 내의 모든 중첩 배열을 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 반환합니다.
- {{jsxref("Array.prototype.flatMap()")}}
  - : 배열의 모든 요소 각각에 대해 주어진 콜백 함수를 호출하고, 그 반환 값을 모아 새로운 배열을 생성한 후, 모든 중첩 배열을 이어붙여 평탄화해 반환합니다.
- {{jsxref("Array.prototype.forEach()")}}
  - : 배열의 각각의 요소에 대해 함수를 호출합니다.
- {{jsxref("Array.prototype.includes()")}}
  - : 배열이 주어진 값을 포함하는지 판별해 `true` 또는 `false`를 반환합니다.
- {{jsxref("Array.prototype.indexOf()")}}
  - : 배열에서 주어진 값과 일치하는 제일 앞의 인덱스를 반환합니다. 없으면 `-1`을 반환합니다.
- {{jsxref("Array.prototype.join()")}}
  - : 배열의 모든 요소를 문자열로 합칩니다.
- {{jsxref("Array.prototype.keys()")}}
  - : 배열의 각 인덱스에 대한 키를 가지는 새로운 배열 반복자 객체를 반환합니다.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : 배열에서 주어진 값과 일치하는 제일 뒤의 인덱스를 반환합니다. 없으면 `-1`을 반환합니다.
- {{jsxref("Array.prototype.map()")}}
  - : 배열의 모든 요소 각각에 대하여 주어진 콜백 함수를 호출하고, 그 반환 값을 모은 새로운 배열을 반환합니다.
- {{jsxref("Array.prototype.pop()")}}
  - : 배열에서 마지막 요소를 뽑아내고, 그 요소를 반환합니다.
- {{jsxref("Array.prototype.push()")}}
  - : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 변경된 `length`를 반환합니다.
- {{jsxref("Array.prototype.reduce()")}}
  - : 주어진 콜백 함수를 가산기와 요소 각각에 대해 (왼쪽에서 오른쪽으로) 호출하여 하나의 값으로 줄인 결과를 반환합니다.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : 주어진 콜백 함수를 가산기와 요소 각각에 대해 (오른쪽에서 왼쪽으로) 호출하여 하나의 값으로 줄인 결과를 반환합니다.
- {{jsxref("Array.prototype.reverse()")}}
  - : 배열의 요소 순서를 뒤집습니다. 즉 첫 번째 요소가 마지막이 되고 마지막이 첫 번째가 됩니다.
- {{jsxref("Array.prototype.shift()")}}
  - : 배열에서 첫 번째 요소를 삭제하고, 그 요소를 반환합니다.
- {{jsxref("Array.prototype.slice()")}}
  - : 배열의 일부를 추출한 새 배열을 반환합니다.
- {{jsxref("Array.prototype.some()")}}
  - : 배열의 어떤 요소가 주어진 판별 함수를 만족할 경우 `true`를 반환합니다.
- {{jsxref("Array.prototype.sort()")}}
  - : 배열의 요소를 정렬하고 그 배열을 반환합니다.
- {{jsxref("Array.prototype.splice()")}}
  - : 배열에서 요소를 추가하거나 삭제합니다.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : 배열과 그 요소를 나타내는 지역화된 문자열을 반환합니다. {{jsxref("Object.prototype.toLocaleString()")}} 메서드를 재정의합니다.
- {{jsxref("Array.prototype.toString()")}}
  - : 배열과 그 요소를 나타내는 문자열을 반환합니다. {{jsxref("Object.prototype.toString()")}} 메서드를 재정의합니다.
- {{jsxref("Array.prototype.unshift()")}}
  - : 배열의 앞에 하나 이상의 요소를 추가하고, 배열의 변경된 `length`를 반환합니다.
- {{jsxref("Array.prototype.values()")}}
  - : 배열의 각 인덱스에 대한 값을 가지는 새로운 배열 반복자 객체를 반환합니다.
- {{jsxref("Array.prototype.@@iterator()", "Array.prototype[@@iterator]()")}}
  - : 배열의 각 인덱스에 대한 값을 가지는 새로운 배열 반복자 객체를 반환합니다.

## 예제

### 배열 생성

아래 예제에서는 길이 0의 배열 `msgArray` 을 생성하고, `msgArray[0]` 와 `msgArray[99]` 에 값을 할당하여 배열의 길이를 100으로 변경합니다.

```js
let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
  console.log('길이가 100입니다.')
}
```

### 2차원 배열 생성

아래의 예제는 2차원 문자열 배열로 체스판을 생성합니다. 첫 번째 이동은 `board[6][4]`의 `'p'`를 `board[4][4]`로 복사하여 이루어집니다. 그 후 이전 위치 `[6][4]`는 빈 공간으로 만듭니다.

```js
let board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ]

console.log(board.join('\n') + '\n\n')

// 폰을 앞으로 두 칸 전진
board[4][4] = board[6][4]
board[6][4] = ' '
console.log(board.join('\n'))
```

결과는 다음과 같습니다.

```
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
```

### 배열을 사용하여 일련의 값을 테이블처럼 표시하기

```js
const values = []
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
}
console.table(values)
```

결과는 다음과 같습니다.

```
// 첫 번째 열은 인덱스
0	1	0
1	2	2
2	4	8
3	8	18
4	16	32
5	32	50
6	64	72
7	128	98
8	256	128
9	512	162
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- JavaScript 안내서:
  - [객체 속성 인덱싱](/ko/docs/Web/JavaScript/Guide/Working_with_Objects#객체_속성_인덱싱)
  - [인덱스 컬렉션: `Array` 객체](/ko/docs/Web/JavaScript/Guide/Indexed_collections#array_객체)
- [형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- [RangeError: invalid array length](/ko/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
