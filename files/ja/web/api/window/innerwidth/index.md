---
title: "Window: innerWidth プロパティ"
short-title: innerWidth
slug: Web/API/Window/innerWidth
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

{{domxref("Window")}} の **`innerWidth`** プロパティは読み取り専用で、ウィンドウの内部の幅をピクセル単位で返します。これには垂直スクロールバーがある場合、その幅を含みます。

もっと詳細に言えば、`innerWidth` の値はウィンドウの{{Glossary("layout viewport", "レイアウトビューポート")}}の幅から取られます。ウィンドウの内部の高さは {{domxref("Window.innerHeight", "innerHeight")}} プロパティを使用して取ることができます。

## 値

整数値で、ウィンドウのレイアウトビューポートの幅をピクセル単位で示します。このプロパティは読み取り専用で、既定値はありません。

ウィンドウの幅を変更するには、 {{domxref("Window")}} の寸法の変更メソッドのうちの一つ、例えば {{domxref("Window.resizeBy", "resizeBy()")}} や {{domxref("Window.resizeTo", "resizeTo()")}} などを呼び出してください。

## 使用上の注意

ウィンドウからスクロールバーや境界を引いた幅を取得するには、ルートの {{HTMLElement("html")}} 要素の {{domxref("Element.clientWidth", "clientWidth")}} プロパティを代わりに使用してください。

`innerWidth` はすべてのウィンドウと、ウィンドウのように動作するすべてのオブジェクト、例えばタブやフレームで利用できます。

## 例

```js
// これはビューポートの幅を返す
console.log(window.innerWidth);

// これはフレームセット内のフレームビューポートの幅を返す
console.log(self.innerWidth);

// これは直近のフレームセットのビューポートの幅を返す
console.log(parent.innerWidth);

// これはもっとも外側のフレームセットのビューポートの幅を返す
console.log(top.innerWidth);
```

## デモ

### HTML

```html
<p>
  <code>resize</code>
  イベントを発行させるためにブラウザーのウィンドウの大きさを変えてください。
</p>
<p>ウィンドウの幅: <span id="height"></span></p>
<p>ウィンドウの高さ: <span id="width"></span></p>
```

### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);
```

### 結果

{{EmbedLiveSample('Demo')}}

{{LiveSampleLink('Demo', '別なページでこのデモコードの結果を見る')}}ことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.outerWidth")}}
- {{domxref("window.innerHeight")}}
- {{domxref("window.outerHeight")}}
