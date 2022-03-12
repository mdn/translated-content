---
title: console.count()
slug: Web/API/console/count
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Reference
  - Web Development
  - web console
browser-compat: api.console.count
translation_of: Web/API/Console/count
---
{{APIRef("Console API")}}

**`console.count()`** 메서드는 특정 `count()` 호출의 횟수를 세어 출력합니다.

{{AvailableInWorkers}}

## 구문

```js
console.count([label]);
```

### 매개변수

- `label` {{Optional_Inline}}
  - : {{jsxref("String")}}. 지정한 경우, 이 레이블을 지정한 `count()` 호출의 수를 출력합니다. 누락한 경우 "default"를 지정한 것처럼 동작합니다.


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
```

위 코드의 출력 결과는 다음과 같습니다.

```
"default: 1"
"default: 2"
"default: 3"
"default: 4"
```

레이블을 명시하지 않았기 때문에 `default`로 나타납니다.

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
console.count("alice");
```

다음과 같이 출력합니다.

```
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

이제 `label` 값만으로 별도의 카운트를 유지 관리하고 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
