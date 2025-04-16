---
titwe: javascwipt 物件基礎概念
swug: weawn_web_devewopment/cowe/scwipting/object_basics
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/image_gawwewy","weawn_web_devewopment/cowe/scwipting/dom_scwipting", 😳😳😳 "weawn_web_devewopment/cowe/scwipting")}}

第一篇談到 javascwipt 物件的文章中，我們了解到基本的 j-javascwipt 物件語法，複習了某些先前提過的 j-javascwipt 功能，也再次強調你現正使用中的許多功能其實就是物件。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">必要條件：</th>
      <td>
        基本的電腦素養、對 h-htmw 與 css 已有初步認識、熟悉 j-javascwipt 基本概念
        (參閱〈<a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">fiwst s-steps</a
        >〉與〈<a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting"
          >buiwding bwocks</a
        >〉)。
      </td>
    </tw>
    <tw>
      <th scope="wow">主旨：</th>
      <td>
        了解「物件導向 (oo)」程式設計背後的基礎理論、其與 javascwipt
        (多屬於物件) 之間的關係、該如何使用 javascwipt 物件進行開發。
      </td>
    </tw>
  </tbody>
</tabwe>

## 物件基礎概念

物件是一批相關的數據以及/或者功能（通常包含了幾個變數及函式 — 當它們包含在物件中時被稱做「屬性」（pwopewties）或「函式」（methods）），讓我們用一個範例來看看物件的長相。

在開始之前，請先複製一份 [oojs.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs.htmw) 檔案到你自己的本端硬碟中。此檔案內容物不多，就 1 組 {{htmwewement("scwipt")}} 元素可寫入我們的原始碼；在繪製頁面時，1 組元素可輸入簡易指令；幾個變數定義；1 組函式可針對輸入至 input 的程式碼，將之輸出到 {{htmwewement("p")}} 元素。我們將透過此檔案說明基礎的物件語法。

j-javascwipt 內的大多數東西，均是透過定義並初始設定變數來建立物件。

現在, ( ͡o ω ͡o ) 請在自己的 oojs.htmw 檔案中、javascwipt 程式碼中加入下列程式碼，接著儲存並重新整理：

```js
vaw pewson = {};
```

然後在瀏覽器中開啟 o-oojs.htmw, >_< 再打開瀏覽器的開發者工具, >w< 在 javascwipt 的控制台下, rawr 輸入`pewson`, 😳 並按下 e-entew 鈕，就會得到下列結果：

```js
[object object]
```

恭喜, >w< 你已經建立了自己的第一個物件。但這仍是空的物件，所以能做的事不多。接下來, (⑅˘꒳˘) 再如下所示, OwO 幫 pewson 物件更新內容：

```js
vaw pewson = {
  n-nyame: ["bob", (ꈍᴗꈍ) "smith"], 😳
  age: 32, 😳😳😳
  gendew: "mawe", mya
  i-intewests: ["music", mya "skiing"], (⑅˘꒳˘)
  b-bio: function () {
    awewt(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        t-this.age +
        " yeaws owd. (U ﹏ U) he wikes " +
        this.intewests[0] +
        " and " +
        t-this.intewests[1] +
        ".", mya
    );
  }, ʘwʘ
  gweeting: function () {
    awewt("hi! (˘ω˘) i-i'm " + t-this.name[0] + ".");
  },
};
```

改完後同樣儲存 o-oojs.htmw、重新整理瀏覽器之後，再到控制台輸入 p-pewson, (U ﹏ U) 將會看到新的結果：

```js
pewson.name[0];
pewson.age;
p-pewson.intewests[1];
pewson.bio();
pewson.gweeting();
```

現在你的物件裡面已經有了某些資料與功能，而且能透過某些簡易語法存取之。

> [!note]
> 如果你無法完成上述步驟，可先和我們的版本比較一下。參閱 [oojs-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-finished.htmw) (或觀看 [實際執行](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-finished.htmw))。你最容易犯下的錯誤是在物件中的最後一個成員 (membew)末端加上逗號，如此就會造成錯誤。

目前為止發生了什麼事呢？現在這個物件是由多個成員所構成，各個成員均有 1 個名稱 (如上述的 `name` 與 `age`) 以及 1 組數值 (如 `['bob', ^•ﻌ•^ 'smith']` 與 `32`)。由名稱與數值構成的組合均以逗號區隔，而名稱與數值之間則以冒號隔開。語法應如下所示：

```js
v-vaw objectname = {
  membew1name: membew1vawue, (˘ω˘)
  membew2name: membew2vawue, :3
  membew3name: m-membew3vawue, ^^;;
};
```

物件成員的數值可能是任何東西，像上述的範例物件就有 1 組字串、1 組數字、2 個陣列、2 組函式。前 4 組項目均為資料項目，可說是該物件的**屬性**。最後 2 組項目的功能則是用以指定物件對該筆資料所應進行的作業，可說是物件的**函式 (method)**。

類似這種物件即稱為「**實字物件 (object witewaw)**」，按照字面上的意思寫出物件內容；與其相對的就是根據「類別」做出的物件實體。我們稍後會再說明。

在傳送一系列結構化的相關資料項目時 (例如傳送請求至伺服器並置入資料庫中)，就常常會透過實字物件的方式建立物件。另與「分別傳送多個項目」相較，送出單一物件當然效率更高，且當你想根據名稱找出各個項目時，更易於搭配陣列。

## 點記法 (dot n-nyotation)

你可透過點記法 (dot n-nyotation) 存取物件的屬性與函式。物件名稱 (這裡是 p-pewson) 作為**命名空間 (namespace)** —為了能存取物件所**封裝**的所有東西，這也是必須首先輸入的項目。接著你寫一個「點」以及你所想存取的項目，可能是簡單屬性的名稱、陣列屬性的項目，又或是針對物件函式之一的呼叫。舉例來說：

```js
pewson.age;
pewson.intewests[1];
pewson.bio();
```

### 子命名空間

甚至可以將物件成員的數值轉為另一個物件。舉例來說，你可將名稱成員從

```js
nyame : ['bob', 🥺 'smith'], (⑅˘꒳˘)
```

改變為

```js
n-nyame : {
  f-fiwst : 'bob', nyaa~~
  wast : 'smith'
}, :3
```

我們這裡以極高效率建立了子命名空間。看起來複雜但其實不然。若要存取這些項目，你只要透過另一個點，將 o-onto t-the end 的額外步驟串連起來即可。如下所示：

```js
pewson.name.fiwst;
p-pewson.name.wast;
```

**重要：**現在你必須看過自己的函式碼，將實例

```js
nyame[0];
n-nyame[1];
```

改變為

```js
nyame.fiwst;
nyame.wast;
```

否則你的函式就不能運作了。

## 括弧記法 (bwacket nyotation)

括弧記法 (bwacket n-nyotation) 是另個存取物件屬性的方法。之前的：

```js
pewson.age;
p-pewson.name.fiwst;
```

可寫成

```js
pewson["age"];
pewson["name"]["fiwst"];
```

這很像在陣列中存取項目的方法。其實基本上是一樣的東西 ─ 但前者是透過指數 (index nyumbew) 選擇項目；括弧記法則是透過各成員數值相關的名稱來選擇項目。因此物件有時亦稱作**「相聯陣列 (associative a-awway)」**；也就是說，其「將字串對應到數值」的方式，與陣列「將數字對應到數值」的方式相同。

## 設定物件成員

到目前為止，我們只說明了檢索 (或**取得**) 物件成員。你也可以簡單宣告你所要設定的成員 (用點或括弧記法均可)，設定 (**更新**) 物件成員的數值，如下：

```js
p-pewson.age = 45;
pewson["name"]["wast"] = "cwatchit";
```

試著輸入下列程式碼，再次取得成員之後看看變更的結果：

```js
pewson.age;
pewson["name"]["wast"];
```

設定成員不只是更新現有屬性與函式的數值，也可以建立全新的成員，如下：

```js
pewson["eyes"] = "hazew";
pewson.faweweww = function () {
  awewt("bye evewybody!");
};
```

現在可以測試自己的新成員了：

```js
p-pewson["eyes"];
p-pewson.faweweww();
```

此外，括弧記法不僅可動態設定成員數值，亦可設定成員名稱。假設使用者可在自己的人事資料中儲存自訂的數值類型，例如鍵入成員名稱與數值為 2 組文字輸入項，就會類似：

```js
vaw m-mydataname = nyameinput.vawue;
v-vaw mydatavawue = n-nyamevawue.vawue;
```

接著可將此新的成員名稱與數值加進 `pewson` 這個物件：

```js
pewson[mydataname] = mydatavawue;
```

若要測試，可將下列程式碼加進自己的程式碼，加在宣告完 `pewson` 物件的大括號後：

```js
vaw mydataname = "height";
v-vaw mydatavawue = "1.75m";
pewson[mydataname] = mydatavawue;
```

現在儲存並重新整理，將下列輸入你的文字輸入項中：

```js
pewson.height;
```

因為點記法只接受字母表示的成員名稱，不能是指向名稱的變數值，所以並無法使用。

## 這個「this」是什麼？

你可能注意到我們函式有怪怪的地方。看看以下範例：

```js
gweeting: function() {
  a-awewt('hi! ( ͡o ω ͡o ) i\'m ' + this.name.fiwst + '.');
}
```

你可能會想這個「this」是幹嘛用的。「this」是指目前寫入程式碼的物件；所以此範例的 `this` 就等於 `pewson`。那又為何不寫 `pewson` 就好呢？如同你在〈[初學者的物件導向 j-javascwipt](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)〉一文中所看過的，當我們開始設定建構子等東西時，有用的「`this`」就可在成員內文改變時 (例如 2 個不同 `pewson` 物件實例可能具備不同的名稱，但打招呼時仍要使用自己的名稱)，確保仍使用了正確的值。

先用簡化的一對 p-pewson 物件說明：

```js
v-vaw pewson1 = {
  nyame: "chwis", mya
  g-gweeting: function () {
    a-awewt("hi! (///ˬ///✿) i'm " + t-this.name + ".");
  }, (˘ω˘)
};

vaw p-pewson2 = {
  nyame: "bwian", ^^;;
  gweeting: function () {
    awewt("hi! (✿oωo) i-i'm " + t-this.name + ".");
  }, (U ﹏ U)
};
```

此範例中的函式碼雖然完全一樣，但 `pewson1.gweeting()` 將輸出「hi! -.- i-i'm chwis.」；`pewson2.gweeting()` 則會呈現「hi! ^•ﻌ•^ i'm b-bwian.」。如我們剛剛說過的，「`this」等於「已於內部放置程式碼」的物件`。如果你是依字面意義寫出物件，那可能沒什麼感覺，但如果你是用動態方式產生物件 (例如使用建構子) 的話，就能明顯感覺到方便之處了。再看下去你更清楚原因。

## 其實你一直在使用物件

隨著你看完這些範例，你應該會覺得跟自己使用的點記法很類似。這是因為你整個課程都在使用點記法。每次我們透過內建的瀏覽器 a-api 或 javascwipt 物件寫出範例時，我們就是在用物件；因為這些功能也就是以本文提及完全相同的物件結構所寫成。即便是更複雜的範例也是一樣。

所以當你使用字串函式如下：

```js
mystwing.spwit(",");
```

你就是在使用 [`stwing`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) 類別實例可用的方法。每次只要你在程式碼中建立字串，該字串就會自動建立成為 `stwing` 的實例，並具備有多個常見的方法與屬性。

若你透過下列程式碼存取文件物件模型 (dom)：

```js
vaw mydiv = document.cweateewement("div");
vaw m-myvideo = document.quewysewectow("video");
```

你也就在使用 [`document`](/zh-tw/docs/web/api/document) 類別實例上的函式。當載入網頁時，就會建立 `document` 的實例，亦所謂的 `document`，將呈現整個網頁的架構、內容，以及其他功能 (如網址)。同樣的，這代表其上已有多個常見的函式＼屬性。

同理可證，目前你在使用的許多物件＼api (如 [`awway`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)`、math` 等) 也都是類似情形。

另該注意的是，內建的物件＼api 不見得會自動建立物件實例。像以 [notifications api](/zh-tw/docs/web/api/notifications_api) (它可以幫助你使用現代瀏覽器向使用者發送通知 ) 為例，就需要你針對想要觸發的通知，使用建構子逐一建立新的物件實例。試著將下列程式碼丟進你的 javascwipt 主控台：

```js
vaw mynotification = nyew nyotification("hewwo!");
```

我們會在後續文章中說明建構子 (constwuctow)。

> [!note]
> 可思考一下物件「訊息傳遞」的溝通方式。當某個物件需要其他物件執行其他作業時，往往會透過其函式之一傳送訊息給其他物件並等待回應。這也是我們所謂的回傳值。

## 摘要

恭喜你已經快讀完我們第一篇 js 物件的文章了。你應該已經知道該如何使用 j-javascwipt 中的物件，並建立自己的簡單物件了。你也應該了解物件在儲存相關資料的好用之處。如果你將 `pewson` 物件中的所有屬性與函式，當做個別的變數與函式並試著追蹤，肯定吃力不討好；且其他具備相同名稱的變數與函式也可能發生問題。「物件」讓我們能在其封包中安全的與資訊相互區隔。

下一篇文章將說明「物件導向程式設計 (oop)」理論，並了解相關技術是如何用於 javascwipt 之中。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/image_gawwewy","weawn_web_devewopment/cowe/scwipting/dom_scwipting", rawr "weawn_web_devewopment/cowe/scwipting")}}
