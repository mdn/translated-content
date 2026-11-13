---
title: ファイルのドラッグ & ドロップ
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

[ランディングページ](/ja/docs/Web/API/HTML_Drag_and_Drop_API#概念と使用法)で述べたように、ドラッグ＆ドロップ API は、ページ内での要素のドラッグ、ページからのデータのドラッグ、ページへのデータのドラッグの 3 つの用途を同時にモデル化します。このチュートリアルでは、 3 つ目の用途である「ページへのデータのドラッグ」を実演します。ユーザーがオペレーティングシステムのファイルエクスプローラーから画像ファイルをドロップし、ページ上に表示できる基本的なドロップゾーンを実装します。ドラッグ＆ドロップが利用できない、または利用したくないユーザー向けに、`<input>` 要素によるファイル選択の代替機能も提供します。

## 基本的なページレイアウト

通常の `<input>` によるファイル選択も許可したいので、ドロップゾーンは `<input>` 要素で実装するのが合理的です。これにより、ドラッグでの投入とクリック操作を同時に行うことができます。一般的な手法として、`<input>` を非表示にし、代わりにスタイル設定が容易な {{HTMLElement("label")}} 要素と連動させます。また、ドロップされた画像のプレビュー表示用要素も追加します。

```html live-sample___file-dnd
<label id="drop-zone">
  ここに画像をドロップ、またはクリックしてアップロードしてください。
  <input type="file" id="file-input" multiple accept="image/*" />
</label>
<ul id="preview"></ul>
<button id="clear-btn">クリア</button>
```

ラベル要素をスタイル設定し、視覚的にドロップゾーンであることを示し、ファイル入力は非表示にします。

```css live-sample___file-dnd
body {
  font-family: "Arial", sans-serif;
}

#drop-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-width: 100%;
  height: 200px;
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 4px;
  color: slategray;
  cursor: pointer;
}

#file-input {
  display: none;
}

#preview {
  width: 500px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  list-style: none;
  padding: 0;
}

#preview li {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0;
  width: 100%;
  height: 100px;
}

#preview img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
```

`<label>` 要素と `<input>` 要素を使用することで、ファイル選択 UX の実装に追加の JavaScript は不要になります。次に、ファイルのドロップ操作と、ドロップされたファイルのその後の処理に焦点を当てます。

## ドロップターゲットの宣言

ドロップターゲットは `<label>` 要素です。ターゲット要素として、 {{domxref("HTMLElement/drop_event", "drop")}} イベントを監視し、ドロップされたファイルを処理します。

```js live-sample___file-dnd
const dropZone = document.getElementById("drop-zone");

dropZone.addEventListener("drop", dropHandler);
```

ファイルドロップの場合、ファイルが有効なドロップ先へドロップされなくても、ブラウザーがデフォルトで処理（ファイルの開く/ダウンロードなど）を行うことがあります。この動作を防ぐため、`window` の `drop` イベントを監視し、キャンセルする必要があります。ファイルがドラッグされている場合のみイベントを処理するように注意します。リンクなど他の要素の場合は、デフォルトの動作をそのまま使用します。ドラッグされたアイテムが画像以外のファイルの場合、イベントは処理しますが、許可されていないことをユーザーにフィードバックします。

```js live-sample___file-dnd
window.addEventListener("drop", (e) => {
  if ([...e.dataTransfer.items].some((item) => item.kind === "file")) {
    e.preventDefault();
  }
});
```

`drop` イベントを発生させるには、要素が {{domxref("HTMLElement/dragover_event", "dragover")}} イベントもキャンセルする必要があります。`window` 上で `drop` を監視しているため、`window` 全体に対する `dragover` イベントもキャンセルする必要があります。また、ファイルが画像でない場合や正しい場所にドラッグされていない場合、 {{domxref("DataTransfer.dropEffect")}} を `none` に設定します。

```js live-sample___file-dnd
dropZone.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file",
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (fileItems.some((item) => item.type.startsWith("image/"))) {
      e.dataTransfer.dropEffect = "copy";
    } else {
      e.dataTransfer.dropEffect = "none";
    }
  }
});

window.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file",
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (!dropZone.contains(e.target)) {
      e.dataTransfer.dropEffect = "none";
    }
  }
});
```

> [!NOTE]
> {{domxref("HTMLElement/dragstart_event", "dragstart")}} および {{domxref("HTMLElement/dragend_event", "dragend")}} イベントは、OS からブラウザーへファイルをドラッグする際に発生しません。OS のファイルがブラウザーにドラッグされたことを検出するには、 {{domxref("HTMLElement/dragenter_event", "dragenter")}} および {{domxref("HTMLElement/dragleave_event", "dragleave")}} を使用してください。
> つまり、OS からファイルをドラッグする際には、{{domxref("DataTransfer.setDragImage","setDragImage()")}} を使用してカスタムのドラッグ画像やカーソルオーバーレイを適用することはできません。これは、ドラッグデータストアが {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベント内でのみ変更可能であるためです。この制限は {{domxref("DataTransfer.setData","setData()")}} にも適用されます。

## ドロップの処理

次に、各ファイルにアクセスするために {{domxref("DataTransferItem.getAsFile","getAsFile()")}} メソッドを使用して `dropHandler` を実装します。その後、アプリケーションは[ファイル API](/ja/docs/Web/API/File_API) を使用してこのファイルをどのように処理するかを決定できます。ここでは単にページ上に表示していますが、実際には最終的にサーバーへアップロードすることも必要になるでしょう。

```js live-sample___file-dnd
const preview = document.getElementById("preview");

function displayImages(files) {
  for (const file of files) {
    if (file.type.startsWith("image/")) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      li.appendChild(img);
      li.appendChild(document.createTextNode(file.name));
      preview.appendChild(li);
    }
  }
}

function dropHandler(ev) {
  ev.preventDefault();
  const files = [...ev.dataTransfer.items]
    .map((item) => item.getAsFile())
    .filter((file) => file);
  displayImages(files);
}
```

## input に同じ動作を追加

上記がドラッグ＆ドロップの全データフローです。次に、`displayImages()` 関数をファイル入力欄にも接続する必要があります。

```js live-sample___file-dnd
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", (e) => {
  displayImages(e.target.files);
});
```

## クリアボタン

最後にプレビュー領域をクリアする方法を追加します。 {{domxref("URL.revokeObjectURL_static","URL.revokeObjectURL()")}} を使用して画像オブジェクトが使用していたメモリを解放します。

```js live-sample___file-dnd
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  for (const img of preview.querySelectorAll("img")) {
    URL.revokeObjectURL(img.src);
  }
  preview.textContent = "";
});
```

## 結果

{{EmbedLiveSample("file-dnd", "", 500)}}

## 関連情報

- [HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
