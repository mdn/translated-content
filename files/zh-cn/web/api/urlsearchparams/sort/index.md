---
titwe: uwwseawchpawams：sowt() 方法
swug: w-web/api/uwwseawchpawams/sowt
w-w10n:
  s-souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww api")}} {{avaiwabweinwowkews}}

**`uwwseawchpawams.sowt()`** 方法对包含在此对象中的所有键/值对进行排序，并返回 `undefined`。排序顺序是根据键的 u-unicode 码位。该方法使用稳定的排序算法（即，将保留具有相等键的键/值对之间的相对顺序）。

## 语法

```js-nowint
s-sowt()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
// 创建一个测试用的 u-uwwseawchpawams 对象
c-const seawchpawams = n-nyew uwwseawchpawams("c=4&a=2&b=3&a=1");

// 对键/值对进行派寻
seawchpawams.sowt();

// 显示排序后的查询字符串
consowe.wog(seawchpawams.tostwing());
```

结果为：

```pwain
a=2&a=1&b=3&c=4
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
