---
title: FileSystemDirectoryHandle
slug: Web/API/FileSystemDirectoryHandle
l10n:
  sourceCommit: 0d5a4b01d76343553b449161d9f641e367f470e6
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref('File System Access API')}} の **`FileSystemDirectoryHandle`** インターフェイスは、ファイルシステムのディレクトリーへのハンドルを提供します。

このインターフェイスは、メソッド {{domxref('window.showDirectoryPicker()')}}・{{domxref('StorageManager.getDirectory()')}}・{{domxref('DataTransferItem.getAsFileSystemHandle()')}}・{{domxref('FileSystemDirectoryHandle.getDirectoryHandle()')}} からアクセス可能です。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親の {{DOMxRef("FileSystemHandle")}} からプロパティを継承します。_

## インスタンスメソッド

_親の {{DOMxRef("FileSystemHandle")}} からメソッドを継承します。_

- {{domxref('FileSystemDirectoryHandle.entries()')}}
  - : オブジェクト自身の列挙可能なプロパティの `[key, value]` ペアの新しい _非同期イテレーター_ を返します。
- {{domxref('FileSystemDirectoryHandle.getFileHandle()')}}
  - : メソッドが呼ばれたディレクトリー内の指定の名前のファイルを表す {{domxref('FileSystemFileHandle')}} で解決する {{jsxref('Promise')}} を返します。
- {{domxref('FileSystemDirectoryHandle.getDirectoryHandle()')}}
  - : メソッドが呼ばれたディレクトリー内の指定の名前のサブディレクトリーを表す {{domxref('FileSystemDirectoryHandle')}} で解決される {{jsxref('Promise')}} を返します。
- {{domxref('FileSystemDirectoryHandle.keys()')}}
  - : `FileSystemDirectoryHandle` 内の各アイテムのキーを含む新しい _非同期イテレーター_ を返します。
- {{domxref('FileSystemDirectoryHandle.removeEntry()')}}
  - : ディレクトリーハンドルに指定の名前のファイルまたはディレクトリーがある場合、非同期でエントリーを削除しようとします。
- {{domxref('FileSystemDirectoryHandle.resolve()')}}
  - : 親ハンドルから指定の子エントリーへのディレクトリー名の {{jsxref('Array')}} (最後の要素は指定した子エントリーの名前) で解決する {{jsxref('Promise')}} を返します。
- {{domxref('FileSystemDirectoryHandle.values()')}}
  - : `FileSystemDirectoryHandle` 内の各インデックスに対応する値を含む新しい _非同期イテレーター_ を返します。
- [`FileSystemDirectoryHandle[@@asyncIterator]()`](/ja/docs/Web/API/FileSystemDirectoryHandle/entries)
  - : デフォルトでは `entries` 関数を返します。

## 例

以下の例では、指定の名前のディレクトリーハンドルを返します。指定したディレクトリーが存在しない場合は、作成されます。

```js
const dirName = "directoryToGetName";

// ディレクトリーハンドル 'currentDirHandle' があると仮定
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

以下の非同期関数は、`resolve()` を用いて、選択されたファイルの指定のディレクトリーハンドルを基準とする相対パスを取得します。

```js
async function returnPathDirectories(directoryHandle) {
  // ファイルピッカーを開いてファイルハンドルを得る
  const handle = await self.showOpenFilePicker();
  if (!handle) {
    // ユーザーがキャンセルしたか、ファイルを開くのに失敗した
    return;
  }

  // ハンドルがディレクトリーハンドルが表すディレクトリー内にあるかを確認する
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePath === null) {
    // ディレクトリーハンドル内にない
  } else {
    // relativePath は相対パスを表す名前の配列

    for (const name of relativePaths) {
      // 各エントリーを記録する
      console.log(name);
    }
  }
}
```

以下の例では、ディレクトリーを再帰的に走査し、ディレクトリー内の各ファイルを表す {{domxref('FileSystemFileHandle')}} オブジェクトを返します。

```js
async function* getFilesRecursively(entry) {
  if (entry.kind === "file") {
    const file = await entry.getFile();
    if (file !== null) {
      file.relativePath = getRelativePath(entry);
      yield file;
    }
  } else if (entry.kind === "directory") {
    for await (const handle of entry.values()) {
      yield* getFilesRecursively(handle);
    }
  }
}
for await (const fileHandle of getFilesRecursively(directoryHandle)) {
  console.log(fileHandle);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
