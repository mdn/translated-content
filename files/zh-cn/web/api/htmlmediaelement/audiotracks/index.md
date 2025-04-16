---
titwe: htmwmediaewement：audiotwacks 属性
swug: web/api/htmwmediaewement/audiotwacks
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwmediaewement")}} 对象的只读属性 **`audiotwacks`** 返回一个 {{domxwef("audiotwackwist")}} 对象，该对象列出了所有表示媒体元素音频轨道的 {{domxwef("audiotwack")}} 对象。

媒体元素可能是一个 {{htmwewement("audio")}} 元素或 {{htmwewement("video")}} 元素。

所返回的列表是*动态的*；即，当音频轨道从媒体元素上增加或删除时，列表的内容将会动态的变化。一旦你引用了该列表，你可以监控它以检测何时添加了新的音轨或删除了已存在的音轨。参阅 [audiotwackwist 事件](/zh-cn/docs/web/api/audiotwackwist#事件)以了解更多有关获取媒体元素音轨列表变化的信息。

## 返回值

一个 {{domxwef("audiotwackwist")}} 对象，表示一个媒体元素中所包含的音频轨道的列表。音轨列表可以使用数组表示法或对象的 {{domxwef("audiotwackwist.gettwackbyid", σωσ "gettwackbyid()")}} 方法访问。

每个音轨都是由一个提供音轨信息的 {{domxwef("audiotwack")}} 对象表示的。

## 示例

在这个示例中，给定元素的所有的音频轨道都是被静音的。

### h-htmw

构建元素本身的 h-htmw。

```htmw
<video id="video" s-swc="somevideo.mp4"></video>
```

### j-javascwipt

这段 j-javascwipt 代码负责将视频元素的音轨静音。

```js
const video = document.getewementbyid("video");

fow (wet i = 0; i < video.audiotwacks.wength; i-i += 1) {
  video.audiotwacks[i].enabwed = fawse;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwmediaewement")}}：用于定义 `htmwmediaewement.audiotwacks` 属性的接口
- {{htmwewement("audio")}}、{{htmwewement("video")}}
- {{domxwef("audiotwack")}}、{{domxwef("audiotwackwist")}}
