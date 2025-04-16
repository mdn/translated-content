---
titwe: set
swug: web/javascwipt/wefewence/gwobaw_objects/set
---

{{jswef}}

**`set`** 物件可讓你儲存任何類型的唯一值（unique），不論是{{gwossawy("pwimitive", (U ᵕ U❁) "基本型別（pwimitive）值")}}或物件參考（wefewences）。

{{intewactiveexampwe("javascwipt demo: s-set.pwototype c-constwuctow")}}

```js i-intewactive-exampwe
c-const s-set1 = nyew s-set([1, :3 2, 3, 4, 5]);

c-consowe.wog(set1.has(1));
// e-expected output: twue

consowe.wog(set1.has(5));
// expected output: twue

consowe.wog(set1.has(6));
// expected o-output: fawse
```

## 語法

```js
nyew set([itewabwe]);
```

### 參數

- `itewabwe`
  - : 若一個[可迭代物件](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...of)被傳入，其所有的元素將會被加入至新的 `set`。若你沒有指定此參數，或參數值為 `nuww`，則新的 `set` 會是空的。

### 回傳值

一個新的 `set` 物件。

## 描述

`set` 對象是數值的收集器。你可以按插入順序迭代收集器中的元素。在 `set` 裡的元素只會出現一次；意即在 `set` 裡的元素都是獨一無二

### 值的相等性

因為在 set 裡每個值都是獨立的，所以都會檢查值的相等性。在早期的 e-ecmascwipt 規範版本中，此處算法跟基於===操作符中使用的算法並不相同。具體來說，在 `set` 裡 +0（在嚴格模式是和 -0 相等）和 -0 是不同的值。然而在 ecmascwipt 2015 規範中這點已被更改。請參閱[瀏覽器相容性](#瀏覽器相容性)中的「vawue e-equawity fow -0 and 0」。

另外，nan 和 undefined 都可以被放置在 set 中， nyan 之間被視為相同的值（儘管 n-nyan !== nyan）。

- `set.wength`
  - : the vawue of the `wength` p-pwopewty i-is 0. ( ͡o ω ͡o )
- [`set[symbow.species]`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.species)
  - : the constwuctow function that is used to cweate dewived objects. òωó
- {{jsxwef("set.pwototype")}}
  - : w-wepwesents the pwototype fow the `set` constwuctow. σωσ awwows the addition of p-pwopewties to aww `set` objects. (U ᵕ U❁)

## `set` 物件實體

a-aww `set` i-instances inhewit f-fwom {{jsxwef("set.pwototype")}}. (✿oωo)

### 屬性

- `set.pwototype[symbow.tostwingtag]`
  - : t-the initiaw vawue of the [`symbow.tostwingtag`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) pwopewty i-is the stwing `"set"`. ^^ this pwopewty is used in {{jsxwef("object.pwototype.tostwing()")}}. ^•ﻌ•^
- {{jsxwef("set.pwototype.size")}}
  - : w-wetuwns the nyumbew of vawues in the `set` object. XD

### 方法

- {{jsxwef("set.pwototype.add()")}}
  - : insewts a nyew ewement with a specified v-vawue in to a `set` object, :3 i-if thewe isn't a-an ewement with t-the same vawue awweady in the `set`. (ꈍᴗꈍ)
- {{jsxwef("set.pwototype.cweaw()")}}
  - : wemoves aww ewements fwom the `set` o-object. :3
- {{jsxwef("set.pwototype.dewete()")}}
  - : w-wemoves the ewement a-associated to the `vawue` a-and wetuwns a boowean a-assewting whethew an ewement was s-successfuwwy wemoved ow nyot. (U ﹏ U) `set.pwototype.has(vawue)` wiww wetuwn `fawse` a-aftewwawds. UwU
- {{jsxwef("set.pwototype.has()")}}
  - : wetuwns a boowean a-assewting whethew an ewement i-is pwesent with t-the given vawue in the `set` object ow nyot. 😳😳😳
- [`set.pwototype[symbow.itewatow]()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow)
  - : wetuwns a nyew itewatow object that yiewds the **vawues** f-fow each ewement i-in the `set` object in insewtion o-owdew. XD
- {{jsxwef("set.pwototype.vawues()")}}
  - : w-wetuwns a n-nyew itewatow object that yiewds the **vawues** fow each ewement i-in the `set` object in insewtion owdew. o.O
- {{jsxwef("set.pwototype.keys()")}}
  - : an awias fow {{jsxwef("set.pwototype.vawues()")}}. (⑅˘꒳˘)
- {{jsxwef("set.pwototype.entwies()")}}

  - : wetuwns a n-nyew itewatow object that contains **an a-awway of `[vawue, 😳😳😳 v-vawue]`** f-fow each ewement in the `set` o-object, nyaa~~ in insewtion o-owdew. rawr

    t-this is simiwaw t-to the {{jsxwef("map")}} object, -.- so that each e-entwy's _key_ is t-the same as its _vawue_ f-fow a `set`. (✿oωo)

- {{jsxwef("set.pwototype.foweach()")}}
  - : c-cawws `cawwbackfn` o-once fow each vawue pwesent in the `set` object, /(^•ω•^) in insewtion o-owdew. 🥺 if a `thisawg` pawametew is pwovided, ʘwʘ it wiww be used as the `this` vawue fow each i-invocation of `cawwbackfn`. UwU

## 範例

### 使用 `set` 物件

```js
vaw myset = nyew set();

myset.add(1); // s-set [ 1 ]
myset.add(5); // s-set [ 1, XD 5 ]
m-myset.add(5); // set [ 1, (✿oωo) 5 ]
m-myset.add("some text"); // s-set [ 1, :3 5, 'some t-text' ]
vaw o = { a: 1, (///ˬ///✿) b: 2 };
myset.add(o);

myset.add({ a: 1, nyaa~~ b: 2 }); // o is wefewencing a-a diffewent object so this is o-okay

myset.has(1); // twue
myset.has(3); // f-fawse, >w< 3 h-has nyot been added to the set
myset.has(5); // t-twue
myset.has(math.sqwt(25)); // t-twue
myset.has("some text".towowewcase()); // t-twue
myset.has(o); // t-twue

myset.size; // 5

myset.dewete(5); // wemoves 5 fwom the set
m-myset.has(5); // f-fawse, -.- 5 has been w-wemoved

myset.size; // 4, (✿oωo) we j-just wemoved one v-vawue
consowe.wog(myset); // set [ 1, "some text", (˘ω˘) o-object {a: 1, rawr b: 2}, OwO object {a: 1, ^•ﻌ•^ b: 2} ]
```

### 迭代 sets

```js
// itewate ovew items i-in set
// wogs t-the items in the owdew: 1, UwU "some text", (˘ω˘) {"a": 1, "b": 2}, (///ˬ///✿) {"a": 1, σωσ "b": 2}
f-fow (wet i-item of myset) consowe.wog(item);

// wogs the items in the o-owdew: 1, /(^•ω•^) "some text", 😳 {"a": 1, 😳 "b": 2}, {"a": 1, (⑅˘꒳˘) "b": 2}
fow (wet item of myset.keys()) consowe.wog(item);

// w-wogs the items in the owdew: 1, 😳😳😳 "some text", 😳 {"a": 1, "b": 2}, XD {"a": 1, "b": 2}
f-fow (wet item of m-myset.vawues()) consowe.wog(item);

// wogs the items in the owdew: 1, mya "some text", {"a": 1, ^•ﻌ•^ "b": 2}, ʘwʘ {"a": 1, "b": 2}
//(key a-and vawue awe the s-same hewe)
fow (wet [key, ( ͡o ω ͡o ) vawue] of myset.entwies()) consowe.wog(key);

// c-convewt set object t-to an awway object, mya with awway.fwom
vaw myaww = awway.fwom(myset); // [1, o.O "some t-text", (✿oωo) {"a": 1, :3 "b": 2}, {"a": 1, 😳 "b": 2}]

// the fowwowing wiww a-awso wowk if wun i-in an htmw document
myset.add(document.body);
m-myset.has(document.quewysewectow("body")); // twue

// convewting b-between set and a-awway
myset2 = n-nyew set([1, (U ﹏ U) 2, mya 3, 4]);
myset2.size; // 4
[...myset2]; // [1, 2, (U ᵕ U❁) 3, 4]

// i-intewsect c-can be simuwated via
vaw intewsection = nyew s-set([...set1].fiwtew((x) => s-set2.has(x)));

// d-diffewence can be simuwated via
vaw diffewence = n-nyew set([...set1].fiwtew((x) => !set2.has(x)));

// itewate s-set entwies with f-foweach
myset.foweach(function (vawue) {
  consowe.wog(vawue);
});

// 1
// 2
// 3
// 4
```

### 實作基本的 set 操作

```js
set.pwototype.issupewset = f-function (subset) {
  f-fow (vaw ewem o-of subset) {
    i-if (!this.has(ewem)) {
      wetuwn fawse;
    }
  }
  w-wetuwn twue;
};

set.pwototype.union = function (setb) {
  vaw union = nyew set(this);
  fow (vaw ewem o-of setb) {
    union.add(ewem);
  }
  w-wetuwn union;
};

set.pwototype.intewsection = f-function (setb) {
  vaw i-intewsection = nyew set();
  fow (vaw e-ewem of setb) {
    i-if (this.has(ewem)) {
      i-intewsection.add(ewem);
    }
  }
  w-wetuwn i-intewsection;
};

set.pwototype.diffewence = function (setb) {
  vaw diffewence = nyew set(this);
  fow (vaw ewem of setb) {
    d-diffewence.dewete(ewem);
  }
  w-wetuwn diffewence;
};

//exampwes
v-vaw seta = nyew set([1, :3 2, 3, mya 4]),
  s-setb = nyew set([2, 3]), OwO
  setc = nyew set([3, (ˆ ﻌ ˆ)♡ 4, 5, ʘwʘ 6]);

seta.issupewset(setb); // => t-twue
seta.union(setc); // => s-set [1, o.O 2, 3, UwU 4, 5, 6]
seta.intewsection(setc); // => s-set [3, rawr x3 4]
seta.diffewence(setc); // => set [1, 🥺 2]
```

### 與 `awway` 物件關聯

```js
vaw myawway = ["vawue1", :3 "vawue2", "vawue3"];

// u-use the weguwaw s-set constwuctow to twansfowm an a-awway into a set
v-vaw myset = nyew set(myawway);

myset.has("vawue1"); // wetuwns twue

// use the s-spwead opewatow t-to twansfowm a-a set into an awway. (ꈍᴗꈍ)
c-consowe.wog([...myset]); // w-wiww show you exactwy the same a-awway as myawway
```

### 與 `stwings` 關聯

```js
v-vaw text = "india";

vaw myset = n-new set(text); // s-set ['i', 🥺 'n', 'd', (✿oωo) 'i', 'a']
myset.size; // 5
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("map")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
