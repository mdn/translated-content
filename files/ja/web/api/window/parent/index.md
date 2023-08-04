---
title: window.parent
slug: Web/API/Window/parent
---

{{ APIRef() }}

## 概要

現在のウィンドウ、または、サブフレームの親ウィンドウへの参照を返します。

ウィンドウが親を持たない場合、`parent` プロパティは、それ自身への参照となります。

ウィンドウが {{htmlelement("iframe")}} 、{{htmlelement("object")}} 、あるいは、{{htmlelement("frame")}} で読み込まれた場合、その親ウィンドウは、ウィンドウを埋め込んだ要素が存在するウィンドウとなります。

## 構文

```
parentWindow = window.parent
```

## 例

```js
if (window.parent !== window.top) {
  // 1 段下より深いところ
}
```

## 仕様

- [HTML Standard](https://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#dom-parent)

## 関連情報

- {{domxref("window.frameElement")}} - `window` が埋め込まれた（`<iframe>` 要素などの）特定の要素を返す
- {{domxref("window.top")}} - 最上位ウィンドウへの参照を返す
