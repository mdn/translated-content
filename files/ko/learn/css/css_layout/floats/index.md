---
title: Floats
slug: Learn/CSS/CSS_layout/Floats
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

원래 텍스트 블록 내에서 float 이미지를 위한 {{cssxref("float")}} 속성은 웹 페이지에서 다단 레이아웃을 생성할 용도로 가장 널리 사용되는 도구 중 하나로 자리매김했었습니다. flexbox와 grid의 출현과 함께 float 속성은 이 문서에서 설명하겠지만, 원래의 목적대로 돌아갔습니다.

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
        웹페이지상에 float 기능을 생성하는 방법과 clear 속성과 floats clearing
        을 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## floats의 배경

float 속성은 웹 개발자가 텍스트 열 내부에 float하는 이미지를 포함하고, 아울러 해당 이미지의 좌측 우측 주변으로 텍스트를 둘러싸는 간단한 레이아웃을 구현할 수 있도록 도입되었습니다. 이런 것은 신문 레이아웃에서 볼 수 있는 종류입니다.

그러나 웹 개발자들은 이미지뿐만 아니라 무엇이든 float할 수 있음을 빠르게 깨달았고, 그래서 floats 사용이 확대되었습니다. 앞서 살펴본 [고급 단락 예제](/ko/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#Active_learning_A_fancy_paragraph)는 재미있는 드롭캡 효과를 생성하는 데 floats를 어떻게 사용할 수 있는지를 보여줍니다.

floats는 일반적으로 상대 요소와 나란히 놓이도록 float(浮動)하는 다단 정보를 갖춘 웹 사이트의 전체 레이아웃을 만들는데 널리 사용되어 왔다(기본 행동은 다단 무리가 소스에서 보이는 순서와 같은 순서대로 상대 요소 아래에 자리잡기하는 것이다). 더 새롭고 더 나은 레이아웃 기술이 나와있으므로 이러한 방식으로 floats를 사용하는 것은 [낡은 기술](/ko/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)로 간주되어야 합니다.

이 문서에서는 floats의 적절한 용도에 집중할 것입니다.

## 간단한 float 예제

floats를 어떻게 사용하는지 알아보자. 우리는 요소 주위에 텍스트 블록을 float하는 것이 포함된 아주 간단한 예제로 시작할 것입니다. 아래 내용을 따라하려면 당신의 컴퓨터에 `index.html` 파일을 새로 작성하여, 거기에 [간단한 HTML 템플릿](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)으로 채우고, 파일 내부의 적절한 위치에 아래 코드를 삽입하면 됩니다. 해당 섹션의 맨 아래에는 최종 코드가 어떻게 생겼는지에 대한 실제 예제가 있습니다.

첫째, 간단한 HTML로 시작하겠습니다. HTML body 부분에 다음 내용을 추가하고, body 안에 있었던 모든 내용을 제거합니다.

```html
<h1>간단한 float 예제</h1>

<div class="box">float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
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
```

이제 다음 CSS를 HTML에 적용하십시요.({{htmlelement("style")}} 요소를 사용할지 개별 `.css` 파일에 대한 {{htmlelement("link")}}를 사용할지는 당신의 선택 여하에 달려있습니다.):

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

지금 저장하고 새로 고침하면, 여러분이 기대한 것과 비슷한 것을 보게 될 것입니다. 다시말해 일반 대열에 속한 상자는 텍스트 위에 위치를 잡고 있습니다. 텍스트가 상자 주변에 float하려면 아래에서 보듯 `.box` 규칙에 두 가지 속성을 추가하십시요.

```css
.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

이제 저장하고 새로 고침하면 다음과 같은 것을 볼 수 있습니다.

```html hidden
<h1>간단한 float 예제</h1>

<div class="box">float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('float_1', '100%', 500) }}

이제 floats가 어떻게 작동하는지 생각해 봅시다. floats로 설정된 대상 요소(이 경우 {{htmlelement("div")}} 요소)는 문서의 일반 레이아웃 대열에서 들어내어 부모 콘테이너(이 경우는 {{htmlelement("body")}})의 왼편에 고정되어 있습니다. 일반 레이아웃 대열에서 float 요소 아래에 오는 모든 콘텐츠는 이제 그 주변을 감싸게 되며, 애초 해당 float 요소가 있던 상층부를 포함해 오른쪽으로 공간을 차지합니다. 거기서 멈추게 됩니다.

콘텐츠를 오른쪽으로 float하는 것은 정확히 같은 효과를 가져 오지만, float 요소는 역으로 오른쪽에 고정되고 컨텐츠는 float 요소의 왼쪽 주변을 둘러싸게 됩니다. 직전 CSS 규칙 집합에서 float 값을 `right`로 변경하고 {{cssxref("margin-right")}}를 {{cssxref("margin-left")}}로 대체해 그 결과가 무엇인지 확인하십시오.

텍스트를 밀어내도록 float에 여백을 추가할 수 있지만, float 로부터 텍스트를 이동시키기 위해 텍스트에 여백을 추가할 수는 없습니다. 왜 그런가하면 float 요소가 일반 대열에서 이탈된 상태이고, 후속 항목에 속한 상자 무리가 실제로 동 float 의 뒤에 나열되기 때문입니다. 당신의 예제에 일부 내용을 변경해보면 그점을 증명할 수 있습니다.

float 상자의 바로 뒤에 있는 텍스트 형태의 첫 번째 단락에 `special` 클래스를 추가하십시요. 그 다음에 당신의 CSS에 다음 규칙을 추가합니다. 이들 규칙에 따라 당신의 후속 단락에는 배경색이 주어집니다.

```css
.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

해당 효과를 쉽게 확인해보려면 float에 대한 `margin-right`를 `margin`으로 대체하여 float의 주변 전체에 공간을 확보하십시오. 아래 예제에서와 같이 단락의 배경이 float 상자 바로 아래에서 펼쳐지는 것을 확인할 수 있습니다.

```html hidden
<h1>간단한 float 예제</h1>

<div class="box">float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p>
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.special {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

{{ EmbedLiveSample('float_2', '100%', 500) }}

우리의 후속 요소에 속한 라인 상자가 짧아져서 텍스트가 floats 주위로 펼쳐지고 있지만, floats가 일반 대열에서 제거되었기 때문에 단락 주변 상자는 여전히 전체 너비로 유지하고 있습니다.

## floats 정리하기

우리는 float가 일반 대열에서 제거되고 다른 요소가 그 옆에 표시되는 것을 보았습니다. 따라서 후속 요소가 치고 올라오는 것을 막으려면 그것을 정리해야 합니다. 그것은 {{cssxref("clear")}} 속성으로 달성됩니다.

이전 예제에서 당신이 사용한 HTML에서 float 항목 아래에 위치한 두 번째 단락에 `cleared` 클래스를 추가하십시요. 그 뒤 당신의 CSS에 다음 내용을 추가하세요.

```css
.cleared {
  clear: left;
}
```

```html hidden
<h1>간단한 float 예제</h1>

<div class="box">float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate.
</p>

<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.cleared {
  clear: left;
}
```

{{ EmbedLiveSample('float_3', '100%', 600) }}

다음 단락은 float 요소를 clear 하며, 더 이상 그 옆에 부상하지 않음을 알아야 합니다. `clear` 속성은 다음과 같은 값을 받아들입니다:

- `left`: 왼쪽에 부상한 항목들 clear
- `right`: 오른쪽에 부상한 항목들 clear
- `both`: 왼쪽 오른쪽 관계 없이 부상한 항목들 clear

## floats 주변을 둘러싼 상자 정리하기

이제 당신은 float 요소를 후속하는 무언가를 정리하는 방법을 알고 있지만, 장신 floats와 단신 단락이 있고 두 요소 주변을 둘러싼 하나의 상자가 있을 경우에는 어떤 일이 일어나는지 살펴보십시요. 첫 단락과 우리의 float 상자가 `wrapper` 클래스에 해당하는 {{htmlelement("div")}} 요소로 둘러싸지도록 문서를 변경하십시오.

```html
<div class="wrapper">
  <div class="box">float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
```

당신의 CSS에 `.wrapper` 클래스에 대해 다음 규칙을 추가한 뒤 페이지를 새로 고침하십시오.

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}
```

원형 `.cleared` 클래스에 추가된 것입니다.

```css
.cleared {
  clear: left;
}
```

여러분이 보게 될 것은 문단에 배경 이미지를 놓는 예제에서와 비슷하게 배경색이 floats 뒤에서 펼쳐지고 있습니다.

```html hidden
<h1>간단한 float 예제</h1>
<div class="wrapper">
  <div class="box">float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>

<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.cleared {
  clear: left;
}
```

{{ EmbedLiveSample('float_4', '100%', 600) }}

반복되는 얘기지만, 이렇게 된 까닭은 floats가 정상 대열에서 제거되었기 때문입니다. 후속 요소를 정리해도 이럴 때는 상자 정리 문제에 도움이 되지 않습니다. 즉 상자의 밑단이 float 항목을 애워싸고, 짧은 컨텐츠라도 동 컨텐츠를 애워싸길 원할 경우에는 도움이 되질 않습니다. 이를 처리하려면 생각할 수 있는 세 가지 방법이 있는데, 그 중 두 가지 방법은 모든 브라우저에서 작동하지만, 약간 땜질식이며, 세 번째 새로운 방법은 이런 상황을 제대로 처리합니다.

### The clearfix hack

이 상황을 처리하는 전통적인 방법은 "clearfix hack"이라고 알려진 내용을 사용하는 것입니다. 여기에는 floats와 그걸 둘러싼 콘텐츠가 들어 있는 상자 뒤에 일부 생성된 콘텐츠를 삽입하고, 그것에 (좌측 우측 관계없는) `clear: both;`를 설정하는 것을 말합니다.

우리의 예제에 다음과 같은 CSS를 추가하세요.

```css
.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

이제 페이지를 새로고침하면 상자가 지워집니다. 이것은 본질적으로 항목 아래에 `<div>`와 같은 HTML 요소를 추가하고, 거기에 `clear: both`를 설정한 것과 같습니다.

```html hidden
<h1>간단한 float 예제</h1>
<div class="wrapper">
  <div class="box">float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}

.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

{{ EmbedLiveSample('float_5', '100%', 600) }}

### overflow 사용

다른 대안으로는 `.wrapper` 클래스에 {{cssxref("overflow")}} 속성을 `visible` 이 외의 값으로 설정하는 방법이 있습니다.

이전 섹션에서 추가한 clearfix CSS 부분을 제거하고 그 대신 `.wrapper` 클래스에 대한 CSS 규칙에 `overflow: auto`를 추가합니다. 반복되는 얘기지만, 상자가 정리되었을 겁니다.

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}
```

```html hidden
<h1>간단한 float 예제</h1>
<div class="wrapper">
  <div class="box">float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('float_6', '100%', 600) }}

이 예는 **block formatting context**라고(블록 서식 상황) 알려진 것을 생성하여 처리합니다. 이것은 당신의 페이제 내부 미니 레이아웃과도 같습니다. 그 안에 모든 것이 포함되어 있으므로 우리의 float 요소는 블록 서식 상황 내부에 포함되어 있으며 배경은 두 개 항목 뒤에 펼쳐집니다. 그러나 어떤 경우에는 overflow 사용에 따른 의도하지 않은 결과 때문에 원치 않는 스크롤 막대나 잘린 그림자가 발견될 수 있습니다.

### display: flow-root

이 문제를 해결하는 현대적인 방식은 `display` 속성에서 `flow-root`값을 사용하는 방법입니다. 이것은 임시방편을 사용하지 않고 블록 서식 상황을 생성하기 위해만 존재합니다. 이를 사용할 때 의도하지 않은 결과는 없습니다. 당신의 `.wrapper` 규칙에서 `overflow: auto`를 제거하고 `display: flow-root`를 추가합니다. 당신이 이 기능을 지원하는 브라우저가 있다는 가정 하에 상자가 정리될 것입니다.

```css
.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}
```

```html hidden
<h1>간단한 float 예제</h1>
<div class="wrapper">
  <div class="box">float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate.
  </p>
</div>
<p class="cleared">
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
  imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa
  at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
  ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
  convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
  Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut
  luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare
  felis, eget fermentum sapien.
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
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

{{ EmbedLiveSample('float_7', '100%', 600) }}

## 요약정리

당신은 현대적인 웹 개발에서 floats에 대해 알아야 할 것은 이제 모두 알게 되었습니다. 과거에 어떤 식으로 사용되었는지에 관한 정보에 대해선 [레거시 레이아웃 메서드](/ko/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)에 관한 문서를 보십시요. 오래된 프로젝드에 몸 담을 일이 생긴다면 유용할 수도 있습니다.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}
