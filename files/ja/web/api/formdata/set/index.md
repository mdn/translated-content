---
title: "FormData: set() メソッド"
short-title: set()
slug: Web/API/FormData/set
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("XMLHttpRequest")}}

**`set()`** は {{domxref("FormData")}} インターフェイスのメソッドで、`FormData` オブジェクト内の既存のキーに値を追加したり、存在しないキーと値の組を追加したりします。

`set()` と {{domxref("FormData.append", "append()")}} の違いは、指定されたキーが既に存在した場合、`set()` は既存のすべての値を新しい値で上書きすることです。 一方、`append()` は、既存の値のセットの末尾に新しい値を追加します。

> **メモ:** このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
set(name, value)
set(name, value, filename)
```

### 引数

- `name`
  - : `value` にあるデータのフィールド名です。
- `value`
  - : フィールドの値です。文字列または {{domxref("Blob")}}（{{domxref("File")}} などのサブクラスを含む）です。これらの何れでもないものが指定された場合、値は文字列に変換されます。
- `filename` {{optional_inline}}
  - : 第 2 引数に {{domxref("Blob")}} または {{domxref("File")}} を渡した場合に、サーバーに報告されるファイル名（文字列）です。{{domxref("Blob")}} オブジェクトの既定のファイル名は "blob" です。{{domxref("File")}} オブジェクトの既定値は、ファイルのファイル名です。

> **メモ:** `FormData` オブジェクトに追加するデータとして {{domxref("Blob")}} を指定した場合、"Content-Disposition" ヘッダーでサーバーに報告されるファイル名はブラウザーによって異なることがあります。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
formData.set("username", "Chris");
```

値が {{domxref("Blob")}}（または {{domxref("File")}}）である場合、その名前を `filename` で指定することができます。

```js
formData.set("userpic", myFileInput.files[0], "chris.jpg");
```

この値が文字列または `Blob` でない場合、`set()` は自動的にそれを文字列に変換します。

```js
formData.set("name", 72);
formData.get("name"); // "72"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
