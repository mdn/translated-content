---
title: "MediaSource: setLiveSeekableRange() メソッド"
short-title: setLiveSeekableRange()
slug: Web/API/MediaSource/setLiveSeekableRange
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

**`setLiveSeekableRange()`** は {{domxref("MediaSource")}} インターフェイスのメソッドで、ユーザーがメディア要素でシークできる範囲を設定します。

## 構文

```js-nolint
setLiveSeekableRange(start, end)
```

### 引数

- `start`
  - : ソースの最初から測定された秒単位で設定するシーク可能な範囲の始まり。 メディアソースの期間が正の無限大である場合、 {{domxref("HTMLMediaElement.seekable")}} プロパティによって返される {{domxref("TimeRanges")}} オブジェクトは、この値以下の開始タイムスタンプを持ちます。
- `end`
  - : ソースの最初から測定された秒単位で設定するシーク可能な範囲の終わり。 メディアソースの期間が正の無限大である場合、 {{domxref("HTMLMediaElement.seekable")}} プロパティによって返される {{domxref("TimeRanges")}} オブジェクトは、この値以上の終了タイムスタンプを持ちます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// 未定
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
