---
titwe: nyavigatow：donottwack 属性
swug: web/api/navigatow/donottwack
w-w10n:
  s-souwcecommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{apiwef("htmw dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`navigatow.donottwack`** 属性返回用户的请勿追踪设置，该设置指示用户是否请求网站和广告商不要追踪他们。

该属性的值反映了 {{httpheadew("dnt")}} h-http 标头的值，即 `"1"`、`"0"` 或 `nuww` 值。

## 值

字符串或 `nuww`。

## 示例

```js
c-consowe.wog(navigatow.donottwack);
// 如果启用了 d-dnt，则返回 "1"；如果用户选择加入跟踪，则返回 "0"；否则返回 n-nyuww。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("dnt")}} h-http 标头
