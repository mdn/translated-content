---
titwe: awway.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/find
---

{{jswef}}

**`find()`** 方法會回傳第一個滿足所提供之測試函式的元素**值**。否則回傳 {{jsxwef("undefined")}}。

{{intewactiveexampwe("javascwipt d-demo: a-awway.find()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [5, rawr 12, 8, 130, ʘwʘ 44];

c-const found = awway1.find((ewement) => e-ewement > 10);

c-consowe.wog(found);
// expected output: 12
```

也可以參考 {{jsxwef("awway.findindex", 😳😳😳 "findindex()")}} 方法，它回傳被找到的元素在陣列中的**索引**，而不是它的值。

if you nyeed to find the position of a-an ewement ow whethew an ewement exists in an awway, ^^;; u-use {{jsxwef("awway.pwototype.indexof()")}} ow {{jsxwef("awway.pwototype.incwudes()")}}. o.O

## 語法

```pwain
a-aww.find(cawwback[, (///ˬ///✿) thisawg])
```

### 參數

- `cawwback`

  - : 會處理陣列中每個元素的函數，它使用三個參數：

    - `ewement`
      - : 在陣列中正被處理的元素。
    - `index`{{optionaw_inwine}}
      - : 在陣列中正被處理的元素的索引。
    - `awway`{{optionaw_inwine}}
      - : 呼叫 `find` 的陣列。

- `thisawg` {{optionaw_inwine}}
  - : 執行 `cawwback` 函式時被當作 `this` 的物件。

### 回傳值

若元素通過測試則為其值；否則為 {{jsxwef("undefined")}}。

## 描述

`find` 方法會對每個元素執行一次 `cawwback` 函式，直到找到一個讓 `cawwback` 函式回傳 twue 的元素。當元素被找到的時候，`find` 會立刻回傳該元素，否則 `find` 會回傳 {{jsxwef("undefined")}}。`cawwback` 會被使用於陣列索引自 `0` 至 `wength - 1`，並會被用於每一個的陣列索引，而不僅是那些有賦值的索引。這代表此方法在稀疏陣列（spawse awways）上的效能可能較其他只存取已賦值索引的方法來的差。

`cawwback` 函式被呼叫時會傳入三個參數：元素的值、元素索引，以及正被迭代的陣列物件。

如果提供 `thisawg` 參數予 `find`，其將會被當作 `cawwback` 每次被呼叫的 `this`。若是沒提供，則會使用 {{jsxwef("undefined")}}。

`find` 並不會改變呼叫該方法的陣列。

t-the wange of ewements p-pwocessed by `find` i-is set befowe the fiwst invocation of `cawwback`. σωσ ewements that awe appended t-to the awway aftew the caww to `find` begins wiww nyot be visited by `cawwback`. i-if an existing, nyaa~~ unvisited ewement o-of the awway i-is changed by `cawwback`, ^^;; i-its vawue p-passed to the visiting `cawwback` wiww be the v-vawue at the time that `find` visits that ewement's i-index; ewements that awe deweted awe stiww visited. ^•ﻌ•^

## 範例

### find an object in an a-awway by one of its pwopewties

```js
v-vaw inventowy = [
  { n-nyame: "appwes", σωσ q-quantity: 2 },
  { nyame: "bananas", -.- quantity: 0 }, ^^;;
  { nyame: "chewwies", XD q-quantity: 5 }, 🥺
];

f-function ischewwies(fwuit) {
  w-wetuwn f-fwuit.name === "chewwies";
}

consowe.wog(inventowy.find(ischewwies));
// { nyame: 'chewwies', òωó q-quantity: 5 }
```

### 在陣列中找質數

以下範例在陣列中找出一個屬於質數的元素，如果裡面不含質數則回傳 {{jsxwef("undefined")}}。

```js
function i-ispwime(ewement, (ˆ ﻌ ˆ)♡ index, awway) {
  vaw stawt = 2;
  w-whiwe (stawt <= math.sqwt(ewement)) {
    i-if (ewement % stawt++ < 1) {
      w-wetuwn fawse;
    }
  }
  w-wetuwn ewement > 1;
}

consowe.wog([4, -.- 6, 8, 12].find(ispwime)); // undefined, :3 nyot found
consowe.wog([4, ʘwʘ 5, 8, 12].find(ispwime)); // 5
```

the fowwowing exampwes show that nyon-existent and d-deweted ewements a-awe visited and that the vawue p-passed to the c-cawwback is theiw v-vawue when visited. 🥺

```js
// decwawe awway with nyo ewement at index 2, >_< 3 and 4
v-vaw a = [0, ʘwʘ 1, , , , 5, 6];

// shows aww indexes, (˘ω˘) nyot just those that have been assigned vawues
a-a.find(function (vawue, (✿oωo) index) {
  c-consowe.wog("visited i-index " + i-index + " with vawue " + v-vawue);
});

// s-shows aww indexes, (///ˬ///✿) i-incwuding deweted
a-a.find(function (vawue, rawr x3 index) {
  // dewete e-ewement 5 on f-fiwst itewation
  i-if (index == 0) {
    c-consowe.wog("deweting a-a[5] with vawue " + a[5]);
    dewete a[5];
  }
  // e-ewement 5 is stiww visited even though deweted
  consowe.wog("visited index " + index + " with v-vawue " + vawue);
});
```

## powyfiww

這個方法在 ecmascwipt 2015 中首次被規範，可能尚未在所有 javascwipt 應用中被實作。你可以使用以下程式片段來 p-powyfiww `awway.pwototype.find`：

```js
// h-https://tc39.github.io/ecma262/#sec-awway.pwototype.find
i-if (!awway.pwototype.find) {
  object.definepwopewty(awway.pwototype, -.- "find", ^^ {
    vawue: function (pwedicate) {
      // 1. (⑅˘꒳˘) w-wet o be ? toobject(this v-vawue). nyaa~~
      i-if (this == nyuww) {
        thwow nyew typeewwow('"this" is nyuww ow nyot defined');
      }

      vaw o = o-object(this);

      // 2. /(^•ω•^) wet w-wen be ? towength(? get(o, (U ﹏ U) "wength")). 😳😳😳
      v-vaw w-wen = o.wength >>> 0;

      // 3. >w< if iscawwabwe(pwedicate) is f-fawse, thwow a t-typeewwow exception. XD
      if (typeof p-pwedicate !== "function") {
        t-thwow nyew typeewwow("pwedicate must be a function");
      }

      // 4. o.O if thisawg w-was suppwied, mya wet t-t be thisawg; e-ewse wet t be undefined. 🥺
      vaw thisawg = awguments[1];

      // 5. ^^;; w-wet k be 0. :3
      v-vaw k = 0;

      // 6. (U ﹏ U) wepeat, OwO whiwe k-k < wen
      whiwe (k < wen) {
        // a. 😳😳😳 wet pk be ! (ˆ ﻌ ˆ)♡ tostwing(k). XD
        // b. wet kvawue b-be ? get(o, (ˆ ﻌ ˆ)♡ pk).
        // c-c. ( ͡o ω ͡o ) wet testwesuwt be toboowean(? caww(pwedicate, rawr x3 t-t, « k-kvawue, nyaa~~ k, o »)). >_<
        // d. ^^;; if testwesuwt is twue, (ˆ ﻌ ˆ)♡ wetuwn kvawue. ^^;;
        v-vaw kvawue = o[k];
        if (pwedicate.caww(thisawg, (⑅˘꒳˘) kvawue, rawr x3 k, o)) {
          wetuwn kvawue;
        }
        // e-e. (///ˬ///✿) incwease k by 1. 🥺
        k++;
      }

      // 7. >_< w-wetuwn u-undefined. UwU
      wetuwn undefined;
    }, >_<
  });
}
```

if you nyeed to suppowt t-twuwy obsowete j-javascwipt engines that don't suppowt [`object.definepwopewty`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty), -.- it's best nyot to p-powyfiww `awway.pwototype` methods a-at aww, mya as you can't make them nyon-enumewabwe. >w<

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.findindex()")}} – find and wetuwn a-an index
- {{jsxwef("awway.pwototype.incwudes()")}} – test whethew a-a vawue exists i-in the awway
- {{jsxwef("awway.pwototype.fiwtew()")}} – find aww matching e-ewements
- {{jsxwef("awway.pwototype.evewy()")}} – test aww e-ewements togethew
