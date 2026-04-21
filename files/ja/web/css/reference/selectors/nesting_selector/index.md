---
title: "& 入れ子セレクター"
slug: Web/CSS/Reference/Selectors/Nesting_selector
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

CSS の **`&` 入れ子セレクター**は、[CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting)を使用する場合に、親子ルールの関係を明示的に示します。このセレクターは、入れ子になっている子ルールのセレクターを親要素に対して相対的なものにします。入れ子セレクター `&` がない場合、子ルールセレクターは子要素を選択します。子ルールセレクターは、[詳細度](/ja/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)の重みが {{cssxref(":is()")}} 内にあるのと同じになります。

> [!NOTE]
> 子ルールは子要素セレクターという意味ではありません。子ルールは `&` 入れ子セレクターを使用することによって、親要素を対象とすることも子要素を対象とすることもできます。

入れ子スタイルルールで使用しない場合、 `&` 入れ子セレクターは[スコープルート](/ja/docs/Web/CSS/Reference/Selectors/:scope)を表します。

## 構文

```css
parentRule {
  /* 親ルールスタイルプロパティ */
  & childRule {
    /* 子ルールスタイルプロパティ */
  }
}
```

### `&` 入れ子セレクターとホワイトスペース

入れ子が `&` 入れ子セレクターなしで行われる次のコードを考えてみてください。

```css
.parent-rule {
  /* 親ルールスタイルプロパティ */
  .child-rule {
    /* 子ルールスタイルプロパティ */
  }
}
```

ブラウザーは入れ子になったセレクターを解釈するとき、自動的にセレクターの間に空白を追加し、新しい CSS セレクタールールを作成します。以下のコードは、入れ子になっていない同等のルールを示しています。

```css
.parent-rule {
  /* 親ルールスタイルプロパティ */
}

.parent-rule .child-rule {
  /* .parent-rule の祖先に対する .child-rule の子孫のスタイル設定プロパティ */
}
```

入れ子ルールを親ルールに（ホワイトスペースなしで）接続する必要があるとき、例えば{{cssxref('Pseudo-classes', '擬似クラス')}}を使用するときや、[複合セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複合セレクター)を作成するときなどは、`&` 入れ子セレクターを直前に使用して、望ましい効果を得る必要があります。

例えば要素に、常に適用されるスタイルを適用し、加えてホバー時のみ適用される入れ子のスタイルをいくつか提供する場合を考えてみましょう。もし `&` 入れ子セレクターが記載されていない場合、ホワイトスペースが追加されるため、入れ子スタイルは親ルールセレクターの子孫にあたる任意のホバー中の要素に適用されるルールセットになってしまいます。これは私たちが望んでいるものではありません。

```css
.parent-rule {
  /* 親ルールスタイルプロパティ */
  :hover {
    /* 子ルールスタイルプロパティ */
  }
}

/* ブラウザーは上記の入れ子のルールを次のように解釈する */
.parent-rule {
  /* 親ルールスタイルプロパティ */
}

.parent-rule *:hover {
  /* 子ルールスタイルプロパティ */
}
```

ホワイトスペースを含まない `&` 入れ子セレクターを追加すると、ホバーしたときに親ルールで一致する要素がスタイル設定されます。

```css
.parent-rule {
  /* 親ルールスタイルプロパティ */
  &:hover {
    /* 子ルールスタイルプロパティ */
  }
}

/* ブラウザーは上記の入れ子のルールを次のように解釈する */
.parent-rule {
  /* 親ルールスタイルプロパティ */
}

.parent-rule:hover {
  /* 子ルールスタイルプロパティ */
}
```

### `&` 入れ子セレクターの追加

`&` 入れ子セレクターを後に追加することで、ルールのコンテキストを逆にすることもできます。

```css
.card {
  /* .card のスタイル */
  .featured & {
    /* .featured .card のスタイル */
  }
}

/* ブラウザーは上記の入れ子ルールを次のように解釈する */

.card {
  /* .card のスタイル */
}

.featured .card {
  /* .featured .card のスタイル */
}
```

`&` 入れ子セレクターは複数配置することができます。

```css
.card {
  /* .card のスタイル */
  .featured & & & {
    /* .featured .card .card .card のスタイル */
  }
}

/* ブラウザーは上記の入れ子ルールを次のように解釈する */

.card {
  /* .card のスタイル */
}

.featured .card .card .card {
  /* .featured .card .card .card のスタイル */
}
```

### 擬似要素を表すことはできない

`&` セレクターは {{cssxref(":is()")}} セレクターと同等であり、擬似要素を表せないという同じ制限を持っています。

例えば、次のスタイルルールでは、`<div class="important">` 内に入れ子になっていても、生成コンテンツは赤でスタイル設定されません。`.important :is(.foo::before)` は何にも一致しないからです。

```css
.foo::before {
  content: "Hello";

  .important & {
    color: red;
  }
}
```

この制限は、プロパティが暗黙的に `&` セレクターで囲まれる[入れ子アットルール](/ja/docs/Web/CSS/Guides/Nesting/At-rules)にも同時に適用されます。例えば、次のルールでは、`color: red` プロパティが暗黙的に `&` セレクター（この場合は `:is(.foo::before)`）で囲まれているため、小さな画面であっても生成コンテンツは赤でスタイル設定されません。

```css
.foo::before {
  content: "Hello";

  @media (width < 600px) {
    color: red;
  }
}
```

## 例

次の例はどちらも同じ結果を出力します。最初のものは通常の CSS スタイルを使用し、 2 つ目は `&` 入れ子セレクターを使用しています。

### 通常の CSS スタイルの使用

この例は通常の CSS スタイルを使用しています。

#### HTML

```html
<p class="example">
  この段落には<a href="#">リンクを含んでいます</a>。
  ポインターを当てるかフォーカスを当ててみてください。
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
}

.example > a {
  color: tomato;
}

.example > a:hover,
.example > a:focus {
  color: ivory;
  background-color: tomato;
}
```

#### 結果

{{EmbedLiveSample('Original_CSS_styles','100%','65')}}

### 入れ子の CSS スタイルで `&` を使用

この例は入れ子の CSS スタイルを使用しています。

#### HTML

```html
<p class="example">
  この段落には<a href="#">リンクを含んでいます</a>。
  ポインターを当てるかフォーカスを当ててみてください。
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
  & > a {
    color: tomato;
    &:hover,
    &:focus {
      color: ivory;
      background-color: tomato;
    }
  }
}
```

#### 結果

{{EmbedLiveSample('Nested_CSS_styles','100%','65')}}

### 入れ子ルール以外の使用方法

入れ子スタイルルールで使用しない場合、 `&` 入れ子セレクターは[スコープルート](/ja/docs/Web/CSS/Reference/Selectors/:scope)を表します。

```html
<p>出力ボックスの上にポインターを当てると、文書の背景色を変更できます。</p>
```

```css
& {
  color: blue;
  font-weight: bold;
}

&:hover {
  background-color: wheat;
}
```

#### 結果

この場合、[文書](/ja/docs/Web/API/Document)にすべてのスタイルを適用します。

{{EmbedLiveSample('Usage_outside_nested_rule','100%','65')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 入れ子の使用](/ja/docs/Web/CSS/Guides/Nesting/Using)
- [CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting)モジュール
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
