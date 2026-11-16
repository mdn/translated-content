---
title: "WebTransport: protocol プロパティ"
short-title: protocol
slug: Web/API/WebTransport/protocol
l10n:
  sourceCommit: 8413520d9fd826c98db89ff8165408139635d454
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`protocol`** は {{domxref("WebTransport")}} インターフェイスの読み取り専用プロパティで、サーバーが選択したアプリケーション固有のプロトコルを返します。

この値は [`protocols`](/ja/docs/Web/API/WebTransport/WebTransport#protocols) コンストラクターオプションで提示したプロトコルの中から選択されます。
値は {{domxref("WebTransport.ready", "ready")}} プロミスが履行された時点で設定されます。
`protocols` を使用しなかった場合、またはサーバーが提示されたプロトコルを選択しなかった場合、空文字列になります。

## 値

文字列です。
デフォルト値は `""` です。

## 例

### ネゴシエーションされたプロトコルを要求して読み取る

この例では、候補となるプロトコル群を要求し、サーバーが選択したプロトコルを読み取る方法を示します。

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  const transport = new WebTransport(url, {
    protocols: ["chat", "file-transfer"],
  });

  try {
    // ready が履行されると接続を使用できる
    await transport.ready;
    console.log(transport.protocol); // 例: "chat"、または選択されなかった場合は ""
    return transport;
  } catch (error) {
    // 提示したプロトコルに対応していない場合、ready は拒否されることがある
    console.error(`接続に失敗しました: ${error}`);
  }
}

initTransport(url);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
