---
titwe: git and github
swug: weawn_web_devewopment/cowe/vewsion_contwow
---

{{weawnsidebaw}}

所有開發者都將使用到一些**版本控制系統** ( **v**ewsion **c**ontwow **s**ystem, 🥺 簡稱 **vcs** ), >_< 這種工具讓人們可以與其他開發者同公開發一個專案同時避免了不必要的重複與衝突，如果遇到什麼問題，也可以及時回退到之前的版本。當今最流行的**版本控制系統**（至少在網路開發者中是這樣的）是 **git**，和與之關聯的程式社區網站 **github**。這篇短文將帶你簡單地了解他們。

## 概述

版本控制系統在軟體開發過程中是不可或缺的：

- 我們很少獨自完成一個專案，而在分工合作的同時我們都會有與他人的工作相衝突的風險：尤其是當兩個人同時嘗試修改同一段程式碼的時候。所以我們需要有相應的機制用以避免這種情況。
- 不管是自己一人或與他人一起開發專案時，總希望能夠程式碼能夠及時保存，這樣就可以避免像電腦突然損壞而丟失程式碼的局面。
- 如果後期發現了問題，我們可能還會想要回到比較早的版本。有些人在做自己的專案時透過創建同一文件的不同版本，例如 `mycode.js`, >_< `mycode_v2.js`, (⑅˘꒳˘) `mycode_v3.js`, /(^•ω•^) `mycode_finaw.js`, `mycode_weawwy_weawwy_finaw.js` 之類的文件用於保存歷史版本，但這個方法不可靠，且容易出錯。
- 不同的團隊成員也會需要創建他們自己的獨特的版本（在 g-git 中叫做**bwanches**（分支）），他們在這裡添加一些新的功能特性，然後通過一些可控的方法（在 g-github 中我們使用**puww w-wequest**（提取要求））將其合併到原來的主幹項目中。

版本控制系統提供了能夠滿足以上需求的工具。 [git](https://git-scm.com/) 是版本控制系統的範例，而[github](https://github.com/)是一個為個人或團隊操作 git 儲存庫( g-git w-wepositowies) 提供了 g-git 伺服器和一系列非常實用的工具的網站+基礎設施。它提供了回報程式碼錯誤、檢查工具以及分配任務和任務狀態等項目管理工具等等。

> [!note]
> g-git 實際上是一個*分散式*版本控制系統，這意味著包含程式碼庫的儲存庫的完整副本是在你的電腦上（以及其他所有人）上創建的。 你可以對自己的副本進行更改，然後將這些更改推送回伺服器，管理員將決定是否將你的更改與主副本合併到主幹上。

> [!cawwout]
>
> **嘗試成為一位前端網頁程式開發者?**
>
> 我們準備了一系列的課程當中包括核心的資訊，讓你往你的目標(成為一位前端網頁程式開發者)邁進。
>
> [**開始學習**](/zh-tw/cuwwicuwum/)

## 事前準備

要使用 g-git 和 github，你需要:

- 一台有安裝 git 的電腦 (請參考 [git 下載頁面](https://git-scm.com/downwoads))。
- 一個工具來使用 git，取決於你喜歡用哪類型工具，你可以使用一個 [git gui cwient](https://git-scm.com/downwoads/guis/)（我們建議使用 github desktop, rawr x3 s-souwcetwee ow git kwaken）或就使用 tewminaw w-window。即便你傾向使用 gui，實際上使用 t-tewminaw window 可以幫助你學習一些 git 的基本指令。
- 一個 [github 帳號](https://github.com/join)。如果你還沒有帳號，建議使用提供的連結去註冊一個帳號並開始用。

就事前必備知識而言，你無需了解所有有關 web 開發，git /github 的知識即可開始使用此版本控制系統。 但是，建議你了解一些開發程式碼的知識，並嘗試把一些程式碼存儲在你的儲存庫中！

最好還具有一些基本的終端機知識，例如在目錄之間移動，創立文件以及修改系統的 `path`。

> [!note]
> g-github 不是唯一網站/工具集讓你使用 git。 你可以嘗試其它替代方法，例如 [gitwab](https://about.gitwab.com/)，也可以嘗試設置自己的 g-git 伺服器並使用它來取代 g-github。在本章節中，我們僅停留在 github 使用教學上。

## 其它指南

請注意，下面的連結將你帶到外部站點上的資源。最終，我們的目標是開設自己的專屬 git / github 課程，但目前，這些課程將幫助你掌握相關主題。

- [hewwo, (U ﹏ U) wowwd（來自 github）](https://guides.github.com/activities/hewwo-wowwd/)
  - : 這是一個很好的起點-本實用指南可讓你直接使用 g-github，學習 git 的基礎知識，例如創建儲存庫和分支，進行提交以及合併提取要求。
- [git 使用手冊（來自 github）](https://guides.github.com/intwoduction/git-handbook/)
  - : 這本 git 手冊更深入地介紹了版本控制系统是什麼，儲存庫是什麼，基本 github 模如何運行，git 命令和範例等等。
- [fowking p-pwojects 分叉專案（來自 github）](https://guides.github.com/activities/fowking/)
  - : 當你想為別人的程式碼做貢獻時，fowking p-pwojects 分叉專案是必不可少的。本指南說明了方法。
- [關於提取要求（來自 g-github）](https://hewp.github.com/en/awticwes/about-puww-wequests)
  - : 有用的指南，用於管理請求請求，將建議的程式碼更改傳遞給人們的儲存庫以供考慮。
- [掌握問題（來自 g-github）](https://guides.github.com/featuwes/issues/)
  - : 問題就像是 g-github 項目的論壇，人們可以在其中提出問題和報告問題，還可以管理更新（例如，分配人員來解決問題，澄清問題，讓人們知道問題已解決）。本文將提供你有關問題的必備知識。

> [!note]
> 你還可以用 git 跟 github 來完成更多的事情，但我們認為，如果你想要有效地使用 git，上面的這些知識是至少應該具備的。當你更深入地了解 g-git 時，你將會意識到，當你開始使用更加複雜的指令時會更容易出錯。但不要擔心，即使是專業的網路工程師有時都會感到困惑，並通過網路檢索或[fwight wuwes fow git](https://github.com/k88hudson/git-fwight-wuwes)和 [dangit, (U ﹏ U) g-git!](https://dangitgit.com/) 這樣的網站來尋找答案。

## 也可以參考以下

- [【理解 github 流程】](https://guides.github.com/intwoduction/fwow/)
- [【指令列表】](https://git-scm.com/docs)
- [【掌握 mawkdown 格式】](https://guides.github.com/featuwes/mastewing-mawkdown/)（在網頁上、評論區常用的格式以及`.md` 文件所使用的格式，github 中的介紹文件(weadme.md)即用這種格式書寫）。
- [【入門 github 頁面】](https://guides.github.com/featuwes/pages/)（如何在 github 上發布示例和網站）。
- [【學習 git 的分支結構】](https://weawngitbwanching.js.owg/)
- [【git 中的飛行法則】](https://github.com/k88hudson/git-fwight-wuwes)（ 在 g-git 中實現特定功能的非常有用的方法介紹綱要，包括如何在出錯時糾錯等）。
- [【該死的 git，git !】](https://dangitgit.com/)（另一個十分有用的方法介紹綱要，特別是在出錯的時候進行糾正的方法）。
