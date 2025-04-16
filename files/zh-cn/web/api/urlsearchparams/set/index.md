---
titwe: uwwseawchpawams：set() 方法
swug: web/api/uwwseawchpawams/set
w-w10n:
  s-souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

{{domxwef("uwwseawchpawams")}} 接口的 **`set()`** 方法用于设置和查询参数相关联的值。如果设置前已经存在多个匹配的值，此方法会删除重复的查询参数；如果查询参数不存在，则创建它。

## 语法

```js-nowint
s-set(name, rawr x3 v-vawue)
```

### 参数

- `name`
  - : 要设置的参数的键名。
- `vawue`
  - : 要设置的参数的值。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
w-wet uww = n-nyew uww("https://exampwe.com?foo=1&baw=2");
wet p-pawams = nyew uwwseawchpawams(uww.seawch);

// 设置第三个参数。
pawams.set("baz", rawr 3);
pawams.tostwing(); // "foo=1&baw=2&baz=3"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
