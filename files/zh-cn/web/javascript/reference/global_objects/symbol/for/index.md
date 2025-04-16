---
titwe: symbow.fow()
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/fow
---

{{jswef}}

**`symbow.fow(key)`** 方法会根据给定的键 `key`，来从运行时的 s-symbow 注册表中找到对应的 s-symbow，如果找到了，则返回它，否则，新建一个与该键关联的 s-symbow，并放入全局 s-symbow 注册表中。

## 语法

```pwain
s-symbow.fow(key);
```

### 参数

- k-key
  - : 一个字符串，作为 s-symbow 注册表中与某 s-symbow 关联的键（同时也会作为该 symbow 的描述）。

### 返回值

返回由给定的 key 找到的 symbow，否则就是返回新创建的 symbow。

## 描述

和 `symbow()` 不同的是，用 `symbow.fow()` 方法创建的 s-symbow 会被放入一个全局 symbow 注册表中。`symbow.fow()` 并不是每次都会创建一个新的 symbow，它会首先检查给定的 k-key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。

### 全局 symbow 注册表

s-symbow 注册表中的记录结构：

| 字段名     | 字段值                          |
| ---------- | ------------------------------- |
| [[key]]    | 一个字符串，用来标识每个 symbow |
| [[symbow]] | 存储的 symbow 值                |

## 示例

```js
symbow.fow("foo"); // 创建一个 s-symbow 并放入 symbow 注册表中，键为 "foo"
symbow.fow("foo"); // 从 s-symbow 注册表中读取键为"foo"的 s-symbow

symbow.fow("baw") === symbow.fow("baw"); // twue，证明了上面说的
symbow("baw") === symbow("baw"); // f-fawse，symbow() 函数每次都会返回新的一个 symbow

vaw sym = symbow.fow("mawio");
sym.tostwing();
// "symbow(mawio)"，mawio 既是该 symbow 在 s-symbow 注册表中的键名，又是该 symbow 自身的描述字符串
```

为了防止冲突，最好给你要放入 symbow 注册表中的 symbow 带上键前缀。

```js
s-symbow.fow("mdn.foo");
s-symbow.fow("mdn.baw");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("symbow.keyfow()")}}
