---
title: tab-size
slug: Web/CSS/tab-size
tags:
  - CSS
  - CSS プロパティ
  - CSS テキスト
  - Reference
  - recipe:css-property
browser-compat: css.properties.tab-size
translation_of: Web/CSS/tab-size
---
{{CSSRef}}

CSS の **`tab-size`** プロパティは、タブ文字 (U+0009) の表示幅の指定に用います。

## 構文

```css
/* <integer> 値 */
tab-size: 4;
tab-size: 0;

/* <length> 値 */
tab-size: 10px;
tab-size: 2em;

/* グローバル値 */
tab-size: inherit;
tab-size: initial;
tab-size: revert;
tab-size: unset;
```

### 値

- {{CSSxRef("&lt;integer&gt;")}}
  - : タブの幅として使用される空白文字（U+0020）の幅の倍数です。正の数でなければなりません。
- {{CSSxRef("&lt;length&gt;")}}
  - : タブの幅です。正の数でなければなりません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 文字数による展開

```css
pre {
  tab-size: 4; /* スペース 4 つ分となります */
}
```

### タブの折り畳み

```css
pre {
  tab-size: 0; /* インデント除去 */
}
```

<h3 id="Comparing_to_the_default_size">既定の大きさの比較</h3>

この例では、既定のタブの大きさとカスタムのタブの大きさを比較しています。タブがつぶれないように、 {{cssxref("white-space")}} を `pre` に設定していることに注意してください。

#### HTML

```html
<p>no tab</p>
<p>&#0009;default tab size of 8 characters wide</p>
<p class="custom">&#0009;custom tab size of 3 characters wide</p>
<p>&nbsp;&nbsp;&nbsp;3 spaces, equivalent to the custom tab size</p>
```

#### CSS

```css
p {
  white-space: pre;
}

.custom {
  tab-size: 3;
  -moz-tab-size: 3;
}
```

#### 結果

{{EmbedLiveSample('Comparing_to_the_default_size')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Controlling size of a tab character (U+0009)](https://lists.w3.org/Archives/Public/www-style/2008Dec/0009.html) - Anne van Kesteren 氏 (Opera) からの CSSWG へのメール
