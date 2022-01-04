---
title: ':not()'
slug: Web/CSS/:not
tags:
  - ':not()'
  - CSS
  - レイアウト
  - 否定
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.not
translation_of: Web/CSS/:not
---
{{CSSRef}}

**`:not()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、列挙されたセレクターに一致しない要素を表します。特定の項目が選択されることを防ぐため、否定擬似クラス (_negation pseudo-class_) と呼ばれています。

```css
/* 段落以外の要素を選択 */
:not(p) {
  color: blue;
}
```

`:not()` 擬似クラスには、使用する前に知っておいた方が良い[クセやコツ、予想外の結果](#解説)がいくつかあります。

## 構文

`:not()` 擬似クラスは引数として、1つまたは複数のセレクターをカンマで区切ったものを要求します。リストには否定セレクターや[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を含めることはできません。

{{csssyntax}}

## 解説

`:not()` を使用する際のふつうではない効果や結果がいくつかありますので、使用する際には気を付けてください。

- `:not` 擬似クラスは入れ子にすることができません。すなわち `:not(:not(...))` は無効です。
- この擬似クラスを使用して無意味なセレクターを書くことができます。例えば、 `:not(*)` は要素ではないすべての要素を選択するので、ルールは適用されません。
- この擬似クラスはルールの[詳細度](/ja/docs/Web/CSS/Specificity)を上げることができます。例えば、 `#foo:not(#bar)` は単純な `#foo` と同じ要素を選択しますが、詳細度はより高くなります。
- `:not(.foo)` は `.foo` ではないすべての要素を選択するため、*{{HTMLElement("html")}} や {{HTMLElement("body")}} も*選択します。
- このセレクターは 1 つの要素のみに適用されます。祖先要素を除外することはできません。例えば、 `body :not(table) a` はテーブル内のリンクにも適用されます。 {{HTMLElement("tr")}} がセレクターの `:not()` の部分に該当するからです。
- 2 つのセレクターを同時に使用することは、まだすべてのブラウザーが対応しているわけではありません。例: `:not(.foo, .bar)`. より広く対応するためには、 `:not(.foo):not(.bar)` を使用することができます。

## 例

### 基本的な一連の :not() の例

#### HTML

```html
<p>I am a paragraph.</p>
<p class="fancy">I am so very fancy!</p>
<div>I am NOT a paragraph.</div>
<h2>
  <span class="foo">foo inside h2</span>
  <span class="bar">bar inside h2</span>
</h2>
```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* '.fancy' クラスの中にない <p> 要素 */
p:not(.fancy) {
  color: green;
}

/* <p> 要素ではない要素 */
body :not(p) {
  text-decoration: underline;
}

/* <div> または <span> 要素ではない要素 */
body :not(div):not(span) {
  font-weight: bold;
}

/* <div> でも '.fancy' でもない要素 */
/* なお、この文法は対応が充分ではありません。 */
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* <h2> の中にある要素で <span> に foo クラスでないもの */
/* クラス付き要素のような複雑なセレクターは、まだ対応が充分ではありません。 */
h2 :not(span.foo) {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Basic_set_of_not_examples', '100%', 320)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)
- [擬似クラスと擬似要素](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- 関連する CSS 擬似クラス:

  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}
