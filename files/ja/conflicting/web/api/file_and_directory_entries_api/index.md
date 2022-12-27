---
title: FileHandle API
slug: conflicting/Web/API/File_and_Directory_Entries_API
original_slug: Web/API/File_Handle_API
---

{{non-standard_header}}

FileHandle API は、ファイルの作成や内容の変更など、ファイルを操作するための API です ([File API](/ja/docs/DOM/File) とは異なります)。この API を通じたファイル操作は、デバイス上に物理的に格納でき、部分的な編集には、競合問題を避けるためにターンベースのロック機構が使用されています。

## API 概観

この API は、次のインターフェースを基にしています:

- {{domxref("IDBDatabase.mozCreateFileHandle")}}
- {{domxref("FileHandle")}}
- {{domxref("LockedFile")}}
- {{domxref("FileRequest")}}

これは、File API の {{domxref("File")}} インターフェースおよび {{domxref("Blob")}} インターフェースとも接続しています。

## 基本的な操作

### FileHandle インスタンスの作成

このインテントは IndexedDB を通じてファイルを保存しているため、{{domxref("FileHandle")}} インスタンスを作成するのに [IndexedDB Database](/ja/docs/IndexedDB/IDBFactory#open) が必要です。

```js
var IDBReq = indexedDB.open("myFileStorageDataBase");

IDBReq.onsuccess = function(){
  var DB = this.result;
  var buildHandle = DB.mozCreateFileHandle("test.txt", "plain/text");

  buildHandle.onsuccess = function(){
    var myFileHandle = this.result;
    console.log('handle', myFileHandle);
  };
};
```

{{domxref("IDBDatabase.mozCreateFileHandle","mozCreateFileHandle()")}} は、ファイル名と任意の形式の 2 個の引数を取ります。これらは説明のためのものであり、データベースには使用されません。しかし、これらの値から {{domxref("File")}} オブジェクトの {{domxref("File.name","name")}} と {{domxref("File.type","type")}} に継承して生成するため、{{domxref("FileHandle")}} オブジェクトにとって重要です。つまり、例えば空文字にすると実際に存在するファイルと一致しないため、ユニークな名前にしなくてもよいです。

> **メモ:** 上記のコードは、{{domxref("FileHandle")}} インスタンスを保持している間のみ存在する「一時ファイル」を作成するだけです。ページ更新やアプリ再起動に遭遇するファイルを扱いたい場合は、データベース自身など、ファイルハンドルを永続的な場所に格納する必要があります。詳しくは、後述の [File storage](#file_storage) を参照してください。

### ファイルの読み書き操作

ハンドルしたファイルを読んだり書いたりするには、{{domxref("LockedFile")}} を取得する必要があります。{{domxref("FileHandle.open()")}} メソッドがこの操作のためのオブジェクトを提供しており、`readonly` または `readwrite` が可能です。`readonly` の {{domxref("LockedFile")}} に書き込みを行おうとすると失敗します。

#### 書き込み

locked ファイルには 3 通りの書込み操作があります:

- {{domxref("LockedFile.write","write")}} : これは、ファイル内の {{domxref("LockedFile.location")}} byte の位置から書き込みを開始するメソッドです。
- {{domxref("LockedFile.append","append")}} : これは、常にファイル末尾にコンテンツを追加するメソッドです。
- {{domxref("LockedFile.truncate","truncate")}} : これは、ファイルの最初の nth-first byte までを維持してそれ以降を削除するメソッドです。

```js
// Get a LockedFile object from the handle
var myFile = myFileHandle.open('readwrite');

// Start a writing operation
var writing = myFile.append('Some content');

writing.onsuccess = function () {
  console.log('Writing operation successful');
}

writing.onerror = function () {
  console.log('Something goes wrong in the writing process: ' + this.error);
}
```

#### 読み込み

中間の {{domxref("File")}} オブジェクトや {{domxref("FileReader")}} オブジェクトを使用せずに、{{domxref("LockedFile")}} オブジェクトのコンテンツを直接読み込むことが可能です。{{domxref("LockedFile")}} インターフェースは、{{domxref("LockedFile.readAsText","readAsText")}} メソッドと {{domxref("LockedFile.readAsArrayBuffer","readAsArrayBuffer")}} メソッドを提供しています。

これら 2 個のメソッドは、ファイル開始位置からの読み込むサイズを {{domxref("LockedFile.location")}} byte で指定して読み込みます。示すサイズを指定します。

ファイル全体を読み込むには、そのサイズを知る必要があります。この情報 (および最終変更日の日付) は、{{domxref("LockedFile.getMetadata()")}} メソッドを通して取得できます。

```js
// Get a LockedFile object from the handle
var myFile = myFileHandle.open('readwrite');

// Retrieve the size of the file
var getmeta = myFile.getMetadata();

getmeta.onsuccess = function () {
  var size = this.result.size;

  // The reading operation will start with the byte at index 0 in the file
  myFile.location = 0;

  // Start a reading operation for the whole file content
  var reading = myFile.readAsText(size);

  reading.onsuccess = function () {
    console.log('The content of the file is:');
    console.log(this.result);
  }

  reading.onerror = function () {
    console.log('Something goes wrong in the reading process: ' + this.error);
  }
}
```

### File スナップショット

In many cases it can be handy to get a snapshot of the file. For example, there are many APIs that expect {{domxref("Blob")}} or {{domxref("File")}} objects such as domxref("FileReader")}} (which can be easier to use to read the whole file) or {{domxref("XMLHttpRequest")}}.

It's possible to get a {{domxref("File")}} object representing the current state of the file handled by the {{domxref("FileHandle")}} object by using the {{domxref("FileHandle.getFile","getFile")}} method. Such a {{domxref("File")}} object is completely desynchronized from the original file, which means any change made to that object will never be reflected to the handled file as well as any change made to the handled file will never be pushed to the {{domxref("File")}} object.

```js
var mySnapshot = null;
var request = myFileHandle.getFile();

request.onsuccess = function () {
  mySnapshot = this.result;
}
```

### 進捗の管理

All the methods from the {{domxref("LockedFile")}} interface return a {{domxref("FileRequest")}} object. Such an object is basically a {{domxref("DOMRequest")}} with an extra power: it allows to monitor the progress of an operation. Sometimes writing and reading operations can be very long, therefore it is a good idea to monitor the operation to provide feedback to the user. Such monitoring can be done using the {{domxref("FileRequest.onprogress")}} event handler.

```js
var progress = document.querySelector('progress');
var myFile   = myFileHandle.open('readonly');

// Let's read a 1GB file
var action   = myFile.readAsArrayBuffer(1000000000);

action.onprogress = function (event) {
  if (progress) {
    progress.value = event.loaded;
    progress.max   = event.total;
  }
}

action.onsuccess = function () {
  console.log('Yeah \o/ Just read a 1GB file');
}

action.onerror = function () {
  console.log('Oups :( Unable to read a 1GB file')
}
```

## File ストレージ

When a file handle is created, the associated file only exists as a "temporary file" as long as you hold the {{domxref("FileHandle")}} instance. If you want a file to survive a page refresh/app relaunch, you need to store the handle in a database (not necessarily the one used to create the {{domxref("FileHandle")}} object).

```js
var IDBReq = window.indexedDB.open('myFileStorageDataBase');

// If necessary, let's create a datastore for the files
IDBReq.onupgradeneeded = function () {
  this.result.createObjectStore('files');
}

IDBReq.onsuccess = function () {
  var DB = this.result;

  // Let's create a new file
  var handleReq = DB.mozCreateFileHandle("test.txt", "plain/text");

  handleReq.onsuccess = function () {
    var myFileHandle = this.result;
    var store = DB.transaction(['files'], 'readwrite').objectStore('files');

    // Let's store the file permanently
    // HINT: it could be handy to use the file name as the storage key
    var storeReq = store.add(myFileHandle, myFileHandle.name);

    storeReq.onsuccess = function () {
      console.log('The file has been successfully stored and can be retrieved anytime.')
    }
  }
}
```

A file stored that way is physically put on the device. The database itself only stores a pointer to that file. It means that if the {{domxref("FileHandle")}} object is stored several times in several DBs or several data stores, all those objects will reference the same unique file. This is not a problem because to access the file, a {{domxref("LockedFile")}} object is required and operations on such object are performed in [isolation](http://en.wikipedia.org/wiki/Isolation_%28database_systems%29), meaning that once a {{domxref("LockedFile")}} is active, all operations of this {{domxref("LockedFile")}} are guaranteed to happen sequentially on the underlying file without being interleaved with operations from other {{domxref("LockedFile")}}.

### 安全な書込み操作

For performance reasons, write (and read) operations are done in memory. Periodically, the results of those operation are asynchronously flushed to the device storage area. If for some reason a problem occurs before that, you can lose the results of some operations. To avoid that problem, you can force the data to be flushed by using the {{domxref("LockedFile.flush()")}} method. Once this method has been successfully called, you can be sure your change on the file will be safe.

```js
// Get a LockedFile object from the handle
var myFile = myFileHandle.open('readwrite');

// Start a writing operation
var writing = myFile.append('Some content');

writing.onsuccess = function () {
  console.log('Writing operation successful');

  var saving = myFile.flush();

  saving.onsuccess = function () {
    console.log('The file has been successfully stored');
  }
}

writing.onerror = function () {
  console.log('Something goes wrong in the writing process: ' + this.error);
}
```

## API の互換性

### FileWriter と API が異なるのはなぜですか？

The [FileWriter specification](http://dev.w3.org/2009/dap/file-system/file-writer.html) defines FileWriters, objects aiming at representing editable files. [Discussions on public-webapps](http://lists.w3.org/Archives/Public/public-webapps/2012JanMar/0886.html) led to the conclusion that the API would behave poorly in the case of different entities writing concurrently to the same file. The outcome of this discussion is the FileHandle API with its LockedFile and transaction mechanism.

### 仕様書

A formal specification draft is being written. As it does not fully match the current implementation, be warned that the implementation and/or the specification will be subject to changes.

| 仕様                                 | 実装状況                         | コメント        |
| ------------------------------------ | -------------------------------- | --------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal. |

### ブラウザの互換性

Supported in Firefox 15.
