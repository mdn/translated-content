---
title: Console API
slug: Web/API/Console_API
---

{{DefaultAPISidebar("Console API")}}

**Console API**는 코드의 특정 지점에서 값이나 변수를 기록하고, 작업의 소요 시간을 알아내는 등 개발자가 사용할 수 있는 디버깅 기능을 제공합니다.

## 개념과 사용법

Console API는 사유 API로 시작하였으며, 브라우저가 각자 다른 구현을 했습니다. 이후 [Console API 명세](https://console.spec.whatwg.org/)가 만들어져 일관적인 동작 방식을 정의하였으며, 결국 모든 최신 브라우저가 같은 동작을 따르게 되었습니다. 그러나 일부 구현체는 여전히 자신만의 사유 함수를 가지고 있습니다. 다음 링크에서 알아보세요.

- [Google Chrome DevTools implementation](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Safari DevTools implementation](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

사용은 매우 간단합니다. {{domxref("Window.console")}}, 워커에서는 {{domxref("WorkerGlobalScope.console")}}, 아니면 그냥 `console`로 접근 가능한 {{domxref("console")}} 객체는 브라우저의 [웹 콘솔](/ko/docs/Tools/Web_Console)에 값을 기록하는 등 기초적인 디버깅 작업에 사용할 수 있는 메서드를 제공합니다.

가장 자주 쓰이는 메서드는 {{domxref("console.log()")}}이며, 변수의 값을 기록할 때 사용합니다.

## 인터페이스

- {{domxref("console")}}
  - : 로깅, 스택 추적, 타이머, 카운터 등 기초적인 디버깅 기능을 제공합니다.

## 예제

```js
let myString = "Hello world";

// Output "Hello world" to the console
console.log(myString);
```

{{domxref("console")}} 문서의 [예제](/ko/docs/Web/API/Console#예제) 항목에서 더 많은 예제를 확인하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Firefox Developer Tools](/ko/docs/Tools)
- [Web Console](/ko/docs/Tools/Web_Console) — how the Web Console in Firefox handles console API calls
- [Remote debugging](/ko/docs/Tools/Remote_Debugging) — how to see console output when the debugging target is a mobile device
