---
title: CSS 레이아웃 입문서
slug: Learn/CSS/CSS_layout/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

이 문서에서는 이전 모듈에서 이미 다뤘던 CSS 레이아웃 기능, 예를 들어 서로 다른 {{cssxref("display")}} 속성값의 차이 등을 복습하고, 이번 모듈에서 다룰 예정인 몇몇 CSS 개념을 소개합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선결 사항:</th>
      <td>
        HTML의 기초 (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML에 대한 소개</a
        >)와 CSS 작동 방식에 대한 개념(<a
          href="/ko/docs/Learn/CSS/Introduction_to_CSS"
          >CSS 소개</a
        >를 공부하세요.)
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        CSS 페이지 레이아웃 기술에 대한 개요를 제공합니다. 개별 기술은 후속
        자습서에서 보다 자세하게 학습할 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

CSS 페이지 레이아웃 기술은 웹페이지에 포함될 요소들을 취합할 수 있게 해주며, 그들 요소가 일반 레이아웃 대열 상에 기본값 위치 기준과 부모 컨테이너, 또는 메인 뷰포인트 및 메인창과 비례해 어느 위치에 놓일 것인지를 제어한다. 우리가 이번 모듈에서 자세하게 다룰 페이지 레이아웃 기술은 다음과 같다.

- 보통 흐름(normal flow)
- {{cssxref("display")}} 속성
- flexbox
- 그리드
- Floats
- 포지셔닝
- 테이블 레이아웃
- 다단 레이아웃

각각의 기술은 저마다 용도가 있고, 장단점이 있으며, 어떤 기술도 독립적인 용도를 갖추도록 설계되지는 않았다. 각 메서드가 어떤 용도로 마련된 것인지 이해하게 되면 해당 작업에 가장 적합한 도구가 어떤 것인지 파악하는 데 유리한 입지를 점하게 된다.

## 보통 흐름(normal flow)

보통 흐름(normal flow)은 당신이 페이지 레이아웃을 전혀 제어하지 않을 경우 브라우저가 기본값으로 HTML 페이지를 배치하는 방법을 말합니다. 간단한 HTML 예를 살펴봅시다:

```html
<p>나는 고양이를 사랑한다.</p>

<ul>
  <li>고양이 먹이를 사세요</li>
  <li>운동</li>
  <li>기운내 친구야</li>
</ul>

<p>여기가 끝!</p>
```

기본적으로 브라우저는 이 코드를 다음과 같이 표시한다.

{{ EmbedLiveSample('Normal_flow', '100%', 200) }}

소스 코드에 나타나는 순서 그대로 HTML 요소가 표시되는 방법에 주의하자. 요소가 상대 요소의 상위(上位)에 차곡 차곡 올려진다. 즉 첫 번째 단락이 나오고 순서가 없는 목록이 이어지고 두 번째 단락으로 이어진다.

요소 집합이 상대 요소 바로 아래 나타나는 것을 _inline_ 요소와 대비해 _block_ 요소라고 기술한다.

> **참고:** 블록 요소 상황에 해당하는 방향으로 배치되는 것을 일컽어 블록 방향이라고 기술한다. 영어와 같은 언어 상에서 블록 방향은 수직 대열을 갖게되며, 이는 가로쓰기 모드이다. 일본어와 같은 세로 쓰기 모드에 해당하는 언어 상에서 블록 방향은 수평 대열이 됩니다. (블록 관계와) 대척 관계인 인라인 방향은 (문장과 같은) 인라인 콘텐츠가 흘러가는 방향을 말한다.

CSS를 사용하여 레이아웃을 만들 경우 당신은 요소 집합을 보통 흐름(normal flow)에서 벗어나도록 하는 것이다. 그러나 당신의 웹페이지의 다수 요소 집합의 경우는 보통 흐름(normal flow)이므로 정확히 당신이 필요로하는 레이아웃이 그대로 만들어질 것이다. 그런 까닭에 잘 구조화된 HTML 문서에서 시작하는 것이 아주 중요하다. 그런 뒤에 당신은 사물들이 기본값으로 배치된 방식과 대립해 싸우는게 아니라 협력해서 작업할 수 있게 된다.

CSS에서 요소가 배치되는 방식을 변경시키는 메서드는 다음과 같다.

- **{{cssxref("display")}} 속성** — `block`, `inline` 또는 `inline-block`과 같은 기준 속성값은 보통 흐름(normal flow)속에서 요소가 동작하는 방식을 변경할 수 있다. (더 자세한 정보는 [CSS 상자 유형](/ko/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes)을 참조하세요). 그 뒤에 우리에게 `display` 속성값 지정을 통해 활성화될 수 있는 완전체 레이아웃 메서드가 주어진다. 예로 [CSS 그리드](/ko/docs/Learn/CSS/CSS_layout/Grids)와 [flexbox](/ko/docs/Learn/CSS/CSS_layout/Flexbox).
- **Floats** — {{cssxref("float")}} 속성의 값을 예로 `left`로 적용하면 흔히 메거진 레이아웃에 속한 이미지가 텍스트를 자신의 주변에 떠있게 하는 방식과 같이 블록 수준 요소가 어떤 요소의 한 쪽 측면으로 밀려나도록 할 수 있다.
- **{{cssxref("position")}} 속성은** — 다른 상자 내부에 들어가 상자의 정확한 위치를 제어할 수 있게 해준다. `정적` 포지셔닝는 기본값으로 보통 흐름(normal flow) 소속이지만, 다른 속성값을 사용해 요소들이 다르게 배치되도록 만들 수 있다. 예를 들어 브라우저 뷰포트의 왼쪽 최상단에 맞춰 (또는 비례해서) 위치를 고정시킬 수 있다.
- **테이블 레이아웃** — 이것은 HTML 테이블 구성원에 스타일을 지정하기 위해 마련된 기능이기는 하나 `display: table`와 관련 속성을 사용하여 비테이블 요소에서도 사용될 수 있다.
- **다단 레이아웃** — [다단 레이아웃](/ko/docs/Web/CSS/CSS_Columns) 속성은 당신이 신문 지상에서 볼 수 있듯이 블록 콘텐츠를 단 형태로 배치되도록 만들 수 있다.

## 디스플레이 속성

CSS 상에서 페이지 레이아웃을 완성하는 주요 메서드는 `display` 속성에 포함된 모든 속성값 지정을 통해 이뤄진다. 디스플레이 속성은 요소가 표시되는 기본값 변경을 허용한다. 보통 흐름(normal flow)상의 모든 요소는 한 가지 `display` 속성값을 갖고 있으며, 해당 요소의 기본 동작 방식을 지정하는 데 사용된다. 예를 들어 영어로 된 단락은 다른 대상 요소 바로 밑에 표시되는 것은 그들 요소의 스타일이 `display: block`으로 지정되었기 때문이다. 단락 내부 어떤 텍스트 주변에 링크를 만들면 그 링크는 나머지 텍스트와 함께 인라인을 유지하며 새 줄로 넘어가는 행갈이를 하지 않는다. 그런 까닭에 {{htmlelement("a")}} 요소는 기본값으로 `display: inline`가 된다.

당신은 이러한 기본값 디스플레이 동작을 변경할 수 있다. 예를 들어 {{htmlelement("li")}} 요소는 기본값으로 `display: block`가 지정되는 것으로 우리 영어 문서 상에서 다른 대상 요소 바로 밑에 표시된다는 의미다. 디스플레이 속성값을 `inline`으로 변경하면 문장 속 단어의 동작과 마찬가지로 상대 바로 옆에 표시된다. 당신이 어느 요소라도 `display` 속성값을 변경할 수 있다는 것은 그 요소들이 어떤 모습을 띄게되든 관계없이 해당 HTML 요소의 의미론적 의의를 선택할 수 있다는 뜻이다. 요소가 보여지는 방식은 변경할 수 있는 부분이다.

한 항목을 `block`에서 `inline`으로 바꾸거나, 그 반대로 바꿔 기본값진열 방식을 변경할 수 있을뿐만 아니라 하나의 `display` 속성값으로 시작해서 확대된 형태의 레이아웃 메서드로 일부 있다. 그러나 그것을 사용할 경우 대게는 추가적인 속성 호출이 요구된다. 레이아웃의 목적이 무엇인지 논할 때 가장 중요한 두 가지 속성값은 `display: flex`와 `display: grid`이다.

## flexbox

flexbox는 [가변 상자 레이아웃](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout) 모듈의 약칭으로 행이 됐건 열이 됐건 일차원 상에 사물을 배치할 경우 편리를 돕기 위해 마련되었다. flexbox를 사용하려면 당신이 진열하길 원하는 모든 요소의 부모 요소에 `display: flex`를 적용하고 나면 모든 직계 자식이 플렉스 항목이 된다. 우리는 간단한 예를 들어 이 점을 확인할 수 있다.

아래 HTML 마크업을 보면`wrapper` 클래스에 해당하는 컨테이너 요소를 제공하고, 그 내부에 세 개의 {{htmlelement("div")}} 요소가 있다. 기본값으로 이들 요소들은 영어 문서 상에서 블록 요소로 상대 요소 밑에 표시된다.

그러나 부모 요소에 `display: flex`를 부여하면 세개 항목이 자체적으로 단으로 배열된다. 그렇게 된 까닭은 그들 요소들이 *가변 항목*이 되었을 뿐만 아니라 flexbox가 그들 요소에 부여한 일부 초기값을 사용했기 때문이다. 그들은 행으로 표시되었는데, 그 까닭은 {{cssxref("flex-direction")}}의 초기값이 `row`이기 때문이다. 그들은 모두 항목 무리에서 키가 가장 큰 높이로 연장된 모양새가 되는데, 그 까닭은 {{cssxref("align-items")}} 속성의 초기값이 `stretch`이기 때문이다. 즉, 항목 무리가 가변 컨테이너의 높이에 맞춰 연장된다는 것으로 이번 경우에 키가 가장 큰 항목이 기준으로 정해진다. 항목 무리 전체가 가변 컨테이너의 초입에 맞춰 정렬하면서 행의 말미에 여분의 공간이 남겨진다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}
```

```html
<div class="wrapper">
  <div class="box1">하나</div>
  <div class="box2">둘</div>
  <div class="box3">셋</div>
</div>
```

{{ EmbedLiveSample('Flex_1', '300', '200') }}

가변 콘테이너에 적용될 수 있는 상기한 속성이외에도 가변 항목에 적용될 수 있는 속성이 있다. 다른 것들 중에서 그들 속성들은 항목이 변형되는 방식을 변경할 수 있는데, 항목을 여유 공간에 맞춰 연장하거나 수축될 수 있다.

이에 대한 간단한 예로 자식 항목 전체에 대한 {{cssxref("flex")}} 속성에 대해 속성값 `1`을 부가할 수 있다. 그로 인해 컨테이너 말미에 공간을 남기지 않고 항목 무리 전체가 확대되거나 채워지도록 만든다. 항목 무리보다 많은 공간이 있을 경우는 늘어날 것이고 적은 공간이 있으면 축소될 것이다. 게다가 HTML 마크업에 다른 요소를 추가하면 그 대상 요소를 위한 공간 생성을 위해 항목 무리 전체가 축소될 것이다. 그들은 그 요소가 뭐가됐건 동일한 공간 점유를 위해 크기가 조종된다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}

.wrapper > div {
  flex: 1;
}
```

```html
<div class="wrapper">
  <div class="box1">하나</div>
  <div class="box2">둘</div>
  <div class="box3">셋</div>
</div>
```

{{ EmbedLiveSample('Flex_2', '300', '200') }}

> **참고:** 이 안내서는 flexbox 상에서 있을 수 있는 내용에 대한 짧은 입문서였다. 더 자세한 내용은 [flexbox](/ko/docs/Learn/CSS/CSS_layout/Flexbox) 편을 참조하세요.

## 그리드 레이아웃

가변 상자는 일차원 레이아웃을 위해 마련되었지만, 그리드 레이아웃은 이차원 레이아웃을 위해 마련되었다. 즉 행과 열에 포함된 사물들을 배열한다.

반복되는 얘기지만, 디스플레이 속성에 `display: grid`라는 특정 값을 지정하면 그리드 레이아웃으로 전환할 수 있다. 아래 예를 보면 가변 요소 사례에 비슷한 마크업을 사용했다. 하나의 컨테이너와 몇몇 자식 요소가 딸려있다. 우리는 `display: grid` 사용뿐만 아니라 {{cssxref("grid-template-rows")}}와 {{cssxref("grid-template-columns")}}라는 개별 속성을 활용하여 부모 요소를 상대로 일부 행과 열 궤도를 정의한다. 여기 각기 `1fr`값이 지정된 3열과 `100px`이 지정된 2행을 정의했다. 자식 요소 상에 굳이 어떤 규칙도 적용할 필요없이, 그 요소들이 우리가 생성한 그리드 안에 자동적으로 자리잡게 된다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="box1">하나</div>
  <div class="box2">둘</div>
  <div class="box3">셋</div>
  <div class="box4">넷</div>
  <div class="box5">다섯</div>
  <div class="box6">여섯</div>
</div>
```

{{ EmbedLiveSample('Grid_1', '300', '330') }}

그리드가 주어지고 나면 앞서 확인했듯 당신의 항목 무리를 그리드 상에 자동 배치하는 동작 방식이 아니라 명시적으로 위치를 지정할 수 있다. 아래 두 번째 예제에서 동일한 그리드를 정의했지만, 이번에는 세개의 자식 항목이 주어졌다. 우리는 {{cssxref("grid-column")}}와 {{cssxref("grid-row")}}를 사용해서 각 항목의 행과 열의 시작과 끝을 지정했다. 이로써 항목 무리가 차지하는 공간이 여러 궤도에 걸쳐 확대되었다.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}

.box1 {
  grid-column: 2 / 4;
  grid-row: 1;
}

.box2 {
  grid-column: 1;
  grid-row: 1 / 3;
}

.box3 {
  grid-row: 2;
  grid-column: 3;
}
```

```html
<div class="wrapper">
  <div class="box1">하나</div>
  <div class="box2">둘</div>
  <div class="box3">셋</div>
</div>
```

{{ EmbedLiveSample('Grid_2', '300', '330') }}

> **참고:** 이 두 예제는 그리드 레이아웃의 일부분일 뿐이며, 자세한 내용은 [그리드 레이아웃](/ko/docs/Learn/CSS/CSS_layout/Grids)

이 가이드의 나머지 부분은 페이지의 주요 레이아웃 구조로 보기엔 덜 중요하지만 특정 작업을 수행하는 데 여전히 도움이 될 수 있는 다른 레이아웃 방법을 다룬다. 각 레이아웃 작업의 특성을 이해함으로써 당신이 디자인 하는 특정 구성 요소를 들여다 볼 때 거기에 가장 적합한 레이아웃 유형이 종종 명확해 진다는 것을 조만간 알게 될 것이다.

## Floats

요소를 부동시키면 보통 흐름(normal flow)속에 속한 해당 요소와 해당 요소를 뒤따르는 블록 수준 요소의 동작이 변경된다. 요소는 왼쪽 또는 오른쪽으로 이동하고 보통 흐름(normal flow)에서 벗어나게되며 주변 콘텐츠는 부유된 항목 주위로 떠다닙니다.

이 {{cssxref("float")}} 속성은 네 가지 값을 가질 수 있다:

- `left` — 요소를 왼쪽에 띄웁니다.
- `right` — 요소를 오른쪽에 띄웁니다.
- `none` — 부동 여부를 전혀 지정하지 않는다. 이것이 기본값이다.
- `inherit` — 부동 속성의 값이 요소의 부모 요소에서 상속된다고 지정한다.

아래 예제에서 우리는 `<div>` 왼쪽을 띄우고 오른쪽에 {{cssxref("margin")}}을 주어 텍스트를 `<div>` 요소 자리에서 밀어낸다. 이것은 우리에게 텍스트가 그 상자를 감싸는 효과를 부여하며, 이는 현대 웹 디자인에서 사용되는 Floats에 대해 알아야할 내용의 대부분이다.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

p {
  line-height: 2;
  word-spacing: 0.1rem;
}

.box {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  border-radius: 5px;
}
```

```html
<h1>간단한 부동 예제</h1>

<div class="box">부동</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css
.box {
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 30px;
}
```

{{ EmbedLiveSample('Float_1', '100%', 600) }}

> **참고:** Floats에 대한 설명은 [부동 및 해제](/ko/docs/Learn/CSS/CSS_layout/Floats) 속성 편에서 충분히 다룹니다. flexbox 및 그리드 레이아웃과 같은 기술이 나오기 이전에 Floats는 열 레이아웃을 만드는 메서드로 사용되었다. 웹에서 이러한 메서드와 대면하는 경우도 여전히 있다. [레거시 레이아웃 메서드](/ko/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)에 관한 단원에서 그 내용을 다루게 된다.

## 포지셔닝 기술

포지셔닝를 통해 보통 흐름(normal flow)속에 있는 요소를 예상되는 기존의 배치 위치에서 벗어나 다른 위치로 이동시킬 수 있다. 포지셔닝는 메인 페이지 레이아웃을 생성하는 메서드가 아니라 페이지의 특정 항목의 위치를 관리하고 미세 조정하는 것에 관한 것이다.

그러나 {{cssxref("position")}} 속성에 의존하는 특정 레이아웃 패턴을 상대할 경우 유용한 기술도 있다. 포지셔닝를 이해하는 것은 또한 보통 흐름(normal flow)을 이해하고, 항목을 보통 흐름(normal flow)에서 벗어나게 한다는 것이 무엇인지를 이해하는 데 도움이 된다.

당신이 알아야 할 다섯 가지 포지셔닝 유형이 있다.

- **정적 포지셔닝**는 모든 요소에 기본값으로 부여된 속성이다. 즉, "문서 레이아웃 대열에 속하는 요소를 기존의 일반 위치에 들여놓는 것으로 여기서 특별할 것은 없다."라는 것을 의미한다.
- **상대 포지셔닝**페이지상의 요소 위치를 수정하여 그것을 보통 흐름(normal flow)상의 기존 위치와 비례해 이동토록 하는 것으로 페이지의 다른 요소와 겹치는 것도 해당한다.
- **절대 포지셔닝**는 요소를 페이지의 일반 레이아웃 대열에서 완전히 벗어난 곳으로 이동시켜 자체적인 개별 레이어 상에 놓는 것과 같다. 그곳으로부터 페이지의 `<html>` 요소(또는 가장 근접 위치에 있는 조상 요소)의 가장자리 기준에서 비례하는 위치에 고정할 수 있다. 이것은 다른 콘텐츠 패널이 서로 다른 요소 위에 놓여야 하는 동시에 표시 및 감추기를 맘대로 하는 탭 상자의 경우나 기본적으로 화면에서 벗어나지만 컨트롤 단추를 사용하여 화면상에 슬라이더 전환이 되도록 만들어진 정보 패널과 같은 복잡한 레이아웃 효과를 만드는 데 유용하다.
- **고정 포지셔닝**는 다른 요소가 아닌 브라우저 뷰포트 기준과 비례해 요소를 고정하는 것을 제외하고는 절대 포지셔닝와 매우 유사합니다. 이것은 나머지 콘텐츠 부분이 스크롤해야 보이는 화면 상에서 항상 동일한 위치에 머물러야 하는 영구적인 탐색 메뉴와 같은 효과를 만드는 데 유용합니다.
- **스티키 포지셔닝**는 하나의 요소를 `position: static`와 같이 작동하다가 뷰포트 기준에서 사전에 정의된 간격띄우기 지점에 도달한 순간 이후부터는 `position: fixed`와 같이 같이 작동하는 새로운 포지셔닝 메서드이다.

### 간단한 포지셔닝 예제

이러한 페이지 레이아웃 기술에 친숙해지도록 몇 가지 간단한 예를 보여드리겠습니다. 예제는 다음과 같이 모두 동일한 HTML 특성을 갖고 있다:

```html
<h1>포지셔닝</h1>

<p>나는 기본 블록 수준 요소입니다.</p>
<p class="positioned">나는 기본 블록 수준 요소입니다.</p>
<p>나는 기본 블록 수준 요소입니다.</p>
```

이 HTML은 다음과 같은 CSS를 기본값으로 사용하여 스타일링됩니다.

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

렌더링된 출력은 다음과 같다:

{{ EmbedLiveSample('Simple_positioning_example', '100%', 300) }}

### 상대 포지셔닝

상대 포지셔닝 통해 기본 대열 속에서 예상되는 기본값으로 주어지는 위치로부터 항목을 간격띄우기할 수 있다. 이것은 아이콘을 약간 아래로 이동하여 텍스트 레이블에 맞춰 정렬하는 것과 같은 작업을 수행할 수 있다는 의미다. 이를 위해 다음 규칙을 추가하여 상대적인 위치를 추가할 수 있습니다:

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

여기서 우리는 중간 단락에 {{cssxref("position")}} 값을`relative`로 부여하고(이것은 자체적으로 아무것도하지 않는다) 아울러 {{cssxref("top")}}와 {{cssxref("left")}} 속성도 추가한다. 이것은 영향을 받는 요소를 아래로 그리고 오른쪽으로 이동시키는 역할을 한다. 이것은 당신이 기대했던 것과 반대되는 것처럼 보일 수 있지만, 그것을 왼쪽과 상단면에서 밀리는 요소로 생각할 필요가 있다.

이 코드를 추가하면 다음과 같은 결과가 나타난다.

```html hidden
<h1>상대적 포지셔닝</h1>

<p>나는 기본 블록 수준 요소입니다.</p>
<p class="positioned">이것은 내가 상대적으로 포지셔닝한 요소입니다.</p>
<p>나는 기본 블록 수준 요소입니다.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: relative;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Relative_1', '100%', 300) }}

### 절대 포지셔닝

절대 포지셔닝는 보통 흐름(normal flow)에서 요소를 완전히 제거하고 컨테이너 블록의 가장자리로부터 간격띄우기값(오프셋)을 사용하여 배치하는 데 사용된다.

위치 이동이 없던 원래의 예제로 회귀해서 절대 포지셔닝를 구현하기 위해 다음과 같은 CSS 규칙을 추가할 수 있다:

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

여기서 우리는 중간 단락에 `absolute` {{cssxref("position")}} 값과 이전과 동일한 {{cssxref("top")}}과 {{cssxref("left")}}속성을 부여한다. 그러나 이 코드를 추가하면 다음과 같은 결과가 나온다.

```html hidden
<h1>절대 포지셔닝</h1>

<p>나는 기본 블록 수준 요소입니다.</p>
<p class="positioned">이것은 내가 절대적으로 포지셔닝한 요소입니다.</p>
<p>나는 기본 블록 수준 요소입니다.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: absolute;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Absolute_1', '100%', 300) }}

이건 아주 달라! 위치 지정 요소는 이제 페이지 레이아웃의 나머지 부분과 완전히 분리되어 그 것 위에 놓여있다. 나머지 두 단락은 이제 원래 위치에 있던 자기 형제가 존재하지 않은 듯이 나란히 놓여 있다. {{cssxref("top")}}과 {{cssxref("left")}} 속성은 상대적 위치 지정 요소에 대해 미치는 것과는 다른 영향을 절대적 위치 지정 요소에 대해 미친다. 이 경우 간격띄우기값(오프셋)은 페이지의 좌측 최상단을 기준으로 계산되었다. 여기서 컨테이너가 되는 부모 요소를 변경할 수 있으며 [포지셔닝](/ko/docs/Learn/CSS/CSS_layout/위치잡기)에 관한 단원에서 해당 내용을 살펴보겠다.

### 고정 포지셔닝

고정 포지셔닝는 절대 포지셔닝와 같은 방식으로 문서 대열에서 요소를 제거한다. 그러나 컨테이너 위치로부터 간격띄우기를 적용하는 게 아니라 뷰포트를 기준으로 적용된다. 해당 항목이 뷰포트 기준에 비례하여 고정되기 때문에 해당 항목 아래로 페이지가 스크롤할 때 고정된 메뉴 항목과 같은 효과를 생성할 수 있다.

이번 예제의 경우 페이지를 스크롤할 수 있도록 텍스트 형태의 세 단락으로 구성된 HTML에 상자 하나를 `position: fixed`로 지정했다.

```html
<h1>고정 포지셔닝</h1>

<div class="positioned">고정</div>

<p>단락 1.</p>
<p>단락 2.</p>
<p>단락 3.</p>
```

```html hidden
<h1>고정 포지셔닝</h1>

<div class="positioned">고정</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: fixed;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Fixed_1', '100%', 200) }}

### 흡착 포지셔닝

흡착 포지셔닝는 우리의 선택을 기다리며 대기중인 마지막 포지셔닝 메서드다. 이것은 기본값인 정적 포지셔닝와 고정 포지셔닝의 혼합형이다. 항목이 `position: sticky`로 지정된 경우 해당 항목은 뷰포트 기준에서 우리가 정의한 간격띄우기 지점에 도달하기 전까지 보통 흐름(normal flow) 상에서 스크롤된다. 그 지점에 마치 `position: fixed`가 적용된 것처럼 "철썩" 붙게 된다.

```html hidden
<h1>흡착 포지셔닝</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<div class="positioned">흡착</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Sticky_1', '100%', 200) }}

> **참고:** 포지셔닝에 대해 더 알아보고 싶다면 [포지셔닝](/ko/docs/Learn/CSS/CSS_layout/위치잡기) 단원을 보라.

## 테이블 레이아웃

HTML 테이블은 표로 나타낸 데이터를 표시하기에는 무난했다. 그러나 (수년 전, 심지어 기초적인 CSS가 여러 브라우저에서 안정적으로 지원되기 이전에도) 웹 개발자들은 머리글, 바닥글, 서로 다른 단 등을 여러가지 테이블 행과 열에 집어넣어 웹페이지 전체 레이아웃을 짜는데 테이블을 사용하기도 했다. 이것은 당시에는 먹혔지만, 많은 문제가 상존했다. 테이블 레이아웃은 유연하지 않고, 마크업이 과도하고, 디버그하기 어렵고, 의미론적으로 맞지 않았다(예: 스크린 리더 사용자는 테이블 레이아웃을 탐색하는 데 문제가 있다).

테이블 마크업을 사용할 때 테이블이 웹 페이지에 보여지는 방식의 재원(財源)은 테이블 레이아웃을 정의하는 CSS 속성 집합이다. 이러한 속성은 테이블이 아닌 요소를 배치하는 데 사용할 수 있으며, 이 용법은 때때로 "CSS 테이블 용법"으로 기술된다.

아래 예는 이러한 용법을 보여준다. 레이아웃에 CSS 테이블을 사용하는 것은 이 시점에서 낡은 메서드로 간주되어야 한다. flexbox 또는 그리드 레이아웃이 지원되지 않던 매우 오래된 브라우저를 사용하는 사람의 경우에 해당된다.

예제를 살펴보자. 우선, HTML 양식을 생성하는 몇 가지 간단한 마크업 사례다. 개별 입력 요소에는 레이블이 달려있으며, 단락 안에는 캡션도 포함시켰다. 각 한 쌍을 이루는 레이블과 입력 요소는 레이아웃 목적에 따라 {{htmlelement("div")}} 요소에 둘러싸여 있다.

```html
<form>
  <p>우선, 이름과 나이를 말씀해주세요</p>
  <div>
    <label for="이름">이름:</label>
    <input type="text" id="이름" />
  </div>
  <div>
    <label for="성">성:</label>
    <input type="text" id="성" />
  </div>
  <div>
    <label for="나이">나이:</label>
    <input type="text" id="나이" />
  </div>
</form>
```

이제 우리 예제에 해당되는 CSS 차례다. CSS의 대부분은 {{cssxref("display")}} 속성을 사용한 것을 제외하면 대체로 평범한 내용이다. {{htmlelement("form")}}와 복수의 {{htmlelement("div")}}, {{htmlelement("label")}}, {{htmlelement("input")}}는 각기 테이블과 복수의 테이블 행, 테이블 셀을 표시하라는 주문을 받는다. 기본적으로 그들은 HTML 테이블 마크업과 같이 동작하며 기본값으로 레이블과 입력 양식 요소를 멋지게 정렬시킨다. 이제 우리가 해야할 일은 모든 요소가 좀더 멋지게 보이도록 크기와 여백을 조금 추가하는 것이다. 그러면 일이 마무리된다.

눈치 챘겠지만, 캡션 단락은 `display: table-caption;`가 부여되어 테이블 {{htmlelement("caption")}}과 같이 동작하게 만들었고, 또한 `display: table-caption;`를 부여하며 해당 마크업이 소스 코드에서 `<input>` 요소보다 선행함에도 해당 캡션이 스타일 목적에 따라 테이블 하단에 놓이도록 했다. 이렇듯 약간의 유연성이 허용된다.

```css
html {
  font-family: sans-serif;
}

form {
  display: table;
  margin: 0 auto;
}

form div {
  display: table-row;
}

form label,
form input {
  display: table-cell;
  margin-bottom: 10px;
}

form label {
  width: 200px;
  padding-right: 5%;
  text-align: right;
}

form input {
  width: 300px;
}

form p {
  display: table-caption;
  caption-side: bottom;
  width: 300px;
  color: #999;
  font-style: italic;
}
```

이것은 우리에게 다음과 같은 결과를 제공합니다.

{{ EmbedLiveSample('Table_layout', '100%', '170') }}

이 예제 역시 여기 [CSS 테이블 예제](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html)에서 라이브로 볼 수 있고, 이곳 [소스 코드](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/box-model-recap/css-tables-example.html)에서도 역시 볼 수 있다.

## 다단 레이아웃

다단 레이아웃 모듈은 텍스트가 신문지상에 나열되는 방식과 비슷하게 내용을 단 형태로 레이아웃할 수 있는 방법을 제공한다. 단을 따라 위아래 읽기는 사용자가 위아래로 스크롤하도록 강제하길 원하지 않는다면 웹 상황에서 덜 유용하다. 다만 콘텐츠를 단에 배치하는 것은 유용한 기술일 수 있다.

한 블록을 다단 컨테이너 속으로 들여넣으려면 {{cssxref("column-count")}} 속성을 사용하여 브라우저에게 우리가 몇 단으로 나누길 원하는지 밝히거나 {{cssxref("column-width")}} 속성을 사용하여 브라우저에게 몇 단이 됐건 최소 해당 너비만한 단으로 컨테이너를 채우라고 말하면 된다.

아래 예제에서 내부에 일명 `container` 클래스 해당하는 `<div>` 요소를 포함하는 HTML 블록을 가지고 시작한다.

```html
<div class="container">
  <h1>다단 레이아웃</h1>

  <p>단락 1.</p>
  <p>단락 2.</p>
</div>
```

우리는 해당 컨테이너에 200픽셀의 단 너비를 사용해서 브라우저가 컨테이너에 맞아 떨어지도록 최대 200픽셀의 단을 만들며, 그 뒤에 생성된 단 사이 나머지 공간을 나눠쓰게 된다.

```html hidden
<div class="container">
  <h1>다단 레이아웃</h1>

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

```css hidden
body {
  max-width: 800px;
  margin: 0 auto;
}
```

```css
.container {
  column-width: 200px;
}
```

{{ EmbedLiveSample('Multicol_1', '100%', 200) }}

## 요약정리

이번 글에서는 알아야 할 모든 레이아웃 기술에 대한 요약을 간단하게 제공했습니다. 개별 기술에 대한 자세한 내용을 계속 읽어보세요!

{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}
