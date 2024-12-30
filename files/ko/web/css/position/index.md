---
title: position
slug: Web/CSS/position
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`position`** 속성은 문서 상에 요소를 배치하는 방법을 지정합니다. {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} 속성이 요소를 배치할 최종 위치를 결정합니다.

{{EmbedInteractiveExample("pages/css/position.html")}}

## 구문

`position` 속성은 아래의 목록에서 하나의 키워드 값을 선택해 지정할 수 있습니다.

### 값

- `static`
  - : 요소를 일반적인 문서 흐름에 따라 배치합니다. {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("z-index")}} 속성이 아무런 영향도 주지 않습니다. 기본값입니다.
- `relative`

  - : 요소를 일반적인 문서 흐름에 따라 배치하고, 자기 자신을 기준으로 `top`, `right`, `bottom`, `left`의 값에 따라 오프셋을 적용합니다. 오프셋은 다른 요소에는 영향을 주지 않습니다. 따라서 페이지 레이아웃에서 요소가 차지하는 공간은 `static`일 때와 같습니다.

    {{cssxref("z-index")}}의 값이 `auto`가 아니라면 새로운 [쌓임 맥락](/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)을 생성합니다. `table-*-group`, `table-row`, `table-column`, `table-cell`, `table-caption` 요소에 적용했을 때의 작동 방식은 정의되지 않았습니다.

- `absolute`

  - : 요소를 일반적인 문서 흐름에서 제거하고, 페이지 레이아웃에 공간도 배정하지 않습니다. 대신 가장 가까운 위치 지정 조상 요소에 대해 상대적으로 배치합니다. 단, 조상 중 위치 지정 요소가 없다면 초기 [컨테이닝 블록](/ko/docs/Web/CSS/Containing_block)을 기준으로 삼습니다. 최종 위치는 `top`, `right`, `bottom`, `left` 값이 지정합니다.

    {{cssxref("z-index")}}의 값이 `auto`가 아니라면 새로운 [쌓임 맥락](/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)을 생성합니다. 절대 위치 지정 요소의 바깥 여백은 서로 [상쇄](/ko/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)되지 않습니다.

- `fixed`

  - : 요소를 일반적인 문서 흐름에서 제거하고, 페이지 레이아웃에 공간도 배정하지 않습니다. 대신 {{glossary("viewport", "뷰포트")}}의 초기 [컨테이닝 블록](/ko/docs/Web/CSS/Containing_block)을 기준으로 삼아 배치합니다. 단, 요소의 조상 중 하나가 `transform`, `perspective`, `filter` 속성 중 어느 하나라도 `none`이 아니라면 ([CSS Transforms 명세](https://www.w3.org/TR/css-transforms-1/#propdef-transform) 참조) 뷰포트 대신 그 조상을 컨테이닝 블록으로 삼습니다. (`perspective`와 `filter`의 경우 브라우저별로 결과가 다름에 유의) 최종 위치는 `top`, `right`, `bottom`, `left` 값이 지정합니다.

    이 값은 항상 새로운 [쌓임 맥락](/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)을 생성합니다. 문서를 인쇄할 때는 해당 요소가 모든 페이지의 같은 위치에 출력됩니다.

- `sticky`

  - : 요소를 일반적인 문서 흐름에 따라 배치하고, 테이블 관련 요소를 포함해 가장 가까운, 스크롤 되는 조상과, 표 관련 요소를 포함한 [컨테이닝 블록](/ko/docs/Web/CSS/Containing_block)(가장 가까운 블록 레벨 조상) 을 기준으로 `top`, `right`, `bottom`, `left`의 값에 따라 오프셋을 적용합니다. 오프셋은 다른 요소에는 영향을 주지 않습니다.

    이 값은 항상 새로운 [쌓임 맥락](/ko/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)을 생성합니다. 끈끈한 요소는 "스크롤 동작"(`overflow`가 `hidden`, `scroll`, `auto` 혹은 `overlay`)이 존재하는 가장 가까운 조상에 달라붙으며, 사실 그 조상은 스크롤 불가하며 실제로 스크롤 가능한 조상이 따로 존재할 경우 "끈끈한" 동작을 보이지 않는 점에 주의하세요. ([W3C CSSWG의 Github 이슈](https://github.com/w3c/csswg-drafts/issues/865) 참조)

## 설명

### 배치 유형

- **위치 지정 요소**란 `position`의 [계산값](/ko/docs/Web/CSS/computed_value)이 `relative`, `absolute`, `fixed`, `sticky` 중 하나인 요소입니다. 즉, 값이 `static`이 아닌 모든 요소를 말합니다.
- **상대 위치 지정 요소**는`position`의 [계산값](/ko/docs/Web/CSS/computed_value)이 `relative`인 요소입니다. {{cssxref("top")}}과 {{cssxref("bottom")}}은 원래 위치에서의 세로축 거리를, {{cssxref("left")}}와 {{cssxref("right")}}은 원래 위치에서의 가로축 거리를 지정합니다.
- **절대 위치 지정 요소**는`position`의 [계산값](/ko/docs/Web/CSS/computed_value)이 `absolute` 또는 `fixed`인 요소입니다.{{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}는 요소의 [컨테이닝 블록](/ko/docs/Web/CSS/Containing_block)(위치의 기준점이 되는 조상 요소) 모서리로부터의 거리를 지정합니다. 요소가 바깥 여백을 가진다면 거리에 더합니다. 절대 위치 지정 요소는 새로운 [블록 서식 맥락](/ko/docs/Web/CSS/CSS_display/Block_formatting_context)을 생성합니다.
- **끈끈한 위치 지정 요소**는 `position`의 [계산값](/ko/docs/Web/CSS/computed_value)이 `sticky`인 요소입니다. 평소에는 상대 위치 지정 요소로 처리하지만, [컨테이닝 블록](/ko/docs/Web/CSS/Containing_block)이 자신의 플로우 루트(또는, 스크롤 컨테이너)에서 지정한 임계값({{cssxref("top")}} 등으로 지정)을 넘으면 마치 `fixed`처럼 화면에 고정합니다. 고정 상태는 컨테이닝 블록의 반대편 모서리를 만나면 해제됩니다.

대부분의 경우, {{cssxref("height")}}와 {{cssxref("width")}}가 `auto`로 지정된 절대 위치 지정 요소는 자신의 콘텐츠에 맞춰 크기가 바뀝니다. 반면 [비대체](/ko/docs/Web/CSS/Replaced_element) 절대 위치 지정 요소는 {{Cssxref("top")}}과 {{Cssxref("bottom")}}을 지정하고 {{Cssxref("height")}}는 지정하지 않으면 (즉, `auto`로 두면) 사용 가능한 수직 공간을 가득 채웁니다. 마찬가지로 {{Cssxref("left")}}와 {{Cssxref("right")}}을 지정하고, {{Cssxref("width")}}는 `auto`로 두면 사용 가능한 수평 공간을 가득 채웁니다.

위에서 설명한 경우(공간을 꽉 채우는 경우)가 아니라면 다음 규칙을 따릅니다.

- `top`과 `bottom`을 지정한 경우(`auto`가 아닌 경우), `top`이 우선 적용됩니다.
- `left`와 `right`를 지정한 경우, {{Cssxref("direction")}}이 `ltr`(영어, 한국어 등)이면 `left`를 우선 적용하고, {{Cssxref("direction")}}이 `rtl`(페르시아어, 아랍어, 히브리어 등)이면 `right`를 우선 적용합니다.

## 접근성 고려사항

화면을 확대해서 텍스트가 크게 보이게 했을 때 `absolute`나 `fixed`로 배치된 요소가 내용을 가리지 않도록 주의해야 합니다.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visual Presentation: Understanding SC 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### 성능 및 접근성 문제

`fixed`나 `sticky`를 포함하는 스크롤 요소가 성능 및 접근성 문제를 유발할 수 있습니다. 브라우저는 사용자가 스크롤을 할 때마다 끈끈하거나 고정인 요소를 새로운 위치에 페인트 해야 하는데, 표시해야 되는 내용의 양, 브라우저 및 기기의 성능에 따라 60 fps를 유지하지 못해 일부 민감한 사용자에게는 접근성 문제가, 다른 모두에게는 사용자 경험 악화가 생깁니다. 이 문제의 해결책 중 하나는 {{cssxref("will-change", "will-change: transform")}}을 추가하여 요소를 자신만의 레이어에서 렌더링 하여 페인트 속도를 향상하고, 나아가 성능과 접근성을 높일 수 있습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 상대 위치 지정

상대적으로 배치된 요소는 문서 내에서 정상적인(normal) 위치에서 주어진 오프셋만큼 떨어지지만, 다른 요소에는 영향을 주지 않습니다. 아래 예제에서는 다른 요소들이 "Two"가 원래 위치에 있는 것처럼 배치되는 것을 확인할 수 있습니다.

#### HTML

```html
<div class="box" id="one">One</div>
<div class="box" id="two">Two</div>
<div class="box" id="three">Three</div>
<div class="box" id="four">Four</div>
```

#### CSS

```css
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#two {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

{{ EmbedLiveSample('상대_위치_지정', '600px', '200px') }}

### 절대 위치 지정

상대적으로 배치된 요소가 일반적인 문서 흐름에 따르는 것과 달리, 절대적으로 배치된 요소는 흐름에서 제거됩니다. 따라서 다른 요소는 그 요소가 존재하지 않는 것처럼 배치됩니다. 절대적으로 배치된 요소는 _가장 가까운 위치 지정 조상_(즉, `static`이 아닌 가장 가까운 조상)을 기준으로 배치됩니다. 그런 요소가 존재하지 않는다면, 초기 컨테이닝 블록이 기준이 됩니다.

#### HTML

```html
<div class="box" id="one">One</div>
<div class="box" id="two">Two</div>
<div class="box" id="three">Three</div>
<div class="box" id="four">Four</div>
```

#### CSS

```css
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#two {
  position: absolute;
  top: 20px;
  left: 20px;
  background: blue;
}
```

{{ EmbedLiveSample('절대_위치_지정', '800px', '200px') }}

### 고정 위치 지정

고정 위치 지정은 절대 위치 지정과 비슷하지만, `fixed`는 요소의 컨테이닝 블록이 *뷰포트*의 초기 [컨테이닝 블록](/ko/docs/Web/CSS/Containing_block)이라는 점에서 다릅니다(`transform`, `perspective`, `filter` 속성이 `none`이 아닌 조상이 있다면 그 조상이 컨테이닝 블록이 됩니다. [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform) 참조). 따라서 스크롤에 관계 없이 화면의 특정 지점에 고정되는, "떠다니는"(floating) 요소를 생성할 수 있습니다. 아래 예제에서, "One" 상자는 페이지 위에서 80픽셀, 왼쪽에서 10픽셀 떨어진 위치에 고정됩니다. 스크롤을 하더라도, 뷰포트를 기준으로 같은 위치에 고정된 채로 유지됩니다.

#### HTML

```html
<div class="outer">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <div class="box" id="one">One</div>
</div>
```

#### CSS

```css
.box {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#one {
  position: fixed;
  top: 80px;
  left: 10px;
  background: blue;
}

.outer {
  width: 500px;
  height: 300px;
  overflow: scroll;
  padding-left: 150px;
}
```

{{ EmbedLiveSample('고정_위치_지정', '800px', '300px') }}

### 끈끈한 위치 지정

끈끈한 위치 지정은 상대와 고정 위치 지정을 합친 것으로 생각할 수 있습니다. 끈끈하게 배치된 요소는 상대적으로 배치된 요소로 취급하지만, 주어진 경계선을 지나면 고정 위치를 갖게 됩니다. 예를 들어,

```css
#one {
  position: sticky;
  top: 10px;
}
```

이때 id가 one인 요소는 그 위치가 위에서 10픽셀 떨어진 위치까지는 상대적으로 배치되지만, 그 경계를 넘어가면 위에서 10픽셀 떨어진 위치에 고정됩니다.

끈끈한 위치 지정은 흔히 사전순 리스트의 레이블에 사용할 수 있습니다. 예를 들어, "ㄴ" 레이블은 "ㄱ"으로 시작하는 목록이 화면 밖으로 나갈 때까지는 그 바로 밑에 표시되고, 그 다음에는 "ㄱ"을 따라 화면 밖으로 나가는 대신 화면 위에 고정시킬 수 있습니다. 그러다가 "ㄴ" 목록이 화면 바깥으로 나가면 그 자리에 "ㄷ" 레이블을 고정시킬 수 있습니다.

끈끈한 위치 지정이 의도한 대로 동작하게 하려면 `top`, `right`, `bottom`, `left` 중 적어도 하나의 임계값을 설정해야 합니다. 임계값을 설정하지 않으면 상대 위치 지정과 다를 바가 없습니다.

#### HTML

```html
<dl>
  <div>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
  </div>
  <div>
    <dt>C</dt>
    <dd>Chromeo</dd>
    <dd>Common</dd>
    <dd>Converge</dd>
    <dd>Crystal Castles</dd>
    <dd>Cursive</dd>
  </div>
  <div>
    <dt>E</dt>
    <dd>Explosions In The Sky</dd>
  </div>
  <div>
    <dt>T</dt>
    <dd>Ted Leo &amp; The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </div>
</dl>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

dl > div {
  background: #fff;
  padding: 24px 0 0 0;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
  font:
    bold 18px/21px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font:
    bold 20px/45px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #ccc;
}
```

{{ EmbedLiveSample('끈끈한_위치_지정', '500px', '300px') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
