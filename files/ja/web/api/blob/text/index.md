---
title: "Blob: text() メソッド"
short-title: text()
slug: Web/API/Blob/text
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`text()`** は {{domxref("Blob")}} インターフェイスのメソッドで、 {{jsxref("Promise")}} を返しますが、それは Blob の内容を含む文字列で解決され、 UTF-8 として解釈されます。

## 構文

```js-nolint
text()
```

### 引数

なし。

### 返値

Blob のデータをテキスト文字列として含む文字列で解決するプロミス。データは*常に* UTF-8 形式であると推定されます。

## 使用上のメモ

{{domxref("FileReader")}} の {{domxref("FileReader.readAsText", "readAsText()")}} メソッドは、同様の機能を実行する古いメソッドです。これは、`Blob` と {{domxref("File")}} オブジェクトの両方で動作します。主な違いは 2 つあります。

- `Blob.text()` がプロミスを返すのに対し、 `FileReader.readAsText()` はイベントベースの API です
- `Blob.text()` は常にエンコーディングとして UTF-8 を使用しますが、`FileReader.readAsText()` は Blob の種類と指定されたエンコーディング名に応じて、異なるエンコーディングを使用することができます

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.text()")}}
- [ストリーム API](/ja/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsText()")}}
