---
title: 使用値
slug: Web/CSS/used_value
tags:
  - CSS
  - Reference
  - レイアウト
translation_of: Web/CSS/used_value
---
<div>{{cssref}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> プロパティの<ruby><strong>使用値</strong><rp> (</rp><rt>used value</rt><rp>) </rp></ruby>は、<a href="/ja/docs/Web/CSS/computed_value">計算値</a>において行われたすべての計算が実行された後の値です。</p>

<p>{{glossary("user agent", "ユーザーエージェント")}}が計算を終了した後、すべての CSS プロパティは使用値を持ちます。長さ ({{cssxref("width")}} や {{cssxref("line-height")}} など) の使用値はピクセル数です。一括指定プロパティ ({{cssxref("background")}} など) の使用値は、各成分 ({{cssxref("background-color")}} や {{cssxref("background-size")}} など) のプロパティに、 {{cssxref("position")}} や {{cssxref("float")}} が加味されたものと一致します。</p>

<div class="note">
<p><strong>メモ:</strong> DOM の {{domxref("Window.getComputedStyle", "getComputedStyle()")}} API が返すのは<a href="/ja/docs/Web/CSS/resolved_value">解決値</a>であり、これはプロパティによって<a href="/ja/docs/Web/CSS/computed_value">計算値</a>または<a href="/ja/docs/Web/CSS/used_value">使用値</a>のどちらかになります。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<p>この例は、三つの要素の <code>width</code> の使用値を計算および表示します (大きさを変更すると更新されます)。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="no-width"&gt;
  &lt;p&gt;明示的な幅の指定なし&lt;/p&gt;
  &lt;p class="show-used-width"&gt;..&lt;/p&gt;

  &lt;div id="width-50"&gt;
    &lt;p&gt;明示的に幅に 50% を指定&lt;/p&gt;
    &lt;p class="show-used-width"&gt;..&lt;/p&gt;

    &lt;div id="width-inherit"&gt;
      &lt;p&gt;明示的に幅に inherit を指定&lt;/p&gt;
      &lt;p class="show-used-width"&gt;..&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* 結果を見やすくする */
div {
  border: 1px solid red;
  padding: 8px;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function updateUsedWidth(id) {
  var div = document.querySelector(`#${id}`);
  var par = div.querySelector('.show-used-width');
  var wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener('resize', updateAllUsedWidths);
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Example', '80%', 372) }}</p>

<h2 id="Difference_from_computed_value" name="Difference_from_computed_value">計算値との違い</h2>

<p>CSS 2.0 では、プロパティの計算の最後のステップとして<em>計算値</em>のみを定義していました。そして CSS 2.1 では、使用値を別な定義として導入しました。そして、計算値がパーセント値である親の幅や高さを、要素が明確に継承できるようになりました。レイアウトに依存しない CSS プロパティ (<code>display</code>, <code>font-size</code>, <code>line-height</code> など) に関しては、計算値と使用値は同じです。以下のものは CSS 2.1 のプロパティのうち、レイアウトに依存し、計算値と使用値が異なるものです。 (<a class="external" href="https://www.w3.org/TR/CSS2/changes.html#q21.36">CSS 2.1 Changes: Specified, computed, and actual values</a> より取得)。</p>

<ul>
 <li><code>background-position</code></li>
 <li><code>bottom</code>, <code>left</code>, <code>right</code>, <code>top</code></li>
 <li><code>height</code>, <code>width</code></li>
 <li><code>margin-bottom</code>, <code>margin-left</code>, <code>margin-right</code>, <code>margin-top</code></li>
 <li><code>min-height</code>, <code>min-width</code></li>
 <li><code>padding-bottom</code>, <code>padding-left</code>, <code>padding-right</code>, <code>padding-top</code></li>
 <li><code>text-indent</code></li>
</ul>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS2.2", "cascade.html#used-value", "used value")}}</td>
   <td>{{Spec2("CSS2.2")}}</td>
   <td>
    <p>変更なし。</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "cascade.html#used-value", "used value")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("window.getComputedStyle")}}</li>
 <li>{{CSS_key_concepts}}</li>
</ul>
