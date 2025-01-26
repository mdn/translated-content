---
title: "WebSocket: WebSocket() コンストラクター"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("Web Sockets API")}}

**`WebSocket()`** コンストラクターは、新しい {{domxref("WebSocket")}} オブジェクトを返します。

## 構文

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### 引数

- `url`
  - : 接続先の URL です。この URL は WebSocket サーバーが応答するものでなければなりません。
- `protocols` {{optional_inline}}

  - : 単一のプロトコル文字列、またはプロトコル文字列の配列のいずれか。これらの文字列はサブプロトコルを示すために使用され、単一のサーバーで複数の WebSocket サブプロトコルを実装することもできます（たとえば、単一のサーバーで指定した `protocol` に応じて異なる種類のやりとりを処理できるようにしたい場合があります）。

    省略された場合は、空配列、すなわち `[]` が既定で使用されます。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 次のような場合に発生します。
    - [`url`](#url) の解釈に失敗した場合
    - [`url`](#url) のスキームが `ws` または `wss` 以外であった場合
    - [`url`](#url) に[フラグメント](/ja/docs/Web/URI#フラグメント)があった場合
    - [`protocols`](#protocols) の何れかの値が複数回現れている、または WebSocket プロトコル仕様で定義された [`Sec-WebSocket-Protocol`](/ja/docs/Web/HTTP/Protocol_upgrade_mechanism#sec-websocket-protocol) フィールドの値を構成する要素の要件に一致しない場合。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) （WebSocket プロトコル仕様書）
