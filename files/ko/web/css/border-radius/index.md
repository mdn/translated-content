---
title: border-radius
slug: Web/CSS/border-radius
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - 'recipe:css-shorthand-property'
translation_of: Web/CSS/border-radius
---
<div>{{CSSRef}}</div>

<p><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>border-radius</code></strong> 속성은 요소 테두리 경계의 꼭짓점을 둥글게 만듭니다. 하나의 값을 사용해 원형 꼭짓점을, 두 개의 값을 사용해 타원형 꼭짓점을 적용할 수 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/css/border-radius.html")}}</div>

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> and send us a pull request.</div>

<p>꼭짓점 반경은 요소의 테두리 존재 여부와는 별개로 전체 {{Cssxref("background")}}에 적용됩니다. 원형 꼭짓점으로 인해 배경이 잘리는 지점은 {{cssxref("background-clip")}} 속성이 지정합니다.</p>

<p>{{cssxref("border-collapse")}}의 값이 <code>collapse</code>인 표 요소는 <code>border-radius</code> 속성의 영향을 받지 않습니다.</p>

<div class="note"><strong>참고</strong>: 다른 단축 속성과 마찬가지로, 각각의 하위 속성이 부모를 상속하도록 할 수는 없습니다. 즉, <code>border-radius: 0 0 inherit inherit</code>처럼 일부만 재정의할 수 없습니다. 대신, 원래의 본디속성을 하나씩 사용하세요.</div>

<h2 id="구성_속성">구성 속성</h2>

<p><code>border-radius</code>는 다음 CSS 속성의 단축 속성입니다.</p>

<ul>
 <li>{{cssxref("border-bottom-left-radius")}}</li>
 <li>{{cssxref("border-bottom-right-radius")}}</li>
 <li>{{cssxref("border-top-left-radius")}}</li>
 <li>{{cssxref("border-top-right-radius")}}</li>
</ul>

<h2 id="구문">구문</h2>

<pre class="brush: css notranslate">/* The syntax of the first radius allows one to four values */
/* Radius is set for all 4 sides */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* The syntax of the second radius allows one to four values */
/* (first radius values) / radius */
border-radius: 10px 5% / 20px;

/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Global values */
border-radius: inherit;
border-radius: initial;
border-radius: unset;</pre>

<p><code>border-radius</code> 속성은 다음 방법으로 지정할 수 있습니다.</p>

<ul>
 <li>한 개에서 네 개의 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}} 값은 꼭짓점의 단일 반지름을 설정합니다.</li>
 <li>선택적으로 "<code>/</code>" 이후에 한 개에서 네 개의 <code>&lt;length&gt;</code> 또는 <code>&lt;percentage&gt;</code> 값을 사용해 추가 반지름을 설정해서 타원형 꼭짓점을 만들 수 있습니다.</li>
</ul>

<h3 id="값">값</h3>

<table>
 <tbody>
  <tr>
   <td style="vertical-align: top;"><em>radius</em></td>
   <td><img alt="all-corner.png" class="default internal" src="/@api/deki/files/6138/=all-corner.png"></td>
   <td style="vertical-align: top;">테두리의 각 꼭짓점 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 한 개 값 구문에서만 사용합니다.</td>
  </tr>
  <tr>
   <td style="vertical-align: top;"><em>top-left-and-bottom-right</em></td>
   <td><img alt="top-left-bottom-right.png" class="default internal" src="/@api/deki/files/6141/=top-left-bottom-right.png"></td>
   <td style="vertical-align: top;">왼쪽 위와 오른쪽 아래 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 두 개 값 구문에서만 사용합니다.</td>
  </tr>
  <tr>
   <td style="vertical-align: top;"><em>top-right-and-bottom-left</em></td>
   <td><img alt="top-right-bottom-left.png" class="default internal" src="/@api/deki/files/6143/=top-right-bottom-left.png"></td>
   <td style="vertical-align: top;">오른쪽 위와 왼쪽 아래 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 두 개 또는 세 개 값 구문에서만 사용합니다.</td>
  </tr>
  <tr>
   <td style="vertical-align: top;"><em>top-left</em></td>
   <td><img alt="top-left.png" class="default internal" src="/@api/deki/files/6142/=top-left.png"></td>
   <td style="vertical-align: top;">왼쪽 위 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 세 개 또는 네 개 값 구문에서만 사용합니다.</td>
  </tr>
  <tr>
   <td style="vertical-align: top;"><em>top-right</em></td>
   <td style="margin-left: 2px;"><img alt="top-right.png" class="default internal" src="/@api/deki/files/6144/=top-right.png"></td>
   <td style="vertical-align: top;">오른쪽 위 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 네 개 값 구문에서만 사용합니다.</td>
  </tr>
  <tr>
   <td style="vertical-align: top;"><em>bottom-right</em></td>
   <td style="margin-left: 2px;"><img alt="bottom-rigth.png" class="default internal" src="/@api/deki/files/6140/=bottom-rigth.png"></td>
   <td style="vertical-align: top;">오른쪽 아래 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 네 개 값 구문에서만 사용합니다.</td>
  </tr>
  <tr>
   <td style="vertical-align: top;"><em>bottom-left</em></td>
   <td><img alt="bottom-left.png" class="default internal" src="/@api/deki/files/6139/=bottom-left.png"></td>
   <td style="vertical-align: top;">왼쪽 아래 꼭짓점의 반지름을 나타내는 {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}. 네 개 값 구문에서만 사용합니다.</td>
  </tr>
 </tbody>
</table>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>길이 값을 사용해 원의 반지름 또는 타원의 짧은반지름과 긴반지름을 지정합니다. 음의 값은 유효하지 않습니다.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>백분율 값을 사용해 원의 반지름 또는 타원의 짧은반지름과 긴반지름을 지정합니다. 가로축 값은 요소 박스의 너비에 대한 백분율이고, 세로축 값은 박스의 높이에 대한 백분율입니다. 음의 값은 유효하지 않습니다.</dd>
</dl>

<p>예를 들어...</p>

<pre class="brush: css notranslate">border-radius: 1em/5em;

/* 아래와 같음 */
border-top-left-radius:     1em 5em;
border-top-right-radius:    1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius:  1em 5em;
</pre>

<pre class="brush: css notranslate">border-radius: 4px 3px 6px / 2px 4px;

/* 아래와 같음 */
border-top-left-radius:     4px 2px;
border-top-right-radius:    3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius:  3px 4px;
</pre>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<pre style="display: inline-block; margin: 10px; border: solid 10px; border-radius: 10px 40px 40px 10px;">  border: solid 10px;
  /* 테두리가 'D'형태가 됨 */
  border-radius: 10px 40px 40px 10px;
</pre>

<pre style="display: inline-block; margin: 10px; border: groove 1em red  !important; border-radius: 2em; width: 90%;">  border: groove 1em red;
  border-radius: 2em;
</pre>

<pre style="display: inline-block; margin: 10px; background: gold; border: ridge gold  !important; border-radius: 13em/3em; width: 90%;">  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
</pre>

<pre style="display: inline-block; margin: 10px; background: gold; border: none  !important; border-radius: 40px 10px; width: 90%;">  border: none;
  border-radius: 40px 10px;
</pre>

<pre style="display: inline-block; margin: 10px; background: burlywood; border: none  !important; border-radius: 50%; width: 90%;">  border: none;
  border-radius: 50%;
</pre>

<pre style="display: inline-block; margin: 10px; border: dotted; border-width: 10px 4px  !important; border-radius: 10px 40px; width: 90%;">  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
</pre>

<pre style="display: inline-block; margin: 10px; border: dashed; border-width: 2px 4px  !important; border-radius: 40px; width: 90%;">  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
</pre>

<h3 id="라이브_샘플">라이브 샘플</h3>

<ol>
 <li><a href="http://jsfiddle.net/Tripad/qnGKj/2/">http://jsfiddle.net/Tripad/qnGKj/2/</a></li>
 <li><a href="http://jsfiddle.net/Tripad/qnGKj/3/">http://jsfiddle.net/Tripad/qnGKj/3/</a></li>
 <li><a href="http://jsfiddle.net/Tripad/qnGKj/3/">http://jsfiddle.net/Tripad/qnGKj/4/</a></li>
 <li><a href="http://jsfiddle.net/Tripad/qnGKj/3/">http://jsfiddle.net/Tripad/qnGKj/5/</a></li>
 <li><a href="http://jsfiddle.net/Tripad/qnGKj/3/">http://jsfiddle.net/Tripad/qnGKj/6/</a></li>
</ol>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.border-radius")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>꼭짓점 반경 관련 CSS 속성: {{Cssxref("border-top-left-radius")}}, {{Cssxref("border-top-right-radius")}}, {{Cssxref("border-bottom-right-radius")}}, {{Cssxref("border-bottom-left-radius")}}</li>
</ul>
