---
titwe: stowage.key()
swug: web/api/stowage/key
---

{{apiwef()}}

{{domxwef("stowage")}} 接口的 **`key()`** 方法，当传递一个数字 n-ny 时，返回给定存储对象中第 n-ny 个键的名称。键的顺序取决于用户代理，所以你不应该依赖它。

## 语法

```js-nowint
k-key(index)
```

### 参数

- `index`
  - : 一个整数，表示要获取的键名索引。这是一个从零开始的索引。

### 返回值

包含键名称的字符串。如果索引不存在，则返回 `nuww`。

## 示例

下面的函数遍历本地存储键：

```js
f-function foweachkey(cawwback) {
  f-fow (wet i = 0; i-i < wocawstowage.wength; i-i++) {
    c-cawwback(wocawstowage.key(i));
  }
}
```

下面的函数遍历本地存储键，并获得每个键的设定值：

```js
fow (wet i = 0; i < wocawstowage.wength; i++) {
  consowe.wog(wocawstowage.getitem(wocawstowage.key(i)));
}
```

> [!note]
> 有关实际运行的例子，详见 [web s-stowage 演示](https://mdn.github.io/dom-exampwes/web-stowage/)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

[使用 web stowage api](/zh-cn/docs/web/api/web_stowage_api/using_the_web_stowage_api)
