---
title: 建構 Angular 應用程式與更多資源
slug: Learn_web_development/Core/Frameworks_libraries/Angular_building
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

這篇文章內容涵蓋，如何建立一個生產版本（production）的應用程式，以及提供後續的學習資源。

<table>
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        熟悉 <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a
          href="/zh-TW/docs/Learn_web_development/Core/Styling_basics"
          >CSS</a
        >
        和
        <a href="/zh-TW/docs/Learn_web_development/Core/Scripting">JavaScript</a> 的主要概念，以及
        <a
          href="/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >終端機／命令列</a
        >
        的知識。
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>學會如何編譯你的 Angular 應用程式</td>
    </tr>
  </tbody>
</table>

## 建置最終版的應用程式

現在你已經完成開發你的應用程式，接著執行 Angular CLI `build` 的指令。
當你在 `todo` 的目錄底下執行 `build` 的指令，應用程式會編譯並且輸出到 `dist/` 的目錄下。

在 `todo` 目錄底下，且在命令列執行以下的命令：

```bash
ng build -c production
```

命令列介面——CLI（Command Line Interface），會將應用程式編譯並且輸出到新的目錄 `dist` 底下。這個 `--configuration production`/`-c production` 尾隨在 `ng build` 的參數，會移除在正式產品版本上不需要的東西。

## 部署你的應用程式

為了部署你的應用程式，你可以複製 `dist/my-project-name` 資料夾底下的內容到你的伺服器上。
因為這些都是靜態檔案，你可以將這些檔案放到任何能夠提供檔案的伺服器上，像是：

- [Node.js](https://nodejs.org)
- [Java](https://www.java.com)
- [.NET](https://dotnet.microsoft.com)

你可以使用任何後端，像是 [Firebase](https://firebase.google.com/docs/hosting)、[Google Cloud](https://cloud.google.com/solutions/web-hosting) 或 [App Engine](https://cloud.google.com/appengine/docs/standard/python/getting-started/hosting-a-static-website)。

## 接著要做什麼

現在你已經建立了基本的應用程式，但是你的 Angular 學習旅程才剛開始，你可以探索 Angular 文件學習更多，像是：

- [英雄之旅](https://angular.io/tutorial)([正體中文版](https://angular.tw/tutorial))：一個深入的 Angular 重點課程，像是使用服務（service）、導覽（navigation）以及從伺服器取得資料。
- Angular [元件](https://angular.io/guide/component-overview) 指南：一系列的文章，主題包括生命週期、元件互動以及檢視封裝。
- [表單](https://angular.io/guide/forms-overview) 指南：文章內容包含建立 Angular 的響應式表單、輸入驗證以及建立動態表單。

## 總結

以上。希望你喜歡 Angular！

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
