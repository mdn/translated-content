---
title: <audio>：嵌入音訊元素
slug: Web/HTML/Element/audio
---

{{HTMLSidebar}}

**`<audio>`** [HTML](/zh-TW/docs/Web/HTML) 元素是用來在文件中嵌入音訊內容。它可以包含一個或多個音訊來源，使用 `src` 屬性或 {{HTMLElement("source")}} 元素來表示：瀏覽器將選擇最適合的音訊來源。它還可以是串流媒體的目的地，使用 {{domxref("MediaStream")}}。

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

上面的範例展示了 `<audio>` 元素的簡單用法。與 {{htmlelement("img")}} 元素類似，我們在 `src` 屬性中包含要嵌入的媒體的路徑；我們可以包含其他屬性來指定信息，例如我們是否要自動播放和循環播放，是否要顯示瀏覽器的默認音訊控制項等。

在開始與結束的 `<audio></audio>` 標籤中的內容將作為在不支援該元素的瀏覽器中的回退顯示。

## 屬性

此元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `autoplay`

  - : 一個布林屬性：如果指定，音訊將會在能夠開始播放時自動開始播放，而不需要等待整個音訊文件下載完成。

    > [!NOTE]
    > 自動播放音訊（或帶有音訊軌道的影片）的網站對用戶來說可能是一種不愉快的體驗，因此應盡可能避免。如果必須提供自動播放功能，你應該使其成為選擇加入的（需要用戶明確啟用）。然而，在創建源將在稍後由用戶控制的媒體元素時，這可能很有用。有關如何正確使用自動播放的其他信息，請參見我們的[自動播放指南](/zh-TW/docs/Web/Media/Guides/Autoplay)。

- `controls`

  - : 如果存在此屬性，瀏覽器將提供控件，允許用戶控制音訊播放，包括音量、搜索和暫停/恢復播放。

- `controlslist`

  - : 當指定此屬性時，該 [`controlslist`](https://wicg.github.io/controls-list/explainer.html) 屬性將幫助瀏覽器選擇在瀏覽器顯示自己的一組控件時（即，當指定了 `controls` 屬性時）為 `audio` 元素顯示什麼控件。

    允許的值包括 `nodownload`、`nofullscreen` 和 `noremoteplayback`。

- `crossorigin`

  - : 此[列舉](/zh-TW/docs/Glossary/Enumerated)屬性指示是否使用 CORS 來獲取相關音訊文件。[啟用 CORS 的資源](/zh-TW/docs/Web/HTML/CORS_enabled_image)可以在 {{HTMLElement("canvas")}} 元素中重複使用而不會被*汙染*。允許的值有：

    - `anonymous`
      - : 發送沒有憑據的跨源請求。換句話說，它發送了沒有 cookie、X.509 憑證或執行 HTTP 基本身份驗證的 `Origin:` HTTP 標頭。如果伺服器沒有向源站提供憑證（通過不設置 `Access-Control-Allow-Origin:` HTTP 標頭），資源將是*汙染*的，並限制其使用。
    - `use-credentials`
      - : 使用憑證發送跨源請求。換句話說，它使用帶有 cookie、憑證或執行 HTTP 基本身份驗證的 `Origin:` HTTP 標頭。如果伺服器沒有向源站提供憑證（通過 `Access-Control-Allow-Credentials:` HTTP 標頭），資源將是*汙染*的，並限制其使用。

    當未指定時，該資源將不使用 CORS 請求進行提取（即不發送 `Origin:` HTTP 標頭），從而防止其在 {{HTMLElement('canvas')}} 元素中的非汙染使用。如果無效，則處理為使用列舉關鍵字 **anonymous**。有關其他信息，請參見 [CORS 設置屬性](/zh-TW/docs/Web/HTML/Attributes/crossorigin)。

- `disableremoteplayback`

  - : 一個布林屬性，用於禁用使用有線（HDMI、DVI 等）和無線技術（Miracast、Chromecast、DLNA、AirPlay 等）連接的設備的遠程播放功能。更多信息請參見[此提議的規範](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute)。

    在 Safari 中，你可以使用 [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) 作為回退。

- `loop`

  - : 一個布林屬性：如果指定，音訊播放器將在達到音訊結束時自動回到開頭。

- `muted`
  - : 一個布林屬性，指示音訊是否初始靜音。其默認值為 `false`。
- `preload`

  - : 此[列舉](/zh-TW/docs/Glossary/Enumerated)屬性旨在為瀏覽器提供有助於獲得最佳用戶體驗的提示。它可能具有以下值之一：

    - `none`：表示不應預先載入音訊。
    - `metadata`：表示僅應提取音訊後設資料（例如長度）。
    - `auto`：表示即使用戶不預期使用它，也可以下載整個音訊文件。
    - _空字符串_：`auto` 值的同義詞。

    默認值對於每個瀏覽器是不同的。規範建議將其設置為 `metadata`。

    > [!NOTE]
    >
    > - `autoplay` 屬性優先於 `preload`。如果指定了 `autoplay`，瀏覽器顯然需要開始下載音訊以進行播放。
    > - 規範並不強制要求瀏覽器遵循此屬性的值；它僅僅是一個提示。

- `src`
  - : 要嵌入的音訊的 URL。這受到 [HTTP 存取控制](/zh-TW/docs/Web/HTTP/CORS)的限制。這是可選的；你可以在音訊塊中使用 {{htmlelement("source")}} 元素來指定要嵌入的音訊。

## 事件

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">事件名稱</th>
      <th scope="col">觸發時機</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}}</td>
      <td>
        {{DOMxRef("ScriptProcessorNode")}} 的輸入緩衝區準備好進行處理。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
      </td>
      <td>
        瀏覽器可以播放媒體，但估計未加載足夠的數據以在不必停止進行進一步緩衝的情況下將媒體播放到結尾。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
      </td>
      <td>
        瀏覽器估計可以播放媒體直到結束，而無需停止進行內容緩衝。
      </td>
    </tr>
    <tr>
      <td>{{domxref("OfflineAudioContext/complete_event", "complete")}}</td>
      <td>
        {{DOMxRef("OfflineAudioContext")}} 的渲染結束。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
      </td>
      <td><code>duration</code> 屬性更新。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
      </td>
      <td>
        媒體變為空；例如，如果媒體已經加載（或部分加載），並且調用了 {{domxref("HTMLMediaElement.load")}} 方法來重新加載它，則會發送此事件。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ended_event", 'ended')}}
      </td>
      <td>播放停止，因為媒體已達到結尾。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>媒體的第一幀加載完成。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
      </td>
      <td>後設資料加載完成。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
      </td>
      <td>當瀏覽器開始加載資源時觸發。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.pause_event", 'pause')}}
      </td>
      <td>播放暫停。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.play_event", 'play')}}
      </td>
      <td>播放開始。</td>
    </tr>
    <tr>
      <td>
    {{domxref("HTMLMediaElement.playing_event", 'playing')}}
      </td>
      <td>在由於缺乏數據而暫停或延遲後，播放已準備就緒。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
      </td>
      <td>播放速率更改。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
      </td>
      <td>一個 <em>seek</em> 操作完成。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
      </td>
      <td>一個 <em>seek</em> 操作開始。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
      </td>
      <td>用戶代理正在嘗試獲取媒體數據，但數據意外地未到來。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
      </td>
      <td>媒體數據加載暫停。</td>
    </tr>
    <tr>
      <td>
    {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
      </td>
      <td><code>currentTime</code> 屬性所指示的時間更新。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
      </td>
      <td>音量更改。</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
      </td>
      <td>由於暫時缺乏數據，播放停止。</td>
    </tr>
  </tbody>
</table>

## 使用注意事項

不同的瀏覽器不支援相同的[檔案類型](/zh-TW/docs/Web/Media/Guides/Formats/Containers)和[音訊編解碼器](/zh-TW/docs/Web/Media/Guides/Formats/Audio_codecs)，你可以在嵌套的 {{htmlelement("source")}} 元素中提供多個來源，然後瀏覽器將使用它了解的第一個：

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Download <a href="myAudio.mp3" download="myAudio.mp3">MP3</a> or
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> audio.
  </p>
</audio>
```

我們提供了一個全面詳盡的[媒體檔案類型指南](/zh-TW/docs/Web/Media/Guides/Formats)和可以在其中使用的[音訊編解碼器](/zh-TW/docs/Web/Media/Guides/Formats/Audio_codecs)。還提供了一個關於支援的影片編解碼器的指南。

其他使用注意事項：

- 如果你沒有指定 `controls` 屬性，則音訊播放器將不包括瀏覽器的默認控制項。但是，你可以使用 JavaScript 和 {{domxref("HTMLMediaElement")}} API 創建自己的自定義控制項。
- 為了對音訊內容進行精確控制，`HTMLMediaElement` 會觸發許多不同的[事件](/zh-TW/docs/Web/API/HTMLMediaElement#events)。這也提供了一種監視音訊提取過程的方式，以便你可以查看錯誤或檢測何時可以開始播放或操作它的數據量。
- 你還可以使用 [Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API) 直接從 JavaScript 代碼生成和操作音訊流，而不是流式媒體現有的音訊檔案。
- `<audio>` 元素無法像 `<video>` 元素那樣與字幕或標題關聯。有關一些有用的信息和解決方法，請參見 Ian Devlin 的 [WebVTT 和音訊](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/)。
- 為了測試在支援該元素的瀏覽器中的回退內容，你可以將 `<audio>` 替換為一個不存在的元素，例如 `<notanaudio>`。

有關使用 HTML `<audio>` 的一般信息，請參見初學者教程[影片和音訊內容](/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)。

### 使用 CSS 進行樣式設定

除非指定了 `controls` 屬性，否則 `<audio>` 元素本身沒有內在的視覺輸出；在這種情況下，將顯示瀏覽器的默認控制項。

默認控制項的 {{cssxref("display")}} 屬性默認為 `inline`，通常最好將其值設置為 `block`，以提高對定位和布局的控制，除非你希望其置於文本塊或類似的內容中。

你可以使用影響整個區塊的屬性來設置默認控制項的樣式，例如可以給它設置 {{cssxref("border")}} 和 {{cssxref("border-radius")}}、{{cssxref("padding")}}、{{cssxref("margin")}} 等。但是，你無法設置音訊播放器內的個別組件的樣式（例如更改按鈕大小或圖標，更改字體等），且不同瀏覽器的控制項不同。

為了在各種瀏覽器中獲得一致的外觀和感覺，你需要創建自定義控制項；這些可以以你想要的方式標記和設置樣式，然後可以使用 JavaScript 和 {{domxref("HTMLMediaElement")}} API 來連接其功能。

[影片播放器樣式基礎知識](/zh-TW/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)提供了一些有用的樣式技巧——雖然它是在 `<video>` 的上下文中撰寫的，但其中的許多內容同樣適用於 `<audio>`。

### 檢測音軌的添加和移除

你可以使用 {{domxref("AudioTrackList/addtrack_event", "addtrack")}} 和 {{domxref("AudioTrackList/removetrack_event", "removetrack")}} 事件檢測音軌何時添加到和從 `<audio>` 元素中移除。但是，這些事件並不直接發送到 `<audio>` 元素本身。相反，它們被發送到與添加到元素中的音軌類型相對應的 `<audio>` 元素的 {{domxref("HTMLMediaElement")}} 內的軌道列表對象相關：

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : 包含媒體元素的所有音軌的 {{domxref("AudioTrackList")}}。你可以對此對象添加 `addtrack` 監聽器，以在向元素添加新音軌時收到通知。
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : 對此 {{domxref("VideoTrackList")}} 對象添加 `addtrack` 監聽器，以在向元素添加影片軌時收到通知。
- {{domxref("HTMLMediaElement.textTracks")}}
  - : 對此 {{domxref("TextTrackList")}} 添加 `addtrack` 事件監聽器，以在向元素添加新文本軌時收到通知。

> [!NOTE]
> 即使它是一個 `<audio>` 元素，它仍然具有影片和文本軌道列表，實際上可以用來呈現影片，雖然用戶界面的影響可能有些奇怪。

例如，要檢測音軌何時添加到或從 `<audio>` 元素中移除，你可以使用以下代碼：

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

這段程式碼監聽音軌添加到元素中，以及從元素中移除，並呼叫一個假想的函式來在軌道編輯器中註冊和移除軌道，以更新編輯器中的可用軌道清單。

你也可以使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 監聽 {{domxref("AudioTrackList/addtrack_event", "addtrack")}} 和 {{domxref("AudioTrackList/removetrack_event", "removetrack")}} 事件。

## 範例

### 基本用法

以下範例展示了 `<audio>` 元素簡單使用來播放一個 OGG 檔案。由於 `autoplay` 屬性，它將自動播放——如果網頁有權限進行的話並且還包括回退內容。

```html
<!-- Simple audio playback -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

有關何時可以使用自動播放、如何取得使用自動播放的權限，以及使用自動播放的適當時機，請參見我們的[自動播放指南](/zh-TW/docs/Web/Media/Guides/Autoplay)。

### \<audio> 元素與 \<source> 元素

此範例使用嵌套的 `<source>` 元素的 `src` 屬性來指定要嵌入的音訊軌，而不是直接在 `<audio>` 元素上指定。將檔案的 MIME 類型包含在 `type` 屬性中始終是有用的，因為瀏覽器能夠立即辨識是否可以播放該檔案，並且如果不能播放該檔案，就不會浪費時間。

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Download WAV audio</a>.
</audio>
```

### \<audio> 具有多個 \<source> 元素

此範例包含多個 `<source>` 元素。如果瀏覽器能夠播放第一個源元素（Opus），則會嘗試加載它；如果不能播放，則回退到第二個（Vorbis），最後回退到 MP3：

```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

## 可及性考量

具有口語對話的音訊應提供準確描述其內容的字幕和文字記錄。字幕使用 [WebVTT](/zh-TW/docs/Web/API/WebVTT_API) 指定，允許聽力受損的人在播放音訊時理解錄音的內容，而文字記錄則允許需要額外時間來審查錄音內容的人以他們舒適的速度和格式審查錄音的內容。

如果使用自動字幕服務，重要的是要審查生成的內容，以確保其準確地代表了源音訊。

`<audio>` 元素並不直接支援 WebVTT。你將不得不找到一個提供該功能的庫或框架，或者自己編寫代碼來顯示字幕。一個選擇是使用 {{HTMLElement("video")}} 元素播放音訊，它支援 WebVTT。

除了口語對話外，字幕和文字記錄還應該識別傳達重要信息的音樂和音效。這包括情感和語調。例如，在下面的 WebVTT 中，請注意使用方括號來為觀眾提供語氣和情感上的洞察；這可以幫助建立通過音樂、非語言聲音和關鍵音效等方式提供的情緒。同時，對於在不支援 `<audio>` 元素的瀏覽器上觀看的觀眾，提供一些內容（例如直接下載連結）也是一種良好的做法：

```plain
1
00:00:00 --> 00:00:45
[Energetic techno music]

2
00:00:46 --> 00:00:51
Welcome to the Time Keeper's podcast! In this episode we're discussing which Swisswatch is a wrist switchwatch?

16
00:00:52 --> 00:01:02
[Laughing] Sorry! I mean, which wristwatch is a Swiss wristwatch?
```

另外，為了在不支援 `<audio>` 元素的瀏覽器中提供備用內容（例如直接下載鏈接），這是一個好的做法：

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Download <a href="myAudio.mp3">MP3</a> or
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a> audio.
  </p>
</audio>
```

- [Web Video Text Tracks Format (WebVTT)](/zh-TW/docs/Web/API/WebVTT_API)
- [WebAIM：字幕、文字記錄和音訊描述](https://webaim.org/techniques/captions/)
- [MDN 理解 WCAG，指南 1.2 說明](/zh-TW/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [理解成功標準 1.2.1 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [理解成功標準 1.2.2 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、段落型內容、嵌入型內容。如果有
      <a href="#controls"><code>controls</code></a> 屬性：互動型內容和捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        如果元素有一個 <a href="#src"><code>src</code></a>
        屬性：零個或多個 {{HTMLElement("track")}} 元素，並包含不包含 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 媒體元素的透明型內容。<br />否則：零個或多個 {{HTMLElement("source")}} 元素，零個或多個 {{HTMLElement("track")}} 元素，並包含不包含 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 媒體元素的透明內容。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>接受嵌入型內容的任何元素。</td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLAudioElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Web 媒體技術](/zh-TW/docs/Web/Media)

  - [媒體容器格式（檔案類型）](/zh-TW/docs/Web/Media/Guides/Formats/Containers)
  - [網頁上使用的音訊編解碼器指南](/zh-TW/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API)
- {{domxref("HTMLAudioElement")}}
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [學習區域：視訊和音訊內容](/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [跨瀏覽器音訊基礎知識](/zh-TW/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
