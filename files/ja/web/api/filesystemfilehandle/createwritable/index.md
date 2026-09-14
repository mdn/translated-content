---
title: "FileSystemFileHandle: createWritable() メソッド"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: ac7a39584dc77b42aac19473cc522bbedbf13717
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

**`createWritable()`** は {{domxref("FileSystemFileHandle")}} インターフェイスのメソッドで、ファイルへの書き込みができる {{domxref('FileSystemWritableFileStream')}} を作成します。
このメソッドは、作成されたストリームで解決する {{jsxref('Promise')}} を返します。

ストリームに対してなされたあらゆる変更は、ストリームを閉じるまで、ファイルハンドルが表すファイルには反映されません。
これは、典型的には、データを一時ファイルに書き込み、書き込み可能なファイルストリームが閉じられてはじめてファイルハンドルが表すファイルを一時ファイルで置き換えることで実装されています。

## 構文

```js-nolint
createWritable()
createWritable(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `keepExistingData` {{optional_inline}}
      - : 論理値 ({{jsxref('Boolean')}})。デフォルトは `false` です。
        `true` に設定した場合、ファイルが存在すれば、まず既存のファイルが一時ファイルにコピーされます。
        そうでない場合、一時ファイルは空の状態から開始します。
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : アクセスハンドルのロックモードを指定する文字列。デフォルト値は `"siloed"` です。
        指定可能な値は次の通りです。
        - `"exclusive"`
          - : `FileSystemWritableFileStream` ライターは 1 つしか開くことができません。まず最初のライターが閉じられた後で、それ以降のライターを開こうとすると、`NoModificationAllowedError` 例外が発生します。
        - `"siloed"`
          - : 同時に複数個の `FileSystemWritableFileStream` ライターを開くことができ、それぞれに固有のスワップファイルが割り当てられます。例えば、同じアプリを複数のタブで開いている場合などがこれに該当します。各ライターが閉じられたときにデータがフラッシュされるため、最後に開かれたライターのデータが書き込まれます。

### 返値

{{domxref('FileSystemWritableFileStream')}} オブジェクトで解決される {{jsxref('Promise')}} です。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : `readwrite` モードでハンドルの {{domxref('PermissionStatus.state')}} が `'granted'` でない場合に発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : 現在の項目が見つからなかった場合に発生します。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : ブラウザーがファイルハンドルに関連付けられたファイルのロックを取得できない場合に発生します。これは、`mode` が `exclusive` に設定されており、複数のライターを同時に開こうとしたことが原因である可能性があります。
- `AbortError` {{domxref("DOMException")}}
  - : 実装定義のマルウェアスキャンおよびセーフブラウジングチェックに失敗した場合に発生します。

## 例

### 基本的な使い方

以下の非同期関数は、指定されたコンテンツをファイルハンドルに書き込み、最終的にはディスクに書き込みます。

```js
async function writeFile(fileHandle, contents) {
  // 書き込み先の FileSystemWritableFileStream を作成
  const writable = await fileHandle.createWritable();

  // ファイルのコンテンツをストリームに書き込む
  await writable.write(contents);

  // ファイルを閉じ、そのコンテンツをディスクに書き込む
  await writable.close();
}
```

### オプションによる用途の展開

[createWritable() モードのテスト](https://mdn.github.io/dom-examples/file-system-api/createwritable-mode/)の例（[ソースコード](https://github.com/mdn/dom-examples/tree/main/file-system-api/createwritable-mode)を参照）には、書き込み先のファイルを選択するための {{htmlelement("button")}}、ファイルに書き込むテキストを入力するためのテキストの {{htmlelement("input")}} フィールド、およびそのテキストをファイルに書き込むための 2 つ目の `<button>` が用意されています。

このデモでは、ファイルシステム上のテキストファイルを選択するか（または新しいファイル名を入力し）、入力フィールドにテキストを入力して、そのテキストをファイルに書き込んでみてください。ファイルシステム上でそのファイルを開き、書き込みが正常に行われたかどうかを調べてください。

また、このページを 2 つのブラウザータブで同時に開いてみてください。1 つ目のタブで書き込み先のファイルを選択し、すぐに 2 つ目のタブでも同じ書き込み先ファイルを選択してみてください。`createWritable()` の呼び出しで `mode: "exclusive"` を設定しているため、エラーメッセージが表示されるはずです。

下記で、コードについて詳しく見ていきます。

#### HTML

2 つの {{htmlelement("button")}} 要素とテキストの {{htmlelement("input")}} フィールドがこのようにあります。

```html
<ol>
  <li>
    書き込むファイルを選択: <button class="select">ファイルを選択</button>
  </li>
  <li>
    <label for="file-text">ファイルに書き込むテキストを入力:</label>
    <input type="text" id="file-text" name="file-text" disabled />
  </li>
  <li>
    テキストをファイルへ書き込む:
    <button class="write" disabled>テキストを書き込む</button>
  </li>
</ol>
```

テキスト入力フィールドと「テキストを書き込む」ボタンは、[`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) 属性によって、初期状態では無効化されています。ユーザーが書き込み先のファイルを選択するまでは、これらを使用すべきではないからです。

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

始めに、ファイル選択ボタン、テキスト書き込みボタン、テキスト入力フィールドへの参照を取得します。また、グローバル変数 `writableStream` を宣言します。これは、ファイルへのテキスト書き込み用の書き込み可能ストリームが作成された際に、その参照を格納するために使用されます。最初は `null` に設定します。

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#file-text");

let writableStream = null;
```

次に、`selectFile()` という非同期関数を作成します。これは、選択ボタンが押されたときに呼び出されます。この関数では、{{domxref("Window.showSaveFilePicker()")}} メソッドを使用して、ユーザーにファイル選択ダイアログを表示し、ユーザーが選択したファイルへのファイルハンドルを作成します。そのハンドルに対して、`createWritable()` メソッドを呼び出し、選択されたファイルにテキストを書き込むためのストリームを作成します。呼び出しが失敗した場合は、コンソールにエラーをログ出力します。

`createWritable()` には、以下のオプションを含むオプションオブジェクトを渡します。

- `keepExistingData: true`: 選択したファイルがすでに存在する場合、書き込みが開始される前に、そのファイルに含まれるデータが一時ファイルにコピーされます。
- `mode: "exclusive"`: ファイルハンドルに対して、同時に書き込みを行えるのは 1 人のユーザーのみであることを指定します。2 人目のユーザーが例を読み込んでファイルを選択しようとすると、エラーが発生します。

最後に、次の段階で必要となる入力フィールドと「テキストを入力」ボタンを有効にし、「ファイルを選択」ボタンは無効にします（現時点では必要ありません）。

```js
async function selectFile() {
  // 新しいハンドルを作成
  const handle = await window.showSaveFilePicker();

  // 書き込み先の FileSystemWritableFileStream を作成
  try {
    writableStream = await handle.createWritable({
      keepExistingData: true,
      mode: "exclusive",
    });
  } catch (e) {
    if (e.name === "NoModificationAllowedError") {
      console.log(
        `現在、そのファイルにアクセスできません。他のユーザーが変更しようとしています。後ほどもう一度お試しください。`,
      );
    } else {
      console.log(e.message);
    }
  }

  // テキストフィールドと「書き込む」ボタンを有効にし、「選択」ボタンを無効化
  fileText.disabled = false;
  writeBtn.disabled = false;
  selectBtn.disabled = true;
}
```

次の関数 `writeFile()` は、{{domxref("FileSystemWritableFileStream.write()")}} を使用して、入力フィールドに入力されたテキストを選択したファイルに書き込み、その後、入力フィールドの内容をクリアします。その後、{{domxref("WritableStream.close()")}} を使用して書き込み可能なストリームを閉じ、デモをリセットして再度実行できるようにします。これにより、コントロールの `disabled` 状態が元の状態に戻され、`writableStream` 変数は `null` に設定し直されます。

```js
async function writeFile() {
  // ファイルにテキストを書き込み、テキストフィールドの内容を消去する
  await writableStream.write(fileText.value);
  fileText.value = "";

  // ファイルを閉じ、その内容をディスクに書き込む。
  await writableStream.close();

  // テキストフィールドと「書き込む」ボタンを無効にし、「選択」ボタンを有効にする
  fileText.disabled = true;
  writeBtn.disabled = true;
  selectBtn.disabled = false;

  // writableStream を null にセットしなおす
  writableStream = null;
}
```

デモを動作させるために、それぞれのボタンにイベントリスナーを設定し、各ボタンがクリックされた際に関連する関数が実行されるようしました。

```js
selectBtn.addEventListener("click", selectFile);
writeBtn.addEventListener("click", writeFile);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
