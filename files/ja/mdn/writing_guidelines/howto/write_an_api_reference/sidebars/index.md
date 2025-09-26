---
title: API リファレンスサイドバー
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

API リファレンスページにカスタムサイドバーを追加して、関連するインターフェイス、チュートリアル、およびその API に関連する他のリソースへのリンクを表示することができます。この記事ではその方法を説明します。

## サイドバーの作成

API サイドバーを作成するには、次の 3 つの手順を実行する必要があります。

1. API リファレンスページを作成します。
2. 特定の API の項目を [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) ファイルに追加します。
3. [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) マクロを使用して、表示したい各ページにサイドバーを挿入します。

これらのステップを順番に実行しましょう。この記事で参照する例は、[フェッチ API](/ja/docs/Web/API/Fetch_API) です。

### GroupData.json への項目の追加

`GroupData.json` ファイルには、API 参照サイドバーに表示されるリンクに関するすべてのデータが格納されます。
呼び出されると、`APIRef` マクロは引数として与えられた API 名を取り、 `GroupData.json` でその名前を検索し、適切なサイドバーを作成してページに挿入します。

`GroupData.json` に項目を追加するには、以下を行う必要があります。

1. [GitHub](https://github.com/) アカウントを持っていることを確認します
2. MDN の content リポジトリーをフォークし、新しいブランチを作成して変更を保存し、リポジトリーをローカルにクローンします。
3. 作業を開始する前に新しいブランチをチェックアウトし、作業が終わったら変更を押してください。
4. プルリクエストを作成して、MDN チームがあなたの作業をレビューし、必要に応じて変更を求めることができるようにします。

`GroupData.json` ファイルは `files/jsondata/` ディレクトリー内にあります。それを見ると、巨大な JSON 構造があり、それぞれの API に独自のメンバーがあります。名前は API 名で、値は生成するサイドバーリンクを定義するいくつかのサブメンバーを含むオブジェクトです。

たとえば、MDN の [フェッチ API](/ja/docs/Web/API/Fetch_API) ページを見てください。 `GroupData.json` の対応する項目は次のようになります。

```json
"Fetch API": {
    "overview":   [ "Fetch API"],
    "interfaces": [ "Headers",
                    "Request",
                    "Response",
                    "FetchController",
                    "FetchObserver",
                    "FetchSignal",
                    "ObserverCallback" ],
    "methods":    [ "fetch()" ],
    "properties": [],
    "events":     []
},
```

ご覧のとおり、名前には "Fetch API" を使用し、オブジェクト値の内側には多数のサブメンバーが含まれています。

#### GroupData 項目内に含めるサブメンバー

この節では、 `GroupData` 項目に含めることができるすべてのサブメンバーを一覧表示します。

リストされたサブメンバーの中に含まれる値のほとんどは、リンクテキストと、表示されるリンクの最終的な URL を生成するためのメイン API インデックスページ — `https://developer.mozilla.org/<言語コード>/docs/Web/API` — の最後に追加されたスラッグの両方に相当することに注意してください。
そのため、例えば "Response" とすると、 以下のようなリンクが生成されます。

```html
<li><a href="/ja/docs/Web/API/Response">Response</a></li>
```

いくつかの例外があります。
例えば "guides" サブメンバーには、関連するガイド/チュートリアルを指す URL が含まれています。
この場合、URL は MDN の docs ルートの最後 — `https://developer.mozilla.org/<言語コード>` — の最後に追加され、MDN のどこにでも記事を含めることができます。

以下が利用可能なメンバーです。
これらはすべて技術的にはオプションですが、これらを省略する代わりに空の配列を含めることを強く推奨します。

1. `"overview"` — 値は配列で、 API 概要ページがあればその中にスラッグを含めます。
   "Fetch API" の場合、 [https://developer.mozilla.org/ja/docs/Web/API/Fetch_API](/ja/docs/Web/API/Fetch_API) へのリンクが生成されます。
2. `"interfaces"` — 値は配列で、その API の一部を構成するすべてのインターフェイスをリストアップする必要があります。
   "Response" の場合は [https://developer.mozilla.org/ja/docs/Web/API/Response](/ja/docs/Web/API/Response) へのリンクが生成されます。
3. `"methods"` — 値は、 {{domxref("Navigator")}} や {{domxref("Window")}} で生成されたインスタンス化メソッドなど、仕様が他の API に関連付けられたインターフェイスに追加するメソッドを含む配列です。
   膨大な数のメソッドがある場合は、最も人気のあるものだけをリストアップするか、リストの先頭に置くことを検討するとよいでしょう。
   "fetch()" は [https://developer.mozilla.org/ja/docs/Web/API/Window/fetch](/ja/docs/Web/API/Window/fetch) へのリンクが張られます。
   同じ API が所有するインターフェイスのメンバーであるメソッドを重複してリストアップしないようにしましょう。
4. `"properties"` — 値は、 API に関連付けられたすべてのプロパティを含む配列です。
   これには API 仕様で定義されているインターフェイスのメンバーであるプロパティや、API が他のインターフェイス上で定義しているプロパティを含めることができます。
   膨大な数のプロパティがある場合は、最も人気のあるものだけをリストアップするか、リストの先頭に配置することを検討するとよいでしょう。
   "Headers.append" を実行すると、 [https://developer.mozilla.org/ja/docs/Web/API/Headers/append](/ja/docs/Web/API/Headers/append) へのリンクが生成されます。
5. `"events"` — 値は配列で、API の一部であるイベントのタイトルが格納され、API の一部ではないインターフェイスで定義されているものです(API内のインターフェイス(`interfaces`)に属するイベントは既定では文書化されます)。
   膨大な数のイベントがある場合は、最も人気のあるものだけをリストアップするか、リストの先頭に置くことを検討するとよいでしょう。
   例えば、`"Document: selectionchange"` は [選択 API](/ja/docs/Web/API/Selection_API) の一部ですが、`Document` はそうではないので、配列にイベントを追加し、[選択 API](/ja/docs/Web/API/Selection_API) のトピックからリンクします。
6. `"guides"` — 値は文字列の配列で、それぞれが API を使用する方法を説明するガイドトピックに対応しています。
   文字列は、言語パスの後のガイドの URL アドレスの部分が入ります。すなわち、ガイド URL の`/docs/...` の部分です。
   例えば、`https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch` にあるトピック「フェッチの使用」にリンクする場合、ガイドの配列には "/docs/Web/API/Fetch_API/Using_Fetch " が入ります。
7. `"dictionaries"` — API の一部であるすべての辞書を一覧にした文字列の配列。
   一般的に、特別な意味がある場合や、複数のページから参照する必要がある場合を除き、複数のプロパティやメソッドで使用される辞書のみをここにリストアップすべきです。
   "CryptoKeyPair" は [https://developer.mozilla.org/ja/docs/Web/API/CryptoKeyPair](/ja/docs/Web/API/CryptoKeyPair) へのリンクを生成します。
   > [!NOTE]
   > MDN は、辞書を別個に文書化することをやめつつあります。
   > 可能な限り、これらは使用される場所でオブジェクトとして記述するようになりました。
8. `"types"` — API で定義されている型定義子と列挙型の配列。リストを短くするために、特別に重要なものや複数のページから参照されるものだけをリストアップすることもできます。
   > [!NOTE]
   > MDN は型定義子を個別に文書化することをやめつつあります。
   > 可能な限り、これらが使用されている箇所で値として記述されるようになりました。
9. `"callbacks"` — 値は、その API で定義されているすべてのコールバック型のリストを含む配列です。コールバック型を含む API であっても、このグループを使用する必要はないと思われるかもしれません。
   コールバック型を含む API でも、このグループを全く使用する必要がないと感じるかもしれません。なぜなら、コールバック型は個別にドキュメント化しても意味がないことが多いからです。

## サイドバーで使用されるタグ

サブメンバーによっては、ページタグに基づいて子ページから自動的に発見されるものがあります。最上位 API 以下のページはサイドバーがレンダリングされるたびにクロールされ、メソッド ("Method" タグ)、プロパティ ("Property" タグ)、コンストラクター ("Constructor" タグ) の項目が自動的に生成されます。

サブメンバーにも、タグに基づいた警告アイコンが自動的に表示されます。実験的な ("Experimental" タグ)、標準外 ("Non Standard" または "Non-standard" タグ)、非推奨 ("Deprecated" タグ) サブメンバーには装飾が追加されます。

タグベースの処理に関する詳細情報は、 [APIRef ソースの中](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs)にあります。

## サイドバーの挿入

`GroupData.json` に API の項目を追加してプルリクエストとして送信し、その変更がメインリポジトリーに受け入れられたら、 [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) マクロを使用して API リファレンスページに設置することができ、 GroupData の API に引数として使用されます。例として、 [WebVR API](/ja/docs/Web/API/WebVR_API) のサイドバーは、各ページに次のように設置されています。

```plain
\{{APIRef("WebVR API")}}
```
