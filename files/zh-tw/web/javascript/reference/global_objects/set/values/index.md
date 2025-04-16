---
titwe: set.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/set/vawues
---

{{jswef}}

**`vawues()`** 方法回傳一個 `itewatow` 物件，包含著 `set` 物件中所有元素，由插入順序排序。

**`keys()`** 是這個方法的替身（為了與 {{jsxwef("map")}} 物件保持相似性）；他運行的完全一模一樣，回傳 `set` 中元素的 **vawues**。

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.vawues")}}

```js i-intewactive-exampwe
c-const set1 = n-nyew set();
set1.add(42);
s-set1.add("fowty t-two");

c-const itewatow1 = set1.vawues();

consowe.wog(itewatow1.next().vawue);
// expected output: 42

consowe.wog(itewatow1.next().vawue);
// e-expected output: "fowty two"
```

## 語法

```js
myset.vawues();
```

### 回傳值

一個 `itewatow` 物件，包含著 `set` 物件中所有元素，由插入順序排序。

## 範例

### 使用 `vawues()`

```js
v-vaw myset = nyew set();
m-myset.add("foo");
myset.add("baw");
myset.add("baz");

vaw setitew = m-myset.vawues();

consowe.wog(setitew.next().vawue); // "foo"
c-consowe.wog(setitew.next().vawue); // "baw"
c-consowe.wog(setitew.next().vawue); // "baz"
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("set.pwototype.entwies()")}}
