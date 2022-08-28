---
title: ReadableStream.pipeTo()
slug: Web/API/ReadableStream/pipeTo
---
{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("ReadableStream")}} インターフェイスの **`pipeTo()`** メソッドは、現在の `ReadableStream` を与えられた {{domxref("WritableStream")}} にパイプし、パイプのプロセスが正常に完了した場合は満たされ、エラーが発生した場合は拒否する promise を返します。

ストリームをパイプすると、通常、パイプしている間はストリームがロックされ、他のリーダーがロックできなくなります。

## 構文

```
var promise = readableStream.pipeTo(destination[, options]);
```

### パラメーター

- destination
  - : {{domxref("ReadableStream")}} の最終的な宛先として機能する {{domxref("WritableStream")}}。
- options {{optional_inline}}

  - : ストリームのキャンセル、クローズ、または中止をいつ防止するかを定義できるプロパティを含むオプションのオブジェクト（すべて任意）。 オプションは次のとおりです。

    1.  `preventClose`: これが `true` に設定されている場合、ソースの `ReadableStream` を閉じても、宛先の `WritableStream` は閉じられません。 このメソッドは、宛先を閉じるときにエラーが発生しない限り、このプロセスが完了すると満たされる promise を返します。
    2.  `preventAbort`: これが `true` に設定されている場合、ソースの `ReadableStream` のエラーは宛先の `WritableStream` を中止しません。 このメソッドは、ソースのエラー、または宛先の中止中に発生したエラーで拒否される promise を返します。
    3.  `preventCancel`: これが `true` に設定されている場合、宛先の `WritableStream` のエラーはソースの `ReadableStream` をキャンセルしなくなります。 この場合、メソッドは、ソースのエラー、またはソースのキャンセル中に発生したエラーで拒否される promise を返します。 さらに、宛先の書き込み可能なストリームが閉じた状態または閉じようとしている状態で開始した場合、ソースの読み取り可能なストリームはキャンセルされなくなります。 この場合、メソッドは、閉じたストリームへのパイプが失敗したことを示すエラー、またはソースのキャンセル中に発生したエラーで拒否される promise を返します。

### 戻り値

パイプのプロセスが完了したときに解決する {{jsxref("Promise")}}。

### 例外

- TypeError
  - : `writableStream` および/または `readableStream` オブジェクトは、書き込み可能なストリーム/読み取り可能なストリームではないか、ストリームの一方または両方がロックされています。

## 例

```js
// 元の画像をフェッチ
fetch('png-logo.png')
// その body を ReadableStream として取得
.then(response => response.body)
.then(body => body.pipeThrough(new PNGTransformStream()))
.then(rs => rs.pipeTo(new FinalDestinationStream()))
```

## 仕様

| 仕様                                                             | 状態                         | コメント |
| ---------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#rs-pipe-to","pipeTo()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStream.pipeTo")}}
