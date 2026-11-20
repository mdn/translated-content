---
title: "WebTransport: anticipatedConcurrentIncomingBidirectionalStreams プロパティ"
short-title: anticipatedConcurrentIncomingBidirectionalStreams
slug: Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams
l10n:
  sourceCommit: e92c5e2a19431051aed74037ec5b0decbbf5ca3d
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`anticipatedConcurrentIncomingBidirectionalStreams`** は {{domxref("WebTransport")}} インターフェイスのプロパティで、アプリケーションがサーバーに同時に開いておくよう期待する受信双方向ストリームの数を表します。

## 値

`0` から `65535` までの整数、または `null` です。

初期値は {{domxref("WebTransport.WebTransport", "WebTransport()")}} コンストラクターの [`anticipatedConcurrentIncomingBidirectionalStreams`](/ja/docs/Web/API/WebTransport/WebTransport#anticipatedconcurrentincomingbidirectionalstreams) オプションから取得されます。このオプションが設定されていない場合、初期値は `null` です。

### 例外

- {{jsxref("TypeError")}}
  - : プロパティに `0` から `65535` の範囲外の値が設定された場合に発生します。

## 解説

サーバーが開ける双方向ストリームは、ブラウザーが許可する数に限られます。
セッションの開始時、ブラウザーはサーバーが少なくとも 100 個の双方向ストリームを開くことを常に許可します。

サーバーが同時にそれより多くのストリームを開くことを想定するアプリケーションもあります。たとえば、サーバーが各リクエストをそれぞれ別のストリームでクライアントに送信する場合です。
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
最初のトランスポートでは `anticipatedConcurrentIncomingBidirectionalStreams` オプションを設定しないため、プロパティの値は `null` です。

```js
const url = "https://example.com:4999/wt";

const transport = new WebTransport(url);
console.log(transport.anticipatedConcurrentIncomingBidirectionalStreams); // null
```

2 つ目のトランスポートではオプションに `300` を設定し、アプリケーションがサーバーに最大 300 個の双方向ストリームを同時に開くよう期待していることをブラウザーに伝えます。

```js
const busyTransport = new WebTransport(url, {
  anticipatedConcurrentIncomingBidirectionalStreams: 300,
});
console.log(busyTransport.anticipatedConcurrentIncomingBidirectionalStreams); // 300
```

### 想定するストリーム数を変更する

この例では、セッションの準備ができた後に想定するストリーム数を増やします。
サーバーが最初の想定より多くのストリームを送信すると分かったときに、アプリケーションはこのように変更できます。

```js
const transport = new WebTransport("https://example.com:4999/wt", {
  anticipatedConcurrentIncomingBidirectionalStreams: 300,
});
await transport.ready;

// サーバーがさらに多くのストリームを開くと想定
transport.anticipatedConcurrentIncomingBidirectionalStreams = 600;
console.log(transport.anticipatedConcurrentIncomingBidirectionalStreams); // 600
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebTransport.incomingBidirectionalStreams")}}
- {{domxref("WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams")}}
- {{domxref("WebTransport.WebTransport", "WebTransport()")}} コンストラクター
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)<sup>(英語)</sup>
