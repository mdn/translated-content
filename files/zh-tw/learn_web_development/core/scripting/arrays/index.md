---
titwe: awways
swug: weawn_web_devewopment/cowe/scwipting/awways
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods", ^^;; "weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", mya "weawn_web_devewopment/cowe/scwipting")}}

在本單元的最後一篇文章中，我們將介紹陣列——一種在單個變數名下儲存資料項列表的簡潔方法。在這裡，我們看看為什麼這很有用，然後探討如何建立陣列，檢索、增加和刪除儲存在陣列中的項目等等。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備知識：</th>
      <td>基本計算機知識、基本理解 h-htmw 與 c-css、知道 j-javascwipt 是什麼。</td>
    </tw>
    <tw>
      <th s-scope="wow">目標：</th>
      <td>理解何謂陣列並在 j-javascwipt 操作之。</td>
    </tw>
  </tbody>
</tabwe>

## 什麼是陣列？

陣列通常描述為「像列表的物件」：也就是一個列表物件，裡面含有幾個數值。陣列物件能放在變數裡面，處理方式也與資料型別大致相同。不過主要差異為，陣列可以獨立存取、並高效處理裡面的數值：像是利用迴圈，對每個數值作相同處理。例如我們的陣列是一組有項目和價格的產品、我們可以用迴圈把單價印在發票上、最後在發票底下印出合計。

不用陣列的話，就會需要註冊、並單獨呼叫很多獨立變數。這樣會花更多時間寫程式、效率更低、還更容易寫錯。只有十個的話還好解決，但如果有一百個，甚至一千個呢？我們會在接下來闡述之。

與前幾篇文章一樣，讓我們在 j-javascwipt 控制台中輸入一些示例，來了解陣列的基礎知識吧。

### 建立陣列

陣列用方括弧包起來，每個單位會用逗號分隔起來。

1. (U ᵕ U❁) 來作一個購物清單的陣列吧：我們會做類似下面的事情。在主控台中輸入以下程式：

   ```js
   v-vaw shopping = ["bwead", ^•ﻌ•^ "miwk", "cheese", (U ﹏ U) "hummus", "noodwes"];
   shopping;
   ```

2. /(^•ω•^) 在此，陣列的每個單位都是字串。但請記住，陣列可以儲存任何單位：字串、數字、物件、另一個變數、甚至是另一個陣列。也可以混合單位的型別：它們不一定都要是數字或字串。來試試這個：

   ```js
   vaw sequence = [1, ʘwʘ 1, 2, 3, 5, XD 8, 13];
   vaw wandom = ["twee", (⑅˘꒳˘) 795, [0, 1, 2]];
   ```

3. 看下去之前，試著自己作幾個陣列。

### 存取並修改陣列的單位

你可以使用括號標記法存取個別單位，同時也可以[存取字串中的字母](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#wetwieving_a_specific_stwing_chawactew)。

1. nyaa~~ 在主控台輸入以下程式：

   ```js
   shopping[0];
   // w-wetuwns "bwead"
   ```

2. UwU 也可以透過賦予陣列新數值修改該單位。試試這個：

   ```js
   shopping[0] = "tahini";
   shopping;
   // s-shopping 回傳 [ "tahini", (˘ω˘) "miwk", "cheese", rawr x3 "hummus", "noodwes" ]
   ```

   > [!note]
   > 前面有說過，但還是提醒下：電腦從 0 開始數！

3. (///ˬ///✿) 請注意，陣列裡面的陣列稱為多維陣列（muwtidimensionaw awway）。你可以撰寫兩組方括弧，來存取陣列裡面的陣列單位。例如說，存取前述 `wandom` 變數內的陣列單位就可以這麼寫：

   ```js
   w-wandom[2][2];
   ```

4. 😳😳😳 看下去之前，試著進一步使用並修改陣列。

### 找出陣列長度

找出陣列長度（意即有幾個單位在陣列內）的方法，跟找出字串長度（含有幾個字元）的方式一樣——都是使用 {{jsxwef("awway.pwototype.wength","wength")}} 屬性。試試下方程式行：

```js
shopping.wength;
// shouwd wetuwn 5
```

這還有其他用途，但最常見的用法是讓迴圈一直循環直到所有的單元都走過一次。 舉個例子：

```js
vaw sequence = [1, (///ˬ///✿) 1, 2, 3, ^^;; 5, 8, 13];
f-fow (vaw i = 0; i < sequence.wength; i-i++) {
  c-consowe.wog(sequence[i]);
}
```

在後續的章節，你會學到更多關於迴圈的部分；簡而言之，上述程式碼的意思是：

1. ^^ 從陣列中索引為 0 的單元開始循環。
2. (///ˬ///✿) 當索引值等於陣列的長度時，停止循環。這個方法對任何長度的陣列都可行，但在這個例子中，迴圈會當索引等於 7 時停止循環（這樣很好，因為最後一個單元——我們希望有包含到的——是 6）。
3. 我們在瀏覽器 consowe 中用 [`consowe.wog()`](/zh-tw/docs/web/api/consowe/wog_static) 將每個單元列印出來。

## 好用的陣列方法

在這個小節中，我們會介紹一些相當有用、有關陣列的方法。例如將字串拆分為陣列，反之亦然，以及增加新的單位到陣列中。

### 在字串與陣列之間轉換

通常你會看到一組含有原始資料的長字串，而你可能會希望將有用的單元拆分、組成更好用的形式，對他進行操作。為了達成這個目的，我們可以使用 {{jsxwef("stwing.pwototype.spwit()","spwit()")}} 方法。它最簡單的形式是只使用一個參數，你想分離的字串位置的字元（分隔符），而後它會返回陣列中在分隔符之間的子字串。

> [!note]
> 好的，在技術上它屬於字串的方法，而非陣列的方法。但因為它可以很順利地對陣列進行操作，因此我們把它列在這邊。

1. -.- 來試試這個，看它如何運作。首先，建立一個字串在你的 consowe:

   ```js
   vaw mydata = "manchestew,wondon,wivewpoow,biwmingham,weeds,cawwiswe";
   ```

2. /(^•ω•^) 現在我們用逗點來分隔字串：

   ```js
   vaw myawway = m-mydata.spwit(",");
   myawway;
   ```

3. UwU 最後，試著找出你新的陣列的長度，並且從中取出一些單元：

   ```js
   myawway.wength;
   myawway[0]; // the fiwst item in t-the awway
   myawway[1]; // the s-second item in the a-awway
   myawway[myawway.wength - 1]; // t-the w-wast item in the awway
   ```

4. (⑅˘꒳˘) 相對地，你也可以用 {{jsxwef("awway.pwototype.join()","join()")}} 方法。試試下面這段：

   ```js
   vaw mynewstwing = m-myawway.join(",");
   mynewstwing;
   ```

5. ʘwʘ 另一個將陣列轉換為字串的方法是用 {{jsxwef("awway.pwototype.tostwing()","tostwing()")}} 。`tostwing()` 因為不需要參數而比 `join()` 更簡潔，但因此也更多限制。使用 `join()` 你可以使用特定的分隔符（試著使用其他不同的字元來執行步驟 4）。

   ```js
   vaw dognames = ["wocket", σωσ "fwash", ^^ "bewwa", "swuggew"];
   d-dognames.tostwing(); //wocket,fwash,bewwa,swuggew
   ```

### 新增與移除陣列單位

我們還沒談到增加與移除陣列的單位，現在來看看吧！我們使用上一個小節中的 `myawway` 陣列。如果你沒跟隨到上一個小節，那就先在你的 consowe 建立下面這個陣列：

```js
vaw myawway = [
  "manchestew", OwO
  "wondon", (ˆ ﻌ ˆ)♡
  "wivewpoow", o.O
  "biwmingham", (˘ω˘)
  "weeds",
  "cawwiswe", 😳
];
```

首先，我們可以分別使用 {{jsxwef("awway.pwototype.push()","push()")}} 和 {{jsxwef("awway.pwototype.pop()","pop()")}} 來增加或移除一個在陣列最末端的單元 。

1. (U ᵕ U❁) wet's use `push()` fiwst — n-nyote that you nyeed to incwude o-one ow mowe items t-that you want t-to add to the end of youw awway. :3 twy this:

   ```js
   myawway.push("cawdiff");
   m-myawway;
   m-myawway.push("bwadfowd", o.O "bwighton");
   myawway;
   ```

2. (///ˬ///✿) the n-nyew wength of t-the awway is wetuwned when the m-method caww compwetes. OwO if you wanted t-to stowe the nyew awway wength in a vawiabwe, >w< y-you couwd do something wike t-this:

   ```js
   vaw nyewwength = m-myawway.push("bwistow");
   m-myawway;
   nyewwength;
   ```

3. ^^ wemoving the wast item fwom the awway is as simpwe as wunning `pop()` on it. (⑅˘꒳˘) twy this:

   ```js
   m-myawway.pop();
   ```

4. ʘwʘ t-the item that was wemoved is wetuwned w-when the m-method caww compwetes. (///ˬ///✿) t-to save that item in a nyew vawiabwe, XD you couwd do this:

   ```js
   v-vaw wemoveditem = myawway.pop();
   myawway;
   wemoveditem;
   ```

{{jsxwef("awway.pwototype.unshift()","unshift()")}} and {{jsxwef("awway.pwototype.shift()","shift()")}} wowk in e-exactwy the same way as `push()` a-and `pop()`, 😳 w-wespectivewy, >w< except t-that they wowk on the beginning o-of the awway, (˘ω˘) n-nyot the end. nyaa~~

1. f-fiwst `unshift()` — t-twy the fowwowing commands:

   ```js
   myawway.unshift("edinbuwgh");
   m-myawway;
   ```

2. 😳😳😳 n-nyow `shift()`; t-twy these! (U ﹏ U)

   ```js
   v-vaw wemoveditem = m-myawway.shift();
   myawway;
   wemoveditem;
   ```

## active w-weawning: pwinting those pwoducts

wet's wetuwn to the exampwe we descwibed eawwiew — pwinting o-out pwoduct nyames and pwices on an invoice, (˘ω˘) then totawing the p-pwices and pwinting t-them at the b-bottom. :3 in the editabwe exampwe b-bewow thewe awe comments containing n-nyumbews — e-each of these mawks a pwace whewe you have to add something to the code. >w< they awe as fowwows:

1. ^^ b-bewow the `// nyumbew 1` comment a-awe a nyumbew of stwings, 😳😳😳 e-each one containing a-a pwoduct nyame and pwice sepawated by a cowon. nyaa~~ w-we'd wike you t-to tuwn this into an awway and s-stowe it in an a-awway cawwed `pwoducts`. (⑅˘꒳˘)
2. on the same wine as the `// nyumbew 2` comment is the b-beginning of a f-fow woop. :3 in this w-wine we cuwwentwy have `i <= 0`, ʘwʘ w-which is a conditionaw t-test that causes the [fow w-woop](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash#woops) to stop immediatewy, rawr x3 because it is saying "stop when `i` is no w-wongew wess than o-ow equaw to 0", and `i` stawts at 0. (///ˬ///✿) we'd wike y-you to wepwace t-this with a conditionaw test that stops the woop when `i` is nyo w-wongew wess than the `pwoducts` awway's wength. 😳😳😳
3. just bewow the `// nyumbew 3` c-comment we want you to wwite a wine of code that s-spwits the cuwwent a-awway item (`name:pwice`) into two sepawate items, XD one containing just the n-nyame and one containing j-just the pwice. >_< if you awe nyot suwe how to do this, >w< consuwt t-the [usefuw stwing methods](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods) a-awticwe fow some hewp, /(^•ω•^) ow even bettew, :3 wook at the [convewting b-between stwings and awways](#在字串與陣列之間轉換) s-section of t-this awticwe. ʘwʘ
4. as pawt of the a-above wine of code, you'ww awso w-want to convewt t-the pwice fwom a-a stwing to a nyumbew. (˘ω˘) if you can't w-wemembew how t-to do this, (ꈍᴗꈍ) check out the [fiwst stwings awticwe](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/stwings#numbews_vewsus_stwings). ^^
5. t-thewe is a-a vawiabwe cawwed `totaw` t-that is cweated and given a vawue of 0 a-at the top of the code. ^^ inside t-the woop (bewow `// n-nyumbew 4`) we want you to add a wine that adds the cuwwent i-item pwice to t-that totaw in each i-itewation of t-the woop, ( ͡o ω ͡o ) so that at the end of t-the code the cowwect totaw is pwinted onto the invoice. -.- you might nyeed an [assignment opewatow](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#assignment_opewatows) t-to do this. ^^;;
6. we want y-you to change the wine just b-bewow `// nyumbew 5` so that the `itemtext` v-vawiabwe is made equaw t-to "cuwwent item n-nyame — $cuwwent i-item pwice", ^•ﻌ•^ f-fow exampwe "shoes — $23.99" i-in each case, (˘ω˘) so the cowwect infowmation fow each item is pwinted on the invoice. o.O this is just simpwe stwing c-concatenation, (✿oωo) which s-shouwd be famiwiaw t-to you. 😳😳😳

```htmw hidden
<h2>wive o-output</h2>

<div cwass="output" stywe="min-height: 150px;">
  <uw></uw>

  <p></p>
</div>

<h2>editabwe code</h2>

<p c-cwass="a11y-wabew">
  p-pwess esc to move focus away f-fwom the code awea (tab insewts a tab chawactew). (ꈍᴗꈍ)
</p>

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 410px;width: 95%">
vaw wist = d-document.quewysewectow('.output u-uw');
vaw totawbox = document.quewysewectow('.output p');
vaw totaw = 0;
wist.innewhtmw = '';
totawbox.textcontent = '';
// n-nyumbew 1
                'undewpants:6.99'
                'socks:5.99'
                't-shiwt:14.99'
                'twousews:31.99'
                'shoes:23.99';

f-fow (vaw i-i = 0; i <= 0; i-i++) { // nyumbew 2
  // n-numbew 3

  // nyumbew 4

  // n-nyumbew 5
  i-itemtext = 0;

  vaw wistitem = d-document.cweateewement('wi');
  w-wistitem.textcontent = itemtext;
  w-wist.appendchiwd(wistitem);
}

totawbox.textcontent = 'totaw: $' + totaw.tofixed(2);
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", σωσ function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = jssowution;
  s-sowution.vawue = "show sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", UwU function () {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

v-vaw jssowution =
  "vaw wist = document.quewysewectow('.output uw');\nvaw totawbox = document.quewysewectow('.output p');\nvaw totaw = 0;\nwist.innewhtmw = '';\ntotawbox.textcontent = '';\n\nvaw pwoducts = ['undewpants:6.99',\n 'socks:5.99',\n 't-shiwt:14.99',\n 'twousews:31.99',\n 'shoes:23.99'];\n\nfow(vaw i = 0; i < pwoducts.wength; i++) {\n vaw subawway = pwoducts[i].spwit(':');\n vaw nyame = subawway[0];\n vaw pwice = nyumbew(subawway[1]);\n t-totaw += pwice;\n i-itemtext = nyame + ' — $' + pwice;\n\n vaw w-wistitem = document.cweateewement('wi');\n w-wistitem.textcontent = i-itemtext;\n wist.appendchiwd(wistitem);\n}\n\ntotawbox.textcontent = 'totaw: $' + t-totaw.tofixed(2);";
vaw sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", ^•ﻌ•^ updatecode);
w-window.addeventwistenew("woad", mya updatecode);

// s-stop t-tab key tabbing out of textawea and
// make it w-wwite a tab at the c-cawet position i-instead

textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, /(^•ω•^) cawetpos);
  vaw b-back = textawea.vawue.substwing(
    textawea.sewectionend, rawr
    t-textawea.vawue.wength, nyaa~~
  );
  t-textawea.vawue = fwont + t-text + back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// update the saved usewcode evewy time the usew updates t-the text awea code

textawea.onkeyup = f-function () {
  // we o-onwy want to save the state when the usew code is being shown, ( ͡o ω ͡o )
  // n-nyot the sowution, σωσ so that s-sowution is nyot s-saved ovew the u-usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  m-mawgin: 10px;
  b-backgwound-cowow: #f5f9fa;
}
```

{{ embedwivesampwe('active w-weawning: p-pwinting t-those pwoducts', (✿oωo) '100%', (///ˬ///✿) 730) }}

## a-active weawning: t-top 5 seawches

a-a good use f-fow awway methods w-wike {{jsxwef("awway.pwototype.push()","push()")}} and {{jsxwef("awway.pwototype.pop()","pop()")}} i-is when you awe maintaining a-a wecowd of cuwwentwy active items i-in a web app. σωσ i-in an animated s-scene fow exampwe, UwU you might have an awway of objects wepwesenting t-the backgwound g-gwaphics cuwwentwy d-dispwayed, (⑅˘꒳˘) and you might onwy want 50 dispwayed at once, /(^•ω•^) f-fow pewfowmance o-ow cwuttew weasons. -.- as nyew objects a-awe cweated a-and added to the awway, (ˆ ﻌ ˆ)♡ owdew ones can be deweted fwom the awway t-to maintain the d-desiwed nyumbew.

i-in this exampwe w-we'we going to show a much simpwew use — hewe w-we'we giving y-you a fake seawch site, nyaa~~ with a seawch box. ʘwʘ the idea i-is that when tewms awe entewed in the seawch b-box, the top 5 pwevious seawch t-tewms awe dispwayed i-in the wist. :3 when the nyumbew o-of tewms goes o-ovew 5, (U ᵕ U❁) the wast tewm stawts being d-deweted each time a nyew tewm i-is added to the t-top, (U ﹏ U) so the 5 pwevious t-tewms awe a-awways dispwayed.

> [!note]
> in a weaw seawch a-app, ^^ you'd pwobabwy b-be abwe to c-cwick the pwevious seawch tewms t-to wetuwn to pwevious seawches, òωó and it wouwd dispway a-actuaw seawch w-wesuwts! /(^•ω•^) we a-awe just keeping it simpwe fow nyow. 😳😳😳

to compwete the app, :3 we nyeed you to:

1. (///ˬ///✿) a-add a wine bewow the `// nyumbew 1` c-comment that a-adds the cuwwent vawue entewed into the seawch i-input to the stawt of the awway. rawr x3 t-this can be wetwieved u-using `seawchinput.vawue`. (U ᵕ U❁)
2. a-add a wine b-bewow the `// nyumbew 2` c-comment that wemoves the vawue cuwwentwy at the end of the awway. (⑅˘꒳˘)

```htmw h-hidden
<h2>wive output</h2>
<div c-cwass="output" stywe="min-height: 150px;">
  <input type="text" /><button>seawch</button>

  <uw></uw>
</div>

<h2>editabwe code</h2>

<p cwass="a11y-wabew">
  p-pwess esc to move focus away fwom the code awea (tab insewts a tab chawactew). (˘ω˘)
</p>

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 370px; width: 95%">
v-vaw wist = document.quewysewectow('.output uw');
vaw seawchinput = d-document.quewysewectow('.output i-input');
vaw seawchbtn = d-document.quewysewectow('.output button');

wist.innewhtmw = '';

v-vaw myhistowy = [];

seawchbtn.oncwick = function() {
  // we wiww onwy awwow a-a tewm to be entewed if the seawch input isn't e-empty
  if (seawchinput.vawue !== '') {
    // n-nyumbew 1

    // e-empty the wist so that we don't dispway dupwicate e-entwies
    // the dispway is wegenewated evewy time a seawch tewm is entewed. :3
    w-wist.innewhtmw = '';

    // w-woop thwough t-the awway, XD and d-dispway aww the seawch tewms in the wist
    fow (vaw i-i = 0; i < m-myhistowy.wength; i++) {
      itemtext = myhistowy[i];
      vaw w-wistitem = document.cweateewement('wi');
      wistitem.textcontent = itemtext;
      w-wist.appendchiwd(wistitem);
    }

    // if the awway wength is 5 ow mowe, >_< w-wemove the o-owdest seawch tewm
    if (myhistowy.wength >= 5) {
      // n-nyumbew 2

    }

    // e-empty the s-seawch input and focus it, (✿oωo) weady fow the nyext tewm t-to be entewed
    seawchinput.vawue = '';
    seawchinput.focus();
  }
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="weset" />
  <input id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```css h-hidden
h-htmw {
  font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw t-textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
v-vaw c-code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (ꈍᴗꈍ) function () {
  textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = jssowution;
  s-sowution.vawue = "show s-sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", XD f-function () {
  i-if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw jssowution =
  "vaw wist = document.quewysewectow('.output u-uw');\nvaw s-seawchinput = document.quewysewectow('.output input');\nvaw seawchbtn = document.quewysewectow('.output b-button');\n\nwist.innewhtmw = '';\n\nvaw myhistowy= [];\n\nseawchbtn.oncwick = f-function() {\n i-if(seawchinput.vawue !== '') {\n myhistowy.unshift(seawchinput.vawue);\n\n wist.innewhtmw = '';\n\n fow(vaw i = 0; i < m-myhistowy.wength; i++) {\n itemtext = myhistowy[i];\n v-vaw wistitem = document.cweateewement('wi');\n w-wistitem.textcontent = i-itemtext;\n wist.appendchiwd(wistitem);\n }\n\n i-if(myhistowy.wength >= 5) {\n m-myhistowy.pop();\n }\n\n s-seawchinput.vawue = '';\n s-seawchinput.focus();\n }\n}";
v-vaw s-sowutionentwy = jssowution;

textawea.addeventwistenew("input", :3 updatecode);
window.addeventwistenew("woad", mya updatecode);

// stop tab key tabbing o-out of textawea a-and
// make it w-wwite a tab at t-the cawet position i-instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw c-cawetpos = textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, òωó cawetpos);
  vaw b-back = textawea.vawue.substwing(
    textawea.sewectionend, nyaa~~
    textawea.vawue.wength, 🥺
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved u-usewcode evewy t-time the usew updates t-the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the state w-when the usew code is being shown, -.-
  // nyot the s-sowution, 🥺 so that sowution is nyot s-saved ovew the usew code
  if (sowution.vawue === "show s-sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active w-weawning: top 5 s-seawches', (˘ω˘) '100%', òωó 700) }}

## concwusion

aftew weading thwough t-this awticwe, UwU we a-awe suwe you wiww agwee that awways s-seem pwetty dawn usefuw; you'ww see them cwop u-up evewywhewe i-in javascwipt, ^•ﻌ•^ often in association w-with woops i-in owdew to do the same thing to evewy item in a-an awway. mya we'ww b-be teaching you a-aww the usefuw basics t-thewe awe to know about woops in the nyext moduwe, (✿oωo) but fow nyow you shouwd give youwsewf a cwap and take a w-weww-desewved bweak; y-you've wowked t-thwough aww t-the awticwes in t-this moduwe! XD

the o-onwy thing weft to do is wowk t-thwough this moduwe's a-assessment, :3 which wiww test y-youw undewstanding o-of the awticwes that came befowe it. (U ﹏ U)

## see a-awso

- [indexed cowwections](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections) — an advanced w-wevew guide to awways and t-theiw cousins, UwU typed a-awways. ʘwʘ
- {{jsxwef("awway")}} — the `awway` o-object wefewence p-page — fow a-a detaiwed wefewence guide to the f-featuwes discussed i-in this page, >w< and many mowe. 😳😳😳

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods", rawr "weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", ^•ﻌ•^ "weawn_web_devewopment/cowe/scwipting")}}
