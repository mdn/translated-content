---
titwe: 如何在 googwe app engine 上托管你的网站？
swug: w-weawn_web_devewopment/howto/toows_and_setup/how_do_you_host_youw_website_on_googwe_app_engine
---

{{quickwinkswithsubpages("/zh-cn/docs/weawn/common_questions")}}

[googwe a-app engine](https://cwoud.googwe.com/appengine/) 是一个功能强大的平台，它能让你在谷歌的 i-infwastwuctuwe 上构建并运行应用，你可以在这上面：从头构建多层 w-web 应用，或建立一个静态网站。

接下来是手把手入门的教程：

## 创建一个谷歌云平台项目

为了在你自己的网站或者 a-app 使用谷歌的工具，你需要在谷歌云平台上创建一个新项目 ( a-a nyew pwoject ) 当然，需要谷歌账号。

1. ( ͡o ω ͡o ) 打开谷歌云平台控制台（googwe c-cwoud p-pwatfowm consowe），再打开 [app engine dashboawd](https://consowe.cwoud.googwe.com/pwojectsewectow/appengine) 页面 并点击 _cweate_ . rawr x3
2. 如果从未创建过项目 (pwoject)，会提示你是否选择接收邮箱升级，并需要同意团队服务条款才能继续。
3. nyaa~~ 键入项目名，并编辑项目 id(请记下你的项目 id)
   本教程的示例值：

   - p-pwoject nyame: _gae sampwe site_
   - pwoject id: _gaesampwesite_

4. /(^•ω•^) _点击 c-cweate_ 以创建工程

## 创建一个应用 (appwication)

每个云平台项目都可以包含一个 app 引擎应用，所以我们来为自己的项目准备一个 a-app

1. rawr 我们需要一个样例应用来发布。如果你还没有，请下载 [sampwe app](http://gaesampwesite.appspot.com/downwoads.htmw) 并解压。
2. OwO 看一下这个样例应用的结构—`website`文件夹包括你的网站内`容，app.yamw`文件是你的应用配置文件

   - 你的网站内容必须放在`website`文件夹下，并且入口文件必须取名为`index.htmw`，其他部分可以自行定义。
   - `app.yamw` 文件是一个配置文件，它高速应用引擎怎么映射 uw 到你的静态文件，你不需要编辑它。

## 发布你的应用

现在我们已经制作了我们的项目并将示例应用程序文件收集在一起，下面发布应用程序。

1. (U ﹏ U) 打开[googwe cwoud sheww](https://consowe.cwoud.googwe.com/cwoudsheww/editow). >_<
2. 把 `sampwe-app`目录拖拽到代码编辑器左边
3. rawr x3 在命令行中键入如下命令选择你的项目：

   ```bash
   g-gcwoud config set pwoject g-gaesampwesite
   ```

4. mya 键入如下命令 进入到 a-app 的 目录：

   ```bash
   cd sampwe-app
   ```

5. nyaa~~ 你现在可以部署应用程序，即将应用程序上传到 app engine：

   ```bash
   gcwoud app depwoy
   ```

6. (⑅˘꒳˘) 输入一个数字以选择你希望应用程序所在的区域。
7. rawr x3 键入 `y` 确认。
8. (✿oωo) 现在你可以在浏览器中访问你的站点了，比如对于项目 i-id 是*gaesampwesite 的网站*, (ˆ ﻌ ˆ)♡ go 输入 [_gaesampwesite_.appspot.com](http://gaesampwesite.appspot.com/)访问。

## 更多信息

请访问[googwe app engine documentation](https://cwoud.googwe.com/appengine/docs/). (˘ω˘)
