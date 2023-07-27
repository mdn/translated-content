---
title: ファイルの操作
slug: Mozilla/Add-ons/WebExtensions/Working_with_files
---

{{AddonSidebar()}}

拡張機能にて完全な機能を提供するのにファイルを操作する必要があるかもしれません。この記事ではファイルを扱うための 5 つのメカニズムを見ていきます:

- ユーザーが選択したファイルをダウンロードフォルダーにダウンロードする
- ウェブページのファイルピッカーを使ってファイルを開く
- ウェブページへのドラッグアンドドロップを使ってファイルを開く
- idb-file-storage ライブラリーを使ってファイルや blob を IndexedDB に保管する
- ユーザーのコンピューター上のネイティブアプリケーションにファイルを渡す

それぞれのメカニズムに対し、各 API ドキュメンテーションやガイド、対応する API の使用法の例のリファレンスと一緒に、使い方を紹介します。

## ダウンロード API を使ってファイルをダウンロード

この仕組みでは、あなたのウェブサイト(や URL で決められたあらゆる場所)からユーザーのコンピューターにファイルを入手できます。主要なメソッドは {{WebExtAPIRef("downloads.download()")}} で、その簡単なフォームで URL を受け付けて、その URL からユーザーの既定のダウンロードフォルダーにファイルをダウンロードします:

```js
browser.downloads.download({ url: "https://example.org/image.png" });
```

ユーザーが `saveAs` パラメーターで指定した場所にダウンロードさせることもできます。

> **メモ:** Using [URL.createObjectURL()](/ja/docs/Web/API/URL/createObjectURL) you can also download files and blobs defined in your JavaScript, which can include local content retrieved from IndexedDB.

ダウンロード API はダウンロードをキャンセル、停止、再開、消去、削除することもできます; ダウンロードマネージャーでダウンロード済みのファイルを探します; コンピューターのファイルマネージャーでダウンロード済みのファイルを表示します; 関連付けられたアプリケーションでそのファイルを開きます。

この API を使うには [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルにて "downloads" [API パーミッション](/ja/docs/Web/API/Permissions#API_permissions)が必要です。

例: [Latest download](https://github.com/mdn/webextensions-examples/tree/master/latest-download)
API リファレンス: [downloads API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

## ファイルピッカーを使って拡張機能でファイルを開く

ユーザーのコンピューターからのファイルを扱いたい場合、1 つの選択はコンピューターのファイルブラウザーを使ってユーザーがファイル選択できるようにすることです。新しいページを作るか既存のページにコードを挿入して、ファイルピッカーをユーザーに提供するため HTML `input` 要素の `file` タイプを使います。ユーザーがファイルを選ぶと、ページに関連付けられたスクリプトにより、[DOM File API](/ja/docs/Web/API/File) を使ってウェブアプリケーションと同様な方法でファイルの中身にページからアクセスできます。

例: [Imagify](https://github.com/mdn/webextensions-examples/tree/master/imagify)
ガイド: [Using files from web applications](/ja/docs/Using_files_from_web_applications)
API リファレンス: [HTML input element](/ja/docs/Web/HTML/Element/input/file) | [DOM File API](/ja/docs/Web/API/File)

> **メモ:** 選択したフォルダーの全ファイルにアクセスや処理したい場合、`<input type="file" webkitdirectory="true"/>` を使ってフォルダーを選択して、そこにある全ファイルを返すようにできます。

## ドラッグアンドドロップを使って拡張機能でファイルを開く

Web Drag and Drop API では別のファイルピッカーがあります。このメソッドを使うには、UI にフィットする 'drop zone' を設置して、[dragenter](/ja/docs/Web/Events/dragenter), [dragover](/ja/docs/Web/Events/dragover), [drop](/ja/docs/Web/Events/drop) イベントのリスナーを要素に追加します。ドロップイベントのハンドラーでは、[DataTransfer.files](/ja/docs/Web/API/DataTransfer/files) を使って dataTransfer プロパティから提供されたオブジェクトからユーザーにドロップされたあらゆるファイルに、コードからアクセスできます。すると [DOM File API](/ja/docs/Web/API/File) を使ってファイルにアクセス・操作することができます。

例: [Imagify](https://github.com/mdn/webextensions-examples/tree/master/imagify)
ガイド: [Using files from web applications](/ja/docs/Using_files_from_web_applications) | [File drag and drop](/ja/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
API リファレンス: [DOM File API](/ja/docs/Web/API/File)

## IndexedDB ファイルストレージライブラリーを使ってローカルにファイル保存する

拡張機能がローカルにファイル保存する必要がある場合、[idb-file-storage ライブラリー](https://www.npmjs.com/package/idb-file-storage)は 完結な Promise ベースの[IndexedDB API](/ja/docs/Web/API/IndexedDB_API)ラッパーであり、ストレージやファイルや blob の取得を助けます。

Firefox では、このライブラリーは非標準の IDBMutableFile API のラッパーとして Promise ベースの API も提供します (IDBMutableFile API を使うと、拡張機能は IndexedDB データベースファイルオブジェクトの作成と保存ができて、それによりメモリーにファイルを読み込むことなくファイルの中身を読み書きできる API が提供されます)

このライブラリーのキーとなる機能は:

- IDBFileStorage インスタンスを返す [getFileStorage](https://rpl.github.io/idb-file-storage/function/index.html#static-function-getFileStorage)。名前付きストレージが存在しない場合には作成します。
- [IDBFileStorage](https://rpl.github.io/idb-file-storage/class/src/idb-file-storage.js~IDBFileStorage.html)。これはファイルを保存したり取得するメソッドを提供します、例えば次のもの:

  - データベース内の(フィルターされた)ファイルの list
  - データベースにファイルや blob を追加する put
  - データベースからファイルや blob を取得する get
  - データベースからファイルや blob を削除する remove

[Store Collected Images](https://github.com/mdn/webextensions-examples/tree/master/store-collected-images/webextension-plain) の例ではこの機能の大半の使い方を示します。(IDBMutableFile は含まれていませんが、[idb-file-storage examples](https://rpl.github.io/idb-file-storage/examples/) にて、ライブラリーの他の多くの例と一緒に見ることができます)。

Store Collected Images の例では、画像コンテキストメニューを使ってユーザーが画像を追加できます。選択された画像はポップアップメニューに集められて、名前付きコレクションに保存されます。ツールバーボタンの({{WebExtAPIRef("browserAction")}}) ナビゲートコレクションのページを開き、そこでユーザーは選択を狭められるフィルターオプションを使って、保存された画像を見たり消去したりできます。[この例を見てください](https://youtu.be/t6aVqMMe2Rc)。

/utils/ 内の [image-store.js](https://github.com/mdn/webextensions-examples/blob/master/store-collected-images/webextension-plain/utils/image-store.js) を見てライブラリーの動作を理解できます:

### store を作成して画像を保存する

```js
async function saveCollectedBlobs(collectionName, collectedBlobs) {
  const storedImages = await getFileStorage({ name: "stored-images" });

  for (const item of collectedBlobs) {
    await storedImages.put(`${collectionName}/${item.uuid}`, item.blob);
  }
}
```

`saveCollectedBlobs` is called when the user clicks save in the popup and has provided a name for the image collection. First, `getFileStorage` creates, if it does not exist already, or retrieves the IndexedDB database "stored-images" to the object `storedImages`. `storedImages.put` then adds each collected image to the database, under the collection name, using the blob's unique id (the file name). If the image being store has the same name as one already in the database, it is overwritten. If you want to avoid this, query the database first using `imagesStore.list()` with a filter for the file name, and, if the list returns a file, add a suitable suffix to the name of the new image to store a separate item.

### 保管された画像を表示用に取得する

```js
export async function loadStoredImages(filter) {
  const imagesStore = await getFileStorage({ name: "stored-images" });
  let listOptions = filter ? { includes: filter } : undefined;
  const imagesList = await imagesStore.list(listOptions);
  let storedImages = [];
  for (const storedName of imagesList) {
    const blob = await imagesStore.get(storedName);
    storedImages.push({ storedName, blobUrl: URL.createObjectURL(blob) });
  }
  return storedImages;
}
```

`loadStoredImages` is called when the user clicks view or reload in the navigate collection page. `getFileStorage` opens the "stored-images" database, then `imagesStore.list` gets a filtered list of the stored images. This list is then used to retrieve images with `imagesStore.get` and build a list to return to the UI.

Note the use of [URL.createObjectURL(blob)](/ja/docs/Web/API/URL/createObjectURL) to create a URL that references the image blob. This URL is then used in the UI ([navigate-collection.js](https://github.com/mdn/webextensions-examples/blob/master/store-collected-images/webextension-plain/navigate-collection.js)[collection.js](https://github.com/mdn/webextensions-examples/blob/master/store-collected-images/webextension-plain/navigate-collection.js)) to display the image.

### 集まった画像を削除する

```js
async function removeStoredImages(storedImages) {
  const imagesStore = await getFileStorage({ name: "stored-images" });
  for (const storedImage of storedImages) {
    URL.revokeObjectURL(storedImage.blobUrl);
    await imagesStore.remove(storedImage.storedName);
  }
}
```

`removeStoredImages` is called when the user clicks delete in the navigate collection page. Again, `getFileStorage` opens the "stored-images" database then `imagesStore.remove` removes each image from the filtered list of images.

Note the use of [URL.revokeObjectURL()](/ja/docs/Web/API/URL/revokeObjectURL) to explicitly revoke the blob URL. This enables the garbage collector to free the memory allocated to the URL. If this is not done, the memory will not get returned until the page on which it was created is closed. If the URL was created in an extension's background page, this is not unloaded until the extension is disabled, uninstalled, or reloaded, so holding this memory unnecessarily could affect browser performance. If the URL is created in an extension's page (new tab, popup, or sidebar) the memory is released when the page is closed, but it is still a good practice to revoke the URL when it is no longer needed.

Once the blob URL has been revoked any attempt to load it will result in an error. 例えば、if the blob url was used as the `SRC` attribute of an `IMG` tag, the image will not load and will not be visible. It is therefore good practice to remove any revoked blob urls from generated HTML elements when the blob URL is revoked.

Example: [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/master/store-collected-images/webextension-plain)
API References: [idb-file-storage library](https://rpl.github.io/idb-file-storage/)

> **メモ:** You can also use the full Web [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) to store data from your extension. This can be useful where you need to store data that isn't handled well by the simple key/value pairs offered by the DOM [Storage API](/ja/Add-ons/WebExtensions/API/Storage).

## ローカルアプリでファイルを処理する

Where you have a native app or want to deliver additional native features for file processing, use native messaging to pass a file to a native app for processing.

You have two options:

- Connection-based messaging. Here you trigger the process with runtime.connectNative(), which returns a [runtime.Port](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) object. You can then pass a JSON message to the native application using the postMessage() function of Port. Using the onMessage.addListener() function of Port you can listen for messages from the native application. The native application is opened if it is not running when runtime.connectNative() is called and the application remains running until the extension calls Port.disconnect() or the page that connected to it is closed.
- Connectionless messaging. Here you use runtime.sendNativeMessage() to send a JSON message to a new, temporary instance of the native application. The browser closes the native application after receiving any message back from the native application.

To add the file or blob you want the native application to process use [JSON.stringify()](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

To use this method the extension must request the "nativeMessaging" [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its manifest.json file. Reciprocally, the native application must grant permission for the extension by including its ID in the "allowed_extensions" field of the app manifest.

Example: [Native Messaging](https://github.com/mdn/webextensions-examples/tree/master/native-messaging) (illustrates simple messaging only)
Guides: [Native messaging](/ja/Add-ons/WebExtensions/Native_messaging)
API references: [runtime API](/ja/Add-ons/WebExtensions/API/runtime)
