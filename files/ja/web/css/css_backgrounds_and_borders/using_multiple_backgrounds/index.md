---
title: 複数の背景画像の利用
slug: Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds
tags:
  - CSS
  - CSS Background
  - Example
  - Guide
  - Reference
translation_of: Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong>複数の背景画像</strong>を要素に適用できます。これらは、最初に記述した背景が一番上になり、後に記述した背景がその下になるように重ね合わされます。</span>最後の背景にだけ、背景色を指定できます。</p>

<p>複数の背景の指定は、下記のように簡単です。</p>

<pre class="brush: css">.myclass {
  background: background1, background 2, ..., backgroundN;
}
</pre>

<p>{{ cssxref("background-color") }} を除いて、短縮プロパティの {{ cssxref("background") }} と個々のプロパティの両方で指定できます。つまり、下記のプロパティは背景ひとつずつに対して指定できます。<br>
{{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}.</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、3 つの背景が重なっています。Firefox のロゴ、泡の画像、そして [linear-gradient](/ja/docs/Web/CSS/linear-gradient) です。</p>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="multi-bg-example"&gt;&lt;/div&gt;</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush: css">.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image: url(https://mdn.mozillademos.org/files/11305/firefox.png),
      url(https://mdn.mozillademos.org/files/11307/bubbles.png),
      linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat,
      no-repeat,
      no-repeat;
  background-position: bottom right,
      left,
      right;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>(CodePen で画像が表示されない場合、CSS 部分の「Tidy CSS」をクリックしてください)</p>

<p>{{EmbedLiveSample('Example','600','400')}}</p>

<p>ご覧のように、Firefox のロゴ ({{ cssxref("background-image") }} で最初に記載) が一番上になり、泡の画像がそれに続き、グラデーション (最後に記述) が前述の全ての画像の下に配置されています。後に続くプロパティ ({{ cssxref("background-repeat") }} と {{ cssxref("background-position") }}) はそれぞれの背景に対応して適用されています。つまり、{{ cssxref("background-repeat") }} の最初の値は最初(最前面)の画像に適用され、後に続くものも順番に適用されます。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>[CSS グラデーションの利用](/ja/docs/CSS/Using_CSS_gradients)</li>
</ul>
