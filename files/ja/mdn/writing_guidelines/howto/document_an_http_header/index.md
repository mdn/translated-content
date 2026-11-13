---
title: HTTP ヘッダーの記事の作成方法
short-title: HTTP ヘッダーの文書化
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

ハイパーテキスト転送プロトコル ([HTTP](/ja/docs/Web/HTTP)) のリクエストおよびレスポンスメッセージのヘッダーセクションについては、[HTTP ヘッダーリファレンス](/ja/docs/Web/HTTP/Reference/Headers)で説明しています。
この記事では、HTTP ヘッダーの新しいリファレンスページを作成する方法を説明します。

> [!CALLOUT]
> 訳注:
> この記事は英語版のページを作成する方法を示しています。翻訳記事を作成する場合は、 [MDN Web Docs のローカライズ](/ja/docs/MDN/Community/Translated_content)を参照してください。

## 手順 1 – 文書化する HTTP ヘッダーを探す

- HTTP ヘッダーは、 IETF の各種標準規格で定義されているものが多数あります。
- IANA は [HTTP ヘッダーフィールドのレジストリー](https://www.iana.org/assignments/http-fields)を管理しており、 Wikipedia は[既知のヘッダーフィールド](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)<sup>(英語)</sup>を掲載していますが、すべてがウェブ開発者に関連していたり、公式な標準の一部であるとは限りません。
- 現在の [MDN ヘッダーリファレンス概要ページ](/ja/docs/Web/HTTP/Reference/Headers)に**赤リンク**がある場合、これらのヘッダーは文書化するのに良い選択です。
- もし、あなたが選んだヘッダーについて書くことに意味があるかどうかわからない場合は、 [MDN Web Docs チーム](/ja/docs/MDN/Community/Communication_channels)に尋ねてください。

## 手順 2 – 既存のヘッダーリファレンスページを見る

- 既存の HTTP ヘッダーについては、[HTTP リファレンス](/ja/docs/Web/HTTP/Reference/Headers)に記載されています。
- ヘッダーには様々なカテゴリーがあります。{{Glossary("Request header", "リクエストヘッダー")}}、{{Glossary("Response header", "レスポンスヘッダー")}}、{{Glossary("Representation header", "表現ヘッダー")}}などです。
- 文書化しようとしているヘッダーのカテゴリーを見つけてください（文脈によっては、リクエストヘッダーとレスポンスヘッダーの両方になるヘッダーもあることに注意）。
- 同じカテゴリーを持つ既存のヘッダー参照ページに移動します。

## 手順 3 – 新しいページを作成する

- すべてのヘッダーページは [`files/en-us/web/http/reference/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/reference/headers)<sup>(英語)</sup> 以下にあります。
- 新しいページを作成するには、[ページの作成方法](/ja/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)のガイドの指示を参照してください。

## 手順 4 – 内容を書く

- [HTTP ヘッダーページのテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_ヘッダーリファレンスページ)から始めるか、ステップ 2 で見つけた既存の HTTP ヘッダー文書の 1 つからコピーした構造を使用するか、どちらかを選択してください。どちらを選ぶかはあなた次第です。
- 新しい HTTP ヘッダーについて書いてください。
- 以下の節を確実に書いてください。
  - 最初の文でヘッダー名に（太字で）言及し、その目的を要約する導入部テキスト。
  - 少なくともヘッダーの種類と、そのヘッダーが{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}であるかどうかを含む情報ボックス。
  - この HTTP ヘッダーで利用可能なすべてのディレクティブ/引数/値を含む構文ボックス。
  - これらのディレクティブ/値を説明する節。
  - このヘッダーの実際の例を含む、または通常どこでどのように発生するかを示す例の節。
  - 関連する RFC 標準文書をリストアップした仕様書の節。
  - 関連するリソースをリストアップした「関連情報」の節。

## 手順 5 – ブラウザーの互換性情報を追加する

- 他の HTTP ヘッダーページを見たことがあれば、ブラウザーの互換性一覧表を埋めてくれる `\{{Compat}}` マクロがあることがわかると思います。
- 互換性一覧表のページは、構造化データから生成されています。データに協力したい方は、 <https://github.com/mdn/browser-compat-data/blob/main/README.md> をご覧いただき、プルリクエストを送信してください。

## 手順 6 – HTTP ヘッダーリストにヘッダーを追加する

- [HTTP ヘッダーリファレンス概要ページ](/ja/docs/Web/HTTP/Reference/Headers)で、ヘッダーが適切なカテゴリーに掲載されていることを確認してください。

## 手順 7 — レビューを受ける

ページ作成後、プルリクエストとして提出すると、レビューチームのメンバーが自動的に割り当てられ、ページをレビューします。
