---
title: SourceBuffer.remove()
slug: Web/API/SourceBuffer/remove
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Media Source Extensions")}}

**`remove()`** は {{domxref("SourceBuffer")}} インターフェイスのメソッドで、特定の時間範囲内のメディアセグメントを `SourceBuffer` から削除します。 このメソッドは、{{domxref("SourceBuffer.updating")}} が `false` の場合にのみ呼び出すことができます。 `SourceBuffer.updating` が `false` に等しくない場合、{{domxref("SourceBuffer.abort()")}} を呼び出します。

## 構文

```js-nolint
remove(start, end)
```

### 引数

- `start`
  - : double 型で、時間範囲の始まりを秒単位で表します。
- `end`
  - : double 型で、時間範囲の終わりを秒単位で表します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidAccessError` {{domxref("DOMException")}}

  - : {{domxref("MediaSource.duration")}} プロパティが `NaN` に等しいか、`start` 引数が負であるか {{domxref("MediaSource.duration")}} より大きいか、`end` 引数が `start` 以下または `NaN` に等しい場合に発生します。

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("SourceBuffer.updating")}} プロパティが `true` に等しいか、この `SourceBuffer` が {{domxref("MediaSource")}} から取り除かれている場合に発生します。

## 例

TBD.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
