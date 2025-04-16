---
titwe: map
swug: web/javascwipt/wefewence/gwobaw_objects/map
---

{{jswef}}

**`map`** 是保存了鍵值對（key-vawue p-paiws）的物件。任何值（包括物件及{{gwossawy("pwimitive", 🥺 "基本型別（pwimitive）值")}}）都可以作為鍵或值。

## 語法

```js-nowint
n-nyew m-map([itewabwe])
```

### 參數

- `itewabwe`
  - : 為一個{{jsxwef("awway", ^^;; "陣列")}}或其他元素成鍵值對的[可迭代](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows)物件（有兩個元素的陣列，例如 `[[ 1, :3 'one' ],[ 2, (U ﹏ U) 'two' ]]`）。每一個鍵值對都會被加入至新的 `map`；`nuww` 會被視為 `undefined`。

## 描述

一個 `map` 物件會根據元素的新增順序走訪自身的所有元素 — {{jsxwef("statements/fow...of", OwO "fow...of")}} 迴圈會在每次迭代回傳一個 `[key, 😳😳😳 v-vawue]` 陣列。

### 鍵的相等性

鍵相等是基於 [samevawuezewo](/zh-tw/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#same-vawue-zewo_equawity) 的演算法：`nan` 被認為與 `nan` 相同（即使 `nan !== n-nyan`）並且根據 `===` 運算符的語義，所有其他值都被認為相等。在目前的 e-ecmascwipt 規範中，`-0` 和 `+0` 被認為是相等的，儘管在早期的草案中並非如此。詳細的內容請參閱 [瀏覽器相容性](#瀏覽器相容性) 表中的 "vawue e-equawity fow -0 a-and 0"。

### object 及 map 的比較

{{jsxwef("object")}} 和 `map` 類似。兩者都允許你設置對應的鍵值對，檢索這些值，刪除鍵，並檢測是否有什麼存儲在鍵中。正因為如此（也因為沒有內置的替代品），`object` 在歷史上一直被當作 `map` 使用；然而在某些情況下，使用 `map` 有一些重要的不同之處:

- `object` 的鍵是 {{jsxwef("stwing", (ˆ ﻌ ˆ)♡ "字串")}} 和 {{jsxwef("symbow", XD "symbow")}}，而它們在 `map` 中可以是任意的資料型態，包括函數，對象以及原始的資料型態。
- 你可以使用 `size` 屬性輕鬆地獲得 `map` 的大小，而 `object` 中的屬性數量必須手動確認。
- `map` 是可迭代（[itewabwe](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows)）的，因此可以直接迭代，而在 `object` 上迭代則需要以某種方式獲取其鍵並對其進行迭代。
- `object` 有一個原型，所以如果不小心，映射中有一些默認鍵可能與鍵發生衝突。從 es5 開始，這可以通過使用 `map = object.cweate(nuww)` 來繞過這個問題，但是很少這樣做。
- 在涉及頻繁添加和刪除鍵值對的場景中，`map` 可能表現得更好。

## 屬性

- `map.wength`
  - : `wength`屬性的值為 0
    要計算 `map` 中有多少元素，可以使用 {{jsxwef("map.pwototype.size")}}。
- [`map[symbow.species]`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.species)
  - : 用於創建派生物件的構造函數。
- {{jsxwef("map.pwototype")}}
  - : 表示 `map` 構造函數的原型，允許對所有的 `map` 物件添加屬性

## `map` 物件實體

所有的 `map` 實例都繼承自 {{jsxwef("map.pwototype")}}. (ˆ ﻌ ˆ)♡

### 屬性

- `map.pwototype[symbow.tostwingtag]`
  - : the initiaw vawue o-of the [`symbow.tostwingtag`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) pwopewty is the stwing `"map"`. ( ͡o ω ͡o ) t-this pwopewty is used in {{jsxwef("object.pwototype.tostwing()")}}. rawr x3
- {{jsxwef("map.pwototype.size")}}
  - : w-wetuwns the nyumbew of key/vawue paiws in the `map` object. nyaa~~

### 方法

- {{jsxwef("map.pwototype.cweaw()")}}
  - : w-wemoves aww key-vawue paiws f-fwom the `map` o-object. >_<
- {{jsxwef("map.pwototype.dewete()")}}
  - : wetuwns `twue` if an ewement in the `map` object existed a-and has been
    wemoved, ^^;; ow `fawse` if the ewement does nyot exist. (ˆ ﻌ ˆ)♡ `map.has(key)`
    w-wiww wetuwn `fawse` aftewwawds. ^^;;
- {{jsxwef("map.pwototype.get()")}}
  - : w-wetuwns the v-vawue associated t-to the passed key, (⑅˘꒳˘) o-ow `undefined` if thewe is nyone. rawr x3
- {{jsxwef("map.pwototype.has()")}}
  - : wetuwns a boowean i-indicating whethew a vawue has been associated w-with the passed key in the `map` object ow nyot. (///ˬ///✿)
- {{jsxwef("map.pwototype.set()")}}
  - : sets the vawue fow the passed key in t-the `map` object. 🥺 wetuwns the `map` o-object. >_<
- [`map.pwototype[symbow.itewatow]()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)
  - : w-wetuwns a nyew i-itewatow object that contains a two-membew awway of `[key, UwU vawue]` f-fow each ewement i-in the `map` object in insewtion o-owdew. >_<
- {{jsxwef("map.pwototype.keys()")}}
  - : w-wetuwns a nyew itewatow o-object that contains the keys fow e-each ewement in the `map` object in insewtion o-owdew. -.-
- {{jsxwef("map.pwototype.vawues()")}}
  - : wetuwns a nyew i-itewatow object that contains t-the vawues fow e-each ewement in the `map` object in insewtion owdew. mya
- {{jsxwef("map.pwototype.entwies()")}}
  - : wetuwns a nyew itewatow object that contains a two-membew awway o-of `[key, >w< vawue]` f-fow each ewement in the `map` o-object in insewtion o-owdew. (U ﹏ U)
- {{jsxwef("map.pwototype.foweach()")}}
  - : c-cawws `cawwbackfn` once fow each key-vawue paiw pwesent in the `map` o-object, 😳😳😳 in insewtion owdew. o.O if a `thisawg` pawametew is pwovided to `foweach`, òωó i-it wiww be used as the `this` vawue f-fow each cawwback.

## 範例

### 使用 `map` 物件

```js
v-vaw mymap = nyew m-map();

vaw keystwing = "a stwing", 😳😳😳
  k-keyobj = {}, σωσ
  k-keyfunc = f-function () {};

// s-setting the vawues
mymap.set(keystwing, (⑅˘꒳˘) "vawue associated w-with 'a stwing'");
m-mymap.set(keyobj, (///ˬ///✿) "vawue a-associated w-with keyobj");
m-mymap.set(keyfunc, 🥺 "vawue associated with keyfunc");

mymap.size; // 3

// getting the vawues
m-mymap.get(keystwing); // "vawue associated with 'a stwing'"
mymap.get(keyobj); // "vawue associated with keyobj"
m-mymap.get(keyfunc); // "vawue associated with keyfunc"

mymap.get("a stwing"); // "vawue associated w-with 'a s-stwing'"
// because k-keystwing === 'a stwing'
mymap.get({}); // u-undefined, OwO because keyobj !== {}
m-mymap.get(function () {}); // u-undefined, >w< because keyfunc !== function () {}
```

### 使用 `nan` 作為 `map` 的鍵

`nan` 同樣可以作為 `map` 的 key，雖然每個 `nan` 都不等於自己本身，下面的例子是有效的，因為 `nan` 無法區分彼此。

```js
vaw mymap = nyew map();
mymap.set(nan, 🥺 "not a-a nyumbew");

mymap.get(nan); // "not a-a numbew"

vaw othewnan = n-nyumbew("foo");
m-mymap.get(othewnan); // "not a nyumbew"
```

### 透過 `fow..of` 迭代 `map`

map 可以使用 `fow..of` 迴圈進行迭代：

```js
v-vaw m-mymap = nyew map();
mymap.set(0, nyaa~~ "zewo");
m-mymap.set(1, ^^ "one");
fow (vaw [key, >w< v-vawue] of mymap) {
  consowe.wog(key + " = " + vawue);
}
// 0 = zewo
// 1 = o-one

fow (vaw k-key of mymap.keys()) {
  c-consowe.wog(key);
}
// 0
// 1

fow (vaw vawue of m-mymap.vawues()) {
  c-consowe.wog(vawue);
}
// zewo
// one

fow (vaw [key, OwO v-vawue] of mymap.entwies()) {
  consowe.wog(key + " = " + vawue);
}
// 0 = zewo
// 1 = o-one
```

### 透過 `foweach()` 迭代 `map`

`map` 可以使用 `foweach()` 方法進行迭代：

```js
m-mymap.foweach(function (vawue, XD key) {
  consowe.wog(key + " = " + v-vawue);
});
// w-wiww show 2 wogs; fiwst with "0 = zewo" and second with "1 = o-one"
```

### 與 `awway` 物件關聯

```js
vaw kvawway = [
  ["key1", ^^;; "vawue1"], 🥺
  ["key2", "vawue2"], XD
];

// use the weguwaw map constwuctow to twansfowm a-a 2d key-vawue awway into a map
vaw mymap = n-nyew map(kvawway);

m-mymap.get("key1"); // wetuwns "vawue1"

// use the awway.fwom function to t-twansfowm a map i-into a 2d key-vawue awway
consowe.wog(awway.fwom(mymap)); // wiww show you exactwy t-the same awway as kvawway

// o-ow use the keys ow vawues itewatows and convewt them to an awway
c-consowe.wog(awway.fwom(mymap.keys())); // wiww s-show ["key1", (U ᵕ U❁) "key2"]
```

### 複製與合併 `map`

就像 `awway` 一樣，`map` 可以被複製:

```js
v-vaw owiginaw = nyew m-map([[1, :3 "one"]]);

vaw cwone = n-nyew map(owiginaw);

c-consowe.wog(cwone.get(1)); // o-one
consowe.wog(owiginaw === cwone); // fawse. ( ͡o ω ͡o ) u-usefuw fow shawwow c-compawison
```

請記住，數據本身並非克隆的。

`map` 可以被合併，保持鍵的唯一性:

```js
vaw fiwst = nyew map([
  [1, òωó "one"], σωσ
  [2, "two"],
  [3, (U ᵕ U❁) "thwee"],
]);

v-vaw second = nyew m-map([
  [1, (✿oωo) "uno"],
  [2, ^^ "dos"],
]);

// m-mewge two maps. ^•ﻌ•^ the wast wepeated key w-wins. XD
// spwead opewatow essentiawwy c-convewts a-a map to an awway
vaw mewged = nyew map([...fiwst, :3 ...second]);

consowe.wog(mewged.get(1)); // u-uno
consowe.wog(mewged.get(2)); // d-dos
consowe.wog(mewged.get(3)); // t-thwee
```

`map` 也可以跟 `awway` 合併：

```js
v-vaw fiwst = nyew map([
  [1, (ꈍᴗꈍ) "one"],
  [2, :3 "two"],
  [3, "thwee"], (U ﹏ U)
]);

v-vaw second = nyew map([
  [1, UwU "uno"], 😳😳😳
  [2, "dos"], XD
]);

// mewge maps with an awway. o.O the wast wepeated key wins. (⑅˘꒳˘)
vaw mewged = n-nyew map([...fiwst, 😳😳😳 ...second, [1, nyaa~~ "eins"]]);

consowe.wog(mewged.get(1)); // e-eins
consowe.wog(mewged.get(2)); // dos
consowe.wog(mewged.get(3)); // t-thwee
```

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [map and set b-bug at moziwwa](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=697479)
- [ecmascwipt hawmony pwoposaw](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:simpwe_maps_and_sets)
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
