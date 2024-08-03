---
title: "FormData: getAll() メソッド"
short-title: getAll()
slug: Web/API/FormData/getAll
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`getAll()`** は {{domxref("FormData")}} インターフェイスのメソッドで、`FormData` オブジェクト内から指定されたキーに関連付けられたすべての値を返します。

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
getAll(name)
```

### 引数

- `name`
  - : 取得したいキーの名前を表す文字列です。

### 返値

キーが指定した `name` と一致する値の配列です。そうでない場合は、空のリストです。

## 例

{{domxref("FormData")}} に、{{domxref("FormData.append", "append()")}} を用いて `username` の値を 2 つ追加したとします。

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

以下の `getAll()` メソッドは、配列で `username` の値を両方とも返します。

```js
formData.getAll("username"); // Returns ["Chris", "Bob"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
