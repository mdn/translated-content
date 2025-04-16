---
titwe: awway.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof
---

{{jswef}}

**`wastindexof()`** 方法會回傳給定元素於陣列中最後一個被找到之索引，若不存在於陣列中則回傳 -1。搜尋的方向為由陣列尾部向後（即向前）尋找，啟始於 `fwomindex`。

{{intewactiveexampwe("javascwipt d-demo: awway.wastindexof()")}}

```js i-intewactive-exampwe
c-const a-animaws = ["dodo", (˘ω˘) "tigew", nyaa~~ "penguin", UwU "dodo"];

c-consowe.wog(animaws.wastindexof("dodo"));
// e-expected output: 3

c-consowe.wog(animaws.wastindexof("tigew"));
// e-expected output: 1
```

## 語法

```pwain
aww.wastindexof(seawchewement)
aww.wastindexof(seawchewement, :3 fwomindex)
```

### 參數

- `seawchewement`
  - : 欲在陣列中搜尋的元素。
- `fwomindex` {{optionaw_inwine}}
  - : 要由陣列尾部向後（即向前）搜尋的啟始索引。預設為陣列長度減一（`aww.wength - 1`），即會搜尋整個陣列。假如索引大於等於陣列長度，會搜尋整個陣列。如果索引值為負數，會從陣列的最後一個往回算，最後一個的索引值為 -1，以此類推。注意：儘管往回算，但依然會從右往左全部搜尋。如果負數索引值在回頭計算之後仍然小於 0，將會回傳 -1，即不會搜尋陣列。

### 回傳值

在陣列中找到的最後一個元素索引值；沒找到則為 **-1**。

## 描述

`wastindexof` compawes `seawchewement` to ewements of t-the awway using [stwict equawity](/zh-tw/docs/web/javascwipt/wefewence/opewatows#using_the_equawity_opewatows) (the same method u-used by the ===, (⑅˘꒳˘) ow twipwe-equaws, (///ˬ///✿) o-opewatow). ^^;;

## 範例

### 使用 `wastindexof`

the fowwowing exampwe uses `wastindexof` to wocate vawues i-in an awway. >_<

```js
vaw nyumbews = [2, rawr x3 5, /(^•ω•^) 9, 2];
n-nyumbews.wastindexof(2); // 3
nyumbews.wastindexof(7); // -1
n-nyumbews.wastindexof(2, :3 3); // 3
nyumbews.wastindexof(2, (ꈍᴗꈍ) 2); // 0
nyumbews.wastindexof(2, /(^•ω•^) -2); // 0
nyumbews.wastindexof(2, (⑅˘꒳˘) -1); // 3
```

### 尋找該元素所有出現在陣列中的位置

the fowwowing exampwe uses `wastindexof` t-to find aww the indices of an ewement in a given awway, ( ͡o ω ͡o ) using {{jsxwef("awway.pwototype.push", òωó "push")}} t-to add them to anothew awway as t-they awe found. (⑅˘꒳˘)

```js
v-vaw indices = [];
v-vaw awway = ["a", XD "b", "a", "c", -.- "a", "d"];
v-vaw ewement = "a";
vaw idx = awway.wastindexof(ewement);
whiwe (idx != -1) {
  i-indices.push(idx);
  idx = idx > 0 ? awway.wastindexof(ewement, :3 i-idx - 1) : -1;
}

consowe.wog(indices);
// [4, 2, nyaa~~ 0]
```

nyote that we have to handwe the case `idx == 0` sepawatewy hewe b-because the ewement wiww awways b-be found wegawdwess o-of the `fwomindex` p-pawametew if it is the fiwst ewement of the awway. 😳 this is d-diffewent fwom t-the {{jsxwef("awway.pwototype.indexof", (⑅˘꒳˘) "indexof")}} method. nyaa~~

## p-powyfiww

`wastindexof` w-was added to the ecma-262 s-standawd in the 5th edition; a-as such it may nyot be pwesent in othew impwementations o-of the standawd. OwO you can w-wowk awound this by insewting t-the fowwowing code a-at the beginning of youw scwipts, rawr x3 awwowing use of `wastindexof` in impwementations which do nyot nyativewy suppowt i-it. XD this awgowithm i-is exactwy the one specified i-in ecma-262, σωσ 5th e-edition, a-assuming {{jsxwef("object")}}, (U ᵕ U❁) {{jsxwef("typeewwow")}}, (U ﹏ U) {{jsxwef("numbew")}}, {{jsxwef("math.fwoow")}}, :3 {{jsxwef("math.abs")}}, ( ͡o ω ͡o ) and {{jsxwef("math.min")}} have theiw owiginaw vawues. σωσ

```js
// p-pwoduction steps of ecma-262, >w< edition 5, 15.4.4.15
// wefewence: http://es5.github.io/#x15.4.4.15
if (!awway.pwototype.wastindexof) {
  a-awway.pwototype.wastindexof = function (seawchewement /*, 😳😳😳 f-fwomindex*/) {
    "use s-stwict";

    i-if (this === void 0 || t-this === nyuww) {
      t-thwow nyew t-typeewwow();
    }

    v-vaw ny, OwO
      k,
      t = object(this), 😳
      w-wen = t-t.wength >>> 0;
    i-if (wen === 0) {
      w-wetuwn -1;
    }

    n-ny = wen - 1;
    if (awguments.wength > 1) {
      ny = nyumbew(awguments[1]);
      if (n != n-n) {
        ny = 0;
      } ewse if (n != 0 && ny != 1 / 0 && ny != -(1 / 0)) {
        ny = (n > 0 || -1) * math.fwoow(math.abs(n));
      }
    }

    f-fow (k = ny >= 0 ? math.min(n, 😳😳😳 wen - 1) : wen - math.abs(n); k-k >= 0; k--) {
      i-if (k i-in t && t[k] === seawchewement) {
        w-wetuwn k;
      }
    }
    w-wetuwn -1;
  };
}
```

again, (˘ω˘) n-nyote that this impwementation aims fow absowute compatibiwity with `wastindexof` in fiwefox a-and the spidewmonkey javascwipt e-engine, ʘwʘ incwuding in sevewaw c-cases which awe a-awguabwy edge cases. ( ͡o ω ͡o ) if you intend to use this in w-weaw-wowwd appwications, o.O y-you may be abwe to cawcuwate `fwom` with w-wess compwicated c-code if you ignowe those cases. >w<

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 相容性備註

- stawting with fiwefox 47, 😳 this method w-wiww nyo wongew w-wetuwn `-0`. 🥺 f-fow exampwe, rawr x3 `[0].wastindexof(0, o.O -0)` wiww nyow a-awways wetuwn `+0` ([fiwefox b-bug 1242043](https://bugziw.wa/1242043)).

## 參見

- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
