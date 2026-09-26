---
title: "FileSystemHandle: remove() メソッド"
short-title: remove()
slug: Web/API/FileSystemHandle/remove
l10n:
  sourceCommit: ac7a39584dc77b42aac19473cc522bbedbf13717
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_header}}

**`remove()`** は {{domxref("FileSystemHandle")}} インターフェイスのメソッドで、下層のファイルシステムからハンドルが表す項目を削除することを要求します。

`remove()` メソッドにより、ハンドルを用いてファイルやディレクトリーを直接削除することができます。このメソッドが無い場合に削除をおこなうには、親ディレクトリーのハンドルを取得し、その親ディレクトリーで {{domxref("FileSystemDirectoryHandle.removeEntry()")}} メソッドを呼ぶ必要があるでしょう。

[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_API#オリジンプライベートファイルシステム)のルートディレクトリーで `remove()` を呼ぶことで内容を全消去することもでき、これをおこなった後は新しい空の OPFS が作成されます。

## 構文

```js-nolint
remove()
remove(options)
```

### 引数

- `options` {{optional_inline}}
  - : 削除のオプションを指定するオブジェクトです。以下のプロパティを設定できます。
    - `recursive` {{optional_inline}}
      - : 論理値で、デフォルトは `false` です。`true` に設定し、項目がディレクトリーである場合は、内容が再帰的に削除されます。

### 返値

`undefined` で解決される {{jsxref("Promise")}} を返します。

### 例外

- `InvalidModificationError` {{domxref("DOMException")}}
  - : `recursive` が `false` に設定されており、削除する項目が子を持つディレクトリーであるときに発生します。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : ブラウザーが項目の排他的ロックを得られなかったときに発生します。
- `NotAllowedError` {{domxref("DOMException")}}
  - : {{domxref('PermissionStatus')}} が `granted` でないときに発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : 項目が見つからないときに発生します。

## 例

[`FileSystemHandle.remove()` demo](https://mdn.github.io/dom-examples/file-system-api/filesystemhandle-remove/) ([ソースコード](https://github.com/mdn/dom-examples/tree/main/file-system-api/filesystemhandle-remove)を見る) はファイル作成アプリケーションです。{{htmlelement("textarea")}} にテキストを入力して "Save file" {{htmlelement("button")}} を押すと、ファイルピッカーが開き、入力したテキストをローカルファイルシステム上の選択したテキストファイルに保存できます。作成したファイルを削除することを選択することもできます。

作成したファイルの内容を閲覧することはできず、ページを再読み込みしたり閉じたりすると下層のファイルシステムとの同期は失われます。すなわち、このアプリケーションで作成したファイルは、再読み込みしたりタブを閉じたりする前に削除することを選択しなければ、ファイルシステムに残り続けます。

ファイルピッカー、ファイルハンドル、そして新規ファイルを作成したときのファイル自体は、{{domxref("window.showSaveFilePicker()")}} により作成されます。テキストは {{domxref("FileSystemFileHandle.createWritable()")}} を用いてファイルに書き込まれます。

ファイルがファイルシステム上に作成されると、アプリケーション上で項目が作成されます。(ソースコード中の `processNewFile()` を参照してください)

- 後で簡単に参照できるように、ファイルハンドルへの参照が配列 `savedFileRefs` に格納されます。
- UI の中の "Saved files" という見出しの下に、ファイル名の隣に "Delete" ボタンがあるリストの項目が追加されます。

"Delete" ボタンが押されると、以下の `deleteFile()` 関数が実行されます。

```js
async function deleteFile(e) {
  for (const handle of savedFileRefs) {
    if (handle.name === `${e.target.id}.txt`) {
      await handle.remove();
      savedFileRefs = savedFileRefs.filter(
        (handle) => handle.name !== `${e.target.id}.txt`,
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

この機能は現時点ではいかなる仕様にも属しません。将来的に標準となる可能性があります。詳細については、[_whatwg/fs#9_](https://github.com/whatwg/fs/pull/9) をご覧ください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
