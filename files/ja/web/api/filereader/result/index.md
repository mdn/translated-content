---
title: "FileReader: result プロパティ"
short-title: result
slug: Web/API/FileReader/result
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`result`** は {{domxref("FileReader")}} インターフェイスの読み取り専用プロパティで、ファイルの内容を返します。このプロパティは、読み取り操作が完了した後でのみ有効で、データの形式は、読み取り操作を開始するために使用されたメソッドによって異なります。

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
        <code>result</code> はバイナリーデータを含む JavaScript の {{jsxref("ArrayBuffer")}} になります。
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

この例は、[ファイル入力欄](/ja/docs/Web/HTML/Reference/Elements/input/file)からファイルを読み込む関数 `reader()` を示しています。これは {{domxref("FileReader")}} オブジェクトを作成し、 {{domxref("FileReader/load_event", "load")}} イベントのリスナーを作成し、ファイルが読み込まれるとその `result` を取得し、提供されたコールバック関数を `reader()` に渡すことによって機能します。

内容は生のテキストデータとして扱われます。

```js
// この HTMLInputElement (type="file") があるとする
// <input id="image" type="file" accept="image/*">

function reader(file, callback) {
  const fr = new FileReader();
  fr.onload = () => callback(null, fr.result);
  fr.onerror = (err) => callback(err);
  fr.readAsDataURL(file);
}

document.querySelector("#image").addEventListener("change", (evt) => {
  // ファイルがないので、何もしない
  if (!evt.target.files) {
    return;
  }
  reader(evt.target.files[0], (err, res) => {
    console.log(res); // Base64 `data:image/...` String result.
  });
});
```

{{domxref("FileReader")}} は非同期であるため、プロミスベースの手法を使用することができます。以下は、`multiple` 属性を持つ [ファイル入力要素](/ja/docs/Web/HTML/Reference/Elements/input/file) の例で、{{jsxref("Promise")}} を返します。

```js
// この HTMLInputElement があったとする
// <input id="images" type="file" accept="image/*" multiple>

const reader = (file) =>
  new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr);
    fr.onerror = (err) => reject(err);
    fr.readAsDataURL(file);
  });

async function logImagesData(fileList) {
  let fileResults = [];
  const frPromises = fileList.map(reader);

  try {
    fileResults = await Promise.all(frPromises);
  } catch (err) {
    // この特定の場合では、FileList をユーザーが最初に選択した
    // ファイルのサブセットに変更するのは容易ではないため、
    // Promise.all() の方が Promise.allSettled() より適しているかも
    // しれません。したがって、操作全体を一時的に保留しておきましょう。
    console.error(err);
    return;
  }

  fileResults.forEach((fr) => {
    console.log(fr.result); // Base64 `data:image/...` String result.
  });
}

// HTMLInputElement type="file" のイベントハンドラー
document.querySelector("#images").addEventListener("change", (evt) => {
  // ファイルがない場合は、何もしない。
  if (!evt.target.files) {
    return;
  }
  logImagesData([...evt.target.files]);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
