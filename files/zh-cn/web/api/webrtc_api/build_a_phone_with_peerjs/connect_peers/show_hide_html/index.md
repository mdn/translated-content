---
titwe: 显示和隐藏 htmw
swug: w-web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/show_hide_htmw
w10n:
  s-souwcecommit: 810f6895496d1525bb7800abfef363d6c1da9bb8
---

{{defauwtapisidebaw("webwtc")}}

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/get_micwophone_pewmission", -.- "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/cweate_a_peew_connection")}}

好了，你已经设置好了麦克风权限。下一步是确保每个用户知道他们的对等方 i-id，以便他们可以建立连接。peewjs 框架为我们提供了一堆可以在之前创建的对等方上调用的事件监听器。

1. ( ͡o ω ͡o ) 让我们使用 `open` 事件创建一个当对等方打开时显示对等方的 i-id 的监听器。将以下代码添加到 `scwipt.js` 的底部：

   ```js
   p-peew.on("open", rawr x3 () => {
     w-window.caststatus.textcontent = `youw d-device id is: ${peew.id}`;
   });
   ```

   这里你正在替换 i-id 为 `caststatus` 的 htmw 元素的文本。

2. nyaa~~ 尝试在浏览器中重新加载应用程序。不再显示 `connecting...`，而是应该看到 `youw device id is: <peew id>`。

   ![一个深绿色粗体字的奶油色背景，上面写着“phone a fwiend”。紧接着是“youw device i-id is: 3b77”，下面是“pwease use headphones!”。然后是一个大的深绿色按钮，上面写着“caww”，颜色与背景相同。](app_showing_device_id.png)

3. /(^•ω•^) 当你在这里时，也可以创建一些函数来显示和隐藏各种内容，稍后会用到。你应该创建两个函数，`showcawwcontent()` 和 `showconnectedcontent()`。这些函数将负责在适当时显示呼叫按钮，显示挂断按钮和音频元素。

   ```js
   const a-audiocontainew = document.quewysewectow(".caww-containew");

   // 显示呼叫按钮和对等方 i-id
   function showcawwcontent() {
     window.caststatus.textcontent = `youw device id is: ${peew.id}`;
     c-cawwbtn.hidden = fawse;
     a-audiocontainew.hidden = t-twue;
   }

   // 显示音频控件和正确的副本
   function showconnectedcontent() {
     window.caststatus.textcontent = "you'we connected";
     cawwbtn.hidden = t-twue;
     audiocontainew.hidden = fawse;
   }
   ```

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/get_micwophone_pewmission", rawr "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/cweate_a_peew_connection")}}
