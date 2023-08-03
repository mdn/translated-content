---
title: Response.formData()
slug: Web/API/Response/formData
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Fetch")}}

**`formData()`** は {{domxref("Response")}} インターフェイスのメソッドで、 {{domxref("Response")}} のストリームを取得して完全に読み取ります。 {{domxref("FormData")}} オブジェクトで解決されるプロミスを返します。

> **メモ:** これは主に[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)に関連しています。 ユーザーがフォームを送信し、サービスワーカーがリクエストに介入した場合を考えてみましょう。 例えば、キーと値のマップを取得するために `formData()` を呼び出し、一部のフィールドを修正した後、フォームをサーバー側に送信 (またはローカルで使用) することができます。

## 構文

```js-nolint
formData()
```

### 引数

なし。

### 返値

{{domxref("FormData")}} オブジェクトで解決される {{jsxref("Promise")}}。

## 例

TBD.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
