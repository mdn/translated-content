---
title: "FormData: entries() メソッド"
short-title: entries()
slug: Web/API/FormData/entries
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("XMLHttpRequest")}}

**`FormData.entries()`** メソッドは、この {{domxref("FormData")}} に含まれているすべてのキー/値のペアを走査する[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。それぞれのペアのキーは文字列オブジェクトで、値は文字列または {{domxref("Blob")}} のどちらかです。

> **メモ:** このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
entries()
```

### 返値

なし。

### 返値

{{domxref("FormData")}} のキー/値のペアの[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)です。

## 例

```js
formData.append("key1", "value1");
formData.append("key2", "value2");

// キー/値のペアを表示
for (const pair of formData.entries()) {
  console.log(`${pair[0]}, ${pair[1]}`);
}
```

結果は次のとおりです。

```
key1, value1
key2, value2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
