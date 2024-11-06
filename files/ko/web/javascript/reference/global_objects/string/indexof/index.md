---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
---

{{JSRef}}

**`indexOf()`** 메서드는 호출한 {{jsxref("String")}} 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.

{{EmbedInteractiveExample("pages/js/string-indexof.html")}}

> **참고:** {{jsxref("Array")}}에서는 {{jsxref("Array.prototype.indexOf()")}} 메서드가 같은 역할을 합니다.

## 구문

```js
str.indexOf(searchValue[, fromIndex])
```

### 매개변수

- `searchValue`
  - : 찾으려는 문자열. 아무 값도 주어지지 않으면 [문자열 `"undefined"`를 찾으려는 문자열로 사용](https://tc39.github.io/ecma262/#sec-tostring)합니다.
- `fromIndex` {{optional_inline}}
  - : 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값입니다. 어떤 정수값이라도 가능합니다. 기본값은 0이며, 문자열 전체를 대상으로 찾게 됩니다. 만약 `fromIndex` 값이 음의 정수이면 전체 문자열을 찾게 됩니다. 만약 `fromIndex >= str.length` 이면, 검색하지 않고 바로 -1을 반환합니다. `searchValue`가 공백 문자열이 아니라면, `str.length`를 반환합니다.

### 반환 값

`searchValue`의 첫 번째 등장 인덱스. 찾을 수 없으면 -1.

## 설명

문자열 내에 있는 문자들은 왼쪽에서 오른쪽 방향으로 순번이 매겨집니다. 제일 처음 문자는 0번째 순번(index)이며, `stringName` 문자열의 마지막 문자의 순번 `stringName.length -1` 입니다.

```js
"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10
```

`indexOf()` 메서드는 대소문자를 구분합니다. 예를 들면, 아래 예제는 일치하는 문자열이 없으므로 `-1`을 반환합니다.

```js
"Blue Whale".indexOf("blue"); // returns -1
```

### 존재 여부 확인

'0'을 평가했을 때 `true`가 아니고, -1을 평가했을 때 `false`가 아닌 것에 주의해야 합니다. 따라서, 임의의 문자열에 특정 문자열이 있는지를 확인하는 올바른 방법은 다음과 같습니다.

```js
"Blue Whale".indexOf("Blue") !== -1; // true
"Blue Whale".indexOf("Bloe") !== -1; // false
```

## 예제

### `indexOf()` 사용하기

아래 예제는 `"Brave new world"` 문자열의 위치를 확인하기 위해 `indexOf()`와 {{jsxref("String.prototype.lastIndexOf()", "lastIndexOf()")}} 를 사용하고 있습니다.

```js
var anyString = "Brave new world";

console.log(
  "The index of the first w from the beginning is " + anyString.indexOf("w"),
);
// 첫번째 w 문자 위치는 8
console.log(
  "The index of the first w from the end is " + anyString.lastIndexOf("w"),
);
// 마지막 w 문자 위치는 10

console.log(
  'The index of "new" from the beginning is ' + anyString.indexOf("new"),
);
// 첫번째 new 문자열 위치는 6
console.log(
  'The index of "new" from the end is ' + anyString.lastIndexOf("new"),
);
// 마지막 new 문자열 위치는 6
```

### `indexOf()`와 대소문자 구분

아래 예제에서는 2개의 문자열 변수를 정의하고 있습니다. 이 변수들 내에 있는 문자열들은 모두 같지만 두 번째 변수에 포함되어 있는 문자열은 대문자를 포함하고 있습니다. 첫 번째 {{domxref("console.log()")}} 메서드의 결과값은 19입니다. 하지만, 두 번째 `console.log()` 메서드의 결과값은 `-1`입니다. 왜냐하면, indexOf() 메서드는 대소문자를 구분하기 때문에 `myCapString`에서 "`cheddar`" 문자열을 찾을 수 없기 때문입니다.

```js
var myString = "brie, pepper jack, cheddar";
var myCapString = "Brie, Pepper Jack, Cheddar";

console.log('myString.indexOf("cheddar") is ' + myString.indexOf("cheddar"));
// 로그에 19를 출력합니다.
console.log(
  'myCapString.indexOf("cheddar") is ' + myCapString.indexOf("cheddar"),
);
// 로그에 -1을 출력합니다.
```

### `indexOf()`를 사용하여 문자열 내의 특정 문자 숫자 세기

아래 예제는 `str` 문자열에서 `e` 문자의 총 숫자를 확인하는 프로그램입니다:

```js
var str = "To be, or not to be, that is the question.";
var count = 0;
var pos = str.indexOf("e"); //pos는 4의 값을 가집니다.

while (pos !== -1) {
  count++;
  pos = str.indexOf("e", pos + 1); // 첫 번째 e 이후의 인덱스부터 e를 찾습니다.
}

console.log(count); // 로그에 4를 출력합니다.
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
