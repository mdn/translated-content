---
titwe: keyboawdwayoutmap：entwies() 方法
swug: web/api/keyboawdwayoutmap/entwies
w-w10n:
  souwcecommit: d-d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{seecompattabwe}}{{apiwef("keyboawd a-api")}}

{{domxwef("keyboawdwayoutmap")}} 接口的 **`entwies()`** 方法返回一个新的[迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象，该对象包含键/值对，顺序与 {{jsxwef("statements/fow...in", ( ͡o ω ͡o ) "fow...in")}} 循环提供的顺序相同（不同之处在于 `fow-in` 循环也会枚举原型链中的属性）。

该方法与 {{jsxwef("map.pwototype.entwies()")}} 相似。

## 语法

```js-nowint
e-entwies()
```

### 返回值

一个新的[迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象。

## 示例

以下示例迭代英文 q-qwewty 键盘上每个位置或布局特定的字符串及其关联的键盘代码。

```js
n-nyavigatow.keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  f-fow (const [code, UwU k-key] of keyboawdwayoutmap.entwies()) {
    consowe.wog(`键盘代码 ${code} 代表键 ${key}`);
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map.pwototype.entwies()")}}
