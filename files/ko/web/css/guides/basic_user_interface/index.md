---
title: CSS Basic User Interface
slug: Web/CSS/Guides/Basic_user_interface
original_slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 7a81d16fadbe5cbee1ad2f8d0ddccda846f4034c
---

**CSS Basic User Interface** 모듈을 사용하면 유저 인터페이스와 관련된 기능의 렌더링과 기능을 정의할 수 있습니다. 이에는 윤곽선 속성, 포인팅 장치와 키보드에 대한 시각적 피드백, 그리고 UI 위젯의 기본 외관을 변경하는 것이 포함됩니다.

기본 사용자 인터페이스 속성은 마우스 커서와 키보드 방향 네비게이션 스타일링, 편집 가능한 요소에 포커스가 있을 때 캐럿 커서 스타일링을 포함하여 상호작용하는 요소에 시각적 단서를 제공함으로써 사용자 경험과 접근성을 향상시키는 데 사용될 수 있습니다. 이 모듈은 요소의 [박스모델](/ko/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) 차원과 스타일에 영향을 미치지 않고 포커스가 있는 (또는 없는) 요소에 윤곽선을 제공합니다. 이 UI 모듈은 또한 사용자 인터페이스 컨트롤의 스타일링을 가능하게 합니다.

### 기본 사용자 인터페이스의 실제 적용

기본 사용자 인터페이스 속성이 UI 기능의 모습을 어떻게 변경할 수 있는지 보려면 이 샘플의 요소와 상호작용해 보세요. 이 샘플의 일부 기능은 사용성을 향상시키는 반면, 일부는 사용자 경험을 해칩니다.

{{EmbedGHLiveSample("css-examples/modules/basicUI.html", '100%', 320)}}

CSS의 {{CSSxRef("outline")}}와 {{CSSxRef("outline-offset")}} 속성은 사용자에게 현재 어떤 요소가 포커스를 가지고 있는지 피드백을 제공하는 데 사용되었습니다. {{CSSxRef("accent-color")}}는 모든 폼 컨트롤에 테마 색상을 제공합니다. 텍스트를 편집할 때 나타나는 캐럿은 {{CSSxRef("caret-color")}} 속성 덕분에 같은 색상을 가집니다. 이 모든 것들은 UI 개선으로 간주될 수 있습니다.

일부 기능은 사용성을 해칩니다. {{CSSxRef("cursor")}} 속성은 브라우저 기본값에서 커서를 변경하는 데 사용되어 혼란을 초래합니다. {{CSSxRef("resize")}} 속성은 두 번째 {{HTMLElement("textarea")}}가 크기 조정 가능하지 않게 하며, {{CSSxRef("pointer-events")}} 속성은 세 번째 `<textarea>`가 클릭 이벤트를 받지 못하게 합니다. 그러나 키보드를 사용하여 여전히 포커스를 맞출 수 있습니다.

이 기본 사용자 인터페이스 샘플의 코드를 보려면, [Github에서 소스를 확인하세요.](https://github.com/mdn/css-examples/blob/main/modules/basicUI.html)

## 참고서

### 속성

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret")}}, 다음을 요약한 것:
  - {{CSSxRef("caret-color")}}
  - {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("nav-down")}} {{Experimental_Inline}}
- {{CSSxRef("nav-left")}} {{Experimental_Inline}}
- {{CSSxRef("nav-right")}} {{Experimental_Inline}}
- {{CSSxRef("nav-up")}} {{Experimental_Inline}}
- {{CSSxRef("outline")}}, 다음을 요약한 것:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

## 안내서

- [form 배우기: 고급 폼 스타일링](/ko/docs/Learn/Forms/Advanced_form_styling)
  - : {{CSSxRef("appearance")}}가 어떻게 폼 컨트롤 스타일링에 사용될 수 있는지 설명합니다.

## 관련 개념

- CSS [`cursor`](/ko/docs/Web/CSS/Reference/Properties/cursor) 속성
- SVG [`cursor`](/ko/docs/Web/SVG/Attribute/cursor) 속성
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}}, 그리고 {{CSSxRef(":focus-visible")}} 의사클래스
- {{DOMXref("CaretPosition")}} 인터페이스

## 명세

{{Specifications}}

## 참고 자료

- [유용하고 사용 가능한 포커스 인디케이터 디자인을 위한 팁](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
