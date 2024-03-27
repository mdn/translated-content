---
title: StylePropertyMap.delete()
slug: Web/API/StylePropertyMap/delete
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`delete()`** は {{domxref("StylePropertyMap")}} インターフェイスのメソッドで、指定されたプロパティの CSS 宣言を削除します。

## 構文

```js-nolint
delete(property)
```

### 引数

- `property`
  - : 削除するスタイル特性（フォント、幅、背景色など）を示す識別子です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下の例では、要素の [style 属性](/ja/docs/Web/HTML/Global_attributes/style)から {{cssxref('background-image')}} プロパティを削除します。

```js
// button 要素を取得
const buttonEl = document.querySelector("button");

// スタイル属性から background-image を削除
buttonEl.attributeStyleMap.delete("background-image");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
