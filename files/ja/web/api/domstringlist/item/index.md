---
title: "DOMStringList: item() メソッド"
short-title: item()
slug: Web/API/DOMStringList/item
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`item()`** メソッドは、[`DOMStringList`](/ja/docs/Web/API/DOMStringList) からインデックスによって文字列を返します。

## 構文

```js-nolint
item(index)
```

JavaScript では `DOMStringList` からインデックスで項目を取得するための配列風の括弧構文も提供しています。

```js
list[index];
```

### 引数

- `index`
  - : 取得する文字列のインデックス。インデックスはゼロ起点です。

### 返値

`DOMStringList` のインデックスの位置にある文字列です。指定されたインデックスが範囲外である場合は `null` です。

### 例外

- {{jsxref("TypeError")}}
  - : 引数が指定されなかった場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
