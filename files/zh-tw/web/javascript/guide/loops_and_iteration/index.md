---
title: Loops and iteration
slug: Web/JavaScript/Guide/Loops_and_iteration
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

迴圈提供一個快速又簡潔的方法來重複地做某件事。這個章節的[JavaScript 教學](/zh-TW/docs/Web/JavaScript/Guide)會介紹在 JavaScript 可以使用的幾種不同的迭代陳述式。

你可以將迴圈想成一個電腦版本的"往一個方向走 X 步，然後往另一個方向走 Y 步"的遊戲；作為範例，"往東走五步"可以用這個方法用迴圈表示：

```js
var step;
for (step = 0; step < 5; step++) {
  // 執行五次：從step為0到4
  console.log("Walking east one step");
}
```

有很多種不同種類的迴圈， 不過他們本質上都是做一樣的事：把一件動作重複地做一定的次數（而且也有可能做 0 次）。 各式各樣的迴圈機制提供了不同的方法來定義該迴圈的起始與結束。有些不同的情況下使用其中一種迴圈會比使用別種容易許多。

在 javaScript 中提供的迴圈陳述式分別為：

- [for 陳述式](#for_陳述式)
- [do...while 陳述式](#do...while_陳述式)
- [while 陳述式](#while_陳述式)
- [label 陳述式](#label_陳述式)
- [break 陳述式](#break_陳述式)
- [continue 陳述式](#continue_陳述式)
- [for...in 陳述式](#for...in_陳述式)
- [for...of 陳述式](#for...of_陳述式)

## `for` 陳述式

一個[for 迴圈](/zh-TW/docs/Web/JavaScript/Reference/Statements/for)不斷重複直到一個指定的條件式判斷為 false。JavaScript 的 for 迴圈跟 Java 還有 C 的 for 迴圈很相似。一個 for 陳述式看起來像下面這樣：

```plain
for ([初始表達式]; [條件式]; [遞增表達式])
  陳述式
```

當執行一個 for 迴圈時，會發生以下：

1. 如果有的話，初始表達式會被執行。這個表達式通常會初始化一或多個迴圈計數器，但是語法允許任何程度的複雜性。這個表達式也能用來宣告變數。
2. 條件式會被評估。如果評估出的值為 true，迴圈的敘事式便會執行。如果評估出的值為 false，這個 for 迴圈便會中止。如果條件式被省略了，狀態就會被假設是 true。
3. 執行敘事式。要執行多個敘事式時，使用區塊敘事式(`{ ... }`) 來把那些敘事式歸為一組。
4. 如果有更新表達式的遞增表達式便執行。然後 return 到第二步。

### 範例

以下的函式包含一個用來數在一個滾動列表中被選過的選項(a {{HTMLElement("select")}} 允許複數選項的元素)的 for 陳述式 。這個 for 敘事式宣告了變數 i 並將其初始化為 0。 他檢查 i ，如果 i 少於在\<select>元素中的選項數量，進行接著的 if 陳述式，並將 i 在每次通過迴圈後遞增。

```html
<form name="selectForm">
  <p>
    <label for="musicTypes"
      >Choose some music types, then click the button below:</label
    >
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="How many are selected?" /></p>
</form>

<script>
  function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }

  var btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    alert(
      "Number of options selected: " + howMany(document.selectForm.musicTypes),
    );
  });
</script>
```

## `do...while` 陳述式

`do...while` 陳述式會不斷重複直到一個特定的條件判斷為 false。一個 do...while 陳述式看起來像以下：

```plain
do
  陳述式
while (條件式);
```

`陳述式會在檢查條件式以前先執行一次。要執行多個陳述式的話，使用區塊陳述式來將那些陳述式歸為一組。如果條件式為true，那陳述式便再次執行。在每次執行的最後，條件會被檢查。當條件式為false時，` 停止執行並把控制傳給 `do...while接著的陳述式。`

### 範例

在下列範例中，do 迴圈重複了至少一次並不斷重複直到 i 不再比 5 少。

```js
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## `while` 陳述式

[`while`](/zh-TW/docs/Web/JavaScript/Reference/Statements/while) 陳述式會不斷執行它的陳述式只要指定的條件式判斷為 true。一個 while 陳述式看起來如下：

```plain
while (condition)
  statement
```

如果條件式變成 false ，在迴圈中的陳述式會停止執行並控制交給跟在這個迴圈後面的陳述式。

條件式的測試發生於迴圈內的陳述式執行之前。如果條件式傳回 true ，陳述式便會被執行而判斷式會再被測試一次。如果條件式傳回 false ，停止執行並把控制交給跟在 while 迴圈後面的陳述式。

`要執行多個陳述式的話，使用區塊陳述式來將那些陳述式歸為一組。`

### 範例 1

以下的 while 迴圈在只要 n 比 3 少的情況下便會不斷重複：

```js
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

在每次的疊代，迴圈把 n 遞增並將其值加到 x 上。因此，x 跟 n 的值會是下列情況：

- 經過第一次迴圈後 `n` = 1 而 `x` = 1
- 經過第二次迴圈後 `n` = 2 而 `x` = 3
- 經過第三次迴圈後 `n` = 3 而 `x` = 6

在完成第三次迴圈後，判斷是 n<3 不再是 true ，所以迴圈終止。

### 範例 2

避免無限迴圈。確定在迴圈內的判斷式終究會變成 false； 不然迴圈會永遠不終止。在迴圈內的陳述式會永遠的執行因為判斷式永遠不會變成 false：

```js
while (true) {
  console.log("Hello, world");
}
```

## `label` 陳述式

[label](/zh-TW/docs/Web/JavaScript/Reference/Statements/label) 提供一個有識別字的陳述式讓你能在程式的別的地方參考。舉個例子，你能使用 label 來識別一個迴圈，然後使用 break 或 continue 陳述式來指示何時程式該中斷迴圈或是繼續他的執行。

label 陳述式的語法看起來如下：

```plain
label :
   statement
```

Label 的值可以是任何不是保留字的 JavaScript 識別字。你用 label 所識別的陳述式可以是任何陳述式。

### 範例

在這個範例，`markLoop這個label 識別一個while 迴圈。`

```js
markLoop: while (theMark == true) {
  doSomething();
}
```

## `break` 陳述式

[`break`](/zh-TW/docs/Web/JavaScript/Reference/Statements/break) 陳述式是用來終止一個迴圈，一個 switch 多重控制選項，或是和一個 label 陳述式聯合使用。

- 當你在沒有 label 的情況下使用 break，它會馬上終止最內部的 while , do-while , for ,或是 switch 區間並將控制交給接下來的陳述式。
- 當你跟 label 一起使用的時候，它會終止那個特定的被 label 的陳述式。

break 陳述式的語法看起來如下：

1. `break;`
2. `break label;`

第一種語法會終止最內部的迴圈或 switch 區間；第二種語法會終止那個特定的 label 陳述式。

### 範例 1

以下的範例會不斷重複跑迴圈直到有在陣列裡的元素符合 theValue 的值：

```js
for (var i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
```

### 範例 2：Break 至一個 label 陳述式

```js
var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

## `continue` 陳述式

[`continue`](/zh-TW/docs/Web/JavaScript/Reference/Statements/continue) 陳述式可以用於重新開始一個 while , do-while, for, 或 label 陳述式。

- 當你在沒有 label 的情況下使用 continue，它會終止現在最內部 while, do-while , for 陳述式區間的迭代並繼續執行該迴圈的下一個迭代。跟 break 陳述式不同的是，continue 不會把整個迴圈的執行給終止。在 while 迴圈中，它會跳回條件式的判斷。在 for 迴圈中，它會跳至遞增陳述式。
- 當 contunue 跟 label 一起使用的時候，它會應用至被 label 識別的那個迴圈陳述式。

continue 陳述式的語法看起來如下：

1. `continue;`
2. `continue`_`label;`_

### 範例 1

以下的範例有 while 迴圈以及一個在 i 的值為 3 的時候執行的 continue 陳述式。因此，n 的值會連著是 1, 3, 7, 12。

```js
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}
```

### 範例 2

一個被 label 成 checkiandj 的陳述式包還著一個被 label 成 checkj 的陳述式。如果遇到了 continue，程式會終止現在的這輪迴圈並開始下一輪。每次遇到 continue，checkj 就會一直重複直到它的條件式返回 false。當 false 被傳回時，checkiandj 陳述式剩下的陳述式已被完成，而 checkiandj 也會繼續重複直到它的條件式傳回 false。當 false 被傳回，程式會繼續進行接著 checkiandj 後面的陳述式。

如果 continue 有了 checkiandj 的 label 程式會從 checkiandj 陳述式的頭開始繼續。

```js
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 == 0) {
      continue checkj;
    }
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}
```

## `for...in` 陳述式

[`for...in`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in) 陳述式重複一個指定的變數來循環一個物件所有可枚舉的屬性。至於每個獨特的屬性，JavaScript 執行特定的陳述式。一個`for...in` 陳述式看起來像以下：

```plain
for (variable in object) {
  statements
}
```

### 範例

以下的函式透過它的參數得到一個物件和物件的名字。接著它循環這個物件的所有屬性並傳回一個列出屬性名和值的字串。

```js
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}
```

對於一個擁有 make 跟 model 屬性的物件 car 來說，執行結果是：

```js
car.make = Ford;
car.model = Mustang;
```

### 陣列

雖然用 for...in 來迭代 {{jsxref("Array")}} 元素很吸引人，但是它傳回的除了數字的索引之外還有可能是你自己定的屬性名。因此還是用帶有數字索引的傳統`for迴圈來迭帶一個陣列會比較好。因為如果你想改變陣列物件，比如增加屬性或是方法，`**for...in** 陳述式迭代的是自定的屬性而不是陣列的元素。

## `for...of` 陳述式

[`for...of`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...of) 陳述式在[iterable objects](/zh-TW/docs/Web/JavaScript/Guide/iterable)(可迭代的物件)上建立了一個循環 (包含 {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, [arguments](/zh-TW/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments)(參數) 物件 等等), 對每個獨特屬性的值使用一個準備被執行的有陳述式的自訂迭代掛勾。

```plain
for (variable of object) {
  statement
}
```

下列的範例可看出`for...of` 迴圈跟 [`for...in`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in) 迴圈的差別。 `for...in` 在屬性名字循環，而`for...of` 在屬性的值循環。

```js
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
