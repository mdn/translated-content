---
title: MDN Web Docs の変更履歴
slug: MDN/Writing_guidelines/Changelog
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

この文書は MDN コンテンツのプロセス、構造、ベストプラクティスが変更されたこと、いつ変更されたかを記録するものです。これは、定期的に協力する人が、 MDN のコンテンツ作成プロセスで何が変わったかを確認するのに役立ちます。

## 2022 年 10 月

[MDN プロジェクトドキュメント](/ja/docs/MDN)を刷新し、以下の 2 つのメインカテゴリーにまとめました。

- **執筆:** MDN のための書き方、文書化、実験的なことの定義、スタイル設定などのドキュメントは[執筆ガイドライン](/ja/docs/MDN/Writing_guidelines)ページで得られます。
- **コミュニティ:** オープンソースのエチケット、議論、プルリクエストや課題のプロセス、ユーザーやチーム、協力者のための一般的なヒントに関する情報は、[コミュニティ](/ja/docs/MDN/Community)ページで得られます。

変更点の詳細については、Mozilla Hacks に公開されている [Revamp of MDN Web Docs Contribution Docs](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/) のブログ投稿を参照してください。

## 2021 年 11 月

Markdown への変換が完了したので、古い CSS スタイルガイドを除去し、MDN の Markdown ページにリダイレクトするようにしました。

## 2021 年 7 月

### Markdown 用 CSS スタイルガイドの更新

CSS スタイルガイドを複数更新し、 Markdown への移行を反映し、 Markdown と互換性のある方法で HTML を書くよう作成者に促しました。

- メモと警告ボックスのタイトルに別個の見出し `<h4>` をつけること（例: `<h4>警告</h4>`）はなくなりました。

  正しい構文については、[MDN での Markdown](/ja/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#メモ、警告、コールアウト) のガイドを確認してください。

- `seoSummary` クラスは使用できなくなりました。
- `standard-table` クラスを使用することはできなくなりました。このクラスで指定されたスタイル設定が既定で表に適用されるようになりました。
- {{HTMLElement("details")}} 要素は使用すべきではないものになりました。
- `hidden`、`example-good`、`example-bad` の各クラスは主にコードブロックのためのものでしたが、他にも使用することができました。使用できるのはコードブロックのみになりました。

## 2021 年 2 月

### JavaScript と API の構文ブロックの複数行化

以前は、複数の異なる方法で使用できる（つまり、さまざまな引数がオプションである） JavaScript 組み込みメソッドと WebAPI メソッドの構文ブロックは、一般的に [BNF 形式構文記法](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)を使用して書かれていました。最も顕著なのは、オプションの引数を示すために角括弧を使用していたことです。

これには問題がありました。多くの開発者がこれで混乱していましたし、他のプログラミング言語でも有効な構文形式と競合していました（たとえば `[]` は JavaScript でも配列です）。

その結果、メソッドの複数の形式を構文ブロック内の別個の行に記述するようにしました。詳しい情報と例は[構文の節 > 複数行/引数](/ja/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#オプション引数は複数行で)を参照してください。

### ミックスインの文書化

Web IDL の[インターフェイスミックスイン](https://heycam.github.io/webidl/#idl-interface-mixins)は、 Web API を定義するための仕様書で使用されています。
ウェブ開発者にとっては、直接見ることはできませんが、 API 定義の繰り返しを避けるためのヘルパーとして機能しています。

これまでは、ミックスインクラス自体にランディングページを定義し、その下のサブページに定義されたメンバーを配置してから、それらのミックスインを実装したインターフェイスのランディングページからリンクするのが一般的でした。
ミックスインは仕様上の構成要素であり、ミックスインクラスを使って定義されたメンバーにアクセスすることはないため、これは読者にとって誤解を招きやすいものでした。
この混乱を避けるために、ミックスインで定義されたメンバーのページを、実装クラスのページの直下に配置しました。
詳細については、 [API リファレンスの書き方](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins)に関するガイドページと、この変更に至るまでの [mdn/content#1940](https://github.com/mdn/content/issues/1940) の議論を参照してください。

## 2021 年 1 月

### 注釈と警告ボックスのマークアップ

これまでの MDN では、注釈ボックスと警告ボックスは、 `<div>` 要素にそれぞれ `note` クラスと `warning` クラスをつけたもので囲んでいました。多くの場合、それらの最初の段落は、 `<strong>` で囲まれた `note` や `warning` のテキストで始まります。

1 月にこれが変更され、 `class` 属性に追加の `notecard` クラスを含めるようにし、強調表示のテキストはブロックの上部で見出しに含めるようになりました。

詳しい情報と構文のガイドは、 [MDN での Markdown](/ja/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#メモ、警告、コールアウト) を参照してください。
