---
title: ':nth-of-type()'
slug: Web/CSS/:nth-of-type
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.nth-of-type
translation_of: Web/CSS/:nth-of-type
---
{{CSSRef}}

**`:nth-of-type()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中で指定された型 (タグ名) の要素を、位置に基づいて選択します。

```css
/* 兄弟の <p> 要素の中で、
   3 つおきに選択 */
p:nth-of-type(4n) {
  color: lime;
}
```

## 構文

`nth-of-type` 擬似クラスは、要素を選択する最後から数えるパターンを表す引数を 1 つ取ります。

構文の詳しい説明は {{Cssxref(":nth-child")}} を参照してください。

### 形式文法

{{csssyntax}}

## 例

### 基本的な例

#### HTML

```html
<div>
  <div>This element isn't counted.</div>
  <p>1st paragraph.</p>
  <p class="fancy">2nd paragraph.</p>
  <div>This element isn't counted.</div>
  <p class="fancy">3rd paragraph.</p>
  <p>4th paragraph.</p>
</div>
```

#### CSS

```css
/* 奇数の段落 */
p:nth-of-type(2n+1) {
  color: red;
}

/* 偶数の段落 */
p:nth-of-type(2n) {
  color: blue;
}

/* 最初の段落 */
p:nth-of-type(1) {
  font-weight: bold;
}

/* これは 2n+1 であり、かつ fancy のクラスを持つ要素に一致するので、第 3 段落に一致します。
2 番目の段落は fancy というクラスを持っていますが、 :nth-of-type(2n+1) ではないので一致しません。 */
p.fancy:nth-of-type(2n+1) {
  text-decoration: underline;
}
```

#### 結果

{{EmbedLiveSample('Basic_example', 250, 250)}}

> **Note:** このセレクターを使用して n 番目のクラスを選択する方法はありません。このセレクターは、一致するリストを作成する際に型だけを見ます。しかし、上の例のように `:nth-of-type` の位置**と**クラスに基づいて要素に CSS を適用することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
