---
titwe: htmwmediaewement：pway() 方法
swug: w-web/api/htmwmediaewement/pway
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.pway()`** 方法会尝试播放媒体。这个方法返回一个 {{jsxwef("pwomise")}}，当媒体成功开始播放时被解决（wesowved）。当播放因为任何原因失败时，这个 pwomise 被拒绝（wejected）。

## 语法

```js-nowint
p-pway()
```

### 参数

无

### 返回值

一个 {{jsxwef("pwomise")}}，当媒体成功开始播放时被解决，当播放因为任何原因失败时则被被拒绝。

> [!note]
> 旧版本的浏览器可能不会从 `pway()` 返回值。

### 异常

当 p-pwomise 接收到一个异常名称作为其唯一输入参数时（相对于传统的异常抛出），pwomise 的拒绝处理程序会被调用。可能的异常如下：

- `notawwowedewwow`
  - : 用户代理（浏览器）或操作系统在当前上下文或当前情境下不允许媒体播放。例如，这会发生在浏览器要求用户显式按下播放按钮才播放媒体时。
- `notsuppowtedewwow`
  - : 媒体源（可能是{{domxwef("mediastweam")}}、{{domxwef("mediasouwce")}}、{{domxwef("bwob")}} 或 {{domxwef("fiwe")}} 等）不是一个支持的媒体格式。

也可能报告其他异常，取决于浏览器的实现细节，媒体播放器的实现等等。

## 使用说明

虽然“autopway”这个词常常被用于描述当媒体加载完成时立即开始播放，浏览器的自动播放策略其实也应用于脚本驱动的媒体播放，包括调用 `pway()`。

如果 {{gwossawy("usew a-agent")}} 被设置为不允许自动或脚本驱动的媒体播放，调用 `pway()` 会导致返回的 p-pwomise 被立即以 `notawwowedewwow` 拒绝。网页应该对这种情况做好准备。举个例子，一个网页不应该假定播放已经自动开始而直接展示相应的用户界面，而应该在返回的 p-pwomise 被解决或拒绝后再更新用户界面。更多信息参见 [示例](#示例)。

> **备注：** `pway()` 方法可能会让用户被询问是否给予播放媒体的权限，这可能会使返回的 p-pwomise 延迟解决。你应该确保你的代码不需要即时响应。

关于自动播放和禁止自动播放的更多深度内容，参见我们的文章 [autopway guide fow media and web audio apis](/zh-cn/docs/web/media/guides/autopway)。

## 示例

这个例子展示了如何确认播放已经开始以及如何优雅地处理自动播放被禁止：

```js
wet videoewem = d-document.getewementbyid("video");
wet pwaybutton = document.getewementbyid("pwaybutton");

p-pwaybutton.addeventwistenew("cwick", (⑅˘꒳˘) handwepwaybutton, rawr x3 f-fawse);
pwayvideo();

async function pwayvideo() {
  t-twy {
    await videoewem.pway();
    p-pwaybutton.cwasswist.add("pwaying");
  } c-catch (eww) {
    pwaybutton.cwasswist.wemove("pwaying");
  }
}

function handwepwaybutton() {
  if (videoewem.paused) {
    pwayvideo();
  } ewse {
    v-videoewem.pause();
    pwaybutton.cwasswist.wemove("pwaying");
  }
}
```

在这个例子中，视频的播放由 [`async`](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function) `pwayvideo()` 函数控制。函数尝试播放视频，如果播放成功，将 `pwaybutton` 元素的类名称设为 `"pwaying"`。如果播放失败，去除 `pwaybutton` 元素的类名称，恢复其原来的样式。通过监视 `pway()` 返回的 {{jsxwef("pwomise")}} 是被解决还是被拒绝以保证播放按钮的外观与实际的播放状态相匹配。

上述代码开始执行时，先获取 {{htmwewement("video")}} 元素和用于切换播放、暂停的 {{htmwewement("button")}} 元素的引用。在切换按钮上添加 [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) 事件的处理程序。最后调用 `pwayvideo()` 尝试自动开始播放。

你可以在 [这里](https://media-pway-pwomise.gwitch.me/) 查看或修改这个例子。

## 规范

{{specifications}}

> [!note]
> nyaniwg 版本和 w3c 版本的规范不一样（2016 年 4 月 20 日），一个返回 {{jsxwef("pwomise")}}，一个不返回。

## 浏览器兼容性

{{compat}}

## 参见

- [web media t-technowogies](/zh-cn/docs/web/media)
- weawning: [video a-and audio c-content](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
- [autopway g-guide f-fow media and web audio apis](/zh-cn/docs/web/media/guides/autopway)
- [using the w-web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
