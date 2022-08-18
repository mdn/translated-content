---
title: Window.innerHeight
slug: Web/API/Window/innerHeight
tags:
  - API
  - CSSOM
  - CSSOM View
  - HTML DOM
  - NeedsInteractiveExample
  - Property
  - Reference
  - View
  - Window
  - height
  - innerHeight
translation_of: Web/API/Window/innerHeight
---
{{APIRef}}

**`innerHeight`** は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、ウィンドウの内部の高さをピクセル単位で返します。水平スクロールバーがあれば、その高さを含みます。

`innerHeight` の値はウィンドウの{{Glossary("layout viewport", "レイアウトビューポート")}}の高さから取られます。幅は {{domxref("Window.innerWidth", "innerWidth")}} プロパティを使用して取ることができます。

## 構文

```
let intViewportHeight = window.innerHeight;
```

### 値

整数値で、ウィンドウのレイアウトビューポートの高さをピクセル単位で示します。このプロパティは読み取り専用で、既定値はありません。

ウィンドウの幅を変更するには、 {{domxref("Window.resizeTo", "resizeTo()")}} や {{domxref("Window.resizeBy", "resizeBy()")}} などの寸法変更メソッドの一つを呼び出してください。

## 使用上の注意

ウィンドウから水平スクロールバーや境界を引いた高さを取得するには、ルートの {{HTMLElement("html")}} 要素の {{domxref("Element.clientHeight", "clientHeight()")}} プロパティを代わりに使用してください。

`innerHeight` および `innerWidth` はすべてのウィンドウと、ウィンドウのように動作するすべてのオブジェクト、例えばタブやフレームで利用できます。

## 例

### フレームセットの想定

```js
var intFrameHeight = window.innerHeight; // or

var intFrameHeight = self.innerHeight;
// フレームセット内にあるフレームのビューポートの高さを返します

var intFramesetHeight = parent.innerHeight;
// 最も近いフレームセットのビューポートの高さを返します

var intOuterFramesetHeight = top.innerHeight;
// もっとも外側のフレームセットのビューポートの高さを返します
```

{{todo("link to an interactive demo here")}}

ウィンドウの寸法を変更するには、 {{domxref("window.resizeBy()")}} と {{domxref("window.resizeTo()")}} を参照してください。

ウィンドウの外形の高さ、すなわちブラウザーウィンドウ全体の高さを取得するには、 {{domxref("window.outerHeight")}} を参照してください。

### 図

以下の図は `outerHeight` と `innerHeight` の違いを示しています。

![innerHeight vs outerHeight illustration](/@api/deki/files/213/=FirefoxInnerVsOuterHeight2.png)

## 仕様書

| 仕様書                                                                                               | 状態                             | 備考     |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('CSSOM View', '#dom-window-innerheight', 'window.innerHeight')}} | {{Spec2('CSSOM View')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Window.innerHeight")}}

## 関連情報

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
