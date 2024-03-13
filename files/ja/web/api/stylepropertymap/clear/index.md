---
title: StylePropertyMap.clear()
slug: Web/API/StylePropertyMap/clear
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`clear()`** は {{domxref("StylePropertyMap")}} インターフェイスのメソッドで、 `StylePropertyMap` にあるすべての宣言を削除します。

## 構文

```js-nolint
clear()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下の例は、要素の [style 属性](/ja/docs/Web/HTML/Global_attributes/style)からすべてのスタイルを削除します。

```js
// button 要素を取得
const buttonEl = document.querySelector(".example");

// style 属性からすべてのスタイルを削除
buttonEl.attributeStyleMap.clear();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
