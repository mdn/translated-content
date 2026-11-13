---
title: 非同步的 JavaScript
slug: Learn_web_development/Extensions/Async_JS
---

在本單元我們來討論非同步的（ {{Glossary("asynchronous")}} ） {{Glossary("JavaScript")}} ，為何其如此重要，並了解它如何有效率的處理像是從伺服器獲取資源的這類潛在性阻塞（ blocking ）操作

> [!CALLOUT]
>
> #### 想要成為前端開發人員?
>
> 我們已為你準備一門實現你目標所需要具備的所有基礎知識課程
>
> [**立即開始**](/zh-TW/curriculum/)

## 事前準備

非同步的 JavaScript 是一個相當進階的主題，因此建議你在嘗試本單元前能先通過 [JavaScript 初探](/zh-TW/docs/Learn_web_development/Core/Scripting)以及 [JavaScript 構成元素](/zh-TW/docs/Learn_web_development/Core/Scripting)單元。

如果你對非同步程式設計的概念還不太熟悉，強烈建議你應該先從[非同步程式設計通用概念](/zh-TW/docs/Learn_web_development/Extensions/Async_JS/Introducing)的文章開始學習。如果你已經具備其概念，那麼你或許可以跳至[非同步的 JavaScript 介紹](/zh-TW/docs/Learn_web_development/Extensions/Async_JS/Introducing)單元開始。

> [!NOTE]
> 如果你正在使用電腦／平板／任何其它無法讓你建立檔案的裝置上，你可以嘗試在 [JSBin](https://jsbin.com/) 或是 [Glitch](https://glitch.com) 上測試本單元的範例程式碼。

## 指南

- [非同步程式設計通用概念](/zh-TW/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - : 在本篇文章我們會介紹一些關於非同步程式設計的重要觀念，以及在網頁瀏覽器和 JavaScript 中的行為。在閱讀其他文章之前你應該先具備這些觀念。
- [非同步的 JavaScript 介紹](/zh-TW/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - : 在本篇文章中我們會先簡短的回顧我們在同步的 JavaScript 中所遭遇到的問題，並預先看看稍後將會使用哪些非同步的 JavaScript 技巧來解決此問題。
- [協同的非同步 JavaScript ： Timeout 和 interval](/zh-TW/docs/Learn_web_development/Extensions/Async_JS)
  - : 在這裡看看我們在傳統上是如何透過設定的時間到期或是透過定時的方式（例如：每秒發生的次數）讓 Javascript 能夠以非同步的方式執行程式碼，談談這些方法有哪些用處以及存在哪些既有的問題。
- [優雅的使用 Promise 來處理非同步操作](/zh-TW/docs/Learn_web_development/Extensions/Async_JS/Promises)
  - : Promise 是在 Javascript 語言中相對較新的功能，它能夠讓你延遲活動直到先前的活動回報完成或失敗。這方法對設置一連串的操作並讓其正確的循序執行相當有用。本篇文章向你展示 Promise 是如何運作，你將會看到如何被使用在 WebAPI ，以及如何寫出屬於自己的 Promise 。
- [利用 async 及 await 讓非同步程式設計變得更容易](/zh-TW/docs/Learn_web_development/Extensions/Async_JS/Promises)
  - : Promise 在設置上可能會有些複雜並難以理解，因此現代瀏覽器已經實作出 `async` 函式以及 `await` 運算子。前者能夠讓標準的函式隱含的使用 Promise 方式來實現非同步行為，然而後者可以被用在 `async` 函式內部，讓程式碼繼續執行之前去等待一個 Promise 完成。這能讓我們在鏈結一連串的 Promise 的情況之下更加簡潔易懂。

## 參閱

- [Asynchronous Programming](https://eloquentjavascript.net/11_async.html) 來自作者為 Marijn Haverbeke 的極佳的 [Eloquent JavaScript](https://eloquentjavascript.net/) 電子書。
