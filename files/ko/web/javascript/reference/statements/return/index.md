---
title: return
slug: Web/JavaScript/Reference/Statements/return
---

{{jsSidebar("Statements")}}

**`return` 명령문**은 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환합니다.

{{EmbedInteractiveExample("pages/js/statement-return.html")}}

## 구문

```js
return [[expression]];
```

- `expression`
  - : 반환할 값으로 사용할 표현식. 생략할 경우 {{jsxref("undefined")}}를 대신 반환합니다.

## 설명

함수 본문에서 `return` 명령문에 도달하면 함수의 실행은 그 지점에서 중단됩니다. 값을 제공한 경우 함수를 호출한 곳에 그 값을 반환합니다. 예를 들어, 다음 함수는 숫자 매개변수 `x`의 제곱을 반환합니다.

```js
function square(x) {
  return x * x;
}
var demo = square(3);
// demo는 9
```

값을 명시하지 않으면 대신 `undefined`를 반환합니다.

다음 `return` 명령문 모두 함수 실행을 끊습니다.

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### 자동 세미콜론 삽입

`return` 명령문은 [자동 세미콜론 삽입(ASI)](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)의 영향을 받습니다. `return` 키워드와 표현식 사이에는 줄바꿈 문자가 올 수 없습니다.

```js-nolint example-bad
return
a + b;
```

위 코드는 ASI로 인해 아래처럼 처리됩니다.

```js
return;
a + b;
```

콘솔이 "unreachable code after return statement" 경고를 출력할 것입니다.

문제를 해결하려면 괄호를 사용해 ASI를 방지해야 합니다.

```js example-good
return a + b;
```

## 예제

### 함수 중단

함수는 `return`을 호출하는 지점에서 즉시 실행을 멈춥니다.

```js
function counter() {
  for (var count = 1; ; count++) {
    // 무한 반복
    console.log(count + "A"); // 5까지
    if (count === 5) {
      return;
    }
    console.log(count + "B"); // 4까지
  }
  console.log(count + "C"); // 절대 나타나지 않음
}

counter();

// 출력:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### 함수 반환하기

[클로저](/ko/docs/Web/JavaScript/Guide/Closures)에 대해서도 더 알아보세요.

```js
function magic(x) {
  return function calc(x) {
    return x * 42;
  };
}

var answer = magic();
answer(1337); // 56154
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [함수](/ko/docs/Web/JavaScript/Reference/Functions)
- [클로저](/ko/docs/Web/JavaScript/Guide/Closures)
