---
title: "Window: showOpenFilePicker() メソッド"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 381dfaf4d7f555e847b0af726a93ce48cde15915
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} インターフェイスの **`showOpenFilePicker()`** メソッドは、ユーザーが単一または複数のファイルを選択できるファイルピッカーを表示し、それらのファイルのハンドルを返します。

## 構文

```js-nolint
showOpenFilePicker()
showOpenFilePicker(options)
```

### 引数

- `options` {{Optional_Inline}}
  - : 以下のオプションを含むオブジェクトです。
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : 論理値で、デフォルトは `false` です。
        通常、ピッカーは (以下の `type` オプションに基づく) ファイル形式フィルターを何も適用しない選択肢を含むはずです。このオプションを `true` にすると、この選択肢を利用 _不可能_ にします。
    - `id` {{Optional_Inline}}
      - : ID を指定すると、ブラウザーは ID ごとに異なるディレクトリーを記憶できます。同じ ID を別のピッカーで使用すると、そのピッカーは同じディレクトリーで開きます。
    - `multiple` {{Optional_Inline}}
      - : 論理値で、デフォルトは `false` です。`true` に設定すると、複数のファイルを選択できるようになります。
    - `startIn` {{Optional_Inline}}
      - : ダイアログを開く場所として、{{domxref("FileSystemHandle")}} または既知のディレクトリー (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, `"videos"`) を指定します。
    - `types` {{Optional_Inline}}
      - : 選択可能なファイル形式の{{jsxref('Array', '配列')}}です。各項目は、以下のオプションを持つオブジェクトです。
        - `description` {{Optional_Inline}}
          - : 選択可能なファイル形式のカテゴリーの説明です。省略可能で、デフォルトは空文字列です。
        - `accept`
          - : キーを [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types/Common_types)、値をファイルの拡張子の{{jsxref('Array', '配列')}}とする {{jsxref('Object')}} です。(例は以下を参照してください)

### 返値

{{domxref('FileSystemFileHandle')}} オブジェクトの{{jsxref('Array', '配列')}}で解決する {{jsxref("Promise")}} を返します。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : ユーザーが選択せずにプロンプトを閉じた場合、またはユーザーエージェントが選択されたファイルをウェブサイトに開示するにはセンシティブまたは危険すぎると判断した場合に発生します。
- `SecurityError` {{domxref("DOMException")}}
  - : 呼び出しが[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)によってブロックされた場合、またはボタンの押下など、ユーザーの操作によって呼び出されなかった場合に発生します。
- {{jsxref("TypeError")}}
  - : `accept` で指定されたファイル形式を処理できない場合に発生します。たとえば、次のような場合です。
    - `types` 内のいずれかの項目にある `accept` オプションのキー文字列が、有効な MIME タイプとして構文解析できない。
    - `types` 内のいずれかの項目にある `accept` オプションの値文字列が無効である。たとえば、`.` で始まらない、`.` で終わる、無効なコードポイントを含み、かつ長さが 16 を超える場合など。
    - `types` オプションが空で、`excludeAcceptAllOption` オプションが `true` である。

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

- [File System API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
