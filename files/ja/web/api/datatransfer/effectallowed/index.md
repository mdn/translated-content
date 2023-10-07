---
title: DataTransfer.effectAllowed
slug: Web/API/DataTransfer/effectAllowed
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.effectAllowed`** プロパティは、ドラッグ操作で許可される効果を指定します。**コピー**操作は、ドラッグされるデータを現在の位置からドロップ位置にコピーすることを示すために使用されます。**移動**操作は、ドラッグされるデータを移動することを示すために使用され、**リンク**操作は、ソース位置とドロップ位置の間に何らかの形の関係または接続を作成することを示すために使用されます。

このプロパティは、 {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントで設定して、ドラッグソースのドラッグ効果を設定する必要があります。 {{domxref("HTMLElement/dragenter_event", "dragenter")}} および {{domxref("HTMLElement/dragover_event", "dragover")}} のイベントハンドラー内では、このプロパティは {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントで割り当てられた値に設定されるため、 `effectAllowed` を使用してどの効果が許可されているかを決定することができます。

イベント {{domxref("HTMLElement/dragstart_event", "dragstart")}} 以外のイベントで `effectAllowed` に値を代入しても何の効果もありません。

## 値

文字列で、許可されているドラッグ操作を表します。可能な値は以下の通りです。

- `none`
  - : アイテムをドロップすることができません。
- `copy`
  - : ソースアイテムのコピーを新しい場所に作成することができます。
- copyLink
  - : コピーやリンク操作が許可されています。
- copyMove
  - : コピーや移動操作が許可されています。
- link
  - : ソースから新しい場所へのリンクを確立することができます。
- linkMove
  - : リンクや移動の操作が許可されています。
- move
  - : アイテムを新しい場所に移動することができます。
- all
  - : すべての操作が許可されています。
- uninitialized
  - : 効果が設定されていない場合の既定値で、 all と同等です。

`effectAllowed` に他の値を代入しても効果はなく、古い値が保持されます。

Internet Explorer では、値を小文字に変更します。従って、 `linkMove` は `linkmove` になります。

## 例

### effectAllowed の設定

この例では、 `dragstart` ハンドラーの中で `effectAllowed` を `"move"` に設定しています。

#### HTML

```html
<div>
  <p id="source" draggable="true">
    この要素を選択し、ドロップゾーンにドラッグしてから放すと要素を移動します。
  </p>
</div>
<div id="target">ドロップゾーン</div>
<pre id="output"></pre>
<button id="reset">Reset</button>
```

#### CSS

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

#output {
  height: 100px;
  overflow: scroll;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  // この要素の ID をドラッグのデータに追加し、ドロップハンドラーがどの要素を
  // ツリーに追加すればよいかを知ることができるようにします。
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  log(`drop: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  ev.preventDefault();
  // ターゲットの ID を取得し、移動した要素をターゲットの DOM に追加します。
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragoverHandler(ev) {
  log(`dragover: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  ev.preventDefault();
}

const source = document.querySelector("#source");
const target = document.querySelector("#target");

source.addEventListener("dragstart", dragstartHandler);
target.addEventListener("dragover", dragoverHandler);
target.addEventListener("drop", dropHandler);

function log(message) {
  const output = document.querySelector("#output");
  output.textContent = `${output.textContent}\n${message}`;
  output.scrollTop = output.scrollHeight;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 結果

{{EmbedLiveSample("Setting and getting effectAllowed", 0, 400)}}

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
