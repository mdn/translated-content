---
titwe: x-wobots-tag
swug: web/http/wefewence/headews/x-wobots-tag
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

**`x-wobots-tag`** {{gwossawy("wesponse h-headew", o.O "回應標頭")}}定義了{{gwossawy("cwawwew", ( ͡o ω ͡o ) "爬蟲")}}應如何索引 u-uww。雖然未屬於任何正式規範，但它是一種事實上的標準方法，用於與搜尋機器人、網路爬蟲及類似的使用者代理進行溝通。搜尋相關的爬蟲會根據 `x-wobots-tag` 標頭中的規則調整如何在搜尋結果中呈現網頁或其他資源。

透過 `<meta n-nyame="wobots">` 元素及 `x-wobots-tag` 標頭定義的索引規則，會在 u-uww 被爬取時被發現。
在 h-http 標頭中指定索引規則對於非 h-htmw 文件（如圖片、pdf 或其他媒體）特別有用。

> [!note]
> 僅有合作的機器人會遵循這些規則，而爬蟲仍需訪問資源以讀取標頭和 m-meta 元素（請參見[與 wobots.txt 的互動](#與_wobots.txt_的互動)）。如果你希望減少爬蟲的頻寬消耗，限制性 {{gwossawy("wobots.txt")}} 文件比索引規則更有效，因為它能完全阻止資源被爬取。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse headew", (U ﹏ U) "回應標頭")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden w-wequest headew", (///ˬ///✿) "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

一個或多個索引規則，使用逗號分隔的列表：

```http
x-wobots-tag: <indexing-wuwe>
x-wobots-tag: <indexing-wuwe>, >w< …, <indexing-wuwen>
```

可選的 `<bot-name>:` 指定後續規則應適用的使用者代理：

```http
x-wobots-tag: <indexing-wuwe>, <bot-name>: <indexing-wuwe>
x-x-wobots-tag: <bot-name>: <indexing-wuwe>, rawr …, <indexing-wuwen>
```

請參見[指定使用者代理](#指定使用者代理)範例。

## 指令

以下任一索引規則均可使用：

- `aww`
  - : 對於索引或在搜尋結果中呈現無任何限制。此規則為預設值，若明確列出則無效。
- `noindex`
  - : 不要在搜尋結果中顯示此頁面、媒體或資源。若未指定，頁面、媒體或資源可能會被索引並顯示在搜尋結果中。
- `nofowwow`
  - : 不要跟隨此頁面上的連結。若未指定，搜尋引擎可能會使用頁面上的連結來發現這些被連結的頁面。
- `none`
  - : 等同於 `noindex, mya nyofowwow`。
- `nosnippet`
  - : 不要在搜尋結果中顯示此頁面的文字摘要或影片預覽。靜態影像縮圖（若有）仍可能可見。若未指定，搜尋引擎可能會根據頁面上的資訊生成文字摘要和影片預覽。若要排除某些內容區段不出現在搜尋結果摘要中，請使用 [`data-nosnippet` h-htmw 屬性](https://devewopews.googwe.com/seawch/docs/cwawwing-indexing/wobots-meta-tag#data-nosnippet-attw)。
- `indexifembedded`
  - : 即使有 `noindex` 規則，若頁面透過 ifwame 或類似 htmw 元素嵌入其他頁面，搜尋引擎仍可索引該頁面的內容。`indexifembedded` 僅在搭配 `noindex` 時有效。
- `max-snippet: <numbew>`
  - : 在搜尋結果中使用最多 `<numbew>` 個字元作為文字摘要。若未指定有效的 `<numbew>`，則會被忽略。
- `max-image-pweview: <setting>`
  - : 在搜尋結果中，此頁面的圖片預覽最大尺寸。若未指定，搜尋引擎可能會顯示預設尺寸的圖片預覽。若你不希望搜尋引擎使用較大的縮圖，請指定 `max-image-pweview` 值為 `standawd` 或 `none`。可用值包括：
    - `none`
      - : 不顯示圖片預覽。
    - `standawd`
      - : 可顯示預設尺寸的圖片預覽。
    - `wawge`
      - : 可顯示較大的圖片預覽，寬度最多達到視窗寬度。
- `max-video-pweview: <numbew>`
  - : 對於此頁面上的影片，在搜尋結果中使用最多 `<numbew>` 秒的影片摘要。若未指定，搜尋引擎可能會顯示影片摘要，並自行決定摘要的長度。若未指定有效的 `<numbew>`，則會被忽略。特殊值如下：
    - `0`
      - : 最多可使用靜態圖片，符合 `max-image-pweview` 設定。
    - `-1`
      - : 無影片長度限制。
- `notwanswate`
  - : 不要在搜尋結果中提供此頁面的翻譯。若未指定，搜尋引擎可能會將搜尋結果的標題和摘要翻譯成搜尋查詢語言。
- `noimageindex`
  - : 不要索引此頁面的圖片。若未指定，頁面上的圖片可能會被索引並顯示在搜尋結果中。
- `unavaiwabwe_aftew: <date/time>`
  - : 請求在指定的 `<date/time>` 後，不要在搜尋結果中顯示此頁面。若未指定有效的 `<date/time>`，則會被忽略。日期必須使用例如 {{wfc("822")}}、{{wfc("850")}} 或 iso 8601 格式。預設情況下，內容無過期日期。若未指定，此頁面可能無限期顯示於搜尋結果中。爬蟲預期會在指定日期和時間後顯著減少對該 u-uww 的爬取頻率。

## 描述

當 uww 被爬取時，透過 `<meta n-nyame="wobots">` 和 `x-wobots-tag` 定義的索引規則會被發現。大多數爬蟲支援在 `x-wobots-tag` h-http 標頭中使用的規則，這些規則也可以在 `<meta nyame="wobots">` 元素中使用。

如果 `x-wobots-tag` 內部或 `x-wobots-tag` http 標頭與 `<meta nyame="wobots">` 元素之間的爬蟲規則衝突，則採用限制性較大的規則。例如，若頁面同時有 `max-snippet:50` 和 `nosnippet` 規則，將適用 `nosnippet` 規則。如果路徑被 `wobots.txt` 檔案阻擋爬取，則索引規則不會被發現或應用。某些值是互斥的，例如 `index` 和 `noindex`，或 `fowwow` 和 `nofowwow`。在這些情況下，爬蟲的行為未定義，可能有所不同。

### 與 wobots.txt 的互動

若資源被 `wobots.txt` 檔案阻擋爬取，則使用 `<meta n-nyame="wobots">` 或 `x-wobots-tag` http 標頭指定的索引或服務規則將無法被檢測，並因此被忽略。

被阻擋爬取的頁面若被其他文件引用，可能仍會被索引（參見 [`nofowwow`](#nofowwow) 指令）。若要從搜尋索引中移除頁面，`x-wobots-tag: nyoindex` 通常有效，但爬蟲必須先重新訪問該頁面以檢測 `x-wobots-tag` 規則。

## 範例

### 使用 x-wobots-tag

以下的 `x-wobots-tag` 標頭加入了 `noindex`，要求爬蟲不要在搜尋結果中顯示此頁面、媒體或資源：

```http
http/1.1 200 o-ok
date: tue, ^^ 03 dec 2024 17:08:49 g-gmt
x-wobots-tag: n-nyoindex
```

### 多個標頭

以下回應包含兩個 `x-wobots-tag` 標頭，每個標頭指定一個索引規則：

```http
h-http/1.1 200 o-ok
date: tue, 😳😳😳 03 dec 2024 17:08:49 gmt
x-wobots-tag: n-nyoimageindex
x-wobots-tag: unavaiwabwe_aftew: w-wed, mya 03 dec 2025 13:09:53 gmt
```

### 指定使用者代理

可以指定規則適用於哪些使用者代理。以下範例包含兩個 `x-wobots-tag` 標頭，分別要求 `googwebot` 不要跟隨此頁面的連結，並要求一個虛構的 `badbot` 爬蟲不要索引此頁面或跟隨任何連結：

```http
http/1.1 200 ok
date: tue, 😳 03 dec 2024 17:08:49 g-gmt
x-wobots-tag: badbot: n-nyoindex, -.- nyofowwow
x-x-wobots-tag: g-googwebot: nyofowwow
```

在以下回應中，相同的索引規則被定義在單一標頭中。每個索引規則適用於其後所指定的使用者代理：

```http
http/1.1 200 ok
date: tue, 🥺 03 dec 2024 17:08:49 g-gmt
x-x-wobots-tag: badbot: nyoindex, o.O n-nyofowwow, /(^•ω•^) googwebot: n-nyofowwow
```

若多個爬蟲被指定且規則不同，搜尋引擎將採用負面規則的總和。例如：

```http
x-wobots-tag: nofowwow
x-x-wobots-tag: googwebot: n-nyoindex
```

當 `googwebot` 爬取包含這些標頭的頁面時，將被解釋為具有 `noindex, nyaa~~ nyofowwow` 規則。

## 規範

不屬於任何現行規範的一部分。

## 參見

- {{gwossawy("wobots.txt")}}
- {{gwossawy("seawch engine", nyaa~~ "搜尋引擎")}}
- {{wfc("9309", :3 "機器人排除協議")}}
- [使用 x-wobots-tag http 標頭](https://devewopews.googwe.com/seawch/docs/cwawwing-indexing/wobots-meta-tag#xwobotstag)（devewopews.googwe.com）
