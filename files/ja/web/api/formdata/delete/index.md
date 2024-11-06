---
title: "FormData: delete() メソッド"
short-title: delete()
slug: Web/API/FormData/delete
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`delete()`** は {{domxref("FormData")}} インターフェイスのメソッドで、`FormData` オブジェクトからキーとその値を削除します。

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

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

- [FormData オブジェクトの使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
