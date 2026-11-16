---
title: "WebTransport: draining プロパティ"
short-title: draining
slug: Web/API/WebTransport/draining
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`draining`** は {{domxref("WebTransport")}} インターフェイスの読み取り専用プロパティで、サーバーがトランスポートセッションを閉じる前にドレイン処理を開始したいと通知したときに履行される {{jsxref("Promise")}} を返します。

## 値

`undefined` で履行される {{jsxref("Promise")}} です。

## 解説

サーバーから通知を受け取ると、セッションはドレイン状態に入ります。
セッション（場合によっては基盤となる接続も）がまもなく終了される場合に、この通知が送信されることがあります。たとえば、サーバーがバックエンドインスタンス間で負荷を再分散する場合、セッションの最大存続時間を適用する場合、または再起動する場合です。
ドレインはあくまで要求です。どちらのエンドポイントもセッションを引き続き使用でき、新しいストリームを開いたりデータグラムを送信したりできますが、アプリケーションはまもなく処理を終えてセッションを閉じることが期待されます。

ウェブアプリケーションは `draining` プロミスを使って、予想される終了に先回りして適切に対処できます。
たとえば、現在のタスクを自然な区切りまで完了してから、新しいセッションを開いて作業を続けることができます。

返されるプロミスは `WebTransport` オブジェクトの作成時に作成され、セッションがドレイン状態に入ると履行されます。
このプロミスにアクセスしたり、その履行を待ったりしても、何らかの動作が引き起こされるわけではありません。イベントを監視するのと同様に、セッションがドレインを開始したときに処理を実行できるようにするだけです。

## 例

### ドレイン時に新しいトランスポートへ移行する

まず、接続を作成し、使用可能になるまで待つ `initTransport()` 関数を定義します。

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // トランスポート接続を初期化
  const transport = new WebTransport(url);

  // ready が履行されると接続を使用できる
  await transport.ready;

  return transport;
}

let transport = await initTransport(url);
```

次に、サーバーからセッションがドレインを開始するという通知を待つ `migrateOnDraining()` 関数を定義します。
この関数は新しいトランスポートを作成して返し、古いトランスポートも閉じます。

```js
async function migrateOnDraining(url, oldTransport) {
  // サーバーの通知を受けるとプロミスが履行
  await oldTransport.draining;

  // データ配信を中断しないよう、代替セッションを開く
  const newTransport = await initTransport(url);

  // oldTransport ではなく newTransport で以降のデータを送信
  // …

  // 新しいセッションの使用開始後、古いセッションは不要
  oldTransport.close();

  return newTransport;
}

// await せずに呼び出す: ドレイン開始後に結果が返る
migrateOnDraining(url, transport).then((newTransport) => {
  transport = newTransport;
});
```

上記ではドレインの通知を受けてセッションを閉じていますが、別の仕組みでセッションが閉じられる場合にも対処する必要があります。
このコードでは、{{domxref("WebTransport.closed")}} が返すプロミスを待ち、セッションが正常に終了したか、予期せず終了したかをログに出力します。

```js-nolint
async function watchForClose(transport) {
  try {
    const { closeCode, reason } = await transport.closed;
    console.log(`セッションは正常に終了しました（コード ${closeCode}）：${reason}`);
  } catch (error) {
    // ドレインの通知前にセッションが突然閉じられることもある
    console.error(`セッションは予期せず終了しました: ${error}`);
  }
}

watchForClose(transport);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)<sup>(英語)</sup>
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "ストリーム API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)<sup>(英語)</sup>
