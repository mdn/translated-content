---
title: Viewport meta tag
slug: Web/HTML/Viewport_meta_tag
l10n:
  sourceCommit: 65e71ef4fbb2de409107dfbe61906d247b39d192
---

{{HTMLSidebar}}

이 문서에서는 "viewport" `<meta>` 태그를 사용하여 뷰포트의 크기와 모양을 제어하는 방법에 대해 설명합니다.

## 배경

브라우저의 {{glossary("viewport")}}는 웹 콘텐츠를 볼 수 있는 창의 영역입니다. 이것은 종종 렌더링된 페이지와 같은 크기가 아닙니다. 이 경우 브라우저는 사용자가 스크롤하여 모든 콘텐츠에 액세스할 수 있도록 스크롤 바를 제공합니다.

일부 모바일 장치 및 다른 좁은 화면은 일반적으로 화면보다 넓은 가상 창 또는 뷰포트에서 페이지를 렌더링한 다음 렌더링된 결과를 한 번에 모두 볼 수 있도록 축소합니다. 그런 다음 사용자는 페이지의 다른 영역을 더 자세히 보기 위해 확대/축소할 수 있습니다. 예를 들어 모바일 화면의 너비가 640px인 경우 980px의 가상 뷰포트로 페이지를 렌더링한 다음 640px 공간에 맞게 축소할 수 있습니다.

이것은 모든 페이지가 모바일에 최적화되지 않고 작은 뷰포트 폭에서 렌더링될 때 깨지기(또는 적어도 나빠 보임) 때문에 수행됩니다. 이 가상 뷰포트는 일반적으로 모바일에 최적화되지 않은 사이트를 좁은 스크린 장치에서 더 잘 보이도록 하는 방법입니다.

그러나 이 메커니즘은 [미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries)를 사용하여 좁은 화면에 최적화된 페이지에는 적합하지 않습니다. 예를 들어 가상 뷰포트가 980px인 경우 640px 또는 480px 이하에서 시작되는 미디어 쿼리는 사용되지 않으므로 이러한 반응형 디자인 기법의 효과가 제한됩니다. 뷰포트 `<meta>` 요소는 좁은 화면 장치에서 가상 뷰포트의 이러한 문제를 완화합니다.

## 뷰포트 기본

일반적인 모바일 최적화 사이트는 다음과 같은 것들을 포함합니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

모든 장치의 너비가 동일한 것은 아닙니다. 화면 크기와 방향에 따라 페이지가 잘 작동하는지 확인해야 합니다.

"viewport" `<meta>` 요소의 기본 속성은 다음과 같습니다.

- `width`
  - 뷰포트의 크기를 제어합니다. `width=600`과 같은 특정 픽셀 수 또는 [100vw](/ko/docs/Web/CSS/length#relative_length_units_based_on_viewport) 또는 뷰포트 너비의 100%를 의미하는 특수 값인 `device-width`로 설정할 수 있습니다. 최소값은 `1` 입니다. 최대값은 `10000` 입니다. 음수 값은 무시됩니다.
- `height`
  - 뷰포트의 크기를 제어합니다. `height=400`과 같은 특정 픽셀 수 또는 [100vh](/ko/docs/Web/CSS/length#vh) 또는 뷰포트 높이의 100%를 의미하는 특수 값인 `device-height`로 설정할 수 있습니다. 최소값은 `1` 입니다. 최대값은 `10000` 입니다. 음수 값은 무시됩니다.
- `initial-scale`
  - 페이지가 처음 로드될 때 줌 레벨을 제어합니다. 최소값은 `0.1`입니다. 최대값은 `10` 입니다. 기본값은 `1` 입니다. 음수값은 무시됩니다.
- `minimum-scale`
  - 페이지에서 허용되는 줌아웃의 양을 제어합니다. 최소값은 `0.1` 입니다. 최대값은 `10` 입니다. 기본값은 `0.1` 입니다. 음수값은 무시됩니다.
- `maximum-scale`
  - 페이지에서 허용되는 줌인의 크기를 제어합니다. 3보다 작은 값은 접근성에 실패합니다. 최소값은 `0.1` 입니다. 최대값은 `10` 입니다. 기본값은 `10` 입니다. 음수값은 무시됩니다.
- `user-scalable`
  - 페이지에서 줌인과 줌아웃 액션을 허용할 것인지 제어합니다. 유효한 값은 `0`, `1`, `yes` 또는 `no`입니다. 기본값은 `yes`와 동일한 `1`입니다. `no`와 동일한 `0`으로 설정하는 것은 WCAG(Web Content Accessibility Guideline)에 위배됩니다.
- `interactive-widget`
  - 가상 키보드와 같은 대화형 UI 위젯이 페이지의 뷰포트에 미치는 영향을 지정합니다. 유효한 값은 `resize-visual`, `resize-content`, 또는 `overlay-content` 입니다. 기본값은 `resize-visual`입니다.

> **경고:** `user-scalable=no` 를 사용하면 저시력과 같은 시각 장애를 가진 사용자의 접근성 문제가 발생할 수 있습니다. [WCAG](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) 는 최소 2배 이상의 스케일링을 요구하지만 5배 줌이 가능하도록 하는 것이 가장 좋습니다.

## 화면 밀도

화면 해상도는 개별 픽셀을 사람의 눈으로 구별할 수 없을 정도로 높아졌습니다. 예를 들어, 스마트폰은 종종 1920–1080 픽셀(≈ 400dpi)의 해상도를 가진 작은 화면을 가지고 있습니다. 이 때문에 많은 브라우저는 각 CSS "픽셀"에 대해 여러 개의 하드웨어 픽셀을 변환하여 더 작은 물리적 크기로 페이지를 표시할 수 있습니다. 처음에는 이로 인해 터치 최적화된 많은 웹 사이트에서 사용성과 가독성 문제가 발생했습니다.

높은 dpi 화면에서 `initial-scale=1` 인 페이지는 브라우저에 의해 효과적으로 확대될 것입니다. 그들의 텍스트는 부드럽고 선명할 것이지만, 그들의 비트맵 이미지는 전체 화면 해상도를 이용하지 않을 수 있습니다. 이러한 화면에서 더 선명한 이미지를 얻기 위해, 웹 개발자들은 이미지 혹은 전체 레이아웃을 최종 크기보다 더 높은 크기로 디자인한 다음 CSS나 뷰포트 속성을 사용하여 축소하기를 원할 수 있습니다.

기본 픽셀 비율은 디스플레이 밀도에 따라 달라집니다. 밀도가 200dpi 미만인 디스플레이에서 비율은 1.0입니다. 밀도가 200dpi에서 300dpi 사이인 디스플레이에서 비율은 1.5입니다. 밀도가 300dpi 이상인 디스플레이의 경우 비율은 정수 내림 (밀도/150dpi)입니다. 기본 비율은 뷰포트 스케일이 1일 때만 참입니다. 그렇지 않으면 CSS 픽셀과 장치 픽셀 간의 관계는 현재 줌 레벨에 따라 달라집니다.

## 뷰포트 너비와 화면 너비

사이트들은 뷰포트를 특정 크기로 설정할 수 있습니다. 예를 들어, `width=320, initial-scale=1"` 의 정의는 세로 모드에서 작은 휴대폰 디스플레이에 정확히 맞추기 위해 사용될 수 있습니다. 이것은 브라우저가 페이지를 더 큰 크기로 렌더링할 때 문제를 일으킬 수 있습니다. 이 문제를 해결하기 위해 브라우저는 요청한 크기로 화면을 채우기 위해 필요한 경우 뷰포트 너비를 확장합니다. 이것은 특히 대화면 장치에서 유용합니다.

초기 또는 최대 스케일을 설정하는 페이지의 경우, 이는 `width` 속성이 실제로 최소 뷰포트 너비로 변환된다는 것을 의미합니다. 예를 들어 레이아웃에 적어도 500픽셀의 너비가 필요한 경우 다음 마크업을 사용할 수 있습니다. 화면이 500픽셀보다 넓으면 브라우저는 줌인 대신 화면에 맞게 뷰포트를 확장합니다:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

그 외 [속성들](/ko/docs/Web/HTML/Element/meta#attributes) 로는 `minimum-scale`, `maximum-scale`, `user-scalable` 이 있습니다. 이러한 속성은 초기 크기와 너비에 영향을 미치고 줌 레벨의 변화를 제한합니다.

## 대화형 UI 위젯의 효과

브라우저의 대화형 UI 위젯은 페이지의 뷰포트 크기에 영향을 줄 수 있습니다. 가장 일반적인 UI 위젯은 가상 키보드입니다. 브라우저가 어떤 크기 조정 동작을 사용해야 하는지 제어하려면 `interactive-widget` 속성을 설정하십시오.

허용된 값은 다음과 같습니다.

- `resizes-visual`
  - {{Glossary("visual viewport")}} 는 대화형 위젯에 의해 크기가 조정됩니다.
- `resizes-content`
  - {{Glossary("viewport")}} 는 대화형 위젯에 의해 크기가 조정됩니다.
- `overlays-content`
  - {{Glossary("viewport")}} 또는 {{Glossary("visual viewport")}}는 대화형 위젯에 의해 크기가 조정되지 않습니다.

{{Glossary("viewport")}} 의 크기가 조정되면 초기 [컨테이닝 블록](/ko/docs/Web/CSS/Containing_block) 도 크기가 조정되어 [뷰포트 단위](/ko/docs/Web/CSS/length#viewport-percentage_lengths) 의 계산된 크기에 영향을 미칩니다.

## 모바일 및 태블릿 장치의 일반 뷰포트 크기

어떤 모바일 장치와 태블릿 장치가 어떤 뷰포트 폭을 갖는지 알고 싶다면, [모바일 및 태블릿 뷰포트 크기](https://experienceleague.adobe.com/docs/target/using/experiences/vec/mobile-viewports.html) 의 포괄적인 목록이 있습니다. 이것은 물리적 화면 크기, 운영 체제 및 장치의 픽셀 밀도뿐만 아니라 세로 및 가로 방향에 대한 뷰포트 폭과 같은 정보를 제공합니다.

## 명세서

{{Specifications}}

## 같이 보기

- [Prepare for viewport resize behavior changes coming to Chrome on Android](https://developer.chrome.com/blog/viewport-resize-behavior/)
