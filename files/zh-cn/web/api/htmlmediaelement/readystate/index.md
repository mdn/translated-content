---
title: HTMLMediaElement：readyState 属性
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.readyState`** 属性返回媒体的就绪状态。

## 返回值

一个数字，为 {{domxref("HTMLMediaElement")}} 接口上定义的五个可能的状态常量之一：

- `HTMLMediaElement.HAVE_NOTHING`（0）
  - : 没有可用的关于媒体资源的信息。
- `HTMLMediaElement.HAVE_METADATA`（1）
  - : 已检索到足够的媒体资源，元数据属性已经初始化。查询操作将不再引发异常。
- `HTMLMediaElement.HAVE_CURRENT_DATA`（2）
  - : 当前播放位置的数据已经可用，但不足以实际播放多个帧。
- `HTMLMediaElement.HAVE_FUTURE_DATA`（3）
  - : 当前播放位置和提供至少一小段时间的数据已经可用（换句话说，至少有两个视频帧）。
- `HTMLMediaElement.HAVE_ENOUGH_DATA`（4）
  - : 有足够的数据可用，并且下载速度足够高，因此媒体可以不间断地播放到最后。

## 示例

这个示例将会监听一个 id 为 `example` 的音频数据的加载。它会检查当前播放位置是否已加载。如果是，则会播放音频。

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

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.readyState` 属性的接口
