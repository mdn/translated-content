---
title: "Window: innerHeight プロパティ"
short-title: innerHeight
slug: Web/API/Window/innerHeight
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

**`innerHeight`** は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、ウィンドウの内部の高さをピクセル単位で返します。水平スクロールバーがあれば、その高さを含みます。

`innerHeight` の値はウィンドウの{{Glossary("layout viewport", "レイアウトビューポート")}}の高さから取られます。幅は {{domxref("Window.innerWidth", "innerWidth")}} プロパティを使用して取ることができます。

## 値

整数値で、ウィンドウのレイアウトビューポートの高さをピクセル単位で示します。このプロパティは読み取り専用で、既定値はありません。

ウィンドウの高さを変更するには、 {{domxref("Window.resizeTo", "resizeTo()")}} や {{domxref("Window.resizeBy", "resizeBy()")}} などの寸法変更メソッドの一つを呼び出してください。

## 使用上の注意

ウィンドウから水平スクロールバーや境界を引いた高さを取得するには、ルートの {{HTMLElement("html")}} 要素の {{domxref("Element.clientHeight", "clientHeight")}} プロパティを代わりに使用してください。

`innerHeight` および `innerWidth` はすべてのウィンドウと、ウィンドウのように動作するすべてのオブジェクト、例えばタブやフレームで利用できます。

## 例

### フレームセットの想定

```js
console.log(window.innerHeight); // または

console.log(self.innerHeight);
// フレームセット内にあるフレームのビューポートの高さを返します

console.log(parent.innerHeight);
// 最も近いフレームセットのビューポートの高さを返します

console.log(top.innerHeight);
// もっとも外側のフレームセットのビューポートの高さを返します
```

ウィンドウの寸法を変更するには、 {{domxref("window.resizeBy()")}} と {{domxref("window.resizeTo()")}} を参照してください。

ウィンドウの外形の高さ、すなわちブラウザーウィンドウ全体の高さを取得するには、 {{domxref("window.outerHeight")}} を参照してください。

### 図の例

以下の図は `outerHeight` と `innerHeight` の違いを示しています。

![innerHeight と outerHeight の説明](firefoxinnervsouterheight2.png)

## デモ

### HTML

```html-nolint
<p>ブラウザーウィンドウの大きさを変更すると <code>resize</code> イベントが発生します。</p>
<p>ウィンドウの高さ: <span id="height"></span></p>
<p>ウィンドウの幅: <span id="width"></span></p>
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

{{LiveSampleLink('Demo', '別なページでデモコードの実行結果を見る')}}こともできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
