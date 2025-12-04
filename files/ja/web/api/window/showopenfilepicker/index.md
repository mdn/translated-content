---
title: Window.showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("File System Access API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} インターフェイスの **`showOpenFilePicker()`** メソッドは、ユーザーが単一または複数のファイルを選択できるファイルピッカーを表示し、それらのファイルのハンドルを返します。

## 構文

```js-nolint
showOpenFilePicker()
```

### 引数

- `options` {{Optional_Inline}}
  - : 以下のオプションを含むオブジェクトです。
    - `multiple`
      - : {{JSxRef("boolean")}} 値で、デフォルトは `false` です。
        `true` に設定すると、複数のファイルを選択できるようになります。
    - `excludeAcceptAllOption`
      - {{JSxRef("boolean")}} 値で、デフォルトは `false` です。
        通常、ピッカーは (以下の `type` オプションに基づく) ファイル形式フィルターを何も適用しない選択肢を含むはずです。このオプションを `true` にすると、この選択肢を利用 _不可能_ にします。
    - `types`
      - : 選択可能なファイル形式の{{jsxref('Array', '配列')}}です。各項目は、以下のオプションを持つオブジェクトです。
        - `description`
          - : 選択可能なファイル形式のカテゴリーの説明で、省略可能です。
        - `accept`
          - : キーを [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types/Common_types)、値をファイルの拡張子の{{jsxref('Array', '配列')}}とする {{jsxref('Object')}} です。(例は以下を参照してください)

### 返値

{{domxref('FileSystemFileHandle')}} オブジェクトの{{jsxref('Array', '配列')}}で解決する {{jsxref("Promise")}} を返します。

### 例外

- `AbortError`
  - : ユーザーが選択せずにプロンプトを閉じた場合や、選択されたファイルがウェブサイトに開示するにはセンシティブであったり危険であったりするとみなされた場合、`AbortError` が投げられます。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/Defenses/User_activation)が必要です。この機能が動作するには、ユーザーがページまたは UI 要素を操作する必要があります。

## 例

このメソッドに渡すオプションオブジェクトを設定します。画像のファイル形式の選択を許可し、すべてのファイル形式の選択や複数ファイルの選択は許可しません。

```js
const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};
```

そして、ファイルピッカーを表示して選択されたファイルを返す非同期の関数を作成できます。

```js
// ファイルハンドルへの参照を作成する
let fileHandle;

async function getFile() {
  // ファイルピッカーを開き、返される 1要素の配列を展開する
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // fileHandle を用いてコードを実行する
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
