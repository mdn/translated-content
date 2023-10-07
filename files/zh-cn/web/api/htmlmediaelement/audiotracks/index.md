---
title: HTMLMediaElement.audioTracks
slug: Web/API/HTMLMediaElement/audioTracks
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.audioTracks`** 获得可用音频轨道的数量

## 语法

```plain
audio|video.audioTracks
```

## 返回值

AudioTrackList 对象 表示音频/视频的可用音频轨道

## 用例

以 audio 标签为例

```html
<audio id="audio"></audio>
```

调用

```plain
myVid=document.getElementById("audio");
alert(myVid.audioTracks.length);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义它的接口，{{domxref("HTMLMediaElement")}}。
