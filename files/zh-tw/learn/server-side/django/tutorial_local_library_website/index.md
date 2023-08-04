---
title: "Django 教學 1: 本地圖書館網站"
slug: Learn/Server-side/Django/Tutorial_local_library_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}

我們實戰教學系列的第一篇，會解釋你將學到什麼。並提供一個「本地圖書館」 的例子，作為概述。在接下來的教學裡，我們會不斷完善和改進這個網站。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提:</th>
      <td>閱讀 Django 介紹。在接下來的文章裡，你需要創建 Django 開發環境.</td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>介紹教學裡使用的網站應用，讓讀者明白要討論的主題。</td>
    </tr>
  </tbody>
</table>

## 概覽

歡迎來到 MDN 的「本地圖書館」Django 教學。在教學裡，我們會開發一個網站，用來管理本地圖書館的目錄。

在這一系列的教學裡，你將:

- 運用 Django 的工具，創建網站和應用的框架。
- 啟動和停止開發用的服務器。
- 創建模型（models）用來表示應用裡的數據。
- 運用 Django 的 admin 網站，以填充網站數據。
- 面對不同的網路請求，創建視圖函數（views）取回相應的數據。並把數據用模板（templates ），渲染成 HTML ，展示在瀏覽器裡。
- 創建網路映射，將不同的 URL 模式，分發給特定的視圖函數（views）。
- 添加用戶認證和會話（sessions），管理網站行為和進入權限。
- 使用表單。
- 為應用編寫測試。
- 有效運用 Django 的安全系統。
- 把應用佈置到生產環境中。

關於這些主題，你已經學會了一些，並對其他的也有了簡單的了解。在這系列教學的最後，你會學到足夠多，而可以自己開發簡單的 Django 應用了。

## 本地圖書館網站

本地圖書館，是我們在本系列教學裡，創建和不斷改善的網站。跟你期望的一樣，這個網站的目標，是為一個小型的圖書館，提供一個線上目錄。在這個小型圖書館裡，用戶能瀏覽書籍，和管理他們的帳號。

這個例子是精心挑選出來的，因為它可以根據我們的需要，增加或多或少的細節。也能用來展示，幾乎所有的 Django 特性。更重要的是，它提供了一條指南式的路線，在這條路線中，我們會用到 Django 網路框架最重要的功能：

- 在第一篇教學裡，我們會定義一個，簡單到只能瀏覽的圖書館。圖書館的會員，可以查找哪些書可以借閱。我們得以探索那些，幾乎所有網站都會運用的操作：閱讀和展示數據庫裡的內容。
- 接下來，圖書館會慢慢擴展，以展示更高級的 Django 特性。例如，我們會擴展功能，讓會員能夠保留圖書。這個特性會展示如何使用表單，並支持用戶認證。

儘管這是一個非常容易擴展的例子，它被稱為本地圖書館是有原因的——我們希望用最少的訊息，幫助你快速創建、和運用 Django。最後，我們會存儲圖書訊息，圖書數量，作者和其他重要訊息。我們不會儲存圖書館可能會儲存的其他訊息，或是提供一個支持多個圖書館、或是 」大型圖書館「 功能的建構。

## 我卡住了，從哪裡獲得源程式碼呢？

在學習本系列教程時，我們會提供合適的代碼片段，你可以粘貼複製，但是有些代碼我們希望你能自己擴展（在提示下）。

如果你卡在某個地方，你可以在 [Github](https://github.com/mdn/django-locallibrary-tutorial) 裡找到網站的完整代碼。

## 總結

現在你對本地圖書館網站有了一些了解並知道你會學到什麼。是時候創建我們例子會用到的[網站框架](/zh-TW/docs/Learn/Server-side/Django/skeleton_website)了。

{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}
