---
title: 記憶體管理
slug: Web/JavaScript/Memory_management
---

{{JsSidebar("Advanced")}}

## 介紹

像 C 語言一樣低階的語言，都有著如 malloc() 跟 free() 的低階函式記憶體控管權限。另一方面，當 JavaScript 建立事物(如物件、字串等)時會分配空間給值且自動釋放不再使用的值。後者的流程稱作為回收機制。這個自動化的回收流程是一個混亂的根源，它會使 JavaScript 的開發者 (或者其他高階語言的開發者) 產生可以不須理會「記憶體管理」的錯誤認知。

## 記憶體生命週期

不論是哪種程式語言，記憶體生命週期(運作方式)幾乎總是一樣：

1. 配置你程式需要的記憶體空間
2. 使用配置到的記憶體空間(讀，寫)
3. 當不再使用時釋放已被配置的記憶體空間

在所有語言中，第二點的(運作方式)是確定的。第一點以及最後一點在低階語言中是確定的，但是在高階語言如 JavaScript 則通常是不明確的。

### JavaScript 的記憶體配置

#### 值的初始化

為了不讓開發者對配置感到困擾，JavaScript 會在宣告值的同時完成記憶體配置

```js
var n = 123; // 配置一記憶體空間給數字
var s = "azerty"; // 配置記憶體空間給字串

var o = {
  a: 1,
  b: null,
}; //配置記憶體空間給內含值的物件

// (像物件一樣) 分配記憶體給一個陣列
// 該陣列包含一些值
var a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // 分配記憶體給一個函式 (一個可呼叫的物件)

// function expressions also allocate an object
someElement.addEventListener(
  "click",
  function () {
    someElement.style.backgroundColor = "blue";
  },
  false,
);
```

#### 藉由函式呼叫來配置

有些函式呼叫後產生物件配置。

```js
var d = new Date(); // 配置一個日期物件

var e = document.createElement("div"); // 配置一個 DOM 物件
```

有些方法配置新的值或物件：

```js
var s = "azerty";
var s2 = s.substr(0, 3); // s2 是一個新字串
// 因為字串是一種不可變的值，
// JavaScript 會決定不分配新的記憶體，
// 只儲存 0 到 3 這個範圍的字元。

var a = ["ouais ouais", "nan nan"];
var a2 = ["generation", "nan nan"];
var a3 = a.concat(a2);
// 一個有四個元素的新陣列
// 將 a 與 a2 的元素串聯起來
```

### 值的使用

基本上使用值表示對已被配置的記憶體做讀寫。可藉由讀取或寫入變數的值或一個物件特性或甚至傳一個參數到函數中來完成此事。

### 釋放不再使用的記憶體

當我們談論到記憶體管理，問題通常出現在這個階段。最困難的工作是尋找「已不再被使用的記憶體配置空間」。

低階語言需要開發者自己決定，當程序執行道某個地方時，是否有已被分配的記憶體不再需要。並手動將其釋放。

高階的語言 (e.g. JavaScript) 有一個叫作垃圾回收器(garbage collector) 的系統，他的工作是追蹤記憶體分配的使用情況，以便自動釋放一些不再使用的記憶體空間。但這個垃圾回收器只是「儘量」做到自動釋放記憶體空間，因為判斷記憶體空間是否要繼續使用，這件事是「不可判定([undecidable](https://en.wikipedia.org/wiki/Decidability_%28logic%29))」的（不能用演算法來解決）。

## 回收機制

如上所述，要自動判定記憶體空間「不再使用」是不可能的。因此，回收機制只是實作一個大部份特定情況下的解決辦法。本章節將解釋主要的垃圾回收機制演算法與他們的限制。

### 參考

回收機制的演算法主要概念是參考(reference)概念。在記憶體管理的上下文中(context)，如果一個物件可以訪問到另一個物件(無論是隱式或顯式)，即稱為該物件參考另一個物件。例如：JavaScript 的物件都有參考該物件的原型(prototype) (隱式參考) 以及該物件的屬性值 (顯式參考)。

在原型鏈的情況下，物件的概念擴展到比普通的 JavasScript 物件更廣，這個概念還包含函數作用域 (function scopes)（或全局詞法作用域 (global lexical scope) ）。

### Reference-counting garbage collection

這是一個最務實的垃圾回收演算法。 這個演算法將原本「這個物件再也不會被使用」的廣泛定義縮減到「沒有其他任何物件參考它」。如果一個物件不在被任何物件參考，它將被視為可回收記憶體的垃圾。

#### 範例

```js
var o = {
  a: {
    b: 2,
  },
};
// 兩個物件被創造出來。其中一個物件(b)被視為另一個物件(a)的屬性，並且被該物件(a)參考
// 另一個物件(a)被分配給一個變數(o)，並且被變數(o)參考
// 很明顯的，沒有任何物件應該被回收

var o2 = o; // 另外創造第二個變數(o2)
// 他參考一個物件
o = 1; // 現在，物件 o 有另一個不同的參考
// 而原本在物件 o 的物件，則被物件 o2 參考

var oa = o2.a; // 變數 oa 參考物件 a
// 物件 a 有兩個物件參考到它，一個是 o2，並且它是 o2 的屬性
// 另一個是變數 oa

o2 = "yo"; // 現在 o2 變成 'yo'
// 原本應該沒有任何物件參考到 a ，因此它應該被回收
// 但 a 仍然被變數 oa 參考，因此它逃過被回收的命運

oa = null; // 現在把 oa 變成 null
// 因為沒有任何物件與變數參考 a ，因此他可以被回收
```

#### 限制：循環

當涉及到循環時有一個限制。在下面的例子中，創造兩個物件並相互參考，從而製作一個循環。當呼叫函式時，他們應該超出作用範圍，因此他們實際上是無用且可釋放。但垃圾回收參考計數演算法會認為，兩個物件都至少被參考一次，因此兩個都是不能被回收的。

```js
function f() {
  var o = {};
  var o2 = {};
  o.a = o2; // o 參考 o2
  o2.a = o; // o2 參考 o

  return "azerty";
}

f();
```

#### 真實案例

Internet Explorer 6 和 7 有一個 DOM 物件的垃圾回收參考計數。循環是一個造成記憶體洩漏(memory leaks)的常見問題：

```js
var div;
window.onload = function () {
  div = document.getElementById("myDivElement");
  div.circularReference = div;
  div.lotsOfData = new Array(10000).join("*");
};
```

在上面的例子中，DOM 元素「myDivElement」在「circularReference」屬性中有一個循環參考。如果該屬性未被直接刪除或為零，垃圾回收參考計數將視其始終至少有一個參考保持不變，並將 DOM 元素保存在記憶體裡，即使它已從 DOM 樹中移除。如果該 DOM 元素擁有大量資料（如同上面的例子中的 lotsOfData 屬性），則此資料所佔用的記憶體將永遠不會釋放。

### 標記和清理演算法

這個演算法將「這個物件再也不會被使用」的定義縮減到「這個物件不可到達」。

這個演算法假設一組物件，其名為「根 (roots)」（在 JavaScript 中，根(roots)是全局物件）。垃圾回收器定期從這些根開始，尋訪所有被根參考的物件與那些物件參考的物件。垃圾回收器會回收那些沒有被尋訪的到物件。

這個演算法比前一個演算法更好，因為一個不被任何物件參考的物件，一定無法從根被尋訪到。然而，一個無法從根被尋訪到的物件，不一定不被任何物件參考，可以在循環的例子中發現這件事。

截至 2012 年，所有現代瀏覽器都使用標記和清理的垃圾回收器。 在過去的幾年裡，JavaScript 垃圾回收領域的所有改進都是對這個演算法的實作與改進，但並未改進垃圾回收演算法本身，也沒有縮減垃圾的定義 「這個物件再也不會被使用」。

#### 循環不再是一個問題

在上面的第一個範例中，函式呼叫返回後，那兩個物件不再被全局物件可以尋訪到的物件參考。 因此，它們將被垃圾回收器發現，視為不可達到的。

第二個範例也是一樣的。 一旦 div 和它的處理程序從根本上無法尋訪，它們都會被垃圾回收掉，儘管他們自身相互參考。

#### 限制：物件必須明顯的不可達到

雖然有這個限制存在，但在實務卻很少發生。這也是幾乎沒有人關心這件事的原因。

## Node.js

Node.js offers additional options and tools for configuring and debugging memory issues that may not be available for JavaScript executed within a browser environment.

#### V8 Engine Flags

The max amount of available heap memory can be increased with a flag:

`node --max-old-space-size=6000 index.js`

We can also expose the garbage collector for debugging memory issues using a flag and the [Chrome Debugger](https://nodejs.org/en/learn/getting-started/debugging):

```sh
node --expose-gc --inspect index.js
```

## 參見

- [IBM article on "Memory leak patterns in JavaScript" (2007)](https://developer.ibm.com/technologies/web-development/)
- [Kangax article on how to register event handler and avoid memory leaks (2010)](<https://learn.microsoft.com/en-us/previous-versions/msdn10/ff728624(v=msdn.10)>)
- [Performance](/zh-TW/docs/Mozilla/Performance)
