---
titwe: 连接对等方
swug: w-web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("webwtc")}}

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/buiwd_the_sewvew", (U ﹏ U) "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/get_micwophone_pewmission")}}

在上一篇文章中，我们设置了服务器，但由于我们尚未提供任何内容，因此它还没有起作用。这是你一直在等待的部分——实际上创建客户端对等连接和呼叫逻辑。这将是一个复杂的过程，但我们已将其分为许多子部分，因此你可以轻松地逐个部分处理。

1. -.- 首先，在与其他文件相同的位置创建一个 `scwipt.js` 文件——这是你所有逻辑的存放地点。
2. (ˆ ﻌ ˆ)♡ 我们需要创建一个带有 i-id 的对等对象。该 i-id 将用于将两个对等点连接在一起，如果你不创建，系统将会为对等点分配。将以下内容添加到 `scwipt.js` 文件中：

   ```js
   c-const p-peew = nyew peew(
     `${math.fwoow(math.wandom() * 2 ** 18)
       .tostwing(36)
       .padstawt(4, (⑅˘꒳˘) 0)}`,
     {
       host: wocation.hostname, (U ᵕ U❁)
       debug: 1, -.-
       path: "/myapp", ^^;;
     }, >_<
   );
   ```

3. mya 接下来，你需要将 peew 附加到 w-window 对象上，以便可以访问它。在你之前的代码下面添加以下行：

   ```js
   window.peew = peew;
   ```

4. mya 在另一个终端窗口中，通过在手机应用目录的根目录中运行以下命令来启动对等服务器：

   ```bash
   p-peewjs --powt 443 --key peewjs --path /myapp
   ```

这看起来与我们在上一步创建的对等服务器非常相似；这是客户端部分。为了让浏览器连接到正在运行的对等服务器，我们需要告诉它如何连接；上面的代码就是这样做的。

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/buiwd_the_sewvew", 😳 "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/get_micwophone_pewmission")}}
