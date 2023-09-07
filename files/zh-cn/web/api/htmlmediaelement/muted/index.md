---
title: HTMLMediaElement.muted
slug: Web/API/HTMLMediaElement/muted
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.muted`** 表示媒体元素是否被静音。

## Syntax

```plain
var isMuted = audioOrVideo.muted
audio.muted = true;
```

### Value

A {{domxref("Boolean")}}. `true` 表示被静音， `false` 表示未被静音。

## Example

```js
var obj = document.createElement("video");
console.log(obj.muted); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{domxref("HTMLMediaElement.defaultMuted")}}
- {{domxref("HTMLMediaElement.volume")}}
