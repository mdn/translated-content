---
title: 다단 레이아웃
slug: Learn/CSS/CSS_layout/Multiple-column_Layout
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}

CSS 다단 레이아웃 규격은 신문에서 볼 수 있듯이 콘텐츠를 단으로 배치하는 방법을 제공합니다. 이 문서는 그 기능을 어떻게 사용하는지 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선결 사항:</th>
      <td>
        HTML의 기초 (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 입문서</a
        >)와 CSS 작동 방식에 대한 개념(<a
          href="/ko/docs/Learn/CSS/Introduction_to_CSS"
          >CSS 입문서</a
        >를 공부하세요.)
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        신문에서 찾을 수 있는 것과 같은 웹 페이지상에 다단 레이아웃을 만드는
        방법을 학습합니다.
      </td>
    </tr>
  </tbody>
</table>

## 기본 사례

이제 다단 레이아웃을 사용하는 방법을 탐색할 것입니다. 이를 일컬어 _multicol_(다단)로 통칭합니다. 아래 내용을 따라하려면 [다단 착수 파일](https://github.com/mdn/learning-area/blob/master/css/css-layout/multicol/0-starting-point.html)을 다운로드하고 적절한 장소에 CSS를 추가할 수 있습니다. 해당 섹션의 맨 아래에는 최종 코드가 어떻게 생겼는지에 대한 실제 예제가 있습니다.

우리의 착수 파일에는 아주 간단한 HTML이 포함되어 있습니다. 그 내용은 제목과 일부 단락이 내부에 있는 `container` 클래스 래퍼입니다.

컨테이너 클래스에 해당하는 {{htmlelement("div")}}는 다단 컨테이너가 될 예정입니다. {{cssxref("column-count")}} 혹은 {{cssxref("column-width")}} 속성 중의 하나를 사용해서 다단으로 전환합니다. `column-count` 속성은 당신이 부여하는 값만큼 다단을 생성하게 되며, 당신의 스타일시트에 다음과 같은 CSS를 추가하고 페이지를 새로고침하면 당신은 삼단 레이아웃을 얻게 됩니다:

```css
.container {
  column-count: 3;
}
```

당신이 생성하는 단은 가변 너비를 갖게됩니다. 말하자면 브라우저가 각 단에 할당한 공간의 크기를 계산합니다.<

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html
<div class="container">
  <h1>간단한 다단 예제</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

```css
.container {
  column-count: 3;
}
```

{{ EmbedLiveSample('다단_1', '100%', 400) }}

다음과 같이 `column-width`를 사용하여 당신의 CSS를 변경하세요:

```css
.container {
  column-width: 200px;
}
```

이제 브라우저는 당신이 지정한 크기의 단을 최대한 많이 제공합니다. 남은 공간은 현존하는 단 사이 공평하게 배분됩니다. 즉, 컨테이너가 해당 너비로 정확히 나뉠 수 없는 경우를 제외하고는 지정한 너비를 정확히 얻을 수 없습니다.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden
<div class="container">
  <h1>간단한 다단 예제</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

```css
.container {
  column-width: 200px;
}
```

{{ EmbedLiveSample('다단_2', '100%', 400) }}

## 다단 스타일링

다단으로 작성된 단은 개별적으로 스타일링할 수 없습니다. 하나의 단을 다른 단보다 크게 만들거나 단일 단의 배경 또는 텍스트 색상을 변경할 수 있는 방법이 없습니다. 단이 표시되는 방식을 바꿀 수 있는 기회는 두 가지가 주어집니다.

- {{cssxref("column-gap")}}를 사용해 다단 사이 간격의 크리를 변경하기.
- {{cssxref("column-rule")}}를 가지고 다단 사이 규칙을 추가하기.

상기 예제 용례에서 `column-gap` 속성을 추가해 간격의 크기를 변경하세요:

```css
.container {
  column-width: 200px;
  column-gap: 20px;
}
```

서로 다른 값을 가지고 마음대로 부릴 수 있습니다. 모든 길이 단위를 속성이 허용한다는 말입니다. 이제 `column-rule`를 가지고 다단 사이 규칙을 추가하세요. 이전 단원에서 접했던 {{cssxref("border")}} 속성과 비슷한 방식으로 `column-rule`는 {{cssxref("column-rule-color")}}와 {{cssxref("column-rule-style")}} {{cssxref("column-rule-width")}}의 약칭이며 `border`와 동일한 값을 허용합니다.

```css
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79, 185, 227);
}
```

다른 스타일과 색상 규칙을 추가하세요

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <h1>간단한 다단 예제</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

{{ EmbedLiveSample('다단_3', '100%', 400) }}

주목할 점은 규칙이 자체적으로 폭을 점유하지 않는다는 것입니다. 규칙이 적용된 내용은 당신이 `column-gap`으로 생성된 간격을 가로질러 놓여 있습니다. 규칙을 따라 양쪽에 더 많은 공간을 만들려면 `column-gap` 크기를 늘려야 합니다.

## Spanning columns

다단 레이아웃에 의해 콘텐츠가 span across 됩니다. 그것은 본질적으로 페이지 미디어상에 콘텐츠가 작동하는 것과 같은 방식으로 작동합니다. 예를 들면 웹페이지 인쇄가 그렇습니다. 콘텐츠를 다단 컨테이너로 만들면 다단으로 나눠지고, 그것이 가능해진 결과로 콘텐츠는 깨집니다.

때때로, 이런 깨짐 현상은 발생하는 위치에 따라 독서를 저해하는 경험을 낳을 것입니다. 아래의 실제 사용례에서 나는 다단을 사용하여 일련의 상자를 배치했는데, 각각에는 머리글과 약간의 텍스트가 들어 있습니다. 다단 사이가 단편화할 경우 제목은 텍스트와 분리됩니다.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html
<div class="container">
  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
</div>
```

```css
.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

{{ EmbedLiveSample('다단_4', '100%', 600) }}

이러한 동작을 제어하기 위해 [CSS 붕괴](/ko/docs/Web/CSS/CSS_Fragmentation) 규격에 있는 속성을 사용할 수 있습니다. 우리는 이 규격에 있는 속성을 통해 다단과 페이지 미디어에 포함된 콘텐츠가 깨지는 것을 제어할 수 있습니다. 예를 들어, `.card` 클래스에 대한 규칙에 `avoid` 값을 사용한 {{cssxref("break-inside")}}을 추가하세요. 이것은 머리글과 텍스트로 구성된 컨테이너입니다. 따라서 우리는 이 상자를 분열하고 싶지 않습니다.

현 시점에 이전 속성인 `page-break-inside: avoid`을 최상의 브라우저 지원을 위해 추가할 가치가 있습니다.

```css
.card {
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

페이지를 새로고침하면 상자가 하나의 형태를 갖추고 있어야 합니다.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden
<div class="container">
  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>나는 머리글이다.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
</div>
```

```css
.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

{{ EmbedLiveSample('다단_5', '100%', 600) }}

## 요약정리

이제 당신이 현재 설계 중인 레이아웃 메서드를 선택할 때 맘껏 사용할 수 있는 다단 레이아웃의 기본 기능과 다른 도구를 사용하는 방법을 알게 되었습니다.

## 참조 항목

- [CSS 붕괴](/ko/docs/Web/CSS/CSS_Fragmentation)
- [다단 레이아웃 사용하기](/ko/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}
