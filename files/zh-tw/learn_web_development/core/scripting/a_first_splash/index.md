---
title: 初探 JavaScript
short-title: JavaScript 導覽
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

現在你已經學了一些關於 JavaScript 的理論以及它能做什麼，我們將透過一個實作教學，讓你了解建立一個簡單 JavaScript 程式的過程。在這裡，你將一步步地建立一個簡單的「猜數字」遊戲。

<table>
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>了解 <a href="/zh-TW/docs/Learn_web_development/Core/Structuring_content">HTML</a> 與 <a href="/zh-TW/docs/Learn_web_development/Core/Styling_basics">CSS 的基礎</a>。</td>
    </tr>
    <tr>
      <th scope="row">學習成果：</th>
      <td>
        <ul>
          <li>像個程式設計師一樣思考。</li>
          <li>體驗撰寫 JavaScript 的感覺。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

我們想在這裡設定非常明確的期望：我們不期望你在讀完這篇文章後就學會 JavaScript，甚至不期望你理解我們要求你寫的所有程式碼。相反地，我們想讓你了解 JavaScript 的功能是如何協同運作的，以及撰寫 JavaScript 是什麼感覺。在後續的文章中，你將會更詳細地重新檢視這裡展示的所有功能，所以如果你沒有馬上全部理解，也請不要擔心！

> [!NOTE]
> 你在 JavaScript 中看到的許多程式碼功能，與其他程式設計語言中的功能是相同的函式、迴圈等等。程式碼語法看起來不同，但概念基本上是相同的。

## 介紹我們的「猜數字遊戲」範例

在本文中，我們將向你展示如何建立你可以在下面看到的遊戲：

```html hidden live-sample___guess-the-number
<h1>猜數字遊戲</h1>

<p>
  我們已經選好一個 1 到 100 之間的隨機數字。看看你是否能在 10
  次或更少的回合內猜中。我們會告訴你猜的數字是太高還是太低。
</p>

<div class="form">
  <label for="guessField">輸入你的猜測：</label
  ><input
    type="number"
    min="1"
    max="100"
    required
    id="guessField"
    class="guessField" />
  <input type="submit" value="送出猜測" class="guessSubmit" />
</div>

<div class="resultParas">
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
</div>
```

```css hidden live-sample___guess-the-number
html {
  font-family: sans-serif;
}

body {
  width: 50%;
  max-width: 800px;
  min-width: 480px;
  margin: 0 auto;
}

.form input[type="number"] {
  width: 200px;
}

.lastResult {
  color: white;
  padding: 3px;
}
```

```js hidden live-sample___guess-the-number
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "先前的猜測：";
  }

  guesses.textContent = `${guesses.textContent}${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "恭喜你！你猜對了！";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "！！！遊戲結束！！！";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "錯了！";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "上次猜的數字太低了！";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "上次猜的數字太高了！";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "開始新遊戲";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
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

{{EmbedLiveSample("guess-the-number", "100%", 300)}}

試著玩玩看，在繼續之前先熟悉一下這個遊戲。

## 像個程式設計師一樣思考

在程式設計中，最難學的不是你需要學習的語法，而是如何應用它來解決現實世界的問題。你需要開始像個程式設計師一樣思考——這通常包括查看你的程式需要做什麼的描述，找出需要哪些程式碼功能來實現這些事情，以及如何讓它們協同運作。

這需要努力、程式設計語法經驗和練習的結合，再加上一點創造力。你寫的程式碼越多，你就會變得越好。我們不能保證你能在五分鐘內養成「程式設計師的腦袋」，但我們將在這裡以及課程的其餘部分為你提供大量練習像程式設計師一樣思考的機會。

## 最初的設計簡報

讓我們想像一下，你的老闆給了你以下建立這個遊戲的簡報：

> 我希望你建立一個簡單的「猜數字」遊戲。它應該在 1 到 100 之間選擇一個隨機數字，然後挑戰玩家在 10 回合內猜出這個數字。每回合結束後，應該告訴玩家他們猜對了還是猜錯了，如果猜錯了，還要告訴他們猜的數字是太低還是太高。它還應該告訴玩家他們之前猜過的數字。一旦玩家猜對，或者回合數用完，遊戲就結束。遊戲結束時，應該給玩家一個重新開始玩的選項。

在看了這份簡報後，我們首先可以做的是，盡可能地用程式設計師的心態，將它分解成簡單可行的任務：

1. 產生一個 1 到 100 之間的隨機數字。
2. 記錄玩家目前的回合數。從 1 開始。
3. 提供玩家一種猜測數字的方式。
4. 一旦提交了猜測，首先將其記錄在某處，以便使用者可以看到他們之前的猜測。
5. 接下來，檢查它是否是正確的數字。
6. 如果猜對了：
   1. 顯示恭喜訊息。
   2. 阻止玩家輸入更多猜測（這會搞亂遊戲）。
   3. 顯示允許玩家重新開始遊戲的控制項。

7. 如果猜錯了且玩家還有回合數：
   1. 告訴玩家他們錯了，以及他們的猜測是太高還是太低。
   2. 允許他們輸入另一個猜測。
   3. 將回合數加 1。

8. 如果猜錯了且玩家沒有回合數了：
   1. 告訴玩家遊戲結束。
   2. 阻止玩家輸入更多猜測（這會搞亂遊戲）。
   3. 顯示允許玩家重新開始遊戲的控制項。

9. 一旦遊戲重新開始，確保遊戲邏輯和使用者介面完全重置，然後回到步驟 1。

現在讓我們繼續前進，看看如何將這些步驟轉化為程式碼，逐步建立範例，並在此過程中探索 JavaScript 的功能。

## 初始設定

要開始本教學，我們希望你使用你的程式碼編輯器，在一個新的 HTML 檔案中建立以下程式碼的本地副本。

```html
<!doctype html>
<html lang="zh-TW">
  <head>
    <meta charset="utf-8" />

    <title>猜數字遊戲</title>

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

      .form input[type="number"] {
        width: 200px;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>猜數字遊戲</h1>

    <p>
      我們已經選好一個 1 到 100 之間的隨機數字。看看你是否能在 10
      次或更少的回合內猜中。我們會告訴你猜的數字是太高還是太低。
    </p>

    <div class="form">
      <label for="guessField">輸入你的猜測：</label
      ><input
        type="number"
        min="1"
        max="100"
        required
        id="guessField"
        class="guessField" />
      <input type="submit" value="送出猜測" class="guessSubmit" />
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>
      // 你的 JavaScript 寫在這裡
    </script>
  </body>
</html>
```

在你的文字編輯器中保持開啟，同時也在你的網頁瀏覽器中開啟它。目前你會看到一個簡單的標題、一段說明文字和一個用於輸入猜測的表單，但這個表單目前還沒有任何作用。

你將在 HTML 底部的 {{htmlelement("script")}} 元素內加入你所有的 JavaScript 程式碼：

```html
<script>
  // 你的 JavaScript 寫在這裡
</script>
```

## 加入變數來儲存我們的資料

讓我們開始吧。首先，在你的 {{htmlelement("script")}} 元素內加入以下幾行：

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

這段程式碼設定了我們需要的變數（和常數）來儲存我們程式將使用的資料。

變數基本上是值的名稱（例如數字或文字字串）。你可以使用關鍵字 `let` 後面跟著變數名稱來建立一個變數。

常數也用於命名值，但與變數不同，一旦設定就不能改變其值。在這種情況下，我們使用常數來儲存對我們使用者介面部分的參照。這些元素中的文字可能會改變，但每個常數總是參照它被初始化時的同一個 HTML 元素。你可以使用關鍵字 `const` 後面跟著常數名稱來建立一個常數。

你可以用等號（`=`）後面跟著你想賦予的值，來為變數或常數賦值。

在我們的範例中：

- 第一個變數（`randomNumber`）被賦予一個 1 到 100 之間的隨機數字，這是透過一個數學演算法計算出來的。
- 前三個常數各自儲存了對我們 HTML 中結果段落的參照，並用於稍後在程式碼中將值插入段落中（注意它們如何位於一個 `<div>` 元素內，這個元素本身在我們重新開始遊戲時，用於稍後選取這三個段落進行重置）：

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- 接下來的兩個常數儲存了對表單文字輸入框和提交按鈕的參照，並用於稍後處理猜測的提交。

  ```html
  <label for="guessField">輸入你的猜測：</label
  ><input type="number" id="guessField" class="guessField" />
  <input type="submit" value="送出猜測" class="guessSubmit" />
  ```

- 我們最後兩個變數儲存了猜測次數 1（用於追蹤玩家已經猜了多少次），以及一個對尚不存在（但稍後會存在）的重置按鈕的參照。

## 函式

接下來，在你之前的 JavaScript 下方加入以下內容：

```js
function checkGuess() {
  console.log("我是一個佔位符");
}
```

函式是可重複使用的程式碼區塊，你可以只寫一次，然後一次又一次地執行，從而省去不斷重複撰寫程式碼的麻煩。定義函式有幾種方法，但現在我們將專注於一種簡單的類型。在這裡，我們使用關鍵字 `function`，後面跟著一個名稱和一對括號來定義一個函式。之後，我們放上兩個大括號（`{ }`）。在大括號內是我們每次呼叫函式時想要執行的所有程式碼。

當我們想要執行程式碼時，我們輸入函式的名稱，後面跟著括號。

現在讓我們試試看。儲存你的程式碼並在瀏覽器中重新整理頁面。然後進入[開發者工具的 JavaScript 主控台](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)，並輸入以下這行：

```js
checkGuess();
```

按下 <kbd>Return</kbd>／<kbd>Enter</kbd> 後，你應該會看到 `我是一個佔位符` 被記錄到主控台；我們在程式碼中定義了一個函式，每當我們呼叫它時，它就會輸出一個佔位符訊息。

## 文字字串

字串用於表示文字。我們已經看過一個字串變數：在下面的程式碼中，`"我是一個佔位符"` 就是一個字串：

```js
function checkGuess() {
  console.log("我是一個佔位符");
}
```

你可以使用雙引號（`"`）或單引號（`'`）來宣告字串，但對於單一字串宣告的開始和結束必須使用相同的形式：你不能寫成 `"我是一個佔位符'`。

你也可以使用反引號（`` ` ``）來宣告字串。這樣宣告的字串稱為*樣板字面值*，並具有一些特殊屬性。特別的是，你可以在其中嵌入其他變數甚至運算式：

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

這提供了一種將字串連接在一起的機制。

## 條件式

**條件式**程式碼區塊允許你根據某個條件是否為真來選擇性地執行程式碼。它們看起來有點像函式，但它們是不同的。讓我們透過在我們的範例中加入內容來探索條件式。

我想可以肯定地說，我們不希望我們的 `checkGuess()` 函式只是吐出一個佔位符訊息。我們希望它能檢查玩家的猜測是否正確，並做出適當的回應。

此時，請將你目前的 `checkGuess()` 函式替換為這個版本：

```js
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "先前的猜測：";
  }
  guesses.textContent = `${guesses.textContent}${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "恭喜你！你猜對了！";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "！！！遊戲結束！！！";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "錯了！";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "上次猜的數字太低了！";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "上次猜的數字太高了！";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

這是一大段程式碼，讓我們逐一檢視每個部分並解釋它的作用。

- 第一行宣告了一個名為 `userGuess` 的常數，並將其值設定為文字欄位中目前輸入的值。我們還將這個值透過內建的 `Number()` 建構子處理，以確保該值絕對是一個數字。
- 接下來，我們遇到了第一個條件式程式碼區塊。最簡單的條件式區塊以關鍵字 `if` 開始，然後是一些括號，再是一些大括號。在括號內，我們包含一個測試。如果測試回傳 `true`，我們就執行大括號內的程式碼。如果不是，我們就不執行，並繼續執行下一段程式碼。在這種情況下，我們測試 `guessCount` 變數是否等於 `1`（也就是說，這是否是玩家的第一次嘗試）：

  ```js
  guessCount === 1;
  ```

- 如果是，我們就將猜測段落的文字內容設為 `先前的猜測：`。如果不是，我們就不做任何事。
- 接下來，我們使用樣板字面值將目前的 `userGuess` 值附加到 `guesses` 段落的末尾，並在兩者之間加上一個空格。
- 下一個區塊做了一些檢查：
  - 第一個 `if (){ }` 檢查使用者的猜測是否等於我們 JavaScript 頂部設定的 `randomNumber`。如果是，玩家就猜對了，遊戲獲勝，所以我們向玩家顯示一條帶有漂亮綠色的恭喜訊息，清除高／低猜測訊息框的內容，並執行一個名為 `setGameOver()` 的函式，我們稍後會討論這個函式。
  - 現在我們使用 `else if (){ }` 結構在最後一個測試的末尾鏈接了另一個測試。這個測試檢查這回合是否是使用者的最後一回合。如果是，程式會做與前一個區塊相同的事情，只是用遊戲結束訊息代替恭喜訊息。
  - 鏈接在這段程式碼末尾的最後一個區塊（`else { }`）包含的程式碼只有在其他兩個測試都沒有回傳 `true` 的情況下才會執行（玩家沒有猜對，但他們還有剩餘的猜測次數）。在這種情況下，我們告訴他們他們錯了，然後我們執行另一個條件測試來檢查猜測是高於還是低於答案，並適當地顯示進一步的訊息告訴他們是高了還是低了。
- 函式中的最後三行讓我們為下一次提交猜測做好準備。我們將 `guessCount` 變數加 1，這樣玩家就用掉了一次機會（`++` 是一個遞增運算——增加 1），並清空表單文字欄位的值並再次聚焦它，準備好輸入下一個猜測。

## 事件

至此，我們已經有了一個實作得很好的 `checkGuess()` 函式，但它不會做任何事，因為我們還沒有呼叫它。理想情況下，我們希望在按下「送出猜測」按鈕時呼叫它，為此我們需要使用**事件**。事件是在瀏覽器中發生的事情——按鈕被點擊、頁面載入、視訊播放等等——我們可以執行程式碼區塊來回應這些事件。**事件監聽器**觀察特定的事件並呼叫**事件處理函式**，這些函式會在事件觸發時執行。

在你的 `checkGuess()` 函式下方加入以下這行：

```js
guessSubmit.addEventListener("click", checkGuess);
```

在這裡，我們正在為 `guessSubmit` 按鈕加入一個事件監聽器。這是一個需要兩個輸入值（稱為*引數*）的方法——我們正在監聽的事件類型（在此例中為 `click`）作為一個字串，以及事件發生時我們想要執行的函式（在此例中為 `checkGuess()`）。請注意，在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 中撰寫時，我們不需要指定括號。

現在試著儲存並重新整理你的程式碼，你的範例應該可以運作了——在某種程度上。現在唯一的問題是，如果你猜對了答案或用完了猜測次數，遊戲將會中斷，因為我們還沒有定義遊戲結束時應該執行的 `setGameOver()` 函式。現在讓我們加入我們缺少的程式碼並完成範例的功能。

## 完成遊戲功能

讓我們將 `setGameOver()` 函式加到我們程式碼的底部，然後逐一檢視它。現在將它加到你其餘 JavaScript 的下方：

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "開始新遊戲";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- 前兩行透過將表單文字輸入框和按鈕的 `disabled` 屬性設定為 `true` 來停用它們。這是必要的，因為如果我們不這樣做，使用者在遊戲結束後還可以提交更多的猜測，這會搞亂一切。
- 接下來的三行會產生一個新的 {{htmlelement("button")}} 元素，將其文字標籤設定為「開始新遊戲」，並將其加到我們現有 HTML 的底部。
- 最後一行在我們的新按鈕上設定了一個事件監聽器，這樣當它被點擊時，就會執行一個名為 `resetGame()` 的函式。

現在我們也需要定義 `resetGame()`！再次將以下程式碼加到你 JavaScript 的底部：

```js
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
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

這個相當長的程式碼區塊將所有東西完全重置回遊戲開始時的狀態，這樣玩家就可以再玩一次。

具體來說，它：

- 將 `guessCount` 設回 1。
- 清空所有訊息段落中的文字。我們使用 `<div class="resultParas"></div>` 選取其中的所有段落，然後遍歷每一個段落，將其 `textContent` 設定為 `""`（一個空字串）。
- 從我們的程式碼中移除重置按鈕。
- 重新啟用表單元素，並清空和聚焦文字欄位，準備好輸入新的猜測。
- 移除 `lastResult` 段落的背景顏色。
- 產生一個新的隨機數字，這樣你就不會只是再次猜測同一個數字了！

**至此，你應該已經有了一個基本功能齊全的遊戲——恭喜你！**

在本文中，我們剩下要做的就是討論一些你已經見過但可能沒有意識到的其他重要程式碼功能。

## 迴圈

上面，我們提到了**迴圈**，這是程式設計中一個非常重要的概念，它允許你不斷地重複執行一段程式碼，直到滿足某個條件為止。

讓我們探索一個基本的範例來向你展示這是什麼意思。再次前往你的[瀏覽器開發者工具 JavaScript 主控台](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)，將以下程式碼貼入其中，然後按下 <kbd>Enter</kbd>／<kbd>Return</kbd>：

```js
const fruits = ["蘋果", "香蕉", "櫻桃"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

發生了什麼事？字串 `'蘋果'、'香蕉'、'櫻桃'` 被印在你的主控台上了。

這是因為迴圈的關係。`const fruits = ['蘋果', '香蕉', '櫻桃'];` 這一行建立了一個陣列，它是一個值的集合（在這個例子中是字串）。

然後我們使用 [`for...of`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...of) 迴圈來取得陣列中的每個項目並對其執行一些 JavaScript。`for (const fruit of fruits)` 這一行表示：

1. 取得 `fruits` 中的第一個值並將其儲存在名為 `fruit` 的變數中。
2. 執行 `{}` 大括號之間的程式碼（在這種情況下，是將 `fruit` 的值記錄到主控台）。
3. 將下一個陣列值儲存在 `fruit` 中，並重複步驟 2，直到你到達 `fruits` 陣列的末尾。

現在讓我們看看我們猜數字遊戲中的迴圈——以下內容可以在 `resetGame()` 函式中找到：

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

這段程式碼使用 {{domxref("Document.querySelectorAll", "querySelectorAll()")}} 方法建立一個變數，其中包含 `<div class="resultParas">` 內所有段落的列表，然後它會遍歷每一個段落，移除每個段落的文字內容。

請注意，即使 `resetPara` 是一個常數，我們仍然可以改變它的內部屬性，例如 `textContent`。

## 總結

那麼，建立這個範例就到此為止了。你已經完成了——做得好！試試你最終的程式碼，或者[在這裡玩我們完成的版本](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)。如果你的範例版本無法運作，請對照[原始碼](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)進行檢查。

下一課可能也會有所幫助——在其中，我們將討論撰寫 JavaScript 程式碼時可能出現的問題，並在此過程中回顧「猜數字」遊戲。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
