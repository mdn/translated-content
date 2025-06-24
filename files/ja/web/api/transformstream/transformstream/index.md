---
title: "TransformStream: TransformStream() コンストラクター"
short-title: TransformStream()
slug: Web/API/TransformStream/TransformStream
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`TransformStream()`** コンストラクターは、新しい {{domxref("TransformStream")}} オブジェクトを作成します。このオブジェクトは、書き込み可能な端点を表す {{domxref("WritableStream")}} と、読み取り可能な端点を表す {{domxref("ReadableStream")}} の 2 つのストリームを表します。

## 構文

```js-nolint
new TransformStream()
new TransformStream(transformer)
new TransformStream(transformer, writableStrategy)
new TransformStream(transformer, writableStrategy, readableStrategy)
```

### 引数

- `transformer` {{optional_inline}}
  - : `transformer` を表すオブジェクト。指定されなかった場合、ストリームは**同一変換ストリーム**となり、書き込み可能な端点に書き込まれたすべてのチャンクをそのまま読み取り可能な端点に転送します。

    変換オブジェクトは以下のメソッドを持つことができます。各メソッドの、 `controller` は {{domxref("TransformStreamDefaultController")}} のインスタンスです。
    - `start(controller)`
      - : `TransformStream` が構築される際に呼び出されます。通常は {{domxref("TransformStreamDefaultController.enqueue()")}} を使用してチャンクをキューに入れます。
    - `transform(chunk, controller)`
      - : 書き込み可能な端点に書き込まれたチャンクが変換される準備ができたときに呼び出され、変換ストリームの作業をします。書き込み処理の成功や失敗を指示するプロミスを返すことがあります。もし `transform()` メソッドが与えられなかった場合、ID 変換が使用され、チャンクは変更されずにキューに入れられます。
    - `flush(controller)`
      - : 書き込み可能な端点に書き込まれたチャンクがすべて正常に変換され、書き込み可能な端点が閉じられた後に呼び出されます。

- `writableStrategy` {{optional_inline}}
  - : オプションでストリームのキューイング戦略を定義するオブジェクト。これは 2 つの引数を取ります。
    - `highWaterMark`
      - : 非負の整数。これは、背圧が適用される前に内部キューに格納することができるチャンクの総数を定義します。
    - `size(chunk)`
      - : 引数 `chunk` を取るメソッド。これは各チャンクに使用するサイズをバイト単位で示します。

- `readableStrategy` {{optional_inline}}
  - : オプションでストリームのキューイング戦略を定義するオブジェクト。 2 つの引数を取ります。
    - `highWaterMark`
      - : 非負の整数。これは、背圧が適用される前に内部キューに格納することができるチャンクの総数を定義します。
    - `size(chunk)`
      - : 引数 `chunk` を取るメソッド。これは各チャンクに使用するサイズをバイト単位で示します。

> [!NOTE]
> 自分自身で独自の `readableStrategy` や `writableStrategy` を定義したり、オブジェクト値に対して {{domxref("ByteLengthQueuingStrategy")}} や {{domxref("CountQueuingStrategy")}} のインスタンスを使用したりすることができます。

## 例

### テキストを大文字に変換

次の例は、チャンクごとにテキストを大文字に変換します。この例は [Streams—The Definitive Guide](https://web.dev/streams/) から引用したもので、異なる種類のストリームの例が数多く含まれています。

```js
function upperCaseStream() {
  return new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
    },
  });
}

function appendToDOMStream(el) {
  return new WritableStream({
    write(chunk) {
      el.append(chunk);
    },
  });
}

fetch("./lorem-ipsum.txt").then((response) =>
  response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(upperCaseStream())
    .pipeTo(appendToDOMStream(document.body)),
);
```

### 同一変換ストリームの作成

引数 `transformer` を与えない場合は、書き込み可能な端点に書き込まれたチャンクを変更せずに読み取り可能な辺にすべて転送する同一変換ストリームになります。次の例では、パイプにバッファー機能を追加するために同一変換ストリームを使用しています。

```js
const writableStrategy = new ByteLengthQueuingStrategy({
  highWaterMark: 1024 * 1024,
});
readableStream
  .pipeThrough(new TransformStream(undefined, writableStrategy))
  .pipeTo(writableStream);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
