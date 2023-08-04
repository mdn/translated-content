---
title: 多媒體：圖像跟影片
slug: Learn/Performance/Multimedia
---

媒體，換句話說就是圖像跟影片，平均占了網站超過 70%的下載流量。以下載的效能來考慮的話，減少媒體數量和檔案大小是一個簡單可以實現的目標。 這篇文章聚焦在優化圖像跟影片來改善網站的效能。

> **備註：** 這是一篇進階的在 web 上優化多媒體的介紹，包含基本的原則還有技巧，想了更多的話，可以看 <https://images.guide>。

## 為什麼要優化你的多媒體

對於平均的網站, [51% 的頻寬消耗來自圖像, 而影像則是 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367)，所以我們可以說處理和優化你的多媒體是很重要的。

你必須考慮流量的使用. 很多的人都是使用流量有限制的上網方案， 或是用多少付多少的上網方案，也就是根據用了多少 MB 來付費。這樣的問題不是只發生在新興國家的市場. 在 2018 年, [英國仍有 24% 在使用「用多少付多少」的方案](https://www.ofcom.org.uk/__data/assets/pdf_file/0021/113169/Technology-Tracker-H1-2018-data-tables.pdf)。

你還需要考慮記憶體的問題，因為許多移動設備的 RAM 都有限。有一件很重要的事你必須要記住，下載的圖像是被儲存在記憶體裡的。

## 優化圖像傳送

儘管是頻寬的最大消耗者，但因為圖像是非同步載入的，所以訪問者可以在下載的同時看到頁面。因此，它們對[感知性能的影響](/zh-TW/docs/Learn/Performance/perceived_performance)遠低於許多人的預期。 然而，圖像在內容中很常被使用，因此，重要的應該是讓訪問者盡快地看到它們，以獲得良好的體驗。

### 載入策略

對於大多數網站來說，最大改進之一是將不在視窗裡的圖像做 lazy-loading ，而不是在初始頁面載入時就全部下載下來，不管訪問者是否之後會往下滾動查看它們。 許多 JavaScript 函式庫都可以為你實現這個功能，例如說 lazysize，並且瀏覽器的供應商也正在著手原生的 `lazyload` 屬性，然而目前還處於實驗階段。

除了載入圖像的子集之外，接下來您還應該研究一下圖像本身的格式：

- 你是否正在載入最佳格式？ （見下文）
- 你載入的尺寸正確嗎？
- 你已經壓縮圖像了嗎？ (查看 [ImageOptim](https://imageoptim.com/))

#### 最佳格式

這非常值得用一個章節來介紹。因為為圖像選擇正確的格式可能很棘手。格式通常取決於圖像的用途：

- **Progressive JPEG**—不需要移動卷軸就能看到的網頁圖像。
- **WebP / JPEG-XR / JPEG2000**—往下移動卷軸才能看到網頁圖像。
- **PNG / WebP**—有透明度的圖像。
- **SVG**—向量圖, 圖示 (備註： SVGs 比 icon fonts 還要好得多！).

優先在不需要移動卷軸就能看到的網頁區域使用 Progressive JPEG 的原因是因為它們會逐漸地進行渲染（因此得名），這意味著用戶可以先看到低解析度的版本，然後再逐漸地變得清晰。而不是從頂部一行一行的以最高解析度來載入圖像，或甚至只有在完全下載好後才顯示。

#### 控制下載圖像的優先級別（和順序）

將最重要的圖像更早地呈現在訪問者面前，可以改善感知性能。

第一件要確認的事情是，你的前景圖像標籤 `<img />` 跟你定義在 CSS 裡 `background-image` 的背景圖像 — 前景圖像比背景圖像被賦予更高的優先級別。

其次，通過採用優先級別提示，你可以在圖像標籤中添加`importance` 屬性來進一步控制優先級別。輪播是一個在圖像上使用優先級別提示的例子，它的第一個圖像的優先級高於其他的圖像。

### 渲染策略

由於圖像是非同步載入的，並且會在第一次渲染後繼續載入，因此，如果在載入之前未定義尺寸的話，則可能會導致頁面內容的重新編排。比如說，當圖像載入時，文字內容可能會被擠壓到下面。所以， 很重要的是，定義 `width` 跟 `height` 或是新的 `intrinsicsize` 屬性。

對於任何的背景圖像，設置 `background-color` 的值非常重要，因為在圖像下載之前，它能讓上面的內容是能夠被閱讀的。

## 優化影像傳送

為了確保您不會將不必要的大文件發送給用戶，最好 [壓縮所有你要傳輸的影像](#compress)，[優化`<source>` 順序](#omptimize), 設定 [autoplay](/zh-TW/docs/Learn/Performance/Multimedia#Video_autoplay), [移除靜音影像的聲音](#muted), [優化影像預載](/zh-TW/docs/Learn/Performance/Multimedia#Video_preload), 還有 [考慮串流](/zh-TW/docs/Learn/Performance/Multimedia#Consider_streaming) 這部影像。

### 壓縮所有影像

大多數的影像壓縮工作都包含，比較影像裡的相鄰幀，並刪除原始幀和後續幀中相同的細節。你想同時壓縮影像並將其匯出為多種影像格式, 包含 WebM，MPEG-4/H.264，以及 Ogg/Theora.

你用來創建影像的軟體可能包含優化檔案大小的功能。如果沒有的話，那麼可以考慮幾種線上工具，像是之後篇章會討論的 [FFmpeg](https://www.ffmpeg.org/)，他可以協助編碼，解碼，轉換，以及呈現其他神奇的功能。

### 優化 `<source>` 順序

從最小到最大來排序影像的來源。例如說，給定三個壓縮影像，分別為 10 MB，12MB，以及 13MB, 把最小的擺在第一個，最大的擺在最後一格。

```html
<video width="400" height="300" controls="controls">
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
  <!-- Ogg/Theora: 13 MB -->
  <source src="video.ogv" type="video/ogv" />
</video>
```

就順序的角度來說，瀏覽器會下載它看到的第一個影像來源，因此先讓他載入一個較小的影像。就＂最小＂的角度來說，要確認你的壓縮影響仍然看起來不會太糟。有幾個演算法可能會讓你的影像看起來像是個會動的 gif 。雖然 128 Kb 的影像可能在用戶體驗上會比 10 MB 的影像好，可是把看起來像是 gif 粒狀的影像放在內容後面，也可能會對你的品牌產生負面影響。

查看 [CanIUse.com](http://caniuse.com/#search=video) 來確認現今瀏覽器對於影像以及不同媒體格式的支持。

### 影像自動播放

為了確保循環播放背景影像，你需要向影像標籤裡添加多個屬性： `autoplay`, `muted`, 以及 `playsinline.`

```html
<video
  autoplay=""
  loop=""
  muted="true"
  playsinline=""
  src="backgroundvideo.mp4"></video>
```

雖然屬性 `loop` 和 `autoplay` 在對於影像的循環跟自動播放很合理，可是 `muted` 屬性在行動裝置的瀏覽器裡是必須添加的。

`Playsinline` 在行動裝置裡的 Safari 是必須的，他讓影像可以在不需要全螢幕的模式下被播放。

### 移除靜音影像的聲音

如果你有一個 `hero-video` 或是其他靜音影片, 請將聲音從影像中移除。

```html
<video autoplay="" loop="" muted="true" playsinline="" id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

這段 `hero-video` 代碼, 常出現在許多研討會網站以及公司的主頁， 它是個包括自動播放，循環播放和靜音的影像。它不包含任何控制選單，因此無法收聽聲音。通常它是沒有聲音的，但仍然存在音軌，因此它仍會消耗頻寬。然而，我們沒有理由將頻寬分給靜音影像的聲音。移除聲音可以節省 20% 的頻寬。這代表，如果你的影像是 10 MB，則節省了 2 MB。

根據您的影像創作軟體，你也許可以在匯出和壓縮過程中刪除聲音。 如果沒有，那麼有一個免費的工具 [FFmpeg](https://www.ffmpeg.org/) ，可以使用以下指令來為你完成此任務

```bash
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

`FFmpeg` 稱自己為＂用於記錄，轉換和串流音頻和影像的完整，跨平台解決方案＂。

### 影像預載

preload 屬性具有 3 個可用選項：`auto`|`metadata`|`none`。預設選項是 `metadata`.

將選項更改為 `auto` 會告訴瀏覽器自動下載整個影像。僅有在極有可能播放時才應該執行此操作，否則會浪費大量的頻寬。

`preload="metadata"` 最多可讓 3％ 的影像在頁面加載時被下載。 然後對於較大的影像來說，這可能或是大量的頻寬。

`preload="none"` 不會在播放之前下載任何的影像。 這會延遲影像的啟動時間，但能夠為播放可能性較低的影像保存大量的頻寬。

### 考慮串流

[串流影像讓適當的影像大小和頻寬](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) (根據網路速度) 被傳遞給用戶。 就像使用響應式圖像一樣，正確大小的影像將被傳遞到瀏覽器，從而確保用戶的快速影像啟動、低緩衝以及優化的播放。
