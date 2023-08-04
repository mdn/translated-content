---
title: Arrays
slug: Learn/JavaScript/First_steps/Arrays
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

在本單元的最後一篇文章中，我們將介紹陣列——一種在單個變數名下儲存資料項列表的簡潔方法。在這裡，我們看看為什麼這很有用，然後探討如何建立陣列，檢索、增加和刪除儲存在陣列中的項目等等。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先備知識：</th>
      <td>基本計算機知識、基本理解 HTML 與 CSS、知道 JavaScript 是什麼。</td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>理解何謂陣列並在 JavaScript 操作之。</td>
    </tr>
  </tbody>
</table>

## 什麼是陣列？

陣列通常描述為「像列表的物件」：也就是一個列表物件，裡面含有幾個數值。陣列物件能放在變數裡面，處理方式也與資料型別大致相同。不過主要差異為，陣列可以獨立存取、並高效處理裡面的數值：像是利用迴圈，對每個數值作相同處理。例如我們的陣列是一組有項目和價格的產品、我們可以用迴圈把單價印在發票上、最後在發票底下印出合計。

不用陣列的話，就會需要註冊、並單獨呼叫很多獨立變數。這樣會花更多時間寫程式、效率更低、還更容易寫錯。只有十個的話還好解決，但如果有一百個，甚至一千個呢？我們會在接下來闡述之。

與前幾篇文章一樣，讓我們在 JavaScript 控制台中輸入一些示例，來了解陣列的基礎知識吧。

### 建立陣列

陣列用方括弧包起來，每個單位會用逗號分隔起來。

1. 來作一個購物清單的陣列吧：我們會做類似下面的事情。在主控台中輸入以下程式：

   ```js
   var shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping;
   ```

2. 在此，陣列的每個單位都是字串。但請記住，陣列可以儲存任何單位：字串、數字、物件、另一個變數、甚至是另一個陣列。也可以混合單位的型別：它們不一定都要是數字或字串。來試試這個：

   ```js
   var sequence = [1, 1, 2, 3, 5, 8, 13];
   var random = ["tree", 795, [0, 1, 2]];
   ```

3. 看下去之前，試著自己作幾個陣列。

### 存取並修改陣列的單位

你可以使用括號標記法存取個別單位，同時也可以[存取字串中的字母](/zh-TW/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)。

1. 在主控台輸入以下程式：

   ```js
   shopping[0];
   // returns "bread"
   ```

2. 也可以透過賦予陣列新數值修改該單位。試試這個：

   ```js
   shopping[0] = "tahini";
   shopping;
   // shopping 回傳 [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > **備註：** 前面有說過，但還是提醒下：電腦從 0 開始數！

3. 請注意，陣列裡面的陣列稱為多維陣列（multidimensional array）。你可以撰寫兩組方括弧，來存取陣列裡面的陣列單位。例如說，存取前述 `random` 變數內的陣列單位就可以這麼寫：

   ```js
   random[2][2];
   ```

4. 看下去之前，試著進一步使用並修改陣列。

### 找出陣列長度

找出陣列長度（意即有幾個單位在陣列內）的方法，跟找出字串長度（含有幾個字元）的方式一樣——都是使用 {{jsxref("Array.prototype.length","length")}} 屬性。試試下方程式行：

```js
shopping.length;
// should return 5
```

這還有其他用途，但最常見的用法是讓迴圈一直循環直到所有的單元都走過一次。 舉個例子：

```js
var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
```

在後續的章節，你會學到更多關於迴圈的部分；簡而言之，上述程式碼的意思是：

1. 從陣列中索引為 0 的單元開始循環。
2. 當索引值等於陣列的長度時，停止循環。這個方法對任何長度的陣列都可行，但在這個例子中，迴圈會當索引等於 7 時停止循環（這樣很好，因為最後一個單元——我們希望有包含到的——是 6）。
3. 我們在瀏覽器 console 中用 [`console.log()`](/zh-TW/docs/Web/API/Console/log) 將每個單元列印出來。

## 好用的陣列方法

在這個小節中，我們會介紹一些相當有用、有關陣列的方法。例如將字串拆分為陣列，反之亦然，以及增加新的單位到陣列中。

### 在字串與陣列之間轉換

通常你會看到一組含有原始資料的長字串，而你可能會希望將有用的單元拆分、組成更好用的形式，對他進行操作。為了達成這個目的，我們可以使用 {{jsxref("String.prototype.split()","split()")}} 方法。它最簡單的形式是只使用一個參數，你想分離的字串位置的字元（分隔符），而後它會返回陣列中在分隔符之間的子字串。

> **備註：** 好的，在技術上它屬於字串的方法，而非陣列的方法。但因為它可以很順利地對陣列進行操作，因此我們把它列在這邊。

1. 來試試這個，看它如何運作。首先，建立一個字串在你的 console:

   ```js
   var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. 現在我們用逗點來分隔字串：

   ```js
   var myArray = myData.split(",");
   myArray;
   ```

3. 最後，試著找出你新的陣列的長度，並且從中取出一些單元：

   ```js
   myArray.length;
   myArray[0]; // the first item in the array
   myArray[1]; // the second item in the array
   myArray[myArray.length - 1]; // the last item in the array
   ```

4. 相對地，你也可以用 {{jsxref("Array.prototype.join()","join()")}} 方法。試試下面這段：

   ```js
   var myNewString = myArray.join(",");
   myNewString;
   ```

5. 另一個將陣列轉換為字串的方法是用 {{jsxref("Array.prototype.toString()","toString()")}} 。`toString()` 因為不需要參數而比 `join()` 更簡潔，但因此也更多限制。使用 `join()` 你可以使用特定的分隔符（試著使用其他不同的字元來執行步驟 4）。

   ```js
   var dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); //Rocket,Flash,Bella,Slugger
   ```

### 新增與移除陣列單位

我們還沒談到增加與移除陣列的單位，現在來看看吧！我們使用上一個小節中的 `myArray` 陣列。如果你沒跟隨到上一個小節，那就先在你的 console 建立下面這個陣列：

```js
var myArray = [
  "Manchester",
  "London",
  "Liverpool",
  "Birmingham",
  "Leeds",
  "Carlisle",
];
```

首先，我們可以分別使用 {{jsxref("Array.prototype.push()","push()")}} 和 {{jsxref("Array.prototype.pop()","pop()")}} 來增加或移除一個在陣列最末端的單元 。

1. Let's use `push()` first — note that you need to include one or more items that you want to add to the end of your array. Try this:

   ```js
   myArray.push("Cardiff");
   myArray;
   myArray.push("Bradford", "Brighton");
   myArray;
   ```

2. The new length of the array is returned when the method call completes. If you wanted to store the new array length in a variable, you could do something like this:

   ```js
   var newLength = myArray.push("Bristol");
   myArray;
   newLength;
   ```

3. Removing the last item from the array is as simple as running `pop()` on it. Try this:

   ```js
   myArray.pop();
   ```

4. The item that was removed is returned when the method call completes. To save that item in a new variable, you could do this:

   ```js
   var removedItem = myArray.pop();
   myArray;
   removedItem;
   ```

{{jsxref("Array.prototype.unshift()","unshift()")}} and {{jsxref("Array.prototype.shift()","shift()")}} work in exactly the same way as `push()` and `pop()`, respectively, except that they work on the beginning of the array, not the end.

1. First `unshift()` — try the following commands:

   ```js
   myArray.unshift("Edinburgh");
   myArray;
   ```

2. Now `shift()`; try these!

   ```js
   var removedItem = myArray.shift();
   myArray;
   removedItem;
   ```

## Active learning: Printing those products

Let's return to the example we described earlier — printing out product names and prices on an invoice, then totaling the prices and printing them at the bottom. In the editable example below there are comments containing numbers — each of these marks a place where you have to add something to the code. They are as follows:

1. Below the `// number 1` comment are a number of strings, each one containing a product name and price separated by a colon. We'd like you to turn this into an array and store it in an array called `products`.
2. On the same line as the `// number 2` comment is the beginning of a for loop. In this line we currently have `i <= 0`, which is a conditional test that causes the [for loop](/zh-TW/Learn/JavaScript/First_steps/A_first_splash#Loops) to stop immediately, because it is saying "stop when `i` is no longer less than or equal to 0", and `i` starts at 0. We'd like you to replace this with a conditional test that stops the loop when `i` is no longer less than the `products` array's length.
3. Just below the `// number 3` comment we want you to write a line of code that splits the current array item (`name:price`) into two separate items, one containing just the name and one containing just the price. If you are not sure how to do this, consult the [Useful string methods](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods) article for some help, or even better, look at the [Converting between strings and arrays](#在字串與陣列之間轉換) section of this article.
4. As part of the above line of code, you'll also want to convert the price from a string to a number. If you can't remember how to do this, check out the [first strings article](/zh-TW/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings).
5. There is a variable called `total` that is created and given a value of 0 at the top of the code. Inside the loop (below `// number 4`) we want you to add a line that adds the current item price to that total in each iteration of the loop, so that at the end of the code the correct total is printed onto the invoice. You might need an [assignment operator](/zh-TW/Learn/JavaScript/First_steps/Math#Assignment_operators) to do this.
6. We want you to change the line just below `// number 5` so that the `itemText` variable is made equal to "current item name — $current item price", for example "Shoes — $23.99" in each case, so the correct information for each item is printed on the invoice. This is just simple string concatenation, which should be familiar to you.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 150px;">
  <ul></ul>

  <p></p>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 410px;width: 95%">
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';

for (var i = 0; i <= 0; i++) { // number 2
  // number 3

  // number 4

  // number 5
  itemText = 0;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
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
  "var list = document.querySelector('.output ul');\nvar totalBox = document.querySelector('.output p');\nvar total = 0;\nlist.innerHTML = '';\ntotalBox.textContent = '';\n\nvar products = ['Underpants:6.99',\n 'Socks:5.99',\n 'T-shirt:14.99',\n 'Trousers:31.99',\n 'Shoes:23.99'];\n\nfor(var i = 0; i < products.length; i++) {\n var subArray = products[i].split(':');\n var name = subArray[0];\n var price = Number(subArray[1]);\n total += price;\n itemText = name + ' — $' + price;\n\n var listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n}\n\ntotalBox.textContent = 'Total: $' + total.toFixed(2);";
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
  background-color: #f5f9fa;
}
```

{{ EmbedLiveSample('Active learning: Printing those products', '100%', 730) }}

## Active learning: Top 5 searches

A good use for array methods like {{jsxref("Array.prototype.push()","push()")}} and {{jsxref("Array.prototype.pop()","pop()")}} is when you are maintaining a record of currently active items in a web app. In an animated scene for example, you might have an array of objects representing the background graphics currently displayed, and you might only want 50 displayed at once, for performance or clutter reasons. As new objects are created and added to the array, older ones can be deleted from the array to maintain the desired number.

In this example we're going to show a much simpler use — here we're giving you a fake search site, with a search box. The idea is that when terms are entered in the search box, the top 5 previous search terms are displayed in the list. When the number of terms goes over 5, the last term starts being deleted each time a new term is added to the top, so the 5 previous terms are always displayed.

> **備註：** In a real search app, you'd probably be able to click the previous search terms to return to previous searches, and it would display actual search results! We are just keeping it simple for now.

To complete the app, we need you to:

1. Add a line below the `// number 1` comment that adds the current value entered into the search input to the start of the array. This can be retrieved using `searchInput.value`.
2. Add a line below the `// number 2` comment that removes the value currently at the end of the array.

```html hidden
<h2>Live output</h2>
<div class="output" style="min-height: 150px;">
  <input type="text" /><button>Search</button>

  <ul></ul>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 370px; width: 95%">
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
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
  "var list = document.querySelector('.output ul');\nvar searchInput = document.querySelector('.output input');\nvar searchBtn = document.querySelector('.output button');\n\nlist.innerHTML = '';\n\nvar myHistory= [];\n\nsearchBtn.onclick = function() {\n if(searchInput.value !== '') {\n myHistory.unshift(searchInput.value);\n\n list.innerHTML = '';\n\n for(var i = 0; i < myHistory.length; i++) {\n itemText = myHistory[i];\n var listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n }\n\n if(myHistory.length >= 5) {\n myHistory.pop();\n }\n\n searchInput.value = '';\n searchInput.focus();\n }\n}";
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

{{ EmbedLiveSample('Active learning: Top 5 searches', '100%', 700) }}

## Conclusion

After reading through this article, we are sure you will agree that arrays seem pretty darn useful; you'll see them crop up everywhere in JavaScript, often in association with loops in order to do the same thing to every item in an array. We'll be teaching you all the useful basics there are to know about loops in the next module, but for now you should give yourself a clap and take a well-deserved break; you've worked through all the articles in this module!

The only thing left to do is work through this module's assessment, which will test your understanding of the articles that came before it.

## See also

- [Indexed collections](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections) — an advanced level guide to arrays and their cousins, typed arrays.
- {{jsxref("Array")}} — the `Array` object reference page — for a detailed reference guide to the features discussed in this page, and many more.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}
