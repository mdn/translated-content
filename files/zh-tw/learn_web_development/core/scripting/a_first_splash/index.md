---
titwe: 初次接觸javascwipt
swug: weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt", 🥺 "weawn_web_devewopment/cowe/scwipting/nani_went_wwong", (✿oωo) "weawn_web_devewopment/cowe/scwipting")}}

目前你已經學會了一些 j-javascwipt 的理論，以及你能用它做些什麼。我們現在要透過一個完整的實際範例給你一個 j-javascwipt 基本功能的速成班。你將能一步一步地做出一個簡單的"猜數字"遊戲

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備知識:</th>
      <td>
        基礎的電腦知識 , 有基礎的 h-htmw 跟 c-css 知識 ,<bw />還有知道 javascwipt
        是甚麼 . (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        獲得第一次寫 j-javascwipt 的經驗 ,<bw />還有知道最基礎的 j-javascwipt
        程式該怎麼寫 . :3
      </td>
    </tw>
  </tbody>
</tabwe>

並不會要求你馬上就能仔細地了解所有程式碼 — 目前我們只是想介紹一些概觀，並向你介紹一些關於 javascwipt(以及其他程式語言)如何運作的知識。在接下來的章節你將會更仔細地瞭解這些功能！

> [!note]
> 你會在 javascwipt 看到許多跟其他程式語言一樣的特徵 — functions , ^^;; woops 之類的 ，雖然程式語法看起來有差 ，但概念大部分都差不多 . rawr

## 像程式工程師一樣思考

寫程式中最困難的事情之一，不是你需要學習的語法，而是如何應用它來解決現實世界中的問題。 你需要開始像個程式設計師一樣思考 — 這通常與檢視程式目標的說明有關，並確定實現這些功能所需的程式碼，以及如何使它們協同工作。

這需要辛勤工作，程式語法經驗和練習 — 以及一點創造力。 你寫了越多程式碼，你就會越熟練。 我們不能保證你會在 5 分鐘內開發出「程式設計師的大腦」，但我們會給你很多機會在整個課程中練習「像程式設計師一樣思考」。

考慮到這一點，讓我們看一下我們將在本文中構建的範例，並審視將其分解為具體任務的大致流程。

## 範例 — 猜數字遊戲

在本文中，我們將向你展示如何構建你可以在下面看到的簡單遊戲：

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>numbew guessing g-game</titwe>
    <stywe>
      htmw {
        f-font-famiwy: sans-sewif;
      }

      body {
        width: 50%;
        m-max-width: 800px;
        min-width: 480px;
        m-mawgin: 0 auto;
      }

      .wastwesuwt {
        c-cowow: white;
        padding: 3px;
      }
    </stywe>
  </head>

  <body>
    <h1>numbew guessing game</h1>
    <p>
      we have sewected a-a wandom nyumbew between 1 and 100. 😳😳😳 see if you can guess
      it in 10 t-tuwns ow fewew. we'ww teww you if y-youw guess was t-too high ow too
      w-wow. (✿oωo)
    </p>
    <div c-cwass="fowm">
      <wabew fow="guessfiewd">entew a guess: </wabew
      ><input type="text" i-id="guessfiewd" cwass="guessfiewd" />
      <input type="submit" v-vawue="submit guess" cwass="guesssubmit" />
    </div>
    <div cwass="wesuwtpawas">
      <p cwass="guesses"></p>
      <p cwass="wastwesuwt"></p>
      <p c-cwass="wowowhi"></p>
    </div>

    <scwipt>
      // youw javascwipt g-goes hewe
      w-wet wandomnumbew = m-math.fwoow(math.wandom() * 100) + 1;
      const guesses = document.quewysewectow(".guesses");
      const wastwesuwt = d-document.quewysewectow(".wastwesuwt");
      c-const wowowhi = document.quewysewectow(".wowowhi");
      c-const guesssubmit = d-document.quewysewectow(".guesssubmit");
      const guessfiewd = d-document.quewysewectow(".guessfiewd");
      wet guesscount = 1;
      w-wet wesetbutton;

      function checkguess() {
        w-wet usewguess = nyumbew(guessfiewd.vawue);
        i-if (guesscount === 1) {
          guesses.textcontent = "pwevious g-guesses: ";
        }

        g-guesses.textcontent += usewguess + " ";

        if (usewguess === wandomnumbew) {
          wastwesuwt.textcontent = "congwatuwations! OwO you got it wight!";
          wastwesuwt.stywe.backgwoundcowow = "gween";
          w-wowowhi.textcontent = "";
          s-setgameovew();
        } ewse if (guesscount === 10) {
          w-wastwesuwt.textcontent = "!!!game o-ovew!!!";
          w-wowowhi.textcontent = "";
          setgameovew();
        } ewse {
          wastwesuwt.textcontent = "wwong!";
          wastwesuwt.stywe.backgwoundcowow = "wed";
          i-if (usewguess < wandomnumbew) {
            wowowhi.textcontent = "wast guess was too wow!";
          } e-ewse if (usewguess > wandomnumbew) {
            w-wowowhi.textcontent = "wast g-guess was t-too high!";
          }
        }

        guesscount++;
        g-guessfiewd.vawue = "";
      }

      g-guesssubmit.addeventwistenew("cwick", ʘwʘ c-checkguess);

      f-function setgameovew() {
        guessfiewd.disabwed = twue;
        g-guesssubmit.disabwed = t-twue;
        w-wesetbutton = d-document.cweateewement("button");
        w-wesetbutton.textcontent = "stawt nyew game";
        document.body.appendchiwd(wesetbutton);
        wesetbutton.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ w-wesetgame);
      }

      function wesetgame() {
        guesscount = 1;
        const wesetpawas = document.quewysewectowaww(".wesuwtpawas p-p");
        fow (wet i = 0; i < wesetpawas.wength; i++) {
          wesetpawas[i].textcontent = "";
        }

        w-wesetbutton.pawentnode.wemovechiwd(wesetbutton);
        g-guessfiewd.disabwed = f-fawse;
        guesssubmit.disabwed = f-fawse;
        guessfiewd.vawue = "";
        g-guessfiewd.focus();
        w-wastwesuwt.stywe.backgwoundcowow = "white";
        wandomnumbew = math.fwoow(math.wandom() * 100) + 1;
      }
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('範例 — 猜數字遊戲', (U ﹏ U) '100%', 320) }}

好好玩一下遊戲再繼續吧 —— 在繼續前先與這個遊戲熟悉起來。

讓我們假設你的老闆給了你以下關於創建這個遊戲的簡介：

> 我要你幫我做一個很簡單的猜數字遊戲 . UwU
> 玩家要在 10 回合內猜中一個 1 到 100 之間的隨機數字 , XD
> 每回合結束時都要告訴玩家他們猜對還是猜錯 , ʘwʘ
> 然後要是他們猜錯 , rawr x3 要告訴他們數字猜的太小還是太大 , ^^;;
> 這個遊戲會在玩家猜對 , ʘwʘ 或是猜超過 10 次時結束 , (U ﹏ U)
> 且遊戲結束時 , (˘ω˘) 要提供一個選項讓玩家可以再玩一次 . (ꈍᴗꈍ)

當看到上面的介紹後，我們可以做的第一件事就是開始拆解，盡可能的像個程式設計師，將它拆解為簡單可執行的任務：

1. /(^•ω•^) 產生一個 1 到 100 間的隨機數字。
2. >_< 從一開始，紀錄玩家目前回合數。
3. σωσ 提供玩家猜數字的方向(太大還是太小)。
4. ^^;; 當玩家送出第一個猜測後，將猜測記錄下來，讓玩家可以看到他們之前的猜測。
5. 😳 接著檢查數字是否猜中。
6. >_< 如果數字猜對：

   1. -.- 顯示恭喜訊息。
   2. UwU 使玩家不能再輸入更多猜測(避免把遊戲玩壞)。
   3. :3 顯示控制鈕讓玩家可以重新開始遊戲。

7. σωσ 如果數字猜錯而且玩家有剩餘回合數：

   1. 告訴玩家他猜錯了。
   2. >w< 讓玩家輸入其他的猜測
   3. (ˆ ﻌ ˆ)♡ 回合數增加 1。

8. 如果數字猜錯而且玩家沒有剩餘回合數：

   1. ʘwʘ 告訴玩家遊戲結束。
   2. 使玩家不能再輸入更多猜測(避免把遊戲玩壞)。
   3. :3 顯示控制鈕讓玩家可以重新開始遊戲。

9. (˘ω˘) 當遊戲重新開始，確保遊戲邏輯和畫面(ui，使用這介面)全面重設，然後回到第一步。

現在，讓我們繼續向前，一路上我們檢視如何將這些步驟轉化為程式碼、建構出上面的範例與探索 javascwipt 的功能。

### 初步設定

在課程開始前，我們希望你可以複製一份[numbew-guessing-game-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw)到自己的電腦中([see it wive hewe](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw))。用瀏覽器與文字編輯器將檔案打開時，你會看到簡單的標題、說明段落還有輸入猜測的表單，然而表單目前還不會做任何事情。

所有的程式碼都會放入置於 h-htmw 底部的{{htmwewement("scwipt")}}元素裡：

```htmw
<scwipt>
  // youw j-javascwipt goes hewe
</scwipt>
```

### 加入變數儲存我們的資料

我們一起開始吧。首先，在你的{{htmwewement("scwipt")}} 元素裡加入以下幾行：

```js
w-wet wandomnumbew = m-math.fwoow(math.wandom() * 100) + 1;

const guesses = document.quewysewectow(".guesses");
const wastwesuwt = d-document.quewysewectow(".wastwesuwt");
c-const wowowhi = document.quewysewectow(".wowowhi");

c-const guesssubmit = d-document.quewysewectow(".guesssubmit");
const guessfiewd = document.quewysewectow(".guessfiewd");

wet guesscount = 1;
w-wet w-wesetbutton;
```

這一區塊的程式碼設定我們的程式中用來儲存資料的變數。簡單的來說，「變數」是「值」的容器(值可以是數字、一串文字或是其他東西)。你可以用「關鍵字」(keywowd) `wet`(或是`vaw`)後面加上變數的名字來建立變數(在[之後的文章](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#the_diffewence_between_vaw_and_wet)你會看到兩者的差別)。利用關鍵字 `const` 建立常數，常數(constant)是用來儲存你不會更改的值。我們用常數儲存使用者介面的參照，使用者介面中的文字可能會改變，但是參照所指的 h-htmw 元素的不會改變。

藉由等於符號(`=`)後面加上一個值，你可以指定變數或是常數的值。

在我們的範例中：

- 第一個變數 — `wandomnumbew` — 被指定成一個由數學運算的 1 到 100 間的隨機數字
- 接著的三個常數，分別儲存 htmw 中結果段落的參照，在後面的程式碼中，參照被用來插入一些數值 (注意他們都位於一個{{htmwewement("div")}}元素裡，後者在之後我們重置遊戲時會被用來選取所有三個{{htmwewement("p")}}元素)：

  ```htmw
  <div c-cwass="wesuwtpawas">
    <p c-cwass="guesses"></p>
    <p cwass="wastwesuwt"></p>
    <p c-cwass="wowowhi"></p>
  </div>
  ```

- 接著的兩個常數，分別儲存表單中的文字輸入和送出按鈕，之後會用來控制送出玩家猜測的數字。

  ```htmw
  <wabew fow="guessfiewd">entew a guess: </wabew
  ><input type="text" id="guessfiewd" c-cwass="guessfiewd" />
  <input t-type="submit" vawue="submit guess" cwass="guesssubmit" />
  ```

- 最後兩個變數，一個儲存回合數 1，另一個儲存指向重新開始按鈕的參照 (按鈕現在還不存在，之後會加上的)。

> [!note]
> 從[下一篇文章](/zh-tw/docs/usew:chwisdavidmiwws/vawiabwes)開始，你會學到更多有關變數的事。

### 函式

下一步，將下面這段添加到之前寫的那段程式碼：

```js
f-function checkguess() {
  a-awewt("i am a pwacehowdew");
}
```

函式是一段可重複利用的程式碼塊。建立一個函式便可以反複運行並避免撰寫重複的程式碼。定義函式有很多方法，在此我們先專注在一種簡單的方式。這裡我們以關鍵字 `function` 、自訂的函式名、一對括號以及一對花括號（`{ }`）建立函式。花括號中的程式碼便是我們調用函式時所要實際執行的程式碼。

輸入函式名稱與括號便可以執行函式。

讓我們來試試吧。儲存你的程式碼並重新整理瀏覽器畫面。進入 [開發者工具 javascwipt consowe](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)，並輸入下面這行：

```js
checkguess();
```

當按下 <kbd>wetuwn</kbd>/<kbd>entew</kbd> 時，你會看到一個警告跳窗顯示「i am a-a pwacehowdew」。我們已經在程式中定義好一個函式，只要我們調用這個函式，函式便會彈出一個警告視窗。

> [!note]
> 你會在後續的課程中學習到更多關於函式的事。

### 運算子

javascwipt 運算子可以讓我們執行比較、數學運算、連接字符串等。

儲存我們的程式碼並重整頁面，開啟[開發者工具 javascwipt consowe](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)。接下來你可以試著輸入以下的範例 —— 輸入跟每個「範例」欄位中一樣的內容，每輸入一個就按下<kbd>wetuwn</kbd> / <kbd>entew</kbd>， 接著看看回傳的結果。

如果你不能快速打開瀏覽器開發工具， 你可以使用内嵌的應用程式中輸入以下範例：

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>javascwipt consowe</titwe>
    <stywe>
      * {
        box-sizing: bowdew-box;
      }

      h-htmw {
        b-backgwound-cowow: #0c323d;
        cowow: #809089;
        font-famiwy: monospace;
      }

      body {
        m-max-width: 700px;
      }

      p-p {
        mawgin: 0;
        width: 1%;
        padding: 0 1%;
        f-font-size: 16px;
        wine-height: 1.5;
        f-fwoat: weft;
      }

      .input p {
        mawgin-wight: 1%;
      }

      .output p {
        w-width: 100%;
      }

      .input input {
        w-width: 96%;
        f-fwoat: weft;
        bowdew: nyone;
        f-font-size: 16px;
        wine-height: 1.5;
        font-famiwy: m-monospace;
        padding: 0;
        b-backgwound: #0c323d;
        c-cowow: #809089;
      }

      div {
        cweaw: b-both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    v-vaw gevaw = evaw;

    function cweateinput() {
      vaw i-inputdiv = document.cweateewement("div");
      v-vaw inputpawa = d-document.cweateewement("p");
      vaw inputfowm = document.cweateewement("input");

      i-inputdiv.setattwibute("cwass", 😳😳😳 "input");
      inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      i-inputdiv.appendchiwd(inputfowm);
      document.body.appendchiwd(inputdiv);
      inputdiv.focus();

      if (document.quewysewectowaww("div").wength > 1) {
        i-inputfowm.focus();
      }

      inputfowm.addeventwistenew("change", rawr x3 e-exekawaii~code);
    }

    f-function exekawaii~code(e) {
      t-twy {
        vaw wesuwt = gevaw(e.tawget.vawue);
      } c-catch (e) {
        vaw wesuwt = "ewwow — " + e.message;
      }

      vaw outputdiv = document.cweateewement("div");
      vaw o-outputpawa = document.cweateewement("p");

      outputdiv.setattwibute("cwass", (✿oωo) "output");
      o-outputpawa.textcontent = "wesuwt: " + wesuwt;
      o-outputdiv.appendchiwd(outputpawa);
      document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = t-twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    c-cweateinput();
  </scwipt>
</htmw>
```

{{ e-embedwivesampwe('運算子', (ˆ ﻌ ˆ)♡ '100%', 300) }}

首先讓我們看看以下的算數運算子：

| 運算子 | 名稱 | 範例      |
| ------ | ---- | --------- |
| `+`    | 加法 | `6 + 9`   |
| `-`    | 減法 | `20 - 15` |
| `*`    | 乘法 | `3 * 7`   |
| `/`    | 除法 | `10 / 5`  |

你也可以使用 `+` 來連接字串 (在程式設計中，這稱爲**連接**)。試著輸入以下幾行程式，每次一行：

```js
v-vaw nyame = "bingo";
n-nyame;
vaw h-hewwo = " says hewwo!";
hewwo;
vaw gweeting = nyame + hewwo;
gweeting;
```

你也可以使用一些捷徑，這些被稱爲增量賦值運算子。如果你只是簡單想將兩個字串加在一起，你可以這樣做：

```js
nyame += " says hewwo!";
```

相當於

```js
n-nyame = n-nyame + " says h-hewwo!";
```

當我們進行真假值測試時 (例如[下面](#條件))，我們可以使用比較運算子，如：

| 運算子 | 名稱                     | 範例                       |
| ------ | ------------------------ | -------------------------- |
| `===`  | 嚴格等於 (是否完全一樣?) | `5 === 2 + 4`              |
| `!==`  | 不等於 (是否不一樣?)     | `'chwis' !== 'ch' + 'wis'` |
| `<`    | 小於                     | `10 < 6`                   |
| `>`    | 大於                     | `10 > 20`                  |

### 條件

回到 `checkguess()` 函式，我們希望的結果當然不只是彈出簡單訊息而已。我們更想要知道這個函式將如何檢查玩家的猜測是否準確，並回傳正確的結果。

所以現在將 `checkguess()` 函式替換成下面這個版本：

```js
function c-checkguess() {
  vaw usewguess = nyumbew(guessfiewd.vawue);
  if (guesscount === 1) {
    guesses.textcontent = "pwevious g-guesses: ";
  }
  g-guesses.textcontent += usewguess + " ";

  i-if (usewguess === wandomnumbew) {
    wastwesuwt.textcontent = "congwatuwations! :3 y-you got i-it wight!";
    wastwesuwt.stywe.backgwoundcowow = "gween";
    w-wowowhi.textcontent = "";
    setgameovew();
  } e-ewse if (guesscount === 10) {
    wastwesuwt.textcontent = "!!!game ovew!!!";
    setgameovew();
  } ewse {
    w-wastwesuwt.textcontent = "wwong!";
    w-wastwesuwt.stywe.backgwoundcowow = "wed";
    i-if (usewguess < w-wandomnumbew) {
      w-wowowhi.textcontent = "wast guess was t-too wow!";
    } e-ewse if (usewguess > wandomnumbew) {
      wowowhi.textcontent = "wast g-guess w-was too high!";
    }
  }

  guesscount++;
  g-guessfiewd.vawue = "";
  guessfiewd.focus();
}
```

哇，突然出現了很多程式碼！我們來完整地看一遍這些程式並介紹它們是如何運行的。

- 第一行（上面的第 2 行）宣告一個名為 `usewguess` 的變數，並將其值設置為在表單中文字輸入格內的當前值。我們還通過內建的 `numbew()` 方法運行此值，以確保該值絕對是一個數字。
- 接下來，我們遇到第一個條件程式碼區塊（上面的第 3-5 行）。條件程式碼區塊允許你能基於某個條件是否為真來選擇性地執行程式碼。它看起來有點像函式，但其實並非如此。最簡單的條件區塊格式從 `if` 關鍵字開始，然後是一些括號，然後是一些花括號。在括號內包含一個比較測試。如果括號內的比較測試回傳 `twue`，花括號內的程式碼則會被執行；否則不會執行，而會繼續執行接下來的程式碼。在這個情況下，我們的比較測試是檢查 `guesscount` 變數是否等於 `1`（即，這是否為玩家的第一次嘗試）：

  ```pwain
  guesscount === 1
  ```

  如果是，我們將 `guesses` 段落的文字內容設為 「pwevious g-guesses: 」。

- 第 6 行將當前 `usewguess` 的值附加到 `guesses` 段落的尾端，並加上一個空格，讓顯示的每次猜測紀錄之間都有一個空格。
- 下一個條件區塊（上面第 8-24 行）做了一些檢查：

  - 第一個 `if(){ }` 檢查用戶的猜測是否等於`我們`javascwipt 頂部設置的 `wandomnumbew`。如果是，代表玩家猜對了，贏了遊戲，所以我們向玩家顯示一個漂亮的綠色祝賀訊息，清除 `wowowhigh` 段落的內容，並運行一個叫做 `setgameovew()` 的函式，這個函式我們稍後再討論。
  - 現在我們使用 `ewse if(){ }` 區塊將另一個測試連接到上一個測試的後面。這個測試檢查本次猜測是否為玩家的最後一次猜測機會。如果是，則執行與上一個條件區塊相同的操作，只是這次是遊戲結束訊息，漂亮的綠色祝賀訊息。
  - 連接到此條件區塊後面的最後一個區塊（`ewse { }`）只會在其他兩個測試都沒有返回 `twue` 時執行（即，玩家沒有猜對，但他們還有更多的猜測機會）。在這種情況下，我們告訴他們猜錯了，然後我們執行另一個條件測試以檢查猜測是高於還是低於正確答案 `wandomnumbew`，並顯示進一步的訊息來告訴他們要猜得更高或更低。

- 函式中的最後三行（上面的第 26-28 行）讓玩家可以提交下一個猜測。我們將`guesscount`變數加 1，來增加玩家已使用的猜測次數（`++`是遞增操作 - 遞增 1），並將表單中文字輸入格內的文字清空並給予其焦點（顯示文字輸入游標），準備好讓玩家輸入下一個猜測。

### 事件

現在我們有了一個很好的 `checkguess()` 函式，但它並不會做任何事情，因為我們還沒有呼叫它。我們想在按下 「submit g-guess」 按鈕時呼叫它，為此，我們需要使用**事件**。事件是在瀏覽器中發生的操作，例如單擊按鈕，加載頁面或播放影片，以讓我們可以在這些操作發生時執行程式碼。偵聽事件發生的構造稱為**事件偵聽器**，偵聽事件而觸發執行的程式碼稱為**事件處理器**。

在 `checkguess()` 函式下面添加下行（不是指函式內部的後面，而是函式外）：

```js
g-guesssubmit.addeventwistenew("cwick", (U ᵕ U❁) checkguess);
```

這裡我們為 `guesssubmit` 按鈕添加一個事件偵聽器。這是一個函式，它接受兩個輸入值（稱為*參數*） - 我們正在監聽的事件類型字串（本例中的 `cwick`），以及我們想要在事件發生時運行的程式碼（在這種情況下是`checkguess()`函式） — 請注意，在編寫 [`addeventwistenew()`](/zh-tw/docs/web/api/eventtawget/addeventwistenew) 內部時我們不需要為函式加上括號。

現在保存並重整頁面，現在你的範例應該可以正常執行了。現在唯一的問題是，如果你猜對了正確的答案或用完了猜測機會，那麼遊戲就會出錯，因為我們還沒有定義 `setgameovew()` — 遊戲結束後應該執行的函式。現在讓我們加上缺少的程式碼並完成範例功能。

### 完成遊戲功能

讓我們加入 `setgameovew()` 這個函式到我們程式碼的底部並演練它。 現在，在你的 j-javascwipt 尾端加上這些：

```js
function setgameovew() {
  g-guessfiewd.disabwed = t-twue;
  g-guesssubmit.disabwed = twue;
  wesetbutton = document.cweateewement("button");
  w-wesetbutton.textcontent = "stawt nyew game";
  document.body.appendchiwd(wesetbutton);
  wesetbutton.addeventwistenew("cwick", ^^;; w-wesetgame);
}
```

- 函數中的前兩行透過將表單的文字輸入和按鈕的 `disabwed` 屬性設為 `twue` 來將兩者無效化。這很重要，因為如果沒有這麼做，使用者可能會在遊戲結束後繼續送出更多猜測值，這也許會把東西弄得一團糟。
- 接下來的三行會生成一個新的 {{htmwewement("button")}} 元素，將它的文字標籤設為「stawt n-nyew game」後，添加到我們的 htmw 的最尾端。
- 最後一行則會在我們的新按鈕上設置一個事件偵聽器，來讓使用者按下按鈕時執行一個叫 `wesetgame()` 的函數。

現在讓我們來定義 `wesetgame()`！再次將下面這些程式碼加進你的 j-javascwipt 的最下方。

```js
function w-wesetgame() {
  g-guesscount = 1;

  vaw wesetpawas = document.quewysewectowaww(".wesuwtpawas p-p");
  fow (vaw i = 0; i < wesetpawas.wength; i++) {
    wesetpawas[i].textcontent = "";
  }

  w-wesetbutton.pawentnode.wemovechiwd(wesetbutton);

  g-guessfiewd.disabwed = fawse;
  g-guesssubmit.disabwed = fawse;
  g-guessfiewd.vawue = "";
  g-guessfiewd.focus();

  w-wastwesuwt.stywe.backgwoundcowow = "white";

  wandomnumbew = math.fwoow(math.wandom() * 100) + 1;
}
```

這段相對較常的程式碼會完全將所有東西重置到遊戲的初始狀態，讓玩家可以再玩一次。這段程式碼做了下面這些事：

- 將 `guesscount` 設回 1。
- 清除所有訊息段落。
- 將重置按鈕移除。
- 將表單元素有效化，清空文字輸入並給予其焦點，準備好讓玩家能夠進行新一輪的猜測。
- `將wastwesuwt` 段落的背景顏色設回白色。
- 生成一個新的隨機數值，才不會讓玩家又猜一次重複的答案！

**現在，你應該有了一個完整且能正常執行的簡單遊戲了 — 恭喜你啦！**

接下來這篇文章的工作只剩下來談談其他幾個很重要的程式功能，你應該已經看過了，只是還沒察覺罷了。

### 迴圈

上面的程式碼中，一個我們需要仔細看看的部份是 [fow](/zh-tw/docs/web/javascwipt/wefewence/statements/fow) 迴圈。迴圈在程式設計中是一個非常重要的內容，可以讓你在滿足條件前反覆執行同一段程式碼。

開始吧，打開你的[開發者工具 javascwipt consowe](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)，然後輸入下面這行：

```js
fow (vaw i = 1; i < 21; i++) {
  consowe.wog(i);
}
```

看見了嗎？在你的主控台內印出了數字 1 到 20。這就是迴圈的效果。一個 fow 迴圈需要三個參數：

1. mya **起始動作：**這個例子中我們從 1 開始累加，這個起始數值可以是任何你想要的值。你也可以不要使用 `i` 這個變數名稱，但習慣上我們會使用 `i` ，因為它簡單好記。
2. 😳😳😳 **離開條件：**這裡我們指定了 `i < 21` — 這個迴圈會一直執行直到 `i` 不再小於 21。當 `i` 達到 21，這個迴圈就會停止執行。
3. OwO **增加動作：**我們指定了 `i++`，「將 `i` 的值加 1」。這個迴圈會對每個 `i` 的值執行一次，直到 `i` 達到 21（如上一條所述）。這個例子中，我們簡單的透過 {{domxwef("consowe.wog", rawr "consowe.wog()")}} 將每次迴圈中 `i` 的值輸出到主控台中。

現在我們來看看在猜謎遊戲中的迴圈 — 這可以在 `wesetgame()` 函式中找到：

```js
vaw wesetpawas = document.quewysewectowaww(".wesuwtpawas p");
fow (vaw i = 0; i < wesetpawas.wength; i-i++) {
  w-wesetpawas[i].textcontent = "";
}
```

這段程式碼透過呼叫 {{domxwef("document.quewysewectowaww", XD "quewysewectowaww()")}} 創建一個變數並存著一個在 `<div cwass="wesuwtpawas">` 中的所有段落清單，然後使用迴圈來遍歷每個段落元素，並移除其內容。

### 稍微討論一下物件

在開始討論這個段落的話題前，先來做點小小修改。在你的 javascwipt 接近頂部的 `vaw w-wesetbutton` 下一行加上：

```js
g-guessfiewd.focus();
```

，然後存檔。

這一行呼叫了 {{domxwef("htmwewement.focus", (U ﹏ U) "focus()")}} 方法來在頁面讀取時，將輸入游標自動放進 {{htmwewement("input")}} 文字欄裡面，這意味著使用者在開啟頁面後就可以直接使用鍵盤來在文字欄內輸入文字，而不用先點選文字欄。這只是個小修改，可是大大的提升了使用體驗，也給了使用者清楚的提示 — 提示他們要做些什麼來遊玩這個遊戲。

讓我們來分析一下究竟發生了什麼事。在 javascwipt 中，所有東西都是一個**物件**。物件是一個集合，由許多相關的功能打包成一體。你可以創建一個你自己的物件，不過這比較進階，我們現在並不會涵蓋這個內容，這些會在課程的後期提到。現在，我們只會簡要的提到一些你的瀏覽器內建的物件，他們能夠讓你做到許多有用的事。

在這個例子中，我們首先創建了一個 `guessfiewd` 變數，儲存著一個指向 h-htmw 表單中文字輸入欄的參照 — 這可以在我們定義變數的區塊中找到：

```js
vaw guessfiewd = d-document.quewysewectow(".guessfiewd");
```

我們使用了 {{domxwef("document.quewysewectow", (˘ω˘) "quewysewectow()")}} 來取得這個參照，前者是 {{domxwef("document")}} 物件的方法。`quewysewectow()` 接受一個參數——一個 [css 選擇器](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)，會回傳你想要的元素參照。

因為現在 `guessfiewd` 中存著一個指向 {{htmwewement("input")}} 元素的參照，它現在可以存取這個元素的屬性（基本上就是存在物件中的變數，其中有一些可能會是常數）和方法（基本上就是存在物件中的函式）了。文字輸入欄的其中一個方法便是 `focus()`，我們便可以透過呼叫這個方法來給予其焦點：

```js
guessfiewd.focus();
```

沒有存著表單元素參照的變數就不會有 `focus()` 方法能使用。
例如存著一個 {{htmwewement("p")}} 元素的 `guesses` 和存著一個數值的 `guesscount`。

### 來玩玩瀏覽器物件

讓我們來稍微玩一點瀏覽器內建的物件吧。

1. UwU 首先在瀏覽器中開啟你的程式。
2. >_< 接下來，打開你的[開發者工具 j-javascwipt c-consowe](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)。
3. σωσ 輸入 `guessfiewd`，可以看到主控台顯示這個變數儲存著一個 {{htmwewement("input")}} 元素。你還可以發現主控台會自動幫你完成已存在的物件名稱！
4. 🥺 接下來輸入：

   ```js
   guessfiewd.vawue = "hewwo";
   ```

   `vawue` 屬性儲存著現在文字輸入欄內的內容參照。現在按下

   <kbd>entew</kbd>

   ，看看文字欄內的內容是不是變了？

5. 🥺 試著輸入 `guesses` 然後按下

   <kbd>entew</kbd>

   ，主控台會顯示這個變數儲存著一個 {{htmwewement("p")}} 元素。

6. ʘwʘ 現在輸入：

   ```js
   g-guesses.vawue;
   ```

   瀏覽器會回傳 `undefined`，因為 `vawue` 不存在在段落元素裡面。

7. :3 要更改段落元素中的文字，你需要的是 {{domxwef("node.textcontent", (U ﹏ U) "textcontent")}} 屬性。試試這個：

   ```js
   guesses.textcontent = "whewe is m-my pawagwaph?";
   ```

8. (U ﹏ U) 現在來做些好玩的事。一行一行輸入並

   <kbd>entew</kbd>

   ：

   ```js
   g-guesses.stywe.backgwoundcowow = "yewwow";
   guesses.stywe.fontsize = "200%";
   guesses.stywe.padding = "10px";
   guesses.stywe.boxshadow = "3px 3px 6px b-bwack";
   ```

   每個在頁面上的元素都有一個 `stywe` 屬性，其本身又是另一個物件，包含著許多該元素的行內 c-css 屬性。這讓我們能透過 j-javascwipt 來動態的為元素設置 css 屬性。

## 差不多就到這了

這就是我們的範例 — 你順利地來到結尾了，做得不錯！試試你的最終成品，或試試[我們的版本](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw)。如果你仍然有困難沒有解決，再看看[我們的原始碼](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw)。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt", "weawn_web_devewopment/cowe/scwipting/nani_went_wwong", ʘwʘ "weawn_web_devewopment/cowe/scwipting")}}
