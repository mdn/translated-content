---
title: HTMLElement
slug: Web/API/HTMLElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
translation_of: Web/API/HTMLElement
---
<div>
<div>{{ APIRef("HTML DOM") }}</div>
</div>

<p><strong><code>HTMLElement</code></strong> 인터페이스는 모든 종류의 <a href="/ko/docs/Web/HTML" title="/en-US/docs/Web/HTML">HTML</a> 요소를 나타냅니다. 일부 요소는 이 인터페이스를 직접 구현하지만 나머지 요소는 <code>HTMLElement</code>를 상속한 자식 인터페이스를 구현합니다.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="속성">속성</h2>

<p><em>부모인 {{domxref("Element")}}의 속성을 상속합니다. {{domxref("GlobalEventHandlers")}}, {{domxref("TouchEventHandlers")}}의 속성을 구현합니다.</em></p>

<dl>
 <dt>{{domxref("HTMLElement.accessKey")}}</dt>
 <dd>요소에 할당된 접근 키를 나타내는 {{domxref("DOMString")}}입니다.</dd>
 <dt>{{domxref("HTMLElement.accessKeyLabel")}} {{readonlyInline}}</dt>
 <dd>요소에 할당된 접근 키를 포함하는 {{domxref("DOMString")}}을 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.contentEditable")}}</dt>
 <dd>요소가 수정 가능하면 <code>"true"</code>, 그렇지 않으면 <code>"false"</code> 값을 갖는 {{domxref("DOMString")}}입니다.</dd>
 <dt>{{domxref("HTMLElement.isContentEditable")}} {{readonlyInline}}</dt>
 <dd>요소의 콘텐츠가 수정 가능한지 여부를 나타내는 {{domxref("Boolean")}}을 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.contextMenu")}} {{deprecated_inline}}</dt>
 <dd>요소와 관련된 콘텍스트 메뉴를 나타내는 {{domxref("HTMLMenuElement")}}입니다. {{jsxref("null")}}일 수 있습니다.</dd>
 <dt>{{domxref("HTMLElement.dataset")}} {{readonlyInline}}</dt>
 <dd>요소의 <a href="https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%86%8D%EC%84%B1_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0">사용자 지정 데이터 속성</a>(<code>data-*</code>)을 스크립트에서 읽고 쓸 수 있는 {{domxref("DOMStringMap")}}을 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.dir")}}</dt>
 <dd>요소의 방향성을 표현하는 전역 속성 <code>dir</code> 을 나타내는 {{domxref("DOMString")}} 을 반환합니다. 가능한 값은 <code>"ltr"</code>, <code>"rtl"</code>, <code>"auto"</code> 입니다.</dd>
 <dt>{{domxref("HTMLElement.draggable")}}</dt>
 <dd>요소가 드래그 가능한지 여부를 나타내는 {{jsxref("Boolean")}} 을 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.dropzone")}} {{readonlyInline}}</dt>
 <dd><code>dropzone</code> 전역 속성을 나타내고 drop 작업에 대한 동작을 설명하는 {{domxref("DOMSettableTokenList")}} 를 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.hidden")}}</dt>
 <dd>요소가 숨김상태인지 여부를 나타내는 {{jsxref("Boolean")}} 을 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.inert")}}</dt>
 <dd>유저 에이전트가 사용자 인터렉션 이벤트, 페이지 내 텍스트 검색("페이지에서 찾기"), 텍스트 선택의 목적으로 주어진 노드가 없는 것처럼 동작해야하는지 여부를 나타내는 {{jsxref("Boolean")}} 을 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.innerText")}}</dt>
 <dd>노드와 그 자손의 "렌더링된" 텍스트 컨텐츠를 나타냅니다. getter 로써, 이는 사용자가 커서로 요소의 컨텐츠를 하이라이팅한 후 클립보드로 복사하면 얻을 수 있는 텍스트와 유사합니다.</dd>
 <dt>{{domxref("HTMLElement.itemScope")}} {{experimental_inline}}</dt>
 <dd>항목 스코프를 나타내는 {{jsxref("Boolean")}} 입니다.</dd>
 <dt>{{domxref("HTMLElement.itemType")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>{{domxref("DOMSettableTokenList")}}… 를 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.itemId")}} {{experimental_inline}}</dt>
 <dd>항목 ID 를 나타내는 {{domxref("DOMString")}} 입니다.</dd>
 <dt>{{domxref("HTMLElement.itemRef")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>{{domxref("DOMSettableTokenList")}}… 를 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.itemProp")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>{{domxref("DOMSettableTokenList")}}… 를 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.itemValue")}} {{experimental_inline}}</dt>
 <dd>항목 값을 나타내는 {{jsxref("Object")}} 를 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.lang")}}</dt>
 <dd>요소의 속성, 텍스트, 컨텐츠의 언어를 나타내는 {{domxref("DOMString")}} 입니다.</dd>
 <dt>{{domxref("HTMLElement.noModule")}}</dt>
 <dd>임포트한 스크립트가 모듈 스크립트를 지원하는 유저 에이전트에서 실행될 수 있는지를 나타내는 {{jsxref("Boolean")}} 입니다.</dd>
 <dt>{{domxref("HTMLElement.nonce")}}</dt>
 <dd>주어진 페치(fetch)의 진행을 허용할지를 결정하기 위한 컨텐츠 보안 정책(Content Security Policy)에서 한 번 사용된 암호회된 숫자를 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.offsetHeight")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>레이아웃에 상대적인 요소의 높이를 갖는 <code>double</code> 을 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.offsetLeft")}}{{readonlyInline}}{{experimental_inline}}</dt>
 <dd>요소의 left border 부터 <code>offsetParent</code> 의 left border 까지의 거리를 <code>double</code> 로 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.offsetParent")}}{{readonlyInline}}{{experimental_inline}}</dt>
 <dd>모든 오프셋 계산이 현재 연산된 요소인 {{domxref("Element")}} 를 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.offsetTop")}}{{readonlyInline}}{{experimental_inline}}</dt>
 <dd>요소의 top border 부터 <code>offsetParent</code> 의 top border 까지의 거리를 <code>double</code> 로 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.offsetWidth")}}{{readonlyInline}}{{experimental_inline}}</dt>
 <dd>레이아웃에 상대적인 요소의 너비를 갖는 <code>double</code> 을 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.properties")}} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd>{{domxref("HTMLPropertiesCollection")}}… 을 반환합니다.</dd>
 <dt>{{domxref("HTMLElement.spellcheck")}}{{ gecko_minversion_inline("1.9")}}</dt>
 <dd><a href="https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/spellcheck" title="en/Controlling_spell_checking_in_HTML_forms">철자 검사</a>를 제어하는 {{jsxref("Boolean")}} 입니다. 모든 HTML 요소에 존재하지만, 모두에 대해 적용되지는 않습니다.</dd>
 <dt>{{domxref("HTMLElement.style")}}</dt>
 <dd>요소의 스타일 속성의 정의를 나타내는 {{domxref("CSSStyleDeclaration")}} 객체입니다.</dd>
 <dt>{{domxref("HTMLElement.tabIndex")}}</dt>
 <dd>탭 순서에서 요소의 위치를 나타내는 <code>long</code> 입니다.</dd>
 <dt>{{domxref("HTMLElement.title")}}</dt>
 <dd>요소에 마우스를 오버할 때 팝업 상자에 표시되는 텍스트를 갖는 {{domxref("DOMString")}} 입니다.</dd>
 <dt>{{domxref("HTMLElement.translate")}} {{experimental_inline}}</dt>
 <dd>번역을 나타내는 {{jsxref("Boolean")}} 입니다.</dd>
</dl>

<h3 id="이벤트_핸들러">이벤트 핸들러</h3>

<p><code>onXYZ</code> 형태의 대부분의 이벤트 핸들러 속성은 {{domxref("GlobalEventHandlers")}} 또는 {{domxref("TouchEventHandlers")}} 에 정의되어 있으며 <code>HTMLElement</code> 에 의해 구현되었습니다. 다음 <code>HTMLElement</code> 에 해당하는 핸들러입니다.</p>

<dl>
 <dt>{{ domxref("HTMLElement.oncopy") }} {{ non-standard_inline() }}</dt>
 <dd><code>copy</code> 이벤트를 위한 이벤트 핸들링 코드를 반환합니다({{bug("280959")}}).</dd>
 <dt>{{ domxref("HTMLElement.oncut") }} {{ non-standard_inline() }}</dt>
 <dd><code>cut</code> 이벤트를 위한 이벤트 핸들링 코드를 반환합니다({{bug("280959")}}).</dd>
 <dt>{{ domxref("HTMLElement.onpaste") }} {{ non-standard_inline() }}</dt>
 <dd><code>paste</code> 이벤트를 위한 이벤트 핸들링 코드를 반환합니다({{bug("280959")}}).</dd>
 <dt>{{domxref("TouchEventHandlers.ontouchstart")}} {{non-standard_inline}}</dt>
 <dd>{{event("touchstart")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.</dd>
 <dt>{{domxref("TouchEventHandlers.ontouchend")}} {{non-standard_inline}}</dt>
 <dd>{{event("touchend")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.</dd>
 <dt>{{domxref("TouchEventHandlers.ontouchmove")}} {{non-standard_inline}}</dt>
 <dd>{{event("touchmove")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.</dd>
 <dt>{{domxref("TouchEventHandlers.ontouchenter")}} {{non-standard_inline}}</dt>
 <dd>{{event("touchenter")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.</dd>
 <dt>{{domxref("TouchEventHandlers.ontouchleave")}} {{non-standard_inline}}</dt>
 <dd>{{event("touchleave")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.</dd>
 <dt>{{domxref("TouchEventHandlers.ontouchcancel")}} {{non-standard_inline}}</dt>
 <dd>{{event("touchcancel")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.</dd>
</dl>

<h2 id="메서드">메서드</h2>

<p><em>부모인 {{domxref("Element")}}의 메서드를 상속합니다.</em></p>

<dl>
 <dt>{{domxref("HTMLElement.blur()")}}</dt>
 <dd>현재 포커스된 요소로부터 키보드 포커스를 제거합니다.</dd>
 <dt>{{domxref("HTMLElement.click()")}}</dt>
 <dd>요소로 마우스 클릭 이벤트를 전달합니다.</dd>
 <dt>{{domxref("HTMLElement.focus()")}}</dt>
 <dd>요소에 현재 키보드 포커스를 생성합니다.</dd>
 <dt>{{domxref("HTMLElement.forceSpellCheck()")}} {{experimental_inline}}</dt>
 <dd>요소에 철자 확인자를 생성합니다.</dd>
</dl>

<h2 id="이벤트">이벤트</h2>

<p>Listen to these events using <code>addEventListener()</code> or by assigning an event listener to the <code>on<em>eventname</em></code> property of this interface.</p>

<dl>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/invalid_event">invalid</a></code></dt>
 <dd>Fired when an element does not satisfy its constraints during constraint validation.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid">oninvalid</a></code> property.</dd>
</dl>

<h3 id="Animation_events">Animation events</h3>

<dl>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationcancel_event">animationcancel</a></code></dt>
 <dd>Fired when an animation unexpectedly aborts.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel">onanimationcancel</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event">animationend</a></code></dt>
 <dd>Fired when an animation has completed normally.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend">onanimationend</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationiteration_event">animationiteration</a></code></dt>
 <dd>Fired when an animation iteration has completed.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration">onanimationiteration</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationstart_event">animationstart</a></code></dt>
 <dd>Fired when an animation starts.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationstart">onanimationstart</a></code> property.</dd>
</dl>

<h3 id="Input_events">Input events</h3>

<dl>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event">beforeinput</a></code></dt>
 <dd>Fired when the value of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element is about to be modified.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event">input</a></code></dt>
 <dd>Fired when the <code>value</code> of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput">oninput</a></code> property.</dd>
</dl>

<h3 id="Pointer_events">Pointer events</h3>

<dl>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/gotpointercapture_event">gotpointercapture</a></code></dt>
 <dd>Fired when an element captures a pointer using <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture">setPointerCapture()</a></code>.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture">ongotpointercapture</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lostpointercapture_event">lostpointercapture</a></code></dt>
 <dd>Fired when a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events#Pointer_capture">captured pointer</a> is released.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture">onlostpointercapture</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointercancel_event">pointercancel</a></code></dt>
 <dd>Fired when a pointer event is canceled.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel">onpointercancel</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerdown_event">pointerdown</a></code></dt>
 <dd>Fired when a pointer becomes active.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown">onpointerdown</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerenter_event">pointerenter</a></code></dt>
 <dd>Fired when a pointer is moved into the hit test boundaries of an element or one of its descendants.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter">onpointerenter</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerleave_event">pointerleave</a></code></dt>
 <dd>Fired when a pointer is moved out of the hit test boundaries of an element.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave">onpointerleave</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointermove_event">pointermove</a></code></dt>
 <dd>Fired when a pointer changes coordinates.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove">onpointermove</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerout_event">pointerout</a></code></dt>
 <dd>Fired when a pointer is moved out of the <em>hit test</em> boundaries of an element (among other reasons).<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout">onpointerout</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerover_event">pointerover</a></code></dt>
 <dd>Fired when a pointer is moved into an element's hit test boundaries.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover">onpointerover</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/pointerup_event">pointerup</a></code></dt>
 <dd>Fired when a pointer is no longer active.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup">onpointerup</a></code> property.</dd>
</dl>

<h3 id="Transition_events">Transition events</h3>

<dl>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitioncancel_event">transitioncancel</a></code></dt>
 <dd>Fired when a <a href="https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_transitions">CSS transition</a> is canceled.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel">ontransitioncancel</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event">transitionend</a></code></dt>
 <dd>Fired when a <a href="https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_transitions">CSS transition</a> has completed.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend">ontransitionend</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionrun_event">transitionrun</a></code></dt>
 <dd>Fired when a <a href="https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_transitions">CSS transition</a> is first created.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionrun" rel="nofollow">ontransitionrun</a></code> property.</dd>
 <dt><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionstart_event">transitionstart</a></code></dt>
 <dd>Fired when a <a href="https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_transitions">CSS transition</a> has actually started.<br>
 Also available via the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionstart" rel="nofollow">ontransitionstart</a></code> property.</dd>
</dl>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.HTMLElement")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{domxref("Element")}}</li>
</ul>
