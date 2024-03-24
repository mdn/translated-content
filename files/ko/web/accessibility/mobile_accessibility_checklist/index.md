---
title: 모바일 접근성 점검항목
slug: Web/Accessibility/Mobile_accessibility_checklist
l10n:
  sourceCommit: f6d04a43eadf5ab26a3488942dfb318b58234eb5
---

이 문서는 모바일 앱 개발자를 위해 접근성 요구 사항에 대한 간결한 체크리스트를 제공합니다. 이 문서는 다양한 패턴의 발생에 맞춰 지속적으로 진화하려는 의도로 작성되었습니다.

## 색

- 색상 대비는 반드시 WCAG 2.0 AA 레벨 요건을 준수해야 합니다.

  - 일반적인 크기의 텍스트(18pt 보다 작거나 14pt 볼드체)는 4.5:1
  - 큰 크기의 텍스트(적어도 18pt 보다 크거나 14pt 볼드체)는 3:1

- 색상을 통해 전달되는 정보는 반드시 다른 수단으로도 제공되어야 합니다(링크 텍스트의 밑줄 등).

## 가시성

- opacity:0, z-index 조정 및 화면 밖 배치와 같은 콘텐츠 숨기기 기법은 단순히 가시성을 처리하기 위해서만 사용되어서는 안 됩니다.
- 현재 보이는 화면 이외의 모든 것은 반드시 "진짜로" 보이지 않아야 합니다(특히 여러 개의 "카드" 가 있는 단일 페이지 앱에 관련됨).

  - `hidden` 속성 또는 `visibility` 또는 `display` 스타일 속성값을 이용하세요.
  - 불가피한 경우를 제외 하고 `aria-hidden` 속성을 사용하지 마세요.

## 포커스

- 활성화 가능한 모든 요소는 포커스가 가능해야 합니다.

  - 링크, 버튼 및 form 필드와 같은 표준 컨트롤들은 기본적으로 포커스가 가능합니다.
  - 비표준 컨트롤들은 반드시 `button`, `link` 또는 `checkbox`와 같은 적절한 [ARIA Role](/ko/docs/Web/Accessibility/ARIA/Roles) 이 할당되어야 합니다.

- 포커스는 논리적인 순서와 일관된 방식으로 다루어져야 합니다.

## 텍스트 동등성

- 앱 내 엄격하게 표현되지 않은, 텍스트가 아닌 모든 요소에 대해 동일한 의미의 텍스트가 제공되어야 합니다.

  - _alt_ 와 _title_ 속성은 적절하게 사용되어야 합니다 (스티브 폴크너의 [HTML의 제목 특성 사용하기](http://blog.paciellogroup.com/2013/01/using-the-html-title-attribute-updated/) 가 좋은 안내서가 될 것입니다).
  - 위 속성을 사용하기 어려운 경우 `aria-label`, `aria-labelledby`, or `aria-describedby` 등과 같은 적절한 [ARIA 속성들](http://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header)을 사용하세요.

- 텍스트 이미지 사용은 가급적 자제 해야 합니다.
- 레이블 텍스트 (또는 텍스트 이미지) 의 모든 사용자 인터페이스 컴포넌트는 프로그램 [이름](https://www.w3.org/TR/WCAG21/#dfn-name)으로 사용할 수 있는 것과 동일한 텍스트를 사용해야 합니다. [WCAG 2.1: Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- 모든 form 컨트롤 요소는 스크린 리더 사용자를 위해 label ({{ htmlelement("label") }} elements) 을 가져야 합니다.

## 상태 다루기

- 라디오 버튼 및 체크박스와 같은 표준 컨트롤들은 운영체제가 처리합니다. 그러나 다른 사용자 정의 컨트롤의 경우, `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded`, `aria-pressed`와 같은 [ARIA States](http://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets_header)를 통해 상태 변경이 제공되어야 합니다.

## 방향

- 콘텐츠는 특수한 경우를 제외하고 가로 또는 세로의 단일 방향으로 제한되어서는 안됩니다. [WCAG 2.1: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - 방향이 제한되어야 하는 특수한 경우의 예시로는 피아노 앱이나 은행 수표 앱 같은 경우가 있습니다.

## 일반적인 지침들

- 앱 이름은 반드시 제공되어야 합니다.
- 제목 요소들은 계층 구조를 지켜야 합니다.

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA Landmark Roles](https://www.washington.edu/accessibility/websites/regions/) 은 `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`와 같이 앱이나 문서의 구조를 설명하기 위해서 사용되어야 합니다.
- 터치 이벤트의 발생 시에는, 아래 사항들 중 최소 하나 이상을 만족해야 합니다([WCAG 2.1: Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)).

  - 다운 이벤트는 다른 동작을 트리거 하는 데에 사용되어서는 안됩니다
  - 액션은 업 이벤트에 의해 실행되며, 액션의 완료 전 작업을 중단하는 옵션과 액션의 완료 후 작업을 취소하는 옵션을 사용할 수 있습니다
  - 업 이벤트는 다운 이벤트에 의해 발생한 모든 작업을 취소합니다
  - 다운 이벤트에 의해 액션이 실행되어야 합니다. 예시로는 게임 앱이나 피아노 앱이 있습니다.

- 터치 요소는 유저가 상호작용 할 수 있을 정도로 충분한 크기를 가져야 합니다(적절한 터치 요소 크기에 대한 지침들은 [BBC 모바일 접근성 지침](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size)을 참고하세요).

> **참고:** [이 문서 원문](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html)의 작성자는 [Yura Zenevich](https://yzen.github.io/)입니다.
