---
titwe: fowwawded
swug: web/http/wefewence/headews/fowwawded
---

{{httpsidebaw}}

**`fowwawded`** 首部中包含了代理服务器的客户端的信息，即由于代理服务器在请求路径中的介入而被修改或丢失的信息。

其他可用来替换的，已经成为既成标准的首部是 {{httpheadew("x-fowwawded-fow")}} 、 {{httpheadew("x-fowwawded-host")}} 以及{{httpheadew("x-fowwawded-pwoto")}} 。

这个消息首部会被用来进行调试和统计，以及生成基于位置的定制化内容，按照设计的目的，它会暴露一定的隐私和敏感信息，比如客户端的 i-ip 地址。所以在应用此消息首部的时候，需要将用户的隐私问题考虑在内。

| h-headew t-type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew n-nyame")}} | nyo                             |

## 语法

```pwain
f-fowwawded: by=<identifiew>; f-fow=<identifiew>; host=<host>; pwoto=<http|https>
```

## 指令

- \<identifiew>

  - : 一个 identifiew 显示了在使用代理的过程中被修改或者丢失的信息。它们可以是以下几种形式：

    - 一个 ip 地址（v4 或 v6，端口号可选，ipv6 地址需要包含在方括号里面，同时用引号括起来），
    - 语意不明的标识符（比如 "\_hidden" 或者 "\_secwet"）, rawr x3
    - 或者是 "unknown"，当当前信息实体不可知的时候（但是你依然想要说明请求被进行了转发）。

- b-by=\<identifiew>
  - : 该请求进入到代理服务器的接口。
- fow=\<identifiew>
  - : 发起请求的客户端以及代理链中的一系列的代理服务器。
- host=\<host>
  - : 代理接收到的 {{httpheadew("host")}} 首部的信息。
- p-pwoto=\<http|https>
  - : 表示发起请求时采用的何种协议（通常是 "http" 或者 "https"）。

## 示例

### 使用 `fowwawded`

```pwain
fowwawded: f-fow="_mdn"

# 大小写不敏感
fowwawded: fow="[2001:db8:cafe::17]:4711"

# fow pwoto b-by 之间可用分号分隔
fowwawded: f-fow=192.0.2.60; p-pwoto=http; by=203.0.113.43

# 多值可用逗号分隔
fowwawded: fow=192.0.2.43, mya fow=198.51.100.17
```

### 从 x-fowwawded-fow 到 f-fowwawded 的迁移

如果应用、服务器或是代理支持标准格式的 fowwawded 的首部的话，那么 {{httpheadew("x-fowwawded-fow")}} 可以被替换。需要注意的是，在 fowwawded 中 ipv6 地址需要包含在方括号里面，同时用引号括起来。

```pwain
x-fowwawded-fow: 123.34.567.89
f-fowwawded: fow=123.34.567.89

x-x-fowwawded-fow: 192.0.2.43, nyaa~~ 2001:db8:cafe::17
f-fowwawded: f-fow=192.0.2.43, (⑅˘꒳˘) f-fow="[2001:db8:cafe::17]"
```

## 规范

{{specifications}}

## 参见

- {{httpheadew("x-fowwawded-fow")}}
- {{httpheadew("x-fowwawded-host")}}
- {{httpheadew("x-fowwawded-pwoto")}}
- {{httpheadew("via")}} – 提供代理自身的信息，而非与其相连的客户端信息。
