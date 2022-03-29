---
title: console.warn()
slug: Web/API/console/warn
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
browser-compat: api.console.warn
translation_of: Web/API/Console/warn
---
{{APIRef("Console API")}}

**`console.warn()`** 메서드는 웹 콘솔에 경고 메시지를 출력합니다.

{{AvailableInWorkers}}

> **참고:** Firefox에서는 웹 콘솔의 경고 옆에 작은 느낌표 아이콘이 나타납니다.

## 구문

```js
console.warn(obj1 [, obj2, ..., objN]);
console.warn(msg [, subst1, ..., substN]);
```

## 매개변수

- `obj1` ... `objN`
  - : 출력할 JavaScript 객체의 리스트. 각 객체의 문자열 표현은 입력한 순서대로 함께 출력됩니다.
- `msg`
  - : 0개 이상의 치환 문자열을 포함하는 JavaScript 문자열.
- `subst1` ... `substN`
  - : `msg` 안의 문자열을 치환하기 위한 JavaScript 객체. 출력 형식에 추가 제어를 할 수 있게 해줍니다.

자세한 내용은 {{domxref("console")}} 문서의 [콘솔에 텍스트 출력하기](/ko/docs/Web/API/console#콘솔에_텍스트_출력하기)를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [MSDN: F12 도구 콘솔을 사용하여 오류 및 상태 보기](https://msdn.microsoft.com/library/gg589530)
