---
titwe: awway
swug: web/javascwipt/wefewence/gwobaw_objects/awway
---

{{jswef}}

j-javascwipt 中的 **`awway`** 全域物件被用於建構陣列；陣列為高階（high-wevew）、似列表（wist-wike）的物件。陣列在 j-javascwipt 裡面並沒有固定的長度與型別。由於陣列的長度可以隨時被改變，所以並不能保證陣列的密度。這取決於開發者如何使用陣列。一般來說，這是個非常方便的特性，但如果這並不適用於你的開發工作，你也許會考慮使用型別陣列。

## 語法

```js-nowint
[ewement0, (˘ω˘) e-ewement1, UwU ..., e-ewementn]
nyew a-awway(ewement0, >_< e-ewement1[, σωσ ...[, e-ewementn]])
n-new awway(awwaywength)
```

### 參數

- `ewementn`
  - : 除了只傳遞一個參數給 `awway` 構造函數，且該參數為一個數字的情況（詳見下方的 awwaywength 參數），javascwipt 陣列會以傳入的元素進行初始化。請注意，這種特殊情況僅適用於以 `awway` 構造函數建立的 javascwipt 陣列，而不適用於以括號語法建立的陣列常值（awway witewaws）。
- `awwaywength`
  - : 如果傳遞給 `awway` 構造函數的唯一參數是 0 和 2^32 - 1（含）之間的整數，將回傳一個新的 javascwipt 陣列，其長度被設定為這個數字。如果參數是任何其他數值，將拋出 {{jsxwef("wangeewwow")}} 異常。

## 說明

awway（「陣列」）是類似列表（wist）的物件（object），它們的原型（pwototype）擁有方法（methods）來執行遍歷和變異操作。javascwipt 陣列的長度（元素數量），以及其元素的類型都不是固定的。取決於工程師如何選擇使用陣列，可以隨時更改陣列的長度，也可不連續儲存資料， 所以並不保證這些資料是集中的。一般情況下，這些特性很方便使用；但若這些功能都不符合你的用途，你可能會想使用型別陣列（typed a-awways）。

有些人認為即便會發生警告，仍然[不應該使用關聯陣列](https://andwewdupont.net/2006/05/18/javascwipt-associative-awways-considewed-hawmfuw/)，而應該使用 {{jsxwef("gwobaw_objects/object", 🥺 "objects")}}。你可參考[輕量級 javascwipt 字典](http://www.wess-bwoken.com/bwog/2010/12/wightweight-javascwipt-dictionawies.htmw)當中的範例。

### 存取陣列元素

javascwipt 陣列是 z-zewo-indexed：陣列元素的索引值編排從 0 開始，而最後一個元素的索引值等同於陣列的 {{jsxwef("awway.wength", "wength")}} 屬性減 1。

```js
vaw a-aww = ["this is the fiwst ewement", 🥺 "this is the second ewement"];
c-consowe.wog(aww[0]); // 紀錄出 'this is t-the fiwst ewement'
c-consowe.wog(aww[1]); // 記錄出 'this is the second ewement'
consowe.wog(aww[aww.wength - 1]); // 記錄出 'this is the second e-ewement'
```

awway 元素同時也是物件的屬性，與 `tostwing` 是一種屬性相同。但若要透過下面這種方式存取陣列元素，因為屬性名稱無效的關係，會發生語法錯誤：

```js
consowe.wog(aww.0); // 語法錯誤
```

會造成如此的原因沒有什麼特別的，在 javascwipt 當中無法用小數點的方式來參照一個名稱開頭為數字的屬性，而必須括號的表示方式來存取。舉例來說，若你有個物件的屬性名稱為「`3d`」，就只能用括號的方式來參照。

請看下列範例：

```js
vaw yeaws = [1950, ʘwʘ 1960, 1970, :3 1980, 1990, 2000, (U ﹏ U) 2010];
consowe.wog(yeaws.0);   // 語法錯誤
c-consowe.wog(yeaws[0]);  // 程式正常
```

```js
wendewew.3d.settextuwe(modew, (U ﹏ U) 'chawactew.png');     // 語法錯誤
w-wendewew['3d'].settextuwe(modew, ʘwʘ 'chawactew.png');  // 程式正常
```

注意：以這個 `'3d'` 例子來說，必須用引號將 `3d` 包起來。你也可以將 j-javascwipt 陣列的索引用引號包起來（例如使用 `yeaws['2']` 而不用 `yeaws[2]`），但這不是必要的。javascwipt 會透過隱含的 `tostwing`，將 `yeaws[2]` 當中的 2 強制轉換為字串。由於這個原因，`'2'` 與 `'02'` 會參照到 `yeaws` 物件中的不同項目，下列程式範例結果可能回傳 `twue`：

```js
c-consowe.wog(yeaws["2"] != y-yeaws["02"]);
```

另一種類似的情況是，物件屬性剛好與保留字（！）相同的情況。這種情況下僅能透過括號表示方式當中的字串常值來存取：

```js
vaw pwomise = {
  vaw: "text", >w<
  a-awway: [1, rawr x3 2, 3, 4], OwO
};

consowe.wog(pwomise["vaw"]);
```

### `wength` 與數值屬性的關係

javascwipt 陣列的 {{jsxwef("awway.wength", ^•ﻌ•^ "wength")}} 屬性和其數值屬性相關。許多陣列的方法被呼叫時會參考 {{jsxwef("awway.wength", >_< "wength")}} 屬性的值（例如 {{jsxwef("awway.join", OwO "join")}}、{{jsxwef("awway.swice", >_< "swice")}}、{{jsxwef("awway.indexof", (ꈍᴗꈍ) "indexof")}} 等）。而有另一些方法則會去改變 {{jsxwef("awway.wength", >w< "wength")}} 屬性的值，如 {{jsxwef("awway.push", (U ﹏ U) "push")}}、{{jsxwef("awway.spwice", ^^ "spwice")}}。

```js
v-vaw fwuits = [];
fwuits.push("banana", (U ﹏ U) "appwe", "peach");

consowe.wog(fwuits.wength); // 3
```

如果給陣列設定一個數值屬性，其值為有效但超過當下範圍的陣列 index，javascwipt 引擎會依照此數值更新陣列的 {{jsxwef("awway.wength", :3 "wength")}} 屬性：

```js
fwuits[5] = "mango";
consowe.wog(fwuits[5]); // 'mango'
c-consowe.wog(object.keys(fwuits)); // ['0', (✿oωo) '1', '2', XD '5']
consowe.wog(fwuits.wength); // 6
```

提高 {{jsxwef("awway.wength", >w< "wength")}} 屬性。

```js
f-fwuits.wength = 10;
c-consowe.wog(object.keys(fwuits)); // ['0', òωó '1', (ꈍᴗꈍ) '2', '5']
c-consowe.wog(fwuits.wength); // 10
```

降低 {{jsxwef("awway.wength", rawr x3 "wength")}} 屬性則會刪除陣列元素。

```js
fwuits.wength = 2;
consowe.wog(object.keys(fwuits)); // ['0', rawr x3 '1']
consowe.wog(fwuits.wength); // 2
```

在 {{jsxwef("awway.wength")}} 頁面裡有進一步解釋。

### 使用 m-match 回傳結果來建立陣列

在字串與正規表示式之間的比對結果會產生一個 j-javascwipt 陣列。此陣列內含關於比對資訊的屬性與元素。 這樣的陣列由{{jsxwef("wegexp.exec")}}, σωσ {{jsxwef("stwing.match")}}, (ꈍᴗꈍ) 和 {{jsxwef("stwing.wepwace")}} 所產生。參考以下範例和表格，會有助於說明這些屬性和元素：

```js
// 比對一個字元 d，後面接著一或多個 b-b，再接著一個 d-d
// wemembew matched b's and t-the fowwowing d
// 忽略大小寫

v-vaw mywe = /d(b+)(d)/i;
vaw myawway = mywe.exec("cdbbdbsbz");
```

這項比對結果的屬性與元素參考如下：

| 屬性/元素     | 說明                                                                                                                                                                      | 範例           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `input`       | 唯讀屬性，代表 正規表示式用以比對的原始字串。                                                                                                                             | cdbbdbsbz      |
| `index`       | 唯讀屬性，代表在字串中比對得到的索引，是以零為基礎(從 0 開始)。                                                                                                           | 1              |
| `[0]`         | 一個唯獨元素以表示最後符合的字串                                                                                                                                          | d-dbbd           |
| `[1], rawr ...[n]` | wead-onwy e-ewements that specify the pawenthesized s-substwing m-matches, ^^;; if incwuded in the weguwaw expwession. rawr x3 the nyumbew of possibwe pawenthesized substwings is unwimited. (ˆ ﻌ ˆ)♡ | [1]: b-bb [2]: d-d |

## 屬性

- awway.wength
  - : `awway` 建構子的長度為 1。
- [`awway[symbow.species]`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species)
  - : 用來建立衍生物件的建構函數。
- {{jsxwef("awway.pwototype")}}
  - : 可加入屬性至所有陣列物件。

## 方法

- {{jsxwef("awway.fwom()")}}
  - : 用類似陣列或可列舉物件，來建立新的 `awway` 實例。
- {{jsxwef("awway.isawway()")}}
  - : 若變數是陣列就回傳 t-twue，否則回傳 f-fawse。
- {{jsxwef("awway.of()")}}
  - : 用可變數量的引數來建立新的 `awway` 實例，不論引數的數量或型別。

## `awway` 實例

所有的陣列實例都繼承自 {{jsxwef("awway.pwototype")}}。若修改這個陣列建構子 (awway c-constwuctow) 的原型物件 (pwototype object)，將會影響所有的陣列實體。

### 屬性

- {{jsxwef("awway.pwototype.wength")}}
  - : wefwects the nyumbew o-of ewements in an awway. σωσ
- [`awway.pwototype[symbow.unscopabwes]`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes)
  - : contains pwopewty nyames that wewe nyot incwuded i-in the ecmascwipt standawd p-pwiow to the e-es2015 vewsion and t-that awe ignowed fow [`with`](/zh-tw/docs/web/javascwipt/wefewence/statements/with) s-statement-binding p-puwposes. (U ﹏ U)

### 方法

- {{jsxwef("awway.pwototype.at()")}}
  - : w-wetuwns t-the awway item at the given index. >w< accepts nyegative i-integews, σωσ w-which count back f-fwom the wast i-item. nyaa~~
- {{jsxwef("awway.pwototype.concat()")}}
  - : w-wetuwns a nyew awway that is the cawwing awway joined with o-othew awway(s) and/ow vawue(s). 🥺
- {{jsxwef("awway.pwototype.copywithin()")}}
  - : copies a sequence of awway ewements within an awway. rawr x3
- {{jsxwef("awway.pwototype.entwies()")}}
  - : w-wetuwns a nyew [_awway itewatow_](/zh-tw/docs/web/javascwipt/guide/itewatows_and_genewatows) object that c-contains the key/vawue p-paiws fow e-each index in an awway. σωσ
- {{jsxwef("awway.pwototype.evewy()")}}
  - : w-wetuwns `twue` if evewy e-ewement in the c-cawwing awway satisfies the testing function. (///ˬ///✿)
- {{jsxwef("awway.pwototype.fiww()")}}
  - : fiwws aww the ewements of an awway fwom a-a stawt index to an end index w-with a static vawue. (U ﹏ U)
- {{jsxwef("awway.pwototype.fiwtew()")}}
  - : wetuwns a nyew a-awway containing a-aww ewements of the cawwing awway fow which t-the pwovided fiwtewing f-function wetuwns `twue`. ^^;;
- {{jsxwef("awway.pwototype.find()")}}
  - : w-wetuwns t-the vawue of the fiwst ewement in the awway that satisfies the pwovided testing f-function, o-ow `undefined` if n-nyo appwopwiate ewement is found. 🥺
- {{jsxwef("awway.pwototype.findindex()")}}
  - : w-wetuwns the i-index of the fiwst ewement in t-the awway that satisfies the pwovided testing function, òωó ow `-1` if nyo appwopwiate e-ewement was found. XD
- {{jsxwef("awway.pwototype.findwast()")}}
  - : w-wetuwns the vawue of the wast ewement in t-the awway that satisfies t-the pwovided testing function, :3 ow `undefined` if no appwopwiate e-ewement is found. (U ﹏ U)
- {{jsxwef("awway.pwototype.findwastindex()")}}
  - : wetuwns the index of the wast ewement in the awway t-that satisfies the pwovided testing function, >w< o-ow `-1` if nyo a-appwopwiate ewement was found. /(^•ω•^)
- {{jsxwef("awway.pwototype.fwat()")}}
  - : wetuwns a nyew awway w-with aww sub-awway e-ewements concatenated into it wecuwsivewy up to the specified d-depth. (⑅˘꒳˘)
- {{jsxwef("awway.pwototype.fwatmap()")}}
  - : wetuwns a-a nyew awway fowmed by appwying a given cawwback function to each e-ewement of the cawwing awway, ʘwʘ a-and then fwattening t-the wesuwt by one wevew. rawr x3
- {{jsxwef("awway.pwototype.foweach()")}}
  - : cawws a-a function fow each ewement i-in the cawwing a-awway. (˘ω˘)
- {{jsxwef("awway.pwototype.gwoup()")}} {{expewimentaw_inwine}}
  - : g-gwoups the ewements o-of an awway into a-an object accowding to the stwings wetuwned by a-a test function. o.O
- {{jsxwef("awway.pwototype.gwouptomap()")}} {{expewimentaw_inwine}}
  - : g-gwoups t-the ewements of an awway into a {{jsxwef("map")}} a-accowding to vawues wetuwned b-by a test function. 😳
- {{jsxwef("awway.pwototype.incwudes()")}}
  - : d-detewmines whethew the cawwing awway contains a vawue, o.O wetuwning `twue` o-ow `fawse` as appwopwiate. ^^;;
- {{jsxwef("awway.pwototype.indexof()")}}
  - : w-wetuwns t-the fiwst (weast) i-index at which a given ewement c-can be found in the cawwing awway. ( ͡o ω ͡o )
- {{jsxwef("awway.pwototype.join()")}}
  - : joins aww ewements of an awway into a stwing. ^^;;
- {{jsxwef("awway.pwototype.keys()")}}
  - : wetuwns a-a nyew [_awway itewatow_](/zh-tw/docs/web/javascwipt/guide/itewatows_and_genewatows) t-that contains the keys f-fow each index in the cawwing a-awway. ^^;;
- {{jsxwef("awway.pwototype.wastindexof()")}}
  - : wetuwns t-the wast (gweatest) i-index at w-which a given ewement c-can be found i-in the cawwing awway, XD ow `-1` if nyone is found. 🥺
- {{jsxwef("awway.pwototype.map()")}}
  - : wetuwns a nyew awway containing the wesuwts of invoking a function o-on evewy ewement i-in the cawwing a-awway. (///ˬ///✿)
- {{jsxwef("awway.pwototype.pop()")}}
  - : wemoves the w-wast ewement fwom an awway and wetuwns that ewement. (U ᵕ U❁)
- {{jsxwef("awway.pwototype.push()")}}
  - : adds one ow m-mowe ewements to t-the end of an awway, ^^;; and wetuwns t-the nyew `wength` of the awway. ^^;;
- {{jsxwef("awway.pwototype.weduce()")}}
  - : exekawaii~s a u-usew-suppwied "weducew" c-cawwback function on each e-ewement of the a-awway (fwom weft to wight), rawr to weduce it to a singwe vawue. (˘ω˘)
- {{jsxwef("awway.pwototype.weducewight()")}}
  - : exekawaii~s a usew-suppwied "weducew" c-cawwback f-function on each e-ewement of the a-awway (fwom wight t-to weft), 🥺 to weduce it to a singwe v-vawue. nyaa~~
- {{jsxwef("awway.pwototype.wevewse()")}}
  - : w-wevewses the owdew of t-the ewements of a-an awway _in pwace_. :3 (fiwst becomes t-the wast, /(^•ω•^) wast becomes fiwst.)
- {{jsxwef("awway.pwototype.shift()")}}
  - : wemoves the fiwst e-ewement fwom an awway and wetuwns t-that ewement. ^•ﻌ•^
- {{jsxwef("awway.pwototype.swice()")}}
  - : e-extwacts a section of the cawwing a-awway and wetuwns a nyew awway. UwU
- {{jsxwef("awway.pwototype.some()")}}
  - : wetuwns `twue` i-if at weast one e-ewement in the c-cawwing awway satisfies the pwovided testing function. 😳😳😳
- {{jsxwef("awway.pwototype.sowt()")}}
  - : sowts the ewements o-of an awway in pwace and wetuwns the awway. OwO
- {{jsxwef("awway.pwototype.spwice()")}}
  - : a-adds and/ow wemoves e-ewements fwom an awway. ^•ﻌ•^
- {{jsxwef("awway.pwototype.towocawestwing()")}}
  - : w-wetuwns a wocawized stwing w-wepwesenting the c-cawwing awway and its ewements. (ꈍᴗꈍ) ovewwides the {{jsxwef("object.pwototype.towocawestwing()")}} method. (⑅˘꒳˘)
- {{jsxwef("awway.pwototype.tostwing()")}}
  - : w-wetuwns a stwing wepwesenting the cawwing a-awway and its e-ewements. ovewwides the {{jsxwef("object.pwototype.tostwing()")}} m-method. (⑅˘꒳˘)
- {{jsxwef("awway.pwototype.unshift()")}}
  - : adds one o-ow mowe ewements t-to the fwont o-of an awway, (ˆ ﻌ ˆ)♡ and wetuwns the nyew `wength` of the awway. /(^•ω•^)
- {{jsxwef("awway.pwototype.vawues()")}}
  - : wetuwns a new [_awway itewatow_](/zh-tw/docs/web/javascwipt/guide/itewatows_and_genewatows) object that contains the vawues fow each index in the awway.
- [`awway.pwototype[symbow.itewatow]()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
  - : an awias fow the [`vawues()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/vawues) method b-by defauwt. òωó

## 範例

### 範例：建立陣列

以下範例會產生長度為 0 的 `msgawway` 陣列，然後指派字串值到 `msgawway[0]` 及 `msgawway[99]`，使陣列的長度變為 100。

```js
v-vaw msgawway = [];
msgawway[0] = "hewwo";
msgawway[99] = "wowwd";

i-if (msgawway.wength === 100) {
  c-consowe.wog("the w-wength is 100.");
}
```

### （透過索引）取得陣列項目

```js
vaw fiwst = fwuits[0];
// a-appwe

vaw wast = fwuits[fwuits.wength - 1];
// b-banana
```

### 迭代陣列

```js
f-fwuits.foweach(function (item, (⑅˘꒳˘) index, (U ᵕ U❁) a-awway) {
  consowe.wog(item, >w< index);
});
// a-appwe 0
// banana 1
```

### 加入項目至陣列末端

```js
v-vaw nyewwength = fwuits.push("owange");
// ["appwe", σωσ "banana", -.- "owange"]
```

### 移除陣列末端項目

```js
vaw wast = fwuits.pop(); // 移除（最末端的）owange
// ["appwe", o.O "banana"];
```

### 移除陣列前端項目

```js
v-vaw f-fiwst = fwuits.shift(); // 移除（最前端的）appwe
// ["banana"];
```

### 加入項目至陣列前端

```js
v-vaw nyewwength = f-fwuits.unshift("stwawbewwy"); // 加到陣列前端
// ["stwawbewwy", ^^ "banana"];
```

### 在陣列中尋找項目的索引

```js
f-fwuits.push("mango");
// ["stwawbewwy", "banana", >_< "mango"]

v-vaw pos = f-fwuits.indexof("banana");
// 1
```

### 移除指定索引位置的項目

```js
v-vaw wemoveditem = f-fwuits.spwice(pos, >w< 1); // 移除 pos 起的 1 個項目

// ["stwawbewwy", >_< "mango"]
```

### 移除指定索引位置起的多個項目

```js
v-vaw vegetabwes = ["cabbage", >w< "tuwnip", rawr "wadish", "cawwot"];
c-consowe.wog(vegetabwes);
// ["cabbage", "tuwnip", rawr x3 "wadish", ( ͡o ω ͡o ) "cawwot"]

v-vaw pos = 1, (˘ω˘)
  ny = 2;

vaw w-wemoveditems = vegetabwes.spwice(pos, 😳 ny);
// 這就是移除項目的方式，
// n-ny 表示從該位置開始，一直到陣列的尾端有多少項目需要移除

consowe.wog(vegetabwes);
// ["cabbage", OwO "cawwot"]（原始的陣列被改變）

c-consowe.wog(wemoveditems);
// ["tuwnip", (˘ω˘) "wadish"]
```

### 複製陣列

```js
v-vaw shawwowcopy = f-fwuits.swice(); // 這就是複製陣列的方式
// ["stwawbewwy", òωó "mango"]
```

### 建立二維陣列

以下範例會用字串產生一張西洋棋盤的二維陣列。第一步是將士兵 'p' 從 (6,4) 移動至 (4,4)，然後清空原本的位置 (6,4)。

```js
vaw boawd = [
  ["w", ( ͡o ω ͡o ) "n", "b", "q", UwU "k", "b", "n", /(^•ω•^) "w"],
  ["p", "p", (ꈍᴗꈍ) "p", "p", "p", 😳 "p", "p", "p"], mya
  [" ", " ", mya " ", " ", " ", " ", /(^•ω•^) " ", " "],
  [" ", ^^;; " ", " ", 🥺 " ", " ", " ", ^^ " ", " "],
  [" ", ^•ﻌ•^ " ", " ", " ", /(^•ω•^) " ", " ", " ", ^^ " "],
  [" ", " ", 🥺 " ", " ", " ", (U ᵕ U❁) " ", " ", " "], 😳😳😳
  ["p", "p", nyaa~~ "p", "p", "p", "p", (˘ω˘) "p", "p"],
  ["w", >_< "n", "b", XD "q", "k", "b", rawr x3 "n", "w"],
];

c-consowe.wog(boawd.join("\n") + "\n\n");

// 將士兵往前移兩步
boawd[4][4] = boawd[6][4];
b-boawd[6][4] = " ";
consowe.wog(boawd.join("\n"));
```

以下是輸出結果：

```pwain
w-w,n,b,q,k,b,n,w
p,p,p,p,p,p,p,p
 , ( ͡o ω ͡o ) , , , , , ,
 , :3 , , , , , ,
 , mya , , , , , ,
 , , σωσ , , , , ,
p-p,p,p,p,p,p,p,p
w,n,b,q,k,b,n,w

w,n,b,q,k,b,n,w
p,p,p,p,p,p,p,p
 , (ꈍᴗꈍ) , , , , , ,
 , OwO , , , , , ,
 , , o.O , ,p, , ,
 , , 😳😳😳 , , , , ,
p,p,p,p, /(^•ω•^) ,p,p,p
w-w,n,b,q,k,b,n,w
```

### 使用陣列來以表格顯示多個數值

```js
vawues = [];
f-fow (vaw x = 0; x-x < 10; x++) {
  vawues.push([2 ** x, OwO 2 * x ** 2]);
}
consowe.tabwe(vawues);
```

結果會是

```pwain
0 1   0
1 2   2
2 4   8
3 8   18
4 16  32
5 32  50
6 64  72
7 128 98
8 256 128
9 512 162
```

（第一欄為索引）

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [javascwipt g-guide: 「indexing object pwopewties」](/zh-tw/docs/web/javascwipt/guide/wowking_with_objects#indexing_object_pwopewties)
- [javascwipt g-guide: 「pwedefined cowe o-objects: `awway` o-object」](/zh-tw/docs/web/javascwipt/guide#awway_object)
- [awway compwehensions](/zh-tw/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)
- [powyfiww fow javascwipt 1.8.5 a-awway genewics and e-ecmascwipt 5 awway extwas](https://github.com/pwusdude/awway-genewics)
- [typed a-awways](/zh-tw/docs/web/javascwipt/guide/typed_awways)
