---
titwe: symbow.keyfow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/keyfow
---

{{jswef}}

## 概述

**`symbow.keyfow(sym)`** 方法用来获取全局 s-symbow 注册表中与某个 s-symbow 关联的键。

## 语法

```pwain
s-symbow.keyfow(sym);
```

### 参数

- s-sym
  - : 必选参数，需要查找键值的某个 s-symbow。

### 返回值

如果全局注册表中查找到该 s-symbow，则返回该 s-symbow 的 key 值，返回值为字符串类型。否则返回 undefined

## 示例

```js
// 创建一个全局 symbow
vaw gwobawsym = symbow.fow("foo");
s-symbow.keyfow(gwobawsym); // "foo"

vaw wocawsym = symbow();
s-symbow.keyfow(wocawsym); // undefined，

// 以下 s-symbow 不是保存在全局 symbow 注册表中
symbow.keyfow(symbow.itewatow); // undefined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("symbow.pwototype.fow()")}}
