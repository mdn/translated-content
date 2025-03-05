---
title: 出了什麼問題？JavaScript 疑難排解
slug: Learn_web_development/Core/Scripting/What_went_wrong
original_slug: Learn/JavaScript/First_steps/What_went_wrong
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

當你在練習撰寫上一節的「猜數字」遊戲時，你可能會發現它無法運作。不用擔心，本文將會把你從快被拔光的頭髮中拯救出來，並且給你一些小提示，讓你知道怎麼找出及修正 Javascript 的程式運行錯誤。

<table>
  <tbody>
    <tr>
      <th scope="row">先備：</th>
      <td>基本電腦能力，基本html及css理解以及了解JavaScript是什麼</td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>獲得開始解決簡單編碼問題的能力及信心</td>
    </tr>
  </tbody>
</table>

## 錯誤類型

一般來說，當你的編碼有錯誤時，主要有兩種類型

- **語法錯誤**：在編碼中有一些拼字錯誤導致程式完全或部分沒有正常運作。在這個狀況下，通常你會獲得一些錯誤訊息。只要對工具熟悉以及了解錯誤訊息的意思，這種錯誤通常很好修正！
- **邏輯錯誤**：這種錯誤代表程式碼的語法正確，但程式完成的部分不是開發者想做的，意即程式碼執行成功，但返回錯誤的結果。這種錯誤通常比**語法錯誤**還要難修正，因為並沒有錯誤訊息讓我們可以很直接地知道程式碼的問題。

好的，但事情並沒有那麼單純——當你越深入，就會發現更多不同的因素。但上述的分類已經足夠應付初期的工程師職涯了。接著，我們將更深入來討論這兩個類型。

## 一個錯誤範例

讓我們從剛剛的猜數字遊戲開始——在這個版本中，我們將故意引入一些錯誤以便從中學習。前往 Github 下載一份[number-game-errors.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)（或運行線上版 [running live here](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)）。

1. 首先，在編輯器與瀏覽器分別開啟你剛下載檔案。
2. 試著玩遊戲——你會注意到當你按下按鈕「Submit guess」時，它沒有任何反應！

> [!NOTE]
> 你也許是想修復你自己寫的遊戲中的錯誤！這是件好事，但我們還是建議你在學習這篇文章時先使用我們的版本，這樣你才可以學到我們接下來要教的技巧。在這之後再回去修正你自己的遊戲也不遲！

現在，先讓我們來看看開發者主控台有沒有提示我們任何錯誤，然後試著修正他們。你會在接下來的段落中學到如何修正這些錯誤。

## 修復語法錯誤

在前篇文章中我們讓你在[開發者工具 JavaScript console](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)中輸入了一些 JavaScript 指令（如果你不記得怎麼打開這個東西，點選前面的連結複習一下）。更重要的是，主控台在瀏覽器的 JavaScript 引擎讀取到有語法錯誤的 JavaScript 時會提示一些錯誤訊息。現在讓我們來看看：

1. 切換到你開啟了`number-game-errors.html` 的分頁，然後打開你的 JavaScript 主控台。你應該會看到如下的幾行錯誤訊息：![](not-a-function.png)
2. 這是一個非常容易追尋的錯誤，而且瀏覽器還給你了不少有用的資訊來幫助你（這張截圖是 Firefox 的，但其他瀏覽器也會提示相似的錯誤訊息）。從左到右，我們可以看到：

   - 一個紅色的「X」代表這是一個錯誤訊息。
   - 一條錯誤訊息提示你什麼東西出錯了：「TypeError: guessSubmit.addeventListener is not a function（TypeError: guessSubmit.addeventListener 並不是一個函式）」
   - 一個「Learn More」連結連向一個解釋這個錯誤並包含大量詳細資訊的 MDN 頁面。
   - 出錯的 JavaScript 檔案名稱，連結連向開發者工具的除錯器。點下這個連結，你就能看到出錯的那行程式被高亮顯示出來。
   - 在該 JavaScript 檔案中錯誤的行號，還有錯誤發生在該行第幾個字元。在這個例子中，是第 86 行的第 3 個字元。

3. 如果我們在編輯器中檢視第 86 行，我們會看到：

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. 主控台提示的錯誤訊息寫著「guessSubmit.addeventListener is not a function（guessSubmit.addeventListener 並不是一個函式）」，所以我們大概是哪裡拼錯字了。如果你並不確定一個函式的正確名稱如何拼寫，打開 MDN 確認看看是個不錯的選擇。最佳做法是在你喜歡的搜尋引擎搜尋「mdn*關鍵字*」。為了節省時間，這裡提供你一個捷徑：[`addEventListener()`](/zh-TW/docs/Web/API/EventTarget/addEventListener)。
5. 回來看看這個頁面，我們明顯是把函式名稱給拼錯了！記住，JavaScript 是會區分大小寫的，所以任何些微的拼寫錯誤甚至是大小寫錯誤都會造成錯誤發生。把`addeventListener`改成`addEventListener`問題就解決了。現在將你的程式碼修正吧。

> [!NOTE]
> 看看這個[TypeError: "x" is not a function](/zh-TW/docs/Web/JavaScript/Reference/Errors/Not_a_function)連結來了解更多有關這類錯誤的資訊。

### 語法錯誤：第二回合

1. 將你的頁面存檔並重整，你現在應該會看到剛剛的錯誤消失了。
2. 現在試著輸入一個猜測並按下 Submit guess 按鈕，你會發現...另一個錯誤！![](variable-is-null.png)
3. 這次的錯誤是「TypeError: lowOrHi is null（TypeError: lowOrHi 為 null）」，在第 78 行的位置。

   > **備註：** [`Null`](/zh-TW/docs/Glossary/Null)是一個特別的值，代表著「空」、「什麼都沒有」。`lowOrHi`被宣告為一個變數，但並沒有被賦予任何有意義的值——他既沒有變數型態，也沒有值。

   > [!NOTE]
   > 這個錯誤並沒有在頁面載入完成後就發生，因為這個錯誤發生在一個函式中（在`checkGuess() { ... }`區塊中）。在之後詳細介紹函式的文章中，你會學到在函式中的程式碼與在函式外的程式碼其實是執行在不同範疇中的。在我們的這個情況裡，有錯誤的程式碼在`checkGuess()`在 86 行被執行前都並沒有執行，也因此錯誤並沒有在頁面一載入就發生。

4. 看看第 78 行，你會看到：

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. 這行試著將`lowOrHi`的`textContent`屬性設為一個字串。但是這行沒有執行成功，因為`lowOrHi`並沒有存著它應該要存著的值。讓我們來看看為什麼——試試在程式碼中搜尋其他`lowOrHi`有出現的地方。在第 48 行你會看到：

   ```js
   var lowOrHi = document.querySelector("lowOrHi");
   ```

6. 這行程式碼試著將一個 HTML 元素的參照存起來。讓我們檢查一下在這行程式碼執行後，變數中的值是否為`null`。在第 49 行加上：

   ```js
   console.log(lowOrHi);
   ```

   > **備註：** [`console.log()`](/zh-TW/docs/Web/API/console/log_static)是一個非常好用的除錯功能，它能夠將值印出至主控台中。所以這行程式碼會在第 48 行賦值給`lowOrHi`後，將它的值印出至主控台中。

7. 存檔並重整，你應該會在主控台中看到`console.log()`輸出的結果。![](console-log-output.png)在這個時間點，`lowOrHi`的值是`null`。所以很明顯的，第 48 行一定出了什麼問題。
8. 讓我們思考一下發生了什麼問題。第 48 行呼叫了 [`document.querySelector()`](/zh-TW/docs/Web/API/Document/querySelector) 方法來透過 CSS 選擇器取得一個 HTML 元素參照。打開我們的網頁看看我們想要取得的段落元素：

   ```js
   <p class="lowOrHi"></p>
   ```

9. 所以我們需要的是一個開頭是小數點(.)的 class 選擇器，但傳進第 48 行`querySelector()`方法的選擇器並沒有開頭的小數點。這也許就是問題所在了！試著將第 48 行的`lowOrHi`改成`.lowOrHi`。
10. 再次存檔並重整，你的`console.log()`現在應該會輸出我們想要的`<p>`元素了。呼！又修好了另一個錯誤！你現在可以把你的`console.log()`那行移除了，或是你想要留著之後查看——取決於你。

> [!NOTE]
> 看看這個[TypeError: "x" is (not) "y"](/zh-TW/docs/Web/JavaScript/Reference/Errors/Unexpected_type) 連結來了解更多有關這類錯誤的資訊。

### 語法錯誤：第三回合

1. 現在如果你試著再次玩這個遊戲應該會相當順利，直到該讓遊戲結束的時機點才會發生錯誤：無論是猜對還是 10 次用完。
2. 此時 console 提供錯誤訊息跟一開始一樣：「TypeError: resetButton.addeventListener is not a function!」 然而此次錯誤來自第 94 行。查看第 94 行後，我們可以輕易發現依舊是屬性大小寫問題，一樣把`addeventListener`改成`.addEventListener`就沒問題了。

## 邏輯錯誤

到這邊為止遊戲應該可以進行得很順利，然而玩幾次下來無疑地你會發現「隨機」數字總是 0 或 1，這可不是我們想要的！

1. 搜尋位於 44 行的變數`randomNumber`，其內容是設定遊戲一開始的隨機數字：

   ```js
   var randomNumber = Math.floor(Math.random()) + 1;
   ```

2. 另一個開始新回合時產生隨機數字的變數則在 113 行左右：

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. 為了測試問題是否出在這兩段程式碼，我們需要再次邀請`console.log()` 好朋友，將之分別放到 44、113 行的程式碼下一行：

   ```js
   console.log(randomNumber);
   ```

4. 儲存程式碼並更新頁面，然後再試玩幾次，你會看到`randomNumber` 在 console 中總是等於 1，這就是問題所在。

### 修正小錯誤

為了修正這個錯誤，我們得先了解它是怎麼運作的。首先，我們呼叫[`Math.random()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/random)以產生一個介於 0 到 1 的隨機小數，例如：0.5675493843

```js
Math.random();
```

接著，我們將`Math.random()`產生的隨機小數傳進[`Math.floor()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)，函式會回傳小於等於所給數字的最大整數，然後為這個整數值加 1：

```plain
Math.floor(Math.random()) + 1
```

由於`Math.floor`是無條件捨去取整數(地板值)，所以一個介於 0 到 1 的隨機小數永遠只會得到 0，幫這個小數加 1 的話又會永遠只得到 1。所以進位前我們先幫隨機小數乘上 100，如此一來我們就能得到介於 0 到 99 的隨機數字了：

```js
Math.floor(Math.random() * 100);
```

別忘了還要加上 1，數字範圍才能成功介於 1 到 100：

```js
Math.floor(Math.random() * 100) + 1;
```

試著自己動手更新這兩行程式碼吧，儲存並更新頁面後你應該能看到遊戲如預期般進行！

## 其他常見錯誤

還有些初學者非常容易忽略的小問題，這小節讓我們來概覽一下：

### 語法錯誤：語句缺少「 ; 」<br>SyntaxError: missing ; before statement

這個錯誤是指每行程式碼結束時必須加上英文輸入法的分號`;`(請注意不要打成中文輸入法)，分號被遺忘的錯誤有時不太容易發現，此外另舉一例：如果我們改動下方變數`checkGuess()` 中的程式碼：

```js
var userGuess = Number(guessField.value);
```

改成

```js
var userGuess === Number(guessField.value);
```

此時程式碼會回報錯誤，因為瀏覽器會認為你想設定不同的東西；我們需要確保自己沒有誤用、混用指派運算子(`=`)：用於賦予變數值跟嚴格比較運算子(`===`)：用於比較兩個值是否完全相等，並回覆`true`/`false`布林值。

> [!NOTE]
> 更多細節請參考右方關於*缺少分號的語法錯誤*文章頁面： [SyntaxError: missing ; before statement](/zh-TW/docs/Web/JavaScript/Reference/Errors/Unexpected_token) 。

### 無論輸入什麼，程式總是顯示「你贏了」

還有另一種混用指派運算子(`=`)與嚴格比較運算子(`===`)的狀況，舉例如果我們將變數 `checkGuess()`中的嚴格比較運算子(`===`)

```js
if (userGuess === randomNumber) {
```

改成指派運算子(`=`)

```js
if (userGuess = randomNumber) {
```

這個檢查就失效了，程式會永遠回傳 `true`而勝利並結束遊戲。請小心！

### 語法錯誤：參數列表後面缺少「)」<br>SyntaxError: missing ) after argument list

給完函式或方法參數時別忘了放上`)`右括號（請注意不要打成中文輸入法）。

> [!NOTE]
> 更多細節請參考右方關於*缺少右括號的語法錯誤*文章頁面：[SyntaxError: missing ) after argument list](/zh-TW/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list)。

### 語法錯誤：屬性 ID 後缺少「:」<br>SyntaxError: missing : after property id

這個錯誤通常與 JavaScript 物件格式錯誤有關，在這個例子中，通過修改

```js
function checkGuess() {
```

改成

```js
function checkGuess( {
```

小心括號的部分！這會讓瀏覽器誤以為我們要把函式的程式內容當成函式參數傳入。

### 語法錯誤：函式結尾缺少「}」大括號<br>SyntaxError: missing } after function body

很簡單——這通常意味你的函式或條件結構式缺少一個大括號。若我們將`checkGuess()`函式末段的一個結尾大括號刪除，就會獲得這個錯誤。

### 語法錯誤：預期得到表達式，但實際得到「字串」<br>SyntaxError: expected expression, got '_string_'

或是

### 語法錯誤：字串字面值未正常結束<br>SyntaxError: unterminated string literal

這些錯誤通常意味著你漏寫一個字串起始或結尾的引號，上面第一個錯誤表示漏寫了字串開頭的起始引號，這導致這裡的「_string_」會替換瀏覽器發現的意外字串。第二個錯誤則表示字串結尾缺少了結束引號。

對於這些錯誤，先思考我們在範例中是如何逐項解決的。當出現錯誤資訊時，先查看該行程式碼行號，按照行號到該行程式碼察看，你可以觀察哪裡出錯了。請記住，錯誤不一定出現在該行程式碼上，而且錯誤原因也可能和我們文章上描述的問題不同！

> [!NOTE]
> 有關這些錯誤的詳細資訊，可參閱[SyntaxError: Unexpected token](/zh-TW/docs/Web/JavaScript/Reference/Errors/Unexpected_token)與[SyntaxError: unterminated string literal](/zh-TW/docs/Web/JavaScript/Reference/Errors/String_literal_EOL)

## 小結

那麼，我們得到它了——能在簡易 JavaScript 程式中找出錯誤的基礎知識。解決程式碼中的錯誤並不總是那麼簡單，但至少本章節可以為你省下幾小時的時間好用來睡覺，並讓你在早期學習過程更快的解決問題。

## 參見

- 還有許多類型的錯誤未列在此頁，我們正在編輯一份參考資料好詳細解釋了它們的含義——可參閱[JavaScript error reference](/zh-TW/docs/Web/JavaScript/Reference/Errors)。
- 如果你在閱讀本章節遇到了某些程式錯誤而且不知道如何修正，你可以尋求援助！可以至[Learning Area Discourse thread](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294)發問，或者到[Mozilla IRC](https://wiki.mozilla.org/IRC)的[#mdn](irc://irc.mozilla.org/mdn)頻道提問。告訴我們你遇到什麼錯誤，我們會盡力幫助你。若能附上你的程式碼會更有幫助。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
