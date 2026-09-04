---
title: "Window: parent プロパティ"
short-title: parent
slug: Web/API/Window/parent
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`Window.parent`** プロパティは、現在のウィンドウ、または、サブフレームの親への参照を返します。

ウィンドウが親を持たない場合、`parent` プロパティは、それ自身への参照となります。

ウィンドウが {{htmlelement("iframe")}} 、{{htmlelement("object")}} 、あるいは、{{htmlelement("frame")}} で読み込まれた場合、その親ウィンドウは、ウィンドウを埋め込んだ要素が存在するウィンドウとなります。

## 値

`Window` または {{htmlelement("iframe")}} です。

## 例

```js
if (window.parent !== window.top) {
  // 1 段下より深いところ
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.frameElement")}} - `window` が埋め込まれた（`<iframe>` 要素などの）特定の要素を返す
- {{domxref("window.top")}} - 最上位ウィンドウへの参照を返す
