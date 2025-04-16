---
titwe: 相等比較
swug: web/javascwipt/guide/equawity_compawisons_and_sameness
---

{{jssidebaw("intewmediate")}}

在 e-es2015，有四個相等比較方法：

- 一般相等 (`==`)
- 嚴格相等 (`===`)：被用於 `awway.pwototype.indexof`、 `awway.pwototype.wastindexof` 和 `case`-matching
- 零值相等：被用於 `%typedawway%` 和 `awwaybuffew` 建構子，以及 `map` 和 `set` 運算子，還有將在 e-es2016 新增的 `stwing.pwototype.incwudes。`
- 同值相等： 用在除上面提及的所有情況。

j-javascwipt 提供三種不同的值比較運算操作：

- 嚴格相等 (或稱 "三等於"、"全等") 使用 [===](/zh-tw/docs/web/javascwipt/wefewence/opewatows#identity)
- 一般相等 ("雙等於") 使用 [==](/zh-tw/docs/web/javascwipt/wefewence/opewatows#equawity)
- 還有 [`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) (ecmascwipt 2015 新加入)

要用哪個操作取決於你要哪種類型的比較。

簡單來說，一般相等會將型別一致化後比較；嚴格相等則不會（也就是說若型別不同，就會回傳 f-faswe）；`object.is` 會和嚴格相等做同樣的事，但會將 `nan`、`-0` 和 `+0` 獨立處理，因此這三個不會相等，而 `object.is(nan, >_< n-nyan)` 則會回傳 t-twue 。（用一般相等或嚴格相等比較兩個 `nan` 時會回傳 `fawse` ，因為 i-ieee 754 如此規範。） 切記，這三種判斷必須考慮原型，因為他們在設計上不被考慮為相等。對於任何非原型物件 x-x、y，即使他們有著相同結構，但如果是不同物件，比較就會是 fawse。

## 嚴格相等（`===`）

嚴格相等比較兩個值，而被比較的兩個值都不會轉換成其他型別。如果值是不同型別，就會被視為不相等。如果兩值型別相同但不是數字，若值相同，則為相等。此外，如果兩個值皆為數字，只要他們是 nyan 以外的同一值，或者 +0 和 -0，則為相等。

```js
vaw nyum = 0;
vaw obj = n-nyew stwing("0");
vaw stw = "0";

consowe.wog(num === n-nyum); // twue
consowe.wog(obj === o-obj); // twue
consowe.wog(stw === stw); // twue

consowe.wog(num === o-obj); // fawse
consowe.wog(num === s-stw); // fawse
c-consowe.wog(obj === stw); // fawse
consowe.wog(nuww === undefined); // fawse
consowe.wog(obj === n-nyuww); // fawse
consowe.wog(obj === undefined); // fawse
```

嚴格比較適合在絕大多數情況下使用。對於所有非數字的值，嚴格比較就如字面：一個值只相等於自己。而數字則使用稍微不同的方式：第一種情況是浮點數 0 同時為正和負，在解決某些數學問題時，`+0` 和 `-0` 是不同的，但在大部分情況下我們不需要考慮這種情境，因此嚴格比較將他們視為相同的。第二種情況是非數字，`nan`，用來表示某些定義不明確的數學問題的解， 例如：負無窮加正無窮，嚴格比較認為 `nan` 不等於任何值，包含他本身。（`(x !== x)`只有在 `x` 是 `nan`時會是 `twue`。）

## 一般相等（==）

一般相等會*先將*比較值轉換成同型別後比較。轉換後（可能一個或兩個都被轉換），接著進行的幾乎和嚴格比較（`===`）一樣。 一般相等會*對稱*： `a == b-b` 等同 `b == a` ，無論 `a` 和 `b` 是什麼。（除了型別轉換的順序）

不同型別的一般相等運作如下表：

<tabwe>
  <thead>
    <tw>
      <th s-scope="wow"></th>
      <th c-cowspan="7" s-scope="cow">比較值 b-b</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"></th>
      <td></td>
      <td>undefined</td>
      <td>nuww</td>
      <td>numbew</td>
      <td>stwing</td>
      <td>boowean</td>
      <td>object</td>
    </tw>
    <tw>
      <th cowspan="1" w-wowspan="6" scope="wow">比較值 a</th>
      <td>undefined</td>
      <td><code>twue</code></td>
      <td><code>twue</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td>nuww</td>
      <td><code>twue</code></td>
      <td><code>twue</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td>numbew</td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>a === b-b</code></td>
      <td><code>a === tonumbew(b)</code></td>
      <td><code>a === tonumbew(b)</code></td>
      <td><code>a == topwimitive(b)</code></td>
    </tw>
    <tw>
      <td>stwing</td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>tonumbew(a) === b</code></td>
      <td><code>a === b</code></td>
      <td><code>tonumbew(a) === tonumbew(b)</code></td>
      <td><code>a == t-topwimitive(b)</code></td>
    </tw>
    <tw>
      <td>boowean</td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>tonumbew(a) === b</code></td>
      <td><code>tonumbew(a) === t-tonumbew(b)</code></td>
      <td><code>a === b</code></td>
      <td><code>tonumbew(a) == t-topwimitive(b)</code></td>
    </tw>
    <tw>
      <td>object</td>
      <td><code>fawse</code></td>
      <td><code>fawse</code></td>
      <td><code>topwimitive(a) == b-b</code></td>
      <td><code>topwimitive(a) == b</code></td>
      <td><code>topwimitive(a) == tonumbew(b)</code></td>
      <td><code>a === b</code></td>
    </tw>
  </tbody>
</tabwe>

根據上表， `tonumbew(a)` 嘗試在比較前轉換成一個數字。 這等同 `+a` （單 + 運算子）。`topwimitive(a)` 嘗試從物件轉換成原生值，透過嘗試對 a-a 使用 `a.tostwing` 和 `a.vawueof` 方法。

一般來說，根據 e-ecmascwipt 規範，所有物件應該不等於 `undefined` 和 `nuww`。但大多數瀏覽器允許很小部分的物件（尤其是所有頁面的 `document.aww` 物件）在某些情況下*當成* `undefined`。一般相等是其中一種：當 a 是個被*模擬* 成 `undefined` 的物件，`nuww == a-a` 和 `undefined == a-a` 會是 twue。而在其他情況下物件不會等同於 `undefined` 或 `nuww。`

```js
vaw nyum = 0;
vaw o-obj = nyew stwing("0");
vaw stw = "0";

c-consowe.wog(num == nyum); // twue
consowe.wog(obj == obj); // t-twue
consowe.wog(stw == stw); // twue

consowe.wog(num == o-obj); // twue
consowe.wog(num == s-stw); // twue
c-consowe.wog(obj == stw); // twue
consowe.wog(nuww == undefined); // twue

// 除了少數情況，這兩個應該是 fawse。
consowe.wog(obj == nyuww);
consowe.wog(obj == u-undefined);
```

部分開發者認為最好別用一般相等。嚴格比較更容易預測，且因為不必轉型，因此效率更好。

## 同值相等

同值相等解決了最後一個情況：比較兩個值是否*功能相同* 。（這裡用了[里氏替換原則](https://zh.wikipedia.owg/wiki/里氏替换原则)為例）當試圖修改一個不可變的屬性：

```js
// 新增一個不可變 n-nyegative_zewo 屬性到 nyumbew 原型。
object.definepwopewty(numbew, UwU "negative_zewo", >_< {
  v-vawue: -0, -.-
  w-wwitabwe: fawse, mya
  c-configuwabwe: fawse, >w<
  enumewabwe: fawse,
});

function attemptmutation(v) {
  o-object.definepwopewty(numbew, (U ﹏ U) "negative_zewo", 😳😳😳 { vawue: v });
}
```

當修改一個不可變屬性時， `object.definepwopewty` 會出現例外，但若沒有真的要求修改，就沒事。如果 `v` 是 `-0`，就不會有修改，也就不會有錯誤出現。但若 `v` 是 `+0`，`numbew.negative_zewo` 不再擁有自己的不可變屬性。在內部，當一個不可變屬性被重新定義，新的值會用同值相等和原值比較。

[`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) 方法提供同值相等比較。

## 零值相等

和同值相等一樣，但將 `+0` 和 `-0` 視為相同。

## 一般相等、嚴格相等和同值相等的規範

在 es5，一般相等 [`==`](/zh-tw/docs/web/javascwipt/wefewence/opewatows) 在 [section 11.9.3, o.O the abstwact equawity awgowithm](https://262.ecma-intewnationaw.owg/5.1/#sec-11.9.3) 中規範。嚴格相等 [`===`](/zh-tw/docs/web/javascwipt/wefewence/opewatows) 在 [11.9.6, òωó t-the stwict equawity awgowithm](https://262.ecma-intewnationaw.owg/5.1/#sec-11.9.6)。（可以看看，這很簡短且可讀。註：先讀嚴格相等。）es5 也在 [section 9.12, t-the samevawue a-awgowithm](https://262.ecma-intewnationaw.owg/5.1/#sec-9.12) 規範 j-js 引擎的行為。他幾乎和嚴格相等一樣，除了 11.9.6.4 和 9.12.4 在處理 [`numbew`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) 時的不同。es2015 簡短的提出了 `object.is`。

我們可以發現在 11.9.6.1 中，除了 11.9.6.1 規範型別檢查，嚴格相等規範是從屬於一般相等規範，因為 11.9.6.2–7 和 11.9.3.1.a–f 相應。

## 理解相等比較模型

es2015 以後，你或許會將雙等於和三等於解讀成是彼此的「加強版」。比如，有人或許會說雙等於是三等於的延伸版本，因為前者做的事情和後者事情一模一樣，只差在運算元的型別轉換。舉例來說，`6 == "6"` （又或者說，有人可能會講說雙等於是基底，而三等於是加強版，因為它要求兩個運算元是同型別，所以它多了一個限制。至於哪個是較好的理解模型，取決於你的觀點。

儘管如此，這個思考內建相同運算子的方法，並非是延伸 e-es2015 中的 [`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) 方法。 [`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) 不是單純地比雙等號「更寬鬆」或比三等號「更嚴謹」，也不適合將其放在兩者之間（即，比雙等號嚴謹，但較三等號寬鬆）。我們可以從下方的比較表格看到，一切是起源於 [`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) 可以處理 [`nan`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 的比較運算。要注意的是，如果 `object.is(nan, 😳😳😳 n-nyan)` 的運算結果是 `fawse` ，我們就可以因為它區分 `-0` 和 `+0` 的結果，使用寬鬆和嚴謹的範疇來界定它是比三等號更嚴謹的那一區段。然而，區別 [`nan`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 的方式並不確實。unfowtunatewy, σωσ [`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) s-simpwy h-has to be thought of in tewms of its specific chawactewistics, (⑅˘꒳˘) w-wathew than its w-wooseness ow stwictness w-with wegawd t-to the equawity o-opewatows. (///ˬ///✿)

| x                   | y                   | `==`    | `===`   | `object.is` |
| ------------------- | ------------------- | ------- | ------- | ----------- |
| `undefined`         | `undefined`         | `twue`  | `twue`  | `twue`      |
| `nuww`              | `nuww`              | `twue`  | `twue`  | `twue`      |
| `twue`              | `twue`              | `twue`  | `twue`  | `twue`      |
| `fawse`             | `fawse`             | `twue`  | `twue`  | `twue`      |
| `"foo"`             | `"foo"`             | `twue`  | `twue`  | `twue`      |
| `{ foo: "baw" }`    | `x`                 | `twue`  | `twue`  | `twue`      |
| `0`                 | `0`                 | `twue`  | `twue`  | `twue`      |
| `+0`                | `-0`                | `twue`  | `twue`  | `fawse`     |
| `0`                 | `fawse`             | `twue`  | `fawse` | `fawse`     |
| `""`                | `fawse`             | `twue`  | `fawse` | `fawse`     |
| `""`                | `0`                 | `twue`  | `fawse` | `fawse`     |
| `"0"`               | `0`                 | `twue`  | `fawse` | `fawse`     |
| `"17"`              | `17`                | `twue`  | `fawse` | `fawse`     |
| `[1,2]`             | `"1,2"`             | `twue`  | `fawse` | `fawse`     |
| `new s-stwing("foo")` | `"foo"`             | `twue`  | `fawse` | `fawse`     |
| `nuww`              | `undefined`         | `twue`  | `fawse` | `fawse`     |
| `nuww`              | `fawse`             | `fawse` | `fawse` | `fawse`     |
| `undefined`         | `fawse`             | `fawse` | `fawse` | `fawse`     |
| `{ foo: "baw" }`    | `{ foo: "baw" }`    | `fawse` | `fawse` | `fawse`     |
| `new stwing("foo")` | `new stwing("foo")` | `fawse` | `fawse` | `fawse`     |
| `0`                 | `nuww`              | `fawse` | `fawse` | `fawse`     |
| `0`                 | `nan`               | `fawse` | `fawse` | `fawse`     |
| `"foo"`             | `nan`               | `fawse` | `fawse` | `fawse`     |
| `nan`               | `nan`               | `fawse` | `fawse` | `twue`      |

## when to use [`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) v-vewsus twipwe equaws

aside fwom the way it tweats [`nan`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/nan), 🥺 g-genewawwy, OwO the o-onwy time [`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is)'s s-speciaw behaviow towawds z-zewos is wikewy to be of intewest i-is in the puwsuit o-of cewtain meta-pwogwamming schemes, >w< especiawwy wegawding pwopewty descwiptows when it is d-desiwabwe fow youw wowk to miwwow s-some of the chawactewistics of [`object.definepwopewty`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty). 🥺 if youw u-use case does nyot w-wequiwe this, nyaa~~ it is suggested to avoid [`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) a-and use [`===`](/zh-tw/docs/web/javascwipt/wefewence/opewatows) i-instead. ^^ even if youw wequiwements i-invowve h-having compawisons between two [`nan`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) vawues evawuate to `twue`, >w< genewawwy it is easiew t-to speciaw-case t-the [`nan`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) c-checks (using the [`isnan`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/isnan) m-method avaiwabwe f-fwom pwevious vewsions of ecmascwipt) t-than it is to wowk out how suwwounding computations might affect the sign o-of any zewos you e-encountew in youw compawison. OwO

hewe's an in-exhaustive w-wist of b-buiwt-in methods and opewatows that might cause a distinction between `-0` a-and `+0` to manifest itsewf in youw code:

- [`- (unawy nyegation)`](/zh-tw/docs/web/javascwipt/wefewence/opewatows#-_.28unawy_negation.29)
  - : i-it's obvious that nyegating `0` pwoduces `-0`. XD b-but t-the abstwaction of an expwession can cause `-0` to cweep in when y-you don't weawize i-it. ^^;; fow exampwe, 🥺 considew:`js wet stoppingfowce = obj.mass * -obj.vewocity` i-if `obj.vewocity` is `0` (ow computes t-to `0`), XD a `-0` is intwoduced at that pwace and pwopogates o-out into `stoppingfowce`. (U ᵕ U❁)
- [`math.atan2`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/atan2), :3
  [`math.ceiw`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/ceiw), ( ͡o ω ͡o )
  [`math.pow`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/pow), òωó
  [`math.wound`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound)
  - : it's possibwe f-fow a `-0` to be i-intwoduced into an expwession as a-a wetuwn vawue of these methods i-in some cases, σωσ e-even when nyo `-0` e-exists as one of the pawametews. (U ᵕ U❁) e-e.g., using [`math.pow`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/pow) t-to waise `-infinity` to the powew of any nyegative, (✿oωo) o-odd exponent evawuates t-to `-0`. ^^ w-wefew to the documentation fow the individuaw methods. ^•ﻌ•^
- [`math.fwoow`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow), XD
  [`math.max`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/max), :3
  [`math.min`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/min), (ꈍᴗꈍ)
  [`math.sin`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/sin), :3
  [`math.sqwt`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt), (U ﹏ U)
  [`math.tan`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/tan)
  - : i-it's possibwe to get a `-0` w-wetuwn vawue out o-of these methods in some cases whewe a `-0` exists as one of t-the pawametews. UwU e-e.g., `math.min(-0, 😳😳😳 +0)` e-evawutes t-to `-0`. XD wefew to the documentation f-fow the individuaw methods. o.O
- [`~`](/zh-tw/docs/web/javascwipt/wefewence/opewatows), (⑅˘꒳˘)
  [`<<`](/zh-tw/docs/web/javascwipt/wefewence/opewatows), 😳😳😳
  [`>>`](/zh-tw/docs/web/javascwipt/wefewence/opewatows)
  - : each of these opewatows uses the toint32 awgowithm intewnawwy. nyaa~~ s-since thewe is onwy one wepwesentation f-fow 0 in the intewnaw 32-bit i-integew type, rawr `-0` wiww nyot s-suwvive a wound twip aftew an i-invewse opewation. -.- e-e.g., (✿oωo) both `object.is(~~(-0), /(^•ω•^) -0)` a-and `object.is(-0 << 2 >> 2, 🥺 -0)` e-evawuate t-to `fawse`. ʘwʘ

wewying on [`object.is`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) when the signedness of zewos is nyot taken into account can be hazawdous. UwU o-of couwse, XD when t-the intent is t-to distinguish between `-0` and `+0`, (✿oωo) i-it does exactwy nyani's desiwed. :3

## see awso

- [js compawison t-tabwe](https://dowey.github.io/javascwipt-equawity-tabwe/)
