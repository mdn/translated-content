---
title: float
slug: Web/CSS/Reference/Properties/float
original_slug: Web/CSS/float
l10n:
  sourceCommit: 6aa664dc5ccb5edf0897f99ad5feb59325dff831
---

**`float`** は CSS のプロパティで、要素を包含ブロックの左右どちらかの側に沿うように設置し、テキストやインライン要素がその周りを回りこめるように定義します。要素はウェブページの通常のフローから外れますが、（[絶対位置指定](/ja/docs/Web/CSS/Reference/Properties/position#absolute_positioning) とは対照的に）フローの一部であり続けます。

{{InteractiveExample("CSS デモ: float")}}

```css interactive-example-choice
float: none;
```

```css interactive-example-choice
float: left;
```

```css interactive-example-choice
float: right;
```

```css interactive-example-choice
float: inline-start;
```

```css interactive-example-choice
float: inline-end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Float me</div>
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  text-align: left;
  width: 80%;
  line-height: normal;
}

#example-element {
  border: solid 10px #efac09;
  background-color: #040d46;
  color: white;
  padding: 1em;
  width: 40%;
}
```

_浮動要素_ (floating element) とは、`float` の計算値が `none` 以外の要素です。

`float` は暗黙的にブロックレイアウトの使用を意味しており、 {{cssxref("display")}} の計算値を変更する場合があります。

| 指定値               | 計算値     |
| -------------------- | ---------- |
| `inline`             | `block`    |
| `inline-block`       | `block`    |
| `inline-table`       | `table`    |
| `table-row`          | `block`    |
| `table-row-group`    | `block`    |
| `table-column`       | `block`    |
| `table-column-group` | `block`    |
| `table-cell`         | `block`    |
| `table-caption`      | `block`    |
| `table-header-group` | `block`    |
| `table-footer-group` | `block`    |
| `inline-flex`        | `flex`     |
| `inline-grid`        | `grid`     |
| _その他_             | _変更なし_ |

> [!NOTE]
> JavaScript で {{domxref("HTMLElement.style")}} オブジェクトのメンバーとしてこのプロパティを参照する場合、最近のブラウザーは `float` に対応していますが、古いブラウザーは `cssFloat` という綴りになります。これは、ハイフン区切りの CSS 名は DOM メンバーとして{{Glossary("camel_case", "キャメルケース")}}で綴るというルールの例外でした（これは "float" が JavaScript の予約語であるためで、 "class" を "className" とする必要があったり、 \<label> の "for" を "htmlFor" とする必要があったりするのと同じです）。

## 構文

```css
/* キーワード値 */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* グローバル値 */
float: inherit;
float: initial;
float: revert;
float: revert-layer;
float: unset;
```

`float` プロパティは、以下の値からひとつのキーワードを選択して指定します。

### 値

- `left`
  - : 要素は、必ずその包含ブロックの左側に浮動します。
- `right`
  - : 要素は、必ずその包含ブロックの右側に浮動します。
- `none`
  - : 要素は決して浮動しません。
- `inline-start`
  - : 要素は、必ずその包含ブロックの始端側に浮動します。左書きでは左側、右書きでは右側になります。
- `inline-end`
  - : 要素は、必ずその包含ブロックの終端側に浮動します。左書きでは右側、右書きでは左側になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 浮動要素の位置をどのように決めるか

上述のとおり、要素は浮動すると、文書の通常のフローから外されます (ただし、フローの一部であり続けます)。浮動要素は、包含ブロックか*他の浮動要素*の辺に触れるまで、左側または右側に移動させられます。

この例では、 3 つの赤い正方形があります。このうち 2 つは左側に浮動しており、 1 つは右側に浮動しています。 2 つめの「左の」赤い正方形は、 1 つめの正方形の右に置かれていることに注意してください。正方形を追加していくと、包含ボックスが埋まるまではその右側に詰め込まれていきますが、その後は次の行に回り込みます。

浮動要素は、少なくともその中に含まれるもっとも高い子の浮動要素と同じ高さでなければなりません。ここでは親を `width: 100%` かつ浮動要素として、その子の浮動要素を配置するのに十分な高さを確保し、親の幅を保証することで、子孫を浮動解除する必要がなくなるようにしています。

#### HTML

```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
    aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
    congue.
  </p>
</section>
```

#### CSS

```css
section {
  box-sizing: border-box;
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```

#### 結果

{{EmbedLiveSample('How_floated_elements_are_positioned','400','190')}}

### 浮動の解除

あるアイテムを浮動要素の下へ強制的に移動したいことがあるでしょう。例えば、段落は浮動要素に隣接させたいが、見出しは強制的に単独の行にしたい場合があるでしょう。この例については {{cssxref("clear")}} をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)
- アイテムを浮動要素の下へ強制的に移動させるには {{cssxref("clear")}} を使用します。
