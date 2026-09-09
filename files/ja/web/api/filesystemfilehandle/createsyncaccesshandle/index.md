---
title: "FileSystemFileHandle: createSyncAccessHandle() メソッド"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: ac7a39584dc77b42aac19473cc522bbedbf13717
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

**`createSyncAccessHandle()`** は {{domxref("FileSystemFileHandle")}} インターフェイスのメソッドで、{{jsxref('Promise')}} を返します。このプロミスは、ファイルへの同期的な読み取りおよび書き込みに使用できる {{domxref('FileSystemSyncAccessHandle')}} オブジェクトに解決されます。
このメソッドは同期型であるためパフォーマンス上の利点がありますが、[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_API/Origin_private_file_system)内のファイルに対しては、専用[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)内でのみ使用可能です。

{{domxref('FileSystemSyncAccessHandle')}} を作成すると、ファイルハンドルに対応するファイルの排他的ロックを取得します。これにより、作成したアクセスハンドルを閉じるまで、同じファイルについて {{domxref('FileSystemSyncAccessHandle')}} や {{domxref('FileSystemWritableFileStream')}} を作成することはできなくなります。

## 構文

```js-nolint
createSyncAccessHandle()
createSyncAccessHandle(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : アクセスハンドルのロックモードを指定する文字列。デフォルト値は `"readwrite"` です。
        指定可能な値は次の通りです。
        - `"read-only"`
          - : 1 つのファイルに対して、複数の `FileSystemSyncAccessHandle` オブジェクトを同時に開くことができます（例えば、同じアプリを複数のタブで開いている場合など）。ただし、それらはすべて `"read-only"` モードで開かれている必要があります。一度開かれると、ハンドルに対して読み取り系のメソッド、{{domxref("FileSystemSyncAccessHandle.read", "read()")}}、{{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}、{{domxref("FileSystemSyncAccessHandle.close", "close()")}} を呼び出すことができます。
        - `"readwrite"`
          - : 1 つのファイルに対して開くことができる `FileSystemSyncAccessHandle` オブジェクトは 1 つだけです。最初のハンドルが閉じられる前にもう 1 つのハンドルを開こうとすると、`NoModificationAllowedError` 例外が発生します。一度開けば、そのハンドルに対して利用できる任意のメソッドを呼び出すことができます。
        - `"readwrite-unsafe"`
          - : 1 つのファイルに対して、複数の `FileSystemSyncAccessHandle` オブジェクトを同時に開くことができますが、すべて `"readwrite-unsafe"` モードで開かれます。一度開かれると、それらのハンドルに対して利用できる任意のメソッドを呼び出すことができます。

### 返値

{{domxref('FileSystemSyncAccessHandle')}} オブジェクトで解決される {{jsxref('Promise')}} です。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : `readwrite` モードでハンドルの {{domxref('PermissionStatus.state')}} が `granted` でない場合に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref('FileSystemSyncAccessHandle')}} オブジェクトが[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_API/Origin_private_file_system)内のファイルを表していないとき発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : 現在の項目が見つからなかった場合に発生します。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : ブラウザーがファイルハンドルに関連付けられたファイルのロックを取得できない場合に発生します。これは、`mode` が `readwrite` に設定されており、複数のハンドルを同時に開こうとしたことが原因である可能性があります。

## 例

### 基本的な使い方

以下の非同期のイベントハンドラーは、ウェブワーカー内にあります。そのうちのこの部分は、同期ファイルアクセスハンドルを作成します。

```js
onmessage = async (e) => {
  // メインスクリプトから送られた処理対象のメッセージを取得する
  const message = e.data;

  // draft ファイルへのハンドルを取得する
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 同期式アクセスハンドルを取得する
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // …

  // 完了したら、常に FileSystemSyncAccessHandle を閉じる
  accessHandle.close();
};
```

### `mode` オプションの完全な例

[`createSyncAccessHandle()` モードのテスト](https://mdn.github.io/dom-examples/file-system-api/createsyncaccesshandle-mode/) の例（[ソースコード](https://github.com/mdn/dom-examples/tree/main/file-system-api/createsyncaccesshandle-mode)を参照）では、テキストを入力するための{{htmlelement("input")}}フィールドと、2 つのボタンが用意されています。1 つは入力されたテキストをオリジンプライベートファイルシステム内のファイルの末尾に書き込むためのもの、もう 1 つはファイルが満杯になった際にその内容を空にするためのものです。

上記のデモを試してみて、何が起きているかを確認できるように、ブラウザーの開発者コンソールを開いておいてください。デモを複数のブラウザータブで開いてみると、複数のハンドルを同時に開き、ファイルへの書き込みを並行して行えることがわかります。これは、`createSyncAccessHandle()` の呼び出しで `mode: "readwrite-unsafe"` が設定されているためです。

下記では、そのコードについて詳しく見ていきます。

#### HTML

2 つの {{htmlelement("button")}} 要素とテキストの {{htmlelement("input")}} フィールドが次のようにあります。

```html-nolint
<ol>
  <li>
    <label for="file-text">ファイルに書き込むテキストを入力してください:</label>
    <input type="text" id="file-text" name="file-text" />
  </li>
  <li>
    テキストをファイルへ書き込む: <button class="write">テキストを書き込む</button>
  </li>
  <li>
    ファイルがいっぱいになったら、中身を空にする:
    <button class="empty">ファイルを空にする</button>
  </li>
</ol>
```

#### メイン JavaScript

HTMLファイル内のメインスレッドのJavaScriptは下記です。まず、「テキストを書き込む」ボタン、「ファイルを空にする」ボタン、テキスト入力フィールドへの参照を取得し、{{domxref("Worker.Worker", "Worker()")}} コンストラクターを使用して新しいウェブワーカーを生成します。次に、2 つの関数を定義し、それらをボタンのイベントハンドラーとして設定します。

- `writeToOPFS()` は、「テキストを書き込む」ボタンがクリックされたときに実行されます。この関数は、{{domxref("Worker.postMessage()")}} メソッドを使用して、テキストフィールドに入力された値をオブジェクト内に格納し、それをワーカーに送信します。その後、テキストフィールドの内容をクリアして、次回の追加に備えます。渡されるオブジェクトには、このメッセージで書き込みアクションを起動するよう指定するための `command: "write"` プロパティも指定されている点に注意してください。
- `emptyOPFS()` は、「ファイルを空にする」ボタンがクリックされたときに実行されます。この関数は、`command: "empty"` プロパティを含むオブジェクトをワーカーに送信し、ファイルを空にするよう指定します。

```js
const writeBtn = document.querySelector(".write");
const emptyBtn = document.querySelector(".empty");
const fileText = document.querySelector("#file-text");

const opfsWorker = new Worker("worker.js");

function writeToOPFS() {
  opfsWorker.postMessage({
    command: "write",
    content: fileText.value,
  });
  console.log("メインスクリプト: テキストがワーカーへ渡されました");
  fileText.value = "";
}

function emptyOPFS() {
  opfsWorker.postMessage({
    command: "empty",
  });
}

writeBtn.addEventListener("click", writeToOPFS);
emptyBtn.addEventListener("click", emptyOPFS);
```

#### ワーカー JavaScript

ワーカーの JavaScript を下記に示します。

まず、`initOPFS()` という関数を実行します。この関数は、{{domxref("StorageManager.getDirectory()")}} を使用して OPFS ルートの参照を取得し、ファイルを作成して {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} を使用してそのハンドルを返し、 その後、`createSyncAccessHandle()` を使用して {{domxref("FileSystemSyncAccessHandle")}} を返します。この呼び出しには `mode: "readwrite-unsafe"` プロパティが記載されており、これにより複数のハンドルが同時に同じファイルにアクセスすることができます。

```js
let accessHandle;

async function initOPFS() {
  const opfsRoot = await navigator.storage.getDirectory();
  const fileHandle = await opfsRoot.getFileHandle("file.txt", { create: true });
  accessHandle = await fileHandle.createSyncAccessHandle({
    mode: "readwrite-unsafe",
  });
}

initOPFS();
```

ワーカーの [message イベント](/ja/docs/Web/API/Worker/message_event)ハンドラー関数内では、まず {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}} を使用してファイルのサイズを取得します。次に、メッセージで送信されたデータに `"empty"` という値を持つ `command` プロパティが含まれているかどうかを調べます。含まれている場合は、値を `0` として {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}} を使用してファイルを空にし、`size` 変数に格納されているファイルサイズを更新します。

メッセージデータがそれ以外の場合は、次のようにします。

- 後でテキストコンテンツのエンコード方式とデコードを処理するために、新しい {{domxref("TextEncoder")}} と {{domxref("TextDecoder")}} を作成します。
- メッセージデータをエンコードし、{{domxref("FileSystemSyncAccessHandle.write", "write()")}} を使用して結果をファイルの末尾に書き込んだ後、`size` 変数に格納されているファイルサイズを更新します。
- ファイルの内容を格納する {{jsxref("DataView")}} を作成し、{{domxref("FileSystemSyncAccessHandle.read", "read()")}} を使用してその内容を読み込みます。
- `DataView` のコンテンツをデコードし、コンソールにログ出力します。

```js
onmessage = function (e) {
  console.log("ワーカー: メッセージをメインスクリプトから取得");

  // ファイルの現在のサイズを取得
  let size = accessHandle.getSize();

  if (e.data.command === "empty") {
    // ファイルを 0 バイトに切り詰める
    accessHandle.truncate(0);

    // ファイルの現在のサイズを取得
    size = accessHandle.getSize();
  } else {
    const textEncoder = new TextEncoder();
    const textDecoder = new TextDecoder();

    // ファイルに書き込むコンテンツをエンコード
    const content = textEncoder.encode(e.data.content);
    // ファイルの末尾にコンテンツを書き込む
    accessHandle.write(content, { at: size });

    // ファイルの現在のサイズを取得
    size = accessHandle.getSize();

    // ファイルの長さを示すデータビューを準備
    const dataView = new DataView(new ArrayBuffer(size));

    // ファイル全体をデータビューに取り込む
    accessHandle.read(dataView, { at: 0 });

    // 現在のファイルの内容をコンソールにログ出力
    console.log(`File contents: ${textDecoder.decode(dataView)}`);

    // 変更を反映
    accessHandle.flush();
  }

  // ファイルサイズをコンソールにログ出力
  console.log(`Size: ${size}`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
