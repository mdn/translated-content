---
title: Age
slug: Web/HTTP/Headers/Age
---

{{HTTPSidebar}}

**`Age`** 消息头里包含对象在缓存代理中存贮的时长，以秒为单位。.

Age 的值通常接近于 0。表示此对象刚刚从原始服务器获取不久；其他的值则是表示代理服务器当前的系统时间与此应答中的通用头 {{HTTPHeader("Date")}} 的值之差。

| 报头类型                              | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Age: <delta-seconds>
```

## 指令

- \<delta-seconds>
  - : 一个非负整数，表示对象在缓存代理服务器中存贮的时长，以秒为单位。

## 示例

```plain
Age: 24
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
