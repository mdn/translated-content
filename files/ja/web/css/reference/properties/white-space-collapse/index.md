---
title: white-space-collapse
slug: Web/CSS/Reference/Properties/white-space-collapse
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`white-space-collapse`** は CSS プロパティで、要素内の{{Glossary("whitespace", "ホワイトスペース")}}を統合する方法を制御します。

> [!NOTE]
> `white-space-collapse` および {{CSSxRef("text-wrap-mode")}} プロパティは、 {{CSSxRef("white-space")}} 一括指定プロパティを用いて一緒に宣言することができます。

## 構文

```css
/* キーワード値 */
white-space-collapse: collapse;
white-space-collapse: preserve;
white-space-collapse: preserve-breaks;
white-space-collapse: preserve-spaces;
white-space-collapse: break-spaces;

/* グローバル値 */
white-space-collapse: inherit;
white-space-collapse: initial;
white-space-collapse: revert;
white-space-collapse: revert-layer;
white-space-collapse: unset;
```

`white-space-collapse` プロパティは下記の値の一覧から 1 つのキーワードを選んで指定します。

### 値

- `collapse`
  - : 連続したホワイトスペースを[統合します](/ja/docs/Web/CSS/Guides/Text/Whitespace#統合と変換)。
- `preserve`
  - : 連続したホワイトスペースと区間区切り文字を維持します。
- `preserve-breaks`
  - : 連続したホワイトスペースを統合しますが、区間区切り文字は維持します。
- `preserve-spaces`
  - : 連続したホワイトスペースを維持しますが、タブと区間区切り文字は空白に変換します。
- `break-spaces`
  - : 動作は以下の点を除いて `preserve` と同じです。
    - 維持された連続したホワイトスペースは、行末のものも含めて空間を確保します。
    - 維持されたホワイトスペース文字の後には、ホワイトスペース文字間も含め、改行の機会があります。
    - 維持されたスペースは空間を確保し、ぶら下がらないため、ボックスの内在サイズ（{{cssxref("min-content")}} のサイズと {{cssxref("max-content")}} のサイズ）に影響します。

> [!NOTE]
> _区間区切り文字_ とは、テキストを新しい行に改行させる行送り文字などのことです。

> [!NOTE]
> [CSS テキスト](/ja/docs/Web/CSS/Guides/Text)モジュールは、`white-space-collapse` プロパティに `discard` 値を定義しており、これは要素内のすべての空白を破棄します。ただし、これはどのブラウザーでも対応していません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### HTML

<!-- prettier-ignore-start -->
```html
<h2 class="collapse">Default behavior;
  all   whitespace   is   collapsed
  in    the          heading       .</h2>

<h2 class="preserve">In this case
  all   whitespace   is   preserved
  in    the          heading       .</h2>

<h2 class="preserve-breaks">In this case only
  the   line breaks  are  preserved
  in    the          heading       .</h2>

<h2 class="preserve-spaces">In this case only
  the   spaces       are  preserved
  in    the          heading       .</h2>
```
<!-- prettier-ignore-end -->

### CSS

```css
.collapse {
  white-space-collapse: collapse;
}

.preserve {
  white-space-collapse: preserve;
}

.preserve-breaks {
  white-space-collapse: preserve-breaks;
}

.preserve-spaces {
  white-space-collapse: preserve-spaces;
}

h2 {
  font-size: 1.6rem;
  font-family: monospace;
  border-bottom: 1px dotted #cccccc;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `white-space-collapse` と {{CSSxRef("text-wrap")}} の一括指定: {{CSSxRef("white-space")}} プロパティ
- [CSS テキストモジュール](/ja/docs/Web/CSS/Guides/Text)
- [CSS でのホワイトスペースの扱い](/ja/docs/Web/CSS/Guides/Text/Whitespace)
