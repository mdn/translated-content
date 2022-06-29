---
title: Grid
slug: Glossary/Grid
translation_of: Glossary/Grid
---
<p><em>CSS 格線</em>(CSS grid) 使用 <code>display: grid;</code> 值，你可以透過 {{cssxref("grid-template-rows")}} 與 {{cssxref("grid-template-columns")}} 屬性定義格線的行（Row）與列（Column）。</p>

<p>使用這些屬性的格線會稱做<em>明式格線</em>（explicit grid）。</p>

<p>如果把內容放在明式格線外；或是依賴自動配置、而格線演算法要建立額外的{{glossary("grid tracks", "格線軌道")}}以支持{{glossary("grid item", "格線單元")}}的話，明式格線內就會建立額外的格線軌道。<em>明式格線</em>是指內容因為定義的軌道外增添，而自動建立內容的格線。</p>

<p>下例創建了三列兩行的<em>明式格線</em>。格線第三行是明式格線行軌道，它是為了讓超過六個單元的格線，能夠填滿明式格線。</p>

<h2 id="範例">範例</h2>

<pre class="brush: css hidden">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div&gt;One&lt;/div&gt;
   &lt;div&gt;Two&lt;/div&gt;
   &lt;div&gt;Three&lt;/div&gt;
   &lt;div&gt;Four&lt;/div&gt;
   &lt;div&gt;Five&lt;/div&gt;
   &lt;div&gt;Six&lt;/div&gt;
   &lt;div&gt;Seven&lt;/div&gt;
   &lt;div&gt;Eight&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('範例', '500', '330') }}</p>

<h2 id="深入理解re">深入理解re</h2>

<h3 id="屬性參考">屬性參考</h3>

<ul>
 <li>{{cssxref("grid-template-columns")}}</li>
 <li>{{cssxref("grid-template-rows")}}</li>
 <li>{{cssxref("grid")}}</li>
 <li>{{cssxref("grid-template")}}</li>
</ul>

<h3 id="參閱">參閱</h3>

<ul>
 <li>CSS 格線布局教學：<em><a href="/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">格線布局的基本概念</a></em></li>
</ul>
