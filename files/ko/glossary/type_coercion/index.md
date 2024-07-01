---
title: 자동 형변환 (Type coercion)
slug: Glossary/Type_coercion
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

자동 형변환(Type coercion)은 한 데이터 타입에서 다른 데이터 타입(예, 문자열을 숫자로)으로 값을 자동 또는 암시적으로 변환하는 것을 의미합니다. {{Glossary("Type conversion", "형 변환")}}은 '자동 형변환(Type coercion)'과 유사합니다. 두 경우 모두 하나의 중요한 차이점을 제외하고, 한 데이터 형식에서 다른 데이터 형식으로 값을 변환하기 때문입니다. 하나의 중요한 차이점은 '자동 형변환'은 암시적이지만, '형 변환'은 암시적이거나 명시적일 수 있습니다.

## 예제

```js
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

위의 예제에서, JavaScript는 숫자의 `9`를 문자열로 자동 형변환 후, 두 값을 함께 연결하여 `59`라는 문자열을 생성합니다. JavaScript는 문자열이나 숫자 중에서 선택할 수 있었고 문자열을 사용하기로 결정했습니다.

컴파일러는 `5`를 숫자로 자동 형변환하고 합의 결과를 `14`로 반환할 수 있었지만 그렇지 않았습니다. 이 결과를 반환하려면, {{jsxref("Global_Objects/Number", "Number()")}} 메서드를 사용하여 `5`를 숫자로 명시적으로 변환해야 합니다.

```js
sum = Number(value1) + value2;
```

## 같이 보기

- 위키백과의 [형 변환](https://en.wikipedia.org/wiki/Type_conversion)
- [용어 사전](/ko/docs/Glossary)

  - {{Glossary("Type")}}
  - {{Glossary("Type conversion")}}
