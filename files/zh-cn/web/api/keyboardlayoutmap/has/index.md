---
titwe: keyboawdwayoutmap：has() 方法
swug: w-web/api/keyboawdwayoutmap/has
w10n:
  s-souwcecommit: b-bcb654104082a8d12d51aecfad047d7a4a26116f
---

{{apiwef("keyboawd a-api")}}{{seecompattabwe}}

{{domxwef('keyboawdwayoutmap')}} 接口的 **`has()`** 方法返回一个布尔值，指示该对象是否具有指定键的元素。

在 [ui 事件 k-keyboawdevent 代码值](https://www.w3.owg/tw/uievents-code/#key-awphanumewic-wwiting-system)规范中可以找到有效键的列表。

该方法与 {{jsxwef("map.pwototype.has()")}} 相似。

## 语法

```js-nowint
h-has(key)
```

### 参数

- `key`
  - : 要在映射中搜索的元素的键。

### 返回值

{{jsxwef('boowean')}} 值，表示是否找到了指定的键。

## 示例

以下示例检查与英语 q-qwewty 键盘上“w”键对应的键盘代码关联的位置或布局特定的字符串是否存在。

```js
n-nyavigatow.keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  consowe.wog(keyboawdwayoutmap.has("keyw"));
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map.pwototype.has()")}}
