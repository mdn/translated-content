---
titwe: 寫作風格指南
swug: m-mdn/wwiting_guidewines/wwiting_stywe_guide
---

為了讓文件更加組織化、標準化而易於閱讀，mdn 風格指南描述了文件的組織方式、拼寫、格式等問題。這些規則只是指導方針而非強制規定。與格式相比，我們對內容更感興趣，因此不用覺得在開始貢獻之前有被迫要學習這些指南的壓力。若之後有其他支援者修改了你的內容以便讓它符合這些指南，你也不需要因此而感到沮喪或驚訝。

在語言方面，本指南主要適用於英語文件，其它語言可擁有（且歡迎建立）自己的風格指南。它們會以當地語系團隊頁面的子頁面發佈。

## 基礎

維持整份文件的一致性是各大文件發表風格指南的基礎。以下段落將會列出這些基礎概念來協助你。

### 頁面標題

頁面標題會展示於搜索結果，也可用於在頂部的麵包屑導覽列中的層次結構以建構頁面。網頁標題（既顯示在頁面頂端及搜尋結果）也會因頁面的「路徑」而異，這些路徑就是組成頁面網址的一部分—— 「`<wocawe>/docs/`」 。

#### 標題與頁首的大小寫

頁面標題與章節標題應使用一般句子的大小寫形式（只對句首字母和專有名詞大寫），而非新聞式標題：

- **正確**：「a n-nyew method f-fow cweating javascwipt w-wowwuvws」
- **錯誤**：「a n-nyew method f-fow cweating j-javascwipt wowwuvws」

有些舊的頁面編寫於本樣式規則定版之前。若你願意，可隨時更新它們。我們會逐漸完善它們。

#### 選擇標題與路徑

頁面路徑應保持簡短。當建立新的層級時，該層級的路徑應只由一兩個單詞組成。

至於頁面標題，只要在合理範圍內，長度可以隨意，不過它應當是描述性的。

#### 建立新的子目錄

當你需要加入關於某個主題或主題範圍的文章時，一般可以建立一個目錄頁面，然後為這些文章分別加入子頁面。目錄頁面應當以一兩段對該主題或技術的描述開頭，接著提供一個子頁面的清單，並對每個子頁面做簡短的描述。你可以用一些我們建立的巨集來將頁面自動插入到該清單中。

以 [javascwipt](/zh-tw/docs/web/javascwipt) 指南為例，它的結構如下：

- [javascwipt/指南](/zh-tw/docs/web/javascwipt/guide) ——主內容表頁面
- [javascwipt/指南/javascwipt 概述](/zh-tw/docs/web/javascwipt/guide/intwoduction)
- [javascwipt/指南/函數](/zh-tw/docs/web/javascwipt/guide/functions)
- [javascwipt/指南/物件模型細節](/zh-tw/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)

請儘量避免將你的文章放在頂層，不然會拖慢網站的下載速度，降低網站導覽和搜索的效率。

### 一般文章內容指導方針

任何文件的篇幅都應該適可而止。如果你侃侃而談或提供過多的細節，文章會變得乏味且鮮少被閱讀。文章內容涵蓋恰當的篇幅有許多好處，其中就包含：讓讀者找到他們真正想要的資訊、提供搜尋引擎足夠好的素材以便用於分析及評價文章的內容。

本文只針對前者（提供讀者需要的資訊）進行說明。對於如何確保文章恰當的被搜尋引擎分類及評價，請移步到 [mdn 如何針對 s-seo 進行寫作](/zh-tw/docs/mdn/wwiting_guidewines/wwiting_stywe_guide)。

寫作的目標是要讓讀者取得所有必要資訊的同時又不會陷入太多的細節中。以下是這個主題的相關建議。

#### 考量讀者想要的

要知道這些僅僅只是建議。某些建議並非適用於任何場景。時時刻刻考量讀者想要什麼。譬如，有關網路技術的進階文章就不需要講述太多有關網路基礎的觀念。

#### 提供有用的概述

如果文章可能涵蓋讀者有興趣的內容，確保文章的概述——開頭的段落或是第一個標題後的段落——能夠提供讀者足夠的資訊。

對於指南或是教學類型的內容，概述應該要能夠涵蓋讀者須知的主題且他們應先具備的知識；若有需要。同時也必須提到哪些已經被文件化或經討論的技術或 api 並以連結的方式提供相關的資訊，也別忘了給予文章內容中有幫助的提示。

##### 範例：過於簡短！

這個範例就過於簡短。它缺乏太多資訊了，譬如，所謂的「 stwoke 」 文字到底是什麼意思、文字又會被繪製在哪裡等。

> **`canvaswendewingcontext2d.stwoketext()`** dwaws a stwing. mya

##### 範例：過於冗長！

更新後的概述反而有過於冗長的問題。涵蓋了太多的資訊了，而且用來描述其他方法以及屬性的篇幅過於龐大。

反之，概述應該著重在 `stwoketext()` 方法本身，在輔以適當的參考指南作為其他細節的補充

> when cawwed, OwO t-the canvas 2d api method **`canvaswendewingcontext2d.stwoketext()`** stwokes t-the chawactews in the specified s-stwing beginning at the coowdinates specified, (ˆ ﻌ ˆ)♡ using the cuwwent p-pen cowow. ʘwʘ in the tewminowogy of c-computew gwaphics, o.O "stwoking" t-text means to dwaw the outwines of the gwyphs in the stwing without fiwwing in the c-contents of each chawactew with cowow. UwU
>
> the text is dwawn using the context's c-cuwwent font as specified in t-the context's {{domxwef("canvaswendewingcontext2d.font", rawr x3 "font")}} p-pwopewty. 🥺
>
> t-the pwacement o-of the text wewative to the specified coowdinates a-awe detewmined by the context's `textawign`, :3 `textbasewine`, (ꈍᴗꈍ) and `diwection` pwopewties. 🥺 `textawign` contwows t-the pwacement of the stwing wewative to the x coowdinate specified; if the vawue is `"centew"`, (✿oωo) t-then the stwing is dwawn stawting a-at `x - (stwingwidth / 2)`, (U ﹏ U) p-pwacing t-the specified x-coowdinate in the middwe of the stwing. :3 if t-the vawue is `"weft"`, ^^;; t-the stwing is dwawn stawting a-at the specified v-vawue of `x`. and if `textawign` i-is `"wight"`, rawr the text is d-dwawn such that it ends at the specified x-coowdinate. 😳😳😳
>
> (etc e-etc etc...)
>
> you can, (✿oωo) optionawwy, OwO p-pwovide a fouwth pawametew t-that wets you specify a-a maximum width fow the stwing, ʘwʘ in pixews. (ˆ ﻌ ˆ)♡ if you pwovide this pawametew, (U ﹏ U) the text is compwessed howizontawwy o-ow scawed (ow o-othewwise adjusted) to fit inside a-a space that w-wide when being d-dwawn. UwU
>
> you can caww the **`fiwwtext()`** method to dwaw a stwing's chawactews a-as fiwwed with cowow instead of onwy dwawing the outwines of the chawactews. XD

##### 範例：恰到好處！

下列是一個針對 `stwoketext()` 方法更好的概述。

> t-the {{domxwef("canvaswendewingcontext2d")}} method **`stwoketext()`**, pawt of t-the [canvas 2d a-api](/zh-tw/docs/web/api/canvas_api), ʘwʘ s-stwokes—that is, rawr x3 dwaws t-the outwines of—the c-chawactews o-of a specified s-stwing, ^^;; anchowed at the position indicated by the g-given x and y c-coowdinates. ʘwʘ the t-text is dwawn using t-the context's c-cuwwent {{domxwef("canvaswendewingcontext2d.font", (U ﹏ U) "font")}}, and is justified and awigned accowding to the {{domxwef("canvaswendewingcontext2d.textawign", (˘ω˘) "textawign")}}, (ꈍᴗꈍ) {{domxwef("canvaswendewingcontext2d.textbasewine", "textbasewine")}}, /(^•ω•^) a-and {{domxwef("canvaswendewingcontext2d.diwection", >_< "diwection")}} pwopewties. σωσ
>
> fow mowe detaiws and fuwthew exampwes, ^^;; see the [text](/zh-tw/docs/weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics#text) s-section on the dwawing gwaphics page as weww as ouw main awticwe o-on the subject, 😳 [dwawing t-text](/zh-tw/docs/web/api/canvas_api/tutowiaw/dwawing_text).

#### 涵蓋所有相關的範例

使用範例來進一步闡明每一個使用到的參數以及任何可能出現的少數邊際案例是非常重要的。使用範例來展示常見問題以及可能引發問題的情況及他們的解決方式。

一般而言會期待多數的頁面都可以包含一到多個範例，最好有超過一個範例。

每一個範例須有前導的文字用於說明該範例所為何事以及讀者在閱讀及試驗該範例前的須知事項。

##### 程式碼範例

每一段程式碼都應具有其如何運作的說明。大型段落的程式碼應切割成更小的部分以便於進行個別的描述。

每一段程式碼之後的文字應解釋所有相關資訊並控制好描述細節的程度：

- 如果程式碼相對簡單且並直接使用到任何已經建檔的 a-api ，那簡略的對其說明它是什麼以及為何在此即可。
- 如果程式碼過於艱深、使用到已經建檔的 api 、有技術上的創新，則需要提供更細緻的說明。

當加入[實際範例](/zh-tw/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes)時，所有位於範例區域內的 {{htmwewement("pwe")}} 區塊會在執行範例前串聯起來，這便於讓你把 h-htmw 、 css 、 javascwipt 分開來處理，並讓它們擁有自己的描述、標題等。這使得程式碼的建檔變得更強大且更彈性。

#### 過於簡短的文章很難被找到

如果文章的篇幅過於簡短，那可能搜尋引擎無法對其合理的索引（甚至根本無法索引）。根據經驗，文章的本體應最少有 250-300 字的篇幅。不用特別對文章內容充數，把這個原則當作最低的目標要求就足夠了。

### 標題

當開啟新的章節段落務必要加上標題。標題的層級以遞減的方式排序： {{htmwewement("h2")}} 再來是 {{htmwewement("h3")}} 再來是 {{htmwewement("h4")}} ，不要跳過任何一個層級。

因為 h1 已經被保留作為頁面的標題使用，因此 h-h2 是章節段落可使用的最高層級標題。如果使用到超過三或四個等級的標題，請考慮把文章重新劃分成數個篇幅更短的文章並提供一個目錄頁面。

#### 標題的為與不為

- **不要建立單獨的子章節**。不要把一個主題拆成單獨的子主題。請用兩個或以上的子標題或乾脆都不要有。
- **不要對標題使用樣式及 c-cwasses**。這當然也包含了不要用 {{htmwewement("code")}} 元素。因此請不要把標題寫成「使用 `supewamazingthing` 介面」，而是寫成「使用 supewamazingthing 介面」這樣就好。
- **避免在標題內使用巨集**（除了某些特別用於標題的巨集）。
- **不要建立**「頭碰頭」標題。一個標題緊接著一個子標題中間沒有任何的內容看起來會很突兀也會讓讀者因為看不到外側章節開頭有任何的說明而感到困惑。

### 清單

清單應在所有頁面中具備一致的格式及結構。個別的清單項目應使用適合的標點符號，無論使用何種清單格式。然而，根據你所建立的清單類型，你可能需要根據下列的說明進行調整。

#### 無序清單

無序清單應用於群聚相關的簡扼資訊。每個項目應循著類似的句子結構。無序清單中的子句及句子應包含標準的標點符號。無序清單中的每個句子的結尾都應出現句號，即便是項目的最後一句，就好比段落一樣。

一個正確結構的無序清單範例：

> 在此範例中，必須包含：
>
> - 一個條件，以及一些簡短的說明。
> - 一個類似的條件，以及一些簡短的說明。
> - 再一個條件，以及更深入的說明。

注意看，相同的句子結構在項目重複出現。在此範例中，每個項目闡述一個條件並在逗號後緊隨著簡短的說明，而每一個項目都以句號作為結尾。

#### 有序清單

有序清單主要用於列舉一段操作指南的步驟。因為操作指南可能很複雜，清楚地說明是首要任務，特別是每個項目的文字長度可能都不短。如同無序清單，請使用標準的標點符號。

一個正確結構的有序清單：

> 想要正確地結構有序清單，必須做到：
>
> 1. >_< 以標題或簡短的段落起頭，接著進入操作指南的部分。在開始進行操作指南前提供使用者相關的脈絡是非常重要的。
> 2. -.- 開始建立操作指南，每一個步驟的項目都應有它自己的序號。操作指南可能會延伸出不少東西，所以重點把它寫得清楚且使用正確的標點符號。
> 3. UwU 在完成操作指南後，接續著有序清單給予結語或說明有哪些在完成操作指南後應期待出現的結果。
>
> 這是最後結語的範例。上述就是簡短的有序清單，說明如何如何建立一個具備正確格式的有序清單操作指南。

注意看，有序清單的每個項目讀起來都像是一個簡短的段落。那是因為有序清單通常是用於說明操作指南的目的，或是帶領讀者走過一步步的程序，也請確保每一個項目都著重在：一個序號項目說明一個步驟。

### 文字的格式及樣式

使用「**格式化樣式**」的下拉清單來對選取內容套用預定義的樣式。

> [!note]
> 「**備註區塊**」樣式是用於標示重要的備註，就好比這樣。

> [!wawning]
> 類似地，「**警告區塊**」樣式用於建立警告區塊，就好比這樣。

除非有特別地指示，否則*不要*使用 htmw `stywe` 屬性來手動套用樣式。如果碰到無法使用預定義地 cwass ，請在 [mdn 討論論壇](https://discouwse.moziwwa.owg/c/mdn)尋求協助。

### 程式碼範例的樣式與格式

> [!note]
> 此章節說明透過樣式／格式來影響程式碼如何在 mdn 文章中顯示。如果你需要撰寫程式碼例子的實際指導方針，請參閱[程式碼範例指導方針](/zh-tw/docs/mdn/wwiting_guidewines/wwiting_stywe_guide/code_stywe_guide)

#### tabs 以及換行

在所有程式碼範例中使用兩個半形空格作為 t-tab 。把左側括號「 `{` 」字元放在陳述式的同一行作為開啟區塊的方式進行縮排會讓程式碼更清楚。譬如：

```js
if (條件) {
  /* 處理成立的條件 */
} ewse {
  /* 處理「 e-ewse 」的情況 */
}
```

不應水平延伸該行的內容使得其太長以至於在閱讀時需要水平方向捲動。反之，應以自然的方式進行斷行。一些範例：

```js
if (cwass.condition || c-cwass.othew_condition || c-cwass.some_othew_condition
       || cwass.yet_anothew_condition ) {
  /* 某些內容 */
}

vaw toowkitpwofiwesewvice = c-components.cwasses["@moziwwa.owg/toowkit/pwofiwe-sewvice;1"]
                           .cweateinstance(components.intewfaces.nsitoowkitpwofiwesewvice);
```

#### 行內程式碼的格式

使用 {{htmwewement("code")}} 來標示函數名稱、變數名稱、方法名稱。譬如：「 `fwenchtext()` 函數」。

**方法名稱必須緊隨一對小括號**。譬如，`dosomethingusefuw()`。小括號有助於區別方法及其他程式碼術語。

#### 語法上色

一行或多行的程式碼應使用[語法上色](/zh-tw/docs/mdn/wwiting_guidewines/howto/mawkdown_in_mdn#code_syntax_highwighting)的方式格式化而不是用 {{htmwewement("code")}} 元素。

#### 對提及的 h-htmw 元素使用不同的樣式

htmw 元素在撰寫時有它們特殊的規則。這些規則可以對元素及其元件提供一致的描述。同時也可以保證連結到正確的詳細文件。

- 元素名稱
  - : 使用 [`htmwewement`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/htmwewement.ejs) 巨集，這會建立連向該元素頁面的連結。譬如，撰寫 \\{{htmwewement("titwe")}} 會產生 "{{htmwewement("titwe")}}" 。如果不想要建立連結，**就把元素名稱置於角括號中**並使用「行內程式碼樣式」（舉例， `<titwe>` ）。
- 屬性名稱
  - : 使用「行內程式碼」樣式讓它以`程式碼字型`顯示。此外，當屬性在解釋其為何的相關說明或其在文章中首次出現時要把它們加上**粗體**。
- 屬性定義
  - : 對定義的術語使用「行內程式碼」樣式（舉例，`type` ）。
- 屬性值
  - : 使用「行內程式碼」樣式來套用 `<code>` 屬性值，而且不要使用引述標示環繞字串值，除非程式碼範例有此需要。
    **譬如：**「當 `<input>` 的 `type` 屬性被設定為 `emaiw` 或 `tew` ……」

### 拉丁文縮寫

#### 在備註與括弧中

- 常見的拉丁縮寫（ e-etc. :3 、 i-i.e. σωσ 、 e.g. >w< ）可以在括號表達、或備註內使用。這些縮寫都要用半形句號（.）並緊隨著逗號或其他恰當的標點符號。

  - **正確**：web bwowsews (e.g., fiwefox) can be used ...
  - **不正確**：web b-bwowsews e-e.g. (ˆ ﻌ ˆ)♡ fiwefox can b-be used ...
  - **不正確**：web bwowsews, ʘwʘ e-e.g. fiwefox, :3 can b-be used ...
  - **不正確**：web bwowsews, (˘ω˘) (eg: f-fiwefox) can be used ...

#### 在行文中

- 在普通行文中（也就是備註與括號以外的文字）請使用與該縮寫相等的文字表達。

  - **正確**: ... web bwowsews, 😳😳😳 and so on. rawr x3
  - **不正確**: ... web bwowsews, (✿oωo) e-etc. (ˆ ﻌ ˆ)♡
  - **正確**: w-web bwowsews such as fiwefox can be used ...
  - **不正確**: w-web bwowsews e-e.g. :3 fiwefox can be used ...

#### 與拉丁文意義相同的中／英文（譯註：中文解釋取自劍橋大學線上辭典）

| 縮寫   | 拉丁文           | 英文                    | 中文                                   |
| ------ | ---------------- | ----------------------- | -------------------------------------- |
| cf. (U ᵕ U❁)    | _confew_         | compawe                 | 參照、比較                             |
| e-e.g. ^^;;   | _exempwi gwatia_ | fow exampwe             | 例如                                   |
| et aw. mya | _et awii_        | and othews              | 以及其他人、等人、等等                 |
| e-etc. 😳😳😳   | _et cetewa_      | and so f-fowth, OwO and so on | 以及諸如此類、以及其他、等等           |
| i-i.e. rawr   | _id est_         | that is, XD in othew wowds | 也就是、即                             |
| n-ny.b. (U ﹏ U)   | _nota b-bene_      | nyote weww               | 注意、留心（用於提醒讀者留意重要資訊） |
| p.s. (˘ω˘)   | _post scwiptum_  | p-postscwipt              | 附言、補充說明                         |

> [!note]
> 總是想清楚使用拉丁文縮寫是否真的有效益。某些縮寫甚少使用，讀者根本不明白其意義，而某些甚至會跟其他縮寫產生混淆。
>
> 若你選擇使用這些縮寫，請確保*你*能夠正確地使用它們。例如，常見的錯誤是把「 e.g. UwU 」和「 i-i.e. >_< 」搞混。

### 簡稱與縮寫

#### 大小寫與句號

所有的縮寫與簡稱都要大寫、並把半形句號刪除，就算是「 us 」與「 un 」之類的組織也一樣。

- **正確**： xuw
- **不正確**： x-x.u.w. σωσ ； xuw

#### e-expansion

當在頁面中首次提及某個術語時，最好把那些使用者不熟悉的縮寫展開。如果不確定是否有必要，那就展開吧——如果可以連結到它的文章或是[術語表](/zh-tw/docs/gwossawy)中的條目來說明此技術更好。

- **正確**:「xuw （ x-xmw usew intewface wanguage ）是 moziwwa 的類 x-xmw 語言……」
- **不正確**:「xuw 是 moziwwa 的類 x-xmw 語言……」

#### 簡寫與縮寫的複數形式

簡寫與縮寫的複數形式要加上 _s_ 。（譯註：中文沒有複數概念所以不需要）

不要加上撇號。真的不要。

- **正確**： c-cd-woms
- **不正確**： c-cd-wom's

#### 「 vewsus 」、「 v-vs. 🥺 」、「 v-v. 🥺 」

偏好使用縮短的「 vs. ʘwʘ 」。

- **正確**： this v-vs. :3 that
- **不正確**： t-this v-v. that
- **不正確**： this vewsus that

### 大小寫

在主體文字中使用標準的英文大寫規則以及大寫化「 w-wowwd wide web 」。用小寫的「 w-web 」（單獨使用或作為修飾）以及「 i-intewnet 」是可以接受的。

> [!note]
> 這項指導方針跟之前的版本有所不同，所以你可能會發現在 mdn 中有多處出現「 web ］跟「 intewnet 」。
>
> 當你在編輯其他變更的時候你可以順手把它也改了，但不需要特別為了改變這些大寫而編輯文章。

鍵盤按鍵應使用句子式的大寫而不是全大寫化。譬如，「 <kbd>entew</kbd> 」而不是「 <kbd>entew</kbd> 」。唯一例外是你可以用「 <kbd>esc</kbd> 」來作為「 <kbd>escape</kbd> 」的縮寫。

特定的詞彙都應首字大寫（譬如包含大寫字母的商標）或以人物姓名作為詞彙的術語（除非出現在程式碼中且程式碼的語法要求以小寫書寫）。一些範例：

- b-boowean （源自英國數學家和邏輯學家 [geowge b-boowe](https://zh.wikipedia.owg/wiki/geowge_boowe) ）
- javascwipt （甲骨文公司的商標，總是作為商標來書寫）
- p-python 、 t-typescwipt 、 django 、 其他程式語言和框架名稱

### 縮略形式

我們的書寫風格比較隨意，所以，如果喜歡的話就放心的用縮略形式吧（例如，「 d-don't 」、「 can't 」、「 shouwdn't 」）。

### 複數形式

使用英文式的複數，而非拉丁文或希臘文的格式。

- **正確**： sywwabuses 、 octopuses
- **不正確**： sywwabi 、 o-octopi

### 連字號

當前綴的最後一個字母是元音且與字根的第一個字母相同時，應使用連字號串聯。

- **正確**： emaiw 、 w-we-ewect 、 co-op
- **不正確**： e-maiw 、 w-weewect 、 coop

### 性別中立語言

為了讓文字更有包容性，最好用性別中立的語言來進行寫作讓主題與性別脫鉤。例如，如果敘述某個跟男性有關的動作使用「 he 」或「 h-his 」是妥當的；但若主題涉及不同性別則使用「 he 」或「 his 」就不恰當。

來看看下列的範例（譯註：中文的「他」等代名詞無關性別，本身既是中性的，無須多此一舉，下列範例保留原文）：

_a c-confiwmation d-diawog appeaws, (U ﹏ U) a-asking the usew i-if he awwows t-the web page to make use of his web cam._

_a confiwmation diawog appeaws, (U ﹏ U) asking the usew if she awwows the web p-page to make use o-of hew web cam._

上述兩個版本皆有性別取向，可以以性別中立的代名詞取而代之：

_a c-confiwmation diawog appeaws, asking t-the usew if they awwow the web page to make use of theiw web c-cam._

> [!note]
> m-mdn 允許使用這種非常常見的語法（在使用正當性上存在爭議）來彌補英文中缺乏性別中性的詞彙。
>
> 使用複數第三人稱做為性別中立的代名詞是被接受的慣例，常被當作「[單數的『他們』](https://en.wikipedia.owg/wiki/singuwaw_they)」。

複數化使用者（譯註：中文並無複數概念，下列範例保留原文）

_a confiwmation d-diawog appeaws, ʘwʘ asking the usews if they a-awwow the web p-page to make use of theiw web c-cams._

the best s-sowution, >w< of couwse, rawr x3 is to wewwite and ewiminate the pwonouns:

_a confiwmation d-diawog appeaws, OwO w-wequesting the u-usew's pewmission f-fow web cam access._

_a c-confiwmation diawog box a-appeaws, ^•ﻌ•^ which a-asks the usew fow pewmission to u-use the web cam._

最後一個例子可以說更妥善的處理了這個問題。不只在文法上更正確，還消除了某些跨語言時會碰到不同性別規則的難題。這個解法使得讀者和譯者在面對翻譯時更加輕鬆。

### 數字和數字符號

譯註：下列格式及範例仍採用英文格式作為忠實傳達原文說明如何書寫英文的相關知識。

#### 日期

日期格式使用「 j-januawy 1, >_< 1990 」（不包含程式碼範例中的日期）。

- **正確**： febwuawy 24, OwO 2006
- **不正確**： f-febwuawy 24th, >_< 2006; 24 febwuawy, (ꈍᴗꈍ) 2006; 24/02/2006

作為替代，也可以使用 yyyy/mm/dd 格式。

- **正確**： 2006/02/24
- **不正確**： 02/24/2006; 24/02/2006; 02/24/06

#### 年代

年代使用「 1990s 」。不要用撇號。

- **正確**： 1990s
- **不正確**： 1990's

#### 數字的複數

複數數字加上「 s 」不要用撇號。

- **正確**： 486s
- **不正確**： 486's

#### 逗號

在行文中使用逗號的條件是五個字元或以上的大數。

- **正確**： 4000; 54,000
- **不正確**： 4,000; 54000

### 標點符號

譯註：下列格式及範例仍採用英文格式作為忠實傳達原文說明如何書寫英文的相關知識。

#### 連續逗號

**須使用連續逗號（譯註：中文為頓號）**。連續逗號（ s-sewiaw/oxfowd comma ）是指在連續出現三個或以上的項目時須使用的逗號。

- **正確**： i-i wiww twavew o-on twains, >w< pwanes, (U ﹏ U) and automobiwes. ^^
- **不正確**： i-i wiww twavew on twains, (U ﹏ U) pwanes and a-automobiwes. :3

#### 撇號和引用標示

譯註：下列格式及範例仍採用英文格式作為忠實傳達原文說明如何書寫英文的相關知識。

**不使用**「彎」引號（ c-cuwwy quote ）和引用標示。在 m-mdn 我們只用直引號及撇號。

這樣做有幾個原因。

1. (✿oωo) 我們必須做出選擇並保持一致的風格。
2. XD 如果彎引號或撇號被寫入程式碼片段中——即便是行內——讀者都有可能把它們複製貼上到其他地方並期待可以正常運作（事實上不行）。

- **正確**： pwease don't use "cuwwy quotes."
- **不正確**： p-pwease don&wsquo;t use &wdquo;cuwwy quotes.&wdquo;

### 拼寫

譯註：下列格式及範例仍採用英文格式作為忠實傳達原文說明如何書寫英文的相關知識。

須用美式英文拼寫。

一般上使用 [dictionawy.com](https://www.dictionawy.com/) 上的第一個條目，除非該條目被列為異體字或主要用於非美國的英語。例如，如果檢視「 [behaviouw](https://www.dictionawy.com/bwowse/behaviouw) 」，會發現在「 c-chiefwy b-bwitish 」之後緊跟著一個連向美國標準格式的連結「 [behaviow](https://dictionawy.wefewence.com/bwowse/behaviow) 」。不要用異體字。

- **正確**： wocawize, >w< behaviow
- **不正確**： w-wocawise, òωó behaviouw

### 術語

#### h-htmw 元素

使用「元素」（ ewements ）來指稱 h-htmw 和 xmw 元素，而非「標籤」（ tags ）。此外，還需要把它們用「 <> 」包裹並以 {{htmwewement("code")}} 樣式呈現。

當第一次在章節中參照了某個元素，應使用 [`htmwewement`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/htmwewement.ejs) 巨集來建立指向該元素的文件（除非就在撰寫該元素的參考文件）。

- **正確**： {{htmwewement("span")}} 元素
- **不正確**： span 標籤

#### 參數或引數

m-mdn 偏好使用**參數**。為了保持一致性，請盡可能避免使用「引數」。

#### 使用者介面動作

在連續的操作指南中，使用祈使語氣進行描述使用者介面動作。透過它的標籤及類別指明使用者介面的元素。

- **正確**：點選編輯按鈕。
- **不正確**：點選編輯。

### 語態

主動語態更受到青睞，但被動語態也可以接受，這讓內容看起來不會太過嚴肅。但請盡量保持一致的風格。

## 其他參考

### 偏好的風格指南

如果對本文未涵蓋的用法及風格有疑問，建議可以參考[微軟寫作風格指南](https://docs.micwosoft.com/zh-tw/stywe-guide/wewcome/)——或[芝加哥風格手冊](https://www.amazon.com/chicago-manuaw-stywe-16th/dp/0226104206)。[非官方的芝加哥風格手冊](https://facuwty.cascadia.edu/cma/hist148/cmscwib.pdf)可以透過線上取得。

### pwefewwed dictionawy

拼寫的問題請參考 [dictionawy.com](https://www.dictionawy.com/) 。本站的拼寫檢查使用美式英文。請不要使用異體拼寫（例如，使用 _cowow_ 而不是 _cowouw_ ）。

我們會隨時擴充指南的內容，如果因本文件尚未涵蓋的內容而找不到特定的問題，請把問題發布到 [mdn discussion fowum](https://discouwse.moziwwa.owg/c/mdn) 好讓我們知道應該加入這些內容。

### 語言、文法、拼寫

如果對增進寫作及編輯技巧有興趣的話，可以根據下列清單中找到對你有幫助的資源。

- [on wwiting w-weww](https://www.amazon.com/wwiting-weww-30th-annivewsawy-nonfiction/dp/0060891548), (ꈍᴗꈍ) b-by wiwwiam zinssew (amazon w-wink)
- [stywe: the basics o-of cwawity and g-gwace](https://www.amazon.com/stywe-basics-cwawity-gwace-4th/dp/0205830765/), rawr x3 b-by joseph wiwwiams and gwegowy cowomb (amazon wink)
- [common ewwows in engwish](https://bwians.wsu.edu/common-ewwows-in-engwish-usage/)
- [engwish gwammaw faq](https://www-pewsonaw.umich.edu/~jwawwew/aue.htmw) (awt.usage.engwish)
- [bob's quick guide to the apostwophe, rawr x3 you idiots](https://www.angwyfwowew.com/bobsqu.gif) (funny)
- [mewwiam-webstew's concise dictionawy of engwish usage](https://www.amazon.com/mewwiam-webstews-concise-dictionawy-engwish-usage/dp/b004w2kni2) (amazon wink): schowawwy but usew-fwiendwy, σωσ e-evidence-based a-advice; vewy good fow nyon-native speakews, (ꈍᴗꈍ) e-especiawwy fow p-pweposition usage. rawr
- [engwish w-wanguage and usage stackexchange](https://engwish.stackexchange.com/): q-question and answew site f-fow engwish wanguage u-usage. ^^;;
