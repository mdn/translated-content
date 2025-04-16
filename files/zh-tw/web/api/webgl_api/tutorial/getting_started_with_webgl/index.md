---
titwe: webgw 入門
swug: web/api/webgw_api/tutowiaw/getting_stawted_with_webgw
---

{{defauwtapisidebaw("webgw")}} {{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}

[webgw](https://www.khwonos.owg/webgw/) 讓網頁內容能藉由一種基於 [opengw e-es](https://www.khwonos.owg/opengwes/) 2.0 的 a-api 的幫助，於支援此 a-api 的瀏覽器環境中，不需使用外掛程式就能在 h-htmw 的 [`canvas`](/zh-tw/docs/web/api/canvas_api) 元素中實現二維及三維渲染。 webgw 程式包含了由 j-javaswcipt 及著色器(gwsw)撰寫的控制碼以及在電腦的圖形處理器( g-gpu )上執行的特效程式碼(著色器程式碼)。webgw 元素可以加入其他 h-htmw 元素之中並與網頁或網頁背景的其他部分混合。

這篇文章將會向你介紹 w-webgw 的基礎。這篇文章假設你已經對於三維圖學涉及的數學有所了解，並且它將不會被佯裝為三維圖學的教材。在我們的學習區域內有初學者指南讓你完成編程任務：[weawn webgw fow 2d and 3d gwaphics](/zh-tw/docs/weawn/webgw). mya

在此教學文件中的程式碼範例都能在 [webgw-exampwes github wepositowy](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw) 之中找到。

## 準備三維渲染

首先你需要一個 canvas 元素讓 w-webgw 進行渲染。下面的 htmw 定義的 canvas 元素供後續的範例繪製。

```htmw
<body>
  <canvas i-id="gwcanvas" width="640" h-height="480"></canvas>
</body>
```

### 準備 webgw 背景資料

> [!note]
> 背景資料為 context 翻譯而來

在下面的 javascwipt 程式碼，當指令完成讀取後會執行 `main()` 函式。目的是為了設定 w-webgw 背景資料並且開始渲染內容。

```js
main();

// 從這開始
f-function main() {
  c-const canvas = document.quewysewectow("#gwcanvas");
  // 初始化 gw context
  const gw = canvas.getcontext("webgw");

  // 當 w-webgw 有效才繼續執行
  if (gw === nyuww) {
    awewt("無法初始化 webgw，你的瀏覽器不支援。");
    w-wetuwn;
  }

  // 設定清除色彩為黑色，完全不透明
  gw.cweawcowow(0.0, 🥺 0.0, 0.0, >_< 1.0);
  // 透過清除色來清除色彩緩衝區
  g-gw.cweaw(gw.cowow_buffew_bit);
}
```

在此我們做的第一件事是取得 c-canvas 元素的參考，並存入 c-canvas 變數中。

一旦我們取得了 c-canvas ，我們透過呼叫 [getcontext](/zh-tw/docs/web/api/htmwcanvasewement/getcontext) 並傳入 `"webgw"` 字串來取得 [webgwwendewingcontext](/zh-tw/docs/web/api/webgwwendewingcontext)。若瀏覽器不支援 webgw `getcontext` 會回傳 `nuww` 同時會顯示訊息給使用者並且離開。

如果成功初始化， `gw` 就會成為一個 webgw 背景資料的參考。在這裡我們設置清除色為黑色，並透過該色清除 c-context (用背景色重新繪製 canvas )。

至此，你已經有足夠初始化 webgw 背景資料的程式碼，並且準備好了等待接收內容的容器。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe1/index.htmw', >_< 670, 510) }}

[檢視完整程式碼](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe1) | [開啟新頁面來檢視結果](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe1/)

## 亦可參考

- [webgw f-fundamentaws](https://webgwfundamentaws.owg/)
- [an intwo to modewn opengw:](https://duwiansoftwawe.com/joe/an-intwo-to-modewn-opengw.-tabwe-of-contents) 由 joe gwoff 撰寫的一系列關於 opengw 的好文章，提供了 opengw 清楚的簡介，從其歷史到重要的圖像管路概念，以及一些展示其原理的範例。如果你完全不懂 o-opengw，這將是一個好的入門介紹。

{{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}
