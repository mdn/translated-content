---
title: Window.showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: c6e1b00e194b214c2f82149aeaa15a944d2b005a
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} インターフェイスの **`showDirectoryPicker()`** メソッドは、ユーザーがディレクトリーを選択できるディレクトリーピッカーを表示します。

## 構文

```js-nolint
showDirectoryPicker()
```

### 引数

- `options` {{optional_inline}}

  - : 以下のオプションを含むオブジェクトです。

    - `id`
      - : ID を指定することで、ブラウザーは ID ごとに異なるディレクトリーを記憶することができます。他のピッカーで同じ ID を用いると、同じディレクトリーでピッカーが開きます。
    - `mode`
      - : 文字列です。ディレクトリーへの読み取り専用アクセスを表す `"read"` または、読み書きアクセスを表す `"readwrite"` を指定します。デフォルトは `"read"` です。
    - `startIn`
      - : ダイアログを開く場所を指定する `FileSystemHandle` またはウェルノウンディレクトリー (`"desktop"`、`"documents"`、`"downloads"`、`"music"`、`"pictures"`、`"videos"` のいずれか) です。

### 返値

{{domxref('FileSystemDirectoryHandle')}} で解決する {{jsxref("Promise")}} を返します。

### 例外

- `AbortError`
  - : ユーザーが選択せずにプロンプトを閉じた場合や、選択されたものをユーザーエージェントがセンシティブや危険だとみなした場合、投げられます。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/User_activation)が必要です。この機能が動作するためには、ユーザーがページまたは UI 要素を操作することが必要です。

## 例

この非同期関数は、ディレクトリーピッカーを表示し、選択されたら {{domxref('FileSystemDirectoryHandle')}} を返します。

```js
async function getDir() {
  const dirHandle = await window.showDirectoryPicker();

  // dirHandle を扱うコードを実行する
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
