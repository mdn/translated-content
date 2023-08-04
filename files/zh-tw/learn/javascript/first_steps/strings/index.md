---
title: 處理文字 - JavaScript中的字串
slug: Learn/JavaScript/First_steps/Strings
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

接下來我們將把注意力轉向字串——這就是程式設計中調用的文字片段。在本文中，我們將介紹在學習 JavaScript 時您應該了解所有有關字串的常見事項，例如建立字串，跳脫字串中的引號以及將字串連接在一起。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>
        基本的電腦素養、對 HTML 與 CSS 有基本的認識、對 JavaScript 有認識。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>熟悉 JavaScript 字串的基礎。</td>
    </tr>
  </tbody>
</table>

## 文字的力量

文字對人類而言非常重要——它關乎我們如何交流、溝通。Web 以文字為基底的媒介，它的設計讓人類可以進行交流並分享資訊，因此掌握文字如何在 Web 上呈現是很有用的。{{glossary("HTML")}} 提供文字的結構以及定義；{{glossary("CSS")}} 讓我們更精確地設定樣式；而 JavaScript 則包含許多操作字串的特性，例如：製作客製化的歡迎訊息、正確地顯示所需的文字標籤、排列所需的詞語順序等。

到目前為止，所有我們課程上的編碼幾乎都包含一些字串的操作。

## 字串 — 基礎

剛開始你會覺得字串與數字的處理方式很類似，但當你越深入就會了解到一些明顯的差異。讓我們從在 console 裡輸入一些基本的程式行來熟悉它吧！在下方，我們提供一個 Console （你也可以另開一個頁籤或視窗[使用他](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) ，或者使用瀏覽器的[開發者工具](/zh-TW/docs/Learn/Common_questions/What_are_browser_developer_tools)）。

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

{{ EmbedLiveSample('字串 — 基礎', '100%', 300) }}

### 建立字串

1. 首先，先輸入下面幾行程式碼：

   ```js
   let string = "The revolution will not be televised.";
   string;
   ```

   就像我們對數字的操作，我們聲明一個變數，並用一個值（字串）來初始化它，而後傳回這個值。唯一的差異在於，你需要用引號包住你的值。

2. 如果你沒有使用引號包住值，或缺少單一邊的引號，都會導致錯誤產生。試著輸入下面幾行程式碼：

   ```js example-bad
   let badString = This is a test;
   let badString = 'This is a test;
   let badString = This is a test';
   ```

   上述的程式無法運作，因為未使用引號包圍的文字都將被視為變數名稱、屬性名稱和保留字等。如果瀏覽器無法辨識它，便會產生錯誤（例如：「missing ; before statement」）。如果瀏覽器可以識別字段從哪裡開始，但無法找到字段的終點，意即缺少第二個引號，則會產生「unterminated string literal」的錯誤。如果你的程式出現了這樣的錯誤，檢查並確認自己的字串是否遺漏了任何引號。

3. 如果你先定義了變數 `string` ，則以下程式碼可以正常運作。馬上來試試看：

   ```js
   let badString = string;
   badString;
   ```

   `badString` 會被設定跟 `string` 具有一樣的值。

### 單引號與雙引號

1. 在 JavaScript 中，你可以選擇用單引號或雙引號來包住字串。兩種方式都可行：

   ```js
   let sgl = "Single quotes.";
   let dbl = "Double quotes";
   sgl;
   dbl;
   ```

2. 兩種之間的差異非常小，取決於你個人的習慣與喜好。你可以選擇一種，並且固定使用它。交互使用兩種方式，容易造成混亂。特別是當你使用兩種不同的引號包住一個字串！這會導致錯誤回傳：

   ```js example-bad
   let badQuotes = 'What on earth?";
   ```

3. 瀏覽器會認為字串並沒有結束，沒有作為包住字串的引號，是可以出現在字串裡面的。看看下面的例子，兩種都是可行的：

   ```js
   let sglDbl = 'Would you eat a "fish supper"?';
   let dblSgl = "I'm feeling blue.";
   sglDbl;
   dblSgl;
   ```

4. 但是，字串中不可以再使用那個作為包住字串的引號。以下的程式行會出錯，因為瀏覽器無法判斷字串的結尾：

   ```js example-bad
   let bigmouth = 'I've got no right to take my place...';
   ```

   This leads us very nicely into our next subject.

### 字串中的跳脫字元（Escaping characters）

要修復先前出錯的那一行程式碼，我們需要解決引號的問題。跳脫字元（Escaping characters）的意思是我們需要確保它們被辨識為文字，而非程式碼本身。在 JavaScript 中，我們在字元的前面放一個反斜線解決這個問題。試試看這個：

```js
let bigmouth = "I've got no right to take my place...";
bigmouth;
```

這是可行的！你可以用一樣的方法跳脫其他字元，例如 `\"`。除此之外，還有一些特殊方法。更詳細的部分，請參閱[跳脫符號](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation) 。

## 連接字串（Concatenating strings）

1. 連接（Concatenate）是一個新潮的程式用語。在 JavaScript 中，使用加號（+）將字串連接；這也是我們做數字相加的方式。但在這個狀況下，它有不同的作用。讓我們在 console 中示範：

   ```js
   let one = "Hello, ";
   let two = "how are you?";
   let joined = one + two;
   joined;
   ```

   這邊的結果是 `joined` 這個變數中，有了 「Hello, how are you?」這個值。

2. 在上一個範例中，我們只連接了兩個字串。但只要你在兩個字串之間加上 `+` ，那你要連接幾個都可以。試試看這個：

   ```js
   let multiple = one + one + one + one + two;
   multiple;
   ```

3. 你也可以結合變數和字串。試試看這個：

   ```js
   let response = one + "I am fine — " + two;
   response;
   ```

> **備註：** 當你輸入一個字串在你的程式碼中，並用單引號或雙引號將它括起來，它稱為**字串文字**（**string literal**）。

### Concatenation in context

讓我們看看實際運用連接字串的例子——以下是這堂課中稍早的範例：

```html
<button>Press me</button>
```

```js
const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("What is your name?");
  alert("Hello " + name + ", nice to see you!");
};
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50, "", "", "hide-codepen-jsfiddle") }}

在程式第四行我們用了 {{domxref("window.prompt()", "window.prompt()")}} 這個函式，可以要求使用者透過彈出的對話框去回答問題，並將使用者輸入的文字儲存在給訂的變數內（在這個例子中就是 `name`）。接著我們在第五行用了 {{domxref("window.alert()", "window.alert()")}} 函式，顯示另一個彈出視窗，以連接的方式將兩段字串文字以及 `name` 這個變數結合成一個字串。

### 數字 vs. 字串

1. 那麼我們將字串和數字連接會發生什麼事呢？讓我們在 console 中試試看：

   ```js
   "Front " + 242;
   ```

   或許你預期會跑出錯誤訊息，但看來依然正常運作。若將字串表示成數字似乎不太合理，但將數字表示成字串看來是可行的，所以瀏覽器便會巧妙地將數字轉換成字串，並將這兩個字串連接在一起。

2. 你也可以用兩個數字做這個例子 — 將這兩個數字包在引號中強制將它們轉換成字串。試試看（並使用 typeof 這個運算子去檢查變數是數字或字串）：

   ```js
   let myDate = "19" + "67";
   typeof myDate;
   ```

3. 如果你想轉換數字變數成字串，但不要更動到原本的變數；或是想轉換字串變數成數字，也不要更動到原本的變數，你可以使用以下兩種方式：

   - 物件 {{jsxref("Number")}} 會將欲處理的變數轉換成數字（如果可行的話）。試試以下例子：

     ```js
     let myString = "123";
     let myNum = Number(myString);
     typeof myNum;
     ```

   - 另一方面，也有 [`toString()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 方法能夠讓數字轉換為相等的字串。試試看：

     ```js
     let myNum = 123;
     let myString = myNum.toString();
     typeof myString;
     ```

   這些結構在某些情況相當好用。舉例來說：如果使用者在文字表單中輸入了一個數字，這個數字將會是字串格式。而若想要把這個數字加上另一個數字，那你會希望它是數字格式（才能做數字相加），所以可以使用 `Number()` 來處理這個情況。可以看看實際案例：[猜數字遊戲, 第 61 行](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L61)。

## 模版字符串(Template literals)

另一種你會遇上的字串語法是**模版字符串(template literals)** (也稱做模版字串 template strings)。這是一種更新的語法提供更彈性、簡單的方式去理解字串。

> **備註：** 嘗試在你的瀏覽器上測試下面的範例，來看看會得到什麼結果。

將標準字串轉變為模版字符串，你需要將引號 (`' '`, or `" "`) 換為重音符 (backtick characters (`` ` ` ``) )，接著來看一個簡單的例子:

```js
let song = "Fight the Youth";
```

轉換成模版字符串會像這樣子:

```js
song = `Fight the Youth`;
```

如果我們想要連接字串，或是將算式的結果包含在裡面，用傳統的字串去寫會很瑣碎且麻煩:

```js
let score = 9;
let highestScore = 10;
let output =
  'I like the song "' +
  song +
  '". I gave it a score of ' +
  (score / highestScore) * 100 +
  "%.";
```

模版字符串能大量簡化這串程式碼:

```js
output = `I like the song "${song}". I gave it a score of ${
  (score / highestScore) * 100
}%.`;
```

全部一串都只需要包含在一對重音符號裡，不再需要切開、合起一堆字串碎片。
當你想要包含變數或者算式在字串裡時，你只需要將它放在 _佔位符_ `${ }` 裡。

你能將複雜的算式包含在模版字符串裡，舉個例子:

```js
let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${examScore}/${examHighestScore} (${Math.round(
  (examScore / examHighestScore) * 100,
)}%). ${
  examScore >= 49
    ? "Well done, you passed!"
    : "Bad luck, you didn't pass this time."
}`;
```

- 前兩個佔位符非常好理解，字串裡只包含了單一值。
- 第三個計算了一個百分比的結果且四捨五入進整數。
- 第四個使用了三元運算符來檢查分數是否高於指定分數且印出一個通過或著失敗的訊息結果。

另一個可以注意的點是，如果你想要將傳統字串拆分成多行，你需要加上一個斷行字母, `\n`

```js
output =
  'I like the song "' +
  song +
  '".\nI gave it a score of ' +
  (score / highestScore) * 100 +
  "%.";
```

模版字符串保留了程式碼中的斷行方式，所以不再需要使用斷行字母。
這樣也能達到相同的結果:

```js
output = `I like the song "${song}".
I gave it a score of ${(score / highestScore) * 100}%.`;
```

我們建議你盡可能習慣使用模版字符串。現今流行的瀏覽器都能完好的支援它，只有一個地方你能發現它並不支援外: Internet Explorer。
我們有許多的例子仍然使用目前標準的字串語法，但我們未來將會加入更多模版字符串的應用。

來我們的[Template literals](/zh-TW/docs/Web/JavaScript/Reference/Template_literals) 相關頁面看看更多的範例與進階的特色細節。

## 測試您的技能！

你已到達文章的結尾了，但你能記得最重要的資訊嗎?
在繼續學習之前，你可以找些難一點的測驗，來檢測你有記得這些知識 — [Test your skills: Strings](/zh-TW/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings). 記住，接下來的文章也需要這些知識，所以你可能想先看看。

## 結語

以上是 JavaScript 中基礎的字串觀念。下個文章中，我們會依循這些概念並試試一些適用於字串的內建方法，進而運用這些方法讓字串能照我們想要的方式呈現。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
