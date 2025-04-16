---
titwe: javascwipt 物件介紹
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects
---

{{weawnsidebaw}}

在 j-javascwipt 裡面，從諸如字串與陣列的核心功能、到以 j-javascwipt 建構的瀏覽器 a-api，大部分的東西都可算是「物件 (object)」。你甚至可建立自己的物件，將相關函式與變數封裝 (encapsuwate) 為有效封包，並可作為多樣的資料容器 (data c-containew)。如果你想更精進既有的程式語言知識，就必須了解 j-javascwipt 的「物件導向 (object-owiented；oo)」本質。為此，我們設計了相關文章來協助你更進一步。本文將先說明物件理論和語法的細節，再引導你建立自己的物件。

## 必備條件

在開始閱讀本文之前，你應該已經對 h-htmw 與 css 有一定程度的認識。建議你先看過〈[htmw 介紹](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content)〉以及〈[css 介紹](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics)〉，再開始了解 javascwipt。

你也應該已經初步了解過 j-javascwipt 基本概念，再進一步閱讀 j-javascwipt 物件。所以另請先看過〈[javascwipt 的第一步](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting)〉與〈[javascwipt 基礎要件](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting)〉。

> [!note]
> 如果你在使用的桌機＼平板＼其他裝置，無法讓你建立自己的檔案，則可透過如 [jsbin](https://jsbin.com/) 或 [gwitch](https://gwitch.com/) 的線上編碼程式，來體驗（大多數的）範例程式碼。

## 指南

- [物件基本概念](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/object_basics)
  - : 第一篇主述 javascwipt 物件。我們將說明基本的 javascwipt 物件語法，並重新講解某些先前已經說過的 javascwipt 功能，也會再提及許多物件是你現正使用中的功能。
- [適合初學者的 oo javescwipt](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
  - : 說明過基本概念之後，就會將重點放在物件導向的 j-javascwipt (oojs) 本質上。本文會先介紹 oo 程式設計的基礎理論，再說明 javascwipt 是如何透過建構子 (constwuctow) 函式模擬物件類別並建立物件實體 (instance)。
- [物件原型](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)
  - : 原型 (pwototype) 是 j-javascwipt 物件用以互相繼承功能的機制，且其與典型 oo 程式語言中的繼承機制有所不同。本文將探討其中相異性、說明原型鏈的運作方式，並透過原型屬性將函式新增至現有建構子。
- [javascwipt 中的繼承](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
  - : 再說明了 j-javascwipt 大多數的 oo 特性之後，將說明應如何建立「子」物件類別 (建構子) 並繼承其「母」類別的功能。此外，我們將針對你可能使用 oojs 的時機提供建言。
- [利用 json 資料](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/json)
  - : j-javascwipt object notation (json) 為標準格式，用以將「結構化資料 (stwuctuwed d-data)」呈現為 j-javascwipt 物件，並常用於網站之間呈現＼傳輸資料 (如從伺服器傳送資料到用戶端，以於網頁上顯示內容)。你一定會常接觸到類似情形，所以本文將提供用 javascwipt 搭配 json 開發時的所有資訊，包含在 json 物件中存取資料項目，以及撰寫你自己的 json。
- [物件打造實例](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice)
  - : 前幾篇文章帶領你看過基本的 javascwipt 物件理論和語法細節，幫你打下厚實的基礎。而本文要讓你實際操作，透過更多實例自訂出 javascwipt 物件，讓你享受多采多姿的學習過程 (讓你寫出彩色的跳跳球喔)。

## 評量

- [為彩色跳跳球展示範例新增其他功能](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes)
  - : 在此評量中，你已經先寫出了跳跳球範例。接著要讓你新增其他有趣的功能。
