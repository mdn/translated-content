---
title: URL.revokeObjectURL()
slug: Web/API/URL/revokeObjectURL
---

{{ApiRef("URL")}}

**`URL.revokeObjectURL()`** 静的メソッドは、以前に {{domxref("URL.createObjectURL()") }} を呼び出して生成された既存のオブジェクト URL を解放します。 オブジェクト URL を使い終わったら、このメソッドを呼び出して、ファイルへの参照をこれ以上保持しないようにブラウザーに知らせます。

{{AvailableInWorkers}}

> **メモ:** このメソッドは、{{domxref("Blob")}} インターフェイスのライフサイクルの問題とリークの可能性があるため、サービスワーカーからは利用できません。

## 構文

```
window.URL.revokeObjectURL(objectURL);
```

### パラメーター

- `objectURL`
  - : 以前に {{domxref("URL.createObjectURL", "createObjectURL()") }} を呼び出して生成されたオブジェクト URL を表す {{domxref("DOMString")}}。

### 戻り値

無効。

## 例

[オブジェクト URL で画像を表示](/ja/docs/Web/API/File/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示)を参照してください。

## 仕様

| 仕様                                                                                         | 状態                         | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('File API', '#dfn-revokeObjectURL', 'revokeObjectURL()')}} | {{Spec2('File API')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.revokeObjectURL")}}

## 関連情報

- [Web アプリケーションからファイルを扱う](/ja/docs/Web/API/File/Using_files_from_web_applications)
- [オブジェクト URL で画像を表示](/ja/docs/Web/API/File/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示)
- {{domxref("URL.createObjectURL()") }}
