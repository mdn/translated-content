---
title: Function.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
---

{{JSRef}} {{non-standard_header}}

**`toSource()`** 메소드는 객체의 소스 코드를 나타내는 스트링을 반환합니다.

## 구문

```js
    function.toSource();
```

### 반환 값

객체의 소스 코드를 나타내는 스트링.

## 설명

`toSource` 메소드는 다음 값들을 반환합니다.

- 내장 {{jsxref("Function")}} 객체에 대한 `toSource()` 는 소스 코드 사용이 불가함을 나타내는 다음 스트링을 반환합니다.

  ```js
  function Function() {
      [native code]
  }
  ```

- 커스텀 함수에 대한 `toSource()` 는 객체를 정의하는 JavaScript 코드를 스트링으로 반환합니다.

  ```js
  // 예시:
  function hello() {
    console.log("Hello, World!");
  }

  hello.toSource();
  ```

  ```js
  // 결과:
  "function hello() {
      console.log(\"Hello, World!\");
  }"
  ```

이 메소드는 보통 JavaScript 에 의해 내부적으로 호출되며 코드에서 명시적으로 사용되지 않습니다. 디버깅할 때 객체의 컨텐츠를 검사하기 위해 `toSource` 를 호출해보실 수 있습니다.

## 명세서

어떠한 표준의 일부도 아닙니다. JavaScript 1.3 에서 구현되었습니다.

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Object.prototype.toSource()")}}
