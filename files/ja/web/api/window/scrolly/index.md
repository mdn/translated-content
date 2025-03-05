---
title: window.scrollY
slug: Web/API/Window/scrollY
---

{{APIRef("CSSOM View")}}

{{domxref("Window")}} インターフェイスの読み取り専用プロパティである **`scrollY`** は、文書が現在垂直方向にスクロールしているピクセル数を返します。最近のブラウザーでは、この値はサブピクセル精度ですので、必ずしも整数であるとは限りません。文書が水平方向にスクロールしているピクセル数は {{domxref("Window.scrollX", "scrollX")}} プロパティで取得できます。

## 構文

```
var y = window.scrollY
```

### 値

実際に返される値は、文書が原点から垂直方向にスクロールした量をピクセル数で表す倍精度浮動小数点値であり、正の値は、内容物が上にスクロールしていることを表します。文書がサブピクセル精度の端末に表示されている場合は、返値も小数部を含むサブピクセル精度の値になります。文書が上にも下にもスクロールしていない場合、 `scrollY` は 0 になります。

> [!NOTE]
> 整数値が必要である場合は、 {{jsxref("Math.round()")}} を使用して四捨五入してください。

専門用語で説明すると `scrollY` は、現在の {{Glossary("viewport", "ビューポート")}} の上端の Y 座標を返します。ビューポートがない場合の戻り値は 0 です。

## 例

```js
// スクロールしている場合、戻してから次のページへスクロールダウン
if (window.scrollY) {
  window.scroll(0, 0); //文書の左上にスクロール位置をリセット
}

window.scrollByPages(1);
```

## メモ

{{domxref("window.scrollBy", "scrollBy()")}}、{{domxref("window.scrollByLines", "scrollByLines()")}}、{{domxref("window.scrollByPages", "scrollByPages()")}} のような相対スクロールする関数を使用する際に、文書がすでにスクロールしていないかをチェックするためにこのプロパティを使用してください。

`pageYOffset` プロパティは、`scrollY` プロパティのエイリアスです。

```js
window.pageYOffset === window.scrollY; // 常に true
```

クロスブラウザー互換性のため、`window.scrollY` ではなく `window.pageYOffset` を使用します。_さらに_、古いバージョンの Internet Explorer (IE9 以前) はいずれもサポートしていないため、チェックの上、なければ他の非標準の方法で回避する必要があります。以下に互換性を確保した例を示します。

```js
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

var x = supportPageOffset
  ? window.pageXOffset
  : isCSS1Compat
    ? document.documentElement.scrollLeft
    : document.body.scrollLeft;
var y = supportPageOffset
  ? window.pageYOffset
  : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
```

## 仕様書

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連情報

- {{domxref("window.scrollX")}}
