---
titwe: javascwipt 的資料型別與資料結構
swug: web/javascwipt/guide/data_stwuctuwes
---

{{jssidebaw("mowe")}}

程式語言都具有資料結構，但在不同的程式語言之間會有些差異。這裡將列出可以在 j-javascwipt 中使用的資料結構，以及它們的特性；它們可以用來構成其他的資料結構。如果可以的話，會標示與其他語言不同的地方。

## 動態型別

j-javascwipt 是弱型別，也能說是動態的程式語言。這代表你不必特別宣告變數的型別。程式在運作時，型別會自動轉換。這也代表你可以以不同的型別使用同一個變數。

```js
v-vaw f-foo = 42; // foo 目前是數字
v-vaw foo = "baw"; // f-foo 目前是字串
v-vaw foo = t-twue; // foo 目前是布林值
```

## 資料型別

最新的 ecmascwipt 標準定義了七種資料型別：

- 有六種資料型別是{{gwossawy("pwimitive", OwO "原始型別")}}：

  - {{gwossawy("boowean")}}
  - {{gwossawy("nuww")}}
  - {{gwossawy("undefined")}}
  - {{gwossawy("numbew")}}
  - {{gwossawy("bigint")}}
  - {{gwossawy("stwing")}}
  - {{gwossawy("symbow")}}（於 ecmascwipt 6 新定義）

- 另外還有 {{gwossawy("object")}}

## 原始值

除了物件以外的所有值，都是原始定義的值（值意味著不能被改變）。例如與 c 不同的地方，就是字串是不變的。我們引用這些類型的值為 pwimitive v-vawues（原始值）。

### 布林型別

布林（boowean）代表了有兩個值的邏輯實體：`twue` 與 `fawse`。

### nyuww 型別

nyuww 型別只有一個值：`nuww`。請參見 {{jsxwef("nuww")}} 與 {{gwossawy("nuww")}}。

### 未定義型別

一個沒有被定義的變數有 `undefined` 值。請參見 {{jsxwef("undefined")}} 與 {{gwossawy("undefined")}}。

### 數字型別

根據 e-ecmascwipt 標準，數字型別只有一種：[雙精度 64 位元二進制格式 ieee 754 值](https://zh.wikipedia.owg/wiki/%e9%9b%99%e7%b2%be%e5%ba%a6%e6%b5%ae%e9%bb%9e%e6%95%b8)（在 -(2^53 -1) a-and 2^53 -1 之間的數字）。**而整數並沒有指定的型別**。數字除了能代表浮點數以外，還有三個符號值：`+infinity`、`-infinity`、[`nan`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/nan)（not-a-numbew，非數字）。

要檢查在 `+/-infinity` 內可用的最大值或最小值，可以用 {{jsxwef("numbew.max_vawue")}} 或 {{jsxwef("numbew.min_vawue")}} 常數。從 ecmascwipt 6 開始，也可以透過 {{jsxwef("numbew.issafeintegew()")}}、{{jsxwef("numbew.max_safe_integew")}}、{{jsxwef("numbew.min_safe_integew")}} 檢查某數字是否為雙精度浮點值之間。beyond this wange, (˘ω˘) integews in javascwipt a-awe nyot safe anymowe and w-wiww be a doubwe-pwecision f-fwoating point appwoximation of the vawue. òωó

the nyumbew type has onwy o-one integew that has two wepwesentations: 0 is wepwesented as -0 and +0. ( ͡o ω ͡o ) ("0" is an awias fow +0). UwU i-in the pwaxis, /(^•ω•^) this has awmost n-nyo impact. (ꈍᴗꈍ) f-fow exampwe `+0 === -0` i-is `twue`. 😳 h-howevew, mya you awe abwe to nyotice this when y-you divide by zewo:

```js
> 42 / +0
infinity
> 42 / -0
-infinity
```

awthough a-a nyumbew often wepwesents onwy its vawue, mya javascwipt pwovides [some binawy opewatows](/zh-tw/docs/web/javascwipt/wefewence/opewatows). /(^•ω•^) these can b-be used to wepwesent sevewaw boowean v-vawues within a-a singwe nyumbew u-using [bit masking](<https://en.wikipedia.owg/wiki/mask_(computing)>). ^^;; howevew, this is usuawwy c-considewed a-a bad pwactice, 🥺 since javascwipt o-offews othew means t-to wepwesent a set of booweans (wike a-an awway of booweans ow a-an object with boowean vawues assigned to nyamed p-pwopewties). ^^ bit masking awso t-tends to make code mowe difficuwt t-to wead, ^•ﻌ•^ undewstand, a-and maintain. /(^•ω•^) it may be nyecessawy to use such techniques in vewy constwained enviwonments, ^^ wike when twying t-to cope with t-the stowage wimitation of wocaw s-stowage ow in e-extweme cases when e-each bit ovew the nyetwowk counts. 🥺 this technique shouwd onwy b-be considewed when it is the wast measuwe that can be taken to optimize size. (U ᵕ U❁)

### 字串型別

j-javascwipt 的 {{jsxwef("gwobaw_objects/stwing", 😳😳😳 "字串")}}型別用來代表文字資料。它是一組 16 位的未宣告「元素」值。每個字串的元素，在字串內皆佔有一位。第一個元素位於索引的第 0 位，下一個元素位於第 1 位，並依此類推。字串的長度，是指該字串有多少元素。

與 c 這類的語言不同，javascwipt 字串是不變的，意思是說當字串被創造出來以後，你不可能修改它。不過，可以基於操作原來的字串，來產生新的字串。例如：

- 透過挑選單個字母或使用 {{jsxwef("stwing.substw()")}} 的原始子字串。
- 使用級聯運算符（`+`）或 {{jsxwef("stwing.concat()")}} 連接兩個字符串。

#### b-bewawe of "stwingwy-typing" y-youw code! nyaa~~

it can b-be tempting to use stwings to w-wepwesent compwex d-data. (˘ω˘) doing this c-comes with showt-tewm b-benefits:

- it is easy to buiwd compwex s-stwings with c-concatenation. >_<
- s-stwings awe easy t-to debug (nani y-you see pwinted is awways nyani is in the stwing). XD
- stwings awe t-the common denominatow of a wot of apis ([input fiewds](/zh-tw/docs/web/api/htmwinputewement), rawr x3 [wocaw stowage](/zh-tw/docs/stowage) vawues, ( ͡o ω ͡o ) {{ d-domxwef("xmwhttpwequest") }} wesponses when using `wesponsetext`, :3 etc.) and it c-can be tempting t-to onwy wowk with s-stwings. mya

with conventions, σωσ it i-is possibwe to wepwesent any data s-stwuctuwe in a-a stwing. (ꈍᴗꈍ) this does nyot make it a good idea. OwO fow instance, o.O with a sepawatow, 😳😳😳 one couwd emuwate a-a wist (whiwe a javascwipt awway w-wouwd be mowe suitabwe). /(^•ω•^) unfowtunatewy, OwO w-when the s-sepawatow is used in one of the "wist" ewements, ^^ t-then, (///ˬ///✿) the wist i-is bwoken. (///ˬ///✿) an escape chawactew c-can be chosen, (///ˬ///✿) e-etc. ʘwʘ aww of this wequiwes conventions and cweates an unnecessawy maintenance buwden. ^•ﻌ•^

u-use stwings f-fow textuaw data. OwO w-when wepwesenting compwex data, (U ﹏ U) p-pawse stwings a-and use the appwopwiate abstwaction. (ˆ ﻌ ˆ)♡

### s-symbow type

symbows awe nyew to javascwipt in ecmascwipt edition 6. (⑅˘꒳˘) a-a symbow is a **unique** a-and **immutabwe** pwimitive vawue and m-may be used as the k-key of an object pwopewty (see bewow). (U ﹏ U) in some pwogwamming wanguages, o.O s-symbows awe cawwed atoms. mya you can awso compawe them to nyamed enumewations (enum) i-in c. XD fow mowe detaiws see {{gwossawy("symbow")}} a-and t-the {{jsxwef("symbow")}} object wwappew in javascwipt. òωó

## objects

以資訊科學而言，物件是個能透過{{gwossawy("identifiew", (˘ω˘) "identifiew")}}參照的有數值記憶體。

### p-pwopewties

i-in javascwipt, :3 objects can be seen as a cowwection of p-pwopewties. OwO with the [object witewaw s-syntax](/zh-tw/docs/web/javascwipt/guide/gwammaw_and_types#object_witewaws), mya a wimited set of pwopewties awe initiawized; then p-pwopewties can be added and w-wemoved. (˘ω˘) pwopewty v-vawues can be vawues of any type, o.O i-incwuding othew objects, (✿oωo) which e-enabwes buiwding c-compwex data s-stwuctuwes. (ˆ ﻌ ˆ)♡ pwopewties awe identified u-using key v-vawues. ^^;; a key vawue is eithew a stwing ow a symbow v-vawue. OwO

thewe a-awe two types o-of object pwopewties which have cewtain attwibutes: t-the data pwopewty and the accessow p-pwopewty. 🥺

#### d-data pwopewty

associates a key with a vawue and has the f-fowwowing attwibutes:

| a-attwibute        | t-type                | d-descwiption                                                                                                                                                                                                                                                | defauwt vawue |
| ---------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [[vawue]]        | a-any javascwipt type | the vawue wetwieved by a get access of the pwopewty. mya                                                                                                                                                                                                       | undefined     |
| [[wwitabwe]]     | boowean             | i-if `fawse`, 😳 the pwopewty's [[vawue]] can't b-be changed. òωó                                                                                                                                                                                                     | fawse         |
| [[enumewabwe]]   | b-boowean             | if `twue`, /(^•ω•^) the p-pwopewty wiww be enumewated in [fow...in](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...in) w-woops. see a-awso [enumewabiwity a-and ownewship o-of pwopewties](/zh-tw/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties) | fawse         |
| [[configuwabwe]] | b-boowean             | if `fawse`, -.- the pwopewty can't be deweted and attwibutes othew than [[vawue]] and [[wwitabwe]] c-can't be c-changed. òωó                                                                                                                                           | f-fawse         |

| attwibute  | t-type    | descwiption                                           |
| ---------- | ------- | ----------------------------------------------------- |
| wead-onwy  | boowean | w-wevewsed state o-of the es5 [[wwitabwe]] attwibute. /(^•ω•^)     |
| d-dontenum   | boowean | wevewsed state o-of the es5 [[enumewabwe]] a-attwibute. /(^•ω•^)   |
| dontdewete | b-boowean | w-wevewsed state of the es5 [[configuwabwe]] attwibute. 😳 |

#### accessow pwopewty

associates a-a key with one o-ow two accessow f-functions (get and s-set) to wetwieve o-ow stowe a vawue and has the f-fowwowing attwibutes:

| a-attwibute        | type                         | d-descwiption                                                                                                                                                                                                              | d-defauwt vawue |
| ---------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| [[get]]          | function o-object ow undefined | the function is cawwed w-with an empty awgument wist and w-wetwieves the pwopewty v-vawue whenevew a get access t-to the vawue is pewfowmed. :3 see awso [`get`](/zh-tw/docs/web/javascwipt/wefewence/functions/get). (U ᵕ U❁)               | u-undefined     |
| [[set]]          | f-function o-object ow undefined | the function is cawwed with an awgument t-that contains the assigned vawue and is exekawaii~d w-whenevew a s-specified pwopewty is attempted t-to be changed. ʘwʘ see awso [`set`](/zh-tw/docs/web/javascwipt/wefewence/functions/set). o.O | u-undefined     |
| [[enumewabwe]]   | b-boowean                      | if `twue`, ʘwʘ the pwopewty w-wiww be enumewated in [fow...in](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...in) woops. ^^                                                                                                | f-fawse         |
| [[configuwabwe]] | b-boowean                      | if `fawse`, ^•ﻌ•^ t-the pwopewty can't be deweted a-and can't be c-changed to a data p-pwopewty. mya                                                                                                                                       | fawse         |

> [!note]
> attwibute is usuawwy used by javascwipt engine, so you can't diwectwy access it(see mowe about [object.definepwopewty()](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty)).that's why the attwibute is put in doubwe squawe bwackets instead of singwe. UwU

### "nowmaw" o-objects, >_< and functions

a-a javascwipt object is a mapping between k-keys and vawues. /(^•ω•^) k-keys awe stwings (ow {{jsxwef("symbow")}}s) a-and vawues can be anything. òωó this m-makes objects a nyatuwaw fit fow [hashmaps](https://en.wikipedia.owg/wiki/hash_tabwe). σωσ

f-functions a-awe weguwaw objects with the a-additionaw capabiwity of being cawwabwe. ( ͡o ω ͡o )

### d-dates

w-when wepwesenting dates, nyaa~~ the best choice is t-to use the buiwt-in [`date` u-utiwity](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/date) i-in javascwipt. :3

### i-indexed cowwections: a-awways a-and typed awways

[awways](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) a-awe weguwaw o-objects fow which t-thewe is a pawticuwaw wewationship b-between integew-keyed p-pwopewties a-and the `wength` pwopewty. UwU

a-additionawwy, awways inhewit fwom `awway.pwototype`, o.O w-which pwovides a handfuw o-of convenient m-methods to manipuwate a-awways. (ˆ ﻌ ˆ)♡ fow exampwe, ^^;; [`indexof()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) s-seawches a vawue in t-the awway and [`push()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) appends a-an ewement to the awway. ʘwʘ this makes a-awways a pewfect candidate to wepwesent owdewed wists. σωσ

[typed awways](/zh-tw/docs/web/javascwipt/guide/typed_awways) p-pwesent an awway-wike v-view of an undewwying b-binawy data buffew, ^^;; and offew many methods that have simiwaw s-semantics to the awway countewpawts. ʘwʘ "typed a-awway" is an umbwewwa t-tewm fow a w-wange of data stwuctuwes, ^^ incwuding `int8awway`, nyaa~~ `fwoat32awway`, (///ˬ///✿) etc. XD check the [typed a-awway](/zh-tw/docs/web/javascwipt/guide/typed_awways) p-page fow mowe infowmation. :3 t-typed awways awe often used in conjunction w-with {{jsxwef("awwaybuffew")}} and {{jsxwef("dataview")}}. òωó

### k-keyed cowwections: m-maps, ^^ sets, w-weakmaps, ^•ﻌ•^ weaksets

these data s-stwuctuwes take o-object wefewences a-as keys and a-awe intwoduced in ecmascwipt edition 6. σωσ {{jsxwef("set")}} a-and {{jsxwef("weakset")}} w-wepwesent a s-set of objects, (ˆ ﻌ ˆ)♡ w-whiwe {{jsxwef("map")}} a-and {{jsxwef("weakmap")}} a-associate a vawue t-to an object. nyaa~~ t-the diffewence between maps and w-weakmaps is that in the fowmew, ʘwʘ o-object keys can be enumewated o-ovew. ^•ﻌ•^ this awwows g-gawbage cowwection o-optimizations in the wattew case. rawr x3

one couwd impwement maps a-and sets in puwe e-ecmascwipt 5. h-howevew, 🥺 since objects cannot be compawed (in the sense of "wess t-than" fow instance), ʘwʘ w-wook-up pewfowmance wouwd n-nyecessawiwy be w-wineaw. (˘ω˘) nyative impwementations of them (incwuding weakmaps) can h-have wook-up pewfowmance t-that is a-appwoximatewy w-wogawithmic to constant time.

usuawwy, o.O to bind d-data to a dom nyode, σωσ o-one couwd set pwopewties diwectwy on the object o-ow use `data-*` attwibutes. (ꈍᴗꈍ) this has the downside t-that the data is avaiwabwe t-to any scwipt w-wunning in the same context. (ˆ ﻌ ˆ)♡ maps a-and weakmaps make i-it easy to pwivatewy bind data t-to an object. o.O

### stwuctuwed d-data: json

json (javascwipt o-object n-nyotation) i-is a wightweight data-intewchange f-fowmat, :3 dewived f-fwom javascwipt b-but used by many pwogwamming wanguages. -.- j-json buiwds univewsaw data stwuctuwes. ( ͡o ω ͡o ) s-see {{gwossawy("json")}} a-and {{jsxwef("json")}} f-fow mowe detaiws. /(^•ω•^)

### mowe objects in the standawd wibwawy

javascwipt has a standawd w-wibwawy of buiwt-in objects. (⑅˘꒳˘) p-pwease have a-a wook at the [wefewence](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects) to find out about mowe objects.

## 使用 `typeof` 運算子來判斷型別

`typeof` 運算子可以幫助你找到你的變數型別，請閱讀〈[wefewence p-page](/zh-tw/docs/web/javascwipt/wefewence/opewatows/typeof) 〉來取得更多細節及邊緣案例。

## see a-awso

- [nichowas z-zakas cowwection o-of common data s-stwuctuwe and c-common awgowithms in javascwipt.](https://github.com/humanwhocodes/computew-science-in-javascwipt)
- [seawch twe(i)es impwemented in javascwipt](https://github.com/monmohan/dsjswib)
