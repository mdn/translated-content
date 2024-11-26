---
title: window.scrollX
slug: Web/API/Window/scrollX
---

{{APIRef("CSSOM View")}}

{{domxref("Window")}} インターフェイスの読み取り専用プロパティである **`scrollX`** は、文書が水平スクロールされているピクセル数を返します。現代のブラウザーではこの値がサブピクセル精度ですので、必ずしも整数であるとは限りません。文書が垂直スクロールされているピクセル数は、{{domxref("Window.scrollY", "scrollY")}} プロパティで取得できます。

## 構文

```
var x = window.scrollX;
```

### 値

実際に返される値は、文書が原点から水平方向にスクロールされた量をピクセル数で表す倍精度浮動小数点数です。正の値は、内容物が左にスクロールされていることを表します。文書がサブピクセル精度のデバイスに表示されている場合は、戻り値も小数部を含むサブピクセル精度の値になります。文書が左にも右にもスクロールされていない場合の `scrollX` は 0 です。

> [!NOTE]
> 整数値が必要である場合は、{{jsxref("Math.round()")}} を使用して切り捨てできます。

専門用語で説明すると `scrollX` は、現在の {{Glossary("viewport", "ビューポート")}} の左端の X 座標を返します。ビューポートがない場合の戻り値は 0 です。

## 例

これは、文書の現在の水平スクロール位置を確認する例です。400 ピクセルより大きい場合は、文書の左上にスクロール位置をリセットします。

```js
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## 注記

`pageXOffset` プロパティは、`scrollX` プロパティのエイリアスです。:

```js
window.pageXOffset == window.scrollX; // 常に true
```

クロスブラウザー互換性のため、`window.scrollX` ではなく `window.pageXOffset` を使用します。_さらに_、古いバージョンの Internet Explorer (IE9 以前) はいずれもサポートしていないため、チェックの上、なければ他の非標準の方法で回避する必要があります。以下に互換性を確保した例を示します。

```js
var x =
  window.pageXOffset !== undefined
    ? window.pageXOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollLeft;

var y =
  window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
```

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat}}

## 関連情報

- {{domxref("window.scrollY")}}
