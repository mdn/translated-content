---
title: Window.innerWidth
slug: Web/API/Window/innerWidth
---

{{APIRef}}

{{domxref("Window")}} の **`innerWidth`** プロパティは読み取り専用で、ウィンドウの内部の幅をピクセル単位で返します。これには垂直スクロールバーがある場合、その幅を含みます。

もっと詳細に言えば、`innerWidth` の値はウィンドウの{{Glossary("layout viewport", "レイアウトビューポート")}}の幅から取られます。ウィンドウの内部の高さは {{domxref("Window.innerHeight", "innerHeight")}} プロパティを使用して取ることができます。

## 構文

```
let intViewportWidth = window.innerWidth;
```

### 値

整数値で、ウィンドウのレイアウトビューポートの幅をピクセル単位で示します。このプロパティは読み取り専用で、既定値はありません。

ウィンドウの幅を変更するには、 {{domxref("Window")}} の寸法の変更メソッドのうちの一つ、例えば {{domxref("Window.resizeBy", "resizeBy()")}} や {{domxref("Window.resizeTo", "resizeTo()")}} などを呼び出してください。

## 使用上の注意

ウィンドウからスクロールバーや境界を引いた幅を取得するには、ルートの {{HTMLElement("html")}} 要素の {{domxref("Element.clientWidth", "clientWidth")}} プロパティを代わりに使用してください。

`innerWidth` はすべてのウィンドウと、ウィンドウのように動作するすべてのオブジェクト、例えばタブやフレームで利用できます。

## 例

```js
// これはビューポートの幅を返す
var intFrameWidth = window.innerWidth;

// これはフレームセット内のフレームビューポートの幅を返す
var intFrameWidth = self.innerWidth;

// これは直近のフレームセットのビューポートの幅を返す
var intFramesetWidth = parent.innerWidth;

// これはもっとも外側のフレームセットのビューポートの幅を返す
var intOuterFramesetWidth = top.innerWidth;
```

## 仕様書

| 仕様書                                                                                           | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('CSSOM View', '#dom-window-innerwidth', 'window.innerWidth')}} | {{Spec2('CSSOM View')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Window.innerWidth")}}

## 関連情報

- {{domxref("window.outerWidth")}}
- {{domxref("window.innerHeight")}}
- {{domxref("window.outerHeight")}}
