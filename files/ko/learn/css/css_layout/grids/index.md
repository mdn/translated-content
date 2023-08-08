---
title: 그리드
slug: Learn/CSS/CSS_layout/Grids
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}

CSS 그리드 레이아웃은 웹페이지를 위한 이차원 레이아웃 시스템입니다. 이 기능을 통해 콘텐츠를 행과 열에 배치할 수 있으며 복잡한 레이아웃을 직접 직관적으로 구축할 수 있는 많은 기능이 있습니다. 이 글은 페이지 레이아웃을 시작하기 위해 필요한 모든 것을 알려드립니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선결 사항:</th>
      <td>
        HTML 기본 (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 입문</a
        >
        학습), CSS의 작동 방식
        <a href="/ko/docs/Learn/CSS/Introduction_to_CSS">CSS 입문 </a>및 (<a
          href="/ko/docs/Learn/CSS/Styling_boxes"
          >박스 양식 지정</a
        >
        학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        그리드 레이아웃 시스템의 근간 개념과 그리드 레이아웃 구현 방법 이해하기
      </td>
    </tr>
  </tbody>
</table>

## 그리드 레이아웃이란 무엇인가?

그리드는 수평선과 수직선으로 이루어진 집합체로, 디자인 요소를 정렬할 수 있는 대상 패턴을 생성한다. 이 디자인은 페이지에서 페이지로 이동할 때 요소가 널뛰거나 너비가 바뀌지 않는 디자인 생성에 도움을 주어 웹 사이트의 일관성을 높여줍니다.

하나의 그리드은 대게 **columns**, **rows**로 구성되며, 각 행과 열 사이에 공백이 있는데, 대게는 이를 일컬어 **gutters**라고 부릅니다.

![](grid.png)

## CSS에서 그리드 생성하기

당신의 디자인에 필요한 그리드를 결정했다면 해당 CSS 그리드 레이아웃을 생성하고 그 위에 항목을 올려놓기 위해 CSS 그리드 레이아웃을 사용할 수 있습니다. 우리는 먼저 그리드 레이아웃의 기본 기능을 살펴보고 난 뒤 당신의 프로젝트에 맞는 간단한 그리드 시스템을 생성하는 방법을 살펴보겠습니다.

### 그리드의 정의

본격적인 출발에 앞서 텍스트 편집기 및 브라우저 상에서 [시작 파일](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/0-starting-point.html)을 다운로드하고 엽니다([여기에서 라이브로 볼 수도 있습니다](https://mdn.github.io/learning-area/css/css-layout/grids/0-starting-point.html)). 예를 들어, 당신은 일부 자식 항목이 있는 컨테이너 예제를 보게됩니다. 기본값으로 이들은 일반 대열로 표시되므로 상자들은 다른 대상 요소 바로 밑에 표시됩니다. 우리는 이 단원의 첫 번째 부분은 이 (시작) 파일을 가지고 작업할 것이며, 거기에 변경을 더해 그리드가 어떻게 동작하는지 확인하게 됩니다.

{{cssxref("display")}} 속성에 `grid` 값을 사용해 그리드를 규정한다. 이로써 Flexbox와 마찬가지로 그리드 레이아웃으로 전환하며, 컨테이너의 직계 자식 전체가 그리드 아이템이 됩니다. 내려받은 시작 파일 내부 CSS 부분에 다음을 추가하세요.

```css
.container {
  display: grid;
}
```

가변상자와 달리 항목 무리는 즉각적으로 모양이 달리지지 않는다. `display: grid` 선언으로 열 그리드 하나가 당신에게 주어지며, 따라서 당신의 항목들은 일반 대열 속 행동 방식처럼 다른 대상 요소 바로 밑에 계속 표시됩니다.

그리드 같은 모양세를 확인하려면 그리드에 몇 개의 열을 추가할 필요가 있다. 여기에 200픽셀 칼럼 3개를 추가해봅시다. 길이 단위나 백분율을 사용하여 그러한 열 트랙을 만들 수 있습니다.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

CSS 규칙에 제2 선언을 추가한 다음 페이지를 다시 로드하면 생성된 그리드의 각 셀 안으로 그리드 항목 무리가 하나씩 재배열되는 것이 확인될 것입니다.

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

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다덧</div>
  <div>여섯</div>
  <div>일곱</div>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

{{ EmbedLiveSample('Grid_1', '100%', 400) }}

### fr 단위를 포함한 가변 그리드

길이와 백분율을 사용하여 그리드를 생성하는 것 외에도 **`fr`** 단위를 사용하여 그리드 행과 열을 가변적으로 조정할 수 있다. 동 단위는 그리드 컨테이너 내부에 사용 가능한 공간에서 한 개의 분할 부분과 같습니다.

트랙 목록을 다음과 같이 정의로 변경하여, 세 개의 `1fr` 트랙을 생성합니다.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

이제 가변 트랙을 보유했다는 것이 확인될 것이다. `fr` 단위는 공간을 균등하게 분배하므로 예를 들어 다음과 같이 규정을 변경할 경우 트랙에 서로 다른 값을 부여할 수 있습니다.

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

첫 번째 트랙은 이제 사용 가능한 공간의 2fr을 얻고 다른 두 트랙은 1fr을 얻음으로써 첫 번째 트랙을 더 크게 만듭니다. `fr` 단위와 고정 길이 트랙을 혼합할 수 있습니다. 이러한 경우 고정 트랙들에 필요한 공간이 제외한 이후에 해당 공간이 다른 트랙에 분배됩니다.

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
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다덧</div>
  <div>여섯</div>
  <div>Seven</div>
</div>
```

{{ EmbedLiveSample('Grid_2', '100%', 400) }}

> **참고:** `fr` 단위는 _전체_ 공간이 아닌 _이용 가능한_ 공간을 분배한다. 따라서 당신의 트랙 중 하나가 자기 내부에 뭔가 큰 공간을 차지한다면 공유할 수 있는 여유 공간이 줄어들 것입니다.

### 트랙사이 간격

우리가 트랙사이 간격을 생성하려면 열 사이 간격에 대해선 {{cssxref("grid-column-gap")}} 속성을 사용하고, 행 사이 간격에 대해선 {{cssxref("grid-row-gap")}}를 사용하고, 단번에 둘 다 설정하려면 {{cssxref("grid-gap")}}를 사용합니다.

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
}
```

이러한 간격은 길이 단위 또는 백분율이 될 수 있지만, `fr` 단위는 될 수 없습니다.

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
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다덧</div>
  <div>여섯</div>
  <div>일곱</div>
</div>
```

{{ EmbedLiveSample('Grid_3', '100%', 400) }}

> **참고:** `*gap` 속성은 예전에는 `grid-` 접두사를 사용하곤 했지만, 해당 CSS 규격은 변경되었습니다. 당시는 그들 속성을 여러 레이아웃 메서드 상에서 사용할 수 있게 하자는 취지였습니다.. 현재 마이크로소프트 에지와 파이어폭스는 해당(grid-) 접두사가 없는 버전을 지원하며 접두사 버전은 별칭으로 유지되므로 한동안 사용하는 데 지장이 없을 것입니다. 당신이 안전한 쪽을 택하려면 완전 무결한 코드를 담보하기 위해 두 가지 속성을 이중으로 추가해야 합니다.

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 20px;
  gap: 20px;
}
```

### 트랙 목록의 반복

반복 표기법을 사용하여 당신의 트랙 목록의 전체 또는 한 섹션을 반복할 수 있습니다. 트랙 목록을 다음 항목으로 변경하면 됩니다.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```

이제 당신은 이전과 마찬가지로 3개의 1fr 트랙을 얻을 수 있습니다. 반복 함수에 전달되는 첫 번째 값은 당신이 원하는 트랙 목록의 반복 횟수가 되며, 두 번째 값은 하나의 트랙 목록이며, 이는 당신이 반복되길 원하는 일개 트랙 또는 여러 트랙이 될 수도 있습니다.

### 암시적 그리드와 명시적 그리드

지금까지는 열 트랙만 지정했지만, 콘텐츠를 저장하기 위해 행도 만들어지고 있습니다. 이것은 명시적 그리드 대항 암시적 그리드의 한 예입니다. 명시적 그리드는 당신이 `grid-template-columns` 또는 `grid-template-rows`를 사용하여 생성하는 것을 말합니다. 암시적 그리드가 생성되는 시점은 콘텐츠가 해당 그리드 외부에 배치될 때입니다. 예를 들어 콘텐츠가 행렬 내부에 진입할 시점이 됩니다.. 명시적 및 암시적 그리드는 가변상자의 주축 및 교차축과 유사합니다..

기본값으로 암시적 그리드 상에 생성된 트랙은 `auto` 크기로 되며, 이는 일반적으로 콘텐츠를 알맞게 들여놓기에 충분히 크다는 것을 의미합니다. 당신이 암시적 그리드 트랙에 크기를 지정하려면 {{cssxref("grid-auto-rows")}}와 {{cssxref("grid-auto-columns")}} 속성을 사용할 수 있습니다. 당신의 작업 CSS에 `100px`값을 `grid-auto-rows`에 추가하게 되면 생성된 행이 이제 100 픽셀 높이가 되는 걸 볼 수 있습니다.

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

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다덧</div>
  <div>여섯</div>
  <div>일곱</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 20px;
}
```

{{ EmbedLiveSample('Grid_4', '100%', 400) }}

### minmax() 함수

100픽셀 높이의 트랙은 100픽셀 이상의 트랙에 콘텐츠를 추가할 경우 별로 유용하지 않을 것입니다. 그 경우에는 오버플로를 야기할 수 밖에 없기 때문입니다. _적어도_ 100픽셀 높이의 트랙이 있고, 거기에 더 많은 콘텐츠가 들어가더라도 여전히 확장될 수 있다면 더 나을 수 있습니다. 웹에 관한 상당히 기본적인 사실은 어떤 것의 높이가 앞으로 얼마나 커질지 결코 모른다는 점입니다. 추가 내용 또는 더 큰 글꼴 크기는 모든 면에서 픽셀 크기의 완전성을 추구하는 디자인의 경우 문제를 일으킬 수 있습니다.

`minmax`는 트랙의 최소 및 최대 크기를 설정할 수 있게 해줍니다. 예를 들어 `minmax(100px, auto)`. 최소 크기는 100 픽셀이지만 최대 크기는 `auto`로써 콘텐츠에 들어맞게 확장됩니다. 최소최대값을 사용하려면 `grid-auto-rows`를 변경하면 됩니다.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
}
```

추가 콘텐츠를 추가하면 트랙이 확장되어 콘텐츠가 들어맞게 트랙이 확대되는 걸 보게될 겁니다. 정확히 행을 따라 확장이 일어난다는 점에 유의하세요.

### 들어맞을 때까지 열 생성

우리는 트랙 목록, 반복 표기법, `minmax()`등에 대해 우리가 배운 몇 가지를 결합하여 유용한 패턴을 만들 수 있습니다. 때로는 그리드 컨테이너에 들여놓기할 때 최대한 많은 열을 생성하라고 그리드에 요청할 수 있으면 도움이 됩니다. 우리는 그렇게 하려면 `repeat()` 표기법을 사용하여 `grid-template-columns`의 값을 설정하면 되지만, 숫자로 전달할 게 아니라 키워드 `auto-fill`을 사용했습니다. 동 함수의 두 번째 매개 변수의 경우 최소값은 우리가 갖고 싶은 최소 트랙 크기와 같고 최대값은 1fr입니다.

이를 당신의 파일에서 당장 시험해려면 아래 CSS를 사용하세요.

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

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <div>하나</div>
  <div>둘</div>
  <div>셋</div>
  <div>넷</div>
  <div>다덧</div>
  <div>여섯</div>
  <div>일곱</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
}
```

{{ EmbedLiveSample('Grid_5', '100%', 400) }}

이것이 작동하는 까닭은 그리드가 그리드 컨테이너에 들어갈 수 있는 200픽셀의 열을 최대한 많이 만들고, 그 뒤 전체 열 사이 남은 공간이 얼마가 돼건 공유하기 때문입니다. 최대치 1fr이며, 이미 알고 있듯이 트랙 사이 공간을 고르게 분배합니다.

## 라인 기반 배치

이제 우리는 그리드를 만드는 것에서 그리드에 사물을 배치하는 것으로 넘어갑니다. 우리의 그리드에는 항상 라인이 있으며, 이 라인은 1에서 시작하며, 문서의 쓰기 모드와 관련이 있습니다. 따라서 영어에서는 열 라인 1은 그리드의 왼쪽에 위치하고 행 라인 1은 맨 위에 있습니다. 아랍어 열 라인 1은 아랍어가 오른쪽에서 왼쪽으로 쓰여지기 때문에 오른쪽에 놓이게 됩니다.

시작 라인과 끝 라인을 지정하여 이러한 라인에 따라 사물을 배치할 수 있습니다. 다음의 속성을 사용하여 그렇게 할 수 있습니다.

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

이들 속성은 모두 라인 번호를 값으로 가질 수 있습니다. 약칭 속성을 사용할 수도 있습니다.

- {{cssxref("grid-column")}}
- {{cssxref("grid-row")}}

이를 통해 시작 라인과 끝 라인을 한 번에 지정할 수 있으며, 전진 슬래시인 `/` 문자로 구분합니다.

[착수 파일로 이 파일을 다운로드하세요.](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/8-placement-starting-point.html) 또는 [여기 라이브로도 보세요.](https://mdn.github.io/learning-area/css/css-layout/grids/8-placement-starting-point.html). 이미 정의된 그리드와 윤곽이 잡힌 간단한 글이 있습니다. 자동 배치에 의해 항목들이 우리가 생성한 그리드 무리의 각 셀에 하나씩 배치하는 것을 볼 수 있습니다.

대신 그리드 라인을 사용하여 우리 사이트의 모든 요소를 그리드에 배치합니다. 다음 CSS 규칙을 당해 CSS의 맨 아래에 추가세요.

```css
header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}
```

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
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}
header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>이것은 나의 사랑스런 블로그입니다</header>
  <article>
    <h1>내 글</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contact me@mysite.com</footer>
</div>
```

{{ EmbedLiveSample('Grid_6', '100%', 400) }}

> **참고:** 마지막 열 또는 행 라인을 상대로 `-1` 값을 사용할 수 있으며, 음수값을 사용하여 끝에서 안쪽으로 카운트할 수도 있습니다. 그러나 이 값은 명시적 그리드에만 통합니다. `-1` 값은 암시적 그리드의 마지막 라인에 적용하지 못합니다.

## grid-template-areas로 위치잡기

그리드에 항목을 배치하는 다른 방식은 {{cssxref("grid-template-areas")}} 속성을 사용하여 당신의 디자인에 딸린 다양한 요소에 이름을 지정하는 것입니다.

마지막 예제에서 라인 기반 위치잡기를 제거하고(또는 예제 파일을 다시 다운로드하여 새롭게 시작하거나), 다음 CSS를 추가합니다.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

페이지를 새로고침하면, 우리가 어떤 라인 번호를 사용할 필요없이 방금 전과 같이 항목이 배치되었음을 알 수 있습니다!

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

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}

aside {
  border-right: 1px solid #999;
}

.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

```html hidden
<div class="container">
  <header>이것은 나의 사랑스런 블로그입니다</header>
  <article>
    <h1>내 글</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contact me@mysite.com</footer>
</div>
```

{{ EmbedLiveSample('Grid_7', '100%', 400) }}

`grid-template-areas`에 대한 규칙은 다음과 같습니다.

- 그리드로 이뤄진 전체 셀을 채우도록 해야 합니다.
- 두 개의 셀을 합치려면 해당 이름을 반복하세요.
- 셀을 비우려면 `.`(마침표)를 사용하세요.
- 영역은 반드시 직사각형이어야 합니다. 예를 들어 L자 모양의 면적을 취할 수는 없습니다.
- 영역은 다른 위치에서 반복될 수 없습니다.

우리의 레이아웃을 마음대로 부릴 수 있습니다. 예를 들어, 콘텐츠와 사이드바 아래에만 위치하는 바닥글을 맡바닥까지 확대 점유하도록 변경할 수 있다. 이것은 CSS에서 정확히 무슨 일이 일어나고 있는지 있는 그대로 명백하게 레이아웃을 설명하는 매우 멋진 방법입니다.

## CSS 그리드, 그리드 프레임워크

그리드 "프레임워크"는 대략 12 또는 16개의 열 그리드를 기반으로 하는 경향이 있으며, CSS 그리드도 포함하므로, 그러한 프레임워크를 발휘하기 위해 제 3의 타사 도구가 필요하지 않습니다. 이미 CSS 규격에 포함되어 있기 때문입니다.

[착수 파일을 다운로드하세요.](https://github.com/mdn/learning-area/blob/master/css/css-layout/grids/11-grid-system-starting-point.html). 여기에는 12개의 열 그리드로 정의된 컨테이너와 이전 두 예제에서 사용된 것과 동일한 마크업이 포함되어 있습니다. 이제 라인 기반 배치를 사용하여 우리의 콘텐츠를 12열 그리드 상에 배치할 수 있습니다.

```css
header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}
```

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
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 20px;
}

header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>이것은 나의 사랑스런 블로그입니다</header>
  <article>
    <h1>내 글</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contact me@mysite.com</footer>
</div>
```

{{ EmbedLiveSample('Grid_8', '100%', 400) }}

[파이어폭스 그리드 검사기](/ko/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)를 사용하여 당신의 디자인 상의 그리드 라인을 겹쳐놓으면 12개로 구성된 열 그리드가 작동하는 방법을 볼 수 있습니다.

![A 12 column grid overlaid on our design.](learn-grids-inspector.png)

## 요약정리

이 개요에서 우리는 CSS 그리드 레이아웃의 주요 특징을 둘러 보았습니다. 당신의 디자인 상에 사용할 수 있도록 합시다. CSS 규격에 대해 더 자세히 살펴보려면 그리드 레이아웃에 대한 안내서를 참조하세요. 아래를 보면 찾아 볼 수 있습니다.

## 참조 항목

- [CSS 그리드 안내서](/ko/docs/Web/CSS/CSS_Grid_Layout#Guides)
- [CSS 그리드 검사기: 그리드 레이아웃을 검사](/ko/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}
