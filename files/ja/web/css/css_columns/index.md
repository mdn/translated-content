---
title: CSS 段組みレイアウト
slug: Web/CSS/CSS_Columns
tags:
  - CSS
  - CSS 断片化
  - CSS 段組みレイアウト
  - Reference
  - レイアウト
  - 概要
  - 段組み
translation_of: Web/CSS/CSS_Columns
---
<div>{{CSSRef("CSS3 Multicol")}}</div>

<p><strong>CSS 段組みレイアウト</strong>は CSS のモジュールの一つで、段組みレイアウトの対応を追加するものです。対応内容はレイアウトする段数の指定、段から段へのコンテンツの流れ方、段間の空白、段区切り線 (段間罫) などの対応が含まれています。</p>

<h2 id="Basic_example" name="Basic_example">基本的な例</h2>

<p>以下の例では、 {{cssxref("column-count")}} プロパティをコンテナーのクラスの要素に適用しています。 <code>column-count</code> の値が <code>3</code> なので、内容物は同じ寸法の３つの段に並べられます。</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}</p>

<h2 id="分割との関連">分割との関連</h2>

<p>段組みレイアウトは、文書全体が印刷ページに分割されるように行ボックスに分割することから、<a href="/ja/docs/Web/CSS/CSS_Pages">ページ付きメディア</a>に密接に関連します。従って、 <a href="/ja/docs/Web/CSS/CSS_Fragmentation">CSS 断片化</a>仕様書に定義されているプロパティが、段間の内容物の区切り位置を制御するために必要になりました。</p>

<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="Multiple-column_Layout_Properties" name="Multiple-column_Layout_Properties">段組みレイアウトのプロパティ</h3>

<div class="index">
<ul>
 <li>{{cssxref("column-count")}}</li>
 <li>{{cssxref("column-fill")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("column-rule")}}</li>
 <li>{{cssxref("column-rule-color")}}</li>
 <li>{{cssxref("column-rule-style")}}</li>
 <li>{{cssxref("column-rule-width")}}</li>
 <li>{{cssxref("column-span")}}</li>
 <li>{{cssxref("column-width")}}</li>
 <li>{{cssxref("columns")}}</li>
</ul>
</div>

<h3 id="Related_CSS_Fragmentation_Properties" name="Related_CSS_Fragmentation_Properties">関連する CSS 断片化のプロパティ</h3>

<div class="index">
<ul>
 <li>{{cssxref("break-after")}}</li>
 <li>{{cssxref("break-before")}}</li>
 <li>{{cssxref("break-inside")}}</li>
 <li>{{cssxref("orphans")}}</li>
 <li>{{cssxref("widows")}}</li>
</ul>
</div>

<h2 id="Guides" name="Guides">ガイド</h2>

<dl>
 <dt><a href="/ja/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol">段組みの基本概念</a></dt>
 <dd>段組みレイアウト仕様の概要です。</dd>
 <dt><a href="/ja/docs/Web/CSS/CSS_Columns/Styling_Columns">段のスタイル付け</a></dt>
 <dd>段間罫と段間の空間の使い方です。</dd>
 <dt><a href="/ja/docs/Web/CSS/CSS_Columns/Spanning_Columns">段抜きと段の均衡</a></dt>
 <dd>すべての段にまたがる要素の作り方と、段を埋める方法の制御です。</dd>
 <dt><a href="/ja/docs/Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol">段組みでのはみ出しの扱い</a></dt>
 <dd>アイテムが段をあふれたときに起こることと、段内のコンテンツが多すぎてコンテナーに収まらない場合に起こることです。</dd>
 <dt><a href="/ja/docs/Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol">段組みにおける内容の分割の扱い</a></dt>
 <dd>分割の仕様とどこで内容を区切るかの制御方法です。</dd>
</dl>

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
   <td>{{SpecName('CSS3 Multicol')}}</td>
   <td>{{Spec2('CSS3 Multicol')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<p>他の CSS レイアウト技術には以下のようなものがあります。</p>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS フレキシブルボックスレイアウト</a> (CSS フレックスボックス)</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウト</a></li>
</ul>
