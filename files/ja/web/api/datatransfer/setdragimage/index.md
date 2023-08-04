---
title: DataTransfer.setDragImage()
slug: Web/API/DataTransfer/setDragImage
---

{{APIRef("HTML Drag and Drop API")}}

ドラッグが発生すると、ドラッグ対象（{{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントが発生した要素）から半透明の画像が生成され、ドラッグ中にマウスポインターに沿って移動します。この画像は自動的に作成されるので、自分で作成する必要はありません。ただし、カスタム画像が必要な場合は、**`DataTransfer.setDragImage()`** メソッドを使用して、使用するカスタム画像を設定することができます。画像は通常、 {{HTMLElement("image")}} 要素になりますが、 {{HTMLElement("canvas")}} やその他の可視要素であっても構いません。

メソッドの `x` 座標と `y` 座標は、マウスポインターに対する画像の相対的な表示方法を定義します。これらの座標は、マウスカーソルがあるべき画像のオフセットを定義します。例えば、ポインターが中心に来るように画像を表示するには、画像の幅と高さの半分の値を使用します。

このメソッドは {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントハンドラー内で呼び出す必要があります。

## 構文

```js
setDragImage(imgElement, xOffset, yOffset);
```

### 引数

- `imgElement`

  - : ドラッグのフィードバック画像に使用する画像 {{domxref("Element")}} 要素です。

    もし {{domxref("Element")}} が img 要素であれば、ドラッグデータストアのビットマップを （その要素に固有のサイズで）その要素の画像に設定します。そうでなければ、ドラッグデータストアのビットマップを、与えられた要素から生成された画像に設定します（そのための正確なメカニズムは現在のところ指定されていません）。

    注: もし {{domxref("Element")}} が既存の {{domxref("HTMLElement")}} であれば、ドラッグフィードバック画像として表示するために、ビューポートに表示されている必要があります。あるいは、この目的のために、画面外にあるような新しい DOM 要素を作成することができます。

- `xOffset`
  - : `long` で、画像内の水平方向のオフセットを示します。
- `yOffset`
  - : `long` で、画像内の垂直方向のオフセットを示します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、`setDragImage()` メソッドの使用方法を示します。この例では `example.gif` という名前の画像ファイルを参照していることに注意しましょう。そのファイルが存在する場合はそのファイルがドラッグ画像として使用され、そのファイルが存在しない場合はブラウザーが既定のドラッグ画像を使用します。

[デモ](https://codepen.io/webgeeker/full/KBzrxE/)

```js
<!DOCTYPE html>
<html lang=en>
<title>Example of DataTransfer.setDragImage()</title>
<meta name="viewport" content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #source {
    color: blue;
    border: 1px solid black;
  }
  #target {
    border: 1px solid black;
  }
</style>
<script>
function dragstart_handler(ev) {
 console.log("dragStart");
 // ドラッグのフォーマットとデータを設定します。データにはイベントターゲットの ID を使用します。
 ev.dataTransfer.setData("text/plain", ev.target.id);
 // 画像を作成してドラッグ画像に使用する
 // 注意: "example.gif" を既存の画像に変更しないと画像が作成されず、
 // デフォルトのドラッグ画像が使用されます。
 const img = new Image();
 img.src = 'example.gif';
 ev.dataTransfer.setDragImage(img, 10, 10);
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}

function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 // ドロップ対象のIDであるデータを取得します。
 const data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}
</script>
<body>
<h1>Example of <code>DataTransfer.setDragImage()</code></h1>
 <div>
   <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
     この要素を選択し、ドロップゾーンにドラッグしてから放すと要素が移動します。</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">ドロップゾーン</div>
</body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
