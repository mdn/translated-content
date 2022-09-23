---
title: 客戶端 web APIs
slug: Learn/JavaScript/Client-side_web_APIs
---

{{LearnSidebar}}

在為網站或應用程序編寫客戶端 JavaScript 時，您將很快遇到應用程式介面（API）。 API 是應用程式介面，用於操作運行站點的瀏覽器和操作系統的不同方面，或操縱來自其他網站或服務的資料。 在本單元中，我們將探討 API 是什麼，以及如何使用您在開發工作中經常遇到的一些最常見的 API。

## 必備知識

To get the most out of this module, you should have worked your way through the previous JavaScript modules in the series ([First steps](/zh-TW/docs/Learn/JavaScript/First_steps), [Building blocks](/zh-TW/docs/Learn/JavaScript/Building_blocks), and [JavaScript objects](/zh-TW/docs/Learn/JavaScript/Objects)). Those modules typically involve simple API usage, as it is often difficult to write client-side JavaScript examples without them. For this tutorial, we will assume that you are knowledgable about the core JavaScript language, and we will explore common Web APIs in a bit more detail.

了解 [HTML](/zh-TW/docs/Learn/HTML) 和 [CSS](/zh-TW/docs/Learn/CSS) 的基礎知識也會有所幫助。

> **備註：** 假如你正在使用 電腦/平板/其他裝置，你不需要建立自己的檔案，你可以嘗試線上程式撰寫系統來撰寫範例程式，像是[JSBin](http://jsbin.com/) or [Thimble](https://thimble.mozilla.org/).

## 概觀

- [Web API 簡介](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : First up, we'll start by looking at APIs from a high level — what are they, how do they work, how do you use them in your code, and how are they structured? We'll also take a look at what the different main classes of APIs are, and what kind of uses they have.
- [文檔操作](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : When writing web pages and apps, one of the most common things you'll want to do is manipulate web documents in some way. This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the {{domxref("Document")}} object. In this article, we'll look at how to use the DOM in detail, along with some other interesting APIs that can alter your environment in interesting ways.
- [從服務器獲取數據](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : Another very common task in modern websites and applications is retrieving individual data items from the server to update sections of a webpage without having to load an entirely new page. This seemingly small detail has had a huge impact on the performance and behavior of sites. In this article, we'll explain the concept, and look at technologies that make it possible, such as {{domxref("XMLHttpRequest")}} and the [Fetch API](/zh-TW/docs/Web/API/Fetch_API).
- [第三方 API](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : The APIs we've covered so far are built into the browser, but not all APIs are. Many large websites and services such as Google Maps, Twitter, Facebook, PayPal, etc. provide APIs allowing developers to make use of their data (e.g. displaying your twitter stream on your blog) or services (e.g. displaying custom Google Maps on your site, or using Facebook login to log in your users). This article looks at the difference between browser APIs and 3rd party APIs and shows some typical uses of the latter.
- [繪製圖形](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : The browser contains some very powerful graphics programming tools, from the Scalable Vector Graphics ([SVG](/zh-TW/docs/Web/SVG)) language, to APIs for drawing on HTML {{htmlelement("canvas")}} elements, (see [The Canvas API](/zh-TW/docs/Web/API/Canvas_API) and [WebGL](/zh-TW/docs/Web/API/WebGL_API)). This article provides an introduction to the Canvas API, and further resources to allow you to learn more.
- [視頻和音頻 API](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML5 comes with elements for embedding rich media in documents — {{htmlelement("video")}} and {{htmlelement("audio")}} — which in turn come with their own APIs for controlling playback, seeking, etc. This article shows you how to do common tasks such as creating custom playback controls.
- [客戶端存儲](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Modern web browsers feature a number of different technologies that allow you to store data related to web sites and retrieve it when necessary allowing you to persist data long term, save sites offline, and more. This article explains the very basics of how these work.
