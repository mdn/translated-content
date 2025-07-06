---
title: 挑戰：傻故事產生器
slug: Learn_web_development/Core/Scripting/Silly_story_generator
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

在本次評估中，你被賦予的任務內容將與本單元學習到的知識息息相關，並將其應用於創建一個能隨機生成傻故事的有趣應用程式。祝玩的開心！

## 前置作業

在開始本測驗前，你應該:

- 開啟右方網頁： [grab the HTML file](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html) ，將 HTML 範本儲存到你的本地電腦的新資料夾中，並命名為`index.html` 。範本也包含相應的 CSS 檔案。
- 開啟右方網頁： [page containing the raw text](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt) ，並保持網頁開啟在瀏覽器的另一分頁上，以便稍後使用。

> [!NOTE]
> 除了將檔案下載到自己的電腦中，你也能使用線上編輯程式的網頁，像是：[JSBin](https://jsbin.com/) 或者 [Glitch](https://glitch.com/) 來完成評估測驗。你可以將 HTML, CSS 以及 JavaScript 貼到前述的線上編輯器中。如果你使用的線上編輯器沒有獨立給 JavaScript 的編輯區，你也能透過`<script>`直接將 JS 語法放到 HTML 檔案中。

## 任務簡介

透過前述網頁你已經得到初版 HTML/CSS 與一些 JavaScript 字串、函數；你需要再寫一些必要的 JavaScript 語法來將這些檔案轉變為可運作的程式，任務如下：

- 當 "Generate random story" (產生隨機故事)的按鈕被點擊，請產出一則傻故事
- 若在點擊產生故事按鈕前將自定義名字輸入於輸入框"Enter custom name" (譯：輸入自定義名字），則將故事中預設的名字 "Bob" 代換為自定義名字
- 若在點擊產生故事按鈕前，也點擊 UK 的單選按鈕，則將預設的美制重量、溫度單位轉換為英制單位
- 每點擊一次產生故事的按鈕，即產生新一則隨機傻故事（不限次數）

以下截圖為完成品的範例：

![](screen_shot_2018-09-19_at_10.01.38_am.png)

點擊右方連結可以參考與測試完成品： [have a look at the finished example](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) （請不要偷看原始碼喔！）

## 任務開始

以下清楚地描述了完成任務需要哪些動作。

基本設定：

1. 在有`index.html`的資料夾中建立一個新檔案稱之為 `main.js`
2. 請在`index.html`中引用第一點建立的外部 JavaScript 檔案，引用方法是在`</body>` tag 前插入一組 {{htmlelement("script")}}元素 ，並在 opening tag 上加入`src=" main.js"`

初始化變數與函數：

1. 在原始文件檔中(raw text file)，請複製標題 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" 以下到第 2 點前的所有程式碼，並貼到`main.js`中。這給你三個變數來標記：文字輸入框 "Enter custom name" (輸入自定義名字) ，變數為 (`customName`) 與按鈕 "Generate random story"(產生隨機故事) ，變數為 (`randomize`), 以及 HTML 中接近 body 底部的 {{htmlelement("p")}} 元素，故事將會被複製進第三個變數(`story`)中。此外你還會得到一個函數稱為： `randomValueFromArray()` ，從命名中可以得知這是一個陣列，它會隨機提供一則儲存其中的故事。
2. 接著讓我們查看原始文件檔中(raw text file)的第 2 點： "2. RAW TEXT STRINGS"。 其包含的這些字串在程式運行時會被放進來，請幫忙在`main.js`中將這些字串分別存進對應的變數裡：
   1. 將第一行超級長的字串存進變數 `storyText`中。
   2. 將第一組三個字串存進一陣列，並命名為`insertX`。
   3. 將第二組三個字串存進一陣列，並命名為`insertY`。
   4. 將第三組三個字串存進一陣列，並命名為`insertZ`。

放置事件監聽器與未完善的函數：

1. 再度回到原始文件檔中(raw text file)
2. 複製第 3 標題，"3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" 以下的內容，並貼到 `main.js` 檔案中的最下方，這包含：
   - 給變數`randomize`增加一個點擊事件監聽器（clickevent listener），所以當產生故事的按鈕被點擊，`result()` 函數會運行 。
   - 增加一個部分完成的函數 `result()`，完成測驗你需要完善這個函數。

完善 `result()` 函數：

1. 創造一個新變數稱為：`newStory`，讓這個變數的值等於`storyText`；我們需要這個變數以便每次產生故事按鈕被點擊時，函數都能再次運作並產生新故事，如果我們只在`storyText`之上做改變，我們只能產生一次新故事。
2. 額外增加三個變數：`xItem`、`yItem` 與 `zItem`，並使這三個變數等於函數`randomValueFromArray()`中三個陣列的結果(每次會從各陣列中隨機挑出一項)。舉例，你能透過寫`randomValueFromArray(insertX)`來從`insertX`得到任一隨機字串。
3. 接著我們需要將`newStory`中三個 placeholders 字串 `:insertx:`、`:inserty:`跟 `:insertz:`換成`xItem`、`yItem`、 `zItem`。有些字串方法在這裡特別有用，請讓字串方法的返回值等於 `newStory` ，所以之後每次 `newStory` 被呼叫時，is made equal to itself, but with substitutions made. So each time the button is pressed, these placeholders are each replaced with a random silly string. As a further hint, the method in question only replaces the first instance of the substring it finds, so you might need to make one of the calls twice.
4. Inside the first `if` block, add another string replacement method call to replace the name 'Bob' found in the `newStory` string with the `name` variable. In this block we are saying "If a value has been entered into the `customName` text input, replace Bob in the story with that custom name."
5. Inside the second `if` block, we are checking to see if the `uk` radio button has been selected. If so, we want to convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade. What you need to do is as follows:
   1. Look up the formulae for converting pounds to stone, and Fahrenheit to centigrade.
   2. Inside the line that defines the `weight` variable, replace 300 with a calculation that converts 300 pounds into stones. Concatenate `' stone'` onto the end of the result of the overall `Math.round()` call.
   3. Inside the line that defines the `temperature` variable, replace 94 with a calculation that converts 94 Fahrenheit into centigrade. Concatenate `' centigrade'` onto the end of the result of the overall `Math.round()` call.
   4. Just under the two variable definitions, add two more string replacement lines that replace '94 farenheit' with the contents of the `temperature` variable, and '300 pounds' with the contents of the `weight` variable.

6. Finally, in the second-to-last line of the function, make the `textContent` property of the `story` variable (which references the paragraph) equal to `newStory`.

## Hints and tips

- You don't need to edit the HTML in any way, except to apply the JavaScript to your HTML.
- If you are unsure whether the JavaScript is applied to your HTML properly, try removing everything else from the JavaScript file temporarily, adding in a simple bit of JavaScript that you know will create an obvious effect, then saving and refreshing. The following for example turns the background of the {{htmlelement("html")}} element red — so the entire browser window should go red if the JavaScript is applied properly:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [Math.round()](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/round) is a built-in JavaScript method that simply rounds the result of a calculation to the nearest whole number.
- There are three instances of strings that need to be replaced. You may repeat the `replace()` method multiple times, or you can use regular expressions. For instance, `var text = 'I am the biggest lover, I love my love'; text.replace(/love/g,'like');` will replace all instances of 'love' to 'like'. Remember, Strings are immutable!

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
