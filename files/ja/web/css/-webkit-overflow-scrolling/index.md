---
title: "-webkit-overflow-scrolling"
slug: Web/CSS/-webkit-overflow-scrolling
---

{{CSSRef}} {{Non-standard_header}}

`-webkit-overflow-scrolling` は [CSS](/ja/docs/Web/CSS) のプロパティは、指定された要素で惰性付き (momentum-based) スクロールを使用するかどうかを制御します。

## 構文

### 値

- `auto`
  - : 「通常」のスクロールで、タッチパネルから指を離すとすぐにコンテンツはスクロールが停止します。
- `touch`
  - : 惰性付きのスクロールで、コンテンツはスクロールのジェスチャーが終了し、タッチパネルから指を離した後もスクロールを続けます。スクロールを続ける速度と期間は、スクロールのジェスチャーがどれだけすばやく行われたかによります。また、新しい重ね合わせコンテキストを生成します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<div class="scroll-touch">
  <p>This paragraph has momentum scrolling</p>
</div>
<div class="scroll-auto">
  <p>This paragraph does not.</p>
</div>
```

### CSS

```css
div {
  width: 100%;
  overflow: auto;
}

p {
  width: 200%;
  background: #f5f9fa;
  border: 2px solid #eaf2f4;
  padding: 10px;
}

.scroll-touch {
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
}

.scroll-auto {
  -webkit-overflow-scrolling: auto; /* Stops scrolling immediately */
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

仕様書では定義されていません。 Apple には [Safari CSS Reference に説明](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling)があります。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS-Tricks article with demo](https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
- [Smashing Magazine - describing the effect of scroll bouncing and how it works on different web browsers](https://www.smashingmagazine.com/2018/08/scroll-bouncing-websites/)
- [Safari 13 Release notes](https://developer.apple.com/documentation/safari_release_notes/safari_13_release_notes): すべてのフレームと `overflow:scroll` 要素に、一本指による高速スクロールの対応が追加され、`-webkit-overflow-scrolling: touch` を設定する必要がなくなったことを示しています。
