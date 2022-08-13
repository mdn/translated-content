---
title: 모바일 접근성 점검항목
slug: Web/Accessibility/Mobile_accessibility_checklist
translation_of: Web/Accessibility/Mobile_accessibility_checklist
---
<div class="summary">
<p>이 문서는 모바일 앱 개발자를 위한 접근성 요구 사항에 대한 간결한 체크리스트를 제공한다. 더 많은 패턴이 발생할수록 지속적으로 진화하려는 의도다.</p>
</div>

<h2 id="색">색</h2>

<ul>
 <li>색상 대비는 반드시 WCAG 2.0 AA 레벨 요건을 준수해야 한다:
  <ul>
   <li>일반적인 크기의 텍스트(18pt 보다 작거나 14pt 볼드체)는 4.5:1</li>
   <li>큰 크기의 텍스트(적어도 18pt 보다 크거나 14pt 볼드체)는 3 :1</li>
  </ul>
 </li>
 <li>색상을 통해 전달되는 정보는 반드시 다른 수단으로도 제공되어야 한다(링크 등에 대한 밑줄 텍스트).</li>
</ul>

<h2 id="가시성">  가시성</h2>

<ul>
 <li>opacity:0, z-index 깊이 조정 및 화면 밖 배치와 같은 콘텐츠 숨기기 기법은 단순히 가시성을 처리하기 위해서만 사용되어서는 안 된다.</li>
 <li>
  <p>현재 가시화된 화면 이외의 모든 것은 반드시 진정으로 보이지 않아야 한다(특히 여러 개의 카드가 있는 단일 페이지 앱에 관련됨).</p>

  <ul>
   <li><code>hidden</code> 속성 또는 <code>visibility</code> 또는 <code>display</code> 스타일 속성값을 <strong>이용</strong>해야 한다.</li>
   <li>불가피한 경우를 제외 하고 <code>aria-hidden</code> <strong>속성을 사용해서는 안된다.</strong></li>
  </ul>
 </li>
</ul>

<h2 id="초점">초점</h2>

<ul>
 <li>
  <p>모든 활성화 가능한 요소는 <strong>초점 가능해야 한다.</strong></p>

  <ul>
   <li>
    <p>링크, 버튼 및 양식 필드와 같은 표준 control들는 기본적으로 초점을 맞출 수 있다.</p>
   </li>
   <li>
    <p>비표준 control들은 반드시 버튼, 링크 또는 체크박스와 같은 적절한  <a href="http://www.w3.org/TR/wai-aria/roles">ARIA Role</a>  역할이 할당되어야 한다.</p>
   </li>
  </ul>

  <p>초점은 논리적이고 일관된 방식으로 다루어야 한다.</p>
 </li>
</ul>

<h2 id="텍스트_동등성">텍스트 동등성</h2>

<ul>
 <li>
  <p>앱 내 모든 엄격하지 않은 현재 텍스트 요소에 대해 동일한 의미의 텍스트가 제공되어야 한다.</p>

  <ul>
   <li><em>alt 와</em> <em>title 속성은 적절하게 사용되어야 한다.</em>  ( 스티브 폴크너의 <a href="http://blog.paciellogroup.com/2013/01/using-the-html-title-attribute-updated/">Using the HTML title attribute</a> 위한 좋은 가이드 보기.)</li>
   <li>위 속성을 사용하기 어려운 경우  <code>aria-label</code>, <code>aria-labelledby</code>, or <code>aria-describedby 등과 같은 </code><a href="http://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header">ARIA Properties</a> 를 사용하세요</li>
  </ul>
 </li>
 <li>텍스트 이미지 사용은 가급적 자제 해야 한다.</li>
 <li>모든  form 콘트롤 요소는 스크린 리더 사용자를 위해 lable 요소를 가져야 한다. </li>
</ul>

<h2 id="처리_상태">처리 상태</h2>

<ul>
 <li>
  <p>라디오 버튼 및 체크박스와 같은 표준 제어장치는 운영체제가 취급한다. 그러나 다른 사용자 정의 제어의 경우, <code>aria-checked</code>, <code>aria-disabled</code>, <code>aria-selected</code>, <code>aria-expanded</code>, and <code>aria-pressed</code>과 같은 <a href="http://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets_header">ARIA States</a>를 통해 상태 변경이 제공되어야 한다.</p>
 </li>
</ul>

<h2 id="방향">방향</h2>

<ul>
 <li>콘텐츠는 특수한 경우를 제외하고 가로 또는 세로 방향등 단일 방향으로 제한해서는 안된다. <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html">WCAG 2.1: Orientation</a>

  <ul>
   <li>특수한 경우는 피아노 앱이나 은행 수표 앱 같은 경우가 있다.</li>
  </ul>
 </li>
</ul>

<h2 id="General_Guidelines">General Guidelines</h2>

<ul>
 <li>An app title <strong>MUST</strong> be provided.</li>
 <li>Headings <strong>MUST</strong> not break hierarchical structure
  <pre class="brush: html">&lt;h1&gt;Top level heading&lt;/h1&gt;
  &lt;h2&gt;Secondary heading&lt;/h2&gt;
  &lt;h2&gt;Another secondary heading&lt;/h2&gt;
    &lt;h3&gt;Low level heading&lt;/h3&gt;</pre>
 </li>
 <li><a href="http://www.w3.org/TR/wai-aria/roles#landmark_roles_header">ARIA Landmark Roles</a> <strong>SHOULD</strong> be used to describe an app or document structure, such as <code>banner</code>, <code>complementary</code>, <code>contentinfo</code>, <code>main</code>, <code>navigation</code>, <code>search</code>.</li>
 <li>Touch event handlers <strong>MUST</strong> only be triggered on the <code>touchend</code> event.</li>
 <li>Touch targets <strong>MUST</strong> be large enough for the user to interact with (see the <a href="http://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/design/touch-target-size">BBC Mobile Accessibility Guidelines</a> for useful touch target size guidelines).</li>
</ul>

<div class="note">
<p><strong>Note</strong>: The <a href="http://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html">original version of this document</a> was written by <a href="http://yzen.github.io/">Yura Zenevich</a>.</p>
</div>
