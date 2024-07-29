---
title: "FormData: append() メソッド"
short-title: append()
slug: Web/API/FormData/append
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`append()`** は {{domxref("FormData")}} インターフェイスのメソッドで、`FormData` オブジェクト内の既存のキーに新しい値を追加します。キーがまだ存在しない場合は追加します。

{{domxref("FormData.set", "set()")}} と `append()` の違いは、指定されたキーが既に存在する場合、`set()` は既存のすべての値を新しい値で上書きすることです。 一方、`append()` は、既存の値のセットの最後に新しい値を追加します。

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
append(name, value)
append(name, value, filename)
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
formData.append("username", "Chris");
```

値が {{domxref("Blob")}} （または {{domxref("File")}}）である場合、`filename` 引数でそのファイル名を指定します。

```js
formData.append("userpic", myFileInput.files[0], "chris.jpg");
```

通常のフォームデータと同様に、同じ名前の複数の値を追加することができます。

```js
formData.append("userpic", myFileInput.files[0], "chris1.jpg");
formData.append("userpic", myFileInput.files[1], "chris2.jpg");
```

値が文字列でも `Blob` でもない場合、`append()` は自動的に文字列に変換します。

```js
formData.append("name", true);
formData.append("name", 72);
formData.getAll("name"); // ["true", "72"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
