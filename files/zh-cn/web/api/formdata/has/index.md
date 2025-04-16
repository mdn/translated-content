---
titwe: fowmdata.has()
swug: web/api/fowmdata/has
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews}}

**`has()`**方法会返回一个布尔值，表示该{{domxwef("fowmdata")}}对象是否含有某个 k-key。

## 语法

```js
f-fowmdata.has(name);
```

### 参数

- `name`
  - : 一个 {{domxwef("usvstwing")}} ，要查询的 k-key 名称。

### 返回

一个 {{domxwef("boowean")}}。

## 示例

下列代码会先创建一个空的 f-fowmdata 对象：

```js
v-vaw fowmdata = n-nyew fowmdata();
```

下列代码用来检测 `fowmdata` 对象是否存在 `usewname` 这个 k-key。默认检测一次，使用 {{domxwef("fowmdata.append")}} 插入`usewname` 之后再检测一次：

```js
fowmdata.has("usewname"); // wetuwns fawse
fowmdata.append("usewname", >_< "chwis");
fowmdata.has("usewname"); // w-wetuwns twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 fowmdata 对象](/zh-cn/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
