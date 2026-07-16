---
title: "DataTransferItem: getAsFileSystemHandle() メソッド"
short-title: getAsFileSystemHandle()
slug: Web/API/DataTransferItem/getAsFileSystemHandle
l10n:
  sourceCommit: a2079173e316405eb47f3d15d3a4b3b7577fc14e
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}

**`getAsFileSystemHandle()`** は {{domxref("DataTransferItem")}} インターフェイスのメソッドで、{{jsxref('Promise')}} を返します。これはドラッグ中の項目がファイルであれば {{domxref('FileSystemFileHandle')}} で、ドラッグ中の項目がディレクトリーであれば {{domxref('FileSystemDirectoryHandle')}} で履行されます。

## 構文

```js-nolint
getAsFileSystemHandle()
```

### 引数

なし。

### 返値

{{jsxref('Promise')}} です。

アイテムの {{domxref("DataTransferItem.kind", "kind")}} プロパティが `"file"` であり、このアイテムが {{domxref("HTMLElement/dragstart_event", "dragstart")}} または {{domxref("HTMLElement/drop_event", "drop")}} イベントハンドラでアクセスされた場合、返されるプロミスは、ドラッグされたアイテムがファイルであれば {{domxref('FileSystemFileHandle')}} で、ディレクトリーであれば {{domxref('FileSystemDirectoryHandle')}} で履行されます。

それ以外の場合、このプロミスは `null` で履行されます。

### 例外

なし。

## 例

この例では、`getAsFileSystemHandle` メソッドを使用して、ドロップした項目に対して {{domxref('FileSystemHandle','ファイルハンドル')}} を返します。

> [!NOTE]
> `getAsFileSystemHandle()` は、 `drop` イベントハンドラーと同じティック内でのみ項目のハンドルを取得できるため、その前に `await` を配置してはなりません。これが、まず全てのアイテムに対して `getAsFileSystemHandle()` を同期的に呼び出し、その後結果を並行して待機する理由です。

```js
elem.addEventListener("dragover", (e) => {
  // ナビゲーションを防ぐ
  e.preventDefault();
});
elem.addEventListener("drop", async (e) => {
  // ナビゲーションを防ぐ
  e.preventDefault();
  const handlesPromises = [...e.dataTransfer.items]
    // ファイルやディレクトリーの項目では、kind は 'file' になる
    .filter((x) => x.kind === "file")
    .map((x) => x.getAsFileSystemHandle());
  const handles = await Promise.all(handlesPromises);

  // すべてのアイテムを処理する
  for (const handle of handles) {
    if (handle.kind === "file") {
      // 項目がファイルのとき、コードを実行する
    } else if (handle.kind === "directory") {
      // 項目がディレクトリーのとき、コードを実行する
    }
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステムアクセス API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
