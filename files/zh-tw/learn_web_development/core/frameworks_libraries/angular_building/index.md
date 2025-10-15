---
title: 建構 Angular 應用程式與更多資源
slug: Learn_web_development/Core/Frameworks_libraries/Angular_building
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

這篇最後的 Angular 文章涵蓋了如何建構一個準備好用於生產環境的應用程式，並提供更多資源讓你繼續學習之旅。

<table>
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>
        熟悉核心的 <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-TW/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和 <a href="/zh-TW/docs/Learn_web_development/Core/Scripting">JavaScript</a> 語言，並了解<a
          href="/zh-TW/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >終端機／命令列</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>學習如何建構你的 Angular 應用程式。</td>
    </tr>
  </tbody>
</table>

## 建構你完成的應用程式

現在你已經完成了應用程式的開發，可以執行 Angular CLI 的 `build` 指令。當你在 `todo` 目錄中執行 `build` 指令時，你的應用程式會被編譯到一個名為 `dist/` 的輸出目錄中。

在 `todo` 目錄中，於命令列執行以下指令：

```bash
ng build -c production
```

CLI 會編譯應用程式，並將輸出放置在一個新的 `dist` 目錄中。使用 `ng build` 搭配 `--configuration production`／`-c production` 旗標可以移除生產環境中不需要的東西。

## 部署你的應用程式

要部署你的應用程式，你可以將 `dist/my-project-name` 資料夾的內容複製到你的 Web 伺服器。因為這些檔案是靜態的，所以你可以將它們託管在任何能夠提供檔案服務的 Web 伺服器上，例如：

- Node.js
- Java
- .NET

你可以使用任何後端，例如 [Firebase](https://firebase.google.com/docs/hosting)、[Google Cloud](https://cloud.google.com/solutions/web-hosting) 或 [App Engine](https://cloud.google.com/appengine/docs/standard/hosting-a-static-website)。

### 在本機託管

為了好玩，你可以在建構後執行以下指令，使用 [`http-server`](https://www.npmjs.com/package/http-server) 套件在本機託管建構好的應用程式：

```bash
npx http-server ./dist/todo/browser/ -o
```

此指令會在 `8080` 連接埠上提供 `dist/todo/browser` 目錄的服務，所以你可以在瀏覽器中開啟 `http://127.0.0.1:8080` 來查看運作中的應用程式。HTTP 伺服器也允許你從本機網路上的任何其他裝置，透過你電腦的 IP 位址存取該應用程式，這個位址會列在主控台的 `127.0.0.1` 位址下方。

## 接下來呢

至此，你已經建構了一個基本的應用程式，但你的 Angular 之旅才剛開始。你可以透過探索 Angular 文件來學習更多，例如：

- [教學](https://angular.dev/tutorials)：深入的教學，重點介紹 Angular 的功能，例如使用服務、導覽以及從伺服器取得資料。
- Angular [組件](https://angular.dev/guide/components)指南：一系列文章，涵蓋生命週期、組件互動和視圖封裝等主題。
- [表單](https://angular.dev/guide/forms)指南：引導你如何在 Angular 中建構響應式表單、驗證輸入以及建構動態表單的文章。

## 總結

以上。我們希望你享受使用 Angular 的樂趣！

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
