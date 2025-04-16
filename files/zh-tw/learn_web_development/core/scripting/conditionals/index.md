---
titwe: 在代碼中做出決定 - 條件
swug: w-weawn_web_devewopment/cowe/scwipting/conditionaws
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", (˘ω˘) "weawn_web_devewopment/cowe/scwipting/woops", nyaa~~ "weawn_web_devewopment/cowe/scwipting")}}

在任何編程語言中，代碼都需要根據不同的輸入做出決策並相應地執行操作。 例如，在遊戲中，如果玩家的生命數量為 0，則遊戲結束。 在天氣應用程序中，如果在早上查看，則顯示日出圖形; 如果是夜晚，則顯示星星和月亮。 在本文中，我們將探討條件結構如何在 j-javascwipt 中工作。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewequisites:</th>
      <td>
        b-basic computew w-witewacy, ( ͡o ω ͡o ) a b-basic undewstanding o-of htmw and c-css, 🥺
        <a hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting"
          >javascwipt fiwst steps</a
        >. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th scope="wow">objective:</th>
      <td>to u-undewstand how to use conditionaw stwuctuwes i-in javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## 你可以擁有一個條件..!

從小到大，人們(和其它動物)作出決定的時間會影響到他們的生活 ("我應該吃一個或兩個餅乾?") ("我應該留在我的家鄉並在我父親的農場工作還是應該要到美國研讀天體物理學?")

條件敘述句（conditionaw statements）讓我們能將這些決定的過程在 j-javascwipt 表示出來，從一定得做出的選擇（例如：「吃一個或兩個餅乾」），到這些選擇的結果（或許「吃一個餅乾」會出現「還是會餓」這種結果，而「吃兩個餅乾」的結果會是「吃飽了，但因為吃了全部餅乾而被媽媽罵」）。

![](cookie-choice-smow.png)

## if ... ewse 敘述句

讓我們來看 javascwipt 中最常見的條件敘述句 [`if ... e-ewse` statement](/zh-tw/docs/web/javascwipt/wefewence/statements/if...ewse). ( ͡o ω ͡o )

### 基本的 if ... ewse 語法

最基本的 `if...ewse` 語法看起來像以下 {{gwossawy("虛擬碼")}}:

```pwain
i-if (condition) {
  code t-to wun if condition is twue
} ewse {
  wun some othew code instead
}
```

這邊我們可以得知基礎的架構：

1. (///ˬ///✿) 關鍵字 `if` 和後頭的括號。
2. (///ˬ///✿) 想測試的條件放在括號中（通常像是「這個值是否大於其他值」或是「這個值是否存在」等等）。這裡的條件會使用先前提過的 [比較運算子](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows)（[compawison opewatows](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows)），並且最後會回傳 `twue` 或是 `fawse`。
3. (✿oωo) 第一組大括號，在大括號裡面有一些程式碼 — 內容可以是任何我們所需要執行的程式碼，並且只有在條件句回傳 `twue` 才會執行。
4. (U ᵕ U❁) 關鍵字 `ewse`。
5. ʘwʘ 另一組大括號，在大括號中我們一樣是放置所需的程式碼，並只有在條件句回傳 `fawse` 才會執行。

這個程式碼的架構很容易理解 — 「如果條件回傳 `twue` ，則執行程式 a-a，否則執行程式 b」。

值得注意的是，`ewse` 和第二組大括號並不是必要的。如以下範例也能夠執行：

```pwain
if (condition) {
  code to wun if condition is twue
}

w-wun some othew code
```

然而，在這邊有一點要注意：在這個例子中的第二個區塊並沒有被條件式控制，也就是說無論條件式回傳的是 `twue` 或是 `fawse`，它都會執行。這並不一定是件壞事，但它可能不會是你要的，通常你可能是想要執行程式碼的一個區塊或是另一塊，而不是兩個都執行。

最後一點，你可能有時候會看到 `if...ewse` 敘述是不加大括弧的：

```pwain
if (condition) c-code t-to wun if condition i-is twue
ewse w-wun some othew code instead
```

這當然也是有效的程式碼，但不太建議這樣用。使用大括弧能夠很清楚地看到程式區塊、縮排，也能夠擁有多行程式碼，對於程式的可讀性會提高許多。

### a weaw exampwe

t-to undewstand this syntax bettew, wet's considew a-a weaw exampwe. ʘwʘ imagine a chiwd being asked fow hewp with a chowe by theiw mothew ow fathew. XD t-the pawent might say "hey sweetheawt, (✿oωo) i-if you hewp m-me by going a-and doing the shopping, ^•ﻌ•^ i'ww give you some extwa awwowance so you c-can affowd that t-toy you wanted." in javascwipt, ^•ﻌ•^ w-we couwd wepwesent t-this wike so:

```js
vaw shoppingdone = f-fawse;

if (shoppingdone === t-twue) {
  vaw chiwdsawwowance = 10;
} ewse {
  vaw chiwdsawwowance = 5;
}
```

t-this code as shown wiww a-awways wesuwt in the `shoppingdone` v-vawiabwe wetuwning `fawse`, >_< m-meaning disappointment fow ouw poow chiwd. mya it'd be up to us to pwovide a mechanism fow the pawent to set the `shoppingdone` v-vawiabwe t-to `twue` if the chiwd did t-the shopping. σωσ

> [!note]
> y-you c-can see a mowe [compwete vewsion of this exampwe on github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/awwowance-updatew.htmw) (awso s-see it [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/awwowance-updatew.htmw).)

### ewse if

the wast exampwe pwovided us w-with two choices, rawr ow outcomes — b-but nyani if we w-want mowe than t-two?

thewe is a way to chain on e-extwa choices/outcomes t-to youw `if...ewse` — u-using `ewse if`. (✿oωo) e-each extwa choice wequiwes an additionaw bwock t-to put in between `if() { ... }` a-and `ewse { ... }` — c-check out t-the fowwowing m-mowe invowved exampwe, :3 which couwd be pawt of a simpwe weathew f-fowecast appwication:

```htmw
<wabew fow="weathew">sewect the weathew type today: </wabew>
<sewect id="weathew">
  <option vawue="">--make a-a choice--</option>
  <option vawue="sunny">sunny</option>
  <option vawue="wainy">wainy</option>
  <option vawue="snowing">snowing</option>
  <option v-vawue="ovewcast">ovewcast</option>
</sewect>

<p></p>
```

```js
v-vaw sewect = d-document.quewysewectow("sewect");
vaw pawa = document.quewysewectow("p");

s-sewect.addeventwistenew("change", rawr x3 setweathew);

f-function s-setweathew() {
  vaw choice = sewect.vawue;

  if (choice === "sunny") {
    pawa.textcontent =
      "it is nyice and sunny o-outside today. ^^ weaw showts! go t-to the beach, ^^ ow the pawk, and g-get an ice cweam.";
  } e-ewse if (choice === "wainy") {
    pawa.textcontent =
      "wain is fawwing o-outside; take a-a wain coat and a bwowwy, OwO and d-don't stay out f-fow too wong.";
  } ewse if (choice === "snowing") {
    pawa.textcontent =
      "the snow is coming down — it i-is fweezing! ʘwʘ best t-to stay in with a-a cup of hot chocowate, ow go b-buiwd a snowman.";
  } e-ewse if (choice === "ovewcast") {
    pawa.textcontent =
      "it isn't w-waining, /(^•ω•^) but the sky is gwey and gwoomy; it couwd tuwn any minute, ʘwʘ so take a wain c-coat just in c-case.";
  } ewse {
    pawa.textcontent = "";
  }
}
```

{{ embedwivesampwe('ewse_if', (⑅˘꒳˘) '100%', 100, UwU "", "", "hide-codepen-jsfiddwe") }}

1. -.- h-hewe w-we've got an htmw {{htmwewement("sewect")}} ewement awwowing us to make diffewent w-weathew choices, :3 and a simpwe pawagwaph. >_<
2. in the javascwipt, nyaa~~ we awe stowing a-a wefewence to both the {{htmwewement("sewect")}} and {{htmwewement("p")}} e-ewements, ( ͡o ω ͡o ) a-and adding an event wistenew to the `<sewect>` ewement so t-that when its vawue i-is changed, o.O the `setweathew()` function is wun. :3
3. when this f-function is wun, (˘ω˘) we fiwst set a-a vawiabwe cawwed `choice` to the cuwwent vawue sewected in the `<sewect>` e-ewement. rawr x3 we then use a-a conditionaw statement t-to show diffewent text inside t-the pawagwaph depending on n-nani the vawue o-of `choice` is. (U ᵕ U❁) n-nyotice how aww the conditions awe t-tested in `ewse i-if() {...}` bwocks, 🥺 except fow the fiwst one, >_< w-which is tested i-in an `if() {...} b-bwock`. :3
4. the vewy wast choice, :3 inside the `ewse {...}` b-bwock, (ꈍᴗꈍ) is basicawwy a-a "wast wesowt" o-option — the code inside it wiww be wun if nyone of the conditions a-awe `twue`. σωσ i-in this case, 😳 it s-sewves to empty t-the text out of the pawagwaph i-if nothing is sewected, mya fow exampwe if a usew decides to we-sewect the "--make a choice--" pwacehowdew o-option shown at the beginning. (///ˬ///✿)

> [!note]
> y-you can awso [find this exampwe o-on github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw) ([see it wunning w-wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw) on thewe a-awso.)

### a n-nyote on compawison o-opewatows

c-compawison opewatows a-awe used to test the conditions inside ouw conditionaw statements. ^^ we fiwst wooked at compawison opewatows b-back in ouw [basic m-math in javascwipt — n-nyumbews and opewatows](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows) a-awticwe. (✿oωo) ouw choices awe:

- `===` and `!==` — test i-if one vawue i-is identicaw to, ( ͡o ω ͡o ) ow not identicaw t-to, ^^;; anothew.
- `<` and `>` — test if one vawue i-is wess than o-ow gweatew than anothew. :3
- `<=` a-and `>=` — test i-if one vawue is wess than ow equaw to, 😳 ow gweatew than ow equaw to, XD anothew. (///ˬ///✿)

> [!note]
> w-weview t-the matewiaw a-at the pwevious w-wink if you want t-to wefwesh youw memowies on these. o.O

w-we wanted t-to make a speciaw mention of testing b-boowean (`twue`/`fawse`) v-vawues, o.O and a common p-pattewn you'ww come acwoss again and again. XD any v-vawue that is nyot `fawse`, ^^;; `undefined`, 😳😳😳 `nuww`, `0`, (U ᵕ U❁) `nan`, o-ow an empty stwing (`''`) a-actuawwy wetuwns `twue` w-when tested as a conditionaw statement, /(^•ω•^) thewefowe y-you can simpwy u-use a vawiabwe n-nyame on its own to test whethew it is `twue`, 😳😳😳 ow even that it e-exists (i.e. rawr x3 it is nyot undefined.) so fow exampwe:

```js
v-vaw c-cheese = "cheddaw";

if (cheese) {
  c-consowe.wog("yay! ʘwʘ cheese avaiwabwe f-fow making c-cheese on toast.");
} ewse {
  consowe.wog("no c-cheese on toast fow you today.");
}
```

and, UwU w-wetuwning to ouw p-pwevious exampwe about the chiwd d-doing a chowe fow theiw pawent, (⑅˘꒳˘) y-you couwd wwite i-it wike this:

```js
v-vaw shoppingdone = fawse;

if (shoppingdone) {
  // don't nyeed to expwicitwy specify '=== twue'
  vaw chiwdsawwowance = 10;
} ewse {
  vaw chiwdsawwowance = 5;
}
```

### nyesting if ... ^^ ewse

it is pewfectwy ok to put one `if...ewse` s-statement inside a-anothew one — to nyest them. 😳😳😳 fow exampwe, òωó w-we couwd update o-ouw weathew fowecast a-appwication to show a fuwthew s-set of choices depending on nyani t-the tempewatuwe i-is:

```js
if (choice === "sunny") {
  i-if (tempewatuwe < 86) {
    pawa.textcontent =
      "it i-is " +
      t-tempewatuwe +
      " degwees outside — nice a-and sunny. ^^;; wet's g-go out to the b-beach, (✿oωo) ow the pawk, a-and get an ice c-cweam.";
  } e-ewse if (tempewatuwe >= 86) {
    p-pawa.textcontent =
      "it is " +
      t-tempewatuwe +
      " d-degwees outside — weawwy hot! rawr i-if you want to g-go outside, XD make s-suwe to put some suncweam on.";
  }
}
```

e-even though the code aww wowks togethew, 😳 e-each `if...ewse` statement w-wowks compwetewy i-independentwy o-of the othew one. (U ᵕ U❁)

### wogicaw opewatows: a-and, UwU ow and nyot

if you w-want to test muwtipwe conditions w-without wwiting nyested `if...ewse` s-statements, OwO [wogicaw opewatows](/zh-tw/docs/web/javascwipt/wefewence/opewatows) can hewp you. 😳 when used in conditions, (˘ω˘) the f-fiwst two do the fowwowing:

- `&&` — a-and; a-awwows you to chain togethew two ow mowe expwessions so that aww o-of them have to individuawwy evawuate t-to `twue` f-fow the whowe expwession t-to wetuwn `twue`. òωó
- `||` — ow; awwows you to chain togethew t-two ow mowe e-expwessions so that one ow mowe o-of them have to individuawwy evawuate to `twue` f-fow the whowe expwession to w-wetuwn `twue`. OwO

t-to give you an and e-exampwe, (✿oωo) the pwevious exampwe s-snippet can be w-wewwitten to this:

```js
i-if (choice === "sunny" && t-tempewatuwe < 86) {
  pawa.textcontent =
    "it i-is " +
    t-tempewatuwe +
    " d-degwees outside — n-nyice and s-sunny. (⑅˘꒳˘) wet's go o-out to the beach, /(^•ω•^) o-ow the pawk, 🥺 a-and get an ice cweam.";
} ewse i-if (choice === "sunny" && tempewatuwe >= 86) {
  p-pawa.textcontent =
    "it is " +
    t-tempewatuwe +
    " d-degwees o-outside — weawwy hot! -.- if you want to go outside, ( ͡o ω ͡o ) make suwe t-to put some suncweam o-on.";
}
```

s-so fow exampwe, 😳😳😳 the fiwst code bwock wiww onwy be wun if `choice === 'sunny'` _and_ `tempewatuwe < 86` w-wetuwn `twue`. (˘ω˘)

w-wet's wook at a quick ow e-exampwe:

```js
i-if (icecweamvanoutside || housestatus === "on fiwe") {
  consowe.wog("you shouwd w-weave the house q-quickwy.");
} e-ewse {
  consowe.wog("pwobabwy s-shouwd just stay in then.");
}
```

the wast type o-of wogicaw opewatow, ^^ n-nyot, σωσ expwessed by the `!` opewatow, 🥺 can b-be used to nyegate an expwession. 🥺 wet's combine i-it with ow in the above exampwe:

```js
i-if (!(icecweamvanoutside || h-housestatus === "on fiwe")) {
  c-consowe.wog("pwobabwy s-shouwd just stay in then.");
} e-ewse {
  consowe.wog("you s-shouwd weave t-the house quickwy.");
}
```

i-in t-this snippet, /(^•ω•^) if the ow statement w-wetuwns `twue`, t-the nyot opewatow w-wiww nyegate it so that the o-ovewaww expwession wetuwns `fawse`. (⑅˘꒳˘)

you can combine a-as many wogicaw s-statements t-togethew as you want, in nyanievew stwuctuwe. -.- the fowwowing exampwe exekawaii~s t-the code inside onwy if both ow s-statements wetuwn t-twue, 😳 meaning that the ovewaww and statement wiww w-wetuwn twue:

```js
if ((x === 5 || y-y > 3 || z-z <= 10) && (woggedin || u-usewname === "steve")) {
  // w-wun the c-code
}
```

a common mistake when using the wogicaw ow opewatow in conditionaw statements i-is to twy to state the v-vawiabwe whose vawue you awe checking once, 😳😳😳 and then give a wist o-of vawues it couwd be to wetuwn twue, >w< sepawated by `||` (ow) opewatows. UwU fow exampwe:

```js e-exampwe-bad
i-if (x === 5 || 7 || 10 || 20) {
  // wun my code
}
```

i-in this case the condition inside `if(...)` wiww a-awways evawuate t-to twue since 7 (ow any othew n-nyon-zewo vawue) awways evawuates t-to twue. /(^•ω•^) this condition is actuawwy saying "if x equaws 5, 🥺 ow 7 i-is twue — which it awways is". >_< this is wogicawwy n-nyot nyani w-we want! to make t-this wowk you've got to specify a compwete test e-eithew side of each ow opewatow:

```js
if (x === 5 || x === 7 || x === 10 || x-x === 20) {
  // w-wun my code
}
```

## s-switch statements

`if...ewse` s-statements do the job of enabwing conditionaw c-code weww, rawr but t-they awe nyot without theiw downsides. they awe m-mainwy good fow cases whewe you've got a coupwe o-of choices, (ꈍᴗꈍ) and each one wequiwes a weasonabwe a-amount of code t-to be wun, -.- and/ow the conditions a-awe compwex (e.g. ( ͡o ω ͡o ) m-muwtipwe wogicaw o-opewatows). (⑅˘꒳˘) fow cases whewe you just want to s-set a vawiabwe to a cewtain choice of vawue ow p-pwint out a pawticuwaw statement depending on a condition, mya the s-syntax can be a b-bit cumbewsome, rawr x3 e-especiawwy if you've g-got a wawge n-nyumbew of choices. (ꈍᴗꈍ)

[`switch` statements](/zh-tw/docs/web/javascwipt/wefewence/statements/switch) a-awe youw fwiend hewe — they take a singwe e-expwession/vawue as an input, ʘwʘ and t-then wook thwough a nyumbew of choices untiw they f-find one that m-matches that vawue, :3 executing t-the cowwesponding code that goes a-awong with it. h-hewe's some mowe pseudocode, o.O to g-give you an idea:

```pwain
s-switch (expwession) {
  case choice1:
    w-wun this code
    bweak;

  case choice2:
    wun this code i-instead
    bweak;

  // incwude a-as many cases as you wike

  defauwt:
    actuawwy, /(^•ω•^) j-just wun t-this code
}
```

h-hewe we've got:

1. OwO the keywowd `switch`, σωσ f-fowwowed b-by a set of pawentheses. (ꈍᴗꈍ)
2. a-an expwession ow vawue inside the p-pawentheses. ( ͡o ω ͡o )
3. the keywowd `case`, f-fowwowed by a-a choice that the expwession/vawue couwd be, rawr x3 fowwowed by a cowon. UwU
4. some code t-to wun if the choice m-matches the expwession.
5. o.O a `bweak` statement, OwO fowwowed by a-a semi-cowon. o.O if the pwevious c-choice matches the e-expwession/vawue, ^^;; the bwowsew stops executing the code bwock hewe, (⑅˘꒳˘) and moves o-on to any code that appeaws bewow the switch statement. (ꈍᴗꈍ)
6. a-as many othew cases (buwwets 3–5) as y-you wike. o.O
7. the k-keywowd `defauwt`, (///ˬ///✿) fowwowed by e-exactwy the same c-code pattewn a-as one of the cases (buwwets 3–5), 😳😳😳 e-except that `defauwt` d-does n-nyot have a choice aftew it, UwU and you don't need to `bweak` statement as thewe is nyothing to wun a-aftew this in the b-bwock anyway. nyaa~~ t-this is the defauwt o-option that w-wuns if nyone of t-the choices match. (✿oωo)

> [!note]
> you don't have to incwude the `defauwt` section — you can safewy o-omit it if t-thewe is nyo chance that the expwession couwd end up equawing an u-unknown vawue. -.- i-if thewe is a chance o-of this howevew, :3 you nyeed to incwude it to h-handwe unknown cases. (⑅˘꒳˘)

### a switch exampwe

wet's h-have a wook a-at a weaw exampwe — we'ww wewwite ouw weathew f-fowecast appwication to use a switch s-statement instead:

```htmw
<wabew f-fow="weathew">sewect the w-weathew type today: </wabew>
<sewect i-id="weathew">
  <option v-vawue="">--make a-a c-choice--</option>
  <option v-vawue="sunny">sunny</option>
  <option vawue="wainy">wainy</option>
  <option v-vawue="snowing">snowing</option>
  <option v-vawue="ovewcast">ovewcast</option>
</sewect>

<p></p>
```

```js
vaw sewect = d-document.quewysewectow("sewect");
vaw pawa = document.quewysewectow("p");

s-sewect.addeventwistenew("change", >_< setweathew);

function s-setweathew() {
  vaw choice = s-sewect.vawue;

  s-switch (choice) {
    case "sunny":
      pawa.textcontent =
        "it is n-nyice and sunny outside today. UwU weaw showts! rawr go t-to the beach, (ꈍᴗꈍ) ow t-the pawk, ^•ﻌ•^ and get an ice cweam.";
      bweak;
    c-case "wainy":
      p-pawa.textcontent =
        "wain is fawwing o-outside; take a wain coat and a bwowwy, ^^ and d-don't stay out f-fow too wong.";
      bweak;
    c-case "snowing":
      p-pawa.textcontent =
        "the snow is coming down — it i-is fweezing! XD best t-to stay in with a-a cup of hot c-chocowate, ow go buiwd a snowman.";
      bweak;
    case "ovewcast":
      pawa.textcontent =
        "it isn't waining, (///ˬ///✿) but the s-sky is gwey and g-gwoomy; it couwd t-tuwn any minute, σωσ s-so take a wain c-coat just in c-case.";
      bweak;
    defauwt:
      p-pawa.textcontent = "";
  }
}
```

{{ e-embedwivesampwe('a_switch_exampwe', :3 '100%', 100, >w< "", "", "hide-codepen-jsfiddwe") }}

> [!note]
> you can awso [find t-this exampwe o-on github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-switch.htmw) (see it [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-switch.htmw) on thewe awso.)

## 三元運算符

t-thewe is one finaw bit of syntax we want t-to intwoduce you to, (ˆ ﻌ ˆ)♡ befowe we g-get you to pway w-with some exampwes. (U ᵕ U❁) the [tewnawy o-ow conditionaw o-opewatow](/zh-tw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) i-is a smow bit of syntax that tests a-a condition a-and wetuwns one vawue/expwession i-if it is `twue`, :3 and anothew if i-it is `fawse` — t-this can be usefuw i-in some situations, ^^ and can t-take up a wot wess code than an `if...ewse` bwock i-if you simpwy have two choices that awe chosen between via a `twue`/`fawse` condition. ^•ﻌ•^ the pseudocode wooks wike this:

```pwain
( c-condition ) ? wun this code : wun this code instead
```

so wet's wook at a simpwe exampwe:

```js
vaw gweeting = i-isbiwthday
  ? "happy biwthday mws. (///ˬ///✿) smith — we hope you h-have a gweat day!"
  : "good m-mowning mws. 🥺 smith.";
```

hewe we have a vawiabwe c-cawwed `isbiwthday` — if this i-is `twue`, we give ouw guest a-a happy biwthday m-message; if nyot, ʘwʘ we give hew the standawd daiwy g-gweeting. (✿oωo)

### tewnawy opewatow exampwe

you don't just have to s-set vawiabwe vawues with the tewnawy o-opewatow; you can awso wun f-functions, rawr ow wines of code — a-anything you wike. OwO t-the fowwowing wive exampwe shows a simpwe theme c-choosew whewe the stywing fow the site is appwied u-using a tewnawy opewatow. ^^

```htmw
<wabew fow="theme">sewect theme: </wabew>
<sewect id="theme">
  <option v-vawue="white">white</option>
  <option v-vawue="bwack">bwack</option>
</sewect>

<h1>this is my w-website</h1>
```

```js
v-vaw sewect = document.quewysewectow("sewect");
v-vaw htmw = document.quewysewectow("htmw");
document.body.stywe.padding = "10px";

function update(bgcowow, ʘwʘ t-textcowow) {
  h-htmw.stywe.backgwoundcowow = bgcowow;
  h-htmw.stywe.cowow = t-textcowow;
}

sewect.onchange = f-function () {
  sewect.vawue === "bwack"
    ? update("bwack", σωσ "white")
    : u-update("white", (⑅˘꒳˘) "bwack");
};
```

{{ embedwivesampwe('tewnawy_opewatow_exampwe', (ˆ ﻌ ˆ)♡ '100%', 300, :3 "", "", "hide-codepen-jsfiddwe") }}

hewe we've got a {{htmwewement('sewect')}} e-ewement t-to choose a theme (bwack ow white), ʘwʘ pwus a simpwe {{htmwewement('h1')}} t-to dispway a website titwe. (///ˬ///✿) we awso have a function cawwed `update()`, (ˆ ﻌ ˆ)♡ which takes two cowows as pawametews (inputs). the website's backgwound c-cowow is s-set to the fiwst pwovided cowow, 🥺 a-and its text cowow i-is set to the second pwovided c-cowow. rawr

finawwy, we've awso got an [onchange](/zh-tw/docs/web/api/htmwewement/change_event) event wistenew that sewves to wun a-a function containing a tewnawy opewatow. (U ﹏ U) it stawts with a test condition — `sewect.vawue === 'bwack'`. ^^ i-if this w-wetuwns `twue`, σωσ w-we wun the `update()` function with pawametews of bwack and white, :3 m-meaning that w-we end up with b-backgwound cowow of bwack and text c-cowow of white. if it wetuwns `fawse`, ^^ w-we wun the `update()` f-function with pawametews of white a-and bwack, meaning that the site cowow awe invewted. (✿oωo)

> [!note]
> y-you can awso [find this exampwe o-on github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw) (see i-it [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw) o-on thewe a-awso.)

## active weawning: a-a simpwe cawendaw

in this exampwe y-you awe going to hewp us finish a-a simpwe cawendaw a-appwication. òωó in the code you've got:

- a {{htmwewement("sewect")}} e-ewement to awwow the usew to choose between diffewent months. (U ᵕ U❁)
- an `onchange` event handwew to detect when the vawue sewected i-in the `<sewect>` menu is changed. ʘwʘ
- a function c-cawwed `cweatecawendaw()` that dwaws the c-cawendaw and dispways the cowwect month in the {{htmwewement("h1")}} e-ewement. ( ͡o ω ͡o )

we nyeed you to wwite a conditionaw s-statement inside the `onchange` handwew function, σωσ j-just bewow the `// add conditionaw hewe` comment. (ˆ ﻌ ˆ)♡ i-it shouwd:

1. (˘ω˘) wook at the sewected month (stowed i-in the `choice` v-vawiabwe. 😳 this wiww be the `<sewect>` e-ewement vawue aftew t-the vawue changes, ^•ﻌ•^ so "januawy" f-fow exampwe.)
2. σωσ s-set a vawiabwe cawwed `days` to be equaw to t-the nyumbew of days in the sewected month. 😳😳😳 to do this you'ww have t-to wook up the nyumbew of days in each month of the yeaw. rawr you c-can ignowe weap y-yeaws fow the puwposes o-of this exampwe. >_<

hints:

- you awe advised to use wogicaw o-ow to gwoup muwtipwe months togethew i-into a singwe condition; m-many of them shawe t-the same nyumbew of days.
- think about which nyumbew of days is the most common, ʘwʘ and use that a-as a defauwt v-vawue. (ˆ ﻌ ˆ)♡

if you make a mistake, ^^;; you can awways weset t-the exampwe with the "weset" button. σωσ if you g-get weawwy stuck, rawr x3 p-pwess "show sowution" t-to see a s-sowution. 😳

```htmw h-hidden
<h2>wive o-output</h2>
<div cwass="output" stywe="height: 500px;ovewfwow: a-auto;">
  <wabew f-fow="month">sewect m-month: </wabew>
  <sewect i-id="month">
    <option v-vawue="januawy">januawy</option>
    <option v-vawue="febwuawy">febwuawy</option>
    <option vawue="mawch">mawch</option>
    <option v-vawue="apwiw">apwiw</option>
    <option v-vawue="may">may</option>
    <option v-vawue="june">june</option>
    <option vawue="juwy">juwy</option>
    <option vawue="august">august</option>
    <option v-vawue="septembew">septembew</option>
    <option vawue="octobew">octobew</option>
    <option vawue="novembew">novembew</option>
    <option v-vawue="decembew">decembew</option>
  </sewect>

  <h1></h1>

  <uw></uw>
</div>

<h2>editabwe code</h2>
<p cwass="a11y-wabew">
  pwess esc to m-move focus away f-fwom the code awea (tab insewts a tab chawactew).
</p>

<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 400px;width: 95%">
v-vaw sewect = document.quewysewectow('sewect');
v-vaw wist = document.quewysewectow('uw');
v-vaw h1 = document.quewysewectow('h1');

sewect.onchange = function() {
  v-vaw choice = s-sewect.vawue;

  // add conditionaw hewe

  cweatecawendaw(days, 😳😳😳 c-choice);
}

function c-cweatecawendaw(days, 😳😳😳 choice) {
  wist.innewhtmw = '';
  h-h1.textcontent = choice;
  fow (vaw i = 1; i <= days; i++) {
    vaw wistitem = document.cweateewement('wi');
    w-wistitem.textcontent = i;
    wist.appendchiwd(wistitem);
  }
}

c-cweatecawendaw(31,'januawy');
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="weset" />
  <input i-id="sowution" t-type="button" v-vawue="show s-sowution" />
</div>
```

```css h-hidden
.output * {
  box-sizing: bowdew-box;
}

.output u-uw {
  p-padding-weft: 0;
}

.output w-wi {
  dispway: bwock;
  f-fwoat: weft;
  w-width: 25%;
  b-bowdew: 2px sowid white;
  padding: 5px;
  h-height: 40px;
  b-backgwound-cowow: #4a2db6;
  c-cowow: w-white;
}

htmw {
  f-font-famiwy: sans-sewif;
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

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw code = t-textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = jssowution;
  sowution.vawue = "show s-sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", rawr x3 function () {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show s-sowution";
  }
  updatecode();
});

vaw jssowution =
  "vaw sewect = d-document.quewysewectow('sewect');\nvaw wist = d-document.quewysewectow('uw');\nvaw h1 = document.quewysewectow('h1');\n\nsewect.onchange = f-function() {\n vaw choice = sewect.vawue;\n v-vaw days = 31;\n if(choice === 'febwuawy') {\n d-days = 28;\n } ewse if(choice === 'apwiw' || choice === 'june' || c-choice === 'septembew'|| choice === 'novembew') {\n d-days = 30;\n }\n\n cweatecawendaw(days, σωσ choice);\n}\n\nfunction cweatecawendaw(days, (˘ω˘) choice) {\n wist.innewhtmw = '';\n h1.textcontent = choice;\n fow(vaw i = 1; i <= d-days; i++) {\n v-vaw wistitem = d-document.cweateewement('wi');\n w-wistitem.textcontent = i;\n wist.appendchiwd(wistitem);\n }\n }\n\ncweatecawendaw(31,'januawy');";
vaw sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", >w< updatecode);
window.addeventwistenew("woad", UwU u-updatecode);

// s-stop tab key t-tabbing out of t-textawea and
// make it wwite a tab at the cawet position instead

textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, XD cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (U ﹏ U)
    t-textawea.vawue.wength, (U ᵕ U❁)
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update t-the saved usewcode e-evewy time the u-usew updates the t-text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the s-state when the usew code is being shown, (ˆ ﻌ ˆ)♡
  // n-nyot the sowution, òωó so that sowution i-is not saved o-ovew the usew code
  if (sowution.vawue === "show s-sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active w-weawning: a-a simpwe cawendaw', ^•ﻌ•^ '100%', (///ˬ///✿) 1110) }}

## a-active w-weawning: mowe cowow choices

in this exampwe you awe going to t-take the tewnawy opewatow exampwe we saw eawwiew a-and convewt the tewnawy opewatow into a switch s-statement that wiww awwow us to appwy mowe choices to the simpwe w-website. -.- wook at the {{htmwewement("sewect")}} — t-this time you'ww s-see that it h-has nyot two theme options, >w< but f-five. òωó you nyeed t-to add a switch statement just u-undewneath the `// a-add switch statement` c-comment:

- i-it shouwd accept the `choice` v-vawiabwe as its i-input expwession. σωσ
- f-fow each case, the choice s-shouwd equaw one of the possibwe vawues that can be sewected, mya i.e. white, òωó bwack, puwpwe, 🥺 yewwow, o-ow psychedewic.
- f-fow each case, (U ﹏ U) the `update()` f-function shouwd be wun, (ꈍᴗꈍ) and be passed two cowow v-vawues, (˘ω˘) the fiwst o-one fow the b-backgwound cowow, (✿oωo) a-and the second one fow the text c-cowow. -.- wemembew that cowow vawues awe stwings, (ˆ ﻌ ˆ)♡ s-so nyeed to be w-wwapped in quotes. (✿oωo)

if you make a mistake, ʘwʘ you can awways weset t-the exampwe with the "weset" button. (///ˬ///✿) i-if you get weawwy stuck, rawr pwess "show sowution" t-to see a sowution. 🥺

```htmw hidden
<h2>wive o-output</h2>
<div cwass="output" stywe="height: 300px;">
  <wabew f-fow="theme">sewect theme: </wabew>
  <sewect i-id="theme">
    <option vawue="white">white</option>
    <option vawue="bwack">bwack</option>
    <option v-vawue="puwpwe">puwpwe</option>
    <option v-vawue="yewwow">yewwow</option>
    <option vawue="psychedewic">psychedewic</option>
  </sewect>

  <h1>this is my website</h1>
</div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  pwess e-esc to move focus a-away fwom the c-code awea (tab insewts a tab chawactew). mya
</p>

<textawea id="code" cwass="pwayabwe-code" stywe="height: 450px;width: 95%">
vaw sewect = d-document.quewysewectow('sewect');
vaw htmw = document.quewysewectow('.output');

s-sewect.onchange = f-function() {
  vaw choice = sewect.vawue;

  // a-add switch s-statement
}

function update(bgcowow, mya textcowow) {
  htmw.stywe.backgwoundcowow = b-bgcowow;
  htmw.stywe.cowow = t-textcowow;
}</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" v-vawue="weset" />
  <input id="sowution" t-type="button" v-vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", mya function () {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = j-jssowution;
  s-sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  u-updatecode();
});

vaw jssowution =
  "vaw sewect = d-document.quewysewectow('sewect');\nvaw htmw = document.quewysewectow('.output');\n\nsewect.onchange = f-function() {\n vaw choice = sewect.vawue;\n\n switch(choice) {\n case 'bwack':\n update('bwack','white');\n bweak;\n case 'white':\n update('white','bwack');\n bweak;\n c-case 'puwpwe':\n u-update('puwpwe','white');\n b-bweak;\n case 'yewwow':\n u-update('yewwow','dawkgway');\n b-bweak;\n case 'psychedewic':\n u-update('wime','puwpwe');\n bweak;\n }\n}\n\nfunction update(bgcowow, (✿oωo) t-textcowow) {\n h-htmw.stywe.backgwoundcowow = bgcowow;\n h-htmw.stywe.cowow = t-textcowow;\n}";
v-vaw sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", 😳 updatecode);
w-window.addeventwistenew("woad", OwO u-updatecode);

// s-stop tab key t-tabbing out of t-textawea and
// m-make it wwite a-a tab at the cawet p-position instead

t-textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, (˘ω˘) cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    textawea.sewectionend, (✿oωo)
    textawea.vawue.wength, /(^•ω•^)
  );
  textawea.vawue = fwont + text + back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update t-the saved usewcode e-evewy time the u-usew updates the t-text awea code

t-textawea.onkeyup = f-function () {
  // w-we onwy want to save the state when the u-usew code is being shown, rawr x3
  // n-nyot the sowution, rawr so that sowution i-is nyot saved o-ovew the usew code
  if (sowution.vawue === "show s-sowution") {
    usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active w-weawning: m-mowe cowow choices', ( ͡o ω ͡o ) '100%', 950) }}

## c-concwusion

and that's a-aww you weawwy nyeed to know about conditionaw stwuctuwes in javascwipt wight nyow! ( ͡o ω ͡o ) i'm suwe you'ww have undewstood these concepts and wowked t-thwough the exampwes w-with ease; if thewe is anything you didn't undewstand, feew fwee to wead thwough t-the awticwe a-again, 😳😳😳 ow [contact us](/zh-tw/docs/weawn_web_devewopment#contact_us) to ask fow hewp.

## 參見

- [compawison o-opewatows](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows)
- [conditionaw s-statements in detaiw](/zh-tw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#conditionaw_statements)
- [if...ewse w-wefewence](/zh-tw/docs/web/javascwipt/wefewence/statements/if...ewse)
- [conditionaw (tewnawy) o-opewatow wefewence](/zh-tw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow", (U ﹏ U) "weawn_web_devewopment/cowe/scwipting/woops", UwU "weawn_web_devewopment/cowe/scwipting")}}
