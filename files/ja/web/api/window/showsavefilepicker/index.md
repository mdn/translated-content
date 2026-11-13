---
title: "Window: showSaveFilePicker() メソッド"
short-title: showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 381dfaf4d7f555e847b0af726a93ce48cde15915
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} インターフェイスの **`showSaveFilePicker()`** メソッドは、ファイルピッカーを表示し、ユーザーにファイルを保存させることができます。
既存のファイルを選択することも、新規ファイルの名前を入力することもできます。

## 構文

```js-nolint
showSaveFilePicker()
showSaveFilePicker(options)
```

### 引数

- `options` {{Optional_Inline}}
  - : 以下のオプションを含むオブジェクトです。
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : 論理値で、デフォルトは `false` です。
        デフォルトで、ピッカーにはファイル形式のフィルターを一切適用しないオプション（下記 type オプションで指定）が組み込まれています。
        このオプションを `true` に設定すると、そのオプションは利用不可となります。
    - `id` {{Optional_Inline}}
      - : ID を指定することで、ブラウザーは ID ごとに異なるディレクトリーを記憶することができます。
        別のピッカーで同じ ID が使用されている場合、そのピッカーは同じディレクトリーで開かれます。
    - `startIn` {{Optional_Inline}}
      - : ダイアログが開いたときにいる場所の {{domxref("FileSystemHandle")}} または既知のディレクトリー (`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, `"videos"`) です。
    - `suggestedName` {{Optional_Inline}}
      - : 文字列 ({{jsxref('String')}}) です。提案するファイル名です。
    - `types` {{Optional_Inline}}
      - : 保存できるファイル形式の配列 ({{jsxref('Array')}}) です。各要素は、以下のオプションを持つオブジェクトです。
        - `description` {{Optional_Inline}}
          - : 許可されるファイル形式のカテゴリーのオプションの説明です。デフォルトは空文字列です。
        - `accept`
          - : {{jsxref('Object')}} で、キーを [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types/Common_types)に、値をファイルの拡張子の配列 ({{jsxref('Array')}}) に設定したものです（例は以下を参照してください）。

### 返値

{{domxref('FileSystemFileHandle')}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : ユーザーがファイルの選択や入力をせずにピッカーを閉じた場合や、ユーザーエージェントが選択されたファイルをセンシティブや危険とみなした場合に発生します。
- `SecurityError` {{domxref("DOMException")}}
  - : 呼び出しが [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy) によってブロックされた場合、またはボタンの押下などのユーザー操作を介して呼び出されなかった場合に発生します。
- {{jsxref("TypeError")}}
  - : 受け入れる型を処理できない場合に発生します。これは、次のような場合に起こり得ます。
    - `types` オプション内の任意のアイテムの `accept` オプションに含まれるキー文字列のいずれも、有効な MIME タイプとして構文解析できない場合。
    - `types` オプション内の任意のアイテムの `accept` オプションの値文字列は、例えば、先頭が `.` でなく末尾が `.` である場合や、無効なコードポイントを含み、かつ長さが 16 を超える場合など、無効となった場合。
    - `types` オプションは空で、`excludeAcceptAllOption` オプションは `true` である場合。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/Defenses/User_activation)が必要です。この機能が動作するためには、ユーザーがページまたは UI 要素を操作することが必要です。

## 例

以下の関数は、テキストファイルが選択しやすい状態でファイルピッカーを表示します。

```js
async function getNewFileHandle() {
  const opts = {
    types: [
      {
        description: "テキストファイル",
        accept: { "text/plain": [".txt"] },
      },
    ],
  };
  return await window.showSaveFilePicker(opts);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
