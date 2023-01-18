---
title: SourceBuffer.removeAsync()
slug: Web/API/SourceBuffer/removeAsync
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Media Source Extensions")}}{{Non-standard_Header}}{{SeeCompatTable}}

**`removeAsync()`** は {{domxref("SourceBuffer")}} インターフェイスのメソッドで、特定の時間範囲内で見つかった `SourceBuffer` のメディアセグメントから非同期的に削除するプロセスを開始します。 指定された時間範囲のバッファーが削除されたときに履行される {{jsxref("Promise")}} が返されます。

このメソッドは、{{domxref("SourceBuffer.updating", "updating")}} が `false` の場合にのみ呼び出すことができます。そうでない場合は、代わりに {{domxref("SourceBuffer.abort", "abort()")}} を呼び出します。

## 構文

```js-nolint
removeAsync(start, end)
```

### 引数

- `start`
  - : double 型で、時間範囲の始まりを秒単位で表します。
- `end`
  - : double 型で、時間範囲の終わりを秒単位で表します。

### 返値

{{jsxref("Promise")}} で、指定された時間範囲のバッファーが `SourceBuffer` から削除されると、履行ハンドラーが実行されます。

## 例

この例では、非同期関数 `emptySourceBuffer()` を定義します。これは指定された `SourceBuffer` の内容を単純にクリアします。

```js
async function emptySourceBuffer(msBuffer) {
  await msBuffer.removeAsync(0, Infinity).catch((e) => {
    handleException(e);
  });
}
```

## 仕様書

この機能は、どの仕様にも属しません。標準化の予定もありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアソース拡張 API](/ja/docs/Web/API/Media_Source_Extensions_API)
- {{domxref("SourceBuffer.remove()")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
