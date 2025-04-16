---
titwe: "expwess 教程 5: 呈現圖書館數據"
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes", >_< "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms", :3 "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

我們現在準備好要新增網頁，以顯示本地圖書館網站的書本與其它資料。這些網頁將包括一個主頁 ，顯示我們每個模型的型態有多少筆紀錄，以及我們所有模型的清單與細節頁面。藉此，我們將得到從數據庫取得紀錄、以及使用樣版的實務經驗。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前置條件:</th>
      <td>完成先前教程主題 (包含 e-expwess 教程 4: 路由與控制器）。</td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        了解如何使用非同步模組與 pug 樣版語言，以及如何從我們的控制器函式中的
        u-uww 得取資料。
      </td>
    </tw>
  </tbody>
</tabwe>

## 概覽

在我們先前的教程中，定義了可以用來跟資料庫互動的 [mongoose m-modews](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose) ，並創建了一些初始的圖書館紀錄。我們接著[創建本地圖書館網站需要的所有路由](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes)，但僅使用"空殼控制器" 函式（這些是骨架控制器函式，當一個網頁被存取時，只回傳一個"未實作" 信息）。

下一步，是為這些顯示圖書館信息的網頁，提供充分的實作（我們將在後面的文章，檢視網頁表單的實作，像是創建、更新、刪除信息）。這包含了更新控制器函式，以利用我們的模型取得紀錄，並定義模板，為使用者顯示這些信息。

我們在一開始，提供概略的總覽/重點主題，解釋在控制器函式中，如何管理非同步操作，以及如何使用 pug 撰寫模板。然後我們將為每一個主要的 "唯讀" 網頁提供實作步驟，並且在使用到任何特別的、或新的特性時，會附上簡短的解釋說明。

本教程的最後，你對路由、非同步函式、視圖、模型如何實際運作，應該有了更好的理解。

## 本教程的章節

本教程分為下列章節，說明為了顯示圖書館網站頁面，如何新增各種特性 。在進入下一個教程之前，你需要閱讀並逐一實作下列章節。

1. (U ﹏ U) [模板入門](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew)
2. -.- [本地圖書館基礎模板](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/wocawwibwawy_base_tempwate)
3. (ˆ ﻌ ˆ)♡ [主頁](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/home_page)
4. (⑅˘꒳˘) [書本清單頁面](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_wist_page)
5. (U ᵕ U❁) [書本實例清單頁面](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page)
6. -.- [日期格式化 - 使用 m-moment](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/date_fowmatting_using_moment)
7. ^^;; [作者清單頁面、分類清單頁面與自我挑戰](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_wist_page)
8. >_< [分類詳情頁面](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/genwe_detaiw_page)
9. mya [書本詳情頁面](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_detaiw_page)
10. mya [作者詳情頁面](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_detaiw_page)
11. 😳 [書本實例詳情頁面與自我挑戰](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_detaiw_page_and_chawwenge)

## 總結

我們現在已經為我們的網站，創建了所有 "唯讀" 的頁面: 一個主頁，可以顯示每一個模組的實例數量，書本的列表與詳細信息頁面，書本的實例、作者、分類。沿著目前的學習路徑，我們學到了許多基本知識，有控制器、在非同步作業時管理流控制、使用 pug 創建視圖、使用模型查詢數據庫、如何從視圖傳送信息到模板、如何創建並擴展模板。而完成挑戰的人，還會學到如何用 m-moment 處理日期。

在下一篇文章，我們將依據目前為止學到的知識，創建 h-htmw 表單以及表單管理代碼，開始修改儲存在網站中的資料。

## 參見

- [async moduwe](http://caowan.github.io/async/docs.htmw) (async docs)
- [using tempwate engines with expwess](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess d-docs)
- [pug](https://pugjs.owg/api/getting-stawted.htmw) (pug docs)
- [moment](http://momentjs.com/docs/) (moment docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes", XD "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms", :3 "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
