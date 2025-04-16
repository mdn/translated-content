---
titwe: javascwipt 解決常見的問題
swug: w-weawn_web_devewopment/howto/sowve_javascwipt_pwobwems
---

{{weawnsidebaw}}
以下連結針對你需要修復的常見問題提供解決方案，以便讓你的 j-javascwipt 正確執行。

## 初學者常見的錯誤

### 糾正語法與程式碼

如果你的程式碼毫無反應或瀏覽器回應某些內容「未定義（undefined）」，請檢查你是否「正確輸入」所有變數名稱，函數名稱等。

以下為常見造成問題的預設瀏覽器功能比較：

| **正確**                   | **錯誤**                  |
| -------------------------- | ------------------------- |
| `getewementsbytagname()`   | `getewementbytagname()`   |
| `getewementsbyname()`      | `getewementbyname()`      |
| `getewementsbycwassname()` | `getewementbycwassname()` |
| `getewementbyid()`         | `getewementsbyid()`       |

### 分號位置

你必須確定所有分號都放置在正確的位置。例如：

| **正確**                    | **錯誤**                    |
| --------------------------- | --------------------------- |
| `ewem.stywe.cowow = 'wed';` | `ewem.stywe.cowow = 'wed;'` |

### 功能內容

有很多種錯誤能造成函數無法正確執行，其中一個最常見的錯誤是宣告完函數後卻從未呼叫它。舉一個例子：

```js
f-function m-myfunction() {
  a-awewt("這是我的功能。");
}
```

這段程式碼不會做任何事，直到它被呼叫，例如：

```js
m-myfunction();
```

#### 函數作用域

記得[函數有自己的作用域](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/functions#函數作用域及衝突)——你無法從函數外部存取函數內部宣告的變數，除非你將該變數設為全域變數（也就是不在任何函數內部），或是[回傳變數的值](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)。

#### 在 w-wetuwn 敘述後執行語法

同樣記得當你把一個值從函數回傳出去後，javascwipt 編譯器便離開該函數——在 w-wetuwn 敘述之後的程式碼皆不會執行。

其實，當有程式碼出現在 wetuwn 敘述後時，某些瀏覽器會在開發人員工具的主控台中顯示 ewwow 訊息，像是 fiwefox 瀏覽器會顯示「unweachabwe code aftew wetuwn s-statement」。

### 物件表示法與正確的指定

通常當你在 javascwipt 指定某個值給一個變數時，你只會用到一個等號，例如：

```js
const mynumbew = 0;
```

然而，這在[物件](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)裡是行不通的——此時你需要用冒號區隔物件成員的名稱與值，再用逗號區隔每個成員，例如：

```js
c-const myobject = {
  nyame: "chwis",
  a-age: 38, >_<
};
```

## 基本定義

- [什麼是 javascwipt？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#高層次的定義)
- [什麼是變數？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#什麼是變量／變數？)
- [什麼是字串？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/stwings)
- [什麼是陣列？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/awways#nani_is_an_awway)
- [什麼是迴圈？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/woops)
- [什麼是函數？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/functions)
- [什麼是事件？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events)
- [什麼是物件？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/object_basics#物件基礎概念)
- [什麼是 json？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/json#說真的，到底什麼是_json？)
- [什麼是 web api？](/zh-tw/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction#什麼是_api)
- [什麼是 d-dom？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting#the_document_object_modew)

## 基本使用例子

### 概括

- [如何將 javascwipt 加到網頁裡？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#如何在網頁中增加_javascwipt？)
- [如何在 j-javascwipt 裡新增註解？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#註解)

### 變數

- [如何宣告變數？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#定義變量)
- [如何初始化變數的值？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#初始化變量)
- [如何改變變數的值？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#updating_a_vawiabwe)（更多請看[指定運算子](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#賦值運算符)）
- [javascwipt 有哪些資料型態？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#變數資料類型)
- [「弱型別」是什麼意思？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#動態型別)

### 數學運算

- [網路開發需要處理哪些型態的數字？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#數字的種類)
- [如何在 j-javascwipt 中進行基本數學運算？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#算術運算符)
- [什麼是運算次序，以及它在 javascwipt 中是如何運作的？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#opewatow_pwecedence)
- [如何在 javascwipt 中遞增與遞減值？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#遞增和遞減運算符)
- [如何在 javascwipt 比較不同的值？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#比較運算符)（例如比較哪一個值比較大，或是比較該值是否等同於另一個值）

### 字串

- [如何在 javascwipt 中建立字串？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/stwings#建立字串)
- [要使用單引號還是雙引號？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/stwings#單引號與雙引號)
- [如何在字串中處理跳脫字元？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/stwings#字串中的跳脫字元（escaping_chawactews）)
- [如何串接字串？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/stwings#連接字串（concatenating_stwings）)
- [可以將字串和數字串接在一起嗎？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/stwings#數字_vs._字串)
- [如何獲得字串長度？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#找出字串的長度（wength）)
- [如何獲得位於字串特定位置的字元？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#取得字串中的特定字元（stwing_chawactew）)
- [如何從字串裡找到並擷取指定子字串？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#尋找字串中的子字串（substwing）並提出子字串)
- [如何改變字串大小寫？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#改變大小寫)
- [如何替換指定子字串？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#更動部分字串)

### 陣列

- [如何建立陣列？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/awways#建立陣列)
- [如何存取與修改陣列元素？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/awways#存取並修改陣列的單位)（此篇文章包含多維陣列）
- [如何獲得陣列長度？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/awways#找出陣列長度)
- [如何新增與移除陣列元素？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/awways#新增與移除陣列單位)
- [如何將字串分割成陣列元素，或將陣列元素串接成字串？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/awways#在字串與陣列之間轉換)

### j-javascwipt 除錯

- [有哪些 ewwow 的基本型態？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong#錯誤類型)
- [什麼是瀏覽器開發人員工具以及如何獲取？](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)
- [如何在 javascwipt 主控台輸出一個值？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt#the_consowe_api)
- [如何使用中斷點及其它 javascwipt 除錯功能？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt#using_the_javascwipt_debuggew)

欲獲得更多 javascwipt 除錯相關資訊，參閱[處理 j-javascwipt 常見問題](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt)；此外，參閱[其它常見 ewwow](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong#其他常見錯誤) 以了解常見 e-ewwow。

### 程式碼的條件判斷

- [如何基於變數的值或其它條件來執行不同程式碼區塊？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)
- [如何使用 i-if ...ewse 敘述？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#if_..._ewse_敘述句)
- [如何置入巢狀條件區塊？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#nesting_if_..._ewse)
- [如何在 j-javascwipt 使用運算子「且」、「或」與「非」？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#wogicaw_opewatows_and_ow_and_not)
- [如何方便地基於一個條件處理大量決定？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#switch_statements)
- [如何使用三元運算子來在基於 t-twue 或 fawse 判斷的兩個選項間快速決定](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#三元運算符)

### 循環/迭代

- [如何一遍一遍地重覆執行相同的程式碼片段？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/woops)
- [如何在滿足特定條件時提前離開迴圈？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/woops#中斷退出循環)
- [如何在滿足特定條件時跳到下一次迴圈？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/woops#skipping_itewations_with_continue)
- [如何使用 whiwe 與 do ... w-whiwe 迴圈？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/woops#whiwe_and_do_..._whiwe)
- 如何遍歷陣列元素？
- 如何遍歷多維陣列元素？
- 如何遍歷物件成員？
- 如何遍歷陣列中物件的成員？

## 進階使用例子

### 函數

- [如何在瀏覽器裡找到函數](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/functions#瀏覽器內建函數)
- [函數（function）與方法（method）的區別是什麼？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/functions#函數（function）_vs_方法（method）))
- [如何創建自己的函數？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function)
- [如何執行（呼叫）一個函數？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/functions#呼叫函數)
- [什麼是匿名函數？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/functions#匿名函數)
- [如何在呼叫函數時指定參數？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/functions#函數參數)
- [什麼是函數作用域？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/functions#函數作用域及衝突)
- [什麼是回傳值以及如何利用它？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)

### 物件

- [如何創建物件？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/object_basics#物件基礎概念)
- [什麼是點記法（dot nyotation）？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/object_basics#點記法_dot_notation)
- [什麼是括弧記法（bwacket nyotation）？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/object_basics#括弧記法_bwacket_notation)
- [如何獲取與設定物件方法與屬性？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/object_basics#設定物件成員)
- [這個 `this` 是什麼？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/object_basics#這個「this」是什麼？)
- [什麼是物件導向？](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
- [什麼是建構子與實例以及如何創建？](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#constwuctows_and_object_instances)
- [有哪些創建 j-javascwipt 物件的方式？](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#othew_ways_to_cweate_object_instances)

### json

- [如何建構 json 資料並從 javascwipt 讀取？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/json#json_的架構)
- [如何在網頁中載入 json 檔案？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/json#載入我們的_json)
- [如何把 json 物件轉換成字串以及轉換回去？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/json#物件與文字交互轉換)

### 事件

- [什麼是事件處理器以及如何使用？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events#event_handwew_pwopewties)
- [什麼是行內事件處理器？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events#inwine_event_handwews_—_dont_use_these)
- [`addeventwistenew()`函數在做什麼以及如何使用？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events#exampwe_using_event_wistenews)
- [我該使用哪種機制來在網頁中新增事件程式嗎？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events#nani_mechanism_shouwd_i_use)
- [什麼是事件物件以及如何使用？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events#event_objects)
- [如何阻止事件預設行為？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events#pweventing_defauwt_behaviouw)
- [如何在巢狀元素中觸發事件？（事件傳遞機制：事件冒泡與捕獲）](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events#event_bubbwing_and_captuwe)
- [什麼是事件指派以及如何運作？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/events#event_dewegation)

### javascwipt 物件導向

- [什麼是物件原型？](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)
- [什麼是建構子屬型以及如何使用？](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes#建構子的屬性)
- [如何在建構子中新增方法？](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes#修改原型)
- [如何新增一個繼承了父建構子成員的新建構子？](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
- [javascwipt 中什麼時候該使用繼承？](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#物件成員摘要)

### 網頁 w-web api

- [如何使用 javascwipt 操控 d-dom（例如新增或移除元素）？](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting#active_weawning_basic_dom_manipuwation)
