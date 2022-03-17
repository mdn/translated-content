---
title: Element.scrollLeft
slug: Web/API/Element/scrollLeft
tags:
  - API
  - CSSOM View
  - プロパティ
  - リファレンス
browser-compat: api.Element.scrollLeft
translation_of: Web/API/Element/scrollLeft
---
{{APIRef("DOM")}}

**`Element.scrollLeft`** プロパティは、要素の内容が左端からスクロールするピクセル数を取得または設定します。

要素の {{cssxref("direction")}} が `rtl` (right-to-left、右書き) の場合、 `scrollLeft` が `0` のときにスクロールバーが右端の位置（スクロールする内容の開始位置）にあり、コンテンツの末尾にスクロールするにつれて、負の数が増加していきます。

> **Warning:** 画面拡大を使用するシステムでは、 `scrollLeft` が小数になることがあります。

## 構文

### 値の取得

```js
// スクロールしたピクセル数を取得
var sLeft = element.scrollLeft;
```

`sLeft` は `element` が左端からスクロールしたピクセル数を整数で表現したものです。

### 値の設定

```js
// スクロールしたピクセル数を設定
element.scrollLeft = 10;
```

`scrollLeft` は任意の整数値で設定することができます。しかし、

- 要素がスクロールできない場合 (例えば、はみ出した部分がない場合)、 `scrollLeft` は `0` に設定されます。
- 指定された値が `0` より小さかったら (右書きの要素では `0` より大きかったら)、 `scrollLeft` は `0` に設定されます。
- 指定された値が、コンテンツがスクロールできる最大値を超えていたら、 `scrollLeft` は最大値に設定されます。

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
const button = document.getElementById('slide');

button.onclick = function () {
  document.getElementById('container').scrollLeft += 20;
};
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN's Measuring Element Dimension and Location](<https://msdn.microsoft.com/library/hh781509(v=vs.85).aspx> "MSDN Measuring Element Dimension and Location")
- {{domxref("Element.scrollTop")}}
- {{domxref("Element.scrollTo()")}}
