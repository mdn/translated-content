---
title: 위치잡기
slug: Learn/CSS/CSS_layout/Positioning
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

당신이 일반 문서 레이아웃 대열에서 요소를 끄집어 내어, 그것이 다르게 행동하게 만들수 있게 해주는 것이 위치잡기다. 예를 들어 상대 요소 위에 놓거나 브라우저 뷰 포트 내부의 동일한 위치를 항상 유지하게 해준다. 이 문서는 서로 다른 {{cssxref("position")}} 값을 설명하고, 그 걸 사용하는 방법에 대해서도 설명한다.

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
      <td>CSS 위치잡기가 작동하는 방법 배우기</td>
    </tr>
  </tbody>
</table>

가능하면 우리 깃허브 저장소에 있는 [`0_basic-flow.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) 파일의 사본을 가지고 당신의 컴퓨터상에서 해당 연습을 함께 따라해보시길 바랍니다. ([여기 소스 코드](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/0_basic-flow.html))가 있으니 그걸 착수 파일로 이용하십시요.

## 위치잡기 소개

크게봐서 위치잡기의 개념은 위에서 설명했듯 기본 문서 대열에 따른 동작을 무시하고 흥미로운 효과를 낼 수 있도록 하는 것입니다. 레이아웃 내부의 일부 상자의 위치를 기본 레이아웃 대열 위치에서 약간 변경한다거나, 약간 기묘하거나, 편치않은 느낌을 주고 싶다면 어떨까? 위치잡기가 바로 당신의 도구입니다. 또는 페이지의 다른 부분의 상위에 부동(浮動)하는 사용자 인터페이스 요소를 만들고 싶다라거나 아울러 페이지가 스크롤된 정도와 상관없이 항상 브라우저 창 내부의 동일한 위치에 놓이게 하고 싶다면? 위치잡기는 그런 레이아웃 작업을 가능하게 합니다.

HTML 요소에 적용될 수 있는 여러 가지 유형의 위치잡기가 존재합니다. 어떤 요소상에 특정 유형의 위치잡기가 활성화되도록 하기 위해 {{cssxref("position")}} 속성을 사용합니다.

### 정적 위치잡기

정적 위치잡기는 모든 요소에 주어지는 기본값입니다. 즉, "요소를 문서 레이아웃 대열상에 일반 위치에 배치하라는 것으로 여기서 특별한 것은 없습니다."

이를 입증한다거나, 이어질 섹션에서 다룰 예제를 설정하려면 먼저 HTML상에 두 번째 {{htmlelement("p")}} 요소에 `positioned`라는 클래스를 추가하십시오:

```html
<p class="positioned">...</p>
```

이제 다음과 같은 규칙을 당신의 CSS 하단에 추가하십시요:

```css
.positioned {
  position: static;
  background: yellow;
}
```

이제 저장하고 새로고침하면 두 번째 단락의 배경 색깔이 업데이트된 것을 제외하고 다른 차이가 없다는 것이 확인될 것입니다. 아무 문제없습니다. 앞에서 얘기했듯이 정적 위치잡기는 기본값으로 주어진 동작입니다!

> **참고:** **주석**: 이 시점에 예제의 실제 구현 장면을 [`1_static-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html)에서 볼 수 있습니다.([소스 코드는 여기서 보세요](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/1_static-positioning.html)).

### 상대 위치잡기

상대 위치잡기는 우리가 살펴 첫 번째 위치 유형입니다. 이것은 정적 위치 결정과 매우 유사합니다. 단, 일단 정상 레이아웃 대열상에 위치잡기할 요소가 자리를 잡고나면 페이지의 다른 요소와 중첩되는 것을 포함하여 최종 위치를 수정할 수 있습니다. 당신의 코드에 있는 `position` 선언을 업데이트하십시요.

```css
position: relative;
```

현 시점에서 저장하고 새로 고침하면 전혀 변경된 결과가 확인되지 않습니다. 그럼 요소의 위치를 어떻게 수정할까요? 다음 절에서 설명하겠지만, {{cssxref("top")}}, {{cssxref("bottom")}}과 {{cssxref("left")}}, {{cssxref("right")}}을 사용해야 합니다.

### 상하 좌우 위치잡기 소개

{{cssxref("top")}}, {{cssxref("bottom")}}와 {{cssxref("left")}}, and {{cssxref("right")}}는 {{cssxref("position")}}과 나란히 사용되어 기준 위치에 비례해 정확한 위치잡기를 지정한다. 이를 시험하려면 다음 선언문을 CSS `.positioned` 규칙에 추가하십시오:

```
top: 30px;
left: 30px;
```

> **참고:** 이러한 속성의 값은 당신이 논리적으로 예상할 수 있는 모든 [단위](/ko/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)를 취할 수 있습니다. 예로 pixels, mm, rems, % 등이 해당한다.

이제 저장하고 새로고침하면 다음과 같은 내용의 결과를 얻을 것입니다:

```html hidden
<h1>상대 위치잡기</h1>

<p>
  나는 기본 볼록 수준 요소입니다. 나와 인접한 블록 수준 요소는 내 아래 새 줄에
  자리합니다.
</p>

<p class="positioned">
  기본적으로 우리는 부모 요소의 너비 100%에 걸쳐 있습니다. 우리의 총 너비와 총
  높이는 우리의 콘텐츠 + 패딩 + 테두리 너비 및 높이입니다.
</p>

<p>
  우리는 여백으로 구분됩니다. 여백 축소로 때문에 우리의 여백 중의 하나의 너비로
  구분됩니다. 두게의 여백이 아니라.
</p>

<p>
  인라인 요소 <span>이 것과 같은</span> 그리고 <span>이것이</span> 차례로 같은
  라인에, 그리고 같은 라인에 공간이 있을 경우 인접한 텍스트 노드에 자리를 잡게
  됩니다. 인라인 요소가 대열이탈할 경우
  <span
    >(이 경우와 같이 텍스트를 포함했을 경우) 가능하면 새 줄로
    접혀들어갑니다.)</span
  >, 그렇지 않으면 새로운 라인으로 계속 진행할 것입니다. 이 이미지가 하는
  것처럼: <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('상하_좌우_위치잡기_소개', '100%', 500) }}

근사하죠, 그쵸? 좋습니다. 그러나 이것은 아마도 여러분이 기대했던 것이 아니었을 것입니다. 우리가 좌측 상단을 지정했는데 왜 우측 하단으로 이동했을까요? 처음에는 비논리적으로 들릴지 모르지만, 이것은 상대적 위치잡기가 작용하는 방식일 뿐입니다. 즉, 위치가 지정된 상자의 특정 측면을 밀어서 반대 방향으로 움직이는 보이지 않는 힘이 있다고 생각할 필요가 있습니다. 예를 들어, `top: 30px;`를 지정하면 힘은 상자 상단을 밀어서 30px 아래로 이동하게 만듭니다.

> **참고:** 이 시점에 예제의 실제 구현 장면을 [`2_relative-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html)에서 확인할 수 있습니다([소스 코드 보기](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/2_relative-positioning.html)).

### 절대 위치잡기

절대적인 위치 결정은 매우 다른 결과를 가져옵니다. 당신의 소스 코드에 다음과 같이 위치 선언을 변경해 보겠습니다.

```
position: absolute;
```

지금 저장한 다음에 새로고침하면 다음과 같은 것이 확인되어야 합니다:

```html hidden
<h1>절대 위치잡기</h1>

<p>
  나는 기본 볼록 수준 요소입니다. 나와 인접한 블록 수준 요소는 내 아래 새 줄에
  자리합니다.
</p>

<p class="positioned">
  기본적으로 우리는 부모 요소의 너비 100%에 걸쳐 있습니다. 우리의 총 너비와 총
  높이는 우리의 콘텐츠 + 패딩 + 테두리 너비 및 높이입니다.
</p>

<p>
  우리는 여백으로 구분됩니다. 여백 축소로 때문에 우리의 여백 중의 하나의 너비로
  구분됩니다. 두게의 여백이 아니라.
</p>

<p>
  인라인 요소 <span>이 것과 같은</span> 그리고 <span>이것이</span> 차례로 같은
  라인에, 그리고 같은 라인에 공간이 있을 경우 인접한 텍스트 노드에 자리를 잡게
  됩니다. 인라인 요소가 대열이탈할 경우
  <span
    >(이 경우와 같이 텍스트를 포함했을 경우) 가능하면 새 줄로
    접혀들어갑니다.)</span
  >, 그렇지 않으면 새로운 라인으로 계속 진행할 것입니다. 이 이미지가 하는
  것처럼: <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('절대_위치잡기', '100%', 420) }}

우선, 위치잡기 요소가 원래 있었어야 했던 문서 대열 속 위치에 있던 간격은 더 이상 존재하지 않는다는 점에 유의하십시오. 즉 간격이 더 이상 존재하지 않는 것처럼 첫 번째와 세 번째 요소가 붙어 버렸습니다! 어떤 면에서는, 이것은 사실입니다. 절대적으로 위치한 요소는 더 이상 일반 문서 레이아웃 대열에서 존재하지 않습니다. 대신 다른 모든 것과는 별개로 독자적인 레이어상에 놓여 있습니다. 이것은 매우 유용합니다. 즉, 페이지의 다른 요소의 위치와 간섭하지 않는 격리된 사용자 인터페이스 기능을 만들 수 있습니다. 예를 들어 팝업 정보 상자 및 제어 메뉴, 롤오버 패널, 페이지 어느 곳에서나 끌어서 놓기할 수 있는 유저 인터페이스 페이지 등등…

둘째, 요소의 위치가 변경되었음을 알아차립시다. 이는 {{cssxref("top")}}, {{cssxref("bottom")}}과 {{cssxref("left")}}, {{cssxref("right")}}가 절대 위치잡기에 해당해 다른 방식으로 작동하기 때문입니다. 요소가 진입해야 하는 방향을 지정하기 보다는 요소가 (부모) 콘테이너 요소의 상하좌우 측면으로부터 떨어지는 간격을 지정되어야 합니다. 따라서 이 경우, 내 말은 절대 위치잡기 요소는 "콘테이너 요소"의 상단에서 30px, 왼쪽에서 30px에 위치에 놓여야 한다는 말입니다.

> **참고:** 당신이 필요하다면 요소의 크기를 재지정하기 위해 {{cssxref("top")}}, {{cssxref("bottom")}}과 {{cssxref("left")}}, {{cssxref("right")}}를 사용할 수 있습니다. 당신이 위치잡기한 요소에 `top: 0; bottom: 0; left: 0; right: 0;`과 `margin: 0;`를 지정한 뒤 어떻게 되냐 보십시요! 해보고 다시 원상태로 돌리십시요...

> **참고:** **주석**: 그렇습니다. 여백이 위치잡기한 요소에 여전히 영향을 미칩니다. 그러나 마진 축소 영향은 업습니다.

> **참고:** 당신은 [`3_absolute-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html)에서 예제를 확인할 수 있습니다([소스 코드를 보세요](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/3_absolute-positioning.html)).

### 위치잡기 상황

어떤 요소가 절대 위치잡기의 기준이 되는 "콘테이너 요소"입니까? 이것은 위치잡기 요소의 조상에 지정된 위치 속성의 여하에 따라 많이 달라집니다. (See [콘테이너 블록 식별하기](/ko/docs/Web/CSS/Containing_block#Identifying_the_containing_block)).

조상 요소가 명시적으로 정의된 위치 속성을 가지고 있지 않으면 초깃값으로 모든 조상 요소에 정적 위치가 부여됩니다. 그에 따른 결과, 절대적 위치잡기한 요소는 **initial containing block**에 포함되게 됩니다. 초기 콘테이너 블록은 브라우저 뷰포트 크기의 용적을 가지며, 자신도 {{htmlelement("html")}} 요소를 포함하는 블록입니다. 간단히 말해서, 절대적 위치잡기한 요소는 {{htmlelement("html")}} 요소의 외부에 포함되어 초기 뷰포트 기준과 비례한 곳에 위치하게 됩니다.

위치잡기한 요소는 HTML 소스의 {{htmlelement("body")}} 안에 중첩되지만 최종 레이아웃에서는 페이지의 가장자리 상단과 왼쪽에서 30px 떨어져 있습니다. 우리는 요소의 절대적 위치잡기에서 어떤 요소에 비례해 위치잡기할지 기준이 되는 **positioning context**(위치잡기 상황)을 변경할 수 있습니다. 이것은 조상 요소 중 하나를 기준으로 위치잡기 설정이 이뤄집니다. 다시말해 요소의 내부에 중첩된 요소 중 하나가 기준이 됩니다(내부에 중첩되지 않은 요소를 기준삼아 비례적으로 위치시킬 수 없습니다). 이를 증명하기 위해 다음과 같은 선언을 `body` 규칙에 추가하십시요:

```
position: relative;
```

이로써 다음과 같은 결과가 나와야 합니다.

```html hidden
<h1>위치잡기 상황</h1>

<p>
  나는 기본 볼록 수준 요소입니다. 나와 인접한 블록 수준 요소는 내 아래 새 줄에
  자리합니다.
</p>

<p class="positioned">
  이제 나는 <code>&lt;html&gt;</code> 요소가 아닌
  <code>&lt;body&gt;</code> 요소를 기준으로 비례하여 절대적 위치잡기합니다.
</p>

<p>
  우리는 여백으로 구분됩니다. 여백 축소로 때문에 우리의 여백 중의 하나의 너비로
  구분됩니다. 두게의 여백이 아니라.
</p>

<p>
  인라인 요소 <span>이 것과 같은</span> 그리고 <span>이것이</span> 차례로 같은
  라인에, 그리고 같은 라인에 공간이 있을 경우 인접한 텍스트 노드에 자리를 잡게
  됩니다. 인라인 요소가 대열이탈할 경우
  <span
    >(이 경우와 같이 텍스트를 포함했을 경우) 가능하면 새 줄로
    접혀들어갑니다.)</span
  >, 그렇지 않으면 새로운 라인으로 계속 진행할 것입니다. 이 이미지가 하는
  것처럼: <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('위치잡기_상황', '100%', 420) }}

위치잡기한 요소는 이제 기준이 되는 {{htmlelement("body")}} 요소와 비례한 위치에 놓이게 된다.

> **참고:** 당신은 이 시점에 예제의 실제 구현 장면을 [`4_positioning-context.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html)에서 볼 수 있습니다([소스 코드 보기](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/4_positioning-context.html)).

### z-인덱스 소개

이 모든 절대적 위치잡기는 제법 재미나지만, 아직 고려하지 않은 또 다른 것이 있습니다. 요소가 겹치기 시작하면 어떤 요소가 다른 요소 위에 나타나는지 결정하는 기준은 무엇입니까? 지금까지 우리가 본 예제에서, 우리는 위치잡기 상황 속에 단 하나의 위치잡기할 요소만 주어졌습니다. 그리고 그것은 상위에 나타납니다. 왜냐면 위치잡기 요소가 비 위치잡기 요소보다 우위를 점하기 때문입니다. 하나 이상의 요소가 있을 때는 어떨까요?

다음을 CSS에 추가해 첫 단락도 절대적 위치잡기 대상으로 만들어 봅시다.

```
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

이 시점에서 당신이 보게될 것은 첫 번째 단락이 녹색으로 칠해지고, 문서 대열을 벗어나 원래 위치에서 약간 위에 자리를 잡습니다. 또한, 두 개의 단락이 겹치는 원래의 `.positioned` 클래스가 지정된 단락 아래에 겹겹이 포개집니다. 이렇게 되는 까닭은 `.positioned` 클래스로 지정된 단락이 소스 순서상에 두 번째 단락이고 소스 순서상에 뒤에 있는 위치잡기한 요소가 소스 순서상 앞서는 위치잡기한 요소보다 우위를 점하기 때문입니다.

스택 순서를 변경할 수 있습니까? 네, {{cssxref("z-index")}} 속성을 사용하면 가능합니다. z-인덱스는 z축을 가리킵니다. 당신은 앞서 배경 이미지와 그림자 오프셋을 떨어뜨리는 것과 같은 사물의 위치를 파악하는 방법을 찾는 과정에서 웹 페이지를 수평(x축)과 수직(y축) 좌표로 논의한 학습 과정을 기억하실 겁니다. (0,0)은 페이지(또는 요소)의 상단 왼쪽에 있으며, x-축 및 y-축은 페이지의 오른쪽 및 아래쪽으로 진행합니다(가로쓰기 언어의 경우를 말합니다).

웹 페이지에는 z축이 있습니다. 스크린 표면으로부터 진행하는 가상 라인, 즉 사용자 얼굴 쪽으로 향하는(당신이 화면 위에 놓고 싶은 것을 망론한다). {{cssxref("z-index")}} 값은 위치잡기한 요소가 해당 축상에 놓일 경우에 영향을 미칩니다. 양수 값은 스택 상단으로 이동하고 음수 값은 스택 아래로 이동합니다(역주: 상단으로 겹겹이 쌓이거나 하단으로 겹겹이 쌓여진다) 기본값으로 위치잡기한 요소는 모두 `z-index`가 `auto` 값을 가지며, 이는 사실상 0입니다.

스택 순서를 변경하려면 다음 선언을 `p:nth-of-type(1)` rule: 규칙에 추가하십시오.

```
z-index: 1;
```

이제 녹색 단락이 상단에 놓여진 완성된 예가 보여야 합니다.

```html hidden
<h1>z-인덱스</h1>

<p>
  나는 기본 볼록 수준 요소입니다. 나와 인접한 블록 수준 요소는 내 아래 새 줄에
  자리합니다.
</p>

<p class="positioned">
  이제 나는 <code>&lt;html&gt;</code> 요소가 아닌
  <code>&lt;body&gt;</code> 요소를 기준으로 비례하여 절대적 위치잡기합니다.
</p>

<p>
  우리는 여백으로 구분됩니다. 여백 축소로 때문에 우리의 여백 중의 하나의 너비로
  구분됩니다. 두게의 여백이 아니라.
</p>

<p>
  인라인 요소 <span>이 것과 같은</span> 그리고 <span>이것이</span> 차례로 같은
  라인에, 그리고 같은 라인에 공간이 있을 경우 인접한 텍스트 노드에 자리를 잡게
  됩니다. 인라인 요소가 대열이탈할 경우
  <span
    >(이 경우와 같이 텍스트를 포함했을 경우) 가능하면 새 줄로
    접혀들어갑니다.)</span
  >, 그렇지 않으면 새로운 라인으로 계속 진행할 것입니다. 이 이미지가 하는
  것처럼: <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}

p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1;
}
```

{{ EmbedLiveSample('z-인덱스_소개', '100%', 400) }}

z-인덱스는 단위가 없는 인덱스 값만 허용한다는 점에 유의하자; 하나의 요소가 Z축 위로 23픽셀이 되도록 지정할 수 없습니다. 그런 식으론 작동하지 않습니다. 높은 값의 요소는 낮은 값 요소의 위로 간니다. 그러니 당신이 어떤 값을 사용할 지에 달려있습니다. 2와 3을 사용하면 300과 40000과 같은 효과를 얻을 수 있습니다.

> **참고:** 이 시점에 예제의 실제 구현 장면을 [`5_z-index.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html)에서 볼 수 있습니다([소스 코드 보기](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/5_z-index.html)).

### 고정 위치잡기

이제 고정 위치잡기를 살펴보자. 이것은 절대 위치잡기와 정확히 같은 방식으로 작동합니다.단 한 가지 핵심 차이점이 있습니다. 절대 위치잡기는 {{htmlelement("html")}} 요소나 가까운 조상 요소를 기준으로 비례해 요소를 고정시키지만, 고정 위치잡기는 브라우저 뷰 포트 자체를 기준으로 비례해 요소를 고정합니다. 즉, 탐색 메뉴가 계속 자리를 지키는 것과 같이 제자리에 고정된 유용한 사용자 인터페이스 항목을 생성할 수 있습니다.

우리가 무슨 얘기를 하는지 보여주기 위해 간단한 예를 들어봅시다. 먼저 CSS에서 기존 `p:nth-of-type(1)`과 `.positioned` 규칙을 삭제합니다.

이제 `position: relative;` 선언을 지우고, 다음과 같이 고정 높이를 추가하는 규칙을 `body` 규칙에 업데이트합니다:

```
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

이제 우리는 {{htmlelement("h1")}} 요소에 `position: fixed;`를 부여하고, 그걸 뷰 포트의 상단 중앙에 놓게 합니다. 다음 규칙을 CSS에 추가하세요.

```
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin: 0 auto;
  background: white;
  padding: 10px;
}
```

화면 상단에 고정시키려면 `top: 0;`이 요구됩니다. 그런 다음 제목에 콘텐츠 열과 동일한 너비를 부여하고 콘텐츠를 중앙에 놓기 위해 오래됐지만, 신뢰감을 주는 `margin: 0 auto;`를 사용합니다. 그런 다음 제목에 흰색 배경과 패딩을 부여해 제목 아래에 내용이 보이지 않도록 합니다.

지금 저장하고 새로고침하면 제목이 고정되는 사소하지만, 재미난 효과를 볼 수 있으며, 스크롤 막대를 위로 올리면 콘텐츠가 드러나고 아래로 내리면 제목 밑으로 콘텐츠가 사라지는 것처럼 보입니다. 하지만 우리는 이것을 더 개선할 수 있습니다. 현재 일부 콘텐츠가 시작부터 제목에 밑에 깔려있는 부분 말입니다. 위치잡기한 제목이 문서 대열상에서 모습을 드러내지 않기 때문입니다. 그래서 나머지 콘텐츠가 맨 위로 이동했습니다. 우리는 올라간 것을 조금 아래로 이동시켜야 합니다. 우리는 그걸 첫 번째 단락에 최상위 여백을 설정해서 달성할 수 있습니다. 지금 다음 내용을 추가하세요:

```
p:nth-of-type(1) {
  margin-top: 60px;
}
```

당신은 이제 완성된 예제를 볼 수 있어야 합니다:

```html hidden
<h1>고정 위치잡기</h1>

<p>
  나는 기본 볼록 수준 요소입니다. 나와 인접한 블록 수준 요소는 내 아래 새 줄에
  자리합니다.
</p>

<p class="positioned">나는 더 이상 특별한 위치를 차지하지 않습니다...</p>

<p>
  우리는 여백으로 구분됩니다. 여백 축소로 때문에 우리의 여백 중의 하나의 너비로
  구분됩니다. 두게의 여백이 아니라.
</p>

<p>
  인라인 요소 <span>이 것과 같은</span> 그리고 <span>이것이</span> 차례로 같은
  라인에, 그리고 같은 라인에 공간이 있을 경우 인접한 텍스트 노드에 자리를 잡게
  됩니다. 인라인 요소가 대열이탈할 경우
  <span
    >(이 경우와 같이 텍스트를 포함했을 경우) 가능하면 새 줄로
    접혀들어갑니다.)</span
  >, 그렇지 않으면 새로운 라인으로 계속 진행할 것입니다. 이 이미지가 하는
  것처럼: <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

h1 {
  position: fixed;
  top: 0px;
  width: 500px;
  margin: 0 auto;
  background: white;
  padding: 10px;
}

p:nth-of-type(1) {
  margin-top: 60px;
}
```

{{ EmbedLiveSample('고정_위치잡기', '100%', 400) }}

> **참고:** 당신은 이 시점에 예제의 실제 구현 장면을 [`6_fixed-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html)에서 볼 수 있습니다 ([소스 코드는 여기서 보세요](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/6_fixed-positioning.html)).

### position: sticky

이용할 수 있는 `position: sticky`라고 불리우는 또 다른 위치잡기 값이 있습니다. 이것은 다른 위치잡기보다 다소 새로운 것입니다. 이것은 기본적으로 상대 위치잡기와 고정 위치잡기가 혼합된 하이브리드로서, 위치잡기 요소가 특정 임계점에(예로 뷰포트의 상단으로부터 10px) 스크롤될 때까지 상대 위치잡기처럼 행동할 수 있다가 그 뒤에 위치가 고정됩니다. 예를 들어, 탐색 막대가 특정 지점까지 페이지와 함께 스크롤한 다음 페이지 상단에 흡착되도록 사용할 수 있습니다.

```html hidden
<h1>흡착 위치잡기</h1>

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

{{ EmbedLiveSample('흡착_1', '100%', 200) }}

`position: sticky`의 일반적 사용례기도 하고 흥미로운 사용례는 스크롤링하다 제목에 도달하면 서로 다른 제목이 페이지의 맨 위에 흡착되는 색인 페이지를 만드는 것입니다. 이런 사례에 대한 마크업은 다음과 같은 모습일 수 있습니다:

```html
<h1>흡착 위치잡기</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

CSS는 다음과 같이 보일 수 있다. 일반 대열에서는 {{htmlelement("dt")}} 요소가 콘텐츠와 함께 스크롤됩니다. {{cssxref("top")}} 값이 0이고 {{htmlelement("dt")}} 요소에 `position: sticky`를 추가하면 이를 지원하는 브라우저는 그 위치(0)에 도달할 때 머리글을 브라우저 뷰포트 상단에 흡착시킵니다. 그 후 각각의 후속 머리글은 자신의 위치까지 스크롤하는 시점에 이전 머리글을 교체합니다.

```css
dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```html hidden
<h1>흡착 위치잡기</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

{{ EmbedLiveSample('흡착_2', '100%', 200) }}

> **참고:** 당신은 이 시점에 예제의 실제 구현 장면을 [`7_sticky-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html)에서 볼 수 있습니다([소스 코드는 여기서 보세요](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/7_sticky-positioning.html)).

## 요약정리

기본적인 위치잡기를 가지고 놀이삼아 시험해 보니 재미있었을 것이다; 비록 이것이 완전체 레이아웃에 사용할 수 있는 방법은 아니지만, 여러분이 보았다시피 이것이 알맞은 용도로 사용될 수 있는 많은 작업들이 있다.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

## 참조 항목

- {{cssxref("position")}} 속성 참조.
- 좀 더 유용한 구상을 위한 [실용적인 위치잡기 사례](/ko/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
