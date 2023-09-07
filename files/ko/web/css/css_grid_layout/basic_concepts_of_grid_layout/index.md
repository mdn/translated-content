---
title: Basic concepts of grid layout
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
---

[CSS 그리드 레이아웃(Grid Layout)](/ko/docs/Web/CSS/CSS_Grid_Layout)은 CSS에 2차원의 그리드 시스템을 도입했습니다. 그리드는 주요 페이지 영역을 설계하거나 작은 사용자 인터페이스 요소를 배치하는 데 사용할 수 있습니다. 이 문서에서는 CSS 그리드 레이아웃 및 CSS 그리드 레이아웃 레벨 1 명세서에 포함된 새로운 기술 용어를 소개합니다. 이번 개요에 소개된 기능은 나머지 안내 문서에서 자세히 설명합니다.

## 그리드가 무엇인가요?

그리드는 수평선과 수직선이 교차해서 이루어진 집합체입니다 - 하나의 집합체는 세로 열을 그리고 다른 하나는 가로 행을 정의합니다. 각 요소는 이러한 열과 행으로 된 라인을 따라 생성된 그리드에 배치할 수 있습니다. CSS 그리드 레이아웃에는 다음과 같은 기능이 있습니다:

### 고정되거나 혹은 유연한 트랙 크기

예를 들면, 픽셀 단위를 써서 트랙 크기가 고정된 그리드를 만들 수 있습니다. 이렇게 하면, 원하시는 레이아웃에 꼭 맞도록 픽셀 크기를 지정해서 그리드를 설정하실 수 있습니다. 또한, 퍼센트 혹은 이런 목적에 적합하도록 설계된 새로운 `fr` 단위의 가변 크기를 지정해서, 좀 더 유연한 성질의 그리드를 만들 수도 있습니다.

### 아이템 배치

아이템은 라인 번호, 이름 또는 그리드 영역을 지정해서 그리드의 정확한 위치에 배치할 수 있습니다. 그리드는 또 명확하게 위치가 지정되지 않은 아이템을 알아서 적절히 배치하는 알고리즘도 가지고 있습니다.

### 콘텐츠를 담기 위한 추가 트랙의 생성

그리드 레이아웃으로 그리드를 명시적으로 정의할 수 있지만, 지정된 그리드 밖에 따로 추가되는 콘텐츠에 대응하여 필요에 따라 행과 열을 추가할 수 있도록 표준 문서에서 기술하고 있습니다. 일 예로 "컨테이너에 들어갈 수 있는 만큼의 세로 열"을 추가하는 기능이 포함되었습니다.

### 정렬 제어

그리드에는 정렬 기능이 있어서 그리드 영역에 아이템을 배치한 후 어떻게 정렬할지, 그리고 전체 그리드가 정렬되는 방식을 제어할 수 있습니다.

### 겹치는 콘텐츠 제어

그리드 셀에 하나 이상의 아이템을 배치하거나 그리드 영역을 부분적으로 서로 겹치게 할 수 있습니다. 이렇게 생긴 중첩의 우선순위는 나중에 {{cssxref("z-index")}} 프로퍼티로 제어할 수 있습니다.

그리드는 아주 강력한 기능을 담은 표준이라서 [플랙스박스(flexbox)](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout)와 같은 CSS의 다른 부분과 결합하면, 이전에는 CSS에서 불가능했던 레이아웃을 만들 수 있도록 도와줍니다. 이 모든 것은 **그리드 컨테이너**에서 그리드를 생성하는 것부터 시작합니다.

## 그리드 컨테이너

*그리드 컨테이너*는 요소에 `display: grid` 또는 `display: inline-grid`를 선언하여 만듭니다. 이렇게 하면 해당 요소 *바로 밑에 있는 모든 자식 요소*는 *그리드 아이템*이 됩니다.

다음 예제에는 클래스로 wrapper라는 이름을 가진 div이 있고, 안에는 다섯 개의 자식 요소가 있습니다.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

이제 `.wrapper` 요소를 그리드 컨테이너로 지정합니다.

```css
.wrapper {
  display: grid;
}
```

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

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('그리드_컨테이너', '200', '330') }}

바로 밑에 있는 모든 자식 요소는 이제 그리드 아이템이 됩니다. 이렇게 하면 웹 브라우저에서 보이는 모습이 그리드로 전환하기 전과 별 차이가 없는데, 이는 그리드가 우선 아이템을 단일 열 형태의 구조를 가진 그리드를 생성하였기 때문입니다. 이 시점에서 Firefox Developer Edition에서 작업하는 것이 유용하실 텐데, 여기엔 개발자 도구의 일부로 [Grid Inspector](/ko/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) 기능을 제공합니다. Firefox에서 이 예제의 그리드를 검사해보면, `grid` 값 바로 옆에 작은 아이콘이 보이실 겁니다. 이 아이콘을 클릭하면 해당 요소의 그리드가 브라우저 창 위에 중첩되어 표시됩니다.

![그리드를 살펴보기 위해 개발자 도구에 있는 그리드 하이라이터를 사용하는 모습](1-grid-inspector.png)

CSS 그리드 레이아웃을 배우면서 작업하실 때 이 도구를 사용하면 그리드에서 발생하는 상황을 시각적으로 더 잘 파악하실 수 있습니다.

이제 이것을 전형적인 그리드 형태의 모양으로 만들어 주려면 세로 방향의 트랙을 더 추가하면 됩니다.

## 그리드 트랙

그리드의 행과 열은 {{cssxref("grid-template-columns")}} 및 {{cssxref("grid-template-rows")}} 프로퍼티로 정의합니다. 이렇게 하면, 그리드 트랙도 함께 정의됩니다. *그리드 트랙*은 그리드에 그려진 두 라인 사이의 공간을 나타냅니다. 아래 그림에서는 그리드의 첫 번째 가로 행에 놓여있는 트랙이 돋보이게 표시된 것을 확인하실 수 있습니다.

![](1_grid_track.png)

앞의 예제에서 `grid-template-columns` 프로퍼티를 추가하고 세로 열에 놓이게 될 트랙의 크기를 정의해 줍니다.

이제 200픽셀의 너비를 가진 세로 열 방향의 트랙 세 개를 생성합니다. 자식 아이템들은 이제 그리드에 있는 각자의 그리드 셀 위에 배치됩니다.

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
  grid-template-columns: 200px 200px 200px;
}
```

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

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('grid_first', '610', '140') }}

### fr 단위

트랙은 모든 종류의 길이 단위를 써서 정의할 수 있습니다. 또한, 그리드에는 유연한 크기의 그리드 트랙을 생성하는 데 사용할 수 있는 단위를 추가로 소개하고 있습니다. 새로 소개된 `fr` 단위는 그리드 컨테이너에 남아 있는 사용 가능한 공간의 일정 비율을 나타냅니다. 다음에 정의된 그리드에서는 남아 있는 공간에 따라 확장 및 축소되는 같은 너비의 트랙 3개를 생성합니다.

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
  grid-template-columns: 1fr 1fr 1fr;
}
```

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

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('fr_unit_ls', '220', '140') }}

다음 예제에서는 `2fr` 크기의 트랙 하나와 `1fr` 트랙 두 개를 지정하였습니다. 사용 가능한 공간은 4개로 나뉘면서, 공간 두 개는 첫 번째 트랙에 제공하고 나머지 공간 한 부분씩을 다음 두 트랙에 각각 제공합니다.

```css
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

이번 마지막 예에서는 고정된 크기의 트랙과 비율 단위로 지정한 트랙이 섞여 있습니다. 첫 번째 트랙은 500픽셀의 공간을 차지하므로 이 고정 너비는 사용 가능한 공간에서 제외됩니다. 나머지 공간은 3개의 부분으로 나뉘며 2개의 유연한 트랙에 비율에 맞게 할당됩니다.

```css
.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
```

### `repeat()` 표기법으로 트랙 나열

많은 트랙을 포함하는 커다란 그리드는 `repeat()` 표기법을 사용하여 트랙의 전체 또는 일부분을 반복해서 나열해 줄 수 있습니다. 예를 들어 다음과 같이 정의된 그리드의 경우:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

다음과 같이 작성할 수도 있습니다:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

반복 표기법은 트랙의 목록 중 일부분에만 사용할 수도 있습니다. 아래 예제에서는 처음엔 20픽셀 크기의 트랙을 생성하고 다음에 `1fr` 크기의 트랙을 6번 반복해서 채운 후 마지막에 20픽셀 트랙을 붙여서 그리드를 완성합니다.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

반복 표기법은 트랙의 목록도 함께 나열해서 지정할 수 있는데, 이렇게 하면 트랙의 반복 패턴을 생성해서 사용하게 됩니다. 다음 예제는 그리드가 10개의 트랙으로 구성되어 있으며, `1fr` 크기의 트랙 다음에 `2fr` 크기 트랙이 위치하고, 이 형태가 5회 반복됩니다.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### 잠재적 그리고 명시적 그리드

지금까지는 그리드 예제를 만들 때마다 {{cssxref("grid-template-columns")}} 프로퍼티를 써서 세로 열의 트랙을 정의해 주었습니다만, 가로 행은 그리드가 콘텐츠에 맞게 알아서 새로운 행을 만들도록 했습니다. 이렇게 만들어진 행은 잠재적 그리드 안에서 생성됩니다. 명시적 그리드는 {{cssxref("grid-template-columns")}} 및 {{cssxref("grid-template-rows")}}로 직접 정의한 행과 열로 이루어진 그리드를 말합니다. 만약에 이렇게 정의된 그리드 밖에 무언가를 배치할 땐, 늘어난 콘텐츠 양 때문에 더 많은 그리드 트랙이 필요하고, 그리드는 잠재적 그리드에 새로운 행과 열을 만들게 됩니다. 이렇게 해서 생긴 트랙은 기본적으로 크기가 자동으로 정해지는데, 트랙 내부의 내용물에 따라 크기가 조정됩니다.

물론 잠재적 그리드에서 생성된 트랙의 크기는 {{cssxref("grid-auto-rows")}} 및 {{cssxref("grid-auto-columns")}} 프로퍼티를 써서 지정해줄 수도 있습니다.

아래 예제에서는 잠재적 그리드에서 생성된 트랙의 높이가 반드시 200픽셀이 되도록 `grid-auto-rows`를 사용하여 하였습니다.

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
  grid-auto-rows: 200px;
}
```

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

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('잠재적_그리고_명시적_그리드', '230', '420') }}

### 트랙 크기 조정과 `minmax()`

명시적 그리드를 설정하거나 자동으로 생성된 행이나 열의 크기를 정의할 때, 트랙의 최소 크기를 정해도 나중에 추가되는 콘텐츠에 맞게 늘어나도록 하고 싶을 때가 있을 겁니다. 예를 들면, 가로 행의 높이가 100픽셀 밑으로 줄어드는 것은 막고 싶지만, 콘텐츠가 300픽셀 높이까지 늘어나면 그에 따라 행의 높이도 같이 늘어나길 원할 때가 있습니다.

이런 경우를 고려해서 그리드는 {{cssxref("minmax", "minmax()")}} 함수를 제공하고 있습니다. 다음 예제에서는 {{cssxref("grid-auto-rows")}} 값에 `minmax()` 를 사용하였습니다. 자동으로 생성된 행의 높이는 최소 100픽셀이고 최댓값은 `auto`입니다. `auto`를 지정하면 크기는 콘텐츠의 크기를 살피게 되는데, 가로 행에 있는 가장 높은 셀의 크기만큼 자동으로 늘어나서 부족한 공간을 메꿔줍니다.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

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

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>
    Two
    <p>I have some more content in.</p>
    <p>This makes me taller than 100 pixels.</p>
  </div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('트랙_크기_조정과_minmax()', '240', '470') }}

## 그리드 라인

그리드를 정의할 때 라인이 아닌 그리드 트랙을 정의한다는 점을 명심해야 합니다. 그러면 그리드는 아이템을 배치할 때 쓸 수 있게 번호가 매겨진 라인을 자동으로 제공합니다. 아래 그림처럼, 그리드가 세 개의 세로 열(Column)과 두 개의 가로 행(Row)으로 이루어져 있다면, 네 개의 Grid Line이 Column으로 자리 잡게 됩니다.

![번호가 매겨진 그리드 라인을 보여주는 다이어그램.](1_diagram_numbered_grid_lines.png)

라인은 문서의 작성 모드에 따라 번호가 매겨집니다. 왼쪽에서 오른쪽으로 쓰는 언어에서는 라인 1이 그리드의 왼쪽에 있습니다. 반대로 오른쪽에서 왼쪽으로 쓰는 언어에서는 그리드의 오른쪽에 있게 됩니다. 또한, 라인에 이름도 지정할 수 있으며, 자세한 방법은 이 시리즈의 후반부에서 살펴보겠습니다.

### 라인을 이용한 아이템 배치

라인에 기반을 둔 배치 방법에 대해서는 다음에 더 자세히 탐구해 볼 예정입니다. 이번 예제에서는 아주 간단한 방법을 알아보겠습니다. 아이템을 배치할 때 트랙이 아닌 라인의 관점에서 정의해 보겠습니다.

아래 예제에선 처음 두 개의 아이템을 세 개의 열 방향 트랙으로 구성된 그리드 위에 {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} 그리고 {{cssxref("grid-row-end")}} 프로퍼티를 써서 배치합니다. 왼쪽에서 오른쪽으로 작업하면서, 첫 번째 아이템은 세로 열 방향의 1번 라인에 배치되고 세로 열 방향 4번 라인까지 확장됩니다. 이 경우에는 그리드의 맨 오른쪽 라인까지 해당합니다. 그리고 가로 방향의 라인을 기준으로 1번 라인부터 시작해서 행 3번 라인까지 차지하면서 결국, 두 개의 가로 행 트랙을 가로질러 걸치게 됩니다.

두 번째 아이템은 그리드 세로 열의 1번 라인에서 시작해서 트랙 하나에 걸쳐 있습니다. 여기엔 기본값을 사용해서 마지막 라인은 지정할 필요가 없습니다. 가로 행 방향 라인을 기준으로 3번의 라인부터 5번 라인까지 두 개의 가로 행 트랙에 걸쳐 있습니다. 나머지 아이템은 그리드 빈 자라에 자동으로 배치됩니다.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

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

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('라인을_이용한_아이템_배치', '230', '420') }}

파이어폭스 개발자 도구에 있는 [Grid Inspector](/ko/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)를 사용하면 아이템이 그리드 라인에 어떻게 배치되어 있는지 이해하기 훨씬 쉽다는 점도 잊지 마십시오.

## 그리드 셀

*그리드 셀*은 그리드에 있는 가장 작은 구성원입니다. 개념상 테이블에 있는 셀과 비슷합니다. 앞의 예제에서 보셨듯이, 부모 요소에 그리드를 정의하면 자식 아이템은 지정된 그리드 셀에 각자 하나씩 나열되어 배치됩니다. 아래 그림에서는 그리드의 첫 번째 셀을 강조 표시했습니다.

![강조 표시된 그리드의 첫 번째 셀](1_grid_cell.png)

## 그리드 영역

아이템은 행 또는 열 방향 어느 쪽으로든 하나 이상의 셀에 걸쳐있을 수 있으며 이렇게 해서 *그리드 영역*을 만듭니다. 그리드 영역은 직사각형이어야 하며, 예를 들어 L 자 형태의 영역을 생성할 수 없습니다. 아래 강조 표시된 그리드 영역은 2개의 행과 2개의 열 트랙에 걸쳐 있습니다.

![그리드 영역의 예](1_grid_area.png)

## 경계 여백

그리드 셀 사이의 _경계 여백_ 혹은 _간격은_ {{cssxref("grid-column-gap")}} 및 {{cssxref("grid-row-gap")}} 프로퍼티를 지정해서 생성할 수 있으며, 짧게 {{cssxref("grid-gap")}}으로 지정할 수도 있습니다. 아래의 예제에서는 세로 열 사이의 간격은 10픽셀이고 가로 행 사이의 간격은 `1em`입니다.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
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

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('경계_여백') }}

간격이 차지하는 공간은 길이가 유연한 `fr` 단위로 지정한 트랙에 할당하기 전에 우선 고려되어 배분됩니다. 그래서 일반 그리드 트랙처럼 간격은 크기 조정의 목적으로 활용될 수 있으나, 이 공간에는 아무것도 배치할 수 없습니다. 라인 기반 위치 지정 측면에선 간격은 그저 굵은 선처럼 작용합니다.

## 중첩 그리드

그리드 아이템은 자기 자신이 그리드 컨테이너가 될 수도 있습니다. 다음 예제는 이전에 생성했던 3개의 세로 열로 구성된 그리드가 있으며, 여기에 따로 위치가 지정된 두 개의 아이템을 배치해 놓은 모습입니다. 이번 경우엔 첫 번째 아이템이 몇 개의 하위 아이템을 포함하고 있습니다. 이 아이템들은 그리드 바로 밑에 있는 요소가 아니므로 그리드 레이아웃에 관여하지 않고 정상적인 문서 흐름에 따라 표시됩니다.

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

![문서 흐름에 따라 표시된 중첩 그리드](1_nested_grids_in_flow.png)

만약에 `box1에` `display: grid를` 설정하면, 여기에 트랙을 정의할 수 있게 되면서 또 하나의 그리드를 생성하게 됩니다. 이렇게 해서 그 밑의 아이템들은 새 그리드 정의에 따라 배치됩니다.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

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

{{ EmbedLiveSample('중첩_그리드', '600', '340') }}

이 경우 중첩된 그리드는 상위 부모 요소의 그리드와 아무런 관계가 없습니다. 예제에서 볼 수 있듯이 부모 요소의 {{cssxref("grid-gap")}}을 그대로 물려받지 않았고, 중첩된 그리드의 라인은 부모 요소의 그리드 라인과도 일렬로 정렬되지 않은 것을 확인하실 수 있습니다.

### 서브 그리드

레벨 1 그리드 표준에는 *서브 그리드(subgrid)*라는 기능이 있어서 부모 요소에 있는 그리드 트랙의 정의를 중첩된 그리드에도 적용해서 생성할 수 있도록 하였습니다.

> **참고:** 서브 그리드는 아직 모든 브라우저에서 구현되지 않았고 나중에 표준이 변경될 수도 있습니다.

최근 작성된 표준에 따르면, 위 중첩 그리드 예시에 썼던 `display: grid` 대신 `display: subgrid`를 써주고 트랙의 정의는 제거합니다. 이렇게 하면 중첩된 그리드는 부모 요소의 그리드 트랙을 그대로 참고해서 아이템을 배치하게 됩니다.

중첩된 그리드는 행과 열 모두에 걸쳐 있음을 유의해야 합니다. 서브 그리드를 작업할 때는 잠재적 그리드의 개념을 적용할 수 없습니다. 즉, 부모 요소의 그리드에 모든 하위 아이템들을 담을 만큼의 충분한 행과 열의 트랙이 있는지 꼭 확인해야 합니다.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: subgrid;
}
```

## `z-index`를 이용한 아이템 중첩도 조정

그리드 아이템은 서로 같은 셀을 차지할 수 있습니다. 앞서 라인 번호로 아이템의 위치를 지정했던 예제로 돌아가서, 여기에 다음과 같이 두 아이템이 서로 자리가 겹치도록 수정합니다.

```html
<div class="wrapper">
  <div class="box box1">One</div>
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
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

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

{{ EmbedLiveSample('l_ex', '230', '420') }}

`box2` 아이템은 이제 `box1`과 겹치게 되고, 소스 순서에서 나중에 위치하므로 맨 위에 표시됩니다.

### 중첩의 순서 조정

위치를 따로 지정한 아이템과 마찬가지로, 아이템이 위아래로 중첩되는 순서는 `z-index` 프로퍼티를 써서 제어할 수 있습니다. 만약에 `box2`에 `box1` 보다 더 낮은 `z-index`를 지정하면 `box1` 아래로 중첩되어 표시됩니다.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 2;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  z-index: 1;
}
```

```html hidden
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

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

{{ EmbedLiveSample('중첩의_순서_조정', '230', '420') }}

## 다음 단계

이 글에서는 Grid 레이아웃 표준 문서에 나와 있는 내용을 아주 간단히 살펴보았습니다. 코드 예제를 좀 더 연구해 보시고, [안내서의 다음 부분으로 넘어가서 CSS 그리드 레이아웃의 세부 사항을 조금 더 심도 있게 살펴보시기 바랍니다](/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃과_다른_레이아웃_방법과의_관계).

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
   8. [Grids, logical values and writing modes](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
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
