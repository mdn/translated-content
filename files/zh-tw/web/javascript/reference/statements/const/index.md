---
title: const
slug: Web/JavaScript/Reference/Statements/const
---

{{jsSidebar("Statements")}}Constants (常數) 有點像使用 [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let) 所宣告的變數，具有區塊可視範圍。常數不能重複指定值，也不能重複宣告。{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## 語法

```plain
const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];
```

- `nameN`
  - : 常數的名稱，可以是任何合法的 {{Glossary("identifier")}}。
- `valueN`
  - : 常數的值，可以是任何合法的 expression，包括 function expression。

## 描述

上述宣告建立一個常數，它的可視範圍可能是全域的，或是在它所宣告的區域區塊中。 和 [`var`](/zh-TW/docs/Web/JavaScript/Reference/Statements/var) 變數不同的是，全域的常數不會變成 window 物件的屬性。常數必須要初始化；也就是說，你必須在宣告常數的同一個敘述式中指定這個常數的值。(這很合理，因為稍後就不能再變更常數的值了)

宣告 **`const`** 會對於它的值建立一個唯讀的參考。並不是說這個值不可變更，而是這個變數不能再一次指定值。例如，假設常數的內容(值)是個物件，那麼此物件的內容(物件的參數)是可以更改的。

所有關於 "[temporal dead zone](/zh-TW/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_and_errors_with_let)" 的狀況，都適用於 [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let) and `const` 。

在相同的可視範圍內，常數不能和函數，變數具有相同名稱。

## 範例

以下範例展示常數的行為。請在你的瀏覽器中試試以下程式碼。

```js
// 注意: 常數可以宣告成大寫或小寫,
// 但習慣上使用全部大寫的字母。

// 定義一個常數 MY_FAV 並賦予它的值為7
const MY_FAV = 7;

// 這裡會發生錯誤 - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV 是 7
console.log('我喜歡的數字是: ' + MY_FAV);

// 嘗試重複宣告同名的常數，將會發生錯誤 -  Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// MY_FAV 這個名稱已經保留給上面的常數, 所以這裡也會錯誤。
var MY_FAV = 20;

// 這式子也會錯誤
let MY_FAV = 20;

// 很重要，請注意區塊可視範圍的特性。
if (MY_FAV === 7) {
    // 以下式子沒有問題，並且會建立一個名叫 MY_FAV 的具有區塊可視範圍的變數。
    // (等同於使用 let 來宣告一個具有區塊可視範圍的非常數變數。)
    let MY_FAV = 20;

    // MY_FAV 現在變成 20
    console.log('我喜歡的數字是：' + MY_FAV);

    // 這會將變數懸掛於全域，而導致錯誤。(與常數同名)
    var MY_FAV = 20;
}

// MY_FAV 仍然是 7
console.log('我喜歡的數字是：' + MY_FAV);

// 發生錯誤 - Uncaught SyntaxError: Missing initializer in const declaration
const FOO;

// 常數的值可以是一個物件
const MY_OBJECT = {'key': 'value'};

// 嘗試覆寫該物件將會發生錯誤 - Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {'OTHER_KEY': 'value'};

// 然而, 物件的屬性並沒有被保護,
// 所以，以下敘述式沒有問題。
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

// 對陣列來說也是一樣
const MY_ARRAY = [];
// 可以把項目加到陣列中。
MY_ARRAY.push('A'); // ["A"]
// 然而，對這個變數指定新陣列，將會發生錯誤 - Uncaught TypeError: Assignment to constant variable.
MY_ARRAY = ['B'];
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- [`var`](/zh-TW/docs/Web/JavaScript/Reference/Statements/var)
- [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let)
- [Constants in the JavaScript Guide](/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
