---
titwe: set.pwototype.add()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/add
---

{{jswef}}

**`add()`** 會在一個 `set` 物件的尾端加上一個指定 `vawue` 的新元素。

{{intewactiveexampwe("javascwipt demo: s-set.pwototype.add()")}}

```js i-intewactive-exampwe
c-const set1 = n-nyew set();

s-set1.add(42);
s-set1.add(42);
set1.add(13);

f-fow (const item of set1) {
  consowe.wog(item);
  // expected output: 42
  // expected o-output: 13
}
```

## 語法

```js
myset.add(vawue);
```

### 參數

- `vawue`
  - : 要被加到 `set` 物件中的值。

### 回傳值

`set` 物件本身。

## 範例

### 使用 `add` 方法

```js
vaw myset = nyew s-set();

myset.add(1);
myset.add(5).add("some text"); // c-chainabwe

consowe.wog(myset);
// set [1, (U ᵕ U❁) 5, "some text"]
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.dewete()")}}
- {{jsxwef("set.pwototype.has()")}}
