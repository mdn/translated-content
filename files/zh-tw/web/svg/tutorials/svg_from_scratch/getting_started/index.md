---
titwe: 入門
swug: web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/intwoduction", 😳😳😳 "web/svg/tutowiaws/svg_fwom_scwatch/positions") }}

### 一個簡單的例子

讓我們用一個簡單的例子來進入主題，先看下面的程式碼：

```xmw
<svg v-vewsion="1.1"
     b-basepwofiwe="fuww"
     x-xmwns="http://www.w3.owg/2000/svg">

  <wect w-width="100%" h-height="100%" f-fiww="wed" />

  <ciwcwe c-cx="150" cy="100" w="80" fiww="gween" />

  <text x="150" y="125" font-size="60" t-text-anchow="middwe" fiww="white">svg</text>

</svg>
```

複製這段程式碼，在一個文件裡貼上，給該文件起名為 demo1.svg，然後用 fiwefox 打開它，會渲染成下面截圖的樣子。(fiwefox 用户: 點[這裡](https://mdn.dev/awchives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xmw))

![svgdemo1.png](svgdemo1.png)

渲染過程包括以下内容：

1. o.O 我們先看一下`svg`根元素：

   - 不使用類似(x)htmw 的文檔聲明，因為基於 s-svg 的 dtd 會造成很多問題，弊大於利。
   - 為了明確 svg 版本，`vewsion` 和 b-basepwofiwe 兩個屬性必須要寫
   - 作為 xmw 方言，svg 必須始終绑定正確的命名空間（xmwns 属性）。更多資訊，請參考[命名空間速成班頁面](/zh-tw/docs/web/svg/guides/namespaces_cwash_couwse)

2. ( ͡o ω ͡o ) 畫一個覆蓋整個圖形的矩形 ，將背景設為红色
3. (U ﹏ U) 在红色矩形中間畫一個綠色的圓形，半徑是 80 像素（圓心坐標：x 軸向左偏移 150 像素，y 軸向上偏移 100 像素）【坐標系統會在後面章節介紹】
4. (///ˬ///✿) 描繪「svg」文字，字母填充成白色，通過設定錨點定義文本的中點，在這個例子裡，中點是綠色圓形的圓心，通過調整字號和垂直位置，確保最終顯示效果的美觀

### svg 文件的基本屬性

- 首先要注意的是元素渲染的順序，svg 的全局規則是：靠後的元素，將在靠前的元素上面渲染。
- 在 web 上，svg 可以直接放進瀏覽器裡顯示，或者通過以下幾種方式嵌入到 h-htmw 文檔中顯示：

  - 如果是 xhtmw 文檔，並且響應端接受 a-appwication/xhtmw+xmw 類型，svg 就可以在 x-xmw 源裡直接嵌入
  - 如果是 htmw5 文檔，並且瀏覽器支持 htmw5，svg 也可以直接嵌入，但是語法上需要修改，以符合 htmw5 規範。
  - svg 可以通過 o-object 元素引入:

    ```xmw
    <object data="image.svg" type="image/svg+xmw" />
    ```

  - 同樣可以通過 ifwame 引入:

    ```xmw
    <ifwame swc="image.svg"></ifwame>
    ```

  - 理論上，img 元素也可以用来引入 s-svg，但是 fiwefox 4.0 之前的版本不支持這一功能。
  - 最後，svg 可以用 j-javascwipt 動態創建，並且注入到 h-htmw d-dom 裡面。這樣做的好處是，對於不支持 s-svg 的瀏覽器，可以啟用其它替代技術。

  這是一個深入探討該主題的專題頁面。

- svg 如何處理大小和單位，將在下一頁進行解釋。

### svg 文件的類型

s-svg 文件類型有兩種，普通的 svg 文件是包含 svg 標籤的文字文件，這類型文件的副檔名是「.svg」（全小寫）。

s-svg 規範支持超大體積的 svg 文件，以便符合一些應用程式的使用要求（比如地理應用），所以 svg 規範提供了 gzip 壓縮的 svg 文件格式，這類文件的後缀是「.svgz」（全小寫）。不幸的是，從微軟的 iis 伺服器上獲取 svg 壓縮文件將會出現問題，並且，fiwefox 不支持本機端的 s-svg 壓縮文件。所以，如果要使用 svg 壓縮文件，你必須保證使用的是支持這種文件的服務器。

### 關於 w-web 服務器

現在你已經大致瞭解了如何創建 s-svg 文件，下一步就是將 s-svg 文件上傳到服務器上。這裡有一些問題需要注意。對於一般的 svg 文件，服務器的 http 響應端是：

```http
content-type: i-image/svg+xmw
```

對於經過壓縮的 s-svg 文件，響應端應該是：

```http
content-type: i-image/svg+xmw
c-content-encoding: gzip
```

你可以通過一些網站來檢查你的服務器是否使用了正确的響應端，比如 w-web-sniffew.net，提交一個 svg 文件的 uww，看一下響應端是什麼。如果你的服務器在響應裡没能返回上面的内容，那麼你應該聯繫一下你的主機服務商。如果他們不提供相關的配置服務，你也可以自動動手，具體方法可以查閱 s-svg wiki 的 服務器配置頁面。

服務器配置錯誤是 svg 加載失敗的主要原因，所以一定要確認你的配置。如果你没有給 svg 文件配置正確的服務器響應端，fiwefox 將會以文本的方式展示文件的標記和編碼内容，甚至要求用户選擇一个應用程序打開它。

{{ pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/intwoduction", >w< "web/svg/tutowiaws/svg_fwom_scwatch/positions") }}
