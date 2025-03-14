---
title: theme-color
slug: Web/HTML/Element/meta/name/theme-color
---

{{HTMLSidebar}}

**`theme-color`** の値は {{htmlelement("meta")}} 要素の [`name`](/ja/docs/Web/HTML/Element/meta#name) 属性において、ユーザーエージェントがページやその周辺のユーザーインターフェイスの表示をカスタマイズするために使用すべき推奨色を示します。指定された場合、 [`content`](/ja/docs/Web/HTML/Element/meta#content) 属性には有効な CSS の {{cssxref("&lt;color&gt;")}} が含まれていなければなりません。

## 例

```html
<meta name="theme-color" content="#4285f4" />
```

次の画像は、上記の {{htmlelement("meta")}} 要素が、 Android モバイル端末上で動作する Chrome で表示された文書に与える影響を示しています。

![theme-color を使用した影響を表す図](theme-color.png)
_画像の出典: [Icons & Browser Colors](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization) より、[Google](https://developers.google.com/readme/policies) が作成・共有し [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/) に記載された条件に従って使用されています。_

[`media`](/ja/docs/Web/HTML/Element/meta#media) 属性で、メディア種別やクエリーを指定することができ、メディアの条件が真である場合にのみ、色が設定されます。例えば、以下のようになります。

```html
<meta
  name="theme-color"
  media="(prefers-color-scheme: light)"
  content="white" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
