---
title: <corner-shape-value>
slug: Web/CSS/Reference/Values/corner-shape-value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`<corner-shape-value>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、コンテナーの角の形状を記述します。これは {{cssxref("corner-shape")}} 一括指定プロパティと、その[構成要素のプロパティ](/ja/docs/Web/CSS/Reference/Properties/corner-shape#構成要素のプロパティ)で使用され、影響を受けるコンテナーの角に適用される形状を指定します。

## 構文

`<corner-shape-value>` データ型は、独自の形状を定義する {{cssxref("superellipse()")}} 関数、またはよくある `superellipse()` 値を表す 6 つのキーワードのいずれかを取ります。

### 値

- {{cssxref("superellipse()")}}
  - : 角の独自の超楕円図形を定義します。負の引数は内側へ湾曲する（凹状の）曲線を生成し、正の引数は外側へ湾曲する（凸状の）曲線を生成します。
- キーワード
  - : 利用可能なキーワードは次の通りです。
    - `bevel`
      - : 凸でも凹でもない、直線的な斜めの角を定義します。`bevel` キーワードは `superellipse(0)` と同等です。
    - `notch`
      - : 90 度の凹んだ正方形の角を定義します。`notch` キーワードは `superellipse(-infinity)` と同等です。
    - `round`
      - : 標準的な丸みのある角を定義します。これは、`corner-shape` が適用されていない状態で {{cssxref("border-radius")}} によって作成される、通常の凸の楕円です。`round` キーワードは `superellipse(1)` と同等です。これがすべての `corner-shape` プロパティの既定値です。
    - `scoop`
      - : 凹んだ通常の楕円を定義します。`scoop`キーワードは`superellipse(-1)`と同等です。
    - `square`
      - : 90 度の凸角を持つ角を定義します。これは、`border-radius`（または `border-radius: 0`）が適用されていない場合のデフォルトの角の形状です。`square` キーワードは `superellipse(infinity)` と同等です。
    - `squircle`
      - : 「スクイークル」を定義します。これは `round` と `square` の中間にある凸曲線です。`squircle` キーワードは `superellipse(2)` と同等です。

> [!NOTE]
> 異なる `superellipse()` 値間や、異なる角のキーワード間を滑らかにアニメーションすることが可能です。アニメーションはそれらの `superellipse()` 相当値間で補間処理されるためです。

## 形式文法

{{csssyntax}}

## 例

### `<corner-shape-value>` 値の比較

この例では、さまざまな `<corner-shape-value>` 値を選択することができるドロップダウンメニューと、コンテナーの {{cssxref("border-radius")}} を更新するスライダーが指定されています。これにより、異なるキーワードと `superellipse()` 引数値の効果を視覚化することができます。

`corner-shape` プロパティはボックスの角の形状を定義し、形状が適用される領域は `border-radius` プロパティで指定します。簡潔化のためコードは省略していますが、[`corner-shape` 値の完全な説明](/ja/docs/Web/CSS/Reference/Properties/corner-shape#corner-shape_値の比較)やその他の関連する例は、{{cssxref("corner-shape")}} リファレンスページで確認できます。

```html hidden live-sample___value-comparison
<form>
  <div>
    <label for="corner-shape-choice">corner-shape 値を選択:</label>
    <select id="corner-shape-choice">
      <optgroup label="Keywords">
        <option value="square">square | superellipse(infinity)</option>
        <option selected value="squircle">squircle | superellipse(2)</option>
        <option value="round">round | superellipse(1)</option>
        <option value="bevel">bevel | superellipse(0)</option>
        <option value="scoop">scoop | superellipse(-1)</option>
        <option value="notch">notch | superellipse(-infinity)</option>
      </optgroup>
      <optgroup label="Functions">
        <option>superellipse(3)</option>
        <option>superellipse(1.5)</option>
        <option>superellipse(0.5)</option>
        <option>superellipse(-0.5)</option>
        <option>superellipse(-1.5)</option>
        <option>superellipse(-3)</option>
      </optgroup>
    </select>
  </div>
  <div>
    <label for="radius-slider">border-radius 値を選択:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

```css hidden live-sample___value-comparison
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

select {
  padding: 3px 5px;
}

form div:nth-of-type(2) {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___value-comparison
const rectangle = document.querySelector("section");
const select = document.querySelector("select");
const range = document.getElementById("radius-slider");

function setCorners() {
  rectangle.style.cornerShape = select.value;
  const brValue = `${range.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${select.value};</code><br><code>border-radius: ${brValue};</code></div>`;
}

select.addEventListener("change", setCorners);
range.addEventListener("input", setCorners);
setCorners();
```

{{EmbedLiveSample("value-comparison", "100%", "300")}}

> [!NOTE]
> [`superellipse()` 関数の値の比較](/ja/docs/Web/CSS/Reference/Values/superellipse#superellipse_値の比較)の例も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("corner-shape")}}
- {{cssxref("border-radius")}}
- {{cssxref("superellipse()")}}
- [CSS 境界とボックス装飾](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations)モジュール
