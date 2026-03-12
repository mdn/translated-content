---
title: ImageTrackList
slug: Web/API/ImageTrackList
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref('WebCodecs API','','','true')}} 的 **`ImageTrackList`** 接口表示一个图像轨道列表。

## 实例属性

- {{domxref("ImageTrackList.ready")}} {{ReadOnlyInline}}
  - : 返回一个 {{jsxref("promise")}}，并在 `ImageTrackList` 被 {{domxref("ImageTrack","tracks")}} 填充完毕兑现。
- {{domxref("ImageTrackList.length")}} {{ReadOnlyInline}}
  - : 返回一个指示 `ImageTrackList` 的长度的整型。
- {{domxref("ImageTrackList.selectedIndex")}} {{ReadOnlyInline}}
  - : 返回一个指示 `selectedTrack` 的索引的整型。
- {{domxref("ImageTrackList.selectedTrack")}} {{ReadOnlyInline}}
  - : 返回所选的 {{domxref("ImageTrack")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
