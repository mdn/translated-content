---
title: 코드 단위 (Code unit)
slug: Glossary/Code_unit
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**코드 단위**는 문자 인코딩 시스템(예, UTF-8 또는 UTF-16)에서 사용되는 기본 구성 요소입니다. 문자 인코딩 시스템은 하나 이상의 코드 단위를 사용하여 유니코드 {{Glossary("code point", "코드 포인트")}}를 인코딩합니다.

UTF-16 (JavaScript 문자열에 사용되는 인코딩 시스템)에서 코드 단위는 16비트 값입니다. 이것은 문자열에 대한 인덱싱이나 문자열 길이 가져오는 작업이 이러한 16비트 단위에서 작동함을 의미합니다. 이러한 단위는 우리가 문자로 간주할 수 있는 항목에 항상 1대1로 매핑되지는 않습니다.

예를 들어, 악센트와 같은 발음 구별 부호가 있는 문자는 때때로 두 개의 유니코드 코드 포인트를 사용하여 표현될 수 있습니다.

```js
const myString = "\u006E\u0303";
console.log(myString); // ñ
console.log(myString.length); // 2
```

또한, 유니코드로 정의된 모든 코드 포인트가 16비트에 맞지 않기 때문에, 많은 유니코드 코드 포인트가 '대리 쌍'이라고 불리는 UTF-16 코드 단위 쌍으로 인코딩됩니다.

```js
const face = "🥵";
console.log(face.length); // 2
```

JavaScript {{jsxref("String")}} 객체의 {{jsxref("String/codePointAt", "codePointAt()")}} 메서드를 사용하면 인코딩된 형식에서 유니코드 코드 포인트를 검색할 수 있습니다.

```js
const face = "🥵";
console.log(face.codePointAt(0)); // 129397
```

## 같이 보기

- [유니코드 인코딩 FAQ](https://www.unicode.org/faq/utf_bom.html)
