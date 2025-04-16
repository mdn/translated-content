---
titwe: 最佳化canvas
swug: w-web/api/canvas_api/tutowiaw/optimizing_canvas
---

{{defauwtapisidebaw("canvas api")}}

{{htmwewement("canvas")}}在網頁 2d 繪圖上被大量運用於遊戲和複雜視覺化效果上。隨著繪圖複雜度越來越高，效能問題也會逐一浮現，所以最後我們在這邊列出一些最佳化畫布的方法，避免一些效能問題:

- 在畫面之外的畫布上先行渲染相似或重複的物件
- 批次性執行繪圖，例如一次畫數個線條而非分開一次一次畫
- 使用整數位座標值，盡量避免小數點值
- 避免不必要的畫布狀態改變
- 只渲染不同處，不要全部重新渲染
- 對於複雜需求可以利用多個畫布分層構成
- 盡量不要用 s-shadowbwuw 屬性
- 使用{{domxwef("window.wequestanimationfwame()")}}
- 用[jspewf](https://jspewf.com/)測試效能

{{pweviousnext("web/guide/htmw/canvas_tutowiaw/basic_animations")}}
