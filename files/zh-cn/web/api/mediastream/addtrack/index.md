---
title: MediaStream.addTrack()
slug: Web/API/MediaStream/addTrack
---

{{APIRef("Media Capture and Streams")}}

**`MediaStream.addTrack()`** 方法会给流添加一个新轨道。指定一个{{domxref("MediaStreamTrack")}}对象作为参数。

> [!NOTE]
> 如果指定的 track 已经存在于流的 track set 里的话，该方法不会产生作用。

## 语法

```js
stream.addTrack(track);
```

### Parameters

- `track`
  - : A {{domxref("MediaStreamTrack")}} to add to the stream.

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream")}}, the interface it belongs to.
