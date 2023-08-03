---
title: 미디어 쿼리 초보자 안내서
slug: Learn/CSS/CSS_layout/Media_queries
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}

**CSS Media Query**는 예를 들어 "뷰포트가 480 픽셀보다 넓다."라고 여러분이 지정한 규칙에 브라우저 및 장치 환경이 일치하는 경우에만 CSS를 적용할 수 있는 방법을 제공합니다. 미디어 쿼리는 뷰포트의 크기에 따라 서로 다른 레이아웃을 생성할 수 있기 때문에 반응형 웹 디자인의 중요한 부분입니다. 하지만 사용자가 실행 중인 환경에 대해서 다른 것들을 감지하는 데에도 사용할 수 있습니다. 예를 들면 사용자가 마우스가 아닌 터치스크린을 사용하는지와 같이 실행 중인 환경에 대한 여러 내용들을 탐지하는 데도 사용할 수 있습니다. 이번 단원에서는 먼저 미디어 쿼리에 사용된 구문에 대해 배우고, 이어 해당 구문을 가공의 예제에서 사용하여 간단한 디자인이 어떻게 반응할 수 있는지 살펴보겠습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선결 사항:</th>
      <td>
        HTML의 기초인 (<a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 입문서</a
        >를 공부하세요), 그리고 CSS의 작동 방식을 파악하기 위해 (<a
          href="/ko/docs/Learn/CSS/First_steps"
          >CSS 첫걸음</a
        >과
        <a href="/ko/docs/Learn/CSS/Building_blocks">CSS 구성 블록</a>를
        공부하세요.)
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        미디어 쿼리를 사용하는 방법과 그걸 이용해 반응형 디자인을 생성하기 위한
        가장 대표적인 접근법 파악하기.
      </td>
    </tr>
  </tbody>
</table>

## 미디어 쿼리 기본

가장 간단한 미디어 쿼리 구문은 다음과 같습니다:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

미디어 쿼리 구문의 구성 요소:

- 여기 코드가 어떤 미디어를 위한 것인지 브라우저에 알려주는 미디어 유형(예를 들어, 인쇄 또는 화면).
- 괄호로 묶은 CSS 규칙이 적용되기 위해 전달되어야 하는 규칙 또는 조건문 격인 미디어 표현식.
- 조건문을 통과하고 미디어 유형이 올바른 경우 적용되는 CSS 규칙 집합.

### 미디어 유형

당신이 지정할 수 있는 미디어 유형

- `all`
- `print`
- `screen`

다음 미디어 쿼리는 페이지가 인쇄된 경우에만 본문을 12pt로 설정합니다. 페이지가 브라우저에 로드될 때에는 적용되지 않습니다.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> **참고:** 이 미디어 타입은 {{glossary("MIME type")}}과 다릅니다.

> **참고:** 수준 3 미디어 쿼리 규격에 정의된 여러 가지 다른 미디어 유형이 있습니다. 이들은 사장되었으니 피해야 합니다.

> **참고:** 미디어 유형은 선택사항입니다. 미디어 쿼리에 미디어 유형을 표시하지 않으면 미디어 쿼리는 기본값으로 모든 미디어 유형에 대한 것으로 해석됩니다.

### 미디어 기능 규칙

미디어 유형을 지정한 뒤에 규칙을 적용할 미디어 기능을 선정할 수 있습니다.

#### 너비와 높이

반응형 디자인을(그리고 광범위한 브라우저 지원이 되도록) 만들기 위해 가장 자주 탐문하는 기능은 뷰포트 너비이며, `min-width`와 `max-width`, `width` 등의 미디어 기능을 활용하여 뷰포트가 특정 너비 이상 또는 이하인 경우 CSS를 적용할 수 있습니다.

이러한 특징들은 다른 화면 크기에 반응하는 레이아웃을 생성하는 데 사용됩니다. 예를 들어 뷰포트가 정확히 600픽셀인 경우 본문 색상을 빨간색으로 변경하려면 다음과 같은 미디어 쿼리를 사용합니다.

```css
@media screen and (width: 600px) {
  body {
    color: red;
  }
}
```

[이 예제를](https://mdn.github.io/css-examples/learn/media-queries/width.html) 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/width.html).

`width`(및 `height`) 미디어 기능은 범위 지정에 사용될 수 있습니다. 따라서 `min-` or `max-` 접두사를 붙이게 되면 최소값인지 최대값인지 표시할 수 있습니다. 예를 들어 뷰포트가 600 픽셀보다 좁은 경우 색깔을 파란색으로 만들기 위해 `max-width`:를 사용할 수 있습니다.

```css
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
```

[이 예제를](https://mdn.github.io/css-examples/learn/media-queries/max-width.html) 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/max-width.html).

실제로 최소값 또는 최대값을 사용하는 것이 반응형 디자인인 경우에 훨씬 유용하므로 `width` 또는 `height` 값을 사용하는 경우는 좀처럼 흔치 않습니다.

미디어 쿼리 규격 수준 4 및 5에 소개된 최신 기능 중 일부가 제한적으로 브라우저 지원이 되지만, 당신이 테스트할 수 있는 다른 여러 미디어 기능이 있습니다. 각 기능은 브라우저 지원 정보와 함께 MDN에 문서화되어 있으니만큼 당신은 [미디어 쿼리 사용: 미디어 기능](/ko/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features)에서 전체 목록을 찾을 수 있습니다.

#### 방향성

잘 지원되는 미디어 기능 중 하나는 `orientation`로 세로 모드인지 가로 모드인지를 검사할 수 있도록 해줍니다. 장치가 가로 방향에 있는 경우 본문 텍스트 색상을 변경하려면 다음과 같은 미디어 쿼리를 사용합니다.

```css
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```

[이 예제를](https://mdn.github.io/css-examples/learn/media-queries/orientation.html) 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/orientation.html).

표준 데스크톱 뷰에는 가로 방향이 주종을 이루고 있으며, 이 가로 방향에서 잘 작동하는 디자인은 휴대폰 또는 태블릿상에서 세로 모드로 볼 때 잘 작동하지 않을 수 있습니다. (가로/세로 모드의) 방향성 테스트는 여러분이 세로 모드의 장치에 최적화된 레이아웃을 생성할 수 있게 도움을 줄 수 있습니다.

#### 포인팅 장치의 사용

수준 4 규격의 일부로 `hover` 미디어 기능이 도입되었습니다. 이 기능은 사용자가 요소 위에 (마우스 커서를) 올릴 수 있는 능력을 가진 조건인지를 시험할 수 있다는 것을 의미합니다. 본질적으로 사람들이 어떤 종류의 포인팅 장치를 사용하는지를 말합니다. 터치 스크린 및 키보드 네비게이션은 요소 위에 식별자를 올릴 수 없습니다.

```css
@media (hover: hover) {
  body {
    color: rebeccapurple;
  }
}
```

[이 예제를](https://mdn.github.io/css-examples/learn/media-queries/hover.html) 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/hover.html).

사용자가 포인팅 장치를 사용할 수 없다고 파악했다면 기본적으로 대화형 기능을 표시할 수 있습니다. 포인팅 장치를 사용할 수 있는 사용자의 경우 링크에 마우스를 올리는 기능을 이용하도록 선택할 수 있습니다.

마찬가지로 `pointer` 미디어 기능이 수준 4 규격에 포함되어 있습니다. 이것은 `none`과 `fine` `coarse`의 세 가지 값을 취할 수 있습니다. `fine` 포인터는 마우스나 트랙패드와 같은 것입니다. 이 값으로 사용자가 작은 영역을 정확하게 공략할 수 있게 됩니다. `coarse` 포인터는 터치스크린 상에 손가락을 말합니다. `none` 값은 사용자가 포인팅 장치가 없다는 의미입니다. 아마 키보드 또는 음성 명령만으로 탐색하고 있을 수 있습니다.

`pointer` 사용이 당신에게 주는 이점이 있다면 사용자가 화면상에서 상호 작용하는 유형에 반응하는 더 나은 인터페이스를 설계할 수 있다는 것입니다. 예를 들어, 사용자가 터치스크린으로 장치와 상호 작용하고 있다는 것을 알면 히트 영역을 더 크게 만들 수 있습니다.

## 더 복잡한 미디어 쿼리

사용 가능한 다양한 미디어 쿼리들을 이용해서 쿼리를 함께 결합하거나, 일치할 수 있는 쿼리 목록들을 만들 수 있습니다.

### "논리곱" 미디어 쿼리

`and`를 사용해 미디어 기능을 결합할 수 있습니다. 이는 마치 앞에서 미디어 유형과 기능을 결합하기 위해 `and`를 사용했던 방식과 같습니다. 예를 들어, `min-width`와 `orientation`의 논리곱 조건을 테스트해 보고 싶을 수도 있습니다. 여기서 HTML 본문 텍스트가 파란색이 되는 유일한 경우는 뷰포트의 너비가 최소 600픽셀 이상이고 장치가 가로 모드인 경우에만 해당합니다.

```css
@media screen and (min-width: 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[이 예제를](https://mdn.github.io/css-examples/learn/media-queries/and.html) 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/and.html).

### "논리합" 미디어 쿼리

여러 쿼리들의 집합이 있는 경우, 어떤 것이라도 일치할 수 있습니다. 여러분은 해당 쿼리들을 콤마로 분리할 수 있습니다. 아래 예제에서 뷰포트가 최소 600픽셀 너비 또는 장치가 가로 보기 방향이라면 텍스트는 파란색이 될 것입니다. 둘 중 하나라도 사실이라면 쿼리가 일치합니다.

```css
@media screen and (min-width: 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[이 예제를](https://mdn.github.io/css-examples/learn/media-queries/or.html) 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/or.html)

### "부정 논리" 미디어 쿼리

`not` 연산자를 사용하여 전체 미디어 쿼리를 부정할 수 있습니다. 이것은 미디어 쿼리의 전체 의미를 반대로 뒤집습니다. 따라서 다음 예에서 텍스트는 보기 방향이 세로일 경우에만 파란색이 됩니다.

```css
@media not all and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[이 예제를](https://mdn.github.io/css-examples/learn/media-queries/not.html) 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/not.html).

## 분기점을 선정하는 방법

반응형 디자인 초창기에는 많은 디자이너가 매우 구체적인 화면 크기를 대상으로 삼으려고 시도했습니다. 인기있는 휴대폰 및 태블릿 화면의 크기 목록이 공개되어 해당 기기의 뷰포트와 깔끔하게 일치하도록 디자인을 만들 수 있게 되었습니다.

지금은 다양한 크기의 디바이스가 너무 많아, 그런 방식은 현실성이 없습니다. 즉, 모든 디자인마다 (기기의) 특정 크기에 맞추는 방법보다 더 나은 접근 방법은, 콘텐츠가 어떤 식으로든 깨지기 시작하는 해당 (기기의) 크기에서 디자인을 변경하는 것입니다. 어쩌면 선 길이가 너무 길어지거나 상자 형태의 사이드바가 찌그러져 읽기가 어려워질 수도 있습니다. 이때 미디어 쿼리를 사용하여 이용할 수 있는 공간 대비 개선된 형태의 사이트가 나오도록 디자인을 변경할 수 있습니다. 이는 사용 기기의 정확한 화면 크기가 무엇이든 상관없이 모든 범주에 맞는 전방위적인 접근법을 말합니다. 미디어 쿼리가 도입되는 지점을 **breakpoints**라고 합니다.

Firefox DevTools의 [반응형 디자인 모드](/ko/docs/Tools/Responsive_Design_Mode)는 이러한 분기점이 어느 부분이 될지 알아내는 데 매우 유용합니다. 미디어 쿼리를 추가하고 디자인을 조정하면서 콘텐츠가 개선되는 위치를 파악하기 위해 뷰포트를 쉽게 크거나 작게 만들 수 있습니다.

![파이어폭스 개발툴상에 레이아웃 갈무리](rwd-mode.png)

## 능동 학습: 모바일 우선 반응형 디자인

대체로 반응형 디자인에 대한 두 가지 접근법을 취할 수 있습니다. 데스크톱 또는 가장 넓은 뷰로 시작한 뒤 뷰포트의 축소에 맞춰 요소를 주변으로 이동시키기 위한 분기점을 추가하거나 가장 작은 뷰로 시작한 뒤에 뷰포트의 크기 확대에 맞춰 레이아웃을 추가할 수 있습니다. 이 두 번째 접근법은 **mobile first** 반응형 디자인으로 설명되며 종종 선호되는 최상의 접근법입니다.

가장 작은 장치용 뷰는 일반 대열에서 나타나는 것처럼 종종 단순한 단일 열 형태의 콘텐츠가 됩니다. 즉 여러분은 작은 장치용이라 많은 레이아웃을 할 필요가 없다는 말입니다. 다시 말해 소스를 순서대로 잘 정렬하면 기본값으로 읽을 수 있는 레이아웃이 됩니다.

아래의 길라잡이는 매우 간단한 레이아웃으로 동 접근 방식을 안내해 줄 것입니다. 사이트 제작 과정에서는 미디어 쿼리 내에서 조정할 수 있는 것이 더 많을 수 있지만, 그 접근 방식은 정확히 동일하게 됩니다.

### 길라잡이: 간단한 모바일 우선 레이아웃

우리는 레이아웃에 포함된 다양한 요소에 배경색을 추가하기 위해 일정한 CSS를 적용한 HTML 문서를 가지고 출발합니다.

```css
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 2em auto;
  font:
    1em/1.3 Arial,
    Helvetica,
    sans-serif;
}

a:link,
a:visited {
  color: #333;
}

nav ul,
aside ul {
  list-style: none;
  padding: 0;
}

nav a:link,
nav a:visited {
  background-color: rgba(207, 232, 220, 0.2);
  border: 2px solid rgb(79, 185, 227);
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #333;
  font-weight: bold;
}

nav a:hover {
  background-color: rgba(207, 232, 220, 0.7);
}

.related {
  background-color: rgba(79, 185, 227, 0.3);
  border: 1px solid rgb(79, 185, 227);
  padding: 10px;
}

.sidebar {
  background-color: rgba(207, 232, 220, 0.5);
  padding: 10px;
}

article {
  margin-bottom: 1em;
}
```

우리는 우리가 레이아웃에 변경을 가하지는 않았지만, 문서의 원본은 콘텐츠를 읽을 수 있는 방식으로 순서대로 정렬됩니다. 이것은 중요한 첫 번째 단계이며, 콘텐츠가 화면 읽기 프로그램(tts)에 의해 소리내여 읽혀질 경우 콘텐츠가 (읽을 문자열를) 이해될 수도록 보장합니다.

```html
<body>
    <div class="wrapper">
      <header>
        <nav>
          <ul>
            <li><a href="">사이트 소개</a></li>
            <li><a href="">연락처</a></li>
            <li><a href="">우리팀 안내</a></li>
            <li><a href="">블로그</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <div class="content">
            <h1>채식주의자!</h1>
            <p>
              ...
            </p>
          </aside>
        </article>

        <aside class="sidebar">
          <h2>채식에 관한 외부 링크</h2>
          <ul>
            <li>
              ...
            </li>
          </ul>
        </aside>
      </main>

      <footer><p>&copy;2019</p></footer>
    </div>
  </body>
```

이 간단한 레이아웃은 모바일에서도 잘 작동합니다. 우리가 데브툴 내부 반응형 디자인 모드에서 레이아웃을 본다면, 우리는 그것이 사이트의 직관적인 모바일 뷰로 보더라도 꽤 잘 작동한다는 것을 알 수 있습니다.

[이 예제를](https://mdn.github.io/css-examples/learn/media-queries/step1.html) 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/step1.html).

**당신이 우리의 진행 과정대로 이 예제를 실행해 보려면 [step1.html](https://github.com/mdn/css-examples/blob/master/learn/media-queries/step1.html)의 사본을 당신의 컴퓨터에 만드세요.**

이 지점부터는 반응형 디자인 모드뷰가 점차 확대되어 줄 길이가 상당히 길어지는 모습을 확인할 정도가 되며, 수평선 형태의 탐색 메뉴가 표시될 공간을 갖추고 있습니다. 여기에서 우리는 첫 번째 미디어 쿼리를 추가할 것입니다. 사용자가 텍스트 크기를 늘리게 되면, 텍스트 크기가 작은 사용자보다 비슷한 줄 길이이지만 뷰포트가 더 넓은 곳에서 중단점이 발생하기에 ems를 사용합니다.

**아래 코드를 step1.html CSS의 하단에 추가하세요.**

```css
@media screen and (min-width: 40em) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  nav ul {
    display: flex;
  }

  nav li {
    flex: 1;
  }
}
```

이 CSS는 문서 안에 있는 문서 콘텐츠와 aside 요소 내부 관련 정보까지 2단 레이아웃을 우리에게 제공합니다. 또한 우리는 가변상자를 사용하여 탐색 메뉴를 일렬로 배치했습니다.

[2단계](https://mdn.github.io/css-examples/learn/media-queries/step2.html) 파일을 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/step2.html).

사이드바가 새 열을 형성할 수 있는 충분한 공간이 있다고 느낄 때까지 너비를 계속 확장합니다. 미디어 쿼리안에서 주요 요소를 두 개의 열 형태의 격자로 만들 것입니다. 그런 다음 두 개의 사이드바가 서로 나란히 정렬되도록 문서의 {{cssxref("margin-bottom")}}을 제거해야하며, 바닥글 상단에 {{cssxref("border")}}(테두리)를 추가하게 됩니다. 일반적으로 이러한 미세 조정은 각 분기점 도달 시 디자인을 좋게 보이게 하기 위해 여러분이 할 일입니다.

**다시 한 번 아래 코드를 step1.html CSS의 하단에 추가합니다.**

```css
@media screen and (min-width: 70em) {
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  article {
    margin-bottom: 0;
  }

  footer {
    border-top: 1px solid #ccc;
    margin-top: 2em;
  }
}
```

[3단계](https://mdn.github.io/css-examples/learn/media-queries/step3.html) 파일을 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/step3.html).

최종 예제를 다른 너비로 보면 사용 가능한 너비에 따라 디자인이 반응하고 단일 열, 2열 또는 3열로 작동하는 방법을 볼 수 있습니다. 이것은 모바일 우선 반응형 디자인의 아주 간단한 예입니다.

## 당신에게 정말 미디어 쿼리가 필요할까요?

가변상자, 격자 및 다단 레이아웃은 모두 굳이 미디어 쿼리를 필요로 하지 않고도 가변적이며 심지어 반응형 구성 요소를 만들 수 있는 방법을 제공합니다. 미디어 쿼리를 추가하지 않고도 이러한 레이아웃 메서드를 사용해 원하는 것을 달성할 수 있는지 고려할 가치가 있습니다. 예를 들어, 여러분은 적어도 200 픽셀 너비의 카드 집합을 원할 수 있으며, 최대 200 픽셀이라면 주요 문서 부분에 맞아떨어질 수 있습니다. 이는 미디어 쿼리를 전혀 사용하지 않고 격자 레이아웃만으로 얻을 수 있습니다.

이것은 아래 용법으로 달성될 수 있습니다.

```html
<ul class="grid">
  <li>
    <h2>카드 1</h2>
    <p>...</p>
  </li>
  <li>
    <h2>카드 2</h2>
    <p>...</p>
  </li>
  <li>
    <h2>카드 3</h2>
    <p>...</p>
  </li>
  <li>
    <h2>카드 4</h2>
    <p>...</p>
  </li>
  <li>
    <h2>카드 5</h2>
    <p>...</p>
  </li>
</ul>
```

```css
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.grid li {
  border: 1px solid #666;
  padding: 10px;
}
```

[이 격자 예제를](https://mdn.github.io/css-examples/learn/media-queries/grid.html) 브라우저에서 열거나 [소스를 보세요](https://github.com/mdn/css-examples/blob/master/learn/media-queries/grid.html).

상기 예제를 브라우저에서 열면 화면을 넓히거나 좁히거나 하여 열 트랙 수가 변경되는 것을 확인할 수 있습니다. 이 방법의 좋은 점은 격자가 뷰포트 너비를 보는 게 아니라 해당 구성 요소에 맞춰 이용할 수 있는 너비를 살핀다는 것입니다. 당신에게 미디어 쿼리가 전혀 필요하지 않을 수도 있다! 라는 제안으로 이번 절을 마감하는 것은 이상하게 보일 수도 있습니다. 그러나 실제로 미디어 쿼리로 강화된 현대적 레이아웃 메서드를 잘 사용하면 최상의 결과를 얻을 수 있습니다.

## 스킬을 테스트하세요!

게시글의 맨 마지막 부분까지 도달했지만, 중요한 정보를 기억할 수 있으신가요? 계속 진행하기 전에 이 정보를 기억하고 있는지 확인할 수 있는 테스트를 찾을 수 있습니다. [여기](/ko/docs/Learn/CSS/CSS_layout/rwd_skills)를 확인해주세요.

## 요약정리

여러분은 이 단원에서 미디어 쿼리에 대해 배웠으며 모바일 우선 반응형 디자인을 실제로 생성하는 방법도 알아 보았습니다.

우리가 만든 것을 시작점으로 더 많은 미디어 쿼리 조건을 테스트할 수 있습니다. 예를 들어, 방문자가 `pointer` 미디어 기능을 사용하여 거친 포인터를 가지고 있는 것을 감지하면 탐색 메뉴의 크기를 변경할 수 있습니다.

또한 서로 다른 구성 요소를 추가하고 미디어 쿼리를 추가한다든지 또는 가변상자나 격자와 같은 레이아웃 방법을 사용하는 것이 구성 요소를 반응형으로 만드는 가장 적절한 방법인지 여부를 실험할 수 있습니다. 바른 방식 혹은 그른 방식 따윈 없습니다. 말하자면 어떤 것이 디자인과 콘텐츠에 가장 적합한지 실험하고 관찰해야 합니다.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}
