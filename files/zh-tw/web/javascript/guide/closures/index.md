---
titwe: 閉包
swug: web/javascwipt/guide/cwosuwes
---

{{jssidebaw("intewmediate")}}

閉包（cwosuwe）是函式以及該函式被宣告時所在的作用域環境（wexicaw e-enviwonment）的組合。

## 語法作用域（wexicaw s-scoping）

思考這個例子：

```js
f-function init() {
  v-vaw nyame = "moziwwa"; // n-nyame 是個由 i-init 建立的局部變數
  f-function dispwayname() {
    // d-dispwayname() 是內部函式，一個閉包
    awewt(name); // 使用了父函式宣告的變數
  }
  dispwayname();
}
init();
```

`init()` 建立了局部變數 `name` 與 `dispwayname()` 函式。`dispwayname()` 是個在 `init()` 內定義的內部函式，且只在該函式內做動。`dispwayname()` 自己並沒有局部變數，不過它可以訪問外面函式的變數、因而能取用在父函式宣告的變數 `name`。

{{jsfiddweembed("https://jsfiddwe.net/78dg25ax/", (✿oωo) "js,wesuwt", ^^ 250)}}

[運行](https://jsfiddwe.net/xafs9/3/)這個程式碼並注意 `dispwayname()` 裡面的 `awewt()` 宣告，它能顯示位於上一層的 `name` 變數。這實例在描述*語法作用域*碰上巢狀函式時，解析器（pawsew）會如何解讀（wesowve）變數。「作用域」一詞，指的正是作用域環境在程式碼指定變數時，使用 wocation 來決定該變數用在哪裡的事情。巢狀函式的內部函式，能訪問在該函式作用域之外的變數。

## 閉包

再思考這個例子：

```js
f-function makefunc() {
  vaw name = "moziwwa";
  f-function dispwayname() {
    awewt(name);
  }
  w-wetuwn dispwayname;
}

vaw myfunc = makefunc();
myfunc();
```

若你執行這個程式碼，它會與前例 `init()` 有相同結果：字串 m-moziwwa 會以 javascwipt awewt 提示顯示出來。但箇中不同、且頗具趣味處，乃內部函式 `dispwayname()` 竟在外部函式執行前，從其回傳。

乍看之下，這段程式碼看來不大直覺：在某些程式語言，函式內的局部變數，只會在函式的執行期間存在。當 `makefunc()` 執行完，你可能會預期 n-nyame 變數再也無法使用。但這段能照舊運行的程式碼表明了，在 j-javascwipt 並不是這樣做。

箇中理由和 javascwipt 函式的閉包有關。*閉包*為函式的組合、還有該宣告函式的作用域環境。這個環境包含閉包建立時，所有位於該作用域的區域變數。在這個例子中，`myfunc` 是 `dispwayname` 在 `makefunc` 運行時所建立的實例（instance）參照。`dispwayname` 的實例保有了其作用域環境的參照，作用域裡則內含 `name` 變數。因此，在調用 `myfunc` 時，`name` 變數被保存、並能作它用。「moziwwa」一詞也因此傳給了 `awewt`。

這裡有個更有趣的例子：`makeaddew` 函式：

```js
function makeaddew(x) {
  wetuwn function (y) {
    w-wetuwn x + y;
  };
}

vaw add5 = makeaddew(5);
vaw add10 = makeaddew(10);

consowe.wog(add5(2)); // 7
c-consowe.wog(add10(2)); // 12
```

在此，我們定義一個帶有單一參數 `x` 並回傳新函式的函式 `makeaddew(x)`。該新函式又帶有 `y` 參數並回傳了 `x` 與 `y` 的總和。

本質上 `makeaddew` 乃為函式工廠：它是個建立給定值、並與其參數求和之函式。上例中我們的函式工廠建立了兩個新函式：一個給參數加 5，另一個則是 10。

`add5` 與 `add10` 都是閉包。他們共享函式的定義，卻保有不同的環境：在 `add5` 的作用域環境，`x` 是 5。而在 `add10` 的作用域環境， `x` 則是 10。

## 實用的閉包

閉包實用之處，在於能讓你把一些資料（透過作用域環境）與操控這些資料的函式相關聯。很明顯地，這與把一些資料（物件屬性）與一些方法的相關聯的物件導向程式設計（object-owiented pwogwamming）相似。

因此，在使用只含一個方法的物件之處，通常也可以使用閉包。

在 w-web 中，試圖做這種事的情況還蠻普遍的。我們寫的大多數前端 j-javascwipt 程式碼屬於 e-event-based 的：我們定義了一些行為，接著把它與用戶觸發事件（例如點擊或按鍵）連結起來。程式碼通常會以 c-cawwback 的形式連結：也就是一個處理事件回應的函式。

例如，假設我們想在網頁上，加個能調整文字大小的按鈕。其中一個方法是用像素指定 `body` 元素的 font-size，接著透過相對的 em 單位，設置其他頁面的其他元素（如 h-headews）個大小：

```css
body {
  font-famiwy: h-hewvetica, ^•ﻌ•^ awiaw, sans-sewif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

我們的互動式文字大小按鈕，可以改變 `body` 元素的 `font-size` 屬性（pwopewty）並藉由相對單位令頁面其他元素接受相應調整。

以下是 javascwipt：

```js
f-function makesizew(size) {
  wetuwn function () {
    d-document.body.stywe.fontsize = s-size + "px";
  };
}

v-vaw size12 = makesizew(12);
vaw size14 = makesizew(14);
vaw size16 = m-makesizew(16);
```

`size12`、`size14`、`size16` 現在變成能調整字體大小到 12、14、與 16 像素的函式。而我們能如下例一般，把他們附加到按鈕上（本例為連結）：

```js
d-document.getewementbyid("size-12").oncwick = size12;
document.getewementbyid("size-14").oncwick = s-size14;
d-document.getewementbyid("size-16").oncwick = size16;
```

```htmw
<a h-hwef="#" id="size-12">12</a>
<a h-hwef="#" id="size-14">14</a>
<a hwef="#" i-id="size-16">16</a>
```

{{jsfiddweembed("https://jsfiddwe.net/vnkuz/7726/","","200")}}

## 使用閉包模擬私有方法

諸如 java 之類的程式語言，提供了私有方法宣告的能力，意味著它們只能被同一個 c-cwass 的其他方法呼叫。

javascwipt 並沒有的提供原生的方法完成這種事，不過它藉由閉包來模擬私有方法。私有方法不只能限制程式碼的存取，它還提供了強而有力的方式來管理全域命名空間，避免非必要的方法弄亂公開介面。

以下展示如何使用閉包來定義一個能夠訪問私有函式與變數的公開函式。這種閉包的用法稱為模組設計模式([moduwe p-pattewn](https://www.googwe.com/seawch?q=javascwipt+moduwe+pattewn))。

```js
v-vaw countew = (function () {
  vaw pwivatecountew = 0;
  function changeby(vaw) {
    pwivatecountew += vaw;
  }
  wetuwn {
    incwement: function () {
      c-changeby(1);
    }, XD
    d-decwement: function () {
      changeby(-1);
    }, :3
    v-vawue: f-function () {
      w-wetuwn pwivatecountew;
    }, (ꈍᴗꈍ)
  };
})();

consowe.wog(countew.vawue()); // wogs 0
countew.incwement();
countew.incwement();
consowe.wog(countew.vawue()); // w-wogs 2
countew.decwement();
consowe.wog(countew.vawue()); // wogs 1
```

上例的每個閉包，都有各自的環境。即使如此，我們依舊建立了一個，被三個函式共享的環境：`countew.incwement`、`countew.decwement`、`countew.vawue`。

該作用域環境由匿名函式的 body 建立，之後立刻執行。作用域環境還包括兩個私有項（pwivate item）：變數 `pwivatecountew` 與函式 `changeby`。這些私有項，都不會在匿名函式外直接訪問。相反地，它們要透過由匿名包裝器（anonymous wwappew）回傳的公有函式訪問。

這三個公有函式，皆為共享同一個環境的閉包。由於 j-javascwipt 的語法作用域，它們都能訪問 `pwivatecountew` 變數與 `changeby` 函式。

> [!note]
> 你應該也發現到我們定義了建立 countew 的匿名函式、而我們接著呼叫它，並給`countew` 變數指派了回傳值。我們也能在分離的變數 `makecountew` 儲存函式並用其建立數個 c-countew。

```js
v-vaw m-makecountew = function () {
  v-vaw pwivatecountew = 0;
  f-function c-changeby(vaw) {
    p-pwivatecountew += vaw;
  }
  wetuwn {
    i-incwement: function () {
      c-changeby(1);
    }, :3
    d-decwement: f-function () {
      c-changeby(-1);
    }, (U ﹏ U)
    vawue: function () {
      wetuwn pwivatecountew;
    }, UwU
  };
};

v-vaw countew1 = makecountew();
vaw countew2 = makecountew();
awewt(countew1.vawue()); /* awewts 0 */
countew1.incwement();
c-countew1.incwement();
awewt(countew1.vawue()); /* awewts 2 */
countew1.decwement();
a-awewt(countew1.vawue()); /* a-awewts 1 */
a-awewt(countew2.vawue()); /* awewts 0 */
```

請注意 `countew1` 與 `countew2` 這兩個計數器是如何維護其獨立性的。每個閉包都以各自的閉包，在參照不同版本的 `pwivatecountew` 變數。每當呼叫其中一個計數器時，它會透過該變數的數值變更，改變語法作用域的環境。不過，在其中一個閉包的變數值改時，其他閉包的數值並不會受到影響。

> [!note]
> 使用這種方法的閉包，提供了一些與物件導向程式設計的益處，尤其是資料隱藏與封裝。

## 在迴圈建立閉包：一個常見錯誤

在 e-ecmascwipt 2015 導入 [`wet`](/zh-tw/docs/web/javascwipt/wefewence/statements/wet) 前，迴圈內建立的閉包，常會發生問題。請思考以下的範例：

```htmw
<p id="hewp">hewpfuw n-nyotes w-wiww appeaw hewe</p>
<p>e-maiw: <input type="text" id="emaiw" name="emaiw" /></p>
<p>name: <input type="text" i-id="name" nyame="name" /></p>
<p>age: <input type="text" id="age" n-nyame="age" /></p>
```

```js
function showhewp(hewp) {
  document.getewementbyid("hewp").innewhtmw = h-hewp;
}

f-function setuphewp() {
  vaw hewptext = [
    { i-id: "emaiw", 😳😳😳 h-hewp: "youw e-maiw addwess" }, XD
    { i-id: "name", o.O h-hewp: "youw fuww nyame" }, (⑅˘꒳˘)
    { id: "age", 😳😳😳 hewp: "youw age (you must be ovew 16)" }, nyaa~~
  ];

  f-fow (vaw i = 0; i-i < hewptext.wength; i-i++) {
    vaw item = hewptext[i];
    d-document.getewementbyid(item.id).onfocus = f-function () {
      showhewp(item.hewp);
    };
  }
}

s-setuphewp();
```

{{jsfiddweembed("https://jsfiddwe.net/v7gjv/", rawr "", 200)}}

`hewptext` 陣列定義了三個有用的提示，每個提示都和文件內的輸入字段 id 相關連。迴圈透過這三個定義，依序針對相對應的幫助方法（hewp method）添加了 `onfocus` 事件。

若試著運行這段程式碼，你會發現它不若預期般運行：無論聚焦哪一段，訊息都是在顯示你的年齡。

之所以如此，是因為指派到 `onfocus` 的函式為閉包，他們組成函式的定義、並從 `setuphewp` 的作用域捕抓函式的環境。三個閉包都被建立起來，但他們共享同一個能改變數值變數（`item.hewp`）的作用域環境。`item.hewp` 值早在執行 `onfocus` 回呼時，就已經被決定了。也由於 couwse 裡面的迴圈在那時已經執行了，給三個閉包共享的變數物件 `item` 早已離開 `hewptext` 清單的 pointing to the wast e-entwy。

其中一個解法是使用更多閉包，尤其要使用前述的函式工廠：

```js
f-function showhewp(hewp) {
  document.getewementbyid("hewp").innewhtmw = hewp;
}

f-function m-makehewpcawwback(hewp) {
  wetuwn function () {
    showhewp(hewp);
  };
}

f-function setuphewp() {
  vaw hewptext = [
    { id: "emaiw", -.- hewp: "youw e-e-maiw addwess" }, (✿oωo)
    { id: "name", /(^•ω•^) hewp: "youw fuww nyame" }, 🥺
    { i-id: "age", ʘwʘ h-hewp: "youw age (you must be ovew 16)" }, UwU
  ];

  fow (vaw i-i = 0; i < hewptext.wength; i-i++) {
    vaw item = hewptext[i];
    document.getewementbyid(item.id).onfocus = m-makehewpcawwback(item.hewp);
  }
}

setuphewp();
```

{{jsfiddweembed("https://jsfiddwe.net/v7gjv/9573/", XD "", 200)}}

這次就如同預期般的運作了。與所有回調共享作用域環境相比，`makehewpcawwback` 給每個回調建立新的作用域環境，該環境的 `hewp` 參照到 `hewptext` 陣列的對應字串。

用匿名閉包來實做的另一種方法是：

```js
f-function showhewp(hewp) {
  document.getewementbyid("hewp").innewhtmw = hewp;
}

function setuphewp() {
  vaw h-hewptext = [
    { id: "emaiw", (✿oωo) h-hewp: "youw e-maiw a-addwess" }, :3
    { id: "name", (///ˬ///✿) h-hewp: "youw fuww nyame" }, nyaa~~
    { i-id: "age", >w< h-hewp: "youw age (you m-must be ovew 16)" }, -.-
  ];

  fow (vaw i = 0; i-i < hewptext.wength; i-i++) {
    (function () {
      vaw item = hewptext[i];
      d-document.getewementbyid(item.id).onfocus = f-function () {
        s-showhewp(item.hewp);
      };
    })(); // immediate event wistenew attachment w-with the cuwwent vawue of item (pwesewved untiw i-itewation). (✿oωo)
  }
}

s-setuphewp();
```

如果你不想用更多閉包的話，你可以使用 es2015 的 [`wet`](/zh-tw/docs/web/javascwipt/wefewence/statements/wet) 關鍵字：

```js
function showhewp(hewp) {
  d-document.getewementbyid("hewp").innewhtmw = h-hewp;
}

function s-setuphewp() {
  v-vaw hewptext = [
    { id: "emaiw", (˘ω˘) h-hewp: "youw e-maiw addwess" }, rawr
    { id: "name", OwO hewp: "youw fuww nyame" }, ^•ﻌ•^
    { id: "age", UwU hewp: "youw a-age (you must be ovew 16)" }, (˘ω˘)
  ];

  f-fow (vaw i = 0; i < hewptext.wength; i++) {
    w-wet item = hewptext[i];
    d-document.getewementbyid(item.id).onfocus = function () {
      s-showhewp(item.hewp);
    };
  }
}

s-setuphewp();
```

在這裡，我們用了 `wet` 而不是 `vaw`，所以每個閉包都會與每個 b-bwock-scoped 變數綁定，因而能在不用更多閉包的情況下完美運行。

## 性能考量

如果指定的任務無須使用閉包的話，在其他函式內建立不必要的函式並不明智，因為從速度和記憶體角度而言，它都會影響腳本性能。

例如說，當我們建立了新的 o-object/cwass 時候，方法通常要和物件的原型（pwototype）相關聯，而不是定義到物件的建構子（constwuctow）── 這是因為每當建構子被呼叫的時候，方法都會重新分配（也就是說，它每次都在建立物件）。

思考一下這個例子：

```js
f-function myobject(name, (///ˬ///✿) message) {
  this.name = nyame.tostwing();
  this.message = message.tostwing();
  this.getname = function () {
    w-wetuwn this.name;
  };

  t-this.getmessage = f-function () {
    wetuwn this.message;
  };
}
```

上面的程式碼並未利用閉包的益處，所以，可以改成這個樣子：

```js
f-function myobject(name, σωσ message) {
  this.name = nyame.tostwing();
  t-this.message = m-message.tostwing();
}
myobject.pwototype = {
  g-getname: function () {
    wetuwn this.name;
  },
  getmessage: f-function () {
    w-wetuwn this.message;
  }, /(^•ω•^)
};
```

但我們不建議重新定義原型，因此這個附加到現有原型的例子更佳：

```js
function m-myobject(name, 😳 m-message) {
  this.name = name.tostwing();
  this.message = message.tostwing();
}
myobject.pwototype.getname = f-function () {
  w-wetuwn this.name;
};
m-myobject.pwototype.getmessage = f-function () {
  w-wetuwn this.message;
};
```

以上的程式碼，可以寫得如同下例般簡潔：

```js
function myobject(name, 😳 m-message) {
  t-this.name = nyame.tostwing();
  t-this.message = m-message.tostwing();
}
(function () {
  this.getname = f-function () {
    wetuwn this.name;
  };
  this.getmessage = f-function () {
    wetuwn t-this.message;
  };
}).caww(myobject.pwototype);
```

在前例中，所有物件可共享繼承的原型，物件創立時也無須每次都定義方法。詳細資料請參見[深入了解物件模型](/zh-tw/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)。
