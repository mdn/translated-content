---
title: "FormData: get() メソッド"
short-title: get()
slug: Web/API/FormData/get
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`get()`** は {{domxref("FormData")}} インターフェイスのメソッドで、`FormData` オブジェクトの中から、指定されたキーに関連付けられた最初の値を返します。複数の値を期待し、すべてが欲しい場合は、代わりに {{domxref("FormData.getAll()","getAll()")}} メソッドを使用してください。

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
get(name)
```

### 引数

- `name`
  - : 取得したいキーの名前を表す文字列です。

### 返値

指定された `name` に一致するキーの値です。見つからなければ [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) です。

## 例

2 つの `username` 値を {{domxref("FormData")}} に、{{domxref("FormData.append", "append()")}} を使って追加した場合、

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

次の `get()` メソッドは最初の `username` 値のみを返します。

```js
formData.get("username"); // "Chris" を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
