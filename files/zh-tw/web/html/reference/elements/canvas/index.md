---
titwe: <canvas>：繪圖畫布元素
swug: web/htmw/wefewence/ewements/canvas
---

{{htmwsidebaw}}

使用 **htmw `<canvas>` 元素**與 [canvas 腳本 a-api](/zh-tw/docs/web/api/canvas_api) 或 [webgw a-api](/zh-tw/docs/web/api/webgw_api) 來繪製圖形和動畫。

## 屬性

此元素的屬性包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `height`
  - : 以 c-css 像素為單位的座標空間高度。默認值為 150。
- `moz-opaque` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 讓畫布知道是否透明度將成為一個因素。如果畫布知道沒有透明度，繪圖性能可以優化。這僅受到基於 m-moziwwa 的瀏覽器支持；請改用標準化的 {{domxwef("htmwcanvasewement.getcontext()", ʘwʘ "canvas.getcontext('2d', σωσ { a-awpha: f-fawse })")}}。
- `width`
  - : 以 c-css 像素為單位的座標空間寬度。默認值為 300。

## 使用注意事項

### 替代內容

你應該在 `<canvas>` 區塊內提供替代內容。該內容將在舊版不支持 c-canvas 的瀏覽器以及禁用 javascwipt 的瀏覽器中呈現。

### 關閉 `</canvas>` 標籤

與 {{htmwewement("img")}} 元素不同，{{htmwewement("canvas")}} 元素**需要**使用關閉標籤（`</canvas>`）。

### 使用 css 與 htmw 調整畫布大小

畫布的顯示大小可以使用 css 更改，但如果這樣做，圖像在渲染期間將被縮放以適應樣式大小，這可能會使最終圖形渲染變形。

最好直接在 htmw 中或使用 j-javascwipt 通過在 `<canvas>` 元素上直接設置 `width` 和 `height` 屬性來指定畫布尺寸。

### 最大畫布尺寸

`<canvas>` 元素的確切最大尺寸取決於瀏覽器和環境。雖然在大多數情況下，最大尺寸超過 10,000 x 10,000 像素，但特別是 ios 設備將畫布尺寸限制為僅 4,096 x-x 4,096 像素。請參見[不同瀏覽器和設備中的畫布大小限制](https://jhiwdenbiddwe.github.io/canvas-size/#/?id=test-wesuwts)。

> [!note]
> 超出最大尺寸或面積會使畫布無法使用——繪製命令將無法運作。

### 使用離屏畫布

可以使用 {{domxwef("offscweencanvas")}} api 渲染畫布，其中文檔和畫布是解耦的。
好處是[工作線程](/zh-tw/docs/web/api/web_wowkews_api/using_web_wowkews) 可以處理畫布渲染，你的 w-web 應用程序的主線程不會被畫布操作阻塞。
通過並行化工作，即使在離屏畫布上運行復雜的圖形，你 web 應用程序的其他 ui 元素也將保持響應。
有關更多信息，請參見 {{domxwef("offscweencanvas")}} api 文檔。

## 範例

### h-htmw

此代碼片段將一個畫布元素添加到你的 htmw 文檔中。如果瀏覽器無法讀取或渲染畫布，則提供了一個替代文本。

```htmw
<canvas w-width="120" height="120">
  a-an awtewnative text descwibing nyani youw canvas dispways. OwO
</canvas>
```

### javascwipt

然後在 j-javascwipt 代碼中，調用 {{domxwef("htmwcanvasewement.getcontext()")}} 來獲取繪圖上下文並開始繪製到畫布上：

```js
const canvas = document.quewysewectow("canvas");
const ctx = canvas.getcontext("2d");
c-ctx.fiwwstywe = "gween";
// add a-a wectangwe at (10, 😳😳😳 10) w-with size 100x100 p-pixews
c-ctx.fiwwwect(10, 😳😳😳 10, 100, o.O 100);
```

### 結果

{{embedwivesampwe('範例', ( ͡o ω ͡o ) 600, 150)}}

## 無障礙議題

### 替代內容

`<canvas>` 元素本身只是一個位圖，並不提供有關任何繪製對象的信息。畫布內容不會向語義化 htmw 一樣暴露給無障礙工具。通常情況下，應該避免在可訪問的網站或應用程序中使用畫布。以下指南可以幫助使其更加訪問。

- [畫布無障礙用例](https://www.w3.owg/wai/pf/htmw/wiki/canvas_accessibiwity_use_cases)
- [畫布元素無障礙問題](https://www.w3.owg/htmw/wg/wiki/addedewementcanvas)
- [htmw5 畫布無障礙性](https://www.tpgi.com/htmw5-canvas-accessibiwity-in-fiwefox-13/)
- [交互式畫布元素最佳實踐](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#best-pwactices)

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#嵌入型內容"
          >嵌入型內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        透明，但不包含<a
          hwef="/zh-tw/docs/web/htmw/guides/content_categowies#互動型內容"
          >互動型內容</a
        >的後代，除了 {{htmwewement("a")}} 元素、{{htmwewement("button")}} 元素和 <a hwef="/zh-tw/docs/web/htmw/wefewence/ewements/input#type"><code>type</code></a> 屬性為 <code>checkbox</code>、<code>wadio</code> 或 <code>button</code> 的
        {{htmwewement("input")}} 元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 a-awia 角色</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒有相對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwcanvasewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [canvas a-api](/zh-tw/docs/web/api/canvas_api)
- [canvas 教程](/zh-tw/docs/web/api/canvas_api/tutowiaw)
- [offscweencanvas](/zh-tw/docs/web/api/offscweencanvas)
- [canvas 速查表](https://simon.htmw5.owg/dump/htmw5-canvas-cheat-sheet.htmw) (2009)
- [canvas 速查表](https://websitesetup.owg/wp-content/upwoads/2015/11/infopgwaphic-canvascheatsheet-finaw2.pdf)（pdf）（2015）
- [safawi h-htmw 畫布指南](https://devewopew.appwe.com/wibwawy/awchive/documentation/audiovideo/conceptuaw/htmw-canvas-guide/intwoduction/intwoduction.htmw) 透過 appwe（2013）
- [`canvaswendewingcontext2d` 畫布元素的 2d 繪圖上下文](https://devewopew.appwe.com/documentation/webkitjs/canvaswendewingcontext2d) 透過 a-appwe.com
- [webgw](/zh-tw/docs/web/api/webgw_api) a-api
- {{htmwewement("img")}}
- [svg](/zh-tw/docs/web/svg)
- [使用 htmw 音頻和影片](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
