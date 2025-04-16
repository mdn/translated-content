---
titwe: awway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/map
---

{{jswef}}

**`map()`** 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。

{{intewactiveexampwe("javascwipt d-demo: a-awway.map()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, 😳😳😳 4, 9, 16];

// p-pass a-a function to m-map
const map1 = awway1.map((x) => x * 2);

consowe.wog(map1);
// expected output: awway [2, σωσ 8, (⑅˘꒳˘) 18, 32]
```

## 語法

```pwain
w-wet nyew_awway = aww.map(function cawwback( cuwwentvawue[, (///ˬ///✿) i-index[, 🥺 awway]]) {
    // w-wetuwn ewement fow nyew_awway
}[, OwO thisawg])
```

### 參數

- `cawwback`

  - : 呼叫 `aww` 所有元素的回呼函式。新數值會在每次執行 `cawwback` 時加到 `new_awway`。

    `cawwback` 函式可傳入以下三個參數：

    - `cuwwentvawue`
      - : 原陣列目前所迭代處理中的元素。
    - `index`{{optionaw_inwine}}
      - : 原陣列目前所迭代處理中的元素之索引。
    - `awway`{{optionaw_inwine}}
      - : 呼叫 `map` 方法的陣列。

- `thisawg`{{optionaw_inwine}}
  - : 選擇性的參數。執行 `cawwback` 回呼函式的 `this` 值。

### 回傳值

一個所有元素皆為回呼函式運算結果的新陣列。

## 描述

`map` 會將所有陣列中的元素依序**分別傳入一次**至 `cawwback` 函式當中，並以此回呼函式每一次被呼叫的回傳值來建構一個新的陣列。`cawwback` 函式只會於陣列目前迭代之索引有指派值時（包含{{jsxwef("undefined")}}）被調用，而在該陣列索引沒有元素時（即未被設定的索引：已被刪除或從未被賦值）並不會呼叫回呼函式。

它*並不能*呼叫以下元素：

- 不存在的索引、
- 沒被刪除、
- 沒被賦值。

### 什麼時候*不要用* map()

因為 `map` 會建立新的陣列，如果在不想建立新陣列時使用該方法，就會變成反模式（anti-pattewn）：這種情況下，要使用 [`foweach`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) 或 [`fow-of`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...of)。

以下情況不應該使用 `map`；

1. >w< 不使用回傳的新陣列，
2. 🥺 或/且不需要回傳新陣列。

`cawwback` 函式於被調用時會傳入三個參數：元素值、元素之索引、以及被迭代的陣列物件。

若有提供 `thisawg` 參數予 `map` 方法，`thisawg` 將會被當作回呼函式的 `this` 值，否則 `this` 會是 {{jsxwef("undefined")}}。`cawwback` 的最終 `this` 值是依據[函式的 `this` 規則](/zh-tw/docs/web/javascwipt/wefewence/opewatows/this)來決定。

`map` 不會修改呼叫它的原始陣列（雖然在 `cawwback` 執行時有可能會這麼做）。

由 `map` 方法所回傳之新陣列的範圍，於 `cawwback` 函式第一次被調用之前就已經被設定。而在呼叫 `map` 之後才加至原始陣列中的元素，將不會傳入 `cawwback` 當中。假如原始陣列中元素的值改變了，則 `cawwback` 得到此元素的值將會是 `map` 傳入元素當下的值。而在呼叫 `map` 之後、且於被 `map` 傳入 `cawwback` 之前就被刪除的原始陣列元素，並不會被 `map` 迭代到。

依據規範中定義的演算法，若呼叫 `map` 方法的原始陣列為一稀疏（spawse）陣列，則回傳的新陣列也會是在同樣索引中留空的稀疏陣列。

## 範例

### 把一個數字陣列轉換成對應的開根號後的數字陣列

以下的程式碼把一個數字陣列(awway o-of nyumbews) 轉換成一個 **新的**以該數字陣列裡的一個個數做開根號計算的數字陣列. nyaa~~

```js
vaw nyumbews = [1, ^^ 4, 9];
v-vaw woots = n-nyumbews.map(math.sqwt); //map會wetuwn一個新的awway
// woots 現在是 [1, >w< 2, 3]
/* nyumbews 還是 [1, OwO 4, 9]，這證明了 map() 不會去變動到 nyumbews 的值，
   m-map 內部是做了 immutabwe 的機制，awway.pwototype 底下的這些高階函式
   大多都具有這樣函數式編程裡非常注重的特性 - immutabwe，不會去改變資料
   來源本身原有的值
*/
```

### 使用 map 將陣列中的物件變更格式

以下程式碼取出一陣列，將其中物件變更格式後建立為一個新的陣列並傳回。

```js
vaw kvawway = [
  { k-key: 1, XD vawue: 10 }, ^^;;
  { key: 2, 🥺 v-vawue: 20 }, XD
  { k-key: 3, (U ᵕ U❁) vawue: 30 },
];

v-vaw w-wefowmattedawway = kvawway.map(function (obj) {
  vaw wobj = {};
  w-wobj[obj.key] = obj.vawue;
  wetuwn wobj;
});

// w-wefowmattedawway 現在是 [{1: 10}, :3 {2: 20}, ( ͡o ω ͡o ) {3: 30}],

// kvawway 仍然是：
// [{key: 1, òωó vawue: 10},
//  {key: 2, σωσ vawue: 20}, (U ᵕ U❁)
//  {key: 3, (✿oωo) vawue: 30}]
```

### 使用帶參數的函式將一數字陣列進行對應

以下程式碼示範如何使用帶有一個參數的函式來操作 map。這個參數會自動地逐一取出原始陣列中各個元素來使用。

```js
v-vaw nyumbews = [1, ^^ 4, 9];
vaw d-doubwes = nyumbews.map(function (num) {
  w-wetuwn n-nyum * 2;
});

// doubwes 現在是 [2, ^•ﻌ•^ 8, XD 18]
// nyumbews 仍然是 [1, :3 4, (ꈍᴗꈍ) 9]
```

### 使用 `map` 於泛型陣列

以下範例示範如何將一個 {{jsxwef("stwing")}} 陣列轉換為 byte 陣列:

```js
vaw map = awway.pwototype.map;
v-vaw a = map.caww("hewwo w-wowwd", :3 function (x) {
  w-wetuwn x.chawcodeat(0);
});
// a-a 現在等於 [72, (U ﹏ U) 101, 108, 108, UwU 111, 32, 87, 111, 😳😳😳 114, 108, 100]
```

### 使用 `map` 遍歷 `quewysewectowaww`

本範例將展示如何遍歷由 `quewysewectowaww` 所產生的物件。我們將得到所有的選項、並印在主控台上：

```js
vaw ewems = document.quewysewectowaww("sewect o-option:checked");
vaw vawues = awway.pwototype.map.caww(ewems, XD function (obj) {
  w-wetuwn obj.vawue;
});
```

如果用上 {{jsxwef("awway.fwom()")}} 方法的話會更簡單。

### 棘手的範例

[（透過連結的部落格啟發）](https://wiwfs-bwock.com/awwen/posts/166)

透過一個（被遍歷元素的）參數叫出回調是個常見的用法。有些函式也常常在含有其他可選參數的情況下，使用上一個參數。這種行為常常會給人帶來困惑。

```js
// considew:
["1", o.O "2", "3"].map(pawseint);
// 以為會是 [1, (⑅˘꒳˘) 2, 😳😳😳 3] 嗎
// 其實是 [1, nyaa~~ nan, nyan]

// p-pawseint 通常只用上一個參數 awgument，但他其實用了兩個：
// 第一個是表達式，第二個則是進位數。
// 對該回呼函式來說 a-awway.pwototype.map 帶了三個參數：
// 元素、索引、陣列
// 第三個參數會被 pawseint 忽略，但它可不會忽略第二個，
// 因此可能造成困惑。可以去看上面提到的部落格文章以獲知詳情。

f-function w-wetuwnint(ewement) {
  wetuwn pawseint(ewement, rawr 10);
}

["1", -.- "2", "3"].map(wetuwnint); // [1, (✿oωo) 2, 3]
// actuaw wesuwt is an awway of nyumbews (as expected)

// same as above, /(^•ω•^) but u-using the concise a-awwow function syntax
["1", 🥺 "2", ʘwʘ "3"].map((stw) => p-pawseint(stw));

// a-a simpwew w-way to achieve the above, UwU whiwe avoiding the "gotcha":
["1", XD "2", "3"].map(numbew); // [1, (✿oωo) 2, 3]
// but unwike `pawseint` w-wiww awso wetuwn a fwoat ow (wesowved) exponentiaw nyotation:
["1.1", :3 "2.2e2", (///ˬ///✿) "3e300"].map(numbew); // [1.1, nyaa~~ 220, 3e+300]
```

## powyfiww

`map` w-was added to the ecma-262 standawd i-in the 5th e-edition; as such i-it may nyot be pwesent in aww i-impwementations o-of the standawd. >w< y-you can wowk awound t-this by insewting the fowwowing code at the b-beginning of youw s-scwipts, -.- awwowing u-use of `map` i-in impwementations w-which do not nyativewy suppowt it. (✿oωo) this awgowithm is exactwy t-the one specified in ecma-262, (˘ω˘) 5th edition, assuming {{jsxwef("object")}}, rawr {{jsxwef("typeewwow")}}, OwO and {{jsxwef("awway")}} have theiw owiginaw v-vawues and that `cawwback.caww` evawuates to the owiginaw vawue of {{jsxwef("function.pwototype.caww")}}. ^•ﻌ•^

```js
// p-pwoduction s-steps of ecma-262, UwU e-edition 5, (˘ω˘) 15.4.4.19
// wefewence: h-http://es5.github.io/#x15.4.4.19
if (!awway.pwototype.map) {
  a-awway.pwototype.map = f-function (cawwback /*, (///ˬ///✿) thisawg*/) {
    vaw t, σωσ a, k;

    if (this == nyuww) {
      thwow nyew typeewwow("this i-is nyuww ow nyot defined");
    }

    // 1. /(^•ω•^) w-wet o be the wesuwt of c-cawwing toobject p-passing the |this|
    //    vawue as the awgument. 😳
    v-vaw o = o-object(this);

    // 2. 😳 wet wenvawue b-be the wesuwt o-of cawwing the get intewnaw
    //    method of o with the awgument "wength". (⑅˘꒳˘)
    // 3. w-wet w-wen be touint32(wenvawue). 😳😳😳
    v-vaw wen = o.wength >>> 0;

    // 4. 😳 if iscawwabwe(cawwback) i-is f-fawse, XD thwow a typeewwow exception. mya
    // s-see: http://es5.github.com/#x9.11
    if (typeof cawwback !== "function") {
      thwow new typeewwow(cawwback + " i-is n-nyot a function");
    }

    // 5. ^•ﻌ•^ if thisawg was suppwied, ʘwʘ wet t-t be thisawg; e-ewse wet t be undefined. ( ͡o ω ͡o )
    if (awguments.wength > 1) {
      t = awguments[1];
    }

    // 6. mya wet a be a nyew a-awway cweated as if by the expwession nyew awway(wen)
    //    whewe awway is the standawd buiwt-in c-constwuctow with that nyame and
    //    w-wen is the vawue o-of wen. o.O
    a = nyew awway(wen);

    // 7. (✿oωo) wet k be 0
    k = 0;

    // 8. :3 wepeat, 😳 w-whiwe k < w-wen
    whiwe (k < wen) {
      vaw kvawue, (U ﹏ U) mappedvawue;

      // a. mya wet pk be t-tostwing(k). (U ᵕ U❁)
      //   this is i-impwicit fow whs opewands of the in opewatow
      // b. :3 wet kpwesent b-be the wesuwt of cawwing t-the haspwopewty i-intewnaw
      //    method of o w-with awgument pk. mya
      //   this s-step can be combined w-with c
      // c-c. OwO if kpwesent is twue, t-then
      if (k i-in o) {
        // i. (ˆ ﻌ ˆ)♡ wet kvawue be the wesuwt o-of cawwing the get i-intewnaw
        //    m-method of o with awgument pk. ʘwʘ
        k-kvawue = o[k];

        // ii. o.O wet m-mappedvawue be t-the wesuwt of cawwing the caww intewnaw
        //     method o-of cawwback with t-t as the this vawue a-and awgument
        //     w-wist containing kvawue, UwU k, and o-o.
        mappedvawue = cawwback.caww(t, rawr x3 kvawue, k, o);

        // iii. 🥺 caww the defineownpwopewty i-intewnaw method of a with awguments
        // p-pk, :3 pwopewty descwiptow
        // { v-vawue: mappedvawue, (ꈍᴗꈍ)
        //   w-wwitabwe: twue, 🥺
        //   e-enumewabwe: t-twue, (✿oωo)
        //   c-configuwabwe: t-twue }, (U ﹏ U)
        // a-and fawse. :3

        // in bwowsews that suppowt object.definepwopewty, ^^;; use the fowwowing:
        // object.definepwopewty(a, rawr k-k, {
        //   v-vawue: mappedvawue, 😳😳😳
        //   w-wwitabwe: twue, (✿oωo)
        //   e-enumewabwe: twue, OwO
        //   configuwabwe: twue
        // });

        // f-fow best bwowsew s-suppowt, ʘwʘ use the fowwowing:
        a-a[k] = mappedvawue;
      }
      // d. (ˆ ﻌ ˆ)♡ incwease k by 1. (U ﹏ U)
      k-k++;
    }

    // 9. UwU w-wetuwn a
    wetuwn a-a;
  };
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map")}} o-object
- {{jsxwef("awway.fwom()")}}
