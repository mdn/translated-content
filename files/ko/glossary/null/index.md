---
title: "Null"
slug: Glossary/Null
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

컴퓨터 과학에서, `null` 값은 일반적으로 존재하지 않거나 유효하지 않은 {{glossary ("object")}} 또는 주소를 의도적으로 가리키는 참조를 나타냅니다. null 참조의 의미는 언어의 구현에 따라 다양합니다.

{{Glossary("JavaScript")}}에서 `null`은 동작이 원시적으로 보이기 때문에 {{Glossary ( "Primitive", "원시 값")}} 중 하나로 표시됩니다. 하지만 [`typeof`](/ko/docs/Web/JavaScript/Reference/Operators/typeof) 연산자를 사용할 때는 `"object"`를 반환합니다.

```js
console.log(typeof null); // "object"
```

이는 [버그](/ko/docs/Web/JavaScript/Reference/Operators/typeof#null)로 여겨지지만 수정하면 많은 스크립트에 문제가 발생할 수 있어서 고칠 수 없습니다.

## 같이 보기

- [JavaScript의 타입](/ko/docs/Web/JavaScript/Guide/Data_structures)
- JavaScript 전역 객체: [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null)
- 위키백과의 [널 포인터](https://ko.wikipedia.org/wiki/널_포인터)
- **[용어 사전](/ko/docs/Glossary)**
  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{jsxref("Symbol")}}
