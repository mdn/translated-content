---
title: Window.showSaveFilePicker()
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("File System Access API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} インターフェイスの **`showSaveFilePicker()`** メソッドは、ファイルピッカーを表示し、ユーザーにファイルを保存させることができます。
既存のファイルを選択することも、新規ファイルの名前を入力することもできます。

## 構文

```js-nolint
showSaveFilePicker()
```

### 引数

- `options` {{Optional_Inline}}

  - : 以下のオプションを含むオブジェクトです。

    - `excludeAcceptAllOption`
      - : {{JSxRef("boolean")}} 値で、デフォルトは `false` です。
        通常、ピッカーには (以下の `type` オプションに基づく) ファイル形式フィルターを何も適用しない選択肢があるはずです。このオプションを `true` にすると、この選択肢を利用 _不可能_ にします。
    - `suggestedName`
      - : 提案するファイル名を表す {{jsxref('String')}} です。
    - `types`

      - : 保存できるファイル形式の{{jsxref('Array', '配列')}}です。各要素は、以下のオプションを持つオブジェクトです。

        - `description`
          - : 許可されるファイル形式のカテゴリーの説明で、省略可能です。
        - `accept`
          - : キーを [MIME タイプ](/ja/docs/Web/HTTP/MIME_types/Common_types)に、値をファイルの拡張子の{{jsxref('Array', '配列')}}に設定した {{jsxref('Object')}} です。(例は以下を参照してください)

### 返値

{{domxref('FileSystemFileHandle')}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

### 例外

- `AbortError`
  - : ユーザーがファイルの選択や入力をせずにピッカーを閉じた場合や、選択されたファイルをユーザーエージェントがセンシティブや危険とみなした場合、投げられます。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/User_activation)が必要です。この機能が動作するためには、ユーザーがページまたは UI 要素を操作することが必要です。

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

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
