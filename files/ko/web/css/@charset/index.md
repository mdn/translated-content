---
title: '@charset'
slug: Web/CSS/@charset
tags:
  - At-rule
  - CSS
  - Layout
  - Reference
  - Web
translation_of: Web/CSS/@charset
---
<div>{{ CSSRef }}</div>

<p><strong><code>@charset</code></strong> <a href="/ko/docs/Web/CSS" title="CSS">CSS</a> <a href="/ko/docs/Web/CSS/At-rule" title="At-rule">at-규칙</a>은 스타일 시트에 쓰이는 문자 인코딩을 지정합니다. 스타일 시트의 첫 번째 요소여야 하며 어떤 문자가 선행되지 않아야 합니다; <a href="/ko/docs/Web/CSS/Syntax#nested_statements" title="nested_statements">중첩된 문</a>이 아니기에, <a href="/ko/docs/Web/CSS/At-rule#Conditional_Group_Rules" title="At-rule#Conditional_Group_Rules">조건부 그룹 at-규칙</a> 내에 사용될 수 없습니다. 여러 <code>@charset</code> at-규칙이 정의된 경우, 첫 번째 것만 사용되고 HTML 요소의 <code>style</code> attribute 또는 HTML 페이지의 문자 집합과 관련 있는 {{ HTMLElement("style") }} 요소 내에서 사용될 수 없습니다.</p>

<pre class="brush: css">@charset "utf-8";
</pre>

<p>이 at-규칙은 {{ cssxref("content") }}처럼 일부 CSS 속성(property)에서 비 ASCII 문자를 사용할 때 유용합니다.</p>

<p>스타일 시트의 문자 인코딩을 정의하는 여러 방법이 있기에, 브라우저는 다음과 같은 순서로 다음 방법을 시도합니다( 그리고 하나가 결과를 산출하자 마자 곧 멈춥니다):</p>

<ol>
 <li>파일의 시작 부분에 놓이는 <a href="http://en.wikipedia.org/wiki/Byte_order_mark" title="Byte_order_mark">Unicode byte-order</a> 문자값.</li>
 <li><code>Content-Type:</code> HTTP 헤더의 <code>charset</code> attribute 또는 스타일 시트를 제공하는 데 쓰이는 프로토콜 등가물에 주어진 값.</li>
 <li><code>@charset</code> CSS at-규칙.</li>
 <li>참조하는 문서에 의해 정의된 문자 인코딩 사용: {{ HTMLElement("link") }} 요소의 <code>charset</code> attribute. 이 메서드는 HTML5에서 폐기(obsolete)되어 사용해서는 안됩니다.</li>
 <li>문서가 UTF-8이라고 가정</li>
</ol>

<h2 id="구문">구문</h2>

<pre>@charset "UTF-8";
@charset 'iso-8859-15';
</pre>

<p>where:</p>

<dl>
 <dt style="margin: 0 40px;"><em>charset</em></dt>
 <dd style="margin: 0 40px;">사용되는 문자 인코딩을 나타내는 {{cssxref("&lt;string&gt;")}}입니다. <a href="http://www.iana.org/assignments/character-sets">IANA-registry</a>에 정의된 웹 안전 문자 인코딩의 이름이어야 합니다. 여러 이름이 인코딩과 관련된 경우, <em>preferred</em>로 표시된 것만 사용되어야 합니다.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<pre class="brush: css">@charset "UTF-8";       /* 스타일 시트의 인코딩을 Unicode UTF-8로 설정 */
@charset 'iso-8859-15'; /* 스타일 시트의 인코딩을 Latin-9 (서유럽어, euro sign 있는) 로 설정 */
 @charset "UTF-8";      /* 무효한, at-규칙 앞에 문자(공백)가 있음 */
@charset UTF-8;         /* 무효한, ' 또는 " 없는 문자집합 CSS {{cssxref("&lt;string&gt;")}}이 아님 */
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("css.at-rules.charset")}}</p>
