---
title: HTML 要素リファレンス
slug: Web/HTML/Element
tags:
  - Basic
  - 要素
  - HTML
  - リファレンス
  - ウェブ
  - l10n:priority
translation_of: Web/HTML/Element
---

{{HTMLSidebar("Elements")}}

このページでは、すべての {{Glossary("HTML")}} {{Glossary("Element","要素")}}を一覧表示しています。これらは{{Glossary("Tag", "タグ")}}を使用して作成されます。

この一覧は、考えているものを見つけやすいように、機能別にグループ化しています。アルファベット順のすべての要素の一覧は、このページと同様に各要素ページのサイドバーにあります。

> **Note:** HTML 要素や属性の基礎について詳しくは、 [HTML 入門の記事で要素の節](/ja/docs/Learn/HTML/Introduction_to_HTML#elements_%e2%80%94_the_basic_building_blocks)をご覧ください。

## メインルート

{{HTMLRefTable("HTML Root Element")}}

## 文書メタデータ

メタデータは、ページに関する情報のことです。これはソフトウェア ({{Glossary("search engine", "検索エンジン")}} や {{Glossary("Browser","ブラウザー")}} など) が利用する、およびページの描画を支援するスタイル、スクリプト、データといった情報を含みます。スタイルやスクリプトのメタデータはページ内で定義するか、それらの情報を持つ別のファイルへのリンクとして定義します。

{{HTMLRefTable("HTML Document Metadata")}}

## 区分化ルート

{{HTMLRefTable("Sectioning Root Element")}}

## コンテンツ区分

コンテンツ区分要素は、文書のコンテンツを論理的な断片に体系づけます。ページのコンテンツでヘッダーやフッターのナビゲーション、あるいはコンテンツのセクションを識別する見出しなどの、大まかなアウトラインを作成するために区分要素を使用します。

{{HTMLRefTable("HTML Sections")}}

## テキストコンテンツ

HTML テキストコンテンツ要素は、開始タグ {{HTMLElement("body")}} と終了タグ `</body>` の間にあるコンテンツでブロックやセクションを編成します。これらの要素はコンテンツの用途や構造を識別するものであり、{{Glossary("accessibility","アクセシビリティ")}} や {{Glossary("SEO")}} のために重要です。

{{HTMLRefTable("HTML Grouping Content")}}

## インラインテキスト意味付け

HTML インラインテキスト意味づけ要素は、単語、行、あるいは任意のテキスト範囲の意味、構造、スタイルを定義します。

{{HTMLRefTable("HTML Text-Level Semantics")}}

## 画像とマルチメディア

HTML は画像、音声、映像といった、さまざまなマルティメディアリソースに対応しています。

{{HTMLRefTable("multimedia")}}

## 埋め込みコンテンツ

HTML は公式に対応しているマルチメディアコンテンツ以外のさまざまなコンテンツを、容易に対話できるとは限らないものであっても埋め込むことができます。

{{HTMLRefTable({"include":["HTML embedded content"], "exclude":["multimedia"]})}}

## SVG と MathML

[SVG](/ja/docs/Web/SVG) と [MathML](/ja/docs/Web/MathML) のコンテンツを、 {{SVGElement("svg")}} および {{MathMLElement("math")}} 要素を使用して直接 HTML 文書に埋め込むことができます。

<table class="no-markdown">
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
      <td>MathML における最上位の要素は <code>&#x3C;math></code> です。有効な MathML のインスタンスはすべて <code>&#x3C;math></code> タグに囲まれています。加えて、 <code>&#x3C;math></code> 要素を入れ子状に配置してはなりませんが、中にその他の子要素をいくつでも持つことができます。</td>
    </tr>
  </tbody>
</table>

## スクリプティング

動的なコンテンツやウェブアプリケーションを作成するために、 HTML ではスクリプト言語を使用できます。もっとも有名な言語は、JavaScript です。いくつかの要素がスクリプト機能をサポートします。

{{HTMLRefTable("HTML Scripting")}}

## 編集範囲の特定

これらの要素は、テキストの特定の範囲が変更されたことを示します。

{{HTMLRefTable("HTML Edits")}}

## テーブル

以下の要素は、表形式のデータを作成および制御するために使用します。

{{HTMLRefTable("HTML tabular data")}}

## フォーム

HTML では、ユーザーがデータを記入してウェブサイトやアプリケーションに送信することを可能にするフォームを作成するために、組み合わせて使用する要素をいくつか提供します。フォームに関する多くの情報を、 [HTML フォームガイド](/ja/docs/Learn/Forms)に掲載しています。

{{HTMLRefTable({"include": ["HTML forms"], "exclude":["Deprecated"]})}}

## インタラクティブ要素

HTML には、インタラクティブなユーザーインターフェイスを作成するための要素があります。

{{HTMLRefTable("HTML interactive elements")}}

## ウェブコンポーネント

ウェブコンポーネントは要するに、独自の要素を作成して通常の HTML 要素であるかのように使用できる、HTML 関連技術です。加えて、独自版の標準 HTML 要素を作成することもできます。

{{HTMLRefTable({"include":["Web Components"],"exclude":["Deprecated", "Obsolete"]})}}

## 廃止または非推奨の要素

> **Warning:** 以下は非推奨の古い HTML 要素であり、使用するべきものではありません。 **新たなプロジェクトではこれらを使用せず、また既存のプロジェクトでも可能な限りこれらを置き換えてください。** この一覧は、情報提供のために記載しています。

{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}
