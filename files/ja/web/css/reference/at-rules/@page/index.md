---
title: "@page"
slug: Web/CSS/Reference/At-rules/@page
original_slug: Web/CSS/@page
l10n:
  sourceCommit: 2b3eb646cec5c9bc74e263b7880a52ad52e37913
---

**`@page`** は CSS のアットルールで、印刷されるページのさまざまな側面を変更するために使用されます。ページの寸法、方向、およびマージンを対象として変更します。`@page` アットルールは、さまざまな擬似クラスを使用して、印刷物のすべてのページまたはその一部を対象として使用することができます。

## 構文

```css
/* すべてのページを対象とする */
@page {
  size: 8.5in 9in;
  margin-top: 4in;
}

/* すべての偶数ページを対象とする */
@page :left {
  margin-top: 4in;
}

/* すべての奇数ページを対象とする */
@page :right {
  size: 11in;
  margin-top: 4in;
}

/* `page: wide;` が設定されているすべてのセレクターを対象とする */
@page wide {
  size: a4 landscape;
}

@page {
  /* ページ番号を示す右上マージンボックス */
  @top-right {
    content: "ページ " counter(pageNumber);
  }
}
```

### ページプロパティ

`@page` アットルールには、ページ記述子と[マージンのアットルール](#マージンのアットルール)のみを含めることができます。次の記述子は、少なくとも 1 つのブラウザーで実装されています。

- [`margin`](/ja/docs/Web/CSS/Reference/Properties/margin)
  - : ページのマージンを指定します。個々のマージンプロパティ [`margin-top`](/ja/docs/Web/CSS/Reference/Properties/margin-top)、[`margin-right`](/ja/docs/Web/CSS/Reference/Properties/margin-right)、[`margin-bottom`](/ja/docs/Web/CSS/Reference/Properties/margin-bottom)、[`margin-left`](/ja/docs/Web/CSS/Reference/Properties/margin-left) も使用できます。
- [`page-orientation`](/ja/docs/Web/CSS/Reference/At-rules/@page/page-orientation)
  - : ページの方向を指定します。これはページのレイアウトには影響しません。回転は、出力媒体でのレイアウト後に適用されます。
- [`size`](/ja/docs/Web/CSS/Reference/At-rules/@page/size)
  - : 対象となるページボックスの包含ブロックの寸法と向きを指定します。一般的な場合、 1 つのページボックスが 1 枚の用紙に印刷され、対象となる用紙の寸法を示します。

仕様では、@page アットルールによってページボックスに適用できる CSS プロパティとして、以下のプロパティが挙げられています。しかし、これらはどのユーザーエージェントもまだ対応していません。

<details>
<summary>残りのページプロパティ</summary>

| 機能                 | CSS プロパティ        |
| -------------------- | --------------------- |
| 方向プロパティ       | direction             |
| 背景プロパティ       | background-color      |
|                      | background-image      |
|                      | background-repeat     |
|                      | background-attachment |
|                      | background-position   |
|                      | background            |
| 境界線プロパティ     | border-top-width      |
|                      | border-right-width    |
|                      | border-bottom-width   |
|                      | border-left-width     |
|                      | border-width          |
|                      | border-top-color      |
|                      | border-right-color    |
|                      | border-bottom-color   |
|                      | border-left-color     |
|                      | border-color          |
|                      | border-top-style      |
|                      | border-right-style    |
|                      | border-bottom-style   |
|                      | border-left-style     |
|                      | border-short-style    |
|                      | border-top            |
|                      | border-right          |
|                      | border-bottom         |
|                      | border-left           |
|                      | border                |
| カウンタープロパティ | counter-reset         |
|                      | counter-increment     |
| 色                   | color                 |
| フォントプロパティ   | font-family           |
|                      | font-size             |
|                      | font-style            |
|                      | font-variant          |
|                      | font-weight           |
|                      | font                  |
| 高さのプロパティ     | height                |
|                      | min-height            |
|                      | max-height            |
| 行の高さ             | line-height           |
| マージンプロパティ   | margin-top            |
|                      | margin-right          |
|                      | margin-bottom         |
|                      | margin-left           |
|                      | margin                |
| 輪郭線プロパティ     | outline-width         |
|                      | outline-style         |
|                      | outline-color         |
|                      | outline               |
| パディングプロパティ | padding-top           |
|                      | padding-right         |
|                      | padding-bottom        |
|                      | padding-left          |
|                      | padding               |
| 引用                 | quotes                |
| テキストプロパティ   | letter-spacing        |
|                      | text-align            |
|                      | text-decoration       |
|                      | text-indent           |
|                      | text-transform        |
|                      | white-space           |
|                      | word-spacing          |
| 可視性               | visibility            |
| 幅のプロパティ       | width                 |
|                      | min-width             |
|                      | max-width             |

</details>

## 解説

@page ルールは、ページボックスのプロパティを定義します。 `@page` アットルールは、CSS オブジェクトモデルインターフェイス {{domxref("CSSPageRule")}} 経由でアクセスできます。

> [!NOTE]
> W3C は、ビューポートに関する {{cssxref("&lt;length&gt;")}} の単位、`vh`、`vw`、`vmin`、`vmax` の取り扱い方について議論中です。差し当たっては、これらを `@page` アットルールの中で使わないでください。

### 関連プロパティ

`@page` アットルールを使用すると、ユーザーはルールに名前を割り当てることができます。この名前は、 `page` プロパティを使用して宣言で呼び出されます。

- {{Cssxref("page")}}
  - : セレクターがユーザー定義の**名前付きページ**を使用できるようにします。

## 形式文法

{{csssyntax}}

ここで、 `<page-body>` は次のようになります。

- page-properties
- page-margin properties

また、 `<pseudo-page>` は下記の擬似クラスを表します。

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## マージンのアットルール

マージンのアットルールは、`@page` アットルール内で使用されます。これらはそれぞれ、文書内のさまざまな章を対象とし、スタイルブロックで設定されたプロパティ値に基づいて、出力されるページの領域をスタイル設定します。

```css
@page {
  @top-left {
    /* ページマージンプロパティ */
  }
}
```

**`@top-left`** は、文書の左上を対象とし、設定されたページマージンプロパティに基づいて変更を適用します。

それ以外にも、マージンに関するアットルールには次のようなものがあります。

```css-nolint
@top-left-corner
@top-left
@top-center
@top-right
@top-right-corner
@bottom-left-corner
@bottom-left
@bottom-center
@bottom-right
@bottom-right-corner
@left-top
@left-middle
@left-bottom
@right-top
@right-middle
@right-bottom
```

### ページマージンプロパティ

ページマージンプロパティは、個々のマージンアットルールで設定できる一連の CSS プロパティです。これらには、次のものが含まれます。

<details>
<summary>ページマージンプロパティ</summary>

| 機能                 | CSS プロパティ        |
| -------------------- | --------------------- |
| 方向プロパティ       | direction             |
| 背景プロパティ       | background-color      |
|                      | background-image      |
|                      | background-repeat     |
|                      | background-attachment |
|                      | background-position   |
|                      | background            |
| 境界線プロパティ     | border-top-width      |
|                      | border-right-width    |
|                      | border-bottom-width   |
|                      | border-left-width     |
|                      | border-width          |
|                      | border-top-color      |
|                      | border-right-color    |
|                      | border-bottom-color   |
|                      | border-left-color     |
|                      | border-color          |
|                      | border-top-style      |
|                      | border-right-style    |
|                      | border-bottom-style   |
|                      | border-left-style     |
|                      | border-short-style    |
|                      | border-top            |
|                      | border-right          |
|                      | border-bottom         |
|                      | border-left           |
|                      | border                |
| カウンタープロパティ | counter-reset         |
|                      | counter-increment     |
| コンテンツ           | content               |
| 色                   | color                 |
| フォントプロパティ   | font-family           |
|                      | font-size             |
|                      | font-style            |
|                      | font-variant          |
|                      | font-weight           |
|                      | font                  |
| 高さのプロパティ     | height                |
|                      | min-height            |
|                      | max-height            |
| 行の高さ             | line-height           |
| マージンプロパティ   | margin-top            |
|                      | margin-right          |
|                      | margin-bottom         |
|                      | margin-left           |
|                      | margin                |
| 輪郭線プロパティ     | outline-width         |
|                      | outline-style         |
|                      | outline-color         |
|                      | outline               |
| パディングプロパティ | padding-top           |
|                      | padding-right         |
|                      | padding-bottom        |
|                      | padding-left          |
|                      | padding               |
| 引用                 | quotes                |
| テキストプロパティ   | letter-spacing        |
|                      | text-align            |
|                      | text-decoration       |
|                      | text-indent           |
|                      | text-transform        |
|                      | white-space           |
|                      | word-spacing          |
| 垂直方向の配置       | vertical-align        |
| 可視性               | visibility            |
| 幅のプロパティ       | width                 |
|                      | min-width             |
|                      | max-width             |
| Z 順                 | z-index               |

</details>

## 名前付きページ

名前付きページを使用すると、印刷時に宣言的な方法でページごとのレイアウトや[改ページ](/ja/docs/Web/CSS/Guides/Fragmentation)を追加することができます。

名前付きページは、 {{Cssxref("page")}} プロパティを使用して適用することができます。これにより、ユーザーは印刷レイアウトで使用するさまざまなページ構成を作成することができます。

この例については、 [`page`](/ja/docs/Web/CSS/Reference/Properties/page#例) の例にあります。

## 例

### size プロパティを使用してページの方向を変更する

この例では、`<section>` を `landscape` 形式で個々のページに分割し、各ページに 20% のマージンを指定して印刷する方法を示します。
印刷ボタンをクリックすると、HTML の各セクションが個々のページに分割された印刷ダイアログが表示されます。

```html live-sample___page-size
<button>ページを印刷</button>
<article>
  <section>
    <h2>ヘッダー 1</h2>
    <p>段落 1 です。</p>
  </section>
  <section>
    <h2>ヘッダー 2</h2>
    <p>段落 2 です。</p>
  </section>
  <section>
    <h2>ヘッダー 3</h2>
    <p>段落 3 です。</p>
  </section>
</article>
```

```js live-sample___page-size
const button = document.querySelector("button");

button.addEventListener("click", () => {
  window.print();
});
```

```css live-sample___page-size
@page {
  size: landscape;
  margin: 2cm;
}

section {
  page-break-after: always;
  break-after: page;
}

@media print {
  button {
    display: none;
  }
}
```

```css hidden live-sample___page-size
body {
  font-family: "Helvetica", sans-serif;
  background-color: silver;
}

article {
  width: 100%;
}

section {
  display: grid;
  background-color: white;
  border-radius: 0.6rem;
  justify-items: center;
  padding: 1rem;
  width: 50%;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  margin: 0 auto;
  margin-block-end: 1rem;
  border: 1px dashed;
}
```

{{EmbedLiveSample('page-size', '100%', '540', , , , , "allow-modals")}}

### @page の擬似クラスの例

様々な `@page` の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)の例を参照してください。

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("page")}} プロパティ
- `@page` [`size`](/ja/docs/Web/CSS/Reference/At-rules/@page/size) 記述子
- [CSS ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)モジュール
- [Paged.js: W3C paged media polyfill](https://pagedjs.org/documentation/1-the-big-picture/) (pagedjs.org)
- [\[META\] CSS Paged Media Module Level 3](https://bugzil.la/286443) この件 (ページベースのカウンターなど) に関する進捗の追跡は、 Bugzilla のチケット
