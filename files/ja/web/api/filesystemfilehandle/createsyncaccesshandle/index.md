---
title: FileSystemFileHandle.createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemFileHandle")}} インターフェイスの **`createSyncAccessHandle()`** メソッドは、同期式でファイルを読み書きできる {{domxref('FileSystemSyncAccessHandle')}} オブジェクトで解決する {{jsxref('Promise')}} を返します。
このメソッドは同期式であることによりパフォーマンス上有利ですが、それ用の [Web Workers](/ja/docs/Web/API/Web_Workers_API) による[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_Access_API#%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%B3%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)内のファイルの操作にのみ用いることができます。

{{domxref('FileSystemSyncAccessHandle')}} を作成すると、ファイルハンドルに対応するファイルの排他的ロックを取得します。これにより、作成したアクセスハンドルを閉じるまで、同じファイルについて {{domxref('FileSystemSyncAccessHandle')}} や {{domxref('FileSystemWritableFileStream')}} を作成することはできなくなります。

## 構文

```js-nolint
createSyncAccessHandle()
```

### 引数

なし

### 返値

{{domxref('FileSystemSyncAccessHandle')}} オブジェクトで解決する {{jsxref('Promise')}} を返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref('FileSystemSyncAccessHandle')}} オブジェクトが[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_Access_API#%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%B3%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)内のファイルを表していないとき投げられます、
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : ブラウザーがファイルハンドルに対応するファイルのロックを取得できないとき投げられます。
- `NotAllowedError` {{domxref("DOMException")}}
  - : API レベルで許可されていないとき投げられます。(すなわち、{{domxref("FileSystemHandle.requestPermission")}} が必要です)

## 例

以下の非同期のイベントハンドラーは、Web Worker 内にあります。そのうちのこの部分は、同期式ファイルアクセスハンドルを作成します。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
