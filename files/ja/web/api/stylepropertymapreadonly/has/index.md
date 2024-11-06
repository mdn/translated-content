---
title: StylePropertyMapReadOnly.has()
slug: Web/API/StylePropertyMapReadOnly/has
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`has()`** は {{domxref("StylePropertyMapReadOnly")}} インターフェイスのメソッドで、指定されたプロパティが `StylePropertyMapReadOnly` オブジェクトにあるかどうかを示します。

## 構文

```js
var boolean = StylePropertyMapReadOnly.has(property);
```

### 引数

- property
  - : プロパティの名前です。

### 返値

論理値です。

## 例

ここでは、 `has()` メソッドを使用して、 padding-top プロパティが button 要素の style 属性に存在するかどうかを確認します。

```js
// button 要素を取得
const buttonEl = document.querySelector('.example');

// style 属性内のものを attributeStyleMap および has() で検索
const hasPadTop = buttonEl.attributeStyleMap.has('padding-top);

console.log(hasPadTop); // padding-top が style 属性にあれば true を記録
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
