---
title: JavaScript 中的「繼承」
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

在解釋過大部分的 OOJS 細節之後，本文將說明該如何建立「子」物件類別 (建構子)，並從其「母」類別繼承功能。此外，也將建議開發者應於何時、於何處使用 OOJS。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">必備條件：</th>
      <td>
        基本的電腦素養、已了解 HTML 與 CSS 基本概念、熟悉 JavaScript 基礎
        (可參閱〈<a href="/zh-TW/docs/Learn/JavaScript/First_steps"
          >First steps</a
        >〉與〈<a href="/zh-TW/docs/Learn/JavaScript/Building_blocks"
          >Building blocks</a
        >〉) 與 OOJS 的基礎 (可參閱〈<a
          href="/zh-TW/docs/Learn/JavaScript/Object-oriented/Introduction"
          >Introduction to objects</a
        >〉)。
      </td>
    </tr>
    <tr>
      <th scope="row">主旨：</th>
      <td>了解應如何建構 JavaScript 中的繼承。</td>
    </tr>
  </tbody>
</table>

## 原型繼承

目前為止，我們看過幾個繼承的實作範例：原型鍊的運作方式，以及繼承的成員如何形成原型鍊。但這些大部分都與內建的瀏覽器函式有關。那我們又該如何在 JavaScript 建立物件且由其他物件繼承而來呢？

如稍早的系列文章中所述，某些人認為 JavaScript 並非真正的物件導向 (OO) 語言。在「典型 OO」中，你必須定義特定的類別物件，才能定義哪些類別所要繼承的類別 (可參閱〈[C++ inheritance](http://www.tutorialspoint.com/cplusplus/cpp_inheritance.htm)〉了解簡易範例)。JavaScript 則使用不同的系統 —「繼承」的物件並不會一併複製功能過來，而是透過原型鍊連接其所繼承的功能，亦即所謂的原型繼承 (**Prototypal inheritance**)。

就透過範例了解此一概念吧。

## 入門

首先將 [oojs-class-inheritance-start.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-start.html) 檔案 (亦可參考[實際執行](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-start.html)) 複製到本端磁碟。可在裡面找到本課程一直沿用的 `Person()` 建構子範例，但這裡有些許不同，也就是該建構子只定義了屬性：

```js
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}
```

這些函式均已定義於建構子的原型之上，例如：

```js
Person.prototype.greeting = function () {
  alert("Hi! I'm " + this.name.first + ".");
};
```

假設要建立一個像前面 OO 定義中說過的 `Teacher` 類別，且除了繼承 `Person` 的所有成員，還要包含：

1. 新的 `subject` 屬性，可包含老師所傳授的科目。
2. 更新過的 `greeting()` 函式，要比標準的 `greeting()` 函式更正式一點，更適合老師在校對學生使用。

## 定義 Teacher() 建構子函式

首先必須建立 `Teacher()` 建構子，將下列程式碼加到現有程式碼之下：

```js
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
```

這看起來和 Person 建構子有許多地方類似，但比較奇怪的就是之前沒看過的 [`call()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 函式。此函式基本上可讓你呼叫在其他地方定義的函數，而非目前內文 (context) 中定義的函式。當執行函式時，第一個參數用來指定你要使用 `this` 值，其他參數則指定應該傳送到該函式的參數。

> **備註：** 我們此範例中建立新的物件實例時，會指定所要繼承的屬性。但必須注意的是，即使實例不需將屬性指定為參數，你還是必須在建構子中將屬性指定為參數 (在建立物件時，你可能獲得設定為隨意值的屬性)。

所以這裡可在 `Teacher()` 建構子函式之內有效執行 `Person()` 建構子函式 (如上述)，藉以在 `Teacher()` 之內定義相同的屬性，但使用的是傳送到 `Teacher()` 的屬性值，而非 `Person()` 的屬性值 (我們將 `this` 值設為簡單的「`this」並`傳送到 `call()`，代表這個 `this` 是 `Teacher()` 的函式)。

建構子的最後一行則定義了新的 `subject` 屬性，代表只有老師具備，一般人不會有。

我們也可以單純這樣做：

```js
function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}
```

但這樣只是重新定義了新的屬性，而不是繼承自 `Person()` 而來，所以無法達到我們預設的目標，也需要更多程式碼才能達成。

## 設定 Teacher() 的原型與建構子參考

到目前為止發現一個問題：我們定義了新的建構子，但預設只有 1 個空白的 `prototype` 屬性。接著要讓 `Teacher()` 繼承 `Person()` 原型中所定義的函式，該怎麼做呢？

1. 繼續在現有程式碼下方加入：

   ```js
   Teacher.prototype = Object.create(Person.prototype);
   ```

   這裡再次用好朋友 [`create()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/create) 解救。我們透過 `create()` 並搭配等同於 `Person.prototype` 的原型，建立新的 `prototype` 屬性值 (它本身就是物件，包含屬性與函式) ，並將之設定為 `Teacher.prototype` `的值。也就是說` `Teacher.prototype` 現在會繼承 `Person.prototype` 上的所有可用函式。

2. 此外，基於我們的繼承方式，`Teacher()` `prototype` 的建構子屬性目前設定為 `Person()。可參閱` [Stack Overflow post](https://stackoverflow.com/questions/8453887/why-is-it-necessary-to-set-the-prototype-constructor) 進一步了解原因。可先儲存自己的程式碼、在瀏覽器中載入頁面，再將下列程式碼輸入至 JavaScript 主控台以驗證：

   ```js
   Teacher.prototype.constructor;
   ```

3. 這樣可能會產生問題，所以要設定正確。你可回到自己的原始碼並在最下方加入下列程式碼：

   ```js
   Teacher.prototype.constructor = Teacher;
   ```

4. 如果儲存並重新整理之後，只要輸入 `Teacher.prototype.constructor` 應該就會回傳 `Teacher()`。

## 給 Teacher() 新的 greeting() 函式

接著必須在 `Teacher()` 建構子上定義新的 `greeting()` 函式。

最簡單的方法就是在 `Teacher()` 的原型上定義此函式。將下列加入程式碼最底部：

```js
Teacher.prototype.greeting = function () {
  var prefix;

  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Mrs.";
  } else {
    prefix = "Mx.";
  }

  alert(
    "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      ".",
  );
};
```

這樣就會顯示老師的問候語，也會針對老師的性別使用合適的稱呼，可用於條件陳述式。

## 簡易範例

現在你已經輸入所有程式碼了，可以試著用`Teacher()` 建立物件實例。將下列 (或是你想用的類似程式碼) 加入現有程式碼的底部：

```js
var teacher1 = new Teacher(
  "Dave",
  "Griffiths",
  31,
  "male",
  ["football", "cookery"],
  "mathematics",
);
```

儲存並重新整理之後，試著存取新 `teacher1` 物件的屬性語函式，例如：

```js
teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
```

這樣應該運作無虞。前 3 行的存取成員即繼承自一般 `Person()` 建構子 (類別)。最後 2 行的存取成員只能用於特定的 `Teacher()` 建構子 (類別) 之上。

> **備註：** 如果你無法進行到現有進度，可比較自己與[完整版本](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-finished.html) (亦可看[實際執行](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-finished.html)的情形) 的程式碼。

這裡所提的技巧，當然不是在 JavaScript 建立繼承類別的唯一方法，但足以堪用。並可讓你了解應如何於 JavaScript 實作繼承。

你可能也想看看某些新的 {{glossary("ECMAScript")}} 功能，可更簡潔的在 JavaScript 中繼承 (參閱 [Classes](/zh-TW/docs/Web/JavaScript/Reference/Classes))。但由於這些功能尚未廣泛支援其他瀏覽器，這裡先略過不提。本系列文章中提到的其他程式碼，均可回溯支援到 IE9 或更早版本。當然還是有辦法支援更舊的版本。

一般方法就是使用 JavaScript 函式庫，且最常見的就是簡單集結可用的功能，更快、更輕鬆的完成繼承。例如 [CoffeeScript](http://coffeescript.org/#classes) 即提供了 `class`、`extends` 等等。

## 進階習題

在[〈OOP 理論〉段落](/zh-TW/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)中，我們也納入了 `Student` 類別並繼承了 `Person` 的所有功能，此外也提供不同的 `greeting()` 函式，且較 `Teacher` 的問候語沒那麼正式。在看了該段落中的學生問候語之後，可試著實作自己的 `Student()` 建構子，並繼承 `Person()`, 的所有功能，再實作不同的 `greeting()` 函式。

> **備註：** 如果你無法進行到現有進度，可參考[完成版本](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-student.html) (亦可看[實際執行](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-student.html)的情形)。

## 物件成員摘要

簡單來說，你基本上需要考量 3 種類型的屬性＼函式：

1. 已於建構子函式中定義，會交給物件實體的屬性＼函式。這應該很容易處理。在你自己的程式碼中，就是透過 `this.x = x` 類別行並在建構子中定義的成員；在瀏覽器程式碼中，就是僅限物件實體可用的成員 (一般是透過 `new` 關鍵字並呼叫建構子所建立，例如 `var myInstance = new myConstructor()`)。
2. 直接在建構子上定義，並僅能用於該建構子的屬性＼函式。這類屬性＼函式往往只能用於內建瀏覽器物件之上，並直接「鍊接」至建構子 (而非實例) 以利識別，例如 [`Object.keys()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)。
3. 定義於建構子原型上的屬性＼函式，交由所有的實例繼承，亦繼承了物件類別。這類屬性＼函式包含建構子原型屬性之上定義的所有成員，例如 `myConstructor.prototype.x()`。

如果你不確定到底屬於上述的哪一個，也別擔心。現在你還在學習階段，往後定會熟能生巧。

## 在 JavaScript 中使用繼承的時機？

看到這裡，你心裡應該覺得很複雜。沒錯。「原型」與「繼承」可說是 JavaScript 最複雜的概念之二，但許多 JavaScript 的強大功能與彈性，均來自於其物件結構與繼承，也值得你了解運作方式。

不論是使用 WebAPI 的多樣功能，或是你在字串、陣列等所呼叫的函式＼屬性 (定義於內建瀏覽器物件之上)，你都可以不斷繼承下去。

在自己的程式碼裡，特別是剛接觸或小型專案時，你用繼承的頻率可能沒那麼高。若沒真正需要，只是「為使用而使用」繼承，老實說只是浪費時間。但隨著程式碼規模越來越大，你就會找到使用的時間。如果你發現自己開始建立類似功能的多個物件時，就可先建立通用的物件類型，來概括所有共用的功能，並在特定物件類型中繼承這些功能，既方便又有效率。

> **備註：** 基於 JavaScript 運作的方式 (如原型鍊等)，物件之間的功能共享一般稱為「委託 (Delegation)」，即特定物件將功能委託至通用物件類型。「委託」其實比繼承更精確一點。因為「所繼承的功能」並不會複製到「進行繼承的物件」之上，卻是保留在通用物件之中。

當使用繼承時，建議你不要設定太多層的繼承關係，並時時留意你所定義的函式與屬性。在開始寫程式碼時，你可能會暫時修改內建瀏覽器物件的原型，除非你真的需要，否則儘量別這麼做。太多繼承可能連你自己都搞混，而且一旦需要除錯就會痛苦萬分。

最後，物件可說是另一種形式的程式碼再利用，如同函式或迴圈一般，且有其專屬的角色與優點。如果你正建立一堆相關變數與函式，並要全部一起追蹤、封裝，就可以透過物件。你也能以物件方式傳送整個資料集合。而且上述兩種情況均不需使用建構子或繼承就能夠達成。如果你只需要某一物件的單一實作，那麼單純使用物件就好，完全不需要繼承。

## 摘要

本文為大家溫習了 OOJS 核心理論和語法。現在你應該了解 JavaScript 物件與 OOP 的基本概念、原型及原型繼承、建立類別 (建構子) 與物件實例的方法、為類別新增功能、建立從其他類別繼承而來的子類別。

下篇文章就要來看看該如何搭配 JavaScript Object Notation (JSON)，使用 JavaScript 物件的常見資料交換格式。

## 另可參閱

- [ObjectPlayground.com](http://www.objectplayground.com/) — 互動式學習網站，讓你了解物件。
- [Secrets of the JavaScript Ninja](https://www.amazon.com/gp/product/193398869X/) 的第六章 — 進階 JavaScript 概念與技術的好書。第六章講述了原型與繼承的概念。此書有紙本與線上版。
- [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) — Kyle Simpson 絕佳 JavaScript 手冊系列的一部分。第五章特別深入講述了原型。我們透過本文為初學者提供簡易概念，但 Kyle 則說明得更深入、更精確。

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}
