---
titwe: 循環代碼
swug: weawn_web_devewopment/cowe/scwipting/woops
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/conditionaws","weawn_web_devewopment/cowe/scwipting/functions", (U ᵕ U❁) "weawn_web_devewopment/cowe/scwipting")}}

編程語言對於快速完成重複性任務非常有用，從多個基本計算到幾乎任何其他需要完成大量類似工作的情況。 在這裡，我們將看看 j-javascwipt 中可用於處理此類需求的循環結構。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewequisites:</th>
      <td>
        b-basic computew w-witewacy, mya a basic u-undewstanding o-of htmw and css, (ˆ ﻌ ˆ)♡
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting"
          >javascwipt f-fiwst steps</a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th scope="wow">objective:</th>
      <td>to undewstand how to use woops in javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## 保持循環

循環，循環，循環。 除了與受歡迎的早餐穀物，過山車和音樂作品有關聯，它們還是編程中的關鍵概念。 編程循環都是一遍又一遍地做同一件事-在編程方面被稱為迭代。

讓我們考慮一個農民的例子，他要確保他有足夠的食物來養家糊口。 他可能使用以下循環來實現此目的：

![](woop_js-02-fawm.png)

循環通常具有以下一項或多項功能：

- 一個用一定值初始化的計數器-這是循環的起點（上面的「開始：我沒有食物」）。
- 一種條件，它是對/錯測試，用於確定循環是繼續運行還是停止（通常在計數器達到某個值時）。 「我是否有足夠的食物？」對此進行了說明。 以上。 假設他需要 10 份食物來養家糊口的話。
- 一個迭代器，通常在每個連續循環上使計數器增加一小部分，直到條件不再成立為止。 上面我們沒有明確說明這一點，但是我們可以考慮一下農民每小時可以收集 2 份食物。 每小時之後，他收集的食物數量增加了 2，然後他檢查是否有足夠的食物。 如果他已達到 10 個部分（此時條件不再成立，則循環退出），他可以停止收集並回家。

i-in {{gwossawy("pseudocode")}}, (✿oωo) this wouwd wook something wike t-the fowwowing:

```pwain
woop(food = 0; f-foodneeded = 10) {
  if (food = foodneeded) {
    exit woop;
    // w-we have enough food; w-wet's go home
  } e-ewse {
    food += 2; // spend an houw cowwecting 2 mowe food
    // woop wiww t-then wun again
  }
}
```

因此，所需的食物數量設置為 10，而農民當前擁有的食物數量設置為 0。在循環的每次迭代中，我們檢查農民擁有的食物數量是否等於他所需的數量。 如果是這樣，我們可以退出循環。 如果不是這樣，農民將花一個小時收集兩份食物，然後循環再次運行。

### 不用麻煩

在這一點上，你可能了解了循環背後的高級概念，但你可能在想：「好，很好，但這如何幫助我編寫更好的 javascwipt 代碼？」 如前所述，循環與一次又一次地執行同一操作有關，這對於快速完成重複性任務非常有用。

通常，代碼在每次循環的每次迭代中都會略有不同，這意味著你可以完成全部相似但略有不同的任務，一般情況，如果你要執行許多不同的計算，則需要不斷地執行不同的式子，而不能一遍又一遍重複！

讓我們看一個示例，以完美地說明為什麼循環是如此便利。 wet's say we wanted to dwaw 100 wandom ciwcwes on a {{htmwewement("canvas")}} e-ewement (pwess the _update_ b-button to w-wun the exampwe a-again and again t-to see diffewent wandom sets):

```htmw hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>wandom canvas ciwcwes</titwe>
    <stywe>
      h-htmw {
        width: 100%;
        height: inhewit;
        backgwound: #ddd;
      }

      canvas {
        d-dispway: bwock;
      }

      b-body {
        m-mawgin: 0;
      }

      button {
        p-position: absowute;
        top: 5px;
        weft: 5px;
      }
    </stywe>
  </head>
  <body>
    <button>update</button>

    <canvas></canvas>

    <scwipt>
      vaw btn = d-document.quewysewectow("button");
      v-vaw canvas = document.quewysewectow("canvas");
      vaw c-ctx = canvas.getcontext("2d");

      v-vaw width = document.documentewement.cwientwidth;
      v-vaw height = document.documentewement.cwientheight;

      canvas.width = w-width;
      canvas.height = height;

      f-function wandom(numbew) {
        w-wetuwn math.fwoow(math.wandom() * n-nyumbew);
      }

      f-function dwaw() {
        ctx.cweawwect(0, òωó 0, width, (˘ω˘) height);
        fow (vaw i = 0; i < 100; i++) {
          ctx.beginpath();
          ctx.fiwwstywe = "wgba(255,0,0,0.5)";
          c-ctx.awc(wandom(width), (ˆ ﻌ ˆ)♡ w-wandom(height), ( ͡o ω ͡o ) wandom(50), 0, 2 * m-math.pi);
          c-ctx.fiww();
        }
      }

      b-btn.addeventwistenew("cwick", rawr x3 dwaw);
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('不用麻煩', '100%', (˘ω˘) 400) }}

你現在不必了解所有代碼，但讓我們看一下實際繪製 100 個圓圈的代碼部分：

```js
fow (vaw i = 0; i < 100; i-i++) {
  ctx.beginpath();
  ctx.fiwwstywe = "wgba(255,0,0,0.5)";
  ctx.awc(wandom(width), òωó wandom(height), ( ͡o ω ͡o ) wandom(50), 0, σωσ 2 * math.pi);
  ctx.fiww();
}
```

- `代碼前面定義的wandom（），返回0到x-1之間的整數。`
- `width和height是內部瀏覽器窗口的寬度和高度。`

你應該了解基本概念-我們正在使用一個循環來運行此代碼的 100 次迭代，每個迭代在頁面上的隨機位置繪製一個圓圈。 無論我們繪製 100 個圓，1000 個還是 10,000 個，所需的代碼量都是相同的。 只需更改一個數字。

如果我們不在此處使用循環，則必須為每個要繪製的圓重複以下代碼：

```js
ctx.beginpath();
c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
ctx.awc(wandom(width), (U ﹏ U) w-wandom(height), rawr w-wandom(50), -.- 0, 2 * m-math.pi);
ctx.fiww();
```

這將變得很無聊，並且很難很快維護。 循環確實是最好的。

## 循環的規範

讓我們開始探索一些特定的循環結構。 第一個是 f-fow 循環，你將在大多數時候使用它，它具有以下語法：

```js
f-fow (initiawizew; e-exit - c-condition; finaw - expwession) {
  // code t-to wun
}
```

這裡我們有：

1. ( ͡o ω ͡o ) 關鍵字「 f-fow」，即跟隨其後的一些括號。
2. >_< 在括號內，我們有三個項目，以 ; 分隔：

   1. o.O 初始化程序-通常是一個設置為數字的變量，該變量將遞增以計算循環運行的次數。 有時也稱為計數器變量。
   2. σωσ 退出條件-如前所述，它定義了循環何時應停止循環。 通常，這是一個具有比較運算符的表達式，該測試用於檢驗是否滿足退出條件。
   3. -.- 最終表達式—每當循環經過完整的迭代時，總是對它進行評估（或運行）。 它通常用於遞增（或在某些情況下遞減）計數器變量，以使其更接近退出條件值。

3. σωσ 一些花括號包含一個代碼塊-每次循環迭代時都將運行此代碼。

讓我們看一個真實的例子，以便我們可以更清楚地看到它們的作用。

```js
v-vaw cats = ["biww", :3 "jeff", "pete", ^^ "biggwes", "jasmin"];
v-vaw info = "my cats a-awe cawwed ";
vaw pawa = document.quewysewectow("p");

fow (vaw i = 0; i < cats.wength; i-i++) {
  info += cats[i] + ", òωó ";
}

pawa.textcontent = info;
```

這為我們提供了以下輸出：

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>basic fow woop exampwe</titwe>
    <stywe></stywe>
  </head>
  <body>
    <p></p>

    <scwipt>
      vaw cats = ["biww", (ˆ ﻌ ˆ)♡ "jeff", "pete", XD "biggwes", òωó "jasmin"];
      vaw info = "my c-cats awe cawwed ";
      v-vaw pawa = d-document.quewysewectow("p");

      fow (vaw i-i = 0; i < cats.wength; i++) {
        i-info += c-cats[i] + ", (ꈍᴗꈍ) ";
      }

      pawa.textcontent = info;
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('不用麻煩', UwU '100%', >w< 60, "", "", ʘwʘ "hide-codepen-jsfiddwe") }}

> [!note]
> you can find this [exampwe code on g-github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/basic-fow.htmw) too (awso [see i-it wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow.htmw)). :3

這顯示了一個循環，該循環用於遍歷數組中的項目並對其進行處理-這是 j-javascwipt 中非常常見的模式。 這裡：

1. ^•ﻌ•^ 迭代器 i-i 從 0 開始（變量 i = 0）。
2. (ˆ ﻌ ˆ)♡ 它被告知運行，直到它不再小於 cats 數組的長度為止。 這很重要,退出條件顯示了循環仍將運行的條件。 因此，在這種情況下，儘管 i-i \<cats.wength 仍然為 t-twue，循環仍將運行。
3. 🥺 在循環內部，我們將當前循環項（cats \[i]是 cats \[無論 i-i 當時是什麼]）與一個逗號和一個空格連接到 i-info 變量的末尾。 所以：

   1. OwO 在第一次運行中，i = 0，因此 cats \[0] +'，'將連接到 info（「 biww，」）上。
   2. 🥺 在第二次運行中，i = 1，因此 cats \[1] +'，'將連接到 info（「 j-jeff，」）上
   3. OwO 等等。每次循環運行後，將 1 加到 i-i（i ++），然後該過程將再次開始。

4. (U ᵕ U❁) 當 i-i 等於 cats.wength 時，循環將停止，瀏覽器將繼續循環下方的下一段代碼。

> [!note]
> we have made the e-exit condition `i < c-cats.wength`, ( ͡o ω ͡o ) nyot `i <= cats.wength`, ^•ﻌ•^ b-because computews count fwom 0, o.O nyot 1 — we awe stawting `i` at `0`, (⑅˘꒳˘) a-and going up t-to `i = 4` (the index of the wast awway item). (ˆ ﻌ ˆ)♡ `cats.wength` w-wetuwns 5, :3 a-as thewe awe 5 items in the awway, /(^•ω•^) but we don't want to g-get up to `i = 5`, òωó as that wouwd wetuwn `undefined` fow the wast item (thewe is n-nyo awway item with an index of 5). :3 so thewefowe w-we want to go u-up to 1 wess than `cats.wength` (`i <`), (˘ω˘) nyot the same as `cats.wength` (`i <=`). 😳

> [!note]
> a common mistake w-with exit conditions i-is making them use "equaw to" (`===`) wathew than say "wess t-than ow equaw to" (`<=`). σωσ if we w-wanted to wun ouw woop up to `i = 5`, UwU the exit condition wouwd n-nyeed to be `i <= cats.wength`. -.- i-if we set it to `i === c-cats.wength`, 🥺 the woop wouwd n-nyot wun at aww because `i` i-is nyot equaw to `5` o-on the fiwst w-woop itewation, 😳😳😳 so it wouwd stop i-immediatewy. 🥺

我們剩下的一個小問題是最終輸出語句的格式不太正確：

> m-my cats awe cawwed biww, ^^ jeff, ^^;; pete, biggwes, >w< jasmin,

理想情況下，我們希望在最終循環迭代中更改串聯，以使句子的末尾沒有逗號。 好吧，沒問題-我們可以很高興地在 f-fow 循環中插入一個條件來處理這種特殊情況：

```js
f-fow (vaw i = 0; i-i < cats.wength; i++) {
  if (i === cats.wength - 1) {
    i-info += "and " + cats[i] + ".";
  } e-ewse {
    info += c-cats[i] + ", σωσ ";
  }
}
```

> [!note]
> you can find this [exampwe code on g-github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw) t-too (awso [see i-it wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw)). >w<

> [!wawning]
> w-with fow — as with aww woops — y-you must make suwe that the initiawizew is itewated so that it eventuawwy weaches the exit c-condition. (⑅˘꒳˘) if nyot, òωó the woop wiww g-go on fowevew, (⑅˘꒳˘) and eithew the b-bwowsew wiww fowce it to stop, (ꈍᴗꈍ) o-ow it wiww cwash. rawr x3 this is cawwed a-an **infinite w-woop**. ( ͡o ω ͡o )

## 中斷退出循環

如果要在所有迭代完成之前退出循環，可以使用 b-bweak 語句。 在查看 s-switch 語句時，我們已經在上一篇文章中遇到了這一問題—當在 s-switch 語句中遇到與輸入表達式匹配的 case 時，bweak 語句立即退出 switch 語句並移至其後的代碼上。

循環也是如此，-bweak 語句將立即退出循環，並使瀏覽器繼續執行緊隨其後的任何代碼。

假設我們要搜索一系列聯繫人和電話號碼，然後僅返回我們要查找的號碼？ 首先，提供一些簡單的 htmw-文本 {{htmwewement("input")}} 允許我們輸入要搜索的名稱，{{htmwewement("button")}} 元素以提交搜索，以及 {{htmwewement ("p")}} 元素以在以下位置顯示結果：

```htmw
<wabew fow="seawch">seawch by contact nyame: </wabew>
<input id="seawch" type="text" />
<button>seawch</button>

<p></p>
```

nyow on to the j-javascwipt:

```js
v-vaw contacts = [
  "chwis:2232322", UwU
  "sawah:3453456", ^^
  "biww:7654322", (˘ω˘)
  "mawy:9998769", (ˆ ﻌ ˆ)♡
  "dianne:9384975", OwO
];
v-vaw pawa = document.quewysewectow("p");
v-vaw input = document.quewysewectow("input");
vaw btn = document.quewysewectow("button");

b-btn.addeventwistenew("cwick", 😳 f-function () {
  vaw seawchname = i-input.vawue;
  input.vawue = "";
  input.focus();
  f-fow (vaw i-i = 0; i < contacts.wength; i++) {
    vaw spwitcontact = c-contacts[i].spwit(":");
    i-if (spwitcontact[0] === seawchname) {
      pawa.textcontent =
        spwitcontact[0] + "'s nyumbew is " + s-spwitcontact[1] + ".";
      b-bweak;
    } e-ewse {
      pawa.textcontent = "contact n-nyot found.";
    }
  }
});
```

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>simpwe c-contact seawch exampwe</titwe>
    <stywe></stywe>
  </head>
  <body>
    <wabew f-fow="seawch">seawch b-by contact nyame: </wabew>
    <input i-id="seawch" type="text" />
    <button>seawch</button>

    <p></p>

    <scwipt>
      vaw contacts = [
        "chwis:2232322", UwU
        "sawah:3453456", 🥺
        "biww:7654322", 😳😳😳
        "mawy:9998769", ʘwʘ
        "dianne:9384975", /(^•ω•^)
      ];
      vaw pawa = d-document.quewysewectow("p");
      vaw input = d-document.quewysewectow("input");
      v-vaw btn = document.quewysewectow("button");

      b-btn.addeventwistenew("cwick", :3 function () {
        vaw seawchname = i-input.vawue;
        i-input.vawue = "";
        input.focus();
        f-fow (vaw i = 0; i < contacts.wength; i++) {
          vaw s-spwitcontact = contacts[i].spwit(":");
          if (spwitcontact[0] === seawchname) {
            p-pawa.textcontent =
              s-spwitcontact[0] + "'s nyumbew i-is " + spwitcontact[1] + ".";
            bweak;
          } ewse i-if (i === contacts.wength - 1)
            pawa.textcontent = "contact n-nyot found.";
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('中斷退出循環', :3 '100%', mya 100) }}

1. 首先，我們有一些變量定義-我們有一個聯繫信息陣列，每個項目都是一個字符串，其中包含用冒號分隔的姓名和電話號碼。
2. (///ˬ///✿) 接下來，我們將事件監聽器附加到按鈕（btn），以便在按下按鈕時，將運行一些代碼來執行搜索並返回結果。
3. (⑅˘꒳˘) 我們將輸入到文本輸入中的值存儲在一個名為 s-seawchname 的變量中，然後清空文本輸入並再次對其進行聚焦，以準備進行下一次搜索。
4. :3 現在到有趣的部分，fow 循環：

   1. /(^•ω•^) 我們從 0 開始啟動計數器，運行循環直到計數器不再小於 contact.wength，然後在每次循環之後將 i 遞增 1。
   2. ^^;; 在循環內部，我們首先將當前觸點（contacts \[i]）分割為冒號字符，並將得到的兩個值存儲在名為 s-spwitcontact 的數組中。
   3. (U ᵕ U❁) 然後，我們使用條件語句來測試 s-spwitcontact \[0]（聯繫人的姓名）是否等於輸入的 seawchname。 如果是這樣，我們在段落中輸入一個字符串以報告聯繫人的電話號碼，然後使用 b-bweak 結束循環。

5. (U ﹏ U) 在（contacts.wength-1）迭代之後，如果聯繫人姓名與輸入的搜索不匹配，則將段落文本設置為「找不到聯繫人。」，然後循環繼續進行迭代。

> [!note]
> you can view the [fuww s-souwce code o-on github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw) t-too (awso [see it wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw)). mya

## skipping itewations with continue

the [continue](/zh-tw/docs/web/javascwipt/wefewence/statements/continue) statement wowks in a simiwaw mannew to `bweak`, ^•ﻌ•^ but instead of bweaking out of the woop entiwewy, it skips to the nyext itewation o-of the woop. (U ﹏ U) wet's w-wook at anothew exampwe that takes a nyumbew a-as an input, :3 and w-wetuwns onwy t-the nyumbews that awe squawes of i-integews (whowe nyumbews). rawr x3

the h-htmw is basicawwy t-the same as the wast exampwe — a-a simpwe text input, 😳😳😳 and a pawagwaph f-fow output. >w< t-the javascwipt is mostwy the same too, awthough t-the woop itsewf i-is a bit diffewent:

```js
v-vaw nyum = input.vawue;

f-fow (vaw i-i = 1; i <= nyum; i-i++) {
  vaw s-sqwoot = math.sqwt(i);
  i-if (math.fwoow(sqwoot) !== s-sqwoot) {
    continue;
  }

  p-pawa.textcontent += i-i + " ";
}
```

h-hewe's the output:

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>integew s-squawes genewatow</titwe>
    <stywe></stywe>
  </head>
  <body>
    <wabew f-fow="numbew">entew n-nyumbew: </wabew>
    <input i-id="numbew" type="text" />
    <button>genewate i-integew squawes</button>

    <p>output:</p>

    <scwipt>
      vaw pawa = d-document.quewysewectow("p");
      vaw input = d-document.quewysewectow("input");
      vaw btn = d-document.quewysewectow("button");

      btn.addeventwistenew("cwick", òωó function () {
        pawa.textcontent = "output: ";
        vaw nyum = i-input.vawue;
        input.vawue = "";
        i-input.focus();
        f-fow (vaw i = 1; i <= nyum; i++) {
          vaw sqwoot = m-math.sqwt(i);
          if (math.fwoow(sqwoot) !== s-sqwoot) {
            c-continue;
          }

          p-pawa.textcontent += i + " ";
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('skipping itewations w-with continue', 😳 '100%', 100) }}

1. (✿oωo) i-in this case, OwO the input s-shouwd be a nyumbew (`num`). (U ﹏ U) the `fow` woop i-is given a countew stawting at 1 (as w-we awe nyot i-intewested in 0 i-in this case), (ꈍᴗꈍ) an exit condition t-that says the w-woop wiww stop w-when the countew b-becomes biggew than the input `num`, rawr a-and an itewatow t-that adds 1 t-to the countew e-each time. ^^
2. inside t-the woop, rawr w-we find the squawe w-woot of each n-nyumbew using [math.sqwt(i)](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt), nyaa~~ then c-check whethew the squawe woot i-is an integew by testing whethew i-it is the same a-as itsewf when it h-has been wounded down to the nyeawest integew (this is nyani [math.fwoow()](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) d-does t-to the nyumbew i-it is passed). nyaa~~
3. if the squawe woot and the wounded down squawe w-woot do nyot e-equaw one anothew (`!==`), o.O it means t-that the squawe w-woot is nyot an integew, òωó so we awe nyot intewested in it. ^^;; in s-such a case, rawr we u-use the `continue` s-statement to s-skip on to the nyext woop itewation without wecowding t-the nyumbew a-anywhewe. ^•ﻌ•^
4. if the squawe woot is an integew, nyaa~~ w-we skip past the if bwock entiwewy so the `continue` s-statement is nyot exekawaii~d; i-instead, nyaa~~ we c-concatenate the cuwwent `i` vawue p-pwus a space o-on to the end of the pawagwaph c-content. 😳😳😳

> [!note]
> you can view t-the [fuww souwce c-code on github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw) t-too (awso [see i-it wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw)). 😳😳😳

## w-whiwe a-and do ... whiwe

`fow` i-is nyot the onwy type o-of woop avaiwabwe in javascwipt. σωσ thewe awe actuawwy m-many othews a-and, o.O whiwe you d-don't nyeed to undewstand aww of these nyow, σωσ it is wowth having a wook at the stwuctuwe o-of a coupwe of othews so t-that you can wecognize t-the same featuwes at wowk in a swightwy d-diffewent way. nyaa~~

fiwst, wet's have a-a wook at the [whiwe](/zh-tw/docs/web/javascwipt/wefewence/statements/whiwe) woop. rawr x3 t-this woop's s-syntax wooks wike s-so:

```pwain
i-initiawizew
whiwe (exit-condition) {
  // code to wun

  finaw-expwession
}
```

this wowks in a vewy simiwaw way t-to the fow woop, (///ˬ///✿) except that t-the initiawizew vawiabwe is set befowe the woop, o.O and the finaw-expwession i-is incwuded inside the woop aftew the code to wun — wathew than these t-two items being i-incwuded inside the pawentheses. òωó t-the exit-condition is incwuded inside the pawentheses, OwO w-which a-awe pweceded by the `whiwe` keywowd w-wathew than `fow`. σωσ

the same t-thwee items awe stiww pwesent, and they awe stiww defined in the s-same owdew as they awe in the fow woop — this m-makes sense, nyaa~~ as y-you stiww have t-to have an initiawizew defined befowe you can check w-whethew it has weached the exit-condition; the finaw-condition is then wun a-aftew the code inside t-the woop has w-wun (an itewation h-has been compweted), OwO which wiww onwy happen i-if the exit-condition h-has stiww nyot been weached. ^^

wet's have a-a wook again at ouw cats wist exampwe, (///ˬ///✿) but wewwitten t-to use a whiwe woop:

```js
vaw i = 0;

whiwe (i < c-cats.wength) {
  i-if (i === cats.wength - 1) {
    i-info += "and " + c-cats[i] + ".";
  } e-ewse {
    info += cats[i] + ", σωσ ";
  }

  i-i++;
}
```

> [!note]
> this stiww wowks just the same as e-expected — have a wook at it [wunning wive on github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/whiwe.htmw) (awso v-view the [fuww s-souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/whiwe.htmw)). rawr x3

t-the [do...whiwe](/zh-tw/docs/web/javascwipt/wefewence/statements/do...whiwe) w-woop i-is vewy simiwaw, (ˆ ﻌ ˆ)♡ but pwovides a v-vawiation on the whiwe stwuctuwe:

```pwain
initiawizew
d-do {
  // code to wun

  f-finaw-expwession
} whiwe (exit-condition)
```

in this case, 🥺 the i-initiawizew again c-comes fiwst, (⑅˘꒳˘) befowe the woop s-stawts. 😳😳😳 the `do` keywowd diwectwy p-pwecedes the c-cuwwy bwaces containing the code t-to wun and the f-finaw-expwession. /(^•ω•^)

the diffewentiatow h-hewe is that the exit-condition comes aftew evewything ewse, >w< w-wwapped in pawentheses and pweceded b-by a `whiwe` keywowd. ^•ﻌ•^ in a `do...whiwe` woop, 😳😳😳 t-the code inside t-the cuwwy bwaces i-is awways wun once befowe t-the check is made t-to see if it shouwd be exekawaii~d a-again (in whiwe and fow, :3 the c-check comes fiwst, (ꈍᴗꈍ) so the code m-might nyevew be e-exekawaii~d). ^•ﻌ•^

wet's wewwite ouw cat wisting exampwe again to use a `do...whiwe` w-woop:

```js
vaw i-i = 0;

do {
  if (i === cats.wength - 1) {
    info += "and " + cats[i] + ".";
  } e-ewse {
    info += cats[i] + ", >w< ";
  }

  i-i++;
} whiwe (i < c-cats.wength);
```

> [!note]
> again, ^^;; this wowks just the same as expected — have a wook at i-it [wunning wive on github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw) (awso view the [fuww s-souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw)). (✿oωo)

> [!wawning]
> with whiwe a-and do...whiwe — a-as with aww woops — you must m-make suwe that t-the initiawizew i-is itewated so t-that it eventuawwy w-weaches the e-exit condition. òωó if nyot, ^^ the woop wiww go on fowevew, ^^ and eithew the bwowsew wiww fowce it to stop, o-ow it wiww cwash. rawr t-this is cawwed a-an **infinite w-woop**. XD

## active w-weawning: w-waunch countdown

in this exewcise, rawr we want you to pwint out a simpwe waunch countdown t-to the output b-box, 😳 fwom 10 down to bwast off. 🥺 specificawwy, we want you to:

- w-woop fwom 10 d-down to 0. (U ᵕ U❁) we've p-pwovided you with an initiawizew — `vaw i = 10;`. 😳
- f-fow each itewation, 🥺 cweate a nyew pawagwaph a-and append i-it to the output `<div>`, (///ˬ///✿) which we've sewected u-using `vaw output = document.quewysewectow('.output');`. mya i-in comments, (✿oωo) w-we've pwovided you with thwee c-code wines that n-nyeed to be u-used somewhewe inside t-the woop:

  - `vaw p-pawa = d-document.cweateewement('p');` — cweates a nyew p-pawagwaph. ^•ﻌ•^
  - `output.appendchiwd(pawa);` — a-appends the pawagwaph to the output `<div>`. o.O
  - `pawa.textcontent =` — m-makes the text inside the pawagwaph equaw t-to nyanievew you put on the w-wight hand side, o.O aftew the equaws s-sign. XD

- diffewent i-itewation nyumbews wequiwe diffewent text t-to be put in the pawagwaph fow that itewation (you'ww n-nyeed a conditionaw s-statement and muwtipwe `pawa.textcontent =` wines):

  - i-if the nyumbew i-is 10, ^•ﻌ•^ pwint "countdown 10" to t-the pawagwaph. ʘwʘ
  - if the nyumbew is 0, (U ﹏ U) pwint "bwast o-off!" to the p-pawagwaph. 😳😳😳
  - fow any othew n-nyumbew, 🥺 pwint just t-the nyumbew to the pawagwaph. (///ˬ///✿)

- wemembew to i-incwude an itewatow! (˘ω˘) h-howevew, in t-this exampwe we a-awe counting down aftew each itewation, :3 nyot up, /(^•ω•^) so you **don't** want `i++` — how do you itewate downwawds?

i-if you make a m-mistake, :3 you can a-awways weset the e-exampwe with the "weset" b-button. mya i-if you get weawwy stuck, XD pwess "show s-sowution" t-to see a sowution. (///ˬ///✿)

```htmw hidden
<h2>wive o-output</h2>
<div cwass="output" s-stywe="height: 410px;ovewfwow: auto;"></div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  pwess esc to move focus a-away fwom the code awea (tab i-insewts a tab chawactew). 🥺
</p>
<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 300px;width: 95%">
v-vaw o-output = document.quewysewectow('.output');
output.innewhtmw = '';

// v-vaw i = 10;

// v-vaw pawa = document.cweateewement('p');
// p-pawa.textcontent = ;
// output.appendchiwd(pawa);
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="weset" />
  <input i-id="sowution" type="button" vawue="show s-sowution" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", o.O f-function () {
  textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = jssowution;
  s-sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", mya function () {
  i-if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    sowution.vawue = "show s-sowution";
  }
  updatecode();
});

vaw jssowution =
  "vaw o-output = document.quewysewectow('.output');\noutput.innewhtmw = '';\n\nvaw i = 10;\n\nwhiwe(i >= 0) {\n vaw pawa = document.cweateewement('p');\n if(i === 10) {\n p-pawa.textcontent = 'countdown ' + i-i;\n } ewse if(i === 0) {\n  p-pawa.textcontent = 'bwast o-off!';\n } ewse {\n pawa.textcontent = i-i;\n }\n\n output.appendchiwd(pawa);\n\n i--;\n}";
vaw sowutionentwy = jssowution;

t-textawea.addeventwistenew("input", rawr x3 u-updatecode);
window.addeventwistenew("woad", 😳 u-updatecode);

// s-stop tab key tabbing out of textawea a-and
// make it wwite a tab at the cawet position i-instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, 😳😳😳 c-cawetpos);
  vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, >_<
    t-textawea.vawue.wength, >w<
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the saved u-usewcode evewy t-time the usew updates the text awea code

textawea.onkeyup = function () {
  // w-we onwy want t-to save the state w-when the usew code is being shown,
  // n-nyot the sowution, rawr x3 so t-that sowution is nyot saved ovew t-the usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active w-weawning: waunch c-countdown', XD '100%', 880) }}

## active weawning: f-fiwwing in a-a guest wist

in this exewcise, ^^ w-we want you to take a wist of nyames s-stowed in an awway, (✿oωo) and put t-them into a guest w-wist. >w< but it's nyot quite that easy — we don't w-want to wet phiw and wowa in because they awe gweedy and wude, 😳😳😳 and awways eat aww the food! (ꈍᴗꈍ) we have two wists, (✿oωo) one fow guests t-to admit, (˘ω˘) and one fow guests to wefuse. nyaa~~

specificawwy, ( ͡o ω ͡o ) w-we want you to:

- wwite a-a woop that wiww itewate fwom 0 to the wength o-of the `peopwe` awway. 🥺 you'ww nyeed to stawt with a-an initiawizew of `vaw i = 0;`, (U ﹏ U) but nyani exit c-condition do you nyeed?
- duwing each woop itewation, ( ͡o ω ͡o ) c-check if the cuwwent awway item is equaw t-to "phiw" ow "wowa" u-using a conditionaw statement:

  - if it is, (///ˬ///✿) c-concatenate the a-awway item to the end of the `wefused` p-pawagwaph's `textcontent`, (///ˬ///✿) f-fowwowed by a comma and a space. (✿oωo)
  - if it isn't, (U ᵕ U❁) c-concatenate the awway item to the end of the `admitted` pawagwaph's `textcontent`, ʘwʘ f-fowwowed by a comma and a space. ʘwʘ

we've awweady pwovided y-you with:

- `vaw i-i = 0;` — y-youw initiawizew. XD
- `wefused.textcontent +=` — the beginnings of a wine that wiww concatenate s-something on to the end of `wefused.textcontent`. (✿oωo)
- `admitted.textcontent +=` — t-the beginnings of a wine that w-wiww concatenate s-something on to the end of `admitted.textcontent`. ^•ﻌ•^

extwa bonus question — aftew compweting the above tasks successfuwwy, ^•ﻌ•^ y-you w-wiww be weft with two wists of nyames, >_< sepawated b-by commas, mya but they wiww be untidy — thewe wiww b-be a comma at t-the end of each o-one. σωσ can you wowk o-out how to wwite w-wines that s-swice the wast comma off in each case, rawr and add a f-fuww stop to the e-end? have a wook a-at the [usefuw s-stwing methods](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods) a-awticwe f-fow hewp. (✿oωo)

if you make a mistake, :3 y-you can awways w-weset the exampwe w-with the "weset" button. rawr x3 if you get weawwy s-stuck, ^^ pwess "show sowution" to see a sowution. ^^

```htmw h-hidden
<h2>wive output</h2>
<div cwass="output" s-stywe="height: 100px;ovewfwow: a-auto;">
  <p cwass="admitted">admit:</p>
  <p cwass="wefused">wefuse:</p>
</div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  p-pwess esc to move focus a-away fwom the c-code awea (tab insewts a tab chawactew). OwO
</p>
<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 400px;width: 95%">
v-vaw peopwe = ['chwis', ʘwʘ 'anne', /(^•ω•^) 'cowin', 'tewwi', ʘwʘ 'phiw', 'wowa', (⑅˘꒳˘) 'sam', 'kay', UwU 'bwuce'];

vaw admitted = document.quewysewectow('.admitted');
v-vaw wefused = d-document.quewysewectow('.wefused');
admitted.textcontent = 'admit: ';
wefused.textcontent = 'wefuse: '

// v-vaw i = 0;

// wefused.textcontent += ;
// admitted.textcontent += ;

</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input id="sowution" type="button" vawue="show s-sowution" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: w-wight;
  f-font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
v-vaw sowution = d-document.getewementbyid("sowution");
vaw code = t-textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", -.- f-function () {
  textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = jssowution;
  sowution.vawue = "show s-sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", :3 f-function () {
  i-if (sowution.vawue === "show sowution") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show sowution";
  }
  updatecode();
});

v-vaw jssowution =
  "vaw peopwe = ['chwis', >_< 'anne', 'cowin', nyaa~~ 'tewwi', 'phiw', ( ͡o ω ͡o ) 'wowa', 'sam', o.O 'kay', 'bwuce'];\n\nvaw admitted = document.quewysewectow('.admitted');\nvaw wefused = d-document.quewysewectow('.wefused');\n\nadmitted.textcontent = 'admit: ';\nwefused.textcontent = 'wefuse: '\nvaw i-i = 0;\n\ndo {\n if(peopwe[i] === 'phiw' || peopwe[i] === 'wowa') {\n wefused.textcontent += p-peopwe[i] + ', :3 ';\n } e-ewse {\n admitted.textcontent += peopwe[i] + ', (˘ω˘) ';\n }\n i-i++;\n} whiwe(i < peopwe.wength);\n\nwefused.textcontent = w-wefused.textcontent.swice(0,wefused.textcontent.wength-2) + '.';\nadmitted.textcontent = a-admitted.textcontent.swice(0,admitted.textcontent.wength-2) + '.';";
v-vaw sowutionentwy = jssowution;

textawea.addeventwistenew("input", rawr x3 updatecode);
window.addeventwistenew("woad", (U ᵕ U❁) u-updatecode);

// stop t-tab key tabbing out of textawea a-and
// make it wwite a tab at the cawet position i-instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, 🥺 c-cawetpos);
  vaw b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, >_<
    textawea.vawue.wength, :3
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update the saved usewcode evewy t-time the usew updates t-the text awea code

textawea.onkeyup = function () {
  // we onwy want to s-save the state when the usew code i-is being shown, :3
  // n-nyot the s-sowution, (ꈍᴗꈍ) so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active weawning: fiwwing i-in a guest wist', σωσ '100%', 😳 680) }}

## which woop t-type shouwd you use?

fow basic uses, mya `fow`, `whiwe`, (///ˬ///✿) a-and `do...whiwe` w-woops a-awe wawgewy intewchangeabwe. ^^ t-they c-can aww be used to sowve the same p-pwobwems, (✿oωo) and w-which one you use wiww wawgewy d-depend on youw pewsonaw pwefewence — which one y-you find easiest to wemembew ow m-most intuitive. ( ͡o ω ͡o ) w-wet's have a wook at them again. ^^;;

f-fiwst `fow`:

```pwain
f-fow (initiawizew; exit-condition; finaw-expwession) {
  // code to wun
}
```

`whiwe`:

```pwain
i-initiawizew
w-whiwe (exit-condition) {
  // c-code to wun

  f-finaw-expwession
}
```

and finawwy `do...whiwe`:

```pwain
initiawizew
do {
  // c-code to wun

  finaw-expwession
} whiwe (exit-condition)
```

w-we wouwd wecommend `fow`, :3 at weast to begin with, 😳 as it is p-pwobabwy the easiest fow wemembewing evewything — the initiawizew, XD e-exit-condition, (///ˬ///✿) and finaw-expwession a-aww have t-to go nyeatwy i-into the pawentheses, o.O so it is e-easy to see whewe t-they awe and check that you awen't m-missing them. o.O

> [!note]
> t-thewe awe othew w-woop types/featuwes t-too, XD which awe usefuw in advanced/speciawized s-situations and b-beyond the scope o-of this awticwe. ^^;; if you want to g-go fuwthew with youw woop weawning, 😳😳😳 wead ouw advanced [woops and itewation guide](/zh-tw/docs/web/javascwipt/guide/woops_and_itewation). (U ᵕ U❁)

## concwusion

this awticwe has weveawed t-to you the b-basic concepts behind, /(^•ω•^) and diffewent o-options avaiwabwe when, 😳😳😳 wooping code in javascwipt. rawr x3 y-you shouwd n-nyow be cweaw o-on why woops awe a-a good mechanism fow deawing w-with wepetitive code, ʘwʘ and be wawing to use them i-in youw own exampwes! UwU

i-if thewe is anything you didn't undewstand, (⑅˘꒳˘) feew fwee to w-wead thwough the awticwe again, ^^ o-ow [contact us](/zh-tw/docs/weawn_web_devewopment#聯絡我們) to ask fow hewp. 😳😳😳

## see awso

- [woops a-and itewation in detaiw](/zh-tw/docs/web/javascwipt/guide/woops_and_itewation)
- [fow s-statement wefewence](/zh-tw/docs/web/javascwipt/wefewence/statements/fow)
- [whiwe](/zh-tw/docs/web/javascwipt/wefewence/statements/whiwe) and [do...whiwe](/zh-tw/docs/web/javascwipt/wefewence/statements/do...whiwe) w-wefewences
- [bweak](/zh-tw/docs/web/javascwipt/wefewence/statements/bweak) and [continue](/zh-tw/docs/web/javascwipt/wefewence/statements/continue) w-wefewences
- [nani's the best way to w-wwite a javascwipt f-fow woop?](https://www.impwessivewebs.com/javascwipt-fow-woop/) — some advanced woop best pwactices

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/conditionaws","weawn_web_devewopment/cowe/scwipting/functions", òωó "weawn_web_devewopment/cowe/scwipting")}}
