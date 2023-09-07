---
title: Media container formats (file types)
slug: Web/Media/Formats/Containers
---

{{QuickLinksWithSubpages("/zh-TW/docs/Web/Media")}}

視訊與音訊的檔案格式被定義成兩個部分（當然如果一個檔案同時擁有影、音的話，那就有三個）：一個是音訊或/和視訊的編解碼器(codecs，由 compress 和 decompress 所組成的詞語)，另一個是媒體封裝的格式(media container format，即檔案類型)。在本次導覽中，我們將會看到網路上最常見的封裝格式，並介紹它們的基本規格、優點、限制，以及理想的使用情形。

[網頁即時通訊(WebRTC)](/zh-TW/docs/Web/API/WebRTC_API)並不採用容器(container)，而是以 {{domxref("MediaStreamTrack")}} 物件來表示編碼過的影軌和音軌(一個物件表示一種媒體軌)，直接從一端串流到另一端。你可以參閱 [WebRTC 使用的編解碼器](/zh-TW/docs/Web/Media/Formats/WebRTC_codecs)來了解進行 WebRTC 時常用的編解碼器，以及瀏覽器對它們的相容性。

## 常見的封裝格式

世上的媒體封裝格式多如牛毛，所以我們在這裡僅列出你最有機會遇到的幾種，其中有的只支援音訊，有的影音都支援。我們也會列出它們各自的媒體類型(MIME type)和副檔名(extension)。網路上最常見的封裝容器有 MPEG-4 (MP4)、QuickTime Movie (MOV)，以及 Wavefile Audio File Format (WAV)。當然你也可能會遇到如 MP3、Ogg、WebM、AVI 等其他格式，但不是所有瀏覽器都支援它們就是了。為了方便起見，同時也是因為它們實在太常見了，有些封裝容器與編解碼器的組合會有專屬它們的副檔名跟媒體類型。好比說，只有一個 Opus 音軌的 Ogg 檔通常會被稱為 Opus 檔，它有自己的副檔名 `.opus`，但它其實還是一個 Ogg 檔。

由於特定的編解碼器通常會放在特定的封裝容器裡，所以這樣的組合會被特別看待，比方說 MP3 音訊檔就是一個很好的例子，它是由 MPEG-1 封裝容器與一個以 MPEG-1 Audio Layer III encoding 編碼過的音軌所組成，這種檔案使用 `audio/mp3` 作為媒體類型；`.mp3` 作為副檔名，即便它的封裝容器不過就是 MPEG 罷了。

### 索引

點擊列表中你想知道的封裝格式，即會將你傳送到該項目的細節內容，其中包含它的用途、它支援的編解碼器、支援它的瀏覽器等等。

| 編解碼器名(縮寫)              | 完整編解碼器名                         | 瀏覽器相容性[1](#index-foot-1)                                                                    |
| ----------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [3GP](#3gp)                   | Third Generation Partnership           | Firefox for Android                                                                               |
| [ADTS](#adts)                 | Audio Data Transport Stream            | Firefox[2](#index-foot-2)                                                                         |
| [FLAC](#flac)                 | Free Lossless Audio Codec              | Chrome 56, Edge 16, Firefox 51, Safari 11                                                         |
| [MPEG / MPEG-2](#mpegmpeg-2)  | Moving Picture Experts Group (1 and 2) | —                                                                                                 |
| [MPEG-4 (MP4)](#mpeg-4_mp4)   | Moving Picture Experts Group 4         | Chrome 3, Edge 12, Firefox, Internet Explorer 9, Opera 24, Safari 3.1                             |
| [Ogg](#ogg)                   | Ogg                                    | Chrome 3, Firefox 3.5, Edge 17[3](#index-foot-3) (desktop only), Internet Explorer 9, Opera 10.50 |
| [QuickTime (MOV)](#quicktime) | Apple QuickTime movie                  | 只有舊版的 Safari 和其他支援 Apple 的 QuickTime plugin 的瀏覽器                                   |
| [WebM](#webm)                 | Web Media                              | Chrome 6, Edge 17[3](#index-foot-3) (desktop only), Firefox 4, Opera 10.6, Safari (WebRTC only)   |

<a id="index-foot-1" name="index-foot-1">[1]</a> 除非特別說明，否則表中提及的瀏覽器包含其行動版與桌面版。此外「支援」指的是針對封裝容器本身，而非特定的編解碼器。

<a id="index-foot-2" name="index-foot-2">[2]</a> 只在作業系統底層的媒體框架(media framework)有支援時才有。

<a name="index-foot-3">[3]</a> 需要安裝[網路媒體延伸模組](https://www.microsoft.com/store/productId/9N5TDP8VCMHS)。

### 3GP

**3GP** 或 **3GPP** 是用來封裝音訊和/或視訊的媒體容器，它服務的對象是透過行動網路(cellular network)進行傳輸的行動裝置。雖然這個格式是為了 3G 行動電話設計的，但現代的手機與網路還是可以使用它。話雖如此，由於現今的網路有更大的頻寬和更為寬鬆的公平使用原則(data caps)，所以現在 3GP 格式也不是那麼需要了，只有較慢的網路和較差的手機才會使用這種格式。

這個媒體封裝格式衍生自 ISO Base Media File Format 和 MPEG-4，特別針對低頻寬的情形做了最佳化。

| 音訊          | 視訊          |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

上表是基本的 3GP 媒體型態，依照使用的編解碼器的不同，可能還會有其他型態。此外，你可以在媒體型態字串中[添加 `codecs` 參數](/zh-TW/docs/Web/Media/Formats/codecs_parameter#ISO-BMFF)來指明你的音軌和/或影軌所採用的編解碼器，也可以提供 組態(profile)、層級(level)等其他編解碼器的配置細節。

<table class="standard-table">
  <caption>
    3GP 支援的視訊編解碼器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">編解碼器</th>
      <th colspan="4" scope="col" style="text-align: center">支援的瀏覽器</th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup
          ><a href="#3gp-vid-footnote-1">1</a>,<a href="#3gp-vid-footnote-1"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 (MP4v-es)</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

<a id="3gp-vid-footnote-1" name="3gp-vid-footnote-1">[1]</a> Firefox 只在基於 [OpenMAX](https://www.khronos.org/openmax/) 的裝置上支援 3GP，以目前的情況來看就是 Boot to Gecko (B2G) 平台.

<a id="3gp-vid-footnote-2" name="3gp-vid-footnote-2">[2]</a> Firefox 支援 H.264 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

<table class="standard-table">
  <caption>
    3GP 支援的音訊編解碼器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">編解碼器</th>
      <th colspan="4" scope="col" style="text-align: center">支援的瀏覽器</th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AMR-NB</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB+</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AAC-LC</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup
          ><a href="#3gp-aud-footnote-1">1</a>,<a href="#av1-vid-footnote-2"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v1</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup
          ><a href="#3gp-aud-footnote-1">1</a>,<a href="#av1-vid-footnote-2"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v2</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup
          ><a href="#3gp-aud-footnote-1">1</a>,<a href="#av1-vid-footnote-2"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

<a id="3gp-aud-footnote-1" name="3gp-aud-footnote-1">[1]</a> Firefox 只在基於 [OpenMAX](https://www.khronos.org/openmax/) 的裝置上支援 3GP，以目前的情況來看就是 Boot to Gecko (B2G) 平台.

<a id="3gp-aud-footnote-2" name="3gp-aud-footnote-2">[2]</a> Firefox 支援 AAC 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

### ADTS

**Audio Data Transport Stream** (**ADTS**) 是 MPEG-4 Part 3 為音訊資料所訂定的封裝格式，著眼於音訊串流，如網路電台。它基本上是一個空的 AAC 音訊資料串流，由 ADTS 幀(frame)和一個很小的 header 組成。

| 音訊                              |
| --------------------------------- |
| `audio/aac`[\[1\]](#adts-foot-1)  |
| `audio/mpeg`[\[1\]](#adts-foot-1) |

<a id="adts-foot-1" name="adts-foot-1">[1]</a> ADTS 使用哪個媒體型態依它使用的音訊幀(audio frame)而定。如果它使用 ADTS 幀，其媒體型態為 `audio/aac`；如果它使用 MPEG-1/MPEG-2 Audio Layer I, II, or III 格式的音訊幀，它的媒體型態為 `audio/mpeg`。

<table class="standard-table">
  <caption>
    ADTS 支援的音訊編解碼器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">編解碼器</th>
      <th colspan="4" scope="col" style="text-align: center">支援的瀏覽器</th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#adts-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

<a id="adts-aud-footnote-1" name="adts-aud-footnote-1">[1]</a> Firefox 支援 AAC 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

### FLAC

**Free Lossless Audio Codec** (**FLAC**) 是一個無損的音訊編解碼器，它有一個相關的精簡音訊封裝格式，也叫做 FLAC，這個格式不受任何專利約束，因此你可以安心地使用它。FLAC 檔只能用來封裝 FLAC 音訊資料。

| 音訊                    |
| ----------------------- |
| `audio/flac`            |
| `audio/x-flac` (非標準) |

<table class="standard-table">
  <caption>
    FLAC 支援的音訊編解碼器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">編解碼器</th>
      <th colspan="4" scope="col" style="text-align: center">支援的瀏覽器</th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG/MPEG-2

**[MPEG-1](https://zh.wikipedia.org/wiki/MPEG-1)** 和 **[MPEG-2](https://zh.wikipedia.org/wiki/MPEG-2)** 基本上是相同的。這兩個格式由 Moving Picture Experts Group (MPEG) 創造，廣泛用於實體媒體上，如 DVD 媒體所用的視訊格式。

在網路上最常用來封裝音訊資料的 MPEG 檔案格式可能是 [Layer_III/MP3](https://zh.wikipedia.org/wiki/MPEG-1)。也正是因為 MP3 檔被世界各地的數位音樂裝置使用，MPEG-1 和 MPEG-2 才能如此廣泛地應用於網路內容中。

MPEG-1 和 MPEG-2 最主要的差別在於媒體資料格式而非封裝格式。MPEG-1 首見於西元 1992 年；而 MPEG-2 則出現在西元 1996 年。

| 音訊         | 視訊         |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<table class="standard-table">
  <caption>
    MPEG-1 與 MPEG-2 支援的視訊編解碼器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">編解碼器</th>
      <th colspan="4" scope="col" style="text-align: center">支援的瀏覽器</th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Part 2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2 Part 2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    MPEG-1 與 MPEG-2 支援的音訊編解碼器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">編解碼器</th>
      <th colspan="4" scope="col" style="text-align: center">支援的瀏覽器</th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Audio Layer I</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer II</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG-4 (MP4)

**[MPEG-4](https://zh.wikipedia.org/wiki/MPEG-4)** (**MP4**) 是最新版 MPEG 檔案格式。這個格式有兩種版本，分別定義於規範中的 part 1 和 part 14。MP4 是現今流行的封裝容器，它支援了大部份常用的編解碼器，同時它也廣泛地被支援。

初版的 MPEG-4 Part 1 檔案格式首見於西元 1999 年；第二版定義於 Part 14 在西元 2003 年時加入。MP4 檔案格式衍生於 [ISO base media file format](https://zh.wikipedia.org/wiki/ISO_base_media_file_format)，而該格式則是衍生於 [Apple](https://www.apple.com/) 開發的 [QuickTime file format](https://zh.wikipedia.org/wiki/QuickTime_file_format)。

| 音訊        | 視訊        |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

上表是基本的 MPEG-4 媒體型態，依照使用的編解碼器的不同，可能還會有其他型態。此外，當指出 MPEG-4 媒體型態時 (`audio/mp4` 或 `video/mp4`)，你可以在媒體型態字串中[加上 `codecs` 參數](/zh-TW/docs/Web/Media/Formats/codecs_parameter#ISO-BMFF)來指明你的音軌和/或影軌所採用的編解碼器，也可以提供組態(profile)、層級(level)等其他編解碼器的配置細節。

<table class="standard-table">
  <caption>
    MPEG-4 支援的視訊編解碼器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">編解碼器</th>
      <th colspan="4" scope="col" style="text-align: center">支援的瀏覽器</th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#mp4-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AV1</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#mp4-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

<a id="mp4-vid-footnote-1" name="mp4-vid-footnote-1">[1]</a> Firefox 支援 H.264 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

<a id="mp4-vid-footnote-2" name="mp4-vid-footnote-2">[2]</a> Firefox 目前對 AV1 的支援預設是關閉的，它可以透過在偏好設定中將 `media.av1.enabled` 設定為 `true` 來開啟。

<table class="standard-table">
  <caption>
    MPEG-4 支援的音訊編解碼器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">編解碼器</th>
      <th colspan="4" scope="col" style="text-align: center">支援的瀏覽器</th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#mp4-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

<a id="mp4-aud-footnote-1" name="mp4-aud-footnote-1">[1]</a> Firefox 支援 H.264 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

### Ogg

The **[Ogg](https://zh.wikipedia.org/wiki/Ogg)** container format is a free and open format maintained by the [Xiph.org Foundation](https://www.xiph.org/). The Ogg framework also defines patent unencumbered media data formats, such as the Theora video codec and the Vorbis and Opus audio codecs. [Xiph.org documents about the Ogg format](https://xiph.org/ogg/) are available on their web site.

While Ogg has been around for a long time, it has never gained the wide support needed to make it a good first choice for a media container. You are typically better off using WebM, though there are times when Ogg is useful to offer, such as when you wish to support older versions of Firefox and Chrome which don't yet support WebM. For example, Firefox 3.5 and 3.6 support Ogg, but not WebM.

You can get more information about Ogg and its codecs in the [Theora Cookbook](http://en.flossmanuals.net/ogg-theora/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

The `application/ogg` MIME type can be used when you don't necessarily know whether the media contains audio or video. If at all possible, you should use one of the specific types, but fall back to `application/ogg` if you don't know the content format or formats.

You can also [add the `codecs` parameter](/zh-TW/docs/Web/Media/Formats/codecs_parameter#Ogg) to the MIME type string to indicate which codecs are used for the audio and/or video tracks, and to optionally further describe the track media formats.

<table class="standard-table">
  <caption>
    Video codecs supported by Ogg
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Theora</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Audio codecs supported by Ogg
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

### QuickTime

The **QuickTime** file format (**QTFF**, **QT**, or **MOV**) was created by Apple for use by its media framework of the same name. The extension for these files, `.mov`, comes from the fact that the format was initially used for movies and was usually called the "QuickTime movie" format. While QTFF served as the basis for the MPEG-4 file format, there are differences and the two are not quite interchangeable.

QuickTime files support any sort of time-based data, including audio and video media, text tracks, and so forth. QuickTime files are primarily supported by macOS, but for a number of years, QuickTime for Windows was available to access them on Windows. However, QuickTime for Windows is no longer supported by Apple as of early 2016, and _should not be used_, as there are known security concerns. However, Windows Media Player now has integrated support for QuickTime version 2.0 and earlier files; support for later versions of QuickTime requires third-party additions.

On Mac OS, the QuickTime framework not only supported QuickTime format movie files and codecs, but supported a vast array of popular and specialty audio and video codecs, as well as still image formats. Through QuickTime, Mac applications (including web browsers, through the QuickTime plugin or direct QuickTime integration) were able to read and write audio formats including AAC, AIFF, MP3, PCM, and Qualcomm PureVoice; and video formats including AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 through H.265, MJPEG, MPEG-1 and MPEG-4 Part 2, Sorenson, and many more.

In addition, a number of third-party components are available for QuickTime, some of which add support for additional codecs.

Because QuickTime support is, for all intents and purposes, primarily available on Apple devices, it is no longer widely used on the internet. Apple itself generally now uses MP4 for video. In addition, the QuickTime framework has been deprecated on the Mac for some time, and is no longer available at all starting in macOS 10.15 Catalina.

| Video             |
| ----------------- |
| `video/quicktime` |

The `video/quicktime` MIME type is the fundamental type for the QuickTime media container. It's worth noting that QuickTime (the media framework on Mac operating systems) supports a wide variety of containers and codecs, so it actually supports many other MIME types.

You can [add the `codecs` parameter](/zh-TW/docs/Web/Media/Formats/codecs_parameter#ISO-BMFF) to the MIME type string to indicate which codecs are used for the audio and/or video tracks, and to optionally provide details about the profile, level, and/or other codec configuration specifics.

<table class="standard-table">
  <caption>
    Video codecs supported by QuickTime
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Cinepak</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Component Video</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">DV</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.261</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Motion JPEG</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 3</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Audio codecs supported by QuickTime
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ALaw 2:1</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Apple Lossless (ALAC)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Microsoft ADPCM</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law 2:1 (u-Law)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

### <a id="WAVE" name="WAVE">WAVE</a> (WAV)

The **Waveform Audio File Format** (**WAVE**), usually referred to simply as WAV due to its filename extension being `.wav`, is a format developed by Microsoft and IBM to store audio bitstream data.

It is derived from the Resource Interchange File Format (RIFF), and as such is similar to other formats such as Apple's AIFF. The WAV codec registry can be found at {{RFC(2361)}}; however, because nearly all WAV files use linear PCM, support for the other codecs is sparse.

The WAVE format was first released in 1991.

| Audio                         |
| ----------------------------- |
| `audio/wave`[1](#wave-foot-1) |
| `audio/wav`                   |
| `audio/x-wav`                 |
| `audio/x-pn-wav`              |

<a id="wave-foot-1" name="wave-foot-1">[1]</a> The `audio/wave` MIME type is the standard type, and is preferred; however, the others have been used by various products over the years and may be used as well in some environments.

<table class="standard-table">
  <caption>
    Audio codecs supported by WAVE
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ADPCM (Adaptive Differential Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">GSM 06.10</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">LPCM (Linear Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law (u-Law)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

**[WebM](https://zh.wikipedia.org/wiki/WebM)** (**Web Media**) is a format based on [Matroska](https://zh.wikipedia.org/wiki/Matroska) which is designed specifically for use in modern web environments. It's based entirely on free and open technologies and primarily uses codecs that are in turn free and open, although some products support other codecs in WebM containers as well.

WebM was first introduced in 2010 and is now widely supported. Compliant implementations of WebM are required to support the VP8 and VP8 video codecs and the Theora and Opus audio codecs. The WebM container format and its required codecs are all available under open licenses. Any other codecs may require a license to use.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<table class="standard-table">
  <caption>
    Video codecs supported by WebM
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AV1</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>
        Yes<sup><a href="#av1-vid-footnote-1">1</a></sup>
      </td>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

<a id="av1-vid-footnote-1" name="av1-vid-footnote-1">[1]</a> Firefox support for AV1 was added to macOS in Firefox 66; for Windows in Firefox 67; and Firefox 68 on Linux. Firefox for Android does not yet support AV1; the implementation in Firefox is designed to use a secure process, which is not supported yet in Android.

<table class="standard-table">
  <caption>
    Audio codecs supported by WebM
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Opus</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Choosing the right container

There are a few factors to consider when selecting the best container or containers to use for your media. The relative importance of each will depend on your needs, your license requirements, and the compatibility requirements of your target audience.

### Guidelines

The best choice also depends on what you'll be doing with the media. Playing back media is a different thing than recording and/or editing it. If you're going to be manipulating the media data, using an uncompressed format can improve performance, while using a lossless compressed format at least prevent the accumulation of noise as compression artifacts are multiplied with each re-compression that occurs.

- If your target audience is likely to include users on mobile, especially on lower-end devices or on slow networks, consider providing a version of your media in a 3GP container with appropriate compression.
- If you have any specific encoding requirements, make sure the container you choose supports the appropriate codecs.
- If you want your media to be in a non-proprietary, open format, consider using one of the open container formats such as FLAC (for audio) or WebM (for video).
- If for any reason you are only able to provide media in a single format, choose a format that's available on the broadest selection of devices and browsers, such as MP3 (for audio) or MP4 (for video and/or audio).
- If your media is audio-only, choosing an audio-only container format likely makes sense. Now that the patents have all expired, MP3 is a widely supported and good choice. WAVE is good but uncompressed, so be aware of that before using it for large audio samples. FLAC is a very good choice, due to its lossless compression, if the target browsers all support it.

Unfortunately, neither of the relatively major lossless compression formats (FLAC and ALAC) are universally supported. FLAC is the more broadly supported of the two, but is not supported by macOS without additional software installed, and is not supported at all on iOS. If you need to offer lossless audio, you may need to provide both FLAC and ALAC to get close to universal compatibility.

### Container selection advice

The tables below offer suggested containers to use in various scenarios. These are just suggestions. Be sure to consider the needs of your application and your organization before selecting a container format.

#### Audio-only files

| If you need...                                | Consider using this container format |
| --------------------------------------------- | ------------------------------------ |
| Compressed files for general-purpose playback | MP3 (MPEG-1 Audio Layer III)         |
| Losslessly compressed files                   | FLAC with ALAC fallback              |
| Uncompressed files                            | WAV                                  |

Now that MP3's patents have all expired, the choice of audio file format has become much easier to make. It's no longer necessary to choose between MP3's broad compatibility and the need to pay royalties when using it.

#### Video files

| If you need...                                      | Consider using this container format                |
| --------------------------------------------------- | --------------------------------------------------- |
| General purpose video, preferably in an open format | WebM (ideally with MP4 fallback)                    |
| General purpose video                               | MP4 (ideally with WebM or Ogg fallback)             |
| High compression optimized for slow connections     | 3GP (ideally with MP4 fallback)                     |
| Compatibility with older devices/browsers           | QuickTime (ideally with AVI and/or MPEG-2 fallback) |

These suggestions make a number of assumptions. You should carefully consider the options before making a final decision, especially if you have a lot of media that will need to be encoded.

## Maximizing compatibility with multiple containers

To optimize compatibility, it's worth considering providing more than one version of media files, using the {{HTMLElement("source")}} element to specify each source within the {{HTMLElement("audio")}} or {{HTMLElement("video")}} element. For example, you can offer an Ogg or WebM video as the first choice, with a fallback in MP4 format. You could even choose to offer a retro-like QuickTime or AVI fallback for good measure.

To do this, you create a `<video>` (or `<audio>`) element with no [`src`](/zh-TW/docs/Web/HTML/Element/video#src) attribute. Then add child {{HTMLElement("source")}} elements within the `<video>` element, one for each version of the video you offer. This can be used to offer various versions of a video that can be selected depending on bandwidth availability, but in our case, we'll use it to offer format options.

In the example shown here, a video is offered to the browser in two formats: WebM and MP4.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

The video is offered first in WebM format (with the [`type`](/zh-TW/docs/Web/HTML/Element/video#type) attribute set to `video/webm`). If the {{Glossary("user agent")}} can't play that, it moves on to the next option, whose `type` is specified as `video/mp4`. If neither of those can be played, the text "This browser does not support the HTML5 video element." is presented.

## Specifications

| Specification                                                                                                                                                | Comment                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Defines the 3GP container format                                                                                |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Defines MP4 audio including ADTS                                                                                |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | The FLAC format specification                                                                                   |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Defines the MPEG-1 container format                                                                             |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Defines the MPEG-2 container format                                                                             |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 file format)                                                                | Defines the MPEG-4 (MP4) version 2 container format                                                             |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Defines the original MPEG-4 (MP4) container format                                                              |
| {{RFC(3533)}}                                                                                                                                                | Defines the Ogg container format                                                                                |
| {{RFC(5334)}}                                                                                                                                                | Defines the Ogg media types and file extensions                                                                 |
| [QuickTime File Format Specification](https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFPreface/qtffPreface.html)                 | Defines the QuickTime movie (MOV) format                                                                        |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | The closest thing to an official WAVE specification                                                             |
| [Resource Interchange File Format](https://docs.microsoft.com/en-us/windows/desktop/xaudio2/resource-interchange-file-format--riff-) (used by WAV)           | Defines the RIFF format; WAVE files are a form of RIFF                                                          |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Guide for adapting Matroska for WebM                                                                            |
| [Matroska Specifications](https://matroska.org/technical/specs/index.html)                                                                                   | The specification for the Matroska container format upon which WebM is based                                    |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM byte stream format for use with [Media Source Extensions](/zh-TW/docs/Web/API/Media_Source_Extensions_API) |

## Browser compatibility

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">
        Container format name
      </th>
      <th
        colspan="3"
        rowspan="1"
        scope="col"
        style="text-align: center; border-right: 2px solid #d4dde4"
      >
        Audio
      </th>
      <th colspan="3" rowspan="1" scope="col" style="text-align: center">
        Video
      </th>
    </tr>
    <tr>
      <th scope="col" style="vertical-align: bottom">MIME type</th>
      <th scope="col" style="vertical-align: bottom">Extension(s)</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        Browser support
      </th>
      <th scope="col" style="vertical-align: bottom">MIME type</th>
      <th scope="col" style="vertical-align: bottom">Extension(s)</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        Browser support
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="vertical-align: bottom">3GP</th>
      <td style="vertical-align: top"><code>audio/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        ADTS (Audio Data Transport Stream)
      </th>
      <td style="vertical-align: top"><code>audio/aac</code></td>
      <td style="vertical-align: top"><code>.aac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">FLAC</th>
      <td style="vertical-align: top"><code>audio/flac</code></td>
      <td style="vertical-align: top"><code>.flac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: top">
        MPEG-1 / MPEG-2 (MPG or MPEG)
      </th>
      <td style="vertical-align: top"><code>audio/mpeg</code></td>
      <td style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td rowspan="2" style="vertical-align: top"><code>video/mpeg</code></td>
      <td rowspan="2" style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td rowspan="2" style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <td style="vertical-align: top"><code>audio/mp3</code></td>
      <td style="vertical-align: top"><code>.mp3</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">MPEG-4 (MP4)</th>
      <td style="vertical-align: top"><code>audio/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4a</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4v</code><br /><code>.m4p</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">Ogg</th>
      <td style="vertical-align: top"><code>audio/ogg</code></td>
      <td style="vertical-align: top">
        <code>.oga</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/ogg</code></td>
      <td style="vertical-align: top">
        <code>.ogv</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">QuickTime Movie (MOV)</th>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">—</td>
      <td style="vertical-align: top"><code>video/quicktime</code></td>
      <td style="vertical-align: top"><code>.mov</code></td>
      <td style="vertical-align: top">Safari</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WAV (Waveform Audiofile)</th>
      <td style="vertical-align: top"><code>audio/wav</code></td>
      <td style="vertical-align: top"><code>.wav</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WebM</th>
      <td style="vertical-align: top"><code>audio/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
  </tbody>
</table>

## See also

- [WebRTC API](/zh-TW/docs/Web/API/WebRTC_API)
- [MediaStream Recording API](/zh-TW/docs/Web/API/MediaStream_Recording_API)
- {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements
