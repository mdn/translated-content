---
title: SourceBuffer.removeAsync()
slug: Web/API/SourceBuffer/removeAsync
---

{{APIRef("Media Source Extensions")}}{{non-standard_header}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`removeAsync()`** メソッドは、特定の時間範囲内で見つかった `SourceBuffer` のメディアセグメントから非同期的に削除するプロセスを開始します。 指定された時間範囲のバッファが削除されたときに満たされる {{jsxref("Promise")}} が返されます。

このメソッドは、{{domxref("SourceBuffer.updating", "updating")}} が `false` の場合にのみ呼び出すことができます。 そうでない場合は、代わりに {{domxref("SourceBuffer.abort", "abort()")}} を呼び出します。

## 構文

```
removePromise = sourceBuffer.removeAsync(start, end);
```

### パラメーター

- `start`
  - : 時間範囲の始まりを秒単位で表す double 型。
- `end`
  - : 時間範囲の終わりを秒単位で表す double 型。

### 戻り値

指定された時間範囲のバッファが `SourceBuffer` から削除されると、完了ハンドラが実行される {{jsxref("Promise")}}。

## 例

この例では、指定された `SourceBuffer` の内容を単純にクリアする非同期関数 `emptySourceBuffer()` を定義します。

```js
async function emptySourceBuffer(msBuffer) {
  await msBuffer.removeAsync(0, Infinity).catch(function(e) {
    handleException(e);
  }
}
```

## 仕様

現在、MSE 仕様の一部ではありません。

| 仕様                                                 | 状態                                             | コメント |
| ---------------------------------------------------- | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer.removeAsync")}}

## 関連情報

- [Media Source Extensions API](/ja/docs/Web/API/Media_Source_Extensions_API)
- {{domxref("SourceBuffer.remove()")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
