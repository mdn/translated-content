---
title: 如何在 Google App Engine 上托管你的网站？
slug: Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
---

[Google App Engine](https://cloud.google.com/appengine/) 是一个功能强大的平台，它能让你在谷歌的 infrastructure 上构建并运行应用，你可以在这上面：从头构建多层 WEB 应用，或建立一个静态网站。

接下来是手把手入门的教程：

## 创建一个谷歌云平台项目

为了在你自己的网站或者 app 使用谷歌的工具，你需要在谷歌云平台上创建一个新项目 ( a new project ) 当然，需要谷歌账号。

1. 打开谷歌云平台控制台（Google Cloud Platform Console），再打开 [App Engine dashboard](https://console.cloud.google.com/projectselector/appengine) 页面 并点击 _Create_ .
2. 如果从未创建过项目 (project)，会提示你是否选择接收邮箱升级，并需要同意团队服务条款才能继续。
3. 键入项目名，并编辑项目 ID(请记下你的项目 ID)
   本教程的示例值：

   - Project Name: _GAE Sample Site_
   - Project ID: _gaesamplesite_

4. _点击 Create_ 以创建工程

## 创建一个应用 (application)

每个云平台项目都可以包含一个 APP 引擎应用，所以我们来为自己的项目准备一个 app

1. 我们需要一个样例应用来发布。如果你还没有，请下载 [sample app](http://gaesamplesite.appspot.com/downloads.html) 并解压。
2. 看一下这个样例应用的结构—`website`文件夹包括你的网站内`容，app.yaml`文件是你的应用配置文件

   - 你的网站内容必须放在`website`文件夹下，并且入口文件必须取名为`index.html`，其他部分可以自行定义。
   - `app.yaml` 文件是一个配置文件，它高速应用引擎怎么映射 UR 到你的静态文件，你不需要编辑它。

## 发布你的应用

现在我们已经制作了我们的项目并将示例应用程序文件收集在一起，下面发布应用程序。

1. 打开[Google Cloud Shell](https://console.cloud.google.com/cloudshell/editor).
2. 把 `sample-app`目录拖拽到代码编辑器左边
3. 在命令行中键入如下命令选择你的项目：

   ```bash
   gcloud config set project gaesamplesite
   ```

4. 键入如下命令 进入到 app 的 目录：

   ```bash
   cd sample-app
   ```

5. 你现在可以部署应用程序，即将应用程序上传到 App Engine：

   ```bash
   gcloud app deploy
   ```

6. 输入一个数字以选择你希望应用程序所在的区域。.
7. 键入 `Y` 确认。
8. 现在你可以在浏览器中访问你的站点了，比如对于项目 ID 是*gaesamplesite 的网站*, go 输入 [_gaesamplesite_.appspot.com](http://gaesamplesite.appspot.com/)访问。

## 更多信息

请访问[Google App Engine Documentation](https://cloud.google.com/appengine/docs/).
