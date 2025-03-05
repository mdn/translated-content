---
title: ファイルのドラッグ & ドロップ
slug: Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
l10n:
  sourceCommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML ドラッグ & ドロップインターフェイスは、ウェブアプリケーションでファイルをウェブページにドラッグ & ドロップできるようにするものです。この記事では、基礎となるプラットフォームのファイルマネージャーからドラッグされ、ウェブページにドロップされた 1 つまたは複数のファイルを、アプリケーションで受け入れる方法について記述しています。

ドラッグ & ドロップの主な手順は、ドロップゾーン（ファイルドロップの対象要素）を定義することと、 {{domxref("HTMLElement/drop_event", "drop")}} および {{domxref("HTMLElement/dragover_event", "dragover")}} イベントのイベントハンドラーを定義することです。これらの手順は、コード例を含め、下記で記述します。完全なソースコードは [MDN のドラッグ & ドロップリポジトリー](https://github.com/mdn/dom-examples/tree/main/drag-and-drop)で利用できます（プルリクエストや issue を歓迎します）。

なお、 {{domxref("HTML_Drag_and_Drop_API","HTML ドラッグ & ドロップ", "", 1)}}では、ファイルのドラッグ & ドロップに対応するために 2 つの異なる形の API を定義しています。一方の API は {{domxref("DataTransfer")}} インターフェイスで、もう一方の API は {{domxref("DataTransferItem")}} と {{domxref("DataTransferItemList")}} インターフェイスです。この例では、両方の API の使用方法を説明します （そして、Gecko 固有のインターフェイスは一切使用しません）。

## ドロップゾーンの定義

{{domxref("HTMLElement/drop_event", "drop")}} イベントの対象となる要素には、 `ondrop` イベントハンドラーが必要です。以下のコードでは、 {{HTMLelement("div")}} 要素を使用してこの処理を行う方法を示しています。

```html
<div id="drop_zone" ondrop="dropHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

通常、アプリケーションでは、ドロップ対象の要素に {{domxref("HTMLElement/dragover_event", "dragover")}} イベントハンドラーを記述し、そのハンドラーによって、ブラウザーの既定のドラッグ動作をオフにします。このハンドラーを追加するには、 {{domxref("HTMLElement.dragover_event","ondragover")}} イベントハンドラーを記載する必要があります。

```html
<div
  id="drop_zone"
  ondrop="dropHandler(event);"
  ondragover="dragOverHandler(event);">
  <p>Drag one or more files to this <i>drop zone</i>.</p>
</div>
```

最後に、アプリケーションはドロップ先の要素のスタイルを設定して、要素がドロップゾーンであることを視覚的に示したい場合があります。この例では、 drop ドロップ先の要素は以下のスタイル設定を使用します。

```css
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
```

> **メモ:** {{domxref("HTMLElement/dragstart_event", "dragstart")}} および {{domxref("HTMLElement/dragend_event", "dragend")}} イベントは、 OS からブラウザーへファイルをドラッグしているときには発生しません。 OS のファイルがブラウザーへドラッグされてきたことを検出するには、 {{domxref("HTMLElement/dragenter_event", "dragenter")}} および {{domxref("HTMLElement/dragleave_event", "dragleave")}} を使用してください。

## ドロップの処理

{{domxref("HTMLElement/drop_event", "drop")}} イベントは、ユーザーがファイルをドロップしたときに発行されます。以下のドロップハンドラーでは、ブラウザーが {{domxref("DataTransferItemList")}} インターフェイスを使用している場合は {{domxref("DataTransferItem.getAsFile","getAsFile()")}} メソッドを使用して各ファイルにアクセスし、そうでない場合は {{domxref("DataTransfer")}} インターフェイスの {{domxref("DataTransfer.files","files")}} プロパティを使用して各ファイルにアクセスしています。

この例では、ドラッグしたそれぞれのファイル名をコンソールに書き出す方法を説明します。実際のアプリケーションでは、 {{domxref("File", "File API")}} を使用してファイルを処理したいかもしれません。

この例では、ファイルでないドラッグアイテムは無視されることに注意してください。

```js
function dropHandler(ev) {
  console.log("File(s) dropped");

  // 既定の動作で防ぐ（ファイルが開かれないようにする）
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // DataTransferItemList インターフェイスを使用して、ファイルにアクセスする
    [...ev.dataTransfer.items].forEach((item, i) => {
      // ドロップしたものがファイルでない場合は拒否する
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    // DataTransfer インターフェイスを使用してファイルにアクセスする
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}
```

## ブラウザー既定のドラッグ動作を阻止する

以下の {{domxref("HTMLElement/dragover_event", "dragover")}} イベントハンドラーは {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出して、ブラウザーの既定のドラッグ & ドロップハンドラーをオフにしています。

```js
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // 既定の動作で防ぐ（ファイルが開かれないようにする）
  ev.preventDefault();
}
```

## 関連情報

- [HTML ドラッグ & ドロップ API (概要)](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
