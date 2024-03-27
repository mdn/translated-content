---
title: console.dir()
slug: Web/API/console/dir_static
original_slug: Web/API/console/dir
---

{{APIRef("Console API")}}

**`console.dir()`** 메서드는 주어진 JavaScript 객체 속성을 인터랙티브한 목록으로 표시합니다.
출력된 결과는 자식 객체의 내용을 볼 수 있는 여닫는 삼각형과 함께 계층적인 목록으로 나타납니다.

다시 말해, `console.dir()`은 주어진 JavaScript 객체의 모든 속성을 콘솔에서 볼 수 있는 방법으로서
이를 사용하면 개발자가 객체의 속성을 쉽게 확인할 수 있습니다.

{{AvailableInWorkers}}

![console-dir.png](console-dir.png)

## 구문

```js-nolint
dir(object)
```

### 매개변수

- `object`
  - : 출력하고 싶은 속성을 포함한 JavaScript 객체

### 반환 값

None ({{jsxref("undefined")}}).

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [MSDN: Using the F12 Tools Console to View Errors and Status](<https://docs.microsoft.com/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)>)
- [Chrome Console API reference](https://developer.chrome.com/docs/devtools/console/api/#dir)
