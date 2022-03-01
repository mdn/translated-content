---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
tags:
  - API
  - CSSOM View
  - NeedsArtUpdate
  - NeedsMarkupWork
  - プロパティ
  - リファレンス
browser-compat: api.Element.scrollTop
translation_of: Web/API/Element/scrollTop
---
{{APIRef("DOM")}}

**`Element.scrollTop`** プロパティは、要素の内容が垂直にスクロールするピクセル数を取得または設定します。

要素の `scrollTop` の値は、要素の上から最も上の*表示されている*コンテンツまでの距離を測ったものです。要素の内容が垂直スクロールバーを生成しなかった場合は、 `scrollTop` の値は `0` になります。

`scrollTop` がルート要素 (`<html>` 要素) に対して使用されると、ウィンドウの `scrollY` が返されます。[これは `scrollTop` の特例です](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-scrolltop)。

> **Warning:** 画面の拡大縮小を使用するシステムでは、 `scrollTop` が小数になることがあります。

## 構文

```js
// スクロールしたピクセル数を取得
var intElemScrollTop = someElement.scrollTop;
```

このコードを実行した後、 `intElemScrollTop` はこの要素 ({{domxref("Element")}}) が上方向にスクロールしたピクセル数に対応した整数になります。

```js
// スクロールするピクセル数を設定
element.scrollTop = intValue;
```

`scrollTop` は任意の整数値で設定することができます。しかし、

- 要素がスクロールできない場合 (例えば、はみ出した部分がない場合や、要素に "**non-scrollable**" のプロパティがある場合)、 `scrollTop` は `0` に設定されます。
- `scrollTop` は負の数には対応していません。代わりに、 `0` に戻ります。
- 指定された値が、コンテンツがスクロールできる最大値を超えていたら、 `scrollTop` は最大値に設定されます。

## 例

### 要素のスクロール

この例で、破線の境界線の付いた内部のコンテナーをスクロールしてみて、 `scrollTop` の値がどのように変わるかを確認してください。

#### HTML

```html

<div id="container">
  <div id="scroller">
      <p>Far out in the uncharted backwaters of the unfashionable end
      of the western spiral arm of the Galaxy lies a small unregarded
      yellow sun. Orbiting this at a distance of roughly ninety-two million
      miles is an utterly insignificant little blue green planet whose
      ape-descended life forms are so amazingly primitive that they still
      think digital watches are a pretty neat idea.</p>
  </div>
</div>

<div id="output">scrollTop: 0</div>
```

#### CSS

```css
#scroller {
  overflow: scroll;
  height: 150px;
  width: 150px;
  border: 5px dashed orange;
}

#output {
  padding: 1rem 0;
}
```

#### JavaScript

```js
const scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", event => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
});
```

#### 結果

{{EmbedLiveSample("Scrolling_an_element", 400, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN's Measuring Element Dimension and Location](<https://msdn.microsoft.com/library/hh781509(v=vs.85).aspx> "MSDN Measuring Element Dimension and Location")
- {{domxref("Element.scrollLeft")}}
- {{domxref("Element.scrollTo()")}}
