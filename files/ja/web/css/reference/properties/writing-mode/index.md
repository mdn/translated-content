---
title: writing-mode
slug: Web/CSS/Reference/Properties/writing-mode
l10n:
  sourceCommit: dd7de10dc91e9f2df29b80fec20da303439b6215
---

**`writing-mode`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストの行のレイアウトを横書きにするか縦書きにするか、ブロックのフロー方向を左向きにするか右向きにするかを設定します。文書全体に設定する場合は、ルート要素 (HTML 文書の場合は `html` 要素) に設定してください。

{{InteractiveExample("CSS デモ: writing-mode")}}

```css interactive-example-choice
writing-mode: horizontal-tb;
```

```css interactive-example-choice
writing-mode: vertical-lr;
```

```css interactive-example-choice
writing-mode: vertical-rl;
```

```css interactive-example-choice
writing-mode: sideways-rl;
```

```css interactive-example-choice
writing-mode: sideways-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
}
```

このプロパティは、ブロックのフロー方向を指定します。これは、ブロックレベルコンテナーが積まれる方向と、インラインレベルのコンテンツがブロックコンテナー内でフローする方向です。このように、 `writing-mode` プロパティはブロックレベルのコンテンツの順序も決定します。

## 構文

```css
/* キーワード値 */
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;
writing-mode: sideways-rl;
writing-mode: sideways-lr;

/* グローバル値 */
writing-mode: inherit;
writing-mode: initial;
writing-mode: revert;
writing-mode: revert-layer;
writing-mode: unset;
```

`writing-mode` プロパティは、以下のいずれかの値として指定されます。横書きの場合は[その文字体系の書字方向](https://www.w3.org/International/questions/qa-scripts.en)も影響し、左書き (`ltr`、英語やその他の多くの言葉) や右書き (`rtl`、ヘブライ語やアラビア語) のどちらかになります。

### 値

- `horizontal-tb`
  - : `ltr` の言語では、コンテンツは左から右へ水平に流れます。`rtl` の言語では、コンテンツは右から左へ水平に流れます。次の水平の行は、前の行の下に配置されます。
- `vertical-rl`
  - : `ltr` の言語では、コンテンツは上から下へ垂直に流れ、次の垂直の行は、前の行の左に配置されます。`rtl` の言語では、コンテンツは下から上へ垂直に流れ、次の垂直の行は、前の行の右に配置されます。
- `vertical-lr`
  - : `ltr` の言語では、コンテンツは上から下へ垂直に流れ、次の垂直の行は、前の行の右に配置されます。 `rtl` の言語では、コンテンツは下から上へ垂直に流れ、次の垂直の行は、前の行の左に配置されます。
- `sideways-rl`
  - : `ltr` の言語では、コンテンツは下から上へ垂直に流れます。 `rtl` の言語では、コンテンツは上から下へ垂直に流れます。垂直方向に並べられる書体を含むすべての文字を右へ横倒しにします。
- `sideways-lr`
  - : `ltr` の言語では、コンテンツは上から下へ垂直に流れます。 `rtl` の言語では、コンテンツは下から上へ垂直に流れます。垂直方向に並べられる書体を含むすべての文字を左へ横倒しにします。
- `lr`
  - : SVG1 文書を除き、非推奨です。CSS では、`horizontal-tb` を代わりに使用してください。
- `lr-tb`
  - : SVG1 文書を除き、非推奨です。CSS では、`horizontal-tb` を代わりに使用してください。
- `rl`
  - : SVG1 文書を除き、非推奨です。CSS では、`horizontal-tb` を代わりに使用してください。
- `tb`
  - : SVG1 文書を除き、非推奨です。CSS では、`vertical-lr` を代わりに使用してください。
- `tb-lr` {{Deprecated_Inline}}
  - : SVG1 文書を除き、非推奨です。CSS では、`vertical-lr` を代わりに使用してください。
- `tb-rl`
  - : SVG1 文書を除き、非推奨です。CSS では、`vertical-rl` を代わりに使用してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 複数の書字方向の使用

この例では、すべての書字方向を示し、さまざまな言語のテキストを各モードで表示します。

#### HTML

HTML は単純な {{HTMLElement("table")}} であり、行方向に書字方向を、列方向にその書字方向を使用してさまざまな種類のテキストが表示される様子を表します。

```html-nolint
<table>
  <caption>
    様々な書字方向の使用
  </caption>
  <thead>
    <tr>
      <th>値</th>
      <th>縦書きの文字</th>
      <th>横書き (LTR) の文字</th>
      <th>横書き (RTL) の文字</th>
      <th>混在する文字</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text1">
      <th>horizontal-tb</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="text2">
      <th>vertical-lr</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="text3">
      <th>vertical-rl</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="experimental text4">
      <th>sideways-lr</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
    <tr class="experimental text5">
      <th>sideways-rl</th>
      <td>我家没有电脑。</td>
      <td>Example text</td>
      <td>מלל ארוך לדוגמא</td>
      <td>1994年に至っては</td>
    </tr>
  </tbody>
</table>
<p class="notice">
  このブラウザーは <code>sideways-lr</code> または <code>sideways-rl</code> 値に対応していません。
</p>
```

#### CSS

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}

.experimental {
  display: none;
}

.notice {
  display: table-row;
  font-weight: bold;
  text-align: center;
}

@supports (writing-mode: sideways-lr) {
  .experimental {
    display: table-row;
  }
  .notice {
    display: none;
  }
}
```

コンテンツの方向を調整する CSS は次のようになります。

```css
.text1 td {
  writing-mode: horizontal-tb;
}

.text2 td {
  writing-mode: vertical-lr;
}

.text3 td {
  writing-mode: vertical-rl;
}

.text4 td {
  writing-mode: sideways-lr;
}

.text5 td {
  writing-mode: sideways-rl;
}
```

#### 結果

{{EmbedLiveSample("Using_multiple_writing_modes", 400, 700)}}

### writing-mode と座標変換の使用

ブラウザーが `sideways-lr` を対応していない場合、スクリプトの方向に応じて類似の効果を得るための回避策として {{cssxref("transform")}} を使用してください。
`vertical-rl` の効果は `sideways-lr` と同様であるため、右書きの文字体系では変換は不要です。
場合によっては、テキストを 180 度回転させるだけで `sideways-lr` の効果を得られますが、フォントの字形は回転を想定して設計されていないことがあるため、予期しない位置指定やレンダリングが生じる恐れがあります。

#### HTML

```html
<table>
  <caption>
    writing-mode と座標変換の使用
  </caption>
  <thead>
    <tr>
      <th>vertical-lr</th>
      <th>vertical-lr と座標変換</th>
      <th>sideways-lr</th>
      <th>回転のみ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="vertical-lr">我家没有电脑。</span>
        <span class="vertical-lr">Example text</span>
      </td>
      <td>
        <span class="vertical-lr rotated">我家没有电脑。</span>
        <span class="vertical-lr rotated">Example text</span>
      </td>
      <td>
        <span class="sideways-lr">我家没有电脑。</span>
        <span class="sideways-lr">Example text</span>
      </td>
      <td>
        <span class="only-rotate">我家没有电脑。</span>
        <span class="only-rotate">Example text</span>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.vertical-lr {
  writing-mode: vertical-lr;
}

.rotated {
  transform: rotate(180deg);
}

.sideways-lr {
  writing-mode: sideways-lr;
}

.only-rotate {
  inline-size: fit-content;
  transform: rotate(-90deg);
}
```

```css hidden
table {
  border-collapse: collapse;
}
td,
th {
  border: 2px black solid;
  padding: 4px;
}
th {
  background-color: lightgray;
}
span {
  display: inline-block;
  width: 1.5em;
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample("Using_writing-mode_with_transforms", 400, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("direction")}}
- {{Cssxref("unicode-bidi")}}
- {{Cssxref("text-orientation")}}
- {{Cssxref("text-combine-upright")}}
- [CSS 論理的プロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- [CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)モジュール
- SVG の {{SVGAttr("writing-mode")}} 属性
- [垂直フォームコントロールの作成](/ja/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [テキストの様々な方向の扱い](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Styling vertical text (Chinese, Japanese, Korean and Mongolian)](https://www.w3.org/International/articles/vertical-text/) - W3.org (2022)
