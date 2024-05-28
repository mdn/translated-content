---
title: Overview of shapes
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

[CSS Shapes Level 1 Specification](https://www.w3.org/TR/css-shapes/) 는 CSS에서의 기하학 도형에 대해 설명합니다. 이것은 CSS Shapes Level 1 Specification 에서 플로팅된 요소에 적용되도록 고안되었습니다. 이 문서는 도형으로 할 수 있는 것들에 대한 개요를 제공합니다.

예를 들어, 요소를 왼쪽으로 플로팅하면 텍스트가 요소의 오른쪽과 아래쪽을 직사각형 형태로 감싸게 됩니다. 그리고 원형 도형을 적용하게 되면, 텍스트가 원의 선에 따라 감싸게 될 것입니다.

이러한 도형을 만들 방법은 다양하게 있으며, 이 안내서에서는 CSS 도형이 어떻게 동작하는지, 그리고 이를 사용할 수 있는 몇 가지 방법을 고려해 보겠습니다.

## 명세서가 정의하는 건 무엇일까요?

명세서에서는 세 가지 속성을 정의합니다.

- {{cssxref("shape-outside")}} — 기본 도형의 정의를 허용합니다.
- {{cssxref("shape-image-threshold")}} — 불투명도의 임계값을 정의합니다. 만일 이미지가 도형을 정의하는 데에 사용된 경우, 임계값과 동일하거나 그보다 높은 불투명도를 가진 이미지의 일부만 도형에 사용됩니다. 이미지의 다른 부분은 무시됩니다.
- {{cssxref("shape-margin")}} — 정의된 도형 주변으로 바깥 여백을 지정합니다.

## 기본 도형 정의하기

`shape-outside` 속성은 도형을 정의하는 데에 사용됩니다. 이 속성은 다양한 도형을 정의하기 위한 여러 유형의 값을 가질 수 있고, {{cssxref("&lt;basic-shape&gt;")}} 데이터 타입으로 지정됩니다. 간단한 예제를 살펴보면서 시작해 보겠습니다.

다음 예제에서는 이미지가 왼쪽으로 플로팅되어 있습니다. 그리고 `shape-outside` 속성을 `circle(50%)` 값과 함께 적용해 보겠습니다. 그 결과는 콘텐츠가 이미지 박스가 만들어낸 직사각형을 따르지 않고 원형 도형의 곡선을 따릅니다.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

이 명세서 레벨에서는 `<basic-shape>` 를 적용하기 위해서는 요소를 플로팅해야 합니다. 이것은 많은 경우에 대해 간단한 폴백을 만드는 부수 효과가 있습니다. 만일 브라우저에 도형 지원이 없는 경우, 사용자는 콘텐츠가 이전처럼 직사각형 박스의 양측에 따라 흐르는 콘텐츠를 보게 될 것입니다. 만일 브라우저에 도형 지원이 있는 경우는 시각적인 디스플레이가 향상됩니다.

### 기본 도형

`circle(50%)` 값은 기본 도형의 예제입니다. 명세서에서는 다음 네 가지를 `<basic-shape>` 값으로 정의합니다.

- `inset()`
- `circle()`
- `ellipse()`
- `polygon()`

`inset()` 값을 사용하는 것은 직사각형의 도형을 따라 텍스트를 감쌉니다. 그러나 오프셋 값을 추가할 수 있습니다. 이것은 콘텐츠를 감싸는 선 박스를 객체와 조금 더 가깝게 끌어당깁니다.

우리는 이미 `circle()` 이 원형 도형을 생성하는지 확인하였습니다. `ellipse()` 는 본질적으로는 납작해진 원형입니다. 이러한 간단한 도형들이 원하는대로 작동하지 않는다면 `polygon()` 을 사용하여 원하는 만큼의 복잡한 도형을 만들 수 있습니다.

[기본 도형 안내서](/ko/docs/Web/CSS/CSS_shapes/Basic_shapes) 문서에서 각 기본적인 도형을 알아보고 어떻게 생성하는지를 알 수 있습니다.

### 박스 값과 도형

도형들은 박스 값을 따라서도 생성될 수 있습니다. 그러므로, 다음 형태의 도형들도 만들 수 있습니다.

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

다음 예제에서는 `border-box` 의 값을 변경하여 어떻게 도형이 박스로 가까워지거나 박스로부터 멀어지는지를 확인할 수 있습니다.

{{EmbedGHLiveSample("css-examples/shapes/overview/box.html", '100%', 810)}}

박스 값에 대하여 더 자세히 알아보려면, [박스 값과 도형](/ko/docs/Web/CSS/CSS_shapes/From_box_values) 문서를 확인해 보세요.

### 이미지와 도형

경로를 생성하기 위한 흥미로운 방법 하나는 바로 알파 채널을 가진 이미지를 사용하는 것입니다. 텍스트는 이미지의 투명하지 않은 부분을 감싸게 됩니다. 그것은 감싸진 콘텐츠에 이미지를 따라 오버레이를 허용하거나 페이지에 표시되지 않는 이미지를 오직 복잡한 모양을 만들기 위한 방법으로 사용할 수 있어 폴리곤을 신중하게 매핑할 필요가 없습니다.

이러한 용도로 사용되는 이미지는 [호환 가능한 CORS](/ko/docs/Web/HTTP/CORS) 여야 합니다. 그렇지 않으면 `shape-outside` 는 마치 `none` 값을 부여한 것처럼 동작하여 아무런 도형도 나타나지 않게 됩니다.

다음 예제는, 완전히 투명한 영역이 있는 이미지가 있고 이 이미지를 `shape-outside` 의 URL 값으로 사용하는 것입니다. 이 도형은 불투명한 영역, 즉 풍선의 이미지를 따라 생성됩니다.

{{EmbedGHLiveSample("css-examples/shapes/overview/image.html", '100%', 800)}}

#### `shape-image-threshold`

`shape-image-threshold` 속성은 도형에 적용할 이미지 영역의 투명도 임계값을 설정하는 데에 사용됩니다. `shape-image-threshold` 값이 `0.0` (초기 값) 이라면 영역은 완전히 투명해야 합니다. 만일 값이 `1.0` 이라면 완전히 불투명해야 합니다. 그 사이의 값은 반투명한 영역이 도형을 정의하는 영역으로 사용될 수 있음을 의미합니다.

도형을 정의하기 위해 이미지에 그라디언트를 사용하면 임계값이 동작하는 것을 확인할 수 있습니다. 다음 예제에서는, 경로의 임계값을 변경하면 선택된 불투명도에 기반하여 도형의 경로 또한 변경됩니다.

{{EmbedGHLiveSample("css-examples/shapes/overview/threshold.html", '100%', 820)}}

[이미지와 도형](/ko/docs/Web/CSS/CSS_shapes/Shapes_from_images) 안내서에서 더 자세하게 이미지로부터 도형을 생성하는 방법에 대해 알아볼 수 있습니다.

## `shape-margin` 속성

{{cssxref("shape-margin")}} 속성은 `shape-outside` 에 바깥 여백을 추가합니다. 이것은 도형을 감싸고 있는 선 박스가 더욱 짧아져서 도형으로부터 그것을 멀리 밀어내게 될 것입니다.

다음 예제에서는 기본 도형에 `shape-margin` 속성을 추가해 볼 것입니다. 기본적으로 도형이 차지하는 경로로부터 텍스트를 더 멀리 밀어내기 위하여 바깥 여백의 값을 변경해 보세요.

{{EmbedGHLiveSample("css-examples/shapes/overview/shape-margin.html", '100%', 800)}}

## 생성된 콘텐츠를 플로팅 요소로 사용하기

위 예제들에서는 도형을 정의하기 위해 이미지나 시각적인 요소를 사용했습니다. 이는 페이지에서 도형을 볼 수 있다는 것을 의미합니다. 반면에, 직사각형 형태가 아닌 보이지 않는 선을 따라 텍스트를 넘치게 하고 싶어질 수도 있습니다. 그럴 때에도 도형을 사용할 수 있지만, 여전히 보이지 않게 하기 위해 플로팅된 요소가 필요할 것입니다. 그 요소는 문서 내에 삽입된 불필요한 요소일 수도 있고, 아마 빈 {{htmlelement("div")}} 나 {{htmlelement("span")}} 태그일 수도 있지만, 우리는 생성된 콘텐츠를 사용하는 것을 선호합니다. 이것은 CSS 내에 스타일링을 위해 사용된 요소를 유지할 수 있다는 것을 의미합니다.

다음 예제에서는, 너비와 높이로 150px을 가진 요소를 삽입하기 위해 생성된 콘텐츠를 사용할 것입니다. 텍스트로 주변을 감싼 도형을 만들기 위해 기본 도형, 박스 값 혹은 알파 채널을 가진 이미지를 사용할 수 있습니다.

{{EmbedGHLiveSample("css-examples/shapes/overview/generated-content.html", '100%', 850)}}

## `clip-path` 와의 연관성

기본 도형과 박스 값은 도형을 만들기 위해 {{cssxref("clip-path")}} 가 취하는 것과 같은 값을 사용합니다. 그러므로 만일 이미지를 사용하여 도형을 만들고 싶은 경우에, 그리고 해당 이미지의 일부를 잘라내고 싶은 경우에는 같은 값을 사용하면 됩니다.

다음은 파란색 배경의 네모 형태의 이미지입니다. `shape-outside: ellipse(40% 50%);` 를 사용하여 도형을 정의하고 역시 `shape-outside: ellipse(40% 50%);` 값을 사용하여 같은 영역을 잘라내어 도형을 정의할 수 있습니다.

{{EmbedGHLiveSample("css-examples/shapes/overview/clip-path.html", '100%', 800)}}

## 도형을 위한 개발자 도구

브라우저에서 CSS 도형 지원이 제공되는 것과 함께, 파이어폭스는 파이어폭스 개발자 도구에 [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) 를 포함하고 있습니다. 이 도구는 페이지의 어떤 도형이든 그것을 검사하고, 실시간 페이지에서 값을 변경할 수 있습니다. 만일 폴리곤이 완벽하지 않다면 Shapes Editor를 사용하여 약간 조정한 후, 새 값을 CSS에 복사할 수 있습니다.

Shape Path Editor 는 `clip-path` 를 통하여 생성된 도형에 대해 파이어폭스 60 에서 기본적으로 활성화됩니다. 또한 `shape-outside` 를 통하여 생성된 도형을 수정할 때에도 사용할 수 있지만, `layout.css.shape-outside.enabled` 설정을 통해 활성화해야 합니다.

## 미래 CSS 도형 기능들

초기 도형 명세서에서는 `shape-inside` 속성이 요소 내부 도형을 생성하기 위해 포함되어 있었습니다. 이 속성과 더불어 플로팅되어 있지 않은 요소에 도형을 생성하는 가능성은 명세서의 [level 2](https://drafts.csswg.org/css-shapes-2/) 로 이동되었습니다. `shape-inside` 속성이 처음에는 명세서의 Level 1 에 있었기 때문에 두 속성을 자세히 설명하는 웹 튜토리얼을 찾을 수 있습니다.
