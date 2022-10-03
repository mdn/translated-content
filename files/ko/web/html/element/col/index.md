---
title: <col>
slug: Web/HTML/Element/col
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Web
translation_of: Web/HTML/Element/col
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML <code>&lt;col&gt;</code> 요소</strong>는 표의 열을 나타내며, 열에 속하는 칸에 공통된 의미를 부여할 때 사용합니다.</span> {{htmlelement("colgroup")}} 안에서 찾을 수 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td>없음.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td>없음. {{glossary("empty element", "빈 요소")}}입니다.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td>{{htmlattrxref("span", "colgroup")}} 특성을 지정하지 않은 {{HTMLElement("colgroup")}} 요소.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>없음</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLTableColElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="특성">특성</h2>

<p>이 요소는 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>을 포함합니다.</p>

<dl>
 <dt>{{htmlattrdef("span")}}</dt>
 <dd><code>&lt;col&gt;</code>이 차지할 열의 수를 나타내는 양의 정수. 기본값은 1입니다.</dd>
</dl>

<div class="hidden">
<h3 id="Deprecated_attributes">Deprecated attributes</h3>

<p>The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.</p>

<dl>
 <dt>{{htmlattrdef("align")}} {{deprecated_inline}}</dt>
 <dd>This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:
 <ul>
  <li><code>left</code>, aligning the content to the left of the cell</li>
  <li><code>center</code>, centering the content in the cell</li>
  <li><code>right</code>, aligning the content to the right of the cell</li>
  <li><code>justify</code>, inserting spaces into the textual content so that the content is justified in the cell</li>
 </ul>

 <p>If this attribute is not set, its value is inherited from the {{htmlattrxref("align", "colgroup")}} of the {{HTMLElement("colgroup")}} element this <code>&lt;col&gt;</code> element belongs too. If there are none, the <code>left</code> value is assumed.</p>

 <div class="note"><strong>Note: </strong>

 <ul>
  <li>To achieve the same effect as the <code>left</code>, <code>center</code>, <code>right</code> or <code>justify</code> values:

   <ul>
    <li>Do not try to set the {{cssxref("text-align")}} property on a selector giving a <code>&lt;col&gt;</code> element. Because {{HTMLElement("td")}} elements are not descendant of the <code>&lt;col&gt;</code> element, they won't inherit it.</li>
    <li>If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use the <code>td:nth-child(an+b)</code> CSS selector. Set <code>a</code> to zero and <code>b </code>to the position of the column in the table, e.g. <code>td:nth-child(2) { text-align: right; }</code> to right-align the second column.</li>
    <li>If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like <code>[colspan=n]</code>, though this is not trivial.</li>
   </ul>
  </li>
 </ul>
 </div>
 </dd>
 <dt>{{htmlattrdef("bgcolor")}} {{Deprecated_inline}}</dt>
 <dd>
 <p>The background color of the table. It is a <a href="/en-US/docs/Web/CSS/color_value#RGB_colors">6-digit hexadecimal RGB code</a>, prefixed by a '<code>#</code>'. One of the predefined <a href="/en-US/docs/Web/CSS/color_value#Color_keywords">color kewords</a> can also be used.</p>

 <p>To achieve a similar effect, use the CSS {{cssxref("background-color")}} property.</p>
 </dd>
 <dt>{{htmlattrdef("char")}} {{deprecated_inline}}</dt>
 <dd>This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "col")}} is not set to <code>char</code>, this attribute is ignored.</dd>
 <dt>{{htmlattrdef("charoff")}} {{deprecated_inline}}</dt>
 <dd>This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the <code>char</code> attribute.</dd>
 <dt>{{htmlattrdef("valign")}} {{deprecated_inline}}</dt>
 <dd>This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are:
 <ul>
  <li><code>baseline</code>, which will put the text as close to the bottom of the cell as it is possible, but align it on the <a class="external" href="https://en.wikipedia.org/wiki/Baseline_%28typography%29">baseline</a> of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as <code>bottom</code>.</li>
  <li><code>bottom</code>, which will put the text as close to the bottom of the cell as it is possible;</li>
  <li><code>middle</code>, which will center the text in the cell;</li>
  <li>and <code>top</code>, which will put the text as close to the top of the cell as it is possible.</li>
 </ul>

 <div class="note"><strong>Note:</strong>

 <ul>
  <li>Do not try to set the {{cssxref("vertical-align")}} property on a selector giving a <code>&lt;col&gt;</code> element. Because {{HTMLElement("td")}} elements are not descendant of the <code>&lt;col&gt;</code> element, they won't inherit it.</li>
  <li>If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use the <code>td:nth-child(an+b)</code> CSS selector where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the <code>vertical-align</code> property can be used.</li>
  <li>If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like <code>[colspan=n]</code>, though this is not trivial.</li>
 </ul>
 </div>
 </dd>
 <dt>{{htmlattrdef("width")}} {{deprecated_inline}}</dt>
 <dd>This attribute specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute might take the special form <code>0*</code>, which means that the width of each column in the group should be the minimum width necessary to hold the column's contents. Relative widths such as <code>0.5*</code> also can be used.</dd>
</dl>
</div>

<h2 id="예제">예제</h2>

<p><code>&lt;col&gt;</code> 요소의 예제는 {{htmlelement("table")}} 요소 문서에서 볼 수 있습니다.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.elements.col")}}</p>
