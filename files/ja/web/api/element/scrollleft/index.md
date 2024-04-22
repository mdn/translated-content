---
title: "Element: scrollLeft プロパティ"
short-title: scrollLeft
slug: Web/API/Element/scrollLeft
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.scrollLeft`** プロパティは、要素の内容が左端からスクロールするピクセル数を取得または設定します。

要素の {{cssxref("direction")}} が `rtl`（right-to-left、右書き）の場合、`scrollLeft` が `0` のときにスクロールバーが右端の位置（スクロールする内容の開始位置）にあり、コンテンツの末尾にスクロールするにつれて、負の数が増加していきます。

`scrollLeft` は任意の整数値で設定することができます。しかし、

- 要素がスクロールできない場合（例えば、はみ出した部分がない場合）、 `scrollLeft` は `0` に設定されます。
- 指定された値が `0` より小さかったら（右書きの要素では `0` より大きかったら）、 `scrollLeft` は `0` に設定されます。
- 指定された値が、コンテンツがスクロールできる最大値を超えていたら、 `scrollLeft` は最大値に設定されます。

> **警告:** 画面拡大を使用するシステムでは、 `scrollLeft` が小数になることがあります。

## 値

数値です。

## 例

### HTML

```html
<div id="container">
  <div id="content">ボタンをクリックすると右へスライドします。</div>
</div>

<button id="slide" type="button">右へスライド</button>
```

### CSS

```css
#container {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  overflow-x: scroll;
}

#content {
  width: 250px;
  background-color: #ccc;
}
```

### JavaScript

```js
const button = document.getElementById("slide");

button.onclick = () => {
  document.getElementById("container").scrollLeft += 20;
};
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN's Measuring Element Dimension and Location](<https://msdn.microsoft.com/library/hh781509(v=vs.85).aspx>)
- {{domxref("Element.scrollTop")}}
- {{domxref("Element.scrollTo()")}}
