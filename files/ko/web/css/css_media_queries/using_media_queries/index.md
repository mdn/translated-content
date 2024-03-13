---
title: 미디어 쿼리 사용하기
slug: Web/CSS/CSS_media_queries/Using_media_queries
---

{{cssref}}

**미디어 쿼리**는 단말기의 유형(출력물 vs. 화면)과, 어떤 특성이나 수치(화면 해상도, {{glossary("viewport", "뷰포트")}} 너비 등)에 따라 웹 사이트나 앱의 스타일을 수정할 때 유용합니다.

미디어 쿼리는 다음과 같은 상황에 사용할 수 있습니다.

- [CSS](/ko/docs/Web/CSS) {{cssxref("@media")}}와 {{cssxref("@import")}} [@규칙](/ko/docs/Web/CSS/At-rule)을 사용해 특정 조건에 따라 스타일을 적용할 때.
- {{htmlelement("style")}}, {{htmlelement("link")}}, {{htmlelement("source")}}, 기타 다른 [HTML](/ko/docs/Web/HTML) 요소에 `media` 특성을 사용해 특정 매체만 가리키게 할 때.
- {{domxref("Window.matchMedia()")}}와 {{domxref("MediaQueryList.addListener()")}} [JavaScript](/ko/docs/Web/JavaScript) 메서드를 사용해 [미디어 상태를 판별하고 관측](/ko/docs/Web/CSS/Media_Queries/Testing_media_queries)할 때.

> **참고:** 이 페이지의 CSS는 시연용으로 `@media`를 사용했지만, 기본적인 구문은 모든 미디어 쿼리가 동일합니다.

## 구문

미디어 쿼리는 선택 사항인 미디어 유형과, 자유로운 수의 미디어 특성 표현식으로 이루어집니다. 논리 연산자를 사용해 다수의 쿼리를 다양한 방법으로 결합할 수도 있습니다. 미디어 쿼리는 대소문자를 구분하지 않습니다.

미디어 쿼리는 (유형을 지정했다면) 문서를 보여주는 미디어의 유형이 일치하고 모든 미디어 특성 표현식의 계산값이 참일 때 참으로 계산됩니다.

> **참고:** {{HTMLElement("link")}}의 미디어 쿼리가 [거짓을 반환하더라도 스타일시트는 다운로드](http://scottjehl.github.com/CSS-Download-Tests/)됩니다. 그렇지만 그 안의 내용은 쿼리가 참이 되어야 적용됩니다.

### 미디어 유형

미디어 유형은 장치의 일반적인 범주를 나타냅니다. 미디어 유형은 `not`이나 `only` 논리연산자를 사용할 때를 제외하면 선택사항이며 지정하지 않으면 `all`을 사용합니다.

- **`all`**
  - : 모든 장치에 적합합니다.
- `print`
  - : 인쇄 결과물 및 출력 미리보기 화면에 표시 중인 문서입니다.
    ([인쇄 미디어](/ko/docs/Web/CSS/Paged_Media) 문서를 방문해 `print` 형식에서 발생 가능한 서식 문제의 정보를 확인해주세요.)
- `screen`
  - : 주로 화면이 대상입니다.
- `speech`
  - : 음성 합성장치 대상입니다.

> **참고:** **사용하지 않는 미디어 유형:** CSS2.1과 [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) 모듈은 여러가지 추가 유형(`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, `aural`)을 정의했으나 [Media Queries 4](http://dev.w3.org/csswg/mediaqueries/#media-types)에서 제거됐으므로 사용해선 안됩니다. `aural`은 유사한 유형인 `speech`로 대체됐습니다.

### 미디어 특성

미디어 특성은 {{glossary("user agent", "사용자 에이전트")}}, 출력 장치, 환경 등의 특징을 나타냅니다. 미디어 특성 표현식은 선택 사항이며 특성의 존재 여부와 값을 판별합니다. 각각의 미디어 특성 표현식은 괄호로 감싸야 합니다.

| 이름                                                                                   | 요약                                                                                                 | 참고                                                                                            |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| {{cssxref("@media/any-hover", "any-hover")}}                                           | 사용 가능한 입력 방식 중 하나로 사용자가 요소 위에 호버할 수 있는가?                                 | Media Queries Level 4에서 추가                                                                  |
| {{cssxref("@media/any-pointer", "any-pointer")}}                                       | 사용 가능한 입력 방식 중 하나가 포인팅 장치인가? 그렇다면 얼마나 정확한가?                           | Media Queries Level 4에서 추가                                                                  |
| {{cssxref("@media/aspect-ratio", "aspect-ratio")}}                                     | 뷰포트의 가로세로비                                                                                  |                                                                                                 |
| {{cssxref("@media/color", "color")}}                                                   | 출력 장치의 색상 채널별 비트 수, 흑백일 땐 0                                                         |                                                                                                 |
| {{cssxref("@media/color-gamut", "color-gamut")}}                                       | 사용자 에이전트와 출력 장치가 지원하는 색상의 대략적인 범위                                          | Media Queries Level 4에서 추가                                                                  |
| {{cssxref("@media/color-index", "color-index")}}                                       | 출력 장치의 색상 검색 테이블(LUT) 항목 수, 존재하지 않을 땐 0                                        |                                                                                                 |
| {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}} | 출력 장치의 가로세로비                                                                               | Media Queries Level 4에서 제거                                                                  |
| {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}             | 출력 장치 렌더링 표면의 높이                                                                         | Media Queries Level 4에서 제거                                                                  |
| {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}               | 출력 장치 렌더링 표면의 너비                                                                         | Media Queries Level 4에서 제거                                                                  |
| {{cssxref("@media/display-mode", "display-mode")}}                                     | 웹 앱 매니페스트의 [`display`](/ko/docs/Web/Manifest#display) 항목이 정의한 애플리케이션의 표시 모드 | [Web App Manifest 명세](http://w3c.github.io/manifest/#the-display-mode-media-feature)에서 정의 |
| {{cssxref("@media/forced-colors", "forced-colors")}}                                   | 사용자 에이전트가 색상 팔레트를 제한하는지 여부                                                      | Media Queries Level 5에서 추가                                                                  |
| {{cssxref("@media/grid", "grid")}}                                                     | 장치가 그리드와 비트맵 스크린 중 어느 것을 사용하나?                                                 |                                                                                                 |
| {{cssxref("@media/height", "height")}}                                                 | 뷰포트의 높이                                                                                        |                                                                                                 |
| {{cssxref("@media/hover", "hover")}}                                                   | 주 입력 방식으로 사용자가 요소 위에 호버할 수 있는가?                                                | Media Queries Level 4에서 제거                                                                  |
| {{cssxref("@media/inverted-colors", "inverted-colors")}}                               | 사용자 에이전트나 운영 체제가 색상을 반전 중인가?                                                    | Media Queries Level 5에서 추가                                                                  |
| {{cssxref("@media/light-level", "light-level")}}                                       | 주변 환경의 광도                                                                                     | Media Queries Level 5에서 추가                                                                  |
| {{cssxref("@media/monochrome", "monochrome")}}                                         | 출력 장치의, 모노크롬 프레임 버퍼의 픽셀 당 비트 수. 단색을 사용하지 않으면 0                        |                                                                                                 |
| {{cssxref("@media/orientation", "orientation")}}                                       | 뷰포트의 방향                                                                                        |                                                                                                 |
| {{cssxref("@media/overflow-block", "overflow-block")}}                                 | 콘텐츠가 블록 축 방향으로 뷰포트를 오버플로 할 경우 출력 장치가 어떻게 처리하는가?                   | Media Queries Level 4에서 추가                                                                  |
| {{cssxref("@media/overflow-inline", "overflow-inline")}}                               | 콘텐츠가 인라인 축 방향으로 뷰포트를 오버플로 할 경우 스크롤 가능한가?                               | Media Queries Level 4에서 추가                                                                  |
| {{cssxref("@media/pointer", "pointer")}}                                               | 주 입력 방식이 포인팅 장치인가? 그렇다면 얼마나 정확한가?                                            | Media Queries Level 4에서 추가                                                                  |
| {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}                     | 라이트/다크 색채 조합 중 사용자가 선호하는 것                                                        | Media Queries Level 5에서 추가                                                                  |
| {{cssxref("@media/prefers-contrast", "prefers-contrast")}}                             | 사용자가 시스템에 두 인접 색상 간의 고대비를 요청했는지 탐지                                         | Media Queries Level 5에서 추가                                                                  |
| {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}                 | 사용자가 줄어든 움직임을 선호함                                                                      | Media Queries Level 5에서 추가                                                                  |
| {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}     | 사용자가 줄어든 투명도를 선호함.                                                                     | Media Queries Level 5에서 추가                                                                  |
| {{cssxref("@media/resolution", "resolution")}}                                         | 출력 장치의 픽셀 밀도                                                                                |                                                                                                 |
| {{cssxref("@media/scan", "scan")}}                                                     | 출력 장치의 스캔 절차                                                                                |                                                                                                 |
| {{cssxref("@media/scripting", "scripting")}}                                           | JavaScript 등 스크립트 사용 가능 여부 탐지                                                           | Media Queries Level 5에서 추가                                                                  |
| {{cssxref("@media/update-frequency", "update")}}                                       | 출력 장치가 콘텐츠의 외형을 수정할 수 있는 주기                                                      | Media Queries Level 4에서 추가                                                                  |
| {{cssxref("@media/width", "width")}}                                                   | 스크롤바를 포함한 뷰포트 너비                                                                        |                                                                                                 |

### 논리 연산자

`not`, `and`, `only` 와 같은 논리 연산자를 사용해 복잡한 쿼리를 조합할 수 있습니다. 여러 미디어 쿼리를 쉼표로 구분해서 하나의 규칙으로 만들 수도 있습니다.

#### `and`

`and` 연산자는 다수의 미디어 특성을 조합하여 하나의 미디어 쿼리를 만들 때 사용합니다. 쿼리가 참이려면 모든 구성 특성이 참을 반환해야 합니다. 미디어 특성과 미디어 유형을 같이 사용할 때도 쓰입니다.

#### `not`

`not` 연산자는 미디어 쿼리를 부정하여, 쿼리가 거짓일 때만 참을 반환합니다. 쉼표로 구분한 쿼리 목록 중 하나에서 사용한 경우 전체 쿼리가 아닌 해당하는 하나의 쿼리에만 적용됩니다. `not` 연산자를 사용할 경우 **반드시** 미디어 유형도 지정해야 합니다.

> **참고:** Level 3 모듈에서는 `not` 키워드를 사용해 단일 미디어 기능을 부정할 수 없으며 전체 쿼리만 부정 가능합니다.

#### `only`

`only` 연산자는 전체 쿼리가 일치할 때만 스타일을 적용할 때 사용하며 오래 된 브라우저가 스타일을 잘못 적용하지 못하도록 방지할 때 유용합니다. `only`를 사용하지 않은 `screen and (max-width: 500px)` 쿼리를 가정했을 때, 구형 브라우저는 쿼리를 단순히 `screen`으로만 읽고 뒷부분은 무시한 채 스타일을 적용해버립니다. `only` 연산자를 사용할 경우 **반드시** 미디어 유형도 지정해야 합니다.

#### `,` (쉼표)

쉼표는 다수의 미디어 쿼리를 하나의 규칙으로 조합할 때 사용합니다. 쉼표 목록 내의 쿼리 각각은 나머지와 별개로 취급하므로, 단 하나의 쿼리만 참을 반환해도 규칙 전체가 참이 됩니다. 즉 쉼표는 논리 `or` 연산자처럼 동작합니다.

## 미디어 유형 특정하기

미디어 유형은 주어진 장치의 일반적인 분류를 설명합니다. 비록 웹사이트는 보통 스크린을 염두에 놓고 디자인하지만, 프린터나 오디오 기반 스크린 리더처럼 특정 장치를 대상으로 하는 스타일을 만들고 싶을 때가 있을지도 모릅니다. 예를 들어 다음의 CSS는 프린터를 특정합니다.

```css
@media print { ... }
```

다수의 장치를 특정할 수도 있습니다. 예컨대 아래 `@media` 규칙은 두 개의 미디어 쿼리를 사용해 스크린과 인쇄 장치 모두 특정합니다.

```css
@media screen, print { ... }
```

[미디어 유형](#미디어_유형) 구획으로 올라가서 가능한 미디어 유형의 목록을 확인해보세요. 미디어 유형은 굉장히 넓은 범위에서 장치를 설명하기 때문에 적은 수만 존재합니다. 더 세부적인 특성을 특정하려면 미디어 기능을 사용하세요.

## 미디어 기능 특정하기

미디어 기능은 주어진 {{glossary("user agent", "사용자 에이전트")}}, 출력 장치, 주변 환경의 특징을 설명합니다. 예를 들어 어떤 스타일을 와이드스크린 모니터에만, 마우스를 사용하는 컴퓨터에만, 저광도 환경에서 사용 중인 장치에서만 적용할 수 있습니다. 다음의 예제는 사용자의 주 입력 방식(마우스 등)이 요소 위에 호버할 수 있으면 스타일을 적용합니다.

```css
@media (hover: hover) { ... }
```

많은 미디어 기능은 **범위 기능**으로, "min-" 또는 "max-"를 앞에 붙여 각각 "최소 조건"과 "최대 조건" 제약을 나타낼 수 있습니다. 다음의 CSS는 브라우저의 {{glossary("viewport", "뷰포트")}} 너비가 12450px 이하인 경우에만 스타일을 적용합니다.

```css
@media (max-width: 12450px) { ... }
```

미디어 기능 쿼리를 값 없이 생성할 경우 주어진 기능의 값이 `0`이 아닐 때 (Level 4부터는 `0`과 `none`이 아닐 때) 중첩 스타일을 적용합니다. 그러므로 다음 CSS는 흑백이 아닌 모든 장치에 해당합니다.

```css
@media (color) { ... }
```

어떤 기능이 현재 브라우저가 가동 중인 장치에 적용되지 않으면, 해당 미디어 기능을 포함한 표현식은 항상 거짓입니다. 예를 들어, 음성 출력 전용 장치에 화면 가로세로비는 존재하지 않으므로 다음 쿼리에 중첩된 스타일은 절대 적용되지 않습니다.

```css
@media speech and (aspect-ratio: 11/5) { ... }
```

[미디어 특성](#미디어_특성) 각각의 참고서 문서를 방문해 더 많은 예제를 확인하세요.

## 복잡한 미디어 쿼리 생성

때로는 사용자가 다수의 조건으로 구성된 쿼리를 생성하기 원할 수도 있습니다. 이때 논리연산자인 : `not`, `and`, 그리고 `only`를 사용하면 됩니다. 더 나아가 , 사용자는 복수의 미디어쿼리를 쉼표로 연결하여 리스트를 작성할수도 있습니다. 이렇게 함으로써 사용자는 다양한 상황에서 같은 스타일을 적용할 수 있습니다.

앞서 예와 같이, `and` 연산자를 사용하여 미디어유형과 미디어기능을 그룹지을 수 있습니다. 또한 `and` 를 사용하여 복수의 미디어 기능을 하나의 미디어 쿼리로 결합해낼수도 있습니다. 하지만 `not` 연산자는 미디어쿼리 자체를 부정시키는데, 근본적으로 원래의 의미를 반전시킵니다. `only` 연산자는 구형 브라우저가 스타일을 적용시키지 못하게 합니다.

> **참고:** 대부분의 경우, `all` 미디어유형은 다른 유형이 특정되지 않았을 때 디폴트로 적용됩니다. 하지만, 사용자가 `not` 이나 `only` 연산자를 사용하면, 사용자는 반드시 미디어유형을 특정해야 합니다.

### 다수의 유형과 기능 조합하기

The `and` 연산자는 미디어기능과 미디어유형 혹은 다른 미디어 기능들과 연결해줍니다. 이 예에서는 두개의 미디어기능을 기기의 랜스케입(가로방향화면)방향으로 제한시키고 최소폭을 30 ems로 지정합니다:

```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```

화면에 달린 기기에만 스타일을 적용하는 것으로 한정시키기 위해, 사용자는 `screen` 미디어유형에 미디어기능을 연결합니다:

```css
@media screen and (min-width: 30em) and (orientation: landscape) { ... }
```

### 다수의 쿼리 판별

쉼표로 연결된 리스트를 작성하여 사용자의 기기가 다양한 미디어타입, 기능, 상태 어떤 것과 맞는 것이 있을 때 스타일을 적용하게 할 수 있습니다. 예를 들면, 다음의 룰은 사용자의 기기가 최소한 높이가 680px 이거나 화면이 세로로 긴 모드일 때 스타일이 적용됩니다:

```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

위에 예에서 보면, 만일 사용자가 페이지높이가 800px인 프린터를 사용한다면, 첫번째 쿼리가 적용되기에 참 (true)값을 반환할 것입니다. 마찬가지로, 만일 사용자가 화면 높이가 480px인 스마트폰을 사용한다면 두번째 쿼리가 적용될 것이고, 미디어 문은 참값을 반환하게 됩니다.

### 쿼리의 뜻 반전하기

`not` 키워드는 미디어쿼리 전체의 의미를 반전시킵니다. 이 키워드는 적용된 미디어쿼리를 반전시킵니다. (즉, 쉼표로 연결된 미디어쿼리 리스트의 하나하나의 미디어쿼리에 적용되는 것이 아닙니다) `not` 키워드는 개별적인 기능의 쿼리를 부정하는데 사용할 수 없고, 오직 미디어쿼리 전체를 부정하는 데에만 사용됩니다. `not` 연산자 키워드는 다음의 쿼리에서 보여지듯이 가장 나중에 적용됩니다:

```css
@media not all and (monochrome) { ... }
```

... 그러므로 위의 쿼리는 다음과 같이 평가됩니다:

```css
@media not (all and (monochrome)) { ... }
```

... 다음과 같이 되는 것이 아닙니다:

```css example-bad
@media (not all) and (monochrome) { ... }
```

다른 예를 보자면, 다음의 미디어 쿼리는:

```css
@media not screen and (color), print and (color) { ... }
```

... 이렇게 평가됩니다:

```css
@media (not (screen and (color))), print and (color) { ... }
```

### 구형 브라우저와의 호환성 향상하기

`only` 키워드는 미디어기능을 가진 미디어쿼리를 지원하지 않는 구형 브라우저가 주어진 스타일을 적용하지 못하게 합니다. _신형브라우저에는 아무런 영향을 주지 않습니다._

```css
@media only screen and (color) { ... }
```

## Level 4의 구문 향상

미디어쿼리 Level 4 사양은 향상된 구문을 포함하는데 그를 통해 미디어쿼리가 '범위' 유형을 가진 기능을 사용할 수 있습니다. 예를 들면, 폭, 높이 처럼 말보다는 숫자에 관련된 것들입니다. Level 4 는 그러한 쿼리들을 작성하는데에 필요한 범위 구문을 제공합니다. 예를 들면, adds a _range context_ for writing such queries. 폭을 표현하기 위해 `max-` 함수를 써서 사용자는 다음과 같이 쓸 수 있습니다:

> **참고:** 미디어쿼리 Level 4 사양에는 상당수의 최신 브라우저를 지원하지만, 몇몇 미디어기능들은 잘 지원되지 않습니다. 자세한 사항은 [`@media` browser compatibility table](/ko/docs/Web/CSS/@media#Browser_compatibility) 를 참조해 주십시요.

```css
@media (max-width: 30em) { ... }
```

미디어 쿼리 Level 4 에서는 다음과 같이 쓸 수 있습니다:

```css
@media (width <= 30em) { ... }
```

`min-` 과 `max-` 를 사용하여 사용자가 두 값 사이에서 폭 값을 시험해 보고 싶은 상황이라면:

```css
@media (min-width: 30em) and (max-width: 50em) { ... }
```

Level 4 구문에서는 이렇게 표현할 수 있습니다:

```css
@media (30em <= width <= 50em ) { ... }
```

Level 4 미디어쿼리는 또한 완전한 불리언 대수법을 사용하는 미디어쿼리들과 **and**, **not**, **or**.연산자를 결합할 수 있습니다.

### `not`으로 기능 부정

미디어기능에 `not()` 을 사용하면 쿼리에 있는 기능을 부정합니다. 예를 들어, hover를 할 수 없는 장치를 사용할 때 `not(hover)` 를 사용할 수 있습니다.

```css
@media (not(hover)) { ... }
```

### `or`로 다수의 기능 판별

`or` 를 사용하면 다수의 기능 가운데 맞는 것이 하나라도 있는지를 테스트하여, 그중에 맞는 것이 하나라도 있으면 `true` 값을 반환하게 할 수 있습니다. 예를 들어, 다음에 보이는 쿼리에서는 흑백화면인지 혹은 hover가 가능한 지를 시험하고 있습니다.

```css
@media (not (color)) or (hover) { ... }
```

## 같이 보기

- [프로그래밍으로 미디어 쿼리 판별하기](/ko/docs/Web/CSS/Media_Queries/Testing_media_queries)
- [Mozilla 미디어 기능 확장](/ko/docs/Web/CSS/Mozilla_Extensions#Media_features)
- [WebKit 미디어 기능 확장](/ko/docs/Web/CSS/Webkit_Extensions#Media_features)
