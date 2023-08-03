---
title: HTTP ヘッダーの記事を作成するには
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
---

{{MDNSidebar}}

MDN の [HTTP ヘッダーリファレンス](/ja/docs/Web/HTTP/Headers) は、ハイパーテキスト転送プロトコル ([HTTP](/ja/docs/Web/HTTP)) のリクエストメッセージとレスポンスメッセージのヘッダーセクションの構成要素である HTTP のヘッダーフィールドを記述します。 HTTP トランザクションの操作引数を定義します。このページでは、 HTTP ヘッダーに対応する新しい MDN リファレンスページを作成する方法を説明します。

## 前提条件

- [MDN アカウント](/ja/docs/MDN/Contribute/Getting_started#ステップ_1_github_アカウントを作成する)が必要です。
- [HTTP](/ja/docs/Web/HTTP) の知識があるか、または没頭できる必要があります。

## 手順 1 – 文書化する HTTP ヘッダーを探す

- HTTP ヘッダーは、 IETF の各種標準規格で定義されているものが多数あります。
- IANA は[ヘッダーのレジストリー](https://www.iana.org/assignments/message-headers/message-headers.xhtml)を管理しており、 Wikipedia は[既知のヘッダーフィールド](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)を掲載していますが、すべてがウェブ開発者に関連していたり、公式な標準の一部であるとは限りません。
- 現在の [MDN ヘッダーリファレンス概要ページ](/ja/docs/Web/HTTP/Headers)に**赤リンク**がある場合、これらのヘッダーは文書化するのに良い選択です。
- もし、あなたが選んだヘッダーについて書くことに意味があるかどうかわからない場合は、 [MDN 協力者に尋ねてください](/ja/docs/MDN/Contribute/Getting_started#step_4_ask_for_help)。

## 手順 2 – 既存のヘッダーリファレンスページを見る

- 既存のHTTPヘッダについては、[こちら](/ja/docs/Web/HTTP/Headers)に記載されています。
- ヘッダーには様々なカテゴリーがあります。{{Glossary("Request header", "リクエストヘッダー")}}、{{Glossary("Response header", "レスポンスヘッダー")}}、{{Glossary("Representation header", "表現ヘッダー")}}などです。
- 文書化しようとしているヘッダのカテゴリーを見つけてください（文脈によっては、リクエストヘッダーとレスポンスヘッダーの両方になるヘッダーもあることに注意）。
- 同じカテゴリーを持つ既存のヘッダー参照ページに移動します。

## 手順 3 – 新しいページを作成する

- すべてのヘッダーページは [/docs/Web/HTTP/Headers/](/ja/docs/Web/HTTP/Headers) 以下にあります。
- 新しいページを作成するには、 [GitHub の README](https://github.com/mdn/content#adding-a-new-document) の指示を参照してください。

## 手順 4 – 内容を書く

- [HTTP ヘッダーページのテンプレート](/ja/docs/MDN/Structures/Page_types#http_header_reference_page)から始めるか、ステップ 2 で見つけた既存の HTTP ヘッダー文書の 1 つからコピーした構造を使用するか、どちらかを選択してください。どちらを選ぶかはあなた次第です。
- 新しい HTTP ヘッダーについて書いてください。
- 以下の節を書くことを確認してください。

  - 最初の文がヘッダー名に（太字で）言及し、その目的を要約する導入部テキスト。
  - 少なくともヘッダーの種類と、ヘッダーが{{Glossary("Forbidden header name", "禁止ヘッダー名")}}であるかどうかを含む情報ボックス。
  - この HTTP ヘッダーで利用可能なすべてのディレクティブ/引数/値を含む構文ボックス。
  - これらのディレクティブ/値を説明する節。
  - このヘッダーの実際の使用例を含む、または通常どこでどのように発生するかを示す例の節。
  - 関連する RFC 標準文書をリストアップした仕様書の節。
  - 関連するリソースをリストアップした「関連情報」の節。

## 手順 4a – ページへタグを追加する

すべての HTTP ヘッダーページには、少なくとも "HTTP", "Header", "Reference" のタグが必要です。

## 手順 5 – ブラウザーの互換性情報を追加する

- 他の HTTP ヘッダーページを見たことがあれば、ブラウザーの互換性一覧表を埋めてくれる \{{compat}} マクロがあることがわかると思います。
- 互換性一覧表のページは、構造化データから生成されています。データに協力したい方は、 <https://github.com/mdn/browser-compat-data/README.md> をご覧いただき、プルリクエストを送信してください。

## 手順 6 – HTTP ヘッダーリストにヘッダーを追加する

- [HTTP ヘッダーリファレンス概要ページ](/ja/docs/Web/HTTP/Headers)で、ヘッダーが適切なカテゴリーにリストアップされていることを確認してください。

## 手順 7 — レビューを受ける

ページ作成後、プルリクエストとして提出すると、当社の審査担当者が自動的に割り当てられ、ページをレビューします。
