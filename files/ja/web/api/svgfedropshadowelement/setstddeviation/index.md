---
title: "SVGFEDropShadowElement: setStdDeviation() メソッド"
short-title: setStdDeviation()
slug: Web/API/SVGFEDropShadowElement/setStdDeviation
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

`setStdDeviation()` は {{domxref("SVGFEDropShadowElement")}} インターフェイスのメソッドで、{{SVGAttr("stdDeviation")}} 属性の値を設定します。

## 構文

```js-nolint
setStdDeviation(x, y)
```

### 引数

- `x`
  - : 浮動小数点数で、{{SVGAttr("stdDeviation")}} 属性の X 成分を表します。
- `y`
  - : 浮動小数点数で、{{SVGAttr("stdDeviation")}} 属性の Y 成分を表します。

### 返値

なし ({{jsxref('undefined')}})。

## 例

### `setStdDeviation()` の使用

この例では、`SVGFEDropShadowElement` インターフェイスの `setStdDeviation()` メソッドを使用して、`<feDropShadow>` フィルターのシャドウ効果におけるぼかし処理の水平および垂直方向の標準偏差を設定します。

```html
<svg height="200" width="200" viewBox="0 0 200 200">
  <defs>
    <filter id="drop-shadow-filter">
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5 5"
        flood-color="gray" />
    </filter>
  </defs>

  <!-- 初期状態で灰色の影のついた矩形 -->
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    fill="red"
    filter="url(#drop-shadow-filter)" />
</svg>

<!-- 影を更新するボタン -->
<button id="updateShadow" type="button">影を更新</button>
```

```js
// feDropShadow 要素を取得
const dropShadow = document.querySelector("feDropShadow");

// 更新処理を起動するボタン
document.getElementById("updateShadow").addEventListener("click", () => {
  // 影の標準偏差（ぼかし半径）を変更
  dropShadow.setStdDeviation(15, 20);
});
```

{{EmbedLiveSample("Examples", "", "240")}}

赤い矩形をクリックすると、ドロップシャドウのぼかし効果が更新されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedLength")}}
