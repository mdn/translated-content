---
title: Web 遊戲開發介紹
slug: Games/Introduction
---

{{GamesSidebar}}現有 Web 環境已成為多元的平台，不只可建構令人驚艷的高品質遊戲，也是發佈這些遊戲的重要媒介。可供撰寫的遊種類......

現有的 Web 技術再搭配最新版瀏覽器，就能打造出絕佳的 Web 遊戲，而且我們講的可不是用 Flash® 寫的簡單卡牌遊戲，或是多人的社交遊戲而已。卻是可打趴一堆平面遊戲的 3D 動作射擊或角色扮演遊戲。多虧 [JavaScript](/zh-TW/docs/Web/JavaScript) 的即時 (Just-in-time，JIT) 技術與新 API 雙雙大幅提升其效能，你所撰寫的遊戲已可於瀏覽器 (或支援 [HTML5](/zh-TW/docs/Glossary/HTML5) 的裝置) 中執行，卻又不致犧牲任何效能。

## HTML5 遊戲平台

如同 Mozilla 常說的「Web 即是平台」，你可將 Web 想像為較佳的遊戲平台。接著就來看看 Web 平台的核心：

| 功能         | 技術                                                                                                                                                                                                                                                                                      |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **音效**     | [Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API)                                                                                                                                                                                                                                        |
| **圖形**     | [WebGL](/zh-TW/docs/Web/API/WebGL_API) ([OpenGL ES](https://www.khronos.org/opengles/) 2.0)                                                                                                                                                                                               |
| **輸入**     | [觸控事件](/zh-TW/docs/Web/API/Touch_events)、[Gamepad API](/zh-TW/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)、裝置感測器、[WebRTC](/zh-TW/docs/Web/API/WebRTC_API)、[Full Screen API](/zh-TW/docs/Web/API/Fullscreen_API)、[Pointer Lock API](/zh-TW/docs/Web/API/Pointer_Lock_API) |
| **程式語言** | [JavaScript](/zh-TW/docs/Web/JavaScript)（或 C/C++ 可透過[Emscripten](https://github.com/kripken/emscripten/wiki) 編譯為 JavaScript）                                                                                                                                                     |
| **網路連線** | [WebRTC](/zh-TW/docs/Web/API/WebRTC_API) 及/或 [WebSockets](/zh-TW/docs/Web/API/WebSockets_API)                                                                                                                                                                                           |
| **儲存功能** | [IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API) 或雲端                                                                                                                                                                                                                                     |
| **Web**      | [HTML](/zh-TW/docs/Web/HTML)、[CSS](/zh-TW/docs/Web/CSS)、[SVG](/zh-TW/docs/Web/SVG)（還有更多！）                                                                                                                                                                                        |

## 商業案例

不論你是獨立或大型遊戲工作室的開發者，你都應該將 Web 作為自己下一個遊戲專案的系統。先來看看 Web 能對你提供多少優勢：

1. Web 無遠弗屆，而用 HTML5 撰寫的遊戲可自由在桌機、平板電腦、智慧電視、智慧型手機上執行。
2. 可獲得更好的行銷與露出機會。你不再限制於某個 App 商店才能推廣自己的 App；反而能透過 Web 上的所有媒體推銷遊戲，並利用 Web 的串連與分享效率接觸到新客戶。
3. 你能控制「付款」這個重要的作業。之前只要你的遊戲放在某個生態系統中，就必須支付超過 30% 的收益給該系統。但現在你可選擇自己喜歡的 App 訂價與付款服務。
4. 同樣的，你也能自行控制 App 的更新頻率，而不再需要枯等別人審核你的重要修正檔，還不知道今天還明天才能上架。
5. 控制你的分析方式！你能蒐集自己所需的資料，或可選擇你所愛用的第三方，進而獲得你的銷售資訊以及所觸及的消費族群；不需再讓別人幫你決定分析方法。
6. 你能進一步管理自己與消費者之間的關係，不再受限於 App 商城的機制而取得篩選過的反饋意見。也不需再經過中間人，就能以自己的方式和消費者直接交流。
7. 玩家隨時隨地都能暢玩你的遊戲。因為 Web 無所不在，消費者能在自己的手機、平板電腦、家裡桌機、辦公室電腦，或任何地方觀看遊戲進度。

## 遊戲開發者所應知道的 Web 技術

我們要為開發者提供 API 的相關資訊，了解 Web 帶來的絕妙開發功能。
以下只列舉出其中數項：

- [Full Screen API](/zh-TW/docs/Web/API/Fullscreen_API)
  - : 此簡易 API 可讓遊戲全螢幕運作，提供玩家絕佳的動作體驗。
- [Gamepad API](/zh-TW/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : 如果要讓遊戲搭配搖桿或其他類型的控制器，就用這個 API。
- [HTML](/zh-TW/docs/Web/HTML) 與 [CSS](/zh-TW/docs/Web/CSS)
  - : 這兩種技術可用以建立遊戲的使用者介面，並設定其風格與配置方式。部分的 HTML 即為 {{HTMLElement("canvas")}} 元素，可直接建構 2D 圖形。
- [HTML audio](/zh-TW/docs/Web/HTML/Element/audio)
  - : {{HTMLElement("audio")}} 元素可輕鬆播放簡易音效與音樂。如果需要進一步效果，可參閱 [Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API) 達到真正的音訊處理效能！
- [IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API)
  - : 此強大的資料儲存 API，可將使用者的資料保存於電腦或其他裝置之上，亦可於本端儲存遊戲資料與其他資訊；如此可避免每次都需再下載資料一次。即使目前處於無網路連線的狀態 (例如飛機上長達數個小時的旅程...)，也同樣可以玩遊戲 。
- [JavaScript](/zh-TW/docs/Web/JavaScript)
  - : JavaScript 就是 Web 上使用的程式語言，可於現有瀏覽器上達到絕佳速度，且目前還在不斷的提升。你可寫出遊戲的程式碼，或可透過如 [Emscripten](https://github.com/kripken/emscripten/wiki) 或 [Asm.js](http://asmjs.org/spec/latest/) 的技術，輕鬆移植現有的遊戲。
- [Pointer Lock API](/zh-TW/docs/Web/API/Pointer_Lock_API)
  - : Pointer Lock API 可鎖定遊戲介面中的滑鼠或其他指向裝置。取代之前的絕對游標定位，現可接收座標差而得到更精確的使用者動作，並避免使用者突然在他處輸入，卻遺漏了重要動作。
- [SVG](/zh-TW/docs/Web/SVG) (Scalable Vector Graphics，[可縮放向量圖形](/zh-TW/docs/Web/SVG))
  - : 可建構向量圖形，根據裝置畫面的解析度而順暢調整。
- [Typed Array（具型別陣列）](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript 的具型別陣列，可讓你在 JavaScript 中存取原始的二進位資料。如此可讓你設定 GL 紋理 (Texture)、遊戲資料，或其他物件。甚至非原生 JavaScript 格式的亦可處理。
- [Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API)
  - : 此 API 可透過 JavaScript 程式碼控制音訊的回播、合成、操作等作業，讓你建構絕妙音效並即時播放音樂。
- [WebGL](/zh-TW/docs/Web/API/WebGL_API)
  - : 可於 Web 內容中建立高效能、硬體加速的 3D (與 2D) 圖像。此為 Web 所支援的 [OpenGL ES](https://www.khronos.org/opengles/) 2.0 實作。
- [WebRTC](/zh-TW/docs/Web/API/WebRTC_API)
  - : WebRTC (Real-Time Communications) API 可控制音訊與視訊資料 (包含視訊會議)，並能在兩名使用者之間來回傳輸其他應用程式的資料。想讓玩家能一邊爆怪物的頭還一邊交談？就用這個 API 吧。
- [WebSockets](/zh-TW/docs/Web/API/WebSockets_API)
  - : WebSocket API 可讓你的 App 或網站連上伺服器，進而即時來回傳輸資料。適用於多人遊戲、聊天服務等。
- [Web Workers](/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Workers 可讓你分配背景執行緒，執行本身所屬的 JavaScript 程式碼，藉以利用新的多核心處理器。
- [XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest) and [File API](/zh-TW/docs/Web/API/File_and_Directory_Entries_API)
  - : 整合的 XMLHttpRequest 與 File API，可你從 Web 伺服器接收或傳送所需的任何資料 (別因為「XML」搞混了)。如此能順利下載新的遊戲關卡與圖片，藉以來回傳輸非即時的遊戲狀態資訊。
