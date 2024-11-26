---
title: "FormData: has() メソッド"
short-title: has()
slug: Web/API/FormData/has
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`has()`** は {{domxref("FormData")}} インターフェイスのメソッドで、`FormData` オブジェクトに指定されたキーがあるかどうかを返します。

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
has(name)
```

### 引数

- `name`
  - : 検査を行うキーの名前を表す文字列です。

### 返値

`FormData` に `name` と一致するキーがあれば `true` です。そうでなければ `false` です。

## 例

以下のスニペットは、`FormData` オブジェクトの `username` の値を {{domxref("FormData.append", "append()")}} で追加する前と後で `username` が存在するかどうかテストした結果を示します。

```js
formData.has("username"); // false を返す
formData.append("username", "Chris");
formData.has("username"); // true を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
