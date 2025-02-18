---
title: "Express 教程 5: 呈現圖書館數據"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data
original_slug: Learn/Server-side/Express_Nodejs/Displaying_data
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

我們現在準備好要新增網頁，以顯示本地圖書館網站的書本與其它資料。這些網頁將包括一個主頁 ，顯示我們每個模型的型態有多少筆紀錄，以及我們所有模型的清單與細節頁面。藉此，我們將得到從數據庫取得紀錄、以及使用樣版的實務經驗。

<table>
  <tbody>
    <tr>
      <th scope="row">前置條件:</th>
      <td>完成先前教程主題 (包含 Express 教程 4: 路由與控制器）。</td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        了解如何使用非同步模組與 Pug 樣版語言，以及如何從我們的控制器函式中的
        URL 得取資料。
      </td>
    </tr>
  </tbody>
</table>

## 概覽

在我們先前的教程中，定義了可以用來跟資料庫互動的 [Mongoose models](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) ，並創建了一些初始的圖書館紀錄。我們接著[創建本地圖書館網站需要的所有路由](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)，但僅使用"空殼控制器" 函式（這些是骨架控制器函式，當一個網頁被存取時，只回傳一個"未實作" 信息）。

下一步，是為這些顯示圖書館信息的網頁，提供充分的實作（我們將在後面的文章，檢視網頁表單的實作，像是創建、更新、刪除信息）。這包含了更新控制器函式，以利用我們的模型取得紀錄，並定義模板，為使用者顯示這些信息。

我們在一開始，提供概略的總覽/重點主題，解釋在控制器函式中，如何管理非同步操作，以及如何使用 Pug 撰寫模板。然後我們將為每一個主要的 "唯讀" 網頁提供實作步驟，並且在使用到任何特別的、或新的特性時，會附上簡短的解釋說明。

本教程的最後，你對路由、非同步函式、視圖、模型如何實際運作，應該有了更好的理解。

## 本教程的章節

本教程分為下列章節，說明為了顯示圖書館網站頁面，如何新增各種特性 。在進入下一個教程之前，你需要閱讀並逐一實作下列章節。

1. [模板入門](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [本地圖書館基礎模板](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [主頁](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [書本清單頁面](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [書本實例清單頁面](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [日期格式化 - 使用 moment](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
7. [作者清單頁面、分類清單頁面與自我挑戰](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
8. [分類詳情頁面](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
9. [書本詳情頁面](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
10. [作者詳情頁面](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
11. [書本實例詳情頁面與自我挑戰](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## 總結

我們現在已經為我們的網站，創建了所有 "唯讀" 的頁面: 一個主頁，可以顯示每一個模組的實例數量，書本的列表與詳細信息頁面，書本的實例、作者、分類。沿著目前的學習路徑，我們學到了許多基本知識，有控制器、在非同步作業時管理流控制、使用 Pug 創建視圖、使用模型查詢數據庫、如何從視圖傳送信息到模板、如何創建並擴展模板。而完成挑戰的人，還會學到如何用 moment 處理日期。

在下一篇文章，我們將依據目前為止學到的知識，創建 HTML 表單以及表單管理代碼，開始修改儲存在網站中的資料。

## 參見

- [Async module](http://caolan.github.io/async/docs.html) (Async docs)
- [Using Template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug docs)
- [Moment](http://momentjs.com/docs/) (Moment docs)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
