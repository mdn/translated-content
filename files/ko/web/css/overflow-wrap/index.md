---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Reference
translation_of: Web/CSS/overflow-wrap
---
<div>{{CSSRef}}</div>

<p><code><strong>overflow</strong></code><strong><code>-wrap</code></strong> CSS 요소는 어떤 문자가 내용 칸 밖으로 넘치지 않게 브라우저가 단어 마디 안에 줄을 바꿔야 할 것인지 아닌지를 정할 때 사용됩니다.</p>

<div class="note"><strong>Note:</strong> {{cssxref("word-break")}}와는 달리, <code>overflow-wrap</code>은 모든 단어가 넘치지 않으면 자신의 줄 안에 놓여 있을 수 없을 때 줄 바꿈을 한 번만 할 것입니다.</div>

<p>이 속성은 처음에 마이크로소프트에서 표준이 아니고 접두어가 없는 <code>word-wrap</code>으로 나왔고, 대부분 브라우저에서 똑같은 이름으로 구현되었습니다. 요즘은 <code>overflow-wrap</code>으로 다시 지어지고, <code>word-wrap</code>은 동의어가 되었습니다.</p>

<h2 id="구문">구문</h2>

<pre class="brush:css">/* Keyword values */
overflow-wrap: normal;
overflow-wrap: break-word;

/* Global values */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: unset;
</pre>

<p><code>overflow-wrap</code> 속성은 아래에 나열돼 있는 값들 중 단 하나로 정해집니다.</p>

<h3 id="값">값</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>줄이 오직 (두 단어 사이의 공백과 같이) 보통의 줄 바꿈 지점에서만 줄을 바꿉니다.</dd>
 <dt><code>break-word</code></dt>
 <dd>보통 안 바꿔지는 단어들을 한 줄에서 대신 줄을 바꿀 만한 지점이 없을 시 임의의 지점에서 줄을 바꿉니다.</dd>
</dl>

<h3 id="기본적인_구문">기본적인 구문</h3>

{{csssyntax}}

<h2 id="예시">예시</h2>

<p>이 예시는 긴 단어를 넘길 때 <code>overflow-wrap</code>, <code>word-break</code>, 그리고 <code>hyphens</code>의 결과를 비교합니다.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="normal"&gt;They say the fishing is excellent at
  Lake Chargoggagoggmanchauggagoggchaubunagungamaugg,
  though I've never been there myself. (normal)&lt;/p&gt;
&lt;p class="overflow-wrap"&gt;They say the fishing is excellent at
  Lake Chargoggagoggmanchauggagoggchaubunagungamaugg,
  though I've never been there myself. (overflow-wrap)&lt;/p&gt;
&lt;p class="word-break"&gt;They say the fishing is excellent at
  Lake Chargoggagoggmanchauggagoggchaubunagungamaugg,
  though I've never been there myself. (word-break)&lt;/p&gt;
&lt;p class="hyphens"&gt;They say the fishing is excellent at
  Lake Chargoggagoggmanchauggagoggchaubunagungamaugg,
  though I've never been there myself. (hyphens)&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  width: 13em;
  background: gold;
}

.overflow-wrap {
  overflow-wrap: break-word;
}

.word-break {
  word-break: break-all;
}

.hyphens {
  hyphens: auto;
}
</pre>

<h3 id="Result">Result</h3>

<p>{{ EmbedLiveSample('Example', '100%', 260) }}</p>

<h2 id="사양">사양</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSS3 Text', '#propdef-overflow-wrap', 'overflow-wrap') }}</td>
   <td>{{ Spec2('CSS3 Text') }}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.overflow-wrap")}}</p>



<h2 id="See_also" name="See_also">바로 보기</h2>

<ul>
 <li>{{cssxref("word-break")}}</li>
</ul>
