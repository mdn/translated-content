---
title: "URL: revokeObjectURL() 静的メソッド"
short-title: revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{ApiRef("URL API")}}

**`URL.revokeObjectURL()`** 静的メソッドは、以前に {{domxref("URL.createObjectURL_static") }} を呼び出して生成された既存のオブジェクト URL を解放します。

オブジェクト URL を使い終わったら、このメソッドを呼び出して、ファイルへの参照をこれ以上保持しないようにブラウザーに知らせます。

{{AvailableInWorkers}}

> **メモ:** このメソッドは、{{domxref("Blob")}} インターフェイスのライフサイクルの問題とリークの可能性があるため、サービスワーカーからは利用できません。

## 構文

```js-nolint
URL.revokeObjectURL(objectURL)
```

### 引数

- `objectURL`
  - : 以前に {{domxref("URL/createObjectURL_static", "createObjectURL()") }} を呼び出して生成されたオブジェクト URL を表す文字列です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

[オブジェクト URL で画像を表示](/ja/docs/Web/API/File_API/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- [オブジェクト URL で画像を表示](/ja/docs/Web/API/File_API/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示)
- {{domxref("URL.createObjectURL_static") }}
