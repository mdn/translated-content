---
title: font-smooth
slug: Web/CSS/font-smooth
tags:
  - CSS
  - CSS プロパティ
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.font-smooth
translation_of: Web/CSS/font-smooth
---
{{ CSSRef }} {{ Non-standard_header }}

**`font-smooth`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントが描画されるときのアンチエイリアスの適用を制御します。

## 構文

```css
/* キーワード値 */
font-smooth: auto;
font-smooth: never;
font-smooth: always;

/* <length> 値 */
font-smooth: 2em;

/* グローバル値 */
font-smooth: inherit;
font-smooth: initial;
font-smooth: revert;
font-smooth: unset;
```

> **Note:** WebKit は同様のプロパティを別な値 **`-webkit-font-smoothing`** として実装しています。これは Mac OS X/macOS でのみ動作します。
>
> - `auto` - ブラウザーの決定に任せる (利用可能であればアンチエイリアスのサブピクセルを使用します。これが既定値)
> - `none` - フォントを滑らかにする処理をオフにします。表示されるテキストの辺はギザギザで鮮明になります。
> - `antialiased` - サブピクセルではなく、ピクセルレベルでフォントを滑らかにします。暗い背景に明るい文字の場合、サブピクセルレンダリングからアンチエイリアスに切り替えることで、より明るく見えるようになります。
> - `subpixel-antialiased` - 多くの非 retina ディスプレイでは、これが最も鮮明なテキストになります。

> **Note:** Firefox は同様のプロパティを別な値 **`-moz-osx-font-smoothing`** として実装しています。これは Mac OS X/macOS でのみ動作します。
>
> - `auto` - フォントを滑らかにする処理の最適化をブラウザーが選択します。ふつうは `grayscale` です。
> - `grayscale` - サブピクセルではなくグレースケールのアンチエイリアスで、テキストを描画します。暗い背景に明るいテキストを表示する際に、サブピクセルレンダリングからアンチエイリアシングに切り替えることで、より明るく見えるようになります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Basic_usage_example">基本的な使い方の例</h3>

次の例は、macOS でフォントの円滑化をオンにした Safari/Chromium と Firefox に相当するものです。いずれの場合も円滑化されたフォントは、わずかに細くなったように見えるはずです。

macOS システムをお使いでない方のために、スクリーンショットをご紹介します (ライブバージョンは後ほど登場します)。

![](smoothing.png)

#### HTML

```html
<p>Without font smoothing</p>

<p class="smoothed">With font smoothing</p>
```

#### CSS

```css
html {
  background-color: black;
  color: white;
  font-size: 3rem;
}

p {
  text-align: center;
}

.smoothed {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### 結果

{{EmbedLiveSample('Basic_usage_example', '100%', 260)}}

## 仕様書

どの仕様書にも定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Please Stop "Fixing" Font Smoothing – UsabilityPost](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
- [Laissez-faire font smoothing and anti-aliasing](https://www.zachleat.com/web/font-smooth/)
