---
title: URI
slug: Web/URI
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

**Uniform Resource Identifiers (統一リソース識別子、URI)** は、ウェブ上の「リソース」を識別するために使用されます。
これらは一般的に [HTTP](/ja/docs/Web/HTTP) リクエストの対象として使用され、その場合、URI は文書、写真、バイナリーデータなどのリソースの場所を表します。
URI の形で最も一般的に使用されているものは、Uniform Resource Locator ({{Glossary("URL")}}) であり、これは「ウェブアドレス」として知られています。

URI は、HTML の `<a>` リンクの [`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) など、他の場所で使用された場合、リソースを取得する以外の動作、例えばメールクライアントを開いたり、テキストメッセージを送信したり、 JavaScript を実行したりといった動作を起動するために使用することもできます。

## リファレンス

[URI リファレンス](/ja/docs/Web/URI/Reference) は、URI を構成する要素の詳細を提供します。

- [スキーム](/ja/docs/Web/URI/Reference/Schemes)
  - : URI の最初の部分で、`:` 文字の前にあり、ブラウザーがリソースを取得するために使用するプロトコルを示します。
- [オーソリティ](/ja/docs/Web/URI/Reference/Authority)
  - : スキームの後、パスの前に来る部分です。
    最大 3 つの部分（`user` 情報、`host`、`port`）を持つことができます。
- [パス](/ja/docs/Web/URI/Reference/Path)
  - : オーソリティの後の部分です。
    通常、階層形式で編成された、URI のスキームおよび権限の範囲内でリソースを識別するためのデータが含まれています。
- [フラグメント](/ja/docs/Web/URI/Reference/Fragment)
  - : URI の末尾の `#` 文字で始まるオプションの部分です。
    これは、文書内の領域や動画内の位置など、リソースの特定の部分を識別するために使用されます。

## ガイド

[URI ガイド](/ja/docs/Web/URI/Guides)は、ウェブ上で URI を使用して作業をする際に役立ちます。

- [www 付きと www なしの URL の選択](/ja/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : URL で `www.` 接頭辞を使用すべき場合（`www.example.com` 対 `example.com`）に関するガイダンス。

## 仕様書

{{Specifications}}

## 関連情報

- [URL とは何か](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
