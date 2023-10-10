---
title: 열거형 (Enumerated)
slug: Glossary/Enumerated
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

컴퓨터 과학에서, **열거형** 타입은 제한된 이름이 있는 값의 모음으로 구성된 데이터 타입입니다.

## HTML 열거 속성

HTML에서 [열거 속성](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute)은 제한된 사전 정의된 텍스트 값 모음이 있는 속성입니다. 예를 들어, 전역 HTML [`dir`](/ko/docs/Web/HTML/Global_attributes/dir) 속성은 세 가지 유효한 값(`ltr`, `rtl` 및 `auto`)이 있습니다.

열거된 각 속성에는 속성이 값 없이 존재할 경우(값이 누락되는 경우)에 대한 기본값 및 속성에 유효하지 않은 값이 할당될 경우에 대한 기본값이 있습니다. [불리언](/ko/docs/Glossary/Boolean) HTML 속성과 달리, 이 속성에는 값이 존재하는지, 생략되었는지, 유효하지 않은지에 관계없이 속성이 존재할 때 항상 true입니다. 열거된 HTML 속성을 사용하면, 생략된 값의 기본값이 유효하지 않은 값의 기본값과 다를 수 있습니다.

예를 들어, 전역 HTML [`contenteditable`](/ko/docs/Web/HTML/Global_attributes/contenteditable) 속성은 두 개의 유효한 키워드( `true` 및 `false`)를 가집니다. 속성이 있지만 값이 설정되지 않은 경우, 값은 `true`입니다. 값이 설정되었지만, 유효하지 않은 경우(`contenteditable="contenteditable"`와 같이), 값은 세 번째 상태인 `inherit`으로 매핑됩니다.

## ARIA 열거 속성

ARIA 상태와 속성은 HTML이므로 열거된 속성도 있습니다. ARIA 속성이 열거된 목록에 `true` 및 `false` 값을 모두 포함하는 경우, 일반적으로 생략된 속성은 `false`로, 유효하지 않은 값은 `true`로 처리하는 반면, 빈 문자열이나 생략된 값의 기본값은 속성에 따라 다릅니다.

예를 들어, `aria-current` 속성은 `page`, `step`, `location`, `date`, `time`, `true` 및 `false`를 포함하는 제한된 값 목록을 허용합니다. 이 경우에는, 속성이 없거나, 빈 문자열이거나, 값이 없거나 `aria-current="false"`로 설정된 경우에, 속성은 false이고 사용자에게 노출되지 않습니다. 열거된 값 목록에 없는 비어 있지 않은 문자열 값은 `aria-current="true"`가 설정된 것처럼 처리됩니다.

## JavaScript 열거 속성

JavaScript에서, 열거 가능 속성은 내부 열거 가능 플래그가 true로 설정된 속성입니다. 열거 가능 속성은 단순 할당이나 속성 초기자를 통해 생성된 속성의 기본값입니다. 대부분의 반복 메커니즘([`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 반복문 및 [`Object.keys`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)와 같습니다)은 열거 가능한 키만 접근하게 됩니다.

## 같이 보기

- [불리언](/ko/docs/Glossary/Boolean)
- [JavaScript 데이터 타입과 자료구조](/ko/docs/Web/JavaScript/Data_structures)
- HTML 표준의 [열거 속성](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute)
