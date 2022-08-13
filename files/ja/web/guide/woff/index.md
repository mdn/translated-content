---
title: WOFF (Web Open Font Format)
slug: Web/Guide/WOFF
tags:
  - CSS
  - Fonts
  - WOFF
translation_of: Web/Guide/WOFF
---
<p><span class="seoSummary"><strong>WOFF (Web Open Font Format)</strong> は、Mozilla が Type Supply や LettError、他の組織と提携して開発した新しい Web フォント形式です。</span>これは、TrueType および OpenType, Open Font Format に使用されているテーブルベースの <code>sfnt</code> 構造と同じ圧縮されたバージョンを使用しています。<span class="seoSummary">WOFF には、これにメタデータと個人利用のためのデータ構造が追加されており、作成者とベンダーがライセンス情報を書き込むことができる予約フィールドも含まれています。</span></p>

<p>WOFF の使用には 3 つの利点があります:</p>

<ol>
 <li>フォントデータが圧縮されているため、サイトで WOFF を使用すると、無圧縮の TrueType や OpenType ファイルの使用と比べて帯域を抑えることができ、読み込み時間も短縮されます。</li>
 <li>自社の TrueType や OpenType 形式のフォントが Web 上で使用されることを許可したくない多くのフォントベンダーは、WOFF 形式のフォントなら使用を許可できるでしょう。これは、サイトのデザイナーに対してフォントの可用性を高めることになります。</li>
 <li>プロプライエタリなブラウザベンダーもフリーソフトウェアのブラウザベンダーも、WOFF 形式を好んでいます。つまり、他の既存のフォント形式と異なり、WOFF 形式のフォントが、Web のための真にユニバーサルで相互運用が可能なフォント形式になる可能性があります。</li>
</ol>

<p>WOFF と WOFF2 という、2 つのバージョンの WOFF があります。これらの主な違いは、使用する圧縮アルゴリズムです。{{cssxref("@font-face")}} では <code>format</code> 記述子で、それぞれ <code>'woff'</code> と <code>'woff2'</code> で識別されます。</p>

<h2 id="Using_WOFF" name="Using WOFF">WOFF の使用</h2>

<p>Web コンテンツのテキストに WOFF フォントを使用するには、{{cssxref("@font-face")}} CSS プロパティを使用します。これは、OpenType や TrueType 形式のフォントの使用方法と同じです。WOFF 形式のフォントは圧縮されているため、より効率的にコンテンツがダウンロードされるでしょう。</p>

<h2 id="Tools_for_working_with_WOFF_fonts" name="Tools_for_working_with_WOFF_fonts">WOFF フォントを扱うためのツール</h2>

<ul>
 <li><a href="https://github.com/odemiral/woff2sfnt-sfnt2woff">WOFF フォントを扱うためのツール</a>を利用できます。<code>sfnt2woff</code> および <code>woff2sfnt</code> は、WOFF と OpenType の間の変換を行います。</li>
</ul>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('WOFF2.0', '', '')}}</td>
   <td>{{Spec2('WOFF2.0')}}</td>
   <td>新しい圧縮アルゴリズム</td>
  </tr>
  <tr>
   <td>{{SpecName('WOFF1.0', '', '')}}</td>
   <td>{{Spec2('WOFF1.0')}}</td>
   <td>最初期の仕様</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>



<p>{{Compat("css.at-rules.font-face")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("@font-face")}}</li>
</ul>
