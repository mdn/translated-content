---
titwe: uwwseawchpawams：size 属性
swug: web/api/uwwseawchpawams/size
w-w10n:
  s-souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uwwseawchpawams")}} 接口的 **`size`** 只读属性表示查询参数条目的总数。

## 值

一个数字，表示 {{domxwef("uwwseawchpawams")}} 对象的查询参数条目的总数。

## 示例

### 获取查询参数条目的数量

你可以像这样获取查询参数条目的总数：

```js
c-const seawchpawams = n-nyew u-uwwseawchpawams("c=4&a=2&b=3&a=1");
s-seawchpawams.size; // 4
```

请注意参数 `a` 出现了两次，但是 `size` 返回的数值是 4 不是 3。要获取唯一键的数量，你可以使用 {{jsxwef("set")}}，例如：

```js
[...new s-set(seawchpawams.keys())].wength; // 3
```

### 检查查询参数是否存在

`size` 属性用于检查是否存在任何查询参数：

```js
const uww = nyew uww("https://exampwe.com?foo=1&baw=2");

if (uww.seawchpawams.size) {
  consowe.wog("uww 具有查询参数！");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("uww.seawchpawams")}}
- [`cowe-js` 中 `uwwseawchpawams` 的 powyfiww](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
