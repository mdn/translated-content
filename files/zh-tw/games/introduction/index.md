---
title: Web 遊戲開發介紹
slug: Games/Introduction
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GamesSidebar}}

現代 Web 已迅速成為不僅能創造令人驚嘆的高品質遊戲，也是發佈這些遊戲的重要媒介。

透過現代 Web 技術和最新的瀏覽器，創造媲美桌機和原生作業系統的遊戲已成為可能。這不僅僅是簡單的卡片遊戲或社交多玩家遊戲，而是 3D 動作射擊遊戲、角色扮演遊戲（RPG）等更多類型。隨著 [JavaScript](/zh-TW/docs/Web/JavaScript) 即時編譯技術和新 API 的性能大幅提升，你可以在瀏覽器或 [HTML5](/zh-TW/docs/Glossary/HTML5) 支援的設備上打造無需妥協的遊戲體驗。

## HTML 遊戲平台

你可以真正將 Web 視為遊戲的理想目標平台。正如我們所說的：「Web 就是平台。」以下是 Web 平台的核心技術：

<table class="no-markdown standard-table">
  <thead>
    <tr>
      <th scope="col">功能</th>
      <th scope="col">技術</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>音效</strong></td>
      <td><a href="/zh-TW/docs/Web/API/Web_Audio_API">Web 音頻 API</a></td>
    </tr>
    <tr>
      <td><strong>圖形</strong></td>
      <td>
        <a href="/zh-TW/docs/Web/API/WebGL_API">WebGL</a>（<a href="https://www.khronos.org/opengles/">OpenGL ES</a> 2.0）
      </td>
    </tr>
    <tr>
      <td><strong>輸入</strong></td>
      <td>
        <a href="/zh-TW/docs/Web/API/Touch_events">觸控事件</a>、<a href="/zh-TW/docs/Web/API/Gamepad_API/Using_the_Gamepad_API">Gamepad API</a>、裝置感測器、<a href="/zh-TW/docs/Web/API/WebRTC_API">WebRTC</a>、<a href="/zh-TW/docs/Web/API/Fullscreen_API">全螢幕 API</a>、<a href="/zh-TW/docs/Web/API/Pointer_Lock_API">指標鎖定 API</a>
      </td>
    </tr>
    <tr>
      <td><strong>語言</strong></td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript">JavaScript</a> 或使用 <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> 將 C/C++ 編譯為 JavaScript
      </td>
    </tr>
    <tr>
      <td><strong>網路</strong></td>
      <td>
        <a href="/zh-TW/docs/Web/API/WebRTC_API">WebRTC</a> 和／或 <a href="/zh-TW/docs/Web/API/WebSockets_API">WebSocket</a>
      </td>
    </tr>
    <tr>
      <td><strong>儲存</strong></td>
      <td>
        <a href="/zh-TW/docs/Web/API/IndexedDB_API">IndexedDB</a> 或「雲端」
      </td>
    </tr>
    <tr>
      <td><strong>Web</strong></td>
      <td>
        <a href="/zh-TW/docs/Web/HTML">HTML</a>、<a href="/zh-TW/docs/Web/CSS">CSS</a>、<a href="/zh-TW/docs/Web/SVG">SVG</a>（以及更多！）
      </td>
    </tr>
  </tbody>
</table>

## 商業理由

作為遊戲開發者，不論是個人還是大型遊戲工作室，你可能想知道為何應該將 Web 作為下一個遊戲項目的目標平台。以下是 Web 能為你帶來的優勢：

1. Web 的覆蓋範圍極大，幾乎無處不在。使用 HTML 製作的遊戲可在智慧型手機、平板電腦、PC 和智慧電視上運行。
2. 行銷和曝光度提升。你不再需要將應用程式局限於某個應用程式商店，而是可以利用 Web 的固有連結性和可分享性，在網路和其他媒體上推廣你的遊戲。
3. 在付款方面，你擁有更多控制權。你不需要因為遊戲在他人的生態系統中而放棄 30% 的收入，而是可以自由定價並選擇任何支付處理服務。
4. 隨時更新遊戲，而不必等待其他公司內部人員批准你的更新是否能及時發佈。
5. 管理自己的分析數據，而非依賴於第三方。你可以選擇最適合的工具來收集銷售數據和遊戲覆蓋範圍。
6. 直接與用戶建立更緊密的關係，不需透過應用商店的有限機制。以你喜歡的方式與用戶互動，無需中間人。
7. 玩家可以隨時隨地玩遊戲。由於 Web 的普遍性，你的用戶可以在手機、平板電腦、筆記型電腦或桌機上進行遊戲。

## 遊戲開發者應該知道的 Web 技術

給技術愛好者，讓我們深入了解 Web 提供的 API，這些 API 專為遊戲開發者設計。以下是詳細的清單，展示 Web 技術可以做到什麼：

- [Fetch API](/zh-TW/docs/Web/API/Fetch_API)
  - : 用來從 Web 伺服器發送和接收各種數據，例如下載新遊戲關卡和美術素材，或傳輸非即時的遊戲狀態資訊。
- [全螢幕 API](/zh-TW/docs/Web/API/Fullscreen_API)
  - : 這個簡單的 API 讓你的遊戲可以全螢幕顯示，從而讓玩家更加沉浸於遊戲體驗中。
- [Gamepad API](/zh-TW/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : 如果你希望玩家能使用遊戲把手或其他遊戲設備進行遊戲，這是必要的 API。
- [HTML](/zh-TW/docs/Web/HTML) 和 [CSS](/zh-TW/docs/Web/CSS)
  - : 這兩項技術可以幫助你構建、設計和佈局遊戲的用戶界面。其中 HTML 的 {{HTMLElement("canvas")}} 元素是進行 2D 圖形處理的一種方法。
- [HTML audio](/zh-TW/docs/Web/HTML/Element/audio)
  - : {{HTMLElement("audio")}} 元素可讓你輕鬆播放簡單的音效和音樂。如果有更高的需求，請參考 [Web 音頻 API](/zh-TW/docs/Web/API/Web_Audio_API) 以獲取更強大的音頻處理能力！
- [IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API)
  - : 一個強大的數據存儲 API，可以在用戶的設備上存儲遊戲數據（例如遊戲狀態等）從而避免每次都需要下載資料。這也能幫助你的遊戲在用戶無法連接網路時（例如長時間飛行時）仍能正常運行。
- [JavaScript](/zh-TW/docs/Web/JavaScript)
  - : JavaScript 是 Web 上的程式語言，現代瀏覽器中其速度非常快，並且還在不斷提升。你可以利用其強大功能來編寫遊戲代碼，或者使用 [Emscripten](https://github.com/emscripten-core/emscripten/wiki) 或 [Asm.js](http://asmjs.org/spec/latest/) 技術輕鬆移植現有遊戲。
- [Pointer Lock API](/zh-TW/docs/Web/API/Pointer_Lock_API)
  - : 該 API 讓你可以鎖定鼠標或其他指標設備，使其在遊戲界面內運作，從而提供精確的操作，並防止用戶意外將輸入導向其他地方。
- [SVG](/zh-TW/docs/Web/SVG)（可縮放向量圖形）
  - : 讓你構建的向量圖形可以根據顯示器的大小或解析度平滑縮放。
- [型別陣列](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript 型別陣列讓你能在 JavaScript 中直接處理二進制數據，這適用於操作 GL 紋理、遊戲數據或其他非原生 JavaScript 格式的數據。
- [Web 音頻 API](/zh-TW/docs/Web/API/Web_Audio_API)
  - : 該 API 讓你可以通過 JavaScript 控制音頻播放、合成及處理，實現即時音效及音樂的播放與操作。
- [WebGL](/zh-TW/docs/Web/API/WebGL_API)
  - : 讓你可以從 Web 內容創建高效能、硬體加速的 3D（及 2D）圖形，這是一種 [OpenGL ES](https://www.khronos.org/opengles/) 2.0 的 Web 支持實現。
- [WebRTC](/zh-TW/docs/Web/API/WebRTC_API)
  - : WebRTC（即時通訊）API 可控制音頻與影片數據，包括視訊會議及應用數據在兩用戶之間的傳輸。如果你希望玩家在摧毀怪物的同時能彼此交談，這就是需要的 API。
- [WebSocket](/zh-TW/docs/Web/API/WebSockets_API)
  - : WebSocket API 讓你的應用或網站可以與伺服器建立實時數據傳輸連接，非常適合多人遊戲、聊天服務等。
- [Web Worker](/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Workers 讓你能夠啟動執行自己 JavaScript 程式碼的背景執行緒，以充分利用現代多核心處理器的性能。
