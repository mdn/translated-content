---
title: "`param()` 関数"
short-title: param()
slug: Web/CSS/Reference/Values/param
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{SeeCompatTable}}

**`param()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、リンクの引数を設定するために使用します。これは、CSS の {{cssxref("link-parameters")}} プロパティを使用したり、外部リソースのフラグメント URL 内や、CSS の `url()` 関数の [`<url-modifier>`](/ja/docs/Web/CSS/Reference/Values/url_function#url-modifier) 内で設定できます。

## 構文

```css
/* 単一の値 */
param(--color, red);

/* 複数の値 */
param(--color1, red),
param(--color2, blue),
param(--color3, green);
```

## 値

- [`<dashed-ident>`](/ja/docs/Web/CSS/Reference/Values/dashed-ident)
  - : `<dashed-ident>` は、CSS の {{cssxref("env")}} 関数内で識別子として使用され、値を更新するためのユーザー定義変数です。

- `<declaration_value>` {{optional_inline}}
  - : `<declaration_value>` は、更新される属性の値です。`<declaration-value>` を省略した場合は、空の値を表します。

## 形式文法

{{CSSSyntax}}

## 例

以下の例はすべて、CSS の {{cssxref("env")}} 関数で属性が設定された同じ SVG ファイルを使用しています。

```svg
<!-- 外部 SVG ファイル内のコードの例 -->
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="100"
    height="100"
    stroke="env(--color1, chartreuse)"
    stroke-width="10"
    fill="env(--color2, darkgreen)"
   />
</svg>
```

### `link-parameters` プロパティの使用

この例では、CSS の {{cssxref("link-parameters")}} プロパティと `param()` 関数によって、SVG 属性が更新されます。

```html
<div class="squares">
  <img
    class="original"
    src="square.svg"
    alt="シャルトリューズ色の境界線と濃い緑色の塗りつぶしがある正方形。" />
  <img
    class="greyscale"
    src="square.svg"
    alt="スレートグレーの境界線とライトグレーの塗りつぶしがある正方形。" />
  <img
    class="high-contrast"
    src="square.svg"
    alt="フクシア色の境界線と黄色の塗りつぶしがある正方形。" />
</div>
```

```css hidden
.squares {
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img {
  height: 100%;
}
```

```css-nolint
.greyscale {
  link-parameters:
    param(--color1, slategrey),
    param(--color2, lightgrey);
  &:hover {
    link-parameters:
      param(--color1, lightgrey),
      param(--color2, slategrey);
  }
}
.high-contrast {
  link-parameters:
    param(--color1, fuchsia),
    param(--color2, yellow);
  &:hover {
    link-parameters:
      param(--color1, yellow),
      param(--color2, fuchsia);
  }
}
```

{{EmbedLiveSample('using_link-parameters_property', '100%', '210px')}}

### `param()` を URL 修飾子に渡す

この例では、HTML の {{htmlelement("img")}} 要素の [`src`](/ja/docs/Web/HTML/Reference/Elements/img#src) 属性の URL フラグメントに `param()` 関数を渡すことで、SVG 属性が更新されます。

```html-nolint
<img
  src="square.svg#param(--color1, slategrey)&param(--color2, lightgrey)"
  alt="スレートグレーの境界線とライトグレーの塗りつぶしをつけている正方形。"
/>
```

### `param()` を `background-image` プロパティと共に使用

この例では、CSS の {{cssxref("background-image")}} プロパティの {{cssxref("url","url()")}} データ型に `param()` 関数を渡すことで、SVG 属性が更新されます。

```css-nolint
.foo {
  background-image: url(
    "square.svg"
    param(--color1, slategrey)
    param(--color2, lightgrey)
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("link-parameters")}}
- {{cssxref("env")}}
