---
title: "CSSFontPaletteValuesRule: basePalette プロパティ"
short-title: basePalette
slug: Web/API/CSSFontPaletteValuesRule/basePalette
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

**`basePalette`** は {{domxref("CSSFontPaletteValuesRule")}} インターフェイスの読み取り専用プロパティで、このルールに関連付けられたベースパレットを示します。

## 値

次の色値のいずれかを指定する文字列です。

- `light`
  - : フォントファイル内で、明るい背景に適用できるものとしてマークされている、つまり白に近い最初のパレットに一致します。フォント内にパレットがない場合、または要求されたメタデータを持つパレットがない場合、この値は `"0"` と等しくなります。
- `dark`
  - : フォントファイル内で、暗い背景に適用できるものとしてマークされている、つまり黒に近い最初のパレットに一致します。フォント内にパレットがない場合、あるいは要求されたメタデータを持つパレットがない場合、この値は `"0"` と等しくなります。
- インデックスの入った文字列（`"0"`, `"1"`, …など）
  - : インデックスに対応するパレットと一致します。最初のパレットは `"0"` に対応します。

## 例

### 関連付けられたベースパレットの読み取り

この例では、文書に追加されたスタイルシートにルールを追加し、文書内の最後のスタイルシートとして返しています (`document.styleSheets[document.styleSheets.length-1].cssRules`)。したがって、 `rules[2]` は最初の {{domxref("CSSFontPaletteValuesRule")}} オブジェクトを返し、 `rules[3]` は 2 つ目のオブジェクトを返します。

#### HTML

```html
<h2>default base-palette</h2>
<h2 class="two">base-palette at index 2</h2>
<h2 class="five">base-palette at index 5</h2>
<pre id="log"></pre>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

h2 {
  font-family: "Nabla";
}

@font-palette-values --two {
  font-family: "Nabla";
  base-palette: 2;
}

@font-palette-values --five {
  font-family: "Nabla";
  base-palette: 5;
}

.two {
  font-palette: --two;
}

.five {
  font-palette: --five;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const twoRule = rules[2]; // CSSFontPaletteValuesRule インターフェイス
const fiveRule = rules[3]; // CSSFontPaletteValuesRule インターフェイス

log.textContent = `${twoRule.name} の @font-palette-values のベースパレット: ${twoRule.basePalette}\n`;
log.textContent += `${fiveRule.name} の @font-palette-values のベースパレット: ${fiveRule.basePalette}`;
```

#### 結果

{{EmbedLiveSample("Read the associated base palette", "100", "255")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-palette-values")}} at-rule
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} descriptor
