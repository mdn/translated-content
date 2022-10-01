---
title: Blob.text()
slug: Web/API/Blob/text
---

{{APIRef("File API")}}

{{domxref("Blob")}} インターフェイスの **`text()`** メソッドは {{jsxref("Promise")}} を返しますが、それは Blob の内容を含む文字列で解決され、UTF-8 として解釈されます。

## シンタックス

```
var textPromise = blob.text();

blob.text().then(text => /* テキストに対して処理をする */);

var text = await blob.text();
```

### パラメータ

なし

### 戻り値

Blob のデータをテキスト文字列として含む {{domxref("USVString")}} で解決する Promise。データは*常に* UTF-8 形式であると推定されます。

## 使用上のメモ

{{domxref("FileReader")}} メソッド {{domxref("FileReader.readAsText", "readAsText()")}} は、同様の機能を実行する古いメソッドです。これは、`Blob` と {{domxref("File")}} オブジェクトの両方で動作します。主な違いは 2 つあります。

- `Blob.text()` が Promise を返すのに対し、`FileReader.readAsText()` はイベントベースの API です
- `Blob.text()` は常にエンコーディングとして UTF-8 を使用しますが、`FileReader.readAsText()` は Blob のタイプと指定されたエンコーディング名に応じて異なるエンコーディングを使用することができます

## 仕様

| 仕様書                                                                       | ステータス                   | コメント |
| ---------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("File API", "#dom-blob-text", "Blob.text()")}} | {{Spec2("File API")}} |          |

## ブラウザの互換性

{{Compat("api.Blob.text")}}

## あわせて参照

- {{domxref("Body.text()")}}
- [Streams API](/ja/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsText()")}}
