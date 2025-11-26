---
title: "DataTransfer: setData() メソッド"
short-title: setData()
slug: Web/API/DataTransfer/setData
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.setData()`** メソッドは、ドラッグ操作の[ドラッグデータ](/ja/docs/Web/API/DataTransfer)に指定したデータと型を設定します。与えられた型のデータが存在しない場合、このデータはドラッグデータストアの末尾に加えられ、このような {{domxref("DataTransfer.types","types")}} リストの最後の項目は新しい型になります。与えられた型のデータが存在する場合、既存のデータが同じ位置で置き換えられます。同じ型のデータが置き換えられる時、{{domxref("DataTransfer.types","types")}} リストの並び順は変更されません。

データ型は、例えば `text/plain` や `text/uri-list` です。

## 構文

```js-nolint
setData(format, data)
```

### 引数

- `format`
  - : 文字列で、{{domxref("DataTransfer")}} に追加するドラッグデータの型を表します。
- `data`
  - : 文字列で、{{domxref("DataTransfer")}} に追加するデータを表します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 要素のドラッグ

この例では、{{HTMLElement("p")}} 要素をターゲットの {{HTMLElement("div")}} 要素の中にドラッグすることができます。

- `dragstart` ハンドラー中で、`setData()` を使用して `<p>` 要素の `id` を {{domxref("DataTransfer")}} オブジェクトに追加します。

- `drop` ハンドラーでは、`id` を取得し、それを使用して `<p>` 要素をターゲットに移動します。

#### HTML

```html
<div>
  <p id="source" draggable="true">
    この要素を選択し、ドロップゾーンまでドラッグしてから選択を解除すると、要素が移動します。
  </p>
</div>
<div id="target">ドロップゾーン</div>

<button id="reset">例をリセット</button>
```

#### CSS

```css
div {
  margin: 0.5em 0;
  padding: 2em;
}

#target,
#source {
  border: 1px solid black;
  padding: 0.5rem;
}

.dragging {
  background-color: pink;
}
```

#### JavaScript

```js
const source = document.querySelector("#source");
source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  // ソース要素の背景色を変更して、ドラッグが開始されたことを示す
  ev.currentTarget.classList.add("dragging");
  // ドラッグデータキャッシュ（すべての形式/型）をクリア
  ev.dataTransfer.clearData();
  // ドラッグの形式とデータを設定。
  // データにイベントターゲットの ID を使用
  ev.dataTransfer.setData("text/plain", ev.target.id);
});
source.addEventListener("dragend", (ev) =>
  ev.target.classList.remove("dragging"),
);

const target = document.querySelector("#target");
target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
});
target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  // データ（ソース要素の ID）を取得
  const data = ev.dataTransfer.getData("text");
  const source = document.getElementById(data);
  ev.target.appendChild(source);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 結果

{{EmbedLiveSample("Dragging an element", "", 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
