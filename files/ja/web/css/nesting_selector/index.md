---
title: "& 入れ子セレクター"
slug: Web/CSS/Nesting_selector
l10n:
  sourceCommit: 29e0d867283aedbc7ab674218761f5f609fcdda9
---

{{CSSRef}}

CSS の **`&` 入れ子セレクター**は、 [CSS 入れ子](/ja/docs/Web/CSS/CSS_nesting)を使用する場合に、親子ルールの関係を明示的に示します。このセレクターは、入れ子になっている子ルールのセレクターを親要素に対して相対的なものにします。入れ子セレクター `&` がない場合、子ルールセレクターは子要素を選択します。子ルールセレクターは {{cssxref(":is", ":is()")}} 内にあるのと同じ[詳細度](/ja/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)の重みを持ちます。

> [!NOTE]
> 子ルールは子要素セレクターという意味ではありません。子ルールは `&` 入れ子セレクターを使用することによって、親要素を対象とすることも子要素を対象とすることもできます。

入れ子スタイルルールで使用しない場合、 `&` 入れ子セレクターは[スコープルート](/ja/docs/Web/CSS/:scope)を表します。

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

入れ子が **`&` 入れ子セレクター**なしで行われる以下のコードを考えてみてください。

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

入れ子ルールを親ルールに（空白なしで）接続する必要があるとき、例えば{{cssxref('Pseudo-classes', '擬似クラス')}}を使用するときや、[複合セレクター](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#複合セレクター)を作成するときなどは、 **`&` 入れ子セレクター**を直前に使用して、望ましい効果を得る必要があります。

例えば要素に、常に適用されるスタイルを適用し、加えてホバー時のみ適用される入れ子のスタイルをいくつか提供する場合を考えてみましょう。もし **`&` 入れ子セレクター**が記載されていない場合、ホワイトスペースが追加されるため、入れ子スタイルは親ルールセレクターの子孫にあたる任意のホバー中の要素に適用されるルールセットになってしまいます。これは私たちが望んでいるものではありません。

```css
.parent-rule {
  /* 親ルールスタイルプロパティ */
  :hover {
    /* 子ルールスタイルプロパティ */
  }
}

/* ブラウザーは上記の入れ子ルールを次のように解釈する */

.parent-rule {
  /* 親ルールスタイルプロパティ */
}

.parent-rule *:hover {
  /* 子ルールスタイルプロパティ */
}
```

ホワイトスペースを含まない **`&` 入れ子セレクター**を追加すると、ホバーしたときに親ルールで一致する要素がスタイル設定されます。

```css
.parent-rule {
  /* 親ルールスタイルプロパティ */
  &:hover {
    /* 子ルールスタイルプロパティ */
  }
}

/* ブラウザーは上記の入れ子ルールを次のように解釈する */

.parent-rule {
  /* 親ルールスタイルプロパティ */
}

.parent-rule:hover {
  /* 子ルールスタイルプロパティ */
}
```

## `&` 入れ子セレクターの追加

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

## 例

次の例はどちらも同じ結果を出力します。最初のものは通常の CSS スタイルを使用し、 2 つ目は `&` 入れ子セレクターを使用しています。

### 通常の CSS スタイル

この例は通常の CSS スタイルを使用しています。

#### HTML

```html-nolint
<p class="example">
  この段落には<a href="#">リンクを含んでいます</a>。ポインターを当てるかフォーカスを当ててみてください。
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

### 入れ子の CSS スタイル

この例は入れ子の CSS スタイルを使用しています。

#### HTML

```html-nolint
<p class="example">
  この段落には<a href="#">リンクを含んでいます</a>。ポインターを当てるかフォーカスを当ててみてください。
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

入れ子スタイルルールで使用しない場合、 `&` 入れ子セレクターは[スコープルート](/ja/docs/Web/CSS/:scope)を表します。

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

- [CSS 入れ子の使用](/ja/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [CSS 入れ子](/ja/docs/Web/CSS/CSS_nesting)モジュール
- [CSS セレクター](/ja/docs/Web/CSS/CSS_selectors)モジュール
