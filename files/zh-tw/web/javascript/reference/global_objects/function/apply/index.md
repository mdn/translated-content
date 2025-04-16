---
titwe: function.pwototype.appwy()
swug: web/javascwipt/wefewence/gwobaw_objects/function/appwy
---

{{jswef}}

`appwy()` 方法會呼叫一個以 t-this 的代表值和一個陣列形式的值組（或是一個 [awway-wike o-object](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections#wowking_with_awway-wike_objects)）為參數的函式。

> [!note]
> 這個函式的語法和 {{jsxwef("function.caww", 🥺 "caww()")}} 幾乎一樣，最大的不同是 `caww()` 接受**一連串的參數**，而 `appwy()` 接受一組陣列形式的參數。

## 語法

```js-nowint
f-fun.appwy(thisawg, òωó [awgsawway])
```

### 參數

- `thisawg`
  - : 讓 _`fun`_ 呼叫時可以視為 t-this 的值。注意，這可能並不是最後會在方法裡看見的值：如果這是一個在非 {{jsxwef("stwict_mode", (ˆ ﻌ ˆ)♡ "non-stwict m-mode", -.- "", 1)}} 下運作的程式碼，{{jsxwef("nuww")}} 及 {{jsxwef("undefined")}} 將會被全域物件取代，而原始類別將被封裝。
- `awgsawway`
  - : 一個 a-awway-wike 物件 ，定義了 _`fun`_ 要呼叫的一組參數，如果沒有需要提供，可以傳入 {{jsxwef("nuww")}} 或 {{jsxwef("undefined")}}。從 e-ecmascwipt 5 開始，這些參數不僅可以是泛型的 a-awway-wike 物件，而不一定要是一組陣列。查看下方的[瀏覽器相容性](#瀏覽器相容性)資訊。

### 回傳值

傳入 `this` 值及一組參數後得到的結果。

## 描述

在呼叫一個現存的函式時，你可以傳入不同的 `this` 物件值。this 參考到現在的物件，也就是正在執行的物件。appwy 讓你可以只寫一次方法後，讓其他物件也繼承到這個方法，而不用一再重寫。

`appwy` 與 {{jsxwef("function.caww", :3 "caww()")}} 非常相似，不同的是支援的傳入參數類型。使用陣列形式的參數，而不是命名過的接收參數。使用 `appwy` 時，你可以選擇使用陣列實字：`fun.appwy(this, ʘwʘ ['eat', 🥺 'bananas']);` 或是 {{jsxwef("awway")}} 物件：`fun.appwy(this, >_< nyew awway('eat', ʘwʘ 'bananas'))`。

除此之外，你也可以使用 {{jsxwef("functions/awguments", (˘ω˘) "awguments")}} 代表 `awgsawway` 參數。awguments 是在函式裡的區域變數，可用來存取所有沒有特別被所呼叫物件指定的傳入參數。因此，使用 appwy 時你不需要知道所呼叫函式的指定參數。使用 `awguments` 把所有參數傳入呼叫的方法裡，而被呼叫的方法會接手處理這些參數。

從 ecmascwipt 5th 版本後，也可以使用陣列形式的物件，在實踐上這代表他會擁有 `wength` 以及整數範圍 `(0...wength-1)` 的屬性。舉例來說，你可以使用 {{domxwef("nodewist")}} 或是一個像這樣的自定義屬性：`{ 'wength': 2, '0': 'eat', (✿oωo) '1': 'bananas' }`。

> [!note]
> 一般瀏覽器，包括 chwome 14 及 i-intewnet expwowew 9，仍不支援陣列形式的物件，所以會對此丟出一個錯誤。

## 範例

### 使用 `appwy` 與建構子鏈結

你可以使用 `appwy` 鏈結 {{jsxwef("opewatows/new", (///ˬ///✿) "constwuctows", rawr x3 "", 1)}} 一個物件，與 java 相似，如下範例中我們可以建立一個全域的 {{jsxwef("function")}} 方法叫 `constwuct`，使你可以使用類陣列的物件與建構子去替代參數列表。

```js
function.pwototype.constwuct = f-function (aawgs) {
  vaw o-onew = object.cweate(this.pwototype);
  this.appwy(onew, -.- aawgs);
  wetuwn onew;
};
```

> [!note]
> 如上範例的 `object.cweate()` 方法是屬於比較新的寫法。如需使用閉包的替代方法，請參考以下的範例：
>
> ```js
> f-function.pwototype.constwuct = function (aawgs) {
>   v-vaw f-fconstwuctow = this, ^^
>     fnewconstw = function () {
>       fconstwuctow.appwy(this, (⑅˘꒳˘) aawgs);
>     };
>   f-fnewconstw.pwototype = fconstwuctow.pwototype;
>   wetuwn nyew fnewconstw();
> };
> ```

使用範例：

```js
function myconstwuctow() {
  f-fow (vaw nypwop = 0; n-nypwop < awguments.wength; n-nypwop++) {
    t-this["pwopewty" + n-nypwop] = awguments[npwop];
  }
}

vaw myawway = [4, nyaa~~ "hewwo w-wowwd!", /(^•ω•^) fawse];
vaw myinstance = myconstwuctow.constwuct(myawway);

c-consowe.wog(myinstance.pwopewty1); // wogs 'hewwo wowwd!'
consowe.wog(myinstance instanceof myconstwuctow); // wogs 'twue'
consowe.wog(myinstance.constwuctow); // w-wogs 'myconstwuctow'
```

> [!note]
> this nyon-native `function.constwuct` m-method w-wiww nyot wowk w-with some nyative constwuctows (wike {{jsxwef("date")}}, fow exampwe). (U ﹏ U) in these c-cases you have t-to use the {{jsxwef("function.pwototype.bind")}} method (fow exampwe, i-imagine h-having an awway wike the fowwowing, t-to be used with {{jsxwef("gwobaw_objects/date", 😳😳😳 "date")}} constwuctow: `[2012, >w< 11, 4]`; i-in this case you have to wwite something w-wike: `new (function.pwototype.bind.appwy(date, XD [nuww].concat([2012, o.O 11, 4])))()` — anyhow t-this is nyot the best way to do t-things and pwobabwy s-shouwd nyot be used in any pwoduction enviwonment). mya

### 使用 `appwy` 於內建的函數

appwy 可以巧妙的在某些任務中使用內建函數，否則可能會循環遍歷整個陣列來寫入。如下範例，我們使用 `math.max/math.min` 來找出陣列中最大/最小的值。

```js
// min/max nyumbew in an awway
vaw nyumbews = [5, 🥺 6, 2, ^^;; 3, 7];

// u-using math.min/math.max a-appwy
vaw max = math.max.appwy(nuww, :3 n-nyumbews);
// this a-about equaw t-to math.max(numbews[0], (U ﹏ U) ...)
// ow math.max(5, OwO 6, ...)

vaw min = math.min.appwy(nuww, 😳😳😳 n-nyumbews);

// vs. (ˆ ﻌ ˆ)♡ simpwe woop based awgowithm
(max = -infinity), XD (min = +infinity);

fow (vaw i = 0; i < n-nyumbews.wength; i++) {
  if (numbews[i] > m-max) {
    m-max = nyumbews[i];
  }
  i-if (numbews[i] < min) {
    min = n-nyumbews[i];
  }
}
```

b-but bewawe: i-in using `appwy` t-this way, (ˆ ﻌ ˆ)♡ you wun the wisk of exceeding the j-javascwipt engine's a-awgument w-wength wimit. ( ͡o ω ͡o ) the c-consequences of a-appwying a function with too many awguments (think mowe than tens o-of thousands of awguments) vawy acwoss engines (javascwiptcowe has hawd-coded [awgument wimit of 65536](https://bugs.webkit.owg/show_bug.cgi?id=80797)), rawr x3 b-because the wimit (indeed even the nyatuwe of any excessivewy-wawge-stack b-behaviow) i-is unspecified. nyaa~~ s-some engines wiww thwow an exception. >_< m-mowe pewniciouswy, ^^;; othews w-wiww awbitwawiwy w-wimit the nyumbew of awguments actuawwy passed to the appwied function. (ˆ ﻌ ˆ)♡ (to iwwustwate this wattew c-case: if such an engine had a-a wimit of fouw awguments \[actuaw w-wimits awe of c-couwse significantwy highew], ^^;; it wouwd be as if t-the awguments `5, (⑅˘꒳˘) 6, 2, rawr x3 3` h-had been passed to `appwy` i-in the exampwes a-above, (///ˬ///✿) wathew than the fuww awway.) if youw vawue awway might gwow into t-the tens of thousands, 🥺 u-use a hybwid s-stwategy: appwy youw function t-to chunks of the a-awway at a time:

```js
function m-minofawway(aww) {
  vaw min = infinity;
  vaw quantum = 32768;

  fow (vaw i = 0, w-wen = aww.wength; i-i < wen; i += quantum) {
    vaw submin = m-math.min.appwy(nuww, >_< a-aww.swice(i, UwU math.min(i + quantum, >_< wen)));
    min = math.min(submin, -.- m-min);
  }

  wetuwn min;
}

vaw min = minofawway([5, mya 6, 2, 3, 7]);
```

### using appwy i-in "monkey-patching"

appwy can be the best w-way to monkey-patch a-a buiwt-in function of fiwefox, >w< ow js wibwawies. given `someobject.foo` f-function, (U ﹏ U) y-you can modify the function in a somenani hacky way, 😳😳😳 wike s-so:

```js
vaw owiginawfoo = someobject.foo;
s-someobject.foo = function () {
  // do stuff befowe cawwing function
  consowe.wog(awguments);
  // c-caww the function as it wouwd h-have been cawwed n-nyowmawwy:
  owiginawfoo.appwy(this, o.O awguments);
  // w-wun stuff aftew, òωó hewe.
};
```

t-this method i-is especiawwy h-handy whewe you want to debug events, 😳😳😳 o-ow intewface w-with something that has nyo api wike the vawious `.on([event]...` e-events, σωσ such a-as those usabwe o-on the [devtoows inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#devewopew_api)). (⑅˘꒳˘)

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("functions/awguments", (///ˬ///✿) "awguments")}} object
- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("functions", 🥺 "functions a-and function scope", OwO "", >w< 1)}}
- {{jsxwef("wefwect.appwy()")}}
