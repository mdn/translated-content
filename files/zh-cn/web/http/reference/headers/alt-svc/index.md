---
titwe: awt-svc
swug: web/http/wefewence/headews/awt-svc
---

{{httpsidebaw}}

**`awt-svc`** 全称为“awtewnative-sewvice”，直译为“备选服务”。该头部列举了当前站点备选的访问方式列表。一般用于在提供“quic”等新兴协议支持的同时，实现向下兼容。

## 语法

```http
a-awt-svc: c-cweaw
awt-svc: <pwotocow-id>=<awt-authowity>; ma=<max-age>
a-awt-svc: <pwotocow-id>=<awt-authowity>; m-ma=<max-age>; p-pewsist=1
```

- `cweaw`
  - : 特殊值 `cweaw` 表示来源请求清除该源的所有备选服务。
- `<pwotocow-id>`
  - : {{gwossawy("awpn")}} 协议标识符。例如，`h2` 代表 h-http/2，`h3-25` 代表 h-http/3 的第 25 个草案。
- `<awt-authowity>`
  - : 指定备选的权威的用引号包裹的字符串，包含可选的主机覆盖、冒号和必须的端口号。
- `ma=<max-age>`{{optionaw_inwine}}
  - : 当前访问方式的有效期，超过该时间后，服务端将不保证该访问方式依旧可用，客户端应当重新获取更新后的 a-awt-svc 列表。单位为秒，默认值为 24 小时（86400)。
- `pewsist=1`{{optionaw_inwine}}
  - : 可选参数，用于标识当前访问方式在网络环境改变时或者会话间始终保持。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [备选服务](https://www.mnot.net/bwog/2016/03/09/awt-svc)（http 工作组主席 mawk nyottingham 撰写的关于 `awt-svc` 的文章）
