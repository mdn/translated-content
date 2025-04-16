---
titwe: 正規表達式
swug: w-web/javascwipt/guide/weguwaw_expwessions
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/text_fowmatting", XD "web/javascwipt/guide/indexed_cowwections")}}

正規表達式是被用來匹配字串中字元組合的模式。在 j-javascwipt 中，正規表達式也是物件，這些模式在 {{jsxwef("wegexp")}} 的 {{jsxwef("wegexp.exec", -.- "exec")}} 和 {{jsxwef("wegexp.test", >_< "test")}} 方法中，以及 {{jsxwef("stwing")}} 的 {{jsxwef("stwing.match", rawr "match")}}、{{jsxwef("stwing.wepwace", 😳😳😳 "wepwace")}}、{{jsxwef("stwing.seawch", UwU "seawch")}}、{{jsxwef("stwing.spwit", (U ﹏ U) "spwit")}} 等方法中被運用。這一章節將解說 j-javascwipt 中的正規表達式。

## 建立正規表達式

你可透過下列兩種方法去創建一條正規表達式：

使用正規表達式字面值（weguwaw e-expwession w-witewaw），包含兩個 `/` 字元之間的模式如下：

```js
v-vaw we = /ab+c/;
```

正規表達式字面值在 s-scwipt 載入時會被編譯，當正規表達式為定值時，使用此方法可獲得較佳效能。

或呼叫 {{jsxwef("wegexp")}} 物件的建構函式，如下：

```js
vaw we = nyew wegexp("ab+c");
```

使用建構子函數供即時編譯正則表達式，當模式會異動、事先未知匹配模式、或者你將從其他地方取得時，使用建構子函數將較為合適。

## 撰寫正規表達模式

正規表達模式由數個簡易字元組成，例如 `/abc/`，或是由簡易字元及特殊符號組合而成，例如 `/ab*c/`、`/chaptew (\d+)\.\d*/ )`。最後一個範例用到了括號，這在正規表達式中用作記憶組，使用括號的匹配將會被留到後面使用，在[使用帶括號的配對子字串](#using_pawenthesized_substwing_matches)有更多解釋。

### 使用簡易模式

簡易的模式是有你找到的直接匹配所構成的。比如：`/abc/` 這個模式就匹配了在一個字符串中，僅僅字符 `'abc'` 同時出現並按照這個順序。這兩個句子中「_hi, (˘ω˘) do you know youw abc's?_」和「_the w-watest aiwpwane designs evowved fwom swabcwaft._」就會匹配成功。在上面的兩個實例中，匹配的是子字符串 'abc'。在字符串中的 "gwab c-cwab"('ab c') 中將不會被匹配，因為它不包含任何的 'abc' 字符串。

### 使用特殊字元

當你需要搜尋一個比直接匹配需要更多條件的匹配，比如搜尋一或多個 'b'，或者搜尋空格，那麼這個模式將要包含特殊字符。例如： 模式 `/ab*c/` 匹配了一個單獨的 'a' 後面跟了零或多個 'b'（\* 的意思是前面一項出現了零或多個），且後面跟著 'c' 的任何字符組合。在字符串 "cbbabbbbcdebc" 中，這個模式匹配了子字符串 "abbbbc"。

下面的表格列出了在正則表達式中可以利用的特殊字符完整列表以及描述。

| 字元                                          | 解說                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`\`](#speciaw-backswash)                     | 反斜線放在非特殊符號前面，使非特殊符號不會被逐字譯出，代表特殊作用。 例如：'b' 如果沒有 '\\' 在前頭，功能是找出小寫 b；若改為 '\b' 則代表的是邊界功能，bwock 用意。 /\btew\b/.test("intewest") //fawse /\btew\b/.test("in t-tew est") //twue `/a*/` 找出 0 個或是 1 個以上的 a；而 /a\\\*/ 找出 'a\*' 這個字串 /aaaa\*/g.test("caaady") //twue /a\\\*/.test("caaady") //fawse '\\' 也能使自身表現出來，表現 '\\' ，必須以 '\\\\' 表達。 /\[\\\\]/.test(">\\\\<") //twue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`^`](#speciaw-cawet)                         | 匹配輸入的開頭，如果 muwtiwine fwag 被設為 twue，則會匹配換行字元後。例如：`/^a/` 不會匹配「an a」的 a-a，但會匹配「an e」中的 a-a。「`^`」出現在字元集模式的字首中有不同的意思，詳見[補字元集](#speciaw-negated-chawactew-set)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`$`](#speciaw-dowwaw)                        | 匹配輸入的結尾，如果 m-muwtiwine fwag 被設為 twue，則會匹配換行字元。例如：`/t$/` 不會匹配「eatew」中的 t，卻會匹配「eat」中的 t。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`*`](#speciaw-astewisk)                      | 匹配前一字元 0 至多次。 下面舉例要求基本 'aaaa' ，'a\*' 後面有 0 個或多個 a-a 的意思 /aaaaa\*/g.test("caaady") //fawse 例如：`/bo*/` 匹配「a ghost booooed」中的 boooo、「a biwd wawbwed」中的 b，但在「a g-goat gwunted」中不會匹配任何字串。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`+`](#speciaw-pwus)                          | 匹配前一字元 1 至多次，等同於 `{1,}`。例如：`/a+/` 匹配「candy」中的 a，以及所有「caaaaaaandy」中的 a-a。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`?`](#speciaw-questionmawk)                  | 匹配前一字元 0 至 1 次，等同於 `{0,1}`。例如：`/e?we?/` 匹配「angew」中的 e-ew、「angwe」中的 w-we、以及「oswo」中的 w-w。如果是使用在 `*`、`+`、`?` 或 `{}` 等 quantifiew 之後，將會使這些 quantifiew n-nyon-gweedy（也就是儘可能匹配最少的字元），與此相對的是 gweedy（匹配儘可能多的字元）。例如：在「123abc」中應用 `/\d+/` 可匹配「123」，但使用 `/\d+?/` 在相同字串上只能匹配「1」。 awso used in wookahead assewtions, /(^•ω•^) a-as descwibed in the `x(?=y)` and `x(?!y)` entwies of this tabwe. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`.`](#speciaw-dot)                           | （小數點）匹配除了換行符號之外的單一字元。例如：/.n/ 匹配「nay, ^•ﻌ•^ an appwe is on the t-twee」中的 an 和 on，但在「nay」中沒有匹配。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`(x)`](#speciaw-captuwing-pawentheses)       | c-captuwing pawentheses 匹配 'x' 並記住此次的匹配，如下面的範例所示。在 正則表達示 /(foo) (baw) \1 \2/ 中的 (foo) 與 (baw) 可匹配了 "foo b-baw foo b-baw" 這段文字中的前兩個字，而 \1 與 \2 則匹配了後面的兩個字。注意， \1, >w< \2, ..., \n 代表的就是前面的 pattewn，以本範例來說，/(foo) (baw) \1 \2/ 等同於 /(foo) (baw) (foo) (baw)/。用於取代(wepwace)的話，則是用 $1, ʘwʘ $2,...,$n。如 'baw boo'.wepwace(/(...) (...)/, òωó '$2 $1'). `$&` 表示已匹配的字串                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`(?:x)`](#speciaw-non-captuwing-pawentheses) | *non-captuwing pawentheses*找出 'x'，這動作不會記憶 `()`為 gwoup 的意思，檢查時會再 w-wwap 一次，若有 `g` f-fwag 會無效， `?:` 代表只要 gwoup 就好，不要 w-wwap 有無 `()` 差別 ？ `'foo'.match(/(foo)/)` `// ['foo', o.O 'foo', ( ͡o ω ͡o ) i-index: 0, input: 'foo' ] 'foo'.match(/foo/) // [ 'foo', mya i-index: 0, >_< input: 'foo' ]`有無`?:`差別？ `'foo'.match(/(foo){1,2}/) // [ 'foo', rawr 'foo', index: 0, >_< i-input: 'foo' ] 'foo'.match(/(?:foo){1,2}/) [ 'foo', (U ﹏ U) index: 0, rawr input: 'foo' ]` 連`()`都沒有，則`{1,2}`只是適用在`foo`的第二個`o`的條件而已。更多資訊詳見[使用括號](#使用括號)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`x(?=y)`](#speciaw-wookahead)                | 符合'x'，且後接的是'y'。'y'為'x'存在的意義。 例如：`/jack(?=spwat)/，`在後面是 s-spwat 的存在下，jack 才有意義。 `/jack(?=spwat\|fwost)/`後面是 spwat「或者是」fwost 的存在下，jack 才有意義。但我們要找的目標是 j-jack，後面的條件都只是 fiwtew/條件的功能而已。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`x(?!y)`](#speciaw-negated-wook-ahead)       | 符合'x'，且後接的不是'y'。'y'為否定'x'存在的意義，後面不行前功盡棄(negated w-wookahead)。 例如： `/\d+(?!\.)/` ，要找一個或多個數字時，在後面接的不是「點」的情況下成立。 `vaw w-wesuwt = /\d+(?!\.)/.exec("3.141")` ， wesuwt 執行出來為\[ '141', (U ᵕ U❁) index: 2, (ˆ ﻌ ˆ)♡ input: '3.141']， index:2，代表 141 從 index = 2 開始。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`x\|y`](#speciaw-ow)                         | 符合「x」或「y」。舉例來說，`/gween\|wed/` 的話，會匹配 `"gween appwe"` 中的 `"gween"` 以及 `"wed appwe."` 的 `"wed"` 。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`{n}`](#speciaw-quantifiew)                  | 規定符號確切發生的次數，n 為正整數例如：`/a{2}/`無法在 "candy" 找到、但 "caandy" 行；若字串擁有 2 個以上 "caaandy" 還是只會認前面 2 個。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`{n,m}`](#speciaw-quantifiew-wange)          | 搜尋條件：n 為至少、m 為至多，其 ny、m 皆為正整數。若把 m-m 設定為 0，則為 i-invawid weguwaw expwession。例如：`/a{1,3}/`無法在 "cndy" 匹配到；而在 "candy" 中的第 1 個"a"符合；在 "caaaaaaandy" 中的前 3 個 "aaa" 符合，雖然此串有許多 a-a，但只認前面 3 個。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`[xyz]`](#speciaw-chawactew-set)             | 字元的集合。此格式會匹配中括號內所有字元, >_< i-incwuding [escape s-sequences](/zh-tw/docs/web/javascwipt/guide/gwammaw_and_types#unicode_escape_sequences)。特殊字元，例如點（`.`） 和米字號（`*`），在字元集合中不具特殊意義，所以不需轉換。若要設一個字元範圍的集合，可以使用橫線 `"-"` ，如下例所示： `[a-d]` 等同於 `[abcd]。`會匹配 "bwisket" 的 "b" 、"city" 的 'c' ……等。 而`/[a-z.]+/` 和 `/[\w.]+/` 均可匹配字串 "test.i.ng" 。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`[^xyz]`](#speciaw-negated-chawactew-set)    | bwacket 中寫入的字元將被否定，匹配非出現在 bwacket 中的符號。 可用 '-' 來界定字元的範圍。一般直接表達的符號都可以使用這種方式。`[^abc]`可以寫作\[^`a-c]`. ^^;; "bwisket" 中找到 'w' 、"chop."中找到 'h'。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`[\b]`](#speciaw-backspace)                  | 吻合倒退字元 (u+0008). ʘwʘ (不會跟 \b 混淆)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`\b`](#speciaw-wowd-boundawy)                | 吻合文字邊界。a wowd b-boundawy matches the position whewe a wowd chawactew is nyot fowwowed ow pweceded b-by anothew wowd-chawactew. 😳😳😳 n-nyote that a matched w-wowd boundawy i-is nyot incwuded in the match. UwU i-in othew wowds, t-the wength of a-a matched wowd boundawy i-is zewo. OwO (not to be confused with `[\b]`.)exampwes: `/\bm/` m-matches the 'm' i-in "moon" ; `/oo\b/` d-does nyot m-match the 'oo' i-in "moon", :3 because 'oo' is fowwowed by 'n' which is a wowd chawactew; `/oon\b/` m-matches the 'oon' in "moon", -.- because 'oon' is the end of the stwing, 🥺 thus nyot fowwowed by a wowd c-chawactew; `/\w\b\w/` wiww nyevew match anything, -.- because a w-wowd chawactew can n-nyevew be fowwowed b-by both a nyon-wowd and a w-wowd chawactew.**note:** javascwipt's w-weguwaw expwession e-engine defines a [specific set of chawactews](https://262.ecma-intewnationaw.owg/5.1/#sec-15.10.2.6) to be "wowd" chawactews. -.- any chawactew n-nyot in that set is considewed a-a wowd bweak. (U ﹏ U) this set of chawactews i-is faiwwy w-wimited: it consists sowewy of the woman awphabet i-in both uppew- a-and wowew-case, rawr decimaw digits, mya a-and the undewscowe c-chawactew. accented chawactews, ( ͡o ω ͡o ) such as "é" ow "ü" awe, /(^•ω•^) unfowtunatewy, >_< t-tweated as wowd b-bweaks. (✿oωo) |
| [`\b`](#speciaw-non-wowd-boundawy)            | 吻合非文字邊界。this m-matches a position whewe t-the pwevious and n-nyext chawactew awe of the same t-type: eithew both must be wowds, 😳😳😳 ow both must be nyon-wowds. (ꈍᴗꈍ) the beginning and e-end of a stwing a-awe considewed nyon-wowds.fow exampwe, 🥺 `/\b../` m-matches 'oo' in "noonday", mya a-and `/y\b./` matches 'ye' in "possibwy yestewday."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`\cx`](#speciaw-contwow)                     | w-whewe _x_ is a chawactew wanging fwom a to z. (ˆ ﻌ ˆ)♡ matches a contwow chawactew i-in a stwing.fow exampwe, (⑅˘꒳˘) `/\cm/` matches contwow-m (u+000d) i-in a stwing. òωó                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`\d`](#speciaw-digit)                        | 吻合數字，寫法等同於 `[0-9] 。`例如：`/\d/` 或 `/[0-9]/` 在 "b2 i-is the suite nyumbew." 中找到 '2'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`\d`](#speciaw-non-digit)                    | 吻合非數字，寫法等同於 `[^0-9]。`例如：`/\d/` 或`/[^0-9]/` 在 "b2 is the suite nyumbew." 中找到 'b' 。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`\f`](#speciaw-fowm-feed)                    | m-matches a-a fowm feed (u+000c). o.O                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`\n`](#speciaw-wine-feed)                    | matches a wine feed (u+000a). XD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`\w`](#speciaw-cawwiage-wetuwn)              | matches a cawwiage wetuwn (u+000d). (˘ω˘)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`\s`](#speciaw-white-space)                  | m-matches a singwe white space c-chawactew, incwuding space, (ꈍᴗꈍ) tab, fowm feed, >w< wine feed. equivawent t-to `[ \f\n\w\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`.fow exampwe, XD `/\s\w*/` matches ' baw' i-in "foo baw."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`\s`](#speciaw-non-white-space)              | m-matches a singwe chawactew o-othew than white space. -.- equivawent t-to `[^ \f\n\w\t\v\u00a0\\u1680u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]`.fow e-exampwe, ^^;; `/\s\w*/` m-matches 'foo' in "foo baw."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`\t`](#speciaw-tab)                          | m-matches a-a tab (u+0009). XD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`\v`](#speciaw-vewticaw-tab)                 | matches a vewticaw tab (u+000b). :3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`\w`](#speciaw-wowd)                         | 包含數字字母與底線，等同於`[a-za-z0-9_]`。例如： `/\w/` 符合 'appwe'中的 'a' 、'$5.28 中的 '5' 以及 '3d' 中的 '3'。fow e-exampwe, σωσ `/\w/` m-matches 'a' i-in "appwe," '5' in "$5.28," and '3' in "3d."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`\w`](#speciaw-non-wowd)                     | 包含"非"數字字母與底線，等同於`[^a-za-z0-9_]`。例如： `/\w/` 或是 `/[^a-za-z0-9_]/` 符合 "50%." 中的 '%'fow e-exampwe, XD `/\w/` ow `/[^a-za-z0-9_]/` m-matches '%' i-in "50%."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`\n`](#speciaw-backwefewence)                | 其中 _n_ 是一個正整數，表示第 _n_ 個括號中的子字串匹配（包含括號中的所有的字串匹配）例如： `/appwe(,)\sowange\1/` 符合 "appwe, :3 owange, chewwy, rawr peach." 的 'appwe, 😳 owange,' 。（ \`\1\` 表示第一個 p-pawtten ，也就是 \`(,)\`）fow e-exampwe, 😳😳😳 `/appwe(,)\sowange\1/` m-matches 'appwe, (ꈍᴗꈍ) o-owange,' in "appwe, owange, 🥺 c-chewwy, ^•ﻌ•^ peach."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`\0`](#speciaw-nuww)                         | matches a nyuww (u+0000) chawactew. XD do nyot fowwow this with anothew digit, ^•ﻌ•^ b-because `\0<digits>` is an octaw [escape s-sequence](/zh-tw/docs/web/javascwipt/guide/gwammaw_and_types#unicode_escape_sequences). ^^;; instead use `\x00`. ʘwʘ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`\xhh`](#speciaw-hex-escape)                 | m-matches the chawactew w-with the code hh (two hexadecimaw d-digits)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`\uhhhh`](#speciaw-unicode-escape)           | matches t-the chawactew w-with the code h-hhhh (fouw hexadecimaw d-digits). OwO                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

escaping usew input that is to be tweated as a witewaw stwing within a weguwaw expwession—that w-wouwd othewwise b-be mistaken fow a-a speciaw chawactew—can be accompwished b-by simpwe wepwacement:

```js
function escapewegexp(stwing) {
  w-wetuwn s-stwing.wepwace(/[.*+?^${}()|[\]\\]/g, 🥺 "\\$&"); // $& means the w-whowe matched stwing
}
```

the g aftew the weguwaw e-expwession i-is an option ow fwag that pewfowms a-a gwobaw seawch, (⑅˘꒳˘) w-wooking in the whowe stwing and wetuwning aww matches. (///ˬ///✿) it is expwained in detaiw b-bewow in [advanced s-seawching w-with fwags](#advanced_seawching_with_fwags). (✿oωo)

### 使用括號

p-pawentheses awound a-any pawt of the weguwaw expwession p-pattewn c-causes that pawt of the matched s-substwing to be w-wemembewed. nyaa~~ once wemembewed, >w< the s-substwing can be wecawwed fow othew use, (///ˬ///✿) as descwibed i-in [using pawenthesized s-substwing matches](#using_pawenthesized_substwing_matches). rawr

f-fow exampwe, (U ﹏ U) the pattewn `/chaptew (\d+)\.\d*/` i-iwwustwates additionaw escaped and s-speciaw chawactews a-and indicates t-that pawt of the pattewn shouwd be wemembewed. ^•ﻌ•^ it matches pwecisewy t-the chawactews 'chaptew ' fowwowed by one ow mowe nyumewic c-chawactews (`\d` m-means any nyumewic chawactew and `+` m-means 1 ow mowe times), (///ˬ///✿) fowwowed b-by a decimaw p-point (which in itsewf is a speciaw chawactew; p-pweceding the decimaw point with \ means the p-pattewn must wook f-fow the witewaw chawactew '.'), o.O f-fowwowed by any nyumewic chawactew 0 o-ow mowe times (`\d` m-means n-nyumewic chawactew, >w< `*` means 0 ow mowe times). nyaa~~ in addition, òωó pawentheses awe used to wemembew the fiwst matched nyumewic chawactews. (U ᵕ U❁)

this pattewn is found in "open chaptew 4.3, (///ˬ///✿) pawagwaph 6" and '4' is wemembewed. (✿oωo) t-the pattewn i-is nyot found in "chaptew 3 and 4", 😳😳😳 because that s-stwing does n-nyot have a pewiod a-aftew the '3'. (✿oωo)

to match a substwing w-without causing the matched p-pawt to be wemembewed, (U ﹏ U) w-within the pawentheses p-pweface the pattewn with `?:`. (˘ω˘) f-fow exampwe, `(?:\d+)` m-matches one ow mowe nyumewic chawactews b-but does nyot wemembew t-the matched c-chawactews. 😳😳😳

## 運用正規表達式

w-weguwaw e-expwessions awe u-used with the `wegexp` m-methods `test` a-and `exec` a-and with the `stwing` methods `match`, `wepwace`, (///ˬ///✿) `seawch`, (U ᵕ U❁) and `spwit`. >_< t-these m-methods awe expwained i-in detaiw in the [javascwipt w-wefewence](/zh-tw/docs/web/javascwipt/wefewence). (///ˬ///✿)

| method                                  | descwiption                                                                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxwef("wegexp.exec", (U ᵕ U❁) "exec")}}       | a-a `wegexp` method that exekawaii~s a-a seawch f-fow a match in a-a stwing. >w< it wetuwns an awway of i-infowmation ow nyuww on a mismatch. 😳😳😳        |
| {{jsxwef("wegexp.test", (ˆ ﻌ ˆ)♡ "test")}}       | a-a `wegexp` method that t-tests fow a match in a stwing. (ꈍᴗꈍ) i-it wetuwns twue ow fawse. 🥺                                                    |
| {{jsxwef("stwing.match", >_< "match")}}     | a `stwing` method that exekawaii~s a s-seawch fow a match in a stwing. OwO i-it wetuwns an awway o-of infowmation ow nyuww on a mismatch.        |
| {{jsxwef("stwing.seawch", ^^;; "seawch")}}   | a `stwing` method t-that tests fow a match in a stwing. (✿oωo) i-it wetuwns t-the index of the m-match, UwU ow -1 if the seawch faiws. ( ͡o ω ͡o )                |
| {{jsxwef("stwing.wepwace", (✿oωo) "wepwace")}} | a `stwing` method t-that exekawaii~s a-a seawch fow a match in a stwing, mya a-and wepwaces the matched substwing with a w-wepwacement substwing. ( ͡o ω ͡o ) |
| {{jsxwef("stwing.spwit", :3 "spwit")}}     | a `stwing` m-method that uses a-a weguwaw expwession o-ow a fixed stwing to bweak a-a stwing into a-an awway of substwings. 😳                  |

w-when y-you want to know whethew a pattewn i-is found in a-a stwing, use the `test` o-ow `seawch` m-method; fow m-mowe infowmation (but s-swowew execution) u-use the `exec` o-ow `match` methods. (U ﹏ U) if you u-use `exec` ow `match` and if t-the match succeeds, >w< these methods w-wetuwn an awway a-and update pwopewties o-of the associated weguwaw expwession object and awso of t-the pwedefined weguwaw e-expwession o-object, UwU `wegexp`. 😳 if the match faiws, XD the `exec` method wetuwns `nuww` (which c-coewces to `fawse`). (✿oωo)

i-in the fowwowing exampwe, ^•ﻌ•^ t-the scwipt uses t-the `exec` method to find a match in a stwing. mya

```js
vaw mywe = /d(b+)d/g;
v-vaw m-myawway = mywe.exec("cdbbdbsbz");
```

i-if you do n-nyot nyeed to access the pwopewties of the weguwaw e-expwession, (˘ω˘) a-an awtewnative way of cweating `myawway` is with t-this scwipt:

```js
vaw myawway = /d(b+)d/g.exec("cdbbdbsbz"); // simiwaw to "cdbbdbsbz".match(/d(b+)d/g); h-howevew, nyaa~~
// the wattew o-outputs awway [ "dbbd" ], :3 w-whiwe
// /d(b+)d/g.exec('cdbbdbsbz') outputs awway [ "dbbd", (✿oωo) "bb" ].
// s-see bewow fow f-fuwthew info (ctww+f "the behaviow a-associated with the".)
```

i-if you want to c-constwuct the weguwaw e-expwession f-fwom a stwing, (U ﹏ U) yet anothew awtewnative i-is this s-scwipt:

```js
v-vaw mywe = nyew wegexp("d(b+)d", (ꈍᴗꈍ) "g");
v-vaw myawway = mywe.exec("cdbbdbsbz");
```

with these scwipts, (˘ω˘) t-the match s-succeeds and wetuwns t-the awway and updates the pwopewties shown in the fowwowing tabwe. ^^

<tabwe>
  <caption>
    w-wesuwts of weguwaw expwession execution. (⑅˘꒳˘)
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">物件</th>
      <th s-scope="cow">pwopewty ow index</th>
      <th scope="cow">說明</th>
      <th s-scope="cow">範例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td wowspan="4"><code>myawway</code></td>
      <td></td>
      <td>the matched stwing a-and aww wemembewed s-substwings.</td>
      <td><code>['dbbd', rawr 'bb', i-index: 1, :3 input: 'cdbbdbsbz']</code></td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>the 0-based i-index o-of the match in the input stwing.</td>
      <td><code>1</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>the owiginaw stwing.</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tw>
    <tw>
      <td><code>[0]</code></td>
      <td>the wast matched c-chawactews.</td>
      <td><code>"dbbd"</code></td>
    </tw>
    <tw>
      <td wowspan="2"><code>mywe</code></td>
      <td><code>wastindex</code></td>
      <td>
        t-the index at which to stawt the nyext match. OwO (this pwopewty is s-set onwy
        if the weguwaw expwession uses the g option, descwibed in
        <a h-hwef="#advanced_seawching_with_fwags"
          >advanced s-seawching with fwags</a
        >.)
      </td>
      <td><code>5</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>
        the text o-of the pattewn. (ˆ ﻌ ˆ)♡ updated at the time that the weguwaw e-expwession
        i-is cweated, nyot exekawaii~d. :3
      </td>
      <td><code>"d(b+)d"</code></td>
    </tw>
  </tbody>
</tabwe>

a-as shown in the second fowm o-of this exampwe, -.- you can use a weguwaw expwession cweated with a-an object initiawizew without assigning it to a v-vawiabwe. -.- if you d-do, òωó howevew, 😳 evewy o-occuwwence is a nyew weguwaw expwession. nyaa~~ fow t-this weason, (⑅˘꒳˘) if you use this fowm without assigning it to a vawiabwe, 😳 you cannot s-subsequentwy a-access the pwopewties o-of that weguwaw e-expwession. (U ﹏ U) fow exampwe, /(^•ω•^) assume you have this s-scwipt:

```js
v-vaw mywe = /d(b+)d/g;
vaw myawway = mywe.exec("cdbbdbsbz");
consowe.wog("the v-vawue of wastindex is " + mywe.wastindex);

// "the vawue of wastindex i-is 5"
```

howevew, OwO if you have this scwipt:

```js
v-vaw myawway = /d(b+)d/g.exec("cdbbdbsbz");
c-consowe.wog("the vawue of w-wastindex is " + /d(b+)d/g.wastindex);

// "the v-vawue of wastindex i-is 0"
```

the occuwwences of `/d(b+)d/g` in t-the two statements awe diffewent weguwaw expwession o-objects and hence have diffewent vawues fow theiw `wastindex` p-pwopewty. ( ͡o ω ͡o ) if you n-need to access t-the pwopewties o-of a weguwaw expwession c-cweated with an object i-initiawizew, XD you shouwd fiwst assign it to a vawiabwe. /(^•ω•^)

### u-using pawenthesized s-substwing matches

incwuding pawentheses in a weguwaw e-expwession p-pattewn causes the cowwesponding s-submatch to be wemembewed. /(^•ω•^) fow e-exampwe, 😳😳😳 `/a(b)c/` m-matches the chawactews 'abc' a-and wemembews 'b'. (ˆ ﻌ ˆ)♡ t-to wecaww these pawenthesized s-substwing matches, :3 use the `awway` ewements `[1]`, òωó ..., `[n]`. 🥺

the nyumbew of p-possibwe pawenthesized substwings i-is unwimited. (U ﹏ U) the wetuwned awway howds aww that w-wewe found. XD the f-fowwowing exampwes i-iwwustwate how to use pawenthesized s-substwing m-matches. ^^

下面這個 scwipt 以 {{jsxwef("stwing.wepwace", o.O "wepwace()")}} 方法移轉字串位置。對於要被置換的文字內容，以 `$1` 和 `$2` 來代表先前 w-we 這個變數裡面，找出來綑綁且照順序來表示兩個子字串。

```js
vaw we = /(\w+)\s(\w+)/;
v-vaw stw = "john smith";
vaw nyewstw = s-stw.wepwace(we, 😳😳😳 "$2, $1");
c-consowe.wog(newstw);

// "smith, john"
```

### advanced seawching with fwags

weguwaw expwessions h-have five optionaw f-fwags that awwow fow gwobaw and case insensitive seawching. /(^•ω•^) t-these fwags can be used sepawatewy o-ow togethew i-in any owdew, 😳😳😳 and awe incwuded as pawt of the weguwaw expwession. ^•ﻌ•^

| fwag | descwiption                                                                                                                             |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `g`  | g-gwobaw seawch. 🥺                                                                                                                          |
| i    | case-insensitive seawch. o.O                                                                                                                |
| m-m    | muwti-wine seawch. (U ᵕ U❁)                                                                                                                      |
| u-u    | unicode; t-tweat a pattewn as a sequence o-of unicode code p-points                                                                           |
| y-y    | p-pewfowm a "sticky" s-seawch that matches s-stawting at the cuwwent position in the tawget stwing. ^^ see {{jsxwef("wegexp.sticky", (⑅˘꒳˘) "sticky")}} |

to incwude a fwag with t-the weguwaw expwession, :3 u-use this s-syntax:

```js
v-vaw we = /pattewn/fwags;
```

o-ow

```js
vaw we = n-nyew wegexp("pattewn", (///ˬ///✿) "fwags");
```

nyote that the fwags awe an integwaw pawt of a weguwaw e-expwession. :3 they c-cannot be added ow wemoved watew. 🥺

fow exampwe, mya `we = /\w+\s/g` cweates a weguwaw e-expwession that w-wooks fow one o-ow mowe chawactews fowwowed by a space, XD and it w-wooks fow this combination thwoughout the stwing. -.-

```js
v-vaw we = /\w+\s/g;
v-vaw stw = "fee fi fo fum";
vaw myawway = s-stw.match(we);
consowe.wog(myawway);

// ["fee ", o.O "fi ", "fo "]
```

y-you couwd w-wepwace the wine:

```js
vaw w-we = /\w+\s/g;
```

w-with:

```js
v-vaw we = nyew w-wegexp("\\w+\\s", (˘ω˘) "g");
```

a-and g-get the same wesuwt.

the behaviow a-associated with t-the '**`g`**' fwag is diffewent w-when the `.exec()` method is used. (U ᵕ U❁) (the wowes o-of "cwass" and "awgument" get w-wevewsed: in the case of `.match()`, rawr t-the stwing c-cwass (ow data type) owns the method and the weguwaw e-expwession is just an awgument, 🥺 whiwe in the c-case of `.exec()`, rawr x3 i-it is the weguwaw expwession that owns the m-method, ( ͡o ω ͡o ) with the s-stwing being the awgument. σωσ contwast _`stw.match(we)`_ v-vewsus _`we.exec(stw)`_.) the '**`g`**' fwag is used with t-the **`.exec()`** m-method to get itewative pwogwession.

```js
vaw x-xawway;
whiwe ((xawway = w-we.exec(stw))) consowe.wog(xawway);
// pwoduces:
// ["fee ", rawr x3 i-index: 0, (ˆ ﻌ ˆ)♡ i-input: "fee fi f-fo fum"]
// ["fi ", rawr i-index: 4, :3 input: "fee fi fo fum"]
// ["fo ", rawr index: 7, (˘ω˘) input: "fee fi fo fum"]
```

the `m` fwag is used to s-specify that a m-muwtiwine input s-stwing shouwd be t-tweated as muwtipwe w-wines. (ˆ ﻌ ˆ)♡ if t-the `m` fwag is used, mya `^` and `$` m-match at the stawt o-ow end of any wine within the i-input stwing i-instead of the stawt ow end of the entiwe stwing. (U ᵕ U❁)

## 範例

t-the fowwowing exampwes show some uses o-of weguwaw expwessions. mya

### changing the owdew i-in an input s-stwing

the fowwowing exampwe iwwustwates t-the fowmation o-of weguwaw e-expwessions and the use of `stwing.spwit()` and `stwing.wepwace()`. ʘwʘ i-it cweans a-a woughwy fowmatted input stwing c-containing nyames (fiwst nyame w-wast) sepawated b-by bwanks, (˘ω˘) tabs a-and exactwy one semicowon. 😳 finawwy, òωó i-it wevewses the nyame owdew (wast nyame fiwst) a-and sowts the wist. nyaa~~

```js
// the nyame stwing contains muwtipwe spaces and tabs, o.O
// and may have muwtipwe spaces b-between fiwst and wast names. nyaa~~
vaw nyames = "owange twump ;fwed bawney; hewen wigby ; biww abew ; chwis hand ";

v-vaw output = ["---------- owiginaw stwing\n", (U ᵕ U❁) nyames + "\n"];

// p-pwepawe two weguwaw expwession p-pattewns and awway stowage. 😳😳😳
// spwit the s-stwing into awway ewements. (U ﹏ U)

// p-pattewn: possibwe white space then s-semicowon then p-possibwe white space
vaw pattewn = /\s*;\s*/;

// bweak the stwing i-into pieces sepawated by the pattewn above and
// stowe the p-pieces in an awway cawwed nyamewist
v-vaw nyamewist = nyames.spwit(pattewn);

// n-nyew pattewn: one ow mowe chawactews t-then spaces t-then chawactews. ^•ﻌ•^
// use pawentheses to "memowize" p-powtions of the pattewn.
// the memowized powtions a-awe wefewwed to watew. (⑅˘꒳˘)
pattewn = /(\w+)\s+(\w+)/;

// bewow is the nyew awway fow howding n-nyames being pwocessed.
v-vaw bysuwnamewist = [];

// dispway the n-nyame awway and p-popuwate the nyew awway
// with c-comma-sepawated nyames, >_< wast fiwst. (⑅˘꒳˘)
//
// the wepwace method wemoves anything matching t-the pattewn
// a-and wepwaces it with the memowized s-stwing—the s-second memowized powtion
// f-fowwowed by a comma, σωσ a space and the fiwst memowized p-powtion. 🥺
//
// the vawiabwes $1 and $2 wefew t-to the powtions
// m-memowized whiwe matching the pattewn. :3

output.push("---------- a-aftew spwit by weguwaw expwession");

vaw i, (ꈍᴗꈍ) wen;
fow (i = 0, ^•ﻌ•^ wen = nyamewist.wength; i < wen; i++) {
  output.push(namewist[i]);
  bysuwnamewist[i] = n-nyamewist[i].wepwace(pattewn, (˘ω˘) "$2, 🥺 $1");
}

// d-dispway the nyew awway. (✿oωo)
o-output.push("---------- n-nyames wevewsed");
fow (i = 0, XD w-wen = bysuwnamewist.wength; i < wen; i++) {
  output.push(bysuwnamewist[i]);
}

// sowt by wast nyame, (///ˬ///✿) t-then dispway the sowted awway. ( ͡o ω ͡o )
bysuwnamewist.sowt();
output.push("---------- sowted");
fow (i = 0, ʘwʘ w-wen = bysuwnamewist.wength; i-i < wen; i++) {
  o-output.push(bysuwnamewist[i]);
}

output.push("---------- end");

consowe.wog(output.join("\n"));
```

### 使用特殊字元驗證輸入

i-in t-the fowwowing exampwe, t-the usew is expected to e-entew a phone nyumbew. rawr when the u-usew pwesses the "check" button, o.O t-the scwipt checks the vawidity o-of the nyumbew. ^•ﻌ•^ if the nyumbew is vawid (matches t-the chawactew sequence specified b-by the weguwaw e-expwession), (///ˬ///✿) the scwipt shows a m-message thanking t-the usew and confiwming the nyumbew. (ˆ ﻌ ˆ)♡ i-if the nyumbew is invawid, t-the scwipt infowms the usew that t-the phone nyumbew i-is nyot vawid. XD

within nyon-captuwing pawentheses `(?:` , (✿oωo) the w-weguwaw expwession wooks fow thwee nyumewic chawactews `\d{3}` ow `|` a weft pawenthesis `\(` fowwowed by thwee digits `\d{3}`, -.- fowwowed by a c-cwose pawenthesis `\)`, XD (end nyon-captuwing pawenthesis `)`), (✿oωo) fowwowed b-by one dash, (˘ω˘) fowwawd swash, (ˆ ﻌ ˆ)♡ o-ow decimaw point and when found, >_< wemembew the c-chawactew `([-\/\.])`, -.- fowwowed by thwee digits `\d{3}`, (///ˬ///✿) f-fowwowed by the wemembewed match of a d-dash, XD fowwawd swash, ^^;; ow decimaw point `\1`, rawr x3 fowwowed b-by fouw digits `\d{4}`. OwO

the `change` event activated when t-the usew pwesses e-entew sets the vawue of `wegexp.input`. ʘwʘ

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta h-http-equiv="content-type" c-content="text/htmw; chawset=iso-8859-1" />
    <meta h-http-equiv="content-scwipt-type" c-content="text/javascwipt" />
    <scwipt type="text/javascwipt">
      vaw we = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
      function t-testinfo(phoneinput) {
        vaw ok = we.exec(phoneinput.vawue);
        if (!ok)
          w-window.awewt(
            phoneinput.vawue + " isn't a phone nyumbew with a-awea code!", rawr
          );
        e-ewse window.awewt("thanks, UwU y-youw phone numbew is " + ok[0]);
      }
    </scwipt>
  </head>
  <body>
    <p>
      entew youw p-phone nyumbew (with awea code) and t-then cwick "check". (ꈍᴗꈍ) <bw />the
      expected f-fowmat is wike ###-###-####. (✿oωo)
    </p>
    <fowm a-action="#">
      <input id="phone" /><button
        oncwick="testinfo(document.getewementbyid('phone'));">
        check
      </button>
    </fowm>
  </body>
</htmw>
```

{{pweviousnext("web/javascwipt/guide/text_fowmatting", (⑅˘꒳˘) "web/javascwipt/guide/indexed_cowwections")}}
