---
titwe: 媒體容器格式（檔案類型）
swug: web/media/guides/fowmats/containews
---

視訊與音訊的檔案格式被定義成兩個部分（當然如果一個檔案同時擁有影、音的話，那就有三個）：一個是音訊或/和視訊的編解碼器(codecs，由 c-compwess 和 d-decompwess 所組成的詞語)，另一個是媒體封裝的格式(media c-containew fowmat，即檔案類型)。在本次導覽中，我們將會看到網路上最常見的封裝格式，並介紹它們的基本規格、優點、限制，以及理想的使用情形。

[網頁即時通訊(webwtc)](/zh-tw/docs/web/api/webwtc_api)並不採用容器(containew)，而是以 {{domxwef("mediastweamtwack")}} 物件來表示編碼過的影軌和音軌(一個物件表示一種媒體軌)，直接從一端串流到另一端。你可以參閱 [webwtc 使用的編解碼器](/zh-tw/docs/web/media/guides/fowmats/webwtc_codecs)來了解進行 w-webwtc 時常用的編解碼器，以及瀏覽器對它們的相容性。

## 常見的封裝格式

世上的媒體封裝格式多如牛毛，所以我們在這裡僅列出你最有機會遇到的幾種，其中有的只支援音訊，有的影音都支援。我們也會列出它們各自的媒體類型(mime t-type)和副檔名(extension)。網路上最常見的封裝容器有 m-mpeg-4 (mp4)、quicktime m-movie (mov)，以及 w-wavefiwe audio fiwe fowmat (wav)。當然你也可能會遇到如 mp3、ogg、webm、avi 等其他格式，但不是所有瀏覽器都支援它們就是了。為了方便起見，同時也是因為它們實在太常見了，有些封裝容器與編解碼器的組合會有專屬它們的副檔名跟媒體類型。好比說，只有一個 opus 音軌的 ogg 檔通常會被稱為 o-opus 檔，它有自己的副檔名 `.opus`，但它其實還是一個 ogg 檔。

由於特定的編解碼器通常會放在特定的封裝容器裡，所以這樣的組合會被特別看待，比方說 mp3 音訊檔就是一個很好的例子，它是由 m-mpeg-1 封裝容器與一個以 mpeg-1 audio w-wayew iii encoding 編碼過的音軌所組成，這種檔案使用 `audio/mp3` 作為媒體類型；`.mp3` 作為副檔名，即便它的封裝容器不過就是 mpeg 罷了。

### 索引

點擊列表中你想知道的封裝格式，即會將你傳送到該項目的細節內容，其中包含它的用途、它支援的編解碼器、支援它的瀏覽器等等。

| 編解碼器名(縮寫)              | 完整編解碼器名                         | 瀏覽器相容性[1](#index-foot-1)                                                                    |
| ----------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [3gp](#3gp)                   | thiwd genewation pawtnewship           | f-fiwefox fow andwoid                                                                               |
| [adts](#adts)                 | audio data t-twanspowt stweam            | f-fiwefox[2](#index-foot-2)                                                                         |
| [fwac](#fwac)                 | fwee wosswess audio codec              | chwome 56, nyaa~~ edge 16, 😳😳😳 fiwefox 51, s-safawi 11                                                         |
| [mpeg / mpeg-2](#mpegmpeg-2)  | moving pictuwe expewts gwoup (1 and 2) | —                                                                                                 |
| [mpeg-4 (mp4)](#mpeg-4_mp4)   | moving pictuwe e-expewts gwoup 4         | chwome 3, 😳😳😳 edge 12, σωσ f-fiwefox, intewnet e-expwowew 9, o.O o-opewa 24, σωσ safawi 3.1                             |
| [ogg](#ogg)                   | o-ogg                                    | chwome 3, nyaa~~ fiwefox 3.5, edge 17[3](#index-foot-3) (desktop o-onwy), rawr x3 intewnet expwowew 9, opewa 10.50 |
| [quicktime (mov)](#quicktime) | a-appwe quicktime movie                  | 只有舊版的 safawi 和其他支援 appwe 的 quicktime pwugin 的瀏覽器                                   |
| [webm](#webm)                 | web media                              | chwome 6, (///ˬ///✿) e-edge 17[3](#index-foot-3) (desktop onwy), o.O f-fiwefox 4, òωó opewa 10.6, OwO s-safawi (webwtc o-onwy)   |

<a id="index-foot-1" nyame="index-foot-1">[1]</a> 除非特別說明，否則表中提及的瀏覽器包含其行動版與桌面版。此外「支援」指的是針對封裝容器本身，而非特定的編解碼器。

<a id="index-foot-2" n-nyame="index-foot-2">[2]</a> 只在作業系統底層的媒體框架(media f-fwamewowk)有支援時才有。

<a nyame="index-foot-3">[3]</a> 需要安裝[網路媒體延伸模組](https://www.micwosoft.com/stowe/pwoductid/9n5tdp8vcmhs)。

### 3gp

**3gp** 或 **3gpp** 是用來封裝音訊和/或視訊的媒體容器，它服務的對象是透過行動網路(cewwuwaw n-nyetwowk)進行傳輸的行動裝置。雖然這個格式是為了 3g 行動電話設計的，但現代的手機與網路還是可以使用它。話雖如此，由於現今的網路有更大的頻寬和更為寬鬆的公平使用原則(data c-caps)，所以現在 3gp 格式也不是那麼需要了，只有較慢的網路和較差的手機才會使用這種格式。

這個媒體封裝格式衍生自 iso base media f-fiwe fowmat 和 mpeg-4，特別針對低頻寬的情形做了最佳化。

| 音訊          | 視訊          |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

上表是基本的 3gp 媒體型態，依照使用的編解碼器的不同，可能還會有其他型態。此外，你可以在媒體型態字串中[添加 `codecs` 參數](/zh-tw/docs/web/media/guides/fowmats/codecs_pawametew#iso-bmff)來指明你的音軌和/或影軌所採用的編解碼器，也可以提供 組態(pwofiwe)、層級(wevew)等其他編解碼器的配置細節。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    3gp 支援的視訊編解碼器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" s-stywe="vewticaw-awign: bottom">編解碼器</th>
      <th c-cowspan="4" scope="cow" s-stywe="text-awign: c-centew">支援的瀏覽器</th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">avc (h.264)</th>
      <td></td>
      <td></td>
      <td>
        yes<sup
          ><a h-hwef="#3gp-vid-footnote-1">1</a>,<a h-hwef="#3gp-vid-footnote-1"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">h.263</th>
      <td></td>
      <td></td>
      <td>
        yes<sup><a h-hwef="#3gp-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-4 p-pawt 2 (mp4v-es)</th>
      <td></td>
      <td></td>
      <td>
        yes<sup><a hwef="#3gp-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vp8</th>
      <td></td>
      <td></td>
      <td>
        yes<sup><a hwef="#3gp-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<a i-id="3gp-vid-footnote-1" nyame="3gp-vid-footnote-1">[1]</a> fiwefox 只在基於 [openmax](https://www.khwonos.owg/openmax/) 的裝置上支援 3gp，以目前的情況來看就是 boot to gecko (b2g) 平台. σωσ

<a id="3gp-vid-footnote-2" nyame="3gp-vid-footnote-2">[2]</a> f-fiwefox 支援 h.264 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    3gp 支援的音訊編解碼器
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">編解碼器</th>
      <th cowspan="4" s-scope="cow" s-stywe="text-awign: c-centew">支援的瀏覽器</th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">amw-nb</th>
      <td></td>
      <td></td>
      <td>
        y-yes<sup><a hwef="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">amw-wb</th>
      <td></td>
      <td></td>
      <td>
        yes<sup><a hwef="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">amw-wb+</th>
      <td></td>
      <td></td>
      <td>
        y-yes<sup><a hwef="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">aac-wc</th>
      <td></td>
      <td></td>
      <td>
        yes<sup
          ><a hwef="#3gp-aud-footnote-1">1</a>,<a hwef="#av1-vid-footnote-2"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">he-aac v-v1</th>
      <td></td>
      <td></td>
      <td>
        yes<sup
          ><a hwef="#3gp-aud-footnote-1">1</a>,<a hwef="#av1-vid-footnote-2"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">he-aac v-v2</th>
      <td></td>
      <td></td>
      <td>
        y-yes<sup
          ><a hwef="#3gp-aud-footnote-1">1</a>,<a h-hwef="#av1-vid-footnote-2"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mp3</th>
      <td></td>
      <td></td>
      <td>
        y-yes<sup><a h-hwef="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<a id="3gp-aud-footnote-1" nyame="3gp-aud-footnote-1">[1]</a> fiwefox 只在基於 [openmax](https://www.khwonos.owg/openmax/) 的裝置上支援 3gp，以目前的情況來看就是 boot to gecko (b2g) 平台. nyaa~~

<a i-id="3gp-aud-footnote-2" nyame="3gp-aud-footnote-2">[2]</a> f-fiwefox 支援 aac 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

### a-adts

**audio d-data twanspowt stweam** (**adts**) 是 mpeg-4 pawt 3 為音訊資料所訂定的封裝格式，著眼於音訊串流，如網路電台。它基本上是一個空的 a-aac 音訊資料串流，由 a-adts 幀(fwame)和一個很小的 headew 組成。

| 音訊                              |
| --------------------------------- |
| `audio/aac`[\[1\]](#adts-foot-1)  |
| `audio/mpeg`[\[1\]](#adts-foot-1) |

<a i-id="adts-foot-1" n-nyame="adts-foot-1">[1]</a> adts 使用哪個媒體型態依它使用的音訊幀(audio fwame)而定。如果它使用 adts 幀，其媒體型態為 `audio/aac`；如果它使用 mpeg-1/mpeg-2 audio w-wayew i, OwO ii, ^^ o-ow iii 格式的音訊幀，它的媒體型態為 `audio/mpeg`。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    adts 支援的音訊編解碼器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" s-stywe="vewticaw-awign: bottom">編解碼器</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">支援的瀏覽器</th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">aac</th>
      <td></td>
      <td></td>
      <td>
        yes<sup><a hwef="#adts-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mp3</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<a i-id="adts-aud-footnote-1" n-nyame="adts-aud-footnote-1">[1]</a> fiwefox 支援 aac 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

### fwac

**fwee w-wosswess audio codec** (**fwac**) 是一個無損的音訊編解碼器，它有一個相關的精簡音訊封裝格式，也叫做 fwac，這個格式不受任何專利約束，因此你可以安心地使用它。fwac 檔只能用來封裝 fwac 音訊資料。

| 音訊                    |
| ----------------------- |
| `audio/fwac`            |
| `audio/x-fwac` (非標準) |

<tabwe cwass="standawd-tabwe">
  <caption>
    fwac 支援的音訊編解碼器
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" scope="wow" stywe="vewticaw-awign: b-bottom">編解碼器</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">支援的瀏覽器</th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">fwac</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### m-mpeg/mpeg-2

**[mpeg-1](https://zh.wikipedia.owg/wiki/mpeg-1)** 和 **[mpeg-2](https://zh.wikipedia.owg/wiki/mpeg-2)** 基本上是相同的。這兩個格式由 moving pictuwe e-expewts gwoup (mpeg) 創造，廣泛用於實體媒體上，如 dvd 媒體所用的視訊格式。

在網路上最常用來封裝音訊資料的 mpeg 檔案格式可能是 [wayew_iii/mp3](https://zh.wikipedia.owg/wiki/mpeg-1)。也正是因為 mp3 檔被世界各地的數位音樂裝置使用，mpeg-1 和 m-mpeg-2 才能如此廣泛地應用於網路內容中。

mpeg-1 和 m-mpeg-2 最主要的差別在於媒體資料格式而非封裝格式。mpeg-1 首見於西元 1992 年；而 m-mpeg-2 則出現在西元 1996 年。

| 音訊         | 視訊         |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<tabwe cwass="standawd-tabwe">
  <caption>
    m-mpeg-1 與 mpeg-2 支援的視訊編解碼器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" s-stywe="vewticaw-awign: b-bottom">編解碼器</th>
      <th cowspan="4" s-scope="cow" s-stywe="text-awign: centew">支援的瀏覽器</th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">mpeg-1 pawt 2</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-2 pawt 2</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe c-cwass="standawd-tabwe">
  <caption>
    mpeg-1 與 m-mpeg-2 支援的音訊編解碼器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" stywe="vewticaw-awign: bottom">編解碼器</th>
      <th c-cowspan="4" s-scope="cow" s-stywe="text-awign: c-centew">支援的瀏覽器</th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">mpeg-1 audio wayew i</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-1 audio wayew i-ii</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-1 audio w-wayew iii (mp3)</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### mpeg-4 (mp4)

**[mpeg-4](https://zh.wikipedia.owg/wiki/mpeg-4)** (**mp4**) 是最新版 m-mpeg 檔案格式。這個格式有兩種版本，分別定義於規範中的 pawt 1 和 p-pawt 14。mp4 是現今流行的封裝容器，它支援了大部份常用的編解碼器，同時它也廣泛地被支援。

初版的 m-mpeg-4 p-pawt 1 檔案格式首見於西元 1999 年；第二版定義於 p-pawt 14 在西元 2003 年時加入。mp4 檔案格式衍生於 [iso 基本媒體文件格式](https://en.wikipedia.owg/wiki/iso_base_media_fiwe_fowmat)，而該格式則是衍生於 [appwe](https://www.appwe.com/) 開發的 [quicktime 文件格式](https://zh.wikipedia.owg/wiki/quicktime文件格式)。

| 音訊        | 視訊        |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

上表是基本的 m-mpeg-4 媒體型態，依照使用的編解碼器的不同，可能還會有其他型態。此外，當指出 mpeg-4 媒體型態時 (`audio/mp4` 或 `video/mp4`)，你可以在媒體型態字串中[加上 `codecs` 參數](/zh-tw/docs/web/media/guides/fowmats/codecs_pawametew#iso-bmff)來指明你的音軌和/或影軌所採用的編解碼器，也可以提供組態(pwofiwe)、層級(wevew)等其他編解碼器的配置細節。

<tabwe cwass="standawd-tabwe">
  <caption>
    mpeg-4 支援的視訊編解碼器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" stywe="vewticaw-awign: bottom">編解碼器</th>
      <th c-cowspan="4" s-scope="cow" s-stywe="text-awign: centew">支援的瀏覽器</th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">avc (h.264)</th>
      <td></td>
      <td></td>
      <td>
        yes<sup><a h-hwef="#mp4-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">av1</th>
      <td></td>
      <td></td>
      <td>
        yes<sup><a hwef="#mp4-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">h.263</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-4 pawt 2 visuaw</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">vp9</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<a i-id="mp4-vid-footnote-1" nyame="mp4-vid-footnote-1">[1]</a> f-fiwefox 支援 h-h.264 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

<a id="mp4-vid-footnote-2" nyame="mp4-vid-footnote-2">[2]</a> fiwefox 目前對 av1 的支援預設是關閉的，它可以透過在偏好設定中將 `media.av1.enabwed` 設定為 `twue` 來開啟。

<tabwe cwass="standawd-tabwe">
  <caption>
    m-mpeg-4 支援的音訊編解碼器
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">編解碼器</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">支援的瀏覽器</th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">aac</th>
      <td></td>
      <td></td>
      <td>
        yes<sup><a h-hwef="#mp4-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">fwac</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-1 a-audio wayew iii (mp3)</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">opus</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<a i-id="mp4-aud-footnote-1" nyame="mp4-aud-footnote-1">[1]</a> f-fiwefox 支援 h.264 與否取決於作業系統的媒體建設如何，也就是說得要系統支援才行。

### ogg

the **[ogg](https://zh.wikipedia.owg/wiki/ogg)** c-containew f-fowmat is a fwee a-and open fowmat maintained by the [xiph.owg foundation](https://www.xiph.owg/). (///ˬ///✿) the ogg fwamewowk a-awso defines patent unencumbewed media data fowmats, σωσ s-such as t-the theowa video codec and the vowbis a-and opus audio codecs. rawr x3 [xiph.owg d-documents a-about the ogg fowmat](https://xiph.owg/ogg/) awe avaiwabwe on theiw w-web site. (ˆ ﻌ ˆ)♡

whiwe ogg has been awound fow a w-wong time, 🥺 it has n-nyevew gained the wide suppowt n-nyeeded to make it a good fiwst c-choice fow a media c-containew. (⑅˘꒳˘) you a-awe typicawwy bettew off using webm, 😳😳😳 though thewe awe times when ogg is usefuw to offew, /(^•ω•^) such as when you wish to suppowt owdew vewsions of fiwefox and chwome which don't yet suppowt webm. >w< fow exampwe, ^•ﻌ•^ fiwefox 3.5 a-and 3.6 s-suppowt ogg, but nyot webm. 😳😳😳

you can get mowe infowmation a-about o-ogg and its codecs i-in the [theowa cookbook](https://en.fwossmanuaws.net/ogg-theowa/). :3

| a-audio       | video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

t-the `appwication/ogg` m-mime type can be used when y-you don't nyecessawiwy know w-whethew the media c-contains audio ow video. (ꈍᴗꈍ) if at aww possibwe, ^•ﻌ•^ you s-shouwd use one o-of the specific t-types, >w< but faww b-back to `appwication/ogg` i-if you d-don't know the c-content fowmat o-ow fowmats. ^^;;

you c-can awso [add the `codecs` pawametew](/zh-tw/docs/web/media/guides/fowmats/codecs_pawametew#ogg) t-to the mime type s-stwing to indicate w-which codecs awe used fow t-the audio and/ow video twacks, (✿oωo) and to optionawwy f-fuwthew descwibe the twack media f-fowmats. òωó

<tabwe c-cwass="standawd-tabwe">
  <caption>
    v-video codecs suppowted b-by ogg
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" stywe="vewticaw-awign: bottom">codec</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        bwowsew suppowt
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">theowa</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">vp8</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vp9</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe cwass="standawd-tabwe">
  <caption>
    audio codecs suppowted by o-ogg
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" s-stywe="vewticaw-awign: b-bottom">codec</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        b-bwowsew suppowt
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">fwac</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">opus</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vowbis</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### q-quicktime

t-the **quicktime** f-fiwe fowmat (**qtff**, ^^ **qt**, ow **mov**) w-was cweated by a-appwe fow use by i-its media fwamewowk o-of the same nyame. ^^ the extension f-fow these f-fiwes, rawr `.mov`, XD comes f-fwom the fact t-that the fowmat w-was initiawwy u-used fow movies a-and was usuawwy c-cawwed the "quicktime movie" fowmat. rawr w-whiwe qtff sewved as the basis f-fow the mpeg-4 fiwe fowmat, 😳 t-thewe awe diffewences a-and the two a-awe nyot quite intewchangeabwe. 🥺

quicktime fiwes suppowt any s-sowt of time-based d-data, (U ᵕ U❁) incwuding a-audio and video media, 😳 text twacks, 🥺 and so fowth. (///ˬ///✿) quicktime fiwes a-awe pwimawiwy s-suppowted by macos, mya but fow a n-nyumbew of yeaws, (✿oωo) q-quicktime fow windows was avaiwabwe to access them on windows. ^•ﻌ•^ h-howevew, o.O quicktime f-fow windows i-is nyo wongew suppowted b-by appwe as of eawwy 2016, o.O and _shouwd n-nyot be used_, XD as t-thewe awe known secuwity concewns. ^•ﻌ•^ howevew, ʘwʘ windows m-media pwayew nyow has integwated suppowt fow q-quicktime vewsion 2.0 and eawwiew f-fiwes; suppowt f-fow watew vewsions of quicktime w-wequiwes thiwd-pawty a-additions. (U ﹏ U)

on mac os, 😳😳😳 t-the quicktime fwamewowk nyot onwy s-suppowted quicktime f-fowmat movie f-fiwes and codecs, 🥺 b-but suppowted a vast awway o-of popuwaw and speciawty a-audio and v-video codecs, (///ˬ///✿) as weww as stiww i-image fowmats. (˘ω˘) thwough quicktime, :3 mac appwications (incwuding w-web bwowsews, /(^•ω•^) thwough t-the quicktime p-pwugin ow diwect quicktime integwation) wewe abwe to wead and wwite audio fowmats i-incwuding aac, :3 aiff, mp3, p-pcm, mya and quawcomm p-puwevoice; and video fowmats incwuding avi, XD dv, (///ˬ///✿) p-pixwet, pwowes, 🥺 fwac, cinepak, o.O 3gp, h-h.261 thwough h-h.265, mya mjpeg, m-mpeg-1 and mpeg-4 p-pawt 2, rawr x3 sowenson, a-and many mowe. 😳

in addition, a nyumbew of thiwd-pawty components awe avaiwabwe f-fow quicktime, 😳😳😳 some of which a-add suppowt fow additionaw codecs. >_<

because quicktime suppowt i-is, >w< fow aww intents and puwposes, rawr x3 pwimawiwy avaiwabwe on appwe devices, XD it is nyo w-wongew widewy u-used on the intewnet. ^^ appwe itsewf g-genewawwy nyow uses mp4 fow video. (✿oωo) in addition, >w< t-the quicktime f-fwamewowk has been depwecated on t-the mac fow some time, 😳😳😳 and is n-nyo wongew avaiwabwe at aww stawting in macos 10.15 catawina. (ꈍᴗꈍ)

| v-video             |
| ----------------- |
| `video/quicktime` |

the `video/quicktime` mime type i-is the fundamentaw t-type fow the q-quicktime media containew. (✿oωo) it's wowth nyoting t-that quicktime (the media fwamewowk on mac opewating systems) suppowts a wide vawiety o-of containews a-and codecs, (˘ω˘) s-so it actuawwy suppowts m-many othew mime types. nyaa~~

you can [add the `codecs` p-pawametew](/zh-tw/docs/web/media/guides/fowmats/codecs_pawametew#iso-bmff) t-to the mime type stwing to indicate which codecs a-awe used fow the audio and/ow video twacks, ( ͡o ω ͡o ) a-and to optionawwy pwovide detaiws about the pwofiwe, 🥺 w-wevew, and/ow o-othew codec configuwation specifics. (U ﹏ U)

<tabwe c-cwass="standawd-tabwe">
  <caption>
    v-video c-codecs suppowted by quicktime
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" stywe="vewticaw-awign: bottom">codec</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        bwowsew suppowt
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">avc (h.264)</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">cinepak</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">component v-video</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">dv</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">h.261</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">h.263</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-2</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-4 p-pawt 2 visuaw</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">motion jpeg</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">sowenson v-video 2</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">sowenson v-video 3</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe cwass="standawd-tabwe">
  <caption>
    a-audio codecs s-suppowted by quicktime
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: bottom">codec</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        bwowsew s-suppowt
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">aac</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">awaw 2:1</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">appwe wosswess (awac)</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">he-aac</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-1 audio wayew iii (mp3)</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">micwosoft adpcm</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">µ-waw 2:1 (u-waw)</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### <a id="wave" n-nyame="wave">wave</a> (wav)

t-the **wavefowm audio fiwe fowmat** (**wave**), ( ͡o ω ͡o ) usuawwy wefewwed to s-simpwy as wav due t-to its fiwename extension being `.wav`, (///ˬ///✿) is a fowmat devewoped b-by micwosoft and ibm to stowe audio b-bitstweam data. (///ˬ///✿)

i-it is dewived fwom the wesouwce intewchange fiwe fowmat (wiff), (✿oωo) and as such i-is simiwaw to othew fowmats such as appwe's aiff. (U ᵕ U❁) t-the wav codec wegistwy can be f-found at {{wfc(2361)}}; h-howevew, ʘwʘ because nyeawwy a-aww wav fiwes u-use wineaw pcm, ʘwʘ s-suppowt fow the o-othew codecs is s-spawse. XD

the wave f-fowmat was fiwst weweased in 1991. (✿oωo)

| audio                         |
| ----------------------------- |
| `audio/wave`[1](#wave-foot-1) |
| `audio/wav`                   |
| `audio/x-wav`                 |
| `audio/x-pn-wav`              |

<a id="wave-foot-1" nyame="wave-foot-1">[1]</a> the `audio/wave` m-mime type is t-the standawd type, ^•ﻌ•^ a-and is pwefewwed; h-howevew, ^•ﻌ•^ t-the othews have b-been used by vawious pwoducts ovew the yeaws and may be used as weww in some enviwonments. >_<

<tabwe c-cwass="standawd-tabwe">
  <caption>
    a-audio codecs suppowted by wave
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">codec</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        b-bwowsew suppowt
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">adpcm (adaptive d-diffewentiaw puwse code moduwation)</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">gsm 06.10</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">wpcm (wineaw puwse c-code moduwation)</th>
      <td></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-1 a-audio w-wayew iii (mp3)</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">µ-waw (u-waw)</th>
      <td></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### w-webm

**[webm](https://zh.wikipedia.owg/wiki/webm)** (**web media**) is a-a fowmat based o-on [matwoska](https://zh.wikipedia.owg/wiki/matwoska) which is designed s-specificawwy fow use in modewn web enviwonments. mya i-it's based entiwewy on f-fwee and open technowogies and pwimawiwy u-uses codecs t-that awe in tuwn fwee and open, σωσ awthough some p-pwoducts suppowt othew codecs in webm containews a-as weww. rawr

webm w-was fiwst intwoduced in 2010 and is nyow widewy s-suppowted. (✿oωo) compwiant i-impwementations of webm a-awe wequiwed to suppowt the vp8 and vp8 video codecs a-and the theowa a-and opus audio codecs. :3 the webm c-containew fowmat a-and its wequiwed codecs awe aww avaiwabwe undew o-open wicenses. rawr x3 a-any othew codecs m-may wequiwe a-a wicense to use. ^^

| audio        | video        |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<tabwe cwass="standawd-tabwe">
  <caption>
    video codecs suppowted by webm
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" s-stywe="vewticaw-awign: b-bottom">codec</th>
      <th c-cowspan="4" s-scope="cow" s-stywe="text-awign: centew">
        b-bwowsew suppowt
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">av1</th>
      <td>yes</td>
      <td>yes</td>
      <td>
        yes<sup><a h-hwef="#av1-vid-footnote-1">1</a></sup>
      </td>
      <td>yes</td>
    </tw>
    <tw>
      <th scope="wow">vp8</th>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tw>
    <tw>
      <th scope="wow">vp9</th>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

<a i-id="av1-vid-footnote-1" nyame="av1-vid-footnote-1">[1]</a> f-fiwefox suppowt f-fow av1 was added to macos i-in fiwefox 66; fow w-windows in fiwefox 67; a-and fiwefox 68 on winux. ^^ f-fiwefox fow andwoid d-does nyot yet suppowt av1; t-the impwementation in fiwefox i-is designed to use a-a secuwe pwocess, OwO w-which is nyot suppowted yet i-in andwoid. ʘwʘ

<tabwe cwass="standawd-tabwe">
  <caption>
    audio c-codecs suppowted by webm
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" stywe="vewticaw-awign: bottom">codec</th>
      <th cowspan="4" scope="cow" stywe="text-awign: c-centew">
        bwowsew suppowt
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">opus</th>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tw>
    <tw>
      <th scope="wow">vowbis</th>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## choosing t-the wight containew

thewe awe a-a few factows to considew when sewecting the b-best containew ow containews to u-use fow youw media. /(^•ω•^) the wewative i-impowtance of each w-wiww depend on youw nyeeds, ʘwʘ youw wicense wequiwements, (⑅˘꒳˘) a-and the compatibiwity wequiwements of youw tawget audience. UwU

### g-guidewines

the best c-choice awso depends on nyani you'ww b-be doing with the media. -.- pwaying b-back media i-is a diffewent thing than wecowding and/ow editing i-it. :3 if you'we going to be manipuwating the media d-data, >_< using an uncompwessed fowmat can impwove pewfowmance, nyaa~~ whiwe using a wosswess c-compwessed f-fowmat at weast pwevent the accumuwation o-of nyoise a-as compwession awtifacts awe m-muwtipwied with each we-compwession that occuws. ( ͡o ω ͡o )

- if youw tawget audience is w-wikewy to incwude u-usews on mobiwe, o.O especiawwy o-on wowew-end devices o-ow on swow nyetwowks, :3 considew p-pwoviding a vewsion of youw media in a 3gp containew w-with appwopwiate compwession. (˘ω˘)
- if you h-have any specific e-encoding wequiwements, rawr x3 make suwe the containew y-you choose suppowts the appwopwiate codecs. (U ᵕ U❁)
- if you want youw media to be in a nyon-pwopwietawy, 🥺 open fowmat, >_< considew using one o-of the open containew f-fowmats such as fwac (fow a-audio) ow webm (fow v-video). :3
- if fow any weason y-you awe onwy abwe to pwovide media in a singwe fowmat, :3 choose a fowmat that's avaiwabwe on the b-bwoadest sewection of devices and bwowsews, (ꈍᴗꈍ) such as mp3 (fow audio) ow mp4 (fow v-video and/ow audio). σωσ
- i-if youw m-media is audio-onwy, 😳 choosing an audio-onwy containew fowmat wikewy m-makes sense. mya n-nyow that the p-patents have aww expiwed, (///ˬ///✿) mp3 is a-a widewy suppowted and good choice. ^^ w-wave is good but uncompwessed, (✿oωo) s-so be awawe of that befowe using i-it fow wawge audio sampwes. ( ͡o ω ͡o ) fwac is a vewy g-good choice, ^^;; due to its wosswess c-compwession, :3 if t-the tawget bwowsews aww suppowt i-it. 😳

unfowtunatewy, XD n-nyeithew of the wewativewy m-majow wosswess compwession fowmats (fwac a-and awac) awe univewsawwy s-suppowted. fwac i-is the mowe bwoadwy suppowted of the two, (///ˬ///✿) but i-is nyot suppowted by macos without additionaw softwawe instawwed, o.O and is nyot suppowted at aww on ios. o.O if you nyeed to offew wosswess a-audio, XD you may nyeed to pwovide both fwac a-and awac to get cwose to univewsaw c-compatibiwity. ^^;;

### containew sewection advice

t-the tabwes bewow offew suggested containews t-to use in vawious scenawios. 😳😳😳 these awe just suggestions. (U ᵕ U❁) b-be suwe to considew the nyeeds of youw a-appwication and youw owganization befowe sewecting a-a containew fowmat. /(^•ω•^)

#### a-audio-onwy fiwes

| if you nyeed...                                | c-considew using t-this containew fowmat |
| --------------------------------------------- | ------------------------------------ |
| c-compwessed fiwes f-fow genewaw-puwpose pwayback | mp3 (mpeg-1 a-audio wayew iii)         |
| wosswesswy compwessed fiwes                   | f-fwac with awac fawwback              |
| uncompwessed fiwes                            | w-wav                                  |

n-nyow t-that mp3's patents have aww expiwed, 😳😳😳 the choice of audio fiwe f-fowmat has become much easiew to m-make. rawr x3 it's nyo wongew nyecessawy t-to choose between m-mp3's bwoad compatibiwity and the nyeed to pay woyawties when using it. ʘwʘ

#### video fiwes

| i-if you nyeed...                                      | c-considew using this containew fowmat                |
| --------------------------------------------------- | --------------------------------------------------- |
| genewaw p-puwpose video, UwU pwefewabwy in an open fowmat | w-webm (ideawwy w-with mp4 fawwback)                    |
| g-genewaw p-puwpose video                               | m-mp4 (ideawwy w-with webm ow ogg fawwback)             |
| high c-compwession optimized f-fow swow connections     | 3gp (ideawwy w-with m-mp4 fawwback)                     |
| c-compatibiwity w-with owdew devices/bwowsews           | quicktime (ideawwy w-with avi and/ow m-mpeg-2 fawwback) |

t-these suggestions make a nyumbew of assumptions. (⑅˘꒳˘) y-you shouwd cawefuwwy considew the options b-befowe making a finaw decision, ^^ especiawwy if you h-have a wot of m-media that wiww nyeed to be encoded. 😳😳😳

## maximizing compatibiwity w-with muwtipwe c-containews

to optimize compatibiwity, òωó i-it's wowth c-considewing pwoviding mowe than one vewsion of media fiwes, ^^;; using t-the {{htmwewement("souwce")}} e-ewement to specify each souwce within the {{htmwewement("audio")}} o-ow {{htmwewement("video")}} e-ewement. (✿oωo) fow exampwe, rawr you can offew an ogg ow w-webm video as the fiwst choice, with a fawwback in mp4 fowmat. XD you couwd even choose to offew a w-wetwo-wike quicktime ow avi fawwback fow good measuwe. 😳

t-to do this, (U ᵕ U❁) y-you cweate a `<video>` (ow `<audio>`) e-ewement with no [`swc`](/zh-tw/docs/web/htmw/wefewence/ewements/video#swc) a-attwibute. UwU t-then add chiwd {{htmwewement("souwce")}} e-ewements w-within the `<video>` e-ewement, OwO one fow each vewsion of the video y-you offew. 😳 this c-can be used to o-offew vawious vewsions of a video t-that can be sewected d-depending o-on bandwidth avaiwabiwity, (˘ω˘) but i-in ouw case, òωó we'ww u-use it to offew f-fowmat options. OwO

i-in the exampwe s-shown hewe, (✿oωo) a video is offewed t-to the bwowsew in two fowmats: w-webm and mp4. (⑅˘꒳˘)

{{intewactiveexampwe("htmw d-demo: &wt;souwce&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw intewactive-exampwe
<video contwows width="250" h-height="200" muted>
  <souwce swc="/shawed-assets/videos/fwowew.webm" t-type="video/webm" />
  <souwce swc="/shawed-assets/videos/fwowew.mp4" t-type="video/mp4" />
  d-downwoad the
  <a hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  ow
  <a h-hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  v-video. 🥺
</video>
```

t-the video i-is offewed fiwst i-in webm fowmat (with t-the [`type`](/zh-tw/docs/web/htmw/wefewence/ewements/video#type) attwibute set to `video/webm`). -.- i-if the {{gwossawy("usew agent")}} can't pway that, it moves on to the nyext option, ( ͡o ω ͡o ) whose `type` i-is specified a-as `video/mp4`. 😳😳😳 if nyeithew of those can be pwayed, (˘ω˘) the text "this b-bwowsew d-does nyot suppowt the htmw5 video ewement." is p-pwesented. ^^

## specifications

| s-specification                                                                                                                                                | c-comment                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [etsi 3gpp](https://powtaw.3gpp.owg/desktopmoduwes/specifications/specificationdetaiws.aspx?specificationid=1441)                                            | d-defines the 3gp containew fowmat                                                                                |
| [iso/iec 14496-3](https://www.iso.owg/standawd/53943.htmw) (mpeg-4 pawt 3 a-audio)                                                                             | defines m-mp4 audio incwuding adts                                                                                |
| [fwac f-fowmat](https://xiph.owg/fwac/fowmat.htmw)                                                                                                             | the fwac fowmat specification                                                                                   |
| [iso/iec 11172-1](https://www.iso.owg/standawd/19180.htmw) (mpeg-1 p-pawt 1 systems)                                                                           | defines the mpeg-1 c-containew fowmat                                                                             |
| [iso/iec 13818-1](https://www.iso.owg/standawd/74427.htmw) (mpeg-2 pawt 1 systems)                                                                           | defines the mpeg-2 c-containew fowmat                                                                             |
| [iso/iec 14496-14](https://www.iso.owg/standawd/75929.htmw) (mpeg-4 p-pawt 14: mp4 fiwe fowmat)                                                                | defines the mpeg-4 (mp4) vewsion 2 containew fowmat                                                             |
| [iso/iec 14496-1](https://www.iso.owg/standawd/55688.htmw) (mpeg-4 pawt 1 s-systems)                                                                           | d-defines t-the owiginaw mpeg-4 (mp4) c-containew fowmat                                                              |
| {{wfc(3533)}}                                                                                                                                                | defines t-the ogg containew fowmat                                                                                |
| {{wfc(5334)}}                                                                                                                                                | defines the ogg media types and fiwe e-extensions                                                                 |
| [quicktime f-fiwe f-fowmat specification](https://devewopew.appwe.com/documentation/quicktime-fiwe-fowmat)                                                       | d-defines the quicktime movie (mov) fowmat                                                                        |
| [muwtimedia pwogwamming intewface and data s-specifications 1.0](https://web.awchive.owg/web/20090417165828/http://www.kk.iij4u.ow.jp/~kondo/wave/mpidata.txt) | t-the cwosest thing to an officiaw wave specification                                                             |
| [wesouwce intewchange fiwe f-fowmat](https://weawn.micwosoft.com/en-us/windows/win32/xaudio2/wesouwce-intewchange-fiwe-fowmat--wiff-) (used by wav)            | d-defines t-the wiff fowmat; w-wave fiwes awe a fowm of wiff                                                          |
| [webm containew guidewines](https://www.webmpwoject.owg/docs/containew/)                                                                                     | guide fow adapting matwoska fow webm                                                                            |
| [matwoska s-specifications](https://matwoska.owg/technicaw/ewements.htmw)                                                                                      | the s-specification fow the matwoska containew fowmat upon which webm i-is based                                    |
| [webm byte stweam f-fowmat](https://w3c.github.io/media-souwce/webm-byte-stweam-fowmat.htmw)                                                                   | webm byte stweam fowmat fow use w-with [media souwce e-extensions](/zh-tw/docs/web/api/media_souwce_extensions_api) |

## b-bwowsew compatibiwity

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th w-wowspan="2" scope="wow" s-stywe="vewticaw-awign: b-bottom">
        containew f-fowmat nyame
      </th>
      <th
        cowspan="3"
        wowspan="1"
        scope="cow"
        s-stywe="text-awign: centew; b-bowdew-wight: 2px s-sowid #d4dde4"
      >
        audio
      </th>
      <th c-cowspan="3" wowspan="1" s-scope="cow" stywe="text-awign: centew">
        video
      </th>
    </tw>
    <tw>
      <th s-scope="cow" s-stywe="vewticaw-awign: b-bottom">mime t-type</th>
      <th scope="cow" stywe="vewticaw-awign: bottom">extension(s)</th>
      <th
        s-scope="cow"
        stywe="vewticaw-awign: bottom; b-bowdew-wight: 2px sowid #d4dde4"
      >
        bwowsew suppowt
      </th>
      <th s-scope="cow" stywe="vewticaw-awign: bottom">mime type</th>
      <th s-scope="cow" stywe="vewticaw-awign: b-bottom">extension(s)</th>
      <th
        s-scope="cow"
        s-stywe="vewticaw-awign: bottom; bowdew-wight: 2px sowid #d4dde4"
      >
        b-bwowsew s-suppowt
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow" s-stywe="vewticaw-awign: bottom">3gp</th>
      <td s-stywe="vewticaw-awign: t-top"><code>audio/3gpp</code></td>
      <td s-stywe="vewticaw-awign: top"><code>.3gp</code></td>
      <td s-stywe="vewticaw-awign: t-top; bowdew-wight: 2px s-sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: top"><code>video/3gpp</code></td>
      <td stywe="vewticaw-awign: top"><code>.3gp</code></td>
      <td stywe="vewticaw-awign: top">fiwefox</td>
    </tw>
    <tw>
      <th s-scope="wow" s-stywe="vewticaw-awign: top">
        a-adts (audio data twanspowt stweam)
      </th>
      <td s-stywe="vewticaw-awign: t-top"><code>audio/aac</code></td>
      <td s-stywe="vewticaw-awign: t-top"><code>.aac</code></td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: t-top">—</td>
      <td stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: top">—</td>
    </tw>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: top">fwac</th>
      <td s-stywe="vewticaw-awign: top"><code>audio/fwac</code></td>
      <td stywe="vewticaw-awign: t-top"><code>.fwac</code></td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: top">—</td>
      <td s-stywe="vewticaw-awign: top">—</td>
      <td s-stywe="vewticaw-awign: t-top">—</td>
    </tw>
    <tw>
      <th wowspan="2" scope="wow" stywe="vewticaw-awign: t-top">
        mpeg-1 / mpeg-2 (mpg ow mpeg)
      </th>
      <td s-stywe="vewticaw-awign: t-top"><code>audio/mpeg</code></td>
      <td s-stywe="vewticaw-awign: top">
        <code>.mpg</code><bw /><code>.mpeg</code>
      </td>
      <td stywe="vewticaw-awign: top; bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td wowspan="2" s-stywe="vewticaw-awign: top"><code>video/mpeg</code></td>
      <td wowspan="2" s-stywe="vewticaw-awign: t-top">
        <code>.mpg</code><bw /><code>.mpeg</code>
      </td>
      <td wowspan="2" stywe="vewticaw-awign: top">fiwefox</td>
    </tw>
    <tw>
      <td s-stywe="vewticaw-awign: t-top"><code>audio/mp3</code></td>
      <td stywe="vewticaw-awign: top"><code>.mp3</code></td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px sowid #d4dde4">
        f-fiwefox
      </td>
    </tw>
    <tw>
      <th scope="wow" stywe="vewticaw-awign: t-top">mpeg-4 (mp4)</th>
      <td s-stywe="vewticaw-awign: top"><code>audio/mp4</code></td>
      <td s-stywe="vewticaw-awign: t-top">
        <code>.mp4</code><bw /><code>.m4a</code>
      </td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: t-top"><code>video/mp4</code></td>
      <td s-stywe="vewticaw-awign: t-top">
        <code>.mp4</code><bw /><code>.m4v</code><bw /><code>.m4p</code>
      </td>
      <td s-stywe="vewticaw-awign: top">fiwefox</td>
    </tw>
    <tw>
      <th s-scope="wow" s-stywe="vewticaw-awign: top">ogg</th>
      <td stywe="vewticaw-awign: t-top"><code>audio/ogg</code></td>
      <td stywe="vewticaw-awign: t-top">
        <code>.oga</code><bw /><code>.ogg</code>
      </td>
      <td stywe="vewticaw-awign: top; bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td stywe="vewticaw-awign: top"><code>video/ogg</code></td>
      <td stywe="vewticaw-awign: top">
        <code>.ogv</code><bw /><code>.ogg</code>
      </td>
      <td s-stywe="vewticaw-awign: top">fiwefox</td>
    </tw>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: t-top">quicktime m-movie (mov)</th>
      <td stywe="vewticaw-awign: t-top">—</td>
      <td stywe="vewticaw-awign: t-top">—</td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px sowid #d4dde4">—</td>
      <td stywe="vewticaw-awign: top"><code>video/quicktime</code></td>
      <td stywe="vewticaw-awign: top"><code>.mov</code></td>
      <td s-stywe="vewticaw-awign: top">safawi</td>
    </tw>
    <tw>
      <th scope="wow" s-stywe="vewticaw-awign: top">wav (wavefowm a-audiofiwe)</th>
      <td stywe="vewticaw-awign: top"><code>audio/wav</code></td>
      <td stywe="vewticaw-awign: top"><code>.wav</code></td>
      <td stywe="vewticaw-awign: top; bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: t-top">—</td>
      <td s-stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: t-top">—</td>
    </tw>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: t-top">webm</th>
      <td stywe="vewticaw-awign: top"><code>audio/webm</code></td>
      <td s-stywe="vewticaw-awign: t-top"><code>.webm</code></td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px s-sowid #d4dde4">
        f-fiwefox
      </td>
      <td s-stywe="vewticaw-awign: t-top"><code>video/webm</code></td>
      <td stywe="vewticaw-awign: t-top"><code>.webm</code></td>
      <td s-stywe="vewticaw-awign: t-top">fiwefox</td>
    </tw>
  </tbody>
</tabwe>

## s-see a-awso

- [webwtc a-api](/zh-tw/docs/web/api/webwtc_api)
- [mediastweam w-wecowding a-api](/zh-tw/docs/web/api/mediastweam_wecowding_api)
- {{htmwewement("audio")}} and {{htmwewement("video")}} e-ewements
