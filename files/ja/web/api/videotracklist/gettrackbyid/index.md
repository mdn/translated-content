---
title: Video​Track​List​.get​Track​ById
slug: Web/API/VideoTrackList/getTrackById
---

{{APIRef("HTML DOM")}}

**{{domxref("VideoTrackList")}}** の **`getTrackById()`** メソッドは、指定された文字列と {{domxref("VideoTrack.id", "id")}} が一致するトラックリストから最初の {{domxref("VideoTrack")}} オブジェクトを返します。 ID 文字列がわかっていれば、これで特定のトラックを見つけることができます。

## 構文

```
var theTrack = VideoTrackList.getTrackById(id);
```

### パラメーター

- `id`
  - : トラックリスト内で検索するトラックの ID を示す {{domxref("DOMString")}}。

### 戻り値

指定された文字列に一致する `id` を持つ `VideoTrackList` 内で見つかった最初のトラックを示す {{domxref("VideoTrack")}} オブジェクト。 一致が見つからない場合、このメソッドは `null` を返します。

トラックは自然な順序で検索されます。 つまり、メディアリソース自体によって定義された順序で、またはリソースが順序を定義していない場合は、メディアリソースによってトラックが宣言される相対的な順序です。

## 仕様

| 仕様                                                                                                                             | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#dom-videotracklist-gettrackbyid', 'VideoTrackList.getTrackById()')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.VideoTrackList.getTrackById")}}
