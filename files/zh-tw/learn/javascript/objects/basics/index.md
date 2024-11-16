---
title: JavaScript 物件基礎概念
slug: Learn/JavaScript/Objects/Basics
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

第一篇談到 JavaScript 物件的文章中，我們了解到基本的 JavaScript 物件語法，複習了某些先前提過的 JavaScript 功能，也再次強調你現正使用中的許多功能其實就是物件。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">必要條件：</th>
      <td>
        基本的電腦素養、對 HTML 與 CSS 已有初步認識、熟悉 JavaScript 基本概念
        (參閱〈<a href="/zh-TW/docs/Learn/JavaScript/First_steps">First steps</a
        >〉與〈<a href="/zh-TW/docs/Learn/JavaScript/Building_blocks"
          >Building blocks</a
        >〉)。
      </td>
    </tr>
    <tr>
      <th scope="row">主旨：</th>
      <td>
        了解「物件導向 (OO)」程式設計背後的基礎理論、其與 JavaScript
        (多屬於物件) 之間的關係、該如何使用 JavaScript 物件進行開發。
      </td>
    </tr>
  </tbody>
</table>

## 物件基礎概念

物件是一批相關的數據以及/或者功能（通常包含了幾個變數及函式 — 當它們包含在物件中時被稱做「屬性」（properties）或「函式」（methods）），讓我們用一個範例來看看物件的長相。

在開始之前，請先複製一份 [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html) 檔案到你自己的本端硬碟中。此檔案內容物不多，就 1 組 {{HTMLElement("script")}} 元素可寫入我們的原始碼；在繪製頁面時，1 組元素可輸入簡易指令；幾個變數定義；1 組函式可針對輸入至 input 的程式碼，將之輸出到 {{HTMLElement("p")}} 元素。我們將透過此檔案說明基礎的物件語法。

JavaScript 內的大多數東西，均是透過定義並初始設定變數來建立物件。

現在, 請在自己的 oojs.html 檔案中、JavaScript 程式碼中加入下列程式碼，接著儲存並重新整理：

```js
var person = {};
```

然後在瀏覽器中開啟 oojs.html, 再打開瀏覽器的開發者工具, 在 JavaScript 的控制台下, 輸入`person`, 並按下 Enter 鈕，就會得到下列結果：

```js
[object Object]
```

恭喜, 你已經建立了自己的第一個物件。但這仍是空的物件，所以能做的事不多。接下來, 再如下所示, 幫 person 物件更新內容：

```js
var person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        ".",
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};
```

改完後同樣儲存 oojs.html、重新整理瀏覽器之後，再到控制台輸入 person, 將會看到新的結果：

```js
person.name[0];
person.age;
person.interests[1];
person.bio();
person.greeting();
```

現在你的物件裡面已經有了某些資料與功能，而且能透過某些簡易語法存取之。

> [!NOTE]
> 如果你無法完成上述步驟，可先和我們的版本比較一下。參閱 [oojs-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-finished.html) (或觀看 [實際執行](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-finished.html))。你最容易犯下的錯誤是在物件中的最後一個成員 (member)末端加上逗號，如此就會造成錯誤。

目前為止發生了什麼事呢？現在這個物件是由多個成員所構成，各個成員均有 1 個名稱 (如上述的 `name` 與 `age`) 以及 1 組數值 (如 `['Bob', 'Smith']` 與 `32`)。由名稱與數值構成的組合均以逗號區隔，而名稱與數值之間則以冒號隔開。語法應如下所示：

```js
var objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

物件成員的數值可能是任何東西，像上述的範例物件就有 1 組字串、1 組數字、2 個陣列、2 組函式。前 4 組項目均為資料項目，可說是該物件的**屬性**。最後 2 組項目的功能則是用以指定物件對該筆資料所應進行的作業，可說是物件的**函式 (Method)**。

類似這種物件即稱為「**實字物件 (Object literal)**」，按照字面上的意思寫出物件內容；與其相對的就是根據「類別」做出的物件實體。我們稍後會再說明。

在傳送一系列結構化的相關資料項目時 (例如傳送請求至伺服器並置入資料庫中)，就常常會透過實字物件的方式建立物件。另與「分別傳送多個項目」相較，送出單一物件當然效率更高，且當你想根據名稱找出各個項目時，更易於搭配陣列。

## 點記法 (Dot notation)

你可透過點記法 (Dot notation) 存取物件的屬性與函式。物件名稱 (這裡是 person) 作為**命名空間 (Namespace)** —為了能存取物件所**封裝**的所有東西，這也是必須首先輸入的項目。接著你寫一個「點」以及你所想存取的項目，可能是簡單屬性的名稱、陣列屬性的項目，又或是針對物件函式之一的呼叫。舉例來說：

```js
person.age;
person.interests[1];
person.bio();
```

### 子命名空間

甚至可以將物件成員的數值轉為另一個物件。舉例來說，你可將名稱成員從

```js
name : ['Bob', 'Smith'],
```

改變為

```js
name : {
  first : 'Bob',
  last : 'Smith'
},
```

我們這裡以極高效率建立了子命名空間。看起來複雜但其實不然。若要存取這些項目，你只要透過另一個點，將 onto the end 的額外步驟串連起來即可。如下所示：

```js
person.name.first;
person.name.last;
```

**重要：**現在你必須看過自己的函式碼，將實例

```js
name[0];
name[1];
```

改變為

```js
name.first;
name.last;
```

否則你的函式就不能運作了。

## 括弧記法 (Bracket notation)

括弧記法 (Bracket notation) 是另個存取物件屬性的方法。之前的：

```js
person.age;
person.name.first;
```

可寫成

```js
person["age"];
person["name"]["first"];
```

這很像在陣列中存取項目的方法。其實基本上是一樣的東西 ─ 但前者是透過指數 (index number) 選擇項目；括弧記法則是透過各成員數值相關的名稱來選擇項目。因此物件有時亦稱作**「相聯陣列 (Associative array)」**；也就是說，其「將字串對應到數值」的方式，與陣列「將數字對應到數值」的方式相同。

## 設定物件成員

到目前為止，我們只說明了檢索 (或**取得**) 物件成員。你也可以簡單宣告你所要設定的成員 (用點或括弧記法均可)，設定 (**更新**) 物件成員的數值，如下：

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

試著輸入下列程式碼，再次取得成員之後看看變更的結果：

```js
person.age;
person["name"]["last"];
```

設定成員不只是更新現有屬性與函式的數值，也可以建立全新的成員，如下：

```js
person["eyes"] = "hazel";
person.farewell = function () {
  alert("Bye everybody!");
};
```

現在可以測試自己的新成員了：

```js
person["eyes"];
person.farewell();
```

此外，括弧記法不僅可動態設定成員數值，亦可設定成員名稱。假設使用者可在自己的人事資料中儲存自訂的數值類型，例如鍵入成員名稱與數值為 2 組文字輸入項，就會類似：

```js
var myDataName = nameInput.value;
var myDataValue = nameValue.value;
```

接著可將此新的成員名稱與數值加進 `person` 這個物件：

```js
person[myDataName] = myDataValue;
```

若要測試，可將下列程式碼加進自己的程式碼，加在宣告完 `person` 物件的大括號後：

```js
var myDataName = "height";
var myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

現在儲存並重新整理，將下列輸入你的文字輸入項中：

```js
person.height;
```

因為點記法只接受字母表示的成員名稱，不能是指向名稱的變數值，所以並無法使用。

## 這個「this」是什麼？

你可能注意到我們函式有怪怪的地方。看看以下範例：

```js
greeting: function() {
  alert('Hi! I\'m ' + this.name.first + '.');
}
```

你可能會想這個「this」是幹嘛用的。「this」是指目前寫入程式碼的物件；所以此範例的 `this` 就等於 `person`。那又為何不寫 `person` 就好呢？如同你在〈[初學者的物件導向 JavaScript](/zh-TW/docs/Learn/JavaScript/Objects/Object-oriented_JS)〉一文中所看過的，當我們開始設定建構子等東西時，有用的「`this`」就可在成員內文改變時 (例如 2 個不同 `person` 物件實例可能具備不同的名稱，但打招呼時仍要使用自己的名稱)，確保仍使用了正確的值。

先用簡化的一對 person 物件說明：

```js
var person1 = {
  name: "Chris",
  greeting: function () {
    alert("Hi! I'm " + this.name + ".");
  },
};

var person2 = {
  name: "Brian",
  greeting: function () {
    alert("Hi! I'm " + this.name + ".");
  },
};
```

此範例中的函式碼雖然完全一樣，但 `person1.greeting()` 將輸出「Hi! I'm Chris.」；`person2.greeting()` 則會呈現「Hi! I'm Brian.」。如我們剛剛說過的，「`this」等於「已於內部放置程式碼」的物件`。如果你是依字面意義寫出物件，那可能沒什麼感覺，但如果你是用動態方式產生物件 (例如使用建構子) 的話，就能明顯感覺到方便之處了。再看下去你更清楚原因。

## 其實你一直在使用物件

隨著你看完這些範例，你應該會覺得跟自己使用的點記法很類似。這是因為你整個課程都在使用點記法。每次我們透過內建的瀏覽器 API 或 JavaScript 物件寫出範例時，我們就是在用物件；因為這些功能也就是以本文提及完全相同的物件結構所寫成。即便是更複雜的範例也是一樣。

所以當你使用字串函式如下：

```js
myString.split(",");
```

你就是在使用 [`String`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String) 類別實例可用的方法。每次只要你在程式碼中建立字串，該字串就會自動建立成為 `String` 的實例，並具備有多個常見的方法與屬性。

若你透過下列程式碼存取文件物件模型 (DOM)：

```js
var myDiv = document.createElement("div");
var myVideo = document.querySelector("video");
```

你也就在使用 [`Document`](/zh-TW/docs/Web/API/Document) 類別實例上的函式。當載入網頁時，就會建立 `Document` 的實例，亦所謂的 `document`，將呈現整個網頁的架構、內容，以及其他功能 (如網址)。同樣的，這代表其上已有多個常見的函式＼屬性。

同理可證，目前你在使用的許多物件＼API (如 [`Array`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)`、Math` 等) 也都是類似情形。

另該注意的是，內建的物件＼API 不見得會自動建立物件實例。像以 [Notifications API](/zh-TW/docs/Web/API/Notifications_API) (它可以幫助你使用現代瀏覽器向使用者發送通知 ) 為例，就需要你針對想要觸發的通知，使用建構子逐一建立新的物件實例。試著將下列程式碼丟進你的 JavaScript 主控台：

```js
var myNotification = new Notification("Hello!");
```

我們會在後續文章中說明建構子 (Constructor)。

> [!NOTE]
> 可思考一下物件「訊息傳遞」的溝通方式。當某個物件需要其他物件執行其他作業時，往往會透過其函式之一傳送訊息給其他物件並等待回應。這也是我們所謂的回傳值。

## 摘要

恭喜你已經快讀完我們第一篇 JS 物件的文章了。你應該已經知道該如何使用 JavaScript 中的物件，並建立自己的簡單物件了。你也應該了解物件在儲存相關資料的好用之處。如果你將 `person` 物件中的所有屬性與函式，當做個別的變數與函式並試著追蹤，肯定吃力不討好；且其他具備相同名稱的變數與函式也可能發生問題。「物件」讓我們能在其封包中安全的與資訊相互區隔。

下一篇文章將說明「物件導向程式設計 (OOP)」理論，並了解相關技術是如何用於 JavaScript 之中。

{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}
