---
title: Element.setCapture()
slug: Web/API/Element/setCapture
---

{{Deprecated_Header}}{{non-standard_header}}{{ APIRef("DOM") }}

mousedown イベントの処理中にこのメソッドを呼び出すと、マウスボタンが離されるか {{domxref("document.releaseCapture()")}} が呼び出されるまで、この要素にすべてのマウスイベントを捕捉します。

> **警告:** このインターフェイスにはブラウザー間の対応がほとんどありませんでした。おそらくお探しのものは {{domxref("element.setPointerCapture")}} （ポインターイベント API）でしょう。

## 構文

```js
setCapture(retargetToElement)
```

### 引数

- `retargetToElement`
  - : もし `true` ならば、すべてのイベントはこの要素に直接向けられます。もし `false` ならば、イベントはこの要素の子孫にも発行されることがあります。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、現在のマウスの座標が、要素をクリックして押した後にマウスを移動しながら描画されます。

```html
<html>
<head>
  <title>Mouse Capture Example</title>
  <style type="text/css">
    #myButton {
      border: solid black 1px;
      color: black;
      padding: 2px;
      box-shadow: black 2px 2px;
    }
  </style>

  <script type="text/javascript">
    function init() {
      const btn = document.getElementById("myButton");
      if (btn.setCapture) {
        btn.addEventListener("mousedown", mouseDown, false);
        btn.addEventListener("mouseup", mouseUp, false);
      } else {
        document.getElementById("output").textContent
          = "Sorry, there appears to be no setCapture support on this browser";
      }
    }

    function mouseDown(e) {
      e.target.setCapture();
      e.target.addEventListener("mousemove", mouseMoved, false);
    }

    function mouseUp(e) {
      e.target.removeEventListener("mousemove", mouseMoved, false);
    }

    function mouseMoved(e) {
      const output = document.getElementById("output");
      output.textContent = `Position: ${e.clientX}, ${e.clientY}`;
    }
  </script>
</head>
<body onload="init()">
  <p>This is an example of how to use mouse capture on elements in Gecko 2.0.</p>
  <p><a id="myButton" href="#">Test Me</a></p>
  <div id="output">No events yet</div>
</body>
</html>
```

[ライブ例を表示](https://mdn.dev/archives/media/samples/domref/mousecapture.html)

## メモ

他の要素のレイアウトによっては、完全に上下にスクロールされない場合があります。

## 指定

Internet Explorer の実装に基づいています。

## ブラウザの互換性

{{Compat}}

## 関連資料

- {{ domxref("document.releaseCapture()") }}
- {{domxref("element.setPointerCapture")}}
