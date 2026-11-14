---
title: "`quotes` プロパティ"
short-title: quotes
slug: Web/CSS/Reference/Properties/quotes
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

[CSS](/ja/docs/Web/CSS) の **`quotes`** プロパティは、HTML の {{HTMLElement("q")}} 要素に自動的に追加される引用符、または CSS の {{cssxref("content")}} プロパティの `open-quotes` または `close-quotes` 値を使用して追加される引用符（`no-open-quote` および `no-close-quote` を使用して省略される場合もあります）を、ブラウザーがどのようにレンダリングするかを設定します。

ブラウザーは、`<q>` 要素の開始と終了、および `content` プロパティの `open-quote` と `close-quote` の値に対して引用符を挿入します。開始引用符と終了引用符は、入れ子の深さに基づいて `quotes` の値にある文字列のいずれかに置き換えられます。また、`quotes` が明示的に `auto` に設定されているか、`auto` に解決される場合、使用される引用符は言語によって異なります。

{{InteractiveExample("CSS デモ: quotes")}}

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
quotes: revert-layer;
quotes: unset;
```

### 値

- `none`
  - : {{cssxref("content")}} プロパティの `open-quote` および `close-quote` の値で、 `no-open-quote` と `no-close-quote` が設定されていた時のように、引用符を生成しません。
- `auto`
  - : 選択された要素に設定された言語の値（すなわち、 [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性）で使用される適切な引用符が使用されます。
- {{cssxref("&lt;string&gt;")}}
  - : 引用符の開始と終了の引用符の値のペアを 1 つ以上定義します。各ペアでは、各ペアの最初の引用符は `open-quote` の値として使用され、2 つ目の引用符は `close-quote` となります。

    最初のペアは引用符の外側のレベルを表します。2 つ目のペアが存在する場合、それは最初の内側レベルを表します。次のペアは 2 つ目の内側レベルに使用される、といった具合に続きます。引用符の入れ子の深さがペアの数よりも大きい場合、`quotes` 値の最後のペアが繰り返されます。

    どの引用符のペアが使用されるかは、引用符の深さ、つまり入れ子レベルによって決まります。これは、現在の出現箇所より前の生成テキスト全体における `<q>` 要素の開始、`open-quote`、`no-open-quote` の出現回数から、`</q>`、`close-quote`、`no-close-quote` の出現回数を引いたものです。深さが 0 の場合は最初のペアが使用され、深さが 1 の場合は 2 つ目のペアが使用されます。

> [!NOTE]
> CSS の `content` プロパティの値 `no-open-quote` は引用レベルを増加させ、`no-close-quote` は減少させますが、これらは引用符を挿入しません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### デフォルトの引用符と上書き

この例では、セマンティック HTML の `<q>` 要素によって提供されるデフォルトの引用符と、CSS の `quotes` プロパティで定義する引用符を比較します。

`quotes` のデフォルト値は [`auto`](#auto) です。この例では、最初のリスト項目には `quotes: auto` が設定されているため、指定された言語のデフォルトの引用符が使用されます。これは、`quotes` プロパティが設定されていない場合と同じです。2 番目のリスト項目は、引用符と入れ子の引用符に使用する引用符を定義します。これらの引用符は、言語に関係なく（[`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性の値が設定されていても）、`specialQuotes` クラスを持つ要素の子孫に使用されます。

#### HTML

```html
<ul>
  <li>
    デフォルトの引用符:
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
  <li class="specialQuotes">
    <code>quotes</code> プロパティで定義:
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
</ul>
```

#### CSS

```css
li {
  quotes: auto;
}

.specialQuotes {
  quotes: "“" "”" "‘" "’";
}
```

#### 結果

{{EmbedLiveSample('default_quotes_and_overrides', "100%", 200)}}

既定では、 `<q>` 要素が使用されると、ブラウザーは言語に応じた引用符を提供します。 `quotes` プロパティが定義されている場合、指定された値がブラウザーの既定値を上書きします。 `quotes` プロパティは継承されることに注意してください。 `quotes` プロパティは、`specialQuotes` クラスを持つ `<li>` で設定されますが、引用符は `<q>` 要素に適用されます。

それぞれの開始引用符と終了引用符は、入れ子の深さに基づいて、`quotes` の値にある文字列のいずれかに置き換えられます。

### auto の引用符

`quotes` の既定値は `auto` です。この例では、明示的に設定しなくても動作します。

#### HTML

```html
<ul>
  <li lang="ja">
    <q>これは日本語の引用です。</q>
  </li>
  <li lang="ru">
    <q>Это русская цитата</q>
  </li>
  <li lang="de">
    <q>Dies ist ein deutsches Zitat</q>
  </li>
  <li lang="en">
    <q>This is an English quote.</q>
  </li>
</ul>
```

#### CSS

```css
q {
  quotes: auto;
}
li:not(:last-of-type) {
  border-bottom: 1px solid;
}
```

```css hidden
li {
  padding: 0.5em 0;
}
```

#### 結果

{{EmbedLiveSample('Auto_quotes', "100%", 200)}}

[`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性は、 `<q>` 自体ではなく、 `<q>` の親要素に配置されていることに注意してください。引用が周囲のテキストとは異なる言語で書かれている場合、その引用は、引用自体の言語ではなく、周囲のテキストの言語の引用符で引用するのが慣例です。

### 生成コンテンツによる方法

この例では、 `<q>` 要素を使用する代わりに、特定のクラス名を持つ各要素のコンテンツの前後に、 {{cssxref("::before")}} および {{cssxref("::after")}} 擬似要素に引用符を追加しています。

#### HTML

```html
<p>
  <span class="quote">I should be using quotes</span>, I thought,
  <span class="quote"
    >But why use semantic HTML elements when I can add classes to
    <span class="quote">ALL THE THINGS!</span>?
  </span>
</p>
```

#### CSS

```css
.quote {
  quotes: '"' '"' "'" "'";
}
.quote::before {
  content: open-quote;
}
.quote::after {
  content: close-quote;
}
```

#### 結果

{{EmbedLiveSample('With generated content', "100%", 80)}}

### 引用文および空の引用符としてのテキスト

この例では、`<string>` 値として引用符以外の文字を使用しています。`open-quote` は話者を示し、開始引用符がないため `close-quote` は空になります（`<string>` と列挙キーワードを混在させてペアを作成することには対応していません）。入れ子の引用符には `auto` を設定します。これらの引用符は、その言語で入れ子の引用符に通常使用される文字で囲まれます。

#### HTML

```html
<ul>
  <li><q data-speaker="karen">Hello</q></li>
  <li><q data-speaker="chad">Hi</q></li>
  <li><q data-speaker="karen">this conversation is not interesting</q></li>
  <li>
    <q data-speaker="pat"
      >OMG! <q>Hi</q>? Seriously? at least <q>hello</q> is five letters long.</q
    >
  </li>
</ul>
```

#### CSS

```css
[data-speaker="karen" i] {
  quotes: "She said: " "";
}
[data-speaker="chad" i] {
  quotes: "He said: " "";
}
[data-speaker="pat" i] {
  quotes: "They said: " "";
}
[data-speaker] q {
  quotes: auto;
}
```

```css hidden
li {
  padding: 0.5em 0;
}
```

#### 結果

{{EmbedLiveSample('Text as quotes and empty quotes', "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)モジュール
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
