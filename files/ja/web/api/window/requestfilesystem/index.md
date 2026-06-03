---
title: "Window: requestFileSystem() メソッド"
short-title: requestFileSystem()
slug: Web/API/Window/requestFileSystem
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{non-standard_header}}

標準外の {{domxref("Window")}} の **`requestFileSystem()`** メソッドは、 Google Chrome 固有のメソッドであり、ウェブサイトやアプリが自身の使用のためにサンドボックス化されたファイルシステムにアクセスできるようにします。返される {{domxref("FileSystem")}} は、他の[ファイルシステム API](/ja/docs/Web/API/File_and_Directory_Entries_API) と共に使用可能になります。

> [!NOTE]
> このメソッドは、実装するすべてのブラウザーにおいて `webkit` が接頭辞として付加されています

## 構文

```js-nolint
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### 引数

- `type`
  - : リクエストするストレージの種類。ブラウザーが独自の判断でファイルを削除しても問題ない場合（ストレージ容量が不足した場合など）は `Window.TEMPORARY` を指定し、ユーザーまたはウェブサイト／アプリが明示的に許可しない限りファイルを保持する必要がある場合は `Window.PERSISTENT` を指定します。
    永続的ストレージを利用するには、ユーザーがサイトにクォータを付与する必要があります。
- `size`
  - : アプリの使用に割り当てたいストレージ容量。
- `successCallback`
  - : ファイルシステムが正常に取得された際に呼び出される関数。コールバックは単一の引数として、アプリが使用権限を持つファイルシステムを表す {{domxref("FileSystem")}} オブジェクトを取ります。
- `errorCallback` {{optional_inline}}
  - : ファイルシステムの取得中にエラーが発生した場合、またはユーザーがファイルシステムの作成またはアクセスを許可しなかった場合に呼び出される関数を指定するオプションの引数。コールバック関数は、エラーを説明する `DOMException` オブジェクトを単一の引数として受け取ります。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

このメソッドは[ファイルとディレクトリー項目 API](https://wicg.github.io/entries-api/) の提案から削除されたため、W3C や WHATWG による公式仕様は存在しません。標準化プロセスからも外れています。

## ブラウザーの互換性

{{Compat}}
