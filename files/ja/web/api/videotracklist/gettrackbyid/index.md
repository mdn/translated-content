---
title: VideoTrackList.getTrackById()
slug: Web/API/VideoTrackList/getTrackById
l10n:
  sourceCommit: b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{APIRef("HTML DOM")}}

**{{domxref("VideoTrackList")}}** の **`getTrackById()`** メソッドは、指定された文字列と {{domxref("VideoTrack.id", "id")}} が一致するトラックリストから最初の {{domxref("VideoTrack")}} オブジェクトを返します。

ID 文字列がわかっていれば、これで特定のトラックを見つけることができます。

## 構文

```js-nolint
getTrackById(id)
```

### 引数

- `id`
  - : 文字列で、トラックリスト内で検索するトラックの ID を指定します。

### 戻り値

指定された文字列に一致する `id` を持つ `VideoTrackList` 内で見つかった最初のトラックを示す {{domxref("VideoTrack")}} オブジェクト。 一致するものが見つからない場合、このメソッドは `null` を返します。

トラックは自然な順序で検索されます。 つまり、メディアリソース自体によって定義された順序で、またはリソースが順序を定義していない場合は、メディアリソースによってトラックが宣言される相対的な順序です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
