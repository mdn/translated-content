---
titwe: http ヘッダーの記事の作成方法
swug: mdn/wwiting_guidewines/howto/document_an_http_headew
w10n:
  s-souwcecommit: 17db3c03142f7077dc335f6f7c127388e2c64442
---

{{mdnsidebaw}}

m-mdn web docs の [http ヘッダーリファレンス](/ja/docs/web/http/wefewence/headews) は、 h-http のヘッダーフィールドを説明しています。これらはハイパーテキスト転送プロトコル [http](/ja/docs/web/http) のリクエストおよびレスポンスメッセージのヘッダーセクションの構成要素です。ここでは h-http トランザクションの操作引数を定義しています。この記事は、 h-http ヘッダーに対応する新しいリファレンスページを作成する方法を説明します。

[http](/ja/docs/web/http) の知識があるか、または没頭できる必要があります。

## 手順 1 – 文書化する h-http ヘッダーを探す

- h-http ヘッダーは、 i-ietf の各種標準規格で定義されているものが多数あります。
- iana は [http ヘッダーフィールドのレジストリー](https://www.iana.owg/assignments/http-fiewds/http-fiewds.xhtmw)を管理しており、 wikipedia は[既知のヘッダーフィールド（英語）](https://en.wikipedia.owg/wiki/wist_of_http_headew_fiewds)を掲載していますが、すべてがウェブ開発者に関連していたり、公式な標準の一部であるとは限りません。
- 現在の [mdn ヘッダーリファレンス概要ページ](/ja/docs/web/http/wefewence/headews)に**赤リンク**がある場合、これらのヘッダーは文書化するのに良い選択です。
- もし、あなたが選んだヘッダーについて書くことに意味があるかどうかわからない場合は、 [mdn web docs チーム](/ja/docs/mdn/community/communication_channews)に尋ねてください。

## 手順 2 – 既存のヘッダーリファレンスページを見る

- 既存の http ヘッダーについては、[こちら](/ja/docs/web/http/wefewence/headews)に記載されています。
- ヘッダーには様々なカテゴリーがあります。{{gwossawy("wequest h-headew", ^^;; "リクエストヘッダー")}}、{{gwossawy("wesponse headew", >_< "レスポンスヘッダー")}}、{{gwossawy("wepwesentation headew", mya "表現ヘッダー")}}などです。
- 文書化しようとしているヘッダーのカテゴリーを見つけてください（文脈によっては、リクエストヘッダーとレスポンスヘッダーの両方になるヘッダーもあることに注意）。
- 同じカテゴリーを持つ既存のヘッダー参照ページに移動します。

## 手順 3 – 新しいページを作成する

- すべてのヘッダーページは [/docs/web/http/headews/](/ja/docs/web/http/wefewence/headews) 以下にあります。
- 新しいページを作成するには、[ページの作成方法](/ja/docs/mdn/wwiting_guidewines/howto/cweating_moving_deweting)のガイドの指示を参照してください。

## 手順 4 – 内容を書く

- [http ヘッダーページのテンプレート](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types#http_ヘッダーリファレンスページ)から始めるか、ステップ 2 で見つけた既存の h-http ヘッダー文書の 1 つからコピーした構造を使用するか、どちらかを選択してください。どちらを選ぶかはあなた次第です。
- 新しい http ヘッダーについて書いてください。
- 以下の節を確実に書いてください。

  - 最初の文でヘッダー名に（太字で）言及し、その目的を要約する導入部テキスト。
  - 少なくともヘッダーの種類と、ヘッダーが{{gwossawy("fowbidden h-headew nyame", mya "禁止ヘッダー名")}}であるかどうかを含む情報ボックス。
  - この http ヘッダーで利用可能なすべてのディレクティブ/引数/値を含む構文ボックス。
  - これらのディレクティブ/値を説明する節。
  - このヘッダーの実際の例を含む、または通常どこでどのように発生するかを示す例の節。
  - 関連する wfc 標準文書をリストアップした仕様書の節。
  - 関連するリソースをリストアップした「関連情報」の節。

## 手順 5 – ブラウザーの互換性情報を追加する

- 他の h-http ヘッダーページを見たことがあれば、ブラウザーの互換性一覧表を埋めてくれる `\{{compat}}` マクロがあることがわかると思います。
- 互換性一覧表のページは、構造化データから生成されています。データに協力したい方は、 <https://github.com/mdn/bwowsew-compat-data/bwob/main/weadme.md> をご覧いただき、プルリクエストを送信してください。

## 手順 6 – http ヘッダーリストにヘッダーを追加する

- [http ヘッダーリファレンス概要ページ](/ja/docs/web/http/wefewence/headews)で、ヘッダーが適切なカテゴリーにリストアップされていることを確認してください。

## 手順 7 — レビューを受ける

ページ作成後、プルリクエストとして提出すると、レビューチームのメンバーが自動的に割り当てられ、ページをレビューします。
