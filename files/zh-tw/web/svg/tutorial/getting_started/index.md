---
title: 入門
slug: Web/SVG/Tutorial/Getting_Started
---

{{ PreviousNext("SVG/Tutorial/Introduction", "SVG/Tutorial/Positions") }}

### 一個簡單的例子

讓我們用一個簡單的例子來進入主題，先看下面的程式碼：

```xml
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

複製這段程式碼，在一個文件裡貼上，給該文件起名為 demo1.svg，然後用 Firefox 打開它，會渲染成下面截圖的樣子。(Firefox 用户: 點[這裡](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![svgdemo1.png](svgdemo1.png)

渲染過程包括以下内容：

1. 我們先看一下`svg`根元素：

    - 不使用類似(X)HTML 的文檔聲明，因為基於 SVG 的 DTD 會造成很多問題，弊大於利。
    - 為了明確 SVG 版本，`version` 和 baseProfile 兩個屬性必須要寫
    - 作為 XML 方言，SVG 必須始終绑定正確的命名空間（xmlns 属性）。更多資訊，請參考[命名空間速成班頁面](/zh-TW/SVG/Namespaces_Crash_Course)

2. 畫一個覆蓋整個圖形的矩形 ，將背景設為红色
3. 在红色矩形中間畫一個綠色的圓形，半徑是80像素（圓心坐標：x軸向左偏移150像素，y軸向上偏移100像素）【坐標系統會在後面章節介紹】
4. 描繪“SVG”文字，字母填充成白色，通過設定錨點定義文本的中點，在這個例子裡，中點是綠色圓形的圓心，通過調整字號和垂直位置，確保最終顯示效果的美觀

### SVG文件的基本屬性

- 首先要注意的是元素渲染的順序，SVG的全局規則是：靠後的元素，將在靠前的元素上面渲染。
- 在web上，SVG可以直接放進瀏覽器裡顯示，或者通過以下幾種方式嵌入到HTML文檔中顯示：

  - 如果是XHTML文檔，並且響應端接受application/xhtml+xml類型，SVG就可以在XML源裡直接嵌入
  - 如果是HTML5文檔，並且瀏覽器支持HTML5，SVG也可以直接嵌入，但是語法上需要修改，以符合HTML5規範。
  - SVG可以通過Object元素引入:

    ```xml
    <object data="image.svg" type="image/svg+xml" />
    ```

  - 同樣可以通過iframe引入:

    ```xml
    <iframe src="image.svg"></iframe>
    ```

  - 理論上，img元素也可以用来引入SVG，但是Firefox 4.0之前的版本不支持這一功能。
  - 最後，SVG可以用JavaScript動態創建，並且注入到HTML DOM裡面。這樣做的好處是，對於不支持SVG的瀏覽器，可以啟用其它替代技術。

  這是一個深入探討該主題的專題頁面。

- SVG如何處理大小和單位，將在下一頁進行解釋。

### SVG文件的類型

SVG文件類型有兩種，普通的SVG文件是包含SVG標籤的文字文件，這類型文件的副檔名是“.svg”（全小寫）。

SVG規範支持超大體積的SVG文件，以便符合一些應用程式的使用要求（比如地理應用），所以SVG規範提供了gzip壓縮的SVG文件格式，這類文件的後缀是“.svgz”（全小寫）。不幸的是，從微軟的IIS伺服器上獲取SVG壓縮文件將會出現問題，並且，Firefox不支持本機端的SVG壓縮文件。所以，如果要使用SVG壓縮文件，你必須保證使用的是支持這種文件的服務器。

### 關於web服務器

現在你已經大致瞭解了如何創建SVG文件，下一步就是將SVG文件上傳到服務器上。這裡有一些問題需要注意。對於一般的SVG文件，服務器的HTTP響應端是：

```
Content-Type: image/svg+xml
```

對於經過壓縮的SVG文件，響應端應該是：

```
Content-Type: image/svg+xml
Content-Encoding: gzip
```

你可以通過一些網站來檢查你的服務器是否使用了正确的響應端，比如 web-sniffer.net，提交一個SVG文件的URL，看一下響應端是什麼。如果你的服務器在響應裡没能返回上面的内容，那麼你應該聯繫一下您的主機服務商。如果他們不提供相關的配置服務，你也可以自動動手，具體方法可以查閱SVG wiki的 服務器配置頁面。

服務器配置錯誤是SVG加載失敗的主要原因，所以一定要確認你的配置。如果你没有給SVG文件配置正確的服務器響應端，Firefox將會以文本的方式展示文件的標記和編碼内容，甚至要求用户選擇一个應用程序打開它。

{{ PreviousNext("SVG/Tutorial/Introduction", "SVG/Tutorial/Positions") }}
