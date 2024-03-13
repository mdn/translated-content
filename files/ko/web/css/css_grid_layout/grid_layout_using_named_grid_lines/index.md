---
title: Layout using named grid lines
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
---

이전 가이드에선 그리드 트랙을 정의하면 생성되는 라인을 사용해서 아이템을 배치하는 법을 살펴보았으며, 또한 이름이 명명된 템플릿 영역을 가지고 어떻게 아이템들을 배치하는지도 알아보았습니다. 이번 가이드에선 이름이 주어진 라인을 쓰는 상황에서 이 두 가지 방법이 서로 어떻게 작용하는지 알아보겠습니다. 라인에 이름을 지어 주는 것이 매우 유용할 때도 있지만, 이름과 트랙 크기가 혼합돼서 사용되는 그리드 용법을 보고 있으면 매우 헷갈릴 수도 있습니다. 하지만 몇 가지 예제를 가지고 작업해 보시면 점점 명확해지면서 나중엔 작업하기도 훨씬 수월해지실 겁니다.

## 그리드를 정의할 때 라인의 이름 짓는 법

`grid-template-rows` 그리고 `grid-template-columns` 프로퍼티로 그리드를 정의할 때 그리드에 있는 모든 라인 혹은 일부 라인들에 이름을 지어 줄 수 있습니다. 본보기로 라인을 기준으로 아이템을 배치하는 방법을 설명한 가이드에서 만들었던 간단한 레이아웃을 예로 들어 보겠습니다. 이번엔 이름이 주어진 라인을 써서 그리드를 만들 겁니다.

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

그리드를 정의할 때, 그리드 라인의 이름은 대괄호 안에 적어줍니다. 여기서 라인 이름은 원하시는 것 아무거나 다 괜찮습니다. 여기선 컨테이너를 감싸는 행과 열 방향의 시작과 끝 라인 모두의 이름을 정의해 주었습니다. 그리드에 있는 모든 라인의 이름을 다 붙여줄 필요는 없습니다만, 그리드 가운데에 있는 블록의 행과 열 방향의 라인 이름을 `content-start` 그리고 `content-end`라는 이름을 정의해 주었습니다. 이런 식으로 레이아웃의 몇몇 주요 라인들에만 이름을 붙여주시면 됩니다.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

이렇게 라인들에 이름을 짓고 나면, 라인 번호 대신에 이름을 써서 아이템을 배치할 수 있게 됩니다.

```css
.box1 {
  grid-column-start: main-start;
  grid-row-start: main-start;
  grid-row-end: main-end;
}

.box2 {
  grid-column-start: content-end;
  grid-row-start: main-start;
  grid-row-end: content-end;
}

.box3 {
  grid-column-start: content-start;
  grid-row-start: main-start;
}

.box4 {
  grid-column-start: content-start;
  grid-column-end: main-end;
  grid-row-start: content-end;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('example_named_lines', '500', '330') }}

라인을 기준으로 배치할 때 적용할 수 있는 다른 모든 사항은 여기서도 똑같은 방식으로 작동하며 이름이 주어진 라인과 라인 번호를 섞어서 사용하실 수도 있습니다. 이름이 주어진 라인의 사용은 그리드를 재정의하는 반응형 디자인을 만들고자 할 때, 미디어 쿼리에서 라인 번호를 바꿔가면서 일일이 콘텐츠의 위치를 다시 정의해 줄 필요가 없다는 장점이 있습니다. 다만, 그리드를 정의할 때 라인의 이름은 항상 같은 것을 사용하도록 주의해야 합니다.

### 라인에 여러 개의 이름 지어주기

라인의 이름을 정할 때 하나 이상의 이름을 붙여주고 싶을 때가 있는데, 예를 들어 sidebar-end 그리고 main-start를 함께 표기하고자 할 때가 있습니다. 이럴 땐 `[sidebar-end main-start]`처럼 대괄호 안에서 공백을 사이에 두고 이름을 추가해 주면 됩니다. 그러면 해당 라인은 둘 중 아무 이름을 써도 같은 것을 가리키게 됩니다.

## 이름이 주어진 라인으로 만들어지는 잠재적 그리드 영역

라인의 이름을 지어줄 때는 원하시는 이름 아무거나 붙여주셔도 된다고 말씀드린 바 있습니다. 여기에 붙이는 이름은 [custom ident](https://drafts.csswg.org/css-values-4/#custom-idents)로서, 저자가 정의해 준 이름이 됩니다. 이름을 지을 때 명세서에 나타날 수 있는 단어는 피하시는 게 좋으며 `span`과 같이 혼동을 줄 수 있는 것도 사용하지 말아야 합니다. 그리고 이름에 따옴표가 포함되면 안 됩니다.

이름은 아무거나 선택하실 수 있지만, 위 예제에 나와 있는 것처럼 만약에 영역 주변에 있는 라인의 이름 끝에 `-start` 혹은 `-end`를 붙이면, 그리드는 전체 이름 중 꼬리 부분을 뗀 주요 이름만으로 명명된 영역을 생성하게 됩니다. 위 예제에선, 열과 행의 라인 모두 `content-start`와 `content-end`라는 이름이 주어져 있습니다. 이 말은 `content`라는 이름의 영역이 자동으로 만들어 지면서, 원하시면 어떠한 요소든 해당 영역에 이 이름을 써서 배치할 수 있게 된다는 뜻입니다.

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

다음 예제에선 위에서와 똑 같은 그리드를 정의해 주었지만, 이번엔 `content`라는 이름을 가진 영역에 하나의 아이템을 배치하였습니다.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
.thing {
  grid-area: content;
}
```

```html
<div class="wrapper">
  <div class="thing">I am placed in an area named content.</div>
</div>
```

{{ EmbedLiveSample('implicit_areas_from_lines', '500', '330') }}

여기선 라인의 이름을 지어 주면서 해당 라인이 감싸는 영역이 자동으로 만들어졌기 때문에, `grid-template-areas`를 써서 영역의 위치를 일일이 정의해 줄 필요가 없습니다.

## 이름이 주어진 영역으로 만들어지는 잠재적 그리드 라인

지금까지 라인에 이름을 지어 주면 어떻게 해당 이름으로 된 영역도 함께 만들어지는지 살펴보았으며, 이는 역으로도 작용합니다. 이름이 주어진 템플릿 영역은 그에 어울리는 이름이 붙여진 라인을 생성하면서, 이를 이용해서 아이템을 배치할 수 있게 됩니다. 이전 그리드 템플릿 영역에 관한 가이드에서 만들었던 레이아웃을 그대로 가져와서, 여기에 영역을 지정해서 만들어진 라인을 써서 레이아웃에 적용해 본다면 이것이 어떻게 작동하는지 쉽게 이해하실 수 있을 겁니다.

다음 예제에선 `overlay`라는 이름의 클래스를 지정한 추가 div 요소를 더하였습니다. `grid-area` 프로퍼티를 써서 이름이 주어진 영역을 생성하였고, `grid-template-areas` 프로퍼티에서 레이아웃을 정의해 주었습니다. 영역의 이름은 다음과 같습니다:

- `hd`
- `ft`
- `main`
- `sd`

이렇게 해서 만들어진 열과 행 라인의 이름은 다음과 같습니다:

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

이름이 주어진 라인의 모습은 아래 그림에서 확인할 수 있는데, 몇몇 라인들은 두 개의 이름을 가지고 있는 것을 확인하실 수 있습니다. 예를 들면, `sd-end`와 `main-start`는 같은 열 방향의 라인을 가리키고 있습니다.

![An image showing the implicit line names created by our grid areas.](5_multiple_lines_from_areas.png)

여기서 잠재적으로 이름이 주어진 라인을 써서 `overlay` 요소를 배치하는 방법은 이름을 직접 지정한 라인을 써서 아이템을 배치하는 방법과 똑같습니다.

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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}

.header {
  grid-area: hd;
}

.footer {
  grid-area: ft;
}

.content {
  grid-area: main;
}

.sidebar {
  grid-area: sd;
}

.wrapper > div.overlay {
  z-index: 10;
  grid-column: main-start / main-end;
  grid-row: hd-start / ft-end;
  border: 4px solid rgb(92, 148, 13);
  background-color: rgba(92, 148, 13, 0.4);
  color: rgb(92, 148, 13);
  font-size: 150%;
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
  <div class="overlay">Overlay</div>
</div>
```

{{ EmbedLiveSample('implicit_lines_from_area', '500', '330') }}

이름이 주어진 영역으로부터 라인이 생성되고 또 라인에 이름을 정해주면 거기에 맞는 영역이 만들어지면서, 이를 이용해 아이템을 배치할 수 있다는 점을 고려한다면, 그리드 레이아웃을 만들기 시작할 때 미리 계획해서 이름을 정하는 데 약간의 시간을 할애할 가치가 있음을 알 수 있습니다. 이름을 선택할 때 자신과 자기 팀원들 모두가 쉽게 이해할 수 있는 것으로 정한다면 모두에게 여러분이 만든 레이아웃을 쉽게 이용하는 데 도움을 줄 수 있을 것입니다.

## repeat()을 써서 같은 이름을 가진 여러 개의 라인 만들기

만약에 그리드에 있는 모든 라인에 독자적인 이름을 지어 주길 원하신다면, 트랙을 정의할 때 반복 용법을 사용하는 대신 대괄호 안에다 이름을 일일이 추가해줘야 해서 약간 장황하게 트랙의 정의를 작성하셔야 합니다. 반복 용법을 사용하게 되면 여러 라인이 같은 이름을 갖게 되는데, 이 또한 매우 유용할 수도 있습니다.

다음 예제에서는 같은 너비를 가진 열두 개의 열로 구성된 그리드를 생성합니다. 여기선 1fr 너비의 열 트랙을 정의하기 전에 `[col-start]`라는 라인 이름을 함께 정의해 주었습니다. 이렇게 하면 `1fr` 너비의 세로 열 전면에 똑같이 `col-start`라는 이름이 주어진 12개의 열 방향의 라인으로 구성된 그리드를 만들게 됩니다.

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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

이렇게 그리드를 생성하고 나면 여기에다 아이템을 배치할 수 있게 됩니다. 여러 개의 라인 이름을 `col-start`라는 이름으로 지어 주었기 때문에 `col-start` 라인을 기준 시작 지점으로 아이템을 배치하게 되면 그리드는 첫 번째에 있는 `col-start`라는 이름의 라인을 사용하게 되는데, 여기선 맨 왼쪽에 있는 라인이 여기에 해당합니다. 또 다른 라인을 가리키려면 이름과 함께 해당 라인의 번호를 더해주면 됩니다. 아이템을 `col-start`라는 이름의 첫 번째 라인으로부터 다섯 번째 라인까지 걸치도록 배치하려면 다음과 같이 정의해 줍니다:

```css
.item1 {
  grid-column: col-start / col-start 5;
}
```

또한, 여기선 `span` 키워드를 쓰실 수도 있습니다. 다음 아이템은 `col-start` 이름을 가진 일곱 번째 라인부터 세 개의 라인에 걸치도록 배치하였습니다.

```css
.item2 {
  grid-column: col-start 7 / span 3;
}
```

<p class="brush: html"></p>

```html
<div class="wrapper">
  <div class="item1">I am placed from col-start line 1 to col-start 5</div>
  <div class="item2">I am placed from col-start line 7 spanning 3 lines</div>
</div>
```

{{ EmbedLiveSample('multiple_lines_same_name', '500', '330') }}

이 레이아웃을 Firefox Grid Highlighter에서 살펴보면 세로 열 라인이 어떻게 구성되어 있는지 그리고 또 아이템들이 이 라인들에 따라 어떻게 배치되었는지 확인하실 수 있습니다.

![The 12 column grid with items placed. The Grid Highlighter shows the position of the lines.](5_named_lines1.png)

반복 용법은 또한 트랙의 목록을 나열해서 사용할 수 있으며, 오직 하나의 트랙 크기만 반복하도록 쓰실 필요는 없습니다. 아래의 코드는 여덟 개의 트랙으로 구성된 그리드를 만드는데, 상대적으로 더 좁은 `1fr` 너비의 `col1-start`라는 라인 이름이 지정된 세로 열 트랙 다음으로 `3fr` 너비의 `col2-start`라는 라인 이름이 지정된 세로 열 트랙으로 구성되어 있습니다.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

만약에 반복 용법에 사용된 두 개의 라인이 서로 겹치게 된다면 그 둘은 나중에 하나로 합쳐지는데, 이는 반복 용법을 쓰지 않고 트랙을 정의할 때 하나의 라인에 여러 개의 이름을 지정해 주는 것과 똑같은 결과를 만들어 냅니다. 다음 정의에선 `1fr` 너비의 트랙 네 개를 생성하는데, 각 트랙은 서로 시작과 마지막을 지점에 있는 라인을 갖게 됩니다.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

반복 표기법을 쓰지 않고 이번에 정의한 것과 같도록 작성해 준다면 다음과 같이 써줄 수 있습니다.

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

트랙 목록을 사용했다면 `span` 키워드를 써서, 단지 몇 개의 라인들을 걸치게 할지 정해줄 뿐만 아니라, 특정 이름의 라인 몇 개를 걸쳐서 자리를 잡게 할지도 정해 줄 수 있습니다.

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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(6, [col1-start] 1fr [col2-start] 3fr);
}

.item1 {
  grid-column: col1-start / col2-start 2;
}

.item2 {
  grid-row: 2;
  grid-column: col1-start 2 / span 2 col1-start;
}
```

```html
<div class="wrapper">
  <div class="item1">
    I am placed from col1-start line 1 to col2-start line 2
  </div>
  <div class="item2">
    I am placed from col1-start line 2 spanning 2 lines named col1-start
  </div>
</div>
```

{{ EmbedLiveSample('span_line_number', '500', '330') }}

최근 세 개의 가이드를 통해서 여러분은 그리드를 이용해 아이템을 배치하는 방법이 아주 다양하다는 것을 발견하셨을 겁니다. 처음엔 이것이 너무 복잡하다고 느끼실 수도 있겠지만, 이 모든 것을 다 이해하고 사용하실 필요는 없다는 점을 기억하시기 바랍니다. 실상황에서 간단하고 명확한 레이아웃을 구현할 경우에는 이름이 지명된 템플릿 영역을 쓰는 것이 적당할 것입니다. 이것은 레이아웃이 어떤 모습을 보여줄지 시각적으로 좋은 묘사를 제공하며, 또한 그리드에 있는 아이템을 이리저리 쉽게 옮길 수도 있습니다.

또한, 예를 들어 만약에 다중 칼럼에 꼭 들어맞는 레이아웃을 가지고 작업할 때는 이 가이드 마지막 부분에서 설명한 이름이 지정된 라인들을 사용했던 그리드가 제격입니다. 만약에 Foundation 혹은 Boostrap과 같은 프레임워크에서 채용한 그리드 시스템을 고려하신다면, 이들은 12개의 세로 열 그리드를 기준으로 하고 있습니다. 프레임워크에서는 세로 열을 모두 합쳐 최대 100%를 차지하도록 하는 모든 계산이 코드 속에 포함되어 있습니다. 하지만, 그리드 레이아웃에서 이 그리드 "프레임워크"를 구현하는데 필요한 코드는 아래처럼 아주 간단하게 작성할 수 있습니다:

```css
.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

그러면 페이지 레이아웃에 이 프레임워크를 그대로 가져다 쓰실 수 있습니다. 예를 들어, 헤더와 푸터가 있는 세 개의 세로 열 레이아웃을 구현한다면 아래와 같은 마크업을 작성할 수 있습니다.

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > * {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <header class="main-header">I am the header</header>
  <aside class="side1">I am sidebar 1</aside>
  <article class="content">I am the main article</article>
  <aside class="side2">I am sidebar 2</aside>
  <footer class="main-footer">I am the footer</footer>
</div>
```

그러면 이것을 이번에 작성한 그리드 레이아웃 프레임워크를 써서 다음과 같이 배치할 수 있습니다.

```css
.main-header,
.main-footer {
  grid-column: col-start / span 12;
}

.side1 {
  grid-column: col-start / span 3;
  grid-row: 2;
}

.content {
  grid-column: col-start 4 / span 6;
  grid-row: 2;
}

.side2 {
  grid-column: col-start 10 / span 3;
  grid-row: 2;
}
```

{{ EmbedLiveSample('three_column', '500', '330') }}

다시 한번 말씀드리지만, Firefox Grid Highlighter는 지금까지 우리가 배치했던 아이템들이 그리드 위에 어떻게 놓였는지 확인할 때 아주 유용하답니다.

<img alt="The layout with the grid highlighted." src="5_named_lines2.png" style="height: 378px; width: 1958px;">

필요한 건 이게 전부 다입니다. 복잡한 계산 작업도 필요하지 않고, 그리드가 1fr 크기의 세로 열 트랙에 공간을 할당하기 전에, 자동으로 10픽셀 크기의 경계 여백 트랙이 차지하는 공간을 알아서 제거해 줍니다. 차차 여러분만의 레이아웃을 만들다 보면, 용법에 점점 더 익숙해 지면서 자기에게 맞는 작업 방식을 터득하게 되고, 나중에 만들고자 하는 프로젝트의 유형에 따라 적당한 것을 고를 수 있는 요령이 생기게 되실 겁니다. 우선은 지금까지 소개된 여러 방법들을 가지고 몇몇 자주 쓰이는 레이아웃의 형태들을 만들어 보신다면, 아마도 곧 가장 효율적인 자기만의 작업 방식을 찾으실 수 있을 겁니다. 그러면, 다음 가이드에선 배치 관련 프로퍼티를 전혀 쓰지 않고도 아이템들이 그리드 위에 알아서 배치되도록 만드는 방법을 알아보겠습니다.

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
