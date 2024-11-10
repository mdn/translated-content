---
title: text-overflow
slug: Web/CSS/text-overflow
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

**`text-overflow`** は [CSS](/ja/docs/Web/CSS) のプロパティで、溢れた内容が非表示になる場合、それをどのようにユーザーに示すのかを設定します。切り取られるか、省略記号 (`…`) を表示するか、独自の文字列を表示するかです。

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

`text-overflow` プロパティは、あふれることを強制するものではありません。テキストをコンテナーからあふれさせるには、次の例のように、他の CSS プロパティである {{cssxref("overflow")}} や {{cssxref("white-space")}} を設定する必要があります。

```css
overflow: hidden;
white-space: nowrap;
```

`text-overflow` プロパティは、*インライン*の進行方向にブロックコンテナー要素をはみ出す内容にのみ作用します（例えば、ボックスの下にあふれるテキストには作用しません）。

## 構文

```css
text-overflow: clip;
text-overflow: ellipsis ellipsis;
text-overflow: ellipsis " [..]";

/* グローバル値 */
text-overflow: inherit;
text-overflow: initial;
text-overflow: revert;
text-overflow: unset;
```

`text-overflow` プロパティは、1 つまたは 2 つの値を使用して指定することができます。1 つの値が与えられた場合は、行末（左書きの場合は右、右書きの場合は左）をあふれたときの動作を指定します。2 つの値が指定された場合は、最初の値が行の左端、2 番目の値が行の右端のあふれたときの動作を指定します。このプロパティは、キーワード値（`clip` または `ellipsis`）または `<string>` 値を受け入れます。

### 値

- `clip`
  - : このプロパティの既定値です。このキーワード値は[コンテンツ領域](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)の末端でテキストを切り取るので、文字の途中で切り取る可能性があります。文字と文字の間で切り取るには、対象のブラウザーが `text-overflow` の空文字列に対応していれば、 `text-overflow: '';` を指定することができます。
- `ellipsis`
  - : このキーワード値は、切り取られたテキストを表現するために省略記号 (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) を表示します。省略記号は[コンテンツ領域](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)内に表示され、表示テキストのサイズを更に狭めます。省略記号を表示する場所がなければ、切り取られます。
- `<string>`
  - : クリップされたテキストを表すために使われる {{cssxref("&lt;string&gt;")}} です。この文字列は[コンテンツ領域](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)内に表示され、表示テキストのサイズをさらに狭めます。この文字列自身を表示する場所がなければ、切り取られます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 値 1 つの構文

この例は、様々な `text-overflow` の値が段落に適用された例を、左書きと右書きのテキストで示します。

#### HTML

```html
<div class="ltr">
  <h2>Left to right text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>

<div class="rtl">
  <h2>Right to left text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* Both of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  text-overflow: " [..]";
}

body {
  display: flex;
  justify-content: space-around;
}

.ltr > p {
  direction: ltr;
}

.rtl > p {
  direction: rtl;
}
```

#### 結果

{{EmbedLiveSample('One-value_syntax', 600, 320)}}

### 値 2 つの構文

この例は `text-overflow` の値 2 つの構文を表し、テキストの先頭と末尾の様々なあふれの動作を表しています。
効果を見るには、スクロールをして行頭を隠すようにする必要があります。

#### HTML

```html
<pre>clip clip</pre>
<p class="overflow-clip-clip">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>clip ellipsis</pre>
<p class="overflow-clip-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis ellipsis</pre>
<p class="overflow-ellipsis-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis " [..]"</pre>
<p class="overflow-ellipsis-string">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* 以下のどちらも text-overflow に必要です */
  white-space: nowrap;
  overflow: scroll;
}

.overflow-clip-clip {
  text-overflow: clip clip;
}

.overflow-clip-ellipsis {
  text-overflow: clip ellipsis;
}

.overflow-ellipsis-ellipsis {
  text-overflow: ellipsis ellipsis;
}

.overflow-ellipsis-string {
  text-overflow: ellipsis " [..]";
}
```

#### JavaScript

```js
// それぞれの段落をスクロールされ、行頭が隠れるようにします
const paras = document.querySelectorAll("p");

for (const para of paras) {
  para.scroll(100, 0);
}
```

#### 結果

{{EmbedLiveSample('Two-value_syntax', 600, 360)}}

## 仕様書

{{Specifications}}

以前の版のこのインターフェイスは _勧告候補_ に達していました。いくつかの "at-risk" の記載のなかった機能を取り除く必要があったため、この仕様は _草案_ レベルに下されたため、勧告候補の状態ではないこのプロパティが、接頭辞なしでブラウザーに実装されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連 CSS プロパティ: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- 単語の改行を制御する CSS プロパティ: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
