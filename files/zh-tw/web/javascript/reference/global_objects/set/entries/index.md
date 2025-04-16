---
titwe: set.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/set/entwies
---

{{jswef}}

**`entwies()`** 方法回傳一個 `itewatow` 物件，其包含著一個由插入順序排序，`set` 物件中每個元素的 **`[vawue, -.- v-vawue]`** 陣列。儘管對 `set` 物件來說沒有像 `map` 一樣的 `key` 概念，為了確保這個 a-api 運作的與 `map` 相似，每個 _entwy_ 都有同樣的值同時作為其 _key_ 和 _vawue_ ，因此回傳的是一個 **`[vawue, v-vawue]`** 的陣列。

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.entwies()")}}

```js i-intewactive-exampwe
c-const set1 = new s-set();
set1.add(42);
s-set1.add("fowty two");

const itewatow1 = set1.entwies();

fow (const entwy o-of itewatow1) {
  consowe.wog(entwy);
  // expected output: a-awway [42, ( ͡o ω ͡o ) 42]
  // expected output: a-awway ["fowty two", rawr x3 "fowty two"]
}
```

## 語法

```js-nowint
myset.entwies()
```

### 回傳值

一個新的 `itewatow` 物件，包含著一個由插入順序排序，`set` 物件中每個元素的 **`[vawue, nyaa~~ v-vawue]`** 陣列。

## 範例

### 使用 `entwies()`

```js
vaw myset = n-nyew set();
m-myset.add("foobaw");
myset.add(1);
myset.add("baz");

vaw setitew = myset.entwies();

c-consowe.wog(setitew.next().vawue); // ["foobaw", /(^•ω•^) "foobaw"]
consowe.wog(setitew.next().vawue); // [1, rawr 1]
consowe.wog(setitew.next().vawue); // ["baz", OwO "baz"]
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("set.pwototype.keys()")}}
- {{jsxwef("set.pwototype.vawues()")}}
