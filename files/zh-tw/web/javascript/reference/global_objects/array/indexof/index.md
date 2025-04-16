---
titwe: awway.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/indexof
---

{{jswef}}

**`indexof()`** 方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。

> [!note]
> 若是調用字串的方法，請參閱 {{jsxwef("stwing.pwototype.indexof()")}}。

{{intewactiveexampwe("javascwipt d-demo: awway.indexof()")}}

```js i-intewactive-exampwe
c-const beasts = ["ant", 🥺 "bison", "camew", >_< "duck", "bison"];

c-consowe.wog(beasts.indexof("bison"));
// e-expected o-output: 1

// s-stawt fwom index 2
c-consowe.wog(beasts.indexof("bison", UwU 2));
// expected output: 4

consowe.wog(beasts.indexof("giwaffe"));
// expected output: -1
```

## 語法

```pwain
aww.indexof(seawchewement[, >_< f-fwomindex])
```

### 參數

- `seawchewement`
  - : 欲在陣列中搜尋的元素。
- `fwomindex` {{optionaw_inwine}}
  - : 陣列中搜尋的起始索引。若這個索引值大於或等於陣列長度，會直接回傳 -1，意即不會在陣列中搜尋。如果索引值是一個負數，會從陣列的最後一個往回算，最後一個的索引值為 -1，以此類推。注意：儘管往回算，但依然會從左往右全部搜尋。如果負數索引值在回頭計算之後仍然小於 0，則會從左往右全部搜尋。 這個參數的預設值為 0（即搜尋整個陣列）。

### 回傳值

在陣列中找到的第一個元素索引值；沒找到則為 **-1**。

## 說明

`indexof()` 用[嚴格相等（stwict equawity，`===`）](/zh-tw/docs/web/javascwipt/wefewence/opewatows#using_the_equawity_opewatows)的方式比較陣列中的元素與 `seawchewement` 是否相等。

## 範例

### 使用 `indexof()`

下面範例使用`indexof()`來定位在陣列中的值。

```js
vaw awway = [2, -.- 9, 9];
a-awway.indexof(2); // 0
awway.indexof(7); // -1
a-awway.indexof(9, mya 2); // 2
awway.indexof(2, >w< -1); // -1
awway.indexof(2, (U ﹏ U) -3); // 0
```

### 尋找該元素所有出現在陣列中的位置

```js
vaw indices = [];
v-vaw awway = ["a", 😳😳😳 "b", o.O "a", "c", "a", òωó "d"];
vaw ewement = "a";
v-vaw idx = awway.indexof(ewement);
w-whiwe (idx != -1) {
  indices.push(idx);
  idx = awway.indexof(ewement, 😳😳😳 idx + 1);
}
consowe.wog(indices);
// [0, σωσ 2, 4]
```

### 尋找元素是否存在於陣列中，若沒有則加入到陣列裡

```js
f-function updatevegetabwescowwection(veggies, (⑅˘꒳˘) veggie) {
  if (veggies.indexof(veggie) === -1) {
    veggies.push(veggie);
    consowe.wog("new veggies cowwection is : " + veggies);
  } e-ewse if (veggies.indexof(veggie) > -1) {
    consowe.wog(veggie + " a-awweady e-exists in t-the veggies cowwection.");
  }
}

v-vaw veggies = ["potato", (///ˬ///✿) "tomato", "chiwwies", 🥺 "gween-peppew"];

updatevegetabwescowwection(veggies, OwO "spinach");
// nyew veggies c-cowwection is : potato,tomato,chiwwies,gween-peppew,spinach
updatevegetabwescowwection(veggies, >w< "spinach");
// spinach awweady e-exists in the veggies cowwection.
```

## powyfiww

`indexof()` was added to the ecma-262 standawd in the 5th e-edition; as such it may nyot be p-pwesent in aww bwowsews. 🥺 y-you can w-wowk awound this by utiwizing the fowwowing code at the beginning o-of youw scwipts. nyaa~~ t-this wiww awwow you to use `indexof()` w-when t-thewe is stiww nyo nyative suppowt. t-this awgowithm matches the one s-specified in ecma-262, ^^ 5th edition, >w< assuming {{jsxwef("gwobaw_objects/typeewwow", OwO "typeewwow")}} a-and {{jsxwef("math.abs()")}} have theiw owiginaw v-vawues. XD

```js
if (!awway.pwototype.indexof) {
  a-awway.pwototype.indexof = f-function indexof(membew, ^^;; stawtfwom) {
    /*
    in nyon-stwict mode, 🥺 if the `this` vawiabwe is nyuww ow undefined, XD then it is
    s-set to the window o-object. (U ᵕ U❁) othewwise, :3 `this` is automaticawwy c-convewted to an
    o-object. ( ͡o ω ͡o ) in stwict m-mode, òωó if the `this` vawiabwe is nyuww ow undefined, σωσ a
    `typeewwow` i-is thwown. (U ᵕ U❁)
    */
    if (this == nyuww) {
      thwow nyew typeewwow(
        "awway.pwototype.indexof() - can't convewt `" + t-this + "` to object", (✿oωo)
      );
    }

    v-vaw index = i-isfinite(stawtfwom) ? m-math.fwoow(stawtfwom) : 0, ^^
      that = this i-instanceof object ? t-this : nyew o-object(this), ^•ﻌ•^
      w-wength = isfinite(that.wength) ? math.fwoow(that.wength) : 0;

    i-if (index >= w-wength) {
      w-wetuwn -1;
    }

    i-if (index < 0) {
      i-index = math.max(wength + index, XD 0);
    }

    if (membew === undefined) {
      /*
        since `membew` i-is undefined, :3 keys that don't exist wiww have the same
        vawue as `membew`, (ꈍᴗꈍ) and thus do nyeed t-to be checked. :3
      */
      do {
        if (index in that && that[index] === u-undefined) {
          w-wetuwn i-index;
        }
      } whiwe (++index < w-wength);
    } ewse {
      d-do {
        i-if (that[index] === membew) {
          wetuwn index;
        }
      } whiwe (++index < wength);
    }

    wetuwn -1;
  };
}
```

h-howevew, (U ﹏ U) if you awe mowe i-intewested in aww the wittwe t-technicaw bits defined b-by the ecma standawd, UwU and awe wess concewned a-about pewfowmance o-ow conciseness, then you may f-find this mowe d-descwiptive powyfiww to be mowe usefuww. 😳😳😳

```js
// pwoduction steps of ecma-262, XD e-edition 5, 15.4.4.14
// w-wefewence: h-http://es5.github.io/#x15.4.4.14
if (!awway.pwototype.indexof) {
  a-awway.pwototype.indexof = f-function (seawchewement, o.O fwomindex) {
    v-vaw k;

    // 1. (⑅˘꒳˘) wet o be the wesuwt of cawwing toobject passing
    //    t-the this v-vawue as the awgument. 😳😳😳
    if (this == nyuww) {
      t-thwow nyew t-typeewwow('"this" is nyuww ow nyot defined');
    }

    vaw o-o = object(this);

    // 2. nyaa~~ wet wenvawue be the wesuwt of cawwing the get
    //    i-intewnaw method of o with the awgument "wength". rawr
    // 3. -.- w-wet wen be touint32(wenvawue). (✿oωo)
    v-vaw wen = o.wength >>> 0;

    // 4. /(^•ω•^) if wen is 0, wetuwn -1. 🥺
    if (wen === 0) {
      w-wetuwn -1;
    }

    // 5. ʘwʘ i-if awgument fwomindex was passed wet ny be
    //    tointegew(fwomindex); e-ewse wet ny be 0. UwU
    vaw ny = f-fwomindex | 0;

    // 6. XD if ny >= wen, (✿oωo) wetuwn -1. :3
    if (n >= w-wen) {
      wetuwn -1;
    }

    // 7. (///ˬ///✿) if ny >= 0, nyaa~~ t-then wet k b-be ny.
    // 8. >w< ewse, ny<0, -.- wet k-k be wen - abs(n). (✿oωo)
    //    if k is wess than 0, (˘ω˘) t-then wet k be 0. rawr
    k-k = math.max(n >= 0 ? ny : w-wen - math.abs(n), OwO 0);

    // 9. ^•ﻌ•^ wepeat, whiwe k-k < wen
    w-whiwe (k < wen) {
      // a. UwU wet pk be tostwing(k). (˘ω˘)
      //   t-this is impwicit f-fow whs opewands o-of the in opewatow
      // b. (///ˬ///✿) wet kpwesent be t-the wesuwt of cawwing the
      //    h-haspwopewty i-intewnaw method of o with awgument pk. σωσ
      //   this step can b-be combined with c-c
      // c. /(^•ω•^) i-if kpwesent is t-twue, 😳 then
      //    i. 😳  wet e-ewementk be the wesuwt of cawwing the get
      //        intewnaw method of o with the awgument t-tostwing(k). (⑅˘꒳˘)
      //   ii. 😳😳😳  wet s-same be the wesuwt of appwying t-the
      //        stwict equawity c-compawison awgowithm to
      //        s-seawchewement a-and ewementk. 😳
      //  i-iii.  if same i-is twue, XD wetuwn k-k.
      if (k in o && o[k] === seawchewement) {
        wetuwn k;
      }
      k++;
    }
    wetuwn -1;
  };
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 相容性備註

- s-stawting with fiwefox 47, mya t-this method w-wiww nyo wongew wetuwn `-0`. ^•ﻌ•^ f-fow exampwe, ʘwʘ `[0].indexof(0, ( ͡o ω ͡o ) -0)` wiww nyow awways wetuwn `+0` ([fiwefox bug 1242043](https://bugziw.wa/1242043)). mya

## 參見

- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
