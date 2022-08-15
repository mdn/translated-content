---
title: flex-wrap
slug: Web/CSS/flex-wrap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - Reference
translation_of: Web/CSS/flex-wrap
---
<div>{{ CSSRef}}</div>

<p><a href="/en-US/docs/CSS" title="CSS">CSS</a> <strong><code>flex-wrap</code></strong> property는 <code>flex-item</code> 요소들이 강제로 한줄에 배치되게 할 것인지, 또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성입니다. 만약 영역 내에서 벗어나지 못하게 설정한다면, 동시에 요소의 방향 축을 결정할 수 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}</div>



<p>여기를 참고하면 관련된 더욱 자세한 정보를 얻을 수 있습니다. <a href="/en/CSS/Using_CSS_flexible_boxes" title="/en/CSS/Using_CSS_flexible_boxes">Using CSS flexible boxes</a></p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: unset;
</pre>

<p><code>flex-wrap</code> 속성의 값으로, 다음 목록 중 하나의 키워드를 선택할 수 있습니다.</p>

<h3 id="Values">Values</h3>

<p>아래는 사용 가능한 속성값들입니다:</p>

<dl>
 <dt><code>nowrap</code></dt>
 <dd>기본 설정값으로, <code>flex-container</code> 부모요소 영역을 벗어나더라도 <code>flex-item</code> 요소들을 <strong>한 줄</strong>에 배치합니다. 시작점은 {{cssxref("flex-direction")}} 에 의해 결정된 방향으로 적용됩니다.</dd>
 <dt><code>wrap</code></dt>
 <dd><code>flex-item</code> 요소들이 내부 로직에 의해 분할되어 여러 행에 걸쳐서 배치됩니다. <code>nowrap</code> 속성과 마찬가지로 요소가 배치되는 시작점은 {{cssxref("flex-direction")}} 에 의해 결정됩니다. 일반적으로 위에서 아래로 쌓이는 순서입니다.</dd>
 <dt><code>wrap-reverse</code></dt>
 <dd><code>wrap</code> 속성값과 동일하지만, 요소가 나열되는 시작점과 끝점의 기준이 반대로 배치됩니다.</dd>
 <dt>
 <h3 id="Formal_syntax">Formal syntax</h3>
 </dt>
</dl>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<div id="Live_Sample">
<pre class="brush: html">&lt;h4&gt;This is an example for flex-wrap:wrap &lt;/h4&gt;
&lt;div class="content"&gt;
  &lt;div class="red"&gt;1&lt;/div&gt;
  &lt;div class="green"&gt;2&lt;/div&gt;
  &lt;div class="blue"&gt;3&lt;/div&gt;
&lt;/div&gt;
&lt;h4&gt;This is an example for flex-wrap:nowrap &lt;/h4&gt;
&lt;div class="content1"&gt;
  &lt;div class="red"&gt;1&lt;/div&gt;
  &lt;div class="green"&gt;2&lt;/div&gt;
  &lt;div class="blue"&gt;3&lt;/div&gt;
&lt;/div&gt;
&lt;h4&gt;This is an example for flex-wrap:wrap-reverse &lt;/h4&gt;
&lt;div class="content2"&gt;
  &lt;div class="red"&gt;1&lt;/div&gt;
  &lt;div class="green"&gt;2&lt;/div&gt;
  &lt;div class="blue"&gt;3&lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">/* Common Styles */
.content,
.content1,
.content2 {
    color: #fff;
    font: 100 24px/100px sans-serif;
    height: 150px;
    text-align: center;
}

.content div,
.content1 div,
.content2 div {
    height: 50%;
    width: 50%;
}
.red {
    background: orangered;
}
.green {
    background: yellowgreen;
}
.blue {
    background: steelblue;
}

/* Flexbox Styles */
.content {
    display: flex;
    flex-wrap: wrap;
}
.content1 {
    display: flex;
    flex-wrap: nowrap;
}
.content2 {
    display: flex;
    flex-wrap: wrap-reverse;
}

</pre>
</div>

<h3 id="Results">Results</h3>

<p>{{ EmbedLiveSample('Examples', '700px', '700px', '', 'Web/CSS/flex-wrap') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("css.properties.flex-wrap")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Basic Concepts of Flexbox</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items">Mastering wrapping of flex items</a></em></li>
</ul>
