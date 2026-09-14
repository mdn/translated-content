---
title: HTTP ヘッダーの記事の作成方法
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 17db3c03142f7077dc335f6f7c127388e2c64442
---

{{MDNSidebar}}

MDN Web Docs の [HTTP ヘッダーリファレンス](/ja/docs/Web/HTTP/Reference/Headers) は、 HTTP のヘッダーフィールドを説明しています。これらはハイパーテキスト転送プロトコル [HTTP](/ja/docs/Web/HTTP) のリクエストおよびレスポンスメッセージのヘッダーセクションの構成要素です。ここでは HTTP トランザクションの操作引数を定義しています。この記事は、 HTTP ヘッダーに対応する新しいリファレンスページを作成する方法を説明します。

[HTTP](/ja/docs/Web/HTTP) の知識があるか、または没頭できる必要があります。

## 手順 1 – 文書化する HTTP ヘッダーを探す

- HTTP ヘッダーは、 IETF の各種標準規格で定義されているものが多数あります。
- IANA は [HTTP ヘッダーフィールドのレジストリー](https://www.iana.org/assignments/http-fields/http-fields.xhtml)を管理しており、 Wikipedia は[既知のヘッダーフィールド（英語）](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)を掲載していますが、すべてがウェブ開発者に関連していたり、公式な標準の一部であるとは限りません。
- 現在の [MDN ヘッダーリファレンス概要ページ](/ja/docs/Web/HTTP/Reference/Headers)に**赤リンク**がある場合、これらのヘッダーは文書化するのに良い選択です。
- もし、あなたが選んだヘッダーについて書くことに意味があるかどうかわからない場合は、 [MDN Web Docs チーム](/ja/docs/MDN/Community/Communication_channels)に尋ねてください。

## 手順 2 – 既存のヘッダーリファレンスページを見る

- 既存の HTTP ヘッダーについては、[こちら](/ja/docs/Web/HTTP/Reference/Headers)に記載されています。
- ヘッダーには様々なカテゴリーがあります。{{Glossary("Request header", "リクエストヘッダー")}}、{{Glossary("Response header", "レスポンスヘッダー")}}、{{Glossary("Representation header", "表現ヘッダー")}}などです。
- 文書化しようとしているヘッダーのカテゴリーを見つけてください（文脈によっては、リクエストヘッダーとレスポンスヘッダーの両方になるヘッダーもあることに注意）。
- 同じカテゴリーを持つ既存のヘッダー参照ページに移動します。

## 手順 3 – 新しいページを作成する

- すべてのヘッダーページは [/docs/Web/HTTP/Headers/](/ja/docs/Web/HTTP/Reference/Headers) 以下にあります。
- 新しいページを作成するには、[ページの作成方法](/ja/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)のガイドの指示を参照してください。

## 手順 4 – 内容を書く

- [HTTP ヘッダーページのテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_ヘッダーリファレンスページ)から始めるか、ステップ 2 で見つけた既存の HTTP ヘッダー文書の 1 つからコピーした構造を使用するか、どちらかを選択してください。どちらを選ぶかはあなた次第です。
- 新しい HTTP ヘッダーについて書いてください。
- 以下の節を確実に書いてください。
  - 最初の文でヘッダー名に（太字で）言及し、その目的を要約する導入部テキスト。
  - 少なくともヘッダーの種類と、ヘッダーが{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}であるかどうかを含む情報ボックス。
  - この HTTP ヘッダーで利用可能なすべてのディレクティブ/引数/値を含む構文ボックス。
  - これらのディレクティブ/値を説明する節。
  - このヘッダーの実際の例を含む、または通常どこでどのように発生するかを示す例の節。
  - 関連する RFC 標準文書をリストアップした仕様書の節。
  - 関連するリソースをリストアップした「関連情報」の節。

## 手順 5 – ブラウザーの互換性情報を追加する

- 他の HTTP ヘッダーページを見たことがあれば、ブラウザーの互換性一覧表を埋めてくれる `\{{Compat}}` マクロがあることがわかると思います。
- 互換性一覧表のページは、構造化データから生成されています。データに協力したい方は、 <https://github.com/mdn/browser-compat-data/blob/main/README.md> をご覧いただき、プルリクエストを送信してください。

## 手順 6 – HTTP ヘッダーリストにヘッダーを追加する

- [HTTP ヘッダーリファレンス概要ページ](/ja/docs/Web/HTTP/Reference/Headers)で、ヘッダーが適切なカテゴリーにリストアップされていることを確認してください。

## 手順 7 — レビューを受ける

ページ作成後、プルリクエストとして提出すると、レビューチームのメンバーが自動的に割り当てられ、ページをレビューします。
