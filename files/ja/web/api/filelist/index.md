---
title: FileList
slug: Web/API/FileList
---

{{APIRef("File API")}}

この型のオブジェクトは、 HTML の {{HTMLElement("input")}} 要素の `files` プロパティで返されます。これにより、 `<input type="file">` 要素で選択されているファイルのリストにアクセスすることができます。また、ドラッグ＆ドロップ API を使用している場合は、ウェブコンテンツにドロップされたファイルのリストにも使用されます。使用方法の詳細は [`DataTransfer`](/ja/docs/Web/API/DataTransfer) オブジェクトを見てください。

> **メモ:** Gecko 1.9.2 より前は、input 要素は一度に 1 つのファイルだけ選択することができます。すなわち、 FileList に入るファイルは 1 つだけです。 Gecko 1.9.2 から、 input 要素の multiple 属性が true の場合、 FileList に複数のファイルが入ります。

## ファイルリストの使用

すべての `<input>` 要素のノードには `files` 属性があり、これが `FileList` 型なので、リスト中の項目にアクセスすることができます。例えば、HTML に以下のファイル入力があるとします。

```html
<input id="fileItem" type="file" />
```

次のコードの行は、ノードのファイルリスト内の最初のファイルを [`File`](/ja/docs/Web/API/File) オブジェクトとして取得します。

```js
var file = document.getElementById("fileItem").files[0];
```

## メソッドの概要

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code>File <a href="#item">item</a>(index);</code>
      </td>
    </tr>
  </tbody>
</table>

## プロパティ

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">属性</td>
      <td class="header">型</td>
      <td class="header">説明</td>
    </tr>
    <tr>
      <td><code>length</code></td>
      <td><code>integer</code></td>
      <td>読み取り専用で、リスト内のファイル数を示します。</td>
    </tr>
  </tbody>
</table>

## メソッド

### item()

ファイルリスト内の指定された位置にあるファイルを表す [`File`](/ja/docs/Web/API/File) オブジェクトを返します。

```
File item(
  index
);
```

#### 引数

- `index`
  - : リストから受け取るファイルの 0 から始まる位置です。

#### 返値

要求されたファイルを表す [`File`](/ja/docs/Web/API/File) です。

## 例

この例では、`input` 要素を使用してユーザーが選択したすべてのファイルを反復処理します。

```js
// fileInput は HTML の input 要素 <input type="file" id="myfileinput" multiple> です。
var fileInput = document.getElementById("myfileinput");

// files は FileList オブジェクトです (NodeList と同様)
var files = fileInput.files;
var file;

// files を反復処理
for (var i = 0; i < files.length; i++) {
  // get item
  file = files.item(i);
  //or
  file = files[i];

  alert(file.name);
}
```

こちらが完全な例です。

```html
<!doctype html>
<html>
  <head> </head>
  <body>
    <!-- multiple を設定して、複数のファイルが選択できるようにしています -->

    <input id="myfiles" multiple type="file" />
  </body>

  <script>
    var pullfiles = function () {
      // querySelector が好き
      var fileInput = document.querySelector("#myfiles");
      var files = fileInput.files;
      // files.length をキャッシュ
      var fl = files.length;
      var i = 0;

      while (i < fl) {
        // ループ内のファイル var をローカライズ
        var file = files[i];
        alert(file.name);
        i++;
      }
    };

    // input 要素の onchange を設定し pullfiles を呼び出すようにします。
    document.querySelector("#myfiles").onchange = pullfiles;

    //a.t
  </script>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- [`File`](/ja/docs/Web/API/File)
- [`FileReader`](/ja/docs/Web/API/FileReader)
