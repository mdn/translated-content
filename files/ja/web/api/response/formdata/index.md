---
title: "Response: formData() メソッド"
short-title: formData()
slug: Web/API/Response/formData
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

**`formData()`** は {{domxref("Response")}} インターフェイスのメソッドで、 {{domxref("Response")}} のストリームを取得して完全に読み取ります。 {{domxref("FormData")}} オブジェクトで解決されるプロミスを返します。

> [!NOTE]
> これは主に[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)に関連しています。
> ユーザーがフォームを送信し、サービスワーカーがリクエストに介入した場合を考えてみましょう。
> 例えば、キーと値のマップを取得するために `formData()` を呼び出し、一部のフィールドを修正した後、フォームをサーバー側に送信 (またはローカルで使用) することができます。

## 構文

```js-nolint
formData()
```

### 引数

なし。

### 返値

{{domxref("FormData")}} オブジェクトで解決される {{jsxref("Promise")}}。

### 例外

- {{domxref("DOMException")}} `AbortError`
  - : リクエストが[中止された](/ja/docs/Web/API/Fetch_API/Using_Fetch#リクエストの中止)場合。
- {{jsxref("TypeError")}}
  - : 以下のいずれかの原因で発生します。
    - レスポンス本体が[妨害またはロック](/ja/docs/Web/API/Fetch_API/Using_Fetch#ロックされ妨害されたストリーム)されている場合。
    - 本体コンテンツをデコードする際にエラーが発生した場合（例えば、{{httpheader("Content-Encoding")}} ヘッダーが不正な場合など）。
    - 本体の {{glossary("MIME")}} タイプが、レスポンスに含まれる {{httpheader("Content-Type")}} ヘッダーから判断できない場合。
    - 本体が `FormData` オブジェクトとして解釈できない場合。

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
