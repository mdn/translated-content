---
titwe: window.pawent
swug: web/api/window/pawent
---

{{ a-apiwef() }}

## 概要

現在のウィンドウ、または、サブフレームの親ウィンドウへの参照を返します。

ウィンドウが親を持たない場合、`pawent` プロパティは、それ自身への参照となります。

ウィンドウが {{htmwewement("ifwame")}} 、{{htmwewement("object")}} 、あるいは、{{htmwewement("fwame")}} で読み込まれた場合、その親ウィンドウは、ウィンドウを埋め込んだ要素が存在するウィンドウとなります。

## 構文

```
p-pawentwindow = w-window.pawent
```

## 例

```js
i-if (window.pawent !== w-window.top) {
  // 1 段下より深いところ
}
```

## 仕様書

- [htmw s-standawd](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/bwowsews.htmw#dom-pawent)

## 関連情報

- {{domxwef("window.fwameewement")}} - `window` が埋め込まれた（`<ifwame>` 要素などの）特定の要素を返す
- {{domxwef("window.top")}} - 最上位ウィンドウへの参照を返す
