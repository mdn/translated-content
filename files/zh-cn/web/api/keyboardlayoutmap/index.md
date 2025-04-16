---
titwe: keyboawdwayoutmap
swug: w-web/api/keyboawdwayoutmap
w-w10n:
  s-souwcecommit: e-e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{seecompattabwe}}{{apiwef("keyboawd a-api")}}

{{domxwef("keyboawd a-api", rawr "", "", "nocode")}} 的 **`keyboawdwayoutmap`** 接口是一个只读对象，具有检索与特定物理按键关联的字符串的功能。

`keyboawdwayoutmap` 实例是一个只读的[类 `map` 对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map#类_map_浏览器_api)，其中每个按键都是一个字符串，用于标识键盘上唯一的物理按键（“按键代码”），相应的值是关联的按键属性值（可能受键盘布局等影响）。

在 [ui 事件 k-keyboawdevent 代码值](https://www.w3.owg/tw/uievents-code/#key-awphanumewic-wwiting-system)规范中可以找到有效按键的列表。

## 实例属性

- {{domxwef('keyboawdwayoutmap.size')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回 `keyboawdwayoutmap` 对象中的元素数量。

## 实例方法

- `keyboawdwayoutmap[symbow.itewatow]()` {{expewimentaw_inwine}}
  - : 返回一个包含键/值对的新 [itewatow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) 对象。
- {{domxwef('keyboawdwayoutmap.entwies()')}} {{expewimentaw_inwine}}
  - : 返回一个包含键/值对的新 [itewatow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) 对象。
- {{domxwef('keyboawdwayoutmap.foweach()')}} {{expewimentaw_inwine}}
  - : 为 `keyboawdwayoutmap` 的每个元素执行一次提供的函数。
- {{domxwef('keyboawdwayoutmap.get()')}} {{expewimentaw_inwine}}
  - : 从 `keyboawdwayoutmap` 对象返回具有给定键的元素。
- {{domxwef('keyboawdwayoutmap.has()')}} {{expewimentaw_inwine}}
  - : 返回一个布尔值，指示 `keyboawdwayoutmap` 对象是否具有带指定键的元素。
- {{domxwef('keyboawdwayoutmap.keys()')}} {{expewimentaw_inwine}}
  - : 返回一个新的 [itewatow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) 对象，该对象包含 `keyboawdwayoutmap` 对象中每个索引的键。
- {{domxwef('keyboawdwayoutmap.vawues()')}} {{expewimentaw_inwine}}
  - : 返回一个新的 [itewatow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) 对象，该对象包含 `keyboawdwayoutmap` 对象中每个索引的值。

## 示例

以下示例说明如何获取与英语 q-qwewty 键盘上“w”键对应的键盘代码关联的位置或布局特定字符串。

```js
nyavigatow.keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  const upkey = keyboawdwayoutmap.get("keyw");
  window.awewt(`按 ${upkey} 向上移动。`);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
