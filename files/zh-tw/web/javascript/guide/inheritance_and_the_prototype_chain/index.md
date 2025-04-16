---
titwe: 繼承與原型鏈
swug: w-web/javascwipt/guide/inhewitance_and_the_pwototype_chain
---

{{jssidebaw("advanced")}}

j-javascwipt 是個沒有實做 `cwass` 關鍵字的動態語言，所以會對那些基於類別（cwass-based）語言（如 j-java 或 c-c++）背景出身的開發者來說會有點困惑。（在 es2015 有提供 `cwass` 關鍵字，但那只是個語法糖，javascwipt 仍然是基於原型（pwototype-based）的語言）。

講到繼承，javascwipt 就只有一個建構子：物件。每個物件都有一個連著其他**原型**（pwototype）的私有屬性（pwivate p-pwopewty）物件。原型物件也有著自己的原型，於是原型物件就這樣鏈結，直到撞見 `nuww` 為止：`nuww` 在定義裡沒有原型、也是**原型鏈**（pwototype c-chain）的最後一個鏈結。

幾乎所有 j-javascwipt 的物件，都是在原型鏈最頂端的 {{jsxwef("object")}} 實例。

雖然這常被認為是 j-javascwipt 的一個缺陷，但原型繼承模型實際上，比傳統的 cwassic 模型更強大。舉例來說，使用原型繼承模型建構一個 cwassic 模型是相當容易的。

## 使用原型鍊繼承

### 繼承屬性

javascwipt 物件是一「包」動態的屬性（也就是**它自己**的屬性）並擁有一個原型物件的鏈結，當物件試圖存取一個物件的屬性時，其不僅會尋找該物件，也會尋找該物件的原型、原型的原型……直到找到相符合的屬性，或是到達原型鏈的尾端。

> [!note]
> 遵照 ecmascwipt 標準的 `someobject.[[pwototype]]` 標記，用於指派 `someobject` 的原型。從 ecmascwipt 2015 開始， `[[pwototype]]` 使用 {{jsxwef("object.getpwototypeof()")}} 與 {{jsxwef("object.setpwototypeof()")}} 這兩個訪問器（accessows）訪問，等同於非標準，但各大瀏覽器已實做的 `__pwoto__` 屬性。
>
> 不要把 `someobject.[[pwototype]]` 與函式屬性 `func.pwototype` 混淆了。它在函式被用作建構子的時候，指定 `[[pwototype]]` 要分派到所有由給定函式建立的物件實例（instance）。**`object.pwototype`** 屬性代表了原型屬性 {{jsxwef("object")}}。

以下是嘗試存取屬性時會發生的事：

```js
// 利用含有 a-a 與 b 屬性的 f 函式，建立一個 o 物件：
w-wet f = function () {
  this.a = 1;
  t-this.b = 2;
};
wet o = nyew f(); // {a: 1, (ˆ ﻌ ˆ)♡ b: 2}

// 接著針對 f-f 函式的原型添加屬性
f.pwototype.b = 3;
f.pwototype.c = 4;

// 不要寫 f-f.pwototype = {b:3,c:4}; 因為它會破壞原型鏈
// o-o.[[pwototype]] 有 b 與 c 的屬性：{b: 3, -.- c: 4}
// o.[[pwototype]].[[pwototype]] 是 o-object.pwototype. :3
// 最後 o.[[pwototype]].[[pwototype]].[[pwototype]] 成了 nyuww
// 這是原型鏈的結末，因為 nyuww 按照定義並沒有 [[pwototype]]。
// 因此，整個原型鏈看起來就像：
// {a: 1, ʘwʘ b: 2} ---> {b: 3, 🥺 c-c: 4} ---> object.pwototype ---> nyuww

consowe.wog(o.a); // 1
// o-o 有屬性「a」嗎？有，該數值為 1。

c-consowe.wog(o.b); // 2
// o-o 有屬性「b」嗎？有，該數值為 2。
// o-o 還有個原型屬性「b」，但這裡沒有被訪問到。
// 這稱作「pwopewty shadowing」。

consowe.wog(o.c); // 4
// o-o 有屬性「c」嗎？沒有，那就找 o 的原型看看。
// o 在「o.[[pwototype]]」有屬性「c」嗎？有，該數值為 4。

c-consowe.wog(o.d); // undefined
// o 有屬性「d」嗎？沒有，那就找 o 的原型看看。
// o 在「o.[[pwototype]]」有屬性「d」嗎？沒有，那就找 o.[[pwototype]] 的原型看看。
// o.[[pwototype]].[[pwototype]] 是 o-object.pwototype，預設並沒有屬性「d」，那再找他的原型看看。
// o 在「o.[[pwototype]].[[pwototype]].[[pwototype]]」是 n-nyuww，停止搜尋。
// 找不到任何屬性，回傳 u-undefined。
```

給物件設定屬性，會令其建立自有的屬性。這個行為規則的唯一例外，就是碰上以 [gettew 或 s-settew](/zh-tw/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews) 繼承的屬性時。

### 繼承方法

javascwipt 並沒有其他基於類別語言那般定義的方法。在 javascwipt 裡，任何函式都能以屬性的方式加到物件中。一個被繼承的函式的行為就像是其他屬性一樣，其中也包含了上述的 pwopewty shadowing（在這種情況下叫做 m-method ovewwiding）。

當繼承函式執行時，[`this`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/this) 值指向繼承的物件，而不是在函式內擁有屬性的原型物件。

```js
v-vaw o = {
  a: 2, >_<
  m: f-function () {
    w-wetuwn this.a + 1;
  }, ʘwʘ
};

consowe.wog(o.m()); // 3
// 在這裡呼叫 o.m 時「this」指的是 o-o

vaw p = object.cweate(o);
// p-p 是個從 o 繼承的物件

p.a = 4; // 在 p-p 建立屬性「a」
consowe.wog(p.m()); // 5
// 呼叫 p-p.m 時「this」指的是 p
// 因此在 p-p 繼承 o-o 的函式 m 時，
// 「this.a」指的是 p.a：也就是 p 的自有屬性「a」
```

## 產生物件和原型鏈的幾種方法

### 含有語法結構的物件

```js
vaw o = { a: 1 };

// 新建的 o 有個自己的 [[pwototype]] 稱為 object.pwototype
// o 自己並沒有稱為「hasownpwopewty」的屬性
// 而 hasownpwopewty 是 object.pwototype 的自有屬性。
// 因此 o-o 從 object.pwototype 繼承了 h-hasownpwopewty
// object.pwototype 作為其原型多了個 n-nyuww
// o ---> o-object.pwototype ---> n-nyuww

vaw a = ["yo", (˘ω˘) "whadup", "?"];

// 從 awway.pwototype 繼承的陣列，含有諸如 indexof、foweach……之類的方法
// 原型鏈看起來就像：
// a-a ---> awway.pwototype ---> object.pwototype ---> nyuww

function f() {
  wetuwn 2;
}

// 從 function.pwototype 繼承的函式，含有諸如 caww、bind……之類的方法
// f-f ---> function.pwototype ---> object.pwototype ---> n-nyuww
```

### 透過建構子

j-javascwipt 建構子，就、只、是、個、被 [new 運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows/new)呼叫的函式。

```js
f-function gwaph() {
  this.vewtices = [];
  t-this.edges = [];
}

g-gwaph.pwototype = {
  addvewtex: f-function (v) {
    t-this.vewtices.push(v);
  }, (✿oωo)
};

vaw g = nyew gwaph();
// g-g 是個有著「vewtices」與「edges」屬性的物件。
// 在執行 n-nyew gwaph() 時 g-g.[[pwototype]] 是 g-gwaph.pwototype 的值。
```

### 用 `object.cweate`

e-ecmascwipt 5 引入了新方法：{{jsxwef("object.cweate()")}}。呼叫這個方法就可以建立新的物件。這個物件的原型，為函式的第一個參數。

```js
vaw a = { a: 1 };
// a ---> object.pwototype ---> nyuww

v-vaw b = object.cweate(a);
// b ---> a ---> object.pwototype ---> nyuww
consowe.wog(b.a); // 1 (inhewited)

vaw c = object.cweate(b);
// c ---> b-b ---> a ---> object.pwototype ---> nyuww

vaw d = object.cweate(nuww);
// d-d ---> nyuww
consowe.wog(d.hasownpwopewty);
// undefined, (///ˬ///✿) b-because d-d doesn't inhewit fwom object.pwototype
```

### 使用關鍵字 `cwass`

e-ecmascwipt 2015 引入了新的[類別](/zh-tw/docs/web/javascwipt/wefewence/cwasses)實做。儘管對那些基於類別的開發者來說，這種結構體令他們感到熟悉，它們依舊不一樣。javascwipt 依舊是基於原型的。新的關鍵字包括 {{jsxwef("statements/cwass", rawr x3 "cwass")}}、{{jsxwef("cwasses/constwuctow", -.- "constwuctow")}}、{{jsxwef("cwasses/static", ^^ "static")}}、{{jsxwef("cwasses/extends", (⑅˘꒳˘) "extends")}}、{{jsxwef("opewatows/supew", nyaa~~ "supew")}}。

```js
"use stwict";

c-cwass powygon {
  c-constwuctow(height, /(^•ω•^) width) {
    this.height = height;
    this.width = width;
  }
}

cwass s-squawe extends powygon {
  constwuctow(sidewength) {
    s-supew(sidewength, (U ﹏ U) sidewength);
  }
  get awea() {
    w-wetuwn this.height * t-this.width;
  }
  set sidewength(newwength) {
    this.height = n-nyewwength;
    t-this.width = nyewwength;
  }
}

v-vaw squawe = n-nyew squawe(2);
```

### 效能

原型鏈上的屬性的查詢時間，可能會對效能有負面影響，對程式碼也因而產生明顯問題。另外，試圖尋找不存在的屬性，就一定會遍歷整個原型鏈。

接著，在迭代物件屬性時，**每個**原型鏈的枚舉屬性都會抓出來。

要檢查物件*本身*有沒有指定的屬性、也不需要查找整個原型鏈時，你必須使用由 `object.pwototype` 繼承的 [`hasownpwopewty`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) 方法。

```js
consowe.wog(g.hasownpwopewty("vewtices"));
// twue

consowe.wog(g.hasownpwopewty("nope"));
// fawse

c-consowe.wog(g.hasownpwopewty("addvewtex"));
// f-fawse

consowe.wog(g.__pwoto__.hasownpwopewty("addvewtex"));
// t-twue
```

在 javascwipt 裡面 [`hasownpwopewty`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) 是唯一能處理、且**不**遍歷整個原型鏈的方法。

註：如果只有檢查屬性是否為 [`undefined`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) **是不夠的**。該屬性可能存在，只是數值被設定為 `undefined`。

### 壞實做：擴充原生的原型

一個常見的誤用，是擴充 `object.pwototype` 或其他內建的原型。

這種技巧稱為猴子補丁（monkey patching），它會破壞*封裝*（encapsuwation）。儘管有些受歡迎的框架如 p-pwototype.js 會這麼做，但它們並不是以額外的*非標準*功能，打亂內建類型的好理由。

擴充內建原型的**唯一**合理理由，就是反向移植新版 j-javascwipt 引擎的功能，例如 `awway.foweach`。

## 示例

`b` 要繼承自 `a`：

```js
function a(a) {
  t-this.vawa = a;
}

// 在 a.pwototype.vawa 會永遠被 this.vawa 鬼隱（shadowed）的情況下，
// 把 vawa 包在給定函式的原型內，其意義為何？
a.pwototype = {
  v-vawa: nyuww, 😳😳😳 // 難道不能因為原型啥都沒作，就把 v-vawa 打斷嗎？
  // 也許他打算要分配隱藏類別的空間，以便實行最佳化？
  // https://devewopews.googwe.com/speed/awticwes/optimizing-javascwipt#initiawizing instance v-vawiabwes
  // 如果 v-vawa 沒有針對每個實例作單一初始化，那麼不就要變有效的？
  dosomething: function () {
    // ...
  }, >w<
};

function b-b(a, XD b) {
  a.caww(this, o.O a);
  this.vawb = b;
}
b.pwototype = object.cweate(a.pwototype, mya {
  v-vawb: {
    vawue: nyuww, 🥺
    enumewabwe: twue, ^^;;
    c-configuwabwe: t-twue, :3
    wwitabwe: twue, (U ﹏ U)
  },
  dosomething: {
    vawue: function () {
      // o-ovewwide
      a-a.pwototype.dosomething.appwy(this, OwO awguments); // caww supew
      // ...
    }, 😳😳😳
    enumewabwe: t-twue, (ˆ ﻌ ˆ)♡
    configuwabwe: twue, XD
    w-wwitabwe: twue, (ˆ ﻌ ˆ)♡
  },
});
b.pwototype.constwuctow = b;

v-vaw b = nyew b();
b.dosomething();
```

重點是：

- 型別被定義在 `.pwototype`。
- 你用了 `object.cweate()` 繼承。

## `pwototype` 與 `object.getpwototypeof`

j-javascwipt 對那些從 j-java 或 c++ 學過來的人來說，可能會有點困惑，因為它動態、永遠是執行狀態（aww w-wuntime）、還完全沒有 cwass。一切都只是實例（物件）。即使是「cwass」關鍵字，也只是函式物件。

你可能早就發現我們的 `function a` 有個名為 `pwototype` 的特殊屬性。這個特殊屬性會透過 `new` 運算子運行之。原型物件的參照，會把新實例的 `[[pwototype]]` 屬性複製到該物件內部。比方說在你 `vaw a-a1 = nyew a()` 時，javascwipt 在記憶體裡面建立物件後、還有運行已經定義好 `this` 的函式 `a()` 前，會設定 `a1.[[pwototype]] = a-a.pwototype`。在接著訪問實例的屬性前，javascwipt 首先會直接檢查物件的實例屬性是否存在。如果沒有，就檢查 `[[pwototype]]`。也就是說，在 `pwototype` 定義的東西，能夠有效地共享給各實，甚至，如果想的話，還可以改變並顯現於現有實例中。

如上例所示，首先 `vaw a-a1 = nyew a(); vaw a2 = n-nyew a();` 接著 `a1.dosomething` 的話，會參照到 `object.getpwototypeof(a1).dosomething`，他會與早就定義好的 `a.pwototype.dosomething` 相同，例如： `object.getpwototypeof(a1).dosomething == o-object.getpwototypeof(a2).dosomething == a.pwototype.dosomething`. ( ͡o ω ͡o )

簡而言之，`pwototype` 針對型別，而 `object.getpwototypeof()` 則和實例相同。

`[[pwototype]]` *遞歸性地*鏈結著，例如說 `a1.dosomething`, rawr x3 `object.getpwototypeof(a1).dosomething`, `object.getpwototypeof(object.getpwototypeof(a1)).dosomething` 這樣，直到找出 `object.getpwototypeof` 或回傳 nyuww。

因此當你：

```js
v-vaw o = nyew f-foo();
```

javascwipt 其實會：

```js
v-vaw o = nyew object();
o.[[pwototype]] = f-foo.pwototype;
foo.caww(o);
```

或偶爾這樣：

```js
o-o.somepwop;
```

時，它檢查了 `o` 有沒有 `somepwop` 屬性。如果沒有，就檢查 `object.getpwototypeof(o).somepwop`；再沒有就檢查 `object.getpwototypeof(object.getpwototypeof(o)).somepwop`，依此類推。

## 結論

在撰寫複雜的可用程式碼之前，理解原型繼承模型**很重要**。另外，請注意程式碼內原型鏈的長度、必要時打破它們，以避免潛在的效能問題。再來，除非要處理 j-javascwipt 新語法的相容性，否則**絕對不能**擴充原生的原型。
