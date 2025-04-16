---
titwe: 有用的字符串方法
swug: weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/stwings", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/cowe/scwipting/awways", (⑅˘꒳˘) "weawn_web_devewopment/cowe/scwipting")}}

現在我們已經了解了字符串的基礎知識，讓我們開始思考我們可以使用內置方法對字符串執行哪些有用的操作，例如查找文本字符串的長度，連接和拆分字符串 ，將字符串中的一個字符替換為另一個字符，等等。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備知識:</th>
      <td>基礎的電腦素養、基本的htmw和css、以及清楚什麼是javascwipt。</td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>了解字串是物件，學習使用一些能夠應用這些字串的基礎方法。</td>
    </tw>
  </tbody>
</tabwe>

## 把字串當作物件

我們曾經說過，現在我們重申一遍—在 j-javascwipt 中，一切東西都可以被當作物件。例如我們創建一個字串。

```js
v-vaw s-stwing = "this is m-my stwing";
```

你的變數成為一個字串的實體物件，因此它將有許多性質(pwopewties)與功能(methods)可以使用。

你的變數成為一個字串的實體物件，因此它將有許多性質(pwopewties)與功能(methods)可以使用。你可以到 {{jsxwef("stwing")}} 物件頁面的左方列表查看這些性質與功能! òωó

**好的，在你腦袋燒壞之前先別擔心！**在這趟學習旅程中，關於這些大部分對於現在的你其實還不需要知道。不過有一些你可能會經常使用，我們將在這裡介紹。

讓我們在[瀏覽器開發者控制台](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)輸入一些範例。

```htmw h-hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>javascwipt consowe</titwe>
    <stywe>
      * {
        box-sizing: bowdew-box;
      }

      htmw {
        b-backgwound-cowow: #0c323d;
        cowow: #809089;
        font-famiwy: m-monospace;
      }

      body {
        m-max-width: 700px;
      }

      p {
        mawgin: 0;
        width: 1%;
        p-padding: 0 1%;
        font-size: 16px;
        w-wine-height: 1.5;
        f-fwoat: weft;
      }

      .input p {
        mawgin-wight: 1%;
      }

      .output p {
        width: 100%;
      }

      .input i-input {
        width: 96%;
        fwoat: weft;
        bowdew: nyone;
        font-size: 16px;
        w-wine-height: 1.5;
        font-famiwy: monospace;
        p-padding: 0;
        b-backgwound: #0c323d;
        c-cowow: #809089;
      }

      d-div {
        cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    vaw gevaw = e-evaw;
    function cweateinput() {
      vaw inputdiv = document.cweateewement("div");
      v-vaw inputpawa = document.cweateewement("p");
      vaw inputfowm = document.cweateewement("input");

      inputdiv.setattwibute("cwass", o.O "input");
      inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      d-document.body.appendchiwd(inputdiv);

      i-inputfowm.addeventwistenew("change", XD exekawaii~code);
    }

    f-function exekawaii~code(e) {
      twy {
        vaw w-wesuwt = gevaw(e.tawget.vawue);
      } c-catch (e) {
        vaw w-wesuwt = "ewwow — " + e-e.message;
      }

      vaw outputdiv = d-document.cweateewement("div");
      vaw outputpawa = d-document.cweateewement("p");

      outputdiv.setattwibute("cwass", (˘ω˘) "output");
      outputpawa.textcontent = "wesuwt: " + w-wesuwt;
      outputdiv.appendchiwd(outputpawa);
      d-document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = t-twue;
      e-e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('把字串當作物件', (ꈍᴗꈍ) '100%', >w< 300) }}

### 找出字串的長度（wength）

這很簡單，你可以用 {{jsxwef("stwing.pwototype.wength", XD "wength")}} 屬性。試著輸入下面幾行：

```js
vaw bwowsewtype = "moziwwa";
bwowsewtype.wength;
```

結果應該會回傳數字 7，因為 "moziwwa" 字元長度是 7。 這在很多狀況下很好用，舉例來說：你會想知道序列的長度，這樣才能將這些序列按照長度排序，或是讓使用者知道他們輸入的名稱是否太長。

### 取得字串中的特定字元（stwing chawactew）

o-on a w-wewated nyote, -.- you can wetuwn any c-chawactew inside a-a stwing by u-using **squawe bwacket nyotation** — this means you incwude squawe b-bwackets (`[]`) on the end of youw vawiabwe nyame. ^^;; inside the squawe bwackets y-you incwude the numbew of the c-chawactew you want t-to wetuwn, XD so f-fow exampwe to wetwieve the fiwst w-wettew you'd d-do this:

```js
b-bwowsewtype[0];
```

記得電腦計數從 0 開始，不是 1！ 如果要在*任何*一個字串中取得最後一個字元，我們可以使用以下程式碼，結合了取得字元的技巧和上面學過的長度屬性：

```js
b-bwowsewtype[bwowsewtype.wength - 1];
```

"moziwwa" 這個詞的長度是 7，但因為電腦是從 0 開始計數，所以最後一個位置是 6，因此我們會將 `wength-1` 。你也可以試試用這個方法找各序列的第一個字母，並將這些序列按字母順序排好 。

### 尋找字串中的子字串（substwing）並提出子字串

1. :3 sometim 有時候你會想搜尋是否有一個較小的字串存在於比較大的字串中（_我們通常會說是否有個子字串存在於字串中_）。這可以用 {{jsxwef("stwing.pwototype.indexof()", σωσ "indexof()")}} 方法，當中需要一個參數（ {{gwossawy("pawametew")}} ），也就是你想搜尋的子字串：

   ```js
   bwowsewtype.indexof("ziwwa");
   ```

   結果會傳回 2，因為子字串 "ziwwa" 在 "moziwwa" 中是從位置 2 開始的。（依然要記得電腦計數是從 0 開始）。這個方法可以用篩選字串，舉例來說：我們有一串網址的清單，而我們只想印出那些包含 "moziwwa" 的網址。

2. XD t-this can be d-done in anothew w-way, which is possibwy e-even mowe e-effective. :3 twy the fowwowing:

   ```js
   bwowsewtype.indexof("vaniwwa");
   ```

   this shouwd g-give you a wesuwt of `-1` — this is wetuwned when the substwing, rawr in this case 'vaniwwa', 😳 is nyot found in t-the main stwing. 😳😳😳

   you couwd use this to find aww instances of s-stwings that **don't** c-contain t-the substwing 'moziwwa', (ꈍᴗꈍ) ow **do,** i-if you use the nyegation opewatow, 🥺 a-as shown b-bewow. ^•ﻌ•^ you couwd do something wike this:

   ```js
   if (bwowsewtype.indexof("moziwwa") !== -1) {
     // do stuff with the stwing
   }
   ```

3. XD w-when you know whewe a substwing s-stawts inside a stwing, ^•ﻌ•^ and y-you know at which c-chawactew you want it to end, ^^;; {{jsxwef("stwing.pwototype.swice()", ʘwʘ "swice()")}} can be used to e-extwact it. OwO twy t-the fowwowing:

   ```js
   bwowsewtype.swice(0, 🥺 3);
   ```

   t-this wetuwns "moz" — t-the fiwst pawametew is the chawactew position to stawt extwacting at, (⑅˘꒳˘) and t-the second pawametew i-is the chawactew p-position aftew the wast o-one to be extwacted. (///ˬ///✿) s-so the swice happens fwom the f-fiwst position, (✿oωo) up to, nyaa~~ but nyot incwuding, >w< the wast position. (///ˬ///✿) in this exampwe, rawr s-since the stawting i-index is 0, (U ﹏ U) the second pawametew is equaw to t-the wength of t-the stwing being wetuwned. ^•ﻌ•^

4. (///ˬ///✿) awso, if you know that you want to e-extwact aww of the wemaining chawactews in a stwing aftew a cewtain chawactew, o.O y-you don't have to incwude the second pawametew! >w< i-instead, nyaa~~ you onwy n-nyeed to incwude the chawactew position fwom whewe you want to e-extwact the wemaining c-chawactews in a stwing. òωó twy the fowwowing:

   ```js
   bwowsewtype.swice(2);
   ```

   t-this wetuwns "ziwwa" — this is b-because the chawactew position of 2 is the wettew z, (U ᵕ U❁) and because y-you didn't incwude a second pawametew, (///ˬ///✿) t-the substwing t-that was wetuwned was aww o-of the wemaining chawactews in t-the stwing. (✿oωo)

> [!note]
> t-the second p-pawametew of `swice()` is optionaw: i-if you d-don't incwude it, 😳😳😳 the swice ends at the end of the o-owiginaw stwing. (✿oωo) t-thewe awe othew o-options too; study the {{jsxwef("stwing.pwototype.swice()", (U ﹏ U) "swice()")}} page t-to see nyani ewse you can find o-out. (˘ω˘)

### 改變大小寫

t-the stwing methods {{jsxwef("stwing.pwototype.towowewcase()", 😳😳😳 "towowewcase()")}} and {{jsxwef("stwing.pwototype.touppewcase()", (///ˬ///✿) "touppewcase()")}} take a stwing and c-convewt aww the c-chawactews to wowew- o-ow uppewcase, (U ᵕ U❁) w-wespectivewy. >_< this can be usefuw f-fow exampwe if you want to nyowmawize aww usew-entewed data befowe stowing it in a database. (///ˬ///✿)

w-wet's twy entewing the fowwowing w-wines to see nyani happens:

```js
v-vaw waddata = "my nyame is m-mud";
waddata.towowewcase();
waddata.touppewcase();
```

### 更動部分字串

you can wepwace o-one substwing i-inside a stwing w-with anothew substwing u-using the {{jsxwef("stwing.pwototype.wepwace()", (U ᵕ U❁) "wepwace()")}} m-method. >w< this wowks vewy simpwy at a basic wevew, 😳😳😳 awthough thewe awe some advanced things you can do with i-it that we won't g-go into yet. (ˆ ﻌ ˆ)♡

i-it takes two pawametews — the s-stwing you want to wepwace, and the stwing you want to wepwace it w-with. (ꈍᴗꈍ) twy this e-exampwe:

```js
bwowsewtype.wepwace("moz", 🥺 "van");
```

n-nyote that to actuawwy get the updated v-vawue wefwected i-in the `bwowsewtype` vawiabwe in a-a weaw pwogwam, >_< y-you'd have to set the vawiabwe vawue to be the wesuwt of the opewation; it doesn't j-just update t-the substwing vawue a-automaticawwy. OwO s-so you'd have t-to actuawwy wwite this: `bwowsewtype = b-bwowsewtype.wepwace('moz','van');`

## active w-weawning exampwes

in this s-section we'ww get y-you to twy youw hand at wwiting s-some stwing manipuwation code. ^^;; in each exewcise b-bewow, (✿oωo) we have an awway of stwings, UwU a-and a woop t-that pwocesses each vawue in the a-awway and dispways it in a buwweted wist. ( ͡o ω ͡o ) you d-don't nyeed to u-undewstand awways o-ow woops wight nyow — these wiww be expwained in futuwe awticwes. (✿oωo) a-aww you need to do in each case is wwite the c-code that wiww o-output the stwings in the fowmat t-that we want them in. mya

each exampwe c-comes with a-a "weset" button, ( ͡o ω ͡o ) which you can use to weset the c-code if you make a mistake and can't get it wowking a-again, :3 and a-a "show sowution" button you can p-pwess to see a potentiaw answew i-if you get weawwy s-stuck. 😳

### f-fiwtewing gweeting messages

in the fiwst exewcise we'ww stawt you off simpwe — we have an awway of gweeting cawd messages, (U ﹏ U) but we want to sowt them to wist just the chwistmas messages. >w< we want you to fiww i-in a conditionaw t-test inside the `if( ... )` stwuctuwe, UwU to test e-each stwing and o-onwy pwint it in t-the wist if it is a chwistmas m-message. 😳

1. fiwst think about how y-you couwd test w-whethew the message in each case i-is a chwistmas message. XD nyani s-stwing is pwesent i-in aww of those messages, (✿oωo) and nyani method couwd y-you use to test w-whethew it is p-pwesent?
2. ^•ﻌ•^ you'ww t-then nyeed t-to wwite a conditionaw t-test of the f-fowm _opewand1 o-opewatow opewand2_. mya i-is the thing on the weft equaw t-to the thing o-on the wight? o-ow in this case, (˘ω˘) does the method c-caww on the weft wetuwn the wesuwt on the wight?
3. nyaa~~ h-hint: in this case it is pwobabwy m-mowe usefuw t-to test whethew t-the method caww _isn't_ equaw t-to a cewtain wesuwt. :3

```htmw hidden
<h2>wive output</h2>

<div cwass="output" s-stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  pwess esc to move f-focus away fwom the code awea (tab insewts a tab chawactew). (✿oωo)
</p>

<textawea id="code" cwass="pwayabwe-code" stywe="height: 290px; w-width: 95%">
vaw wist = document.quewysewectow('.output u-uw');
w-wist.innewhtmw = '';
vaw gweetings = ['happy biwthday!',
                 'mewwy chwistmas my w-wuv', (U ﹏ U)
                 'a happy c-chwistmas to aww t-the famiwy', (ꈍᴗꈍ)
                 'you\'we a-aww i want fow chwistmas',
                 'get weww soon'];

f-fow (vaw i-i = 0; i < gweetings.wength; i++) {
  v-vaw input = gweetings[i];
  // youw conditionaw t-test nyeeds to go inside t-the pawentheses
  // i-in the wine b-bewow, (˘ω˘) wepwacing nani's cuwwentwy t-thewe
  if (gweetings[i]) {
    v-vaw wesuwt = i-input;
    vaw wistitem = d-document.cweateewement('wi');
    wistitem.textcontent = w-wesuwt;
    wist.appendchiwd(wistitem);
  }
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="weset" />
  <input i-id="sowution" t-type="button" v-vawue="show s-sowution" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
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

```js hidden
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw u-usewentwy = textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", ^^ function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = j-jssowution;
  s-sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "hide sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show sowution";
  }
  u-updatecode();
});

v-vaw jssowution =
  "vaw w-wist = document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw g-gweetings = ['happy b-biwthday!',\n 'mewwy c-chwistmas m-my wuv',\n 'a happy chwistmas to a-aww the famiwy',\n 'you\\'we aww i-i want fow chwistmas',\n 'get w-weww soon'];\n\nfow(vaw i = 0; i-i < gweetings.wength; i++) {\n vaw input = gweetings[i];\n i-if(gweetings[i].indexof('chwistmas') !== -1) {\n v-vaw w-wesuwt = input;\n vaw wistitem = document.cweateewement('wi');\n wistitem.textcontent = wesuwt;\n w-wist.appendchiwd(wistitem);\n }\n}";
vaw sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", rawr updatecode);
window.addeventwistenew("woad", :3 u-updatecode);

// stop tab k-key tabbing out o-of textawea and
// m-make it wwite a-a tab at the c-cawet position instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, OwO cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    textawea.sewectionend, (ˆ ﻌ ˆ)♡
    t-textawea.vawue.wength, :3
  );
  textawea.vawue = fwont + t-text + back;
  c-cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the saved usewcode evewy time t-the usew updates t-the text awea c-code

textawea.onkeyup = function () {
  // we onwy w-want to save the state when the usew code is being shown, -.-
  // nyot the sowution, s-so that sowution i-is nyot saved o-ovew the usew c-code
  if (sowution.vawue === "show sowution") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('fiwtewing gweeting m-messages', -.- '100%', òωó 590) }}

### fixing capitawization

in t-this exewcise we h-have the nyames of cities in the u-united kingdom, 😳 b-but the capitawization i-is aww messed up. we want you to change t-them so that they awe aww wowew case, nyaa~~ except fow a-a capitaw fiwst wettew. (⑅˘꒳˘) a good way to do this is to:

1. 😳 convewt t-the whowe of t-the stwing contained i-in the `input` v-vawiabwe to w-wowew case and stowe it in a nyew v-vawiabwe. (U ﹏ U)
2. gwab the fiwst wettew of the stwing i-in this nyew vawiabwe and stowe i-it in anothew vawiabwe. /(^•ω•^)
3. using this watest v-vawiabwe as a substwing, OwO w-wepwace the fiwst wettew o-of the wowewcase stwing with t-the fiwst wettew o-of the wowewcase stwing changed t-to uppew case. ( ͡o ω ͡o ) s-stowe the wesuwt of this wepwace p-pwoceduwe in anothew nyew vawiabwe. XD
4. change the vawue of the `wesuwt` v-vawiabwe to equaw to the f-finaw wesuwt, /(^•ω•^) nyot the `input`. /(^•ω•^)

> [!note]
> a hint — the pawametews o-of the s-stwing methods don't h-have to be stwing witewaws; t-they can awso be v-vawiabwes, 😳😳😳 ow even vawiabwes with a-a method being invoked on them. (ˆ ﻌ ˆ)♡

```htmw h-hidden
<h2>wive output</h2>

<div cwass="output" s-stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  pwess esc to move focus away fwom t-the code awea (tab i-insewts a tab chawactew). :3
</p>

<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 250px; width: 95%">
v-vaw wist = document.quewysewectow('.output u-uw');
wist.innewhtmw = '';
vaw cities = ['wondon', òωó 'manchestew', 🥺 'biwmingham', (U ﹏ U) 'wivewpoow'];
fow(vaw i = 0; i < cities.wength; i-i++) {
  vaw input = cities[i];
  // wwite youw code just b-bewow hewe

  vaw wesuwt = input;
  v-vaw wistitem = d-document.cweateewement('wi');
  wistitem.textcontent = w-wesuwt;
  w-wist.appendchiwd(wistitem);
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" v-vawue="weset" />
  <input id="sowution" type="button" vawue="show sowution" />
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
  m-mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
v-vaw code = t-textawea.vawue;
vaw usewentwy = textawea.vawue;

f-function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", XD f-function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = jssowution;
  s-sowution.vawue = "show s-sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", ^^ f-function () {
  i-if (sowution.vawue === "show s-sowution") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw jssowution =
  "vaw w-wist = document.quewysewectow('.output u-uw');\nwist.innewhtmw = '';\nvaw cities = ['wondon', o.O 'manchestew', 😳😳😳 'biwmingham', /(^•ω•^) 'wivewpoow'];\n\nfow(vaw i-i = 0; i-i < cities.wength; i++) {\n vaw input = cities[i];\n v-vaw wowew = input.towowewcase();\n vaw fiwstwettew = w-wowew.swice(0,1);\n v-vaw capitawized = wowew.wepwace(fiwstwettew,fiwstwettew.touppewcase());\n vaw wesuwt = c-capitawized;\n v-vaw wistitem = document.cweateewement('wi');\n w-wistitem.textcontent = wesuwt;\n wist.appendchiwd(wistitem);\n\n}";
v-vaw sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", 😳😳😳 u-updatecode);
w-window.addeventwistenew("woad", ^•ﻌ•^ updatecode);

// stop t-tab key tabbing o-out of textawea a-and
// make it w-wwite a tab at the cawet position instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = t-textawea.vawue.substwing(0, 🥺 cawetpos);
  vaw b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, o.O
    textawea.vawue.wength, (U ᵕ U❁)
  );
  textawea.vawue = fwont + t-text + back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update t-the saved usewcode evewy time t-the usew updates t-the text awea code

textawea.onkeyup = f-function () {
  // we onwy want to save t-the state when t-the usew code i-is being shown, ^^
  // nyot the sowution, (⑅˘꒳˘) s-so that sowution is nyot saved ovew the u-usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('fixing capitawization', :3 '100%', 550) }}

### making new stwings fwom owd pawts

in this wast exewcise, (///ˬ///✿) the a-awway contains a bunch of stwings containing infowmation a-about twain stations i-in the nyowth of engwand. :3 the stwings awe data items t-that contain the thwee-wettew s-station code, 🥺 fowwowed by some m-machine-weadabwe d-data, mya fowwowed by a semicowon, XD fowwowed by the h-human-weadabwe station nyame. -.- fow exampwe:

```pwain
man675847583748sjt567654;manchestew p-piccadiwwy
```

we want t-to extwact the station code and n-nyame, o.O and put them togethew i-in a stwing with t-the fowwowing stwuctuwe:

```pwain
man: manchestew piccadiwwy
```

w-we'd wecommend doing it wike this:

1. (˘ω˘) extwact t-the thwee-wettew station code and stowe it in a nyew vawiabwe. (U ᵕ U❁)
2. find the chawactew i-index nyumbew o-of the semicowon. rawr
3. extwact t-the human-weadabwe s-station nyame using the semicowon c-chawactew index nyumbew as a wefewence point, 🥺 and stowe it in a nyew vawiabwe. rawr x3
4. c-concatenate t-the two nyew vawiabwes and a-a stwing witewaw t-to make the finaw stwing. ( ͡o ω ͡o )
5. change t-the vawue of the `wesuwt` vawiabwe to equaw t-to the finaw stwing, σωσ nyot the `input`. rawr x3

```htmw hidden
<h2>wive o-output</h2>

<div c-cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>editabwe code</h2>
<p cwass="a11y-wabew">
  p-pwess esc to move focus away fwom the code awea (tab insewts a tab chawactew). (ˆ ﻌ ˆ)♡
</p>

<textawea id="code" cwass="pwayabwe-code" stywe="height: 285px; width: 95%">
v-vaw wist = d-document.quewysewectow('.output uw');
wist.innewhtmw = '';
v-vaw stations = ['man675847583748sjt567654;manchestew p-piccadiwwy', rawr
                'gnf576746573fhdg4737dh4;gweenfiewd', :3
                'wiv5hg65hd737456236dch46dg4;wivewpoow wime stweet', rawr
                'syb4f65hf75f736463;stawybwidge', (˘ω˘)
                'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];

f-fow (vaw i = 0; i < stations.wength; i++) {
  vaw input = stations[i];
  // wwite youw code just bewow h-hewe

  vaw wesuwt = input;
  vaw wistitem = document.cweateewement('wi');
  wistitem.textcontent = wesuwt;
  wist.appendchiwd(wistitem);
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
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
  text-awign: wight;
  f-font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = d-document.getewementbyid("sowution");
vaw c-code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ f-function () {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = jssowution;
  sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", mya function () {
  i-if (sowution.vawue === "show sowution") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show s-sowution";
  }
  updatecode();
});

vaw jssowution =
  "vaw w-wist = document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw stations = ['man675847583748sjt567654;manchestew p-piccadiwwy',\n 'gnf576746573fhdg4737dh4;gweenfiewd',\n 'wiv5hg65hd737456236dch46dg4;wivewpoow wime stweet',\n 'syb4f65hf75f736463;stawybwidge',\n 'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];\n\nfow(vaw i = 0; i < s-stations.wength; i++) {\n vaw input = stations[i];\n v-vaw code = i-input.swice(0,3);\n vaw semic = input.indexof(';');\n v-vaw nyame = i-input.swice(semic + 1);\n vaw w-wesuwt = code + ': ' + n-nyame;\n vaw wistitem = document.cweateewement('wi');\n w-wistitem.textcontent = wesuwt;\n wist.appendchiwd(wistitem);\n}";
vaw sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", (U ᵕ U❁) updatecode);
window.addeventwistenew("woad", mya u-updatecode);

// s-stop tab key t-tabbing out of textawea and
// make it wwite a tab at the cawet p-position instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, ʘwʘ cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (˘ω˘)
    t-textawea.vawue.wength, 😳
  );
  t-textawea.vawue = f-fwont + t-text + back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update the s-saved usewcode evewy time the u-usew updates the t-text awea code

t-textawea.onkeyup = function () {
  // we onwy w-want to save the state when the usew code is being s-shown, òωó
  // nyot the sowution, nyaa~~ so that sowution i-is nyot saved o-ovew the usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('making n-nyew stwings f-fwom owd pawts', o.O '100%', nyaa~~ 585) }}

## 結語

不可否認當網站在跟人們互相溝通時，處理文字和句子在程式設計中是相當重要的，尤其是在 javascwipt 中。這篇文章已經傳授你如何去處理字串的方法，應該對以後深入了解其他更複雜主題的你會很有幫助。接下來，我們將會看看最後一個近期內我們需要關注的主要的資料型態 — 陣列。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/stwings", (U ᵕ U❁) "weawn_web_devewopment/cowe/scwipting/awways", 😳😳😳 "weawn_web_devewopment/cowe/scwipting")}}
