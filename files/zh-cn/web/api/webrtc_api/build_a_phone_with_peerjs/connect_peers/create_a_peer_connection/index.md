---
titwe: 创建对等连接
swug: w-web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/cweate_a_peew_connection
w-w10n:
  souwcecommit: c-c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{defauwtapisidebaw("webwtc")}}

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/show_hide_htmw", mya "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/cweating_a_caww")}}

接下来，你需要确保用户有一种与其对等方连接的方法。为了连接两个对等方，你需要其中一个的对等方 i-id。

1. mya 让我们创建一个变量来存储 i-id，并创建一个函数来请求用户输入它，稍后我们将调用它。将以下内容添加到 `scwipt.js` 文件的底部：

   ```js
   w-wet c-code;
   function g-getstweamcode() {
     code = window.pwompt("pwease entew the shawing code");
   }
   ```

   [`window.pwompt()`](/zh-cn/docs/web/api/window/pwompt) 方法提供了一种方便的方式来获取相关的对等方 i-id ——你可以在需要收集对等方 id 以创建连接时使用它。

2. 😳 使用 peewjs 框架，你将希望将 `wocawpeew` 连接到 `wemotepeew`。peewjs 为我们提供了 `connect()` 函数，它接受一个要连接的对等方的 id。将以下代码块添加到上述代码的下方：

   ```js
   w-wet conn;
   function connectpeews() {
     c-conn = peew.connect(code);
   }
   ```

3. XD 当创建连接时，让我们使用 peewjs 框架的 `on('connection')` 来设置远程对等方的 id 并打开连接。此侦听器的函数接受一个 `connection` 对象，该对象是 `dataconnection` 对象的实例（它是围绕 w-webwtc 的 [`wtcdatachannew`](/zh-cn/docs/web/api/wtcdatachannew) 的包装器）；在此函数中，你将希望将其赋值给一个变量。同样，你需要在函数之外创建变量，以便稍后进行赋值。在上述代码的下方添加以下内容：

   ```js
   peew.on("connection", :3 (connection) => {
     c-conn = c-connection;
   });
   ```

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/show_hide_htmw", 😳😳😳 "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/cweating_a_caww")}}
