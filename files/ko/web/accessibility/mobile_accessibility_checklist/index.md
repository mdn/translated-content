---
title: 모바일 접근성 점검항목
slug: Web/Accessibility/Mobile_accessibility_checklist
---

이 문서는 모바일 앱 개발자를 위한 접근성 요구 사항에 대한 간결한 체크리스트를 제공한다. 더 많은 패턴이 발생할수록 지속적으로 진화하려는 의도다.

## 색

- 색상 대비는 반드시 WCAG 2.0 AA 레벨 요건을 준수해야 한다:

  - 일반적인 크기의 텍스트(18pt 보다 작거나 14pt 볼드체)는 4.5:1
  - 큰 크기의 텍스트(적어도 18pt 보다 크거나 14pt 볼드체)는 3 :1

- 색상을 통해 전달되는 정보는 반드시 다른 수단으로도 제공되어야 한다(링크 등에 대한 밑줄 텍스트).

## 가시성

- opacity:0, z-index 깊이 조정 및 화면 밖 배치와 같은 콘텐츠 숨기기 기법은 단순히 가시성을 처리하기 위해서만 사용되어서는 안 된다.
- 현재 가시화된 화면 이외의 모든 것은 반드시 진정으로 보이지 않아야 한다(특히 여러 개의 카드가 있는 단일 페이지 앱에 관련됨).

  - `hidden` 속성 또는 `visibility` 또는 `display` 스타일 속성값을 **이용**해야 한다.
  - 불가피한 경우를 제외 하고 `aria-hidden` **속성을 사용해서는 안된다.**

## 초점

- 모든 활성화 가능한 요소는 **초점 가능해야 한다.**

  - 링크, 버튼 및 양식 필드와 같은 표준 control들는 기본적으로 초점을 맞출 수 있다.
  - 비표준 control들은 반드시 버튼, 링크 또는 체크박스와 같은 적절한 [ARIA Role](http://www.w3.org/TR/wai-aria/roles) 역할이 할당되어야 한다.

  초점은 논리적이고 일관된 방식으로 다루어야 한다.

## 텍스트 동등성

- 앱 내 모든 엄격하지 않은 현재 텍스트 요소에 대해 동일한 의미의 텍스트가 제공되어야 한다.

  - _alt 와_ _title 속성은 적절하게 사용되어야 한다._ ( 스티브 폴크너의 [Using the HTML title attribute](http://blog.paciellogroup.com/2013/01/using-the-html-title-attribute-updated/) 위한 좋은 가이드 보기.)
  - 위 속성을 사용하기 어려운 경우 `aria-label`, `aria-labelledby`, or `aria-describedby` 등과 같은 [ARIA Properties](http://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header) 를 사용하세요

- 텍스트 이미지 사용은 가급적 자제 해야 한다.
- 모든 form 콘트롤 요소는 스크린 리더 사용자를 위해 lable 요소를 가져야 한다.

## 처리 상태

- 라디오 버튼 및 체크박스와 같은 표준 제어장치는 운영체제가 취급한다. 그러나 다른 사용자 정의 제어의 경우, `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded`, and `aria-pressed`과 같은 [ARIA States](http://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets_header)를 통해 상태 변경이 제공되어야 한다.

## 방향

- 콘텐츠는 특수한 경우를 제외하고 가로 또는 세로 방향등 단일 방향으로 제한해서는 안된다. [WCAG 2.1: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - 특수한 경우는 피아노 앱이나 은행 수표 앱 같은 경우가 있다.

## General Guidelines

- An app title **MUST** be provided.
- Headings **MUST** not break hierarchical structure

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA Landmark Roles](http://www.w3.org/TR/wai-aria/roles#landmark_roles_header) **SHOULD** be used to describe an app or document structure, such as `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Touch event handlers **MUST** only be triggered on the `touchend` event.
- Touch targets **MUST** be large enough for the user to interact with (see the [BBC Mobile Accessibility Guidelines](http://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/design/touch-target-size) for useful touch target size guidelines).

> **참고:** The [original version of this document](http://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) was written by [Yura Zenevich](http://yzen.github.io/).
