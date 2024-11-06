---
title: StylePropertyMap.set()
slug: Web/API/StylePropertyMap/set
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`set()`** は {{domxref("StylePropertyMap")}} インターフェイスのメソッドで、指定したプロパティの CSS 宣言を変更します。

## 構文

```js-nolint
set(property, value)
```

### 引数

- `property`
  - : 変更するスタイル特性（フォント、幅、背景色など）を示す識別子です。
- `value`
  - : 指定されたプロパティが持つべき値です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、要素の [style 属性](/ja/docs/Web/HTML/Global_attributes/style)の中で、 {{cssxref('padding-top')}} プロパティを指定された値に設定しています。

```js
// button 属性を取得
const buttonEl = document.querySelector("button");

// button の style 属性で padding-top を設定
buttonEl.attributeStyleMap.set("padding-top", CSS.px(10));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
