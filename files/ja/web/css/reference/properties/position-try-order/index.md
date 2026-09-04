---
title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

**`position-try-order`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アンカー位置指定要素の位置を、初期の位置設定ではなく利用可能な位置試行代替案を使用して設定するための、さまざまな代替オプションを指定することができます。

> [!NOTE]
> {{cssxref("position-try")}} 一括指定プロパティを使用すると `position-try-order` と {{cssxref("position-try-fallbacks")}} の値を単一の宣言で指定することができます。

## 構文

```css
/* キーワード */
position-try-order: normal;
position-try-order: most-height;
position-try-order: most-width;
position-try-order: most-block-size;
position-try-order: most-inline-size;

/* グローバル値 */
position-try-order: inherit;
position-try-order: initial;
position-try-order: revert;
position-try-order: revert-layer;
position-try-order: unset;
```

### 値

`position-try-order` プロパティは、キーワード値 `normal` または `<try-size>` のどちらかで指定します。

- `normal`
  - : デフォルト。要素が最初に表示される際、位置指定の代替オプションは一切試行されません。
- `<try-size>`
  - : 様々な試行サイズ代替オプションを定義します。これらは、アンカー位置指定された要素が最初にレンダリングされる際に適用すべき試行代替案を決定する基準を指定します。利用できる値は以下の通りです。
    - `most-height`
      - : 要素の包含ブロックに、最大の高さを与える配置試行代替オプションが適用されます。
    - `most-width`
      - : 要素の包含ブロックに、最大の幅を与える配置試行代替オプションが適用されます。
    - `most-block-size`
      - : 要素の包含ブロックに、ブロック方向の最大のサイズを与える配置試行代替オプションが適用されます。
    - `most-inline-size`
      - : 要素の包含ブロックに、インライン方向の最大のサイズを与える配置試行代替オプションが適用されます。

## 解説

`position-try-order` プロパティは、位置指定要素がスクロールされる時ではなく、最初に表示される時に位置指定試行代替オプションを利用するという点で、他の位置指定試行機能とは焦点が若干異なります。例えば、要素をデフォルトの初期位置よりも高さや幅に余裕のある領域に初期表示したい場合などに有用です。

ブラウザーは利用できる位置指定試行代替オプションを検査し、指定されたサイズにおいてアンカー位置指定要素に最大の空間を与えるものを探します。その後、そのオプションを適用し、要素の初期スタイル設定を上書きします。

要素に割り当てる初期位置よりも広い幅／高さを提供する試行代替オプションが利用できない場合、位置指定の試行オプションは適用されません。実質的に、`position-try-order` が `normal` に設定された場合と同様の挙動となります。

アンカー機能と位置指定の詳細情報については、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールと[オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイドを参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `position-try-order` の使い方

個のデモは `position-try-order` の効果を示します。

#### HTML

この HTML には、アンカーと位置指定要素となる 2 つの {{htmlelement("div")}} 要素と、`position-try-order` の様々な値を選択することができるラジオボタンが含まれている `<form>` が含まれています。

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>

<form>
  <fieldset>
    <legend>試行順序を選択</legend>
    <div>
      <label for="radio-normal">normal</label>
      <input
        type="radio"
        id="radio-normal"
        name="position-try-order"
        value="normal"
        checked />
    </div>
    <div>
      <label for="radio-most-height">most-height</label>
      <input
        type="radio"
        id="radio-most-height"
        name="position-try-order"
        value="most-height" />
    </div>
  </fieldset>
</form>
```

#### CSS

この CSS では、アンカーに {{cssxref("anchor-name")}} が指定されており、大きな {{cssxref("margin")}} が設定されてビューポートの上部中央に配置されます。

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  margin: 90px auto;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

次に、`--custom-bottom` というカスタム位置指定オプションを指定します。これにより要素はアンカーの下に配置され、適切なマージンが適用されます。

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

最初に要素をアンカー要素の上に配置し、次に `position-try` 一括指定を使用してカスタム位置オプションを適用します。これにより `position-try-order` プロパティも `normal` に設定されます。

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try: normal --custom-bottom;
}
```

#### JavaScript

最後に、いくつかの JavaScript を記述します。これによりラジオボタンに [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントハンドラーが設定され、新しい値が選択されると、その値が情報ボックスの `position-try-order` プロパティに適用されます。

```js
const infobox = document.querySelector(".infobox");
const form = document.forms[0];
const radios = form.elements["position-try-order"];

for (const radio of radios) {
  radio.addEventListener("change", setTryOrder);
}

function setTryOrder(e) {
  const tryOrder = e.target.value;
  infobox.style.positionTryOrder = tryOrder;
}
```

#### 結果

{{ EmbedLiveSample("Basic `position-try-order` usage", "100%", "310") }}

順序オプション `most-height` を選択してみてください。これにより、`--custom-bottom` が位置試行代替オプションとして適用され、要素がアンカーの下に配置されます。これは、アンカーの下に上よりももっと縦の空間があるために発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("@position-try")}} アットルール
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
- [オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイド
