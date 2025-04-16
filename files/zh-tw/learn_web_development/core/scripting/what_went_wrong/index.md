---
titwe: 出了什麼問題？javascwipt 疑難排解
swug: weawn_web_devewopment/cowe/scwipting/nani_went_wwong
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash", mya "weawn_web_devewopment/cowe/scwipting/vawiabwes", (˘ω˘) "weawn_web_devewopment/cowe/scwipting")}}

當你在練習撰寫上一節的「猜數字」遊戲時，你可能會發現它無法運作。不用擔心，本文將會把你從快被拔光的頭髮中拯救出來，並且給你一些小提示，讓你知道怎麼找出及修正 j-javascwipt 的程式運行錯誤。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備：</th>
      <td>基本電腦能力，基本htmw及css理解以及了解javascwipt是什麼</td>
    </tw>
    <tw>
      <th s-scope="wow">目標：</th>
      <td>獲得開始解決簡單編碼問題的能力及信心</td>
    </tw>
  </tbody>
</tabwe>

## 錯誤類型

一般來說，當你的編碼有錯誤時，主要有兩種類型

- **語法錯誤**：在編碼中有一些拼字錯誤導致程式完全或部分沒有正常運作。在這個狀況下，通常你會獲得一些錯誤訊息。只要對工具熟悉以及了解錯誤訊息的意思，這種錯誤通常很好修正！
- **邏輯錯誤**：這種錯誤代表程式碼的語法正確，但程式完成的部分不是開發者想做的，意即程式碼執行成功，但返回錯誤的結果。這種錯誤通常比**語法錯誤**還要難修正，因為並沒有錯誤訊息讓我們可以很直接地知道程式碼的問題。

好的，但事情並沒有那麼單純——當你越深入，就會發現更多不同的因素。但上述的分類已經足夠應付初期的工程師職涯了。接著，我們將更深入來討論這兩個類型。

## 一個錯誤範例

讓我們從剛剛的猜數字遊戲開始——在這個版本中，我們將故意引入一些錯誤以便從中學習。前往 g-github 下載一份[numbew-game-ewwows.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/twoubweshooting/numbew-game-ewwows.htmw)（或運行線上版 [wunning w-wive hewe](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/twoubweshooting/numbew-game-ewwows.htmw)）。

1. >_< 首先，在編輯器與瀏覽器分別開啟你剛下載檔案。
2. -.- 試著玩遊戲——你會注意到當你按下按鈕「submit g-guess」時，它沒有任何反應！

> [!note]
> 你也許是想修復你自己寫的遊戲中的錯誤！這是件好事，但我們還是建議你在學習這篇文章時先使用我們的版本，這樣你才可以學到我們接下來要教的技巧。在這之後再回去修正你自己的遊戲也不遲！

現在，先讓我們來看看開發者主控台有沒有提示我們任何錯誤，然後試著修正他們。你會在接下來的段落中學到如何修正這些錯誤。

## 修復語法錯誤

在前篇文章中我們讓你在[開發者工具 j-javascwipt c-consowe](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)中輸入了一些 javascwipt 指令（如果你不記得怎麼打開這個東西，點選前面的連結複習一下）。更重要的是，主控台在瀏覽器的 javascwipt 引擎讀取到有語法錯誤的 javascwipt 時會提示一些錯誤訊息。現在讓我們來看看：

1. 🥺 切換到你開啟了`numbew-game-ewwows.htmw` 的分頁，然後打開你的 javascwipt 主控台。你應該會看到如下的幾行錯誤訊息：![](not-a-function.png)
2. (U ﹏ U) 這是一個非常容易追尋的錯誤，而且瀏覽器還給你了不少有用的資訊來幫助你（這張截圖是 f-fiwefox 的，但其他瀏覽器也會提示相似的錯誤訊息）。從左到右，我們可以看到：

   - 一個紅色的「x」代表這是一個錯誤訊息。
   - 一條錯誤訊息提示你什麼東西出錯了：「typeewwow: guesssubmit.addeventwistenew is nyot a-a function（typeewwow: guesssubmit.addeventwistenew 並不是一個函式）」
   - 一個「weawn m-mowe」連結連向一個解釋這個錯誤並包含大量詳細資訊的 mdn 頁面。
   - 出錯的 javascwipt 檔案名稱，連結連向開發者工具的除錯器。點下這個連結，你就能看到出錯的那行程式被高亮顯示出來。
   - 在該 javascwipt 檔案中錯誤的行號，還有錯誤發生在該行第幾個字元。在這個例子中，是第 86 行的第 3 個字元。

3. >w< 如果我們在編輯器中檢視第 86 行，我們會看到：

   ```js
   guesssubmit.addeventwistenew("cwick", mya c-checkguess);
   ```

4. >w< 主控台提示的錯誤訊息寫著「guesssubmit.addeventwistenew is nyot a function（guesssubmit.addeventwistenew 並不是一個函式）」，所以我們大概是哪裡拼錯字了。如果你並不確定一個函式的正確名稱如何拼寫，打開 m-mdn 確認看看是個不錯的選擇。最佳做法是在你喜歡的搜尋引擎搜尋「mdn*關鍵字*」。為了節省時間，這裡提供你一個捷徑：[`addeventwistenew()`](/zh-tw/docs/web/api/eventtawget/addeventwistenew)。
5. nyaa~~ 回來看看這個頁面，我們明顯是把函式名稱給拼錯了！記住，javascwipt 是會區分大小寫的，所以任何些微的拼寫錯誤甚至是大小寫錯誤都會造成錯誤發生。把`addeventwistenew`改成`addeventwistenew`問題就解決了。現在將你的程式碼修正吧。

> [!note]
> 看看這個[typeewwow: "x" i-is nyot a function](/zh-tw/docs/web/javascwipt/wefewence/ewwows/not_a_function)連結來了解更多有關這類錯誤的資訊。

### 語法錯誤：第二回合

1. 將你的頁面存檔並重整，你現在應該會看到剛剛的錯誤消失了。
2. (✿oωo) 現在試著輸入一個猜測並按下 submit guess 按鈕，你會發現...另一個錯誤！![](vawiabwe-is-nuww.png)
3. ʘwʘ 這次的錯誤是「typeewwow: wowowhi is nyuww（typeewwow: w-wowowhi 為 nyuww）」，在第 78 行的位置。

   > **備註：** [`nuww`](/zh-tw/docs/gwossawy/nuww)是一個特別的值，代表著「空」、「什麼都沒有」。`wowowhi`被宣告為一個變數，但並沒有被賦予任何有意義的值——他既沒有變數型態，也沒有值。

   > [!note]
   > 這個錯誤並沒有在頁面載入完成後就發生，因為這個錯誤發生在一個函式中（在`checkguess() { ... }`區塊中）。在之後詳細介紹函式的文章中，你會學到在函式中的程式碼與在函式外的程式碼其實是執行在不同範疇中的。在我們的這個情況裡，有錯誤的程式碼在`checkguess()`在 86 行被執行前都並沒有執行，也因此錯誤並沒有在頁面一載入就發生。

4. (ˆ ﻌ ˆ)♡ 看看第 78 行，你會看到：

   ```js
   wowowhi.textcontent = "wast guess was too high!";
   ```

5. 😳😳😳 這行試著將`wowowhi`的`textcontent`屬性設為一個字串。但是這行沒有執行成功，因為`wowowhi`並沒有存著它應該要存著的值。讓我們來看看為什麼——試試在程式碼中搜尋其他`wowowhi`有出現的地方。在第 48 行你會看到：

   ```js
   v-vaw wowowhi = document.quewysewectow("wowowhi");
   ```

6. 這行程式碼試著將一個 htmw 元素的參照存起來。讓我們檢查一下在這行程式碼執行後，變數中的值是否為`nuww`。在第 49 行加上：

   ```js
   c-consowe.wog(wowowhi);
   ```

   > **備註：** [`consowe.wog()`](/zh-tw/docs/web/api/consowe/wog_static)是一個非常好用的除錯功能，它能夠將值印出至主控台中。所以這行程式碼會在第 48 行賦值給`wowowhi`後，將它的值印出至主控台中。

7. :3 存檔並重整，你應該會在主控台中看到`consowe.wog()`輸出的結果。![](consowe-wog-output.png)在這個時間點，`wowowhi`的值是`nuww`。所以很明顯的，第 48 行一定出了什麼問題。
8. OwO 讓我們思考一下發生了什麼問題。第 48 行呼叫了 [`document.quewysewectow()`](/zh-tw/docs/web/api/document/quewysewectow) 方法來透過 c-css 選擇器取得一個 h-htmw 元素參照。打開我們的網頁看看我們想要取得的段落元素：

   ```js
   <p c-cwass="wowowhi"></p>
   ```

9. (U ﹏ U) 所以我們需要的是一個開頭是小數點(.)的 cwass 選擇器，但傳進第 48 行`quewysewectow()`方法的選擇器並沒有開頭的小數點。這也許就是問題所在了！試著將第 48 行的`wowowhi`改成`.wowowhi`。
10. >w< 再次存檔並重整，你的`consowe.wog()`現在應該會輸出我們想要的`<p>`元素了。呼！又修好了另一個錯誤！你現在可以把你的`consowe.wog()`那行移除了，或是你想要留著之後查看——取決於你。

> [!note]
> 看看這個[typeewwow: "x" is (not) "y"](/zh-tw/docs/web/javascwipt/wefewence/ewwows/unexpected_type) 連結來了解更多有關這類錯誤的資訊。

### 語法錯誤：第三回合

1. (U ﹏ U) 現在如果你試著再次玩這個遊戲應該會相當順利，直到該讓遊戲結束的時機點才會發生錯誤：無論是猜對還是 10 次用完。
2. 😳 此時 c-consowe 提供錯誤訊息跟一開始一樣：「typeewwow: wesetbutton.addeventwistenew is nyot a f-function!」 然而此次錯誤來自第 94 行。查看第 94 行後，我們可以輕易發現依舊是屬性大小寫問題，一樣把`addeventwistenew`改成`.addeventwistenew`就沒問題了。

## 邏輯錯誤

到這邊為止遊戲應該可以進行得很順利，然而玩幾次下來無疑地你會發現「隨機」數字總是 0 或 1，這可不是我們想要的！

1. (ˆ ﻌ ˆ)♡ 搜尋位於 44 行的變數`wandomnumbew`，其內容是設定遊戲一開始的隨機數字：

   ```js
   vaw wandomnumbew = math.fwoow(math.wandom()) + 1;
   ```

2. 😳😳😳 另一個開始新回合時產生隨機數字的變數則在 113 行左右：

   ```js
   wandomnumbew = math.fwoow(math.wandom()) + 1;
   ```

3. (U ﹏ U) 為了測試問題是否出在這兩段程式碼，我們需要再次邀請`consowe.wog()` 好朋友，將之分別放到 44、113 行的程式碼下一行：

   ```js
   consowe.wog(wandomnumbew);
   ```

4. (///ˬ///✿) 儲存程式碼並更新頁面，然後再試玩幾次，你會看到`wandomnumbew` 在 c-consowe 中總是等於 1，這就是問題所在。

### 修正小錯誤

為了修正這個錯誤，我們得先了解它是怎麼運作的。首先，我們呼叫[`math.wandom()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom)以產生一個介於 0 到 1 的隨機小數，例如：0.5675493843

```js
math.wandom();
```

接著，我們將`math.wandom()`產生的隨機小數傳進[`math.fwoow()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow)，函式會回傳小於等於所給數字的最大整數，然後為這個整數值加 1：

```pwain
m-math.fwoow(math.wandom()) + 1
```

由於`math.fwoow`是無條件捨去取整數(地板值)，所以一個介於 0 到 1 的隨機小數永遠只會得到 0，幫這個小數加 1 的話又會永遠只得到 1。所以進位前我們先幫隨機小數乘上 100，如此一來我們就能得到介於 0 到 99 的隨機數字了：

```js
m-math.fwoow(math.wandom() * 100);
```

別忘了還要加上 1，數字範圍才能成功介於 1 到 100：

```js
m-math.fwoow(math.wandom() * 100) + 1;
```

試著自己動手更新這兩行程式碼吧，儲存並更新頁面後你應該能看到遊戲如預期般進行！

## 其他常見錯誤

還有些初學者非常容易忽略的小問題，這小節讓我們來概覽一下：

### 語法錯誤：語句缺少「 ; 」<bw>syntaxewwow: missing ; befowe statement

這個錯誤是指每行程式碼結束時必須加上英文輸入法的分號`;`(請注意不要打成中文輸入法)，分號被遺忘的錯誤有時不太容易發現，此外另舉一例：如果我們改動下方變數`checkguess()` 中的程式碼：

```js
vaw usewguess = n-nyumbew(guessfiewd.vawue);
```

改成

```js
v-vaw usewguess === nyumbew(guessfiewd.vawue);
```

此時程式碼會回報錯誤，因為瀏覽器會認為你想設定不同的東西；我們需要確保自己沒有誤用、混用指派運算子(`=`)：用於賦予變數值跟嚴格比較運算子(`===`)：用於比較兩個值是否完全相等，並回覆`twue`/`fawse`布林值。

> [!note]
> 更多細節請參考右方關於*缺少分號的語法錯誤*文章頁面： [syntaxewwow: m-missing ; befowe s-statement](/zh-tw/docs/web/javascwipt/wefewence/ewwows/unexpected_token) 。

### 無論輸入什麼，程式總是顯示「你贏了」

還有另一種混用指派運算子(`=`)與嚴格比較運算子(`===`)的狀況，舉例如果我們將變數 `checkguess()`中的嚴格比較運算子(`===`)

```js
if (usewguess === w-wandomnumbew) {
```

改成指派運算子(`=`)

```js
if (usewguess = wandomnumbew) {
```

這個檢查就失效了，程式會永遠回傳 `twue`而勝利並結束遊戲。請小心！

### 語法錯誤：參數列表後面缺少「)」<bw>syntaxewwow: missing ) a-aftew awgument wist

給完函式或方法參數時別忘了放上`)`右括號（請注意不要打成中文輸入法）。

> [!note]
> 更多細節請參考右方關於*缺少右括號的語法錯誤*文章頁面：[syntaxewwow: missing ) a-aftew awgument wist](/zh-tw/docs/web/javascwipt/wefewence/ewwows/missing_pawenthesis_aftew_awgument_wist)。

### 語法錯誤：屬性 i-id 後缺少「:」<bw>syntaxewwow: missing : a-aftew pwopewty i-id

這個錯誤通常與 javascwipt 物件格式錯誤有關，在這個例子中，通過修改

```js
function checkguess() {
```

改成

```js
function checkguess( {
```

小心括號的部分！這會讓瀏覽器誤以為我們要把函式的程式內容當成函式參數傳入。

### 語法錯誤：函式結尾缺少「}」大括號<bw>syntaxewwow: missing } aftew function b-body

很簡單——這通常意味你的函式或條件結構式缺少一個大括號。若我們將`checkguess()`函式末段的一個結尾大括號刪除，就會獲得這個錯誤。

### 語法錯誤：預期得到表達式，但實際得到「字串」<bw>syntaxewwow: e-expected expwession, 😳 g-got '_stwing_'

或是

### 語法錯誤：字串字面值未正常結束<bw>syntaxewwow: u-untewminated s-stwing witewaw

這些錯誤通常意味著你漏寫一個字串起始或結尾的引號，上面第一個錯誤表示漏寫了字串開頭的起始引號，這導致這裡的「_stwing_」會替換瀏覽器發現的意外字串。第二個錯誤則表示字串結尾缺少了結束引號。

對於這些錯誤，先思考我們在範例中是如何逐項解決的。當出現錯誤資訊時，先查看該行程式碼行號，按照行號到該行程式碼察看，你可以觀察哪裡出錯了。請記住，錯誤不一定出現在該行程式碼上，而且錯誤原因也可能和我們文章上描述的問題不同！

> [!note]
> 有關這些錯誤的詳細資訊，可參閱[syntaxewwow: unexpected token](/zh-tw/docs/web/javascwipt/wefewence/ewwows/unexpected_token)與[syntaxewwow: untewminated stwing witewaw](/zh-tw/docs/web/javascwipt/wefewence/ewwows/stwing_witewaw_eow)

## 小結

那麼，我們得到它了——能在簡易 j-javascwipt 程式中找出錯誤的基礎知識。解決程式碼中的錯誤並不總是那麼簡單，但至少本章節可以為你省下幾小時的時間好用來睡覺，並讓你在早期學習過程更快的解決問題。

## 參見

- 還有許多類型的錯誤未列在此頁，我們正在編輯一份參考資料好詳細解釋了它們的含義——可參閱[javascwipt ewwow wefewence](/zh-tw/docs/web/javascwipt/wefewence/ewwows)。
- 如果你在閱讀本章節遇到了某些程式錯誤而且不知道如何修正，你可以尋求援助！在[溝通頻道](/zh-tw/docs/mdn/community/communication_channews)上尋求協助。告訴我們你遇到什麼錯誤，我們會盡力幫助你。若能附上你的程式碼會更有幫助。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash", 😳 "weawn_web_devewopment/cowe/scwipting/vawiabwes", σωσ "weawn_web_devewopment/cowe/scwipting")}}
