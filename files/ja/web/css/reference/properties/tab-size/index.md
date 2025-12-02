---
title: tab-size
slug: Web/CSS/Reference/Properties/tab-size
original_slug: Web/CSS/tab-size
l10n:
  sourceCommit: 82877d5cf5a35e0a4d02b7c54aea0ce7d771d5cb
---

CSS の **`tab-size`** プロパティは、タブ文字 (U+0009) の表示幅の指定に用います。

{{InteractiveExample("CSS デモ: tab-size")}}

```css interactive-example-choice
tab-size: 10px;
```

```css interactive-example-choice
tab-size: 16px;
```

```css interactive-example-choice
tab-size: 24px;
```

```css interactive-example-choice
tab-size: 4;
```

```html interactive-example
<section id="default-example">
  <pre id="example-element">  123</pre>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid;
}
```

## 構文

```css
/* <number> 値 */
tab-size: 4;
tab-size: 0;

/* <length> 値 */
tab-size: 10px;
tab-size: 2em;

/* グローバル値 */
tab-size: inherit;
tab-size: initial;
tab-size: revert;
tab-size: revert-layer;
tab-size: unset;
```

### 値

- {{CSSxRef("&lt;number&gt;")}}
  - : タブの幅として使用する空白文字 (U+0020) のアドバンス幅の倍数です。負の値であってはなりません。アドバンス幅とは、次の文字が出力される前に、カーソルまたは印字ヘッドが移動する距離ということになります。
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

### 既定のタブサイズとカスタムサイズ

この例では、既定のタブの大きさとカスタムのタブの大きさを比較しています。タブがつぶれないように、 {{cssxref("white-space")}} を `pre` に設定していることに注意してください。

#### HTML

```html
<p>タブなし</p>
<p>&#0009;既定の 8 文字幅のタブサイズ</p>
<p class="custom-number">&#0009;3 文字幅のカスタムタブサイズ</p>
<p>&nbsp;&nbsp;&nbsp;カスタムタブサイズと同じ 3 文字の空白</p>
<p class="custom-length">&#0009;50px 幅のカスタムタブサイズ</p>
```

#### CSS

```css hidden
body {
  border: 1px solid red;
  margin: 1rem;
}
```

```css
p {
  white-space: pre;
}

.custom-number {
  tab-size: 3;
}

.custom-length {
  tab-size: 50px;
}
```

#### 結果

{{EmbedLiveSample("Comparing_to_the_default_size", "100%", "250")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('white-space')}}
