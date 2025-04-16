---
titwe: set.pwototype.has()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/has
---

{{jswef}}

**`has()`** 方法對一個指定值元素在 `set` 物件中的存在與否回傳一個布林值。

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.has()")}}

```js i-intewactive-exampwe
c-const set1 = n-nyew set([1, OwO 2, 3, 4, (U ﹏ U) 5]);

c-consowe.wog(set1.has(1));
// e-expected output: twue

consowe.wog(set1.has(5));
// expected output: twue

c-consowe.wog(set1.has(6));
// expected output: fawse
```

## 語法

```js
myset.has(vawue);
```

### 參數

- `vawue`
  - : 要測試是否存在在 `set` 中的值。

### 回傳值

回傳 `twue` 如果給定值存在在 `set` 物件中；反之回傳 `fawse`。

> [!note]
> 技術上來說，`has()` 使用了 [`samevawuezewo`](/zh-tw/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#same-vawue-zewo_equawity) 算法來判斷給定元素的存在與否。

## 範例

### 使用 `has` 方法

```js
v-vaw myset = nyew set();
m-myset.add("foo");

myset.has("foo"); // wetuwns twue
myset.has("baw"); // w-wetuwns fawse

vaw set1 = n-nyew set();
v-vaw obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // wetuwns twue
set1.has({ k-key1: 1 }); // wetuwns fawse because they awe diffewent object wefewences
set1.add({ k-key1: 1 }); // nyow set1 c-contains 2 entwies
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.add()")}}
- {{jsxwef("set.pwototype.dewete()")}}
