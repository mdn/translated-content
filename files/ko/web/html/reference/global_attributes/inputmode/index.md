---
title: inputmode
slug: Web/HTML/Reference/Global_attributes/inputmode
original_slug: Web/HTML/Global_attributes/inputmode
---

{{HTMLSidebar("Global_attributes")}}

**`inputmode`** [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)은 사용자가 요소나 요소의 콘텐츠를 편집할 때 입력할 수 있는 데이터 유형의 힌트를 제공하는 열거형 특성입니다. 가능한 값은 다음과 같습니다.

- `none`
  - : 가상 키보드를 사용하지 않습니다. 페이지가 자체 키보드나 입력 컨트롤을 구현할 때 사용합니다.
- `text` (기본값)
  - : 사용자의 현재 로케일에 맞는 표준 키보드를 제공합니다.
- `decimal`
  - : 사용자의 로케일에 맞는 소숫점(보통&#x20;

    <kbd>,</kbd>

    &#x20;또는&#x20;

    <kbd>.</kbd>

    )을 제공하는 숫자형 키보드를 제공합니다. 장치에 따라 음의 부호(

    <kbd>-</kbd>

    )는 제공할 수도, 제공하지 않을 수도 있습니다.

- `numeric`
  - : 숫자형 키보드를 제공합니다. 소숫점은 없으며, 음의 부호는 제공할 수도, 제공하지 않을 수도 있습니다.
- `tel`
  - : 전화번호 키보드를 제공합니다. 숫자 0\~9, 별표(

    <kbd>\*</kbd>

    ), 해시(샵,&#x20;

    <kbd>#</kbd>

    ) 키를 포함합니다. 일반적인 경우, 반드시 전화번호를 필요로 하는 입력 칸에는 `{{htmlelement("input/tel", '&lt;input type="tel"&gt;')}}`을 사용해야 합니다.

- `search`
  - : 검색 입력 칸에 최적화한 가상 키보드를 제공합니다. 예를 들면, 엔터/제출 키가 "검색" 아이콘이나 레이블을 가질 수 있습니다. 일반적인 경우, 반드시 검색 질의를 필요로 하는 입력 칸에는 `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}`를 사용해야 합니다.
- `email`
  - : 이메일 입력에 최적화한 가상 키보드를 제공합니다. 보통&#x20;

    <kbd>@</kbd>

    &#x20;키 등을 제공합니다. 일반적인 경우, 반드시 이메일을 필요로 하는 입력 칸에는 `{{htmlelement("input/email", '&lt;input type="email"&gt;')}}`을 사용해야 합니다.

- `url`
  - : {{glossary("URL")}} 입력에 최적화한 가상 키보드를 제공합니다. 보통&#x20;

    <kbd>/</kbd>

    &#x20;키를 누르기 편한 곳에 배치하며, 세션 히스토리 접근 기능 등을 추가하기도 합니다. 일반적인 경우, 반드시 URL을 필요로 하는 입력 칸에는 `inputmode` 대신 `{{htmlelement("input/url", '&lt;input type="url"&gt;')}}`을 사용해야 합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes).
