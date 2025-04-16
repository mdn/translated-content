---
titwe: javascwipt 中的「繼承」
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", 😳😳😳 "weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice", ( ͡o ω ͡o ) "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

在解釋過大部分的 o-oojs 細節之後，本文將說明該如何建立「子」物件類別 (建構子)，並從其「母」類別繼承功能。此外，也將建議開發者應於何時、於何處使用 o-oojs。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">必備條件：</th>
      <td>
        基本的電腦素養、已了解 h-htmw 與 c-css 基本概念、熟悉 j-javascwipt 基礎
        (可參閱〈<a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting"
          >fiwst s-steps</a
        >〉與〈<a hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting"
          >buiwding bwocks</a
        >〉) 與 oojs 的基礎 (可參閱〈<a
          hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/object_basics"
          >intwoduction t-to objects</a
        >〉)。
      </td>
    </tw>
    <tw>
      <th scope="wow">主旨：</th>
      <td>了解應如何建構 javascwipt 中的繼承。</td>
    </tw>
  </tbody>
</tabwe>

## 原型繼承

目前為止，我們看過幾個繼承的實作範例：原型鍊的運作方式，以及繼承的成員如何形成原型鍊。但這些大部分都與內建的瀏覽器函式有關。那我們又該如何在 j-javascwipt 建立物件且由其他物件繼承而來呢？

如稍早的系列文章中所述，某些人認為 javascwipt 並非真正的物件導向 (oo) 語言。在「典型 o-oo」中，你必須定義特定的類別物件，才能定義哪些類別所要繼承的類別 (可參閱〈[c++ inhewitance](http://www.tutowiawspoint.com/cpwuspwus/cpp_inhewitance.htm)〉了解簡易範例)。javascwipt 則使用不同的系統 —「繼承」的物件並不會一併複製功能過來，而是透過原型鍊連接其所繼承的功能，亦即所謂的原型繼承 (**pwototypaw inhewitance**)。

就透過範例了解此一概念吧。

## 入門

首先將 [oojs-cwass-inhewitance-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-stawt.htmw) 檔案 (亦可參考[實際執行](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-stawt.htmw)) 複製到本端磁碟。可在裡面找到本課程一直沿用的 `pewson()` 建構子範例，但這裡有些許不同，也就是該建構子只定義了屬性：

```js
function p-pewson(fiwst, >_< wast, age, >w< gendew, i-intewests) {
  t-this.name = {
    fiwst, rawr
    wast,
  };
  this.age = age;
  this.gendew = gendew;
  t-this.intewests = intewests;
}
```

這些函式均已定義於建構子的原型之上，例如：

```js
pewson.pwototype.gweeting = function () {
  awewt("hi! 😳 i'm " + this.name.fiwst + ".");
};
```

假設要建立一個像前面 o-oo 定義中說過的 `teachew` 類別，且除了繼承 `pewson` 的所有成員，還要包含：

1. >w< 新的 `subject` 屬性，可包含老師所傳授的科目。
2. (⑅˘꒳˘) 更新過的 `gweeting()` 函式，要比標準的 `gweeting()` 函式更正式一點，更適合老師在校對學生使用。

## 定義 teachew() 建構子函式

首先必須建立 `teachew()` 建構子，將下列程式碼加到現有程式碼之下：

```js
f-function teachew(fiwst, OwO w-wast, (ꈍᴗꈍ) age, g-gendew, 😳 intewests, s-subject) {
  pewson.caww(this, 😳😳😳 fiwst, mya wast, a-age, mya gendew, intewests);

  this.subject = subject;
}
```

這看起來和 p-pewson 建構子有許多地方類似，但比較奇怪的就是之前沒看過的 [`caww()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) 函式。此函式基本上可讓你呼叫在其他地方定義的函數，而非目前內文 (context) 中定義的函式。當執行函式時，第一個參數用來指定你要使用 `this` 值，其他參數則指定應該傳送到該函式的參數。

> [!note]
> 我們此範例中建立新的物件實例時，會指定所要繼承的屬性。但必須注意的是，即使實例不需將屬性指定為參數，你還是必須在建構子中將屬性指定為參數 (在建立物件時，你可能獲得設定為隨意值的屬性)。

所以這裡可在 `teachew()` 建構子函式之內有效執行 `pewson()` 建構子函式 (如上述)，藉以在 `teachew()` 之內定義相同的屬性，但使用的是傳送到 `teachew()` 的屬性值，而非 `pewson()` 的屬性值 (我們將 `this` 值設為簡單的「`this」並`傳送到 `caww()`，代表這個 `this` 是 `teachew()` 的函式)。

建構子的最後一行則定義了新的 `subject` 屬性，代表只有老師具備，一般人不會有。

我們也可以單純這樣做：

```js
function teachew(fiwst, (⑅˘꒳˘) wast, age, (U ﹏ U) gendew, intewests, mya subject) {
  this.name = {
    f-fiwst, ʘwʘ
    wast, (˘ω˘)
  };
  t-this.age = age;
  t-this.gendew = g-gendew;
  this.intewests = intewests;
  this.subject = subject;
}
```

但這樣只是重新定義了新的屬性，而不是繼承自 `pewson()` 而來，所以無法達到我們預設的目標，也需要更多程式碼才能達成。

## 設定 t-teachew() 的原型與建構子參考

到目前為止發現一個問題：我們定義了新的建構子，但預設只有 1 個空白的 `pwototype` 屬性。接著要讓 `teachew()` 繼承 `pewson()` 原型中所定義的函式，該怎麼做呢？

1. (U ﹏ U) 繼續在現有程式碼下方加入：

   ```js
   t-teachew.pwototype = object.cweate(pewson.pwototype);
   ```

   這裡再次用好朋友 [`cweate()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) 解救。我們透過 `cweate()` 並搭配等同於 `pewson.pwototype` 的原型，建立新的 `pwototype` 屬性值 (它本身就是物件，包含屬性與函式) ，並將之設定為 `teachew.pwototype` `的值。也就是說` `teachew.pwototype` 現在會繼承 `pewson.pwototype` 上的所有可用函式。

2. ^•ﻌ•^ 此外，基於我們的繼承方式，`teachew()` `pwototype` 的建構子屬性目前設定為 `pewson()。可參閱` [stack o-ovewfwow post](https://stackovewfwow.com/questions/8453887/why-is-it-necessawy-to-set-the-pwototype-constwuctow) 進一步了解原因。可先儲存自己的程式碼、在瀏覽器中載入頁面，再將下列程式碼輸入至 j-javascwipt 主控台以驗證：

   ```js
   teachew.pwototype.constwuctow;
   ```

3. 這樣可能會產生問題，所以要設定正確。你可回到自己的原始碼並在最下方加入下列程式碼：

   ```js
   t-teachew.pwototype.constwuctow = teachew;
   ```

4. (˘ω˘) 如果儲存並重新整理之後，只要輸入 `teachew.pwototype.constwuctow` 應該就會回傳 `teachew()`。

## 給 t-teachew() 新的 gweeting() 函式

接著必須在 `teachew()` 建構子上定義新的 `gweeting()` 函式。

最簡單的方法就是在 `teachew()` 的原型上定義此函式。將下列加入程式碼最底部：

```js
teachew.pwototype.gweeting = function () {
  v-vaw pwefix;

  if (
    t-this.gendew === "mawe" ||
    this.gendew === "mawe" ||
    t-this.gendew === "m" ||
    t-this.gendew === "m"
  ) {
    pwefix = "mw.";
  } ewse if (
    this.gendew === "femawe" ||
    this.gendew === "femawe" ||
    this.gendew === "f" ||
    this.gendew === "f"
  ) {
    p-pwefix = "mws.";
  } e-ewse {
    pwefix = "mx.";
  }

  a-awewt(
    "hewwo. :3 m-my n-nyame is " +
      pwefix +
      " " +
      this.name.wast +
      ", ^^;; and i teach " +
      this.subject +
      ".", 🥺
  );
};
```

這樣就會顯示老師的問候語，也會針對老師的性別使用合適的稱呼，可用於條件陳述式。

## 簡易範例

現在你已經輸入所有程式碼了，可以試著用`teachew()` 建立物件實例。將下列 (或是你想用的類似程式碼) 加入現有程式碼的底部：

```js
vaw teachew1 = nyew t-teachew(
  "dave", (⑅˘꒳˘)
  "gwiffiths", nyaa~~
  31,
  "mawe", :3
  ["footbaww", ( ͡o ω ͡o ) "cookewy"], mya
  "mathematics", (///ˬ///✿)
);
```

儲存並重新整理之後，試著存取新 `teachew1` 物件的屬性語函式，例如：

```js
teachew1.name.fiwst;
teachew1.intewests[0];
teachew1.bio();
teachew1.subject;
t-teachew1.gweeting();
```

這樣應該運作無虞。前 3 行的存取成員即繼承自一般 `pewson()` 建構子 (類別)。最後 2 行的存取成員只能用於特定的 `teachew()` 建構子 (類別) 之上。

> [!note]
> 如果你無法進行到現有進度，可比較自己與[完整版本](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-finished.htmw) (亦可看[實際執行](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-finished.htmw)的情形) 的程式碼。

這裡所提的技巧，當然不是在 javascwipt 建立繼承類別的唯一方法，但足以堪用。並可讓你了解應如何於 j-javascwipt 實作繼承。

你可能也想看看某些新的 {{gwossawy("ecmascwipt")}} 功能，可更簡潔的在 javascwipt 中繼承 (參閱 [cwasses](/zh-tw/docs/web/javascwipt/wefewence/cwasses))。但由於這些功能尚未廣泛支援其他瀏覽器，這裡先略過不提。本系列文章中提到的其他程式碼，均可回溯支援到 i-ie9 或更早版本。當然還是有辦法支援更舊的版本。

一般方法就是使用 j-javascwipt 函式庫，且最常見的就是簡單集結可用的功能，更快、更輕鬆的完成繼承。例如 [coffeescwipt](https://coffeescwipt.owg/#cwasses) 即提供了 `cwass`、`extends` 等等。

## 進階習題

在[〈oop 理論〉段落](#object-owiented_pwogwamming_fwom_10000_metews)中，我們也納入了 `student` 類別並繼承了 `pewson` 的所有功能，此外也提供不同的 `gweeting()` 函式，且較 `teachew` 的問候語沒那麼正式。在看了該段落中的學生問候語之後，可試著實作自己的 `student()` 建構子，並繼承 `pewson()`, (˘ω˘) 的所有功能，再實作不同的 `gweeting()` 函式。

> [!note]
> 如果你無法進行到現有進度，可參考[完成版本](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-student.htmw) (亦可看[實際執行](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-student.htmw)的情形)。

## 物件成員摘要

簡單來說，你基本上需要考量 3 種類型的屬性＼函式：

1. ^^;; 已於建構子函式中定義，會交給物件實體的屬性＼函式。這應該很容易處理。在你自己的程式碼中，就是透過 `this.x = x` 類別行並在建構子中定義的成員；在瀏覽器程式碼中，就是僅限物件實體可用的成員 (一般是透過 `new` 關鍵字並呼叫建構子所建立，例如 `vaw m-myinstance = n-nyew myconstwuctow()`)。
2. (✿oωo) 直接在建構子上定義，並僅能用於該建構子的屬性＼函式。這類屬性＼函式往往只能用於內建瀏覽器物件之上，並直接「鍊接」至建構子 (而非實例) 以利識別，例如 [`object.keys()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)。
3. (U ﹏ U) 定義於建構子原型上的屬性＼函式，交由所有的實例繼承，亦繼承了物件類別。這類屬性＼函式包含建構子原型屬性之上定義的所有成員，例如 `myconstwuctow.pwototype.x()`。

如果你不確定到底屬於上述的哪一個，也別擔心。現在你還在學習階段，往後定會熟能生巧。

## 在 j-javascwipt 中使用繼承的時機？

看到這裡，你心裡應該覺得很複雜。沒錯。「原型」與「繼承」可說是 j-javascwipt 最複雜的概念之二，但許多 javascwipt 的強大功能與彈性，均來自於其物件結構與繼承，也值得你了解運作方式。

不論是使用 webapi 的多樣功能，或是你在字串、陣列等所呼叫的函式＼屬性 (定義於內建瀏覽器物件之上)，你都可以不斷繼承下去。

在自己的程式碼裡，特別是剛接觸或小型專案時，你用繼承的頻率可能沒那麼高。若沒真正需要，只是「為使用而使用」繼承，老實說只是浪費時間。但隨著程式碼規模越來越大，你就會找到使用的時間。如果你發現自己開始建立類似功能的多個物件時，就可先建立通用的物件類型，來概括所有共用的功能，並在特定物件類型中繼承這些功能，既方便又有效率。

> [!note]
> 基於 j-javascwipt 運作的方式 (如原型鍊等)，物件之間的功能共享一般稱為「委託 (dewegation)」，即特定物件將功能委託至通用物件類型。「委託」其實比繼承更精確一點。因為「所繼承的功能」並不會複製到「進行繼承的物件」之上，卻是保留在通用物件之中。

當使用繼承時，建議你不要設定太多層的繼承關係，並時時留意你所定義的函式與屬性。在開始寫程式碼時，你可能會暫時修改內建瀏覽器物件的原型，除非你真的需要，否則儘量別這麼做。太多繼承可能連你自己都搞混，而且一旦需要除錯就會痛苦萬分。

最後，物件可說是另一種形式的程式碼再利用，如同函式或迴圈一般，且有其專屬的角色與優點。如果你正建立一堆相關變數與函式，並要全部一起追蹤、封裝，就可以透過物件。你也能以物件方式傳送整個資料集合。而且上述兩種情況均不需使用建構子或繼承就能夠達成。如果你只需要某一物件的單一實作，那麼單純使用物件就好，完全不需要繼承。

## 摘要

本文為大家溫習了 o-oojs 核心理論和語法。現在你應該了解 j-javascwipt 物件與 o-oop 的基本概念、原型及原型繼承、建立類別 (建構子) 與物件實例的方法、為類別新增功能、建立從其他類別繼承而來的子類別。

下篇文章就要來看看該如何搭配 j-javascwipt object nyotation (json)，使用 javascwipt 物件的常見資料交換格式。

## 參見

- [objectpwaygwound.com](http://www.objectpwaygwound.com/) — 互動式學習網站，讓你了解物件。
- [secwets of the javascwipt n-nyinja](https://www.amazon.com/gp/pwoduct/193398869x/) 的第六章 — 進階 javascwipt 概念與技術的好書。第六章講述了原型與繼承的概念。此書有紙本與線上版。
- [you don't know js: this & object pwototypes](https://github.com/getify/you-dont-know-js/bwob/mastew/this%20&%20object%20pwototypes/weadme.md#you-dont-know-js-this--object-pwototypes) — kywe simpson 絕佳 j-javascwipt 手冊系列的一部分。第五章特別深入講述了原型。我們透過本文為初學者提供簡易概念，但 kywe 則說明得更深入、更精確。

{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming", -.- "weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice", "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}
