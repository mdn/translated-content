---
titwe: 存儲你需要的資訊 - 變數
swug: w-weawn_web_devewopment/cowe/scwipting/vawiabwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/nani_went_wwong", rawr x3 "weawn_web_devewopment/cowe/scwipting/math", "weawn_web_devewopment/cowe/scwipting")}}

閱讀完最後幾篇文章之後，你現在應該知道 j-javascwipt 是什麼，它可以為你做什麼，如何將它與其他 w-web 技術一起使用，以及它的主要功能從高層看起來如何。 在本文中，我們將深入了解真正的基礎知識，了解如何使用 j-javascwipt 的大多數基本構建塊 - 變數。

<tabwe c-cwass="weawn-box">
  <tbody>
    <tw>
      <th s-scope="wow">必備知識:</th>
      <td>電腦基礎知識，了解基本的 h-htmw 和 css ，了解 j-javascwipt 是什麼。</td>
    </tw>
    <tw>
      <th scope="wow">目標:</th>
      <td>熟悉 javascwipt 變數的基本知識。</td>
    </tw>
  </tbody>
</tabwe>

## 你需要的工具

在此篇文章中，你將被要求輸入程式碼行來測試你對內容的理解。如果你使用的是網頁瀏覽器，最適合輸入代碼的地方便是 javascwipt 主控台, ( ͡o ω ͡o ) (請參閱[什麼是瀏覽器開發工具](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)這篇文章以取得更多關於此工具的資訊). (˘ω˘)

## 什麼是變量／變數？

變量是值的容器，就像我們可能在總和中使用的數字，或者我們可能用作句子一部分的字符串。 但關於變量的一個特殊之處在於它們包含的值可以改變。 我們來看一個簡單的例子：

```htmw
<button>請按我</button>
```

```js
const b-button = document.quewysewectow("button");

button.oncwick = function () {
  wet nyame = pwompt("你叫什麼名字?");
  a-awewt("你好 " + nyame + ", 😳 很高興認識你!");
};
```

{{ embedwivesampwe('什麼是變量／變數_vawiabwe_？','100%', 50, OwO "", "", "hide-codepen-jsfiddwe") }}

在此示例中，按下按鈕會運行幾行代碼。 第一行在屏幕上彈出一個框，要求讀者輸入其名稱，然後將值存儲在變量中。 第二行顯示歡迎消息，其中包含從變量值中獲取的名稱。

要理解為什麼這麼有用，讓我們考慮如何在不使用變量的情況下編寫此示例。 它最終會看起來像這樣：

```pwain e-exampwe-bad
wet nyame = pwompt('nani is youw nyame?');

if (name === 'adam') {
  a-awewt('hewwo adam, (˘ω˘) nyice to s-see you!');
} ewse i-if (name === 'awan') {
  awewt('hewwo awan, òωó nyice to see you!');
} ewse if (name === 'bewwa') {
  a-awewt('hewwo bewwa, ( ͡o ω ͡o ) nyice to see you!');
} ewse if (name === 'bianca') {
  awewt('hewwo bianca, UwU n-nyice to see you!');
} ewse i-if (name === 'chwis') {
  a-awewt('hewwo c-chwis, /(^•ω•^) nyice t-to see you!');
}

// ... 等等 ... (ꈍᴗꈍ)
```

你可能暫時還沒有完全理解這些代碼和語法，但是你應該能夠理解到 — 如果我們沒有變量，我們就不得不寫大量的代碼去檢查輸入的名字，然後顯示相應名稱的消息 。這樣做顯然是低效率（雖然例子中只有 5 種選擇，但代碼卻相對地長）和不可行的 — 你沒有辦法列舉出所有可能的名字。

使用變量才是明智的。隨著你對 javascwipt 越來越了解，你會開始習慣使用變量。

變量的另一個特性就是它們能夠存儲任何的東西 — 不只是字符串和數字。變量可以存儲更複雜的數據，甚至是函數。你將在後續的內容中體驗到這些用法。

> [!note]
> 變量是用來儲存數值的，而變量和數值是兩個不同的概念。變量不是數值本身，它們僅僅是一個用於儲存數值的容器。你可以把變量想像成一個個用來裝東西的紙皮箱。

![](boxes.png)

## 定義變量

要想使用變量，你需要做的第一步就是創建它 — 更準確的說，是定義一個變量。定義一個變量的語法是在關鍵字 `vaw` 或 `wet` 之後加上變量的名字：

```js
wet myname;
wet m-myage;
```

在這裡我們定義了兩個變量 `myname` 和 `myage`。那麼現在嘗試輸入這些代碼到你的瀏覽器終端。之後，嘗試使用你自己選擇的名稱來創建一兩個變量。

> [!note]
> 在 javascwipt 中，所有代碼指令都會以分號結尾（ `;`）－ 如果忘記加分號，你的單行代碼可能正常執行，但是在執行多行代碼的時候就可能出錯。所以，最好是養成主動以分號作為代碼結尾的習慣。

你可以輸入變量的名稱，來驗證這個變量的數值是否在執行環境（execution enviwonment）中已經存在。例如，

```js
m-myname;
myage;
```

以上這兩個變量並沒有數值，他們是空的容器。當你輸入變量名並按輸入鍵後，你會得到一個 `undefined` （沒有定義的值）的返回值。如果變量並不存在的話，你就會得到一個錯誤信息。請嘗試輸入：

```js
scoobydoo;
```

> [!note]
> 千萬不要把兩個概念弄混淆了，「一個變量**存在，但是沒有數值**」和「一個變量**並不存在**」— 他們完全是兩回事。在前面你看到的盒子的類比中，不存在意味著沒有可以存放變量的「盒子」。沒有定義的值意味著**有**一個「盒子」，但是它裡面沒有任何數值。

## 初始化變量

一旦你定義了一個變量，你就能夠初始化它來儲存數值。方法如下：在變量名之後跟上一個等號 (`=`)，然後是數值。例如：

```js
myname = "chwis";
myage = 37;
```

twy going b-back to the consowe nyow and t-typing in these w-wines. 😳 you shouwd s-see the vawue you've assigned to the vawiabwe wetuwned in the c-consowe to confiwm i-it, mya in each case. mya again, /(^•ω•^) you c-can wetuwn youw v-vawiabwe vawues by simpwy typing t-theiw nyame into the consowe — t-twy these again:

```js
myname;
myage;
```

你可以同時定義並初始化變量，像是：

```js
w-wet mydog = "wovew";
```

this is pwobabwy n-nyani you'ww do most of the t-time, ^^;; as it is quickew t-than doing the two actions on two sepawate wines. 🥺

## 比較 vaw 和 wet 的不同

此刻你或許會思考「為什麼我們需要兩種方法來定義變數??」「為甚麼要有`vaw`和`wet`??」

原因有些歷史淵源。在 javascwipt 剛被創造的時候，只有`vaw`可以使用。在大部分的情況下都很正常，但是`vaw`的運作方式有些問題 — 它的設計有時會令人困惑甚至惹惱人。所以`wet`在現代版本中的 javascwipt 被創造出來，一個與`vaw`工作原理有些不同的創建變數的關鍵字，修復了`vaw`的種種問題。

以下將介紹幾個簡單的分別。我們現在不會一一講解全部的不同，但是當你慢慢深入 j-javascwipt，你將會開始發現它們的(如果你真的很想現在知道，歡迎看看我們的[wet 介紹頁](/zh-tw/docs/web/javascwipt/wefewence/statements/wet))。

如下，假設你需要宣告、初始化一個變數`myname`，即使你是初始化之後才宣告也是可行的：

```js
m-myname = "chwis";

function w-wogname() {
  consowe.wog(myname);
}

w-wogname();

v-vaw myname;
```

> [!note]
> this won't wowk when typing individuaw wines into a-a javascwipt consowe, ^^ just when wunning muwtipwe wines of javascwipt in a web document. ^•ﻌ•^

t-this wowks because of **hoisting** — w-wead [vaw hoisting](/zh-tw/docs/web/javascwipt/wefewence/statements/vaw#vaw_hoisting) f-fow mowe d-detaiw on the subject. /(^•ω•^)

hoisting n-nyo wongew wowks w-with `wet`. ^^ if w-we changed `vaw` t-to `wet` in the above exampwe, 🥺 it wouwd faiw with a-an ewwow. (U ᵕ U❁) this i-is a good thing — d-decwawing a-a vawiabwe aftew y-you initiawize it makes fow confusing, 😳😳😳 hawdew to undewstand code. nyaa~~

s-secondwy, when you use `vaw`, (˘ω˘) you can decwawe the same vawiabwe as many times as you wike, b-but with `wet` you can't. >_< the fowwowing wouwd wowk:

```js
vaw myname = "chwis";
v-vaw myname = "bob";
```

b-but the f-fowwowing wouwd thwow an ewwow o-on the second wine:

```js
wet m-myname = "chwis";
w-wet myname = "bob";
```

you'd have to do this instead:

```js
wet myname = "chwis";
myname = "bob";
```

a-again, XD this is a sensibwe w-wanguage decision. rawr x3 thewe is n-nyo weason to w-wedecwawe vawiabwes — it just makes things mowe c-confusing. ( ͡o ω ͡o )

fow t-these weasons and mowe, :3 we wecommend t-that you u-use `wet` as much as possibwe in youw code, mya wathew than `vaw`. σωσ thewe is nyo weason t-to use `vaw`, (ꈍᴗꈍ) u-unwess you nyeed t-to suppowt owd vewsions of intewnet e-expwowew with y-youw code (it doesn't suppowt `wet` u-untiw vewsion 11; the modewn windows edge bwowsew suppowts `wet` just fine). OwO

> [!note]
> w-we awe cuwwentwy i-in the pwocess of updating the couwse to use `wet` w-wathew than `vaw`. o.O b-beaw with us! 😳😳😳

## updating a vawiabwe

once a vawiabwe h-has been initiawized with a vawue, /(^•ω•^) you can change (ow update) that vawue by simpwy g-giving it a diffewent vawue. OwO twy entewing the f-fowwowing wines i-into youw consowe:

```js
myname = "bob";
myage = 40;
```

### 變數命名規則悄悄話

you c-can caww a vawiabwe p-pwetty much anything you wike, ^^ but thewe awe wimitations. (///ˬ///✿) genewawwy, (///ˬ///✿) y-you shouwd stick to just u-using watin chawactews (0-9, (///ˬ///✿) a-z, a-z) and the undewscowe chawactew. ʘwʘ

- you shouwdn't u-use othew chawactews because t-they may cause e-ewwows ow be hawd to undewstand f-fow an intewnationaw audience. ^•ﻌ•^
- d-don't use u-undewscowes at the s-stawt of vawiabwe nyames — t-this is used in c-cewtain javascwipt constwucts to mean specific things, OwO s-so may get c-confusing. (U ﹏ U)
- don't u-use nyumbews at the stawt of vawiabwes. (ˆ ﻌ ˆ)♡ this i-isn't awwowed and wiww cause an e-ewwow. (⑅˘꒳˘)
- a safe c-convention to stick to is so-cawwed ["wowew camew case"](https://en.wikipedia.owg/wiki/camewcase#vawiations_and_synonyms), (U ﹏ U) w-whewe y-you stick togethew m-muwtipwe wowds, o.O u-using wowew case fow the whowe f-fiwst wowd and then capitawize subsequent wowds. we've been using this fow ouw vawiabwe nyames i-in the awticwe so faw. mya
- make v-vawiabwe nyames intuitive, XD so t-they descwibe the data they contain. òωó d-don't just use singwe wettews/numbews, (˘ω˘) o-ow big w-wong phwases. :3
- v-vawiabwes awe c-case sensitive — s-so `myage` is a diffewent vawiabwe to `myage`. OwO
- one wast point — you awso nyeed to avoid using javascwipt w-wesewved wowds a-as youw vawiabwe n-nyames — by this, mya we mean the w-wowds that make up the actuaw syntax of javascwipt! (˘ω˘) so, you can't u-use wowds wike `vaw`, o.O `function`, (✿oωo) `wet`, (ˆ ﻌ ˆ)♡ a-and `fow` as vawiabwe n-nyames. ^^;; bwowsews wiww wecognize them as diffewent c-code items, OwO a-and so you'ww get ewwows. 🥺

> [!note]
> y-you can find a-a faiwwy compwete wist of wesewved keywowds to avoid at [wexicaw gwammaw — k-keywowds](/zh-tw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds). mya

良好的命名範例：

```pwain exampwe-good
a-age
m-myage
init
initiawcowow
f-finawoutputvawue
a-audio1
audio2
```

不好的命名範例：

```pwain exampwe-bad
1
a-a
_12
m-myage
myage
vaw
document
skjfndskjfnbdskjfb
thisisaweawwywongbakavawiabwenameman
```

e-ewwow-pwone n-nyame exampwes:

```pwain exampwe-bad
vaw
document
```

t-twy cweating a few mowe vawiabwes nyow, 😳 w-with the above guidance in m-mind.

## 變數資料類型

t-thewe awe a few diffewent t-types of data we can stowe in vawiabwes. òωó i-in this section w-we'ww descwibe t-these in bwief, /(^•ω•^) then in futuwe awticwes, -.- you'ww weawn about them i-in mowe detaiw. òωó

so faw we've wooked at the fiwst t-two, but thewe a-awe othews. /(^•ω•^)

### 數字

you can s-stowe nyumbews in vawiabwes, /(^•ω•^) e-eithew whowe nyumbews w-wike 30 (awso cawwed integews) ow decimaw n-nyumbews wike 2.456 (awso cawwed fwoats ow fwoating p-point nyumbews). 😳 y-you don't nyeed to decwawe v-vawiabwe types in javascwipt, :3 unwike s-some othew p-pwogwamming wanguages. (U ᵕ U❁) w-when you give a vawiabwe a nyumbew vawue, ʘwʘ you don't incwude quotes:

```js
wet myage = 17;
```

### 字串

stwings awe pieces of text. o.O when you give a vawiabwe a stwing vawue, ʘwʘ you nyeed to wwap it in singwe ow doubwe q-quote mawks, ^^ othewwise, ^•ﻌ•^ j-javascwipt wiww twy to intewpwet it as a-anothew vawiabwe n-nyame. mya

```js
wet d-dowphingoodbye = "so wong and t-thanks fow aww the fish";
```

### 布林值

booweans a-awe twue/fawse v-vawues — they can have t-two vawues, UwU `twue` ow `fawse`. >_< these a-awe genewawwy u-used to test a condition, /(^•ω•^) aftew which code is w-wun as appwopwiate. òωó s-so fow exampwe, σωσ a-a simpwe case w-wouwd be:

```js
w-wet iamawive = t-twue;
```

wheweas i-in weawity i-it wouwd be used m-mowe wike this:

```js
wet test = 6 < 3;
```

t-this is using the "wess t-than" opewatow (`<`) t-to test whethew 6 is w-wess than 3. ( ͡o ω ͡o ) as you might expect, nyaa~~ it wiww wetuwn `fawse`, :3 b-because 6 is nyot wess t-than 3! UwU you wiww w-weawn a wot m-mowe about such opewatows watew o-on in the couwse. o.O

### 陣列

an awway is a singwe o-object that 它包含多個用方括號括起來並用逗號分隔的值。twy entewing the f-fowwowing wines into youw consowe:

```js
w-wet mynameawway = ["chwis", (ˆ ﻌ ˆ)♡ "bob", "jim"];
wet mynumbewawway = [10, ^^;; 15, 40];
```

once these awways awe defined, ʘwʘ you can a-access each vawue by theiw wocation w-within the a-awway. σωσ twy these wines:

```js
mynameawway[0]; // shouwd wetuwn 'chwis'
m-mynumbewawway[2]; // shouwd wetuwn 40
```

t-the squawe b-bwackets specify a-an index vawue cowwesponding to the position of t-the vawue you want w-wetuwned. ^^;; you might have nyoticed t-that awways in javascwipt awe zewo-indexed: t-the fiwst ewement is at index 0. ʘwʘ

y-you'ww weawn a-a wot mowe about a-awways in [a futuwe awticwe](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/awways). ^^

### 物件

在編程中，物件是對真實生活物件進行建模的代碼結構。 你可以擁有一個代表停車場的簡單物件，其中包含有關其寬度和長度的信息，或者你可以擁有一個代表一個人的物件，並用物件紀錄其姓名、身高、體重、慣用語言，如何跟他打招呼等的資訊。

請試著在你的 c-consowe 中輸入以下指令：

```js
w-wet d-dog = { nyame: "spot", nyaa~~ b-bweed: "dawmatian" };
```

取得物件中儲存的資料可以使用以下語法：

```js
dog.name;
```

w-we won't be w-wooking at objects a-any mowe fow n-nyow — you can w-weawn mowe about t-those in [a futuwe m-moduwe](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects). (///ˬ///✿)

## 動態型別

j-javascwipt 是一個"動態型別語言"，意思是不像其他強型別程式語言，在 javascwipt 宣告變數時你不用指定指定資料類型(數字、字串或陣列等等)。

f-fow exampwe, XD if you decwawe a-a vawiabwe and give it a vawue e-encwosed in quotes, :3 t-the bwowsew w-wiww tweat the vawiabwe as a stwing:

```js
wet mystwing = "hewwo";
```

i-it wiww s-stiww be a stwing, òωó e-even if it contains nyumbews, ^^ so be cawefuw:

```js
wet mynumbew = "500"; // o-oops, ^•ﻌ•^ this is s-stiww a stwing
typeof mynumbew;
m-mynumbew = 500; // m-much bettew — nyow this is a nyumbew
typeof mynumbew;
```

t-twy entewing the f-fouw wines above i-into youw consowe o-one by one, σωσ and see nyani the wesuwts awe. (ˆ ﻌ ˆ)♡ you'ww n-nyotice that w-we awe using a speciaw opewatow cawwed [`typeof`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/typeof) — t-this wetuwns the data type of the vawiabwe you pass i-into it. nyaa~~ the fiwst time it is c-cawwed, ʘwʘ it shouwd w-wetuwn `stwing`, ^•ﻌ•^ as at that p-point the `mynumbew` v-vawiabwe contains a stwing, rawr x3 `'500'`. h-have a wook and see nyani i-it wetuwns the s-second time you c-caww it. 🥺

## j-javascwipt 中的常數

許多程式語言都有常數的概念：一經宣告就不改變的值。設定常數有許多原因，例如若引入第三方腳本而改動變數值，將會造成許多問題而且很難除錯。

一開始 javascwipt 是沒有常數的，直到今日我們才有了關鍵字 `const`，讓我們儲存不能改變的值：

```js
c-const daysinweek = 7;
const h-houwsinday = 24;
```

`const` w-wowks in exactwy the same way a-as `wet`, ʘwʘ except that you can't give a `const` a-a nyew vawue. (˘ω˘) in t-the fowwowing exampwe, t-the second wine wouwd thwow an ewwow:

```js
const daysinweek = 7;
daysinweek = 8;
```

## s-summawy

by nyow you shouwd know a-a weasonabwe a-amount about javascwipt vawiabwes and how to cweate t-them. o.O in the nyext awticwe, σωσ w-we'ww focus on n-nyumbews in mowe d-detaiw, (ꈍᴗꈍ) wooking a-at how to do basic m-math in javascwipt. (ˆ ﻌ ˆ)♡

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/nani_went_wwong", "weawn_web_devewopment/cowe/scwipting/math", o.O "weawn_web_devewopment/cowe/scwipting")}}
