---
title: JavaScript 解決常見的問題
slug: Learn_web_development/Howto/Solve_JavaScript_problems
---

以下連結針對你需要修復的常見問題提供解決方案，以便讓你的 JavaScript 正確執行。

## 初學者常見的錯誤

### 糾正語法與程式碼

如果你的程式碼毫無反應或瀏覽器回應某些內容「未定義（undefined）」，請檢查你是否「正確輸入」所有變數名稱，函數名稱等。

以下為常見造成問題的預設瀏覽器功能比較：

| **正確**                   | **錯誤**                  |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### 分號位置

你必須確定所有分號都放置在正確的位置。例如：

| **正確**                    | **錯誤**                    |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### 功能內容

有很多種錯誤能造成函數無法正確執行，其中一個最常見的錯誤是宣告完函數後卻從未呼叫它。舉一個例子：

```js
function myFunction() {
  alert("這是我的功能。");
}
```

這段程式碼不會做任何事，直到它被呼叫，例如：

```js
myFunction();
```

#### 函數作用域

記得[函數有自己的作用域](/zh-TW/docs/Learn_web_development/Core/Scripting/Functions#函數作用域及衝突)——你無法從函數外部存取函數內部宣告的變數，除非你將該變數設為全域變數（也就是不在任何函數內部），或是[回傳變數的值](/zh-TW/docs/Learn_web_development/Core/Scripting/Return_values)。

#### 在 return 敘述後執行語法

同樣記得當你把一個值從函數回傳出去後，JavaScript 編譯器便離開該函數——在 return 敘述之後的程式碼皆不會執行。

其實，當有程式碼出現在 return 敘述後時，某些瀏覽器會在開發人員工具的主控台中顯示 error 訊息，像是 Firefox 瀏覽器會顯示「unreachable code after return statement」。

### 物件表示法與正確的指定

通常當你在 JavaScript 指定某個值給一個變數時，你只會用到一個等號，例如：

```js
const myNumber = 0;
```

然而，這在[物件](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)裡是行不通的——此時你需要用冒號區隔物件成員的名稱與值，再用逗號區隔每個成員，例如：

```js
const myObject = {
  name: "Chris",
  age: 38,
};
```

## 基本定義

- [什麼是 JavaScript？](/zh-TW/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#高層次的定義)
- [什麼是變數？](/zh-TW/docs/Learn_web_development/Core/Scripting/Variables#什麼是變量／變數？)
- [什麼是字串？](/zh-TW/docs/Learn_web_development/Core/Scripting/Strings)
- [什麼是陣列？](/zh-TW/docs/Learn_web_development/Core/Scripting/Arrays#what_is_an_array)
- [什麼是迴圈？](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops)
- [什麼是函數？](/zh-TW/docs/Learn_web_development/Core/Scripting/Functions)
- [什麼是事件？](/zh-TW/docs/Learn_web_development/Core/Scripting/Events)
- [什麼是物件？](/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics#物件基礎概念)
- [什麼是 JSON？](/zh-TW/docs/Learn_web_development/Core/Scripting/JSON#說真的，到底什麼是_json？)
- [什麼是 Web API？](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#什麼是_api)
- [什麼是 DOM？](/zh-TW/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)

## 基本使用例子

### 概括

- [如何將 JavaScript 加到網頁裡？](/zh-TW/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#如何在網頁中增加_javascript？)
- [如何在 JavaScript 裡新增註解？](/zh-TW/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#註解)

### 變數

- [如何宣告變數？](/zh-TW/docs/Learn_web_development/Core/Scripting/Variables#定義變量)
- [如何初始化變數的值？](/zh-TW/docs/Learn_web_development/Core/Scripting/Variables#初始化變量)
- [如何改變變數的值？](/zh-TW/docs/Learn_web_development/Core/Scripting/Variables#updating_a_variable)（更多請看[指定運算子](/zh-TW/docs/Learn_web_development/Core/Scripting/Math#賦值運算符)）
- [JavaScript 有哪些資料型態？](/zh-TW/docs/Learn_web_development/Core/Scripting/Variables#變數資料類型)
- [「弱型別」是什麼意思？](/zh-TW/docs/Learn_web_development/Core/Scripting/Variables#動態型別)

### 數學運算

- [網路開發需要處理哪些型態的數字？](/zh-TW/docs/Learn_web_development/Core/Scripting/Math#數字的種類)
- [如何在 JavaScript 中進行基本數學運算？](/zh-TW/docs/Learn_web_development/Core/Scripting/Math#算術運算符)
- [什麼是運算次序，以及它在 JavaScript 中是如何運作的？](/zh-TW/docs/Learn_web_development/Core/Scripting/Math#operator_precedence)
- [如何在 JavaScript 中遞增與遞減值？](/zh-TW/docs/Learn_web_development/Core/Scripting/Math#遞增和遞減運算符)
- [如何在 JavaScript 比較不同的值？](/zh-TW/docs/Learn_web_development/Core/Scripting/Math#比較運算符)（例如比較哪一個值比較大，或是比較該值是否等同於另一個值）

### 字串

- [如何在 JavaScript 中建立字串？](/zh-TW/docs/Learn_web_development/Core/Scripting/Strings#建立字串)
- [要使用單引號還是雙引號？](/zh-TW/docs/Learn_web_development/Core/Scripting/Strings#單引號與雙引號)
- [如何在字串中處理跳脫字元？](/zh-TW/docs/Learn_web_development/Core/Scripting/Strings#字串中的跳脫字元（escaping_characters）)
- [如何串接字串？](/zh-TW/docs/Learn_web_development/Core/Scripting/Strings#連接字串（concatenating_strings）)
- [可以將字串和數字串接在一起嗎？](/zh-TW/docs/Learn_web_development/Core/Scripting/Strings#數字_vs._字串)
- [如何獲得字串長度？](/zh-TW/docs/Learn_web_development/Core/Scripting/Useful_string_methods#找出字串的長度（length）)
- [如何獲得位於字串特定位置的字元？](/zh-TW/docs/Learn_web_development/Core/Scripting/Useful_string_methods#取得字串中的特定字元（string_character）)
- [如何從字串裡找到並擷取指定子字串？](/zh-TW/docs/Learn_web_development/Core/Scripting/Useful_string_methods#尋找字串中的子字串（substring）並提出子字串)
- [如何改變字串大小寫？](/zh-TW/docs/Learn_web_development/Core/Scripting/Useful_string_methods#改變大小寫)
- [如何替換指定子字串？](/zh-TW/docs/Learn_web_development/Core/Scripting/Useful_string_methods#更動部分字串)

### 陣列

- [如何建立陣列？](/zh-TW/docs/Learn_web_development/Core/Scripting/Arrays#建立陣列)
- [如何存取與修改陣列元素？](/zh-TW/docs/Learn_web_development/Core/Scripting/Arrays#存取並修改陣列的單位)（此篇文章包含多維陣列）
- [如何獲得陣列長度？](/zh-TW/docs/Learn_web_development/Core/Scripting/Arrays#找出陣列長度)
- [如何新增與移除陣列元素？](/zh-TW/docs/Learn_web_development/Core/Scripting/Arrays#新增與移除陣列單位)
- [如何將字串分割成陣列元素，或將陣列元素串接成字串？](/zh-TW/docs/Learn_web_development/Core/Scripting/Arrays#在字串與陣列之間轉換)

### JavaScript 除錯

- [有哪些 error 的基本型態？](/zh-TW/docs/Learn_web_development/Core/Scripting/What_went_wrong#錯誤類型)
- [什麼是瀏覽器開發人員工具以及如何獲取？](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
- [如何在 JavaScript 主控台輸出一個值？](/zh-TW/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#the_console_api)
- [如何使用中斷點及其它 JavaScript 除錯功能？](/zh-TW/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#using_the_javascript_debugger)

欲獲得更多 JavaScript 除錯相關資訊，參閱[處理 JavaScript 常見問題](/zh-TW/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)；此外，參閱[其它常見 error](/zh-TW/docs/Learn_web_development/Core/Scripting/What_went_wrong#其他常見錯誤) 以了解常見 error。

### 程式碼的條件判斷

- [如何基於變數的值或其它條件來執行不同程式碼區塊？](/zh-TW/docs/Learn_web_development/Core/Scripting/Conditionals)
- [如何使用 if ...else 敘述？](/zh-TW/docs/Learn_web_development/Core/Scripting/Conditionals#if_..._else_敘述句)
- [如何置入巢狀條件區塊？](/zh-TW/docs/Learn_web_development/Core/Scripting/Conditionals#nesting_if_..._else)
- [如何在 JavaScript 使用運算子「且」、「或」與「非」？](/zh-TW/docs/Learn_web_development/Core/Scripting/Conditionals#logical_operators_and_or_and_not)
- [如何方便地基於一個條件處理大量決定？](/zh-TW/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements)
- [如何使用三元運算子來在基於 true 或 false 判斷的兩個選項間快速決定](/zh-TW/docs/Learn_web_development/Core/Scripting/Conditionals#三元運算符)

### 循環/迭代

- [如何一遍一遍地重覆執行相同的程式碼片段？](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops)
- [如何在滿足特定條件時提前離開迴圈？](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops#中斷退出循環)
- [如何在滿足特定條件時跳到下一次迴圈？](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops#skipping_iterations_with_continue)
- [如何使用 while 與 do ... while 迴圈？](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops#while_and_do_..._while)
- 如何遍歷陣列元素？
- 如何遍歷多維陣列元素？
- 如何遍歷物件成員？
- 如何遍歷陣列中物件的成員？

## 進階使用例子

### 函數

- [如何在瀏覽器裡找到函數](/zh-TW/docs/Learn_web_development/Core/Scripting/Functions#瀏覽器內建函數)
- [函數（function）與方法（method）的區別是什麼？](/zh-TW/docs/Learn_web_development/Core/Scripting/Functions#函數（function）_vs_方法（method）))
- [如何創建自己的函數？](/zh-TW/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
- [如何執行（呼叫）一個函數？](/zh-TW/docs/Learn_web_development/Core/Scripting/Functions#呼叫函數)
- [什麼是匿名函數？](/zh-TW/docs/Learn_web_development/Core/Scripting/Functions#匿名函數)
- [如何在呼叫函數時指定參數？](/zh-TW/docs/Learn_web_development/Core/Scripting/Functions#函數參數)
- [什麼是函數作用域？](/zh-TW/docs/Learn_web_development/Core/Scripting/Functions#函數作用域及衝突)
- [什麼是回傳值以及如何利用它？](/zh-TW/docs/Learn_web_development/Core/Scripting/Return_values)

### 物件

- [如何創建物件？](/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics#物件基礎概念)
- [什麼是點記法（dot notation）？](/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics#點記法_dot_notation)
- [什麼是括弧記法（bracket notation）？](/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics#括弧記法_bracket_notation)
- [如何獲取與設定物件方法與屬性？](/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics#設定物件成員)
- [這個 `this` 是什麼？](/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics#這個「this」是什麼？)
- [什麼是物件導向？](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [什麼是建構子與實例以及如何創建？](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#constructors_and_object_instances)
- [有哪些創建 JavaScript 物件的方式？](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#other_ways_to_create_object_instances)

### JSON

- [如何建構 JSON 資料並從 JavaScript 讀取？](/zh-TW/docs/Learn_web_development/Core/Scripting/JSON#json_的架構)
- [如何在網頁中載入 JSON 檔案？](/zh-TW/docs/Learn_web_development/Core/Scripting/JSON#載入我們的_json)
- [如何把 JSON 物件轉換成字串以及轉換回去？](/zh-TW/docs/Learn_web_development/Core/Scripting/JSON#物件與文字交互轉換)

### 事件

- [什麼是事件處理器以及如何使用？](/zh-TW/docs/Learn_web_development/Core/Scripting/Events#event_handler_properties)
- [什麼是行內事件處理器？](/zh-TW/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these)
- [`addEventListener()`函數在做什麼以及如何使用？](/zh-TW/docs/Learn_web_development/Core/Scripting/Events#example_using_event_listeners)
- [我該使用哪種機制來在網頁中新增事件程式嗎？](/zh-TW/docs/Learn_web_development/Core/Scripting/Events#what_mechanism_should_I_use)
- [什麼是事件物件以及如何使用？](/zh-TW/docs/Learn_web_development/Core/Scripting/Events#event_objects)
- [如何阻止事件預設行為？](/zh-TW/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behaviour)
- [如何在巢狀元素中觸發事件？（事件傳遞機制：事件冒泡與捕獲）](/zh-TW/docs/Learn_web_development/Core/Scripting/Events#event_bubbling_and_capture)
- [什麼是事件指派以及如何運作？](/zh-TW/docs/Learn_web_development/Core/Scripting/Events#event_delegation)

### JavaScript 物件導向

- [什麼是物件原型？](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [什麼是建構子屬型以及如何使用？](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#建構子的屬性)
- [如何在建構子中新增方法？](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#修改原型)
- [如何新增一個繼承了父建構子成員的新建構子？](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [JavaScript 中什麼時候該使用繼承？](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#物件成員摘要)

### 網頁 Web API

- [如何使用 JavaScript 操控 DOM（例如新增或移除元素）？](/zh-TW/docs/Learn_web_development/Core/Scripting/DOM_scripting#active_learning_basic_dom_manipulation)
