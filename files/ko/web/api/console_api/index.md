---
title: Console API
slug: Web/API/Console_API
l10n:
  sourceCommit: bb9dfcdb1638dd0b0883903af82c0359b0a95a0d
---

{{DefaultAPISidebar("Console API")}}

**Console API**는 개발자가 코드의 설정 지점에서 메시지나 변수 값을 로깅 하거나, 작업 완료에 걸리는 시간을 측정하는 등의 디버깅 작업을 수행할 수 있는 기능을 제공합니다.

{{AvailableInWorkers}}

## 개념 및 사용법

Console API는 처음에는 대부분 자체 개발 API로 시작되었으며, 브라우저마다 구현 방식이 다르고 일관성이 없었습니다. [콘솔 API 명세](https://console.spec.whatwg.org/)는 일관된 동작을 정의하기 위해 만들어졌으며, 모든 최신 브라우저는 결국 일관된 동작을 구현하기로 했지만, 일부 구현에는 여전히 자체적인 추가 함수가 있습니다. 여기에서 자세히 알아보세요.

- [Google Chrome 개발자도구 구현](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Safari 개발자도구 구현](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

사용법은 매우 간단합니다. the {{domxref("console")}} 객체에는 일반적으로 브라우저의 [웹 콘솔](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)에 다양한 값을 로깅 하는 데 중점을 두고 있고, 기초적인 디버깅 작업을 수행하기 위해 호출할 수 있는 많은 메서드가 포함되어 있습니다.

가장 일반적으로 사용되는 메서드는 {{domxref("console.log")}}이며, 특정 변수 안에 포함된 현재 값을 기록하는 데 사용됩니다.

## 인터페이스

- {{domxref("console")}}
  - : 로깅, 스택 추적, 타이머, 카운터 등 기초적인 디버깅 기능을 제공합니다.

## 예제

```js
let myString = "Hello world";

// 콘솔에 "Hello world"가 출력됩니다
console.log(myString);
```

더 많은 예제는 [console](/ko/docs/Web/API/console#usage) 문서를 참조하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — Firefox의 웹 콘솔이 콘솔 API 호출을 처리하는 방법
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — 디버깅 대상이 모바일 디바이스인 경우 콘솔 출력을 확인하는 방법
