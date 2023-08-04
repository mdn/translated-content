---
title: MediaSource.setLiveSeekableRange()
slug: Web/API/MediaSource/setLiveSeekableRange
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} インターフェイスの **`setLiveSeekableRange()`** メソッドは、ユーザーがメディア要素でシークできる範囲を設定します。

## 構文

```
mediaSource.setLiveSeekableRange(start, end)
```

### パラメーター

- start
  - : ソースの最初から測定された秒単位で設定するシーク可能な範囲の始まり。 メディアソースの期間が正の無限大である場合、{{domxref("HTMLMediaElement.seekable")}} プロパティによって返される {{domxref("TimeRanges")}} オブジェクトは、この値以下の開始タイムスタンプを持ちます。
- end
  - : ソースの最初から測定された秒単位で設定するシーク可能な範囲の終わり。 メディアソースの期間が正の無限大である場合、{{domxref("HTMLMediaElement.seekable")}} プロパティによって返される {{domxref("TimeRanges")}} オブジェクトは、この値以上の終了タイムスタンプを持ちます。

### 戻り値

{{jsxref('undefined')}}

## 例

```js
// 未定
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.MediaSource.setLiveSeekableRange")}}
