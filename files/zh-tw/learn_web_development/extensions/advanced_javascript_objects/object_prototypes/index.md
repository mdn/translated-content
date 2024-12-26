---
title: 物件原型
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
original_slug: Learn/JavaScript/Objects/Object_prototypes
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

JavaScript 的物件即透過原型 (Prototype) 機制相互繼承功能，且與典型的物件導向 (OO) 程式語言相較，其運作方式有所差異。我們將透過本文說明相異之處、解釋原型鍊 (Prototype chain) 運作的方式，並了解原型屬性是如何將函式新增至現有的建構子 (Constructor) 之中。

<table>
  <tbody>
    <tr>
      <th scope="row">必備條件：</th>
      <td>
        基本的電腦素養、已初步了解 HTML 與 CSS、熟悉 JavaScript (參閱〈<a
          href="/zh-TW/docs/Learn_web_development/Core/Scripting"
          >First steps</a
        >〉與〈<a href="/zh-TW/docs/Learn_web_development/Core/Scripting"
          >Building blocks</a
        >〉以及 OOJS 基礎概念 (參閱〈<a
          href="/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics"
          >Introduction to objects</a
        >〉。
      </td>
    </tr>
    <tr>
      <th scope="row">主旨：</th>
      <td>
        了解 JavaScript
        的物件原型、原型鍊的運作方式、應如何將新的函式加入原型屬性之中。
      </td>
    </tr>
  </tbody>
</table>

## 「原型」架構的程式語言？

常有人說 JavaScript 是**原型架構的程式語言** — 各個物件均具備 1 組**原型物件**作為範本物件，用以繼承函式與屬性。物件的原型物件可能也具備原型物件，並繼承了其上的函式與屬性。這就是我們所謂的「**原型鍊 (Prototype chain)**」，同時正好說明為何 A 物件的屬性與函式是透過 B 物件的屬性與函式所定義。

精確點說，這些屬性與函式都是透過物件的建構子函式所定義，並非物件實例本身。

傳統的 OOP 都是先定義了類別，接著在建立物件實例之後，在類型上定義的所有屬性與函式均複製到此實例。但 JavaScript 不會複製這些屬性與函式，卻是在物件實例與其建構子之間設定連結 (原型鍊中的連結)，只要順著原型鍊就能在建構子之中找到屬性與函式。

先看個範例會比較清楚點。

## 了解原型物件

先回到我們寫過的 `Person()` 建構子範例。在你的瀏覽器裡載入範例。如果你還沒看完前篇文章並製作出此範例，可先使用 [oojs-class-further-exercises.html](https://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) 這個範例 (可看到[原始碼](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html))。

我們在此範例中定義了建構子函式：

```js
function Person(first, last, age, gender, interests) {
  // property and method definitions
}
```

接著建立如下的物件實例：

```js
var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
```

如果你在自己的 JavaScript 主控台中鍵入「`person1.」，應該會看到瀏覽器根據此物件可用的成員名稱開始自動補完：`

![](object-available-members.png)

在此列表中，可以看到 `person1` 原型物件上所定義的成員，也就是 `Person()` 建構子 — `name`、`age`、`gender`、`interests`、`bio`、`greeting`。你也會看到其他如 `watch`、`valueOf` 等，同樣也是定義在 `Person()` 建構子原型物件之上的成員，如此構成 [`Object`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object)。下圖顯示原型鍊的運作方式。

![](mdn-graphics-person-person-object-2.png)

所以當你在 `person1 上呼叫了「實際上是定義於 Object 上的函式」，會發生什麼事呢？舉例來說：`

```js
person1.valueOf();
```

此函式僅回傳所呼叫的物件數值。此範例所將發生的是：

- 瀏覽器先檢查 `person1` 物件上是否有可用的 `valueOf()` 函式。
- 其實沒有，所以瀏覽器接著檢查 `person1` 物件的原型物件 (`Person`) 上是否有可用的 `valueOf()` 函式。
- 同樣沒有，所以瀏覽器再檢查 `Person()` 建構子的原型物件 (`Object`) 上是否有可用的 `valueOf()` 函式。這次有，所以就會呼叫。

> [!NOTE]
> 再次重申，在原型鍊中的函式與屬性並**不是**從任一物件複製到另一個物件，而是如上述的，沿著該原型鍊向上存取而得。

> [!NOTE]
> 直接存取物件的原型物件，並沒有一定的方式。原型鍊中，項目之間的「連結」均定義於內部屬性之內，即 JavaScript 規格中的 `[[prototype]]` (可參閱 {{glossary("ECMAScript")}})。新版瀏覽器均具備所謂的「[`__proto__`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) (兩邊都是 2 個底線)」屬性，其中就包含了物件的原型物件。舉例來說，你可嘗試「`person1.__proto__」`與「`person1.__proto__.__proto__`」看看程式碼中的鍊會是什麼樣子！

## 原型屬性也定義所要繼承的成員

所以該在哪裡定義所要繼承的屬性與函式呢？若看一下 [`Object`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object) 參考頁面，你就會看到左邊列出許多屬性與函式，遠超過上方擷圖所列 `person1` 物件所繼承的成員數量。有些繼承了，有些則無？為什麼呢？

原因在於，繼承的成員就是在 `prototype` 屬性 (你也能稱之為子命名空間 sub namespace) 中定義的成員，也就是以「`Object.prototype`.」開頭的成員；並非只以「`Object`.」開頭的成員。`prototype` 屬性值就是 1 個物件，基本上儲存了許多我們想「讓原型鍊上的物件一路繼承下去」的屬性與函式。

所以如 [`Object.prototype.watch()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/watch)、[`Object.prototype.valueOf()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) 等等，均可用於繼承自 `Object()` 的任何物件類型，包含以建構子建立的新物件實例。

[`Object.is()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/is)、[`Object.keys()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)，及其他未於 `prototype` 內定義的成員，也就不會繼承至 1). 物件實例或 2). 從 `Object()` 繼承而來的物件類型。這些函式、屬性都只能用於 `Object()` 建構子本身。

> [!NOTE]
> 這看起來很奇怪：你怎麼能在建構子上定義函式 (Method)，而且這建構子本身也是函式 (Function)？其實「Function」也屬於一個物件類型，可參閱 [`Function()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function) 建構子參考以進一步了解。

1. 你可自行檢查現有的原型屬性。回到我們之前的範例，試著於 JavaScript 主控台中輸入：

   ```js
   Person.prototype;
   ```

2. 輸出結果很平淡，畢竟我們並未在自定的建構子原型上定義任何東西。依預設值，建構子的 `prototype` 都是從空白開始。現在可嘗試下列：

   ```js
   Object.prototype;
   ```

這樣就會看到 `Object` 的 `prototype` 屬性中所定義的許多函式，而繼承自 `Object` 的物件也能找到這些函式。

只要試著尋找如 [`String`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)、[`Date`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date)、[`Number`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number)、[`Array`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array) 等全域物件的原型上定義的函式與屬性，就會看到 JavaScript 中的其他原型鍊繼承範例。這些物件都在其原型上定義了多個成員，因此可作為你建立字串時的範例：

```js
var myString = "This is my string.";
```

`myString` 上立刻就有多個有用的函式，如 [`split()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/split)、[`indexOf()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)、[`replace()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 等。

> **警告：** `prototype` 這個屬性，是 JavaScript 中最讓人混淆的名稱之一。你可能會認為`this`屬性即指目前物件(current object)的原型物件(prototype object)，但它其實不是原型 (應該是可透過 `__proto__` 存取的內部物件(internal object)才對，記得上面說過的嗎？)。`prototype`是一個物件(object)，內含了你定義所應該繼承的成員。

## 再次溫習 create()

我們先前講過用 [`Object.create()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/create) 函式建立新物件實例的方法。

1. 舉例來說，你可先在前面的 JavaScript 主控台範例中試著輸入：

   ```js
   var person2 = Object.create(person1);
   ```

2. `create()` 實際上是透過特定的原型物件，來建立新的物件。我們在這裡將 `person1` 作為原型物件，建立了 `person2`。你可於主控台輸入下列以測試之：

   ```js
   person2.__proto__;
   ```

如此將回傳 `person1` 物件。

## 建構子的屬性

每個物件實例都具備 1 個[`建構子`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)屬性，指向「用以建立實例」的原始建構子函式。

1. 舉例來說，若在主控台中輸入下列指令：

   ```js
   person1.constructor;
   person2.constructor;
   ```

   應該兩者都會回傳 `Person()` 建構子，因為此建構子包含這些實例的原始定義。

   偷吃步的方法，是將圓括弧加到 `constructor` 屬性 (須包含任何必要參數) 末端，以從該建構子建立其他物件實例。畢竟建構子也是函式 (Function)，所以可透過圓括弧將之觸發。你只要納入 `new` 這個關鍵字，即可將此函式作為建構子。

2. 在主控台中輸入：

   ```js
   var person3 = new person1.constructor("Karen", "Stephenson", 26, "female", [
     "playing drums",
     "mountain climbing",
   ]);
   ```

3. 現在可試著存取新物件的功能，例如：

   ```js
   person3.name.first;
   person3.age;
   person3.bio();
   ```

這樣運作得還不差。你不需常常用這方法，但當你要建立新的實例，又因為某些原因找不到原始建構子的參照，這就特別有用了。

此外，[`constructor`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 屬性還有其他用處。舉例來說，如果你有個物件實例，並要回傳建構子 (本身就是實例) 的名稱，就透過：

```js
instanceName.constructor.name;
```

也可嘗試：

```js
person1.constructor.name;
```

## 修改原型

先看看建構子的 `prototype` 屬性的修改範例：

1. 回到 [oojs-class-further-exercises.html](https://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) 範例，先在本機儲存 1 份[原始碼](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)的副本。在現成的 JavaScript 中加入下列程式碼，即是將新函式新增到建構子的 `prototype` 屬性：

   ```js
   Person.prototype.farewell = function () {
     alert(this.name.first + " has left the building. Bye for now!");
   };
   ```

2. 儲存程式碼並在瀏覽器中載入頁面，再輸入下列程式碼：

   ```js
   person1.farewell();
   ```

這時應該會看到警示訊息且內含了建構子所定義的人名。這樣很有用，但如果能動態更新整個繼承鍊，且從建構子分割出來的所有物件實例都能使用此新的函式，就會更有用！

花個 1 分鐘想想，我們的程式碼中定義了建構子，然後根據建構子建立實例物件，接著將新函式添增到建構子的原型：

```js
function Person(first, last, age, gender, interests) {
  // property and method definitions
}

var person1 = new Person("Tammi", "Smith", 32, "neutral", [
  "music",
  "skiing",
  "kickboxing",
]);

Person.prototype.farewell = function () {
  alert(this.name.first + " has left the building. Bye for now!");
};
```

但是 `farewell()` 函式仍可用於 `person1` 物件實例，其可用的功能已自動更新過。如此證明了我們之前對原型鍊的說明，也代表瀏覽器會沿著鍊往上找「尚未於物件實例上定義的函式」，而非「複製到實例中的函式」。如此可建構強大且靈活的系統。

> [!NOTE]
> 如果你在讓此範例運作時感覺有點困難，可參閱 [oojs-class-prototype.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-prototype.html) 範例 (也可看[即時運作](https://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-prototype.html)的情形)。

你很少會看到在 `prototype` 屬性上定義的屬性，因為照此範例定義的屬性彈性較低，舉例來說，你可新增如下的屬性：

```js
Person.prototype.fullName = "Bob Smith";
```

但因為幾乎不會有人取這名字，所以就沒什麼彈性。最好可以在 `name.first` 與 `name.last 之外建立 fullName：`

```js
Person.prototype.fullName = this.name.first + " " + this.name.last;
```

但因為這樣會參照全域範圍，而非函式範圍，所以也不適用。若呼叫此屬性，則將回傳 `undefined undefined`。這種模式適合我們先前於原型中定義的函式，因為該函式就是在功能範圍之內，且可成功轉移至物件實例的的範圍。因此你可能會在原型中定義常數屬性 (也就是永遠不需更改的屬性)，但一般來說會比較適合在建構子中定義屬性。

事實上，許多物件定義較常見的模式，就是在建構子中定義屬性，而在原型中定義函式。這樣一來，建構子只有屬性定義；函式則切分到不同的區塊，讓整個程式碼較清楚易讀。舉例來說：

```js
// Constructor with property definitions

function Test(a,b,c,d) {
  // property definitions
};

// First method definition

Test.prototype.x = function () { ... }

// Second method definition

Test.prototype.y = function () { ... }

// etc.
```

你可在 Piotr Zalewa 的「[school plan app](https://github.com/zalun/school-plan-app/blob/master/stage9/js/index.js)」範例中看到實際運作的範例。

## 摘要

本文說明了 JavaScript 物件原型，包含原型物件鍊是如何讓物件能互相繼承其特性、原型屬性的本質、原型屬性又是如何能將函式新增至建構子，以及其他相關概念。

接著我們將讓你在自己的任 2 個自訂物件之間，實作功能的繼承。

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
