---
title: HTMLMediaElement.networkState
slug: Web/API/HTMLMediaElement/networkState
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.networkState`** 属性表示在网络上获取媒体的当前状态。

## 语法

```plain
var networkState = audioOrVideo.networkState;
```

### 取值

一个 `unsigned short`。可能的值包括：

| 常量                | 值  | 描述                                                                    |
| ------------------- | --- | ----------------------------------------------------------------------- |
| `NETWORK_EMPTY`     | 0   | 还没有数据。并且 `readyState` 的值是 `HAVE_NOTHING`。                   |
| `NETWORK_IDLE`      | 1   | HTMLMediaElement 是有效的并且已经选择了一个资源，，但是还没有使用网络。 |
| `NETWORK_LOADING`   | 2   | 浏览器正在下载 HTMLMediaElement 数据。                                  |
| `NETWORK_NO_SOURCE` | 3   | 没有找到 HTMLMediaElement src。                                         |

## 例子

这个例子监听 audio 元素以开始播放，然后检查是否仍然在加载数据。

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
var obj = document.getElementById("example");

obj.addEventListener("playing", function () {
  if (obj.networkState === 2) {
    // Still loading...
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 定义它的接口，{{domxref("HTMLMediaElement")}}.
