---
title: console.countReset()
slug: Web/API/console/countReset
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Reference
  - Web Development
  - console
  - web console
browser-compat: api.console.countReset
translation_of: Web/API/Console/countReset
---
{{APIRef("Console API")}}

**`console.countReset()`** 메서드는 {{domxref("console.count()")}}의 카운터를 초기화합니다.

{{AvailableInWorkers}}

## 구문

```js
console.countReset([label]);
```

### 매개변수

- `label` {{optional_inline}}
  - : {{jsxref("String")}}. 지정한 경우, 이 레이블을 지정한 `count()`를 0으로 초기화합니다. 누락한 경우 default 카운터를 0으로 초기화합니다.

## 예제

```js
let user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
console.countReset();
```

위 코드의 출력 결과는 다음과 같습니다.

```
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

`console.countReset()`이 기본 카운터를 0으로 초기화했음을 알 수 있습니다.

첫 번째 `count()`의 매개변수에는 문자열 "bob"을 제공하고, 두 번째에는 문자열 "alice"를 제공할 경우...

```js
let user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.countReset("bob");
console.count("alice");
```

다음과 같이 출력합니다.

```
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

카운터 "bob"을 초기화해도 "alice"의 값에는 영향이 없습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
