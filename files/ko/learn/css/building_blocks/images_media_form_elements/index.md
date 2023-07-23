---
title: 이미지, 미디어 및 양식 요소
slug: Learn/CSS/Building_blocks/Images_media_form_elements
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}

이번 수업에서는 특별한 요소들을 CSS에서 어떻게 다루는지 살펴볼 것입니다. 이미지, 기타 미디어 및 양식 요소는 일반 박스와 다르게 CSS를 사용해서 스타일을 지정할 수 있다는 특징 덕분에 약간 다르게 작동합니다. 무엇이 가능하고 불가능한지 이해하는 것은 약간의 불편함을 줄이는 데 도움이 될 수 있으며, 이 수업에서는 여러분이 알아야 할 주요 사항들을 다룰 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        <p>
          기본 컴퓨터 활용 능력,
          <a
            href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
            >기본 소프트웨어 설치</a
          >,
          <a
            href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
            >파일 작업</a
          >
          에 대한 기본 지식, HTML 기본 사항 (<a
            href="/ko/docs/Learn/HTML/Introduction_to_HTML"
            >HTML 소개</a
          >
          학습) 및 , CSS 작동 방식 이해 (<a
            href="/ko/docs/Learn/CSS/First_steps"
            >CSS 첫 번째 단계</a
          >
          학습)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        CSS 로 스타일을 지정할 때 일부 요소가 비정상적으로 동작하는 방식을
        이해하기.
      </td>
    </tr>
  </tbody>
</table>

## 대체 (Replaced) 요소

이미지와 비디오는 **[대체 요소](/ko/docs/Web/CSS/Replaced_element)** 로 설명됩니다. 즉, CSS 는 이러한 요소의 내부 레이아웃에 영향을 줄 수 없으며 — 다른 요소중에서 페이지의 위치에만 영향을 줍니다. 그러나 우리가 볼 수 있듯이 CSS 는 이미지로 할 수 있는 다양한 일들이 있습니다.

이미지 및 비디오와 같은 특정 대체 요소도 **종횡비 (aspect ratio)** 를 갖는 것으로 설명됩니다. 이는 가로 (x) 및 세로 (y) 크기를 가지며, 기본적으로 파일의 고유 크기를 사용하여 표시됨을 의미합니다.

## 이미지 크기 조정

이 수업을 수행하여 이미 알고 있듯이 CSS 의 모든 것은 박스를 생성합니다. 이미지 파일의 고유 크기보다 작거나 큰 박스 안에 이미지를 배치하면, 박스보다 작게 나타나거나 박스가 overflow 됩니다. overflow 로 인해 발생하는 일에 대해 결정해야 합니다.

아래 예에서는 크기가 200 픽셀인 두 개의 박스가 있습니다:

- 하나는 200 픽셀보다 작은 이미지를 포함합니다 — 이미지는 박스보다 작으며 이미지를 채우기 위해 늘어나지 않습니다.
- 다른 하나는 200 픽셀보다 커서 박스를 넘칩니다.

{{EmbedGHLiveSample("css-examples/learn/images/size.html", '100%', 1000)}}

overflow 문제에 대해 우리는 무엇을 할 수 있습니까?

[이전 수업](/ko/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) 에서 배운 것처럼 일반적인 기술은 이미지의 {{cssxref("max-width")}} 를 100% 로 만드는 것입니다. 이렇게하면 이미지가 박스보다 작지만 커질 수 없습니다. 이 기술은 [`<video>`](/ko/docs/Web/HTML/Element/video) 또는 [`<iframe>`](/ko/docs/Web/HTML/Element/iframe) 과 같은 다른 대체 요소와 함께 작동합니다.

**위 예에서 `<img>` 요소에 `max-width: 100%` 를 추가하십시오. 작은 이미지는 변경되지 않지만, 큰 이미지는 박스에 맞게 작아집니다.**

container 내부의 이미지에 대해 다른 선택을 할 수 있습니다. 예를 들어, 박스 크기를 완전히 덮을 수 있도록 이미지 크기를 조정할 수 있습니다.

{{cssxref("object-fit")}} 속성이 도움이 될 수 있습니다. `object-fit` 를 사용할 때 대체 요소의 크기를 다양한 방식으로 박스에 맞게 조정할 수 있습니다.

아래에서는 값 `cover` 를 사용하여 이미지의 크기를 줄이며, 화면 비율을 유지하여 박스를 깔끔하게 채웁니다. 종회비가 유지되면 이미지의 일부가 박스에 의해 잘립니다.

{{EmbedGHLiveSample("css-examples/learn/images/object-fit.html", '100%', 1000)}}

`contain` 을 값으로 사용하면 이미지가 박스 안에 들어갈만큼 작아질 때까지 이미지가 축소됩니다. 박스와 종횡비가 다르면 "letterbox" 가 됩니다.

박스를 채우지만 종횡비는 유지하지 않는 `fill` 값을 사용해 볼 수도 있습니다.

## 대체 요소 레이아웃

대체 요소에 다양한 CSS 레이아웃 기술을 사용하면, 다른 요소와 약간 다르게 동작할 수 있습니다. 예를 들어, flex 또는 grid 레이아웃에서 요소는 기본적으로 전체 영역을 채우기 위해 확장됩니다. 이미지가 늘어나지 않고 grid 영역 또는 flex container 의 시작 부분에 맞춰 정렬됩니다.

아래 예에서 두 개의 열, 두 개의 행 grid container 가 있으며, 여기에는 네 개의 항목이 있습니다. 모든 `<div>` 요소는 배경색을 가지며 행과 열을 채우기 위해 확장됩니다. 그러나, 이미지가 늘어나지 않습니다.

{{EmbedGHLiveSample("css-examples/learn/images/layout.html", '100%', 1000)}}

이 수업을 순서대로 따르는 경우 레이아웃을 아직 보지 않았을 수 있습니다. 대체 요소는 grid 또는 flex 레이아웃의 일부가 될 때, 기본 동작이 서로 다르다는 점을 유념해 주십시오. 기본적으로 배치로 인해 이상하게 늘어나지 않도록 하기 위해서입니다.

grid 셀을 채우도록 이미지를 늘리려면, 다음과 같은 작업을 수행해야 합니다.

```css
img {
  width: 100%;
  height: 100%;
}
```

그러나 이것은 이미지를 늘릴 것이기 때문에, 아마 당신이 하고 싶지 않을 것입니다.

## 양식 (Form) 요소

CSS 로 스타일링 할 때, 양식 요소는 까다로운 문제가 될 수 있으며 [웹 양식 모듈](/ko/docs/Learn/Forms) 에는 약식 요소의 까다로운 측면에 대한 자세한 안내서가 포함되어 있습니다. 이 기사에서 강조할 가치가 있는 몇 가지 기본 사항이 있습니다.

[`<input>`](/ko/docs/Web/HTML/Element/input) 요소를 통해 많은 양식 컨트롤이 페이지에 추가됩니다 — 텍스트 입력과 같은 간단한 양식 필드를 정의하고 색상 및 날짜 선택자와 같은 HTML5 에 추가된 보다 복잡한 필드를 통해 정의합니다. 여러줄로 된 텍스트 입력을 위한 [`<textarea>`](/ko/docs/Web/HTML/Element/textarea) 와 같은 일부 추가 요소와 [`<fieldset>`](/ko/docs/Web/HTML/Element/fieldset) 및 [`<legend>`](/ko/docs/Web/HTML/Element/legend) 와 같은 양식의 일부를 포함하고 레이블을 지정하는 데 사용되는 요소가 있습니다.

HTML5 에는 또한 웹 개발자가 어떤 필드가 필요한지, 심지어 입력해야하는 콘텐츠 유형을 표시할 수 있는 속성이 포함되어 있습니다. 사용자가 예기치 않은 것을 입력하거나 필수 필드를 비워두면, 브라우저에 오류 메시지가 표시될 수 있습니다. 다른 브라우저는 이러한 항목에 대해 얼마나 많은 스타일과 사용자 정의가 허용되는지에 일관성이 없습니다.

### 텍스트 입력 요소 스타일링

`<input type="text">` 와 같은 텍스트 입력을 허용하는 요소, `<input type="email">`, 과 같은 특정 유형 및 `<textarea>` 요소는 스타일이 매우 쉽고 다른 박스처럼 동작하는 경향이 있습니다. 귀하의 페이지에 이러한 요소의 기본 스타일은 사용자가 사이트를 방문하는 운영체제 및 브라우저에 따라 다릅니다.

아래 예에서는 CSS 를 사용하여 일부 텍스트 입력의 스타일을 지정했습니다. 테두리, 마진 및 패딩과 같은 항목이 모두 예상대로 적용되는 것을 볼 수 있습니다. 속성 선택자를 사용하여 다양한 입력 유형을 대상으로 하고 있습니다. 테두리를 조정하고, 필드에 배경색을 추가하고, 글꼴 및 패딩을 변경하여 이 양식의 모양을 변경하십시오.

{{EmbedGHLiveSample("css-examples/learn/images/form.html", '100%', 1000)}}

> **경고:** **중요** 양식 요소의 스타일을 변경할 때 양식 요소임을 사용자에게 확실히 알 수 있도록 주의해야 합니다. 테두리와 배경이 없는 양식 입력을 작성할 수 있습니다. 이 입력 양식은 주변 내용과 거의 구분할 수 없습니다. 이로 인해 인식하고 채우기가 매우 어려워집니다.

이 과정의 HTML 부분에서 [양식 스타일](/ko/docs/Learn/Forms/Styling_web_forms) 에 대한 강의에서 설명한대로, 보다 복잡한 입력 유형 중 많은 부분이 운영체제에서 렌더링되며 스타일에 액세스할 수 없습니다. 따라서 항상 방문자마다 양식이 크게 달라지고 여러 브라우저에서 복잡한 양식을 테스트한다고 가정해야합니다.

### 상속 과 양식 요소

일부 브라우저에서 양식 요소는 기본적으로 글꼴 스타일을 상속하지 않습니다. 따라서 양식 필드가 본문 또는 상위 요소에 정의된 글꼴을 사용하도록 하려면, 이 규칙을 CSS 에 추가해야 합니다.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### 양식 요소 및 박스 크기 조정

여러 브라우저 양식 요소는 서로 다른 위젯에 다른 박스 크기 조정 규칙을 사용합니다. [박스 모델 학습](/ko/docs/Learn/CSS/Building_blocks/The_box_model) 에서 `box-sizing` 속성에 대해 학습했으며 양식을 스타일링할 때 이 지식을 사용하여 양식 요소에서 너비와 높이를 설정할 때 일관된 경험을 보장할 수 있습니다.

일관성을 유지하려면 모든 요소에서 마진과 패딩을 `0` 으로 설정한 다음 특정 컨트롤을 스타일링할 때 다시 마진을 추가하는 것이 좋습니다.

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### 다른 유용한 설정

위에서 언급한 규칙 외에도 `<textarea>` 에서 `overflow: auto` 를 설정하여 스크롤 막대가 필요하지 않은 경우 IE 에 스크롤 막대가 표시되지 않도록 설정해야 합니다.

```css
textarea {
  overflow: auto;
}
```

### 모든 것을 "재설정" 으로 통합

마지막 단계로, 위에서 설명한 다양한 속성을 다음 "양식 재설정" 으로 마무리하여 일관된 작업 기반을 제공할 수 있습니다. 여기에는 마지막 세 섹션에서 언급한 모든 항목이 포함됩니다.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> **참고:** Normalizing 스타일 시트는 많은 개발자가 모든 프로젝트에 사용할 일련의 기본 스타일을 작성하는 데 사용됩니다. 일반적으로 이것들은 위에서 설명한 것과 비슷한 기능을 수행하므로, CSS 에 대한 작업을 수행하기 전에 브라우저마다 다른것이 일관된 기본값으로 설정되어 있는지 확인하십시오. 브라우저는 일반적으로 과거보다 일관성이 높기 때문에, 예전만큼 중요하지 않습니다. 그러나 하나의 예를 살펴보려면 많은 프로젝트에서 기본으로 사용되는 매우 인기있는 스타일 시트인 [Normalize.css](http://necolas.github.io/normalize.css/) 를 확인하십시오.

스타일링 양식에 대한 자세한 내용은 이 안내의 HTML 섹션에 있는 두 기사를 살펴보십시오.

- [웹 양식 스타일링](/ko/docs/Learn/Forms/Styling_web_forms)
- [고급 양식 스타일링](/ko/docs/Learn/Forms/Advanced_form_styling)

## 요약

이 수업에서는 CSS 에서 이미지, 미디어 및 기타 특이한 요소로 작업할 때 발생할 수 있는 몇 가지 차이점을 강조했습니다. 다음 기사에서는 HTML 표의 스타일을 지정해야할 때 유용한 몇 가지 팁을 살펴보겠습니다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks")}}
