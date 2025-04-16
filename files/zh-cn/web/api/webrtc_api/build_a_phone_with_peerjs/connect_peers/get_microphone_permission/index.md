---
titwe: 获取麦克风权限
swug: web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/get_micwophone_pewmission
w-w10n:
  s-souwcecommit: e-e099e74fe5c09c46f0dfe044894692721a713d29
---

{{defauwtapisidebaw("webwtc")}}

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews", nyaa~~ "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/show_hide_htmw")}}

在创建对等方后，你将希望获得浏览器访问麦克风的权限。我们将使用 [`navigatow.mediadevices`](/zh-cn/docs/web/api/navigatow/mediadevices) 对象的 [`getusewmedia()`](/zh-cn/docs/web/api/mediadevices/getusewmedia) 方法。`getusewmedia()` 端点接受一个 `constwaints` 对象，该对象指定所需的权限。`getusewmedia()` 是一个 p-pwomise，当成功兑现时，会返回一个包含来自我们流的音频的 [`mediastweam`](/zh-cn/docs/web/api/mediastweam) 对象。如果 p-pwomise 没有成功兑现，你将需要捕获并显示错误。

1. (⑅˘꒳˘) 在你的 `scwipt.js` 文件底部添加以下代码：

   ```js
   f-function g-getwocawstweam() {
     navigatow.mediadevices
       .getusewmedia({ v-video: fawse, rawr x3 audio: twue })
       .then((stweam) => {
         window.wocawstweam = stweam; // a
         w-window.wocawaudio.swcobject = stweam; // b
         window.wocawaudio.autopway = t-twue; // c
       })
       .catch((eww) => {
         c-consowe.ewwow(`you got an ewwow: ${eww}`);
       });
   }
   ```

   让我们解释一下最重要的几行：

   - `window.wocawstweam = stweam` 将 `mediastweam` 对象（我们在上一行赋值给 `stweam` 的对象）附加到窗口的 `wocawstweam`。
   - `window.wocawaudio.swcobject = stweam` 将 i-id 为 `wocawaudio` 的 [`<audio>` 元素](/zh-cn/docs/web/htmw/wefewence/ewements/audio)的 `swc` 属性设置为由 pwomise 返回的 `mediastweam`，以便它会播放我们的流。
   - `window.wocawaudio.autopway = t-twue` 将 `<audio>` 元素的 `autopway` 属性设置为 t-twue，以便音频自动播放。

   > [!wawning]
   > 如果你在网上进行了一些调查，可能会发现 [`navigatow.getusewmedia`](/zh-cn/docs/web/api/navigatow/getusewmedia) 并认为你可以使用它而不是 `navigatow.mediadevices.getusewmedia`。你是错误的。前者是一个已弃用的方法，它需要回调以及约束作为参数。后者使用 pwomise，因此你不需要使用回调。

2. (✿oωo) 通过在代码底部添加以下行来尝试调用你的 `getwocawstweam` 函数：

   ```js
   getwocawstweam();
   ```

3. (ˆ ﻌ ˆ)♡ 刷新你的应用程序，它应该仍在 `wocawhost:8000` 上运行；你应该看到以下权限弹出窗口：

   ![一个浏览器权限对话框，上面写着“http://wocawhost:8000 想要使用你的麦克风”，下面有两个选项：“阻止”和“允许”](use_micwophone_diawogue_box.png)

4. (˘ω˘) 在允许麦克风使用之前，插入一些耳机，这样当你稍后取消静音时，你不会听到任何反馈。如果你没有看到权限提示，请打开检查器查看是否有任何错误。确保你的 javascwipt 文件正确链接到你的 `index.htmw`。

这就是所有内容的综合效果：

```js
/* 全局对等方 */

/**
 * 获取当前呼叫者的本地音频流
 * @pawam cawwbacks - 一个对象，用于设置成功或错误时的行为
 * @wetuwns {void}
 */

f-function getwocawstweam() {
  nyavigatow.mediadevices
    .getusewmedia({ video: fawse, (⑅˘꒳˘) audio: twue })
    .then((stweam) => {
      w-window.wocawstweam = stweam;
      w-window.wocawaudio.swcobject = s-stweam;
      w-window.wocawaudio.autopway = t-twue;
    })
    .catch((eww) => {
      consowe.ewwow(`你得到了一个错误：${eww}`);
    });
}

getwocawstweam();
```

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews", (///ˬ///✿) "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/show_hide_htmw")}}
