---
title: Grid template areas
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
---

[이전 가이드](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_그리드의_라인을_기준으로_한_아이템_배치)에서 우리는 그리드 라인에 대해서 살펴보았으며, 이 라인을 기준으로 어떻게 아이템들을 배치하는지 알아보았습니다. CSS 그리드 레이아웃으로 작업할 땐 거기엔 항상 라인이 있을 것이고, 이것은 아이템들을 그리드에 배치할 때 사용할 수 있는 아주 직관적인 방법이 될 수 있습니다. 그렇지만, 아이템을 그리드에 배치할 때 사용할 수 있는 또 다른 방법이 있는데, 이것은 독자적으로 혹은 라인 기준 배치 방법과 함께 혼용해서 사용할 수 있습니다. 이 방법은 이름이 지명된 템플릿 영역을 사용하여 아이템을 배치하는 작업과 연관돼 있으며, 이 방법이 정확히 어떻게 작동하는지 알아보겠습니다. 이것이 때때로 왜 그리드 레이아웃의 ascii-art 방식이라고 일컬어지는지 쉽게 눈치채실 수 있을 겁니다!

## 그리드 영역의 이름 짓기

여러분은 이미 {{cssxref("grid-area")}} 프로퍼티와 마주친 적이 있을 겁니다. 이 프로퍼티는 그리드 영역의 위치를 잡는데 사용되는 모두 네 개의 라인 값을 취합니다.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

이렇게 모두 네 개의 라인을 정의하는 작업은, 영역을 둘러싸는 라인을 지정해서 해당 영역이 차지하게 될 자리를 정의해 주는 것이라 할 수 있습니다.

![라인으로 정의된 그리드 영역](4_area.png)

이와 더불어서, 각 영역에 이름을 붙여서 정의할 수도 있으며, 각 영역의 위치는 {{cssxref("grid-template-areas")}} 프로퍼티의 값을 지정해서 정의할 수 있습니다. 영역의 이름은 원하시는 것 아무거나 선택해서 사용하실 수 있습니다. 예를 들어, 아래에 보이는 레이아웃을 만들고자 할 때, 다음과 같이 네 개의 주요 영역으로 구분할 수 있습니다.

- a header
- a footer
- a sidebar
- the main content

![단순하게 헤더와 푸터가 있는 두 개의 열로 구성된 레이아웃을 보여주는 그림](4_layout.png)

여기서 각 영역의 이름은 {{cssxref("grid-area")}} 프로퍼티로 지정할 수 있습니다. 이것은 아직 아무런 레이아웃도 생성하지 않지만, 이렇게 해서 레이아웃에 사용될 영역의 이름을 갖게 됩니다.

```css
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
```

이제 영역의 이름들을 정의하였으니 다음엔 원하는 레이아웃을 생성할 차례입니다. 이번엔, 아이템에 직접 지정된 라인 번호를 써서 아이템을 배치하는 대신에, 전체 레이아웃을 그리드 컨테이너에서 정의해 줍니다.

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
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('Grid_Area_1', '300', '330') }}

이 방법을 쓰면 각각의 그리드 아이템들에 아무것도 지정해 줄 필요가 없으며, 그리드 컨테이너에서 모든 작업이 이루어집니다. 보셨다시피, 레이아웃은 {{cssxref("grid-template-areas")}} 프로퍼티의 값으로 기술됩니다.

## 그리드 셀 비워두기

먼젓번 예제에서는, 그리드의 모든 곳이 빈 곳 없이 영역들로 채워져 있습니다. 하지만, 다음에 소개될 레이아웃 방법을 써서 특정 그리드 셀이 공간으로 채워지도록 만들 수도 있습니다. 셀을 공간으로 남겨두려면 마침표 글자(`.`)를 사용하시면 됩니다. 예제 중 footer 부분을 main으로 표시된 콘텐츠 바로 아래에만 표시되도록 하려면, sidebar 밑에 있는 세 개의 셀을 비워두면 됩니다.

```css
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
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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
    ".  .  .  ft   ft   ft   ft   ft   ft";
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('그리드_셀_비워두기', '300', '330') }}

위 예제에서 레이아웃 정의 부분을 더 깔끔하게 보이도록 하려면 여러 개의 `.` 글자를 사용할 수도 있습니다. 여기서 마침표 사이가 하얀 공간으로 서로 띄워져 있지 않은 한 오직 하나의 셀로 계산됩니다. 아주 복잡한 레이아웃의 경우, 행과 열이 깔끔하게 정렬돼 있다면 훨씬 이해하기 쉬운 장점이 있을 겁니다. 이렇게 하면, CSS를 작업하면서 실제 레이아웃이 어떤 모습으로 보일지 쉽게 눈으로 확인하실 수도 있다는 뜻입니다.

## 다중 셀에 걸쳐 확장하기

앞선 예제에선 영역들이 다중 셀에 걸쳐서 확장되었는데, 이것은 그리드 영역의 이름을 빈 여백을 사이에 두고 여러 번 반복해서 이루었습니다. 여기서 `grid-template-areas` 값으로 지정한 부분은 깔끔하게 위아래로 줄이 맞아 떨어지도록 여분의 공백을 추가할 수도 있습니다. 위 예제에선, `main` 부분과 정렬되도록 `hd`와 `ft` 영역 이름에 공백이 추가된 것을 확인하실 수 있습니다.

영역 이름을 연달아 늘어놓아서 만들어진 영역은 직사각형이어야 하며, 이 시점에서 L 모양의 영역을 만들 수는 없습니다. 표준 명세서에선 아마도 다음번 레벨에서 이 기능이 추가될 수도 있음을 명시하고 있습니다. 그렇지만, 영역을 열 방향과 마찬가지로 행 방향으로도 쉽게 확장할 수 있습니다. 예를 들어, 사이드바 영역에 있는 비어있는 셀을 뜻하는 `.` 대신에 그 자리를 `sd`로 대치해서 footer 밑부분까지 확장하도록 정의해 줄 수 있습니다.

```css
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
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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
    "sd sd sd  ft  ft   ft   ft   ft   ft";
}
```

```html hidden
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('다중_셀에_걸쳐_확장하기', '300', '330') }}

{{cssxref("grid-template-areas")}} 값은 그리드 전체를 나타내야 하며, 그렇지 않으면 틀린 것으로 간주하여 결국 프로퍼티는 무시됩니다. 이 얘기는 각 줄의 셀 숫자가 모두 같아야 한다는 뜻이며, 비어있는 경우는 마침표 문자를 써서 셀이 비어있음을 표시해 주어야 합니다. 또한, 영역이 직사각형이 아니라면 유효하지 않은 그리드를 생성하게 됩니다.

## 미디어 큐어리(media queries)를 이용한 그리드 재정의

이제는 레이아웃이 CSS의 한 부분으로 들어오면서, 서로 다른 브레이크포인트에 대응해서 변하게 만드는 것이 훨씬 쉬워졌습니다. 이 작업은 그리드를 재정의하거나, 그리드에 있는 아이템의 위치를 바꿔줄 수도 있으며, 혹은 한꺼번에 두 가지 모두를 진행할 수도 있습니다.

이 작업을 할 때 주의할 점은, 미디어 큐어리 밖에서 영역의 이름을 정의해야 한다는 것입니다. 이렇게 해야 가령 콘텐츠 영역의 경우, 그리드 위 어느 곳에 배치되든 상관없이 항상 해당 영역을 `main`으로 지칭할 수 있게 됩니다.

위 예제에 있는 레이아웃을 가지고, 만약 너비가 좁을 때는 아주 단순한 레이아웃을 형성하도록 단일 열 형태의 그리드를 정의해서 아이템들이 서로 중첩되도록 하였습니다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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

.wrapper {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "hd"
    "main"
    "sd"
    "ft";
}
```

그러고 나서, 미디어 큐어리 안에서 남아있는 공간이 넓다면 두 개의 열로 된 레이아웃을 구성하도록 다시 정의해 주었으며, 공간이 더 넓으면 세 개의 열로 된 형태의 레이아웃 띠도록 하였습니다. 넓은 형태의 레이아웃의 경우, 아홉 개의 열 트랙 그리드는 그대로 놔두었으며, `grid-template-areas`를 써서 아이템들이 어디에 배치될지를 다시 정의해 준 점을 주목해 주십시오.

```css
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "sd sd sd  ft  ft   ft   ft   ft   ft";
  }
}
@media (min-width: 700px) {
  .wrapper {
    grid-template-areas:
      "hd hd hd   hd   hd   hd   hd   hd hd"
      "sd sd main main main main main ft ft";
  }
}
```

```html hidden
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('미디어_큐어리(media_queries)를_이용한_그리드_재정의', '550', '330') }}

## UI 요소를 위한 `grid-tempate-areas` 사용

온라인에서 찾을 수 있는 많은 그리드 예제들을 보면 주로 주요 페이지 레이아웃에만 그리드를 사용한다고 느끼실 수 있습니다만, 그리드는 큰 요소만큼이나 작은 요소에서도 유용하게 사용될 수 있습니다. 특히나 {{cssxref("grid-template-areas")}}를 쓰면 요소가 어떻게 보일지 코드를 보면 쉽게 이해할 수 있어서 아주 유용합니다.

아주 간단한 예로 "미디어 오브젝트"를 만들어 보겠습니다. 이 컴포넌트의 한쪽은 그림이나 다른 미디어를 위한 공간이 차지하고 다른 쪽은 주 내용이 위치하게 됩니다. 그림은 박스의 오른쪽 혹은 왼쪽에 표시될 수 있습니다.

![미디어 오브젝트 디자인의 한 예를 보여주는 그림](4_media_objects.png)

여기서 그리드는 두 개의 열 트랙으로 구성되어 있으며, 그림이 들어가는 공간의 열 트랙의 크기는 `1fr`이며 글자 내용이 들어가는 공간의 크기는 `3fr`입니다. 만약에 고정된 너비의 그림 영역을 원하시면, 그림이 들어가는 열의 너비는 픽셀값으로 설정하고, 글자 영역에는 `1fr`을 지정하실 수 있습니다. 그러면 `1fr` 크기의 단일 열 트랙이 남은 공간을 모두 차지하게 됩니다.

그림이 위치하는 영역의 그리드 이름으로 `img`를 지정하고 글자 영역은 `content`라 부르기로 하고, `grid-template-areas` 프로퍼티를 써서 다음과 같이 배치하게 됩니다.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
}
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media">
  <div class="image"></div>
  <div class="text">
    This is a media object example. We can use grid-template-areas to switch
    around the image and text part of the media object.
  </div>
</div>
```

{{ EmbedLiveSample('Media_1', '300', '200') }}

### 박스의 반대편에 그림 표시하기

반대로 그림이 박스의 맞은편에 표시되기를 원하실 때도 있을 겁니다. 이렇게 하려면, `1fr` 크기의 트랙을 마지막에 위치하도록 하고, 단순하게 {{cssxref("grid-template-areas")}}의 값을 뒤집어서 그리드를 다시 정의해주면 됩니다.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
}
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media.flipped {
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content img";
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media flipped">
  <div class="image"></div>
  <div class="text">
    This is a media object example. We can use grid-template-areas to switch
    around the image and text part of the media object.
  </div>
</div>
```

{{ EmbedLiveSample('Media_2', '300', '200') }}

## 그리드 정의 단축용법

지금까지 그리드 위에 아이템을 배치하는 여러 가지 방법과 또 그리드를 정의하는 다양한 프로퍼티들을 살펴보았습니다. 이번에는 그리드를 정의하는 데 사용할 수 있는 몇 가지 단축용법을 살펴보고 또 이 모든 것을 CSS 한 줄로 정의하는 법을 알아볼 차례입니다.

이것은 분명 다른 개발자나 심지어 미래의 나 자신도 금방 이해하기 어려울 수도 있습니다. 하지만, 표준 명세서에 기술된 용법 중 하나로서, 개별적으로 사용하진 않더라도, 공개된 예제나 다른 개발자가 사용하는 것을 목격할 수 있을 겁니다.

단축용법을 쓰기 전에 꼭 명심해야 할 것은 단축용법은 단번에 많은 프로퍼티의 설정이 가능할 뿐만 아니라, 정의하지 않은, 혹은 정의할 수 없는 것들도 그들의 **초깃값으로 재설정되도록 작용**한다는 점입니다. 그러므로 단축용법을 사용할 땐 다른 곳에서 적용했던 것들이 재설정될 수도 있다는 점을 주의하십시오.

그리드 컨테이너에서 사용할 수 있는 단축용법에는 두 가지가 있는데, 하나는 명시적 그리드 단축용법으로 `grid-template`이 있고, 나머지는 그리드 정의 단축용법으로 `grid`가 있습니다.

### `grid-template`

{{cssxref("grid-template")}} 프로퍼티는 다음과 같은 프로퍼티들을 설정합니다:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

이 프로퍼티는, 잠재적으로 생성되는 열과 행 트랙에 영향을 끼치는 것이 아닌, 명시적 그리드를 정의할 때 조정할 수 있는 것들을 설정하는 것이어서 명시적 그리드 단축용법이라 불립니다.

다음에 있는 코드는 {{cssxref("grid-template")}}를 써서 이 가이드 앞부분에서 만들었던 레이아웃과 똑같은 레이아웃을 만들었습니다.

```css
.wrapper {
  display: grid;
  grid-template:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

첫 번째 값은 `grid-template-areas` 값에 해당합니다. 하지만 각 행의 마지막에 해당 행의 크기도 함께 선언해 주었습니다. 여기에 있는 `minmax(100px, auto)`가 이 역할을 합니다.

그리고 `grid-template-areas` 뒤에 옆으로 누운 슬래시(/)가 있고, 바로 그 뒤에 세로 행 트랙들을 위한 명시적 트랙 목록이 정의되어 있습니다.

### `grid`

{{cssxref("grid")}} 단축용법은 한 발 더 나가 잠재적 그리드를 정의하는 데 사용되는 프로퍼티들도 같이 설정합니다. 그래서 여기서 설정하는 프로퍼티들은 다음과 같습니다:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

이 프로퍼티는 또 {{cssxref("grid-gap")}} 프로퍼티를 `0`으로 재설정합니다만, 이 단축용법에서는 이 간격을 지정해줄 수는 _없습니다_.

이 용법은 {{cssxref("grid-template")}} 단축용법과 똑같은 방법으로 사용할 수 있습니다만, 이렇게 하면 설정했던 다른 프로퍼티 값들을 재설정하게 된다는 점을 주의하셔야 합니다.

```css
.wrapper {
  display: grid;
  grid:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

이 단축용법이 제공하는 다른 기능은 나중에 자동 배치와 `grid-auto-flow` 프로퍼티를 알아보는 가이드에서 다시 살펴보겠습니다.

만약 지금까지의 초반 가이드들을 쭉 훑어보셨다면, 이제 라인을 기준으로 한 배치나 이름이 지명된 영역을 사용해서 그리드 레이아웃을 만드실 수 있는 위치까지 도달하셨습니다. 다음엔 충분한 시간을 가지고 그리드를 사용해서 몇몇 일반적인 레이아웃 패턴을 만들어 보시도록 하십시오. 앞으로 더 배워야 할 많은 새로운 기술 용어들이 있지만, 이들의 문법은 비교적 이해하기 쉬울 겁니다. 여러 예제를 다루시면서, 지금까지 다루지 않았던 것들에 대한 여러 의문점과 복잡한 사용 사례들을 마주칠 수 있을 겁니다. 이번 가이드의 나머지 부분에서는 표준 명세서에 있는 좀 더 자세한 사항들을 알아 볼 예정입니다. 그래서 앞으로 소개될 기술을 가지고 좀 더 복잡한 고급 레이아웃을 만들 수 있게 되시길 바랍니다.

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
