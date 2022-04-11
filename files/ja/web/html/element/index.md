---
title: HTML 要素リファレンス
slug: Web/HTML/Element
tags:
  - Basic
  - Element
  - HTML
  - Reference
  - Web
  - l10n:priority
translation_of: Web/HTML/Element
---
<div>{{HTMLSidebar("Elements")}}</div>

<p><span class="seoSummary">このページでは、{{Glossary("Tag", "タグ")}}を使用して作成されるすべての {{Glossary("HTML")}} {{Glossary("Element","要素")}}を一覧表示しています。</span>この一覧は、考えているものを見つけやすいように、機能別にグループ化しています。アルファベット順のすべての要素の一覧は、このページと同様に各要素ページのサイドバーにあります。</p>

<div class="notecard note">
  <h4>メモ</h4>
  <p>HTML 要素や属性の基礎について詳しくは、<a href="/ja/docs/Learn/HTML/Introduction_to_HTML#elements_%e2%80%94_the_basic_building_blocks">HTML 概論の記事で要素のセクション</a> をご覧ください。</p>
</div>

<h2 id="Main_root">メインルート</h2>

<p>{{HTMLRefTable("HTML Root Element")}}</p>

<h2 id="Document_metadata">文書メタデータ</h2>

<p>メタデータは、ページに関する情報のことです。これはソフトウェア ({{Glossary("search engine", "検索エンジン")}} や {{Glossary("Browser","ブラウザー")}} など) が利用する、およびページの描画を支援するスタイル、スクリプト、データといった情報を含みます。スタイルやスクリプトのメタデータはページ内で定義するか、それらの情報を持つ別のファイルへのリンクとして定義します。</p>

<p>{{HTMLRefTable("HTML Document Metadata")}}</p>

<h2 id="Sectioning_root">区分化ルート</h2>

<p>{{HTMLRefTable("Sectioning Root Element")}}</p>

<h2 id="Content_sectioning">コンテンツ区分</h2>

<p>コンテンツ区分要素は、文書のコンテンツを論理的な断片に体系づけます。ページのコンテンツでヘッダーやフッターのナビゲーション、あるいはコンテンツのセクションを識別する見出しなどの、大まかなアウトラインを作成するために区分要素を使用します。</p>

<p>{{HTMLRefTable("HTML Sections")}}</p>

<h2 id="Text_content">テキストコンテンツ</h2>

<p>HTML テキストコンテンツ要素は、開始タグ {{HTMLElement("body")}} と終了タグ <code>&lt;/body&gt;</code> の間にあるコンテンツでブロックやセクションを編成します。これらの要素はコンテンツの用途や構造を識別するものであり、{{Glossary("accessibility","アクセシビリティ")}} や {{Glossary("SEO")}} のために重要です。</p>

<p>{{HTMLRefTable("HTML Grouping Content")}}</p>

<h2 id="Inline_text_semantics">インライン文字列意味付け</h2>

<p>HTML インラインテキストセマンティクス要素は、単語、行、あるいは任意のテキスト範囲の意味、構造、スタイルを定義します。</p>

<p>{{HTMLRefTable("HTML Text-Level Semantics")}}</p>

<h2 id="Image_and_multimedia">画像とマルチメディア</h2>

<p>HTML は画像、音声、映像といった、さまざまなマルティメディアリソースをサポートします。</p>

<p>{{HTMLRefTable("multimedia")}}</p>

<h2 id="Embedded_content">埋め込みコンテンツ</h2>

<p>HTML は公式にサポートするマルチメディアコンテンツ以外のさまざまなコンテンツを、容易に対話できるとは限らないものであっても埋め込むことができます。</p>

<p>{{HTMLRefTable({"include":["HTML embedded content"], "exclude":["multimedia"]})}}</p>

<h2 id="SVG_and_Math">SVG と MathML</h2>

<p><a href="/ja/docs/Web/SVG">SVG</a> と <a href="/ja/docs/Web/MathML">MathML</a> のコンテンツを、 {{SVGElement("svg")}} および {{MathMLElement("math")}} 要素を使用して直接 HTML 文書に埋め込むことができます。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">要素</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td style="vertical-align: top;">{{SVGElement("svg")}}</td>
   <td><code>svg</code> 要素は、新しい座標系と<a href="/ja/docs/Web/SVG/Attribute/viewBox">ビューポート</a>を定義するコンテナーです。これは SVG 文書の最も外側の要素として使用されますが、SVG または HTML 文書の中に SVG フラグメントを埋め込むためにも使用できます。</td>
  </tr>
  <tr>
   <td style="vertical-align: top;">{{MathMLElement("math")}}</td>
   <td>MathML における最上位の要素は <code>&lt;math&gt;</code> です。有効な MathML のインスタンスはすべて <code>&lt;math&gt;</code> タグに囲まれています。加えて、 <code>&lt;math&gt;</code> 要素を入れ子状に配置してはなりませんが、中にその他の子要素をいくつでも持つことができます。</td>
  </tr>
 </tbody>
</table>

<h2 id="Scripting">スクリプティング</h2>

<p>動的なコンテンツやウェブアプリケーションを作成するために、HTML ではスクリプト言語を使用できます。もっとも有名な言語は、JavaScript です。いくつかの要素がスクリプト機能をサポートします。</p>

<p>{{HTMLRefTable("HTML Scripting")}}</p>

<h2 id="Demarcating_edits">編集範囲の特定</h2>

<p>これらの要素は、テキストの特定の範囲が変更されたことを示します。</p>

<p>{{HTMLRefTable("HTML Edits")}}</p>

<h2 id="Table_content">テーブル</h2>

<p>以下の要素は、表形式のデータを作成および制御するために使用します。</p>

<p>{{HTMLRefTable("HTML tabular data")}}</p>

<h2 id="Forms">フォーム</h2>

<p>HTML では、ユーザーがデータを記入してウェブサイトやアプリケーションに送信することを可能にするフォームを作成するために、組み合わせて使用する要素をいくつか提供します。フォームに関する多くの情報を、<a href="/ja/docs/Learn/Forms">HTML フォームガイド</a> に掲載しています。</p>

<p>{{HTMLRefTable({"include": ["HTML forms"], "exclude":["Deprecated"]})}}</p>

<h2 id="Interactive_elements">インタラクティブ要素</h2>

<p>HTML には、インタラクティブなユーザーインターフェイスを作成するための要素があります。</p>

<p>{{HTMLRefTable("HTML interactive elements")}}</p>

<h2 id="Web_Components">ウェブコンポーネント</h2>

<p>Web Components は要するに、独自の要素を作成して通常の HTML 要素であるかのように使用できる、HTML 関連技術です。加えて、独自版の標準 HTML 要素を作成することもできます。</p>

<p>{{HTMLRefTable({"include":["Web Components"],"exclude":["Deprecated", "Obsolete"]})}}</p>

<h2 id="Obsolete_and_deprecated_elements">廃止または非推奨の要素</h2>

<div class="notecard warning">
  <h4>Warning</h4>
  <p><strong>警告:</strong> 以下は非推奨の古い HTML 要素であり、使用するべきものではありません。<strong>新たなプロジェクトではこれらを使用せず、また既存のプロジェクトでも可能な限りこれらを置き換えてください。</strong> この一覧は、情報提供のために記載しています。</p>
</div>

<p>{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}</p>
