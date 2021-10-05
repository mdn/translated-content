---
title: CSS テキスト装飾
slug: Web/CSS/CSS_Text_Decoration
tags:
  - CSS
  - CSS Text Decoration
  - Guide
  - Overview
  - Reference
translation_of: Web/CSS/CSS_Text_Decoration
---
<div>{{CSSRef}}</div>

<p><ruby><strong>CSS テキスト装飾</strong><rp> (</rp><rt>Text Decoration</rt><rp>) </rp></ruby>は CSS のモジュールの一つで、下線、テキストの影、圏点など、テキスト装飾に関連する機能を定義します。</p>

<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="Properties" name="Properties">プロパティ</h3>

<div class="index">
<ul>
 <li>{{cssxref("letter-spacing")}}</li>
 <li>{{cssxref("text-align")}}</li>
 <li>{{cssxref("text-decoration")}}</li>
 <li>{{cssxref("text-decoration-color")}}</li>
 <li>{{cssxref("text-decoration-line")}}</li>
 <li>{{cssxref("text-decoration-offset")}}</li>
 <li>{{cssxref("text-decoration-skip-ink")}}</li>
 <li>{{cssxref("text-decoration-style")}}</li>
 <li>{{cssxref("text-decoration-thickness")}}</li>
 <li>{{cssxref("text-emphasis")}}</li>
 <li>{{cssxref("text-emphasis-color")}}</li>
 <li>{{cssxref("text-emphasis-position")}}</li>
 <li>{{cssxref("text-emphasis-style")}}</li>
 <li>{{cssxref("text-indent")}}</li>
 <li>{{cssxref("text-rendering")}}</li>
 <li>{{cssxref("text-shadow")}}</li>
 <li>{{cssxref("text-transform")}}</li>
 <li>{{cssxref("white-space")}}</li>
 <li>{{cssxref("word-spacing")}}</li>
</ul>
</div>

<h2 id="Guides" name="Guides">ガイド</h2>

<p><em>なし。</em></p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css notranslate">.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
</pre>

<pre class="brush: html notranslate">&lt;p class="under"&gt;This text has a line underneath it.&lt;/p&gt;
&lt;p class="over"&gt;This text has a line over it.&lt;/p&gt;
&lt;p class="line"&gt;This text has a line going through it.&lt;/p&gt;
&lt;p&gt;This &lt;a class="plain" href="#"&gt;link will not be underlined&lt;/a&gt;,
    as links generally are by default. Be careful when removing
    the text decoration on anchors since users often depend on
    the underline to denote hyperlinks.&lt;/p&gt;
&lt;p class="underover"&gt;This text has lines above &lt;em&gt;and&lt;/em&gt; below it.&lt;/p&gt;
&lt;p class="thick"&gt;This text has a really thick purple underline in supporting browsers.&lt;/p&gt;
&lt;p class="blink"&gt;This text might blink for you,
    depending on the browser you use.&lt;/p&gt;
</pre>

<p>{{EmbedLiveSample('Examples','auto','320')}}</p>

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
   <td>{{SpecName('CSS4 Text Decoration')}}</td>
   <td>{{Spec2('CSS4 Text Decoration')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Text Decoration')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'text.html')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>
