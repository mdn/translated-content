---
title: VideoTrack.selected
slug: Web/API/VideoTrack/selected
---

{{APIRef("HTML DOM")}}

**{{domxref("VideoTrack")}}** の **`selected`** プロパティは、特定の動画トラックがアクティブかどうかを制御します。

## 構文

```
isVideoSelected = VideoTrack.selected;

VideoTrack.selected = true | false;
```

### 値

`selected` プロパティは、トラックがアクティブな場合に値が `true` になる Boolean の値です。 同時にアクティブにできる動画トラックは 1 つだけなので、別のトラックがアクティブなときに、あるトラックでこのプロパティを `true` に設定すると、アクティブであったトラックは非アクティブになります。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.VideoTrack.selected")}}
