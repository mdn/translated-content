---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
tags:
  - JavaScript
  - Property
  - Prototype
browser-compat: javascript.builtins.Error.message
---
{{JSRef}}

**`message`** 속성은 사람이 읽을 수 있는 오류의 설명입니다.

## 설명

이 속성은 오류가 있거나 설정된 경우 오류에 대한 간략한 설명을 포함합니다. [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey)는 예외적으로 `message` 속성을 광범위하게 사용합니다. {{jsxref("Error.prototype.name", "name")}} 속성과 결합된 `message` 속성은 {{jsxref("Error.prototype.toString()")}} 메서드에서 오류의 문자열 표현을 생성하는 데 사용됩니다.

기본적으로 `message` 속성은 빈 문자열이지만, {{jsxref("Error/Error", "Error")}} 생성자에 대한 첫 번째 인수로 메시지를 지정하여 인스턴스에 대해 이 동작을 재정의할 수 있습니다.

## 예제

### 사용자 정의 오류 발생시키기

```js
var e = new Error('Could not parse input');
// e.message is 'Could not parse input'
throw e;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
