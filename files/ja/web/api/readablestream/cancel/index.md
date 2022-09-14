---
title: ReadableStream.cancel()
slug: Web/API/ReadableStream/cancel
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} インターフェイスの **`cancel()`** メソッドは、関連付けられたストリームをキャンセルします。 提供された `reason` パラメーターは、基になるソースに与えられ、使用する場合と使用しない場合があります。

キャンセルは、ストリームを完全に終了し、読み取り待ちのチャンクがキューに入れられている場合でも、それ以上データを必要としない場合に使用します。 キャンセルが呼び出された後、そのデータは失われ、ストリームは読み取り不能になります。 これらのチャンクをまだ読み取り、ストリームを完全に取り除くわけではない場合は、{{domxref("ReadableStreamDefaultController.close()")}} を使用します。

## 構文

```
var promise = readableStream.cancel(reason);
```

### パラメーター

- reason
  - : 人間が読むことができるキャンセルの理由を提供する {{domxref("DOMString")}}。

### 戻り値

{{jsxref("Promise")}}。 `reason` パラメーターで指定された値で満たされます。

### 例外

- TypeError
  - : キャンセルしようとしているストリームは {{domxref("ReadableStream")}} ではないか、ロックされています。

## 例

Jake Archibald による[フェッチのキャンセル](https://jsbin.com/gameboy/edit?js,console)の例では、ストリームを使用して、チャンクごとに WHATWG HTML 仕様をフェッチします。 各チャンクで文字列 "service workers" を検索します。 検索用語が見つかると、`cancel()` を使用してストリームをキャンセルします — 仕事は終了しているため、ストリームは不要になります。

```js
var searchTerm = "service workers";
// 一致した結果の両側を表示する文字数
var contextBefore = 30;
var contextAfter = 30;
var caseInsensitive = true;
var url = 'https://html.spec.whatwg.org/';

console.log(`'${searchTerm}' を '${url}' で検索`);

fetch(url).then(response => {
  console.log('ヘッダーを受信しました');

  var decoder = new TextDecoder();
  var reader = response.body.getReader();
  var toMatch = caseInsensitive ? searchTerm.toLowerCase() : searchTerm;
  var bufferSize = Math.max(toMatch.length - 1, contextBefore);

  var bytesReceived = 0;
  var buffer = '';
  var matchFoundAt = -1;

  return reader.read().then(function process(result) {
    if (result.done) {
      console.log('一致が見つかりませんでした');
      return;
    }

    bytesReceived += result.value.length;
    console.log(`これまでに ${bytesReceived} バイトのデータを受信しました`);

    buffer += decoder.decode(result.value, {stream: true});

    // 一致するものが既に見つかっており、コンテキストを収集していますか？
    if (matchFoundAt === -1) {
      matchFoundAt = (caseInsensitive ? buffer.toLowerCase() : buffer).indexOf(toMatch);
    }

    if (matchFoundAt === -1) {
      buffer = buffer.slice(-bufferSize);
    }
    else if (buffer.slice(matchFoundAt + toMatch.length).length >= contextAfter) {
      console.log("これが一致したものです:")
      console.log(buffer.slice(
        Math.max(0, matchFoundAt - contextBefore),
        matchFoundAt + toMatch.length + contextAfter
      ));
      console.log("フェッチのキャンセル");
      reader.cancel();
      return;
    }
    else {
      console.log('一致が見つかりましたが、さらにコンテキストが必要です…');
    }

    // 読み続けます
    return reader.read().then(process);
  });
}).catch(err => {
  console.log("何かがおかしかった。 詳細については、開発ツールを参照してください。 応答に CORS ヘッダーがありませんか？");
  throw err;
});
```

## 仕様

| 仕様                                                             | 状態                         | コメント |
| ---------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-cancel","cancel()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStream.cancel")}}
