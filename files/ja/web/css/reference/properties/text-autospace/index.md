---
title: text-autospace
slug: Web/CSS/Reference/Properties/text-autospace
original_slug: Web/CSS/text-autospace
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

**`text-autospace`** は [CSS](/ja/docs/Web/CSS) のプロパティで、中国語/日本語/韓国語 (CJK) の文字とそれ以外の文字の間に空間を適用することができます。

## 構文

```css
text-autospace: normal;
text-autospace: no-autospace;
text-autospace: ideograph-alpha;
text-autospace: ideograph-numeric;
text-autospace: punctuation;
text-autospace: insert;
text-autospace: replace;
text-autospace: ideograph-alpha ideograph-numeric punctuation;
text-autospace: ideograph-alpha ideograph-numeric;
text-autospace: ideograph-alpha ideograph-numeric insert;
text-autospace: auto;

/* グローバル値 */
text-autospace: inherit;
text-autospace: initial;
text-autospace: revert;
text-autospace: revert-layer;
text-autospace: unset;
```

### 値

- `normal`
  - : CJK 文字と非 CJK 文字の間、および句読点の周囲に自動的に間隔を適用する既定の動作を行います。この値は、[`ideograph-alpha`](#ideograph-alpha) と [`ideograph-numeric`](#ideograph-numeric) の両方を適用した場合と同じ効果を持ちます。
- `<autospace>`
  - : 間隔の動作に対する制御を強化し、受け入れる指定を提供します。キーワード `no-autospace`、または `ideograph-alpha`、`ideograph-numeric`、`punctuation` のいずれか 1 つ以上を組み合わせた指定を受け入れ、オプションで `insert` または `replace` を続けることができます。
    - `no-autospace`
      - : CJK 文字と非 CJK 文字の間を自動的に空ける動作を無効にします。
    - `ideograph-alpha`
      - : 漢字やカタカナなどの表意文字と、ラテン文字などの非表意文字の間にのみ、間隔を追加します。表意文字と非表意文字の数値の間には、間隔を追加しません。
    - `ideograph-numeric`
      - : 漢字やカタカナなどの表意文字と、ラテン文字などの非表意数値の間にのみ間隔を追加します。表意文字と非表意文字の間の間隔は追加しません。
    - `punctuation`
      - : 言語固有の組版規則が要求される場合、句読点の周囲に非分割スペースを追加します。
    - `insert`
      - : 表意文字と非表意文字の間に既存の空白がない場合にのみ、指定された間隔を追加します。
    - `replace`
      - : 表意文字と非表意文字の間の既存の空白（例：[U+0020](/ja/docs/Glossary/Whitespace)）を、指定した間隔で置き換えます。
- `auto`
  - : ブラウザーが組版上適切な間隔を選べます。間隔はブラウザーやプラットフォームによって異なることがあります。

> [!NOTE]
> `insert` も `replace` も指定しなかった場合、動作は `insert` と同じです。

> [!NOTE]
> このプロパティは、{{CSSXRef("word-spacing")}} プロパティsや {{CSSXRef("letter-spacing")}} プロパティにつけて加算的に作用します。`letter-spacing` 設定するによる間隔の量は、`text-autospace` によって作成する間隔に追加されます。`word-spacing` についても同様です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

この例は、 `text-autospace` の様々な値の違いを示します。ドロップダウンボックスから値を選択して、テキストの空間にどのように影響するかを確認してみてください。

```html hidden
<form>
  <label for="autospace"><code>text-autospace</code> の値を選択:</label>
  <select name="autospace" id="autospace">
    <option selected value="no-autospace">no-autospace</option>
    <option value="normal">normal</option>
    <option value="ideograph-alpha">ideograph-alpha</option>
    <option value="ideograph-numeric">ideograph-numeric</option>
  </select>
</form>
<div class="unsupported">
  このブラウザーでは <code>text-autospace</code> は対応していません。
</div>
```

```html
<main>
  <figure class="no-autospace">
    <figcaption>
      <code>
        text-autospace: <span id="autospace-value">no-autospace</span>;
      </code>
    </figcaption>
    <div>
      <p>ここにHTMLを挿入</p>
      <p>第42位</p>
    </div>
  </figure>
</main>
```

```css
.no-autospace {
  text-autospace: no-autospace;
}
.auto {
  text-autospace: auto;
}
.normal {
  text-autospace: normal;
}
.ideograph-alpha {
  text-autospace: ideograph-alpha;
}
.ideograph-numeric {
  text-autospace: ideograph-numeric;
}
```

```css hidden
figure {
  margin: 1rem;
  div {
    font-size: 2rem;
    padding: 1rem;
    font-family: sans-serif;
    border: tomato solid 1px;
  }
  p {
    margin: 0;
  }
}
main {
  max-width: max-content;
}
@supports not (text-autospace: normal) {
  form {
    display: none;
  }
  .unsupported {
    color: red;
  }
}
@supports (text-autospace: normal) {
  .unsupported {
    display: none;
  }
}
```

```js hidden
const chose = document.querySelector("#autospace");
const fig = document.querySelector("figure");
const codeValue = document.querySelector("#autospace-value");
chose.addEventListener("change", (e) => {
  fig.className = e.target.value;
  codeValue.innerText = e.target.value;
});
```

{{EmbedLiveSample("Example", 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('text-spacing-trim')}}
- [`ic`](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#ローカルフォント相対長) および [`ric`](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#ルートフォント相対長) 単位
- [CSS テキスト](/ja/docs/Web/CSS/Guides/Text)モジュール
