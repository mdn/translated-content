---
title: FileReader.abort()
slug: Web/API/FileReader/abort
---

{{APIRef("File API")}}

**`abort`** メソッドは読み取り操作を中止します。戻る時に、 {{domxref("FileReader.readyState","readyState")}} が `DONE` になります。

## 構文

```
instanceOfFileReader.abort();
```

### 例外

- `DOM_FILE_ABORT_ERR`
  - : 読み込み操作が実行されていない間に `abort` が呼び出されたとき (つまり、状態が `LOADING` でないとき) にスローされます。

## 仕様

| 仕様書                                                                               | 状態                         | 備考     |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("File API", "#FileReader-interface", "FileReader")}} | {{Spec2("File API")}} | 初回定義 |

## ブラウザの互換性

{{Compat("api.FileReader.abort")}}

## あわせて参照

- {{domxref("FileReader")}}
