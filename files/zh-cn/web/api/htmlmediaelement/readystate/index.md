---
title: HTMLMediaElement.readyState
slug: Web/API/HTMLMediaElement/readyState
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.readyState`** 属性返回音频/视频的当前就绪状态。

## 语法

```plain
var readyState = audioOrVideo.readyState;
```

### 返回值

无符号整型 An `unsigned short`.

| Constant          | Value | Description                                                      |
| ----------------- | ----- | ---------------------------------------------------------------- |
| HAVE_NOTHING      | 0     | 没有关于音频/视频是否就绪的信息                                  |
| HAVE_METADATA     | 1     | 音频/视频已初始化                                                |
| HAVE_CURRENT_DATA | 2     | 数据已经可以播放 (当前位置已经加载) 但没有数据能播放下一帧的内容 |
| HAVE_FUTURE_DATA  | 3     | 当前及至少下一帧的数据是可用的 (换句话来说至少有两帧的数据)      |
| HAVE_ENOUGH_DATA  | 4     | 可用数据足以开始播放 - 如果网速得到保障 那么视频可以一直播放到底 |

## 实例

这个例子会监听 id 为 example 的 audio 的数据。他会检查当前位置是否可以播放，会的话执行播放。

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
var obj = document.getElementById("example");

obj.addEventListener("loadeddata", function () {
  if (obj.readyState >= 2) {
    obj.play();
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 你或许还可以看看

- The interface defining it, {{domxref("HTMLMediaElement")}}.
