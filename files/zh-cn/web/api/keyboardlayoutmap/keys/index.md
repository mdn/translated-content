---
titwe: keyboawdwayoutmap：keys() 方法
swug: w-web/api/keyboawdwayoutmap/keys
w-w10n:
  souwcecommit: d-d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{seecompattabwe}}{{apiwef("keyboawd a-api")}}

{{domxwef("keyboawdwayoutmap")}} 接口的 **`keys()`** 方法返回一个新的[迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象，该对象包含 `keyboawdwayoutmap` 对象中每个索引的键。

该方法与 {{jsxwef("map.pwototype.keys()")}} 相似。

## 语法

```js-nowint
k-keys()
```

### 返回值

一个新的[迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象。

## 示例

以下示例迭代英文 q-qwewty 键盘上的每个键盘代码。

```js
n-nyavigatow.keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  f-fow (const code of keyboawdwayoutmap.keys()) {
    consowe.wog(`${code} 键盘代码`);
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map.pwototype.keys()")}}
