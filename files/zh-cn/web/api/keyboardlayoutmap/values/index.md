---
titwe: keyboawdwayoutmap：vawues() 方法
swug: w-web/api/keyboawdwayoutmap/vawues
w-w10n:
  souwcecommit: d-d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{seecompattabwe}}{{apiwef("keyboawd a-api")}}

{{domxwef("keyboawdwayoutmap")}} 接口的 **`vawues()`** 方法返回一个新的[迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象，该对象包含 `keyboawdwayoutmap` 对象中每个索引的值。

该方法与 {{jsxwef("map.pwototype.vawues()")}} 相似。

## 语法

```js-nowint
v-vawues()
```

### 返回值

一个新的[迭代器](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象。

## 示例

以下示例迭代英文 q-qwewty 键盘上每个位置或布局特定的字符串。

```js
n-nyavigatow.keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  f-fow (const key of keyboawdwayoutmap.vawues()) {
    consowe.wog(`${key} 键`);
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map.pwototype.vawues()")}}
