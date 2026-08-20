---
title: CSS `::search-text` 擬似要素
short-title: ::search-text
slug: Web/CSS/Reference/Selectors/::search-text
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{SeeCompatTable}}

**`::search-text`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、ユーザーエージェントの「検索」または「ページ内検索」などのテキスト検索機能によって特定された検索結果にスタイルを適用します。

{{InteractiveExample("CSS Demo: ::search-text", "tabbed-shorter")}}

```css interactive-example
p::search-text {
  color: crimson;
  background-color: wheat;
}
```

```html-nolint interactive-example
<p>
  このブラウザーの「ページ内で検索」機能を使用して、この文に含まれる単語やフレーズを検索し、対応するブラウザーでは、それぞれの検索結果が指定された独自のスタイル設定でどのように強調表示されるかを確認してください。
</p>
```

## 構文

```css
::search-text {
  /* ... */
}
```

## 解説

ほとんどのブラウザーには、何らかのページ内テキスト検索機能が記載されており、通常は「検索」や「ページ内で検索」と呼ばれています。[ハイライト擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#ハイライト擬似要素)の一つである `::search-text` 擬似要素を使用すると、ブラウザーの検索機能によってハイライトされた検索結果のテキストに、[限定されたスタイル群](#許可されているプロパティ)を適用することができます。

すべてのブラウザーやブラウザーのバージョンが、CSS でスタイルを設定できるページ内ハイライト機能を使って検索結果を強調表示するわけではありません。そのような場合、`::search-text` が実装されていないか、単に無視される可能性があります。

`::search-text` を単独でセレクターとして使用すると、ページ上のどこでも、現れたブラウザーの検索結果にスタイルが適用されます。特定の要素内に現れるブラウザーの検索結果にのみスタイルを適用したい場合は、`::search-text` を他のセレクターと組み合わせることができます。例えば、`section::search-text` といった具合です。

さらに、次の例のように `::search-text` を {{cssxref(":current")}} [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)と組み合わせることで、現在フォーカスが当たっている検索結果に特定のスタイルを適用することができます。

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
}
```

### 継承モデル

`::search-text` 擬似要素は、すべてのハイライト擬似要素に共通する特別な継承モデルに従います。このモデルでは、スタイルは親要素と、その親要素の擬似要素の両方から継承されます。この継承の仕組みの詳細については、[ハイライト擬似要素の継承](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#ハイライト擬似要素の継承)の節を参照してください。

### 許可されているプロパティ

`::search-text` では、限られたサブセットの CSS プロパティを使用することができます。

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} 一括指定プロパティと関連する個別指定プロパティ
  - {{CSSxRef("text-decoration-line")}}: `grammar-error`, `spelling-error`, `line-through`, `none`, `underline` の値のみ
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-decoration-style")}}
  - {{CSSxRef("text-decoration-thickness")}}
  - {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-shadow")}}

## アクセシビリティ

**テキスト検索結果のスタイルの変更は控えめしてください**。特に純粋に見た目を良くするためだけの場合はなおさらです。認知面に課題を抱えている人や、技術にあまり詳しくない人にとって、こうしたスタイルの予期せぬ変更がありますと、機能の理解を妨げる恐れがあります。

`::search-text` の主な用途は、ブラウザーのデフォルトのスタイルと比較して色のコントラストを高めることです。強調表示されたテキストをカスタマイズする際は、確実に色のコントラストを高めることを実現します。[前景色と背景色のコントラスト比](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)が十分に高く、ユーザーがハイライトされたテキストのコンテンツを認識できるようにすることです。

## 例

### テキスト検索結果に対して独自のスタイル設定

この例では、`::search-text` および `:current` を使用して、ブラウザーの「ページ内で検索」の結果に独自のスタイルを作成する方法を示しています。

#### HTML

HTML は、基本的なテキストの段落で構成されています。簡潔さを保つため、またレンダリングされた例で検索結果を閲覧しやすくするため、HTML ソースは示しません。

```html hidden live-sample___custom-search-results
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus est
  eget eros congue pellentesque. Etiam a augue accumsan, scelerisque nisl sit
  amet, lobortis nulla. Aliquam condimentum eu orci eu elementum. Donec
  porttitor quam et posuere commodo. Mauris rhoncus diam a scelerisque molestie.
  Integer sollicitudin risus dui, ut sagittis lorem laoreet eget. Duis eget
  pretium enim. Morbi tristique, diam sit amet gravida finibus, metus ex
  tincidunt nibh, ac volutpat urna purus et arcu. Donec risus risus, semper vel
  purus sit amet, gravida vestibulum est. Sed et tristique urna. Nam vel mi eget
  nisi consectetur elementum. Aenean faucibus aliquam cursus. Morbi posuere
  tincidunt velit, et sagittis quam sagittis in. Nam eget ante ultrices, auctor
  dui vel, euismod lacus. Vivamus tincidunt, sem ac sodales aliquet, tortor
  tortor consequat diam, nec tempor mi dui vel eros. Aliquam ac erat et metus
  egestas scelerisque.
</p>
```

#### CSS

CSSでは、まず `::search-text` 擬似要素のスタイル設定から始めます。この擬似要素に対して、{{cssxref("background-color")}}、{{cssxref(("color")}}、{{cssxref("text-shadow")}} という独自のスタイルを適用します。

```css hidden live-sample___custom-search-results
html {
  font-family: "Helvetica", "Arial";
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
  width: 90%;
  margin: 0 auto;
}
@layer no-support {
  body::before {
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em 0;
  }
  @supports not selector(:current) {
    body::before {
      content: "このブラウザーは :current 擬似クラスに対応していません。";
    }
  }
  @supports not selector(::search-text) {
    body::before {
      content: "このブラウザーは ::search-text 擬似要素に対応していません。";
    }
  }
}
```

```css live-sample___custom-search-results
::search-text {
  background-color: purple;
  color: white;
  text-shadow: 1px 1px 1px black;
}
```

最後に、`::search-text:current` を使用して、現在フォーカスされている検索結果にスタイルを設定し、他の検索結果と判別できるよう、異なる `background-color` や {{cssxref("text-decoration")}} スタイルを付けます。

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 3px;
}
```

#### 結果

この例は次のように表示されます。

{{EmbedLiveSample("live-sample___custom-search-results", "100%", 300)}}

ブラウザーの「ページ内検索」インターフェイスを使用して、例文中に複数回現れる "aliquam"、"amet"、"tortor" といった単語を探してみてください。検索結果の「前」と「次」を移動して、`:current` のスタイル設定を調べましょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":current")}}
- [ハイライト擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#ハイライト擬似要素)
- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
