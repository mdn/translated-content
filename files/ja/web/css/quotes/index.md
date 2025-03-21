---
title: quotes
slug: Web/CSS/quotes
---

{{CSSRef}}

**`quotes`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 [`content`](/ja/docs/Web/CSS/content) プロパティの `open-quotes` や `close-quotes` を使用して追加された引用符をどのように表示するかを設定します。

{{InteractiveExample("CSS Demo: quotes")}}

```css interactive-example-choice
quotes: none;
```

```css interactive-example-choice
quotes: initial;
```

```css interactive-example-choice
quotes: "'" "'";
```

```css interactive-example-choice
quotes: "„" "“" "‚" "‘";
```

```css interactive-example-choice
quotes: "«" "»" "‹" "›";
```

```html interactive-example
<section id="default-example">
  <q id="example-element"
    >Show us the wonder-working <q>Brothers,</q> let them come out publicly—and
    we will believe in them!</q
  >
</section>
```

```css interactive-example
q {
  font-size: 1.2rem;
}
```

## 構文

```css
/* キーワード値 */
quotes: none;
quotes: auto;

/* <string> 値 */
quotes: "«" "»"; /* open-quote および close-quote をフランス語の引用符に設定 */
quotes: "«" "»" "‹" "›"; /* 2 レベルの引用符を設定 */

/* グローバル値 */
quotes: inherit;
quotes: initial;
quotes: revert;
quotes: unset;
```

### 値

- `none`
  - : {{cssxref("content")}} プロパティの `open-quote` および `close-quote` の値で引用符を生成しません。
- `auto`
  - : 選択された要素に設定された言語の値（すなわち、 [`lang`](/ja/docs/Web/HTML/Global_attributes#lang) 属性）で使用される適切な引用符が使用されます。
- `[<string> <string>]+`
  - : `open-quote` および `close-quote` を表す {{cssxref("&lt;string&gt;")}} の 1 つ以上の組。最初の組は、引用符を表示する要素が入れ子になった際の、最上層のものの引用符を表します。以下、順次下位レベルの引用符に対応します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な引用符

#### HTML

```html
<q>To be or not to be. That's the question!</q>
```

#### CSS

```css
q {
  quotes: '"' '"' "'" "'";
}
q::before {
  content: open-quote;
}
q::after {
  content: close-quote;
}
```

#### 結果

{{EmbedLiveSample('Basic_quote_marks', "100%", 60)}}

### 自動引用符

多くのブラウザーでは、 `quotes` の既定値は `auto` (Firefox 70 以降)、またそれ以外のブラウザー (Chromium, Safari, Edge) ではこれが既定の動作なので、この例は明示的に設定されなくても動作します。

#### HTML

```html
<div lang="ja">
  <q>これが日本語の引用符です。</q>
  <div>
    <hr />
    <div lang="ru">
      <q>Это русская цитата</q>
      <div>
        <hr />
        <div lang="de">
          <q>Dies ist ein deutsches Zitat</q>
          <div>
            <hr />
            <div lang="en">
              <q>This is an English quote.</q>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### CSS

```css
/*q {
  quotes: auto;
}*/
```

#### 結果

{{EmbedLiveSample('Auto_quotes', "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ Cssxref("content") }}
