---
title: "Document: browsingTopics() メソッド"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
l10n:
  sourceCommit: 1df8a667bed3eb0318d69e39884dc4d63f62be48
---

{{APIRef("Topics API")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> この機能は現在2つのブラウザーベンダーによって反対されています。反対の詳細については下記の[標準の位置づけ](/ja/docs/Web/API/Topics_API#standards_positions)の節を参照してください。

> [!NOTE]
> アプリケーションでこの機能を使用するには、[登録プロセス](/ja/docs/Web/Privacy/Privacy_sandbox/Enrollment)が要求されます。

`browsingTopics()` は {{domxref("Document")}} インターフェイスのメソッドで、ユーザーのトップトピックを表すオブジェクトの配列で履行されるプロミスを返します。これらのトピックは、その後のフェッチリクエストで広告技術プラットフォームに返すことができます。既定では、このメソッドは呼び出し側が監視する現在のページ訪問をブラウザーに記録するので、ページのホスト名を後でトピックの計算に使用することができます。

詳しくは[トピック API の使用](/ja/docs/Web/API/Topics_API/Using)を参照してください。

> [!NOTE]
> `browsingTopics()` は他の[トピック API を有効にする機能](/ja/docs/Web/API/Topics_API/Using#トピック_api_を有効にする_api_機能)のように HTTP ヘッダーに頼ってトピックを送信したり、トピックを監視対象としてマークしたりすることはしませんが、パフォーマンスは少し落ちます。HTTP ヘッダーを使用する機能を使用し、ヘッダーを変更できない場合にのみ `browsingTopics()` で代替することをお勧めします。

## 構文

```js-nolint
browsingTopics()
browsingTopics(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のプロパティを持つオプションオブジェクトです。
    - `skipObservation`
      - : 論理値。`true` に設定すると、`browsingTopics()` を呼び出したときにブラウザーがトピックを監視しないようになります。既定では `false` で、トピックを監視します。

### 返値

最大 3 つのオブジェクトの配列で履行された {{jsxref("Promise")}} で、現在のユーザーが選択した直近 3 世代のトピックを表します。各オブジェクトは以下のプロパティを格納します。

- `configVersion`
  - : 文字列で、トピックを計算するために使用するアルゴリズム（モデル部分以外）を識別します。
- `modelVersion`
  - : 文字列で、（ウェブページのホスト名などの）文字列をトピック ID に分類するために使用するモデルを表します。
- `taxonomyVersion`
  - : 文字列で、使用するタクソノミーのバージョンを表します。
- `topic`
  - : 数値で、ブラウザーがタクソノミーからトピックを検索するために使用することができる、トピックの ID を表します（[興味のタクソノミー](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)の例を参照）。
- `version`
  - : `configVersion`、`modelVersion`，`taxonomyVersion` のそれぞれにコロン (`:`) を挟んだものです。

正確なプロパティ値は、ブラウザー実装によって異なる場合があります。Chrome のオブジェクト例は以下のようになります：

```js
{
  configVersion: "chrome.1",
  modelVersion: "1",
  taxonomyVersion: "1",
  topic: 43,
  version: "chrome.1:1:1"
}
```

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 以下の場合に発生します。
    - [トピック API](/ja/docs/Web/API/Topics_API)の使用が {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)によって不許可になっていた場合。
    - 呼び出されたウェブサイトに、成功した[プライバシーサンドボックスの登録プロセス](/ja/docs/Web/Privacy/Privacy_sandbox/Enrollment)にに含まれるトピック API がない場合。

## 例

```js
// Get an array of top topics for this user
const topics = await document.browsingTopics();

// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(topics),
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

## 仕様書

この機能は [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) で定義されていますが、公式の標準には属しません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [トピック API](/ja/docs/Web/API/Topics_API)
