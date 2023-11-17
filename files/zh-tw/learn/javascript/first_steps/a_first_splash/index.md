---
title: 初次接觸Javascript
slug: Learn/JavaScript/First_steps/A_first_splash
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

目前你已經學會了一些 JavaScript 的理論，以及你能用它做些什麼。我們現在要透過一個完整的實際範例給你一個 JavaScript 基本功能的速成班。你將能一步一步地做出一個簡單的"猜數字"遊戲

<table>
  <tbody>
    <tr>
      <th scope="row">先備知識:</th>
      <td>
        基礎的電腦知識 , 有基礎的 HTML 跟 CSS 知識 ,<br />還有知道 JavaScript
        是甚麼 .
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        獲得第一次寫 JavaScript 的經驗 ,<br />還有知道最基礎的 JavaScript
        程式該怎麼寫 .
      </td>
    </tr>
  </tbody>
</table>

並不會要求你馬上就能仔細地了解所有程式碼 — 目前我們只是想介紹一些概觀，並向你介紹一些關於 JavaScript(以及其他程式語言)如何運作的知識。在接下來的章節你將會更仔細地瞭解這些功能！

> **備註：** 你會在 JavaScript 看到許多跟其他程式語言一樣的特徵 — functions , loops 之類的 ，雖然程式語法看起來有差 ，但概念大部分都差不多 .

## 像程式工程師一樣思考

寫程式中最困難的事情之一，不是您需要學習的語法，而是如何應用它來解決現實世界中的問題。 您需要開始像個程式設計師一樣思考 — 這通常與檢視程式目標的說明有關，並確定實現這些功能所需的程式碼，以及如何使它們協同工作。

這需要辛勤工作，程式語法經驗和練習 — 以及一點創造力。 你寫了越多程式碼，你就會越熟練。 我們不能保證你會在 5 分鐘內開發出「程式設計師的大腦」，但我們會給你很多機會在整個課程中練習「像程式設計師一樣思考」。

考慮到這一點，讓我們看一下我們將在本文中構建的範例，並審視將其分解為具體任務的大致流程。

## 範例 — 猜數字遊戲

在本文中，我們將向您展示如何構建您可以在下面看到的簡單遊戲：

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Number guessing game</title>
    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Number guessing game</h1>
    <p>
      We have selected a random number between 1 and 100. See if you can guess
      it in 10 turns or fewer. We'll tell you if your guess was too high or too
      low.
    </p>
    <div class="form">
      <label for="guessField">Enter a guess: </label
      ><input type="text" id="guessField" class="guessField" />
      <input type="submit" value="Submit guess" class="guessSubmit" />
    </div>
    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>
      // Your JavaScript goes here
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      const guesses = document.querySelector(".guesses");
      const lastResult = document.querySelector(".lastResult");
      const lowOrHi = document.querySelector(".lowOrHi");
      const guessSubmit = document.querySelector(".guessSubmit");
      const guessField = document.querySelector(".guessField");
      let guessCount = 1;
      let resetButton;

      function checkGuess() {
        let userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = "Previous guesses: ";
        }

        guesses.textContent += userGuess + " ";

        if (userGuess === randomNumber) {
          lastResult.textContent = "Congratulations! You got it right!";
          lastResult.style.backgroundColor = "green";
          lowOrHi.textContent = "";
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = "!!!GAME OVER!!!";
          lowOrHi.textContent = "";
          setGameOver();
        } else {
          lastResult.textContent = "Wrong!";
          lastResult.style.backgroundColor = "red";
          if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!";
          } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
          }
        }

        guessCount++;
        guessField.value = "";
      }

      guessSubmit.addEventListener("click", checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Start new game";
        document.body.appendChild(resetButton);
        resetButton.addEventListener("click", resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll(".resultParas p");
        for (let i = 0; i < resetParas.length; i++) {
          resetParas[i].textContent = "";
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();
        lastResult.style.backgroundColor = "white";
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('範例 — 猜數字遊戲', '100%', 320) }}

好好玩一下遊戲再繼續吧 —— 在繼續前先與這個遊戲熟悉起來。

讓我們假設你的老闆給了你以下關於創建這個遊戲的簡介：

> 我要你幫我做一個很簡單的猜數字遊戲 .
> 玩家要在 10 回合內猜中一個 1 到 100 之間的隨機數字 ,
> 每回合結束時都要告訴玩家他們猜對還是猜錯 ,
> 然後要是他們猜錯 , 要告訴他們數字猜的太小還是太大 ,
> 這個遊戲會在玩家猜對 , 或是猜超過 10 次時結束 ,
> 且遊戲結束時 , 要提供一個選項讓玩家可以再玩一次 .

當看到上面的介紹後，我們可以做的第一件事就是開始拆解，盡可能的像個程式設計師，將它拆解為簡單可執行的任務：

1. 產生一個 1 到 100 間的隨機數字。
2. 從一開始，紀錄玩家目前回合數。
3. 提供玩家猜數字的方向(太大還是太小)。
4. 當玩家送出第一個猜測後，將猜測記錄下來，讓玩家可以看到他們之前的猜測。
5. 接著檢查數字是否猜中。
6. 如果數字猜對：

   1. 顯示恭喜訊息。
   2. 使玩家不能再輸入更多猜測(避免把遊戲玩壞)。
   3. 顯示控制鈕讓玩家可以重新開始遊戲。

7. 如果數字猜錯而且玩家有剩餘回合數：

   1. 告訴玩家他猜錯了。
   2. 讓玩家輸入其他的猜測
   3. 回合數增加 1。

8. 如果數字猜錯而且玩家沒有剩餘回合數：

   1. 告訴玩家遊戲結束。
   2. 使玩家不能再輸入更多猜測(避免把遊戲玩壞)。
   3. 顯示控制鈕讓玩家可以重新開始遊戲。

9. 當遊戲重新開始，確保遊戲邏輯和畫面(UI，使用這介面)全面重設，然後回到第一步。

現在，讓我們繼續向前，一路上我們檢視如何將這些步驟轉化為程式碼、建構出上面的範例與探索 JavaScript 的功能。

### 初步設定

在課程開始前，我們希望你可以複製一份[number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)到自己的電腦中([see it live here](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html))。用瀏覽器與文字編輯器將檔案打開時，你會看到簡單的標題、說明段落還有輸入猜測的表單，然而表單目前還不會做任何事情。

所有的程式碼都會放入置於 HTML 底部的{{htmlelement("script")}}元素裡：

```html
<script>
  // Your JavaScript goes here
</script>
```

### 加入變數儲存我們的資料

我們一起開始吧。首先，在你的{{htmlelement("script")}} 元素裡加入以下幾行：

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
```

這一區塊的程式碼設定我們的程式中用來儲存資料的變數。簡單的來說，「變數」是「值」的容器(值可以是數字、一串文字或是其他東西)。你可以用「關鍵字」(keyword) `let`(或是`var`)後面加上變數的名字來建立變數(在[之後的文章](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#The_difference_between_var_and_let)你會看到兩者的差別)。利用關鍵字 `const` 建立常數，常數(Constant)是用來儲存你不會更改的值。我們用常數儲存使用者介面的參照，使用者介面中的文字可能會改變，但是參照所指的 HTML 元素的不會改變。

藉由等於符號(`=`)後面加上一個值，你可以指定變數或是常數的值。

在我們的範例中：

- 第一個變數 — `randomNumber` — 被指定成一個由數學運算的 1 到 100 間的隨機數字
- 接著的三個常數，分別儲存 HTML 中結果段落的參照，在後面的程式碼中，參照被用來插入一些數值 (注意他們都位於一個{{htmlelement("div")}}元素裡，後者在之後我們重置遊戲時會被用來選取所有三個{{htmlelement("p")}}元素)：

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- 接著的兩個常數，分別儲存表單中的文字輸入和送出按鈕，之後會用來控制送出玩家猜測的數字。

  ```html
  <label for="guessField">Enter a guess: </label
  ><input type="text" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- 最後兩個變數，一個儲存回合數 1，另一個儲存指向重新開始按鈕的參照 (按鈕現在還不存在，之後會加上的)。

> **備註：** 從[下一篇文章](/zh-TW/docs/user:chrisdavidmills/variables)開始，你會學到更多有關變數的事。

### 函式

下一步，將下面這段添加到之前寫的那段程式碼：

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

函式是一段可重複利用的程式碼塊。建立一個函式便可以反複運行並避免撰寫重複的程式碼。定義函式有很多方法，在此我們先專注在一種簡單的方式。這裡我們以關鍵字 `function` 、自訂的函式名、一對括號以及一對花括號（`{ }`）建立函式。花括號中的程式碼便是我們調用函式時所要實際執行的程式碼。

輸入函式名稱與括號便可以執行函式。

讓我們來試試吧。儲存你的程式碼並重新整理瀏覽器畫面。進入 [開發者工具 JavaScript console](/zh-TW/docs/Learn/Common_questions/What_are_browser_developer_tools), 並輸入下面這行：

```js
checkGuess();
```

當按下 <kbd>Return</kbd>/<kbd>Enter</kbd> 時，你會看到一個警告跳窗顯示「I am a placeholder」。我們已經在程式中定義好一個函式，只要我們調用這個函式，函式便會彈出一個警告視窗。

> **備註：** 你會在後續的課程中學習到更多關於函式的事。

### 運算子

JavaScript 運算子可以讓我們執行比較、數學運算、連接字符串等。

儲存我們的程式碼並重整頁面，開啟 [開發者工具 JavaScript console](/zh-TW/docs/Learn/Common_questions/What_are_browser_developer_tools) 。接下來你可以試著輸入以下的範例 —— 輸入跟每個「範例」欄位中一樣的內容，每輸入一個就按下<kbd>Return</kbd> / <kbd>Enter</kbd>， 接著看看回傳的結果。

如果你不能快速打開瀏覽器開發工具， 你可以使用内嵌的應用程式中輸入以下範例：

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript console</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0c323d;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0c323d;
        color: #809089;
      }

      div {
        clear: both;
      }
    </style>
  </head>
  <body></body>

  <script>
    var geval = eval;

    function createInput() {
      var inputDiv = document.createElement("div");
      var inputPara = document.createElement("p");
      var inputForm = document.createElement("input");

      inputDiv.setAttribute("class", "input");
      inputPara.textContent = ">";
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);
      inputDiv.focus();

      if (document.querySelectorAll("div").length > 1) {
        inputForm.focus();
      }

      inputForm.addEventListener("change", executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch (e) {
        var result = "error — " + e.message;
      }

      var outputDiv = document.createElement("div");
      var outputPara = document.createElement("p");

      outputDiv.setAttribute("class", "output");
      outputPara.textContent = "Result: " + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = "0.5";

      createInput();
    }

    createInput();
  </script>
</html>
```

{{ EmbedLiveSample('運算子', '100%', 300) }}

首先讓我們看看以下的算數運算子：

| 運算子 | 名稱 | 範例      |
| ------ | ---- | --------- |
| `+`    | 加法 | `6 + 9`   |
| `-`    | 減法 | `20 - 15` |
| `*`    | 乘法 | `3 * 7`   |
| `/`    | 除法 | `10 / 5`  |

你也可以使用 `+` 來連接字串 (在程式設計中，這稱爲**連接**)。試著輸入以下幾行程式，每次一行：

```js
var name = "Bingo";
name;
var hello = " says hello!";
hello;
var greeting = name + hello;
greeting;
```

你也可以使用一些捷徑，這些被稱爲增量賦值運算子。如果你只是簡單想將兩個字串加在一起，你可以這樣做：

```js
name += " says hello!";
```

相當於

```js
name = name + " says hello!";
```

當我們進行真假值測試時 (例如[下面](#條件))，我們可以使用比較運算子，如：

| 運算子 | 名稱                     | 範例                       |
| ------ | ------------------------ | -------------------------- |
| `===`  | 嚴格等於 (是否完全一樣?) | `5 === 2 + 4`              |
| `!==`  | 不等於 (是否不一樣?)     | `'Chris' !== 'Ch' + 'ris'` |
| `<`    | 小於                     | `10 < 6`                   |
| `>`    | 大於                     | `10 > 20`                  |

### 條件

回到 `checkGuess()` 函式，我們希望的結果當然不只是彈出簡單訊息而已。我們更想要知道這個函式將如何檢查玩家的猜測是否準確，並回傳正確的結果。

所以現在將 `checkGuess()` 函式替換成下面這個版本：

```js
function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

哇，突然出現了很多程式碼！我們來完整地看一遍這些程式並介紹它們是如何運行的。

- 第一行（上面的第 2 行）宣告一個名為 `userGuess` 的變數，並將其值設置為在表單中文字輸入格內的當前值。我們還通過內建的 `Number()` 方法運行此值，以確保該值絕對是一個數字。
- 接下來，我們遇到第一個條件程式碼區塊（上面的第 3-5 行）。條件程式碼區塊允許您能基於某個條件是否為真來選擇性地執行程式碼。它看起來有點像函式，但其實並非如此。最簡單的條件區塊格式從 `if` 關鍵字開始，然後是一些括號，然後是一些花括號。在括號內包含一個比較測試。如果括號內的比較測試回傳 `true`，花括號內的程式碼則會被執行；否則不會執行，而會繼續執行接下來的程式碼。在這個情況下，我們的比較測試是檢查 `guessCount` 變數是否等於 `1`（即，這是否為玩家的第一次嘗試）：

  ```plain
  guessCount === 1
  ```

  如果是，我們將 `guesses` 段落的文字內容設為 「Previous guesses: 」。

- 第 6 行將當前 `userGuess` 的值附加到 `guesses` 段落的尾端，並加上一個空格，讓顯示的每次猜測紀錄之間都有一個空格。
- 下一個條件區塊（上面第 8-24 行）做了一些檢查：

  - 第一個 `if(){ }` 檢查用戶的猜測是否等於`我們`JavaScript 頂部設置的 `randomNumber`。如果是，代表玩家猜對了，贏了遊戲，所以我們向玩家顯示一個漂亮的綠色祝賀訊息，清除 `lowOrHigh` 段落的內容，並運行一個叫做 `setGameOver()` 的函式，這個函式我們稍後再討論。
  - 現在我們使用 `else if(){ }` 區塊將另一個測試連接到上一個測試的後面。這個測試檢查本次猜測是否為玩家的最後一次猜測機會。如果是，則執行與上一個條件區塊相同的操作，只是這次是遊戲結束訊息，漂亮的綠色祝賀訊息。
  - 連接到此條件區塊後面的最後一個區塊（`else { }`）只會在其他兩個測試都沒有返回 `true` 時執行（即，玩家沒有猜對，但他們還有更多的猜測機會）。在這種情況下，我們告訴他們猜錯了，然後我們執行另一個條件測試以檢查猜測是高於還是低於正確答案 `randomNumber`，並顯示進一步的訊息來告訴他們要猜得更高或更低。

- 函式中的最後三行（上面的第 26-28 行）讓玩家可以提交下一個猜測。我們將`guessCount`變數加 1，來增加玩家已使用的猜測次數（`++`是遞增操作 - 遞增 1），並將表單中文字輸入格內的文字清空並給予其焦點（顯示文字輸入游標），準備好讓玩家輸入下一個猜測。

### 事件

現在我們有了一個很好的 `checkGuess()` 函式，但它並不會做任何事情，因為我們還沒有呼叫它。我們想在按下 「Submit guess」 按鈕時呼叫它，為此，我們需要使用**事件**。事件是在瀏覽器中發生的操作，例如單擊按鈕，加載頁面或播放影片，以讓我們可以在這些操作發生時執行程式碼。偵聽事件發生的構造稱為**事件偵聽器**，偵聽事件而觸發執行的程式碼稱為**事件處理器**。

在 `checkGuess()` 函式下面添加下行（不是指函式內部的後面，而是函式外）：

```js
guessSubmit.addEventListener("click", checkGuess);
```

這裡我們為 `guessSubmit` 按鈕添加一個事件偵聽器。這是一個函式，它接受兩個輸入值（稱為*參數*） - 我們正在監聽的事件類型字串（本例中的 `click`），以及我們想要在事件發生時運行的程式碼（在這種情況下是`checkGuess()`函式） — 請注意，在編寫 [`addEventListener()`](/zh-TW/docs/Web/API/EventTarget/addEventListener) 內部時我們不需要為函式加上括號。

現在保存並重整頁面，現在你的範例應該可以正常執行了。現在唯一的問題是，如果你猜對了正確的答案或用完了猜測機會，那麼遊戲就會出錯，因為我們還沒有定義 `setGameOver()` — 遊戲結束後應該執行的函式。現在讓我們加上缺少的程式碼並完成範例功能。

### 完成遊戲功能

讓我們加入 `setGameOver()` 這個函式到我們程式碼的底部並演練它。 現在，在你的 JavaScript 尾端加上這些：

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- 函數中的前兩行透過將表單的文字輸入和按鈕的 `disabled` 屬性設為 `true` 來將兩者無效化。這很重要，因為如果沒有這麼做，使用者可能會在遊戲結束後繼續送出更多猜測值，這也許會把東西弄得一團糟。
- 接下來的三行會生成一個新的 {{htmlelement("button")}} 元素，將它的文字標籤設為「Start new game」後，添加到我們的 HTML 的最尾端。
- 最後一行則會在我們的新按鈕上設置一個事件偵聽器，來讓使用者按下按鈕時執行一個叫 `resetGame()` 的函數。

現在讓我們來定義 `resetGame()`！再次將下面這些程式碼加進你的 JavaScript 的最下方。

```js
function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll(".resultParas p");
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

這段相對較常的程式碼會完全將所有東西重置到遊戲的初始狀態，讓玩家可以再玩一次。這段程式碼做了下面這些事：

- 將 `guessCount` 設回 1。
- 清除所有訊息段落。
- 將重置按鈕移除。
- 將表單元素有效化，清空文字輸入並給予其焦點，準備好讓玩家能夠進行新一輪的猜測。
- `將lastResult` 段落的背景顏色設回白色。
- 生成一個新的隨機數值，才不會讓玩家又猜一次重複的答案！

**現在，你應該有了一個完整且能正常執行的簡單遊戲了 — 恭喜你啦！**

接下來這篇文章的工作只剩下來談談其他幾個很重要的程式功能，你應該已經看過了，只是還沒察覺罷了。

### 迴圈

上面的程式碼中，一個我們需要仔細看看的部份是 [for](/zh-TW/docs/Web/JavaScript/Reference/Statements/for) 迴圈。迴圈在程式設計中是一個非常重要的內容，可以讓你在滿足條件前反覆執行同一段程式碼。

開始吧，打開你的 [開發者工具 JavaScript console](/zh-TW/docs/Learn/Common_questions/What_are_browser_developer_tools)，然後輸入下面這行：

```js
for (var i = 1; i < 21; i++) {
  console.log(i);
}
```

看見了嗎？在你的主控台內印出了數字 1 到 20。這就是迴圈的效果。一個 for 迴圈需要三個參數：

1. **起始動作：**這個例子中我們從 1 開始累加，這個起始數值可以是任何你想要的值。你也可以不要使用 `i` 這個變數名稱，但習慣上我們會使用 `i` ，因為它簡單好記。
2. **離開條件：**這裡我們指定了 `i < 21` — 這個迴圈會一直執行直到 `i` 不再小於 21。當 `i` 達到 21，這個迴圈就會停止執行。
3. **增加動作：**我們指定了 `i++`，「將 `i` 的值加 1」。這個迴圈會對每個 `i` 的值執行一次，直到 `i` 達到 21（如上一條所述）。這個例子中，我們簡單的透過 {{domxref("Console.log", "console.log()")}} 將每次迴圈中 `i` 的值輸出到主控台中。

現在我們來看看在猜謎遊戲中的迴圈 — 這可以在 `resetGame()` 函式中找到：

```js
var resetParas = document.querySelectorAll(".resultParas p");
for (var i = 0; i < resetParas.length; i++) {
  resetParas[i].textContent = "";
}
```

這段程式碼透過呼叫 {{domxref("Document.querySelectorAll", "querySelectorAll()")}} 創建一個變數並存著一個在 `<div class="resultParas">` 中的所有段落清單，然後使用迴圈來遍歷每個段落元素，並移除其內容。

### 稍微討論一下物件

在開始討論這個段落的話題前，先來做點小小修改。在你的 JavaScript 接近頂部的 `var resetButton` 下一行加上：

```js
guessField.focus();
```

，然後存檔。

這一行呼叫了 {{domxref("HTMLElement.focus", "focus()")}} 方法來在頁面讀取時，將輸入游標自動放進 {{htmlelement("input")}} 文字欄裡面，這意味著使用者在開啟頁面後就可以直接使用鍵盤來在文字欄內輸入文字，而不用先點選文字欄。這只是個小修改，可是大大的提升了使用體驗，也給了使用者清楚的提示 — 提示他們要做些什麼來遊玩這個遊戲。

讓我們來分析一下究竟發生了什麼事。在 JavaScript 中，所有東西都是一個**物件**。物件是一個集合，由許多相關的功能打包成一體。你可以創建一個你自己的物件，不過這比較進階，我們現在並不會涵蓋這個內容，這些會在課程的後期提到。現在，我們只會簡要的提到一些你的瀏覽器內建的物件，他們能夠讓你做到許多有用的事。

在這個例子中，我們首先創建了一個 `guessField` 變數，儲存著一個指向 HTML 表單中文字輸入欄的參照 — 這可以在我們定義變數的區塊中找到：

```js
var guessField = document.querySelector(".guessField");
```

我們使用了 {{domxref("document.querySelector", "querySelector()")}} 來取得這個參照，前者是 {{domxref("document")}} 物件的方法。`querySelector()` 接受一個參數 — 一個 [CSS 選擇器](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/Selectors)， 會回傳你想要的元素參照。

因為現在 `guessField` 中存著一個指向 {{htmlelement("input")}} 元素的參照，它現在可以存取這個元素的屬性（基本上就是存在物件中的變數，其中有一些可能會是常數）和方法（基本上就是存在物件中的函式）了。文字輸入欄的其中一個方法便是 `focus()`，我們便可以透過呼叫這個方法來給予其焦點：

```js
guessField.focus();
```

沒有存著表單元素參照的變數就不會有 `focus()` 方法能使用。
例如存著一個 {{htmlelement("p")}} 元素的 `guesses` 和存著一個數值的 `guessCount`。

### 來玩玩瀏覽器物件

讓我們來稍微玩一點瀏覽器內建的物件吧。

1. 首先在瀏覽器中開啟你的程式。
2. 接下來，打開你的[開發者工具 JavaScript console](/zh-TW/docs/Learn/Common_questions/What_are_browser_developer_tools)。
3. 輸入 `guessField`，可以看到主控台顯示這個變數儲存著一個 {{htmlelement("input")}} 元素。你還可以發現主控台會自動幫你完成已存在的物件名稱！
4. 接下來輸入：

   ```js
   guessField.value = "Hello";
   ```

   `value` 屬性儲存著現在文字輸入欄內的內容參照。現在按下

   <kbd>Enter</kbd>

   ，看看文字欄內的內容是不是變了？

5. 試著輸入 `guesses` 然後按下

   <kbd>Enter</kbd>

   ，主控台會顯示這個變數儲存著一個 {{htmlelement("p")}} 元素。

6. 現在輸入：

   ```js
   guesses.value;
   ```

   瀏覽器會回傳 `undefined`，因為 `value` 不存在在段落元素裡面。

7. 要更改段落元素中的文字，你需要的是 {{domxref("Node.textContent", "textContent")}} 屬性。試試這個：

   ```js
   guesses.textContent = "Where is my paragraph?";
   ```

8. 現在來做些好玩的事。一行一行輸入並

   <kbd>Enter</kbd>

   ：

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   每個在頁面上的元素都有一個 `style` 屬性，其本身又是另一個物件，包含著許多該元素的行內 CSS 屬性。這讓我們能透過 JavaScript 來動態的為元素設置 CSS 屬性。

## 差不多就到這了

這就是我們的範例 — 你順利地來到結尾了，做得不錯！試試你的最終成品，或試試[我們的版本](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)。如果你仍然有困難沒有解決，再看看[我們的原始碼](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)。

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}
