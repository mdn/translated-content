---
title: 타입 변환
slug: Glossary/Type_Conversion
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

타입 변환(또는 타입캐스팅)은 데이터를 하나의 데이터 타입에서 다른 데이터 타입으로 전환하는 것을 의미합니다. 암시적 변환은 컴파일러(컴파일 언어의 경우)나 런타임({{glossary("JavaScript")}}와 같은 스크립트 언어의 경우)이 데이터 타입을 자동으로 변환하는 경우에 이루어집니다. 또한 소스 코드는 변환을 명시적으로 요구할 수도 있습니다.

예를 들어, 표현식 `"foo" + 1`에서 {{glossary("Number")}} `1`은 {{glossary("String")}}으로 암시적 변환이 되고 표현식은 `"foo1"`을 반환합니다. 명령문 `Number("0x11")`에서 문자열 `"0x11"`은 명시적으로 숫자 `17`로 변환됩니다.

## 같이 보기

- 위키백과 [타입 변환](https://en.wikipedia.org/wiki/Type_conversion)
- [용어 사전](/ko/docs/Glossary)

  - {{Glossary("Type", "타입")}}
  - {{Glossary("Type coercion", "형변환")}}
