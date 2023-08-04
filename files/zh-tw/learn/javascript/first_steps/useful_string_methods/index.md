---
title: 有用的字符串方法
slug: Learn/JavaScript/First_steps/Useful_string_methods
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

現在我們已經了解了字符串的基礎知識，讓我們開始思考我們可以使用內置方法對字符串執行哪些有用的操作，例如查找文本字符串的長度，連接和拆分字符串 ，將字符串中的一個字符替換為另一個字符，等等。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先備知識:</th>
      <td>基礎的電腦素養、基本的HTML和CSS、以及清楚什麼是JavaScript。</td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>了解字串是物件，學習使用一些能夠應用這些字串的基礎方法。</td>
    </tr>
  </tbody>
</table>

## 把字串當作物件

我們曾經說過，現在我們重申一遍—在 javascript 中，一切東西都可以被當作物件。例如我們創建一個字串。

```js
var string = "This is my string";
```

你的變數成為一個字串的實體物件，因此它將有許多性質(properties)與功能(methods)可以使用。

你的變數成為一個字串的實體物件，因此它將有許多性質(properties)與功能(methods)可以使用。你可以到 {{jsxref("String")}} 物件頁面的左方列表查看這些性質與功能!

**好的，在你腦袋燒壞之前先別擔心！**在這趟學習旅程中，關於這些大部分對於現在的你其實還不需要知道。不過有一些你可能會經常使用，我們將在這裡介紹。

Let's enter some examples into a fresh console. We've provided one below (you can also [open this console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) in a separate tab or window, or use the [browser developer console](/zh-TW/docs/Learn/Common_questions/What_are_browser_developer_tools) if you'd prefer).

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

{{ EmbedLiveSample('把字串當作物件', '100%', 300) }}

### 找出字串的長度（length）

這很簡單，你可以用 {{jsxref("String.prototype.length", "length")}} 屬性。試著輸入下面幾行：

```js
var browserType = "mozilla";
browserType.length;
```

結果應該會回傳數字 7，因為 "mozilla" 字元長度是 7。 這在很多狀況下很好用，舉例來說：你會想知道序列的長度，這樣才能將這些序列按照長度排序，或是讓使用者知道他們輸入的名稱是否太長。

### 取得字串中的特定字元（string character）

On a related note, you can return any character inside a string by using **square bracket notation** — this means you include square brackets (`[]`) on the end of your variable name. Inside the square brackets you include the number of the character you want to return, so for example to retrieve the first letter you'd do this:

```js
browserType[0];
```

記得電腦計數從 0 開始，不是 1！ 如果要在*任何*一個字串中取得最後一個字元，我們可以使用以下程式碼，結合了取得字元的技巧和上面學過的長度屬性：

```js
browserType[browserType.length - 1];
```

"mozilla" 這個詞的長度是 7，但因為電腦是從 0 開始計數，所以最後一個位置是 6，因此我們會將 `length-1` 。你也可以試試用這個方法找各序列的第一個字母，並將這些序列按字母順序排好 。

### 尋找字串中的子字串（substring）並提出子字串

1. Sometim 有時候你會想搜尋是否有一個較小的字串存在於比較大的字串中（_我們通常會說是否有個子字串存在於字串中_）。這可以用 {{jsxref("String.prototype.indexOf()", "indexOf()")}} 方法，當中需要一個參數（ {{glossary("parameter")}} ），也就是你想搜尋的子字串：

   ```js
   browserType.indexOf("zilla");
   ```

   結果會傳回 2，因為子字串 "zilla" 在 "mozilla" 中是從位置 2 開始的。（依然要記得電腦計數是從 0 開始）。這個方法可以用篩選字串，舉例來說：我們有一串網址的清單，而我們只想印出那些包含 "mozilla" 的網址。

2. This can be done in another way, which is possibly even more effective. Try the following:

   ```js
   browserType.indexOf("vanilla");
   ```

   This should give you a result of `-1` — this is returned when the substring, in this case 'vanilla', is not found in the main string.

   You could use this to find all instances of strings that **don't** contain the substring 'mozilla', or **do,** if you use the negation operator, as shown below. You could do something like this:

   ```js
   if (browserType.indexOf("mozilla") !== -1) {
     // do stuff with the string
   }
   ```

3. When you know where a substring starts inside a string, and you know at which character you want it to end, {{jsxref("String.prototype.slice()", "slice()")}} can be used to extract it. Try the following:

   ```js
   browserType.slice(0, 3);
   ```

   This returns "moz" — the first parameter is the character position to start extracting at, and the second parameter is the character position after the last one to be extracted. So the slice happens from the first position, up to, but not including, the last position. In this example, since the starting index is 0, the second parameter is equal to the length of the string being returned.

4. Also, if you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter! Instead, you only need to include the character position from where you want to extract the remaining characters in a string. Try the following:

   ```js
   browserType.slice(2);
   ```

   This returns "zilla" — this is because the character position of 2 is the letter z, and because you didn't include a second parameter, the substring that was returned was all of the remaining characters in the string.

> **備註：** The second parameter of `slice()` is optional: if you don't include it, the slice ends at the end of the original string. There are other options too; study the {{jsxref("String.prototype.slice()", "slice()")}} page to see what else you can find out.

### 改變大小寫

The string methods {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} and {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} take a string and convert all the characters to lower- or uppercase, respectively. This can be useful for example if you want to normalize all user-entered data before storing it in a database.

Let's try entering the following lines to see what happens:

```js
var radData = "My NaMe Is MuD";
radData.toLowerCase();
radData.toUpperCase();
```

### 更動部分字串

You can replace one substring inside a string with another substring using the {{jsxref("String.prototype.replace()", "replace()")}} method. This works very simply at a basic level, although there are some advanced things you can do with it that we won't go into yet.

It takes two parameters — the string you want to replace, and the string you want to replace it with. Try this example:

```js
browserType.replace("moz", "van");
```

Note that to actually get the updated value reflected in the `browserType` variable in a real program, you'd have to set the variable value to be the result of the operation; it doesn't just update the substring value automatically. So you'd have to actually write this: `browserType = browserType.replace('moz','van');`

## Active learning examples

In this section we'll get you to try your hand at writing some string manipulation code. In each exercise below, we have an array of strings, and a loop that processes each value in the array and displays it in a bulleted list. You don't need to understand arrays or loops right now — these will be explained in future articles. All you need to do in each case is write the code that will output the strings in the format that we want them in.

Each example comes with a "Reset" button, which you can use to reset the code if you make a mistake and can't get it working again, and a "Show solution" button you can press to see a potential answer if you get really stuck.

### Filtering greeting messages

In the first exercise we'll start you off simple — we have an array of greeting card messages, but we want to sort them to list just the Christmas messages. We want you to fill in a conditional test inside the `if( ... )` structure, to test each string and only print it in the list if it is a Christmas message.

1. First think about how you could test whether the message in each case is a Christmas message. What string is present in all of those messages, and what method could you use to test whether it is present?
2. You'll then need to write a conditional test of the form _operand1 operator operand2_. Is the thing on the left equal to the thing on the right? Or in this case, does the method call on the left return the result on the right?
3. Hint: In this case it is probably more useful to test whether the method call _isn't_ equal to a certain result.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 290px; width: 95%">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar greetings = ['Happy Birthday!',\n 'Merry Christmas my love',\n 'A happy Christmas to all the family',\n 'You\\'re all I want for Christmas',\n 'Get well soon'];\n\nfor(var i = 0; i < greetings.length; i++) {\n var input = greetings[i];\n if(greetings[i].indexOf('Christmas') !== -1) {\n var result = input;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n }\n}";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Filtering greeting messages', '100%', 590) }}

### Fixing capitalization

In this exercise we have the names of cities in the United Kingdom, but the capitalization is all messed up. We want you to change them so that they are all lower case, except for a capital first letter. A good way to do this is to:

1. Convert the whole of the string contained in the `input` variable to lower case and store it in a new variable.
2. Grab the first letter of the string in this new variable and store it in another variable.
3. Using this latest variable as a substring, replace the first letter of the lowercase string with the first letter of the lowercase string changed to upper case. Store the result of this replace procedure in another new variable.
4. Change the value of the `result` variable to equal to the final result, not the `input`.

> **備註：** A hint — the parameters of the string methods don't have to be string literals; they can also be variables, or even variables with a method being invoked on them.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 250px; width: 95%">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];\n\nfor(var i = 0; i < cities.length; i++) {\n var input = cities[i];\n var lower = input.toLowerCase();\n var firstLetter = lower.slice(0,1);\n var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());\n var result = capitalized;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n\n}";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Fixing capitalization', '100%', 550) }}

### Making new strings from old parts

In this last exercise, the array contains a bunch of strings containing information about train stations in the North of England. The strings are data items that contain the three-letter station code, followed by some machine-readable data, followed by a semicolon, followed by the human-readable station name. For example:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

We want to extract the station code and name, and put them together in a string with the following structure:

```plain
MAN: Manchester Piccadilly
```

We'd recommend doing it like this:

1. Extract the three-letter station code and store it in a new variable.
2. Find the character index number of the semicolon.
3. Extract the human-readable station name using the semicolon character index number as a reference point, and store it in a new variable.
4. Concatenate the two new variables and a string literal to make the final string.
5. Change the value of the `result` variable to equal to the final string, not the `input`.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 285px; width: 95%">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar stations = ['MAN675847583748sjt567654;Manchester Piccadilly',\n 'GNF576746573fhdg4737dh4;Greenfield',\n 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',\n 'SYB4f65hf75f736463;Stalybridge',\n 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];\n\nfor(var i = 0; i < stations.length; i++) {\n var input = stations[i];\n var code = input.slice(0,3);\n var semiC = input.indexOf(';');\n var name = input.slice(semiC + 1);\n var result = code + ': ' + name;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n}";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Making new strings from old parts', '100%', 585) }}

## 結語

不可否認當網站在跟人們互相溝通時，處理文字和句子在程式設計中是相當重要的，尤其是在 JavaScript 中。這篇文章已經傳授你如何去處理字串的方法，應該對以後深入了解其他更複雜主題的你會很有幫助。接下來，我們將會看看最後一個近期內我們需要關注的主要的資料型態 — 陣列。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
