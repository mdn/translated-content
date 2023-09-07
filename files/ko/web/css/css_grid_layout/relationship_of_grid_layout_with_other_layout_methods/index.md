---
title: Relationship of grid layout to other layout methods
slug: Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods
---

CSS 그리드 레이아웃은 레이아웃 작업을 위한 전체 시스템 중의 일부로서, 다른 CSS 기술과 함께 어우러져 작동하도록 설계되었습니다. 이번 가이드에서는 이미 사용하고 계신 다른 기술과 그리드가 어떻게 잘 어울리는지 설명해 드리겠습니다.

## 그리드와 플랙스박스

CSS 그리드 레이아웃과 [CSS 플랙스박스(Flexbox) 레이아웃](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout)의 기본 차이점이라면, 플랙스박스는 한 줄로 된 행 _혹은_ 열 방향의 레이아웃과 같이 일차원의 레이아웃을 염두에 두고 설계되었다는 점입니다. 하지만, 그리드는 행과 열 모두를 염두에 둔 2차원적 레이아웃을 고려해서 설계되었습니다. 그러나 두 기술은 몇 가지 공통된 면모를 공유하고 있어서, 이미 플랙스박스 사용법을 익히셨다면 그리드를 이해하는 데도 도움이 될 만한 둘 사이의 유사점을 목격하실 수도 있습니다.

### 1차원적 대비 2차원적 레이아웃

간단한 예를 들면, 1차원 및 2차원 레이아웃의 차이점은 확연해집니다.

첫 번째 예제에서는 플랙스박스를 써서 일련의 네모난 상자들을 배치하였습니다. 컨테이너 안에는 다섯 개의 자식 아이템이 있고, 플랙스 기준값 200픽셀을 기반으로 아이템이 늘어나거나 줄어들도록 flex 프로퍼티 값을 지정하였습니다.

또한, {{cssxref("flex-wrap")}} 프로퍼티 값으로 `wrap`을 지정해서, 만약 컨테이너 안에 있는 공간이 플랙스 기준값 너비의 아이템들을 모두 나열하지 못할 만큼 좁아진다면, 다음 행으로 줄 바꿈 하도록 하였습니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.wrapper > div {
  flex: 1 1 200px;
}
```

{{ EmbedLiveSample('onedtwod', '500', '230') }}

위의 그림에서 보시다시피, 두 개의 아이템이 다음 행으로 줄 바꿈 한 것을 확인하실 수 있습니다. 이 아이템들은 남은 공간을 공유하며 아래 위치한 아이템들은 위에 있는 것들과는 일렬로 정렬되지 않았습니다. 이는 플랙스 아이템이 다음 열로 감길 때, 새로운 각각의 행 (또는 세로 열 기준으로 작업할 경우 각각의 열)이 새로운 플랙스 컨테이너가 되기 때문입니다. 그래서 공간의 분배는 가로 행을 기준으로 이루어집니다.

여기서 자주 던지는 질문으로, 그러면 이런 아이템을 어떻게 하면 일렬로 정렬할 수 있을까입니다. 이럴 땐 2차원적 레이아웃 방법을 고려해 볼 수 있습니다. 아이템을 정렬할 때 행과 열을 기준으로 제어하고 싶다면, 이런 경우엔 그리드가 제격입니다.

### CSS 그리드를 이용한 동일 레이아웃 구현

다음 예제에선 그리드를 써서 똑같은 레이아웃을 만들어 보았습니다. 이번엔 `1fr` 크기로 된 세 개의 세로 열 트랙으로 이루어져 있습니다. 아이템 자체에는 아무것도 설정할 필요가 없고, 아이템들은 생성된 그리드의 각 셀에 하나씩 배치됩니다. 보시다시피 아이템들은 행과 열에 줄지어서 그리드 위에 정확히 맞추어져 있습니다. 아이템이 다섯 개인 경우, 2번째 행의 끝부분은 빈 곳으로 남게 됩니다.

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

{{ EmbedLiveSample('Two_Dimensional_With_Grid', '300', '170') }}

그리드와 플랙스박스 둘 사이의 선택을 고민할 때 자신에게 던질 수 있는 간단한 질문으로:

- 레이아웃을 조정할 때 오직 가로 행 **_혹은_** 세로 열 만이 고려 대상이라면 – 플랙스박스를 사용하십시오
- 레아아웃을 조정할 때 가로 행과 세로 열 **_모두_**를 염두에 두어야 한다면 – 그리드를 사용하십시오

### 콘텐츠 중심 혹은 레이아웃 먼저?

1차원 대비 2차원의 차이점 외에도, 레이아웃을 할 때 플랙스박스와 그리드 중에서 어떤 것을 써야 할지를 결정하는 또 다른 요인이 있습니다. 플랙스박스는 좀 더 콘텐츠에 초점이 맞춰져 있습니다. 플랙스박스의 이상적인 사용 사례는 여러 아이템을 컨테이너에 고르게 배치하려는 경우입니다. 여기서 콘텐츠의 크기가 각 아이템이 차지하는 공간을 결정합니다. 아이템이 새로운 줄로 줄 바꿈 되면, 아이템의 크기와 *해당 줄*의 사용 가능한 공간에 따라 간격이 조정됩니다.

그리드는 레이아웃을 먼저 고려하게 됩니다. CSS 그리드 레이아웃을 사용할 때는 우선 레이아웃을 작성한 다음 그 위에 아이템을 배치하거나, 자동 배치 규칙을 통해 견고하게 짜인 그리드 위에 놓인 그리드 셀에 아이템을 배치하게 됩니다. 콘텐츠의 크기에 따라 조절되는 트랙을 만들 수도 있지만, 이렇게 하면 전체 트랙을 변경하게 됩니다.

플랙스박스를 사용하면서 그 특유의 유연성 때문에 제약을 느낀다면, CSS 그리드 레이아웃을 고려해 보시는 것도 좋을 겁니다. 예를 들어 윗줄에 있는 다른 아이템과 일렬로 정렬되게 하려고 굳이 플랙스 아이템에 퍼센트 너비를 지정해야 할 때가 있는데, 이 경우 그리드가 더 나은 선택이 될 수 있습니다.

### 박스 정렬

플랙스박스의 기능 중 많은 사람이 가장 흥미롭게 여겼던 것은 처음으로 적절한 정렬 제어 기능을 제공한다는 것입니다. 그래서 이젠 박스를 페이지의 중앙에 손쉽게 배치할 수도 있게 되었습니다. 플렉스 아이템은 플렉스 컨테이너의 높이만큼 늘어날 수도 있어서, 같은 높이의 칼럼 레이아웃을 구현할 수도 있습니다. 이것은 개발자가 아주 오랫동안 원했던 것이어서, 그동안 최소한 시각적 효과라도 흉내 내기 위해 온갖 종류의 꼼수를 고안해 내기도 했었습니다.

플랙스박스 표준 명세서에 있는 정렬 프로퍼티는 [박스 정렬 레벨(Box Alignment Level) 3](https://drafts.csswg.org/css-align/)의 새로운 표준에 추가되었습니다. 이 말은 그리드 레이아웃을 비롯한 다른 표준에서도 사용할 수 있다는 뜻입니다. 그래서 미래에는 다른 레이아웃 방법에도 똑같이 적용될 수 있습니다.

이 가이드 시리즈의 후반부에서 박스 정렬에 관해 자세히 알아볼 것이며 또한, 그리드 레이아웃에서 어떻게 작동하는지도 살펴보겠습니다. 하지만 여기서는 플랙스박스와 그리드를 비교하는 간단한 예제를 살펴보겠습니다.

플랙스박스를 사용하는 첫 번째 예제에는 컨테이너 안에 세 개의 아이템이 있습니다. 감싸고 있는 요소에 {{cssxref("min-height")}}를 지정해서, 플랙스 컨테이너의 높이를 정의해 줍니다. 플렉스 컨테이너의 {{cssxref("align-items")}} 값을 `flex-end`로 설정하여 아이템이 플랙스 컨테이너의 끝에 정렬되도록 했습니다. 또한, `box1`에 {{cssxref("align-self")}} 프로퍼티를 설정하여 기본값을 덮어씌우면서 컨테이너의 높이 만큼 늘어나게 하였고, `box2`에는 플랙스 컨테이너의 시작 지점에 정렬되도록 하였습니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: flex;
  align-items: flex-end;
  min-height: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: flex-start;
}
```

{{ EmbedLiveSample('박스_정렬', '300', '230') }}

### CSS 그리드에서의 정렬

다음 두 번째 예제에서는 그리드를 써서 앞에서와 똑같은 레이아웃을 구현했습니다. 이번에는 그리드 레이아웃에 적용할 때 쓰는 박스 정렬 프로퍼티를 사용하였습니다. 그래서 `flex-start`와 `flex-end`가 아닌 `start`와 `end`를 써서 정렬합니다. 그리드 레이아웃의 경우 해당 그리드 영역을 기준으로 내부에 있는 아이템들을 정렬합니다. 이번 경우에는 단일 그리드 셀로 되어 있지만, 그리드 영역이 여러 그리드 셀로 구성되어 있을 수도 있습니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  grid-auto-rows: 200px;
}
.box1 {
  align-self: stretch;
}
.box2 {
  align-self: start;
}
```

{{ EmbedLiveSample('CSS_그리드에서의_정렬', '200', '310') }}

### `fr` 단위와 `flex-basis`

우리는 이미 `fr` 단위가 어떻게 그리드 컨테이너 속 사용 가능한 공간을 비율에 따라 그리드 트랙에 할당하는지 보았습니다. `fr` 단위가 {{cssxref("minmax", "minmax()")}} 함수와 결합하면 플랙스박스의 `flex` 프로퍼티와 매우 유사한 동작을 구현할 수 있으며, 동시에 2차원 레이아웃을 구성할 수도 있습니다.

이전의 1차원과 2차원 레이아웃의 차이점을 보여주는 예제를 살펴보면, 두 레이아웃이 반응하는 방식에 차이가 있다는 점을 아실 수 있습니다. 플랙스 레이아웃의 경우, 브라우저 창을 더 넓거나 좁게 드래그하면, 플랙스 박스는 사용 가능한 공간에 따라 각 행에 나열되는 아이템의 수를 적절하게 조정합니다. 공간이 많다면 5개의 아이템 모두가 한 행에 들어갈 수 있을 것이며, 컨테이너 너비가 매우 좁다면 단지 하나의 아이템이 들어갈 만한 공간이 남을 수도 있을 겁니다.

반면에, 그리드 버전에는 항상 세 개의 열 트랙이 있게 됩니다. 트랙 자체가 넓어지거나 줄어들 수 있지만, 그리드를 정의할 때 세 개를 지정했으면 무조건 세 개의 트랙이 있게 됩니다.

#### 자동으로 채워지는 그리드 트랙

트랙의 목록을 생성할 때 반복 표기법과 `auto-fill` 및 `auto-fit` 프로퍼티를 사용하면 지정한 행과 열에 맞추면서도 플랙스박스와 유사한 효과를 내도록 콘텐츠를 정렬할 수도 있습니다.

다음 예제에서는 반복 표기법을 지정할 때 정수 대신 `auto-fill` 키워드를 사용하였고 기준 크기가 200픽셀이 되도록 트랙 목록을 설정했습니다. 즉, 그리드는 컨테이너에 200픽셀 너비의 세로 열 트랙을 채울 수 있을 만큼의 개수를 생성하게 됩니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}
```

{{ EmbedLiveSample('자동으로_채워지는_그리드_트랙', '500', '170') }}

### 변동 가능한 트랙의 수

이것은 플랙스박스와 완전히 똑같지는 않습니다. 플랙스박스 예제에서는 아이템이 다음 줄로 행 바꿈 하기 전에는 기본값인 200픽셀보다 더 넓었습니다. 그리드에서는 `auto-fill`과 {{cssxref("minmax", "minmax()")}} 함수를 결합해서 비슷한 결과를 얻을 수 있습니다. 다음 예제에선 `minmax`를 써서 자동으로 채워지는 트랙을 만들었습니다. 트랙은 최소 200픽셀부터 시작해서 최대 `1fr`까지 늘어날 수 있도록 설정하였습니다. 브라우저는 우선 200픽셀 크기의 아이템을 (그리드 간격도 함께 고려해서) 컨테이너에 몇 개로 채울 수 있을지 계산을 하고 나서, 남아있는 공간을 최대치 `1fr` 기준으로 아이템들끼리 공유하면서 서로 늘어나도록 합니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

{{ EmbedLiveSample('변동_가능한_트랙의_수', '500', '170') }}

이렇게 해서, 크기와 개수가 변동적인 트랙들로 구성된 그리드를 만들 수 있게 되었으며, 동시에 아이템들을 일정한 행과 열로 정렬할 수도 있음을 확인하였습니다.

## 그리드와 단독으로 위치를 지정한 요소

그리드는 단독으로 위치 지정된 요소와 상호 작용하면서, 그리드 또는 그리드 영역 내에 아이템을 배치할 때 유용하게 사용될 수 있습니다. 표준 명세서에는 그리드 컨테이너가 요소를 감싸는 컨테이닝 블록(containing block)으로서, 그리드 컨테이너가 단독으로 위치를 지정한 아이템의 부모 요소일 때 동작하는 방식을 정의하고 있습니다.

### 컨테이닝 블록으로서의 그리드 컨테이너

그리드 컨테이너를 컨테이닝 블록으로 만들려면, 다른 단독으로 위치를 지정한 아이템을 감싸고 있는 요소를 컨테이닝 블록을 만들 때와 마찬가지로, 컨테이너에 position 프로퍼티로 relative 값을 추가해야 합니다. 이렇게 하면, 그리드 아이템에 `position: absolute`를 지정할 경우 그리드 컨테이너가 컨테이닝 블록이 되며, 또 해당 아이템에 그리드 위칫값이 추가로 지정되었을 때는, 배치된 그리드 영역이 컨테이닝 블록으로 작용합니다.

아래 예제에서는 네 개의 하위 아이템을 감싸는 wrapper 클래스의 블록이 있습니다. 3번 아이템은 단독으로 위치가 지정되었으며 라인을 기반으로 그리드에 배치되었습니다. 그리드 컨테이너에 `position: relative`를 지정해서 이 아이템이 위치를 잡을 때 참고하는 기준 요소가 됩니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    This block is absolutely positioned. In this example the grid container is
    the containing block and so the absolute positioning offset values are
    calculated in from the outer edges of the area it has been placed into.
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
  position: relative;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: absolute;
  top: 40px;
  left: 40px;
}
```

{{ EmbedLiveSample('컨테이닝_블록으로서의_그리드_컨테이너', '500', '330') }}

여기서 아이템이 그리드의 세로 열 2번 라인부터 4번 라인까지, 그리고 가로 행 1번 라인을 시작으로 그리드 영역을 차지하고 있는 것을 확인하실 수 있습니다. 하지만, 단독으로 위치를 지정한 일반 아이템의 경우와 마찬가지로 문서 흐름에서 제외되면서, 자동 배치 규칙에 따라 해당 공간에 다른 아이템들을 배치하게 됩니다. 또한, 이로 인해 아이템이 추가 행을 생성하지 않게 되면서 가로 행 3번 라인까지 확장하지 않게 되었습니다.

만약에 `.box3`의 규칙 중에 `position: absolute`를 없애버리면, 위치를 지정하지 않았을 경우 표시될 원래의 자리로 돌아가는 것을 확인하실 수 있습니다.

### 부모 요소로서의 그리드 컨테이너

만약에 단독으로 위치를 지정한 자식 요소가 그리드 컨테이너에 속해 있지만, 해당 컨테이너가 위치를 참고하는 새로운 기준 요소로 정의되지 않았다면, 앞의 예제에서처럼 일반 배치 흐름에서 배제됩니다. 위치의 기준이 되는 요소는, 다른 레이아웃 방법에 공통으로 적용되는 것과 마찬가지로, 새로운 위치 기준 요소로 정의된 요소가 맡게 됩니다. 이번 경우에 만약 위에 있는 감싸는 요소에서 `position: relative`를 삭제한다면, 위치의 기준이 되는 것은 아래의 그림에서 보여주듯이 최상위 도큐먼트 오브젝트에 해당하는 기본 뷰포트(viewport)가 맡게 됩니다.

![부모 요소로서의 그리드 컨테이너 모습을 담은 그림](2_abspos_example.png)

여기도 마찬가지로 해당 아이템은, 다른 아이템들의 크기 조정과 자동 배치와 관련해서, 더는 그리드 레이아웃에 관여하지 않게 됩니다.

### 부모 요소가 그리드 영역일 때

만약에 단독으로 위치를 지정한 아이템이 그리드 영역 안에 자리 잡고 있다면, 해당 영역을 위치의 기준이 되는 요소로 정의할 수 있습니다. 아래 예제에서는 전과 같은 그리드가 정의되어 있습니다만, 이번엔 그리드의 `.box3` 안에 또 하나의 아이템을 중첩해 놓았습니다.

`.box3`의 position 값으로 relative를 지정했으며 그 밑에 있는 아이템에는 원래의 위치에서 벗어난 값을 따로 지정하였습니다. 이 경우 위치의 기준이 되는 요소는 그리드 영역이 됩니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">
    Three
    <div class="abspos">
      This block is absolutely positioned. In this example the grid area is the
      containing block and so the absolute positioning offset values are
      calculated in from the outer edges of the grid area.
    </div>
  </div>
  <div class="box4">Four</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 20px;
}
.box3 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  position: relative;
}
.abspos {
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #000;
  padding: 10px;
}
```

{{ EmbedLiveSample('부모_요소가_그리드_영역일_때', '500', '420') }}

## 그리드와 `display: contents`

마지막으로 눈여겨볼 또 하나의 레이아웃 표준과 관련된 상호 작용으로 CSS 그리드 레이아웃과 `display: contents` 사이의 상호 작용이 있습니다. display 프로퍼티의`contents` 값은 [Display 표준 명세서](https://drafts.csswg.org/css-display/#box-generation)에 새로 정의된 것으로 다음과 같이 설명되어 있습니다:

> "요소 자신은 어떠한 박스도 생성하지 않지만, 대신 포함하고 있는 하위 자식 요소와 가상 요소(pseudo-elements)가 평소처럼 박스를 생성하게 됩니다. 그래서 박스 생성과 레이아웃을 구현할 때, 문서의 계층 구조상 해당 요소가 아래 자식 요소와 가상 요소로 대체된 것처럼 다루어집니다."

만약에 아이템에 `display:` `contents`를 지정하면 보통 해당 요소가 만드는 박스는 사라지고, 자식 요소의 박스가 한 단계 상승한 것처럼 그 자리를 차지하게 됩니다. 이 얘기는 그리드 아이템의 자식 요소가 그리드 아이템이 될 수도 있다는 뜻입니다. 이상하게 들리시죠? 다음에 간단한 예를 들어보겠습니다. 아래 마크업에는 그리드가 있고, 이 그리드에 있는 첫 번째 아이템이 세 개의 열 트랙 모두를 가로지르도록 설정하였습니다. 또한, 이 아이템은 세 개의 중첩된 아이템들을 포함하고 있습니다. 이 아이템들은 컨테이너 바로 밑에 있는 자식 요소가 아니므로, 그리드 레이아웃의 일원으로 참여하지 않으면서 보통의 일반 블록 레이아웃으로 표시됩니다.

### Grid layout with nested child elements

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

{{ EmbedLiveSample('Grid_layout_with_nested_child_elements', '400', '440') }}

### Using `display: contents`

이제 `.box1`에 `display:` `contents`규칙을 추가하면, 해당 아이템이 차지하고 있는 박스가 사라지면서 하위 아이템들이 그리드 아이템 자격을 얻게 되어 자동 배치 규칙에 따라 알아서 배치됩니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  display: contents;
}
```

{{ EmbedLiveSample('Using_display_contents', '400', '350') }}

이것은 중첩된 아이템을 그리드의 일부분인 것처럼 작용하게 하는 방법으로 사용될 수 있으며, 또한 서브 그리드가 구현된다면 해결될 수 있는 문제를 피해 가는 방법이 될 수도 있습니다. 물론, 플랙스박스에서도 비슷하게 `display:` `contents`를 이용해서 중첩된 아이템이 플랙스 아이템처럼 작용하도록 만들 수도 있습니다.

이번 가이드에서 보셨듯이 CSS 그리드 레이아웃은 단지 여러분이 구현해 볼 수 있는 여러 기술 중 한 부분일 뿐입니다. 원하시는 다양한 효과를 얻기 위해서 다른 레이아웃 기술끼리 서로 혼합해서 사용하는 것을 두려워하지 마십시오.

1. [**CSS**](/ko/docs/Web/CSS)
2. [**CSS Reference**](/ko/docs/Web/CSS/Reference)
3. [CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_Grid_Layout)
4. **가이드**

   1. [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃의_기본_개념)
   2. [다른 레이아웃 방법과의 관계](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃과_다른_레이아웃_방법과의_관계)
   3. [라인을 기준으로 한 아이템 배치](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_그리드의_라인을_기준으로_한_아이템_배치)
   4. [그리드 템플릿 영역](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_템플릿_영역)
   5. [이름이 주어진 그리드 라인을 이용한 레이아웃](/ko/docs/Web/CSS/CSS_Grid_Layout/이름이_주어진_그리드_라인을_이용한_레이아웃)
   6. [Auto-placement in grid layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
   7. [Box alignment in grid layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
   8. [Grids, logical values, and writing modes](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
   9. [CSS Grid Layout and Accessibility](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
   10. [CSS Grid Layout and Progressive Enhancement](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
   11. [Realizing common layouts using grids](/ko/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **프로퍼티**

   1. [grid](/ko/docs/Web/CSS/grid)
   2. [grid-area](/ko/docs/Web/CSS/grid-area)
   3. [grid-auto-columns](/ko/docs/Web/CSS/grid-auto-columns)
   4. [grid-auto-flow](/ko/docs/Web/CSS/grid-auto-flow)
   5. [grid-auto-rows](/ko/docs/Web/CSS/grid-auto-rows)
   6. [grid-column](/ko/docs/Web/CSS/grid-column)
   7. [grid-column-end](/ko/docs/Web/CSS/grid-column-end)
   8. [grid-column-gap](/ko/docs/Web/CSS/grid-column-gap)
   9. [grid-column-start](/ko/docs/Web/CSS/grid-column-start)
   10. [grid-gap](/ko/docs/Web/CSS/grid-gap)
   11. [grid-row](/ko/docs/Web/CSS/grid-row)
   12. [grid-row-end](/ko/docs/Web/CSS/grid-row-end)
   13. [grid-row-gap](/ko/docs/Web/CSS/grid-row-gap)
   14. [grid-row-start](/ko/docs/Web/CSS/grid-row-start)
   15. [grid-template](/ko/docs/Web/CSS/grid-template)
   16. [grid-template-areas](/ko/docs/Web/CSS/grid-template-areas)
   17. [grid-template-columns](/ko/docs/Web/CSS/grid-template-columns)
   18. [grid-template-rows](/ko/docs/Web/CSS/grid-template-rows)

6. **용어집**

   1. [Grid](/ko/docs/Glossary/Grid)
   2. [Grid lines](/ko/docs/Glossary/Grid_lines)
   3. [Grid tracks](/ko/docs/Glossary/Grid_tracks)
   4. [Grid cell](/ko/docs/Glossary/Grid_cell)
   5. [Grid areas](/ko/docs/Glossary/Grid_areas)
   6. [Gutters](/ko/docs/Glossary/Gutters)
   7. [Grid Axis](/ko/docs/Glossary/Grid_Axis)
   8. [Grid row](/ko/docs/Glossary/Grid_rows)
   9. [Grid column](/ko/docs/Glossary/Grid_column)
