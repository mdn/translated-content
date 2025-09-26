---
title: 測試你的技能：音訊和視訊
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video
---

這項技能測試的目的是評估你是否了解我們的[視訊和音訊內容](/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)文章。

> [!NOTE]
> 你可以在 MDN Playground 或線上編輯器中嘗試解決方案，例如 [CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/)。
>
> 如果你遇到困難，可以透過我們的[溝通管道](/zh-TW/docs/MDN/Community/Communication_channels)與我們聯繫。

## 任務 1

在此測試中，我們希望你將一個簡單的音檔嵌入到頁面上。你需要：

- 將音頻文件的路徑添加到適當的屬性，以將其嵌入頁面中。音檔名為 `audio.mp3`，位於路徑 `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3` 中。
- 添加屬性讓瀏覽器顯示一些預設控制選項。
- 為不支援 `<audio>` 撥放的瀏覽器添加一些適當的備註。

嘗試更新下面的程式碼以完成測驗：

```html live-sample___audio-1
<h1>Basic audio embed</h1>

<audio></audio>
```

<!-- Shared styles -->

```css hidden live-sample___video-1 live-sample___audio-1
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;

audio, video {
  border: 1px solid black;
}
```

{{ EmbedLiveSample('audio-1', "100%", 150) }}

<details>
<summary>按一下此處以顯示解決方案</summary>

完成後的 HTML 應該是這樣的：

```html
<h1>Basic audio embed</h1>

<audio
  controls
  src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3">
  <p>
    Your browser doesn't support HTML audio.
    <a
      href="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3"
      >Download the track here</a
    >
    instead.
  </p>
</audio>
```

</details>

> [!NOTE]
> [下載此測驗的程式碼](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html)在你自己的編輯器或線上編輯器中運行。

## 任務 2

在此測驗中，我們希望你標記一個稍微複雜一些的影片播放器，此外還具有多個來源、字幕和其他功能。你需要：

- 添加屬性以使瀏覽器顯示一些預設控制選項。
- 為不支援的 `<video>` 的瀏覽器添加一些適當的備註。
- 添加多個源，其中包含視頻文件的路徑。這些文件稱為 `video.mp4` 和 `video.webm`，並且位於以下路徑中：
  - `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4`
  - `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm`
- 讓瀏覽器提前知道影片來源的影片格式，以便可以提前選擇要下載的影片。
- 給予 `<video>` 寬度和高度等於固定大小（320 x 240 像素）。
- 使影片默認為靜音。
- 顯示包含在 `media` 資料夾，在一個名為 `https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt` 的文檔中，当播放視頻時，你必須將類型明確設置為字幕，並且字幕語言為英語。

```html live-sample___video-1
<h1>Video embed</h1>

<video></video>
```

{{EmbedLiveSample('video-1', "100%", 300)}}

<details>
<summary>按一下此處以顯示解決方案</summary>

完成後的 HTML 應該是這樣的：

```html
<h1>Video embed</h1>

<video controls width="320" height="240" muted>
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4"
    type="video/mp4" />
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm"
    type="video/webm" />
  <track
    kind="subtitles"
    src="https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt"
    srclang="en"
    label="English" />
  <p>
    Your browser doesn't support HTML video.
    <a
      href="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4">
      Download the track here
    </a>
    instead.
  </p>
</video>
```

</details>

> [!NOTE]
> [下載此測驗的程式碼](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html)在你自己的編輯器或線上編輯器中運行。
