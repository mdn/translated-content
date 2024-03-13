---
title: 표 스타일링
slug: Learn/CSS/Building_blocks/Styling_tables
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

HTML 표 스타일링은 세계에서 가장 매력적인 일이 아니지만, 때로는 우리 모두가 해야할 일입니다. 이 기사에서는 특정 표 스타일링 기술을 강조 표시하여 HTML 표를 보기좋게 만드는 방법에 대한 안내서를 제공합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        HTML 기본 사항 (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >
        학습), <a href="/ko/docs/Learn/HTML/Tables">HTML 표</a> 에 대한 지식
        및 CSS 작동 방식에 대한 이해 (CSS 첫 번째 단계 학습.)
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>HTML 표를 효과적으로 스타일링하는 방법 배우기.</td>
    </tr>
  </tbody>
</table>

## 전형적인 HTML 표

전형적인 HTML 표를 살펴 봅시다. 글쎄요, 일반적인 표의 예들은 — 신발, 날씨 또는 직원들에 관한 것입니다; 우리는 영국의 유명한 펑크 밴드에 관한것을 만들어서 더 흥미롭게 만들기로 결정했습니다. 코드는 다음과 같습니다:

```html
<table>
  <caption>
    A summary of the UK's most famous punk bands
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>

    ... some rows removed for brevity

    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

[`scope`](/ko/docs/Web/HTML/Element/th#scope), {{htmlelement("caption")}}, {{htmlelement("thead")}}, {{htmlelement("tbody")}} 등의 기능 덕분에 표가 잘 표시되고 쉽게 스타일링되며 액세스할 수 있습니다. 불행히도 화면에 렌더링할 때는 좋지 않습니다 ([punk-bands-unstyled.html](http://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html) 에서 라이브 참조):

![](table-unstyled.png)

기본 브라우저 스타일만 사용하면, 비좁고 읽기 어려우며 지루해 보입니다. 이 문제를 해결하려면 CSS 를 사용해야 합니다.

## 우리의 표 스타일링

표 예제를 함께 스타일링 해 봅시다.

1. 시작하려면, [sample markup](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-unstyled.html) 의 로컬 사본을 만들고 두 이미지 ([노이즈](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/noise.png) 및 [표범가죽](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/leopardskin.jpg)) 를 모두 다운로드한 다음, 세 개의 결과 파일을 로컬 컴퓨터의 작업 디렉토리에 넣습니다.
2. 다음으로, `style.css` 라는 새 파일을 만들고 다른 파일과 같은 디렉토리에 저장하십시오.
3. {{htmlelement("head")}} 안에 다음 HTML 행을 배치하여 CSS 를 HTML 에 연결하십시오:

   ```html
   <link href="style.css" rel="stylesheet" type="text/css" />
   ```

### 간격 및 레이아웃

가장 먼저 해야할 일은 간격/레이아웃을 정렬하는 것입니다 — 기본 표 스타일은 너무 비좁습니다! 이렇게 하려면, `style.css` 파일에 다음 CSS 를 추가하십시오:

```css
/* 간격 */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}
```

가장 중요한 부분은 다음과 같습니다:

- `fixed` 의 {{cssxref("table-layout")}} 값은 일반적으로 표가 기본적으로 좀 더 예측 가능하게 작동하므로 표에 설정하는 것이 좋습니다. 일반적으로, 표의 열은 내용의 양에 따라 크기가 정해지는 경향이 있으며, 그 결과 이상한 결과가 발생합니다. `table-layout: fixed` 를 사용하면 제목의 너비에 따라 열의 크기를 지정한 다음 내용을 적절하게 처리할 수 있습니다. 이것이 우리가 `thead th:nth-child(n)` ({{cssxref(":nth-child")}}) 선택자 ("{{htmlelement("thead")}} 요소 내에서 {{htmlelement("th")}} 요소인 _n번째_ 자식 요소{{htmlelement("thead")}} 를 순서대로 선택합니다") 요소를 설정하고 백분율 너비를 설정했습니다. 전체 열 너비는 제목 너비를 따르므로, 표 열의 크기를 정할 수 있습니다. Chris Coyier 는 이 기술에 대해 [고정 표 레이아웃](https://css-tricks.com/fixing-tables-long-strings/) 에서 자세히 설명합니다.

  이를 {{cssxref("width")}} 와 100% 결합했습니다. 즉, 표에 넣은 container 를 표에 채우고 반응성이 뛰어납니다 (아직 더 많은 작업이 필요하지만 좁은 화면 너비에서 잘 보임).

- `collapse` 의 {{cssxref("border-collapse")}} 값은 모든 표 스타일 작업에 대한 표준 모범 사례입니다. 기본적으로, 표 요소에 테두리를 설정하면, 아래 이미지와 같이 테두리 사이에 간격이 있습니다: ![](no-border-collapse.png)이것은 매우 멋지게 보이지 않습니다 (원하는 모양일 수 있는지, 누가 알겠습니까?) `border-collapse: collapse;` 로 설정하면 테두리가 하나로 축소되어 훨씬 좋아 보입니다: ![](border-collapse.png)
- 우리는 전체 표 주위에 {{cssxref("border")}} 를 넣었습니다. 나중에 표 머리글과 바닥글에 테두리를 씌울 것입니다 — 표 바깥쪽에 테두리가 없고 틈새가 생기면 정말 이상하게 보입니다.
- {{htmlelement("th")}} 및 {{htmlelement("td")}} 요소에 {{cssxref("padding")}} 을 설정했습니다 — 이렇게 하면 데이터 항목에 숨을 공간이 생깁니다. 표를 훨씬 읽기 쉽게 보이게합니다.

이 시점에서, 우리 표는 이미 훨씬 좋아보입니다:

![](table-with-spacing.png)

### 간단한 typography

이제 텍스트를 약간 정리해 보겠습니다.

우선, [Google Fonts](https://www.google.com/fonts) 에서 펑크 밴드 관련 표에 적합한 글꼴을 찾았습니다. 원하는 경우 거기에 가서 다른 것을 찾을 수 있습니다. 제공된 {{htmlelement("link")}} 요소 및 custom {{cssxref("font-family")}} 선언을 Google Fonts 에서 제공하는 선언으로 바꾸면 됩니다.

먼저, 다음 {{htmlelement("link")}} 요소를 기존 `<link>` 요소 바로 위의 HTML head 에 추가하십시오:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

이제 이전 CSS 아래의 `style.css` 파일에, 다음 CSS 를 추가하십시오:

```css
/* typography */

html {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
}

thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}
```

여기에서는 표에 특별한 것은 없습니다. 우리는 일반적으로 쉽게 읽을 수 있도록 글꼴 스타일을 조정합니다:

- 전역 sans-serif 글꼴 스택을 설정했습니다; 이것은 순전히 문체 선택입니다. 또한 {{htmlelement("thead")}} 및 {{htmlelement("tfoot")}} 요소의 제목에 맞춤 글꼴을 설정하여 멋지고 펑키한 모양을 만들었습니다.
- 가독성을 높이기 위해 제목과 셀에 {{cssxref("letter-spacing")}} 을 설정했습니다. 다시 말하지만, 주로 스타일 선택입니다.
- {{htmlelement("tbody")}} 내부의 표 셀에서 텍스트를 가운데 정렬하여 제목과 일치하도록 했습니다. 기본적으로, 셀에는 {{cssxref("text-align")}} 에 `left` 값이 제공되고, 머리글에는 `center` 값이 제공되지만 둘 다에 대해 정렬을 동일하게 설정하는것이 좋습니다. 제목 글꼴의 기본 굵은체는 모양을 구별하기에 충분합니다.
- 데이터와 시작적으로 더 잘 연결되도록 {{htmlelement("tfoot")}} 내부에서 제목을 오른쪽 정렬했습니다.

결과는 조금 깔끔해 보입니다:

![](table-with-typography.png)

### 그래픽 과 색상

이제 그래픽과 색상으로 넘어가겠습니다! 표에는 punk and attitude 가 가득하기 때문에, 밝은 인상적인 스타일링을 제공해야합니다. 걱정하지 마십시오. 표를 크게 만들 필요는 없습니다 — 더 미묘하고 세련된 것을 선택할 수 있습니다.

아래에서 다시 CSS 를 `style.css` 파일에 추가하고, 다시 시작하십시오:

```css
thead,
tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
  border: 3px solid purple;
}
```

다시 말하지만, 여기에는 표에만 해당되는 것이 없지만, 몇 가지 주목할 가치가 있습니다.

{{htmlelement("thead")}} 및 {{htmlelement("tfoot")}} 에 {{cssxref("background-image")}} 를 추가하고, 머리글과 바닥글에 있는 모든 텍스트의 {{cssxref("color")}} 를 흰색으로 (텍스트에 그림자 추가) 변경하여 읽기 쉽게 했습니다. 텍스트가 배경과 잘 대비되도록 해야합니다. 그래야 잘 읽을 수 있습니다.

또한 머리글과 바닥글 내부의 {{htmlelement("th")}} 및 {{htmlelement("td")}} 요소에 선형 그라데이션을 추가하여 약간의 질감을 개선하오, 밝은 보라색 테두리를 부여했습니다. 중첩된 요소를 여러 개의 중첩된 요소를 사용하여 스타일을 서로 겹칠 수 있는 것이 유용합니다. 예, 여러 배경 이미지를 사용하여 {{htmlelement("thead")}} 및 {{htmlelement("tfoot")}} 요소에 배경 이미지와 선형 그라데이션을 모두 넣을 수는 있지만, 별도로 결정했습니다. 여러 배경 이미지 또는 선형 그라데이션을 지원하지 않는 구형 브라우저의 이점을 위해서입니다.

#### 얼룩말 줄무늬 (Zebra striping)

우리는 표의 다른 데이터 행을 더 쉽게 구문 분석하고 읽을 수 있도록 번갈아 가며 **zebra stripes** 를 구현하는 방법을 보여주기 위해 별도의 섹션을 제공하고자 했습니다. `style.css` 파일의 맨 아래에 다름 CSS 를 추가하십시오:

```css
tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url(noise.png);
}

table {
  background-color: #ff33cc;
}
```

- 이전에는 {{cssxref(":nth-child")}} 선택자가 특정 자식 요소를 선택하는 데 사용되는 것을 보았습니다. 수식을 매개 변수로 제공할 수도 있으므로 일련의 요소를 선택합니다. 수식 `2n-1` 은 홀수 번째 자식 (1, 3, 5 등) 을 모두 선택하고 수식 `2n` 은 짝수 번째 자식 (2, 4, 6 등) 을 모두 선택합니다. 코드의 `odd` 및 `even` 키워드 조차도 앞에서 언급한 공식과 정확히 동일한 기능을 수행합니다. 이 경우 홀수 및 짝수 행에 다른 색상 (선정적인 색상) 을 부여합니다.
- 또한 모든 본문 행에 반복적인 배경 타일을 추가하여, 약간의 노이즈 (약간 시각적 왜곡이 있는 반투명 `.png`) 를 사용하여 질감을 제공했습니다.
- 마지막으로, `:nth-child` 선택자를 지원하지 않는 브라우저는 여전히 본문 행의 배경을 갖도록 전체 표에 단색 배경색을 지정했습니다.

이러한 색상은 다음과 같은 모양을 만듭니다:

![](table-with-color.png)

자, 이것은 여러분의 취향에 맞지 않을 수도 있습니다. 하지만 , 우리가 하려고하는 요점은 표가 지루하고 학문적일 필요는 없다는 것입니다.

### caption 스타일링

표와 관련하여 마지막으로 해야할 일이 있습니다 — caption 에 스타일을 지정하는 일입니다. 이렇게 하려면, `style.css` 파일의 맨 아래에 다름을 추가하십시오:

```css
caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  text-align: right;
  letter-spacing: 1px;
}
```

`bottom` 값을 가진 {{cssxref("caption-side")}} 속성을 제외하고는 여기서 주목할만한 것이 없습니다. 이로 인해 caption 이 표의 맨 아래에 배치되고 다른 선언과 함께 최종 모양을 얻을 수 있습니다 ([punk-bands-complete.html](http://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) 참조):

![](table-with-caption.png)

## 적극적인 학습: 나만의 표 스타일

이 시점에서 표 HTML 예제 (또는 일부를 사용하십시오!) 를 가져와서 표보다 훨씬 더 나은 디자인과 장식을 갖도록 스타일을 지정하고 싶습니다.

## 표 스타일링 빠르게 하는 팁

다음 단계로 넘어가지 전에, 위에서 설명한 가장 유용한 요점에 대한 간단한 목록을 제공해야 한다고 생각했습니다:

- 표 마크 업을 가능한 한 간단하게 만들고, 유연한 작업을 유지하십시오 예: 백분유을 사용하여 디자인의 반응속도를 향상시킵니다.
- {{cssxref("table-layout")}}`: fixed` 를 사용하여 제목 ({{htmlelement("th")}}) 에서 {{cssxref("width")}} 를 설정하여 열 너비를 쉽게 설정할 수 있는 예측 가능한 표 레이아웃을 작성합니다.
- {{cssxref("border-collapse")}}`: collapse` 를 사용하여 표 요소 테두리를 서로 접어서 깔끔하게 만들 수 있습니다.
- {{htmlelement("thead")}}, {{htmlelement("tbody")}} 및 {{htmlelement("tfoot")}} 를 사용하여 표를 논리적 덩어리로 나누고 CSS 를 적용할 추가 위치를 제공하십시오. 필요한 경우 서로 위에 스타일을 더 쉽게 레이어할 수 있습니다.
- alternative 행을 읽기 쉽게 하려면 얼룩말 줄무늬를 사용합니다.
- {{cssxref("text-align")}} 을 사용하여 {{htmlelement("th")}} 및 {{htmlelement("td")}} 텍스트를 정렬하여, 더 깜끔하고 쉽게 따라할 수 있도록 하십시오.

## 요약

지금 우리 뒤에 스타일링 표가 있기 때문에, 우리의 시간을 차지할 다른 것이 필요합니다. 다음 기사에서는 CSS 디버깅에 대해 살펴봅니다 — 레이아웃이 제대로 보이지 않거나 적용할 때 적용되지 않는 속성과 같은 문제를 해결하는 방법. 여기에는 브라우저 DevTools 를 사용하여 문제점에 대한 솔루션을 찾는 방법에 대한 정보가 포함됩니다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
