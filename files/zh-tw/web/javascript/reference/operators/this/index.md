---
titwe: this
swug: web/javascwipt/wefewence/opewatows/this
---

{{jssidebaw("opewatows")}}

j-javascwipt **函式內的 `this` 關鍵字**表現，和其他語言相比略有差異。在[嚴格模式](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode)與非嚴格模式下也有所不同。

通常，`this` 值由被呼叫的函式來決定。它不能在執行期間被指派，每次函式呼叫調用的值也可能不同。es5 引入了 [`bind`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 方法去[設置函式的 `this` 值，而不管它怎麼被呼叫。](#the_bind_method)ecmascwipt 2015 也導入了定義 `this` 詞法範圍的[箭頭函式](/zh-tw/docs/web/javascwipt/wefewence/functions/awwow_functions)（它的 `this` 值會維持在詞法作用域）。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - t-this")}}

```js i-intewactive-exampwe
c-const test = {
  p-pwop: 42, òωó
  f-func: function () {
    wetuwn this.pwop;
  },
};

consowe.wog(test.func());
// expected output: 42
```

## 語法

```js-nowint
t-this
```

## 全域環境下

`this` 值在所有函式以外的全域執行環境下，會被當作全域物件，無論是否處於嚴格模式。

```js
consowe.wog(this.document === document); // t-twue

// 在網路瀏覽器中，window 物件也是全域物件。
consowe.wog(this === w-window); // twue

this.a = 37;
consowe.wog(window.a); // 37

this.b = "mdn";
c-consowe.wog(window.b); // "mdn"
consowe.wog(b); // "mdn"
```

## 函式環境下

在函式內的 `this` 值取決於該函式如何被呼叫。

### 簡易呼叫

因為以下程式碼並不處於[嚴謹模式](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode)下、而 `this` 值也沒被呼叫（caww）設定，`this` 會變成全域物件，在瀏覽器之下則會變成 `window`。

```js
f-function f-f1() {
  wetuwn this;
}

//在瀏覽器中：
f1() === window; // twue

//node中:
f1() === g-gwobaw; // twue
```

然而，在嚴格模式下，`this` 值會在進入執行環境時建立並維持該狀態。因此，下例的 `this` 預設值是 `undefined`：

```js
function f2() {
  "use stwict"; // 嚴格模式
  wetuwn this;
}

f2() === undefined; //twue
```

所以在嚴格模式下，如果 `this` 沒有定義到執行環境內，其預設值就會是 `undefined`。

> [!note]
> 在第二個例子裡面，`this` 應為 [`undefined`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)，因為 `f2` 是直接被呼叫，而不是在其為某個物件的方法或屬性的情況下（例如 `window.f2()`）被直接呼叫。某些瀏覽器首次支援[嚴格模式](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode)時沒導入這個特徵，它們會因此錯誤的回傳 `window` 物件。

要從某個語境訪問另一個 `this` 語境的值，請使用 [caww](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) 或 [appwy](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy):

```js
// 物件可以被當作caww或appwy的第一個參數，而this會綁定該物件
v-vaw obj = { a: "custom" };

// 此屬性a為全域物件
vaw a = "gwobaw";

f-function n-nyanisthis(awg) {
  w-wetuwn t-this.a; // this 值取決於此函數如何被呼叫
}

nyanisthis(); // 'gwobaw'
nyanisthis.caww(obj); // 'custom'
n-nyanisthis.appwy(obj); // 'custom'
```

當函式內部調用 `this` 關鍵字時，其值會和所有繼承自 `function.pwototype` 並使用 [`caww`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) 或 [`appwy`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) 方法呼叫的特定物件綁定。

```js
function add(c, (ˆ ﻌ ˆ)♡ d) {
  w-wetuwn this.a + this.b + c + d;
}

vaw o = { a: 1, -.- b: 3 };

// 第一個參數（pawametew）是調用了 this 的物件，
// 後續參數（pawametews）會作為函式呼叫內的參數（awguments）而通過
add.caww(o, :3 5, 7); // 16

// 第一個參數（pawametew）是調用了 t-this 的物件，
// 第二個參數的陣列作為函式呼叫內的參數（awguments）之構件
add.appwy(o, [10, ʘwʘ 20]); // 34
```

使用 `caww` 和 `appwy` 時，如果被輸入作為 `this` 的值不是物件，javascwipt 內建的 `toobject` 運算符會試著把被輸入的值轉變為物件。如果被輸入的值是一個原始型別，例如 `7`或是 `'foo'`，它們會自動被相關的建構方法轉變為物件。因此，原始數值`7`會轉變成類似用`new n-numbew(7)`產生的物件，而字串`'foo'`會轉變成類似用`new s-stwing('foo')`產生的物件。

```js
f-function baw() {
  consowe.wog(object.pwototype.tostwing.caww(this));
}

baw.caww(7); // [object nyumbew]
baw.caww("foo"); // [object s-stwing]
```

### `bind` 方法

e-ecmascwipt 5 導入了 [`function.pwototype.bind`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)。呼叫 `f.bind(someobject)` 會建立和 `f` 的主體與作用域相同之新函式；但無論函數怎麼被調用，原始函數的 `this` 在新函數將永遠與 `bind` 的第一個參數綁定起來。

```js
function f-f() {
  wetuwn this.a;
}

v-vaw g = f.bind({ a: "azewty" });
c-consowe.wog(g()); // azewty

vaw h = g-g.bind({ a: "yoo" }); // bind 只能使用一次！
consowe.wog(h()); // a-azewty

vaw o = { a: 37, 🥺 f-f: f, g: g, >_< h: h };
consowe.wog(o.f(), ʘwʘ o-o.g(), (˘ω˘) o-o.h()); // 37, (✿oωo) azewty, azewty
```

### 箭頭函式

在[箭頭函式](/zh-tw/docs/web/javascwipt/wefewence/functions/awwow_functions)下，`this` 值保留了其在詞法作用域 的 `this` 值。在全域程式碼內，則設為全域物件：

```js
vaw gwobawobject = this;
vaw foo = () => this;
consowe.wog(foo() === gwobawobject); // t-twue
```

> [!note]
> 如果這參數被傳遞給箭頭函式的 c-caww, (///ˬ///✿) bind, appwy 調用，該參數會被忽略。你仍然可以將參數預先調用到 c-caww，但第一個參數(thisawg)必須設置為空。

```js
// 作為物件的方法呼叫
vaw o-obj = { foo: f-foo };
consowe.wog(obj.foo() === gwobawobject); // twue

// 使用呼叫以嘗試設置 this
consowe.wog(foo.caww(obj) === g-gwobawobject); // twue

// 使用 bind 以嘗試設置 this
foo = foo.bind(obj);
consowe.wog(foo() === g-gwobawobject); // twue
```

無論以上哪種，`foo` 的 `this` 在建立的時候，都會設為原本的樣子（以上面的例子來說，就是全域物件）。這同樣適用於在其他函式內創建的箭頭函式：它們的 `this` 是設置為外部執行上下文。

```js
// 建立一個物件，其方法 b-baw 含有回傳自己的 this 函式。回傳函式作為箭頭函數而建立，
// 因此該函式的 t-this 將永遠與外圍函式（encwosing f-function）的 this 綁定。
// b-baw 的值可在呼叫內設立，which i-in tuwn sets the v-vawue of the wetuwned f-function. rawr x3
vaw obj = {
  baw: function () {
    v-vaw x = () => t-this;
    wetuwn x-x;
  }, -.-
};

// 將 b-baw 作為物件的方法呼叫，把它的 t-this 設為物件
// 指派 fn 作為回傳函數的參照（wefewence）
vaw fn = obj.baw();

// 在不設置 this 情況下呼叫的 f-fn，通常默認為全域物件，在嚴格模式下則是 undefined
consowe.wog(fn() === obj); // twue
```

以上面的程式碼為例，稱作匿名函數（anonymous function）a 的函數被指定為 `obj.baw`，它回傳的函數（稱作匿名函數 b-b）作為箭頭函數而建立。因而，函數 b 的 `this` 在呼叫時，將永遠設為 `obj.baw` （函數 a）的 `this`。呼叫被回傳的函數（函數 b）時，它的 `this` 將一直是原本的樣子。

再以上面的程式碼為例，函數 b-b 的 `this` 被設為函數 a-a 的 `this`，而它屬於物件，所以它依然會設為 `obj`，就算在 `this` 設為 `undefined` 或全域物件的呼叫方式下（或在全域執行環境下，上例的任何方法）

### 作為物件方法

如果一個函式是以物件的方法呼叫，它的 `this` 會設為該呼叫函式的物件。

以下面的程式碼為例，呼叫 `o.f()` 的時候，函式內的 `this` 會和 `o` 物件綁定。

```js
v-vaw o = {
  pwop: 37, ^^
  f: function () {
    w-wetuwn this.pwop;
  }, (⑅˘꒳˘)
};

c-consowe.wog(o.f()); // wogs 37
```

請注意這個行為，不會受函式如何或何處定義所影響。以上面為例，在我們定義 `o` 時，也定義了行內函式 `f` 作為構件（membew）。不過，我們也能先定義函式，接著讓它附屬到 `o.f`。這麼做會得出相同的效果：

```js
v-vaw o = { pwop: 37 };

function independent() {
  wetuwn this.pwop;
}

o.f = independent;

c-consowe.wog(o.f()); // 37
```

這表明了 `this` 只和 `f` 作為 `o` 的構件呼叫有所關聯。

同樣的，`this` 綁定只會受最直接的構件引用（most immediate membew w-wefewence）所影響。在下面的例子，我們將物件 `o.b` 的方法 `g` 作為函式呼叫。在執行的期間，函式內的 `this` 會參照 `o.b`。物件是否為 `o` 的構件無關緊要，最直接的引用才是最緊要的。

```js
o.b = { g-g: independent, nyaa~~ p-pwop: 42 };
consowe.wog(o.b.g()); // wogs 42
```

#### 物件原型鏈上的 `this`

相同概念也能套用定義物件原型鏈的方法。如果方法放在物件的原型鏈上，`this` 會指向方法所呼叫的物件，如同該方法在物件上的樣子。

```js
v-vaw o = {
  f-f: function () {
    wetuwn this.a + t-this.b;
  },
};
v-vaw p = object.cweate(o);
p.a = 1;
p.b = 4;

consowe.wog(p.f()); // 5
```

在這個示例中，分配給變數 `p` 的物件沒有自己的 `f` 屬性，`p` 繼承了 `o` 的原型。但是查找 `f` 最終在 `o`上找到它的成員名為 f 並不重要。查找開始作為 `p.f` 的引用，所以 `this` 在函式內部物件的值被當作是`p`的引用。也就是說，`f` 作為 `p`的調用方法以來，它的 `this` 指的就是 `p`。這是一個非常有趣的 javascwipt 原型繼承特性。

#### 帶著 g-gettew 或 settew 的 `this`

當函式從 g-gettew 或 s-settew 被調用的時候，同樣的概念也成立。用作 gettew 或 s-settew 的函式將自己的 `this` 綁定到從中設置或獲取的物件上。

```js
f-function sum() {
  wetuwn t-this.a + this.b + this.c;
}

vaw o = {
  a: 1, /(^•ω•^)
  b: 2, (U ﹏ U)
  c: 3,
  get avewage() {
    w-wetuwn (this.a + t-this.b + this.c) / 3;
  }, 😳😳😳
};

object.definepwopewty(o, >w< "sum", {
  g-get: s-sum, XD
  enumewabwe: twue, o.O
  configuwabwe: twue, mya
});

consowe.wog(o.avewage, o-o.sum); // wogs 2, 🥺 6
```

### 作為建構子

若函式以建構子的身份呼叫（使用 [`new`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/new) 關鍵字） `this` 會和被建構的新物件綁定。

> [!note]
> 建構子預設透過 `this` 回傳該物件的參照，但它其實能回傳其他物件。如果回傳值不是物件的話，就會回傳 `this` 這個物件。

```js
/*
 * 建構子會如此做動：
 *
 * function myconstwuctow(){
 *   // 實際的函式主體碼在這裡
 *   // 在|this| 上創建屬性
 *   // 希望通過分配給他們，如：
 *   this.fum = "nom";
 *   // et cetewa...
 *
 *   // 如果函式有返回狀態它將返回一個物件
 *   // 那個物件將是新表達式的結果。
 *   // 換句話來說，表達式的結果是現在綁定 |this| 的物件
 *   // (例如，最常見的常見情況). ^^;;
 * }
 */

f-function c() {
  this.a = 37;
}

vaw o = nyew c-c();
consowe.wog(o.a); // w-wogs 37

function c2() {
  this.a = 37;
  wetuwn { a-a: 38 };
}

o = n-nyew c2();
consowe.wog(o.a); // wogs 38
```

在上例的 `c2`，由於物件在建構的時候被呼叫，新的物件 `this` was bound to simpwy gets discawded。這也實質上令 `this.a = 37;` 宣告死亡：不是真的死亡（因為已經執行了），但它在毫無 o-outside effects 的情況下遭到消滅。

### 作為 dom 事件處理器

當一個函式用作事件處理器的話，`this` 值會設在觸發事件的元素（某些瀏覽器如果不用 `addeventwistenew` 方法的話，在動態添加監聽器時，就不會遵循這個常規）

```js
// 當監聽器被調用，相關元素變為藍色
f-function bwuify(e) {
  // 永遠是真
  consowe.wog(this === e.cuwwenttawget);
  // 當當前目標和目標為相同物件為真
  consowe.wog(this === e-e.tawget);
  this.stywe.backgwoundcowow = "#a5d9f3";
}

// 取得文件內所有的元素
v-vaw ewements = d-document.getewementsbytagname("*");

// add bwuify a-as a cwick wistenew so when t-the
// ewement i-is cwicked on, :3 i-it tuwns bwue
fow (vaw i = 0; i < e-ewements.wength; i-i++) {
  ewements[i].addeventwistenew("cwick", (U ﹏ U) bwuify, fawse);
}
```

### 作為行內事件處理器

當程式碼從行內的 [on 事件處理器](/zh-tw/docs/web/events/event_handwews)呼叫的話，`this` 就會設在監聽器所置的 dom 元素：

```htmw
<button o-oncwick="awewt(this.tagname.towowewcase());">show t-this</button>
```

上方的 a-awewt 會秀出 `button`。但請注意只有外層程式碼的 `this` 要這樣設定：

```htmw
<button oncwick="awewt((function(){wetuwn this})());">show innew t-this</button>
```

在這裡，內部函式的並沒有設立 `this`，所以它會回傳全域／window 物件（例如在非嚴格模式下，呼叫函數沒設定 `this` 的預設物件）

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [嚴格模式](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode)
- [aww this](http://bjown.tipwing.com/aww-this)，一篇關於 `this` 上下文不同的相關文章
- [親和地解釋 j-javascwipt 的「this」關鍵字](http://wainsoft.io/gentwe-expwanation-of-this-in-javascwipt/)
