---
title: <meta name="theme-color">
short-title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`theme-color`** は {{htmlelement("meta")}} 要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性の値で、ユーザーエージェントがページやその周辺のユーザーインターフェイスの表示をカスタマイズするために使用すべき推奨色を示します。指定された場合、 [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content) 属性には有効な CSS の {{cssxref("&lt;color&gt;")}} が含まれていなければなりません。

例えば、文書でテーマカラーとして `cornflowerblue` を使用することを示すには、`<meta>` を次のように設定します。

```html
<meta name="theme-color" content="cornflowerblue" />
```

テーマカラーのメタデータが適用されるメディアを設定するには、有効なメディアクエリーリストを含む [`media`](/ja/docs/Web/HTML/Reference/Elements/meta#media) 属性を記載します（[`theme-color` メディアクエリーの例](#メディアクエリーと_theme-color_を使用)を参照してください）。

## 使用上のメモ

`<meta name="theme-color">` 要素には、次の追加属性が存在します。

- [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content)
  - : `name=theme-color` に対応する `<meta>` 要素には、テーマカラーを定義する `content` 属性を指定する必要があります。
    `content` 属性の値は次のとおりです。
    - {{cssxref("&lt;color&gt;")}} 値
      - : 16 進数、RGB、名前付き色など、有効な色の値です。
- `media` {{optional_inline}}
  - : 有効なメディア種別またはクエリー。
    指定された場合、メディアクエリーが一致すると、 `content` 属性で定義された文書のテーマカラーのオプションがブラウザーに提案されます。

## 例

### 色値の設定

`<meta>` を使用してテーマの色を設定する次のコードを考えてみましょう。

```html
<meta name="theme-color" content="#4285f4" />
```

次の画像は、上記の {{htmlelement("meta")}} 要素が、 Android モバイル端末上で動作する Chrome で表示された文書に与える影響を示しています。

![theme-color を使用した影響を表す図](theme-color.png)

_画像の出典: [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors) より、 Google が作成・共有し [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/) に記載された条件に従って使用されています。_

### メディアクエリーと `theme-color` の使用

[`media`](/ja/docs/Web/HTML/Reference/Elements/meta#media) 属性で、メディア種別やクエリーを指定することができ、メディアの条件が真である場合にのみ、色が設定されます。例えば、以下のようになります。

```html
<meta
  name="theme-color"
  content="cornflowerblue"
  media="(prefers-color-scheme: light)" />
<meta
  name="theme-color"
  content="dimgray"
  media="(prefers-color-scheme: dark)" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `<meta>` `name` 属性の [`color-scheme`](/ja/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) 値
- CSS の {{cssxref("color-scheme")}} プロパティ
- [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) メディアクエリー
