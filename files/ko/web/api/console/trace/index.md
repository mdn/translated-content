---
title: console.trace()
slug: Web/API/console/trace
---

{{APIRef("Console API")}}

**`console.trace()`** 메서드는 [웹 콘솔](/ko/docs/Tools/Web_Console)에 스택 추적을 출력합니다.

{{AvailableInWorkers}}

자세한 내용과 예제는 {{domxref("console")}} 문서의 [스택 추적](/ko/docs/Web/API/console#스택_추적)을 참고하세요.

## 구문

```js
console.trace([...any, ...data]);
```

### 매개변수

- `...any, ...data` {{optional_inline}}
  - : 스택 추적과 함께 콘솔에 출력할 0개 이상의 객체. {{domxref("console.log()")}} 메서드에 전달되는 것과 동일한 방식으로 조합되고 형식이 지정됩니다.

## 예제

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

콘솔에 다음과 같은 추적이 표시됩니다.

```
bar
foo
<anonymous>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
