---
title: 전역 특성
slug: Web/HTML/Global_attributes
---

{{HTMLSidebar("Global_attributes")}}

**전역 특성**(Global attributes)은 모든 HTML에서 공통으로 사용할 수 있는 특성입니다. 그러나 일부 요소에는 아무런 효과도 없을 수 있습니다.

전역 특성은 모든 [HTML 요소](/ko/docs/Web/HTML/Element)에 지정할 수 있으며, 심지어 표준에 명시되지 않은 요소에도 지정할 수 있습니다. 이는, 비표준 요소를 사용하는 순간 문서가 HTML5를 준수하지 않음에도 불구하고, 비표준 요소 역시 전역 특성을 허용해야 함을 의미합니다. 예를 들어, HTML5를 준수하는 브라우저라면, `<foo>`라는 요소는 유효하지 않지만 그래도 `<foo hidden>...</foo>`는 화면에 나타내지 않을 것입니다.

기본 HTML 전역 특성 외에 아래와 같은 전역 특성도 존재합니다.

- {{htmlattrdef("xml:lang")}}과 {{htmlattrdef("xml:base")}}는 XHTML 명세에서 상속받은 것으로 더 사용하지 않지만, 호환성 유지를 위해 아직 존재합니다.
- 여러 개의&#x20;

  **[aria-\*](/ko/docs/Web/Accessibility/ARIA)`**

  &#x20;특성은 접근성 향상을 위해 사용됩니다.

- [이벤트 처리기](/ko/docs/Web/Guide/Events/Event_handlers) 특성: **`onabort`**, **`onautocomplete`**, **`onautocompleteerror`**, **`onblur`**, **`oncancel`**, **`oncanplay`**, **`oncanplaythrough`**, **`onchange`**, **`onclick`**, **`onclose`**, **`oncontextmenu`**, **`oncuechange`**, **`ondblclick`**, **`ondrag`**, **`ondragend`**, **`ondragenter`**, **`ondragexit`**, **`ondragleave`**, **`ondragover`**, **`ondragstart`**, **`ondrop`**, **`ondurationchange`**, **`onemptied`**, **`onended`**, **`onerror`**, **`onfocus`**, **`oninput`**, **`oninvalid`**, **`onkeydown`**, **`onkeypress`**, **`onkeyup`**, **`onload`**, **`onloadeddata`**, **`onloadedmetadata`**, **`onloadstart`**, **`onmousedown`**, **`onmouseenter`**, **`onmouseleave`**, **`onmousemove`**, **`onmouseout`**, **`onmouseover`**, **`onmouseup`**, **`onmousewheel`**, **`onpause`**, **`onplay`**, **`onplaying`**, **`onprogress`**, **`onratechange`**, **`onreset`**, **`onresize`**, **`onscroll`**, **`onseeked`**, **`onseeking`**, **`onselect`**, **`onshow`**, **`onsort`**, **`onstalled`**, **`onsubmit`**, **`onsuspend`**, **`ontimeupdate`**, **`ontoggle`**, **`onvolumechange`**, **`onwaiting`**.

## 전역 특성 목록

- [{{htmlattrdef("accesskey")}}](/ko/docs/Web/HTML/Global_attributes/accesskey)
  - : 현재 요소에 대한 키보드 단축키 생성을 위한 힌트를 제공합니다. 이 특성은 공백으로 구분한 문자 목록으로 구성됩니다. 브라우저는 주어진 여러 개의 값 중 장치의 키보드 레이아웃에 존재하는 첫 번째 키를 사용해야 합니다.
- [{{htmlattrdef("autocapitalize")}}](/ko/docs/Web/HTML/Global_attributes/autocapitalize)

  - : 사용자가 입력 또는 수정하는 텍스트를 자동으로 대문자로 변환할지 여부와 변환하는 방법을 제어합니다. 다음과 같은 값이 가능합니다.

    - `off` 또는 `none`, 대소문자 자동 변환이 발생하지 않음 (모든 글자가 기본값 소문자)
    - `on` 또는 `sentences`, 각 문장의 첫 글자를 대문자로 변환, 나머지 글자는 기본값 소문자
    - `words`, 각 단어의 첫 글자를 대문자로 변환, 나머지 글자는 기본값 소문자
    - `characters`, 모든 글자의 기본값이 대문자

- [{{htmlattrdef("class")}}](/ko/docs/Web/HTML/Global_attributes/class)
  - : 공백으로 구분된 해당 요소의 클래스의 목록입니다. 클래스를 이용하면 CSS나 JavaScript에서 [클래스 선택자](/ko/docs/Web/CSS/Class_selectors)나 {{domxref("Document.getElementsByClassName()")}}과 같은 메서드를 이용해 특정 요소를 선택하거나 접근할 수 있습니다.
- [{{htmlattrdef("contenteditable")}}](/ko/docs/Web/HTML/Global_attributes/contenteditable)
  - : 해당 요소를 사용자가 편집할 수 있는지를 나타내는 열거형 특성입니다. 편집 가능한 경우에 브라우저는 편집을 허용하도록 위젯을 수정합니다.
- [{{htmlattrdef("data-*")}}](/ko/docs/Web/HTML/Global_attributes/data-*)
  - : 사용자 지정 데이터 특성(custom data attributes)이라는 특성 클래스를 형성함으로써 임의의 데이터를 스크립트로 [HTML](/ko/docs/Web/HTML)과 [DOM](/ko/docs/Web/API/Document_Object_Model) 사이에서 교환할 수 있는 방법을 제공합니다.
- [{{htmlattrdef("dir")}}](/ko/docs/Web/HTML/Global_attributes/dir)
  - : 요소의 쓰기 방향을 나타내는 열거형 특성입니다.
- [{{htmlattrdef("draggable")}}](/ko/docs/Web/HTML/Global_attributes/draggable)
  - : [Drag and Drop API](/ko/docs/Web/API/HTML_드래그_앤_드롭_API)를 사용해 요소를 드래그할 수 있는지 나타내는 열거형 특성입니다.
- [{{htmlattrdef("exportparts")}}](/ko/docs/Web/HTML/Global_attributes/exportparts) {{experimental_inline}}
  - : 중첩 섀도우 트리에서 섀도우 파트를 전이적으로 라이트 파트에 내보낼 때 사용합니다.
- [{{htmlattrdef("hidden")}}](/ko/docs/Web/HTML/Global_attributes/hidden)
  - : 해당 요소가 아직, 또는 더 이상 관련이 없음을 나타내는 불리언 특성입니다. 브라우저는 `hidden` 특성을 가진 요소를 렌더링 하지 않습니다.
- [{{htmlattrdef("id")}}](/ko/docs/Web/HTML/Global_attributes/id)
  - : 문서 전체에서 유일해야 하는 고유 식별자(ID)를 정의합니다. (프래그먼트 식별자를 사용한) 링크, 스크립트, 스타일 적용 시 요소를 식별할 때 사용합니다.
- [{{htmlattrdef("inputmode")}}](/ko/docs/Web/HTML/Global_attributes/inputmode)
  - : 사용자가 요소나 요소의 콘텐츠를 편집할 때, 브라우저가 제공해야 하는 가상 키보드 설정을 알려줍니다. 주로 {{htmlelement("input")}} 요소에 사용하지만, [`contenteditable`](/ko/docs/Web/HTML/Global_attributes#contenteditable) 특성을 가진 요소라면 종류 불문하고 사용할 수 있습니다.
- [{{htmlattrdef("is")}}](/ko/docs/Web/HTML/Global_attributes/is)
  - : 표준 HTML 요소가 사용자 정의 기본 요소처럼 동작하도록 지정합니다. (자세한 내용은 [사용자 정의 요소 사용하기](/ko/docs/Web/Web_Components/Using_custom_elements)를 참고하세요[)](/ko/docs/Web/Web_Components/Using_custom_elements)

> **참고:**`item*` 특성은 [WHATWG HTML Microdata feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata)의 일부입니다.

- [{{htmlattrdef("itemid")}}](/ko/docs/Web/HTML/Global_attributes/itemid)
  - : 아이템의 고유하고 전역적인 식별자입니다.
- [{{htmlattrdef("itemprop")}}](/ko/docs/Web/HTML/Global_attributes/itemprop)
  - : 아이템에 특성(properties)을 추가할 때 사용합니다. 모든 HTML 요소에는 이름과 값의 쌍으로 구성된 `itemprop` 특성을 명시할 수 있습니다.
- [{{htmlattrdef("itemref")}}](/ko/docs/Web/HTML/Global_attributes/itemref)
  - : `itemscope` 특성을 가진 요소에 속하지 않는 특성들(properties)은 `itemref`를 사용하여 item에 연결할 수 있습니다. 여기에는 문서 내의 다른 위치에 있는 추가적인 특성을 갖는 요소 id(`itemid`s 가 아닌)목록이 제공됩니다.
- [{{htmlattrdef("itemscope")}}](/ko/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope`은 (일반적으로) [`itemtype`](/ko/docs/Web/HTML/Global_attributes#itemtype)과 같이 사용하여 블록에 포함된 HTML이 특정 item에 대한 것임을 나타냅니다. `itemscope`은 item을 생성하고 그 item에 연결된 `itemtype`의 범위를 정의합니다. `itemtype`은 item과 특성 컨텍스트를 설명하는 ([schema.org](https://schema.org/)와 같은) 어휘(vocabulary)에 대한 유효한 URL입니다.
- [{{htmlattrdef("itemtype")}}](/ko/docs/Web/HTML/Global_attributes/itemtype)
  - : 데이터 구조에서 `itemprop`s (item properties)을 정의하는 데 사용할 단어의 URL을 지정합니다. [`itemscope`](/ko/docs/Web/HTML/Global_attributes/itemscope)은 데이터 구조 내에서 `itemtype`에 의해 설정된 어휘가 활성화되는 범위를 설정하는 데 사용됩니다.
- [{{htmlattrdef("lang")}}](/ko/docs/Web/HTML/Global_attributes/lang)
  - : 요소의 언어를 정의하는데 도움을 줍니다: 편집할 수 없는 요소가 있는 언어 또는 사용자가 요소를 편집할 수 있는 언어를 정의하는 데 도움이 됩니다(the language that non-editable elements are in, or the language that editable elements should be written in by the user). 이 특성은 언어 식별 태그([_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt))에 정의된 형식의 하나의 "언어 태그"(하이픈으로 구분된 "언어 하위 태그(language subtags)"로 구성된)를 포함합니다. [**xml:lang**](#attr-xml:lang)은 이보다 우선합니다.
- [{{htmlattrdef("part")}}](/ko/docs/Web/HTML/Global_attributes/part)
  - : A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the {{CSSxRef("::part")}} pseudo-element.
- [{{htmlattrdef("slot")}}](/ko/docs/Web/HTML/Global_attributes/slot)
  - : 요소에 [shadow DOM](/ko/docs/Web/Web_Components/Shadow_DOM)의 shadow tree에 있는 슬롯을 할당합니다: `slot` 특성을 가진 요소는 [`name`](/ko/docs/Web/HTML/Element/slot#name) 특성의 값이 해당 `slot` 특성의 값과 일치하는 {HTMLElement("slot")}} 요소가 생성한 슬롯에 할당됩니다.
- [{{htmlattrdef("spellcheck")}}](/ko/docs/Web/HTML/Global_attributes/spellcheck)
  - : 요소의 맞춤법 검사 여부를 지정합니다.
- [{{htmlattrdef("style")}}](/ko/docs/Web/HTML/Global_attributes/style)
  - : 요소에 적용할 [CSS](/ko/docs/Web/CSS) 스타일 선언을 담습니다. 단, 스타일은 별도 파일에 정의하는 것이 추천하는 방식임을 유의하세요. 이 특성과 {{HTMLElement("style")}} 요소는 테스트 등을 위한 빠른 스타일링이 주 용도입니다.
- [{{htmlattrdef("tabindex")}}](/ko/docs/Web/HTML/Global_attributes/tabindex)

  - : An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can takes several values:

    - a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
    - `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
    - a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.

- [{{htmlattrdef("title")}}](/ko/docs/Web/HTML/Global_attributes/title)
  - : 요소에 대한 추가 정보를 제공하는 텍스트입니다. 사용자에게는 보통 툴팁으로서 보여집니다.
- [{{htmlattrdef("translate")}}](/ko/docs/Web/HTML/Global_attributes/translate) {{experimental_inline}}
  - : 페이지를 지역화할 때 요소의 {{domxref("Text")}} 노드 자식 및 번역 가능한 특성의 값을 번역해야 되는지, 아니면 그대로 유지해야 하는지 나타냅니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 대부분의 전역 특성에 접근할 수 있는 {{domxref("Element")}}와 {{domxref("GlobalEventHandlers")}} 인터페이스.
