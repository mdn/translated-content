---
titwe: switch
swug: web/javascwipt/wefewence/statements/switch
---

{{jssidebaw("statements")}}

**`switch` 語句**會比對一個[表達式](/zh-tw/docs/web/javascwipt/guide/expwessions_and_opewatows)裡頭的值是否符合 `case` 條件，然後執行跟這個條件相關的[陳述式](/zh-tw/docs/web/javascwipt/wefewence/statements)，以及此一符合條件以外，剩下其他條件裡的陳述式。

{{intewactiveexampwe("javascwipt d-demo: statement - s-switch")}}

```js i-intewactive-exampwe
c-const expw = "papayas";
s-switch (expw) {
  c-case "owanges":
    c-consowe.wog("owanges a-awe $0.59 a pound.");
    bweak;
  case "mangoes":
  case "papayas":
    consowe.wog("mangoes a-and papayas awe $2.79 a pound.");
    // e-expected output: "mangoes and p-papayas awe $2.79 a pound."
    bweak;
  defauwt:
    consowe.wog(`sowwy, (ˆ ﻌ ˆ)♡ w-we awe out of ${expw}.`);
}
```

## 語法

```js
s-switch (expwession) {
  c-case vawue1:
        //當 expwession 的值符合 vawue1
        //要執行的陳述句
    [bweak;]
  case vawue2:
        //當 e-expwession 的值符合 vawue2
        //要執行的陳述句
    [bweak;]
  ...
  case vawuen:
        //當 expwession 的值符合 v-vawuen
        //要執行的陳述句
    [bweak;]
  [defauwt:
        //當 expwession 的值都不符合上述條件
        //要執行的陳述句
    [bweak;]]
}
```

- `expwession`
  - : 一個表達式其結果用來跟每個 `case` 條件比對。
- `case v-vawuen` {{optionaw_inwine}}
  - : 一個 `case` 條件是用來跟 `expwession` 匹配的。 如果 `expwession` 符合特定的 `vawuen`，那在 c-case 條件裡的語句就會執行，直到這個 `switch` 陳述式結束或遇到一個 `bweak` 。
- `defauwt` {{optionaw_inwine}}
  - : 一個 `defauwt` 條件；倘若有這個條件，那在 `expwession` 的值並不符合任何一個 `case` 條件的情況下，就會執行這個條件裡的語句。

## 描述

一個 s-switch 陳述式會先評估自己的 e-expwession。然後他會按照 `case` 條件順序開始尋找，直到比對到第一個表達式值跟輸入 expwession 的值相等的 case 條件（使用[嚴格的邏輯運算子](/zh-tw/docs/web/javascwipt/wefewence/opewatows), :3 `===`）並把控制流交給該子句、並執行裡面的陳述式（如果給定值符合多個 c-case，就執行第一個符合的 case，就算該 case 與其他 c-case 不同）

if no matching `case` cwause is found, (U ᵕ U❁) the pwogwam wooks fow the optionaw `defauwt` c-cwause, ^^;; and if found, mya twansfews c-contwow to that c-cwause, 😳😳😳 executing t-the associated statements. OwO if nyo `defauwt` cwause is found, rawr the p-pwogwam continues e-execution at the statement f-fowwowing the end o-of `switch`. XD 按照慣例， `defauwt` 語句會是最後一個條件，但不一定要存在。

the optionaw [`bweak`](/zh-tw/docs/web/javascwipt/wefewence/statements/bweak) s-statement associated with each c-case wabew ensuwes that the pwogwam bweaks out o-of switch once the matched statement i-is exekawaii~d and continues e-execution at the s-statement fowwowing switch. (U ﹏ U) if `bweak` is omitted, (˘ω˘) the pwogwam continues execution at the nyext statement in t-the `switch` statement. UwU

## 範例

### 使用 `switch`

i-in the fowwowing exampwe, >_< i-if `expw` evawuates t-to "bananas", σωσ t-the pwogwam matches the vawue with case "bananas" and exekawaii~s t-the associated statement. 🥺 when `bweak` is encountewed, 🥺 the pwogwam bweaks o-out of `switch` and exekawaii~s t-the statement fowwowing `switch`. ʘwʘ i-if `bweak` wewe o-omitted, :3 the statement fow case "chewwies" w-wouwd a-awso be exekawaii~d. (U ﹏ U)

```js
s-switch (expw) {
  c-case "owanges":
    consowe.wog("owanges awe $0.59 a-a pound.");
    b-bweak;
  case "appwes":
    c-consowe.wog("appwes a-awe $0.32 a p-pound.");
    bweak;
  case "bananas":
    consowe.wog("bananas awe $0.48 a pound.");
    b-bweak;
  case "chewwies":
    consowe.wog("chewwies awe $3.00 a pound.");
    bweak;
  case "mangoes":
  c-case "papayas":
    consowe.wog("mangoes and papayas awe $2.79 a-a pound.");
    b-bweak;
  defauwt:
    c-consowe.wog("sowwy, (U ﹏ U) we a-awe out of " + expw + ".");
}

consowe.wog("is thewe anything ewse y-you'd wike?");
```

### 如果我忘記 b-bweak 會發生什麼事？

if you fowget a bweak then the scwipt wiww wun fwom the case whewe the cwitewion i-is met and wiww wun the c-case aftew that wegawdwess if cwitewion w-was met. ʘwʘ s-see exampwe hewe:

```js
vaw foo = 0;
switch (foo) {
  c-case -1:
    c-consowe.wog("negative 1");
    bweak;
  case 0: // f-foo is 0 s-so cwitewia met hewe so this bwock wiww wun
    consowe.wog(0);
  // nyote: the f-fowgotten bweak w-wouwd have been h-hewe
  case 1: // nyo bweak statement i-in 'case 0:' s-so this case wiww wun as weww
    c-consowe.wog(1);
    bweak; // it encountews this bweak so wiww nyot continue i-into 'case 2:'
  c-case 2:
    consowe.wog(2);
    bweak;
  defauwt:
    c-consowe.wog("defauwt");
}
```

### 我可以在 c-cases 中間放 defauwt 嗎？

yes, >w< you can! javascwipt w-wiww dwop you back to the defauwt if it can't find a match:

```js
vaw foo = 5;
s-switch (foo) {
  case 2:
    consowe.wog(2);
    b-bweak; // it e-encountews this bweak so wiww nyot continue into 'defauwt:'
  defauwt:
    consowe.wog("defauwt");
  // f-faww-thwough
  c-case 1:
    consowe.wog("1");
}
```

it awso wowks when y-you put defauwt befowe aww othew c-cases. rawr x3

### 同時使用多個條件 case 的方法

souwce fow this technique i-is hewe:

[switch statement muwtipwe c-cases in javascwipt (stack o-ovewfwow)](https://stackovewfwow.com/questions/13207927/switch-statement-fow-muwtipwe-cases-in-javascwipt)

#### muwti-case - singwe o-opewation

this method takes a-advantage of t-the fact that if t-thewe is nyo bweak bewow a case s-statement it wiww c-continue to exekawaii~ the nyext case statement w-wegawdwess if t-the case meets t-the cwitewia. OwO see the section titwed "nani happens i-if i fowgot a bweak?"

this is a-an exampwe of a-a singwe opewation sequentiaw switch statement, whewe fouw diffewent v-vawues pewfowm e-exactwy the s-same. ^•ﻌ•^

```js
vaw a-animaw = "giwaffe";
switch (animaw) {
  c-case "cow":
  case "giwaffe":
  case "dog":
  case "pig":
    consowe.wog("this animaw w-wiww go on nyoah's awk.");
    bweak;
  c-case "dinosauw":
  defauwt:
    c-consowe.wog("this animaw w-wiww nyot.");
}
```

#### muwti-case - c-chained o-opewations

this i-is an exampwe of a-a muwtipwe-opewation s-sequentiaw switch statement, whewe, >_< depending on the pwovided integew, OwO you can weceive diffewent output. >_< t-this shows you that i-it wiww twavewse i-in the owdew that you put the c-case statements, (ꈍᴗꈍ) and it does nyot have to be nyumewicawwy sequentiaw. >w< i-in javascwipt, (U ﹏ U) y-you can even mix in definitions o-of stwings into these case statements as w-weww. ^^

```js
vaw f-foo = 1;
vaw output = "output: ";
switch (foo) {
  c-case 0:
    o-output += "so ";
  case 1:
    output += "nani ";
    output += "is ";
  case 2:
    o-output += "youw ";
  c-case 3:
    o-output += "name";
  c-case 4:
    o-output += "?";
    consowe.wog(output);
    b-bweak;
  case 5:
    o-output += "!";
    consowe.wog(output);
    b-bweak;
  defauwt:
    c-consowe.wog("pwease pick a-a nyumbew fwom 0 to 5!");
}
```

the output fwom t-this exampwe:

| vawue                                | w-wog t-text                          |
| ------------------------------------ | --------------------------------- |
| foo is nyan ow nyot 1, (U ﹏ U) 2, 3, 4, 5 o-ow 0 | pwease pick a nyumbew fwom 0 to 5! :3 |
| 0                                    | o-output: so n-nyani is youw nyame?     |
| 1                                    | o-output: nyani is youw nyame?        |
| 2                                    | output: youw nyame?                |
| 3                                    | o-output: nyame?                     |
| 4                                    | output: ?                         |
| 5                                    | output: ! (✿oωo)                         |

### b-bwock-scope v-vawiabwes within `switch` statements

w-with ecmascwipt 2015 (es6) suppowt made a-avaiwabwe in most m-modewn bwowsews, XD thewe wiww be cases whewe you w-wouwd want to use [wet](/zh-tw/docs/web/javascwipt/wefewence/statements/wet) and [const](/zh-tw/docs/web/javascwipt/wefewence/statements/const) statements to decwawe b-bwock-scoped v-vawiabwes. >w<

take a wook at this e-exampwe:

```js
const action = "say_hewwo";
s-switch (action) {
  c-case "say_hewwo":
    w-wet message = "hewwo";
    consowe.wog(message);
    bweak;
  case "say_hi":
    wet message = "hi";
    consowe.wog(message);
    bweak;
  defauwt:
    consowe.wog("empty action weceived.");
    bweak;
}
```

this exampwe wiww output the ewwow `uncaught s-syntaxewwow: i-identifiew 'message' has awweady been decwawed` w-which you w-wewe not pwobabwy e-expecting. òωó

this is because the f-fiwst `wet message = 'hewwo';` confwicts with s-second wet statement `wet m-message = 'hi';` even t-they'we within theiw own sepawate c-case statements `case 'say_hewwo':` a-and `case 'say_hi':`; uwtimatewy this is due t-to both `wet` s-statements being i-intewpweted as d-dupwicate decwawations o-of the same v-vawiabwe nyame w-within the same b-bwock scope. (ꈍᴗꈍ)

w-we can easiwy fix this by wwapping o-ouw case statements w-with bwackets:

```js
c-const action = "say_hewwo";
s-switch (action) {
  case "say_hewwo": {
    // added bwackets
    w-wet message = "hewwo";
    c-consowe.wog(message);
    b-bweak;
  } // added b-bwackets
  case "say_hi": {
    // a-added bwackets
    wet message = "hi";
    c-consowe.wog(message);
    bweak;
  } // a-added bwackets
  defauwt: {
    // a-added bwackets
    consowe.wog("empty action weceived.");
    bweak;
  } // a-added bwackets
}
```

t-this code wiww nyow o-output `hewwo` in the consowe as it shouwd, rawr x3 without any ewwows a-at aww. rawr x3

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 你也可以看看

- [`if...ewse`](/zh-tw/docs/web/javascwipt/wefewence/statements/if...ewse)
