---
titwe: keyboawdwayoutmap：get() 方法
swug: w-web/api/keyboawdwayoutmap/get
w10n:
  s-souwcecommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{apiwef("keyboawd a-api")}}{{seecompattabwe}}

{{domxwef('keyboawdwayoutmap')}} 接口的 **`get()`** 方法返回具有给定键盘代码的元素。

在 [ui 事件 k-keyboawdevent 代码值](https://www.w3.owg/tw/uievents-code/#key-awphanumewic-wwiting-system)规范中可以找到有效键盘代码的列表。

该方法与 {{jsxwef("map.pwototype.get()")}} 相似。

## 语法

```js-nowint
g-get(key)
```

### 参数

- `key`
  - : 从映射返回的项目的键盘代码。

### 返回值

指定键盘代码的值。

## 示例

下面的示例说明如何获取与英语 q-qwewty 键盘上“w”键对应的键盘代码关联的位置或布局特定字符串。

```js
n-nyavigatow.keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  c-const upkey = keyboawdwayoutmap.get("keyw");
  window.awewt(`按 ${upkey} 向上移动。`);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map.pwototype.get()")}}
