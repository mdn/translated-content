---
title: console.log()
slug: Web/API/console/log
tags:
  - API
  - DOM
  - Debugging
  - HTML-tree
  - Method
  - Reference
  - Web Development
  - console.log()
  - difference
  - web console
browser-compat: api.console.log
translation_of: Web/API/Console/log
---
{{APIRef("Console API")}}

**`console.log()`** 메서드는 웹 콘솔에 메시지를 출력합니다. 메시지는 (선택적 대체 값을 포함한) 단일 문자열이거나 더 많은 JavaScript 객체중 하나일 수 있습니다.

{{AvailableInWorkers}}

## 구문

```js
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);
```

### 매개변수

- `obj1` ... `objN`
  - : 출력할 JavaScript 객체 목록입니다. 이러한 각 객체의 문자열 표현은 입력한 순서대로 함께 출력됩니다. 최신 버전의 Chrome 및 Firefox에서, 콘솔에 기록되는 것은 객체에 대한 참조이며, `console.log()`를 호출하는 순간에 객체의 '값'이 반드시 필요한 것은 아닙니다.
- `msg`
  - : 0개 이상의 치환 문자열들을 포함하는 자바스크립트 문자열입니다.
- `subst1` ... `substN`
  - : `msg` 내의 치환 문자열들을 치환할 자바스크립트 객체들입니다. 출력 형식에 추가 제어를 할 수 있게 해줍니다.

자세한 내용은 {{domxref("console")}} 문서의 [콘솔에 텍스트 출력](/ko/docs/Web/API/Console#콘솔에_텍스트_출력하기)을 참고하세요.

## log()와 dir()의 차이

당신은 {{domxref("console.dir()")}}과 `console.log()`가 무엇이 다른지 궁금할 수 있습니다.

DOM 요소들을 콘솔로 보낼 때 Chrome에서 다른 유용한 차이점이 있습니다.

![](dozdcyr.png)

- `console.log`는 요소를 HTML과 같은 트리 구조로 출력합니다.
- `console.dir`은 요소를 JSON과 같은 트리 구조로 출력합니다.

구체적으로, `console.log`는 DOM 요소에 대해 특별한 처리를 제공하지만 `console.dir`은 그렇지 않습니다. 이것은 종종 DOM JS 객체의 전체 표현을 보려고 할 때 유용합니다.

이것과 다른 함수들에 대한 더 많은 정보는 [Chrome Console API reference](https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject)에서 확인할 수 있습니다.

## 객체 로깅하기

`console.log(obj)`를 사용하지 말고 `console.log(JSON.parse(JSON.stringify(obj)))`를 사용하시기 바랍니다.

이 방법은 여러분이 로그를 남길 당시의 `obj` 값을 보려고 사용했을 것입니다. 그러나 많은 브라우저가 값이 갱신 될때마다 끊임없이 바뀐 값을 보여줍니다. 이는 여러분이 원하는 방법이 아닐 것입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [MSDN: F12 도구 콘솔을 사용하여 오류 및 상태 보기](https://msdn.microsoft.com/library/gg589530)
- [NodeJS: Console API](https://nodejs.org/docs/latest/api/console.html#console_console_log_data)
