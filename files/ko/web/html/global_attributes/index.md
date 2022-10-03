---
title: 전역 특성
slug: Web/HTML/Global_attributes
tags:
  - Attribute
  - HTML
  - Reference
  - Web
  - 특성
translation_of: Web/HTML/Global_attributes
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<div class="summary">
<p><strong>전역 특성</strong>(Global attributes)은 모든 HTML에서 공통으로 사용할 수 있는 특성입니다. 그러나 일부 요소에는 아무런 효과도 없을 수 있습니다.</p>
</div>

<p>전역 특성은 모든 <a href="/ko/docs/Web/HTML/Element">HTML 요소</a>에 지정할 수 있으며, 심지어 표준에 명시되지 않은 요소에도 지정할 수 있습니다. 이는, 비표준 요소를 사용하는 순간 문서가 HTML5를 준수하지 않음에도 불구하고, 비표준 요소 역시 전역 특성을 허용해야 함을 의미합니다. 예를 들어, HTML5를 준수하는 브라우저라면, <code>&lt;foo&gt;</code>라는 요소는 유효하지 않지만 그래도 <code>&lt;foo hidden&gt;...&lt;/foo&gt;</code>는 화면에 나타내지 않을 것입니다.</p>

<p>기본 HTML 전역 특성 외에 아래와 같은 전역 특성도 존재합니다.</p>

<ul>
 <li>{{htmlattrdef("xml:lang")}}과 {{htmlattrdef("xml:base")}}는 XHTML 명세에서 상속받은 것으로 더 사용하지 않지만, 호환성 유지를 위해 아직 존재합니다.</li>
 <li>여러 개의 <code><strong><a href="/ko/docs/Web/Accessibility/ARIA">aria-*</a></strong></code> 특성은 접근성 향상을 위해 사용됩니다.</li>
 <li><a href="/ko/docs/Web/Guide/Events/Event_handlers">이벤트 처리기</a> 특성: <code><strong>onabort</strong></code>, <code><strong>onautocomplete</strong></code>, <code><strong>onautocompleteerror</strong></code>, <code><strong>onblur</strong></code>, <code><strong>oncancel</strong></code>, <code><strong>oncanplay</strong></code>, <code><strong>oncanplaythrough</strong></code>, <code><strong>onchange</strong></code>, <code><strong>onclick</strong></code>, <code><strong>onclose</strong></code>, <code><strong>oncontextmenu</strong></code>, <code><strong>oncuechange</strong></code>, <code><strong>ondblclick</strong></code>, <code><strong>ondrag</strong></code>, <code><strong>ondragend</strong></code>, <code><strong>ondragenter</strong></code>, <code><strong>ondragexit</strong></code>, <code><strong>ondragleave</strong></code>, <code><strong>ondragover</strong></code>, <code><strong>ondragstart</strong></code>, <code><strong>ondrop</strong></code>, <code><strong>ondurationchange</strong></code>, <code><strong>onemptied</strong></code>, <code><strong>onended</strong></code>, <code><strong>onerror</strong></code>, <code><strong>onfocus</strong></code>, <code><strong>oninput</strong></code>, <code><strong>oninvalid</strong></code>, <code><strong>onkeydown</strong></code>, <code><strong>onkeypress</strong></code>, <code><strong>onkeyup</strong></code>, <code><strong>onload</strong></code>, <code><strong>onloadeddata</strong></code>, <code><strong>onloadedmetadata</strong></code>, <code><strong>onloadstart</strong></code>, <code><strong>onmousedown</strong></code>, <code><strong>onmouseenter</strong></code>, <code><strong>onmouseleave</strong></code>, <code><strong>onmousemove</strong></code>, <code><strong>onmouseout</strong></code>, <code><strong>onmouseover</strong></code>, <code><strong>onmouseup</strong></code>, <code><strong>onmousewheel</strong></code>, <code><strong>onpause</strong></code>, <code><strong>onplay</strong></code>, <code><strong>onplaying</strong></code>, <code><strong>onprogress</strong></code>, <code><strong>onratechange</strong></code>, <code><strong>onreset</strong></code>, <code><strong>onresize</strong></code>, <code><strong>onscroll</strong></code>, <code><strong>onseeked</strong></code>, <code><strong>onseeking</strong></code>, <code><strong>onselect</strong></code>, <code><strong>onshow</strong></code>, <code><strong>onsort</strong></code>, <code><strong>onstalled</strong></code>, <code><strong>onsubmit</strong></code>, <code><strong>onsuspend</strong></code>, <code><strong>ontimeupdate</strong></code>, <code><strong>ontoggle</strong></code>, <code><strong>onvolumechange</strong></code>, <code><strong>onwaiting</strong></code>.</li>
</ul>

<h2 id="전역_특성_목록">전역 특성 목록</h2>

<dl>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/accesskey">{{htmlattrdef("accesskey")}}</a></dt>
 <dd>현재 요소에 대한 키보드 단축키 생성을 위한 힌트를 제공합니다. 이 특성은 공백으로 구분한 문자 목록으로 구성됩니다. 브라우저는 주어진 여러 개의 값 중 장치의 키보드 레이아웃에 존재하는 첫 번째 키를 사용해야 합니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/autocapitalize">{{htmlattrdef("autocapitalize")}}</a></dt>
 <dd>사용자가 입력 또는 수정하는 텍스트를 자동으로 대문자로 변환할지 여부와 변환하는 방법을 제어합니다. 다음과 같은 값이 가능합니다.
 <ul>
  <li><code>off</code> 또는 <code>none</code>, 대소문자 자동 변환이 발생하지 않음 (모든 글자가 기본값 소문자)</li>
  <li><code>on</code> 또는 <code>sentences</code>, 각 문장의 첫 글자를 대문자로 변환, 나머지 글자는 기본값 소문자</li>
  <li><code>words</code>, 각 단어의 첫 글자를 대문자로 변환, 나머지 글자는 기본값 소문자</li>
  <li><code>characters</code>, 모든 글자의 기본값이 대문자</li>
 </ul>
 </dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/class">{{htmlattrdef("class")}}</a></dt>
 <dd>공백으로 구분된 해당 요소의 클래스의 목록입니다. 클래스를 이용하면 CSS나 JavaScript에서 <a href="/ko/docs/Web/CSS/Class_selectors">클래스 선택자</a>나 {{domxref("Document.getElementsByClassName()")}}과 같은 메서드를 이용해 특정 요소를 선택하거나 접근할 수 있습니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/contenteditable">{{htmlattrdef("contenteditable")}}</a></dt>
 <dd>해당 요소를 사용자가 편집할 수 있는지를 나타내는 열거형 특성입니다. 편집 가능한 경우에 브라우저는 편집을 허용하도록 위젯을 수정합니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/data-*">{{htmlattrdef("data-*")}}</a></dt>
 <dd>사용자 지정 데이터 특성(custom data attributes)이라는 특성 클래스를 형성함으로써 임의의 데이터를 스크립트로 <a href="/ko/docs/Web/HTML" title="en/HTML">HTML</a>과 <a href="/ko/docs/Web/API/Document_Object_Model" title="en/DOM">DOM</a> 사이에서 교환할 수 있는 방법을 제공합니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/dir">{{htmlattrdef("dir")}}</a></dt>
 <dd>요소의 쓰기 방향을 나타내는 열거형 특성입니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/draggable">{{htmlattrdef("draggable")}}</a></dt>
 <dd><a href="/ko/docs/Web/API/HTML_드래그_앤_드롭_API">Drag and Drop API</a>를 사용해 요소를 드래그할 수 있는지 나타내는 열거형 특성입니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/exportparts">{{htmlattrdef("exportparts")}}</a> {{experimental_inline}}</dt>
 <dd>중첩 섀도우 트리에서 섀도우 파트를 전이적으로 라이트 파트에 내보낼 때 사용합니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/hidden">{{htmlattrdef("hidden")}}</a></dt>
 <dd>해당 요소가 아직, 또는 더 이상 관련이 없음을 나타내는 불리언 특성입니다. 브라우저는 <code>hidden</code> 특성을 가진 요소를 렌더링 하지 않습니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/id">{{htmlattrdef("id")}}</a></dt>
 <dd>문서 전체에서 유일해야 하는 고유 식별자(ID)를 정의합니다. (프래그먼트 식별자를 사용한) 링크, 스크립트, 스타일 적용 시 요소를 식별할 때 사용합니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/inputmode">{{htmlattrdef("inputmode")}}</a></dt>
 <dd>사용자가 요소나 요소의 콘텐츠를 편집할 때, 브라우저가 제공해야 하는 가상 키보드 설정을 알려줍니다. 주로 {{htmlelement("input")}} 요소에 사용하지만, {{htmlattrxref("contenteditable")}} 특성을 가진 요소라면 종류 불문하고 사용할 수 있습니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/is">{{htmlattrdef("is")}}</a></dt>
 <dd>표준 HTML 요소가 사용자 정의 기본 요소처럼 동작하도록 지정합니다. (자세한 내용은 <a href="/ko/docs/Web/Web_Components/Using_custom_elements">사용자 정의 요소 사용하기</a>를 참고하세요<a href="/ko/docs/Web/Web_Components/Using_custom_elements">)</a></dd>
</dl>

<div class="note">
<p><strong>참고: </strong><code>item*</code> 특성은 <a class="external" href="https://html.spec.whatwg.org/multipage/microdata.html#microdata">WHATWG HTML Microdata feature</a>의 일부입니다.</p>
</div>

<dl>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/itemid">{{htmlattrdef("itemid")}}</a></dt>
 <dd>아이템의 고유하고 전역적인 식별자입니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/itemprop">{{htmlattrdef("itemprop")}}</a></dt>
 <dd>아이템에 특성(properties)을 추가할 때 사용합니다. 모든 HTML 요소에는 이름과 값의 쌍으로 구성된 <code>itemprop</code> 특성을 명시할 수 있습니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/itemref">{{htmlattrdef("itemref")}}</a></dt>
 <dd><code>itemscope</code> 특성을 가진 요소에 속하지 않는 특성들(properties)은 <code>itemref</code>를 사용하여 item에 연결할 수 있습니다. 여기에는 문서 내의 다른 위치에 있는 추가적인 특성을 갖는 요소 id(<code>itemid</code>s 가 아닌)목록이 제공됩니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/itemscope">{{htmlattrdef("itemscope")}}</a></dt>
 <dd><code>itemscope</code>은 (일반적으로) {{htmlattrxref("itemtype")}}과 같이 사용하여 블록에 포함된 HTML이 특정 item에 대한 것임을 나타냅니다. <code>itemscope</code>은 item을 생성하고 그 item에 연결된 <code>itemtype</code>의 범위를 정의합니다. <code>itemtype</code>은 item과 특성 컨텍스트를 설명하는 (<a class="external external-icon" href="https://schema.org/">schema.org</a>와 같은) 어휘(vocabulary)에 대한 유효한 URL입니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/itemtype">{{htmlattrdef("itemtype")}}</a></dt>
 <dd>데이터 구조에서 <code>itemprop</code>s (item properties)을 정의하는 데 사용할 단어의 URL을 지정합니다. <code><a href="/ko/docs/Web/HTML/Global_attributes/itemscope">itemscope</a></code>은 데이터 구조 내에서 <code>itemtype</code>에 의해 설정된 어휘가 활성화되는 범위를 설정하는 데 사용됩니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/lang">{{htmlattrdef("lang")}}</a></dt>
 <dd>요소의 언어를 정의하는데 도움을 줍니다: 편집할 수 없는 요소가 있는 언어 또는 사용자가 요소를 편집할 수 있는 언어를 정의하는 데 도움이 됩니다(the language that non-editable elements are in, or the language that editable elements should be written in by the user). 이 특성은 언어 식별 태그(<a class="external" href="https://www.ietf.org/rfc/bcp/bcp47.txt"><em>Tags for Identifying Languages (BCP47)</em></a>)에 정의된 형식의 하나의 "언어 태그"(하이픈으로 구분된 "언어 하위 태그(language subtags)"로 구성된)를 포함합니다. <a href="#attr-xml:lang"><strong>xml:lang</strong></a>은 이보다 우선합니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/part">{{htmlattrdef("part")}}</a></dt>
 <dd>A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the {{CSSxRef("::part")}} pseudo-element.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/slot">{{htmlattrdef("slot")}}</a></dt>
 <dd>요소에 <a href="/ko/docs/Web/Web_Components/Shadow_DOM">shadow DOM</a>의 shadow tree에 있는 슬롯을 할당합니다: <code>slot</code> 특성을 가진 요소는 {{htmlattrxref("name", "slot")}} 특성의 값이 해당 <code>slot</code> 특성의 값과 일치하는 {HTMLElement("slot")}} 요소가 생성한 슬롯에 할당됩니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/spellcheck">{{htmlattrdef("spellcheck")}}</a></dt>
 <dd>요소의 맞춤법 검사 여부를 지정합니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/style">{{htmlattrdef("style")}}</a></dt>
 <dd>요소에 적용할 <a href="/ko/docs/Web/CSS">CSS</a> 스타일 선언을 담습니다. 단, 스타일은 별도 파일에 정의하는 것이 추천하는 방식임을 유의하세요. 이 특성과 {{HTMLElement("style")}} 요소는 테스트 등을 위한 빠른 스타일링이 주 용도입니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/tabindex">{{htmlattrdef("tabindex")}}</a></dt>
 <dd>An integer attribute indicating if the element can take input focus (is <em>focusable</em>), if it should participate to sequential keyboard navigation, and if so, at what position. It can takes several values:
 <ul>
  <li>a <em>negative value</em> means that the element should be focusable, but should not be reachable via sequential keyboard navigation;</li>
  <li><code>0</code> means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;</li>
  <li>a <em>positive value</em> means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the <a href="#attr-tabindex"><strong>tabindex</strong></a>. If several elements share the same tabindex, their relative order follows their relative positions in the document.</li>
 </ul>
 </dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/title">{{htmlattrdef("title")}}</a></dt>
 <dd>요소에 대한 추가 정보를 제공하는 텍스트입니다. 사용자에게는 보통 툴팁으로서 보여집니다.</dd>
 <dt><a href="/ko/docs/Web/HTML/Global_attributes/translate">{{htmlattrdef("translate")}}</a> {{experimental_inline}}</dt>
 <dd>페이지를 지역화할 때 요소의 {{domxref("Text")}} 노드 자식 및 번역 가능한 특성의 값을 번역해야 되는지, 아니면 그대로 유지해야 하는지 나타냅니다.</dd>
</dl>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.global_attributes")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>대부분의 전역 특성에 접근할 수 있는 {{domxref("Element")}}와 {{domxref("GlobalEventHandlers")}} 인터페이스.</li>
</ul>
