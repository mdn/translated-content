---
title: "`hyphenate-limit-lines` プロパティ"
short-title: hyphenate-limit-lines
slug: Web/CSS/Reference/Properties/hyphenate-limit-lines
l10n:
  sourceCommit: 2f5d0e19eb706f36f837b84855f581f4bd087d15
---

**`hyphenate-limit-lines`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素内でハイフネーションされた単語で終わる行が連続する最大数を指定します。

{{InteractiveExample("CSS デモ: hyphenate-limit-lines")}}

```css interactive-example-choice
hyphenate-limit-lines: no-limit;
```

```css interactive-example-choice
hyphenate-limit-lines: 2;
```

```css interactive-example-choice
hyphenate-limit-lines: 1;
```

```css interactive-example-choice
hyphenate-limit-lines: 0;
```

```html interactive-example
<section id="default-example">
  <p id="example-element" lang="en">
    The word supercalifragilisticexpialidocious is a mouthful of nonsensical
    syllables.
  </p>
</section>
```

```css interactive-example
#example-element {
  border: 2px dashed #aaa;
  font-size: 1.5rem;
  text-align: left;
  width: 11rem;
  hyphens: auto;
}
```

## 構文

```css
/* キーワード値 */
hyphenate-limit-lines: no-limit;

/* <integer> 値 */
hyphenate-limit-lines: 2;
hyphenate-limit-lines: 1;
hyphenate-limit-lines: 0;

/* グローバル値 */
hyphenate-limit-lines: inherit;
hyphenate-limit-lines: initial;
hyphenate-limit-lines: revert;
hyphenate-limit-lines: revert-layer;
hyphenate-limit-lines: unset;
```

### 値

このプロパティには、次の一覧の中から 1 つの値を指定します。

- `no-limit`
  - : ハイフネーションされた単語で終わる行の連続数に制限はありません。これがデフォルトです。
- {{cssxref("integer")}}
  - : `0` 以上の整数で、ハイフネーションされた単語で終わる行が連続する最大数を指定します。

## 解説

`hyphenate-limit-lines` プロパティを使うと、ハイフネーションされた単語で終わる行が連続する数を制限できます。幅の狭いテキストや両端揃えのテキストでは、ブラウザーが複数の連続した行で単語を[ハイフネーション](/ja/docs/Web/CSS/Reference/Properties/hyphens)する必要がある場合があります。
多くの組版スタイルガイドでは、ハイフネーションされた行が長く連続すると（「ラダー」または「スタック」と呼ばれることがあります）読みにくく、注意をそらすと考えられているため、ハイフネーションを 2、3 行に制限することを推奨しています。

`<integer>` 値は、ハイフネーションできる連続行の最大数を指定します。例えば、値に `2` を指定すると、ハイフネーションされる行は最大 2 行連続になります。`0` を指定すると、ハイフネーションされた単語で終わる行がなくなり、実質的にハイフネーションが無効になります。負の値は無効です。

指定された数の連続行でハイフネーションが行われると、ブラウザーは次の行ではハイフネーションを行いません。代わりに、単語間の空白など、通常の改行可能な位置でその行を折り返します。改行可能な位置に達する前に行の幅が埋まると、テキストがはみ出る場合があります。ハイフネーションされない行の後で、連続行の数え直しが始まります。

このプロパティは、ハイフネーションが有効な場合にのみ効果があります。例えば、{{cssxref("hyphens", "hyphens: auto")}} を設定するか、テキストにソフトハイフン (`&shy;`) を含めて `hyphens: manual` を設定した場合です。

{{cssxref("overflow-wrap")}} に `break-word` または `anywhere` が設定されている場合、`hyphenate-limit-lines` の制限に達した後でも、行に収まらない単語を分割してはみ出しを防ぐことができます。この場合、ブラウザーはハイフンを挿入せずに単語を分割したり、制限を無視したりすることがあります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ハイフネーションされる連続行を制限する

この例では、`hyphenate-limit-lines` プロパティを使用して、ハイフネーションされる連続行を制限する方法を示します。

#### HTML

非常に長い単語を含む同じテキストを表示する 2 つのボックスを用意します。

```html
<div class="container">
  <p class="no-limit" lang="en">
    The word pneumonoultramicroscopicsilicovolcanoconiosis names a lung disease.
  </p>
  <p class="limit-1" lang="en">
    The word pneumonoultramicroscopicsilicovolcanoconiosis names a lung disease.
  </p>
</div>
```

#### CSS

幅を `10em` に制限するなど、基本的なスタイルを設定します。この幅では長い単語を収められません。各ボックスに `hyphens: auto` を設定すると、幅の狭いコンテナー内では、デフォルトで長い単語が 3 行にわたって分割されます。次に、一方のボックスでは `hyphenate-limit-lines` にデフォルト値の `no-limit` を、もう一方では `1` を明示的に設定します。これにより、後者ではハイフネーションされた単語で終わる行が連続するのは 1 行だけになります。

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
  width: 10em;
  hyphens: auto;
}

.no-limit {
  hyphenate-limit-lines: no-limit;
}

.limit-1 {
  hyphenate-limit-lines: 1;
}
```

```css hidden
@layer no-support {
  @supports not (hyphenate-limit-lines: 1) {
    body::before {
      content: "このブラウザーは hyphenate-limit-lines プロパティに対応していません";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### 結果

{{EmbedLiveSample("ハイフネーションされる連続行を制限する", "", 250)}}

最初のボックスでは `no-limit` により、長い単語がコンテナーからはみ出ないよう、必要に応じてハイフネーションされます。2 つ目のボックスで `1` を指定すると、ハイフネーションされた単語で終わる行は連続して 1 行までです。長い単語を収めるにはハイフネーションされた行が 2 行連続する必要があるため、最初のハイフンの後の残りの単語がコンテナーからはみ出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("hyphens")}}
- {{cssxref("hyphenate-character")}}
- {{cssxref("hyphenate-limit-chars")}}
- [テキストの分割と折り返し](/ja/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [CSS テキスト](/ja/docs/Web/CSS/Guides/Text)
