---
title: border-width
slug: Web/CSS/border-width
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - 'recipe:css-shorthand-property'
translation_of: Web/CSS/border-width
---
<div>{{CSSRef}}</div>

<p><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>border-width</code></strong> <a href="/ko/docs/Web/CSS/Shorthand_properties">단축 속성</a>은 요소 네 면 테두리의 너비를 설정합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/border-width.html")}}</div>



<h2 id="구성_속성">구성 속성</h2>

<p><code>border-width</code>는 단축 속성으로서 다음의 하위 속성을 포함합니다.</p>

<ul>
 <li>{{cssxref("border-bottom-width")}}</li>
 <li>{{cssxref("border-left-width")}}</li>
 <li>{{cssxref("border-right-width")}}</li>
 <li>{{cssxref("border-top-width")}}</li>
</ul>

<h2 id="구문">구문</h2>

<pre class="brush: css no-line-numbers notranslate">/* 키워드 값 */
border-width: thin;
border-width: medium;
border-width: thick;

/* &lt;length&gt; 값 */<em>
</em>border-width: 4px;
border-width: 1.2rem;<em>
</em>
/* 세로방향 | 가로방향 */
border-width: 2px 1.5em;

/* 위 | 가로방향 | 아래 */
border-width: 1px 2em 1.5cm;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
border-width: 1px 2em 0 4rem;

/* 전역 키워드 */
border-width: inherit;
border-width: initial;
border-width: unset;
</pre>

<p><code>border-width</code> 속성은 한 개에서 네 개의 값을 사용해 지정할 수 있습니다.</p>

<ul>
 <li><strong>한 개의 값</strong>은 네 면 모두의 테두리 너비를 설정합니다.</li>
 <li><strong>두 개의 값</strong>을 지정하면 첫 번째는 <strong>위와 아래</strong>, 두 번째는 <strong>왼쪽과 오른쪽</strong> 테두리 너비를 설정합니다.</li>
 <li><strong>세 개의 값</strong>을 지정하면 첫 번째는 <strong>위</strong>, 두 번째는 <strong>왼쪽과 오른쪽,</strong> 세 번째 값은 <strong>아래</strong> 테두리 너비를 설정합니다.</li>
 <li><strong>네 개의 값</strong>을 지정하면 각각 <strong>상, 우, 하, 좌</strong> 순서로 테두리 너비를 지정합니다. (시계방향)</li>
</ul>

<h3 id="값">값</h3>

<dl>
 <dt><code>&lt;line-width&gt;</code></dt>
 <dd>테두리의 너비입니다. 0 이상의 {{cssxref("&lt;length&gt;")}} 또는 키워드를 사용할 수 있습니다. 키워드는 다음 세 가지 중 하나여야 합니다.
 <table class="standard-table">
  <tbody>
   <tr>
    <td style="vertical-align: middle;"><code>thin</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-style: solid; border-width: thin; background-color: palegreen;"></div>
    </td>
    <td style="vertical-align: middle;">얇은 테두리</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>medium</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-style: solid; border-width: medium; background-color: palegreen;"></div>
    </td>
    <td style="vertical-align: middle;">중간 테두리</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>thick</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-style: solid; border-width: thick; background-color: palegreen;"></div>
    </td>
    <td style="vertical-align: middle;">굵은 테두리</td>
   </tr>
  </tbody>
 </table>

 <div class="note">
 <p><strong>참고:</strong> 각 키워드의 굵기를 정의한 명세는 없기 때문에 결과는 구현별로 상이할 수 있습니다. 다만 굵기는 언제나 <code>thin ≤ medium ≤ thick</code>이고, 하나의 문서 내에서 동일합니다.</p>
 </div>
 </dd>
</dl>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="서로_다른_값의_조합">서로 다른 값의 조합</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p id="sval"&gt;
    한 개의 값: 모든 네 면이 6px 테두리&lt;/p&gt;
&lt;p id="bival"&gt;
    두 개의 다른 값: 위아래에 2px 테두리, 좌우에 10px 테두리&lt;/p&gt;
&lt;p id="treval"&gt;
    세 개의 다른 값: 위에 0.3em, 아래에 9px, 좌우에 0&lt;/p&gt;
&lt;p id="fourval"&gt;
    네 개의 다른 값: "얇은" 위, "중간" 오른쪽, "두꺼운" 아래, 왼쪽 1em&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">#sval {
  border: ridge #ccc;
  border-width: 6px;
}
#bival {
  border: solid red;
  border-width: 2px 10px;
}
#treval {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#fourval {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}</pre>

<h4 id="결과">결과</h4>

<p>{{ EmbedLiveSample('서로_다른_값의_조합', 320, 320) }}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.border-width")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>테두리 관련 단축 속성: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}</li>
 <li>테두리 너비 속성: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}</li>
</ul>
