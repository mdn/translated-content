---
title: 카멜 케이스(Camel case)
slug: Glossary/Camel_case
l10n:
  sourceCommit: 4087e29297477d29ee9d4c34a11310cfc09da275
---

{{GlossarySidebar}}

**카멜 케이스(Camel case)**는 띄어쓰기를 하지 않고 각 단어의 첫 글자를 대문자로 붙여 쓰되, 전체 단어의 첫 글자는 대문자 또는 소문자로 쓸 수 있는 방식입니다. 이 형식의 이름은 대문자가 낙타 등의 혹처럼 보이는 데에서 유래했습니다. 읽는 사람이 형상을 쉽게 떠올릴 수 있도록 "camelCase"로 표현하기도 합니다.

카멜 케이스는 변수 이름 지정 규칙으로 자주 사용됩니다. 다음의 변수는 모두 카멜 케이스로 작성된 예시입니다. {{domxref("console")}}, {{jsxref("encodeURIComponent")}}, {{jsxref("ArrayBuffer")}}, {{domxref("HTMLElement")}}.

`URI`, `HTML`과 같이 구문에 약어가 포함된 경우, 카멜 케이스는 다양하게 표현될 수 있습니다. 어떤 사람들은 `encodeURIComponent`와 같이 약어를 모두 대문자로 표기하는 것을 선호합니다. 이는 `XMLHTTPRequest`와 같이 약어가 연속될 경우 모호함을 줄 수 있습니다. 반면 `XmlHttpRequest`와 같이 약어의 첫 글자만 대문자로 표기하는 것을 선호하는 사람들도 있습니다. 실제 전역 변수인 {{domxref("XMLHttpRequest")}}는 두 방식을 혼합하여 사용합니다.

전체 구문의 첫 글자가 대문자인 경우, 이를 _대문자 카멜 케이스_ 또는 *파스칼 케이스(Pascal case)*라고 합니다. 그렇지 않으면 *소문자 카멜 케이스*라고 합니다.

카멜 케이스는 JavaScript, Java 및 다양한 언어에서 가장 인기 있는 규칙입니다.

## 같이 보기

- {{Glossary("스네이크 케이스")}}
- {{Glossary("케밥 케이스")}}
- [typescript-eslint rule: `이름 지정 규칙`](https://typescript-eslint.io/rules/naming-convention/)
