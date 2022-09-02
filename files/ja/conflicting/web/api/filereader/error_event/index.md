---
title: onerror
slug: conflicting/Web/API/FileReader/error_event
translation_of: Web/API/FileReader/onerror
original_slug: Web/API/FileReader/onerror
---
[FileReader](/ja/docs/Web/API/FileReader) の onerror ハンドラは、Error オブジェクトではなく Event オブジェクトをパラメータとして受け取りますが、エラーは FileReader オブジェクトから [`instanceOfFileReader.error`](/ja/docs/Web/API/FileReader/error) のようにアクセスすることができます。

```js
// <input type="file" onchange="onChange(event)"> からのコールバック
function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onerror = function(event) {
    alert("ファイルの読み込みに失敗しました。\n\n" + reader.error);
    reader.abort(); // (...これは onerror ハンドラで何か有用なことをするのでしょうか？)
  };

  reader.readAsText(file);
}
```
