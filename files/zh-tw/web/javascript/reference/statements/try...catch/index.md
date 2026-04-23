---
title: try...catch 語法
slug: Web/JavaScript/Reference/Statements/try...catch
---

`try...catch` 語法標記出一整塊需要測試的語句，並指定一個以上的回應方法，萬一有例外拋出時，`try...catch` 語句就會捕捉。

`try...catch` 語法由 `try` 區塊所組成，其中內含一個以上的語句，和零個以上的 `catch` 區塊，其中內含語句用來指明當例外在 try 區塊裡拋出時要做些什麼。也就是當你希望 `try` 區塊成功，但如果他不成功時，你會想要把控制權移交給 `catch` 區塊。如果任何在 `try` 區塊內部裡的語句（或者在 `try` 區塊內部呼叫的函數裡）拋出例外，控制權將立即轉移給 `catch` 區塊。如果沒有例外從 `try` 區塊裡拋出，就會跳過 `catch` 區塊。`finally` 區塊會在 `try` 或 `catch` 區塊執行之後才執行，但會在 `try...catch` 語法後面的語句之前執行。

以下範例使用 `try...catch` 語法。本範例呼叫函數，這個函數是用來在陣列裡根據傳給函數的值來查詢月份的名稱。如果傳入的值不符合月份的數字 (1-12)，就會拋出值為 `InvalidMonthNo` 的例外，而且在 `catch` 區塊裡的語句會把 `monthName` 變數設定為 `unknown`。

```js
function getMonthName(mo) {
  mo = mo - 1; // 針對陣列索引調整月份的數字 (1=Jan, 12=Dec)
  var months = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  );
  if (months[mo] != null) {
    return months[mo];
  } else {
    throw "InvalidMonthNo";
  }
}

try {
  // 需要測試的語句
  monthName = getMonthName(myMonth); // 可拋出例外的函數
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // 把例外物件傳給錯誤處理器
}
```

#### catch 區塊

你可以使用單一的 `catch` 區塊來處理所有在 `try` 區塊裡可能會產生的例外，或者你也可以使用分離的 `catch` 區塊，每一個皆各自處理特定的例外類型。

**單一 catch 區塊**
使用單一 `try...catch` 語法的 `catch` 區塊針對在 `try` 區塊裡拋出的所有例外來執行錯誤處理的代碼。

單一的 `catch` 區塊語句如下︰

```js
catch (catchID) {
  statements
}
```

`catch` 區塊所指定的識別子（前面語句裡的 `catchID`）持有由 `throw` 語法所指定的值。你可以使用這個識別子來取得有關於被拋出的例外的資訊。當進入 `catch` 區塊時，JavaScript 就會建立這個識別子。識別子只能在 `catch` 區塊的期間內持續作用。`catch` 區塊執行結束以後，識別子就不再能使用。

舉例來說，以下代碼會拋出例外。當例外出現的時候，控制權就轉移給 `catch` 區塊。

```js
try {
  throw "myException"; // 產生例外
} catch (e) {
  // 用來處理任何例外的語句
  logMyErrors(e); // 把例外物件傳給錯誤處理器
}
```

**多重 catch 區塊**
單一的 `try` 語句可以對應複數個有前提條件的 `catch` 區塊，每一個皆可處理特定的例外的類型。於是，當指定的的例外被拋出時，就只會進入適當條件的 `catch` 區塊。你也可以針對所有未指定的例外，使用選用性的對應所有例外的 `catch` 區塊來作為語法裡最後一個的 catch 區塊。

舉例來說，以下函數呼叫三個其他的函數（已在別處定義了）來檢驗自己的參數。如果檢驗函數判斷出他所要檢驗的元素是無效的話，他就返回 0，導致呼叫者拋出對應的例外。

```js
function getCustInfo(name, id, email) {
  var n, i, e;

  if (!validate_name(name)) throw "InvalidNameException";
  else n = name;
  if (!validate_id(id)) throw "InvalidIdException";
  else i = id;
  if (!validate_email(email)) throw "InvalidEmailException";
  else e = email;
  cust = n + " " + i + " " + e;
  return cust;
}
```

有各種條件的 `catch` 區塊會把控制權安排給適當的例外處理器。

```js
try {
// 可以拋出三個例外的函數
   getCustInfo("Lee", 1234, "lee@netscape.com")
}

catch (e if e == "InvalidNameException") {
// 針對無效的名稱呼叫處理器
   bad_name_handler(e)
}

catch (e if e == "InvalidIdException") {
// 針對無效的 ID 呼叫處理器
   bad_id_handler(e)
}

catch (e if e == "InvalidEmailException") {
// 針對無效的電子郵件位址呼叫處理器
   bad_email_handler(e)
}

catch (e){
// 不知道該做什麼，就記在日誌裡
   logError(e)
}
```

#### finally 區塊

`finally` 區塊內含的語句，會在 try 和 catch 區塊執行以後、並在 `try...catch` 語法後面的語句之前來執行。無論有沒有被拋出的例外，`finally` 區塊都會執行。如果有被拋出的例外，即使沒有 catch 區塊來處理這些例外，還是會執行 `finally` 區塊裡的語句。

當出現例外時，你可以使用 `finally` 區塊來使你的 Script 優美的停止。舉例來說，你可能需要釋放 Script 所佔用的資源。以下範例開啟了檔案，並執行使用這個檔案（伺服端的 JavaScript 可讓你存取檔案）的語句。如果在開啟檔案時有例外被拋出，`finally` 區塊會在 Script 停止之前把檔案關閉。

```js
openMyFile();
try {
  writeMyFile(theData); // 這裡有可能拋出錯誤
} catch (e) {
  handleError(e); // 如果我們得到錯誤，就處理他
} finally {
  closeMyFile(); // 永遠會關閉這項資源
}
```

#### try...catch 語法的嵌套

你可以嵌套一個以上的 `try...catch` 語法。如果有一個內部的 `try...catch` 語法沒有 catch 區塊，圍住這些 `try...catch` 語法的 catch 區塊就會被用來比對。

#### Error 物件的用處

根據錯誤的類型，你有可能使用 「name」 和 「message」 屬性來取得更多明確的訊息。「name」 提供錯誤的一般類別（例如，「DOMException」 或 「Error」），「message」 通常提供更為簡練的訊息，如此就能把錯誤物件轉換為字串來取得訊息。

如果你要拋出你自己的例外，以從這些屬性取得好處（例如，如果你的 catch 區塊不區分你自己的例外和系統的例外的話），你可以使用錯誤建構子。例如︰

```js
function doSomethingErrorProne () {
   if (ourCodeMakesAMistake()) {
      throw (new Error('The message'));
   }
   else {
      doSomethingToGetAJavascriptError();
   }
}
....
try {
   doSomethingErrorProne();
}
catch (e) {
   alert(e.name);// 警報 'Error'
   alert(e.message); // 警報 'The message' 或 JavaScript 錯誤訊息
}
```

{{ PreviousNext("Core_JavaScript_1.5_教學:例外處理語法:throw_語法", "Core_JavaScript_1.5_教學:函數的定義") }}
