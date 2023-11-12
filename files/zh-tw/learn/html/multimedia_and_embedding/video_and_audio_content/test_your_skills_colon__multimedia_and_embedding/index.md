---
title: 測試你的技能：多媒體和嵌入
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding
---

{{learnsidebar}}這項技能測試的目的是評估您是否了解我們的[視訊和音訊內容](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)以及[從物件到 iframe 的其他嵌入技術](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)文章。

> **備註：** 您可以在下面的交互式編輯器中嘗試解決方案，但是下載代碼並使用在線工具如 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) 去完成測試。
>
> 如果您遇到困難，請向我們尋求幫助-請參閱 [評估或進一步幫助](#評估或進一步幫助) 此頁面底部的部分。

## 多媒體和嵌入 1

在此測試中，我們希望您將一個簡單的音檔嵌入到頁面上。你需要：

- 將音頻文件的路徑添加到適當的屬性，以將其嵌入頁面中。音檔名為`audio.mp3`，位於當前文件夾中的文件夾`media`中。
- 添加屬性讓瀏覽器顯示一些預設控制選項。
- 為不支持的音檔撥放的瀏覽器添加一些適當的備註。

嘗試更新下面的程式碼以完成測驗：

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> **備註：** [下載此測驗的程式碼](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html)在你自己的編輯器或線上編輯器中運行。

## 多媒體和嵌入 2

在此測驗中，我們希望你標記一個稍微複雜一些的影片播放器，此外還具有多個來源、字幕和其他功能。你需要：

- 添加屬性以使瀏覽器顯示一些預設控制選項。
- 為不支持的影片撥放的瀏覽器添加一些適當的備註。
- 添加多個源，其中包含視頻文件的路徑。這些文件稱為 `video.mp4` 和 `video.webm`, 並且位於一個名為`media`的文件夾中。
- 讓瀏覽器提前知道影片來源的影片格式，以便可以提前選擇要下載的影片。
- 給予 `<video>` 寬度和高度等於固定大小（320 x 240 像素）。
- 使影片默認為靜音。
- 顯示包含在 `media` 資料夾, 在一個名為 `subtitles_en.vtt`, 播放視頻時，您必須將類型明確設置為字幕，並且字幕語言為英語。

嘗試更新下面的程式碼以完成測驗：

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}

> **備註：** [下載此測驗的程式碼](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html)在你自己的編輯器或線上編輯器中運行。

## 多媒體和嵌入 3

對於此最終測驗，你需要執行兩個測驗：

- 將 PDF 嵌入頁面。PDF 檔名為 `mypdf.pdf`, 並存在 `media` 資料夾.
- 轉到 YouTube 或 Google Maps 這樣的共享網站，然後將影片或其他媒體項目嵌入頁面。

T 嘗試更新下面的程式碼以完成測驗：

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed3.html", '100%', 700)}}

> **備註：** [下載此測驗的程式碼](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/tasks/media-embed/mediaembed3-download.html)在你自己的編輯器或線上編輯器中運行。

## 評估或進一步幫助

您可以在上面的 Interactive Editors 中練習這些示例。

如果您希望對自己的工作進行評估，或者遇到困難希望尋求幫助：

1. 將您的工作放入在線共享編輯器中，例如 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 或 [Glitch](https://glitch.com/). 您可以自己編寫程式碼，也可以使用以上各節中連接到的初始文件。
2. 撰寫帖子，要求評估和/或幫助 [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). 你的貼文應包括：

   - 描述性標題，例如「 HTML 圖像基礎知識 1 技能測試所需的評估」。
   - 您已經嘗試過的內容以及您希望我們做什麼的詳細信息，例如如果您陷入困境並需要幫助，或者需要評估。
   - 聯機共享編輯器中您要評估或需要幫助的示例的鏈接（如上面的步驟 1 中所述）。這是進入的好習慣-如果看不到他們的代碼，很難幫助有編碼問題的人。
   - 指向實際任務或評估頁面的鏈接，因此我們可以找到您需要幫助的問題。
