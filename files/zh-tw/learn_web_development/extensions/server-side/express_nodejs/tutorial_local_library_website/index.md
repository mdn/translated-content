---
title: Express 教學 1：本地圖書館網站
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

我們實作教程系列的第一篇文章，會說明將學到什麼東西，並提供「本地圖書館」範例網站的概述 。我們將在接下來的文章中一步一步完成這個網站。

<table>
  <tbody>
    <tr>
      <th scope="row">前置條件:</th>
      <td>
        閱讀
        <a href="/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction"
          >Express 介紹。</a
        >
        在底下的教程，你將需要
        <a
          href="/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment"
          >架設一個 Node 開發環境。</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>介紹本教程的範例應用，讓讀者理解包含哪些主題。</td>
    </tr>
  </tbody>
</table>

## 概覽

歡迎來到 MDN "本地圖書館" Express (Node) 教程，我們將開發一個網站，用於管理本地圖書館的目錄。

本系列教程文章中，你將會:

- 使用 _Express 應用產生器工具，創建一個骨架網站與應用_
- 起動和停止 Node 網頁伺服器
- 使用數据庫存放應用的數据
- 創建路由用以要求不同的信息，創建模板 ("視圖") 以 HTML 的形式在瀏覽器中呈現數据
- 使用表單
- 部署應用到生產環境

這些主題中，有一部分你可能已經學過了，或者曾經簡短的接觸過。在本列系教程的最後，你應該知道的夠多，能夠自己開發簡單的 Express 應用。

## 本地圖書館網站

_我們接下來將創建，並隨著本系列教程發展的網站，名字是本地圖書館。如同你的預測，此網站的目的，是為一間小型本地圖書館，提供一個線上目錄，使用者能夠瀏覽可取得的書本_，並管理他們的帳号。

本範例經過細心地考慮，因為它的規模可以放大或縮小，以配合我們的需要，演示盡可能多或少的細節。並且可以用來演示幾乎所有的 Express 特性。更重要的，它允許我們提供一條引導路徑，演示你在任何網站都會需要的功能:

- 在教程一開始，我們將定義一個簡單的、只能瀏覽的圖書館，圖書館成員能夠用來找到可以借的書。這允許我們找出，幾乎每個網站都會使用的共同操作: 從數据庫讀取並呈現內容。
- 跟隨教程的進展，圖書館的例子會一步一步擴充，以演示更高級的網站特征。比如我們會擴充圖書館，允許新書能夠被創建，並用這個來演示如何使用表單，並支持使用者授權。

即使這是一個具備相當擴充性的範例，它被叫做**本地**圖書館是有原因的 — 我們希望呈現給你最少的信息，能夠盡快幫助你上手並運行 Express。因此，我們將會存放書本、複本、作者、和其它關鍵信息。然而，我們不會存放其它圖書館可能用到的有關信息，或者提供支持多個圖書館網站的架構，又或者其它 "大型圖書館" 的特性。

## 我被卡住了，哪裡可以得到原始碼?

當你使用本教程，我們將在每個知識點，提供適當的代碼片段，讓你複制貼上，同時有些代碼，我們希望你能自己擴充 (會有一些指引)。

如果你被卡住了，你可以在 [Github 的這裡](https://github.com/mdn/express-locallibrary-tutorial)，找到本地圖書館網站已經開發完成的版本。

> [!NOTE]
> 在本教程中，指定版本的 node、Express、還有其它模組，都經過測試，並列出在專案項目的 [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/master/package.json) 檔案中。

## 總結

現在，你對本地圖書館網站以及將要學習的東西，有更多一點的認識，是時候開始創建一個[骨架項目](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)，以存放我們的範例。

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
