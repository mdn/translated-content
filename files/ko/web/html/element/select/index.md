---
title: <select>
slug: Web/HTML/Element/select
---

{{HTMLSidebar}}

**HTML `<select>` 요소**는 옵션 메뉴를 제공하는 컨트롤을 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples
<https://github.com/mdn/interactive-examples>">https://github.com/mdn/interactive-examples </a>and send us a pull request.</p>

위의 예제는 일반적인 `<select>` 사용법을 시연합니다. {{htmlelement("label")}}과 연결해 접근성을 향상할 수 있도록 {{htmlattrxref("id")}} 특성을, 서버로 전송할 데이터의 이름을 위해 {{htmlattrxref("name", "select")}} 특성을 적용했습니다. 메뉴의 각 옵션은 `<select>` 안의 {{htmlelement("option")}}으로 정의합니다.

모든 `<option>`은 자신이 선택됐을 때 값으로써 사용할 {{htmlattrxref("value", "option")}} 특성이 필요합니다. 그러나 `value` 특성을 지정하지 않은 경우, 대신 자기 안의 텍스트를 값으로 사용합니다. {{htmlattrxref("selected", "option")}} 특성을 지정하면 해당 옵션을 선택한 상태로 페이지를 불러옵니다.

`<select>` 요소를 조작할 때 사용할 수 있는 여러가지 고유 특성이 존재합니다. {{htmlattrxref("multiple", "select")}} 특성을 사용하면 다수의 항목을 동시에 선택할 수 있고, {{htmlattrxref("size", "select")}} 특성은 한 번에 노출되는 항목의 수를 조절할 수 있습니다. `required`, `disabled`, `autofocus` 등 일반적인 양식 입력 요소의 특성도 사용할 수 있습니다.

`<option>` 요소를 {{htmlelement("optgroup")}} 요소 안에 배치하면 드롭다운 내에서 옵션 그룹을 나눌 수 있습니다.

<p class="hidden">For further examples, see <a href="/en-US/docs/Learn/HTML/Forms/The_native_form_widgets#Drop-down_content">The native form widgets: Drop-down content</a>.</p>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

<dl><dt>{{htmlattrdef("autocomplete")}}</dt><dd>{{glossary("user agent", "사용자 에이전트")}}의 자동완성 기능을 지원하는 {{domxref("DOMString")}}. 가능한 값의 전체 목록과, 자동완성의 상세 사용법은 <a href="/ko/docs/Web/HTML/Attributes/autocomplete">HTML <code>autocomplete</code> 특성</a> 문서를 참고하세요.</dd><dt>{{htmlattrdef("autofocus")}}</dt><dd>지정한 경우, 페이지를 불러왔을 때 자동으로 포커스를 부여합니다. 문서 내에서 하나의 양식 요소만 <code>autofocus</code> 특성을 가질 수 있습니다.</dd><dt>{{htmlattrdef("disabled")}}</dt><dd>지정한 경우, 사용자와 <code>&#x3C;select></code> 요소의 모든 상호작용을 막습니다. 지정하지 않은 경우에도 {{htmlelement("fieldset")}} 등 부모 요소의 <code>disabled</code> 특성을 상속하므로 비활성 상태가 될 수 있습니다.</dd><dt>{{htmlattrdef("form")}}</dt><dd><code>&#x3C;select></code>와 연결할 {{HTMLElement("form")}} 요소("양식 소유자"). 같은 문서에 존재하는 <code>&#x3C;form></code> 요소의 {{htmlattrxref("id")}} 특성 값을 사용해야 합니다. <code>form</code> 특성을 지정하지 않았으나 조상 중 <code>&#x3C;form></code> 요소가 존재하면 해당 <code>&#x3C;form></code>과 연결됩니다.</dd><dd><code>form</code> 특성을 사용하면 <code>&#x3C;select></code>를 <code>&#x3C;form></code> 요소에 넣지 않고도 연결할 수 있고, 조상 중 <code>&#x3C;form></code>이 있더라도 소유자를 재정의할 수 있습니다.</dd><dt>{{htmlattrdef("multiple")}}</dt><dd>지정한 경우, 메뉴에서 다수의 옵션을 선택할 수 있습니다. 지정하지 않은 경우 하나만 선택 가능합니다. 대부분의 브라우저는 <code>multiple</code> 특성이 존재하면 드롭다운 메뉴 대신 스크롤 가능한 목록 상자를 보여줍니다.</dd><dt>{{htmlattrdef("name")}}</dt><dd>컨트롤의 이름.</dd><dt>{{htmlattrdef("required")}}</dt><dd>옵션 중 값으로 비어있지 않은 문자열을 값으로 하는 항목을 반드시 선택해야 함을 나타냅니다.</dd><dt>{{htmlattrdef("size")}}</dt><dd><code>&#x3C;select></code>를 (<code>multiple</code> 특성 사용 등의 이유로) 스크롤 가능한 목록 상자로 표현할 때 지정한 경우, 목록에서 한 번에 볼 수 있는 옵션 줄 수를 나타냅니다. 브라우저가 <code>&#x3C;select></code> 요소를 반드시 스크롤 가능한 목록 상자로 표현해야 하는 것은 아닙니다. 기본값은 0입니다.</dd></dl>

> **참고:** HTML5 명세에 따르면 `size`의 기본값은 1이어야 합니다. 그러나 실제로 기본값을 1로 적용하면 일부 웹 사이트가 망가지는 것으로 밝혀졌으며 어떠한 브라우저도 기본값으로 1을 사용하지 않습니다. Mozilla도 당분간 Firefox의 기본값을 0으로 유지하기로 결정했습니다.

<!---->

<div class="hidden"><h2 id="Usage_notes">Usage notes</h2><h3 id="Selecting_multiple_options">Selecting multiple options</h3><p>On a desktop computer, there are a number of ways to select multiple options in a <code>&#x3C;select></code> element with a <code>multiple</code> attribute:</p><p>Mouse users can hold the <kbd>Ctrl</kbd>, <kbd>Command</kbd>, or <kbd>Shift</kbd> keys (depending on what makes sense for your operating system) and then click multiple options to select/deselect them.</p><div class="blockIndicator warning"><p><strong>Warning</strong>: The mechanism for selecting multiple non-contiguous items via the keyboard described below currently only seems to work in Firefox. Also note that on macOS, the <kbd>Ctrl</kbd> + <kbd>Up</kbd> and <kbd>Ctrl</kbd> + <kbd>Down</kbd> shortcuts conflict with the OS default shortcuts for <em>Mission Control</em> and <em>Application windows</em>, so you'll have to turn these off before it will work.</p></div><p>Keyboard users can select multiple contiguous items by:</p><ul><li>Focusing on the <code>&#x3C;select></code> element (e.g. using <kbd>Tab</kbd>).</li><li>Selecting an item at the top or bottom of the range they want to select using the <kbd>Up</kbd> and <kbd>Down</kbd> cursor keys to go up and down the options.</li><li>Holding down the <kbd>Shift</kbd> key and then using the <kbd>Up</kbd> and <kbd>Down</kbd> cursor keys to increase or decrease the range of items selected.</li></ul><p>Keyboard users can select multiple non-contiguous items by:</p><ul><li>Focusing on the <code>&#x3C;select></code> element (e.g. using <kbd>Tab</kbd>).</li><li>Holding down the <kbd>Ctrl</kbd> key then using the <kbd>Up</kbd> and <kbd>Down</kbd> cursor keys to change the "focused" select option, i.e. the one that will be selected if you choose to do so. The "focused" select option is highlighted with a dotted outline, in the same way as a keyboard-focused link.</li><li>Pressing <kbd>Space</kbd> to select/deselect "focused" select options.</li></ul></div>

## CSS 스타일링

`<select>` 요소는 CSS를 사용해 스타일을 적용하기 어렵기로 유명합니다. 물론 [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)이나 [글씨체](/ko/docs/Web/CSS/CSS_Fonts) 등 일부분은 다른 요소처럼 바꿀 수 있으며, {{cssxref("appearance")}} 속성을 사용하면 기본 시스템 외형을 제거할 수도 있습니다.

그러나 `<select>` 요소의 내부 구조는 복잡해 통제하기 힘들며, 브라우저간의 차이로 인해 일관적이지 않은 결과가 나올 수도 있습니다. 요소의 모든 부분을 통제해야 할 경우 적합한 스타일링 방법을 제공하는 라이브러리를 고려하세요. 아니면 다른 요소와 JavaScript, [WAI-ARIA](/ko/docs/Learn/Accessibility/WAI-ARIA_basics)를 사용해 완전히 별도의 드롭다운 메뉴를 만들어보세요.

## 예제

### 기본 메뉴

```html
<!-- 두 번째 값이 처음부터 선택된 상태 -->
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

{{EmbedLiveSample("기본_메뉴", "", "100")}}

### 여러 기능을 갖춘 복잡한 메뉴

```html
<label>Please choose one or more pets:
  <select name="pets" multiple size="4">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Flying pets">
      <option value="parrot">Parrot</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>
  </select>
</label>
```

{{EmbedLiveSample("여러_기능을_갖춘_복잡한_메뉴", "", "100")}}

- `multiple` 특성으로 인해 여러 옵션을 같이 선택할 수 있습니다.
- `size` 특성으로 인해 최대 4개의 옵션만 보입니다.
- {{htmlelement("optgroup")}} 요소를 사용해 옵션을 두 개의 분리된 그룹으로 나눴습니다. 옵션 그룹은 순전히 시각적인 구분으로, 보통 굵은 글씨체의 옵션명 및 들여쓰기한 옵션 구성원으로 표현합니다.
- "Hamster" 옵션에는 `disabled` 특성이 있으므로 선택할 수 없습니다.

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#양식_관련_콘텐츠"
          >양식 관련 콘텐츠</a
        >(<a href="/ko/docs/Web/Guide/HTML/Content_categories#나열됨">나열됨</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#레이블_가능"
          >레이블 가능</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#초기화_가능"
          >초기화 가능</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#제출_가능"
          >제출 가능</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        0개 이상의 {{HTMLElement("option")}} 또는
        {{HTMLElement("optgroup")}} 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/menu_role'><code>menu</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLSelectElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `<select>`가 발사하는 이벤트: {{event("change")}}, {{event("input")}}
