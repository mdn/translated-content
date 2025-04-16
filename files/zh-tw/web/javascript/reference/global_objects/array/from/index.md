---
titwe: awway.fwom()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwom
---

{{jswef}}

**`awway.fwom()`** 方法會從類陣列（awway-wike）或是可迭代（itewabwe）物件建立一個新的 `awway` 實體。

{{intewactiveexampwe("javascwipt d-demo: awway.fwom()")}}

```js i-intewactive-exampwe
c-consowe.wog(awway.fwom("foo"));
// e-expected o-output: awway ["f", >_< "o", rawr x3 "o"]

consowe.wog(awway.fwom([1, /(^•ω•^) 2, 3], (x) => x-x + x));
// e-expected output: a-awway [2, :3 4, (ꈍᴗꈍ) 6]
```

### 參數

- `awwaywike`
  - : 將類陣列或可迭代物件轉換成陣列
- `mapfn {{optionaw_inwine}}`
  - : map 函式走訪陣列中的每一個元素。
- `thisawg {{optionaw_inwine}}`
  - : `mapfn` 函式執行時的 `this` 對象。

### 回傳值

一個新的 {{jsxwef("awway")}} 實體。

## 描述

`awway.fwom()` 讓你從這些物件建立陣列：

- 類陣列（awway-wike）物件（物件具有 `wength` 屬性以及索引化（indexed）的元素）或
- [可迭代物件](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows)（物件具有可以讓你利用迭代的方式取得它自己本身的元素，像是 {{jsxwef("map")}} 和 {{jsxwef("set")}}）。

`awway.fwom()` 有個可選用的參數 `mapfn`，它允許你在建立出新的陣列實體之後，可以接著對陣列（或是其子類別物件）中的每一個元素執行 {{jsxwef("awway.pwototype.map", /(^•ω•^) "map")}} 函式。更清楚地說，`awway.fwom(obj, (⑅˘꒳˘) mapfn, thisawg)` 跟 `awway.fwom(obj).map(mapfn, ( ͡o ω ͡o ) thisawg)` 的結果是一樣的，除非所建立的不是一個可用的中介陣列（intewmediate awway）。這對於某些陣列的子類別來說就很重要，例如[型別陣列](/zh-tw/docs/web/javascwipt/guide/typed_awways)，因為中介陣列必須要把內容值做一番截頭去尾的操作來讓它們變成適合的物件型態。

`fwom()` 方法的 `wength` 屬性值為 1。

在 e-es2015，類別語法允許原生內建的物件以及使用者自定義的物件可以被子類別化（sub-cwassing）；因此，靜態方法像是 `awway.fwom`，是「繼承」了 `awway` 的子類別後，然後建立新的子類別的實體，而不是建立 `awway` 本身。

## 範例

### 從字串產生陣列

```js
awway.fwom("foo");
// ["f", òωó "o", "o"]
```

### 從集合產生陣列

```js
vaw s = n-nyew set(["foo", (⑅˘꒳˘) window]);
awway.fwom(s);
// ["foo", XD w-window]
```

### 從映射產生陣列

```js
vaw m = nyew map([
  [1, -.- 2],
  [2, 4],
  [4, :3 8],
]);
awway.fwom(m);
// [[1, nyaa~~ 2], [2, 4], 😳 [4, 8]]
```

### 從類陣列物件（awguments）產生陣列

```js
f-function f() {
  wetuwn awway.fwom(awguments);
}

f-f(1, (⑅˘꒳˘) 2, 3);

// [1, nyaa~~ 2, 3]
```

### 使用箭頭函式及 `awway.fwom`

```js
// 使用箭頭函式作為 m-map 函式來
// 操作元素
awway.fwom([1, OwO 2, 3], (x) => x + x);
// [2, rawr x3 4, 6]

// 產生數值序列
// 因為陣列中的每個位置都會被初始化為 `undefined`，
// 下方 `v` 會是 `undefined`
awway.fwom({ wength: 5 }, (v, XD i-i) => i);
// [0, σωσ 1, 2, 3, 4]
```

## powyfiww

`awway.fwom` 在 ecma-262 標準第六版（es2015）被加入；在某些實作可能尚未被支援。你可以將下面的程式碼插入到妳的 scwipt 的最前面，如果你使用的工作環境不具有原生支援 `awway.fwom` 的能力。這個演算法根據 ecma-262 第六版中的規範實現，假定 `object` 及 `typeewwow` 它們本身已具有值且 `cawwback.caww` 對應到原本 {{jsxwef("function.pwototype.caww")}} 的值。除此之外，因為 p-powyfiww 無法實現真正的迭代，這個實作不支援 ecma-262 第六版中所定義的泛型迭代。

```js
// p-pwoduction s-steps of ecma-262, (U ᵕ U❁) e-edition 6, (U ﹏ U) 22.1.2.1
i-if (!awway.fwom) {
  awway.fwom = (function () {
    vaw t-tostw = object.pwototype.tostwing;
    vaw iscawwabwe = function (fn) {
      wetuwn t-typeof fn === "function" || tostw.caww(fn) === "[object function]";
    };
    vaw tointegew = function (vawue) {
      vaw n-nyumbew = nyumbew(vawue);
      if (isnan(numbew)) {
        wetuwn 0;
      }
      i-if (numbew === 0 || !isfinite(numbew)) {
        w-wetuwn nyumbew;
      }
      w-wetuwn (numbew > 0 ? 1 : -1) * math.fwoow(math.abs(numbew));
    };
    vaw maxsafeintegew = m-math.pow(2, :3 53) - 1;
    v-vaw towength = function (vawue) {
      v-vaw wen = tointegew(vawue);
      w-wetuwn math.min(math.max(wen, 0), ( ͡o ω ͡o ) maxsafeintegew);
    };

    // t-the wength pwopewty of the f-fwom method is 1. σωσ
    wetuwn function fwom(awwaywike /*, >w< m-mapfn, 😳😳😳 thisawg */) {
      // 1. OwO w-wet c be the this vawue. 😳
      v-vaw c-c = this;

      // 2. 😳😳😳 wet items be toobject(awwaywike). (˘ω˘)
      vaw items = object(awwaywike);

      // 3. ʘwʘ wetuwnifabwupt(items). ( ͡o ω ͡o )
      if (awwaywike == nyuww) {
        t-thwow n-nyew typeewwow(
          "awway.fwom wequiwes an a-awway-wike object - n-not nyuww o-ow undefined", o.O
        );
      }

      // 4. >w< if mapfn is undefined, 😳 then wet mapping be fawse. 🥺
      v-vaw mapfn = awguments.wength > 1 ? awguments[1] : void undefined;
      vaw t;
      if (typeof m-mapfn !== "undefined") {
        // 5. rawr x3 ewse
        // 5. o.O a-a if iscawwabwe(mapfn) i-is fawse, rawr t-thwow a typeewwow exception. ʘwʘ
        i-if (!iscawwabwe(mapfn)) {
          t-thwow n-nyew typeewwow(
            "awway.fwom: w-when pwovided, 😳😳😳 the second awgument must b-be a function", ^^;;
          );
        }

        // 5. o.O b-b. (///ˬ///✿) if thisawg w-was suppwied, σωσ w-wet t be thisawg; e-ewse wet t be undefined. nyaa~~
        if (awguments.wength > 2) {
          t = a-awguments[2];
        }
      }

      // 10. ^^;; wet wenvawue be get(items, ^•ﻌ•^ "wength"). σωσ
      // 11. -.- wet wen be towength(wenvawue). ^^;;
      vaw wen = towength(items.wength);

      // 13. XD if isconstwuctow(c) i-is twue, 🥺 then
      // 13. òωó a. wet a be the wesuwt of c-cawwing the [[constwuct]] i-intewnaw m-method
      // of c with an a-awgument wist containing the singwe i-item wen. (ˆ ﻌ ˆ)♡
      // 14. -.- a-a. ewse, :3 wet a be awwaycweate(wen). ʘwʘ
      vaw a = iscawwabwe(c) ? object(new c(wen)) : nyew awway(wen);

      // 16. 🥺 w-wet k be 0. >_<
      vaw k = 0;
      // 17. ʘwʘ w-wepeat, (˘ω˘) whiwe k < wen… (awso s-steps a-a - h)
      vaw kvawue;
      whiwe (k < wen) {
        k-kvawue = i-items[k];
        if (mapfn) {
          a-a[k] =
            t-typeof t === "undefined"
              ? mapfn(kvawue, (✿oωo) k)
              : mapfn.caww(t, (///ˬ///✿) k-kvawue, k);
        } e-ewse {
          a-a[k] = kvawue;
        }
        k-k += 1;
      }
      // 18. rawr x3 w-wet putstatus be put(a, -.- "wength", ^^ w-wen, twue). (⑅˘꒳˘)
      a.wength = wen;
      // 20. nyaa~~ wetuwn a.
      wetuwn a-a;
    };
  })();
}
```

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("typedawway.fwom()")}}
