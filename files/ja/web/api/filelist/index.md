---
title: FileList
slug: Web/API/FileList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`FileList`** インターフェイスは、HTML の {{HTMLElement("input")}} 要素の `files` プロパティによって返されるこの型のオブジェクトを表します。これにより、`<input type="file">` 要素で選択されたファイルのリストにアクセスできます。また、ドラッグ＆ドロップ API を使用する際、ウェブコンテンツにドロップされたファイルのリストにも使用されています。この使い方の詳細は、{{domxref("DataTransfer")}} オブジェクトを参照してください。

すべての `<input>` 要素のノードには `files` 属性があり、これが `FileList` 型なので、リスト中の項目にアクセスすることができます。例えば、HTML に以下のファイル入力があるとします。

```html
<input id="fileItem" type="file" />
```

次のコードの行は、ノードのファイルリスト内の最初のファイルを {{domxref("File")}} オブジェクトとして取得します。

```js
const file = document.getElementById("fileItem").files[0];
```

このインターフェイスは[変更不可能なリストを作成しようする試み](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156)であり、既にそれを使用しているコードを壊さないために対応が続いているだけです。現行の API は、JavaScript の[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)に基づく型を使用してリスト構造を表します。これにより、多くの配列メソッドが利用できると同時に、その使用法に追加の意味づけ（アイテムの読み取り専用化など）が課されます。

こうした歴史的な理由があるからといって、開発者として `FileList` を避ける必要があるわけではありません。`FileList` オブジェクトは自分で作成するものではなく、{{domxref("HTMLInputElement.files")}} などの API から取得します。これらの API は非推奨になっていません。ただし、実際の配列との意味づけの違いには注意が必要です。

## インスタンスプロパティ

- {{DOMxRef("FileList.length", "length")}} {{ReadOnlyInline}}
  - : 読み取り専用の値で、リスト内のファイル数を示します。

## インスタンスメソッド

- {{DOMxRef("FileList.item()", "item()")}}
  - : {{domxref("File")}} オブジェクトで、このファイルリスト内の指定された位置にあるファイルを表します。

## 例

### ファイル名のログ出力

この例では、ユーザーが選択したすべてのファイルの名前をログ出力します。

#### HTML

```html
<input id="myfiles" multiple type="file" />
<pre class="output">選択されたファイル:</pre>
```

#### CSS

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

#### JavaScript

```js
const output = document.querySelector(".output");
const fileInput = document.querySelector("#myfiles");

fileInput.addEventListener("change", () => {
  for (const file of fileInput.files) {
    output.innerText += `\n${file.name}`;
  }
});
```

#### 結果

{{EmbedLiveSample("Logging filenames")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("FileReader")}}
