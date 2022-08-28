---
title: ReadableStream.tee()
slug: Web/API/ReadableStream/tee
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} インターフェイスの **`tee()`** メソッドは、現在の読み取り可能なストリームを[ティーイング](https://streams.spec.whatwg.org/#tee-a-readable-stream)し、結果の 2 つの分岐を新しい {{domxref("ReadableStream")}} インスタンスとして含む 2 要素配列を返します。

これは、2 つのリーダーがストリームを同時に、おそらく異なる速度で読み取ることができるようにする場合に便利です。 例えば、サーバーから応答を取得してブラウザーにストリームしたいが、ServiceWorker キャッシュにもストリームしたい場合は、ServiceWorker でこれを行うことができます。 応答のボディを複数回使用することはできないため、これを行うには 2 つのコピーが必要です。

ストリームをキャンセルするには、結果の両方の分岐をキャンセルする必要があります。 ストリームをティーイングすると、通常、その間はストリームがロックされ、他のリーダーがロックできなくなります。

## 構文

```
var teedStreams = readableStream.tee();
```

### パラメーター

なし。

### 戻り値

2 つの {{domxref("ReadableStream")}} インスタンスを含む {{jsxref("Array")}}。

### 例外

- TypeError
  - : ソースストリームは `ReadableStream` ではありません。

## 例

次の簡単な例では、以前に作成したストリームをティーイングした結果の両方のストリーム（生成された配列の 2 つのメンバーに含まれる）を、2 つのストリームからデータを読み取り、各ストリームのチャンクを UI の異なる部分に順番に印刷する関数に渡します。 完全なコードについては、[単純な tee の例](https://mdn.github.io/dom-examples/streams/simple-tee-example/)を参照してください。

```js
function teeStream() {
  const teedOff = stream.tee();
  fetchStream(teedOff[0], list2);
  fetchStream(teedOff[1], list3);
}

function fetchStream(stream, list) {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() は、値を受け取ったときに解決する promise を返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // done  - ストリームがすべてのデータを既に提供している場合は true。
    // value - 一部のデータ。 done が true の場合、常に undefined。
    if (done) {
      console.log("Stream complete");
      return;
    }

    // フェッチしたストリームの値は Uint8Array です
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement('li');
    listItem.textContent = 'Read ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
    list.appendChild(listItem);

    // さらに読み、この関数を再度呼び出します
    return reader.read().then(processText);
  });
}
```

## 仕様

| 仕様                                                     | 状態                         | コメント |
| -------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-tee","tee()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStream.tee")}}
