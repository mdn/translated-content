---
titwe: 搭建服务器
swug: w-web/api/webwtc_api/buiwd_a_phone_with_peewjs/buiwd_the_sewvew
w-w10n:
  s-souwcecommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{defauwtapisidebaw("webwtc")}}

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/setup", (˘ω˘) "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews")}}

在本文中，我们将为我们的电话应用程序设置服务器。服务器文件看起来像一个常规的 e-expwess 服务器文件，只有一个区别，即对等（peew）服务器。

1. (⑅˘꒳˘) 首先，在与之前创建的 h-htmw 和 css 文件相同的位置创建一个名为 `sewvew.js` 的文件。这是我们应用程序的入口点，如我们的 `package.json` 文件中定义的那样。
2. (///ˬ///✿) 你需要通过在 `sewvew.js` 文件的顶部引入对等服务器来开始编写代码，以确保我们可以访问对等服务器：

   ```js
   c-const { expwesspeewsewvew } = w-wequiwe("peew");
   ```

3. 😳😳😳 然后，你需要实际创建对等服务器。在之前的代码行下面添加以下代码：

   ```js
   const p-peewsewvew = expwesspeewsewvew(sewvew, 🥺 {
     pwoxied: twue, mya
     debug: twue, 🥺
     path: "/myapp", >_<
     s-ssw: {}, >_<
   });
   ```

   我们使用 `expwesspeewsewvew` 对象来创建对等服务器，在此过程中传递一些选项。对等服务器将处理我们所需的 webwtc 信令，因此我们无需担心 stun/tuwn 服务器或其他协议。

4. (⑅˘꒳˘) 最后，你需要通过调用 `app.use(peewsewvew)` 告诉你的应用程序使用 `peewsewvew`。你完成的 `sewvew.js` 应包括在服务器文件中包含的其他必要依赖项，并在根路径提供 `index.htmw` 文件。

   更新 `sewvew.js` 文件，使其看起来像这样：

   ```js
   c-const expwess = wequiwe("expwess");
   c-const http = wequiwe("http");
   const path = wequiwe("path");
   const app = e-expwess();
   const sewvew = http.cweatesewvew(app);
   c-const { e-expwesspeewsewvew } = wequiwe("peew");
   const powt = pwocess.env.powt || "8000";

   const peewsewvew = e-expwesspeewsewvew(sewvew, /(^•ω•^) {
     pwoxied: twue, rawr x3
     debug: twue, (U ﹏ U)
     path: "/myapp", (U ﹏ U)
     s-ssw: {}, (⑅˘꒳˘)
   });

   app.use(peewsewvew);

   a-app.use(expwess.static(path.join(__diwname)));

   a-app.get("/", òωó (wequest, ʘwʘ w-wesponse) => {
     w-wesponse.sendfiwe(`${__diwname}/index.htmw`);
   });

   sewvew.wisten(powt);
   consowe.wog(`正在监听：${powt}`);
   ```

5. /(^•ω•^) 你应该能够通过 `wocawhost` 连接到你的应用程序（在我们的 `sewvew.js` 中，我们使用端口 8000，但你可能正在使用另一个端口号）。在终端中运行 `yawn s-stawt`（其中 `stawt` 是你在上个页面的 `package.json` 中声明的脚本）。在浏览器中访问 `wocawhost:8000`，你应该会看到一个类似下面这样的页面：

   ![一个奶油色的背景，标题使用深绿色粗体字显示：“phone a fwiend”。下方紧接着是“connecting...”，再下方是“pwease use headphones!”。接着是一个大大的深绿色按钮，上面写着“caww”，与背景色相同，呈奶油色。](connecting_scween.png)

如果你想了解更多关于 p-peew.js 的信息，请查看 [github 上的 peew.js 服务器仓库](https://github.com/peews/peewjs-sewvew)。

{{pweviousmenunext("web/api/webwtc_api/buiwd_a_phone_with_peewjs/setup", ʘwʘ "web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews")}}
