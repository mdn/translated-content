---
title: 미디어 쿼리 사용하기
slug: Web/CSS/Guides/Media_queries/Using
original_slug: Web/CSS/CSS_media_queries/Using_media_queries
l10n:
  sourceCommit: c72b86b3d6818ec6c8df1d52a77513d769f4164e
---

**미디어 쿼리**를 사용하면 장치의 단말기의 유형(출력물 vs. 화면) 또는 화면 해상도나 방향, {{glossary("aspect ratio", "종횡비")}}, 브라우저 {{glossary("viewport", "뷰포트")}} 너비나 높이, 모션 감소, 데이터 사용량 혹은 투명도와 같은 사용자 선호도 기능이나 특성에 따라 CSS 스타일을 적용할 때 유용합니다.

미디어 쿼리는 다음과 같은 상황에 사용할 수 있습니다.

- [CSS](/ko/docs/Web/CSS) {{cssxref("@media")}}와 {{cssxref("@import")}} [@규칙](/ko/docs/Web/CSS/CSS_syntax/At-rule)을 사용해 특정 조건에 따라 스타일을 적용할 때.
- {{htmlelement("style")}}, {{htmlelement("link")}}, {{htmlelement("source")}}, 기타 다른 [HTML](/ko/docs/Web/HTML) 요소에 `media` 특성을 사용해 특정 매체만 가리키게 할 때.
- {{domxref("Window.matchMedia()")}}와 {{domxref("MediaQueryList.addListener()")}} [JavaScript](/ko/docs/Web/JavaScript) 메서드를 사용해 [미디어 상태를 판별하고 관측](/ko/docs/Web/CSS/CSS_media_queries/Testing_media_queries)할 때.

> [!NOTE]
> 이 페이지의 CSS는 시연용으로 `@media`를 사용했지만, 기본적인 구문은 모든 미디어 쿼리가 동일합니다.

## 구문

미디어 쿼리는 선택 사항인 미디어 유형과, 자유로운 수의 미디어 특성 표현식으로 이루어집니다. 논리 연산자를 사용해 다수의 쿼리를 다양한 방법으로 결합할 수도 있습니다. 미디어 쿼리는 대소문자를 구분하지 않습니다.

- [미디어 유형](/ko/docs/Web/CSS/@media#media_types) 은 `all`, `print`, `screen` 으로 미디어 쿼리가 적용되는 장치의 범주를 정의합니다.

  미디어 유형은 `not`이나 `only` 논리연산자를 사용할 때를 제외하면 선택사항이며 지정하지 않으면 `all`을 사용합니다.

- [미디어 특성](/ko/docs/Web/CSS/@media#media_features) 은 {{glossary("user agent", "사용자 에이전트")}}, 출력 장치, 환경 등의 특징을 나타냅니다.
  - {{cssxref("@media/any-hover", "any-hover")}}
  - {{cssxref("@media/any-pointer", "any-pointer")}}
  - {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - {{cssxref("@media/color", "color")}}
  - {{cssxref("@media/color-gamut", "color-gamut")}}
  - {{cssxref("@media/color-index", "color-index")}}
  - {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}
  - {{cssxref("@media/display-mode", "display-mode")}}
  - {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - {{cssxref("@media/forced-colors", "forced-colors")}}
  - {{cssxref("@media/grid", "grid")}}
  - {{cssxref("@media/height", "height")}}
  - {{cssxref("@media/hover", "hover")}}
  - {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - {{cssxref("@media/monochrome", "monochrome")}}
  - {{cssxref("@media/orientation", "orientation")}}
  - {{cssxref("@media/overflow-block", "overflow-block")}}
  - {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - {{cssxref("@media/pointer", "pointer")}}
  - {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} {{experimental_inline}}
  - {{cssxref("@media/resolution", "resolution")}}
  - {{cssxref("@media/scripting", "scripting")}}
  - {{cssxref("@media/update", "update")}}
  - {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - {{cssxref("@media/width", "width")}}.

  예를 들어, {{cssxref("@media/hover", "hover")}} 기능은 요소 위에서 호버를 했을 때 장치가 이를 지원하는지 확인하는 쿼리를 허용합니다.
  미디어 특성 표현식은 선택 사항이며 특성의 존재 여부와 값을 판별합니다. 각각의 미디어 특성 표현식은 괄호로 감싸야 합니다.

- `not`, `and`, `only` 와 같은 [논리 연산자](/ko/docs/Web/CSS/@media#logical_operators) 를 사용해 복잡한 쿼리를 조합할 수 있습니다. 여러 미디어 쿼리를 쉼표로 구분해서 하나의 규칙으로 만들 수도 있습니다.

미디어 쿼리는 (유형을 지정했다면) 문서를 보여주는 미디어의 유형이 일치하고 모든 미디어 특성 표현식의 계산 값이 참일 때 `true`로 계산됩니다.
특정할 수 없는 미디어 유형을 가진 쿼리는 언제나 거짓으로 계산됩니다.

> [!NOTE]
> [{{HTMLElement("link")}}의 미디어 쿼리가 `false`를 반환하더라도 스타일 시트는 다운로드](https://scottjehl.github.io/CSS-Download-Tests/)됩니다. 다운로드는 진행되지만, 다운로드의 우선순위는 훨씬 낮아집니다.
> 그렇지만 그 안의 내용은 쿼리가 `true` 가 되어야 적용됩니다.
> 왜 이런 일이 발생할 수 있는지는 Tomayac 의 블로그 [왜 브라우저는 일치하지 않는 미디어 쿼리가 있는 스타일 시트를 다운로드할까](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-queries-eb61b91b85a2) 를 참고해 보세요.

## 미디어 유형 특정하기

미디어 유형은 주어진 장치의 일반적인 분류를 설명합니다.
비록 웹사이트는 보통 스크린을 염두에 놓고 디자인하지만, 프린터나 오디오 기반 스크린 리더처럼 특정 장치를 대상으로 하는 스타일을 만들고 싶을 때가 있을지도 모릅니다.
예를 들어 다음의 CSS는 프린터를 특정합니다.

```css
@media print {
  /* … */
}
```

다수의 장치를 특정할 수도 있습니다.
예컨대 아래 `@media` 규칙은 두 개의 미디어 쿼리를 사용해 스크린과 인쇄 장치 모두 특정합니다.

```css
@media screen, print {
  /* … */
}
```

[미디어 유형](#미디어_유형) 을 참고하여 가능한 미디어 유형의 목록을 확인해보세요.
미디어 유형은 굉장히 넓은 범위에서 장치를 설명하기 때문에 적은 수만 존재하는데, 원래 정의된 대다수의 미디어 유형은 사용 중단되었으며, `screen`, `print`, `all` 만 남아 있습니다. 더 세부적인 특성을 특정하려면 미디어 기능을 사용하세요.

## 미디어 기능 특정하기

미디어 기능은 주어진 {{glossary("user agent", "사용자 에이전트")}}, 출력 장치, 주변 환경의 특징을 설명합니다.
예를 들어, 어떤 스타일을 와이드스크린 모니터에만, 마우스를 사용하는 컴퓨터에만, 저광도 환경에서 사용 중인 장치에서만 적용할 수 있습니다.
다음의 예제는 사용자의 주 입력 방식(마우스 등)이 요소 위에 호버할 수 있으면 스타일을 적용합니다.

```css
@media (hover: hover) {
  /* … */
}
```

미디어 기능은 범위 또는 이산형이기도 합니다.

이산형 기능은 가능한 키워드 값의 {{glossary("enumerated", "열거형")}} 집합에서 그 값을 가져옵니다. 예를 들어, 이산형 `orientation` 기능은 `landscape` 또는 `portrait` 값을 허용합니다.

```css
@media print and (orientation: portrait) {
  /* … */
}
```

많은 미디어 기능은 **범위 기능**으로, "min-" 또는 "max-"를 앞에 붙여 각각 "최소 조건"과 "최대 조건" 제약을 나타낼 수 있습니다.
다음의 CSS는 브라우저의 {{glossary("viewport", "뷰포트")}} 너비가 1250px 이하인 경우에만 스타일을 적용합니다.

```css
@media (max-width: 1250px) {
  /* … */
}
```

이는 다음과 같은 방식으로 작성될 수도 있습니다.

```css
@media (width <= 1250px) {
  /* … */
}
```

미디어 쿼리 범위 기능을 사용하면 포괄적인 `min-` 과 `max-` 접두사나 더 간결한 범위 구문 연산자인 `<=` 와 `=>` 를 사용할 수 있습니다.

다음 예제들은 서로 동일한 기능을 합니다.

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

@media (30em <= width <= 50em) {
  /* … */
}
```

미디어 기능 쿼리를 값 없이 생성할 경우 주어진 기능의 값이 `0`이 아닐 때 (Level 4부터는 `0`과 `none`이 아닐 때) 중첩 스타일을 적용합니다. 그러므로 다음 CSS는 흑백이 아닌 모든 장치에 해당합니다.

```css
@media (color) {
  /* … */
}
```

어떤 기능이 현재 브라우저가 가동 중인 장치에 적용되지 않으면, 해당 미디어 기능을 포함한 표현식은 항상 거짓입니다.

[미디어 특성](#미디어_특성) 각각의 참고서 문서를 방문해 더 많은 예제를 확인하세요.

## 복잡한 미디어 쿼리 생성

때로는 사용자가 다수의 조건으로 구성된 쿼리를 생성하기 원할 수도 있습니다. 이때 논리연산자인 : `not`, `and`, 그리고 `only`를 사용하면 됩니다. 더 나아가 , 사용자는 복수의 미디어쿼리를 쉼표로 연결하여 리스트를 작성할수도 있습니다. 이렇게 함으로써 사용자는 다양한 상황에서 같은 스타일을 적용할 수 있습니다.

앞서 예와 같이, `and` 연산자를 사용하여 미디어 유형과 미디어기능을 그룹지을 수 있습니다. 또한 `and` 를 사용하여 복수의 미디어 기능을 하나의 미디어 쿼리로 결합해낼수도 있습니다. 하지만 `not` 연산자는 미디어쿼리 자체를 부정시키는데, 근본적으로 원래의 의미를 반전시킵니다. `only` 연산자는 구형 브라우저가 스타일을 적용시키지 못하게 합니다.

> [!NOTE]
> 대부분의 경우, `all` 미디어 유형은 다른 유형이 특정되지 않았을 때 디폴트로 적용됩니다.
> 하지만, 사용자가 `not` 이나 `only` 연산자를 사용하면, 사용자는 반드시 미디어 유형을 특정해야 합니다.

### 다수의 유형과 기능 조합하기

`and` 연산자는 미디어 기능과 미디어 유형 혹은 다른 미디어 기능들과 연결해줍니다.
이 예에서는 두 개의 미디어 기능을 기기의 landscape(가로 방향화면) 방향으로 제한시키고 최소폭을 30 ems로 지정합니다.

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

화면에 달린 기기에만 스타일을 적용하는 것으로 한정시키기 위해, 사용자는 `screen` 미디어 유형에 미디어 기능을 연결합니다.

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### 다수의 쿼리 판별

쉼표로 연결된 리스트를 작성하여 사용자의 기기가 다양한 미디어 유형, 기능, 상태 어떤 것과 맞는 것이 있을 때 스타일을 적용하게 할 수 있습니다. 예를 들면, 다음의 룰은 사용자의 기기가 최소한 높이가 680px 이거나 화면이 세로로 긴 모드일 때 스타일이 적용됩니다.

다음 예제 규칙에서는 두 개의 미디어 쿼리가 포함되어 있습니다. 블록의 스타일은 사용자의 기기의 높이가 680px 이상이거나, 브라우저의 뷰포트가 세로 모드 (뷰포트의 높이가 너비보다 큰 경우)일 때 적용될 것입니다.

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

위의 예에서 보면, 만일 사용자가 페이지 높이가 800px인 PDF를 출력하기 위해 프린터를 사용한다면, 뷰포트의 높이가 `680px` 이상이므로 첫 번째 쿼리가 적용되기에 참 (true)값을 반환할 것입니다.
마찬가지로, 만일 사용자가 화면 높이가 480px인 스마트폰을 사용한다면 두 번째 쿼리가 적용될 것이고, 두 번째 미디어 쿼리도 참값을 반환하게 됩니다.

쉼표로 연결된 미디어 쿼리 목록에서는, 각각의 개별적인 미디어 쿼리가 쉼표에서 끝나고, 목록의 마지막 미디어 쿼리는 여는 중괄호 (`{`)에서 끝나게 됩니다.

### 쿼리의 뜻 반전하기

`not` 키워드는 미디어 쿼리 전체의 의미를 반전시킵니다. 예를 들어, 아래에 있는 CSS 스타일은 프린트가 가능한 미디어를 제외한 전부에 적용될 것입니다.

```css
@media not print {
  /* … */
}
```

`not` 키워드는 적용된 미디어쿼리를 반전시킵니다. 괄호가 사용되지 않으면 `not` 은 미디어 쿼리와 그것이 포함되어 있는 모든 기능들을 반전시키게 됩니다. 즉, 쉼표로 연결된 미디어 쿼리 목록에서 각 `not` 은 그것이 포함된 단일 쿼리에 저굥이 되며, 해당 단일 쿼리 내의 **모든** 기능에도 적용이 될 것입니다. 아래 예제에서는, `not` 은 첫 번째 쉼표에서 끝나는 첫 번째 미디어 쿼리에만 적용됩니다.

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

위 쿼리는 아래처럼 평가됩니다.

```css
@media (not (screen and (color))), print and (color) {
  /* … */
}
```

두 예제는 모두 유효합니다. 미디어 조건은 괄호 안에 (`()`) 모두 감싸는 것으로 그룹화할 수 있습니다. 이러한 그룹들은 단일 미디어 쿼리가 그러하듯이, 다른 조건에 중첩될 수도 있습니다.

`not` 은 미디어 쿼리에서 가장 나중으로 평가되는데, 이는 쿼리 내부의 단일 기능이 아니라 전체 미디어 쿼리에 적용된다는 것을 의미합니다. 마치 `not` 바로 뒤에 여는 괄호를 추가하고, 미디어 쿼리 끝에 닫는 괄호를 추가한 것처럼 적용됩니다.

아래 쿼리를 확인해 보세요.

```css
@media not all and (monochrome) {
  /* … */
}
```

위 쿼리는 다음처럼 평가됩니다.

```css
@media not (all and (monochrome)) {
  /* … */
}
```

이는 아래와 같이 평가된다는 의미는 아닙니다.

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

미디어 쿼리 내의 단일 쿼리를 반전하려면 괄호를 사용하세요. `not` 과 미디어 기능을 괄호로 감싸게 된다면 반전할 쿼리의 구성을 제한할 수 있습니다.

아래 예제에서는, `all` 미디어 유형이 아닌 `hover` 미디어 기능을 반전시킬 것입니다.

```css
@media all and (not(hover)) {
  /* … */
}
```

`not(hover)` 는 장치에서 hover 기능이 없을 때 일치합니다. 이러한 케이스에서는, 괄호가 사용되었기 때문에 `not` 이 `all` 에 적용된 것이 아니라 `hover` 에 적용된 것입니다.

### 구형 브라우저와의 호환성 향상하기

`only` 키워드는 미디어기능을 가진 미디어쿼리를 지원하지 않는 구형 브라우저가 주어진 스타일을 적용하지 못하게 합니다. 최신 브라우저에는 아무런 영향을 주지 않습니다.

```css
@media only screen and (color) {
  /* … */
}
```

### `or`로 다수의 기능 판별

`or` 를 사용하면 다수의 기능 가운데 맞는 것이 하나라도 있는지를 테스트하여, 그중에 맞는 것이 하나라도 있으면 `true` 값을 반환하게 할 수 있습니다.
예를 들어, 다음에 보이는 쿼리에서는 흑백화면인지 혹은 hover가 가능한 지를 시험하고 있습니다.

```css
@media (not (color)) or (hover) {
  /* … */
}
```

## 같이 보기

- [@media](/ko/docs/Web/CSS/@media)
- [컨테이너 쿼리](/ko/docs/Web/CSS/CSS_containment/Container_queries)
- [프로그래밍으로 미디어 쿼리 판별하기](/ko/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS 미디어 쿼리와 애니메이션](https://davidwalsh.name/animate-media-queries)
- [Mozilla 미디어 기능 확장](/ko/docs/Web/CSS/Mozilla_Extensions#Media_features)
- [WebKit 미디어 기능 확장](/ko/docs/Web/CSS/Webkit_Extensions#Media_features)
