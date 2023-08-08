---
title: "<tbody>: 표 본문 요소"
slug: Web/HTML/Element/tbody
---

{{HTMLSidebar}}

**HTML** **`<tbody>`** 요소는 표의 여러 행({{htmlelement("tr")}})을 묶어서 표 본문을 구성합니다.

{{EmbedInteractiveExample("pages/tabbed/tbody.html","tabbed-taller")}}

`<tbody>` 요소와 그 사촌인 {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} 요소는 화면과 프린터에 렌더링 할 때 뿐만 아니라 {{Glossary("accessibility", "접근성")}} 차원에서도 유용한 의미를 표의 행에 부여합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>없음.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>0개 이상의 {{htmlelement("tr")}} 요소.</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        <code>&#x3C;tbody></code> 요소는 부모 {{HTMLElement("table")}}
        요소의 렌더링에 반드시 필요한 요소는 아닙니다. 그러나
        <code>&#x3C;table></code> 요소의 자식 중
        {{ HTMLElement("tr") }} 요소가 존재하면 사용할 수 없습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{ HTMLElement("table") }} 요소.
        {{ HTMLElement("caption") }},
        {{HTMLElement("colgroup") }},
        {{ HTMLElement("thead") }} 요소가 존재하는 경우, 그 뒤에
        위치할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

### Deprecated attributes

- {{ htmlattrdef("align") }} {{deprecated_inline}}

  - : This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](/ko/docs/Web/HTML/Element/tbody#char) and [`charoff`](/ko/docs/Web/HTML/Element/tbody#charoff) attributes.

    If this attribute is not set, the `left` value is assumed.

    As this attribute is deprecated, use the CSS {{cssxref("text-align")}} property instead.

    > **Note:** The equivalent `text-align` property for the `align="char"` is not implemented in any browsers yet. See the [`text-align`'s browser compatibility section](/ko/docs/Web/CSS/text-align#Browser_compatibility) for the `&#x3C;string>` value.

- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}

  - : The background color of the table. It is a [6-digit hexadecimal RGB code](/ko/docs/Web/CSS/color_value#RGB_colors), prefixed by a '`#`'. One of the predefined [color kewords](/ko/docs/Web/CSS/color_value#Color_keywords) can also be used.

    As this attribute is deprecated, use the CSS {{cssxref("background-color")}} property instead.

- {{ htmlattrdef("char") }} {{deprecated_inline}}
  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](/ko/docs/Web/HTML/Element/tbody#align) is not set to `char`, this attribute is ignored.
- {{ htmlattrdef("charoff") }} {{deprecated_inline}}
  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the `char` attribute.
- {{ htmlattrdef("valign") }} {{deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

  As this attribute is deprecated, use the CSS {{cssxref("vertical-align")}} property instead.

## 사용 일람

- 표의 헤더 행을 나타내기 위해 {{HTMLElement("thead")}} 요소를 사용한 경우, `<tbody>` 요소는 반드시 그 뒤에 위치해야 합니다.
- `<tbody>`를 사용할 경우, {{HTMLElement("table")}}의 바로 밑 자식이면서 `<tbody>`에 속하지 않는 {{htmlelement("tr")}} 요소는 사용할 수 없습니다. 모든 비 헤더, 비 푸터 행은 반드시 `<tbody>`의 자식으로 존재해야 합니다.
- 문서 출력 시, `<thead>`와 {{htmlelement("tfoot")}} 요소는 모든 페이지에서 같거나 거의 같은 정보를 나타내고, `<tbody>` 요소는 서로 다른 정보를 나타냅니다.
- 표를 화면 맥락(브라우저 창 등)에서 표시할 때, 화면이 표 전체를 보여주기에 충분히 크지 않은 경우 {{Glossary("user agent", "사용자 에이전트")}}는 같은 부모의 `<thead>`, `<tbody>`, `<tfoot>`, {{HTMLElement("caption")}} 요소를 서로 따로 스크롤 가능토록 설정할 수 있습니다.
- 하나의 표에 다수의 `<tbody>`를 연속적으로 사용할 수 있으며, 이를 통해 커다란 표의 행을 구획으로 나눌 수 있습니다. 필요한 경우 각 구획에 서로 다른 서식을 적용할 수도 있습니다.

## 예제

다음은 `<tbody>` 요소 사용법을 보이는 예제입니다. 더 많은 예제는 {{ HTMLElement("table", "", "#예제") }}에서도 볼 수 있습니다.

### 기본 예제

이번 예제는 {{HTMLElement("thead")}}와 {{HTMLElement("tbody")}}를 사용해 학생 그룹의 정보를 나열하는 표를 생성합니다.

#### HTML

표의 HTML은 다음과 같습니다. 학생의 정보를 나타내는 표 본문 칸이 모두 하나의 `<tbody>` 요소에 속함에 주의하세요.

```html
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
      <th>Major</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>Computer Science</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>Russian Literature</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>Astrophysics</td>
    </tr>
  </tbody>
</table>
```

#### CSS

다음은 표에 적용할 CSS 스타일입니다.

```css
table {
  border: 2px solid #555;
  border-collapse: collapse;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

우선 표의 전반적인 스타일을 설정합니다.외부 테두리의 굵기, 스타일, 색을 설정하고, {{cssxref("border-collapse")}}를 이용해 각 칸의 테두리가 서로 분리되지 않고 공유하도록 지정합니다. {{cssxref("font")}}를 사용해 표의 기본 글씨체도 설정합니다.

```css
th,
td {
  border: 1px solid #bbb;
  padding: 2px 8px 0;
  text-align: left;
}
```

그 다음은 대부분의 칸에 적용할 스타일입니다. 1픽셀 두께의 밝은 회색 테두리를 추가하고 안쪽 여백을 조정하며, {{cssxref("text-align")}}을 사용해 모두 좌측 정렬로 설정합니다.

```css
thead > tr > th {
  background-color: #cce;
  font-size: 18px;
  border-bottom: 2px solid #999;
}
```

마지막으로 {{HTMLElement("thead")}} 안에 위치하는 헤더 칸에 추가 스타일을 부여합니다. 보다 어두운 {{cssxref("background-color")}}, 더 큰 글씨 크기, 그리고 다른 테두리보다 두껍고 어두운 아래쪽 테두리를 적용합니다.

#### 결과

결과는 다음과 같습니다.

{{EmbedLiveSample("기본_예제", 650, 150)}}

### 다중 본문

You can create multiple sections within a table by using multiple `<tbody>` elements. Each may potentially have its own header row or rows; however, _there can be only one {{HTMLElement("thead")}} per table!_ Because of that, you need to use a {{HTMLElement("tr")}} filled with {{HTMLElement("th")}} elements to create headers within each `<tbody>`. Let's see how that's done.

Let's take the previous example, add some more students to the list, and update the table so that instead of listing each student's major on every row, the students are grouped by major, with heading rows for each major.

#### Result

First, the resulting table, so you know what we're building:

{{EmbedLiveSample("다중_본문", 650, 250)}}

#### HTML

The revised HTML looks like this:

```html
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">Computer Science</th>
    </tr>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
    </tr>
    <tr>
      <td>4077830</td>
      <td>Pierce, Benjamin</td>
    </tr>
    <tr>
      <td>5151701</td>
      <td>Kirk, James</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">Russian Literature</th>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">Astrophysics</th>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
    </tr>
    <tr>
      <td>8892377</td>
      <td>Toyota, Hiroko</td>
    </tr>
  </tbody>
</table>
```

Notice that each major is placed in a separate `<tbody>` block, the first row of which contains a single {{HTMLElement("th")}} element with a [`colspan`](/ko/docs/Web/HTML/Element/th#colspan) attribute that spans the entire width of the table. That heading lists the name of the major contained within the `<tbody>`.

Then each remaining row in each major's `<tbody>` consists of two cells: the first for the student's ID and the second for their name.

#### CSS

```css hidden
table {
  border: 2px solid #555;
  border-collapse: collapse;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}

th,
td {
  border: 1px solid #bbb;
  padding: 2px 8px 0;
  text-align: left;
}

thead > tr > th {
  background-color: #cce;
  font-size: 18px;
  border-bottom: 2px solid #999;
}
```

Most of the CSS is unchanged. We do, however, add a slightly more subtle style for header cells contained directly within a `<tbody>` (as opposed to those which reside in a {{HTMLElement("thead")}}). This is used for the headers indicating each table section's corresponding major.

```css
tbody > tr > th {
  background-color: #dde;
  border-bottom: 1.5px solid #bbb;
  font-weight: normal;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS properties and [pseudo-classes](/ko/docs/Web/CSS/Pseudo-classes) that may be specially useful to style the `<tbody>` element:

  - the {{ cssxref(":nth-child") }} pseudo-class to set the alignment on the cells of the column;
  - the {{ cssxref("text-align") }} property to align all cells content on the same character, like '.'.
