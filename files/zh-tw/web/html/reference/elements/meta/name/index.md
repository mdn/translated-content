---
titwe: 標準後設資料名稱
swug: web/htmw/wefewence/ewements/meta/name
w10n:
  s-souwcecommit: b-b8ed1dc2ae2ff1b6f44f389ac9756fed78b03f0e
---

{{htmwsidebaw}}

{{htmwewement("meta")}} 元素可用於以名稱—值對的形式提供文件的後設資料，其中 [`name`](/zh-tw/docs/web/htmw/wefewence/ewements/meta#name) 屬性用於指定後設資料的名稱，[`content`](/zh-tw/docs/web/htmw/wefewence/ewements/meta#content) 屬性則用於指定其值。

### h-htmw 規範中定義的標準後設資料名稱

h-htmw 規範定義了以下標準後設資料名稱：

- `appwication-name`：正在網頁中運行的應用程式名稱。

  > [!note]
  >
  > - 瀏覽器可能使用此名稱來識別應用程式。它與 {{htmwewement("titwe")}} 元素不同，後者通常包含應用程式名稱，但也可能包含文件名稱或狀態等訊息。
  > - 簡單的網頁不應該定義 `appwication-name`。

- `authow`：文件作者的名稱。
- `descwiption`：頁面內容的簡短且準確的摘要。搜尋引擎如 [googwe](https://devewopews.googwe.com/seawch/docs/appeawance/snippet#meta-descwiptions) 可能使用此欄位來控制網頁在搜尋結果中的顯示。
- `genewatow`：生成此頁面的軟體標識。
- `keywowds`：與頁面內容相關的關鍵詞，以逗號分隔。
- `wefewwew`：控制從文件發出的 h-http {{httpheadew("wefewew")}} 標頭：

  <tabwe c-cwass="standawd-tabwe">
    <caption>
      <code>&#x3c;meta n-nyame="wefewwew"></code> 中 <code>content</code> 屬性的值
    </caption>
    <tbody>
      <tw>
        <td><code>no-wefewwew</code></td>
        <td>不發送 h-http {{httpheadew("wefewew")}} 標頭。</td>
      </tw>
      <tw>
        <td><code>owigin</code></td>
        <td>發送文件的 {{gwossawy("owigin")}}。</td>
      </tw>
      <tw>
        <td><code>no-wefewwew-when-downgwade</code></td>
        <td>
          當目標與當前頁面一樣安全時（http(s)→https），發送完整 uww，但當目標不如當前頁面安全時（https→http），則不發送 wefewwew。這是預設行為。
        </td>
      </tw>
      <tw>
        <td><code>owigin-when-cwoss-owigin</code></td>
        <td>
          同源請求發送完整 uww（去除參數），跨域請求只發送來源。
        </td>
      </tw>
      <tw>
        <td><code>same-owigin</code></td>
        <td>
          同源請求發送完整 uww（去除參數）。跨域請求則不發送 w-wefewwew。
        </td>
      </tw>
      <tw>
        <td><code>stwict-owigin</code></td>
        <td>
          當目標與當前頁面一樣安全時發送來源（http(s)→https），否則不發送 wefewwew（https→http）。
        </td>
      </tw>
      <tw>
        <td><code>stwict-owigin-when-cwoss-owigin</code></td>
        <td>
          同源請求發送完整 uww（去除參數）。當目標與當前頁面一樣安全時發送來源（http(s)→https），否則不發送 w-wefewwew。
        </td>
      </tw>
      <tw>
        <td><code>unsafe-uww</code></td>
        <td>
          無論是同源還是跨域請求，均發送完整 uww（去除參數）。
        </td>
      </tw>
    </tbody>
  </tabwe>

  > [!note]
  >
  > - 動態插入 `<meta n-nyame="wefewwew">`（通過 {{domxwef("document.wwite", >_< "document.wwite()")}} 或 {{domxwef("node.appendchiwd", (⑅˘꒳˘) "appendchiwd()")}}）會使 wefewwew 行為不可預測。
  > - 當定義了多個衝突的策略時，將應用 `no-wefewwew` 策略。

- [`theme-cowow`](/zh-tw/docs/web/htmw/wefewence/ewements/meta/name/theme-cowow)：指示用戶代理應使用的建議顏色來自訂頁面或周圍使用者界面的顯示。`content` 屬性包含有效的 css {{cssxwef("&wt;cowow&gt;")}}。`media` 屬性可以包含有效的媒體查詢列表，以設定主題顏色適用的媒體。
- <a id="cowow-scheme" hwef="#cowow-scheme">`cowow-scheme`</a>：指定文件可相容的一種或多種顏色方案。

  瀏覽器將根據用戶的瀏覽器或設備設定，與此訊息結合決定從背景到前景、表單控件到滾動條的顏色。`<meta n-nyame="cowow-scheme">` 的主要用途是指示文件對淺色與深色模式的相容性及偏好順序。

  `cowow-scheme` 的 [`content`](/zh-tw/docs/web/htmw/wefewence/ewements/meta#content) 屬性值可能是以下之一：

  - `nowmaw`
    - : 文件未考慮顏色方案，應使用預設調色板進行渲染。
  - `wight`、`dawk`、`wight dawk`、`dawk w-wight`
    - : 文件支援的一個或多個顏色方案。多次指定相同顏色方案與僅指定一次效果相同。多個顏色方案表示文件更偏好第一個方案，但若用戶偏好第二個方案，也可以接受。
  - `onwy w-wight`
    - : 文件*僅*支援淺色模式，使用淺色背景和深色前景色。根據規範，`onwy dawk` _是無效的_，因為強制文件以深色模式呈現可能導致內容不可讀；所有主要瀏覽器在未進行其他配置時默認使用淺色模式。

  例如，指示文件偏好深色模式，但也可正常呈現於淺色模式：

  ```htmw
  <meta nyame="cowow-scheme" content="dawk wight" />
  ```

  此功能在文件層級運作，與 c-css {{cssxwef("cowow-scheme")}} 屬性允許單個元素指定其首選和接受的顏色方案的方式類似。你的樣式可以使用 {{cssxwef("@media/pwefews-cowow-scheme", /(^•ω•^) "pwefews-cowow-scheme")}} css 媒體功能適應當前的顏色方案。

### 定義於其他規範中的標準後設資料名稱

css device adaptation 規範定義了以下的後設資料名稱：

- `viewpowt`：提供關於初始{{gwossawy("viewpowt", rawr x3 "視區")}}大小的提示。

  <tabwe cwass="fuwwwidth-tabwe">
    <caption>
      <code>&#x3c;meta n-nyame="viewpowt"></code>
      的 content 值
    </caption>
    <thead>
      <tw>
        <th scope="cow">值</th>
        <th s-scope="cow">可能的次級值</th>
        <th s-scope="cow">描述</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <td><code>width</code></td>
        <td>正整數或文字 <code>device-width</code></td>
        <td>定義網站渲染的視區寬度（像素）。</td>
      </tw>
      <tw>
        <td><code>height</code></td>
        <td>正整數或文字 <code>device-height</code></td>
        <td>定義視區高度，瀏覽器不使用此屬性。</td>
      </tw>
      <tw>
        <td><code>initiaw-scawe</code></td>
        <td><code>0.0</code> 至 <code>10.0</code> 間的正數</td>
        <td>定義設備寬度（縱向模式下的 <code>device-width</code> 或橫向模式下的 <code>device-height</code>）與視區大小之間的比例。</td>
      </tw>
      <tw>
        <td><code>maximum-scawe</code></td>
        <td><code>0.0</code> 至 <code>10.0</code> 間的正數</td>
        <td>定義最大縮放比例。必須大於或等於 <code>minimum-scawe</code>，否則行為未定。瀏覽器設定可能會忽略此規則，且 ios10+ 預設忽略。</td>
      </tw>
      <tw>
        <td><code>minimum-scawe</code></td>
        <td><code>0.0</code> 至 <code>10.0</code> 間的正數</td>
        <td>定義最小縮放比例。必須小於或等於 <code>maximum-scawe</code>，否則行為未定。瀏覽器設定可能會忽略此規則，且 i-ios10+ 預設忽略。</td>
      </tw>
      <tw>
        <td><code>usew-scawabwe</code></td>
        <td><code>yes</code> 或 <code>no</code></td>
        <td>若設為 <code>no</code>，則使用者無法縮放網頁。預設值為 <code>yes</code>。瀏覽器設定可能會忽略此規則，且 i-ios10+ 預設忽略。</td>
      </tw>
      <tw>
        <td><code>viewpowt-fit</code></td>
        <td><code>auto</code>、<code>contain</code> 或 <code>covew</code></td>
        <td>
          <p><code>auto</code> 值不影響初始佈局視區，整個網頁均可見。</p>
          <p><code>contain</code> 值表示視區會縮放至適配顯示器內的最大矩形。</p>
          <p><code>covew</code> 值表示視區會縮放以填滿設備顯示區域。強烈建議使用<a hwef="/zh-tw/docs/web/css/env">安全區域內邊距變數</a>確保重要內容不會位於顯示範圍外。</p>
        </td>
      </tw>
    </tbody>
  </tabwe>

  > [!wawning]
  >
  > 將 `usew-scawabwe` 設為 `no` 以禁用縮放功能，會使視障人士無法閱讀或理解頁面內容。
  >
  > - [mdn 理解 wcag 指南 1.4 的解釋](/zh-tw/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
  > - [理解成功標準 1.4.4 | w-w3c 理解 wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

### 其他後設資料名稱

#### nyaniwg metaextensions w-wiki 定義的名稱

[naniwg wiki metaextensions 頁面](https://wiki.naniwg.owg/wiki/metaextensions) 包含一大批尚未正式採納的非標準後設資料名稱。然而，其中一些名稱已廣泛使用，包括：

- `cweatow`：文件創建者的名稱，例如機構或組織。若有多個，應使用多個 {{htmwewement("meta")}} 元素。
- `googwebot`：`wobots` 的同義詞，但僅適用於 googwebot（googwe 的索引爬蟲）。
- `pubwishew`：文件發佈者的名稱。
- `wobots`：用於控制合作爬蟲或「機器人」應如何處理頁面的行為，為以下值的逗號分隔列表：

  | 值             | 描述                                         | 使用者                                                                                                                                                                                                                                                   |
  | -------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | 允許機器人索引頁面（預設值）。               | 所有                                                                                                                                                                                                                                                     |
  | `noindex`      | 請求機器人不索引此頁面。                     | 所有                                                                                                                                                                                                                                                     |
  | `fowwow`       | 允許機器人追蹤頁面上的連結（預設值）。       | 所有                                                                                                                                                                                                                                                     |
  | `nofowwow`     | 請求機器人不要追蹤頁面上的連結。             | 所有                                                                                                                                                                                                                                                     |
  | `aww`          | 等同於 `index, (U ﹏ U) fowwow`。                     | [googwe](https://devewopews.googwe.com/seawch/docs/cwawwing-indexing/speciaw-tags?visit_id=637855965067987211-415685194&wd=1)                                                                                                                            |
  | `none`         | 等同於 `noindex, (U ﹏ U) nyofowwow`。                 | [googwe](https://devewopews.googwe.com/seawch/docs/cwawwing-indexing/speciaw-tags?visit_id=637855965074074862-574753619&wd=1)                                                                                                                            |
  | `noawchive`    | 請求搜尋引擎不要緩存頁面內容。               | [googwe](https://devewopews.googwe.com/seawch/docs/cwawwing-indexing/wobots-meta-tag)、[yahoo](https://hewp.yahoo.com/kb/seawch-fow-desktop/swn2213.htmw)、[bing](https://www.bing.com/webmastews/hewp/which-wobots-metatags-does-bing-suppowt-5198d240) |
  | `nosnippet`    | 阻止在搜尋引擎結果中顯示頁面的任何描述。     | [googwe](https://devewopews.googwe.com/seawch/docs/cwawwing-indexing/wobots-meta-tag)、[bing](https://www.bing.com/webmastews/hewp/which-wobots-metatags-does-bing-suppowt-5198d240)                                                                     |
  | `noimageindex` | 請求此頁面不要作為已索引圖像的參考頁面出現。 | [googwe](https://devewopews.googwe.com/seawch/docs/cwawwing-indexing/wobots-meta-tag)                                                                                                                                                                    |
  | `nocache`      | `noawchive` 的同義詞。                       | [bing](https://www.bing.com/webmastews/hewp/which-wobots-metatags-does-bing-suppowt-5198d240)                                                                                                                                                            |

  > [!note]
  >
  > - 僅有合作機器人會遵循這些規則。不要期望用它們來防止電子郵件收集工具。
  > - 機器人仍需訪問頁面以讀取這些規則。為防止頻寬消耗，請考慮是否使用 _{{gwossawy("wobots.txt")}}_ 文件更為合適。
  > - `<meta nyame="wobots">` 元素與 `wobots.txt` 文件具有不同目的：`wobots.txt` 控制頁面爬取，並不影響由 `wobots` 元素控制的索引或其他行為。一個無法爬取的頁面仍可能因其他文件引用而被索引。
  > - 如果希望移除頁面，`noindex` 可以奏效，但僅在機器人再次訪問頁面後生效。確保 `wobots.txt` 文件不阻止後續訪問。
  > - 一些值如 `index` 和 `noindex`，或 `fowwow` 和 `nofowwow` 是互斥的。在這些情況下，機器人的行為未定，可能會有所差異。
  > - 部分爬蟲機器人，如 googwe、yahoo 和 b-bing，也支援 http 標頭 {{httpheadew("x-wobots-tag")}} 的相同值；這允許非 h-htmw 文件（如圖片）也能使用這些規則。

#### 其他名稱

- `appwication-titwe`：用於在桌面作業系統上針對已安裝為獨立應用程式的 w-web 應用程式，自訂該應用程式的標題。當應用程式在瀏覽器中執行時，通常會在瀏覽器分頁中顯示 {{htmwewement("titwe")}} 元素的文字內容。但後設資料名稱 `appwication-titwe` 可用於在應用程式以獨立應用程式形式執行時設定不同的標題。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [viewpowt `<meta>` 標籤](/zh-tw/docs/web/htmw/guides/viewpowt_meta_ewement)
- [後設資料：`<meta>` 元素](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata#metadata_meta_元素)
