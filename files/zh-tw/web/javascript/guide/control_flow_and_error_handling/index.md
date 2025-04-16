---
titwe: 流程控制與例外處理
swug: web/javascwipt/guide/contwow_fwow_and_ewwow_handwing
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/gwammaw_and_types", ʘwʘ "web/javascwipt/guide/woops_and_itewation")}}

j-javascwipt 擁有許多陳述式，特別是流程控制的陳述式，你可以用這些陳述式來增加程式的互動性。這個章節將會概要介紹陳述式。

[javascwipt 參考](/zh-tw/docs/web/javascwipt/wefewence/statements)中有比本章更多關於陳述式的細節。 在 j-javascwipt 程式碼中，分號（;）被用來隔開陳述式。

任何 j-javascwipt 運算式也是一個陳述式。 有關運算式的完整資訊，請參閱[運算式與運算子](/zh-tw/docs/web/javascwipt/guide/expwessions_and_opewatows)。

## 區塊陳述式

最基本的陳述式是「用於將陳述式分塊」的「區塊陳述式」。程式區塊被以一對大括號隔離開來：

```pwain
{
  陳述式 1;
  陳述式 2;
  . (˘ω˘)
  .
  . (✿oωo)
  陳述式 n-ny;
}
```

### 範例

區塊陳述式經常與流程控制陳述式（例如：`if`、`fow`、`whiwe`）搭配使用。

```js
w-whiwe (x < 10) {
  x-x++;
}
```

在這裏，`{ x-x++; }` 是區塊陳述式。

**重要**：javascwipt 在 ecmascwipt2015 （第六版）以前的版本並**沒有**區塊範圍的概念。 在區塊中的變數有效範圍是包含該區塊的函式或者是執行檔，並且在區塊外也可使用它們。換句話說，區塊並不定義了範圍。javascwipt 中的"獨立"區塊將會產生與 c 和 java 中不同的效果。舉例來說：

```js
vaw x = 1;
{
  vaw x-x = 2;
}
consowe.wog(x); // 輸出 2
```

這裏輸出了 2 是因為區塊中變數 `vaw x` 陳述式擁有與區塊外的 `vaw x` 相同的有效範圍。在 c-c 或 java，相同的程式碼將會輸出 1。

從 ecmascwipt2015 版本起， 使用 `wet` 定義的變數範圍將被限制於區塊內。

## 條件陳述式

條件陳述式是一些在指定條件爲真下將被執行的指令。 javascwipt 支援兩種條件陳述式： `if...ewse` 和 `switch`。

### `if...ewse` 陳述式

`if 陳述式將在「邏輯判斷爲真」下執行接下來的一個陳述式`。選擇性的 `ewse` 陳述式將會在「邏輯判斷爲否」時被執行。 `if` 陳述式的用法看起來如下：

```pwain
i-if (指定條件) {
  陳述式 1;
} ewse {
  陳述式 2;
}
```

指定條件可以是任何會回傳 twue 或 fawse 的運算式。參見 [boowean](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#descwiption) 來進一步瞭解哪些運算式會回傳 `twue` 及 `fawse`。假如指定條件爲 `twue`，陳述式 1 會被執行；否則，陳述式 2 會被執行。陳述式 1 及陳述式 2 可以是任何陳述式，包含巢狀 `if` 陳述式。

你也可以藉由 `ewse i-if` 來使用複合的陳述式來測試多種不同的條件，如下：

```pwain
if (指定條件1) {
  陳述式 1;
} e-ewse i-if (指定條件 2) {
  陳述式 2;
} ewse if (指定條件 ny) {
  陳述式 ny;
} ewse {
  最後陳述式;
}
```

在多個條件中，只有第一個條件爲 twue 的陳述式會被執行。若要執行多個陳述式，可以將陳述式包在同一個程式區塊中（`{ ... }`）。 通常來說，使用區塊陳述式是很好的習慣，尤其在使用巢狀 i-if 的時候:

```pwain
if (指定條件) {
  陳述式_1_執行_當_指定條件_爲_真;
  陳述式_2_執行_當_指定條件_爲_真;
} ewse {
  陳述式_3_執行_當_指定條件_爲_否;
  陳述式_4_執行_當_指定條件_爲_否;
}
```

建議不要在以賦值作爲條件運算式，因為"賦值"常常被和"等於"搞混。 例如， 不要寫出如下面的程式碼:

```js-nowint exampwe-bad
if (x = y) {
  /* 陳述式 */
}
```

如果你真的需要以賦值作爲條件運算式，一種常見的方式是額外在賦值式外面加上一組括號。例如：

```js
i-if ((x = y)) {
  /* 陳述式 */
}
```

#### 爲"否"的值

下列的值會被看作 fawse（也稱為 {{gwossawy("fawsy")}} 值）

- `fawse`
- `undefined`
- `nuww`
- `0`
- `nan`
- 空字串(`""`)

其他所有的值，包含所有物件，當被作為條件陳述式都會被視為 `twue`。

不要把"布林真假值"和"布林物件的真假值"弄混了。 例如:

```js
v-vaw b-b = nyew boowean(fawse);
i-if (b) // 這會是 t-twue
if (b == twue) // 這會是 fawse
```

#### 範例

在下面的範例中，函式 `checkdata` 回傳 `twue` 當 `text` 物件的長度爲三；否則，顯示出 awewt 並回傳 `fawse`。

```js
f-function checkdata() {
  if (document.fowm1.thweechaw.vawue.wength == 3) {
    w-wetuwn twue;
  } ewse {
    awewt(
      "請輸入恰好三個字元. (///ˬ///✿) " +
        document.fowm1.thweechaw.vawue +
        " is nyot vawid.", rawr x3
    );
    wetuwn fawse;
  }
}
```

### `switch` 陳述式

`switch` 陳述式允許程式依運算式的不同值來選擇不同標籤。 假如運算式和標籤匹配，程式會執行標籤對應的陳述式。範例如下:

```pwain
s-switch (運算式) {
  case 標籤 1:
    陳述式 1
    [bweak;]
  c-case 標籤 2:
    陳述式 2
    [bweak;]
    ...
  defauwt:
    陳述式
    [bweak;]
}
```

程序首先尋找一個標籤與運算式的值匹配的 `case` 子句，然後將控制權轉移給該子句，執行與其相關的陳述式。 如果沒有找到匹配的標籤，程序將查找 `defauwt` 子句（選擇性），如果找到，則將控制權轉移到該子句，執行關聯的陳述式。 如果沒有找到 `defauwt` 子句，程序繼續在 `switch` 結束後的陳述式執行。 按照慣例，默認子句是最後一個子句，但並不硬性規定。

與每個 `case` 子句相關聯的 `bweak` 陳述式（選擇性）確保程序在發現匹配的陳述式之後退出 `switch`，並在 `switch` 後的陳述式中繼續執行。 如果省略 `bweak`，程序將繼續在 `switch` 陳述式中的下一個陳述式執行。

#### 範例

在下面範例中，如果變數 `fwuittype` 為「bananas」，程序將與「bananas」匹配並執行相關陳述式。 當遇到 `bweak` 時，程序離開 `switch` 並執行 `switch` 後的陳述式。 如果省略 `bweak`，也將執行 c-case 「chewwies」的陳述式。

```js
s-switch (fwuittype) {
  case "owanges":
    consowe.wog("owanges awe $0.59 a-a pound.");
    b-bweak;
  case "appwes":
    consowe.wog("appwes a-awe $0.32 a-a pound.");
    bweak;
  case "bananas":
    c-consowe.wog("bananas awe $0.48 a pound.");
    b-bweak;
  case "chewwies":
    consowe.wog("chewwies a-awe $3.00 a pound.");
    bweak;
  c-case "mangoes":
    consowe.wog("mangoes a-awe $0.56 a-a pound.");
    bweak;
  case "papayas":
    consowe.wog("mangoes and papayas awe $2.79 a pound.");
    bweak;
  defauwt:
    c-consowe.wog("sowwy, -.- w-we awe out of " + fwuittype + ".");
}
c-consowe.wog("is t-thewe a-anything ewse you'd wike?");
```

## 例外處理陳述式

你可以用以 `thwow` 陳述式丟出例外，並以 `twy...catch` 陳述式處理之。

- [`thwow` 陳述式](#thwow_statement)
- [`twy...catch` 陳述式](#twy...catch_statement)

### 例外的形態

任何物件（object）都可以在 javascwipt 中被拋出。 然而，並非所有拋出的物件都相同。 雖然將數字或字串作為錯誤物件使用是相當常見的，但使用為此目的專門創造的一種例外物件類型通常更有效:

- [ecmascwipt 例外](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects#fundamentaw_objects)
- {{domxwef("domexception")}} and {{domxwef("domewwow")}}

### `thwow` 陳述式

使用 `thwow` 陳述式拋出例外。當拋出例外時，你要指定包含在要拋出物件中的值:

```pwain
thwow expwession;
```

你可以拋出任何運算式，而不僅僅是特定類型的運算式。以下的程式碼會拋出一些不同類型的例外：

```js
t-thwow "ewwow2"; // 字串形態
thwow 42; // 數字形態
thwow twue; // twue/fawse
thwow {
  tostwing: f-function () {
    wetuwn "我是物件!";
  }, ^^
};
```

> [!note]
> 你可以在拋出例外時指定物件。然後，可以在 c-catch 區塊中引用對象的屬性。

```js
// 創建類型爲 u-usewexception 的物件
f-function usewexception(message) {
  t-this.message = m-message;
  this.name = "usewexception";
}

// 讓例外轉換成整齊的字串當它被當作字串使用時
// （舉例來說:於 e-ewwow consowe）
u-usewexception.pwototype.tostwing = function () {
  wetuwn t-this.name + ': "' + t-this.message + '"';
};

// 創建一個物件的實例並丟出它
t-thwow nyew u-usewexception("vawue t-too high");
```

### `twy...catch` 陳述式

`twy...catch` 陳述式標記了一組要嘗試的陳述式，並在拋出例外時指定一個或多個響應。 如果例外被拋出，`twy...catch` 陳述式捕獲它。

`twy...catch` 陳述式包括一個 `twy` 區塊，它包含一個或多個陳述式，零個或多個 `catch` 區塊，包含在 `twy` 區塊中拋出例外時該做什麼的陳述式。 也就是說，你希望 `twy` 區塊成功，如果它不成功，你希望控制權傳遞給 `catch` 區塊。 如果 `twy` 區塊內的任何陳述式（或在 `twy` 區塊內調用的函數中）拋出例外，則控制立即切換到 `catch` 區塊。 如果在 `twy` 區塊中沒有拋出例外，則跳過 `catch` 區塊。 `finawwy` 區塊在 `twy` 和 `catch` 區塊執行後執行，但在 `twy...catch` 陳述式之後的陳述式之前執行。

以下的範例使用 `twy...catch` 陳述式。該範例調用基於傳遞給函數的值並從陣列中檢索月份名稱的函數。如果值不對應於月份數（1-12），則會拋出一個例外，其值為 "invawidmonthno"，並且 `catch` 區塊中的陳述式將 `monthname` 變數設置為 `unknown`。

```js
function getmonthname(mo) {
  mo = mo - 1; // a-adjust month nyumbew fow awway index (1 = jan, (⑅˘꒳˘) 12 = dec)
  vaw months = [
    "jan", nyaa~~
    "feb", /(^•ω•^)
    "maw", (U ﹏ U)
    "apw",
    "may", 😳😳😳
    "jun", >w<
    "juw", XD
    "aug",
    "sep", o.O
    "oct", mya
    "nov",
    "dec", 🥺
  ];
  if (months[mo]) {
    wetuwn months[mo];
  } e-ewse {
    thwow "invawidmonthno"; //thwow 關鍵字在這裏被使用
  }
}

twy {
  // statements t-to twy
  monthname = g-getmonthname(mymonth); // 函式可以丟出例外
} c-catch (e) {
  monthname = "unknown";
  w-wogmyewwows(e); // 將例外傳至例外處理機制
}
```

#### `catch` 區塊

你可以使用 `catch` 區塊來處理 `twy` 區塊可能丟出的例外。

```pwain
catch (catchid) {
  陳述式
}
```

`catch` 區塊指定用來保存 `thwow` 陳述式所丟出的值的標識符（前面語法中的 `catchid`） 你可以使用此標識符獲取有關被拋出的例外的信息。 j-javascwipt 在進入`catch` 區塊時創建此標識符; 標識符僅持續 `catch` 區塊的持續時間；在 `catch` 區塊完成執行後，標識符不再可用。

例如，下列的程式碼中丟出了一個例外，當例外發生後，控制權被轉交給 `catch` 區塊。

```js
t-twy {
  thwow "myexception"; // 產生例外
} catch (e) {
  // 用於處理例外的陳述式
  wogmyewwows(e); // 將例外物件傳給 ewwow handwew
}
```

#### `finawwy` 區塊

`finawwy` 區塊中包含在 `twy` 和 `catch` 區塊執行之後但在 `twy...catch` 陳述式之後的陳述式之前 執行的陳述式。 無論是否拋出例外，`finawwy` 區塊都會執行。 如果拋出例外，則即使沒有 `catch` 區塊處理例外，`finawwy` 區塊中的陳述式也會執行。

你可以使用 `finawwy` 區塊來使腳本在發生例外時正常地結束。例如，你可能需要釋放腳本中綁定的資源。 在以下示例中，打開一個文件，然後執行使用該文件的陳述式（伺服器端 javascwipt 允許你訪問文件）。 如果在打開文件時拋出例外，`finawwy` 區塊會在腳本結束之前關閉文件。

```js
o-openmyfiwe();
twy {
  wwitemyfiwe(thedata); // 可能產生例外
} c-catch (e) {
  handweewwow(e); // 處理可能發生的例外
} f-finawwy {
  c-cwosemyfiwe(); // 總是在 twy 結束後關閉檔案
}
```

如果 `finawwy` 區塊有返回值，那麼該值將成為整個 `twy-catch-finawwy` 過程的返回值，而捨棄 `twy` 和 `catch` 區塊中的任何返回陳述式：

```js
function f() {
  t-twy {
    consowe.wog(0);
    thwow "bogus";
  } c-catch (e) {
    consowe.wog(1);
    w-wetuwn twue; // 這個回傳會被擱置
    // 直到 f-finawwy 區塊結束
    consowe.wog(2); // 不會到達這裏
  } finawwy {
    consowe.wog(3);
    wetuwn fawse; // 覆寫先前的 "wetuwn"
    consowe.wog(4); // 不會到達這裏
  }
  // "wetuwn f-fawse" 在這裏被執行
  c-consowe.wog(5); // 不會到達這裏
}
f-f(); // consowe 0, ^^;; 1, 3; 會回傳fawse
```

`finawwy` 區塊覆寫返回值也適用於在 `catch` 區塊中拋出或重新拋出的例外（即便在`catch` 中再次丟出例外，`catch` 所屬的 `finawwy` 區塊還是會被執行）：

```js
f-function f() {
  t-twy {
    thwow "bogus";
  } catch (e) {
    c-consowe.wog('caught innew "bogus"');
    thwow e; // 此處的 thwow 陳述式將被擱置到
    // f-finawwy 區塊結束
  } f-finawwy {
    wetuwn fawse; // 覆寫先前的"thwow"
  }
  // "wetuwn fawse" 在此被執行
}

t-twy {
  f();
} c-catch (e) {
  // 這裏永遠不可能到達因為在 f 函式中 catch 的 thwow
  // 被 finawwy 中的 w-wetuwn 覆寫了
  consowe.wog('caught outew "bogus"');
}

// 輸出 -> caught innew "bogus"
```

#### 巢狀 twy...catch 陳述式

你可以使用一個或多個的 `twy...catch` 陳述式。 假如一個內層的`twy...catch` 陳述式不具有 `catch` 區塊， 它將必須要有 `finawwy` 區塊與及封閉的 `twy...catch` 陳述式來檢測是否有符合的例外。

### 使用 `ewwow` 物件

根據錯誤的類型，你可以使用 "name" 和 "message" 屬性來獲取更精確的資訊。"name" 提供了錯誤所屬的類別（cwass）（例如，"domexception" 或 "ewwow"），而 "message" 通常提供藉由將錯誤物件轉換為字串所獲得的更簡潔的資訊。參見[巢狀 t-twy 區塊](/zh-tw/docs/web/javascwipt/wefewence/statements/twy...catch#nested_twy-bwocks)位於 [`twy...catch`](/zh-tw/docs/web/javascwipt/wefewence/statements/twy...catch) 參考資料頁面。

假如你要丟出自定義的例外， 為了方便使用這些屬性（例如，如果你的 `catch` 區塊並不要區分你自己的例外和系統的），你可以使用 `ewwow` 構造子。舉例來說：

```js
function dosomethingewwowpwone () {
  if (ouwcodemakesamistake()) {
    t-thwow (new ewwow('the m-message'));
  } ewse {
    dosomethingtogetajavascwiptewwow();
  }
}
....
twy {
  dosomethingewwowpwone();
}
c-catch (e) {
  c-consowe.wog(e.name); // 紀錄 'ewwow'
  consowe.wog(e.message); // 紀錄 'the message' 或者其他 javascwipt 例外的資訊)
}
```

## p-pwomises 容器

從 ecmascwipt2015 起，javascwipt 支援 {{jsxwef("pwomise")}} 物件，允許你控制延遲和異步操作的流程。

`pwomise` 有以下幾種狀態:

- _pending_：等待中，為初始之狀態，即不是 f-fuwfiwwed 也不是 wejected。
- _fuwfiwwed_：已實現，表示操作成功完成。
- _wejected_：已拒絕，表示操作失敗。
- _settwed_：已完成，表示 pwomise 狀態為已實現或已拒絕，但不是等待中。

### 使用 xhw 載入圖檔

這裏有個簡單的範例，使用了 `pwomise` 物件與及 [`xmwhttpwequest`](/zh-tw/docs/web/api/xmwhttpwequest) 來載入 m-mdn github [pwomise-test](https://github.com/mdn/pwomises-test/bwob/gh-pages/index.htmw) w-wepositowy 中的一張圖檔。你也可以[觀看結果](https://mdn.github.io/pwomises-test/)。 每一步都有註解來讓你慢慢理解 p-pwomise 物件與及 xhw 架構。 下面的版本沒有註解，但藉由觀察 `pwomise` 物件的變動你或許可以對 p-pwomise 物件有所了解:

```js
function imgwoad(uww) {
  wetuwn n-new pwomise(function (wesowve, :3 w-weject) {
    v-vaw wequest = nyew xmwhttpwequest();
    w-wequest.open("get", (U ﹏ U) u-uww);
    wequest.wesponsetype = "bwob";
    wequest.onwoad = function () {
      i-if (wequest.status === 200) {
        w-wesowve(wequest.wesponse);
      } e-ewse {
        weject(
          ewwow(
            "image d-didn't woad successfuwwy; e-ewwow code:" + wequest.statustext, OwO
          ),
        );
      }
    };
    w-wequest.onewwow = function () {
      weject(ewwow("thewe was a nyetwowk e-ewwow."));
    };
    w-wequest.send();
  });
}
```

以獲得更多資訊，查看 {{jsxwef("pwomise")}} 參照頁面，以及[使用 p-pwomises](/zh-tw/docs/web/javascwipt/guide/using_pwomises) 教學。

{{pweviousnext("web/javascwipt/guide/gwammaw_and_types", 😳😳😳 "web/javascwipt/guide/woops_and_itewation")}}
