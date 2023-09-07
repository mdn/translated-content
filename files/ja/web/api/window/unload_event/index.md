---
title: unload
slug: Web/API/Window/unload_event
---

{{APIRef}}

`unload` イベントは、文書または子リソースがアンロードされるときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("WindowEventHandlers/onunload", "onunload")}}
      </td>
    </tr>
  </tbody>
</table>

以下のイベントの後に発生します。

- {{domxref("Window/beforeunload_event", "beforeunload")}} (キャンセル可能なイベント)
- {{domxref("Window/pagehide_event", "pagehide")}}

文書は以下のような状態にあります。

- すべてのリソースがまだ存在する (img、iframe など)
- エンドユーザーから見えるものは何もない
- UI でのやり取りは効果がない ({{domxref("window.open")}}, {{domxref("window.alert", "alert")}}, {{domxref("window.confirm", "confirm")}}, など)
- エラーが発生しても、アンロードの処理の流れは停止しない

unload イベントは文書ツリーにも続くことに注意してください。親フレームのアンロードは、子フレームの `unload` の前に行われます (以下の例を参照)。

## 例

```html
<!doctype html>
<html>
  <head>
    <title>Parent Frame</title>
    <script>
      window.addEventListener("beforeunload", function (event) {
        console.log("I am the 1st one.");
      });
      window.addEventListener("unload", function (event) {
        console.log("I am the 3rd one.");
      });
    </script>
  </head>
  <body>
    <iframe src="child-frame.html"></iframe>
  </body>
</html>
```

`child-frame.html` の内容を以下に示します。

```html
<!doctype html>
<html>
  <head>
    <title>Child Frame</title>
    <script>
      window.addEventListener("beforeunload", function (event) {
        console.log("I am the 2nd one.");
      });
      window.addEventListener("unload", function (event) {
        console.log("I am the 4th and last one…");
      });
    </script>
  </head>
  <body>
    ☻
  </body>
</html>
```

親フレームがアンロードされると、 `console.log()` のメッセージに記述された順序でイベントが発生します。

## 仕様書

{{Specifications}}

## ブラウザーの対応

{{Compat("api.Window.unload_event")}}

## 関連情報

- 関連イベント: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
