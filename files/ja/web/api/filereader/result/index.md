---
title: FileReader.result
slug: Web/API/FileReader/result
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("File API")}}

{{domxref("FileReader")}} の **`result`** プロパティは、ファイルの内容を返します。このプロパティは、読み取り操作が完了した後でのみ有効で、データの形式は、読み取り操作を開始するために使用されたメソッドによって異なります。

### 値

読み取り操作を開始するためにどの読み取りメソッドが使用されたかに基づく、適切な文字列または {{jsxref("ArrayBuffer")}} です。読み取りがまだ完了していないか、失敗した場合は、値は `null` になります。

結果の型は以下の通りです。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">メソッド</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("FileReader/readAsArrayBuffer", "readAsArrayBuffer()")}}
      </td>
      <td>
        <code>result</code> はバイナリーデータを含む JavaScript の {{jsxref("Global_Objects/ArrayBuffer", "ArrayBuffer")}} になります。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsBinaryString", "readAsBinaryString()")}}
      </td>
      <td>
        <code>result</code> にはファイルから生のバイナリーデータが文字列で格納されます。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsDataURL", "readAsDataURL()")}}
      </td>
      <td>
        <code>result</code> はファイルのデータを表す <code>data:</code> URL の文字列になります。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("FileReader/readAsText", "readAsText()")}}
      </td>
      <td><code>result</code> は文字列のテキストです。</td>
    </tr>
  </tbody>
</table>

## 例

この例は、[ファイル入力欄](/ja/docs/Web/HTML/Element/input/file)からファイルを読み込む関数 `read()` を示しています。これは {{domxref("FileReader")}} オブジェクトを作成し、 {{domxref("FileReader/load_event", "load")}} イベントのリスナーを作成し、ファイルが読み込まれるとその `result` を取得し、提供されたコールバック関数を `read()` に渡すことによって機能します。

内容は生のテキストデータとして扱われます。

```js
const fileInput = document.querySelector('input[type="file"]');

function read(callback) {
  const file = fileInput.files.item(0);
  const reader = new FileReader();

  reader.onload = () => {
    callback(reader.result);
  };

  reader.readAsText(file);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
