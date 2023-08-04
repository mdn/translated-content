---
title: 寫作風格指南
slug: MDN/Writing_guidelines/Writing_style_guide
---

{{MDNSidebar}}

為了讓文件更加組織化、標準化而易於閱讀，MDN 風格指南描述了文件的組織方式、拼寫、格式等問題。這些規則只是指導方針而非強制規定。與格式相比，我們對內容更感興趣，因此不用覺得在開始貢獻之前有被迫要學習這些指南的壓力。若之後有其他支援者修改了你的內容以便讓它符合這些指南，你也不需要因此而感到沮喪或驚訝。

在語言方面，本指南主要適用於英語文件，其它語言可擁有（且歡迎建立）自己的風格指南。它們會以當地語系團隊頁面的子頁面發佈。

## 基礎

維持整份文件的一致性是各大文件發表風格指南的基礎。以下段落將會列出這些基礎概念來協助您。

### 頁面標題

頁面標題會展示於搜索結果，也可用於在頂部的麵包屑導覽列中的層次結構以建構頁面。網頁標題（既顯示在頁面頂端及搜尋結果）也會因頁面的「路徑」而異，這些路徑就是組成頁面網址的一部分—— 「`<locale>/docs/`」 。

#### 標題與頁首的大小寫

頁面標題與章節標題應使用一般句子的大小寫形式（只對句首字母和專有名詞大寫），而非新聞式標題：

- **正確**：「A new method for creating JavaScript rollovers」
- **錯誤**：「A New Method for Creating JavaScript Rollovers」

有些舊的頁面編寫於本樣式規則定版之前。若你願意，可隨時更新它們。我們會逐漸完善它們。

#### 選擇標題與路徑

頁面路徑應保持簡短。當建立新的層級時，該層級的路徑應只由一兩個單詞組成。

至於頁面標題，只要在合理範圍內，長度可以隨意，不過它應當是描述性的。

#### 建立新的子目錄

當你需要加入關於某個主題或主題範圍的文章時，一般可以建立一個目錄頁面，然後為這些文章分別加入子頁面。目錄頁面應當以一兩段對該主題或技術的描述開頭，接著提供一個子頁面的清單，並對每個子頁面做簡短的描述。你可以用一些我們建立的巨集來將頁面自動插入到該清單中。

以 [JavaScript](/zh-TW/docs/Web/JavaScript) 指南為例，它的結構如下：

- [JavaScript/指南](/zh-TW/docs/Web/JavaScript/Guide) ——主內容表頁面
- [JavaScript/指南/JavaScript 概述](/zh-TW/docs/Web/JavaScript/Guide/JavaScript_Overview)
- [JavaScript/指南/函數](/zh-TW/docs/JavaScript/Guide/Functions)
- [JavaScript/指南/物件模型細節](/zh-TW/docs/JavaScript/Guide/Details_of_the_Object_Model)

請儘量避免將你的文章放在頂層，不然會拖慢網站的下載速度，降低網站導覽和搜索的效率。

### 一般文章內容指導方針

任何文件的篇幅都應該適可而止。如果你侃侃而談或提供過多的細節，文章會變得乏味且鮮少被閱讀。文章內容涵蓋恰當的篇幅有許多好處，其中就包含：讓讀者找到他們真正想要的資訊、提供搜尋引擎足夠好的素材以便用於分析及評價文章的內容。

本文只針對前者（提供讀者需要的資訊）進行說明。對於如何確保文章恰當的被搜尋引擎分類及評價，請移步到 [MDN 如何針對 SEO 進行寫作](/zh-TW/docs/MDN/Contribute/Howto/Write_for_SEO)。

寫作的目標是要讓讀者取得所有必要資訊的同時又不會陷入太多的細節中。以下是這個主題的相關建議。

#### 考量讀者想要的

要知道這些僅僅只是建議。某些建議並非適用於任何場景。時時刻刻考量讀者想要什麼。譬如，有關網路技術的進階文章就不需要講述太多有關網路基礎的觀念。

#### 提供有用的概述

如果文章可能涵蓋讀者有興趣的內容，確保文章的概述——開頭的段落或是第一個標題後的段落——能夠提供讀者足夠的資訊。

對於指南或是教學類型的內容，概述應該要能夠涵蓋讀者須知的主題且他們應先具備的知識；若有需要。同時也必須提到哪些已經被文件化或經討論的技術或 API 並以連結的方式提供相關的資訊，也別忘了給予文章內容中有幫助的提示。

##### 範例：過於簡短！

這個範例就過於簡短。它缺乏太多資訊了，譬如，所謂的「 stroke 」 文字到底是什麼意思、文字又會被繪製在哪裡等。

> **`CanvasRenderingContext2D.strokeText()`** draws a string.

##### 範例：過於冗長！

更新後的概述反而有過於冗長的問題。涵蓋了太多的資訊了，而且用來描述其他方法以及屬性的篇幅過於龐大。

反之，概述應該著重在 `strokeText()` 方法本身，在輔以適當的參考指南作為其他細節的補充

> When called, the Canvas 2D API method **`CanvasRenderingContext2D.strokeText()`** strokes the characters in the specified string beginning at the coordinates specified, using the current pen color. In the terminology of computer graphics, "stroking" text means to draw the outlines of the glyphs in the string without filling in the contents of each character with color.
>
> The text is drawn using the context's current font as specified in the context's {{domxref("CanvasRenderingContext2D.font", "font")}} property.
>
> The placement of the text relative to the specified coordinates are determined by the context's `textAlign`, `textBaseline`, and `direction` properties. `textAlign` controls the placement of the string relative to the X coordinate specified; if the value is `"center"`, then the string is drawn starting at `x - (stringWidth / 2)`, placing the specified X-coordinate in the middle of the string. If the value is `"left"`, the string is drawn starting at the specified value of `x`. And if `textAlign` is `"right"`, the text is drawn such that it ends at the specified X-coordinate.
>
> (etc etc etc...)
>
> You can, optionally, provide a fourth parameter that lets you specify a maximum width for the string, in pixels. If you provide this parameter, the text is compressed horizontally or scaled (or otherwise adjusted) to fit inside a space that wide when being drawn.
>
> You can call the **`fillText()`** method to draw a string's characters as filled with color instead of only drawing the outlines of the characters.

##### 範例：恰到好處！

下列是一個針對 `strokeText()` 方法更好的概述。

> The {{domxref("CanvasRenderingContext2D")}} method **`strokeText()`**, part of the [Canvas 2D API](/zh-TW/docs/Web/API/Canvas_API), strokes—that is, draws the outlines of—the characters of a specified string, anchored at the position indicated by the given X and Y coordinates. The text is drawn using the context's current {{domxref("CanvasRenderingContext2D.font", "font")}}, and is justified and aligned according to the {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, and {{domxref("CanvasRenderingContext2D.direction", "direction")}} properties.
>
> For more details and further examples, see the [Text](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#text) section on the Drawing graphics page as well as our main article on the subject, [Drawing text](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

#### 涵蓋所有相關的範例

使用範例來進一步闡明每一個使用到的參數以及任何可能出現的少數邊際案例是非常重要的。使用範例來展示常見問題以及可能引發問題的情況及他們的解決方式。

一般而言會期待多數的頁面都可以包含一到多個範例，最好有超過一個範例。

每一個範例須有前導的文字用於說明該範例所為何事以及讀者在閱讀及試驗該範例前的須知事項。

##### 程式碼範例

每一段程式碼都應具有其如何運作的說明。大型段落的程式碼應切割成更小的部分以便於進行個別的描述。

每一段程式碼之後的文字應解釋所有相關資訊並控制好描述細節的程度：

- 如果程式碼相對簡單且並直接使用到任何已經建檔的 API ，那簡略的對其說明它是什麼以及為何在此即可。
- 如果程式碼過於艱深、使用到已經建檔的 API 、有技術上的創新，則需要提供更細緻的說明。

當加入[實際範例](/zh-TW/docs/MDN/Structures/Live_samples)時，所有位於範例區域內的 {{HTMLElement("pre")}} 區塊會在執行範例前串聯起來，這便於讓你把 HTML 、 CSS 、 JavaScript 分開來處理，並讓它們擁有自己的描述、標題等。這使得程式碼的建檔變得更強大且更彈性。

#### 過於簡短的文章很難被找到

如果文章的篇幅過於簡短，那可能搜尋引擎無法對其合理的索引（甚至根本無法索引）。根據經驗，文章的本體應最少有 250-300 字的篇幅。不用特別對文章內容充數，把這個原則當作最低的目標要求就足夠了。

### 標題

當開啟新的章節段落務必要加上標題。標題的層級以遞減的方式排序： {{HTMLElement("h2")}} 再來是 {{HTMLElement("h3")}} 再來是 {{HTMLElement("h4")}} ，不要跳過任何一個層級。

因為 H1 已經被保留作為頁面的標題使用，因此 H2 是章節段落可使用的最高層級標題。如果使用到超過三或四個等級的標題，請考慮把文章重新劃分成數個篇幅更短的文章並提供一個目錄頁面。

#### 標題的為與不為

- **不要建立單獨的子章節**。不要把一個主題拆成單獨的子主題。請用兩個或以上的子標題或乾脆都不要有。
- **不要對標題使用樣式及 classes**。這當然也包含了不要用 {{HTMLElement("code")}} 元素。因此請不要把標題寫成「使用 `SuperAmazingThing` 介面」，而是寫成「使用 SuperAmazingThing 介面」這樣就好。
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
> 1. 以標題或簡短的段落起頭，接著進入操作指南的部分。在開始進行操作指南前提供使用者相關的脈絡是非常重要的。
> 2. 開始建立操作指南，每一個步驟的項目都應有它自己的序號。操作指南可能會延伸出不少東西，所以重點把它寫得清楚且使用正確的標點符號。
> 3. 在完成操作指南後，接續著有序清單給予結語或說明有哪些在完成操作指南後應期待出現的結果。
>
> 這是最後結語的範例。上述就是簡短的有序清單，說明如何如何建立一個具備正確格式的有序清單操作指南。

注意看，有序清單的每個項目讀起來都像是一個簡短的段落。那是因為有序清單通常是用於說明操作指南的目的，或是帶領讀者走過一步步的程序，也請確保每一個項目都著重在：一個序號項目說明一個步驟。

### 文字的格式及樣式

使用「**格式化樣式**」的下拉清單來對選取內容套用預定義的樣式。

> **備註：** 「**備註區塊**」樣式是用於標示重要的備註，就好比這樣。

> **警告：** 類似地，「**警告區塊**」樣式用於建立警告區塊，就好比這樣。

除非有特別地指示，否則*不要*使用 HTML `style` 屬性來手動套用樣式。如果碰到無法使用預定義地 class ，請在 [MDN 討論論壇](https://discourse.mozilla.org/c/mdn)尋求協助。

### 程式碼範例的樣式與格式

> **備註：** 此章節說明透過樣式／格式來影響程式碼如何在 MDN 文章中顯示。如果你需要撰寫程式碼例子的實際指導方針，請參閱[程式碼範例指導方針](/zh-TW/docs/MDN/Guidelines/Code_guidelines)

#### Tabs 以及換行

在所有程式碼範例中使用兩個半形空格作為 tab 。把左側括號「 `{` 」字元放在陳述式的同一行作為開啟區塊的方式進行縮排會讓程式碼更清楚。譬如：

```js
if (條件) {
  /* 處理成立的條件 */
} else {
  /* 處理「 else 」的情況 */
}
```

不應水平延伸該行的內容使得其太長以至於在閱讀時需要水平方向捲動。反之，應以自然的方式進行斷行。一些範例：

```js
if (class.CONDITION || class.OTHER_CONDITION || class.SOME_OTHER_CONDITION
       || class.YET_ANOTHER_CONDITION ) {
  /* 某些內容 */
}

var toolkitProfileService = Components.classes["@mozilla.org/toolkit/profile-service;1"]
                           .createInstance(Components.interfaces.nsIToolkitProfileService);
```

#### 行內程式碼的格式

使用 {{HTMLElement("code")}} 來標示函數名稱、變數名稱、方法名稱。譬如：「 `frenchText()` 函數」。

**方法名稱必須緊隨一對小括號**。譬如，`doSomethingUseful()`。小括號有助於區別方法及其他程式碼術語。

#### 語法上色

一行或多行的程式碼應使用[語法上色](/zh-TW/docs/MDN/Guidelines/CSS_style_guide#code_syntax_highlighting)的方式格式化而不是用 {{HTMLElement("code")}} 元素。

#### 對提及的 HTML 元素使用不同的樣式

HTML 元素在撰寫時有它們特殊的規則。這些規則可以對元素及其元件提供一致的描述。同時也可以保證連結到正確的詳細文件。

- 元素名稱
  - : 使用 [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) 巨集，這會建立連向該元素頁面的連結。譬如，撰寫 \\{{HTMLElement("title")}} 會產生 "{{HTMLElement("title")}}" 。如果不想要建立連結，**就把元素名稱置於角括號中**並使用「行內程式碼樣式」（舉例， `<title>` ）。
- 屬性名稱
  - : 使用「行內程式碼」樣式讓它以`程式碼字型`顯示。此外，當屬性在解釋其為何的相關說明或其在文章中首次出現時要把它們加上**粗體**。
- 屬性定義
  - : 對定義的術語使用「行內程式碼」樣式（舉例，`type` ）。
- 屬性值
  - : 使用「行內程式碼」樣式來套用 `<code>` 屬性值，而且不要使用引述標示環繞字串值，除非程式碼範例有此需要。
    **譬如：**「當 `<input>` 的 `type` 屬性被設定為 `email` 或 `tel` ……」

### 拉丁文縮寫

#### 在備註與括弧中

- 常見的拉丁縮寫（ etc. 、 i.e. 、 e.g. ）可以在括號表達、或備註內使用。這些縮寫都要用半形句號（.）並緊隨著逗號或其他恰當的標點符號。

  - **正確**：Web browsers (e.g., Firefox) can be used ...
  - **不正確**：Web browsers e.g. Firefox can be used ...
  - **不正確**：Web browsers, e.g. Firefox, can be used ...
  - **不正確**：Web browsers, (eg: Firefox) can be used ...

#### 在行文中

- 在普通行文中（也就是備註與括號以外的文字）請使用與該縮寫相等的文字表達。

  - **正確**: ... web browsers, and so on.
  - **不正確**: ... web browsers, etc.
  - **正確**: Web browsers such as Firefox can be used ...
  - **不正確**: Web browsers e.g. Firefox can be used ...

#### 與拉丁文意義相同的中／英文（譯註：中文解釋取自劍橋大學線上辭典）

| 縮寫   | 拉丁文           | 英文                    | 中文                                   |
| ------ | ---------------- | ----------------------- | -------------------------------------- |
| cf.    | _confer_         | compare                 | 參照、比較                             |
| e.g.   | _exempli gratia_ | for example             | 例如                                   |
| et al. | _et alii_        | and others              | 以及其他人、等人、等等                 |
| etc.   | _et cetera_      | and so forth, and so on | 以及諸如此類、以及其他、等等           |
| i.e.   | _id est_         | that is, in other words | 也就是、即                             |
| N.B.   | _nota bene_      | note well               | 注意、留心（用於提醒讀者留意重要資訊） |
| P.S.   | _post scriptum_  | postscript              | 附言、補充說明                         |

> **備註：** 總是想清楚使用拉丁文縮寫是否真的有效益。某些縮寫甚少使用，讀者根本不明白其意義，而某些甚至會跟其他縮寫產生混淆。
>
> 若你選擇使用這些縮寫，請確保*你*能夠正確地使用它們。例如，常見的錯誤是把「 e.g. 」和「 i.e. 」搞混。

### 簡稱與縮寫

#### 大小寫與句號

所有的縮寫與簡稱都要大寫、並把半形句號刪除，就算是「 US 」與「 UN 」之類的組織也一樣。

- **正確**： XUL
- **不正確**： X.U.L. ； Xul

#### Expansion

當在頁面中首次提及某個術語時，最好把那些使用者不熟悉的縮寫展開。如果不確定是否有必要，那就展開吧——如果可以連結到它的文章或是[術語表](/zh-TW/docs/Glossary)中的條目來說明此技術更好。

- **正確**:「XUL （ XML User Interface Language ）是 Mozilla 的類 XML 語言……」
- **不正確**:「XUL 是 Mozilla 的類 XML 語言……」

#### 簡寫與縮寫的複數形式

簡寫與縮寫的複數形式要加上 _s_ 。（譯註：中文沒有複數概念所以不需要）

不要加上撇號。真的不要。

- **正確**： CD-ROMs
- **不正確**： CD-ROM's

#### 「 Versus 」、「 vs. 」、「 v. 」

偏好使用縮短的「 vs. 」。

- **正確**： this vs. that
- **不正確**： this v. that
- **不正確**： this versus that

### 大小寫

在主體文字中使用標準的英文大寫規則以及大寫化「 World Wide Web 」。用小寫的「 web 」（單獨使用或作為修飾）以及「 internet 」是可以接受的。

> **備註：** 這項指導方針跟之前的版本有所不同，所以你可能會發現在 MDN 中有多處出現「 Web ］跟「 Internet 」。
>
> 當你在編輯其他變更的時候你可以順手把它也改了，但不需要特別為了改變這些大寫而編輯文章。

鍵盤按鍵應使用句子式的大寫而不是全大寫化。譬如，「 <kbd>Enter</kbd> 」而不是「 <kbd>ENTER</kbd> 」。唯一例外是你可以用「 <kbd>ESC</kbd> 」來作為「 <kbd>Escape</kbd> 」的縮寫。

特定的詞彙都應首字大寫（譬如包含大寫字母的商標）或以人物姓名作為詞彙的術語（除非出現在程式碼中且程式碼的語法要求以小寫書寫）。一些範例：

- Boolean （源自英國數學家和邏輯學家 [George Boole](https://zh.wikipedia.org/wiki/George_Boole) ）
- JavaScript （甲骨文公司的商標，總是作為商標來書寫）
- Python 、 TypeScript 、 Django 、 其他程式語言和框架名稱

### 縮略形式

我們的書寫風格比較隨意，所以，如果喜歡的話就放心的用縮略形式吧（例如，「 don't 」、「 can't 」、「 shouldn't 」）。

### 複數形式

使用英文式的複數，而非拉丁文或希臘文的格式。

- **正確**： syllabuses 、 octopuses
- **不正確**： syllabi 、 octopi

### 連字號

當前綴的最後一個字母是元音且與字根的第一個字母相同時，應使用連字號串聯。

- **正確**： email 、 re-elect 、 co-op
- **不正確**： e-mail 、 reelect 、 coop

### 性別中立語言

為了讓文字更有包容性，最好用性別中立的語言來進行寫作讓主題與性別脫鉤。例如，如果敘述某個跟男性有關的動作使用「 he 」或「 his 」是妥當的；但若主題涉及不同性別則使用「 he 」或「 his 」就不恰當。

來看看下列的範例（譯註：中文的「他」等代名詞無關性別，本身既是中性的，無須多此一舉，下列範例保留原文）：

_A confirmation dialog appears, asking the user if he allows the Web page to make use of his Web cam._

_A confirmation dialog appears, asking the user if she allows the Web page to make use of her Web cam._

上述兩個版本皆有性別取向，可以以性別中立的代名詞取而代之：

_A confirmation dialog appears, asking the user if they allow the Web page to make use of their Web cam._

> **備註：** MDN 允許使用這種非常常見的語法（在使用正當性上存在爭議）來彌補英文中缺乏性別中性的詞彙。
>
> 使用複數第三人稱做為性別中立的代名詞是被接受的慣例，常被當作「[單數的『他們』](https://en.wikipedia.org/wiki/Singular_they)」。

複數化使用者（譯註：中文並無複數概念，下列範例保留原文）

_A confirmation dialog appears, asking the users if they allow the web page to make use of their web cams._

The best solution, of course, is to rewrite and eliminate the pronouns:

_A confirmation dialog appears, requesting the user's permission for web cam access._

_A confirmation dialog box appears, which asks the user for permission to use the web cam._

最後一個例子可以說更妥善的處理了這個問題。不只在文法上更正確，還消除了某些跨語言時會碰到不同性別規則的難題。這個解法使得讀者和譯者在面對翻譯時更加輕鬆。

### 數字和數字符號

譯註：下列格式及範例仍採用英文格式作為忠實傳達原文說明如何書寫英文的相關知識。

#### 日期

日期格式使用「 January 1, 1990 」（不包含程式碼範例中的日期）。

- **正確**： February 24, 2006
- **不正確**： February 24th, 2006; 24 February, 2006; 24/02/2006

作為替代，也可以使用 YYYY/MM/DD 格式。

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

**須使用連續逗號（譯註：中文為頓號）**。連續逗號（ serial/Oxford comma ）是指在連續出現三個或以上的項目時須使用的逗號。

- **正確**： I will travel on trains, planes, and automobiles.
- **不正確**： I will travel on trains, planes and automobiles.

#### 撇號和引用標示

譯註：下列格式及範例仍採用英文格式作為忠實傳達原文說明如何書寫英文的相關知識。

**不使用**「彎」引號（ curly quote ）和引用標示。在 MDN 我們只用直引號及撇號。

這樣做有幾個原因。

1. 我們必須做出選擇並保持一致的風格。
2. 如果彎引號或撇號被寫入程式碼片段中——即便是行內——讀者都有可能把它們複製貼上到其他地方並期待可以正常運作（事實上不行）。

- **正確**： Please don't use "curly quotes."
- **不正確**： Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### 拼寫

譯註：下列格式及範例仍採用英文格式作為忠實傳達原文說明如何書寫英文的相關知識。

須用美式英文拼寫。

一般上使用 [Dictionary.com](https://www.dictionary.com/) 上的第一個條目，除非該條目被列為異體字或主要用於非美國的英語。例如，如果檢視「 [behaviour](https://www.dictionary.com/browse/behaviour) 」，會發現在「 Chiefly British 」之後緊跟著一個連向美國標準格式的連結「 [behavior](https://dictionary.reference.com/browse/behavior) 」。不要用異體字。

- **正確**： localize, behavior
- **不正確**： localise, behaviour

### 術語

#### HTML 元素

使用「元素」（ elements ）來指稱 HTML 和 XML 元素，而非「標籤」（ tags ）。此外，還需要把它們用「 <> 」包裹並以 {{HTMLElement("code")}} 樣式呈現。

當第一次在章節中參照了某個元素，應使用 [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) 巨集來建立指向該元素的文件（除非就在撰寫該元素的參考文件）。

- **正確**： {{HTMLElement("span")}} 元素
- **不正確**： span 標籤

#### 參數或引數

MDN 偏好使用**參數**。為了保持一致性，請盡可能避免使用「引數」。

#### 使用者介面動作

在連續的操作指南中，使用祈使語氣進行描述使用者介面動作。透過它的標籤及類別指明使用者介面的元素。

- **正確**：點選編輯按鈕。
- **不正確**：點選編輯。

### 語態

主動語態更受到青睞，但被動語態也可以接受，這讓內容看起來不會太過嚴肅。但請盡量保持一致的風格。

## 其他參考

### 偏好的風格指南

如果對本文未涵蓋的用法及風格有疑問，建議可以參考[微軟寫作風格指南](https://docs.microsoft.com/zh-tw/style-guide/welcome/)——或[芝加哥風格手冊](https://www.amazon.com/Chicago-Manual-Style-16th/dp/0226104206)。[非官方的芝加哥風格手冊](https://faculty.cascadia.edu/cma/HIST148/cmscrib.pdf)可以透過線上取得。

### Preferred dictionary

拼寫的問題請參考 [Dictionary.com](https://www.dictionary.com/) 。本站的拼寫檢查使用美式英文。請不要使用異體拼寫（例如，使用 _color_ 而不是 _colour_ ）。

我們會隨時擴充指南的內容，如果因本文件尚未涵蓋的內容而找不到特定的問題，請把問題發布到 [MDN discussion forum](https://discourse.mozilla.org/c/mdn) 好讓我們知道應該加入這些內容。

### 語言、文法、拼寫

如果對增進寫作及編輯技巧有興趣的話，可以根據下列清單中找到對你有幫助的資源。

- [On Writing Well](https://www.amazon.com/Writing-Well-30th-Anniversary-Nonfiction/dp/0060891548), by William Zinsser (Amazon link)
- [Style: The Basics of Clarity and Grace](https://www.amazon.com/Style-Basics-Clarity-Grace-4th/dp/0205830765/), by Joseph Williams and Gregory Colomb (Amazon link)
- [Common Errors in English](https://brians.wsu.edu/common-errors-in-english-usage/)
- [English Grammar FAQ](https://www-personal.umich.edu/~jlawler/aue.html) (alt.usage.english)
- [Bob's quick guide to the apostrophe, you idiots](https://www.angryflower.com/bobsqu.gif) (funny)
- [Merriam-Webster's Concise Dictionary of English Usage](https://www.amazon.com/Merriam-Websters-Concise-Dictionary-English-Usage/dp/B004L2KNI2) (Amazon link): Scholarly but user-friendly, evidence-based advice; very good for non-native speakers, especially for preposition usage.
- [English Language and Usage StackExchange](https://english.stackexchange.com/): Question and answer site for English language usage.
