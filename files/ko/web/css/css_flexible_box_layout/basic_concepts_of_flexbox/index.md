---
title: flexbox의 기본 개념
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
---

{{CSSRef}}

일명 flexbox라 불리는 Flexible Box module은 flexbox 인터페이스 내의 아이템 간 공간 배분과 강력한 정렬 기능을 제공하기 위한 1차원 레이아웃 모델 로 설계되었습니다. 이 글에서는 flexbox의 주요 기능에 대한 개요를 다룹니다. 더 자세한 내용은 가이드의 다른 글에서 탐구하게 될 것입니다.

flexbox를 1차원이라 칭하는 것은, 레이아웃을 다룰 때 한 번에 하나의 차원(행이나 열)만을 다룬다는 뜻입니다. 이는 행과 열을 함께 조절하는 [CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_Grid_Layout)의 2차원 모델과는 대조됩니다.

## flexbox의 두 개의 축

flexbox를 다루려면 주축과 교차축이라는 두 개의 축에 대한 정의를 알아야 합니다. 주축은 {{cssxref("flex-direction")}} 속성을 사용하여 지정하며 교차축은 이에 수직인 축으로 결정됩니다. flexbox의 동작은 결국 이 두 개의 축에 대한 문제로 환원되기 때문에 이들이 어떻게 동작하는지 처음부터 이해하는 것이 중요합니다.

### 주축

주축은 `flex-direction`에 의해 정의되며 4개의 값을 가질 수 있습니다:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

`row` 혹은 `row-reverse`를 선택하면 주축은 **인라인 방향**으로 행을 따릅니다.

![If flex-direction is set to row the main axis runs along the row in the inline direction.](basics1.png)

`column` 혹은 `column-reverse` 을 선택하면 주축은 페이지 상단에서 하단으로 **블록 방향**을 따릅니다.

![If flex-direction is set to column the main axis runs in the block direction.](basics2.png)

### 교차축

교차축은 주축에 수직하므로, 만약 `flex-direction`(주축)이 `row` 나 `row-reverse` 라면 교차축은 열 방향을 따릅니다.

![If flex-direction is set to row then the cross axis runs in the block direction.](basics3.png)

주축이 `column` 혹은 `column-reverse` 라면 교차축은 행 방향을 따릅니다.

![If flex-direction is set to column then the cross axis runs in the inline direction.](basics4.png)

flex 요소를 정렬하고 끝을 맞추(justify)려면 어느 축이 어느 방향인지 이해하는 것이 중요합니다; flexbox는 주축, 교차축을 따라 항목을 정렬하고 끝을 맞추는 각종 속성들을 적용하는 방식으로 동작합니다.

## 시작선과 끝선

flexbox가 쓰기 방법(writing mode)을 가정하지 않는다는 것은 상당히 중요합니다. 과거의 CSS는 왼쪽에서 오른쪽으로 향하는 가로 방향의 쓰기 방법에 치우쳐 있었습니다. 하지만 현대의 레이아웃은 다양한 쓰기 방법을 포괄해야 하므로, 더이상 텍스트가 문서의 왼쪽 상단에서 시작해서 오른쪽으로 향한다고 가정하지 않습니다. 새 라인이 항상 아래에 쌓인다고 가정하지도 않습니다.

다른 글에서 flexbox와 쓰기 방법 명세(writing mode spec.)가 어떤 관련이 있는지 알아볼 수 있습니다. 그 전에, 이 글에서 flex 요소의 정렬 방향에 "왼쪽, 오른쪽, 위, 아래"를 사용하지 않는 이유를 알 수 있었으면 합니다.

`flex-direction`이 `row`고 영어 문장을 문서에 쓰고 있다면, 주축의 시작선은 왼쪽 끝, 끝선은 오른쪽 끝이 될 것입니다.

![Working in English the start edge is on the left.](basics5.png)

아랍어 문장을 쓰고 있다면, 주축의 시작선은 오른쪽 끝, 끝 선은 왼쪽 끝이 될 것입니다.

![The start edge in a RTL language is on the right.](basics6.png)

영어와 아랍어는 모두 가로 쓰기를 채택하고 있으므로 두 예시에서 교차축의 시작선은 **flex 컨테이너**의 위 끝이며 끝선은 아래 끝입니다.

조금만 지나면 왼쪽-오른쪽으로 생각하는 것보다 시작선-끝선으로 생각하는 것이 금새 자연스러워질 것입니다. 동일한 패턴을 따르는 CSS 그리드 레이아웃 같은 방법을 다룰 때도 쉽게 적응할 수 있을 것입니다.

## flex 컨테이너

문서의 영역 중에서 flexbox가 놓여있는 영역을 **flex 컨테이너**라고 부릅니다. flex 컨테이너를 생성하려면 영역 내의 컨테이너 요소의 {{cssxref("display")}} 값을 `flex` 혹은 `inline-flex`로 지정합니다. 이 값이 지정된 컨테이너의 일차 자식(direct children) 요소가 **flex 항목**이 됩니다. display 속성만 지정하여 flex 컨테이너를 생성하면 다른 flex 관련 속성들은 아래처럼 기본 값이 지정됩니다.

- 항목은 행으로 나열됩니다. (`flex-direction` 속성의 기본값은 `row`입니다).
- 항목은 주축의 시작 선에서 시작합니다.
- 항목은 주 차원 위에서 늘어나지는 않지만 줄어들 수 있습니다.
- 항목은 교차축의 크기를 채우기 위해 늘어납니다.
- {{cssxref("flex-basis")}} 속성은 `auto`로 지정됩니다.
- {{cssxref("flex-wrap")}} 속성은 `nowrap`으로 지정됩니다.

이렇게되면 **flex 항목**들은 각 항목 별 내부 요소의 크기로 주축을 따라 정렬됩니다. 컨테이너의 크기보다 더 많은 항목이 있을 경우 행을 바꾸지 않고 주축 방향으로 흘러 넘치게 됩니다. 어떤 항목이 다른 항목보다 높이 값이 크다면 나머지 모든 항목들은 그에 맞게 교차축을 따라 늘어나게 됩니다.

다음의 라이브 예시를 통해 어떻게 보여지는지 확인할 수 있습니다. flexbox의 초기 동작을 시험해보려면 항목을 추가하거나 수정해보시기 바랍니다.

{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}}

### flex-direction 지정

**flex 컨테이너**에 {{cssxref("flex-direction")}} 속성을 지정하면 flex 항목이 나열되는 방향을 변경할 수 있습니다. `flex-direction: row-reverse` 라고 지정하면 행으로 나열되는 것은 그대로지만 시작 선과 끝 선이 서로 바뀌게 됩니다.

`flex-direction`을 `column`으로 지정하면 주축이 변경되고 항목들은 열로 나열됩니다. `column-reverse`로 지정하면 그에 더해 시작 선과 끝 선이 서로 바뀌게 됩니다.

다음의 라이브 예시는 `flex-direction`이 `row-reverse`로 지정되어 있습니다. `row`, `column`, `column-reverse`와 같은 값을 지정해서 어떻게 되는지 확인해보시기 바랍니다.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}

## flex-wrap을 이용한 복수 행 flex 컨테이너 지정

flexbox는 1차원 모델이지만 **flex 항목**이 여러 행에 나열되도록 할 수 있습니다. 그 경우 각 행이 새로운 **flex 컨테이너**라고 생각해야 합니다. 공간 배분은 해당 행에서만 이루어지며 다른 행은 영향을 받지 않습니다.

항목이 여러 행에 나열되도록 하려면 {{cssxref("flex-wrap")}} 속성의 값을 `wrap`으로 지정합니다. 그러면 항목이 하나의 행에 들어가지 않을 정도로 클 경우 다른 행에 배치됩니다. 아래의 라이브 예시에 있는 **flex 항목**은 폭이 지정되어 있으며 항목들의 폭의 합은 **flex 컨테이너**에 들어가기에는 너무 넓습니다. `flex-wrap`속성이 `wrap`으로 지정되어 있으므로 항목은 여러 행에 나열됩니다. 초깃값과 동일한 `nowrap`을 지정하고 flex항목에 대한 확대/축소 방식을 별도로 지정하지 않으면 **flex 항목**들은 컨테이너의 폭에 맞게 줄어듭니다. `nowrap`을 지정하면 항목이 전혀 줄어들 수 없거나 충분히 줄어들 수 없을 때 흘러넘치게 됩니다.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}

[Mastering Wrapping of Flex Items](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items) 가이드에서 더 자세한 내용을 확인할 수 있습니다.

## 축약형 속성 flex-flow

`flex-direction` 속성과 `flex-wrap` 속성을 {{cssxref("flex-flow")}}라는 축약 속성으로 합칠 수 있습니다. 첫 번째 값은 `flex-direction`이고 두 번째 값은 `flex-wrap`입니다.

다음의 라이브 예시에서 첫 번째 값을 `flex-direction`에 지정 가능한 값들(`row`, `row-reverse`, `column` or `column-reverse`)로 바꿔보시기 바랍니다. 두 번째 값도 `wrap`이나 `nowrap`으로 바꿔보시기 바랍니다.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}

## flex 항목에 지정 가능한 속성들

**flex 항목**에 적용할 수 있는 속성은 다음과 같습니다.

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

이 글에서는 위의 속성들에 대해 간략하게 살펴보겠습니다. 자세한 내용은 [Controlling Ratios of Flex Items on the Main Axis](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)에서 다룹니다.

500 픽셀의 크기를 갖는 **flex 컨테이너** 내에 100 픽셀 크기의 자식 세 개가 존재할 때, **사용가능한 공간** 200 픽셀이 남게 됩니다. 기본적으로 flexbox는 이 공간을 마지막 자식 요소 다음에 빈공간으로 남겨둡니다.

![This flex container has available space after laying out the items.](basics7.png)

위의 세 가지 속성을 변경한다는 것은 **flex 항목**에게 **사용가능한 공간**을 분배하는 방식을 변경하는 것입니다. **사용가능한 공간** 개념은 **flex 항목**을 정렬할 때 특히 중요합니다.

### `flex-basis` 속성

`flex-basis` 속성은 항목의 크기를 결정합니다. 이 속성의 기본값은 `auto`이며, 이 경우 브라우저는 항목이 크기를 갖는지 확인합니다. 위의 사진 예시의 경우 항목의 크기가 100 픽셀이므로 flex-basis의 값으로 100 픽셀이 사용됩니다.

**flex 항목**에 크기가 지정되어 있지 않으면, **flex 항목**의 내용물 크기가 flex-basis 값으로 사용됩니다. 따라서 **flex 컨테이너**에서 `display: flex` 속성만을 지정하면 flex항목들이 각 내용물 크기만큼 공간을 차지하게 됩니다.

### `flex-grow` 속성

`flex-grow`값을 양수로 지정하면 **flex 항목**별로 주축 방향 크기가 `flex-basis` 값 이상으로 늘어날 수 있게 됩니다. 위의 사진 예시에서 모든 항목의 flex-grow 값을 1로 지정하면 사용가능한 공간은 각 항목에게 동일하게 분배되며, 각 항목은 주축을 따라 분배받은 값만큼 사이즈를 늘려 공간을 차지합니다.

첫 항목의 `flex-grow` 값을 2로 지정하고 나머지 두 개의 항목을 1로 지정한다면 각 항목에 지정된 `flex-grow` 값의 비율에 따라 남은 공간이 분배됩니다. 각 항목의 `flex-grow` 비율이 2:1:1 이므로 첫 항목에게 100 픽셀, 두 번째와 세 번째 항목에게 50 픽셀씩 분배됩니다.

### `flex-shrink` 속성

`flex-grow` 속성이 주축에서 남는 공간을 항목들에게 분배하는 방법을 결정한다면 `flex-shrink` 속성은 주축의 공간이 부족할때 각 항목의 사이즈를 줄이는 방법을 정의합니다. 만약 **flex 컨테이너**가 **flex 항목**을 모두 포함할 만큼 넉넉한 공간을 갖고 있지 않고 `flex-shrink` 값이 양수이면 **flex 항목**은 flex-basis에 지정된 크기보다 작아집니다. 또한, `flex-grow` 속성과 마찬가지로 더 큰 `flex-shrink` 값을 갖는 항목의 사이즈가 더 빨리 줄어듭니다.

항목의 최소 크기는 실제 축소량을 계산할 때 고려되기 때문에 flex-shrink 속성이 flex-grow 속성에 비해 덜 일관된 모습을 보여줄지도 모릅니다. `flex-shrink` 속성이 항목의 사이즈를 결정하는 알고리즘에 관해서는 [Controlling Ratios of Flex Items on the Main Axis](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)에서 자세히 살펴히보겠습니다.

> **참고:** `flex-grow` 와 `flex-shrink`의 값이 비율임을 유의하세요. **flex 항목**의 flex 속성을 모두 `1 1 200px` 로 지정하고 한 항목만 크기가 늘어나는 비율을 타 항목의 두배로 하고 싶으면 해당 **flex 항목**의 flex 속성을 `2 1 200px`로 지정하면 되지만, flex 속성 값을 모두 `10 1 200px`로 지정하고 늘어나는 비율을 두 배로 하고 싶은 항목의 flex 속성 값만 `20 1 200px`로 지정해도 동일하게 동작합니다.

### 축약형 속성 flex

보통은 `flex-grow`, `flex-shrink`, `flex-basis` 값을 각각 사용하지 않고 이 세 속성을 한번에 지정하는 {{cssxref("flex")}} 축약형을 많이 사용합니다. `flex` 축약형의 값은 `flex-grow`, `flex-shrink`, `flex-basis` 순서로 지정됩니다.

다음의 라이브 예시에서 flex 축약형의 값들을 조절하면서 시험해 볼 수 있습니다. 첫 값이 `flex-grow`를 지정하며, 이 첫 값을 양수로 하면 **flex 항목**이 넓어질 수 있습니다. 두 번째 값은 `flex-shrink` 를 지정하며 이 두 번째 값에 양수를 지정하면 **flex 항목**이 좁아질 수 있습니다. 세 번째 값은 `flex-basis`를 지정하며 이 값은 **flex 항목**이 넓어지거나 좁아질 때 고려하는 기준 값입니다.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 510)}}

flex 축약형 표현에 사용할 수 있는 미리 정의된 축약 값들이 아래에 나열되어 있습니다. 이 값들 만으로도 대부분의 경우(use-case)에 대응할 수 있을 것 입니다.

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

**flex 항목**을 `flex: initial`로 지정하면 `flex: 0 1 auto` 로 지정한 것과 동일하게 동작합니다. 이 경우, **flex 항목**들은 `flex-grow`가 0이므로 `flex-basis`값보다 커지지 않고 `flex-shrink`가 1이므로 **flex 컨테이너** 공간이 모자라면 크기가 줄어듭니다. 또, `flex-basis`가 `auto`이므로 **flex 항목**은 주축 방향으로 지정된 크기 또는 자기 내부 요소 크기 만큼 공간을 차지합니다.

`flex: auto` 로 지정하면 `flex: 1 1 auto`로 지정한 것과 동일하며, `flex:initial` 과는 주축 방향 여유 공간이 있을 때 **flex 항목**들이 늘어나서 주축 방향 여유 공간을 채우는 점만 다릅니다.

`flex: none`으로 지정하면 `flex: 0 0 auto`으로 지정한 것과 동일하며 **flex 컨테이너**의 크기 변화에도 **flex 항목** 크기는 변하지 않고 `flex-basis`를 `auto`로 지정했을 때 정해지는 크기로 결정됩니다.

이 축약형은 더 축약해서 `flex: 1` 이나 `flex: 2`처럼 쓸수도 있는데, 이는 `flex-grow` 만 지정하고 나머지는 1 0으로 사용한다는 뜻이다. 따라서 `flex: 2`는 `flex: 2 1 0`와 동일하게 처리됩니다.

다음 라이브 예제에서 이 축약 값들을 시험해 볼 수 있습니다.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 510)}}

## 정렬, 끝 맞추기(justification), flex 항목간 여유 공간 분배

flexbox의 주 기능 중 하나는 (주축과 교차축으로 표현되는) **flex 컨테이너** 공간 안에 **flex 항목**들을 정렬하고 끝 마추며 여유 공간을 항목 간에 분배하는 것입니다.

역주) 이 절의 내용은 편의상 **flex 컨테이너**의 flex-direction를 row로 가정하고 '행'과 '열'로 표기했습니다.

### `align-items`

{{cssxref("align-items")}}는 **flex 컨테이너**에 지정하는 속성이며, 교차축을 따라 **flex 항목** 열을 정렬하는 방식을 지정합니다.

이 속성의 (아무것도 지정하지 않았을 때 적용되는)초기 값은 `stretch`이며 이 값을 지정하면 **flex 항목**의 높이는 **flex 컨테이너** 내 **flex 항목** 행의 최대 높이로 지정됩니다. 따라서, **flex 항목** 행이 하나 일 때는 **flex 항목**은 교차축 방향으로 **flex 컨테이너**를 가득 채우게 됩니다.

이 속성을 `flex-start`로 지정하면 **flex 항목**의 첫 열이 교차축 방향의 시작선에 정렬됩니다. `flex-end`로 지정하면 **flex 항목**의 첫 열이 교차축 방향의 끝선에 정렬됩니다. `center`로 지정하면 **flex 항목** 행에 배분된 공간의 가운데 라인에 정렬됩니다.

다음 라이브 예제에서 이 값들을 시험해 볼 수 있습니다. - 이 시험을 위해 의도적으로 **flex 컨테이너**에 높이를 지정해 두었습니다.

- `stretch`
- `flex-start`
- `flex-end`
- `center`

{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}

### `justify-content`

{{cssxref("justify-content")}} 속성은 주축을 따라 **flex 항목** 행을 정렬하는 방식을 지정합니다.

이 속성의 (아무것도 지정하지 않았을 때 적용되는)초기 값은 `flex-start`이며 이 값을 지정하면 **flex 항목** 행 내의 항목들은 **flex 컨테이너**의 시작선에서 부터 정렬됩니다. `flex-end`로 지정하면 **flex 항목** 행의 마지막 항목이 **flex 컨테이너**의 끝선에서 정렬됩니다. `center`로 지정하면 **flex 항목**들이 **flex 항목** 행의 가운데 정렬됩니다.

`space-between`을 지정하면 주축 방향 여유 공간을 **flex 항목** 사이의 공간에 균등 배분합니다.

`space-around`는 시작선 및 끝선과 **flex 항목**간 공간도 균등 배분에 고려하므로 시작선 및 끝선과 **flex 항목** 간의 공간의 크기를 1로 배분한다면 **flex 항목** 사이의 공간은 2로 배분합니다.

`space-evenly`로 지정하면 여유 공간을 **flex 항목** 사이의 공간 및 시작선 및 끝선과 **flex 항목** 간의 공간에 모두 균등하게 배분합니다.

다음 라이브 예제에서 `justify-content`에 지정할 수 있는 다음 값들을 시험해 볼 수 있습니다.

- `stretch`
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`
- `space-evenly`

{{EmbedGHLiveSample("css-examples/flexbox/basics/justify-content.html", '100%', 380)}}

이 절에서 설명한 내용으로 대부분의 경우에 대응할 수 있지만, [Aligning Items in a Flex Container](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) 에서 이 속성들을 더 자세히 살펴볼 것입니다.

## Next steps

Flexbox의 개요를 살펴보았습니다. 다음 글 [how this specification relates to other parts of CSS](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)에서 이 규격이 다른 CSS 규격과 어떻게 연관되어 있는지 말씀드리겠습니다.
