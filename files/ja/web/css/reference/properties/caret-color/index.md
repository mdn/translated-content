---
title: caret-color
slug: Web/CSS/Reference/Properties/caret-color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`caret-color`** は CSS のプロパティで、次に入力された文字が挿入される位置を示す可視マーカーである**入力キャレット**の色を設定します。これは**テキスト入力カーソル**と呼ばれることもあります。これは挿入位置に現れる目印であり、次に入力される文字が追加されるか、または次に削除される文字が除去される位置を示します。

{{InteractiveExample("CSS デモ: caret-color")}}

```css interactive-example-choice
caret-color: red;
```

```css interactive-example-choice
caret-color: auto;
```

```css interactive-example-choice
caret-color: transparent;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <p>フィールド内にテキストを入力するとキャレットが見えます。</p>
    <p><input id="example-element" type="text" /></p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.2rem;
}
```

## 構文

```css
/* キーワード値 */
caret-color: auto;
caret-color: transparent;
caret-color: currentColor;

/* <color> 値 */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0 200 0);
caret-color: hsl(228deg 4% 24% / 80%);

/* グローバル値 */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: revert-layer;
caret-color: unset;
```

### 値

- `auto`
  - : 一般的に [`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) に解決します。これは変更されるテキストの {{cssxref("color")}} です。

- {{cssxref("&lt;color&gt;")}}
  - : キャレットの色です。

## 解説

挿入キャレットは、編集可能なテキスト内、またはテキスト入力を受け入れる要素内で、ユーザーがコンテンツを挿入（または削除）する位置を示す可視的な目印です。キャレットは通常、文字の追加や削除が行われる位置を示す細い縦線です。一般的に点滅する（点灯と消灯を繰り返す）ため、より目立ちやすくなっています。キャレットは編集可能な要素がフォーカスされている場合にのみ現れます。 デフォルトでは、このキャレットはテキストの色と同じです。`caret-color` プロパティを使用すると、このキャレットの色を `currentColor` 以外の色に設定したり、色付きのキャレットをデフォルトに戻したりすることができます。

`auto` 値は挿入カーソルを `currentColor` に設定します。これは追加または削除されるテキストの {{cssxref("color")}} です。ユーザーエージェントは、周囲のコンテンツとの視認性とコントラストを保証するために、{{cssxref("color")}}、{{cssxref("background-color")}}、影、その他の要素を考慮して変更することがあります。ただし実際には、すべてのブラウザーがデフォルトまたは `caret-color` が `auto` に設定されている場合に、現在の色を使用します。有効な `<color>` を値として設定することができます。

### 挿入キャレットを理解する

挿入キャレット、つまりこのプロパティは、 テキスト入力を受け入れることが可能なテキストまたは要素にのみ適用されます。キャレットは、ユーザーがコンテンツを更新することができるフォーカス可能なユーザーインターフェイス要素に現れます。これには、自由形式のテキストを受け入れる {{HTMLElement("input")}} 要素、{{HTMLElement("textarea")}} 要素、および [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性が設定されている要素が含まれます。

キャレットは、`<input>` 要素のうち `password`、`text`、`search`、`tel`、`email` 型に現れることができます。日付や時刻、`color`、`hidden`、`radio`、`checkbox` 入力型にはキャレットは存在しません。一部のブラウザーでは `number` 入力型でもキャレットが表示される場合があります。テキストコンテンツを持たない要素にキャレットを表示することも可能です（例えば [`appearance: none`](/ja/docs/Web/CSS/Reference/Properties/appearance) を設定し `contenteditable` 属性を追加するなど）。ただし、この方法は推奨されません。

キャレットは、編集可能状態が無効化されていない場合に限り、編集可能な要素またはその子孫要素に表示することができます。例えば、子孫要素の `contentEditable` 属性を `false` に設定することで編集可能状態は無効化されます。要素が編集不可または選択不可の場合（例：{{cssxref("user-select")}} が `none` に設定されている場合）、キャレットは現れるべきではありません。

### キャレットとカーソル

キャレットには複数の種類があります。挿入キャレットのみが `caret-color` プロパティの影響を受けます。

多くのブラウザーは**ナビゲーションキャレット**を持っています。これは挿入キャレットと同様に機能しますが、編集不可のテキスト内でも動くことができます。

特定の {{cssxref("cursor")}} プロパティ値（`auto` や `text` など）で表示されるマウスカーソルの画像はキャレットに似ていることがありますが、キャレットではありません。カーソルです。

### `auto` のアニメーション

一般的に、`caret-color` が `auto` に設定されるかデフォルトで `auto` となる場合、ユーザーエージェントはアニメーション可能な `currentColor` を使用しています。ただし、`auto` は既定ではアニメーション可能な値ではありません。`caret-color` を `auto` から任意の色値へアニメーションまたはトランジションする際、補間は行われません。このアニメーションは[離散的](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete)です。つまり、色は {{cssxref("animation-duration")}} または {{cssxref("transition-duration")}} の中間点で `currentColor` の色に切り替わります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 独自のキャレット色の設定

#### HTML

```html
<input value="このフィールドは既定のキャレットを使用します。" size="64" />
<input class="custom" value="キャレットが独自の色になります！" size="64" />
<p contenteditable class="custom">
  この段落は編集可能であり、 同様にキャレットが独自の色です！
</p>
```

#### CSS

```css
input {
  caret-color: auto;
  display: block;
  margin-bottom: 0.5em;
}

input.custom {
  caret-color: orange;
}

p.custom {
  caret-color: green;
}
```

#### 結果

{{EmbedLiveSample('Setting_a_custom_caret_color', 500, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("caret-animation")}}, {{cssxref("caret-shape")}}
- {{cssxref("caret")}} 一括指定
- {{cssxref("color")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("cursor")}}
- {{cssxref("text-emphasis")}}
- CSS の {{cssxref("&lt;color&gt;")}} データ型
- {{HTMLElement("input")}} 要素
- HTML の [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性
