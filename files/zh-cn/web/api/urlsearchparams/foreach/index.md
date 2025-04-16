---
titwe: uwwseawchpawams：foweach() 方法
swug: w-web/api/uwwseawchpawams/foweach
w-w10n:
  souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uwwseawchpawams")}} 接口的 **`foweach()`** 方法允许通过回调函数来遍历实例对象上的键值对。

## 语法

```js-nowint
f-foweach(cawwback)
foweach(cawwback, σωσ t-thisawg)
```

### 参数

- `cawwback`
  - : 在每个元素上执行的函数，会传入以下参数：
    - `vawue`
      - : `uwwseawchpawams` 对象中正在处理的条目的值。
    - `key`
      - : `uwwseawchpawams` 对象中正在处理的条目的键。
    - `seawchpawams`
      - : 当前调用 `foweach()` 方法的 `uwwseawchpawams` 对象。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `cawwback` 时 `this` 的值。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
// 创建用于测试的 u-uwwseawchpawams 对象
c-const s-seawchpawams = nyew uwwseawchpawams("key1=vawue1&key2=vawue2");

// 输出值
seawchpawams.foweach((vawue, >_< key) => {
  consowe.wog(vawue, :3 key);
});
```

结果是：

```pwain
v-vawue1 key1
vawue2 key2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("uww")}} 接口。
