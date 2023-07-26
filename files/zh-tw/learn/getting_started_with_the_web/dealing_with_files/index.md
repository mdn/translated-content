---
title: 與各式各樣檔案打交道
slug: Learn/Getting_started_with_the_web/Dealing_with_files
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

一個網站會包含許多檔案: 文字內容、程式碼、樣式表、影音內容......等。每當你建立一個網站時，你需要將這些檔案在你的電腦上合理架構好。以確保它們能夠互相溝通，並讓內容正常顯示。然後你接著才能[將你的網站發佈上線](/zh-TW/Learn/Getting_started_with_the_web/Publishing_your_website)。本篇文章將探討你應該注意的一些議題，以便讓你能夠為你的網站設定好合理的檔案架構。

## 你的網站在哪裡?

當你正在你自己的電腦上編輯你的網站時，你應該將所有相關的檔案放在同一個資料夾中，這反映到未來在伺服器上的檔案架構。這個資料夾可以放在任何地方，但你應該會放在一個容易找到的地方，對吧！像是你的桌面，你的家目錄，或是你硬碟的根目錄。

1. 找到一個地方來存放你的網站專案。首先，建立一個新資料夾並命名為 `web-projects` (或類似名稱)。 這裡將存放你的各種網站專案.
2. 在上述資料夾底下，建立另一個資料夾來存放你的第一個網站，請將這個資料夾命名為 `test-site` (或其他有創意的名稱).

## 留意大小寫與空格

你將注意到在本篇文章中，我們會要求你在命名檔案或是資料夾時，只使用小寫並且避免使用空格。這是因為：

1. 許多的電腦尤其是網路伺服器，是大小寫區分的(case-sensitive)。所以假設你放了圖片在你的網站上而路徑是 `test-site/MyImage.jpg`，然後另一個檔案你想放在 `test-site/myimage.jpg`，這可能是無法運作的。
2. 瀏覽器、伺服器、以及各種程式語言對於空格的處理並不是一致的。舉例來說，如果你在檔名中使用了空格，有些系統會將其視為兩個檔名，有些伺服器會將空格替換成 "%20" (這是空格在 URIs 中的表示法)，並破壞了你的連結。我們建議使用底線(underscores)與破折號(dashes)來隔開單字。例如：`my-file.html` 或是 `my_file.html`.

也因為這些原因，你應該盡量在命名資料夾與檔案時使用小寫並避免使用空格，這樣一來將能夠減少一些不必要的錯誤。

## 你的網站架構應該如何?

下一步，我們要看看我們的測試網站應該具有什麼樣的架構。我們的網站專案最常見的東西就是一個 HTML 檔案與專門放圖片、樣式檔案、腳本檔案的資料夾們。讓我們來看看下面：

1. **`index.html`**: 這個檔案會包含你的首頁內容，也就是別人一進到你的網站時所看到的文字與圖片。使用你的文字編輯器，建立一個新檔案命名為 `index.html` ，並將它存到 `test-site` 這個資料夾下。
2. **`images` folder**: 這個資料夾包含了所有網站會用到的圖片，建立一個新資料夾命名為 `images` ，並將它存到 `test-site` 這個資料夾下。
3. **`styles` folder**: 這個資料夾包含了能夠設計你的網站的 CSS 碼(例如：設定文字與背景顏色)，建立一個資料夾命名為 `styles`，並將它存到 `test-site` 這個資料夾下。
4. **`scripts` folder**: 這個資料將包含能夠使網站具有互動性的 JavaScript 程式碼。(例如：按下按鈕後會載入資料)。建立一個資料夾命名`scripts` ，並將它存到 `test-site` 這個資料夾下。

> **備註：** 在 Windows 的電腦上，你可能在設定副檔名上會遇到一些困難。因為 Windows 預設會將已知的檔案類型名稱隱藏。一般來說你可以將這項設定關掉，只需要去檔案總管，選擇「資料夾選項」並取消選取「隱藏已知檔案類型的副檔名」，並點選 **OK** 。有關不同版本的 Windows 的設定方法，請利用搜尋引擎搜尋。

## 檔案路徑

要讓一個檔案能夠與另一個檔案"溝通"，你需要提供一個他們之間的相對檔案路徑以讓檔案能夠找到另一個檔案在哪裡。為了要展示，我們將插入一小段的 HTML 到我們的 `index.html` 檔案中，並且讓它顯示你在 ["What will your website look like?"](/zh-TW/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like) 這篇文章中所選的圖片。

1. 複製你選的圖片並放到 `images` 資料夾中。
2. 打開你的 `index.html`，並複製貼上下面這段 code。先別擔心這些 code 代表什麼意思，我們會在後面的時候講解它們代表的意義。

   ```html
   <!doctype html>
   <html>
     <head>
       <meta charset="utf-8" />
       <title>My test page</title>
     </head>
     <body>
       <img src="" alt="My test image" />
     </body>
   </html>
   ```

3. `<img src="" alt="My test image">` 這行是一段將圖片插入到頁面中的 HTML code，我們必須告訴 HTML 圖片在哪。我們知道圖片在 _images_ 資料夾中，而 _images_ 資料夾就跟 `index.html`在同一目錄下。為了要在檔案系統結構中從 `index.html` 走到我們的圖片，我們需要將檔案路徑設為`images/your-image-filename`. 舉例來說，我們的圖片命名為 `firefox-icon.png`，所以這裡的檔案路徑即為 `images/firefox-icon.png`.
4. 將檔案路徑貼到你的 HTML code 中的 `src=""` 的雙引號之間。
5. 將你的 HTML 檔案存檔，並且滑鼠雙擊 HTML 檔案來打開它，你應該會看到一個新的網頁並展示著你的圖片!

![A screenshot of our basic website showing just the firefox logo - a flaming fox wrapping the world](website-screenshot.png)

一些有關路徑的規則:

- 要連結一個目標檔案到在同一個目錄下的 HTML 檔案，只需要檔案名稱就可以了。例如 `my-image.jpg`。
- 為了要參照到在子目錄下的檔案，在路徑前面加上該目錄的名稱，並接著加上一個斜線(/)。例如： `subdirectory/my-image.jpg`.
- 為了要連結到一個在 HTML file 的上層目錄的檔案，你需要使用兩個點點(..)。例如：index.html 是在 `test-site` 這個目錄的一個子目錄下，而 `my-image.png` 是在 `test-site` 這個目錄下，HTML file 要參照 `my-image.png` 必須使用 `../my-image.png`。
- 你可以混和著使用以上的規則，例如 `../subdirectory/another-subdirectory/my-image.png`.

至此，你已經知道目前需要知道的了。

> **備註：** Windows 的檔案系統會傾向使用反斜線(\\)，而非斜線(/)。例如 `C:\windows`. 這並沒有關係，即使你是在 Windows 上開發網站，你仍然應該在程式碼中使用斜線(/)。

## 還有什麼需要被完成的?

目前先這樣吧。你的資料夾裡面現在應該長得像這樣：

![A file structure in mac os x finder, showing an images folder with an image in, empty scripts and styles folders, and an index.html file](file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
