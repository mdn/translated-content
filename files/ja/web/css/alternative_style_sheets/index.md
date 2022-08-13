---
title: 代替スタイルシート
slug: Web/CSS/Alternative_style_sheets
tags:
  - CSS
  - Guide
  - HTML
  - NeedsCompatTable
  - NeedsUpdate
  - Reference
  - ガイド
translation_of: Web/CSS/Alternative_style_sheets
---
<div>{{cssref}}</div>

<p>ウェブページに<strong>代替スタイルシート</strong>を指定すると、ユーザーのニーズや設定に応じて複数のバージョンのページを見る方法を提供します。</p>

<p>Firefox では、<em>表示</em> &gt;<em>スタイルシート</em>のサブメニューを使用して、ユーザーがスタイルシートを選択することができます。 Internet Explorer でも (IE 8 から) この機能に対応しており、<em>表示</em> &gt;<em>スタイル</em>から利用できます。 Chrome では (バージョン48時点で) この機能を使用するのに拡張機能が必要です。ウェブページがユーザーからスタイルの切り替えができるユーザーインターフェイスを提供することもできます。</p>

<h2 id="An_example_specifying_the_alternative_stylesheets" name="An_example_specifying_the_alternative_stylesheets">例: 代替スタイルシートの指定</h2>

<p>代替スタイルシートはふつう、次のように {{HTMLElement("link")}} 要素に <code>rel="alternate stylesheet"</code> およびび <code>title="..."</code> 属性を使用することで指定されます。</p>

<pre class="brush: html notranslate">&lt;link href="reset.css" rel="stylesheet" type="text/css"&gt;

&lt;link href="default.css" rel="stylesheet" type="text/css" title="既定のスタイル"&gt;
&lt;link href="fancy.css" rel="alternate stylesheet" type="text/css" title="ファンシー"&gt;
&lt;link href="basic.css" rel="alternate stylesheet" type="text/css" title="基本"&gt;
</pre>

<p>この例では、<em>スタイルシート</em>のサブメニューに「既定のスタイル」「ファンシー」「基本」という項目が追加され、「既定のスタイル」が選択されています。ユーザーがスタイルを選択すると、ページはそのスタイルシートを使って即座に再描画されます。</p>

<p>どのスタイルが選択されても、 reset.css の規則が常に適用されます。</p>

<h3 id="Try_it_out" name="Try_it_out">やってみましょう</h3>

<p><a href="/samples/cssref/altstyles/index.html">ここをクリック</a>すると、やってみることができる例を見ることができます。</p>

<h2 id="Details" name="Details">詳細</h2>

<p>文書内のスタイルシートはどれも、以下のカテゴリのうち一つに当てはまります。</p>

<ul>
 <li><strong>常設</strong> (<code>rel="alternate"</code> も <code>title=""</code> もないもの): 常に文書に適用されます。</li>
 <li><strong>推奨</strong> (<code>rel="alternate"</code> がなく、 <code>title="..."</code> があるもの): 既定で適用されますが、代替スタイルシートが選択されると{{domxref("StyleSheet.disabled", "無効化", "", 1)}}されます。<strong>推奨スタイルシートは一つしか存在できません</strong>ので、異なる title 属性を持つスタイルシートを複数指定すると、いくつかが無視されます。より詳細な説明は<a href="/ja/docs/Correctly_Using_Titles_With_External_Stylesheets">外部スタイルシートにおける正しいタイトルの使用</a>をご覧ください。</li>
 <li><strong>代替</strong> (<code>rel="alternate stylesheet"</code> および <code>title="..."</code> の指定が必要): 既定では無効で、選択することができます。</li>
</ul>

<p>{{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} 又は {{HTMLElement("style")}} 要素で、スタイルシートが <code>title</code> 属性とともに参照された場合、そのタイトルがユーザに与えられる選択肢のひとつとなります。同じタイトルでリンクされた別のスタイルシートも、同じ選択肢の一部として扱われます。 <code>title</code> 属性を付けずにリンクされたスタイルシートは常に適用されます。</p>

<p>標準スタイルシートへリンクするには <code>rel="stylesheet"</code> を、代替スタイルシートへリンクするには <code>rel="alternate stylesheet"</code> を使用します。これにより、どのスタイルシートのタイトルを標準で選択すべきかがブラウザーに伝わり、代替スタイルシートに対応していないブラウザーでは標準の選択肢が適用されます。</p>

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
   <td>{{SpecName('HTML WHATWG', '#rel-alternate', 'link type "alternate"')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#the-link-is-an-alternative-stylesheet', 'alternative stylesheet')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#attr-style-title', 'the "title" attribute for the style element')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#attr-meta-http-equiv-default-style', 'meta http-equiv="default-style")')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSSOM', '#css-style-sheet-collections', 'CSS Style Sheet Collections')}}</td>
   <td>{{Spec2('CSSOM')}}</td>
   <td>CSS OM 仕様書は、<strong>スタイルシートセット名</strong>と、その<strong>無効フラグ</strong>、<strong>推奨される CSS スタイルシートセット名</strong> の概念を定義しています。<br>
    これらがどのように指定されるのかを定義し、 HTML 仕様書が <strong><dfn>CSS スタイルシートの作成時</dfn></strong>に定義する必要がある HTML に依存した動作を定義できるようにしています。</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML4.01", "present/styles.html#h-14.3", "Alternative style sheets")}}</td>
   <td>{{Spec2("HTML4.01")}}</td>
   <td>以前は、 HTML 仕様書自体で推奨及び代替スタイルシートの概念を定義していました。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.link.rel.alternate_stylesheet")}}</p>
