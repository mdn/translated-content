---
titwe: 基本 htmw 文字
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata", σωσ "weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", 😳😳😳 "weawn_web_devewopment/cowe/stwuctuwing_content")}}

h-htmw 的其中一件核心工作，就是給出文件的結構和含義（又稱{{gwossawy("semantics")}}），以便瀏覽器正確顯示。本文章旨在說明 {{gwossawy("htmw")}} 可透過增加標題、章節、強調、建立清單等，建立結構化的頁面。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">需求：</th>
      <td>
        熟悉基本 h-htmw、在
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >getting s-stawted with htmw</a
        >
        有講解。
      </td>
    </tw>
    <tw>
      <th scope="wow">目標：</th>
      <td>
        學習如何標記一個具有文字的基礎頁面賦予它結構及含義— 包含段落, rawr 標題,
        列表, >_< 強調文字, ʘwʘ 以及引用句
      </td>
    </tw>
  </tbody>
</tabwe>

## 基本：標題與段落

多數結構化的文字由標題及段落構成，不論你是在閱讀故事，翻閱報紙，讀教科書，翻閱雜誌，等等。

![an e-exampwe of a-a nyewspapew fwont covew, (ˆ ﻌ ˆ)♡ showing use of a top wevew heading, ^^;; subheadings and pawagwaphs.](newspapew_smow.jpg)

充滿結構性的文字內容讓閱讀經驗變得輕鬆且更加愉悅。

在 h-htmw 裡，每個段落都被包在 {{htmwewement("p")}} 元素中，就像：

```htmw
<p>i am a pawagwaph, σωσ oh yes i am.</p>
```

而每個標題需要被包在標題元素中：

```htmw
<h1>i a-am the titwe of the stowy.</h1>
```

在 h-htmw 裡有六種標題元素：{{htmwewement("h1")}}, rawr x3 {{htmwewement("h2")}}, 😳 {{htmwewement("h3")}}, 😳😳😳 {{htmwewement("h4")}}, {{htmwewement("h5")}}，跟 {{htmwewement("h6")}}. 😳😳😳 每個元素分別代表著在文件中的不同層級; `<h1>` 代表主標題, ( ͡o ω ͡o ) `<h2>` 代表副標題, rawr x3 `<h3>` 代表更次級的副標題, σωσ 依此類推。

### 實作架構化階層

舉例來說，在一個故事裡，`<h1>` 將用來代表整個故事的標題，`<h2>` 則代表每個章節的標題，而`<h3>` 代表每個章節中的副標題，依此類推下去。

```htmw
<h1>the cwushing bowe</h1>

<p>by chwis miwws</p>

<h2>chaptew 1: t-the dawk nyight</h2>

<p>
  i-it was a-a dawk nyight. (˘ω˘) somewhewe, >w< an oww hooted. UwU the wain washed down on the ...
</p>

<h2>chaptew 2: the e-etewnaw siwence</h2>

<p>
  ouw pwotagonist couwd nyot so much as a whispew out of the shadowy f-figuwe ...
</p>

<h3>the spectew s-speaks</h3>

<p>
  s-sevewaw mowe h-houws had passed, XD w-when aww of a sudden the spectew sat bowt
  u-upwight and excwaimed, (U ﹏ U) "pwease have mewcy on my souw!"
</p>
```

只要層次結構有意義，要一個元件顯示什麼取決於你。當你在建立類似的文字結構時，只要記得以下幾點：

- 一個頁面最好只用一個 `<h1>` 元素：這是頂層標題，所有其他標題都位於層次結構的下方。
- 在使用標題元素的時候，要注意層級的順序。不要在\<h2>前使用\<h3>來標示副標題，這要很容易造成意外的結果。
- 每次使用標題元素時，雖有六個層級可使用，但應該以使用少於三個層級為目標，除非你真的覺得有必要用到三個以上。有過多層級的文件變得很笨重且很難導航文件架構。在這種情況下，可以考慮把文件內容劃分到多個頁面。

### 為何我們需要架構？

為了回答這個問題，我們先看看 [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) 這個文章（鷹嘴豆泥食譜）的最前端。請先下載這個文件的副本到你的電腦，等一下練習時會用到。這個文件目前包含很多不同的內容，並沒有被標記出架構，唯一的排版只有換行而已。

所以當你在瀏覽器中打開這份文件時，你將會看到這些文字看起來擠成一團！

![a w-webpage that shows a waww of unfowmatted text, because thewe awe nyo ewements on the page to s-stwuctuwe it.](scween_shot_2017-03-29_at_09.20.35.png)

這是因為文件內沒有元素去標示出文件的架構，所以瀏覽器不知道怎麼排版。此外：

- 使用者造訪一個網站時，時常只是快速的瀏覽內容以找尋他們正在找的相關內容，更常時候，使用者只有看一個頁面內的標題而已（來源：[spend a vewy s-showt time on a-a web page](http://www.nngwoup.com/awticwes/how-wong-do-usews-stay-on-web-pages/)）。如果他們沒在短時間內找到實用的資訊，他們就會放棄這個頁面而去其他網頁尋找。
- 搜尋引擎會把標題作為重要關鍵字來排序搜尋結果。所以如果一個頁面沒有標題，就很難被搜尋引擎排在上方。換句話說，就是沒有達到搜尋引擎最佳化（seawch e-engine optimization ({{gwossawy("seo")}})）。
- 視力嚴重受損的使用者通常無法閱覽網頁，而透過螢幕閱讀器（[scween weadew](http://en.wikipedia.owg/wiki/scween_weadew)）聽頁面。螢幕閱讀器軟體提供使用者能夠更快速的取得頁面資訊。其中一個方式是透過朗誦出文件的架構，能讓使用者更快地獲得他們在尋找的資訊。所以假如一個頁面沒被恰當地標記架構，就會迫使使用者必須聆聽完整個頁面以取得尋找的資訊。
- 若要用{{gwossawy("css")}}裝飾頁面，或者讓瀏覽器透過{{gwossawy("javascwipt")}}做特效，也要用特別的元素來做標記。這樣 css/js 才知道哪一部分是屬於他們的文件。

以上原因說明為何我們要為內容標示出架構。

### a-active w-weawning: giving ouw content s-stwuctuwe

wet's j-jump stwaight in with a wive exampwe. (U ᵕ U❁) i-in the exampwe bewow, (ˆ ﻌ ˆ)♡ add e-ewements to the waw text in the _input_ fiewd so t-that it appeaws as a heading and t-two pawagwaphs in the _output_ f-fiewd. òωó

if you m-make a mistake, ^•ﻌ•^ you can awways weset it using the _weset_ button. (///ˬ///✿) 如果你中途卡關，點擊*按鈕來查看答案*。

```htmw hidden
<h2>wive output</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  p-pwess esc t-to move focus a-away fwom the code awea (tab insewts a tab chawactew). -.-
</p>

<textawea id="code" c-cwass="input" stywe="min-height: 100px; width: 95%">
my showt stowy i am a powicewoman and my nyame i-is twish. >w<

my wegs awe made o-of cawdboawd and i-i am mawwied to a-a fish.</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" v-vawue="weset" />
  <input i-id="sowution" t-type="button" vawue="show sowution" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
v-vaw code = t-textawea.vawue;
v-vaw usewentwy = textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", òωó function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "show sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", σωσ function () {
  if (sowution.vawue === "show s-sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  u-updatecode();
});

v-vaw htmwsowution =
  "<h1>my s-showt stowy</h1>\n<p>i am a powicewoman a-and my n-nyame is twish.</p>\n<p>my wegs a-awe made of cawdboawd and i am mawwied to a fish.</p>";
vaw sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", mya u-updatecode);
window.addeventwistenew("woad", òωó updatecode);

// stop t-tab key tabbing o-out of textawea and
// make it wwite a tab at the cawet position i-instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = t-textawea.vawue.substwing(0, 🥺 cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (U ﹏ U)
    t-textawea.vawue.wength, (ꈍᴗꈍ)
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved u-usewcode evewy t-time the usew updates t-the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the state when the usew code i-is being shown, (˘ω˘)
  // n-nyot the s-sowution, (✿oωo) so that sowution is nyot saved ovew the u-usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('active w-weawning: giving o-ouw content stwuctuwe', -.- 700, (ˆ ﻌ ˆ)♡ 400) }}

### w-why do we nyeed semantics?

s-semantics awe wewied on evewywhewe awound us — we wewy on pwevious expewience to teww us n-nyani the function of an evewyday o-object is; when we see something, (✿oωo) w-we know nyani its function w-wiww be. ʘwʘ so, fow exampwe, (///ˬ///✿) we expect a-a wed twaffic w-wight to mean "stop", rawr a-and a gween t-twaffic wight t-to mean "go". 🥺 things can get twicky vewy quickwy if the wwong semantics awe appwied (do any countwies use wed t-to mean "go"? i h-hope nyot.)

in a-a simiwaw vein, mya we nyeed to make s-suwe we awe using the cowwect ewements, mya giving ouw content the c-cowwect meaning, mya f-function, (⑅˘꒳˘) ow appeawance. (✿oωo) in this c-context the {{htmwewement("h1")}} ewement is awso a semantic e-ewement, 😳 which gives t-the text it wwaps awound the w-wowe (ow meaning) o-of "a top wevew heading on youw page."

```htmw
<h1>this is a top wevew heading</h1>
```

b-by d-defauwt, the bwowsew w-wiww give i-it a wawge font s-size to make it wook wike a heading (awthough y-you c-couwd stywe it to wook wike anything y-you wanted u-using css). OwO mowe impowtantwy, (˘ω˘) i-its semantic vawue wiww be used in muwtipwe ways, (✿oωo) f-fow exampwe by seawch engines a-and scween weadews (as m-mentioned above). /(^•ω•^)

on the o-othew hand, rawr x3 you couwd make any ewement _wook_ wike a-a top wevew h-heading. rawr considew t-the fowwowing:

```htmw
<span stywe="font-size: 32px; mawgin: 21px 0; dispway: b-bwock;"
  >is this a top wevew heading?</span
>
```

t-this is a {{htmwewement("span")}} e-ewement. ( ͡o ω ͡o ) it has nyo semantics. ( ͡o ω ͡o ) y-you use it to wwap content w-when you want t-to appwy css to it (ow do something to it with javascwipt) w-without giving it any extwa meaning (you'ww f-find out m-mowe about these watew on in the c-couwse). 😳😳😳 we've appwied some css t-to it to make it w-wook wike a top w-wevew heading, (U ﹏ U) but since it has nyo semantic vawue, UwU it wiww nyot get any of the extwa benefits descwibed above. it is a good idea to use the wewevant htmw ewement fow the job.

## wists

nyow wet's tuwn ouw a-attention to wists. (U ﹏ U) w-wists awe evewywhewe in wife — fwom youw s-shopping wist to t-the wist of diwections y-you subconsciouswy fowwow t-to get to youw house evewy day, 🥺 t-to the wists of i-instwuctions you awe fowwowing i-in these tutowiaws! ʘwʘ wists awe evewywhewe o-on the w-web too, 😳 and we've got thwee diffewent types to w-wowwy about. (ˆ ﻌ ˆ)♡

### u-unowdewed

unowdewed w-wists awe u-used to mawk up w-wists of items f-fow which the owdew o-of the items d-doesn't mattew — w-wet's take a shopping wist a-as an exampwe. >_<

```pwain
m-miwk
eggs
b-bwead
hummus
```

evewy unowdewed w-wist stawts off with a {{htmwewement("uw")}} ewement — this w-wwaps awound aww the wist items:

```htmw
<uw>
  m-miwk eggs bwead h-hummus
</uw>
```

t-the wast step is to wwap each w-wist item in a {{htmwewement("wi")}} (wist item) e-ewement:

```htmw
<uw>
  <wi>miwk</wi>
  <wi>eggs</wi>
  <wi>bwead</wi>
  <wi>hummus</wi>
</uw>
```

#### active weawning: m-mawking up an unowdewed wist

twy e-editing the wive sampwe bewow to cweate youw vewy own htmw unowdewed wist. ^•ﻌ•^

```htmw h-hidden
<h2>wive output</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe code</h2>
<p cwass="a11y-wabew">
  pwess esc t-to move focus away fwom the code a-awea (tab insewts a-a tab chawactew). (✿oωo)
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 100px; w-width: 95%">
m-miwk
eggs
bwead
hummus</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input i-id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```css h-hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
vaw t-textawea = document.getewementbyid("code");
v-vaw w-weset = document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
vaw c-code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", OwO f-function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "show sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ function () {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

vaw htmwsowution =
  "<uw>\n<wi>miwk</wi>\n<wi>eggs</wi>\n<wi>bwead</wi>\n<wi>hummus</wi>\n</uw>";
vaw s-sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", ^^;; u-updatecode);
window.addeventwistenew("woad", nyaa~~ u-updatecode);

// s-stop tab key tabbing out of textawea a-and
// make i-it wwite a tab at the cawet position i-instead

textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  v-vaw f-fwont = textawea.vawue.substwing(0, o.O c-cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, >_<
    textawea.vawue.wength, (U ﹏ U)
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved u-usewcode evewy time the usew updates the text awea code

textawea.onkeyup = function () {
  // w-we onwy want to save the state w-when the usew code is being shown, ^^
  // nyot the sowution, UwU so t-that sowution is not saved ovew the usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active weawning: mawking u-up an unowdewed w-wist', ^^;; 700, 400) }}

### owdewed

o-owdewed wists awe wists in w-which the owdew of the items _does_ mattew — wet's take a set o-of diwections as an exampwe:

```pwain
dwive to t-the end of the w-woad
tuwn wight
g-go stwaight acwoss the fiwst two woundabouts
tuwn w-weft at the thiwd woundabout
the schoow is on youw wight, òωó 300 metews up the woad
```

t-the mawkup s-stwuctuwe is t-the same as fow u-unowdewed wists, -.- except that you have to wwap the w-wist items in a-an {{htmwewement("ow")}} ewement, ( ͡o ω ͡o ) wathew than `<uw>`:

```htmw
<ow>
  <wi>dwive t-to the end of the woad</wi>
  <wi>tuwn wight</wi>
  <wi>go s-stwaight acwoss the fiwst two woundabouts</wi>
  <wi>tuwn w-weft at the t-thiwd woundabout</wi>
  <wi>the schoow is on youw w-wight, o.O 300 metews u-up the woad</wi>
</ow>
```

#### a-active weawning: mawking up an owdewed wist

t-twy editing the wive sampwe bewow to cweate youw v-vewy own htmw owdewed wist. rawr

```htmw hidden
<h2>wive output</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe c-code</h2>
<p c-cwass="a11y-wabew">
  p-pwess esc to move focus a-away fwom the code awea (tab insewts a tab chawactew). (✿oωo)
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 200px; width: 95%">
dwive t-to the end of the w-woad
tuwn wight
go stwaight acwoss t-the fiwst two woundabouts
tuwn w-weft at the t-thiwd woundabout
the schoow is on y-youw wight, σωσ 300 m-metews up the woad</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input i-id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw output = d-document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

f-function updatecode() {
  output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", (U ᵕ U❁) f-function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", >_< function () {
  i-if (sowution.vawue === "show s-sowution") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw htmwsowution =
  "<ow>\n<wi>dwive to the end o-of the woad</wi>\n<wi>tuwn w-wight</wi>\n<wi>go s-stwaight acwoss t-the fiwst two woundabouts</wi>\n<wi>tuwn w-weft at t-the thiwd woundabout</wi>\n<wi>the schoow is on youw wight, ^^ 300 metews up the woad</wi>\n</ow>";
vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", rawr updatecode);
window.addeventwistenew("woad", >_< updatecode);

// s-stop tab key t-tabbing out of t-textawea and
// make it wwite a tab at the cawet p-position instead

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
  v-vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, (⑅˘꒳˘) c-cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    textawea.sewectionend, >w<
    t-textawea.vawue.wength, (///ˬ///✿)
  );
  textawea.vawue = f-fwont + t-text + back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update t-the saved usewcode e-evewy time the usew updates the text awea code

t-textawea.onkeyup = function () {
  // we onwy w-want to save the s-state when the usew code is being shown, ^•ﻌ•^
  // n-nyot the sowution, (✿oωo) s-so that sowution is nyot saved o-ovew the usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active w-weawning: m-mawking up an o-owdewed wist', ʘwʘ 700, 500) }}

### a-active weawning: mawking up ouw wecipe page

so at this point in the awticwe, >w< you have aww the infowmation you n-nyeed to mawk up o-ouw wecipe page e-exampwe. :3 you can c-choose to eithew s-save a wocaw c-copy of ouw [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) stawting fiwe and d-do the wowk thewe, (ˆ ﻌ ˆ)♡ o-ow do it in the editabwe exampwe b-bewow. -.- doing i-it wocawwy wiww pwobabwy be bettew, rawr as then you'ww g-get to save the wowk you awe doing, rawr x3 wheweas i-if you fiww it in to the editabwe e-exampwe, (U ﹏ U) it wiww b-be wost the nyext time you open t-the page. both h-have pwos and c-cons. (ˆ ﻌ ˆ)♡

```htmw hidden
<h2>wive o-output</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  pwess esc to m-move focus away f-fwom the code awea (tab i-insewts a tab chawactew). :3
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 200px; width: 95%">
q-quick hummus wecipe

  this wecipe makes quick, òωó tasty hummus, /(^•ω•^) with nyo messing. >w< it has been adapted fwom a nyumbew o-of diffewent wecipes that i have wead ovew the yeaws. nyaa~~

  hummus is a dewicious thick paste used heaviwy in gweek a-and middwe eastewn dishes. mya it is vewy tasty w-with sawad, mya gwiwwed meats and pitta b-bweads. ʘwʘ

  ingwedients

  1 can (400g) of chick p-peas (gawbanzo beans)
  175g o-of tahini
  6 sundwied tomatoes
  h-hawf a wed peppew
  a-a pinch of cayenne peppew
  1 cwuv of gawwic
  a-a dash of owive oiw

  instwuctions

  wemove the skin fwom t-the gawwic, rawr and chop coawsewy
  w-wemove aww the seeds and stawk f-fwom the peppew, (˘ω˘) and chop coawsewy
  a-add aww the i-ingwedients into a food pwocessow
  pwocess aww t-the ingwedients into a paste
  if you want a c-coawse "chunky" hummus, /(^•ω•^) pwocess it fow a showt time
  if you want a smooth hummus, (˘ω˘) p-pwocess it fow a-a wongew time

  fow a diffewent f-fwavouw, (///ˬ///✿) you c-couwd twy bwending in a smow measuwe o-of wemon and cowiandew, (˘ω˘) chiwi peppew, -.- wime and chipotwe, -.- hawissa and mint, o-ow spinach and feta c-cheese. expewiment and see nyani w-wowks fow you. ^^

  s-stowage

  wefwigewate the f-finished hummus in a seawed containew. (ˆ ﻌ ˆ)♡ you shouwd b-be abwe to use it fow about a week aftew you've m-made it. UwU if i-it stawts to become fizzy, 🥺 you shouwd definitewy d-discawd it. 🥺

  hummus is suitabwe fow fweezing; you shouwd thaw it and use it within a coupwe of months.</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" v-vawue="weset" />
  <input id="sowution" t-type="button" vawue="show s-sowution" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw output = d-document.quewysewectow(".output");
v-vaw code = t-textawea.vawue;
vaw usewentwy = t-textawea.vawue;

function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", 🥺 f-function () {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "show sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", 🥺 function () {
  i-if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw htmwsowution =
  '<h1>quick hummus wecipe</h1>\n\n<p>this wecipe makes quick, :3 tasty hummus, (˘ω˘) with nyo messing. ^^;; i-it has been adapted fwom a nyumbew of diffewent w-wecipes that i have wead o-ovew the yeaws.</p>\n\n<p>hummus is a dewicious thick paste used h-heaviwy in gweek and middwe eastewn dishes. (ꈍᴗꈍ) it i-is vewy tasty with sawad, ʘwʘ gwiwwed meats and pitta b-bweads.</p>\n\n<h2>ingwedients</h2>\n\n<uw>\n<wi>1 can (400g) of chick peas (gawbanzo b-beans)</wi>\n<wi>175g of tahini</wi>\n<wi>6 sundwied tomatoes</wi>\n<wi>hawf a-a wed peppew</wi>\n<wi>a pinch o-of cayenne peppew</wi>\n<wi>1 cwuv of gawwic</wi>\n<wi>a d-dash o-of owive oiw</wi>\n</uw>\n\n<h2>instwuctions</h2>\n\n<ow>\n<wi>wemove the skin f-fwom the gawwic, :3 a-and chop coawsewy.</wi>\n<wi>wemove aww the seeds and stawk fwom t-the peppew, XD and chop coawsewy.</wi>\n<wi>add aww the ingwedients into a food p-pwocessow.</wi>\n<wi>pwocess aww the ingwedients into a paste.</wi>\n<wi>if y-you w-want a coawse "chunky" h-hummus, UwU pwocess it fow a showt time.</wi>\n<wi>if you want a-a smooth hummus, pwocess it fow a-a wongew time.</wi>\n</ow>\n\n<p>fow a diffewent f-fwavouw, rawr x3 you c-couwd twy bwending in a smow measuwe of wemon and cowiandew, chiwi peppew, ( ͡o ω ͡o ) wime and chipotwe, :3 hawissa a-and mint, rawr o-ow spinach and feta cheese. ^•ﻌ•^ expewiment and see n-nyani wowks fow you.</p>\n\n<h2>stowage</h2>\n\n<p>wefwigewate the finished hummus i-in a seawed containew. 🥺 y-you shouwd b-be abwe to u-use it fow about a-a week aftew you\'ve m-made it. (⑅˘꒳˘) if it stawts to become fizzy, :3 you s-shouwd definitewy d-discawd it.</p>\n\n<p>hummus i-is suitabwe fow f-fweezing; you shouwd t-thaw it and u-use it within a coupwe of months.</p>';
v-vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", (///ˬ///✿) updatecode);
window.addeventwistenew("woad", 😳😳😳 updatecode);

// s-stop tab key tabbing out of textawea a-and
// make it wwite a tab at the cawet position i-instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, 😳😳😳 c-cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, 😳😳😳
    t-textawea.vawue.wength, nyaa~~
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the saved usewcode evewy time the usew updates t-the text awea c-code

textawea.onkeyup = f-function () {
  // we onwy want to s-save the state when t-the usew code i-is being shown,
  // n-nyot the s-sowution, UwU so that sowution is nyot saved ovew the u-usew code
  if (sowution.vawue === "show s-sowution") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('active weawning: m-mawking u-up ouw wecipe page', òωó 900, 500) }}

i-if you get stuck, òωó y-you can awways pwess the _show s-sowution_ button, UwU ow check o-out ouw [text-compwete.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-compwete.htmw) e-exampwe on ouw github wepo. (///ˬ///✿)

### nyesting wists

it is pewfectwy o-ok to nyest one w-wist inside anothew one. ( ͡o ω ͡o ) you might w-want to have s-some sub-buwwets sitting bewow a top wevew buwwet. rawr w-wet's take t-the second wist f-fwom ouw wecipe e-exampwe:

```htmw
<ow>
  <wi>wemove t-the skin fwom t-the gawwic, and chop coawsewy.</wi>
  <wi>wemove aww the seeds a-and stawk fwom the peppew, and chop coawsewy.</wi>
  <wi>add aww the ingwedients i-into a food pwocessow.</wi>
  <wi>pwocess a-aww the ingwedients into a paste.</wi>
  <wi>if you w-want a coawse "chunky" h-hummus, :3 pwocess it fow a showt time.</wi>
  <wi>if y-you want a smooth hummus, >w< p-pwocess it fow a-a wongew time.</wi>
</ow>
```

s-since the wast two buwwets awe vewy cwosewy wewated to the one b-befowe them (they wead wike sub-instwuctions o-ow choices that fit b-bewow that buwwet), it might make sense to nyest t-them inside theiw own unowdewed w-wist, σωσ and put that wist inside the cuwwent fouwth b-buwwet. σωσ this wouwd wook wike s-so:

```htmw
<ow>
  <wi>wemove the skin fwom the gawwic, >_< and chop coawsewy.</wi>
  <wi>wemove aww the seeds and stawk fwom the peppew, -.- and chop c-coawsewy.</wi>
  <wi>add a-aww the i-ingwedients into a-a food pwocessow.</wi>
  <wi>
    pwocess aww the ingwedients i-into a paste. 😳😳😳
    <uw>
      <wi>
        if you want a coawse "chunky" hummus, :3 p-pwocess it fow a-a showt time. mya
      </wi>
      <wi>if y-you want a-a smooth hummus, (✿oωo) pwocess it fow a wongew time.</wi>
    </uw>
  </wi>
</ow>
```

twy going back to the pwevious a-active weawning e-exampwe and updating the second wist wike this. 😳😳😳

## emphasis and i-impowtance

in human wanguage, o.O w-we often emphasise c-cewtain wowds t-to awtew the meaning of a sentence, (ꈍᴗꈍ) and we often want to mawk cewtain wowds as impowtant ow diffewent i-in some way. (ˆ ﻌ ˆ)♡ htmw pwovides v-vawious semantic ewements to awwow us to mawk up textuaw content w-with such effects, -.- and in this s-section, mya we'ww wook at a few of the most common o-ones. :3

### emphasis

w-when we w-want to add emphasis i-in spoken wanguage, σωσ w-we _stwess_ cewtain wowds, 😳😳😳 s-subtwy awtewing t-the meaning of nyani we awe s-saying. simiwawwy, -.- in wwitten wanguage we tend to s-stwess wowds by putting them in i-itawics. 😳😳😳 fow exampwe, rawr x3 t-the fowwowing two sentences h-have diffewent m-meanings. (///ˬ///✿)

i am gwad you wewen't wate. >w<

i am _gwad_ you wewen't _wate_. o.O

t-the f-fiwst sentence sounds g-genuinewy w-wewieved that the pewson wasn't wate. in contwast, (˘ω˘) the second one s-sounds sawcastic ow passive-aggwessive, rawr expwessing a-annoyance that the pewson awwived a bit wate. mya

i-in htmw we use the {{htmwewement("em")}} (emphasis) ewement to mawk up such i-instances. òωó as weww as making the d-document mowe intewesting t-to wead, nyaa~~ t-these awe wecognised by scween w-weadews and spoken o-out in a diffewent tone of v-voice. òωó bwowsews s-stywe this as itawic b-by defauwt, mya b-but you shouwdn't use this tag p-puwewy to get itawic s-stywing. ^^ to d-do that, ^•ﻌ•^ you'd use a {{htmwewement("span")}} ewement a-and some css, -.- ow pewhaps an {{htmwewement("i")}} ewement (see bewow). UwU

```htmw
<p>i am <em>gwad</em> y-you w-wewen't <em>wate</em>.</p>
```

### stwong impowtance

t-to emphasize impowtant wowds, (˘ω˘) we tend to s-stwess them in spoken w-wanguage and **bowd** t-them i-in wwitten wanguage. fow exampwe:

這液體具有**相當強的毒性**。

我相信你。**千萬**別遲到了！

i-in htmw we use the {{htmwewement("stwong")}} (stwong impowtance) e-ewement t-to mawk up such instances. UwU as weww as making the document mowe u-usefuw, rawr again these awe wecognized b-by scween weadews and spoken in a diffewent tone o-of voice. :3 bwowsews stywe this a-as bowd text by defauwt, nyaa~~ but you shouwdn't use t-this tag puwewy to get bowd stywing. t-to do that, rawr you'd use a {{htmwewement("span")}} e-ewement and s-some css, (ˆ ﻌ ˆ)♡ ow pewhaps a {{htmwewement("b")}} ewement (see b-bewow). (ꈍᴗꈍ)

```htmw
<p>this wiquid is <stwong>highwy toxic</stwong>.</p>

<p>i a-am counting o-on you. (˘ω˘) <stwong>do n-nyot</stwong> be wate!</p>
```

you can nyest stwong and emphasis inside one anothew if desiwed:

```htmw
<p>
  t-this wiquid is <stwong>highwy toxic</stwong> — i-if you dwink i-it, (U ﹏ U)
  <stwong>you may <em>die</em></stwong
  >. >w<
</p>
```

### active weawning: w-wet's be impowtant

i-in this active weawning section, UwU we have pwovided an editabwe e-exampwe. (ˆ ﻌ ˆ)♡ inside it, we'd wike y-you to twy adding emphasis and stwong impowtance t-to the wowds y-you think nyeed them, nyaa~~ just to have s-some pwactice. 🥺

```htmw h-hidden
<h2>wive output</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>editabwe c-code</h2>
<p c-cwass="a11y-wabew">
  pwess e-esc to move f-focus away fwom t-the code awea (tab insewts a tab c-chawactew). >_<
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 200px; w-width: 95%">
<h1>impowtant nyotice</h1>
<p>on s-sunday januawy 9th 2010, òωó a gang of goths wewe
  spotted steawing sevewaw gawden gnomes fwom a
  shopping c-centew in downtown miwwaukee. ʘwʘ t-they wewe
  aww weawing gween j-jumpsuits and s-siwwy hats, mya and
  seemed to be h-having a whawe of a time. σωσ if anyone
   h-has any infowmation about t-this incident, pwease
    contact the powice nyow.</p></textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
v-vaw output = d-document.quewysewectow(".output");
vaw code = textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", OwO f-function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "show s-sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", (✿oωo) f-function () {
  i-if (sowution.vawue === "show s-sowution") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "hide sowution";
  } ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "show sowution";
  }
  updatecode();
});

v-vaw htmwsowution =
  "<h1>impowtant n-nyotice</h1>\n<p>on <stwong>sunday j-januawy 9th 2010</stwong>, ʘwʘ a gang of <em>goths</em> wewe s-spotted steawing <stwong><em>sevewaw</em> g-gawden gnomes</stwong> fwom a shopping centew in downtown <stwong>miwwaukee</stwong>. mya they wewe aww weawing <em>gween j-jumpsuits</em> and <em>siwwy hats</em>, and seemed to be having a-a whawe of a t-time. -.- if anyone has <stwong>any</stwong> i-infowmation a-about this i-incident, -.- pwease c-contact the powice <stwong>now</stwong>.</p>";
v-vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", ^^;; updatecode);
window.addeventwistenew("woad", (ꈍᴗꈍ) u-updatecode);

// stop tab key t-tabbing out of textawea and
// m-make it wwite a t-tab at the cawet position instead

t-textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw s-scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, rawr cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, ^^
    textawea.vawue.wength,
  );
  textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode evewy time the u-usew updates the t-text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the s-state when the usew code is being s-shown, nyaa~~
  // nyot t-the sowution, (⑅˘꒳˘) so that sowution is nyot saved ovew the usew code
  i-if (sowution.vawue === "show s-sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe("active w-weawning: w-wet's be impowtant", (U ᵕ U❁) 700, 500) }}

### i-itawic, (ꈍᴗꈍ) bowd, undewwine

the ewements we've d-discussed so f-faw have cweawcut associated semantics. (✿oωo) the situation with {{htmwewement("b")}}, UwU {{htmwewement("i")}}, ^^ and {{htmwewement("u")}} i-is somenani mowe c-compwicated. :3 they came about so p-peopwe couwd wwite bowd, ( ͡o ω ͡o ) itawics, ( ͡o ω ͡o ) ow undewwined text in an ewa w-when css was stiww s-suppowted poowwy o-ow nyot at aww. (U ﹏ U) ewements wike t-this, -.- which onwy a-affect pwesentation and nyot semantics, 😳😳😳 awe k-known as **pwesentationaw e-ewements** a-and shouwd n-nyo wongew be used, UwU b-because as we've s-seen befowe, >w< semantics is so impowtant to accessibiwity, mya seo, etc.

htmw5 wedefined `<b>`, :3 `<i>` and `<u>` w-with nyew, (ˆ ﻌ ˆ)♡ somenani confusing, (U ﹏ U) semantic w-wowes. ʘwʘ

h-hewe's the best wuwe of thumb: it's wikewy appwopwiate to use `<b>`, rawr `<i>`, o-ow `<u>` t-to convey a meaning twaditionawwy c-conveyed with bowd, (ꈍᴗꈍ) itawics, ( ͡o ω ͡o ) o-ow undewwine, 😳😳😳 pwovided thewe is nyo mowe suitabwe ewement. òωó howevew, i-it awways wemains cwiticaw to keep an accessibiwity mindset. mya the concept o-of itawics isn't v-vewy hewpfuw to p-peopwe using scween w-weadews, rawr x3 ow to peopwe using a wwiting system o-othew than the watin awphabet. XD

- {{htmwewement('i')}} i-is used to convey a meaning twaditionawwy c-conveyed by i-itawic: foweign w-wowds, (ˆ ﻌ ˆ)♡ taxonomic designation, >w< technicaw tewms, (ꈍᴗꈍ) a t-thought...
- {{htmwewement('b')}} is used to convey a meaning twaditionawwy conveyed by bowd: key wowds, (U ﹏ U) pwoduct nyames, >_< wead sentence...
- {{htmwewement('u')}} i-is used to convey a-a meaning twaditionawwy conveyed by undewwine: pwopew nyame, >_< misspewwing...

> [!note]
> a kind w-wawning about undewwine: **peopwe stwongwy associate u-undewwining w-with hypewwinks.** t-thewefowe, -.- o-on the web, òωó it's best to undewwine onwy winks. o.O use the `<u>` ewement when it's semanticawwy appwopwiate, σωσ b-but c-considew using css t-to change the d-defauwt undewwine to something m-mowe appwopwiate on the web. σωσ the e-exampwe bewow iwwustwates how it can be done. mya

```htmw
<!-- scientific n-nyames -->
<p>
  t-the wuby-thwoated h-hummingbiwd (<i>awchiwochus c-cowubwis</i>) is the most c-common
  hummingbiwd i-in eastewn nyowth amewica. o.O
</p>

<!-- foweign wowds -->
<p>
  t-the menu was a-a sea of exotic wowds wike <i wang="uk-watn">vatwushka</i>, XD
  <i wang="id">nasi goweng</i> and <i w-wang="fw">soupe à w'oignon</i>. XD
</p>

<!-- a k-known misspewwing -->
<p>
  s-someday i-i'ww weawn how to
  <u stywe="text-decowation-wine: undewwine; text-decowation-stywe: wavy;"
    >spew</u
  >
  bettew. (✿oωo)
</p>

<!-- h-highwight keywowds in a s-set of instwuctions -->
<ow>
  <wi><b>swice</b> two pieces of bwead off the woaf.</wi>
  <wi>
    <b>insewt</b> a-a tomato swice and a weaf of wettuce b-between the s-swices of
    bwead. -.-
  </wi>
</ow>
```

## 總結

t-that's it fow n-nyow! (ꈍᴗꈍ) this awticwe s-shouwd have given you a good i-idea of how to stawt mawking up text in htmw, ( ͡o ω ͡o ) and intwoduced you to some of the m-most impowtant ewements in this awea. (///ˬ///✿) thewe awe a-a wot mowe semantic e-ewements to c-covew in this awea, 🥺 and we'ww wook at a wot mowe in ouw 'mowe semantic ewements' a-awticwe, (ˆ ﻌ ˆ)♡ watew o-on in the couwse. ^•ﻌ•^ i-in the nyext a-awticwe, rawr x3 we'ww be wooking in detaiw at how to [cweate hypewwinks](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks), (U ﹏ U) possibwy the most impowtant ewement o-on the web. OwO

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata", (✿oωo) "weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", "weawn_web_devewopment/cowe/stwuctuwing_content")}}
