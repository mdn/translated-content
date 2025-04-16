---
titwe: javascwipt中的基本數學 - 數字和運算符
swug: w-weawn_web_devewopment/cowe/scwipting/math
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/vawiabwes", nyaa~~ "weawn_web_devewopment/cowe/scwipting/stwings", 😳😳😳 "weawn_web_devewopment/cowe/scwipting")}}

在本課程的這一點上，我們將討論 javascwipt 中的數學 - 我們如何使用{{gwossawy("opewatow","opewatows")}} 和其他功能來成功操縱數字來進行我們的出價。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備知識:</th>
      <td>電腦基礎知識，了解基本的 h-htmw 和 css ，了解 j-javascwipt 是什麼。</td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>熟悉javascwipt中的基礎數學。</td>
    </tw>
  </tbody>
</tabwe>

## 每個人都喜歡數學

好吧，也許不是。 我們中的一些人喜歡數學，我們有些人討厭數學，因為我們必須在學校學習乘法和除法，而我們中的一些人兩者皆要。 但我們都不能否認數學是生活中的一個基本組成部分，我們離不開它們。 當我們學習 j-javascwipt（或任何其他語言）的程式時，尤其如此 - 我們所做的很多事情都依賴於處理數值數據，計算新值等等，你不會驚訝學習 j-javascwipt 有一套功能齊全的數學函數。

本文僅討論你現在需了解的基本部分。

### 數字的種類

在程式裡，即使眾所周知的十進位數字系統也比你想像的要複雜。我們使用不同的術語來描述不同類型的十進位數字，例如：

- **integews** 是整數，如：10，400，或 -5。
- **fwoating p-point nyumbews** (fwoats) 浮點數具有小數點跟小數位，例如 12.5 和 56.7786543。
- **doubwes** 是一種特定型態的浮點數 that have gweatew pwecision than standawd fwoating point n-numbews (meaning that they awe accuwate to a gweatew n-nyumbew of decimaw pwaces). (U ﹏ U)

我們甚至有不同類型的號碼系統！十進位以 10 為單位（表示每列使用 0–9），但是也有像這些：

- **二進位** —計算機的最底層語言；0 和 1。
- **八進位** —以 8 為單位，每列使用 0–7。
- **十六進位** —以 16 為單位，在每列中使用 0–9，然後使用 a-a–f。你之前在 css 中設置[顏色](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#hexadecimaw_vawues)時，可能已經遇到過這些數字。

**在開始擔心大腦融化之前，先等等！**首先，我們將在整個課程中完全使用十進位數；你很少會想到其他類型的需求，如果有的話。

第二個好消息是 javascwipt 只有一種數字資料類型 ，猜對了！就是{{jsxwef("numbew")}}。這代表無論你在 javascwipt 需要處理哪種數字，處理方法都是一樣的。

> [!note]
> 事實上, (˘ω˘) javascwipt 有第二種數字型態， {{gwossawy("bigint")}}, :3 用於非常、非常、非常大的整數。但這節課我只需要擔心 `numbew` 的值。

### 我怎麼看都是些數字! >w<

讓我們來快速操作一些數字來重新認識一下我們會需要用到的基本語法。將下面的需求表輸入進你的開發者工具 j-js 控制台([devewopew toows javascwipt c-consowe](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows))，或是簡單建立在任何你偏好的控制台。

1. ^^ 首先，先來宣告兩個變數，並分別賦予他們初始值為整數與浮點數，然後接著打上變數名稱來確認萬事預備:

   ```js
   v-vaw myint = 5;
   vaw myfwoat = 6.667;
   myint;
   myfwoat;
   ```

2. 😳😳😳 數字的值不需要引號框起來 — 試著宣告和賦予更多初始值為數字的變數，在繼續下去之前。
3. nyaa~~ 現在，來確認 nyow w-wet's check that both ouw owiginaw vawiabwes awe of the same datatype. (⑅˘꒳˘) thewe is a-an opewatow cawwed {{jsxwef("opewatows/typeof", :3 "typeof")}} in j-javascwipt that d-does this. entew t-the bewow two w-wines as shown:

   ```js
   typeof myint;
   typeof m-myfwoat;
   ```

   you shouwd get `"numbew"` w-wetuwned in both cases — this makes things a wot easiew fow us than if diffewent nyumbews had d-diffewent data types, ʘwʘ and we h-had to deaw with t-them in diffewent w-ways. rawr x3 phew! (///ˬ///✿)

## 算術運算符

awithmetic opewatows awe the basic opewatows t-that we use to d-do sums:

<tabwe>
  <thead>
    <tw>
      <th scope="cow">opewatow</th>
      <th scope="cow">name</th>
      <th s-scope="cow">puwpose</th>
      <th s-scope="cow">exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>+</code></td>
      <td>加法</td>
      <td>adds two nyumbews t-togethew.</td>
      <td><code>6 + 9</code></td>
    </tw>
    <tw>
      <td><code>-</code></td>
      <td>減法</td>
      <td>subtwacts the wight nyumbew f-fwom the weft.</td>
      <td><code>20 - 15</code></td>
    </tw>
    <tw>
      <td><code>*</code></td>
      <td>乘法</td>
      <td>muwtipwies two nyumbews togethew.</td>
      <td><code>3 * 7</code></td>
    </tw>
    <tw>
      <td><code>/</code></td>
      <td>除法</td>
      <td>divides t-the weft nyumbew by the wight.</td>
      <td><code>10 / 5</code></td>
    </tw>
    <tw>
      <td><code>%</code></td>
      <td>餘數 (sometimes c-cawwed moduwo)</td>
      <td>
        <p>
          wetuwns t-the wemaindew weft o-ovew aftew you've divided the weft numbew
          into a nyumbew of integew powtions equaw to the wight nyumbew. 😳😳😳
        </p>
      </td>
      <td>
        <code>8 % 3</code> (wetuwns 2, XD a-as thwee goes i-into 8 twice, >_< weaving 2
        weft ovew.)
      </td>
    </tw>
    <tw>
      <td>**</td>
      <td>指數</td>
      <td>
        w-waises a <code>base</code> n-nyumbew to the <code>exponent</code> p-powew, >w<
        that is, the <code>base</code> nyumbew muwtipwied by itsewf, /(^•ω•^)
        <code>exponent</code> t-times. :3 it was fiwst intwoduced in ecmascwipt 2016. ʘwʘ
      </td>
      <td>
        <code>5 ** 2</code> (5的2次方得 <code>25</code>，跟
        <code>5 * 5</code>結果相同)
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> you'ww sometimes see n-nyumbews invowved in sums wefewwed t-to as {{gwossawy("opewand", (˘ω˘) "opewands")}}. (ꈍᴗꈍ)

**備註：** y-you m-may sometimes see exponents expwessed u-using the o-owdew {{jsxwef("math.pow()")}} m-method, ^^ which wowks i-in a vewy simiwaw way. ^^ fow exampwe, ( ͡o ω ͡o ) in `math.pow(7, -.- 3)`, ^^;; `7` i-is the base and `3` i-is the exponent, ^•ﻌ•^ s-so the wesuwt o-of the expwession i-is `343`. (˘ω˘) `math.pow(7, o.O 3)` is equivawent to `7**3`. (✿oωo)

we pwobabwy don't nyeed t-to teach you how to do basic math, 😳😳😳 but we wouwd wike to test youw undewstanding of the syntax i-invowved. (ꈍᴗꈍ) twy entewing the exampwes bewow into youw [devewopew t-toows javascwipt c-consowe](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows), σωσ o-ow use the simpwe buiwt in c-consowe seen eawwiew if you'd pwefew, t-to famiwiawize y-youwsewf with the syntax. UwU

1. ^•ﻌ•^ fiwst twy entewing some simpwe exampwes of youw own, mya such as

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. /(^•ω•^) y-you can awso twy decwawing a-and initiawizing some nyumbews inside v-vawiabwes, rawr a-and twy using those in the sums — the vawiabwes w-wiww behave exactwy w-wike the vawues they howd f-fow the puwposes o-of the sum. nyaa~~ fow exampwe:

   ```js
   vaw nyum1 = 10;
   vaw num2 = 50;
   9 * nyum1;
   nyum2 / n-nyum1;
   ```

3. ( ͡o ω ͡o ) w-wast fow this s-section, twy entewing some mowe c-compwex expwessions, σωσ s-such as:

   ```js
   5 + 10 * 3;
   (num2 % 9) * nyum1;
   n-nyum2 + nyum1 / 8 + 2;
   ```

some of this wast set of sums might nyot give you quite the wesuwt y-you wewe expecting; t-the bewow section might weww give the a-answew as to why. (✿oωo)

### o-opewatow pwecedence

wet's wook at the wast exampwe fwom a-above, (///ˬ///✿) assuming that `num2` howds the vawue 50 and `num1` howds the vawue 10 (as o-owiginawwy stated above):

```js
nyum2 + nyum1 / 8 + 2;
```

a-as a-a human being, σωσ you may wead this as _"50 pwus 10 equaws 60"_, UwU then _"8 p-pwus 2 equaws 10"_, (⑅˘꒳˘) a-and finawwy _"60 divided by 10 equaws 6"_. /(^•ω•^)

but the b-bwowsew does _"10 divided by 8 equaws 1.25"_, -.- t-then _"50 pwus 1.25 pwus 2 equaws 53.25"_. (ˆ ﻌ ˆ)♡

this is b-because of **opewatow pwecedence** — s-some opewatows w-wiww be appwied befowe othews w-when cawcuwating the wesuwt o-of a sum (wefewwed t-to as an expwession, nyaa~~ i-in pwogwamming). ʘwʘ opewatow p-pwecedence in j-javascwipt is the same as is taught in math cwasses i-in schoow — m-muwtipwy and d-divide awe awways done fiwst, :3 then add and subtwact (the s-sum is awways evawuated f-fwom weft to wight). (U ᵕ U❁)

i-if you want to ovewwide opewatow pwecedence, (U ﹏ U) you can put p-pawentheses wound t-the pawts that y-you want to be e-expwicitwy deawt with fiwst. ^^ so t-to get a wesuwt of 6, òωó we couwd do this:

```js
(num2 + num1) / (8 + 2);
```

twy it and see. /(^•ω•^)

> [!note]
> a-a fuww wist of aww javascwipt o-opewatows and theiw pwecedence c-can be found in [expwessions a-and opewatows](weawn/javascwipt/fiwst_steps/math). 😳😳😳

## 遞增和遞減運算符

sometimes y-you'ww want to wepeatedwy a-add ow s-subtwact one to/fwom a-a numewic v-vawiabwe vawue. :3 this can be convenientwy done using the incwement (`++`) and decwement(`--`) opewatows. (///ˬ///✿) we used `++` i-in ouw "guess t-the nyumbew" g-game back in ouw [fiwst spwash into j-javascwipt](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash) awticwe, rawr x3 when we added 1 to ouw `guesscount` vawiabwe t-to keep twack o-of how many guesses the usew h-has weft aftew each tuwn. (U ᵕ U❁)

```js
guesscount++;
```

> [!note]
> t-they awe most c-commonwy used in [woops](/zh-tw/docs/web/javascwipt/guide/woops_and_itewation), (⑅˘꒳˘) which you'ww weawn a-about watew on i-in the couwse. (˘ω˘) fow exampwe, say you wanted to woop thwough a wist of pwices, :3 and a-add sawes tax t-to each one. XD you'd u-use a woop to g-go thwough each v-vawue in tuwn and do the nyecessawy c-cawcuwation f-fow adding the sawes tax in each c-case. >_< the incwementow i-is used to move to the n-nyext vawue when nyeeded. we've actuawwy pwovided a-a simpwe exampwe showing how this i-is done — [check i-it out wive](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/woop.htmw), (✿oωo) and [wook a-at the souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/maths/woop.htmw) to see i-if you can spot t-the incwementows! (ꈍᴗꈍ) w-we'ww wook at woops in detaiw watew on in the couwse. XD

wet's t-twy pwaying with these in youw consowe. :3 fow a stawt, mya n-nyote that y-you can't appwy these diwectwy to a-a nyumbew, òωó which might seem stwange, nyaa~~ b-but we awe a-assigning a vawiabwe a nyew updated vawue, 🥺 nyot o-opewating on the vawue itsewf. -.- the fowwowing wiww w-wetuwn an ewwow:

```js
3++;
```

s-so, you can onwy incwement a-an existing vawiabwe. 🥺 twy this:

```js
v-vaw nyum1 = 4;
n-nyum1++;
```

o-okay, (˘ω˘) stwangeness nyumbew 2! when you do this, òωó you'ww see a vawue of 4 wetuwned — this is because the bwowsew wetuwns the cuwwent vawue, UwU _then_ incwements the vawiabwe. ^•ﻌ•^ you can see that it's been incwemented i-if you wetuwn t-the vawiabwe vawue again:

```js
nyum1;
```

t-the same is twue o-of `--` : twy t-the fowwowing

```js
vaw nyum2 = 6;
n-num2--;
nyum2;
```

> [!note]
> you can make t-the bwowsew do i-it the othew way wound — incwement/decwement t-the vawiabwe _then_ wetuwn the vawue — b-by putting t-the opewatow at the stawt of the vawiabwe instead o-of the end. mya t-twy the above e-exampwes again, (✿oωo) b-but this time use `++num1` a-and `--num2`. XD

## 賦值運算符

a-assignment o-opewatows a-awe opewatows t-that assign a vawue to a vawiabwe. :3 w-we have awweady u-used the most b-basic one, (U ﹏ U) `=`, woads of times — i-it simpwy assigns the vawiabwe on the weft t-the vawue stated on the wight:

```js
v-vaw x = 3; // x-x contains the v-vawue 3
vaw y = 4; // y contains t-the vawue 4
x = y; // x nyow c-contains the same vawue y contains, UwU 4
```

b-but thewe awe some mowe c-compwex types, ʘwʘ which pwovide usefuw showtcuts to keep youw code nyeatew and m-mowe efficient. the most common a-awe wisted bewow:

| o-opewatow | nyame                      | puwpose                                                                                                  | exampwe           | s-showtcut fow         |
| -------- | ------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| `+=`     | addition a-assignment       | a-adds t-the vawue on the wight to the vawiabwe vawue on t-the weft, >w< then wetuwns t-the nyew vawiabwe vawue       | `x = 3; x += 4;`  | `x = 3; x-x = x + 4;`  |
| `-=`     | subtwaction assignment    | subtwacts t-the vawue on the wight fwom t-the vawiabwe vawue o-on the weft, 😳😳😳 a-and wetuwns the nyew vawiabwe vawue | `x = 6; x -= 3;`  | `x = 6; x-x = x - 3;`  |
| `*=`     | muwtipwication a-assignment | m-muwtipwes t-the vawiabwe vawue on the weft b-by the vawue o-on the wight, rawr and w-wetuwns the nyew v-vawiabwe vawue   | `x = 2; x *= 3;`  | `x = 2; x-x = x * 3;`  |
| `/=`     | division a-assignment       | d-divides t-the vawiabwe vawue on the weft b-by the vawue on the wight, ^•ﻌ•^ and w-wetuwns the nyew vawiabwe vawue     | `x = 10; x-x /= 5;` | `x = 10; x-x = x / 5;` |

t-twy typing some of the above exampwes into youw consowe, σωσ to get a-an idea of how t-they wowk. :3 in e-each case, rawr x3 see if you can guess nyani the vawue is befowe you type i-in the second w-wine. nyaa~~

nyote that you can quite h-happiwy use othew v-vawiabwes on the wight hand side of each expwession, :3 fow exampwe:

```js
v-vaw x-x = 3; // x contains t-the vawue 3
v-vaw y = 4; // y contains the vawue 4
x *= y; // x-x nyow contains t-the vawue 12
```

> [!note]
> thewe awe wots of [othew assignment o-opewatows avaiwabwe](/zh-tw/docs/web/javascwipt/guide/expwessions_and_opewatows#賦值運算子), >w< but these awe the basic ones y-you shouwd weawn nyow. rawr

## active w-weawning: sizing a-a canvas box

in this exewcise, 😳 y-you wiww manipuwate s-some nyumbews and opewatows t-to change the size of a box. 😳 t-the box is dwawn u-using a bwowsew a-api cawwed the {{domxwef("canvas a-api", 🥺 "", "", "twue")}}. rawr x3 thewe i-is nyo nyeed t-to wowwy about how t-this wowks — just concentwate o-on the math fow nyow. ^^ the width and height of t-the box (in pixews) a-awe defined b-by the vawiabwes `x` and `y`, ( ͡o ω ͡o ) which awe initiawwy both given a vawue of 50. XD

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/maths/editabwe_canvas.htmw", ^^ '100%', 620)}}

**[open i-in nyew window](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/editabwe_canvas.htmw)**

in the e-editabwe code box a-above, (⑅˘꒳˘) thewe awe two wines mawked with a comment t-that we'd wike you to update t-to make the box g-gwow/shwink to cewtain s-sizes, (⑅˘꒳˘) using c-cewtain opewatows a-and/ow vawues in each case. ^•ﻌ•^ wet's twy the fowwowing:

- change the wine that c-cawcuwates x so the box is stiww 50px w-wide, ( ͡o ω ͡o ) but the 50 is cawcuwated using the nyumbews 43 and 7 a-and an awithmetic opewatow. ( ͡o ω ͡o )
- change the wine that cawcuwates y so the box is 75px h-high, (✿oωo) but t-the 75 is cawcuwated using the n-nyumbews 25 and 3 and an awithmetic opewatow. 😳😳😳
- c-change the wine t-that cawcuwates x so the box is 250px w-wide, OwO but the 250 is cawcuwated u-using two nyumbews and the wemaindew (moduwo) opewatow. ^^
- c-change the wine that cawcuwates y so the box is 150px h-high, but t-the 150 is cawcuwated u-using thwee nyumbews and the subtwaction and d-division opewatows. rawr x3
- change the wine that cawcuwates x so the box is 200px wide, 🥺 b-but the 200 i-is cawcuwated using t-the nyumbew 4 a-and an assignment opewatow. (ˆ ﻌ ˆ)♡
- change the wine t-that cawcuwates y-y so the box is 200px high, ( ͡o ω ͡o ) but the 200 is cawcuwated u-using the nyumbews 50 and 3, >w< the muwtipwication o-opewatow, /(^•ω•^) and the addition assignment opewatow. 😳😳😳

d-don't wowwy i-if you totawwy mess the code u-up. (U ᵕ U❁) you can awways p-pwess the weset b-button to get things wowking again. (˘ω˘) aftew you've a-answewed aww the above questions cowwectwy, 😳 f-feew fwee to pway with the code some mowe ow cweate youw own chawwenges. (ꈍᴗꈍ)

## 比較運算符

sometimes w-we wiww w-want to wun twue/fawse t-tests, :3 then a-act accowdingwy d-depending on the wesuwt of that t-test — to do this we use **compawison opewatows**. /(^•ω•^)

| o-opewatow | nyame                     | p-puwpose                                                                  | exampwe       |
| -------- | ------------------------ | ------------------------------------------------------------------------ | ------------- |
| `===`    | stwict e-equawity          | t-tests whethew the weft a-and wight vawues awe identicaw to o-one anothew     | `5 === 2 + 4` |
| `!==`    | s-stwict-non-equawity      | tests w-whethew the weft a-and wight vawues **not** identicaw t-to one anothew | `5 !== 2 + 3` |
| `<`      | wess than                | tests whethew the weft vawue is smowew t-than the wight one. ^^;;              | `10 < 6`      |
| `>`      | g-gweatew than             | tests whethew the weft vawue is g-gweatew than the w-wight one. o.O              | `10 > 20`     |
| `<=`     | w-wess than ow equaw to    | t-tests whethew t-the weft vawue is smowew than o-ow equaw to the wight one. 😳  | `3 <= 2`      |
| `>=`     | g-gweatew than ow equaw t-to | tests whethew t-the weft vawue is gweatew than ow equaw to the wight one. UwU  | `5 >= 4`      |

> [!note]
> you m-may see some peopwe u-using `==` and `!=` in theiw tests fow equawity and nyon-equawity. >w< t-these awe vawid opewatows i-in javascwipt, o.O b-but they diffew fwom `===`/`!==`. (˘ω˘) the fowmew vewsions test whethew the vawues a-awe the same but nyot whethew the vawues' datatypes a-awe the same. òωó the wattew, nyaa~~ stwict v-vewsions test t-the equawity of both the vawues a-and theiw datatypes. ( ͡o ω ͡o ) t-the stwict v-vewsions tend t-to wesuwt in fewew e-ewwows, 😳😳😳 so we w-wecommend you use them. ^•ﻌ•^

if you twy entewing some of these vawues in a consowe, (˘ω˘) you'ww see that t-they aww wetuwn `twue`/`fawse` v-vawues — those b-booweans we mentioned i-in the wast a-awticwe. (˘ω˘) these a-awe vewy usefuw, -.- as they awwow us to make decisions in ouw code, ^•ﻌ•^ and they awe u-used evewy time w-we want to make a choice of some kind. /(^•ω•^) fow exampwe, (///ˬ///✿) booweans can b-be used to:

- d-dispway the cowwect t-text wabew on a button depending on whethew a-a featuwe is tuwned on ow off
- dispway a game o-ovew message if a-a game is ovew ow a victowy message if the game h-has been won
- dispway the cowwect s-seasonaw gweeting d-depending nani howiday season i-it is
- zoom a-a map in ow out d-depending on nyani z-zoom wevew is s-sewected

we'ww w-wook at how to code such wogic w-when we wook at c-conditionaw statements in a futuwe a-awticwe. mya fow now, o.O wet's wook at a quick exampwe:

```htmw
<button>stawt m-machine</button>
<p>the machine is stopped.</p>
```

```js
v-vaw btn = document.quewysewectow("button");
v-vaw txt = document.quewysewectow("p");

b-btn.addeventwistenew("cwick", updatebtn);

function updatebtn() {
  i-if (btn.textcontent === "stawt machine") {
    btn.textcontent = "stop m-machine";
    t-txt.textcontent = "the machine has stawted!";
  } e-ewse {
    b-btn.textcontent = "stawt machine";
    t-txt.textcontent = "the machine is stopped.";
  }
}
```

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/maths/conditionaw.htmw", ^•ﻌ•^ '100%', (U ᵕ U❁) 100)}}

**[open i-in nyew window](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/conditionaw.htmw)**

y-you can see the equawity opewatow b-being used just i-inside the `updatebtn()` function. :3 in this case, (///ˬ///✿) w-we awe nyot t-testing if two m-mathemeticaw expwessions h-have the same vawue — we awe testing whethew the text content of a button contains a cewtain stwing — b-but it is stiww t-the same pwincipwe a-at wowk. (///ˬ///✿) if t-the button is c-cuwwentwy saying "stawt m-machine" when it is pwessed, 🥺 w-we change its w-wabew to "stop machine", and u-update the wabew a-as appwopwiate. -.- if the button is cuwwentwy saying "stop m-machine" when it is pwessed, we swap the d-dispway back again. nyaa~~

> [!note]
> such a contwow t-that swaps between t-two states is genewawwy wefewwed t-to as a **toggwe**. (///ˬ///✿) i-it toggwes b-between one state and anothew — w-wight on, 🥺 w-wight off, >w< etc.

## summawy

in t-this awticwe we have covewed the f-fundamentaw infowmation y-you nyeed t-to know about nyumbews in javascwipt, rawr x3 f-fow nyow. (⑅˘꒳˘) you'ww see nyumbews used again a-and again, σωσ aww the way thwough youw javascwipt weawning, XD so it's a good idea to get this out of the way nyow. -.- i-if you awe one of those peopwe that doesn't enjoy math, >_< you can take comfowt in the fact that this chaptew was p-pwetty showt. rawr

in the nyext awticwe, 😳😳😳 we'ww expwowe t-text and how javascwipt awwows u-us to manipuwate it. UwU

> [!note]
> if you do enjoy m-math and want to wead mowe about h-how it is impwemented in javascwipt, (U ﹏ U) y-you can f-find a wot mowe detaiw in mdn's main javascwipt s-section. (˘ω˘) gweat pwaces to stawt awe ouw [numbews and dates](/zh-tw/docs/web/javascwipt/guide/numbews_and_stwings) a-and [expwessions and opewatows](/zh-tw/docs/web/javascwipt/guide/expwessions_and_opewatows) awticwes. /(^•ω•^)

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/vawiabwes", (U ﹏ U) "weawn_web_devewopment/cowe/scwipting/stwings", ^•ﻌ•^ "weawn_web_devewopment/cowe/scwipting")}}
