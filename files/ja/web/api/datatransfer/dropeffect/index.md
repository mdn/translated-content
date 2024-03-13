---
title: DataTransfer.dropEffect
slug: Web/API/DataTransfer/dropEffect
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.dropEffect`** プロパティは、ドラッグ＆ドロップ操作中にユーザーに与えられるフィードバック（通常は視覚的）を制御します。これは、ドラッグ中に表示されるカーソルに影響します。例えば、ユーザーがターゲットのドロップ要素の上にカーソルを置くと、ブラウザーのカーソルが、どの種類の操作が発生するかを示すことができます。

{{domxref("DataTransfer")}} オブジェクトを作成すると、 `dropEffect` には文字列の値が設定されます。取得時には、現在の値を返します。設定時、新しい値が以下の値のいずれかであれば、プロパティの現在の値が新しい値に設定され、それ以外の値は無視されます。

{{domxref("HTMLElement/dragenter_event", "dragenter")}} および {{domxref("HTMLElement/dragover_event", "dragover")}} イベントでは、ユーザーがどのような操作を要求しているかに基づいて、`dropEffect` が初期化されます。これをどのように決定するかはプラットフォームによって異なりますが、通常、ユーザーは alt キーなどの修飾キーを押して、希望する操作を調整することができます。{{domxref("HTMLElement/dragenter_event", "dragenter")}} と {{domxref("HTMLElement/dragover_event", "dragover")}} イベントのイベントハンドラー内では、ユーザーが要求している操作とは異なる操作が必要な場合、`dropEffect` を修正する必要があります。

{{domxref("HTMLElement/drop_event", "drop")}} および {{domxref("HTMLElement/dragend_event", "dragend")}} イベントでは、 `dropEffect` に希望した動作が設定されます。これは、 `dropEffect` が前回の {{domxref("HTMLElement/dragenter_event", "dragenter")}} または {{domxref("HTMLElement/dragover_event", "dragover")}} イベントの後に有していた値となります。例えば {{domxref("HTMLElement/dragend_event", "dragend")}} イベントにおいて、望ましい dropEffect が "move" であれば、ドラッグされたデータをソースから削除する必要があります。

## 値

文字列で、ドラッグ操作の効果を表します。取りうる値は以下の通りです。

- `copy`
  - : 新しい場所にソースアイテムのコピーが作成されます。
- `move`
  - : アイテムを新しい場所に移動します。
- `link`
  - : 新しい場所のソースにリンクが確立されます。
- `none`
  - : アイテムはドロップしない場合があります。

`dropEffect` に他の値を代入しても効果はなく、古い値が保持されます。

## 例

この例では、`dropEffect` と{{domxref("DataTransfer.effectAllowed", "effectAllowed")}} プロパティを使用しています。

### HTML

```html
<div>
  <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
    この要素を選択し、ドロップゾーンにドラッグして放すと、要素が移動します。
  </p>
</div>
<div
  id="target"
  ondrop="drop_handler(event);"
  ondragover="dragover_handler(event);">
  ドロップゾーン
</div>
```

### CSS

```css
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
```

### JavaScript

```js
function dragstart_handler(ev) {
  console.log(
    "dragStart: dropEffect = " +
      ev.dataTransfer.dropEffect +
      " ; effectAllowed = " +
      ev.dataTransfer.effectAllowed,
  );

  // この要素の id をドラッグ ペイロードに追加し、ドロップ ハンドラーが
  // どの要素をツリーに追加するかを知ることができるようにします。
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
  console.log(
    "drop: dropEffect = " +
      ev.dataTransfer.dropEffect +
      " ; effectAllowed = " +
      ev.dataTransfer.effectAllowed,
  );
  ev.preventDefault();

  // ターゲットの ID を取得し、移動した要素をターゲットの DOM に追加します。
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
  console.log(
    "dragOver: dropEffect = " +
      ev.dataTransfer.dropEffect +
      " ; effectAllowed = " +
      ev.dataTransfer.effectAllowed,
  );
  ev.preventDefault();
  // dropEffect を移動するように設定します。
  ev.dataTransfer.dropEffect = "move";
}
```

### 結果

{{EmbedLiveSample('Example', 300, 250)}}

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
