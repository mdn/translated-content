---
title: FileSystemHandle.remove()
slug: Web/API/FileSystemHandle/remove
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}{{SeeCompatTable}}{{Non-standard_header}}

{{domxref("FileSystemHandle")}} インターフェイスの **`remove()`** メソッドは、下層のファイルシステムからハンドルが表すエントリーを除去することを要求します。

`remove()` メソッドにより、ハンドルを用いてファイルやディレクトリーを直接削除することができます。このメソッドが無い場合に削除をおこなうには、親ディレクトリーのハンドルを取得し、その親ディレクトリーで {{domxref("FileSystemDirectoryHandle.removeEntry()")}} メソッドを呼ぶ必要があるでしょう。

[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_Access_API#%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%B3%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)のルートディレクトリーで `remove()` を呼ぶことで内容を全消去することもでき、これをおこなった後は新しい空の OPFS が作成されます。

## 構文

```js-nolint
remove(options)
```

### 引数

- `options` {{optional_inline}}
  - : 削除のオプションを指定するオブジェクトです。以下のプロパティを設定できます。
    - `recursive` {{optional_inline}}
      - : {{jsxref("boolean")}} 値で、デフォルトは `false` です。`true` に設定し、エントリーがディレクトリーである場合は、内容が再帰的に削除されます。

### 返値

`undefined` で解決される {{jsxref("Promise")}} を返します。

### 例外

- `InvalidModificationError` {{domxref("DOMException")}}
  - : `recursive` が `false` に設定されており、削除するエントリーが子を持つディレクトリーであるとき投げられます。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : ブラウザーがエントリーの排他的ロックを得られなかったとき投げられます。
- `NotAllowedError` {{domxref("DOMException")}}
  - : {{domxref('PermissionStatus')}} が `granted` でないとき投げられます。
- `NotFoundError` {{domxref("DOMException")}}
  - : エントリーが見つからないとき投げられます。

## 例

[FileSystemHandle.remove() demo](https://filesystemhandle-remove.glitch.me/) ([ソースコード](https://glitch.com/edit/#!/filesystemhandle-remove)を見る) はファイル作成アプリケーションです。{{htmlelement("textarea")}} にテキストを入力して "Save file" {{htmlelement("button")}} を押すと、ファイルピッカーが開き、入力したテキストをローカルファイルシステム上の選択したテキストファイルに保存できます。作成したファイルを削除することを選択することもできます。

作成したファイルの内容を閲覧することはできず、ページを再読み込みしたり閉じたりすると下層のファイルシステムとの同期は失われます。すなわち、このアプリケーションで作成したファイルは、再読み込みしたりタブを閉じたりする前に削除することを選択しなければ、ファイルシステムに残り続けます。

ファイルピッカー、ファイルハンドル、そして新規ファイルを作成したときのファイル自体は、{{domxref("window.showSaveFilePicker()")}} により作成されます。テキストは {{domxref("FileSystemFileHandle.createWritable()")}} を用いてファイルに書き込まれます。

ファイルがファイルシステム上に作成されると、アプリケーション上でエントリーが作成されます。(ソースコード中の `processNewFile()` を参照してください)

- 後で簡単に参照できるように、ファイルハンドルへの参照が配列 `savedFileRefs` に格納されます。
- UI の中の "Saved files" という見出しの下に、ファイル名の隣に "Delete" ボタンがあるリストの項目が追加されます。

"Delete" ボタンが押されると、以下の `deleteFile()` 関数が実行されます。

```js
async function deleteFile(e) {
  for (const handle of savedFileRefs) {
    if (handle.name === e.target.id + ".txt") {
      await handle.remove();
      savedFileRefs = savedFileRefs.filter(
        (handle) => handle.name !== e.target.id + ".txt",
      );
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
  }
}
```

これは以下のような処理です。

1. 配列 `savedFileRefs` に格納されている各ファイルハンドルについて、名前がイベントを発生させたボタンの属性 `id` と一致するかを調べます。
2. 一致するファイルハンドルが見つかったら、そのハンドルについて `FileSystemHandle.remove()` を呼び出し、下層のファイルシステムからそのファイルを削除します。
3. 配列 `savedFileRefs` からも一致したファイルシステムを削除します。
4. 最後に、UI からそのファイルに対応するリスト項目を削除します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_Access_API)
- [FileSystemHandle.remove() demo](https://filesystemhandle-remove.glitch.me/)
