---
title: console.error()
slug: Web/API/console/error
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
browser-compat: api.console.error
translation_of: Web/API/Console/error
---
{{APIRef("Console API")}}

**`console.error()`** 메서드는 웹 콘솔에 에러 메시지를 출력합니다.

{{AvailableInWorkers}}

## 구문

```js
console.error(obj1 [, obj2, ..., objN]);
console.error(msg [, subst1, ..., substN]);
```

### 매개변수

- `obj1` ... `objN`
  - : 출력할 JavaScript 객체의 리스트. 각 객체의 문자열 표현은 나열된 순서로 함께 출력됩니다.
- `msg`
  - : 0개 이상의 하위 문자열을 포함하는 JavaScript 문자열.
- `subst1` ... `substN`
  - : `msg` 안의 대체할 하위 문자열을 포함하는 JavaScript 객체. 출력 형식에 추가 제어를 할 수 있게 해줍니다.

자세한 내용은 [콘솔에 텍스트 출력하기](/ko/docs/Web/API/Console#콘솔에_텍스트_출력하기)를 확인하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
