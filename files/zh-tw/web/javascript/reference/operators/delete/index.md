---
title: 屬性的刪除
slug: Web/JavaScript/Reference/Operators/delete
---

你可以使用 `delete` 運算子移除屬性。下面的代碼示範如何移除屬性︰

```js
// 建立新的物件 myobj，以及兩個屬性 a 和 b。
myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// 移除一個屬性，只剩 b 屬性留在 myobj 裡。
delete myobj.a;
```

你也可以使用 `delete` 來刪除全域變數，只要這個變數不是使用 `var` 關鍵字宣告的話︰

```js
g = 17;
delete g;
```

參閱 [delete](/zh_tw/Core_JavaScript_1.5_%E6%95%99%E5%AD%B8/%E9%81%8B%E7%AE%97%E5%AD%90/%E7%89%B9%E6%AE%8A%E9%81%8B%E7%AE%97%E5%AD%90#delete) 取得更多資訊。

{{ PreviousNext("Core_JavaScript_1.5_教學:新物件的建立:Getter_和_Setter_的定義", "Core_JavaScript_1.5_教學:預先定義的核心物件") }}
