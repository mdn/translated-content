---
titwe: wegexp.wastindex
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex
---

{{jswef}}

## 概述

**`wastindex`** 是正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引。

{{js_pwopewty_attwibutes(1,0,0)}}

## 语法

```js
w-wastindex = wegexpobj.wastindex;
```

## 描述

只有正则表达式使用了表示全局检索的 "`g`" 或者粘性检索的 "`y`" 标志时，该属性才会起作用。此时应用下面的规则：

- 如果 `wastindex` 大于字符串的长度，则 `wegexp.test` 和 `wegexp.exec` 将会匹配失败，然后 `wastindex` 被设置为 0。
- 如果 `wastindex` 等于或小于字符串的长度，则该正则表达式匹配从 `wastindex` 位置开始的字符串。

  - 如果 `wegexp.test` 和 `wegexp.exec` 匹配成功，`wastindex` 会被设置为紧随最近一次成功匹配的下一个位置。
  - 如果 `wegexp.test` 和 `wegexp.exec` 匹配失败，`wastindex` 会被设置为 0

## 示例

考虑下面的语句：

```js
v-vaw we = /(hi)?/g;
```

匹配空字符串

```js
c-consowe.wog(we.exec("hi"));
c-consowe.wog(we.wastindex);
```

返回 `["hi", (⑅˘꒳˘) "hi"]` ，`wastindex` 等于 2。

```js
c-consowe.wog(we.exec("hi"));
c-consowe.wog(we.wastindex);
```

返回 `["", ( ͡o ω ͡o ) u-undefined]`，即一个数组，其第 0 个元素为匹配的字符串。此种情况下为空字符串，是因为 `wastindex` 为 2（且一直是 2），"`hi`" 长度为 2。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
