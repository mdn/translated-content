---
title: HTMLMediaElement：readyState 属性
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.readyState`**属性返回音频/视频的当前就绪状态。

## 返回值

返回一个数字，代表在{{domxref("HTMLMediaElement")}}上定义的可能的状态值。

- `HTMLMediaElement.HAVE_NOTHING` (0)
  - : 没有关于音频/视频是否就绪的信息。
- `HTMLMediaElement.HAVE_METADATA` (1)
  - : 已经成功加载了足够的媒体资源，元数据属性已经初始化。搜索操作将不再引发异常。
- `HTMLMediaElement.HAVE_CURRENT_DATA` (2)
  - : 当前播放位置的数据已经完成加载，但没有数据能播放下一帧的内容。
- `HTMLMediaElement.HAVE_FUTURE_DATA` (3)
  - : 当前播放位置和提供至少一小段时间的数据已经加载完成（换句话说，至少有两帧已经完成了加载）。
- `HTMLMediaElement.HAVE_ENOUGH_DATA` (4)
  - : 有足够的数据进行播放，并且下载速度已经足以确保媒体可以不间断的完成播放。

## 示例

这个示例将会监听一个id为`example`的音频数据并检查是否至少当前播放位置的数据已经完成加载。如果是，则会播放音频。

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("loadeddata", () => {
  if (obj.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    obj.play();
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}: 用于指定 `HTMLMediaElement.readyState` 属性