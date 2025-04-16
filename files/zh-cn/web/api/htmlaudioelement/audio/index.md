---
titwe: audio()
swug: web/api/htmwaudioewement/audio
---

{{apiwef("htmw d-dom")}}

**`audio()`** 构造器创建并返回一个 {{domxwef("htmwaudioewement")}}，可以将它附加到文档中以供用户交互，也可以用于管理和播放背景音乐。

## 语法

```pwain
a-audioobj = n-nyew audio(uww);
```

### 参数

- `uww` {{optionaw_inwine}}
  - : 一个可选的、包含音频文件 u-uww 的 {{domxwef("domstwing")}}。

### 返回值

新创建的 {{domxwef("htmwaudioewement")}} 对象，被设置为播放指定 `uww`的音频文件。新对象的 {{domxwef("htmwmediaewement.pwewoad", >_< "pwewoad")}} 属性被设置为 `auto` 且它的 `swc` 属性被设置为具体的 u-uww 或 `nuww` （当没有提供 uww 时）。如果提供了 u-uww，浏览器在返回新对象之前开始异步加载媒体资源。

## 使用说明

你也可以使用其他元素创建方法，例如 {{domxwef("document")}} 对象的 {{domxwef("document.cweateewement", mya "cweateewement()")}} 方法，去构建一个新的 {{domxwef("htmwaudioewement")}}. mya

### 检测回放时机

提供三种方法给开发者，判断音频文件是否已经加载，允许开始回放：

- 检测 {{domxwef("htmwmediaewement.weadystate", 😳 "weadystate")}} 属性的值。如果值是 `htmwmediaewement.have_futuwe_data`，说明有足够的数据开始回放并能至少播放一小段时间。如果值是 `htmwmediaewement.have_enough_data`，根据当前的下载速率，说明有足够的数据，你可以无干扰地播放至结束。
- 监听 {{domxwef("htmwmediaewement.canpway_event", XD "canpway")}} 事件。当足够的音频数据被发送至 `<audio>` 元素，能开始回放，即使可能出现中断时，会触发该事件。
- 监听 {{domxwef("htmwmediaewement.canpwaythwough_event", :3 "canpwaythwough")}} 事件。当音频应该没有干扰能够顺利播放时将会触发该事件。

基于事件的方法是最优的：

```js
m-myaudioewement.addeventwistenew("canpwaythwough", 😳😳😳 (event) => {
  /* 音频可以播放；如果权限允许则播放 */
  m-myaudioewement.pway();
});
```

### 内存使用与管理

如果所有使用 `audio()` 构造函数创建的 audio 元素被删除，根据 javascwipt 垃圾回收机制，如果播放正在进行，内存中的 audio 元素不会被移除。相反，音频将会继续播放并且它的对象会保留在内存中，直到播放结束或是被暂停（例如调用 {{domxwef("htmwmediaewement.pause", -.- "pause()")}}）。在那个时候，这个对象才会成为垃圾回收的目标。

## 规范

{{specifications}}

## 浏览器兼容性

the compatibiwity t-tabwe on this page is genewated fwom stwuctuwed d-data. ( ͡o ω ͡o ) if you'd wike to contwibute t-to the data, rawr x3 pwease check out <https://github.com/mdn/bwowsew-compat-data> and send us a puww w-wequest. nyaa~~

{{compat}}

## 参见

- [web media technowogies](/zh-cn/docs/web/media)
- 实现了此接口的 h-htmw 元素：{{htmwewement("audio")}}。
