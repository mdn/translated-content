---
title: writing-mode
slug: Web/CSS/writing-mode
---

{{CSSRef}}

**`writing-mode`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストの行のレイアウトを横書きにするか縦書きにするか、ブロックのフロー方向を左向きにするか右向きにするかを設定します。文書全体に設定する場合は、ルート要素 (HTML 文書の場合は `html` 要素) に設定してください。

{{EmbedInteractiveExample("pages/css/writing-mode.html")}}

このプロパティは、*ブロックのフロー方向*を指定します。これは、ブロックレベルコンテナーが積まれる方向と、インラインレベルの内容物がブロックコンテナー内でフローする方向です。このように、 `writing-mode` プロパティはブロックレベルの内容物の順序も決定します。

## 構文

```css
/* キーワードの値 */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;

/* グローバルの値 */
writing-mode: inherit;
writing-mode: initial;
writing-mode: revert;
writing-mode: unset;
```

`writing-mode` プロパティは、以下のいずれかの値として指定されます。横書きの場合は[その言葉の書字方向](https://www.w3.org/International/questions/qa-scripts.en)も影響し、左書き (`ltr`、英語やその他の多くの言葉) や右書き (`rtl`、ヘブライ語やアラビア語) のどちらかになります。

### 値

- `horizontal-tb`
  - : `ltr` の言語では、内容物は左から右へ水平に流れます。 `rtl` の言語では、内容物は右から左へ水平に流れます。次の水平の行は、前の行の下に配置されます。
- `vertical-rl`
  - : `ltr` の言語では、内容物は上から下へ垂直に流れ、次の垂直の行は、前の行の左に配置されます。 `rtl` の言語では、内容物は下から上へ垂直に流れ、次の垂直の行は、前の行の右に配置されます。
- `vertical-lr`
  - : `ltr` の言語では、内容物は上から下へ垂直に流れ、次の垂直の行は、前の行の右に配置されます。 `rtl` の言語では、内容物は下から上へ垂直に流れ、次の垂直の行は、前の行の左に配置されます。
- `sideways-rl` {{experimental_inline}}
  - : `ltr` の言語では、内容物は下から上へ垂直に流れます。 `rtl` の言語では、内容物は上から下へ垂直に流れます。垂直方向に並べられる書体を含むすべての文字を右へ横倒しにします。
- `sideways-lr` {{experimental_inline}}
  - : `ltr` の言語では、内容物は上から下へ垂直に流れます。 `rtl` の言語では、内容物は下から上へ垂直に流れます。垂直方向に並べられる書体を含むすべての文字を左へ横倒しにします。
- `lr` {{deprecated_inline}}
  - : SVG1 文書を除き、非推奨です。CSS では、`horizontal-tb` を代わりに使用してください。
- `lr-tb` {{deprecated_inline}}
  - : SVG1 文書を除き、非推奨です。CSS では、`horizontal-tb` を代わりに使用してください。
- `rl` {{deprecated_inline}}
  - : SVG1 文書を除き、非推奨です。CSS では、`horizontal-tb` を代わりに使用してください。
- `tb` {{deprecated_inline}}
  - : SVG1 文書を除き、非推奨です。CSS では、`vertical-rl` を代わりに使用してください。
- `tb-lr` {{deprecated_inline}}
  - : SVG1 文書を除き、非推奨です。CSS では、`vertical-lr` を代わりに使用してください。
- `tb-rl` {{deprecated_inline}}
  - : SVG1 文書を除き、非推奨です。CSS では、`vertical-rl` を代わりに使用してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 複数の書字方向の使用

この例では、すべての書字方向を示し、各モードでさまざまな言語のテキストを表示します。

#### HTML

HTML は単純な {{HTMLElement("table")}} であり、行方向に書字方向を、列方向にその書字方向を使用してさまざまな種類のテキストが表示される様子を表します。

```html
<table>
  <tr>
    <th>値</th>
    <th>縦書きの文字</th>
    <th>横書き (LTR) の文字</th>
    <th>横書き (RTL) の文字</th>
    <th>混在する文字</th>
  </tr>
  <tr>
    <td>horizontal-tb</td>
    <td class="example Text1"><span>我家没有电脑。</span></td>
    <td class="example Text1"><span>Example text</span></td>
    <td class="example Text1"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text1"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-lr</td>
    <td class="example Text2"><span>我家没有电脑。</span></td>
    <td class="example Text2"><span>Example text</span></td>
    <td class="example Text2"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text2"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>vertical-rl</td>
    <td class="example Text3"><span>我家没有电脑。</span></td>
    <td class="example Text3"><span>Example text</span></td>
    <td class="example Text3"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text3"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-lr</td>
    <td class="example Text4"><span>我家没有电脑。</span></td>
    <td class="example Text4"><span>Example text</span></td>
    <td class="example Text4"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text4"><span>1994年に至っては</span></td>
  </tr>
  <tr>
    <td>sideways-rl</td>
    <td class="example Text5"><span>我家没有电脑。</span></td>
    <td class="example Text5"><span>Example text</span></td>
    <td class="example Text5"><span>מלל ארוך לדוגמא</span></td>
    <td class="example Text5"><span>1994年に至っては</span></td>
  </tr>
</table>
```

#### CSS

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px black solid;
  padding: 3px;
}
th {
  background-color: lightgray;
}
.example {
  height: 75px;
  width: 75px;
}
```

内容物の方向を調整する CSS は次のようになります。

```css
.example.Text1 span,
.example.Text1 {
  writing-mode: horizontal-tb;
  -webkit-writing-mode: horizontal-tb;
  -ms-writing-mode: horizontal-tb;
}

.example.Text2 span,
.example.Text2 {
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: vertical-lr;
}

.example.Text3 span,
.example.Text3 {
  writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
}

.example.Text4 span,
.example.Text4 {
  writing-mode: sideways-lr;
  -webkit-writing-mode: sideways-lr;
  -ms-writing-mode: sideways-lr;
}

.example.Text5 span,
.example.Text5 {
  writing-mode: sideways-rl;
  -webkit-writing-mode: sideways-rl;
  -ms-writing-mode: sideways-rl;
}
```

#### 結果

以下の画像は、ブラウザーの `writing-mode` の対応が不完全な場合のために、出力結果がどのように見えるかを示したものです。

![](screenshot_2020-02-05_21-04-30.png)

{{EmbedLiveSample("Using_multiple_writing_modes", 400, 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の [`writing-mode`](/ja/docs/Web/SVG/Attribute/writing-mode) 属性
- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
- [CSS 論理的プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties)
- [Styling vertical text (Chinese, Japanese, Korean and Mongolian)](https://www.w3.org/International/articles/vertical-text/)
- 広範なブラウザーの対応試験結果: [https://w3c.github.io/i18n-tests/results/writing-mode-vertical](https://w3c.github.io/i18n-tests/results/writing-mode-vertical)
