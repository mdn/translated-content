---
title: "MediaStream: addTrack() メソッド"
short-title: addTrack()
slug: Web/API/MediaStream/addTrack
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

**`addTrack()`** は {{domxref("MediaStream")}} インターフェイスのメソッドで、ストリームへ新しいトラックを追加します。このトラックは {{domxref("MediaStreamTrack")}} 型の引数して指定します。

> [!NOTE]
> 指定されたトラックが既にストリームのトラックセットにあった場合、このメソッドは何もしません。

## 構文

```js-nolint
addTrack(track)
```

### 引数

- `track`
  - : このストリームへ追加する {{domxref("MediaStreamTrack")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("MediaStream")}}。
