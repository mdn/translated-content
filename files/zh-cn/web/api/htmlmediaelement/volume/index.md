---
title: HTMLMediaElement.volume
slug: Web/API/HTMLMediaElement/volume
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.volume`** 属性可设置媒体播放时的音量。

## 语法

```plain
var volume = video.volume; //1
```

### 值

取值为 0 到 1 的双精度值。0 为静音，1 为音量最大时的值。

## 示例

```plain
var obj = document.createElement('audio');
console.log(obj.volume); // 1
obj.volume = 0.75;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- 定义该属性的接口 {{domxref("HTMLMediaElement")}}.
- {{domxref("HTMLMediaElement.muted")}}
