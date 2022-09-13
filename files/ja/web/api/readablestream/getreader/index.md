---
title: ReadableStream.getReader()
slug: Web/API/ReadableStream/getReader
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} インターフェイスの **`getReader()`** メソッドはリーダーを作成し、それでストリームをロックします。 ストリームがロックされている間は、このリーダーが開放されるまで他のリーダーを取得できません。

## 構文

```
var reader = readableStream.getReader({mode});
```

### パラメーター

- {mode} {{optional_inline}}

  - : プロパティ `mode` を含むオブジェクト。 `mode` は作成するリーダーのタイプを指定する {{domxref("DOMString")}} を値として受け取ります。 値は次のとおりです。

    - `"byob"`。 これにより、読み取り可能なバイトストリームを読み取ることができる {{domxref("ReadableStreamBYOBReader")}} が作成されます（つまり、「独自のバッファーを持ち込む」読み取りを処理できます）。
    - `undefined`（またはまったく指定されていない — これがデフォルトです）。 これにより、ストリームから個々のチャンクを読み取ることができる {{domxref("ReadableStreamDefaultReader")}} が作成されます。

### 戻り値

`mode` 値に応じて、{{domxref("ReadableStreamDefaultReader")}} または {{domxref("ReadableStreamBYOBReader")}} オブジェクトのインスタンス。

### 例外

- RangeError
  - : 指定された `mode` 値は `"byob"` または `undefined` ではありません。
- TypeError
  - : リーダーを作成しようとしているストリームは {{domxref("ReadableStream")}} ではありません。

## 例

次の簡単な例では、`getReader()` を使用して作成した {{domxref("ReadableStreamDefaultReader")}} を使用して、以前に作成したカスタムの `ReadableStream` を読み取ります（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで UI に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を UI の別の部分に出力します。

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() は、値を受け取ったときに解決する promise を返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // done  - ストリームがすべてのデータを既に提供している場合は true。
    // value - 一部のデータ。 done が true の場合、常に undefined。
    if (done) {
      console.log("Stream complete");
      para.textContent = value;
      return;
    }

    // フェッチしたストリームの値は Uint8Array です
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list2.appendChild(listItem);

    result += chunk;

    // さらに読み、この関数を再度呼び出します
    return reader.read().then(processText);
  });
}
```

## 仕様

| 仕様                                                                     | 状態                         | コメント |
| ------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-get-reader","getReader()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStream.getReader")}}
