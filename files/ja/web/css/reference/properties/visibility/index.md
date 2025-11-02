---
title: visibility
slug: Web/CSS/Reference/Properties/visibility
original_slug: Web/CSS/visibility
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`visibility`** は CSS のプロパティで、文書のレイアウトを変更することなく要素を表示したり非表示にしたりします。このプロパティは {{HTMLElement("table")}} の行や列を隠すこともできます。

{{InteractiveExample("CSS デモ: visibility")}}

```css interactive-example-choice
visibility: visible;
```

```css interactive-example-choice
visibility: hidden;
```

```css interactive-example-choice
visibility: collapse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">隠れます</div>
    <div>アイテム 2</div>
    <div>アイテム 3</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
  display: flex;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

要素を不可視にしてレイアウトから除去するには、 `visibility` を使用する代わりに {{cssxref("display")}} プロパティを `none` に設定してください。

## 構文

```css
/* キーワード値 */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* グローバル値 */
visibility: inherit;
visibility: initial;
visibility: revert;
visibility: revert-layer;
visibility: unset;
```

`visibility` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `visible`
  - : 要素のボックスが可視になります。
- `hidden`
  - : 要素のボックスは不可視になります (描画されません) が、レイアウトには通常通り影響します。子孫要素は `visibility` が `visible` に設定されていれば可視になります。([タブ順](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex)で操作された時などに) 要素はフォーカスを受け取ることができません。
- `collapse`
  - : キーワード `collapse` は、要素によって異なる効果があります。
    - {{HTMLElement("table")}} の行、列、列グループ、行グループでは、行や列が不可視になり、 (表の列や行に `{{Cssxref("display")}}: none` が適用された場合のように) 占めていた領域も除去されます。しかし、他の行や列の寸法は、不可視になった行や列のセルが存在するときのように計算されます。この値は表全体の幅や高さを強制的に再計算することなく、すばやく行や列を不可視にすることができます。
    - 折りたたまれたになったフレックスアイテムとルビ注釈は非表示になり、それらが占めていた空白は除去されます。
    - その他の要素では、 `collapse` は `hidden` と同じと扱われます。

## アクセシビリティ

要素の `visibility` の値に `hidden` を使用すると、 [アクセシビリティツリー](/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis)から削除されます。これは要素及びその子孫要素が読み上げ技術でアナウンスされない結果になります。

## 補間

visibility の値は*可視*及び*不可視*の間で補間可能です。従って、開始または終了の値の一つが `visible` でない限りは、補間は行われません。値は離散的なステップとして補間され、タイミング関数の `0` と `1` 間の値が、 `visible` に対応し、タイミング関数の他の値 (トランジションの開始点または終了点でのみ、または \[0、1] の外側の y 値を有する `cubic-bezier()` 関数の結果として) はより近い終了点に対応します。

## メモ

- 一部の現行ブラウザーでは、`visibility: collapse` が対応していないか、一部不正確です。テーブルの行と列以外の要素では、`visibility: hidden` と同様に正しく処理されない場合があります。
- テーブルの行に適用した場合、テーブルに、表示されている行と折りたたまれている行の両方にまたがるセル ({{htmlelement("td")}} および {{htmlelement("th")}} 要素) が含まれていると、セルが予期しない方法でレンダリングされる場合があります。またがるセルが折りたたまれた行で定義されている場合、ブラウザーは、後続の行のセルが `visibility: collapse` が適用されているかのように、表のセルをレンダリングしません。セルが、表示されている行で定義され、折りたたまれた行にまたがっている場合、セルのコンテンツは再配置されませんが、セル自体の表示はブラウザーによって異なります。ほとんどのブラウザーは、非表示の行のブロックサイズだけ、セルのブロックサイズを縮小します。これは、コンテンツがブロックサイズの方向にセルよりも大きくなる場合があることを意味しています。ブラウザーによっては、あふれたコンテンツは `overflow: hidden` が設定されているかのように切り捨てられますが、他のブラウザーでは `overflow: visible` が設定されているかのように、コンテンツが次の行に流れ込みます。それ以外のブラウザーでは、セルは行が折りたたまれていないかのようにレンダリングされ、行内の他のすべてのセルは、行自体ではなく個々のセルに `visibility: collapse` が設定されているかのように非表示になります。
- `visibility: collapse` は、折りたたまれたセル内に表が入れ子になっている場合、入れ子になった表に `visibility: visible` が明示的に指定されていない限り、表のレイアウトを変更する可能性があります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な例

#### HTML

```html-nolint
<p class="visible">最初の段落は表示されています。</p>
<p class="not-visible">2 つ目の段落は表示されません。</p>
<p class="visible">
  3 つ目の段落が表示されています。 2 つ目の段落がまだ空間を占めていることに注目してください。
</p>
```

#### CSS

```css
.visible {
  visibility: visible;
}

.not-visible {
  visibility: hidden;
}
```

{{EmbedLiveSample('基本的な例')}}

### 表の例

#### HTML

```html
<table>
  <tr>
    <td>1.1</td>
    <td class="collapse">1.2</td>
    <td>1.3</td>
  </tr>
  <tr class="collapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tr>
</table>
```

#### CSS

```css
.collapse {
  visibility: collapse;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid gray;
}
```

{{EmbedLiveSample('表の例')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("display")}}
- SVG の {{SVGAttr("visibility")}} 属性
