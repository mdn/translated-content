---
title: DataTransferItem.webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
l10n:
  sourceCommit: 77b8cdb3a05999ade4a269d0ef2443618bb7cd66
---

{{APIRef("HTML Drag and Drop API")}}

{{domxref("DataTransferItem")}} で記述された項目がファイルの場合、 `webkitGetAsEntry()` はそれを表す {{domxref("FileSystemFileEntry")}} または {{domxref("FileSystemDirectoryEntry")}} を返します。ファイルでない場合は `null` を返します。

> **メモ:** この関数は、現時点では Firefox を含む非 WebKit ブラウザーでは `webkitGetAsEntry()` として実装されています。将来的には `getAsEntry()` に改名される可能性があるので、両方の関数を探して防御的なコードを記述すべきです。

## 構文

```js-nolint
webkitGetAsEntry()
```

### 引数

なし。

### 返値

ドロップされたアイテムを記述する {{domxref("FileSystemEntry")}} ベースのオブジェクトです。
これは {{domxref("FileSystemFileEntry")}} か {{domxref("FileSystemDirectoryEntry")}} のどちらかになります。
ドロップされたアイテムがファイルでない場合、あるいは {{domxref("DataTransferItem")}} オブジェクトが読み込みモードまたは読み書きモードでない場合、このメソッドは中断して `null` を返します。

## 例

この例では、ドロップゾーンが作成されており、 {{domxref("HTMLElement/drop_event", "drop")}} イベントに応答して、ドロップされたファイルとディレクトリーをスキャンし、階層的なディレクトリーリストを出力しています。

### HTML コンテンツ

HTMLは、ドロップゾーンそのものを、ID `"dropzone"` を持つ {{HTMLElement("div")}} 要素と、ID `"listing"` を持つ非順序リスト要素で確立しています。

```html
<p>Drag files and/or directories to the box below!</p>

<div id="dropzone">
  <div id="boxtitle">Drop Files Here</div>
</div>

<h2>Directory tree:</h2>

<ul id="listing"></ul>
```

### CSS コンテンツ

例で使用されるスタイル設定を示します。

```css
#dropzone {
  text-align: center;
  width: 300px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  border: 4px dashed red;
  border-radius: 10px;
}

#boxtitle {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: black;
  font:
    bold 2em "Arial",
    sans-serif;
  width: 300px;
  height: 100px;
}

body {
  font:
    14px "Arial",
    sans-serif;
}
```

### JavaScript コンテンツ

最初に、再帰的な関数である `scanFiles()` を見ていきましょう。
この関数は、スキャンして処理するファイルシステムの項目を表す {{domxref("FileSystemEntry")}} を入力として受け取り（`item` 引数）、その内容のリストを格納する要素（`container` 引数）を受け取ります。

> **メモ:** ディレクトリー内のすべてのファイルを読み込むには、空の配列を返すまで `readEntries` を繰り返し呼び出す必要があります。
> Chromium ベースのブラウザーでは、以下の例では最大 100 件までしか返しません。

```js
let dropzone = document.getElementById("dropzone");
let listing = document.getElementById("listing");

function scanFiles(item, container) {
  let elem = document.createElement("li");
  elem.textContent = item.name;
  container.appendChild(elem);

  if (item.isDirectory) {
    let directoryReader = item.createReader();
    let directoryContainer = document.createElement("ul");
    container.appendChild(directoryContainer);
    directoryReader.readEntries((entries) => {
      entries.forEach((entry) => {
        scanFiles(entry, directoryContainer);
      });
    });
  }
}
```

`scanFiles()` はまず、スキャンする項目を表す新しい {{HTMLElement("li")}} 要素を作成し、項目の名前をテキストコンテンツとしてそこに挿入し、それをコンテナーに追加しています。
コンテナーは、この例では常にリスト要素です。

現在の項目がリストに掲載されると、その項目の {{domxref("FileSystemEntry.isDirectory", "isDirectory")}} プロパティが調べられます。
アイテムがディレクトリーの場合、そのディレクトリーに再帰的に移動する必要があります。
最初の手順は、ディレクトリーのコンテンツのフェッチを処理する {{domxref("FileSystemDirectoryReader")}} を作成することです。
これは、項目の {{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}} メソッドを呼び出すことによって行われます。
次に、新しい {{HTMLElement("ul")}} が作成され、親リストに追加されます。このリストには、リストの階層で次のレベルに位置するディレクトリーのコンテンツが格納されます。

その後、{{domxref("FileSystemDirectoryReader.readEntries", "directoryReader.readEntries()")}} が呼び出されて、ディレクトリー内のすべての項目が読み込まれます。
これらは順番に `scanFiles()` の再帰的な呼び出しに渡され、処理されます。
ファイルであるものはリストに掲載され、ディレクトリーであるものはリストに掲載され、リストの階層の新しいレベルが下記の一覧に追加され、といった具合になります。

次に、イベントハンドラーが決まります。まず、{{domxref("HTMLElement/dragover_event", "dragover")}} イベントが既定のハンドラーで処理されないようにして、ドロップゾーンがドロップを受け取れるようにします。

```js
dropzone.addEventListener(
  "dragover",
  (event) => {
    event.preventDefault();
  },
  false,
);
```

このコースのイベントハンドラーは、もちろん {{domxref("HTMLElement/drop_event", "drop")}} イベントに対するハンドラーであり、すべてを開始させます。

```js
dropzone.addEventListener(
  "drop",
  (event) => {
    let items = event.dataTransfer.items;

    event.preventDefault();
    listing.textContent = "";

    for (let i = 0; i < items.length; i++) {
      let item = items[i].webkitGetAsEntry();

      if (item) {
        scanFiles(item, listing);
      }
    }
  },
  false,
);
```

これは、ドロップされたアイテムを表す {{domxref("DataTransferItem")}} オブジェクトのリストを `event.dataTransfer.items` から取得します。
そして、 {{domxref("Event.preventDefault()")}} を呼び出して、イベントが終了した後にそれ以上処理されないようにします。

これで、いよいよリストの構築が始めます。最初に {{domxref("Node.textContent", "listing.textContent")}} を空にして、リストを空っぽにします。
これにより、ディレクトリー項目の挿入を始めるための空の {{HTMLElement("ul")}} が残ります。

次に、削除された項目のリストにある項目を反復処理します。
それぞれについて、{{domxref("DataTransferItem.webkitGetAsEntry", "webkitGetAsEntry()")}} メソッドを呼び出して、ファイルを表す {{domxref("FileSystemEntry")}} を取得します。
これが成功したら、 `scanFiles()` を呼び出して項目を処理します。ファイルであればリストに追加し、ディレクトリーであれば追加してその中に入っていきます。

### 結果

これらがどのように動作するかは、下記で試してみてください。いくつかのファイルとディレクトリーを探し、それらをドラッグして、出力結果を確認してください。

{{EmbedLiveSample('Examples', 600, 400)}}

## 仕様書

この API には W3C または WHATWG の公式な定義がありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("DataTransferItem")}}
- {{domxref("FileSystemEntry")}}, {{domxref("FileSystemFileEntry")}}, {{domxref("FileSystemDirectoryEntry")}}
- イベント: {{domxref("HTMLElement/dragover_event", "dragover")}} および {{domxref("HTMLElement/drop_event", "drop")}}
