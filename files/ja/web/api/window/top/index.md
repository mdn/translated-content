---
title: window.top
slug: Web/API/Window/top
---

{{APIRef}}

ウィンドウ階層における最上位のウィンドウへの参照を返します。

## 構文

```
var topWindow = window.top;
```

## 注記

{{domxref("window.parent")}} プロパティは、現在のウィンドウの直近の親を返しますが、`window.top` は、ウィンドウオブジェクトの階層における最上位のウィンドウを返します。

このプロパティは、親、あるいは、階層になっているウィンドウのサブフレーム内にあるウィンドウを扱っていて、最上位のフレームセットを取得したいときに特に役立ちます。

## 仕様

| 仕様                                                                                     | 状態                             | コメント   |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'browsers.html#dom-top', 'window.top')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-top', 'window.top')}}     | {{Spec2('HTML5 W3C')}}     | 初期の定義 |

## ブラウザー互換性

{{Compat("api.Window.top")}}
