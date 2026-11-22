---
title: "WebTransport: anticipatedConcurrentIncomingUnidirectionalStreams プロパティ"
short-title: anticipatedConcurrentIncomingUnidirectionalStreams
slug: Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams
l10n:
  sourceCommit: e92c5e2a19431051aed74037ec5b0decbbf5ca3d
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`anticipatedConcurrentIncomingUnidirectionalStreams`** は {{domxref("WebTransport")}} インターフェイスのプロパティで、アプリケーションがサーバーによって同時に開かれると想定する受信単方向ストリームの数を表します。

## 値

`0` から `65535` までの整数、または `null` です。

初期値は {{domxref("WebTransport.WebTransport", "WebTransport()")}} コンストラクターの [`anticipatedConcurrentIncomingUnidirectionalStreams`](/ja/docs/Web/API/WebTransport/WebTransport#anticipatedconcurrentincomingunidirectionalstreams) オプションから取得されます。このオプションが設定されていない場合、初期値は `null` です。

### 例外

- {{jsxref("TypeError")}}
  - : プロパティに `0` から `65535` の範囲外の値が設定された場合に発生します。

## 解説

サーバーが開ける単方向ストリームは、ブラウザーが許可する数に限られます。
セッションの開始時、ブラウザーはサーバーが少なくとも 100 個の単方向ストリームを開くことを常に許可します。

サーバーが同時にそれより多くのストリームを開くことを想定するアプリケーションもあります。たとえば、サーバーがゲームの更新やメディアの各区間をそれぞれ別のストリームで送信する場合です。
このプロパティを設定すると、想定するストリーム数がブラウザーに伝わり、上限を事前に引き上げられるようになります。
サーバーが一度に多数のストリームを開くとき、ブラウザーが追加のストリームを許可するまで待つ必要がなくなるため、遅延を避けられます。
この値はヒントであり、設定してもその数のストリームをサーバーが開けるとは限りません。

値が `null` の場合、アプリケーションはヒントを指定せず、ブラウザーはデフォルトの上限を使用します。
`0` を含む 100 未満の値を指定しても、サーバーが最初に開けるストリーム数は減りません。

トランスポートの作成後にこのプロパティを設定することもできます。
ブラウザーは、サーバーとのその後のネゴシエーションで新しい値を考慮する場合があります。

## 例

### 接続時に多数のストリームを想定する

この例では、2 つのトランスポートを作成します。
最初のトランスポートでは `anticipatedConcurrentIncomingUnidirectionalStreams` オプションを設定しないため、プロパティの値は `null` です。

```js
const url = "https://example.com:4999/wt";

const transport = new WebTransport(url);
console.log(transport.anticipatedConcurrentIncomingUnidirectionalStreams); // null
```

2 つ目のトランスポートではオプションに `500` を設定し、アプリケーションがサーバーに最大 500 個の単方向ストリームを同時に開くよう期待していることをブラウザーに伝えます。

```js
const busyTransport = new WebTransport(url, {
  anticipatedConcurrentIncomingUnidirectionalStreams: 500,
});
console.log(busyTransport.anticipatedConcurrentIncomingUnidirectionalStreams); // 500
```

### 想定するストリーム数を変更する

この例では、セッションの準備ができた後に想定するストリーム数を増やします。
サーバーが最初の想定より多くのストリームを送信すると分かったときに、アプリケーションはこのように変更できます。

```js
const transport = new WebTransport("https://example.com:4999/wt", {
  anticipatedConcurrentIncomingUnidirectionalStreams: 500,
});
await transport.ready;

// サーバーがさらに多くのストリームを開くと想定
transport.anticipatedConcurrentIncomingUnidirectionalStreams = 1000;
console.log(transport.anticipatedConcurrentIncomingUnidirectionalStreams); // 1000
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebTransport.incomingUnidirectionalStreams")}}
- {{domxref("WebTransport.anticipatedConcurrentIncomingBidirectionalStreams")}}
- {{domxref("WebTransport.WebTransport", "WebTransport()")}} コンストラクター
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)<sup>(英語)</sup>
