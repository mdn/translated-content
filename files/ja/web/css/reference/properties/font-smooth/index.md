---
title: font-smooth
slug: Web/CSS/Reference/Properties/font-smooth
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{ Non-standard_header }}

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
font-smooth: revert-layer;
font-smooth: unset;
```

> [!NOTE]
> WebKit は同様のプロパティを別な値 **`-webkit-font-smoothing`** として実装しています。これは macOS でのみ動作します。
>
> - `auto` - ブラウザーの決定に任せる (利用可能であればアンチエイリアスのサブピクセルを使用します。これがデフォルト値)
> - `none` - フォントを滑らかにする処理をオフにします。表示されるテキストの辺はギザギザで鮮明になります。
> - `antialiased` - サブピクセルではなく、ピクセルレベルでフォントを滑らかにします。暗い背景に明るい文字の場合、サブピクセルレンダリングからアンチエイリアスに切り替えることで、より明るく見えるようになります。
> - `subpixel-antialiased` - 多くの非 Retina ディスプレイでは、これが最も鮮明なテキストになります。

> [!NOTE]
> Firefox は同様のプロパティを別な値 **`-moz-osx-font-smoothing`** として実装しています。これは macOS でのみ動作します。
>
> - `auto` - フォントを滑らかにする処理の最適化をブラウザーが選択します。ふつうは `grayscale` です。
> - `grayscale` - サブピクセルではなくグレースケールのアンチエイリアスで、テキストを描画します。暗い背景に明るいテキストを表示する際に、サブピクセルレンダリングからアンチエイリアシングに切り替えることで、より明るく見えるようになります。

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntaxRaw(`font-smooth = auto | never | always | <absolute-size> | <length>`)}}

## 例

### 基本的な使い方の例

次の例は、macOS でフォントの円滑化をオンにした Safari/Chromium と Firefox に相当するものです。いずれの場合も円滑化されたフォントは、わずかに細くなったように見えるはずです。

macOS システムをお使いでない方のために、スクリーンショットをご紹介します（ライブ版は後ほど登場します）。

![font-smooth プロパティを適用したテキストと、適用していないテキストの 2 つの例です](smoothing.png)

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

どの標準にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Please Stop "Fixing" Font Smoothing](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/) - Dmitry Fadeyev (2012)
- [Laissez-faire font smoothing and anti-aliasing](https://www.zachleat.com/web/font-smooth/) - Zach Leatherman (2017)
- [Improve text rendering (A Modern CSS Reset)](https://www.joshwcomeau.com/css/custom-css-reset/#five-improve-text-rendering-6) - Josh W. Comeau (2021)
- [What's the deal with WebKit Font Smoothing?](https://dbushell.com/2024/11/05/webkit-font-smoothing/) - David Bushell (2024)
