---
title: FileReader.onload
slug: conflicting/Web/API/FileReader/load_event
tags:
  - Event Handler
  - File
  - FileReader
  - Property
  - Reference
translation_of: Web/API/FileReader/onload
original_slug: Web/API/FileReader/onload
---
{{APIRef}}

**`FileReader.onload`** プロパティは、[readAsArrayBuffer](/ja/docs/Web/API/FileReader/readAsArrayBuffer) や [readAsBinaryString](/ja/docs/Web/API/FileReader/readAsBinaryString)、 [readAsDataURL](/ja/docs/Web/API/FileReader/readAsDataURL)、[readAsText](/ja/docs/Web/API/FileReader/readAsText) でのコンテンツ読み込みが完了して、利用可能になると発火する {{event('load')}} イベント時に実行されるイベントハンドラを含みます。

## 例

```js
// <input type="file" onchange="onChange(event)"> からのコールバック
function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    // ファイルのテキストがここにプリントされる
    console.log(event.target.result)
  };

  reader.readAsText(file);
}
```
