---
title: "FormData: delete() メソッド"
short-title: delete()
slug: Web/API/FormData/delete
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("XMLHttpRequest")}}

**`delete()`** は {{domxref("FormData")}} インターフェイスのメソッドで、`FormData` オブジェクトからキーとその値を削除します。

> **メモ:** このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
delete(name)
```

### 引数

- `name`
  - : 削除したいキーの名前です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

`delete()` を使用すると、キーとその値を削除することができます。

```js
formData.delete("username");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
