---
title: HTML table advanced features and accessibility
slug: Learn_web_development/Core/Structuring_content/Table_accessibility
original_slug: Learn/HTML/Tables/Advanced
l10n:
  sourceCommit: bda6da832e5682d6247e1c20790e7b0aa0ec45e1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}

이 과정의 두 번째 기사에서, 우리는 HTML 테이블의 좀 더 고급 기능들을 살펴볼 것입니다. 예를 들어, 캡션/요약과 행을 테이블 헤드, 바디, 푸터 섹션으로 그룹화하는 것과 시각 장애인을 위한 테이블의 접근성을 살펴볼 것입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        HTML 기초
        (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >를 확인하세요).
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        HTML 테이블의 고급 기능들과 테이블의 접근성에 대해 학습합니다.
      </td>
    </tr>
  </tbody>
</table>

## \<caption>을 사용해서 테이블에 캡션 추가하기

테이블에 캡션을 추가하려면 {{htmlelement("caption")}} 요소 안에 내용을 넣고, 이를 {{htmlelement("table")}} 요소 안에 중첩시키면 됩니다. `<table>` 태그 바로 아래에 넣어야 합니다.

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  …
</table>
```

위의 간단한 예시에서 유추할 수 있듯, 캡션은 테이블 내용에 대한 설명을 포함해야 합니다. 이는 페이지를 스캔하는 동안 테이블이 자신에게 유용한지 빠르게 파악하고자 하는 모든 독자들에게 유용하지만, 특히 시각 장애인들에게 유용합니다. 테이블이 무엇에 대한 것인지 알아내기 위해 많은 셀의 내용을 스크린 리더가 읽어주는 대신 사용자는 캡션에 의존할 수 있고, 그 후에 테이블을 자세히 읽을지 여부를 결정할 수 있습니다.

캡션은 `<table>` 태그 바로 아래에 위치합니다.

> **참고:** [`summary`](/ko/docs/Web/HTML/Element/table#summary) 속성은 `<table>` 요소에도 사용할 수 있습니다. 이는 스크린 리더에 의해 읽힙니다. 하지만 `summary`는 더 이상 사용되지 않고, 시각 장애인이 아닌 사용자에게는 보이지 않기 때문에 `<caption>` 요소를 사용하는 것을 권장합니다.

### 능동적으로 학습하기: 캡션 추가하기

이전 기사에서 처음 만났던 예제를 다시 살펴보면서 이를 실습해 보겠습니다.

1. [HTML 테이블 기초](/ko/docs/Learn/HTML/Tables/Basics#active_learning_colgroup_and_col)의 끝에서 만났던 언어 교사의 학교 시간표를 열거나, [timetable-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/timetable-fixed.html) 파일을 로컬로 복사하세요.
2. 테이블에 맞는 적절한 캡션을 추가하세요.
3. 코드를 저장하고 브라우저에서 열어보세요.

> [!NOTE]
> 우리의 버전을 GitHub에서 찾을 수 있습니다. [timetable-caption.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/timetable-caption.html) ([라이브 보기](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)).

## \<thead>, \<tfoot> 및 \<tbody> 요소를 사용해서 구조를 추가하기

테이블의 구조가 조금 더 복잡해지면, 테이블에 구조적인 정의를 추가하는 것이 유용합니다. 이를 위해 {{htmlelement("thead")}}, {{htmlelement("tfoot")}}, {{htmlelement("tbody")}}를 사용할 수 있습니다. 이는 테이블의 헤더, 푸터, 바디 섹션을 표시할 수 있게 해줍니다.

이러한 요소들은 스크린 리더 사용자에게 테이블을 더 잘 이해할 수 있게 해주지 않으며, 스크린 리더 사용자에게 어떠한 시각적인 향상도 제공하지 않습니다. 하지만 이는 스타일링과 레이아웃에 매우 유용합니다. 몇 가지 흥미로운 예를 들자면, 긴 테이블의 경우 인쇄된 모든 페이지에서 테이블 헤더와 푸터가 반복되도록 하고 테이블 본문은 한 페이지에 표시하고 위아래로 스크롤 하여 내용을 볼 수 있도록 할 수 있습니다.

3가지 요소를 사용하기

- `<thead>` 요소는 테이블에서 헤더가 되는 부분을 감싸야 합니다. 이는 보통 열 제목을 포함하는 첫 번째 행이지만, 항상 그렇지는 않습니다. {{htmlelement("col")}}/{{htmlelement("colgroup")}} 요소를 사용하는 경우, 테이블 헤더는 그 아래에 위치해야 합니다.
- `<tfoot>` 요소는 테이블의 푸터가 되는 부분을 감싸야 합니다. 이는 예를 들어 이전 행의 항목들을 합산한 마지막 행일 수 있습니다. 테이블 푸터를 테이블의 맨 아래에 포함시킬 수도 있고, 테이블 헤더 바로 아래에 포함시킬 수도 있습니다. (브라우저는 테이블의 맨 아래에 렌더링합니다.)
- `<tbody>` 요소는 테이블 헤더나 푸터에 포함되지 않는 테이블의 다른 부분을 감싸야 합니다. 이는 테이블 헤더 아래에 표시되거나 때로는 푸터에 표시될 수 있습니다.

> **참고:** `<tbody>`는 항상 테이블에 포함되어 있습니다. 코드에서 명시적으로 지정하지 않으면 암시적으로 포함됩니다. 이를 확인하기 위해 `<tbody>`를 포함하지 않는 이전 예제를 열고 [브라우저 개발자 도구](/ko/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)에서 HTML 코드를 확인하세요. 브라우저가 이 요소를 자동으로 추가했을 것입니다. 이것을 왜 포함해야 하는지 궁금할 것입니다. 하지만 이 요소를 포함하는 것이 테이블 구조와 스타일링을 더 잘 제어할 수 있기 때문에 포함하는 것이 좋습니다.

### 능동적으로 학습하기: 테이블 구조 추가하기

위에서 학습한 새로운 요소들을 실습해 보겠습니다.

1. 우선 [spending-record.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record.html) 및 [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css)을 새 폴더에 로컬로 복사하세요.
2. 브라우저에서 열어보세요. 괜찮아 보이지만, 개선할 수 있습니다. 지출 금액의 합계를 포함하는 "SUM" 행이 잘못된 위치에 있는 것 같고, 코드에 일부 세부 정보가 누락되어 있습니다.
3. 명확한 헤더 행을 `<thead>` 요소로 감싸고, "SUM" 행을 `<tfoot>` 요소로 감싸고, 나머지 내용을 `<tbody>` 요소로 감싸세요.
4. 저장하고 새로 고침하면, `<tfoot>` 요소를 추가하여 "SUM" 행이 테이블의 맨 아래로 이동한 것을 확인할 수 있습니다.
5. 다음으로, "SUM" 셀이 첫 번째 4개 열을 가로지르도록 [`colspan`](/ko/docs/Web/HTML/Element/td#colspan) 속성을 추가하여 실제 숫자가 "Cost" 열의 맨 아래에 표시되도록 하세요.
6. 테이블에 추가적인 간단한 스타일링을 추가하여 이 요소들이 CSS를 적용하는 데 얼마나 유용한지 알아보겠습니다. HTML 문서의 head에 빈 {{htmlelement("style")}} 요소가 있습니다. 이 요소 안에 다음 CSS 코드를 추가하세요.

   ```css
   tbody {
     font-size: 95%;
     font-style: italic;
   }

   tfoot {
     font-weight: bold;
   }
   ```

7. 저장하고 새로 고침하면 결과를 확인할 수 있습니다. `<tbody>`와 `<tfoot>` 요소가 없었다면, 동일한 스타일링을 적용하기 위해 훨씬 복잡한 선택자와 규칙을 작성해야 했을 것입니다.

> [!NOTE]
> 당신이 아직 CSS를 완전히 이해한 것으로 예상하지 않습니다. CSS 학습을 통해 더 많은 것을 배우게 될 것입니다. ([CSS 소개](/ko/docs/Learn/CSS/First_steps)는 시작하기에 좋은 장소입니다. 또한 [테이블 스타일링](/ko/docs/Learn/CSS/Building_blocks/Styling_tables)에 관한 문서도 있습니다.)

완성된 테이블은 다음과 같아야 합니다.

{{ EmbedGHLiveSample('learning-area/html/tables/advanced/spending-record-finished.html', '100%', 400) }}

> [!NOTE]
> GitHub에서 또한 확인할 수 있습니다. [spending-record-finished.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/spending-record-finished.html).

## 중첩 테이블

테이블을 다른 테이블에 중첩할 수 있습니다. `<table>` 요소를 포함하여 완전한 구조를 포함한다면 가능합니다. 이는 일반적으로 권장되지 않습니다. 이는 마크업을 더 혼란스럽게 만들고 스크린 리더 사용자에게 접근성을 떨어뜨리기 때문입니다. 또한 많은 경우 기존 테이블에 추가 셀/행/열을 삽입하는 것이 더 좋습니다. 그러나 다른 소스에서 콘텐츠를 쉽게 가져오려는 경우가 있습니다.

다음 마크업은 간단한 중첩 테이블을 보여줍니다.

```html
<table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table>
```

출력은 다음과 같습니다.

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

{{EmbedLiveSample("Nesting_Tables")}}

## 시각 장애가 있는 사용자를 위한 테이블

데이터 테이블을 어떻게 사용하는지 간단히 다시 설명해 보겠습니다. 테이블은 데이터에 빠르게 접근하고 다른 값을 조회하는 데 유용한 도구입니다. 예를 들어, 아래 테이블을 살펴보면 2016년 8월에 Gent에서 몇 개의 반지가 판매되었는지 쉽게 알 수 있습니다. 이 테이블의 정보를 이해하기 위해, 이 테이블의 데이터와 열/행 헤더 사이의 시각적 연관성을 만듭니다.

<table>
  <caption>
    Items Sold August 2016
  </caption>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2"></td>
      <th colspan="3" scope="colgroup">Clothes</th>
      <th colspan="2" scope="colgroup">Accessories</th>
    </tr>
    <tr>
      <th scope="col">Trousers</th>
      <th scope="col">Skirts</th>
      <th scope="col">Dresses</th>
      <th scope="col">Bracelets</th>
      <th scope="col">Rings</th>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">Belgium</th>
      <th scope="row">Antwerp</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Gent</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Brussels</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">The Netherlands</th>
      <th scope="row">Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>

그러나 시각적 연관성을 만들 수 없는 경우는 어떻게 해야 할까요? 그런 경우에는 어떻게 테이블을 읽어야 할까요? 시각 장애가 있는 사람들은 종종 웹 페이지의 정보를 읽어주는 스크린 리더를 사용합니다. 이것은 일반 텍스트를 읽을 때는 문제가 되지 않지만, 테이블을 해석하는 것은 시각 장애가 있는 사람에게는 꽤 어려운 일입니다. 그러나 적절한 마크업을 사용하면 시각적 연관성을 프로그램적 연관성으로 대체할 수 있습니다.

> **참고:** [2017년 WHO 데이터](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)에 따르면 시각 장애가 있는 사람은 약 2억 5천 3백만 명입니다.

기사의 이 부분에서는 테이블을 가능한 한 접근성 있게 만드는 데 필요한 기술을 제공합니다.

### 열 및 행 헤더 사용하기

스크린 리더는 모든 헤더를 식별하고 헤더와 관련된 셀 사이의 프로그램적 연관성을 만들어 사용합니다. 열과 행 헤더의 조합은 각 셀의 데이터를 식별하고 해석하여 시각 장애가 있는 사용자가 시각적으로 사용자가 하는 것과 유사하게 테이블을 해석할 수 있습니다.

우리는 이미 이전 기사에서 헤더를 다루었습니다. [\<th> 요소로 헤더 추가하기](/ko/docs/Learn/HTML/Tables/Basics#adding_headers_with_th_elements)를 참고하세요.

### scope 속성

이 기사의 새로운 주제는 `<th>` 요소에 추가할 수 있는 [`scope`](/ko/docs/Web/HTML/Element/th#scope) 속성입니다. 이 속성은 스크린 리더에게 헤더가 어떤 셀의 헤더인지 정확하게 알려줍니다. 예를 들어, 그것이 있는 행의 헤더인지, 아니면 열의 헤더인지를 알려줍니다. 이전에 사용한 지출 기록 예제를 다시 한번 살펴보겠습니다. 열 헤더를 다음과 같이 열 헤더로 정의할 수 있습니다.

```html
<thead>
  <tr>
    <th scope="col">Purchase</th>
    <th scope="col">Location</th>
    <th scope="col">Date</th>
    <th scope="col">Evaluation</th>
    <th scope="col">Cost (€)</th>
  </tr>
</thead>
```

열 헤더와 함께 행 헤더를 추가한다면 각각의 행은 다음과 같이 헤더를 정의할 수 있습니다.

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

스크린 리더는 이와 같이 구조화된 마크업을 인식하고, 사용자가 한 번에 전체 열 또는 행을 읽을 수 있도록 해줍니다.

`scope`는 `colgroup`과 `rowgroup`이라는 두 가지 추가 가능한 값을 가지고 있습니다. 이것들은 여러 열 또는 행 위에 있는 헤더에 사용됩니다. 이 기사의 이 부분의 시작 부분에 있는 "2016년 8월 판매 품목" 테이블을 다시 한번 살펴보면 "의류" 셀이 "바지", "치마", "드레스" 셀 위에 있음을 알 수 있습니다. 이 셀들은 모두 헤더(`<th>`)로 표시되어야 하지만 "의류"는 다른 세 가지 하위 헤더를 정의하는 위에 있는 헤더입니다. 따라서 "의류"는 `scope="colgroup"` 속성을 가져야 하고, 다른 것들은 `scope="col"` 속성을 가져야 합니다.

### id 및 headers 속성

`scope`를 사용하는 대신 [`id`](/ko/docs/Web/HTML/Global_attributes#id)와 [`headers`](/ko/docs/Web/HTML/Element/td#headers) 속성을 사용하여 헤더와 셀 사이의 연관성을 만들 수 있습니다. 사용 방법은 다음과 같습니다.

1. 고유한 `id`를 각 `<th>` 요소에 추가합니다.
2. 각 `<td>` 요소에 `headers` 속성을 추가합니다. 각 `headers` 속성은 해당 셀의 헤더로 작동하는 모든 `<th>` 요소의 `id` 목록을 공백으로 구분하여 포함해야 합니다.

이렇게 하면 스프레드시트처럼 표에 포함된 각 열과 행의 헤더로 정의된 표의 각 셀의 위치에 대한 명시적인 정의가 제공됩니다. 잘 작동하려면 표에 열 헤더와 행 헤더가 모두 있어야 합니다.

우리의 지출 비용 예제로 돌아가서, 이전 두 개의 스니펫은 다음과 같이 다시 작성될 수 있습니다.

```html
<thead>
  <tr>
    <th id="purchase">Purchase</th>
    <th id="location">Location</th>
    <th id="date">Date</th>
    <th id="evaluation">Evaluation</th>
    <th id="cost">Cost (€)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="haircut">Haircut</th>
    <td headers="location haircut">Hairdresser</td>
    <td headers="date haircut">12/09</td>
    <td headers="evaluation haircut">Great idea</td>
    <td headers="cost haircut">30</td>
  </tr>

  …
</tbody>
```

> [!NOTE]
> 이 방법은 헤더와 데이터 셀 사이의 매우 정확한 연관성을 만들지만, **많은** 마크업을 사용하며 오류를 남길 여지가 없습니다. `scope` 접근 방식은 대부분의 표에 대해 충분합니다.

### 능동적으로 학습하기: scope와 headers로 놀아보기

1. 마지막 연습을 위해 [items-sold.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold.html) and [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/minimal-table.css)를 새 디렉토리에 복사합니다.
2. 이제 `scope` 속성을 추가하여 이 표를 더 적절하게 만들어 보세요.
3. 마지막으로, 시작 파일을 또 다른 복사본으로 만들고, 이번에는 `id`와 `headers` 속성을 사용하여 표를 더 접근성 있게 만들어 보세요.

> [!NOTE]
> 당신의 완성된 내용을 우리의 마지막 예제와 비교해 보세요. [items-sold-scope.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-scope.html) ([라이브 보기](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)) 및 [items-sold-headers.html](https://github.com/mdn/learning-area/blob/main/html/tables/advanced/items-sold-headers.html)를 참고하세요. ([라이브 보기](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)).

## 요약

HTML에서 테이블에 대해 알아야 할 몇 가지 다른 것들이 있지만, 지금은 이것만 알면 됩니다. 다음으로, [HTML 테이블 평가](/ko/docs/Learn/HTML/Tables/Structuring_planet_data)로 테스트해 보세요. 즐거운 시간 되세요!

만약 당신이 이미 CSS를 배우고 평가에서 잘했다면, HTML 테이블에 스타일을 입히는 것에 대해 배울 수 있습니다. [테이블 스타일링](/ko/docs/Learn/CSS/Building_blocks/Styling_tables)을 참고하세요.

만약 CSS를 배우고 싶다면, [CSS 학습 영역](/ko/docs/Learn/CSS)을 확인하세요!

{{PreviousMenuNext("Learn/HTML/Tables/Basics", "Learn/HTML/Tables/Structuring_planet_data", "Learn/HTML/Tables")}}
