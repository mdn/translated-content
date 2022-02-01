---
title: CSS Overflow
slug: Web/CSS/CSS_Overflow
tags:
  - CSS
  - Guide
  - overflow
  - scrollbars
  - scrolling
translation_of: Web/CSS/CSS_Overflow
---
<p>{{CSSRef}}</p>

<p><strong>CSS Overflow</strong> モジュールは、視覚メディアにおけるスクロール可能なオーバーフローの処理に関連した CSS の機能を含んでいます。 CSS では、ボックスの内容がボックスの辺の 1 つ以上を越えてはみ出した場合にオーバーフローが発生します。</p>

<h2 id="Ink_overflow_and_scrollable_overflow" name="Ink_overflow_and_scrollable_overflow">インクオーバーフローとスクロール可能なオーバーフロー</h2>

<p>CSS で遭遇する可能性のあるオーバーフローには、2 つの種類があります。1つ目は<strong>インクオーバーフロー</strong>と呼んでいます。これは、ボックスシャドウ、境界画像、テキスト装飾、張り出したグリフ、アウトラインなど、レイアウトに影響を与えない、あるいはスクロール可能なオーバーフロー領域を拡張しない描画効果のオーバーフローです。</p>

<p>CSS で時に管理しなければならないオーバーフローを<strong>スクロール可能なオーバーフロー</strong>と呼んでいます。これは、ボックスの外に現れるコンテンツで、スクロール機構を提供する必要があります。オーバーフローのプロパティは、コンテンツがボックスからオーバーフローしたときに何が起こるかを制御する方法です。</p>

<h2 id="Basic_example" name="Basic_example">基本的な例</h2>

<p>次のインタラクティブなデモでは、 <code>overflow</code> プロパティの値を変更すると、高さが固定されているボックスのオーバーフローの処理方法がどのように変わるかを示しています。</p>

<div>{{EmbedInteractiveExample("pages/css/overflow.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="CSS_properties" name="CSS_properties">CSS プロパティ</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("overflow")}}</li>
 <li>{{CSSxRef("overflow-block")}}</li>
 <li>{{CSSxRef("overflow-inline")}}</li>
 <li>{{CSSxRef("overflow-x")}}</li>
 <li>{{CSSxRef("overflow-y")}}</li>
 <li>{{CSSxRef("text-overflow")}}</li>
 <li>{{CSSxRef("block-overflow")}} {{experimental_inline}}</li>
 <li>{{CSSxRef("line-clamp")}} {{experimental_inline}}</li>
 <li>{{CSSxRef("max-lines")}} {{experimental_inline}}</li>
 <li>{{CSSxRef("continue")}} {{experimental_inline}}</li>
</ul>
</div>

<h3 id="Non-standard_properties" name="Non-standard_properties">標準外のプロパティ</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("-webkit-line-clamp")}} {{non-standard_inline}}</li>
</ul>
</div>

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
   <td>{{SpecName('CSS3 Overflow', '#propdef-overflow', 'overflow')}}</td>
   <td>{{Spec2('CSS3 Overflow')}}</td>
   <td>
    <p>構文を1つだけでなく1つまたは2つのキーワードに変更した</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visufx.html#overflow', 'overflow')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>スクロールバーの外見を制御する {{CSSxRef("scrollbar-width")}} および {{CSSxRef("scrollbar-color")}} プロパティ</li>
</ul>
