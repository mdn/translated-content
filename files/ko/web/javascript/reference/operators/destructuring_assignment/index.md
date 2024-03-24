---
title: 구조 분해 할당
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
---

{{jsSidebar("Operators")}}

**구조 분해 할당** 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html")}}

## 구문

```js
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## 설명

객체 및 배열 리터럴 표현식을 사용하면 즉석에서 쉽게 데이터 뭉치를 만들 수 있습니다.

```js
var x = [1, 2, 3, 4, 5];
```

구조 분해 할당의 구문은 위와 비슷하지만, 대신 할당문의 좌변에서 사용하여, 원래 변수에서 어떤 값을 분해해 할당할지 정의합니다.

```js
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

구조 분해 할당은 Perl이나 Python 등 다른 언어가 가지고 있는 기능입니다.

## 배열 구조 분해

### 기본 변수 할당

```js
var foo = ["one", "two", "three"];

var [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

### 선언에서 분리한 할당

변수의 선언이 분리되어도 구조 분해를 통해 값을 할당할 수 있습니다.

```js
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### 기본값

변수에 기본값을 할당하면, 분해한 값이 {{jsxref("undefined")}}일 때 그 값을 대신 사용합니다.

```js
var a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### 변수 값 교환하기

하나의 구조 분해 표현식만으로 두 변수의 값을 교환할 수 있습니다.

구조 분해 할당 없이 두 값을 교환하려면 임시 변수가 필요합니다. (일부 로우 레벨 언어에서는 [XOR 교체 트릭](http://en.wikipedia.org/wiki/XOR_swap)을 사용할 수 있습니다)

```js
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

### 함수가 반환한 배열 분석

함수는 이전부터 배열을 반환할 수 있었습니다. 구조 분해를 사용하면 반환된 배열에 대한 작업을 더 간결하게 수행할 수 있습니다.

아래 예제에서 `f()`는 출력으로 배열 `[1, 2]`을 반환하는데, 하나의 구조 분해만으로 값을 분석할 수 있습니다.

```js
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

### 일부 반환 값 무시하기

다음과 같이 필요하지 않은 반환 값을 무시할 수 있습니다.

```js
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
```

반환 값을 모두 무시할 수도 있습니다.

```js
[, ,] = f();
```

### 변수에 배열의 나머지를 할당하기

배열을 구조 분해할 경우, 나머지 구문을 이용해 분해하고 남은 부분을 하나의 변수에 할당할 수 있습니다.

```js
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

나머지 요소의 오른쪽 뒤에 쉼표가 있으면 {{jsxref("SyntaxError")}}가 발생합니다.

```js-nolint example-bad
var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### 정규 표현식과 일치하는 값 해체하기

정규 표현식의 [`exec()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 메서드는 일치하는 부분를 찾으면 그 문자열에서 정규식과 일치하는 부분 전체를 배열의 맨 앞에, 그리고 그 뒤에 정규식에서 괄호로 묶인 각 그룹과 일치하는 부분을 포함하는 배열을 반환합니다. 구조 분해 할당은 필요하지 않은 경우 일치하는 전체 부분은 무시하고 필요한 부분만 쉽게 빼올 수 있습니다.

```js
function parseProtocol(url) {
  var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

  var [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/en-US/Web/JavaScript"),
); // "https"
```

## 객체 구조 분해

### 기본 할당

```js
var o = { p: 42, q: true };
var { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

### 선언 없는 할당

구조 분해를 통해 변수의 선언과 분리하여 변수에 값을 할당할 수 있습니다.

```js
var a, b;

({ a, b } = { a: 1, b: 2 });
```

<div class="note"><p><strong>참고</strong>: 할당 문을 둘러싼 <code>( .. )</code>는 선언 없이 객체 리터럴(object literal) 비구조화 할당을 사용할 때 필요한 구문입니다.</p><p><code>{a, b} = {a:1, b:2}</code>는 유효한 독립 구문이 아닙니다. 좌변의 <code>{a, b}</code>이 객체 리터럴이 아닌 블록으로 간주되기 때문입니다.</p><p>하지만, <code>({a, b} = {a:1, b:2})</code>는 유효한데, <code>var {a, b} = {a:1, b:2}</code>와 같습니다.</p><p><code>( .. )</code> 표현식 앞에는 세미콜론이 있어야 합니다. 그렇지 않을 경우 이전 줄과 연결되어 함수를 실행하는데 이용될 수 있습니다.</p></div>

### 새로운 변수 이름으로 할당하기

객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당할 수 있습니다.

```js
var o = { p: 42, q: true };
var { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

### 기본값

객체로부터 해체된 값이 `undefined`인 경우, 변수에 기본값을 할당할 수 있습니다.

```js
var { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

### 기본값 갖는 새로운 이름의 변수에 할당하기

새로운 변수명 할당과 기본값 할당을 한번에 할 수 있습니다.

```js
var { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

### 함수 매개변수의 기본값 설정하기

#### ES5 버전

```js
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? "big" : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // 이제 드디어 차트 그리기 수행
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});
```

#### ES2015 버전

```js
function drawES2015Chart({
  size = "big",
  cords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, cords, radius);
  // 차트 그리기 수행
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});
```

<div class="note"><p>위의 <strong><code>drawES2015Chart</code></strong> 함수의 원형에서 구조 분해된 좌변에 빈 오브젝트 리터럴을 할당하는 것을 볼 수 있습니다 <code>{size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}</code>. 빈 오브젝트를 우변에 할당하지 않고도 함수를 작성할 수 있습니다. 하지만, 지금의 형태에서는 단순히 <code><strong>drawES2015Chart()</strong></code>와 같이 어떤 매개변수 없이도 호출할 수 있지만, 우변의 빈 오브젝트 할당을 없앤다면 함수 호출시 적어도 하나의 인자가 제공되어야만 합니다. 이 함수가 어떠한 매개변수 없이도 호출할 수 있길 원한다면 지금 형태가 유용하고, 무조건 객체를 넘기길 원하는 경우에는 빈 객체 할당을 하지 않는 것이 유용할 수 있습니다.</p></div>

### 중첩된 객체 및 배열의 구조 분해

```js
var metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/ko/docs/Tools/Scratchpad",
};

var {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

### for of 반복문과 구조 분해

```js
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (var {
  name: n,
  family: { father: f },
} of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### 함수 매개변수로 전달된 객체에서 필드 해체하기

```js
function userId({ id }) {
  return id;
}

function whois({ displayName: displayName, fullName: { firstName: name } }) {
  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```

이 예제는 user 객체로부터 `id`, `displayName` 및 `firstName` 을 해체해 출력합니다.

### 계산된 속성 이름과 구조 분해

계산된 속성 이름(computed property name)은, [객체 리터럴](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)과 비슷하게 구조 분해에도 사용될 수 있습니다.

```js
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

### 객체 구조 분해에서 Rest

[Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) 제안(stage 3)에서는 구조 분해에 [rest](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters) 구문을 추가하고 있습니다. rest 속성은 구조 분해 패턴으로 걸러지지 않은 열거형 속성의 키를 가진 나머지 항목들을 모읍니다.

```js
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

### 속성 이름이 유효한 JavaScript 식별자명이 아닌 경우

구조 분해는 JavaScript {{glossary("Identifier", "식별자")}} 이름으로 적합하지 않은 속성명이 제공된 경우에도 이용할 수 있습니다. 이 때는 대체할 유효한 식별자명을 제공해야 합니다.

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // "true"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [할당 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- ["ES6 in Depth: Destructuring" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
