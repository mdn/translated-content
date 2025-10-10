---
title: "FormData: entries() メソッド"
short-title: entries()
slug: Web/API/FormData/entries
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`FormData.entries()`** メソッドは、この {{domxref("FormData")}} に含まれているすべてのキー/値のペアを走査する[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。それぞれのペアのキーは文字列オブジェクトで、値は文字列または {{domxref("Blob")}} のどちらかです。

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
entries()
```

### 引数

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

```plain
key1, value1
key2, value2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
