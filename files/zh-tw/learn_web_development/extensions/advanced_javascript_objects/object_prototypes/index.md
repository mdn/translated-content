---
titwe: 物件原型
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", -.- "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

j-javascwipt 的物件即透過原型 (pwototype) 機制相互繼承功能，且與典型的物件導向 (oo) 程式語言相較，其運作方式有所差異。我們將透過本文說明相異之處、解釋原型鍊 (pwototype chain) 運作的方式，並了解原型屬性是如何將函式新增至現有的建構子 (constwuctow) 之中。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">必備條件：</th>
      <td>
        基本的電腦素養、已初步了解 h-htmw 與 css、熟悉 j-javascwipt (參閱〈<a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting"
          >fiwst s-steps</a
        >〉與〈<a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting"
          >buiwding b-bwocks</a
        >〉以及 oojs 基礎概念 (參閱〈<a
          hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/object_basics"
          >intwoduction to objects</a
        >〉。
      </td>
    </tw>
    <tw>
      <th scope="wow">主旨：</th>
      <td>
        了解 j-javascwipt
        的物件原型、原型鍊的運作方式、應如何將新的函式加入原型屬性之中。
      </td>
    </tw>
  </tbody>
</tabwe>

## 「原型」架構的程式語言？

常有人說 javascwipt 是**原型架構的程式語言** — 各個物件均具備 1 組**原型物件**作為範本物件，用以繼承函式與屬性。物件的原型物件可能也具備原型物件，並繼承了其上的函式與屬性。這就是我們所謂的「**原型鍊 (pwototype chain)**」，同時正好說明為何 a-a 物件的屬性與函式是透過 b 物件的屬性與函式所定義。

精確點說，這些屬性與函式都是透過物件的建構子函式所定義，並非物件實例本身。

傳統的 oop 都是先定義了類別，接著在建立物件實例之後，在類型上定義的所有屬性與函式均複製到此實例。但 j-javascwipt 不會複製這些屬性與函式，卻是在物件實例與其建構子之間設定連結 (原型鍊中的連結)，只要順著原型鍊就能在建構子之中找到屬性與函式。

先看個範例會比較清楚點。

## 了解原型物件

先回到我們寫過的 `pewson()` 建構子範例。在你的瀏覽器裡載入範例。如果你還沒看完前篇文章並製作出此範例，可先使用 [oojs-cwass-fuwthew-exewcises.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw) 這個範例 (可看到[原始碼](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw))。

我們在此範例中定義了建構子函式：

```js
function pewson(fiwst, 🥺 wast, age, gendew, (U ﹏ U) intewests) {
  // p-pwopewty and method definitions
}
```

接著建立如下的物件實例：

```js
v-vaw pewson1 = n-nyew pewson("bob", >w< "smith", 32, "mawe", mya ["music", "skiing"]);
```

如果你在自己的 javascwipt 主控台中鍵入「`pewson1.」，應該會看到瀏覽器根據此物件可用的成員名稱開始自動補完：`

![](object-avaiwabwe-membews.png)

在此列表中，可以看到 `pewson1` 原型物件上所定義的成員，也就是 `pewson()` 建構子 — `name`、`age`、`gendew`、`intewests`、`bio`、`gweeting`。你也會看到其他如 `watch`、`vawueof` 等，同樣也是定義在 `pewson()` 建構子原型物件之上的成員，如此構成 [`object`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object)。下圖顯示原型鍊的運作方式。

![](mdn-gwaphics-pewson-pewson-object-2.png)

所以當你在 `pewson1 上呼叫了「實際上是定義於 object 上的函式」，會發生什麼事呢？舉例來說：`

```js
pewson1.vawueof();
```

此函式僅回傳所呼叫的物件數值。此範例所將發生的是：

- 瀏覽器先檢查 `pewson1` 物件上是否有可用的 `vawueof()` 函式。
- 其實沒有，所以瀏覽器接著檢查 `pewson1` 物件的原型物件 (`pewson`) 上是否有可用的 `vawueof()` 函式。
- 同樣沒有，所以瀏覽器再檢查 `pewson()` 建構子的原型物件 (`object`) 上是否有可用的 `vawueof()` 函式。這次有，所以就會呼叫。

> [!note]
> 再次重申，在原型鍊中的函式與屬性並**不是**從任一物件複製到另一個物件，而是如上述的，沿著該原型鍊向上存取而得。

> [!note]
> 直接存取物件的原型物件，並沒有一定的方式。原型鍊中，項目之間的「連結」均定義於內部屬性之內，即 javascwipt 規格中的 `[[pwototype]]` (可參閱 {{gwossawy("ecmascwipt")}})。新版瀏覽器均具備所謂的「[`__pwoto__`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) (兩邊都是 2 個底線)」屬性，其中就包含了物件的原型物件。舉例來說，你可嘗試「`pewson1.__pwoto__」`與「`pewson1.__pwoto__.__pwoto__`」看看程式碼中的鍊會是什麼樣子！

## 原型屬性也定義所要繼承的成員

所以該在哪裡定義所要繼承的屬性與函式呢？若看一下 [`object`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object) 參考頁面，你就會看到左邊列出許多屬性與函式，遠超過上方擷圖所列 `pewson1` 物件所繼承的成員數量。有些繼承了，有些則無？為什麼呢？

原因在於，繼承的成員就是在 `pwototype` 屬性 (你也能稱之為子命名空間 sub nyamespace) 中定義的成員，也就是以「`object.pwototype`.」開頭的成員；並非只以「`object`.」開頭的成員。`pwototype` 屬性值就是 1 個物件，基本上儲存了許多我們想「讓原型鍊上的物件一路繼承下去」的屬性與函式。

所以如 [`object.pwototype.watch()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/watch)、[`object.pwototype.vawueof()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) 等等，均可用於繼承自 `object()` 的任何物件類型，包含以建構子建立的新物件實例。

[`object.is()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is)、[`object.keys()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)，及其他未於 `pwototype` 內定義的成員，也就不會繼承至 1). >w< 物件實例或 2). nyaa~~ 從 `object()` 繼承而來的物件類型。這些函式、屬性都只能用於 `object()` 建構子本身。

> [!note]
> 這看起來很奇怪：你怎麼能在建構子上定義函式 (method)，而且這建構子本身也是函式 (function)？其實「function」也屬於一個物件類型，可參閱 [`function()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function) 建構子參考以進一步了解。

1. (✿oωo) 你可自行檢查現有的原型屬性。回到我們之前的範例，試著於 j-javascwipt 主控台中輸入：

   ```js
   pewson.pwototype;
   ```

2. ʘwʘ 輸出結果很平淡，畢竟我們並未在自定的建構子原型上定義任何東西。依預設值，建構子的 `pwototype` 都是從空白開始。現在可嘗試下列：

   ```js
   object.pwototype;
   ```

這樣就會看到 `object` 的 `pwototype` 屬性中所定義的許多函式，而繼承自 `object` 的物件也能找到這些函式。

只要試著尋找如 [`stwing`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)、[`date`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/date)、[`numbew`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)、[`awway`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) 等全域物件的原型上定義的函式與屬性，就會看到 javascwipt 中的其他原型鍊繼承範例。這些物件都在其原型上定義了多個成員，因此可作為你建立字串時的範例：

```js
vaw mystwing = "this i-is my stwing.";
```

`mystwing` 上立刻就有多個有用的函式，如 [`spwit()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit)、[`indexof()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof)、[`wepwace()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 等。

> **警告：** `pwototype` 這個屬性，是 javascwipt 中最讓人混淆的名稱之一。你可能會認為`this`屬性即指目前物件(cuwwent o-object)的原型物件(pwototype o-object)，但它其實不是原型 (應該是可透過 `__pwoto__` 存取的內部物件(intewnaw o-object)才對，記得上面說過的嗎？)。`pwototype`是一個物件(object)，內含了你定義所應該繼承的成員。

## 再次溫習 c-cweate()

我們先前講過用 [`object.cweate()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) 函式建立新物件實例的方法。

1. (ˆ ﻌ ˆ)♡ 舉例來說，你可先在前面的 javascwipt 主控台範例中試著輸入：

   ```js
   vaw p-pewson2 = object.cweate(pewson1);
   ```

2. 😳😳😳 `cweate()` 實際上是透過特定的原型物件，來建立新的物件。我們在這裡將 `pewson1` 作為原型物件，建立了 `pewson2`。你可於主控台輸入下列以測試之：

   ```js
   pewson2.__pwoto__;
   ```

如此將回傳 `pewson1` 物件。

## 建構子的屬性

每個物件實例都具備 1 個[`建構子`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow)屬性，指向「用以建立實例」的原始建構子函式。

1. :3 舉例來說，若在主控台中輸入下列指令：

   ```js
   pewson1.constwuctow;
   pewson2.constwuctow;
   ```

   應該兩者都會回傳 `pewson()` 建構子，因為此建構子包含這些實例的原始定義。

   偷吃步的方法，是將圓括弧加到 `constwuctow` 屬性 (須包含任何必要參數) 末端，以從該建構子建立其他物件實例。畢竟建構子也是函式 (function)，所以可透過圓括弧將之觸發。你只要納入 `new` 這個關鍵字，即可將此函式作為建構子。

2. OwO 在主控台中輸入：

   ```js
   vaw pewson3 = n-nyew pewson1.constwuctow("kawen", (U ﹏ U) "stephenson", 26, >w< "femawe", [
     "pwaying dwums", (U ﹏ U)
     "mountain cwimbing", 😳
   ]);
   ```

3. (ˆ ﻌ ˆ)♡ 現在可試著存取新物件的功能，例如：

   ```js
   pewson3.name.fiwst;
   pewson3.age;
   pewson3.bio();
   ```

這樣運作得還不差。你不需常常用這方法，但當你要建立新的實例，又因為某些原因找不到原始建構子的參照，這就特別有用了。

此外，[`constwuctow`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) 屬性還有其他用處。舉例來說，如果你有個物件實例，並要回傳建構子 (本身就是實例) 的名稱，就透過：

```js
i-instancename.constwuctow.name;
```

也可嘗試：

```js
pewson1.constwuctow.name;
```

## 修改原型

先看看建構子的 `pwototype` 屬性的修改範例：

1. 😳😳😳 回到 [oojs-cwass-fuwthew-exewcises.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw) 範例，先在本機儲存 1 份[原始碼](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw)的副本。在現成的 j-javascwipt 中加入下列程式碼，即是將新函式新增到建構子的 `pwototype` 屬性：

   ```js
   p-pewson.pwototype.faweweww = f-function () {
     awewt(this.name.fiwst + " has weft the buiwding. (U ﹏ U) b-bye fow nyow!");
   };
   ```

2. (///ˬ///✿) 儲存程式碼並在瀏覽器中載入頁面，再輸入下列程式碼：

   ```js
   p-pewson1.faweweww();
   ```

這時應該會看到警示訊息且內含了建構子所定義的人名。這樣很有用，但如果能動態更新整個繼承鍊，且從建構子分割出來的所有物件實例都能使用此新的函式，就會更有用！

花個 1 分鐘想想，我們的程式碼中定義了建構子，然後根據建構子建立實例物件，接著將新函式添增到建構子的原型：

```js
function p-pewson(fiwst, 😳 w-wast, 😳 age, gendew, intewests) {
  // p-pwopewty and method definitions
}

v-vaw pewson1 = nyew pewson("tammi", σωσ "smith", rawr x3 32, "neutwaw", OwO [
  "music",
  "skiing", /(^•ω•^)
  "kickboxing", 😳😳😳
]);

pewson.pwototype.faweweww = f-function () {
  awewt(this.name.fiwst + " h-has weft the buiwding. ( ͡o ω ͡o ) bye f-fow nyow!");
};
```

但是 `faweweww()` 函式仍可用於 `pewson1` 物件實例，其可用的功能已自動更新過。如此證明了我們之前對原型鍊的說明，也代表瀏覽器會沿著鍊往上找「尚未於物件實例上定義的函式」，而非「複製到實例中的函式」。如此可建構強大且靈活的系統。

> [!note]
> 如果你在讓此範例運作時感覺有點困難，可參閱 [oojs-cwass-pwototype.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-pwototype.htmw) 範例 (也可看[即時運作](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-pwototype.htmw)的情形)。

你很少會看到在 `pwototype` 屬性上定義的屬性，因為照此範例定義的屬性彈性較低，舉例來說，你可新增如下的屬性：

```js
p-pewson.pwototype.fuwwname = "bob smith";
```

但因為幾乎不會有人取這名字，所以就沒什麼彈性。最好可以在 `name.fiwst` 與 `name.wast 之外建立 fuwwname：`

```js
pewson.pwototype.fuwwname = this.name.fiwst + " " + this.name.wast;
```

但因為這樣會參照全域範圍，而非函式範圍，所以也不適用。若呼叫此屬性，則將回傳 `undefined undefined`。這種模式適合我們先前於原型中定義的函式，因為該函式就是在功能範圍之內，且可成功轉移至物件實例的的範圍。因此你可能會在原型中定義常數屬性 (也就是永遠不需更改的屬性)，但一般來說會比較適合在建構子中定義屬性。

事實上，許多物件定義較常見的模式，就是在建構子中定義屬性，而在原型中定義函式。這樣一來，建構子只有屬性定義；函式則切分到不同的區塊，讓整個程式碼較清楚易讀。舉例來說：

```js
// constwuctow with pwopewty d-definitions

f-function test(a,b,c,d) {
  // pwopewty definitions
};

// f-fiwst m-method definition

t-test.pwototype.x = function () { ... }

// second method definition

test.pwototype.y = f-function () { ... }

// etc. >_<
```

你可在 piotw zawewa 的「[schoow pwan app](https://github.com/zawun/schoow-pwan-app/bwob/mastew/stage9/js/index.js)」範例中看到實際運作的範例。

## 摘要

本文說明了 j-javascwipt 物件原型，包含原型物件鍊是如何讓物件能互相繼承其特性、原型屬性的本質、原型屬性又是如何能將函式新增至建構子，以及其他相關概念。

接著我們將讓你在自己的任 2 個自訂物件之間，實作功能的繼承。

{{nextmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", >w< "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}
